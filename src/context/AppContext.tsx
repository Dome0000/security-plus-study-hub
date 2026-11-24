import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from 'react';
import type { ContentBundle } from '../../scripts/validate-content';
import { loadActiveContentBundle } from '../data/dataSource';
import { EXAM_METADATA } from '../data/examMeta';
import {
  clearStoredProgress,
  createDefaultProgress,
  loadProgress,
  recordQuestionAttempt,
  saveExamSubmission,
  saveProgress,
  setFlashcardConfidence,
  toggleLessonBookmark,
  toggleLessonCompletion,
  toggleStudyDayCompletion,
  updatePreferences
} from '../storage';
import type {
  ActiveExamSession,
  DomainId,
  ExamAttempt,
  FlashcardConfidence,
  Lesson,
  MockExamForm,
  Objective,
  PbqQuestion,
  Question,
  UserPreferences,
  UserProgress
} from '../types';

export interface AppContextValue {
  bundle: ContentBundle | null;
  loading: boolean;
  loadError: string | null;
  lessonsById: ReadonlyMap<string, Lesson>;
  questionsById: ReadonlyMap<string, Question>;
  pbqsById: ReadonlyMap<string, PbqQuestion>;
  mockFormsById: ReadonlyMap<string, MockExamForm>;
  objectivesById: ReadonlyMap<string, Objective>;
  domainWeightById: ReadonlyMap<DomainId, number>;
  progress: UserProgress;
  storageWarning: string | null;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  toggleLessonComplete: (lessonId: string) => void;
  toggleLessonBookmarkItem: (lessonId: string) => void;
  setLastLesson: (lessonId: string) => void;
  toggleStudyDay: (day: number) => void;
  rateFlashcard: (cardId: string, confidence: FlashcardConfidence) => void;
  recordPracticeAttempt: (questionId: string, isCorrect: boolean) => void;
  patchPreferences: (patch: Partial<UserPreferences>) => void;
  toggleTheme: () => void;
  toggleThaiTranslation: () => void;
  setActiveExamSession: (session: ActiveExamSession | null) => void;
  completeExamSubmission: (attempt: ExamAttempt, session: ActiveExamSession) => void;
  importProgress: (imported: UserProgress) => void;
  resetProgress: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

function applyDocumentPreferences(prefs: UserPreferences): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', prefs.theme);
  document.documentElement.setAttribute('data-font-size', prefs.fontSize);
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [initialStorage] = useState(() => {
    const loaded = loadProgress();
    applyDocumentPreferences(loaded.progress.preferences);
    return loaded;
  });

