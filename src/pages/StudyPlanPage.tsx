import { useId, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Lightbulb,
  RotateCcw,
  ShieldCheck
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type { StudyPlanDay } from '../types';

type DayTypeFilter = 'all' | StudyPlanDay['dayType'];
type StatusFilter = 'all' | 'pending' | 'done';

export function StudyPlanPage() {
  const { bundle, loading, lessonsById, progress, toggleStudyDay } = useAppContext();

  const [typeFilter, setTypeFilter] = useState<DayTypeFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const typeSelectId = useId();
  const statusSelectId = useId();

  const completedDaysSet = useMemo(
    () => new Set(progress.completedStudyDays),
    [progress.completedStudyDays]
  );
  const completedLessonsSet = useMemo(
    () => new Set(progress.completedLessonIds),
    [progress.completedLessonIds]
  );

  const studyDays = useMemo(
    () => [...(bundle?.studyPlan ?? [])].sort((a, b) => a.day - b.day),
    [bundle]
  );

  const filteredDays = useMemo(() => {
    return studyDays.filter((d) => {
      if (typeFilter !== 'all' && d.dayType !== typeFilter) return false;
      const isDone = completedDaysSet.has(d.day);
      if (statusFilter === 'done' && !isDone) return false;
      if (statusFilter === 'pending' && isDone) return false;
      return true;
    });
  }, [studyDays, typeFilter, statusFilter, completedDaysSet]);

  const doneCount = studyDays.filter((d) => completedDaysSet.has(d.day)).length;
  const percent =
    studyDays.length > 0 ? Math.round((doneCount / studyDays.length) * 100) : 0;

  if (loading) {
    return <div className="card">กำลังโหลดแผนอ่านสอบ 30 วัน...</div>;
  }

  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h1>แผนอ่านสอบ 30 วัน (30-Day Study Plan)</h1>
          <p className="page-subtitle">
            วางโครงสร้างไล่เรียงครบทั้ง 5 Domains พร้อมวันทบทวนและวันทำ Mock Exam
          </p>
        </div>
      </div>

      {/* Overall Progress & Filters */}
      <section className="card stack-md" aria-label="ความคืบหน้าแผนอ่านสอบ">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ fontWeight: 700 }}>
            <CalendarDays
              size={18}
              aria-hidden="true"
              style={{ verticalAlign: 'text-bottom', marginRight: '6px' }}
            />
            ทำเสร็จแล้ว {doneCount} / {studyDays.length} วัน ({percent}%)
          </div>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-label="ความคืบหน้าแผนอ่านสอบ 30 วัน"
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-fill progress-fill-success" style={{ width: `${percent}%` }} />
        </div>

        <div className="grid-2">
          <div className="field-group">
            <label htmlFor={typeSelectId} className="field-label">
              ประเภทกิจกรรมรายวัน
            </label>
            <select
              id={typeSelectId}
              className="select"
              value={typeFilter}
              onChange={(ev) => setTypeFilter(ev.target.value as DayTypeFilter)}
            >
              <option value="all">ทุกประเภท</option>
              <option value="study">วันเรียนเนื้อหาใหม่ (Study)</option>
              <option value="review">วันทบทวน (Review)</option>
              <option value="mock-exam">วันสอบจำลอง (Mock Exam)</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor={statusSelectId} className="field-label">
              สถานะการทำ
            </label>
            <select
              id={statusSelectId}
              className="select"
              value={statusFilter}
              onChange={(ev) => setStatusFilter(ev.target.value as StatusFilter)}
            >
              <option value="all">ทั้งหมด</option>
              <option value="pending">ยังไม่ได้ทำ</option>
              <option value="done">ทำเสร็จแล้ว</option>
            </select>
          </div>
        </div>
      </section>

      {/* Day Cards */}
      {filteredDays.length === 0 ? (
        <div className="card-subtle">ไม่พบวันในแผนอ่านสอบที่ตรงกับตัวกรอง</div>
      ) : (
        <div className="stack-md">
          {filteredDays.map((day) => {
            const isDone = completedDaysSet.has(day.day);
            const DayIcon =
              day.dayType === 'mock-exam'
                ? ShieldCheck
                : day.dayType === 'review'
                  ? RotateCcw
                  : BookOpen;
            const dayTypeLabel =
              day.dayType === 'mock-exam'
                ? 'Mock Exam'
                : day.dayType === 'review'
                  ? 'ทบทวน'
                  : 'เรียนเนื้อหา';

            return (
              <article key={day.day} className="card stack-md">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                >
                  <div className="stack-sm">
                    <div className="btn-row">
                      <span className="badge badge-info">Day {day.day}</span>
                      <span className="badge">{day.phaseTh}</span>
                      <span
                        className={`badge ${
                          day.dayType === 'mock-exam'
                            ? 'badge-warning'
                            : day.dayType === 'review'
                              ? 'badge-info'
                              : ''
                        }`}
                      >
                        <DayIcon size={13} aria-hidden="true" />
                        <span>{dayTypeLabel}</span>
                      </span>
                      <span className="badge">
                        <Clock size={12} aria-hidden="true" />
                        {day.estimatedMinutes} นาที
                      </span>
                      {day.objectiveIds.map((oid) => (
                        <span key={oid} className="badge">
                          Obj {oid}
                        </span>
                      ))}
                    </div>

                    <h2 style={{ margin: 0 }}>{day.titleTh}</h2>
                  </div>

                  <label className="checkbox-label card-subtle" style={{ padding: '8px 12px' }}>
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={() => toggleStudyDay(day.day)}
                    />
                    <span>{isDone ? '✓ ทำเสร็จแล้ว' : 'ทำเครื่องหมายเสร็จสิ้น'}</span>
                  </label>
                </div>

                <ul className="prose-text" style={{ margin: 0, paddingLeft: '20px' }}>
                  {day.tasksTh.map((task) => (
                    <li key={task} style={{ marginBottom: '4px' }}>
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="alert alert-info">
                  <Lightbulb size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong>เคล็ดลับวันนี้: </strong>
                    {day.focusTipTh}
                  </div>
                </div>

                <div className="btn-row">
                  {day.lessonIds.map((lid) => {
                    const lesson = lessonsById.get(lid);
                    const lessonDone = completedLessonsSet.has(lid);
                    return (
                      <Link
                        key={lid}
                        to={`/lessons/${lid}`}
                        className={`btn btn-sm ${lessonDone ? 'btn-success' : ''}`}
                      >
                        {lessonDone ? (
                          <CheckCircle2 size={14} aria-hidden="true" />
                        ) : (
                          <BookOpen size={14} aria-hidden="true" />
                        )}
                        <span>{lesson ? `${lid}: ${lesson.titleTh}` : lid}</span>
                      </Link>
                    );
                  })}

                  {day.practiceTargetCount > 0 && (
                    <Link
                      to={`/practice?objective=${day.objectiveIds[0] ?? 'ALL'}`}
                      className="btn btn-sm"
                    >
                      <ClipboardCheck size={14} aria-hidden="true" />
                      <span>เป้าหมายฝึกทำข้อสอบ {day.practiceTargetCount} ข้อ</span>
                    </Link>
                  )}

                  {day.mockFormId && (
                    <Link
                      to={`/mock-exam?form=${day.mockFormId}`}
                      className="btn btn-sm btn-primary"
                    >
                      <ShieldCheck size={14} aria-hidden="true" />
                      <span>เริ่มทำ {day.mockFormId.toUpperCase()}</span>
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
