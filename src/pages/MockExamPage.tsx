import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Flag,
  Grid,
  Languages,
  Play,
  Send,
  ShieldCheck
} from 'lucide-react';
import { BilingualPrompt } from '../components/BilingualPrompt';
import { ConfirmModal } from '../components/ConfirmModal';
import { DomainBadge } from '../components/DomainBadge';
import { PbqRenderer } from '../components/pbq/PbqRenderer';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';
import {
  InsufficientQuestionsError,
  countUnansweredItems,
  createNewExamSession,
  formatRemainingTime,
  getRemainingMs,
  isPbqAttempted,
  isSessionExpired,
  setPbqAnswer,
  setQuestionAnswer,
  submitExamIdempotently,
  toggleFlag
} from '../engine';
import { broadcastExamSubmitted, createTabId, subscribeExamTabGuard } from '../storage';
import type { ActiveExamSession, MockFormId } from '../types';

type PendingExamChoice =
  | { kind: 'form'; formId: MockFormId }
  | { kind: 'random' };

type NavFilter = 'all' | 'unanswered' | 'flagged';

function persistSessionFlaggedIds(attemptId: string, flaggedIds: readonly string[]): void {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      window.sessionStorage.setItem(`sp_flagged_${attemptId}`, JSON.stringify(flaggedIds));
    }
  } catch {
    // Ignore sessionStorage restrictions
  }
}

