import { useEffect, useId, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Bookmark,
  BookmarkCheck,
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  Filter,
  RotateCcw
} from 'lucide-react';
import { DomainBadge } from '../components/DomainBadge';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';
import type { DomainId } from '../types';

type CompletionFilter = 'all' | 'uncompleted' | 'completed' | 'bookmarked';

export function CurriculumPage() {
  const { bundle, loading, progress, toggleLessonComplete, toggleLessonBookmarkItem } =
    useAppContext();
  const [searchParams] = useSearchParams();

  const initialDomain = (searchParams.get('domain') as DomainId | null) ?? 'ALL';
  const initialObjective = searchParams.get('objective') ?? 'ALL';

  const [domainFilter, setDomainFilter] = useState<'ALL' | DomainId>(
    EXAM_METADATA.domains.some((d) => d.id === initialDomain) ? initialDomain : 'ALL'
  );
  const [objectiveFilter, setObjectiveFilter] = useState<string>(initialObjective);
  const [statusFilter, setStatusFilter] = useState<CompletionFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const paramObj = searchParams.get('objective');
    const paramDom = searchParams.get('domain') as DomainId | null;
    if (paramObj) {
      setObjectiveFilter(paramObj);
      const matchingDomain = EXAM_METADATA.domains.find((d) =>
        d.objectives.some((o) => o.id === paramObj)
      );
      if (matchingDomain) {
        setDomainFilter(matchingDomain.id);
      }
    } else if (paramDom && EXAM_METADATA.domains.some((d) => d.id === paramDom)) {
      setDomainFilter(paramDom);
    }
  }, [searchParams]);

  const domainSelectId = useId();
  const objSelectId = useId();
  const statusSelectId = useId();
  const searchInputId = useId();

  const completedSet = useMemo(
    () => new Set(progress.completedLessonIds),
    [progress.completedLessonIds]
  );
  const bookmarkedSet = useMemo(
    () => new Set(progress.bookmarkedLessonIds),
    [progress.bookmarkedLessonIds]
  );

  const availableObjectives = useMemo(() => {
    if (domainFilter === 'ALL') {
      return EXAM_METADATA.domains.flatMap((d) => d.objectives);
    }
    return EXAM_METADATA.domains.find((d) => d.id === domainFilter)?.objectives ?? [];
  }, [domainFilter]);

  const lessons = useMemo(() => bundle?.lessons ?? [], [bundle]);

  const filteredLessons = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return lessons.filter((lesson) => {
      if (domainFilter !== 'ALL' && lesson.domainId !== domainFilter) return false;
      if (objectiveFilter !== 'ALL' && !lesson.objectiveIds.includes(objectiveFilter)) {
        return false;
      }
      if (statusFilter === 'completed' && !completedSet.has(lesson.id)) return false;
      if (statusFilter === 'uncompleted' && completedSet.has(lesson.id)) return false;
      if (statusFilter === 'bookmarked' && !bookmarkedSet.has(lesson.id)) return false;

      if (q) {
        const hay = [
          lesson.id,
          lesson.titleTh,
          lesson.titleEn,
          ...lesson.objectiveIds,
          ...lesson.keyTerms.map((k) => `${k.termEn} ${k.acronym ?? ''}`)
        ]
          .join(' ')
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [lessons, domainFilter, objectiveFilter, statusFilter, searchQuery, completedSet, bookmarkedSet]);

  const visibleDomains = useMemo(() => {
    if (domainFilter === 'ALL') return EXAM_METADATA.domains;
    return EXAM_METADATA.domains.filter((d) => d.id === domainFilter);
  }, [domainFilter]);

  const hasActiveFilter =
    domainFilter !== 'ALL' ||
    objectiveFilter !== 'ALL' ||
    statusFilter !== 'all' ||
    searchQuery.trim() !== '';

  const resetFilters = () => {
    setDomainFilter('ALL');
    setObjectiveFilter('ALL');
    setStatusFilter('all');
    setSearchQuery('');
  };

  if (loading) {
    return <div className="card">กำลังโหลดหลักสูตร SY0-701...</div>;
  }

  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h1>หลักสูตรและบทเรียนทั้งหมด ({EXAM_METADATA.examCode})</h1>
          <p className="page-subtitle tabular-nums">
            จัดกลุ่มตาม 5 Official Exam Domains • เรียนจบแล้ว {completedSet.size}/{lessons.length} บทเรียน • บุ๊กมาร์ก {bookmarkedSet.size} บท
          </p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <section className="card stack-md" aria-label="ตัวกรองหลักสูตร">
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
            <Filter size={16} aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
            <strong style={{ fontSize: 'var(--text-sm)' }}>ตัวกรองหลักสูตรและคำค้นหา</strong>
            <span className="badge tabular-nums">
              แสดง {filteredLessons.length} / {lessons.length} บทเรียน
            </span>
          </div>

          {hasActiveFilter && (
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={resetFilters}
            >
              <RotateCcw size={14} aria-hidden="true" />
              <span>ล้างตัวกรอง</span>
            </button>
          )}
        </div>

        <div className="grid-4">
          <div className="field-group">
            <label htmlFor={domainSelectId} className="field-label">
              กรองตาม Domain
            </label>
            <select
              id={domainSelectId}
              className="select"
              value={domainFilter}
              onChange={(ev) => {
                const nextDom = ev.target.value as 'ALL' | DomainId;
                setDomainFilter(nextDom);
                setObjectiveFilter('ALL');
              }}
            >
              <option value="ALL">ทุก Domain (1.0–5.0)</option>
              {EXAM_METADATA.domains.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.id} ({d.number}) — {d.titleEn} ({d.weightPercent}%)
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor={objSelectId} className="field-label">
              กรองตาม Objective
            </label>
            <select
              id={objSelectId}
              className="select"
              value={objectiveFilter}
              onChange={(ev) => setObjectiveFilter(ev.target.value)}
            >
              <option value="ALL">ทุก Objective</option>
              {availableObjectives.map((obj) => (
                <option key={obj.id} value={obj.id}>
                  {obj.id} — {obj.titleTh}
                </option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor={statusSelectId} className="field-label">
              สถานะการเรียน
            </label>
            <select
              id={statusSelectId}
              className="select"
              value={statusFilter}
              onChange={(ev) => setStatusFilter(ev.target.value as CompletionFilter)}
            >
              <option value="all">ทั้งหมด</option>
              <option value="uncompleted">ยังเรียนไม่จบ</option>
              <option value="completed">เรียนจบแล้ว</option>
              <option value="bookmarked">ที่บุ๊กมาร์กไว้</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor={searchInputId} className="field-label">
              ค้นหาชื่อบทเรียน / คำสำคัญ
            </label>
            <input
              id={searchInputId}
              type="search"
              className="input"
              placeholder="เช่น Controls, CIA, 1.2..."
              value={searchQuery}
              onChange={(ev) => setSearchQuery(ev.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Domains & Lessons */}
      {visibleDomains.map((domain) => {
        const allDomainLessons = lessons.filter((l) => l.domainId === domain.id);
        const domainDoneCount = allDomainLessons.filter((l) => completedSet.has(l.id)).length;
        const domainTotalCount = allDomainLessons.length;
        const domainPercent =
          domainTotalCount > 0 ? Math.round((domainDoneCount / domainTotalCount) * 100) : 0;

        const domainLessons = filteredLessons
          .filter((l) => l.domainId === domain.id)
          .sort((a, b) => a.order - b.order);

        return (
          <section
            key={domain.id}
            className="card domain-accent-card stack-md"
            data-domain={domain.id}
            aria-label={`Domain ${domain.number}`}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ flex: '1 1 360px' }}>
                <div className="btn-row" style={{ marginBottom: '6px' }}>
                  <DomainBadge domainId={domain.id} />
                  <span className="badge tabular-nums">น้ำหนักข้อสอบ {domain.weightPercent}%</span>
                </div>
                <h2 style={{ margin: 0 }}>
                  {domain.number} {domain.titleTh}
                </h2>
                <p style={{ margin: '4px 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                  {domain.descriptionTh}
                </p>
              </div>
              <Link to={`/practice?domain=${domain.id}`} className="btn btn-sm">
                ฝึกข้อสอบ {domain.id}
              </Link>
            </div>

            {/* Per-Domain Completion Progress Bar */}
            <div className="stack-sm">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '8px',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: 'var(--text-secondary)'
                }}
              >
                <span>ความคืบหน้าใน {domain.id}</span>
                <span className="tabular-nums">
                  {domainDoneCount} / {domainTotalCount} บทเรียน ({domainPercent}%)
                </span>
              </div>
              <div
                className="progress-track"
                role="progressbar"
                aria-label={`ความคืบหน้า ${domain.id}`}
                aria-valuenow={domainPercent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className={`progress-fill ${domainPercent === 100 ? 'progress-fill-success' : ''}`}
                  style={{ width: `${domainPercent}%` }}
                />
              </div>
            </div>

            {/* Interactive Official Objectives Filter Pills */}
            <div className="btn-row" role="group" aria-label={`กรองตาม Objective ของ ${domain.id}`}>
              {domain.objectives.map((obj) => {
                const isSelected = objectiveFilter === obj.id;
                return (
                  <button
                    key={obj.id}
                    type="button"
                    className={`btn btn-sm ${isSelected ? 'btn-active' : ''}`}
                    aria-pressed={isSelected}
                    onClick={() =>
                      setObjectiveFilter((prev) => (prev === obj.id ? 'ALL' : obj.id))
                    }
                    title={`${obj.id} — ${obj.titleTh} (${obj.titleEn})`}
                  >
                    <span className="tabular-nums">Obj {obj.id}</span>
                  </button>
                );
              })}
            </div>

            {domainLessons.length === 0 ? (
              <div className="card-subtle" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                {hasActiveFilter
                  ? 'ไม่พบบทเรียนที่ตรงกับตัวกรองใน Domain นี้'
                  : 'ยังไม่มีบทเรียนใน Domain นี้สำหรับชุดข้อมูลตัวอย่างปัจจุบัน (คุณยังสามารถดูโครงสร้าง Official Objectives ของ Domain นี้ได้ด้านบน)'}
              </div>
            ) : (
              <div className="stack-sm">
                {domainLessons.map((lesson) => {
                  const isCompleted = completedSet.has(lesson.id);
                  const isBookmarked = bookmarkedSet.has(lesson.id);

                  return (
                    <article
                      key={lesson.id}
                      className={`lesson-row-card ${isCompleted ? 'completed' : ''}`}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '14px',
                          flexWrap: 'wrap',
                          width: '100%'
                        }}
                      >
                        <div style={{ flex: '1 1 340px', minWidth: 0 }}>
                          <div className="btn-row" style={{ marginBottom: '6px' }}>
                            <span className="badge mono tabular-nums">{lesson.id}</span>
                            {lesson.objectiveIds.map((oid) => (
                              <span key={oid} className="badge tabular-nums">
                                Obj {oid}
                              </span>
                            ))}
                            <span className="badge tabular-nums">
                              <Clock size={12} aria-hidden="true" />
                              {lesson.estimatedMinutes} นาที
                            </span>
                            {isCompleted && (
                              <span className="badge badge-success">
                                <CheckCircle2 size={12} aria-hidden="true" />
                                เรียนจบแล้ว
                              </span>
                            )}
                          </div>

                          <h3 style={{ margin: '0 0 2px', fontSize: 'var(--text-base)' }}>
                            <Link
                              to={`/lessons/${lesson.id}`}
                              style={{ color: 'var(--text-primary)', textDecoration: 'none' }}
                            >
                              {lesson.titleTh}
                            </Link>
                          </h3>
                          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                            {lesson.titleEn}
                          </div>
                        </div>

                        <div className="btn-row">
                          <button
                            type="button"
                            className={`btn btn-sm ${isCompleted ? 'btn-success' : ''}`}
                            aria-pressed={isCompleted}
                            onClick={() => toggleLessonComplete(lesson.id)}
                          >
                            {isCompleted ? (
                              <CheckCircle2 size={15} aria-hidden="true" />
                            ) : (
                              <Circle size={15} aria-hidden="true" />
                            )}
                            <span>{isCompleted ? 'จบแล้ว' : 'ทำเครื่องหมายจบ'}</span>
                          </button>

                          <button
                            type="button"
                            className={`btn btn-sm ${isBookmarked ? 'btn-active' : ''}`}
                            aria-pressed={isBookmarked}
                            onClick={() => toggleLessonBookmarkItem(lesson.id)}
                          >
                            {isBookmarked ? (
                              <BookmarkCheck size={15} aria-hidden="true" />
                            ) : (
                              <Bookmark size={15} aria-hidden="true" />
                            )}
                            <span>{isBookmarked ? 'บุ๊กมาร์กแล้ว' : 'บุ๊กมาร์ก'}</span>
                          </button>

                          <Link to={`/lessons/${lesson.id}`} className="btn btn-sm btn-primary">
                            <BookOpen size={15} aria-hidden="true" />
                            <span>อ่านบทเรียน</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
