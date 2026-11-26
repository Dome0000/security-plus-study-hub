import { useId } from 'react';
import { ArrowDown, ArrowUp, CheckCircle2, XCircle } from 'lucide-react';
import type { PbqConfig, PbqResponse } from '../../types';
import { BilingualPrompt } from '../BilingualPrompt';

type SequenceConfig = Extract<PbqConfig, { template: 'sequence-and-triage' }>;
type SequenceResponse = Extract<PbqResponse, { template: 'sequence-and-triage' }>;

interface SequenceTriagePbqProps {
  config: SequenceConfig;
  response: PbqResponse | undefined;
  onChange: (next: SequenceResponse) => void;
  disabled?: boolean;
  showThai: boolean;
  showExpected?: boolean;
}

export function SequenceTriagePbq({
  config,
  response,
  onChange,
  disabled = false,
  showThai,
  showExpected = false
}: SequenceTriagePbqProps) {
  const baseId = useId();
  const stepLookup = new Map(config.steps.map((s) => [s.id, s]));

  const defaultOrder = config.steps.map((s) => s.id);
  const currentOrder =
    response &&
    response.template === 'sequence-and-triage' &&
    response.orderedStepIds.length === config.steps.length
      ? response.orderedStepIds
      : defaultOrder;

  const currentTriageChoiceId =
    response && response.template === 'sequence-and-triage' ? response.triageChoiceId : '';

  const moveStep = (index: number, delta: -1 | 1) => {
    const targetIndex = index + delta;
    if (targetIndex < 0 || targetIndex >= currentOrder.length) return;
    const nextOrder = [...currentOrder];
    const currentId = nextOrder[index];
    const swapId = nextOrder[targetIndex];
    if (currentId === undefined || swapId === undefined) return;
    nextOrder[index] = swapId;
    nextOrder[targetIndex] = currentId;

    onChange({
      template: 'sequence-and-triage',
      orderedStepIds: nextOrder,
      triageChoiceId: currentTriageChoiceId
    });
  };

  const handleTriageSelect = (choiceId: string) => {
    onChange({
      template: 'sequence-and-triage',
      orderedStepIds: [...currentOrder],
      triageChoiceId: choiceId
    });
  };

  return (
    <div className="pbq-wrapper">
      <fieldset className="pbq-fieldset stack-sm">
        <legend>ส่วนที่ 1: จัดเรียงลำดับขั้นตอน (ใช้ปุ่มเลื่อนขึ้น/ลง)</legend>
        <BilingualPrompt
          textEn={config.sequencePromptEn}
          textTh={config.sequencePromptTh}
          showThai={showThai}
        />

        <div className="stack-sm" role="list" aria-label="รายการลำดับขั้นตอน">
          {currentOrder.map((stepId, idx) => {
            const step = stepLookup.get(stepId);
            if (!step) return null;
            const expectedStepId = config.expectedOrder[idx];
            const isPosCorrect = expectedStepId === stepId;
            const expectedStep = expectedStepId ? stepLookup.get(expectedStepId) : undefined;

            return (
              <div
                key={stepId}
                role="listitem"
                className="sequence-step-item"
                style={
                  showExpected
                    ? {
                        borderColor: isPosCorrect
                          ? 'var(--status-success-border)'
                          : 'var(--status-danger-border)',
                        backgroundColor: isPosCorrect
                          ? 'var(--status-success-bg)'
                          : 'var(--status-danger-bg)'
                      }
                    : undefined
                }
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
                  <span className="badge badge-info tabular-nums" style={{ marginTop: '2px', flexShrink: 0 }}>
                    ลำดับ {idx + 1}
                  </span>
                  <div>
                    <BilingualPrompt
                      textEn={step.labelEn}
                      textTh={step.labelTh}
                      showThai={showThai}
                    />
                    {showExpected && expectedStep && (
                      <div
                        className={`badge ${isPosCorrect ? 'badge-success' : 'badge-danger'}`}
                        style={{ marginTop: '6px', whiteSpace: 'normal', borderRadius: 'var(--radius-sm)' }}
                      >
                        {isPosCorrect ? (
                          <>
                            <CheckCircle2 size={13} aria-hidden="true" style={{ flexShrink: 0 }} />
                            <span>ตำแหน่งถูกต้อง</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={13} aria-hidden="true" style={{ flexShrink: 0 }} />
                            <span>ลำดับที่ {idx + 1} ที่ถูกต้องคือ: {expectedStep.labelEn}</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {!disabled && (
                  <div className="btn-row" style={{ flexShrink: 0 }}>
                    <button
                      type="button"
                      className="btn btn-sm"
                      disabled={idx === 0}
                      onClick={() => moveStep(idx, -1)}
                      aria-label={`เลื่อนขั้นตอน ${step.labelEn} ขึ้น`}
                    >
                      <ArrowUp size={15} aria-hidden="true" />
                      <span>ขึ้น</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm"
                      disabled={idx === currentOrder.length - 1}
                      onClick={() => moveStep(idx, 1)}
                      aria-label={`เลื่อนขั้นตอน ${step.labelEn} ลง`}
                    >
                      <ArrowDown size={15} aria-hidden="true" />
                      <span>ลง</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="pbq-fieldset stack-sm">
        <legend>ส่วนที่ 2: การตัดสินใจเฉพาะหน้า (Triage Decision)</legend>
        <BilingualPrompt
          textEn={config.triageDecision.promptEn}
          textTh={config.triageDecision.promptTh}
          showThai={showThai}
        />
        <div className="choice-list">
          {config.triageDecision.choices.map((ch, chIdx) => {
            const isSelected = currentTriageChoiceId === ch.id;
            const isExpected = ch.id === config.triageDecision.expectedChoiceId;
            let stateClass = isSelected ? 'selected' : '';
            if (showExpected) {
              if (isExpected) stateClass = 'correct';
              else if (isSelected && !isExpected) stateClass = 'incorrect';
            }

            return (
              <label key={ch.id} className={`choice-card ${stateClass}`}>
                <input
                  type="radio"
                  name={`${baseId}-triage`}
                  value={ch.id}
                  checked={isSelected}
                  disabled={disabled}
                  onChange={() => handleTriageSelect(ch.id)}
                />
                <span className="choice-letter">{String.fromCharCode(65 + chIdx)}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <BilingualPrompt
                    textEn={ch.textEn}
                    textTh={ch.textTh}
                    showThai={showThai}
                  />
                  {showExpected && isExpected && (
                    <div className="badge badge-success" style={{ marginTop: '6px' }}>
                      <CheckCircle2 size={13} aria-hidden="true" />
                      <span>คำตอบที่ถูกต้อง</span>
                    </div>
                  )}
                </div>
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
