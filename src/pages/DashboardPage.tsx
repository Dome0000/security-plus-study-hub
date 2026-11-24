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
  const latestMock = progress.examAttempts[0] ?? null;

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
      <div className="page-header">
        <div>
          <h1>แดชบอร์ดเตรียมสอบ {EXAM_METADATA.certificationName} ({EXAM_METADATA.examCode})</h1>
          <p className="page-subtitle">
            {EXAM_METADATA.examVersion} • ตรวจทานขอบเขตล่าสุด {EXAM_METADATA.verifiedDate}
          </p>
        </div>
        {continueLesson && (
          <Link to={`/lessons/${continueLesson.id}`} className="btn btn-primary">
            <Play size={16} aria-hidden="true" />
            <span>
              เรียนต่อจากจุดเดิม ({continueLesson.id})
            </span>
          </Link>
        )}
      </div>

      {/* Active Mock Exam Resume Banner */}
      {activeSession && (
        <section className="alert alert-warning" aria-label="การสอบจำลองที่ทำค้างไว้">
          <Clock size={22} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: '4px' }}>
              คุณมีการสอบจำลองที่ยังไม่ส่งคำตอบ ({activeSession.mode.toUpperCase()})
            </h2>
            <p style={{ marginBottom: '10px' }}>
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

      {/* SY0-701 Exam Scope & Retirement Info */}
      <section className="card stack-sm" aria-label="สถานะขอบเขตการสอบ SY0-701">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div className="btn-row">
            <span className="badge badge-success">
              <CheckCircle2 size={14} aria-hidden="true" />
              {EXAM_METADATA.examCode} เปิดสอบอยู่ (Active)
            </span>
            <span className="badge">
              วันหมดเขตสอบ EN: {EXAM_METADATA.retirementDateEn}
            </span>
            <span className="badge">
              วันหมดเขตสอบ TH: {EXAM_METADATA.retirementDateTh}
            </span>
          </div>
          <Link to="/sources" className="btn btn-sm">
            รายละเอียดขอบเขต & แหล่งอ้างอิง
          </Link>
        </div>
        <p className="prose-text" style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          {EXAM_METADATA.newerVersionNote}
        </p>
      </section>

      {/* Summary KPI Cards */}
      <section className="grid-4" aria-label="สรุปความก้าวหน้าการเรียน">
        <div className="card stack-sm">
          <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
            บทเรียนที่อ่านจบแล้ว
          </div>
          <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800 }}>
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
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            สำเร็จ {lessonPercent}%
          </div>
        </div>

        <div className="card stack-sm">
          <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
            คลังข้อสอบที่เคยฝึกแล้ว
          </div>
          <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800 }}>
            {totalAnsweredItems} ข้อ
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            จากคลัง {(bundle?.questions.length ?? 0) + (bundle?.pbqs.length ?? 0)} ข้อ (รวม PBQ)
          </div>
        </div>

        <div className="card stack-sm">
          <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
            ผลสอบจำลองล่าสุด (Mock Exam)
          </div>
          <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800 }}>
            {latestMock ? `${latestMock.percentScore}%` : '—'}
          </div>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
            {latestMock
              ? `${latestMock.mode.toUpperCase()} (${latestMock.earnedPoints}/${latestMock.totalItems}) • เป้าหมายฝึก ${EXAM_METADATA.practiceTargetPercent}%`
              : 'ยังไม่มีประวัติการสอบจำลอง'}
          </div>
        </div>

        <div className="card stack-sm">
          <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
            แผนอ่านสอบ 30 วัน
          </div>
          <div style={{ fontSize: 'var(--text-2xl)', fontWeight: 800 }}>
            {progress.completedStudyDays.length} / {bundle?.studyPlan.length ?? 0} วัน
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
                <th scope="col">ความแม่นยำ Practice & Mock</th>
                <th scope="col">การฝึก</th>
              </tr>
            </thead>
            <tbody>
              {EXAM_METADATA.domains.map((domain) => {
                const stat = domainStats.get(domain.id);
                const accuracy =
                  stat && stat.attempts > 0
                    ? Math.round((stat.correct / stat.attempts) * 100)
                    : null;

                return (
                  <tr key={domain.id}>
                    <td>
                      <DomainBadge domainId={domain.id} compact />
                      <div style={{ fontWeight: 700, marginTop: '4px' }}>{domain.titleTh}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                        {domain.titleEn}
                      </div>
                    </td>
                    <td style={{ fontWeight: 700 }}>{domain.weightPercent}%</td>
                    <td>
                      {stat ? `${stat.lessonsDone} / ${stat.lessonsTotal}` : '0 / 0'}
                    </td>
                    <td style={{ minWidth: '180px' }}>
                      {accuracy !== null && stat ? (
                        <div className="stack-sm" style={{ gap: '6px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-xs)', fontWeight: 700 }}>
                            <span>{accuracy}%</span>
                            <span>
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
                  <div key={lesson.id} className="card-subtle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <div>
                      <div className="btn-row" style={{ marginBottom: '4px' }}>
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
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                        {lesson.titleEn} • ประมาณ {lesson.estimatedMinutes} นาที
                      </div>
                    </div>
                    <Link to={`/lessons/${lesson.id}`} className="btn btn-sm">
                      <span>อ่านบทเรียน</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section className="card stack-md" aria-label="เมนูด่วนสำหรับเตรียมสอบ">
          <h2 style={{ margin: 0 }}>เครื่องมือเตรียมสอบทั้งหมด</h2>
          <div className="stack-sm">
            <Link to="/curriculum" className="card-subtle" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <BookOpen size={20} aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
              <div>
                <div style={{ fontWeight: 700 }}>คลังบทเรียน 5 Domains</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  สรุปแนวคิดไทย-อังกฤษ ตารางเปรียบเทียบ และ Knowledge Check ท้ายบท
                </div>
              </div>
            </Link>

            <Link to="/practice" className="card-subtle" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ClipboardCheck size={20} aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
              <div>
                <div style={{ fontWeight: 700 }}>Practice Mode (MCQ, MSQ & PBQ)</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  กรองตาม Objective 1.1–5.6 หรือฝึกซ้ำเฉพาะข้อที่เคยตอบผิด
                </div>
              </div>
            </Link>

            <Link to="/mock-exam" className="card-subtle" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldCheck size={20} aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
              <div>
                <div style={{ fontWeight: 700 }}>Mock Exam จับเวลา</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  ชุดสอบจำลอง + สุ่มข้อสอบตามสัดส่วน Domain พร้อม Flag & Resume
                </div>
              </div>
            </Link>

            <Link to="/glossary" className="card-subtle" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Layers size={20} aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
              <div>
                <div style={{ fontWeight: 700 }}>Flashcards & Glossary คำศัพท์</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                  ทบทวนตัวย่อสำคัญและจุดเปรียบเทียบแบบ Active Recall
                </div>
              </div>
            </Link>

            {latestMock && (
              <Link to={`/results/${latestMock.attemptId}`} className="card-subtle" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Award size={20} aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <div style={{ fontWeight: 700 }}>ดูผลสอบจำลองล่าสุด ({latestMock.percentScore}%)</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                    วิเคราะห์จุดอ่อนราย Objective พร้อมลิงก์กลับไปทบทวนบทเรียน
                  </div>
                </div>
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
