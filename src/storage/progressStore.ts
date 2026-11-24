import {
  CURRENT_STORAGE_SCHEMA_VERSION,
  UserProgressSchema,
  type ActiveExamSession,
  type ExamAttempt,
  type FlashcardConfidence,
  type UserPreferences,
  type UserProgress
} from '../types';

export const STORAGE_KEY = 'security-plus-study-hub:v1';

export function createDefaultProgress(): UserProgress {
  return {
    schemaVersion: CURRENT_STORAGE_SCHEMA_VERSION,
    completedLessonIds: [],
    bookmarkedLessonIds: [],
    completedStudyDays: [],
    flashcardProgress: {},
    questionHistory: {},
    examAttempts: [],
    activeExamSession: null,
    preferences: {
      theme: 'light',
      showThaiTranslation: true,
      fontSize: 'normal'
    }
  };
}

/**
 * Migrates older schema versions forward to CURRENT_STORAGE_SCHEMA_VERSION safely.
 */
export function migrateProgress(raw: unknown): unknown {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) {
    return raw;
  }
  const obj = raw as Record<string, unknown>;
  const version = typeof obj.schemaVersion === 'number' ? obj.schemaVersion : 0;

  if (version === 0) {
    // Legacy v0 fallback: fill missing defaults while preserving known arrays/maps
    return {
      ...createDefaultProgress(),
      ...obj,
      schemaVersion: CURRENT_STORAGE_SCHEMA_VERSION
    };
  }

  return obj;
}

export interface StorageLoadResult {
  progress: UserProgress;
  warning: string | null;
  corruptedRawBackup?: string;
}

export function loadProgress(storage: Storage | null = getSafeLocalStorage()): StorageLoadResult {
  if (!storage) {
    return {
      progress: createDefaultProgress(),
      warning:
        'เบราว์เซอร์ไม่อนุญาตให้เข้าถึง LocalStorage (เช่น โหมด Private หรือตั้งค่าปิดการจัดเก็บข้อมูล) ความคืบหน้าจะไม่ถูกบันทึกถาวร'
    };
  }

  try {
    const rawText = storage.getItem(STORAGE_KEY);
    if (!rawText) {
      return { progress: createDefaultProgress(), warning: null };
    }
    const parsedJson: unknown = JSON.parse(rawText);
    const migrated = migrateProgress(parsedJson);
    const validated = UserProgressSchema.safeParse(migrated);
    if (!validated.success) {
      return {
        progress: createDefaultProgress(),
        warning:
          'ตรวจพบข้อมูลความคืบหน้าที่เก็บไว้ในเบราว์เซอร์ไม่สมบูรณ์หรือเสียหาย ระบบจึงเริ่มต้นสถานะใหม่เพื่อความปลอดภัย (คุณสามารถนำเข้าไฟล์สำรอง JSON ได้ในหน้าตั้งค่า)',
        corruptedRawBackup: rawText
      };
    }
    return { progress: validated.data, warning: null };
  } catch {
    return {
      progress: createDefaultProgress(),
      warning:
        'ไม่สามารถอ่านข้อมูลความคืบหน้าจากเบราว์เซอร์ได้ (JSON เสียหายหรือถูกจำกัดสิทธิ์) ระบบจึงใช้สถานะเริ่มต้นชั่วคราว'
    };
  }
}

export interface StorageSaveResult {
  ok: boolean;
  errorMessage: string | null;
}

export function saveProgress(
  progress: UserProgress,
  storage: Storage | null = getSafeLocalStorage()
): StorageSaveResult {
  const validated = UserProgressSchema.safeParse(progress);
  if (!validated.success) {
    return {
      ok: false,
      errorMessage: 'ข้อมูลความคืบหน้าไม่ผ่านการตรวจสอบโครงสร้าง จึงไม่สามารถบันทึกได้'
    };
  }
  if (!storage) {
    return {
      ok: false,
      errorMessage:
        'ไม่สามารถบันทึกความคืบหน้าได้เนื่องจากเบราว์เซอร์ปิดการใช้งาน LocalStorage กรุณาส่งออกข้อมูลเป็นไฟล์ JSON เพื่อสำรองไว้'
    };
  }

  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(validated.data));
    return { ok: true, errorMessage: null };
  } catch {
    return {
      ok: false,
      errorMessage:
        'ไม่สามารถบันทึกข้อมูลลงในเบราว์เซอร์ได้ (พื้นที่เก็บข้อมูลอาจเต็มหรือถูกจำกัดสิทธิ์) กรุณาส่งออกไฟล์ JSON เพื่อสำรองความคืบหน้า'
    };
  }
}

export function clearStoredProgress(storage: Storage | null = getSafeLocalStorage()): void {
  if (!storage) return;
  try {
    storage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage removal errors
  }
}

export interface ExportPayload {
  app: 'security-plus-study-hub';
  examCode: 'SY0-701';
  exportedAt: string;
  progress: UserProgress;
}

/**
 * Exports clean JSON containing strictly learning progress (never tokens or credentials).
 */
export function exportProgressJson(progress: UserProgress, nowIso = new Date().toISOString()): string {
  const validated = UserProgressSchema.parse(progress);
  const payload: ExportPayload = {
    app: 'security-plus-study-hub',
    examCode: 'SY0-701',
    exportedAt: nowIso,
    progress: validated
  };
  return JSON.stringify(payload, null, 2);
}

