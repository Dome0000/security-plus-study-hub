import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Info,
  Layers,
  Play,
  ShieldCheck
} from 'lucide-react';
import { DomainBadge } from '../components/DomainBadge';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';
import {
  countUnansweredItems,
  formatRemainingTime,
  getRemainingMs
} from '../engine';
import type { DomainId } from '../types';

const RING_RADIUS = 42;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function DashboardPage() {
  const {
    bundle,
    loading,
    loadError,
    lessonsById,
    questionsById,
    pbqsById,
    progress
  } = useAppContext();

  const lessons = useMemo(() => bundle?.lessons ?? [], [bundle]);
  const completedSet = useMemo(
    () => new Set(progress.completedLessonIds),
    [progress.completedLessonIds]
  );

  const continueLesson = useMemo(() => {
    if (progress.lastLessonId && lessonsById.has(progress.lastLessonId)) {
      return lessonsById.get(progress.lastLessonId) ?? null;
    }
    const firstUncompleted = lessons.find((l) => !completedSet.has(l.id));
    return firstUncompleted ?? lessons[0] ?? null;
  }, [progress.lastLessonId, lessonsById, lessons, completedSet]);

  const completedCount = lessons.filter((l) => completedSet.has(l.id)).length;
  const lessonPercent =
    lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  const domainStats = useMemo(() => {
    const map = new Map<
      DomainId,
      { attempts: number; correct: number; lessonsTotal: number; lessonsDone: number }
    >();
    for (const d of EXAM_METADATA.domains) {
      map.set(d.id, { attempts: 0, correct: 0, lessonsTotal: 0, lessonsDone: 0 });
    }

    for (const lesson of lessons) {
      const entry = map.get(lesson.domainId);
      if (entry) {
        entry.lessonsTotal += 1;
        if (completedSet.has(lesson.id)) {
          entry.lessonsDone += 1;
        }
      }
    }

    for (const [itemId, history] of Object.entries(progress.questionHistory)) {
      const q = questionsById.get(itemId);
      const pbq = pbqsById.get(itemId);
      const domainId = q?.domainId ?? pbq?.domainId;
      if (!domainId) continue;
      const entry = map.get(domainId);
      if (entry) {
        entry.attempts += history.attempts;
        entry.correct += history.correctCount;
      }
    }

    return map;
  }, [lessons, completedSet, progress.questionHistory, questionsById, pbqsById]);

  const recommendedLessons = useMemo(() => {
    const recIds = new Set<string>();

    // Priority 1: lessons tied to recently missed questions/PBQs
    for (const [itemId, history] of Object.entries(progress.questionHistory)) {
      if (!history.lastResultCorrect) {
        const q = questionsById.get(itemId);
        const pbq = pbqsById.get(itemId);
        const relIds = q?.relatedLessonIds ?? pbq?.relatedLessonIds ?? [];
        for (const lid of relIds) {
          if (lessonsById.has(lid)) recIds.add(lid);
        }
      }
    }

    // Priority 2: recommended lessons from most recent mock exam
    const latestAttempt = progress.examAttempts[0];
    if (latestAttempt) {
      for (const lid of latestAttempt.recommendedLessonIds) {
        if (lessonsById.has(lid)) recIds.add(lid);
      }
    }

    // Priority 3: uncompleted lessons
    for (const l of lessons) {
      if (!completedSet.has(l.id)) {
        recIds.add(l.id);
      }
      if (recIds.size >= 4) break;
    }

    return [...recIds]
      .slice(0, 4)
      .map((id) => lessonsById.get(id))
      .filter((l): l is NonNullable<typeof l> => l !== undefined);
  }, [progress.questionHistory, progress.examAttempts, questionsById, pbqsById, lessonsById, lessons, completedSet]);

  const activeSession =
    progress.activeExamSession && !progress.activeExamSession.submitted
      ? progress.activeExamSession
      : null;

  const activeRemainingStr = activeSession
    ? formatRemainingTime(getRemainingMs(activeSession, Date.now()))
    : null;
  const activeUnanswered = activeSession
    ? countUnansweredItems(activeSession, questionsById)
    : 0;

  const totalAnsweredItems = Object.keys(progress.questionHistory).length;
  const totalBankCount = (bundle?.questions.length ?? 0) + (bundle?.pbqs.length ?? 0);
  const bankPercent =
    totalBankCount > 0 ? Math.min(100, Math.round((totalAnsweredItems / totalBankCount) * 100)) : 0;
  const totalStudyDays = bundle?.studyPlan.length ?? 0;
  const studyPlanPercent =
    totalStudyDays > 0
      ? Math.min(100, Math.round((progress.completedStudyDays.length / totalStudyDays) * 100))
      : 0;
  const latestMock = progress.examAttempts[0] ?? null;

  const ringDashOffset = RING_CIRCUMFERENCE - (lessonPercent / 100) * RING_CIRCUMFERENCE;

  if (loading) {
    return (
      <div className="card" aria-busy="true">
        กำลังโหลดข้อมูลการเรียน SY0-701...
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="alert alert-danger" role="alert">
        <AlertCircle size={20} aria-hidden="true" />
        <div>เกิดข้อผิดพลาดในการโหลดคลังเนื้อหา: {loadError}</div>
      </div>
    );
  }

  return (
    <div className="stack-lg">
      {/* Hero Banner */}
      <section className="hero-banner" aria-label="ภาพรวมการเตรียมสอบ SY0-701">
        <div className="hero-banner-grid">
          <div className="stack-md" style={{ gap: '14px' }}>
            <div className="hero-pill tabular-nums">
              <span className="status-dot" aria-hidden="true" />
              <span>
                {EXAM_METADATA.examCode} เปิดสอบอยู่ (Active) • EN {EXAM_METADATA.retirementDateEn} / TH{' '}
                {EXAM_METADATA.retirementDateTh}
              </span>
            </div>

            <div>
              <h1>
                แดชบอร์ดเตรียมสอบ {EXAM_METADATA.certificationName} ({EXAM_METADATA.examCode})
              </h1>
              <p style={{ margin: '6px 0 0', opacity: 0.88, fontSize: 'var(--text-sm)' }}>
                {EXAM_METADATA.examVersion} • ตรวจทานขอบเขตล่าสุด {EXAM_METADATA.verifiedDate}
              </p>
            </div>

            <div className="btn-row">
              {continueLesson && (
                <Link to={`/lessons/${continueLesson.id}`} className="btn btn-primary">
                  <Play size={16} aria-hidden="true" />
                  <span>เรียนต่อจากจุดเดิม ({continueLesson.id})</span>
                </Link>
              )}
              <Link to="/mock-exam" className="btn btn-hero-secondary">
                <ShieldCheck size={16} aria-hidden="true" />
                <span>เริ่มสอบจำลอง</span>
              </Link>
            </div>
          </div>

          <div className="hero-ring-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ position: 'relative', width: '104px', height: '104px', flexShrink: 0 }}>
                <svg
                  width="104"
                  height="104"
                  viewBox="0 0 104 104"
                  aria-hidden="true"
                  style={{ display: 'block', transform: 'rotate(-90deg)' }}
                >
                  <circle
                    cx="52"
                    cy="52"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.16)"
                    strokeWidth="9"
                  />
                  <circle
                    cx="52"
                    cy="52"
                    r={RING_RADIUS}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray={RING_CIRCUMFERENCE}
                    strokeDashoffset={ringDashOffset}
                  />
                </svg>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  <span
                    className="tabular-nums"
                    style={{ fontSize: 'var(--text-xl)', fontWeight: 800, lineHeight: 1.1 }}
                  >
                    {lessonPercent}%
                  </span>
                  <span style={{ fontSize: '0.68rem', opacity: 0.8 }}>ความพร้อมบทเรียน</span>
                </div>
              </div>

              <div className="stack-sm" style={{ gap: '8px', flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, opacity: 0.82 }}>
                  สถานะปัจจุบัน (Readiness)
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: 'var(--text-sm)' }}>
                  <span style={{ opacity: 0.85 }}>บทเรียนจบ</span>
                  <strong className="tabular-nums">
                    {completedCount}/{lessons.length}
                  </strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: 'var(--text-sm)' }}>
                  <span style={{ opacity: 0.85 }}>ฝึกข้อสอบ</span>
                  <strong className="tabular-nums">{totalAnsweredItems} ข้อ</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', fontSize: 'var(--text-sm)' }}>
                  <span style={{ opacity: 0.85 }}>Mock ล่าสุด</span>
                  <strong className="tabular-nums">
                    {latestMock ? `${latestMock.percentScore}%` : '—'}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stack-sm" style={{ gap: '6px', marginTop: '18px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              fontSize: 'var(--text-xs)',
              opacity: 0.86
            }}
          >
            <span>สัดส่วนน้ำหนักข้อสอบอย่างเป็นทางการ (SY0-701 D1–D5)</span>
            <Link to="/sources" style={{ color: '#bae6fd', fontWeight: 700 }}>
              รายละเอียดขอบเขต &amp; แหล่งอ้างอิง
            </Link>
          </div>
          <div className="domain-weight-strip" aria-label="สัดส่วนน้ำหนักข้อสอบ 5 Domains">
            {EXAM_METADATA.domains.map((d) => (
              <div
                key={d.id}
                className="domain-weight-segment tabular-nums"
                data-domain={d.id}
                style={{ flex: d.weightPercent }}
                title={`${d.id} ${d.titleEn}: ${d.weightPercent}%`}
              >
                <span>{d.id}</span>
                <span>{d.weightPercent}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Mock Exam Resume Banner */}
      {activeSession && (
        <section className="alert alert-warning" aria-label="การสอบจำลองที่ทำค้างไว้">
          <Clock size={22} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: '4px' }}>
              คุณมีการสอบจำลองที่ยังไม่ส่งคำตอบ ({activeSession.mode.toUpperCase()})
            </h2>
            <p style={{ marginBottom: '10px' }} className="tabular-nums">
              เวลาคงเหลือโดยประมาณ: <strong>{activeRemainingStr}</strong> • ยังไม่ได้ตอบ/ไม่ครบ{' '}
              <strong>{activeUnanswered}</strong> จาก {activeSession.itemOrder.length} ข้อ
            </p>
            <Link to="/mock-exam" className="btn btn-primary btn-sm">
              <ShieldCheck size={15} aria-hidden="true" />
              <span>กลับไปทำข้อสอบต่อทันที</span>
            </Link>
          </div>
        </section>
      )}

      {/* SY0-701 Scope Note */}
      <section className="alert alert-info" aria-label="สถานะขอบเขตการสอบ SY0-701">
        <Info size={20} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
        <p className="prose-text" style={{ margin: 0, fontSize: 'var(--text-sm)' }}>
          {EXAM_METADATA.newerVersionNote}
        </p>
      </section>

      {/* Summary KPI Cards */}
      <section className="grid-4" aria-label="สรุปความก้าวหน้าการเรียน">
        <div className="card kpi-card stack-sm">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
              บทเรียนที่อ่านจบแล้ว
            </span>
            <span className="kpi-icon-box kpi-icon-blue" aria-hidden="true">
              <BookOpen size={18} />
            </span>
          </div>
          <div className="kpi-value tabular-nums">
            {completedCount} / {lessons.length}
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="ความคืบหน้าการอ่านบทเรียน"
            aria-valuenow={lessonPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="progress-fill" style={{ width: `${lessonPercent}%` }} />
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }} className="tabular-nums">
            สำเร็จ {lessonPercent}%
          </div>
        </div>

        <div className="card kpi-card stack-sm">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
              คลังข้อสอบที่เคยฝึกแล้ว
            </span>
            <span className="kpi-icon-box kpi-icon-cyan" aria-hidden="true">
              <ClipboardCheck size={18} />
            </span>
          </div>
          <div className="kpi-value tabular-nums">
            {totalAnsweredItems} ข้อ
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="สัดส่วนข้อสอบที่เคยฝึกแล้ว"
            aria-valuenow={bankPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="progress-fill" style={{ width: `${bankPercent}%` }} />
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }} className="tabular-nums">
            จากคลัง {totalBankCount} ข้อ (รวม PBQ)
          </div>
        </div>

        <div className="card kpi-card stack-sm">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
              ผลสอบจำลองล่าสุด (Mock Exam)
            </span>
            <span className="kpi-icon-box kpi-icon-indigo" aria-hidden="true">
              <Award size={18} />
            </span>
          </div>
          <div className="kpi-value tabular-nums">
            {latestMock ? `${latestMock.percentScore}%` : '—'}
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="คะแนนสอบจำลองล่าสุด"
            aria-valuenow={latestMock ? latestMock.percentScore : 0}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className={`progress-fill ${
                latestMock && latestMock.percentScore >= EXAM_METADATA.practiceTargetPercent
                  ? 'progress-fill-success'
                  : latestMock && latestMock.percentScore >= 60
                    ? 'progress-fill-warning'
                    : ''
              }`}
              style={{ width: `${latestMock ? latestMock.percentScore : 0}%` }}
            />
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }} className="tabular-nums">
            {latestMock
              ? `${latestMock.mode.toUpperCase()} (${latestMock.earnedPoints}/${latestMock.totalItems}) • เป้าหมายฝึก ${EXAM_METADATA.practiceTargetPercent}%`
              : 'ยังไม่มีประวัติการสอบจำลอง'}
          </div>
        </div>

        <div className="card kpi-card stack-sm">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
              แผนอ่านสอบ 30 วัน
            </span>
            <span className="kpi-icon-box kpi-icon-emerald" aria-hidden="true">
              <CalendarDays size={18} />
            </span>
          </div>
          <div className="kpi-value tabular-nums">
            {progress.completedStudyDays.length} / {totalStudyDays} วัน
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-label="ความคืบหน้าแผนอ่านสอบ 30 วัน"
            aria-valuenow={studyPlanPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="progress-fill progress-fill-success" style={{ width: `${studyPlanPercent}%` }} />
          </div>
          <Link to="/study-plan" className="btn btn-sm" style={{ alignSelf: 'flex-start' }}>
            <CalendarDays size={14} aria-hidden="true" />
            <span>เปิดแผนอ่านสอบ</span>
          </Link>
        </div>
      </section>

      {/* Per-Domain Breakdown */}
      <section className="card stack-md" aria-label="ความแม่นยำและความก้าวหน้าราย Domain">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <h2 style={{ margin: 0 }}>ความพร้อมแยกตาม 5 Domain (SY0-701 Official Weights)</h2>
          <Link to="/practice" className="btn btn-sm">
            <ClipboardCheck size={15} aria-hidden="true" />
            <span>ฝึกทำข้อสอบแยก Domain</span>
          </Link>
        </div>

        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th scope="col">Domain</th>
                <th scope="col">น้ำหนักข้อสอบ</th>
                <th scope="col">บทเรียน</th>
                <th scope="col">ความแม่นยำ Practice &amp; Mock</th>
                <th scope="col">การฝึก</th>
              </tr>
            </thead>
            <tbody>
              {EXAM_METADATA.domains.map((domain) => {
                const stat = domainStats.get(domain.id);
                const lessonRatio =
                  stat && stat.lessonsTotal > 0
                    ? Math.round((stat.lessonsDone / stat.lessonsTotal) * 100)
                    : 0;
                const accuracy =
                  stat && stat.attempts > 0
                    ? Math.round((stat.correct / stat.attempts) * 100)
                    : null;

                return (
                  <tr key={domain.id}>
                    <td>
                      <DomainBadge domainId={domain.id} compact />
                      <div style={{ fontWeight: 700, marginTop: '6px' }}>{domain.titleTh}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                        {domain.titleEn}
                      </div>
                    </td>
                    <td className="tabular-nums" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>
                      {domain.weightPercent}%
                    </td>
                    <td style={{ minWidth: '140px' }}>
                      <div className="stack-sm" style={{ gap: '6px' }}>
                        <div
                          className="tabular-nums"
                          style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', fontWeight: 700 }}
                        >
                          <span>{stat ? `${stat.lessonsDone} / ${stat.lessonsTotal}` : '0 / 0'}</span>
                          <span style={{ color: 'var(--text-muted)' }}>{lessonRatio}%</span>
                        </div>
                        <div
                          className="progress-track"
                          role="progressbar"
                          aria-label={`ความคืบหน้าบทเรียน Domain ${domain.id}`}
                          aria-valuenow={lessonRatio}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div className="progress-fill" style={{ width: `${lessonRatio}%` }} />
                        </div>
                      </div>
                    </td>
                    <td style={{ minWidth: '180px' }}>
                      {accuracy !== null && stat ? (
                        <div className="stack-sm" style={{ gap: '6px' }}>
                          <div
                            className="tabular-nums"
                            style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', fontWeight: 700 }}
                          >
                            <span>{accuracy}%</span>
                            <span style={{ color: 'var(--text-muted)' }}>
                              ({stat.correct}/{stat.attempts} ครั้ง)
                            </span>
                          </div>
                          <div
                            className="progress-track"
                            role="progressbar"
                            aria-label={`ความแม่นยำ Domain ${domain.id}`}
                            aria-valuenow={accuracy}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className={`progress-fill ${
                                accuracy >= EXAM_METADATA.practiceTargetPercent
                                  ? 'progress-fill-success'
                                  : accuracy >= 60
                                    ? 'progress-fill-warning'
                                    : ''
                              }`}
                              style={{ width: `${accuracy}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                          ยังไม่มีประวัติการทำข้อสอบ
                        </span>
                      )}
                    </td>
                    <td>
                      <Link to={`/practice?domain=${domain.id}`} className="btn btn-sm">
                        ฝึก {domain.id}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recommended Review & Quick Actions */}
      <div className="grid-2">
        <section className="card stack-md" aria-label="บทเรียนแนะนำให้ทบทวน">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
            <h2 style={{ margin: 0 }}>บทเรียนแนะนำให้ทบทวน</h2>
            <Link to="/curriculum" style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>
              ดูหลักสูตรทั้งหมด
            </Link>
          </div>

          {recommendedLessons.length === 0 ? (
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              ยังไม่มีรายการแนะนำเพิ่มเติม ลองทำข้อสอบฝึกหัดหรือสอบจำลองเพื่อวิเคราะห์จุดอ่อน
            </p>
          ) : (
            <div className="stack-sm">
              {recommendedLessons.map((lesson) => {
                const isDone = completedSet.has(lesson.id);
                return (
                  <Link
                    key={lesson.id}
                    to={`/lessons/${lesson.id}`}
                    className="tool-link-card card-interactive"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="btn-row" style={{ marginBottom: '6px' }}>
                        <DomainBadge domainId={lesson.domainId} objectiveIds={lesson.objectiveIds} compact />
                        {isDone && (
                          <span className="badge badge-success">
                            <CheckCircle2 size={12} aria-hidden="true" />
                            อ่านจบแล้ว
                          </span>
                        )}
                      </div>
                      <div style={{ fontWeight: 700 }}>
                        {lesson.id}: {lesson.titleTh}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }} className="tabular-nums">
                        {lesson.titleEn} • ประมาณ {lesson.estimatedMinutes} นาที
                      </div>
                    </div>
                    <span className="btn btn-sm" aria-hidden="true">
                      <span>อ่านบทเรียน</span>
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

        <section className="card stack-md" aria-label="เมนูด่วนสำหรับเตรียมสอบ">
          <h2 style={{ margin: 0 }}>เครื่องมือเตรียมสอบทั้งหมด</h2>
          <div className="stack-sm">
            <Link
              to="/curriculum"
              className="tool-link-card card-interactive"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="kpi-icon-box kpi-icon-blue" aria-hidden="true">
                <BookOpen size={18} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700 }}>คลังบทเรียน 5 Domains</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  สรุปแนวคิดไทย-อังกฤษ ตารางเปรียบเทียบ และ Knowledge Check ท้ายบท
                </div>
              </div>
              <ArrowRight size={16} aria-hidden="true" style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </Link>

            <Link
              to="/practice"
              className="tool-link-card card-interactive"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="kpi-icon-box kpi-icon-cyan" aria-hidden="true">
                <ClipboardCheck size={18} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700 }}>Practice Mode (MCQ, MSQ &amp; PBQ)</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  กรองตาม Objective 1.1–5.6 หรือฝึกซ้ำเฉพาะข้อที่เคยตอบผิด
                </div>
              </div>
              <ArrowRight size={16} aria-hidden="true" style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </Link>

            <Link
              to="/mock-exam"
              className="tool-link-card card-interactive"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="kpi-icon-box kpi-icon-indigo" aria-hidden="true">
                <ShieldCheck size={18} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700 }}>Mock Exam จับเวลา</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  ชุดสอบจำลอง + สุ่มข้อสอบตามสัดส่วน Domain พร้อม Flag &amp; Resume
                </div>
              </div>
              <ArrowRight size={16} aria-hidden="true" style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </Link>

            <Link
              to="/glossary"
              className="tool-link-card card-interactive"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="kpi-icon-box kpi-icon-emerald" aria-hidden="true">
                <Layers size={18} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 700 }}>Flashcards &amp; Glossary คำศัพท์</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  ทบทวนตัวย่อสำคัญและจุดเปรียบเทียบแบบ Active Recall
                </div>
              </div>
              <ArrowRight size={16} aria-hidden="true" style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </Link>

            {latestMock && (
              <Link
                to={`/results/${latestMock.attemptId}`}
                className="tool-link-card card-interactive"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className="kpi-icon-box kpi-icon-indigo" aria-hidden="true">
                  <Award size={18} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700 }} className="tabular-nums">
                    ดูผลสอบจำลองล่าสุด ({latestMock.percentScore}%)
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                    วิเคราะห์จุดอ่อนราย Objective พร้อมลิงก์กลับไปทบทวนบทเรียน
                  </div>
                </div>
                <ArrowRight size={16} aria-hidden="true" style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
