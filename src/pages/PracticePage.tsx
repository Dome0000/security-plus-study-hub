import { useEffect, useId, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Languages,
  Play,
  RotateCcw
} from 'lucide-react';
import { BilingualPrompt } from '../components/BilingualPrompt';
import { DomainBadge } from '../components/DomainBadge';
import { PbqRenderer } from '../components/pbq/PbqRenderer';
import { QuestionReviewCard } from '../components/QuestionReviewCard';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';
import {
  createSeededRng,
  scoreMcq,
  scoreMsq,
  scorePbq,
  seededShuffle
} from '../engine';
import type {
  ChoiceId,
  Difficulty,
  DomainId,
  GradedItemResult,
  PbqQuestion,
  PbqResponse,
  Question
} from '../types';

type PracticeItem =
  | { kind: 'question'; data: Question }
  | { kind: 'pbq'; data: PbqQuestion };

type ItemTypeFilter = 'all' | 'mcq' | 'msq' | 'pbq';
type CountFilter = '5' | '10' | '20' | 'ALL';
type FeedbackMode = 'immediate' | 'submit-all';

interface GradedPracticeRecord {
  earnedPoints: number;
  isCorrect: boolean;
  rubricBreakdown?: GradedItemResult['rubricBreakdown'];
}

export function PracticePage() {
  const {
    bundle,
    loading,
    progress,
    recordPracticeAttempt,
    toggleThaiTranslation
  } = useAppContext();

  const [searchParams] = useSearchParams();
  const initialDomain = searchParams.get('domain') as DomainId | null;
  const initialObjective = searchParams.get('objective');
  const initialMissed = searchParams.get('mode') === 'missed';

  const [domainFilter, setDomainFilter] = useState<'ALL' | DomainId>(
    initialDomain && EXAM_METADATA.domains.some((d) => d.id === initialDomain)
      ? initialDomain
      : 'ALL'
  );
  const [objectiveFilter, setObjectiveFilter] = useState<string>(initialObjective ?? 'ALL');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | Difficulty>('all');
  const [typeFilter, setTypeFilter] = useState<ItemTypeFilter>('all');
  const [countFilter, setCountFilter] = useState<CountFilter>('10');
  const [retryMissedOnly, setRetryMissedOnly] = useState<boolean>(initialMissed);
  const [feedbackMode, setFeedbackMode] = useState<FeedbackMode>('immediate');

  const [sessionItems, setSessionItems] = useState<PracticeItem[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [questionAnswers, setQuestionAnswers] = useState<Record<string, ChoiceId[]>>({});
  const [pbqAnswers, setPbqAnswers] = useState<Record<string, PbqResponse>>({});
  const [gradedById, setGradedById] = useState<Record<string, GradedPracticeRecord>>({});
  const [submittedAll, setSubmittedAll] = useState<boolean>(false);

  useEffect(() => {
    const domParam = searchParams.get('domain') as DomainId | null;
    const objParam = searchParams.get('objective');
    if (domParam && EXAM_METADATA.domains.some((d) => d.id === domParam)) {
      setDomainFilter(domParam);
    }
    if (objParam) {
      setObjectiveFilter(objParam);
    }
  }, [searchParams]);

  const domainIdCtrl = useId();
  const objIdCtrl = useId();
  const diffIdCtrl = useId();
  const typeIdCtrl = useId();
  const countIdCtrl = useId();

  const showThai = progress.preferences.showThaiTranslation;

  const availableObjectives = useMemo(() => {
    if (domainFilter === 'ALL') {
      return EXAM_METADATA.domains.flatMap((d) => d.objectives);
    }
    return EXAM_METADATA.domains.find((d) => d.id === domainFilter)?.objectives ?? [];
  }, [domainFilter]);

  const allItems = useMemo<PracticeItem[]>(() => {
    if (!bundle) return [];
    const qs: PracticeItem[] = bundle.questions.map((q) => ({ kind: 'question', data: q }));
    const ps: PracticeItem[] = bundle.pbqs.map((p) => ({ kind: 'pbq', data: p }));
    return [...qs, ...ps];
  }, [bundle]);

  const missedItemCount = useMemo(
    () =>
      allItems.filter((item) => {
        const hist = progress.questionHistory[item.data.id];
        return hist !== undefined && !hist.lastResultCorrect;
      }).length,
    [allItems, progress.questionHistory]
  );

  const matchingPool = useMemo(() => {
    return allItems.filter((item) => {
      const d = item.data;
      if (domainFilter !== 'ALL' && d.domainId !== domainFilter) return false;
      if (objectiveFilter !== 'ALL' && !d.objectiveIds.includes(objectiveFilter)) return false;
      if (difficultyFilter !== 'all' && d.difficulty !== difficultyFilter) return false;

      if (typeFilter === 'pbq' && item.kind !== 'pbq') return false;
      if (typeFilter === 'mcq' && (item.kind !== 'question' || item.data.type !== 'mcq')) {
        return false;
      }
      if (typeFilter === 'msq' && (item.kind !== 'question' || item.data.type !== 'msq')) {
        return false;
      }

      if (retryMissedOnly) {
        const hist = progress.questionHistory[d.id];
        if (!hist || hist.lastResultCorrect) return false;
      }

      return true;
    });
  }, [
    allItems,
    domainFilter,
    objectiveFilter,
    difficultyFilter,
    typeFilter,
    retryMissedOnly,
    progress.questionHistory
  ]);

  const startPracticeSession = () => {
    if (matchingPool.length === 0) return;
    const rng = createSeededRng(Date.now());
    const shuffled = seededShuffle(matchingPool, rng);
    const limit = countFilter === 'ALL' ? shuffled.length : Number(countFilter);
    setSessionItems(shuffled.slice(0, limit));
    setCurrentIndex(0);
    setQuestionAnswers({});
    setPbqAnswers({});
    setGradedById({});
    setSubmittedAll(false);
  };

  const resetToSetup = () => {
    setSessionItems(null);
    setCurrentIndex(0);
    setQuestionAnswers({});
    setPbqAnswers({});
    setGradedById({});
    setSubmittedAll(false);
  };

  const handleToggleChoice = (question: Question, choiceId: ChoiceId) => {
    if (gradedById[question.id] || submittedAll) return;
    setQuestionAnswers((prev) => {
      const current = prev[question.id] ?? [];
      let next: ChoiceId[];
      if (question.type === 'mcq') {
        next = [choiceId];
      } else if (current.includes(choiceId)) {
        next = current.filter((c) => c !== choiceId);
      } else if (current.length < question.selectCount) {
        next = [...current, choiceId];
      } else {
        next = [...current.slice(1), choiceId];
      }
      return { ...prev, [question.id]: next };
    });
  };

  const gradeSingleItem = (item: PracticeItem): GradedPracticeRecord => {
    if (item.kind === 'question') {
      const q = item.data;
      const picked = questionAnswers[q.id] ?? [];
      const earned = q.type === 'mcq' ? scoreMcq(q, picked) : scoreMsq(q, picked);
      return {
        earnedPoints: earned,
        isCorrect: earned === 1
      };
    }
    const pbq = item.data;
    const resp = pbqAnswers[pbq.id];
    const res = scorePbq(pbq, resp);
    return {
      earnedPoints: res.earnedPoints,
      isCorrect: res.isFullyCorrect,
      rubricBreakdown: res.rubricBreakdown
    };
  };

  const handleCheckImmediate = (item: PracticeItem) => {
    if (gradedById[item.data.id]) return;
    const graded = gradeSingleItem(item);
    setGradedById((prev) => ({ ...prev, [item.data.id]: graded }));
    recordPracticeAttempt(item.data.id, graded.isCorrect);
  };

  const handleSubmitAll = () => {
    if (!sessionItems || submittedAll) return;
    const nextGraded: Record<string, GradedPracticeRecord> = {};
    for (const item of sessionItems) {
      const res = gradeSingleItem(item);
      nextGraded[item.data.id] = res;
      recordPracticeAttempt(item.data.id, res.isCorrect);
    }
    setGradedById(nextGraded);
    setSubmittedAll(true);
    window.scrollTo({ top: 0 });
  };

  if (loading) {
    return <div className="card">กำลังโหลดคลังข้อสอบฝึกหัด...</div>;
  }

  // Setup View
  if (!sessionItems) {
    return (
      <div className="stack-lg">
        <div className="page-header">
          <div>
            <h1>ฝึกทำข้อสอบ (Practice Mode)</h1>
            <p className="page-subtitle">
              เลือกกรองตาม Domain, Official Objective, ระดับความยาก หรือฝึกซ้ำเฉพาะข้อที่เคยตอบผิด (MCQ / MSQ / PBQ)
            </p>
          </div>
        </div>

        <section className="card stack-md" aria-label="ตั้งค่าชุดฝึกทำข้อสอบ">
          <div className="grid-3">
            <div className="field-group">
              <label htmlFor={domainIdCtrl} className="field-label">
                Domain
              </label>
              <select
                id={domainIdCtrl}
                className="select"
                value={domainFilter}
                onChange={(ev) => {
                  setDomainFilter(ev.target.value as 'ALL' | DomainId);
                  setObjectiveFilter('ALL');
                }}
              >
                <option value="ALL">ทุก Domain (D1–D5)</option>
                {EXAM_METADATA.domains.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.id} ({d.number}) — {d.titleEn}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label htmlFor={objIdCtrl} className="field-label">
                Official Objective
              </label>
              <select
                id={objIdCtrl}
                className="select"
                value={objectiveFilter}
                onChange={(ev) => setObjectiveFilter(ev.target.value)}
              >
                <option value="ALL">ทุก Objective</option>
                {availableObjectives.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.id} — {o.titleTh}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label htmlFor={diffIdCtrl} className="field-label">
                ระดับความยาก (Difficulty)
              </label>
              <select
                id={diffIdCtrl}
                className="select"
                value={difficultyFilter}
                onChange={(ev) => setDifficultyFilter(ev.target.value as 'all' | Difficulty)}
              >
                <option value="all">ทุกระดับ</option>
                <option value="foundation">พื้นฐาน (Foundation)</option>
                <option value="intermediate">กลาง (Intermediate)</option>
                <option value="exam-ready">ระดับห้องสอบ (Exam-Ready)</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor={typeIdCtrl} className="field-label">
                ประเภทข้อสอบ
              </label>
              <select
                id={typeIdCtrl}
                className="select"
                value={typeFilter}
                onChange={(ev) => setTypeFilter(ev.target.value as ItemTypeFilter)}
              >
                <option value="all">ทั้งหมด (MCQ + MSQ + PBQ)</option>
                <option value="mcq">ปรนัย 1 คำตอบ (MCQ)</option>
                <option value="msq">ปรนัยหลายคำตอบ (MSQ)</option>
                <option value="pbq">สถานการณ์จำลอง (Interactive PBQ)</option>
              </select>
            </div>

            <div className="field-group">
              <label htmlFor={countIdCtrl} className="field-label">
                จำนวนข้อ
              </label>
              <select
                id={countIdCtrl}
                className="select"
                value={countFilter}
                onChange={(ev) => setCountFilter(ev.target.value as CountFilter)}
              >
                <option value="5">5 ข้อ</option>
                <option value="10">10 ข้อ</option>
                <option value="20">20 ข้อ</option>
                <option value="ALL">ทั้งหมดที่ตรงเงื่อนไข</option>
              </select>
            </div>

            <fieldset className="pbq-fieldset" style={{ padding: '10px 14px' }}>
              <legend>รูปแบบการตรวจเฉลย</legend>
              <div className="stack-sm" style={{ gap: '6px' }}>
                <label className="checkbox-label">
                  <input
                    type="radio"
                    name="practice-feedback-mode"
                    checked={feedbackMode === 'immediate'}
                    onChange={() => setFeedbackMode('immediate')}
                  />
                  <span>ดูเฉลยทันทีทีละข้อ (Immediate Feedback)</span>
                </label>
                <label className="checkbox-label">
                  <input
                    type="radio"
                    name="practice-feedback-mode"
                    checked={feedbackMode === 'submit-all'}
                    onChange={() => setFeedbackMode('submit-all')}
                  />
                  <span>ทำให้ครบทุกข้อก่อนดูเฉลย (Submit-All)</span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="card-subtle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={retryMissedOnly}
                onChange={(ev) => setRetryMissedOnly(ev.target.checked)}
              />
              <span>
                ฝึกซ้ำเฉพาะข้อที่ผิด (Retry Missed) — มีข้อที่ตอบผิดล่าสุด {missedItemCount} ข้อ
              </span>
            </label>

            <div className="badge badge-info">
              พบข้อสอบที่ตรงเงื่อนไข {matchingPool.length} ข้อ
            </div>
          </div>

          {matchingPool.length === 0 ? (
            <div className="alert alert-warning" role="status">
              <AlertCircle size={18} aria-hidden="true" style={{ flexShrink: 0 }} />
              <div>
                ไม่พบข้อสอบที่ตรงกับตัวกรองชุดนี้ ลองปรับ Domain / Objective หรือยกเลิกตัวเลือก &ldquo;ฝึกซ้ำเฉพาะข้อที่ผิด&rdquo;
              </div>
            </div>
          ) : (
            <div className="btn-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={startPracticeSession}
              >
                <Play size={16} aria-hidden="true" />
                <span>
                  เริ่มทำข้อสอบ ({countFilter === 'ALL' ? matchingPool.length : Math.min(Number(countFilter), matchingPool.length)} ข้อ)
                </span>
              </button>
            </div>
          )}
        </section>
      </div>
    );
  }

  // Submit-All Completed Summary View
  if (submittedAll) {
    const total = sessionItems.length;
    const earnedSum =
      Math.round(
        sessionItems.reduce((acc, item) => acc + (gradedById[item.data.id]?.earnedPoints ?? 0), 0) *
          1000
      ) / 1000;
    const percent = total > 0 ? Math.round((earnedSum / total) * 1000) / 10 : 0;

    return (
      <div className="stack-lg">
        <div className="page-header">
          <div>
            <h1>สรุปผลการฝึกทำข้อสอบ (Practice Summary)</h1>
            <p className="page-subtitle">
              ได้คะแนนรวม {earnedSum} / {total} ({percent}%)
            </p>
          </div>
          <div className="btn-row">
            <button type="button" className="btn" onClick={toggleThaiTranslation}>
              <Languages size={16} aria-hidden="true" />
              <span>{showThai ? 'ซ่อนคำแปล TH' : 'แสดงคำแปล EN+TH'}</span>
            </button>
            <button type="button" className="btn btn-primary" onClick={resetToSetup}>
              <RotateCcw size={16} aria-hidden="true" />
              <span>ตั้งค่าชุดฝึกใหม่</span>
            </button>
          </div>
        </div>

        <div className="stack-md">
          {sessionItems.map((item, idx) => {
            const graded = gradedById[item.data.id] ?? { earnedPoints: 0, isCorrect: false };
            return (
              <QuestionReviewCard
                key={item.data.id}
                indexLabel={`ข้อที่ ${idx + 1}`}
                kind={item.kind}
                question={item.kind === 'question' ? item.data : undefined}
                pbq={item.kind === 'pbq' ? item.data : undefined}
                selectedChoiceIds={
                  item.kind === 'question' ? (questionAnswers[item.data.id] ?? []) : undefined
                }
                pbqResponse={item.kind === 'pbq' ? pbqAnswers[item.data.id] : undefined}
                rubricBreakdown={graded.rubricBreakdown}
                isCorrect={graded.isCorrect}
                earnedPoints={graded.earnedPoints}
                showThai={showThai}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Active Practice Item View
  const activeItem = sessionItems[currentIndex];
  if (!activeItem) {
    return null;
  }

  const gradedRecord = gradedById[activeItem.data.id];
  const isGraded = Boolean(gradedRecord);

  const answeredCount = sessionItems.filter((item) => {
    if (item.kind === 'question') {
      return (questionAnswers[item.data.id]?.length ?? 0) > 0;
    }
    return Boolean(pbqAnswers[item.data.id]);
  }).length;

  return (
    <div className="stack-md">
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div className="btn-row">
          <button type="button" className="btn btn-sm" onClick={resetToSetup}>
            <ArrowLeft size={15} aria-hidden="true" />
            <span>เปลี่ยนตัวกรอง</span>
          </button>
          <span className="badge badge-info">
            ข้อที่ {currentIndex + 1} / {sessionItems.length}
          </span>
          <span className="badge">
            ตอบแล้ว {answeredCount} / {sessionItems.length}
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
          {feedbackMode === 'submit-all' && (
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={handleSubmitAll}
            >
              <ClipboardCheck size={15} aria-hidden="true" />
              <span>ส่งคำตอบทั้งหมดและดูเฉลย</span>
            </button>
          )}
        </div>
      </div>

      {/* Quick Item Pills for Submit-All or Navigation */}
      <div className="btn-row" role="navigation" aria-label="ตัวเลือกข้ามข้อในชุดฝึก">
        {sessionItems.map((item, idx) => {
          const isCurrent = idx === currentIndex;
          const itemGraded = gradedById[item.data.id];
          const hasAns =
            item.kind === 'question'
              ? (questionAnswers[item.data.id]?.length ?? 0) > 0
              : Boolean(pbqAnswers[item.data.id]);

          let statusSymbol = hasAns ? '•' : '';
          if (itemGraded) {
            statusSymbol = itemGraded.isCorrect ? '✓' : '✗';
          }

          return (
            <button
              key={item.data.id}
              type="button"
              className={`btn btn-sm ${isCurrent ? 'btn-primary' : itemGraded?.isCorrect ? 'btn-success' : ''}`}
              aria-current={isCurrent ? 'step' : undefined}
              onClick={() => setCurrentIndex(idx)}
            >
              <span>
                {idx + 1} {statusSymbol}
              </span>
            </button>
          );
        })}
      </div>

      {/* Render Current Item (Question or Review Card if Immediate Graded) */}
      {feedbackMode === 'immediate' && isGraded && gradedRecord ? (
        <QuestionReviewCard
          indexLabel={`ข้อที่ ${currentIndex + 1}`}
          kind={activeItem.kind}
          question={activeItem.kind === 'question' ? activeItem.data : undefined}
          pbq={activeItem.kind === 'pbq' ? activeItem.data : undefined}
          selectedChoiceIds={
            activeItem.kind === 'question'
              ? (questionAnswers[activeItem.data.id] ?? [])
              : undefined
          }
          pbqResponse={
            activeItem.kind === 'pbq' ? pbqAnswers[activeItem.data.id] : undefined
          }
          rubricBreakdown={gradedRecord.rubricBreakdown}
          isCorrect={gradedRecord.isCorrect}
          earnedPoints={gradedRecord.earnedPoints}
          showThai={showThai}
        />
      ) : (
        <section className="card stack-md">
          <div className="btn-row">
            <DomainBadge
              domainId={activeItem.data.domainId}
              objectiveIds={activeItem.data.objectiveIds}
              compact
            />
            <span className="badge">{activeItem.data.id}</span>
            <span className="badge">{activeItem.data.difficulty}</span>
          </div>

          {activeItem.kind === 'question' ? (
            <>
              <BilingualPrompt
                textEn={activeItem.data.promptEn}
                textTh={activeItem.data.promptTh}
                showThai={showThai}
              />

              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
                {activeItem.data.type === 'msq'
                  ? `คำถามแบบเลือกหลายข้อ: เลือก ${activeItem.data.selectCount} คำตอบ`
                  : 'คำถามแบบเลือก 1 คำตอบ'}
              </div>

              <div className="choice-list">
                {activeItem.data.choices.map((choice, idx) => {
                  const picked = questionAnswers[activeItem.data.id] ?? [];
                  const isSelected = picked.includes(choice.id);

                  return (
                    <label
                      key={choice.id}
                      className={`choice-card ${isSelected ? 'selected' : ''}`}
                    >
                      <input
                        type={activeItem.data.type === 'msq' ? 'checkbox' : 'radio'}
                        name={`practice-q-${activeItem.data.id}`}
                        checked={isSelected}
                        onChange={() => handleToggleChoice(activeItem.data, choice.id)}
                      />
                      <span className="badge" style={{ flexShrink: 0 }}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <BilingualPrompt
                        textEn={choice.textEn}
                        textTh={choice.textTh}
                        showThai={showThai}
                      />
                    </label>
                  );
                })}
              </div>
            </>
          ) : (
            <PbqRenderer
              pbq={activeItem.data}
              response={pbqAnswers[activeItem.data.id]}
              onChange={(resp) =>
                setPbqAnswers((prev) => ({ ...prev, [activeItem.data.id]: resp }))
              }
              showThai={showThai}
            />
          )}

          {feedbackMode === 'immediate' && (
            <div className="btn-row">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleCheckImmediate(activeItem)}
              >
                <CheckCircle2 size={16} aria-hidden="true" />
                <span>ดูเฉลยข้อนี้ (Check Answer)</span>
              </button>
            </div>
          )}
        </section>
      )}

      {/* Prev / Next Controls */}
      <div className="btn-row" style={{ justifyContent: 'space-between' }}>
        <button
          type="button"
          className="btn"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>ข้อก่อนหน้า</span>
        </button>

        {currentIndex < sessionItems.length - 1 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              setCurrentIndex((prev) => Math.min(sessionItems.length - 1, prev + 1))
            }
          >
            <span>ข้อถัดไป</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        ) : feedbackMode === 'submit-all' ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmitAll}
          >
            <ClipboardCheck size={16} aria-hidden="true" />
            <span>ส่งคำตอบทั้งหมดและดูเฉลย</span>
          </button>
        ) : null}

        {currentIndex === sessionItems.length - 1 && feedbackMode === 'immediate' && (
          <button type="button" className="btn btn-success" onClick={resetToSetup}>
            <RotateCcw size={16} aria-hidden="true" />
            <span>ฝึกครบชุดแล้ว — เลือกชุดใหม่</span>
          </button>
        )}
      </div>
    </div>
  );
}
