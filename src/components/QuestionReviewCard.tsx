import { Link } from 'react-router-dom';
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Flag,
  Lightbulb,
  XCircle
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import type {
  ChoiceId,
  GradedItemResult,
  PbqQuestion,
  PbqResponse,
  Question
} from '../types';
import { BilingualPrompt } from './BilingualPrompt';
import { DomainBadge } from './DomainBadge';
import { PbqRenderer } from './pbq/PbqRenderer';

interface QuestionReviewCardProps {
  indexLabel?: string;
  kind: 'question' | 'pbq';
  question?: Question;
  pbq?: PbqQuestion;
  choiceOrder?: readonly ChoiceId[];
  selectedChoiceIds?: readonly ChoiceId[];
  pbqResponse?: PbqResponse;
  rubricBreakdown?: GradedItemResult['rubricBreakdown'];
  isCorrect: boolean;
  earnedPoints: number;
  isFlagged?: boolean;
  showThai: boolean;
}

export function QuestionReviewCard({
  indexLabel,
  kind,
  question,
  pbq,
  choiceOrder,
  selectedChoiceIds = [],
  pbqResponse,
  rubricBreakdown,
  isCorrect,
  earnedPoints,
  isFlagged = false,
  showThai
}: QuestionReviewCardProps) {
  const { lessonsById } = useAppContext();

  const domainId = kind === 'question' ? question?.domainId : pbq?.domainId;
  const objectiveIds = kind === 'question' ? question?.objectiveIds : pbq?.objectiveIds;
  const relatedLessonIds =
    kind === 'question' ? (question?.relatedLessonIds ?? []) : (pbq?.relatedLessonIds ?? []);
  const explanationTh = kind === 'question' ? question?.explanationTh : pbq?.explanationTh;
  const misconceptionTh = kind === 'question' ? question?.misconceptionTh : pbq?.misconceptionTh;

  const isPartial = !isCorrect && earnedPoints > 0;

  const orderedChoices = (() => {
    if (!question) return [];
    if (!choiceOrder || choiceOrder.length === 0) return question.choices;
    const byId = new Map(question.choices.map((c) => [c.id, c]));
    const ordered = choiceOrder
      .map((id) => byId.get(id))
      .filter((c): c is NonNullable<typeof c> => c !== undefined);
    return ordered.length === question.choices.length ? ordered : question.choices;
  })();

  const selectedSet = new Set(selectedChoiceIds);
  const correctSet = new Set(question?.correctChoiceIds ?? []);

  return (
    <article className="card stack-md">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px',
          flexWrap: 'wrap'
        }}
      >
        <div className="btn-row">
          {indexLabel && <span className="badge">{indexLabel}</span>}
          {domainId && <DomainBadge domainId={domainId} objectiveIds={objectiveIds} compact />}
          {kind === 'question' && question && (
            <span className="badge">
              {question.type === 'msq' ? `MSQ (เลือก ${question.selectCount})` : 'MCQ'}
            </span>
          )}
          {isFlagged && (
            <span className="badge badge-warning">
              <Flag size={13} aria-hidden="true" />
              ปักธงทบทวน
            </span>
          )}
        </div>

        <div className="btn-row">
          {isCorrect ? (
            <span className="badge badge-success">
              <CheckCircle2 size={14} aria-hidden="true" />
              ถูกต้อง ({earnedPoints}/1)
            </span>
          ) : isPartial ? (
            <span className="badge badge-warning">
              <AlertCircle size={14} aria-hidden="true" />
              ได้คะแนนบางส่วน ({earnedPoints}/1)
            </span>
          ) : (
            <span className="badge badge-danger">
              <XCircle size={14} aria-hidden="true" />
              ไม่ถูกต้อง (0/1)
            </span>
          )}
        </div>
      </div>

      {kind === 'question' && question && (
        <>
          <BilingualPrompt
            textEn={question.promptEn}
            textTh={question.promptTh}
            showThai={showThai}
          />

          <div className="stack-sm">
            {orderedChoices.map((choice, idx) => {
              const isSelected = selectedSet.has(choice.id);
              const isChoiceCorrect = correctSet.has(choice.id);
              const rationale = question.choiceRationales[choice.id];
              let cardClass = '';
              if (isChoiceCorrect) cardClass = 'correct';
              else if (isSelected && !isChoiceCorrect) cardClass = 'incorrect';

              return (
                <div
                  key={choice.id}
                  className={`choice-card ${cardClass}`}
                  style={{ cursor: 'default', flexDirection: 'column', gap: '6px' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '8px',
                      width: '100%',
                      flexWrap: 'wrap'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flex: 1 }}>
                      <span className="badge" style={{ flexShrink: 0 }}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <BilingualPrompt
                        textEn={choice.textEn}
                        textTh={choice.textTh}
                        showThai={showThai}
                      />
                    </div>

                    <div className="btn-row" style={{ gap: '4px' }}>
                      {isSelected && <span className="badge">คำตอบที่คุณเลือก</span>}
                      {isChoiceCorrect && (
                        <span className="badge badge-success">
                          <CheckCircle2 size={13} aria-hidden="true" />
                          เฉลยที่ถูกต้อง
                        </span>
                      )}
                    </div>
                  </div>

                  {rationale && (
                    <div
                      style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--text-secondary)',
                        paddingTop: '4px',
                        borderTop: '1px dashed var(--border-subtle)',
                        width: '100%'
                      }}
                    >
                      <strong>เหตุผลของตัวเลือก: </strong>
                      {rationale}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {kind === 'pbq' && pbq && (
        <>
          <PbqRenderer
            pbq={pbq}
            response={pbqResponse}
            onChange={() => {}}
            disabled
            showExpected
            showThai={showThai}
          />

          {rubricBreakdown && rubricBreakdown.length > 0 && (
            <div className="table-scroll">
              <table className="data-table">
                <caption>เกณฑ์การให้คะแนน PBQ (Rubric Breakdown)</caption>
                <thead>
                  <tr>
                    <th scope="col">เกณฑ์การประเมิน</th>
                    <th scope="col">น้ำหนัก</th>
                    <th scope="col">คะแนนที่ได้</th>
                    <th scope="col">ผล</th>
                  </tr>
                </thead>
                <tbody>
                  {rubricBreakdown.map((item) => (
                    <tr key={item.criterionId}>
                      <td>{item.descriptionTh}</td>
                      <td>{Math.round(item.weight * 100)}%</td>
                      <td>{item.earned}</td>
                      <td>
                        {item.passed ? (
                          <span className="badge badge-success">
                            <CheckCircle2 size={13} aria-hidden="true" />
                            ผ่าน
                          </span>
                        ) : (
                          <span className="badge badge-danger">
                            <XCircle size={13} aria-hidden="true" />
                            ไม่ผ่าน
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {explanationTh && (
        <div className="alert alert-info">
          <Lightbulb size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>คำอธิบายละเอียด: </strong>
            <span className="prose-text">{explanationTh}</span>
          </div>
        </div>
      )}

      {misconceptionTh && (
        <div className="alert alert-warning">
          <AlertCircle size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <strong>จุดที่มักเข้าใจผิด (Common Misconception): </strong>
            <span className="prose-text">{misconceptionTh}</span>
          </div>
        </div>
      )}

      {relatedLessonIds.length > 0 && (
        <div className="btn-row">
          <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
            บทเรียนที่เกี่ยวข้อง:
          </span>
          {relatedLessonIds.map((lid) => {
            const lesson = lessonsById.get(lid);
            return (
              <Link key={lid} to={`/lessons/${lid}`} className="btn btn-sm">
                <BookOpen size={14} aria-hidden="true" />
                <span>{lesson ? `${lid}: ${lesson.titleTh}` : lid}</span>
              </Link>
            );
          })}
        </div>
      )}
    </article>
  );
}