export function parseImportedProgressJson(rawJson: string): {
  ok: true;
  progress: UserProgress;
} | {
  ok: false;
  errorTh: string;
} {
  if (rawJson.length > 5_000_000) {
    return { ok: false, errorTh: 'ไฟล์นำเข้ามีขนาดใหญ่เกินกว่าที่กำหนด (สูงสุด 5 MB)' };
  }
  try {
    const parsed: unknown = JSON.parse(rawJson);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return { ok: false, errorTh: 'โครงสร้างไฟล์ JSON ไม่ถูกต้อง (ต้องเป็น JSON Object)' };
    }
    const obj = parsed as Record<string, unknown>;
    if ('app' in obj && obj.app !== 'security-plus-study-hub') {
      return { ok: false, errorTh: 'ไฟล์นี้ไม่ใช่ข้อมูลสำรองของ Security+ Study Hub' };
    }
    const candidate = 'progress' in obj && obj.progress !== undefined ? obj.progress : obj;
    if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) {
      return { ok: false, errorTh: 'โครงสร้างข้อมูล progress ภายในไฟล์ไม่ถูกต้อง' };
    }
    const candObj = candidate as Record<string, unknown>;
    const hasKnownShape =
      typeof candObj.schemaVersion === 'number' ||
      Array.isArray(candObj.completedLessonIds) ||
      Array.isArray(candObj.examAttempts);
    if (!hasKnownShape) {
      return {
        ok: false,
        errorTh: 'ไม่พบข้อมูลความคืบหน้าที่รองรับ (ขาด schemaVersion หรือโครงสร้างหลัก)'
      };
    }

    const migrated = migrateProgress(candidate);
    const validated = UserProgressSchema.safeParse(migrated);
    if (!validated.success) {
      return {
        ok: false,
        errorTh: 'ข้อมูลภายในไฟล์ JSON ไม่ตรงตามรูปแบบของ Security+ Study Hub'
      };
    }
    return { ok: true, progress: validated.data };
  } catch {
    return { ok: false, errorTh: 'ไม่สามารถอ่านไฟล์ JSON ได้ กรุณาตรวจสอบรูปแบบไฟล์' };
  }
}

export function getSafeLocalStorage(): Storage | null {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return null;
    }
    const testKey = '__storage_probe__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return window.localStorage;
  } catch {
    return null;
  }
}

export function recordQuestionAttempt(
  progress: UserProgress,
  params: {
    questionId: string;
    isCorrect: boolean;
    source: 'practice' | 'mock';
    answeredAtIso: string;
  }
): UserProgress {
  const prev = progress.questionHistory[params.questionId];
  return {
    ...progress,
    questionHistory: {
      ...progress.questionHistory,
      [params.questionId]: {
        questionId: params.questionId,
        attempts: (prev?.attempts ?? 0) + 1,
        correctCount: (prev?.correctCount ?? 0) + (params.isCorrect ? 1 : 0),
        seenInPractice: (prev?.seenInPractice ?? false) || params.source === 'practice',
        seenInMock: (prev?.seenInMock ?? false) || params.source === 'mock',
        lastResultCorrect: params.isCorrect,
        lastAnsweredAt: params.answeredAtIso
      }
    }
  };
}

export function toggleLessonCompletion(progress: UserProgress, lessonId: string): UserProgress {
  const exists = progress.completedLessonIds.includes(lessonId);
  return {
    ...progress,
    completedLessonIds: exists
      ? progress.completedLessonIds.filter((id) => id !== lessonId)
      : [...progress.completedLessonIds, lessonId]
  };
}

export function toggleLessonBookmark(progress: UserProgress, lessonId: string): UserProgress {
  const exists = progress.bookmarkedLessonIds.includes(lessonId);
  return {
    ...progress,
    bookmarkedLessonIds: exists
      ? progress.bookmarkedLessonIds.filter((id) => id !== lessonId)
      : [...progress.bookmarkedLessonIds, lessonId]
  };
}

export function toggleStudyDayCompletion(progress: UserProgress, day: number): UserProgress {
  const exists = progress.completedStudyDays.includes(day);
  return {
    ...progress,
    completedStudyDays: exists
      ? progress.completedStudyDays.filter((d) => d !== day)
      : [...progress.completedStudyDays, day].sort((a, b) => a - b)
  };
}

export function setFlashcardConfidence(
  progress: UserProgress,
  cardId: string,
  confidence: FlashcardConfidence
): UserProgress {
  return {
    ...progress,
    flashcardProgress: {
      ...progress.flashcardProgress,
      [cardId]: confidence
    }
  };
}

export function updatePreferences(
  progress: UserProgress,
  patch: Partial<UserPreferences>
): UserProgress {
  return {
    ...progress,
    preferences: {
      ...progress.preferences,
      ...patch
    }
  };
}

export function saveExamSubmission(
  progress: UserProgress,
  attempt: ExamAttempt,
  session: ActiveExamSession
): UserProgress {
  // Prevent duplicate attempt recording
  const alreadyExists = progress.examAttempts.some((a) => a.attemptId === attempt.attemptId);
  if (alreadyExists) {
    return {
      ...progress,
      activeExamSession: null
    };
  }

  const updatedHistory = { ...progress.questionHistory };
  const iso = new Date(attempt.submittedAt).toISOString();
  for (const item of attempt.itemResults) {
    const prev = updatedHistory[item.itemId];
    updatedHistory[item.itemId] = {
      questionId: item.itemId,
      attempts: (prev?.attempts ?? 0) + 1,
      correctCount: (prev?.correctCount ?? 0) + (item.isCorrect ? 1 : 0),
      seenInPractice: prev?.seenInPractice ?? false,
      seenInMock: true,
      lastResultCorrect: item.isCorrect,
      lastAnsweredAt: iso
    };
  }

  // Keep activeExamSession null after grading so user goes cleanly to Exam Results
  void session;
  return {
    ...progress,
    questionHistory: updatedHistory,
    examAttempts: [attempt, ...progress.examAttempts],
    activeExamSession: null
  };
}
