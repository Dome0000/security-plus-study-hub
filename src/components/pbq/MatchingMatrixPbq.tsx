import { useId } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { PbqConfig, PbqResponse } from '../../types';
import { BilingualPrompt } from '../BilingualPrompt';

type MatchingMatrixConfig = Extract<PbqConfig, { template: 'matching-matrix' }>;
type MatchingMatrixResponse = Extract<PbqResponse, { template: 'matching-matrix' }>;

interface MatchingMatrixPbqProps {
  config: MatchingMatrixConfig;
  response: PbqResponse | undefined;
  onChange: (next: MatchingMatrixResponse) => void;
  disabled?: boolean;
  showThai: boolean;
  showExpected?: boolean;
}

export function MatchingMatrixPbq({
  config,
  response,
  onChange,
  disabled = false,
  showThai,
  showExpected = false
}: MatchingMatrixPbqProps) {
  const baseId = useId();
  const currentMatches =
    response && response.template === 'matching-matrix' ? response.matches : {};

  const optionLookup = new Map(config.options.map((o) => [o.id, o]));

  const handleSelect = (rowId: string, optionId: string) => {
    const nextMatches = { ...currentMatches };
    if (optionId === '') {
      delete nextMatches[rowId];
    } else {
      nextMatches[rowId] = optionId;
    }
    onChange({
      template: 'matching-matrix',
      matches: nextMatches
    });
  };

  return (
    <div className="pbq-wrapper">
      {config.rows.map((row, idx) => {
        const selectId = `${baseId}-row-${row.id}`;
        const selectedVal = currentMatches[row.id] ?? '';
        const expectedId = config.expectedMatches[row.id];
        const expectedOpt = expectedId ? optionLookup.get(expectedId) : undefined;
        const isCorrect = expectedId !== undefined && selectedVal === expectedId;

        return (
          <div
            key={row.id}
            className="card-subtle stack-sm"
            style={
              showExpected
                ? {
                    borderColor: isCorrect
                      ? 'var(--status-success-border)'
                      : 'var(--status-danger-border)'
                  }
                : undefined
            }
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '14px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 280px' }}>
                <label
                  htmlFor={selectId}
                  className="field-label"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}
                >
                  <span className="badge badge-info tabular-nums">รายการที่ {idx + 1}</span>
                </label>
                <BilingualPrompt
                  textEn={row.promptEn}
                  textTh={row.promptTh}
                  showThai={showThai}
                />
              </div>

              <div style={{ flex: '1 1 240px', maxWidth: '380px' }}>
                <select
                  id={selectId}
                  className="select"
                  value={selectedVal}
                  disabled={disabled}
                  onChange={(ev) => handleSelect(row.id, ev.target.value)}
                >
                  <option value="">-- เลือกคำตอบ --</option>
                  {config.options.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {showThai && opt.labelTh !== opt.labelEn
                        ? `${opt.labelEn} — ${opt.labelTh}`
                        : opt.labelEn}
                    </option>
                  ))}
                </select>

                {showExpected && expectedOpt && (
                  <div
                    className={`badge ${isCorrect ? 'badge-success' : 'badge-danger'}`}
                    style={{ marginTop: '8px', whiteSpace: 'normal', borderRadius: 'var(--radius-sm)' }}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle2 size={14} aria-hidden="true" style={{ flexShrink: 0 }} />
                        <span>ถูกต้อง</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={14} aria-hidden="true" style={{ flexShrink: 0 }} />
                        <span>
                          เฉลย: {expectedOpt.labelEn}
                          {showThai && expectedOpt.labelTh !== expectedOpt.labelEn
                            ? ` (${expectedOpt.labelTh})`
                            : ''}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
