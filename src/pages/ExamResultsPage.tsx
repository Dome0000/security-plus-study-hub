import { useId, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  AlertCircle,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Info,
  Languages,
  ShieldCheck
} from 'lucide-react';
import { DomainBadge } from '../components/DomainBadge';
import { QuestionReviewCard } from '../components/QuestionReviewCard';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';

type ReviewFilter = 'all' | 'missed' | 'flagged' | 'pbq';

function readStoredFlaggedIds(attemptId: string): string[] {
  try {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const raw = window.sessionStorage.getItem(`sp_flagged_${attemptId}`);
      if (!raw) return [];
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter((v): v is string => typeof v === 'string');
      }
    }
  } catch {
    // Ignore storage read issues
  }
  return [];
}

export function ExamResultsPage() {
  const { attemptId } = useParams<{ attemptId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    loading,
    lessonsById,
    questionsById,
    pbqsById,
    objectivesById,
    progress,
    toggleThaiTranslation
  } = useAppContext();

  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');
  const attemptSelectId = useId();

  const attempt = useMemo(() => {
    if (attemptId) {
      return progress.examAttempts.find((a) => a.attemptId === attemptId) ?? null;
    }
    return progress.examAttempts[0] ?? null;
  }, [attemptId, progress.examAttempts]);

  const flaggedSet = useMemo(() => {
    if (!attempt) return new Set<string>();
    const stateObj = location.state as { flaggedIds?: unknown } | null;
    if (stateObj && Array.isArray(stateObj.flaggedIds)) {
      return new Set(
        stateObj.flaggedIds.filter((id): id is string => typeof id === 'string')
      );
    }
    return new Set(readStoredFlaggedIds(attempt.attemptId));
  }, [attempt, location.state]);

  const showThai = progress.preferences.showThaiTranslation;

  if (loading) {
    return <div className="card">กำลังโหลดผลสอบ...</div>;
  }

  if (progress.examAttempts.length === 0) {
    return (
      <div className="card stack-md">
        <h1>ผลสอบจำลองและวิเคราะห์จุดอ่อน</h1>
        <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
          ยังไม่มีประวัติการทำข้อสอบจำลอง (Mock Exam) ในเบราว์เซอร์นี้
        </p>
        <div>
          <Link to="/mock-exam" className="btn btn-primary">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>ไปหน้าสอบจำลอง (Mock Exam)</span>
          </Link>
        </div>
      </div>
    );
  }

  if (!attempt) {
    return (
      <div className="card stack-md">
        <h1>ไม่พบประวัติผลสอบที่ระบุ</h1>
        <p style={{ margin: 0 }}>ไม่พบรหัสผลสอบ &ldquo;{attemptId}&rdquo;</p>
        <div>
          <Link to="/results" className="btn btn-primary">
            ดูผลสอบล่าสุด
          </Link>
        </div>
      </div>
    );
  }

  const reachedPracticeTarget = attempt.percentScore >= EXAM_METADATA.practiceTargetPercent;
  const missedCount = attempt.itemResults.filter((r) => !r.isCorrect).length;
  const flaggedCount = attempt.itemResults.filter((r) => flaggedSet.has(r.itemId)).length;
  const pbqCount = attempt.itemResults.filter((r) => r.kind === 'pbq').length;

  const filteredItems = attempt.itemResults.filter((item) => {
    if (reviewFilter === 'missed') return !item.isCorrect;
    if (reviewFilter === 'flagged') return flaggedSet.has(item.itemId);
    if (reviewFilter === 'pbq') return item.kind === 'pbq';
    return true;
  });

  const submittedDateStr = new Date(attempt.submittedAt).toLocaleString('th-TH');

  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h1>ผลการสอบจำลอง ({attempt.mode.toUpperCase()})</h1>
          <p className="page-subtitle">
            ส่งคำตอบเมื่อ {submittedDateStr}
            {attempt.autoSubmitted ? ' • ส่งอัตโนมัติเมื่อหมดเวลา' : ''}
          </p>
        </div>

        <div className="btn-row">
          {progress.examAttempts.length > 1 && (
            <div className="field-group" style={{ minWidth: '220px' }}>
              <label htmlFor={attemptSelectId} className="sr-only">
                เลือกดูประวัติการสอบครั้งอื่น
              </label>
              <select
                id={attemptSelectId}
                className="select"
                value={attempt.attemptId}
                onChange={(ev) => void navigate(`/results/${ev.target.value}`)}
              >
                {progress.examAttempts.map((a) => (
                  <option key={a.attemptId} value={a.attemptId}>
                    {a.mode.toUpperCase()} — {a.percentScore}% ({new Date(a.submittedAt).toLocaleDateString('th-TH')})
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="button"
            className={`btn btn-sm ${showThai ? 'btn-active' : ''}`}
            aria-pressed={showThai}
            onClick={toggleThaiTranslation}
          >
            <Languages size={15} aria-hidden="true" />
            <span>{showThai ? 'EN + TH' : 'EN เท่านั้น'}</span>
          </button>

          <Link to="/mock-exam" className="btn btn-sm btn-primary">
            <ShieldCheck size={15} aria-hidden="true" />
            <span>ทำ Mock Exam ใหม่</span>
          </Link>
        </div>
      </div>

      {/* Score Summary Card */}
      <section className="card stack-md" aria-label="สรุปคะแนนรวม">
        <div className="grid-3">
          <div className="card-subtle stack-sm">
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
              คะแนนร้อยละ (Percentage Score)
            </div>
            <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 800 }}>
              {attempt.percentScore}%
            </div>
            <div>
              {reachedPracticeTarget ? (
                <span className="badge badge-success">
                  <CheckCircle2 size={14} aria-hidden="true" />
                  ถึงเป้าหมายการฝึก {EXAM_METADATA.practiceTargetPercent}%
                </span>
              ) : (
                <span className="badge badge-warning">
                  <AlertCircle size={14} aria-hidden="true" />
                  ยังไม่ถึงเป้าหมายการฝึก {EXAM_METADATA.practiceTargetPercent}%
                </span>
              )}
            </div>
          </div>

          <div className="card-subtle stack-sm">
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
              คะแนนดิบที่ได้ / จำนวนข้อทั้งหมด
            </div>
            <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800 }}>
              {attempt.earnedPoints} / {attempt.totalItems} คะแนน
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
              สูตรคำนวณ: (คะแนนที่ได้ / จำนวนข้อทั้งหมด) × 100
            </div>
          </div>

          <div className="card-subtle stack-sm">
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
              ข้อที่ผิด / ได้ไม่เต็ม
            </div>
            <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800 }}>
              {missedCount} ข้อ
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
              พบจุดอ่อน {attempt.weakObjectiveIds.length} Objectives • แนะนำทบทวน{' '}
              {attempt.recommendedLessonIds.length} บทเรียน
            </div>
          </div>
        </div>

        <div className="alert alert-info" role="note">
          <Info size={20} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div className="prose-text">
            <strong>หมายเหตุสำคัญเรื่องเกณฑ์คะแนน: </strong>
            เกณฑ์ <strong>เป้าหมายการฝึก {EXAM_METADATA.practiceTargetPercent}%</strong> เป็นเกณฑ์อ้างอิงสำหรับการฝึกฝนภายในเว็บไซต์นี้เท่านั้น{' '}
            <strong>ไม่ใช่</strong>คะแนนสอบผ่านอย่างเป็นทางการของ CompTIA ({EXAM_METADATA.officialPassingScore} จากสเกล {EXAM_METADATA.officialScoreScale}) และผลสอบจำลองนี้ไม่รับประกันหรือพยากรณ์ผลการสอบจริง
          </div>
        </div>
      </section>

      {/* Domain Breakdown */}
      <section className="card stack-md" aria-label="ผลคะแนนแยกตาม Domain">
        <h2 style={{ margin: 0 }}>ผลคะแนนแยกตาม 5 Domain</h2>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Domain</th>
                <th scope="col">น้ำหนักจริง</th>
                <th scope="col">คะแนนที่ได้</th>
                <th scope="col">ความแม่นยำ (%)</th>
              </tr>
            </thead>
            <tbody>
              {attempt.domainScores.map((ds) => {
                const domainMeta = EXAM_METADATA.domains.find((d) => d.id === ds.domainId);
                return (
                  <tr key={ds.domainId}>
                    <td>
                      <DomainBadge domainId={ds.domainId} compact />
                      {domainMeta && (
                        <div style={{ fontSize: 'var(--text-xs)', marginTop: '4px', fontWeight: 700 }}>
                          {domainMeta.titleTh}
                        </div>
                      )}
                    </td>
                    <td>{domainMeta ? `${domainMeta.weightPercent}%` : '—'}</td>
                    <td>
                      {ds.earnedPoints} / {ds.totalItems}
                    </td>
                    <td style={{ minWidth: '180px' }}>
                      {ds.totalItems > 0 ? (
                        <div className="stack-sm" style={{ gap: '4px' }}>
                          <span style={{ fontWeight: 700, fontSize: 'var(--text-xs)' }}>
                            {ds.percent}%
                          </span>
                          <div
                            className="progress-track"
                            role="progressbar"
                            aria-label={`คะแนน Domain ${ds.domainId}`}
                            aria-valuenow={ds.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className={`progress-fill ${
                                ds.percent >= EXAM_METADATA.practiceTargetPercent
                                  ? 'progress-fill-success'
                                  : ds.percent >= 60
                                    ? 'progress-fill-warning'
                                    : ''
                              }`}
                              style={{ width: `${ds.percent}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                          ไม่มีข้อสอบในชุดนี้
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Weak Objectives & Recommended Lessons */}
      <div className="grid-2">
        <section className="card stack-md" aria-label="Objective ที่ควรทบทวนเพิ่มเติม">
          <h2 style={{ margin: 0 }}>Objectives ที่ควรฝึกซ้ำ</h2>
          {attempt.weakObjectiveIds.length === 0 ? (
            <div className="alert alert-success">
              <Award size={18} aria-hidden="true" />
              <span>ยอดเยี่ยม! ไม่พบ Objective ที่ตอบผิดในชุดสอบนี้</span>
            </div>
          ) : (
            <div className="stack-sm">
              {attempt.weakObjectiveIds.map((oid) => {
                const obj = objectivesById.get(oid);
                return (
                  <div
                    key={oid}
                    className="card-subtle"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}
                  >
                    <div style={{ flex: '1 1 220px' }}>
                      <span className="badge" style={{ marginBottom: '4px' }}>
                        Objective {oid}
                      </span>
                      <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>
                        {obj?.titleTh ?? oid}
                      </div>
                      {obj && (
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                          {obj.titleEn}
                        </div>
                      )}
                    </div>
                    <Link to={`/practice?objective=${oid}`} className="btn btn-sm">
                      <ClipboardCheck size={14} aria-hidden="true" />
                      <span>ฝึกข้อสอบ {oid}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="card stack-md" aria-label="บทเรียนแนะนำสำหรับทบทวน">
          <h2 style={{ margin: 0 }}>บทเรียนแนะนำให้ทบทวน</h2>
          {attempt.recommendedLessonIds.length === 0 ? (
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              ไม่มีบทเรียนที่ต้องทบทวนเร่งด่วนจากการสอบครั้งนี้
            </p>
          ) : (
            <div className="stack-sm">
              {attempt.recommendedLessonIds.map((lid) => {
                const lesson = lessonsById.get(lid);
                return (
                  <Link
                    key={lid}
                    to={`/lessons/${lid}`}
                    className="card-subtle"
                    style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}
                  >
                    <div>
                      <div style={{ fontWeight: 700 }}>
                        {lesson ? `${lid}: ${lesson.titleTh}` : lid}
                      </div>
                      {lesson && (
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                          {lesson.titleEn}
                        </div>
                      )}
                    </div>
                    <span className="btn btn-sm">
                      <BookOpen size={14} aria-hidden="true" />
                      <span>อ่านบทเรียน</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* Per-Item Review */}
      <section className="stack-md" aria-label="เฉลยและคำอธิบายรายข้อ">
        <div
          className="card"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}
        >
          <h2 style={{ margin: 0 }}>ตรวจสอบเฉลยรายข้อ</h2>
          <div className="btn-row">
            <button
              type="button"
              className={`btn btn-sm ${reviewFilter === 'all' ? 'btn-active' : ''}`}
              onClick={() => setReviewFilter('all')}
            >
              ทั้งหมด ({attempt.itemResults.length})
            </button>
            <button
              type="button"
              className={`btn btn-sm ${reviewFilter === 'missed' ? 'btn-active' : ''}`}
              onClick={() => setReviewFilter('missed')}
            >
              ข้อที่ผิด / ได้ไม่เต็ม ({missedCount})
            </button>
            <button
              type="button"
              className={`btn btn-sm ${reviewFilter === 'flagged' ? 'btn-active' : ''}`}
              onClick={() => setReviewFilter('flagged')}
            >
              ที่ปักธงไว้ ({flaggedCount})
            </button>
            <button
              type="button"
              className={`btn btn-sm ${reviewFilter === 'pbq' ? 'btn-active' : ''}`}
              onClick={() => setReviewFilter('pbq')}
            >
              เฉพาะ PBQ ({pbqCount})
            </button>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="card-subtle">ไม่มีรายการที่ตรงกับตัวกรองนี้</div>
        ) : (
          filteredItems.map((item) => {
            const origIndex = attempt.itemResults.indexOf(item);
            const question =
              item.kind === 'question' ? questionsById.get(item.itemId) : undefined;
            const pbq = item.kind === 'pbq' ? pbqsById.get(item.itemId) : undefined;

            return (
              <QuestionReviewCard
                key={item.itemId}
                indexLabel={`ข้อที่ ${origIndex + 1}`}
                kind={item.kind}
                question={question}
                pbq={pbq}
                selectedChoiceIds={item.selectedChoiceIds}
                pbqResponse={item.pbqResponse}
                rubricBreakdown={item.rubricBreakdown}
                isCorrect={item.isCorrect}
                earnedPoints={item.earnedPoints}
                isFlagged={flaggedSet.has(item.itemId)}
                showThai={showThai}
              />
            );
          })
        )}
      </section>
    </div>
  );
}
