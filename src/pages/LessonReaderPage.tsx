import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  HelpCircle,
  Printer,
  RotateCcw,
  XCircle
} from 'lucide-react';
import { DomainBadge } from '../components/DomainBadge';
import { useAppContext } from '../context/AppContext';
import type { LessonKnowledgeCheckChoice } from '../types';

export function LessonReaderPage() {
  const { lessonId } = useParams<{ lessonId: string }>();
  const {
    bundle,
    loading,
    lessonsById,
    objectivesById,
    progress,
    setLastLesson,
    toggleLessonComplete,
    toggleLessonBookmarkItem
  } = useAppContext();

  const lesson = lessonId ? lessonsById.get(lessonId) : undefined;

  const [kcSelected, setKcSelected] = useState<
    Record<string, LessonKnowledgeCheckChoice['id']>
  >({});
  const [kcChecked, setKcChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (lesson) {
      setLastLesson(lesson.id);
      setKcSelected({});
      setKcChecked({});
      window.scrollTo({ top: 0 });
    }
  }, [lesson, setLastLesson]);

  const sortedLessons = useMemo(() => {
    const list = [...(bundle?.lessons ?? [])];
    return list.sort((a, b) => {
      if (a.domainId !== b.domainId) return a.domainId.localeCompare(b.domainId);
      return a.order - b.order;
    });
  }, [bundle]);

  const { prevLesson, nextLesson } = useMemo(() => {
    if (!lesson) return { prevLesson: null, nextLesson: null };
    const idx = sortedLessons.findIndex((l) => l.id === lesson.id);
    return {
      prevLesson: idx > 0 ? (sortedLessons[idx - 1] ?? null) : null,
      nextLesson: idx >= 0 && idx < sortedLessons.length - 1 ? (sortedLessons[idx + 1] ?? null) : null
    };
  }, [lesson, sortedLessons]);

  const scrollToSection = (sectionDomId: string) => {
    const el = document.getElementById(sectionDomId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return <div className="card">กำลังโหลดบทเรียน...</div>;
  }

  if (!lesson) {
    return (
      <div className="card stack-md">
        <h1>ไม่พบบทเรียนที่ต้องการ</h1>
        <p style={{ margin: 0 }}>
          รหัสบทเรียน &ldquo;{lessonId}&rdquo; อาจไม่อยู่ในคลังข้อมูลปัจจุบัน
        </p>
        <div>
          <Link to="/curriculum" className="btn btn-primary">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>กลับไปหน้าหลักสูตร</span>
          </Link>
        </div>
      </div>
    );
  }

  const isCompleted = progress.completedLessonIds.includes(lesson.id);
  const isBookmarked = progress.bookmarkedLessonIds.includes(lesson.id);

  const tocItems = [
    { id: 'sec-objectives', label: '1. วัตถุประสงค์ & Objectives' },
    { id: 'sec-prereq', label: '2. ความรู้พื้นฐาน (Prerequisites)' },
    ...lesson.sections.map((s, idx) => ({
      id: `sec-content-${s.id}`,
      label: `3.${idx + 1} ${s.titleTh}`
    })),
    { id: 'sec-keyterms', label: '4. คำศัพท์สำคัญ (Key Terms)' },
    { id: 'sec-scenarios', label: '5. สถานการณ์ตัวอย่าง' },
    { id: 'sec-tables', label: '6. ตารางเปรียบเทียบ' },
    { id: 'sec-apps', label: '7. การประยุกต์ใช้และข้อจำกัด' },
    { id: 'sec-misconceptions', label: '8. ความเข้าใจผิดที่พบบ่อย' },
    { id: 'sec-guide', label: '9. แนวทางวิเคราะห์โจทย์' },
    { id: 'sec-summary', label: '10. สรุปท้ายบทเรียน' },
    { id: 'sec-kc', label: '11. แบบทดสอบความเข้าใจ' },
    { id: 'sec-refs', label: '12. อ้างอิง & บทเรียนที่เกี่ยวข้อง' }
  ];

  return (
    <div className="stack-lg">
      {/* Header & Controls */}
      <div className="card stack-md">
        <div className="btn-row no-print" style={{ justifyContent: 'space-between' }}>
          <Link to="/curriculum" className="btn btn-sm">
            <ArrowLeft size={15} aria-hidden="true" />
            <span>กลับหน้าหลักสูตร</span>
          </Link>

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
              <span>{isCompleted ? 'เรียนจบแล้ว' : 'ทำเครื่องหมายว่าเรียนจบ'}</span>
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

            <button
              type="button"
              className="btn btn-sm"
              onClick={() => window.print()}
            >
              <Printer size={15} aria-hidden="true" />
              <span>พิมพ์บทเรียน (Print)</span>
            </button>
          </div>
        </div>

        <div className="stack-sm">
          <div className="btn-row">
            <span className="badge">{lesson.id}</span>
            <DomainBadge domainId={lesson.domainId} objectiveIds={lesson.objectiveIds} />
            <span className="badge">
              <Clock size={13} aria-hidden="true" />
              ใช้เวลาอ่านประมาณ {lesson.estimatedMinutes} นาที
            </span>
          </div>
          <h1 style={{ margin: 0 }}>{lesson.titleTh}</h1>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontWeight: 600 }}>
            {lesson.titleEn}
          </p>
        </div>
      </div>

      {/* Main Content + Sticky TOC */}
      <div className="lesson-layout">
        <div className="stack-lg">
          {/* 1 & 2: Learning Objectives & Objective IDs */}
          <section id="sec-objectives" className="card stack-md lesson-section-anchor">
            <h2>วัตถุประสงค์การเรียนรู้และขอบเขต Official Objectives</h2>
            <ul className="prose-text" style={{ margin: 0, paddingLeft: '20px' }}>
              {lesson.learningObjectives.map((obj) => (
                <li key={obj} style={{ marginBottom: '6px' }}>
                  {obj}
                </li>
              ))}
            </ul>

            <div className="card-subtle stack-sm">
              <strong style={{ fontSize: 'var(--text-sm)' }}>
                Official SY0-701 Objectives ที่ครอบคลุมในบทนี้:
              </strong>
              {lesson.objectiveIds.map((oid) => {
                const obj = objectivesById.get(oid);
                return (
                  <div key={oid} style={{ fontSize: 'var(--text-sm)' }}>
                    <span className="badge" style={{ marginRight: '8px' }}>
                      {oid}
                    </span>
                    {obj ? (
                      <span>
                        <strong>{obj.titleTh}</strong> ({obj.titleEn})
                      </span>
                    ) : (
                      <span>Objective {oid}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3: Prerequisites */}
          <section id="sec-prereq" className="card stack-sm lesson-section-anchor">
            <h2>ความรู้พื้นฐานที่ควรทราบก่อน (Prerequisites)</h2>
            <ul className="prose-text" style={{ margin: 0, paddingLeft: '20px' }}>
              {lesson.prerequisites.map((pre) => (
                <li key={pre}>{pre}</li>
              ))}
            </ul>
          </section>

          {/* 4: Step-by-Step Sections */}
          {lesson.sections.map((section) => (
            <section
              key={section.id}
              id={`sec-content-${section.id}`}
              className="card stack-md lesson-section-anchor"
            >
              <h2>{section.titleTh}</h2>
              <div className="prose-text">
                {section.contentTh.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
              <div className="keypoints-box">
                <strong style={{ display: 'block', marginBottom: '6px' }}>
                  ประเด็นสำคัญ (Key Points):
                </strong>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {section.keyPointsTh.map((kp) => (
                    <li key={kp} style={{ marginBottom: '4px' }}>
                      {kp}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          {/* 5: Key Terms */}
          <section id="sec-keyterms" className="card stack-md lesson-section-anchor">
            <h2>คำศัพท์สำคัญภาษาอังกฤษและคำอธิบาย (Key Terms)</h2>
            <div className="grid-2">
              {lesson.keyTerms.map((term) => (
                <div key={term.termEn} className="card-subtle stack-sm">
                  <div style={{ fontWeight: 800, color: 'var(--accent-primary)' }}>
                    {term.termEn}
                    {term.acronym ? ` (${term.acronym})` : ''}
                  </div>
                  <p className="prose-text" style={{ margin: 0, fontSize: 'var(--text-sm)' }}>
                    {term.explanationTh}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 6: Realistic Scenarios */}
          <section id="sec-scenarios" className="card stack-md lesson-section-anchor">
            <h2>สถานการณ์จำลองจริง (Realistic Scenarios)</h2>
            <div className="stack-md">
              {lesson.scenarios.map((sc) => (
                <div key={sc.titleTh} className="card-subtle stack-sm">
                  <h3 style={{ margin: 0 }}>{sc.titleTh}</h3>
                  <div className="prose-text">
                    <p>
                      <strong>บริบทสถานการณ์: </strong>
                      {sc.contextTh}
                    </p>
                    <p>
                      <strong>การตัดสินใจที่เหมาะสม: </strong>
                      {sc.decisionTh}
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      <strong>ข้อคิดสำคัญสำหรับข้อสอบ: </strong>
                      {sc.takeawayTh}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7: Comparison Tables */}
          <section id="sec-tables" className="card stack-md lesson-section-anchor">
            <h2>ตารางเปรียบเทียบ (Comparison Tables)</h2>
            {lesson.comparisonTables.map((table) => (
              <div key={table.captionTh} className="table-scroll">
                <table className="data-table">
                  <caption>{table.captionTh}</caption>
                  <thead>
                    <tr>
                      {table.headersTh.map((hdr) => (
                        <th key={hdr} scope="col">
                          {hdr}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rowsTh.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} style={cIdx === 0 ? { fontWeight: 700 } : undefined}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </section>

          {/* 8: Applications & Limitations */}
          <section id="sec-apps" className="card stack-md lesson-section-anchor">
            <h2>การประยุกต์ใช้จริงและข้อจำกัด (Applications & Limitations)</h2>
            <div className="grid-2">
              <div className="card-subtle stack-sm">
                <h3 style={{ margin: 0, color: 'var(--status-success-text)' }}>
                  การนำไปประยุกต์ใช้จริง
                </h3>
                <ul className="prose-text" style={{ margin: 0, paddingLeft: '20px' }}>
                  {lesson.applicationsAndLimitations.applicationsTh.map((app) => (
                    <li key={app} style={{ marginBottom: '6px' }}>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-subtle stack-sm">
                <h3 style={{ margin: 0, color: 'var(--status-warning-text)' }}>
                  ข้อจำกัดและข้อควรระวัง
                </h3>
                <ul className="prose-text" style={{ margin: 0, paddingLeft: '20px' }}>
                  {lesson.applicationsAndLimitations.limitationsTh.map((lim) => (
                    <li key={lim} style={{ marginBottom: '6px' }}>
                      {lim}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 9: Common Misconceptions */}
          <section id="sec-misconceptions" className="card stack-md lesson-section-anchor">
            <h2>ความเข้าใจผิดที่พบบ่อย (Common Misconceptions)</h2>
            <div className="stack-sm">
              {lesson.commonMisconceptions.map((item) => (
                <div key={item.misconceptionTh} className="alert alert-warning">
                  <AlertTriangle size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div className="prose-text">
                    <div style={{ fontWeight: 700, marginBottom: '4px' }}>
                      ความเข้าใจผิด: {item.misconceptionTh}
                    </div>
                    <div>
                      <strong>คำชี้แจงที่ถูกต้อง: </strong>
                      {item.clarificationTh}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10: Scenario Analysis Guide */}
          <section id="sec-guide" className="card stack-md lesson-section-anchor">
            <h2>แนวทางวิเคราะห์โจทย์สถานการณ์ในห้องสอบ</h2>
            <div>
              <h3 style={{ fontSize: 'var(--text-base)' }}>ลำดับขั้นตอนการวิเคราะห์โจทย์</h3>
              <ol className="prose-text" style={{ margin: '8px 0 0', paddingLeft: '20px' }}>
                {lesson.scenarioAnalysisGuide.approachStepsTh.map((step) => (
                  <li key={step} style={{ marginBottom: '6px' }}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="table-scroll">
              <table className="data-table">
                <caption>คำสัญญาณในโจทย์ภาษาอังกฤษ (Exam Signal Keywords)</caption>
                <thead>
                  <tr>
                    <th scope="col">คำสัญญาณในโจทย์ (EN)</th>
                    <th scope="col">แนวโน้มคำตอบ / ความหมาย</th>
                  </tr>
                </thead>
                <tbody>
                  {lesson.scenarioAnalysisGuide.examSignalKeywords.map((kw) => (
                    <tr key={kw.keywordEn}>
                      <td className="mono" style={{ fontWeight: 700 }}>
                        {kw.keywordEn}
                      </td>
                      <td>{kw.meaningTh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 11: End-of-Lesson Summary */}
          <section id="sec-summary" className="card stack-sm lesson-section-anchor">
            <h2>สรุปท้ายบทเรียน (Summary)</h2>
            <ul className="prose-text" style={{ margin: 0, paddingLeft: '20px' }}>
              {lesson.summaryTh.map((s) => (
                <li key={s} style={{ marginBottom: '6px' }}>
                  {s}
                </li>
              ))}
            </ul>
          </section>

          {/* 12: Interactive Knowledge Checks */}
          <section id="sec-kc" className="card stack-md lesson-section-anchor">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <HelpCircle size={20} aria-hidden="true" style={{ color: 'var(--accent-primary)' }} />
              <h2 style={{ margin: 0 }}>
                แบบทดสอบความเข้าใจท้ายบท ({lesson.knowledgeChecks.length} ข้อ)
              </h2>
            </div>

            <div className="stack-md">
              {lesson.knowledgeChecks.map((kc, idx) => {
                const picked = kcSelected[kc.id];
                const checked = Boolean(kcChecked[kc.id]);
                const isCorrect = picked === kc.correctChoiceId;

                return (
                  <fieldset key={kc.id} className="pbq-fieldset stack-sm">
                    <legend>คำถามทบทวนที่ {idx + 1}</legend>
                    <p className="prose-text" style={{ margin: 0, fontWeight: 700 }}>
                      {kc.questionTh}
                    </p>

                    <div className="choice-list">
                      {kc.choices.map((ch) => {
                        const isChosen = picked === ch.id;
                        const isAnswer = ch.id === kc.correctChoiceId;
                        let cls = isChosen ? 'selected' : '';
                        if (checked) {
                          if (isAnswer) cls = 'correct';
                          else if (isChosen && !isAnswer) cls = 'incorrect';
                        }

                        return (
                          <label key={ch.id} className={`choice-card ${cls}`}>
                            <input
                              type="radio"
                              name={`kc-${kc.id}`}
                              value={ch.id}
                              checked={isChosen}
                              disabled={checked}
                              onChange={() =>
                                setKcSelected((prev) => ({ ...prev, [kc.id]: ch.id }))
                              }
                            />
                            <span style={{ flex: 1 }}>
                              <strong style={{ marginRight: '6px' }}>{ch.id.toUpperCase()}.</strong>
                              {ch.textTh}
                            </span>
                          </label>
                        );
                      })}
                    </div>

                    <div className="btn-row no-print" style={{ marginTop: '6px' }}>
                      {!checked ? (
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                          disabled={!picked}
                          onClick={() =>
                            setKcChecked((prev) => ({ ...prev, [kc.id]: true }))
                          }
                        >
                          ตรวจคำตอบ
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-sm"
                          onClick={() => {
                            setKcChecked((prev) => ({ ...prev, [kc.id]: false }));
                            setKcSelected((prev) => {
                              const next = { ...prev };
                              delete next[kc.id];
                              return next;
                            });
                          }}
                        >
                          <RotateCcw size={14} aria-hidden="true" />
                          <span>ลองทำใหม่</span>
                        </button>
                      )}
                    </div>

                    {checked && (
                      <div
                        className={`alert ${isCorrect ? 'alert-success' : 'alert-danger'}`}
                        role="status"
                      >
                        {isCorrect ? (
                          <CheckCircle2 size={18} aria-hidden="true" style={{ flexShrink: 0 }} />
                        ) : (
                          <XCircle size={18} aria-hidden="true" style={{ flexShrink: 0 }} />
                        )}
                        <div className="prose-text">
                          <strong>
                            {isCorrect ? 'ถูกต้อง!' : `ยังไม่ถูกต้อง (เฉลยคือ ${kc.correctChoiceId.toUpperCase()})`}
                          </strong>{' '}
                          {kc.explanationTh}
                        </div>
                      </div>
                    )}
                  </fieldset>
                );
              })}
            </div>
          </section>

          {/* 13: References, Related Lessons & Prev/Next */}
          <section id="sec-refs" className="card stack-md lesson-section-anchor">
            <h2>แหล่งอ้างอิงและบทเรียนที่เกี่ยวข้อง</h2>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {lesson.references.map((ref) => (
                <li key={ref.title} style={{ marginBottom: '6px' }}>
                  <strong>{ref.title}:</strong> {ref.noteTh}
                </li>
              ))}
            </ul>

            <div className="btn-row no-print">
              <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>
                บทเรียนที่เกี่ยวข้อง:
              </span>
              {lesson.relatedLessonIds.map((rid) => {
                const rel = lessonsById.get(rid);
                return (
                  <Link key={rid} to={`/lessons/${rid}`} className="btn btn-sm">
                    <BookOpen size={14} aria-hidden="true" />
                    <span>{rel ? `${rid}: ${rel.titleTh}` : rid}</span>
                  </Link>
                );
              })}
            </div>

            <div
              className="btn-row lesson-nav-actions no-print"
              style={{
                justifyContent: 'space-between',
                paddingTop: '14px',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                {prevLesson && (
                  <Link to={`/lessons/${prevLesson.id}`} className="btn">
                    <ArrowLeft size={16} aria-hidden="true" />
                    <span>บทก่อนหน้า: {prevLesson.id}</span>
                  </Link>
                )}
              </div>

              <div className="btn-row">
                <Link
                  to={`/practice?domain=${lesson.domainId}&objective=${lesson.objectiveIds[0] ?? 'ALL'}`}
                  className="btn"
                >
                  ฝึกทำข้อสอบบทนี้
                </Link>
                {nextLesson && (
                  <Link to={`/lessons/${nextLesson.id}`} className="btn btn-primary">
                    <span>บทถัดไป: {nextLesson.id}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Sticky In-Page Table of Contents */}
        <nav className="lesson-toc no-print" aria-label="สารบัญบทเรียน">
          <h2 style={{ fontSize: 'var(--text-sm)', margin: 0 }}>สารบัญบทเรียน</h2>
          <ul className="lesson-toc-list">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="lesson-toc-btn"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
