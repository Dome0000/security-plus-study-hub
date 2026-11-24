import { useId } from 'react';
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
          <div key={row.id} className="card-subtle stack-sm">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 280px' }}>
                <label htmlFor={selectId} className="field-label" style={{ display: 'block', marginBottom: '4px' }}>
                  รายการที่ {idx + 1}
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
                    style={{
                      marginTop: '6px',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      color: isCorrect ? 'var(--status-success-text)' : 'var(--status-danger-text)'
                    }}
                  >
                    {isCorrect
                      ? '✓ ถูกต้อง'
                      : `✗ เฉลย: ${expectedOpt.labelEn}${showThai && expectedOpt.labelTh !== expectedOpt.labelEn ? ` (${expectedOpt.labelTh})` : ''}`}
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