export function MockExamPage() {
  const {
    bundle,
    loading,
    questionsById,
    pbqsById,
    mockFormsById,
    progress,
    setActiveExamSession,
    completeExamSubmission,
    toggleThaiTranslation
  } = useAppContext();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [pendingChoice, setPendingChoice] = useState<PendingExamChoice | null>(() => {
    const paramForm = searchParams.get('form') as MockFormId | null;
    if (paramForm && ['form-a', 'form-b', 'form-c'].includes(paramForm)) {
      return { kind: 'form', formId: paramForm };
    }
    return null;
  });
  const [startError, setStartError] = useState<string | null>(null);
  const [nowMs, setNowMs] = useState<number>(() => Date.now());
  const [navigatorOpen, setNavigatorOpen] = useState<boolean>(false);
  const [navFilter, setNavFilter] = useState<NavFilter>('all');
  const [submitModalOpen, setSubmitModalOpen] = useState<boolean>(false);
  const [tabConflictMsg, setTabConflictMsg] = useState<string | null>(null);

  const tabId = useMemo(() => createTabId(), []);
  const autoSubmitTriggeredRef = useRef<boolean>(false);

  const activeSession =
    progress.activeExamSession && !progress.activeExamSession.submitted
      ? progress.activeExamSession
      : null;

  const finalizeSubmit = useCallback(
    (sessionToSubmit: ActiveExamSession, autoSubmitted: boolean) => {
      const result = submitExamIdempotently({
        session: sessionToSubmit,
        existingAttempts: progress.examAttempts,
        questionsById,
        pbqsById,
        domains: EXAM_METADATA.domains,
        submittedAt: Date.now(),
        autoSubmitted
      });

      if (result.attempt) {
        persistSessionFlaggedIds(result.attempt.attemptId, sessionToSubmit.flaggedIds);
        completeExamSubmission(result.attempt, result.updatedSession);
        broadcastExamSubmitted(sessionToSubmit.sessionId, tabId);
        void navigate(`/results/${result.attempt.attemptId}`, {
          state: { flaggedIds: sessionToSubmit.flaggedIds }
        });
      } else {
        setActiveExamSession(null);
      }
    },
    [
      progress.examAttempts,
      questionsById,
      pbqsById,
      completeExamSubmission,
      tabId,
      navigate,
      setActiveExamSession
    ]
  );

  // Subscribe to multi-tab guard when an exam session is active
  useEffect(() => {
    if (!activeSession) {
      setTabConflictMsg(null);
      autoSubmitTriggeredRef.current = false;
      return undefined;
    }
    return subscribeExamTabGuard(activeSession.sessionId, tabId, (msg) => {
      setTabConflictMsg(msg);
    });
  }, [activeSession?.sessionId, activeSession, tabId]);

  // Countdown tick & auto-submit on expiration
  useEffect(() => {
    if (!activeSession || !bundle) return undefined;

    const checkTick = () => {
      const currentNow = Date.now();
      setNowMs(currentNow);
      if (isSessionExpired(activeSession, currentNow) && !autoSubmitTriggeredRef.current) {
        autoSubmitTriggeredRef.current = true;
        finalizeSubmit(activeSession, true);
      }
    };

    checkTick();
    const timer = window.setInterval(checkTick, 500);
    return () => window.clearInterval(timer);
  }, [activeSession, bundle, finalizeSubmit]);

  const handleStartConfirmedExam = () => {
    if (!bundle || !pendingChoice) return;
    setStartError(null);
    const seed = Math.floor(Date.now() % 2147483647) || 1;
    const now = Date.now();

    try {
      if (pendingChoice.kind === 'random') {
        const session = createNewExamSession({
          mode: 'random',
          durationMinutes: EXAM_METADATA.durationMinutes,
          seed,
          now,
          questions: bundle.questions,
          pbqs: bundle.pbqs,
          domains: EXAM_METADATA.domains
        });
        setActiveExamSession(session);
      } else {
        const form = mockFormsById.get(pendingChoice.formId);
        if (!form) {
          setStartError(`ไม่พบชุดข้อสอบ ${pendingChoice.formId}`);
          return;
        }
        const session = createNewExamSession({
          mode: form.id,
          durationMinutes: form.durationMinutes,
          seed,
          now,
          questions: bundle.questions,
          pbqs: bundle.pbqs,
          domains: EXAM_METADATA.domains,
          formQuestionIds: form.questionIds,
          formPbqIds: form.pbqIds
        });
        setActiveExamSession(session);
      }
      setPendingChoice(null);
      window.scrollTo({ top: 0 });
    } catch (err: unknown) {
      if (err instanceof InsufficientQuestionsError) {
        setStartError(err.message);
      } else if (err instanceof Error) {
        setStartError(err.message);
      } else {
        setStartError('ไม่สามารถเริ่มการสอบจำลองได้');
      }
    }
  };

  if (loading || !bundle) {
    return <div className="card">กำลังโหลดข้อมูล Mock Exam...</div>;
  }

  // Case 1: Active Exam Runner (strictly hides explanations/answers!)
  if (activeSession) {
    const showThai = progress.preferences.showThaiTranslation;
    const remainingMs = getRemainingMs(activeSession, nowMs);
    const remainingLabel = formatRemainingTime(remainingMs);
    const isUrgent = remainingMs < 120_000;
    const isWarningTime = remainingMs < 600_000 && !isUrgent;

    const currentIdx = Math.min(
      Math.max(0, activeSession.currentIndex),
      Math.max(0, activeSession.itemOrder.length - 1)
    );
    const currentRef = activeSession.itemOrder[currentIdx];
    const unansweredTotal = countUnansweredItems(activeSession, questionsById);
    const totalItems = activeSession.itemOrder.length;
    const answeredTotal = Math.max(0, totalItems - unansweredTotal);
    const answeredPercent = totalItems > 0 ? Math.round((answeredTotal / totalItems) * 100) : 0;

    const isItemAnswered = (item: { itemId: string; kind: 'question' | 'pbq' }): boolean => {
      if (item.kind === 'question') {
        const q = questionsById.get(item.itemId);
        const picked = activeSession.answersByQuestionId[item.itemId] ?? [];
        return Boolean(q && picked.length >= q.selectCount);
      }
      return isPbqAttempted(activeSession.pbqAnswersById[item.itemId]);
    };

    const currentQuestion =
      currentRef?.kind === 'question' ? questionsById.get(currentRef.itemId) : undefined;
    const currentPbq =
      currentRef?.kind === 'pbq' ? pbqsById.get(currentRef.itemId) : undefined;
    const isCurrentFlagged = currentRef
      ? activeSession.flaggedIds.includes(currentRef.itemId)
      : false;

    const orderedChoices = (() => {
      if (!currentQuestion) return [];
      const order = activeSession.choiceOrderByQuestionId[currentQuestion.id];
      if (!order) return currentQuestion.choices;
      const byId = new Map(currentQuestion.choices.map((c) => [c.id, c]));
      const mapped = order
        .map((cid) => byId.get(cid))
        .filter((c): c is NonNullable<typeof c> => c !== undefined);
      return mapped.length === currentQuestion.choices.length ? mapped : currentQuestion.choices;
    })();

    return (
      <div className="stack-md">
        {tabConflictMsg && (
          <div className="alert alert-danger" role="alert">
            <AlertTriangle size={20} aria-hidden="true" style={{ flexShrink: 0 }} />
            <div>
              <strong>คำเตือนหลายแท็บเบราว์เซอร์: </strong>
              {tabConflictMsg}
            </div>
          </div>
        )}

        {/* Exam Runner Toolbar */}
        <section className="exam-toolbar-sticky stack-sm" aria-label="แถบควบคุมการสอบจำลอง">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            <div className="btn-row">
              <span className="badge badge-info">
                <ShieldCheck size={14} aria-hidden="true" />
                {activeSession.mode.toUpperCase()}
              </span>
              <span className="badge tabular-nums">
                ข้อที่ {currentIdx + 1} / {totalItems}
              </span>
              <span
                className={`timer-pill tabular-nums ${
                  isUrgent ? 'urgent' : isWarningTime ? 'warning' : ''
                }`}
                aria-label={`เวลาคงเหลือ ${remainingLabel}`}
              >
                <Clock size={14} aria-hidden="true" />
                <span className="mono">{remainingLabel}</span>
              </span>
            </div>

            <div className="btn-row">
              <button
                type="button"
                className={`btn btn-sm ${showThai ? 'btn-active' : ''}`}
                aria-pressed={showThai}
                onClick={toggleThaiTranslation}
              >
                <Languages size={15} aria-hidden="true" />
                <span>{showThai ? 'EN + TH' : 'EN เท่านั้น'}</span>
              </button>

              <button
                type="button"
                className={`btn btn-sm ${navigatorOpen ? 'btn-active' : ''}`}
                aria-expanded={navigatorOpen}
                onClick={() => setNavigatorOpen((prev) => !prev)}
              >
                <Grid size={15} aria-hidden="true" />
                <span>ตัวนำทางข้อสอบ ({totalItems})</span>
              </button>

              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => setSubmitModalOpen(true)}
              >
                <Send size={15} aria-hidden="true" />
                <span>ส่งข้อสอบ</span>
              </button>
            </div>
          </div>

          <div className="stack-sm" style={{ gap: '4px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '8px',
                fontSize: 'var(--text-xs)',
                color: 'var(--text-muted)',
                fontWeight: 600
              }}
            >
              <span>ความคืบหน้าการตอบข้อสอบ</span>
              <span className="tabular-nums">
                ตอบครบ {answeredTotal} / {totalItems} ข้อ ({answeredPercent}%) • ปักธง {activeSession.flaggedIds.length}
              </span>
            </div>
            <div
              className="exam-progress-mini"
              role="progressbar"
              aria-label="ความคืบหน้าการทำข้อสอบจำลอง"
              aria-valuenow={answeredPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div className="progress-fill" style={{ width: `${answeredPercent}%` }} />
            </div>
          </div>
        </section>

        {/* Navigator Grid Drawer */}
        {navigatorOpen && (
          <section className="card stack-sm" aria-label="แผนผังข้อสอบทั้งหมด">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <div className="btn-row">
                <span className="tabular-nums" style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                  สถานะ: ตอบครบ {answeredTotal} • ยังไม่ครบ {unansweredTotal} • ปักธง{' '}
                  {activeSession.flaggedIds.length}
                </span>
              </div>
              <div className="btn-row">
                <button
                  type="button"
                  className={`btn btn-sm ${navFilter === 'all' ? 'btn-active' : ''}`}
                  onClick={() => setNavFilter('all')}
                >
                  ทั้งหมด
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${navFilter === 'unanswered' ? 'btn-active' : ''}`}
                  onClick={() => setNavFilter('unanswered')}
                >
                  ยังไม่ตอบ/ไม่ครบ ({unansweredTotal})
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${navFilter === 'flagged' ? 'btn-active' : ''}`}
                  onClick={() => setNavFilter('flagged')}
                >
                  ปักธง ({activeSession.flaggedIds.length})
                </button>
              </div>
            </div>

            <div className="exam-nav-legend" aria-label="คำอธิบายสัญลักษณ์ตัวนำทางข้อสอบ">
              <span className="badge">
                <span aria-hidden="true">○</span> ยังไม่ตอบ
              </span>
              <span className="badge badge-success">
                <span aria-hidden="true">✓</span> ตอบแล้ว
              </span>
              <span className="badge badge-warning">
                <span aria-hidden="true">⚑</span> ปักธงทบทวน
              </span>
              <span className="badge badge-info">P = PBQ</span>
            </div>

            <div className="exam-nav-grid">
              {activeSession.itemOrder.map((item, idx) => {
                const answered = isItemAnswered(item);
                const flagged = activeSession.flaggedIds.includes(item.itemId);
                const isCurrent = idx === currentIdx;

                if (navFilter === 'unanswered' && answered) return null;
                if (navFilter === 'flagged' && !flagged) return null;

                const statusSymbol = answered ? '✓' : '○';
                const statusWord = answered ? 'ตอบแล้ว' : 'ยังไม่ตอบ';

                return (
                  <button
                    key={item.itemId}
                    type="button"
                    className={`exam-nav-pill tabular-nums ${answered ? 'answered' : ''} ${flagged ? 'flagged' : ''} ${isCurrent ? 'current' : ''}`}
                    aria-current={isCurrent ? 'step' : undefined}
                    aria-label={`ข้อที่ ${idx + 1} (${item.kind === 'pbq' ? 'PBQ' : 'คำถาม'}) ${statusWord}${flagged ? ' ปักธงทบทวน' : ''}`}
                    onClick={() => {
                      setActiveExamSession({ ...activeSession, currentIndex: idx });
                    }}
                  >
                    <span>
                      {idx + 1}
                      {item.kind === 'pbq' ? 'P' : ''}
                    </span>
                    <span>
                      {statusSymbol}
                      {flagged ? ' ⚑' : ''}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Current Question / PBQ Stage */}
        {currentRef && (
          <section className="card stack-md" aria-label={`ข้อสอบข้อที่ ${currentIdx + 1}`}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div className="btn-row">
                <span className="badge badge-info tabular-nums">ข้อที่ {currentIdx + 1}</span>
                {currentQuestion && (
                  <>
                    <DomainBadge
                      domainId={currentQuestion.domainId}
                      objectiveIds={currentQuestion.objectiveIds}
                      compact
                    />
                    <span className="badge">
                      {currentQuestion.type === 'msq'
                        ? `MSQ • เลือก ${currentQuestion.selectCount} คำตอบ`
                        : 'MCQ • เลือก 1 คำตอบ'}
                    </span>
                  </>
                )}
                {currentPbq && (
                  <DomainBadge
                    domainId={currentPbq.domainId}
                    objectiveIds={currentPbq.objectiveIds}
                    compact
                  />
                )}
              </div>

              <button
                type="button"
                className={`btn btn-sm ${isCurrentFlagged ? 'btn-active' : ''}`}
                aria-pressed={isCurrentFlagged}
                onClick={() => setActiveExamSession(toggleFlag(activeSession, currentRef.itemId))}
              >
                <Flag size={15} aria-hidden="true" />
                <span>{isCurrentFlagged ? '⚑ ปักธงทบทวนแล้ว' : 'ปักธงทบทวน'}</span>
              </button>
            </div>

            {currentQuestion && (
              <>
                <BilingualPrompt
                  textEn={currentQuestion.promptEn}
                  textTh={currentQuestion.promptTh}
                  showThai={showThai}
                />

                <div className="choice-list">
                  {orderedChoices.map((choice, idx) => {
                    const picked = activeSession.answersByQuestionId[currentQuestion.id] ?? [];
                    const isSelected = picked.includes(choice.id);

                    return (
                      <label
                        key={choice.id}
                        className={`choice-card ${isSelected ? 'selected' : ''}`}
                      >
                        <input
                          type={currentQuestion.type === 'msq' ? 'checkbox' : 'radio'}
                          name={`exam-q-${currentQuestion.id}`}
                          checked={isSelected}
                          onChange={() =>
                            setActiveExamSession(
                              setQuestionAnswer(activeSession, currentQuestion, choice.id)
                            )
                          }
                        />
                        <span className="choice-letter">{String.fromCharCode(65 + idx)}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <BilingualPrompt
                            textEn={choice.textEn}
                            textTh={choice.textTh}
                            showThai={showThai}
                          />
                        </div>
                      </label>
                    );
                  })}
                </div>
              </>
            )}

            {currentPbq && (
              <PbqRenderer
                pbq={currentPbq}
                response={activeSession.pbqAnswersById[currentPbq.id]}
                onChange={(resp) =>
                  setActiveExamSession(setPbqAnswer(activeSession, currentPbq.id, resp))
                }
                showThai={showThai}
              />
            )}
          </section>
        )}

        {/* Bottom Prev/Next Navigation */}
        <div className="btn-row" style={{ justifyContent: 'space-between' }}>
          <button
            type="button"
            className="btn"
            disabled={currentIdx === 0}
            onClick={() =>
              setActiveExamSession({
                ...activeSession,
                currentIndex: Math.max(0, currentIdx - 1)
              })
            }
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>ข้อก่อนหน้า</span>
          </button>

          <div className="btn-row">
            {currentIdx < totalItems - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  setActiveExamSession({
                    ...activeSession,
                    currentIndex: Math.min(totalItems - 1, currentIdx + 1)
                  })
                }
              >
                <span>ข้อถัดไป</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setSubmitModalOpen(true)}
              >
                <Send size={16} aria-hidden="true" />
                <span>ส่งคำตอบทั้งหมด</span>
              </button>
            )}
          </div>
        </div>

        <ConfirmModal
          open={submitModalOpen}
          title="ยืนยันการส่งข้อสอบจำลอง"
          description={
            unansweredTotal > 0
              ? `คำเตือน: คุณยังมีข้อที่ยังไม่ได้ตอบหรือตอบไม่ครบจำนวน ${unansweredTotal} ข้อ หากส่งข้อสอบตอนนี้ระบบจะตรวจคะแนนและบันทึกผลทันที`
              : `คุณตอบครบทั้ง ${totalItems} ข้อแล้ว ต้องการส่งคำตอบเพื่อตรวจคะแนนทันทีหรือไม่?`
          }
          confirmLabel="ยืนยันส่งข้อสอบ"
          cancelLabel="กลับไปทำต่อ"
          onConfirm={() => {
            setSubmitModalOpen(false);
            finalizeSubmit(activeSession, false);
          }}
          onCancel={() => setSubmitModalOpen(false)}
        />
      </div>
    );
  }

  // Case 2: Confirmation View before starting
  if (pendingChoice) {
    const selectedForm =
      pendingChoice.kind === 'form' ? mockFormsById.get(pendingChoice.formId) : undefined;
    const examTitle =
      pendingChoice.kind === 'random'
        ? 'สุ่มข้อสอบใหม่ 90 ข้อ (Random Exam ตามสัดส่วน Domain)'
        : selectedForm?.titleTh ?? pendingChoice.formId;
    const durationMin =
      pendingChoice.kind === 'random'
        ? EXAM_METADATA.durationMinutes
        : selectedForm?.durationMinutes ?? EXAM_METADATA.durationMinutes;
    const totalCount =
      pendingChoice.kind === 'random'
        ? 90
        : (selectedForm?.questionIds.length ?? 0) + (selectedForm?.pbqIds.length ?? 0);

    return (
      <div className="stack-lg">
        <div className="page-header">
          <div>
            <h1>ยืนยันก่อนเริ่มสอบจำลอง (Pre-Exam Confirmation)</h1>
            <p className="page-subtitle">{examTitle}</p>
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setPendingChoice(null);
              setStartError(null);
            }}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            <span>ย้อนกลับ</span>
          </button>
        </div>

        {startError && (
          <div className="alert alert-danger" role="alert">
            <AlertTriangle size={20} aria-hidden="true" style={{ flexShrink: 0 }} />
            <div>
              <strong>ไม่สามารถสร้างชุดข้อสอบได้: </strong>
              {startError}
            </div>
          </div>
        )}

        <section className="card stack-md">
          <div className="btn-row" style={{ justifyContent: 'space-between' }}>
            <h2 style={{ margin: 0 }}>รายละเอียดชุดข้อสอบและข้อตกลงก่อนเริ่ม</h2>
            <span className="badge badge-info">
              <ShieldCheck size={14} aria-hidden="true" />
              {pendingChoice.kind === 'random' ? 'RANDOM 90' : pendingChoice.formId.toUpperCase()}
            </span>
          </div>

          <div className="grid-3">
            <div className="card-subtle stack-sm">
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
                ชุดข้อสอบที่เลือก
              </span>
              <strong style={{ fontSize: 'var(--text-base)' }}>{examTitle}</strong>
            </div>
            <div className="card-subtle stack-sm">
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
                จำนวนข้อสอบทั้งหมด
              </span>
              <strong className="tabular-nums" style={{ fontSize: 'var(--text-xl)' }}>
                {totalCount} ข้อ
              </strong>
            </div>
            <div className="card-subtle stack-sm">
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
                เวลาสอบจำลอง
              </span>
              <strong className="tabular-nums" style={{ fontSize: 'var(--text-xl)' }}>
                {durationMin} นาที
              </strong>
            </div>
          </div>

          <ul
            className="stack-sm"
            style={{ listStyle: 'none', margin: 0, padding: 0 }}
          >
            <li className="card-subtle" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} aria-hidden="true" style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
              <span className="prose-text">
                <strong>การจับเวลา:</strong> นับถอยหลังต่อเนื่อง {durationMin} นาที และส่งข้อสอบอัตโนมัติทันทีเมื่อหมดเวลา
              </span>
            </li>
            <li className="card-subtle" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} aria-hidden="true" style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
              <span className="prose-text">
                <strong>หมายเหตุโครงสร้างชุดฝึก:</strong> {EXAM_METADATA.mockFormStructureNote}
              </span>
            </li>
            <li className="card-subtle" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <CheckCircle2 size={18} aria-hidden="true" style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
              <span className="prose-text">
                <strong>ข้อจำกัดเครื่องมือฝึกสอบ:</strong> {EXAM_METADATA.disclaimerTh}
              </span>
            </li>
          </ul>

          <div className="alert alert-info">
            <ShieldCheck size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              ระหว่างทำข้อสอบ ระบบจะซ่อนเฉลยและบันทึกความคืบหน้าไว้ในเบราว์เซอร์อัตโนมัติ สามารถรีเฟรชหน้าแล้วกลับมาทำต่อได้ กรุณาเปิดทำข้อสอบเพียง 1 แท็บเท่านั้น
            </div>
          </div>

          <div className="btn-row">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleStartConfirmedExam}
            >
              <Play size={16} aria-hidden="true" />
              <span>เริ่มทำข้อสอบ</span>
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                setPendingChoice(null);
                setStartError(null);
              }}
            >
              ยกเลิก
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Case 3: Selection Landing View
  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h1>สอบจำลอง (Mock Exam Center — {EXAM_METADATA.examCode})</h1>
          <p className="page-subtitle">
            เลือกชุดข้อสอบมาตรฐานหรือสุ่มข้อสอบตามสัดส่วน Domain (เป้าหมายฝึก {EXAM_METADATA.practiceTargetPercent}%)
          </p>
        </div>
      </div>

      <div className="alert alert-info">
        <ShieldCheck size={20} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div className="prose-text">{EXAM_METADATA.mockFormStructureNote}</div>
      </div>

      <div className="grid-2">
        {bundle.mockForms.map((form) => {
          const allFormIds = [...form.questionIds, ...form.pbqIds];
          const seenInPractice = allFormIds.filter(
            (id) => progress.questionHistory[id]?.seenInPractice
          ).length;
          const seenPercent =
            allFormIds.length > 0 ? Math.round((seenInPractice / allFormIds.length) * 100) : 0;

          return (
            <article key={form.id} className="mock-form-card stack-md">
              <div className="mock-form-accent" data-form={form.id} aria-hidden="true" />
              <div>
                <div className="btn-row" style={{ marginBottom: '8px' }}>
                  <span className="badge badge-info">{form.id.toUpperCase()}</span>
                  <span className="badge tabular-nums">
                    <Clock size={12} aria-hidden="true" />
                    {form.durationMinutes} นาที
                  </span>
                  <span className="badge tabular-nums">
                    {form.questionIds.length} MCQ/MSQ + {form.pbqIds.length} PBQ
                  </span>
                </div>
                <h2 style={{ margin: '0 0 4px' }}>{form.titleTh}</h2>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  {form.subtitleTh}
                </div>
              </div>

              <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                {form.descriptionTh}
              </p>

              <div className="card-subtle stack-sm" style={{ fontSize: 'var(--text-xs)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
                  <span>
                    <CheckCircle2
                      size={14}
                      aria-hidden="true"
                      style={{ verticalAlign: 'text-bottom', marginRight: '6px' }}
                    />
                    เคยเห็นใน Practice Mode แล้ว
                  </span>
                  <strong className="tabular-nums">
                    {seenInPractice} / {allFormIds.length} ข้อ ({seenPercent}%)
                  </strong>
                </div>
                <div
                  className="progress-track"
                  role="progressbar"
                  aria-label={`สัดส่วนข้อสอบชุด ${form.id.toUpperCase()} ที่เคยฝึกแล้ว`}
                  aria-valuenow={seenPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-fill" style={{ width: `${seenPercent}%` }} />
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setStartError(null);
                    setPendingChoice({ kind: 'form', formId: form.id });
                  }}
                >
                  <Play size={16} aria-hidden="true" />
                  <span>เลือกชุดข้อสอบ {form.id.toUpperCase()}</span>
                </button>
              </div>
            </article>
          );
        })}

        <article className="mock-form-card stack-md">
          <div className="mock-form-accent" data-form="random" aria-hidden="true" />
          <div>
            <div className="btn-row" style={{ marginBottom: '8px' }}>
              <span className="badge badge-info">RANDOM 90</span>
              <span className="badge tabular-nums">
                <Clock size={12} aria-hidden="true" />
                {EXAM_METADATA.durationMinutes} นาที
              </span>
              <span className="badge tabular-nums">85 MCQ/MSQ + 5 PBQ</span>
            </div>
            <h2 style={{ margin: '0 0 4px' }}>สุ่มข้อสอบใหม่ (Random 90 ข้อ)</h2>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-secondary)' }}>
              สุ่มตามน้ำหนัก Domain ทางการของ SY0-701
            </div>
          </div>

          <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
            ระบบจะสุ่ม 90 ข้อ (D1 12%, D2 22%, D3 18%, D4 28%, D5 20%) โดยไม่ซ้ำข้อ และจะแจ้งเตือนหากคลังข้อสอบในโหมดปัจจุบันมีไม่ครบ 90 ข้อ
          </p>

          <div className="card-subtle stack-sm" style={{ fontSize: 'var(--text-xs)' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-secondary)' }}>
              สัดส่วน Domain ที่ใช้สุ่มอัตโนมัติ
            </div>
            <div className="btn-row" style={{ gap: '6px' }}>
              {EXAM_METADATA.domains.map((dom) => (
                <span key={dom.id} className="badge badge-domain tabular-nums" data-domain={dom.id}>
                  {dom.id} {dom.weightPercent}%
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setStartError(null);
                setPendingChoice({ kind: 'random' });
              }}
            >
              <Play size={16} aria-hidden="true" />
              <span>สุ่มข้อสอบใหม่ (Random 90 ข้อ)</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
