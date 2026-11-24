import { describe, expect, it } from 'vitest';
import {
  STORAGE_KEY,
  createDefaultProgress,
  exportProgressJson,
  loadProgress,
  migrateProgress,
  parseImportedProgressJson,
  recordQuestionAttempt,
  saveProgress,
  toggleLessonCompletion
} from '../progressStore';

class MemoryStorage implements Storage {
  private map = new Map<string, string>();
  public throwOnSet = false;
  get length() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  getItem(key: string) {
    return this.map.get(key) ?? null;
  }
  key(index: number) {
    return [...this.map.keys()][index] ?? null;
  }
  removeItem(key: string) {
    this.map.delete(key);
  }
  setItem(key: string, value: string) {
    if (this.throwOnSet) {
      throw new Error('QuotaExceededError');
    }
    this.map.set(key, value);
  }
}

describe('Progress Storage Validation, Migration & Safety', () => {
  it('saves, loads, and tracks lesson & practice history cleanly', () => {
    const mem = new MemoryStorage();
    let progress = createDefaultProgress();
    progress = toggleLessonCompletion(progress, 'L1-01');
    progress = recordQuestionAttempt(progress, {
      questionId: 'Q1-001',
      isCorrect: true,
      source: 'practice',
      answeredAtIso: '2026-11-24T10:00:00Z'
    });

    const saved = saveProgress(progress, mem);
    expect(saved.ok).toBe(true);

    const loaded = loadProgress(mem);
    expect(loaded.warning).toBeNull();
    expect(loaded.progress.completedLessonIds).toEqual(['L1-01']);
    expect(loaded.progress.questionHistory['Q1-001']?.seenInPractice).toBe(true);
  });

  it('recovers gracefully with warning when localStorage contains corrupted JSON or invalid schema', () => {
    const mem = new MemoryStorage();
    mem.setItem(STORAGE_KEY, '{corrupted json');
    const broken = loadProgress(mem);
    expect(broken.warning).not.toBeNull();
    expect(broken.progress.completedLessonIds).toEqual([]);

    mem.setItem(STORAGE_KEY, JSON.stringify({ schemaVersion: 1, completedLessonIds: 'invalid' }));
    const badSchema = loadProgress(mem);
    expect(badSchema.warning).not.toBeNull();
    expect(badSchema.corruptedRawBackup).toBeDefined();
  });

  it('warns when storage is unavailable or throws quota exceeded', () => {
    const unavailableLoad = loadProgress(null);
    expect(unavailableLoad.warning).not.toBeNull();

    const mem = new MemoryStorage();
    mem.throwOnSet = true;
    const failedSave = saveProgress(createDefaultProgress(), mem);
    expect(failedSave.ok).toBe(false);
    expect(failedSave.errorMessage).not.toBeNull();
  });

  it('migrates v0 payloads forward and validates JSON export/import roundtrip', () => {
    const migrated = migrateProgress({
      completedLessonIds: ['L1-01'],
      preferences: { theme: 'dark', showThaiTranslation: false, fontSize: 'large' }
    }) as Record<string, unknown>;
    expect(migrated.schemaVersion).toBe(1);

    const progress = toggleLessonCompletion(createDefaultProgress(), 'L2-01');
    const json = exportProgressJson(progress, '2026-11-24T12:00:00Z');
    expect(json).not.toContain('token');

    const imported = parseImportedProgressJson(json);
    expect(imported.ok).toBe(true);
    if (imported.ok) {
      expect(imported.progress.completedLessonIds).toEqual(['L2-01']);
    }

    const rejected = parseImportedProgressJson('{"bad": 123}');
    expect(rejected.ok).toBe(false);
  });
});