  const [progress, setProgress] = useState<UserProgress>(initialStorage.progress);
  const [storageWarning, setStorageWarning] = useState<string | null>(initialStorage.warning);
  const [bundle, setBundle] = useState<ContentBundle | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    let active = true;
    loadActiveContentBundle()
      .then((loadedBundle) => {
        if (!active) return;
        setBundle(loadedBundle);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (!active) return;
        const msg =
          err instanceof Error ? err.message : 'ไม่สามารถโหลดคลังเนื้อหาการเรียนได้';
        setLoadError(msg);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    applyDocumentPreferences(progress.preferences);
  }, [progress.preferences]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const commitProgress = useCallback((updater: (prev: UserProgress) => UserProgress) => {
    setProgress((prev) => {
      const next = updater(prev);
      if (next === prev) return prev;
      const saveResult = saveProgress(next);
      if (!saveResult.ok && saveResult.errorMessage) {
        setStorageWarning(saveResult.errorMessage);
      }
      return next;
    });
  }, []);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const toggleLessonComplete = useCallback(
    (lessonId: string) => {
      commitProgress((prev) => toggleLessonCompletion(prev, lessonId));
    },
    [commitProgress]
  );

  const toggleLessonBookmarkItem = useCallback(
    (lessonId: string) => {
      commitProgress((prev) => toggleLessonBookmark(prev, lessonId));
    },
    [commitProgress]
  );

  const setLastLesson = useCallback(
    (lessonId: string) => {
      commitProgress((prev) => {
        if (prev.lastLessonId === lessonId) return prev;
        return { ...prev, lastLessonId: lessonId };
      });
    },
    [commitProgress]
  );

  const toggleStudyDay = useCallback(
    (day: number) => {
      commitProgress((prev) => toggleStudyDayCompletion(prev, day));
    },
    [commitProgress]
  );

  const rateFlashcard = useCallback(
    (cardId: string, confidence: FlashcardConfidence) => {
      commitProgress((prev) => setFlashcardConfidence(prev, cardId, confidence));
    },
    [commitProgress]
  );

  const recordPracticeAttempt = useCallback(
    (questionId: string, isCorrect: boolean) => {
      commitProgress((prev) =>
        recordQuestionAttempt(prev, {
          questionId,
          isCorrect,
          source: 'practice',
          answeredAtIso: new Date().toISOString()
        })
      );
    },
    [commitProgress]
  );

  const patchPreferences = useCallback(
    (patch: Partial<UserPreferences>) => {
      commitProgress((prev) => updatePreferences(prev, patch));
    },
    [commitProgress]
  );

  const toggleTheme = useCallback(() => {
    commitProgress((prev) =>
      updatePreferences(prev, {
        theme: prev.preferences.theme === 'light' ? 'dark' : 'light'
      })
    );
  }, [commitProgress]);

  const toggleThaiTranslation = useCallback(() => {
    commitProgress((prev) =>
      updatePreferences(prev, {
        showThaiTranslation: !prev.preferences.showThaiTranslation
      })
    );
  }, [commitProgress]);

  const setActiveExamSession = useCallback(
    (session: ActiveExamSession | null) => {
      commitProgress((prev) => ({
        ...prev,
        activeExamSession: session
      }));
    },
    [commitProgress]
  );

  const completeExamSubmission = useCallback(
    (attempt: ExamAttempt, session: ActiveExamSession) => {
      commitProgress((prev) => saveExamSubmission(prev, attempt, session));
    },
    [commitProgress]
  );

  const importProgress = useCallback((imported: UserProgress) => {
    const saveResult = saveProgress(imported);
    if (!saveResult.ok && saveResult.errorMessage) {
      setStorageWarning(saveResult.errorMessage);
    } else {
      setStorageWarning(null);
    }
    setProgress(imported);
  }, []);

  const resetProgress = useCallback(() => {
    clearStoredProgress();
    const fresh = createDefaultProgress();
    const saveResult = saveProgress(fresh);
    if (!saveResult.ok && saveResult.errorMessage) {
      setStorageWarning(saveResult.errorMessage);
    } else {
      setStorageWarning(null);
    }
    setProgress(fresh);
  }, []);

  const lessonsById = useMemo(
    () => new Map((bundle?.lessons ?? []).map((l) => [l.id, l])),
    [bundle]
  );

  const questionsById = useMemo(
    () => new Map((bundle?.questions ?? []).map((q) => [q.id, q])),
    [bundle]
  );

  const pbqsById = useMemo(
    () => new Map((bundle?.pbqs ?? []).map((p) => [p.id, p])),
    [bundle]
  );

  const mockFormsById = useMemo(
    () => new Map((bundle?.mockForms ?? []).map((f) => [f.id, f])),
    [bundle]
  );

  const objectivesById = useMemo(() => {
    const map = new Map<string, Objective>();
    for (const domain of EXAM_METADATA.domains) {
      for (const obj of domain.objectives) {
        map.set(obj.id, obj);
      }
    }
    return map;
  }, []);

  const domainWeightById = useMemo(
    () => new Map(EXAM_METADATA.domains.map((d) => [d.id, d.weightPercent])),
    []
  );

  const value: AppContextValue = useMemo(
    () => ({
      bundle,
      loading,
      loadError,
      lessonsById,
      questionsById,
      pbqsById,
      mockFormsById,
      objectivesById,
      domainWeightById,
      progress,
      storageWarning,
      searchOpen,
      openSearch,
      closeSearch,
      toggleLessonComplete,
      toggleLessonBookmarkItem,
      setLastLesson,
      toggleStudyDay,
      rateFlashcard,
      recordPracticeAttempt,
      patchPreferences,
      toggleTheme,
      toggleThaiTranslation,
      setActiveExamSession,
      completeExamSubmission,
      importProgress,
      resetProgress
    }),
    [
      bundle,
      loading,
      loadError,
      lessonsById,
      questionsById,
      pbqsById,
      mockFormsById,
      objectivesById,
      domainWeightById,
      progress,
      storageWarning,
      searchOpen,
      openSearch,
      closeSearch,
      toggleLessonComplete,
      toggleLessonBookmarkItem,
      setLastLesson,
      toggleStudyDay,
      rateFlashcard,
      recordPracticeAttempt,
      patchPreferences,
      toggleTheme,
      toggleThaiTranslation,
      setActiveExamSession,
      completeExamSubmission,
      importProgress,
      resetProgress
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return ctx;
}
