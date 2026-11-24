import { useId } from 'react';
import type { PbqConfig, PbqResponse } from '../../types';
import { BilingualPrompt } from '../BilingualPrompt';

type RuleBuilderConfig = Extract<PbqConfig, { template: 'rule-builder' }>;
type RuleBuilderResponse = Extract<PbqResponse, { template: 'rule-builder' }>;

interface RuleBuilderPbqProps {
  config: RuleBuilderConfig;
  response: PbqResponse | undefined;
  onChange: (next: RuleBuilderResponse) => void;
  disabled?: boolean;
  showThai: boolean;
  showExpected?: boolean;
}

export function RuleBuilderPbq({
  config,
  response,
  onChange,
  disabled = false,
  showThai,
  showExpected = false
}: RuleBuilderPbqProps) {
  const baseId = useId();
  const currentRules = response && response.template === 'rule-builder' ? response.rules : {};

  const handleFieldChange = (ruleId: string, fieldId: string, value: string) => {
    const prevRule = currentRules[ruleId] ?? {};
    const nextRule = { ...prevRule };
    if (value === '') {
      delete nextRule[fieldId];
    } else {
      nextRule[fieldId] = value;
    }

    onChange({
      template: 'rule-builder',
      rules: {
        ...currentRules,
        [ruleId]: nextRule
      }
    });
  };

  return (
    <div className="pbq-wrapper">
      <div className="table-scroll">
        <table className="data-table">
          <caption>{config.contextTableTitle}</caption>
          <thead>
            <tr>
              <th scope="col">พารามิเตอร์ / สินทรัพย์</th>
              <th scope="col">รายละเอียด</th>
            </tr>
          </thead>
          <tbody>
            {config.contextRows.map((row) => (
              <tr key={row.label}>
                <td style={{ fontWeight: 700 }}>{row.label}</td>
                <td className="mono">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {config.rules.map((rule) => {
        const ruleValues = currentRules[rule.id] ?? {};
        return (
          <fieldset key={rule.id} className="pbq-fieldset stack-sm">
            <legend>{rule.titleEn}</legend>
            {showThai && (
              <p className="bilingual-th" style={{ margin: 0, fontSize: 'var(--text-sm)' }}>
                {rule.titleTh}
              </p>
            )}

            <div className="grid-3">
              {rule.fields.map((field) => {
                const selectId = `${baseId}-${rule.id}-${field.id}`;
                const selectedVal = ruleValues[field.id] ?? '';
                const expectedVal = rule.expectedValues[field.id];
                const expectedChoice = field.choices.find((c) => c.value === expectedVal);
                const isMatch = expectedVal !== undefined && selectedVal === expectedVal;

                return (
                  <div key={field.id} className="field-group">
                    <label htmlFor={selectId} className="field-label">
                      <BilingualPrompt
                        textEn={field.labelEn}
                        textTh={field.labelTh}
                        showThai={showThai}
                      />
                    </label>
                    <select
                      id={selectId}
                      className="select"
                      value={selectedVal}
                      disabled={disabled}
                      onChange={(ev) => handleFieldChange(rule.id, field.id, ev.target.value)}
                    >
                      <option value="">-- เลือก --</option>
                      {field.choices.map((ch) => (
                        <option key={ch.value} value={ch.value}>
                          {showThai && ch.labelTh !== ch.labelEn
                            ? `${ch.labelEn} — ${ch.labelTh}`
                            : ch.labelEn}
                        </option>
                      ))}
                    </select>
                    {showExpected && expectedChoice && (
                      <span
                        style={{
                          fontSize: 'var(--text-xs)',
                          fontWeight: 700,
                          color: isMatch
                            ? 'var(--status-success-text)'
                            : 'var(--status-danger-text)'
                        }}
                      >
                        {isMatch ? '✓ ถูกต้อง' : `✗ เฉลย: ${expectedChoice.labelEn}`}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}
