import { useId, useRef, useState } from 'react';
import type { PbqConfig, PbqResponse } from '../../types';
import { BilingualPrompt } from '../BilingualPrompt';

type LogInvestigatorConfig = Extract<PbqConfig, { template: 'log-investigator' }>;
type LogInvestigatorResponse = Extract<PbqResponse, { template: 'log-investigator' }>;

interface LogInvestigatorPbqProps {
  config: LogInvestigatorConfig;
  response: PbqResponse | undefined;
  onChange: (next: LogInvestigatorResponse) => void;
  disabled?: boolean;
  showThai: boolean;
  showExpected?: boolean;
}

export function LogInvestigatorPbq({
  config,
  response,
  onChange,
  disabled = false,
  showThai,
  showExpected = false
}: LogInvestigatorPbqProps) {
  const baseId = useId();
  const [activeTabId, setActiveTabId] = useState<string>(config.artifactTabs[0]?.id ?? '');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const currentFindings =
    response && response.template === 'log-investigator' ? response.findings : {};

  const activeTab =
    config.artifactTabs.find((t) => t.id === activeTabId) ?? config.artifactTabs[0];

  const handleFindingChange = (findingId: string, choiceId: string) => {
    onChange({
      template: 'log-investigator',
      findings: {
        ...currentFindings,
        [findingId]: choiceId
      }
    });
  };

  return (
    <div className="pbq-wrapper">
      <div className="card-subtle stack-sm">
        <div
          className="log-tablist"
          role="tablist"
          aria-label="แท็บข้อมูล Log และหลักฐาน"
        >
          {config.artifactTabs.map((tab, index) => {
            const isSelected = activeTab?.id === tab.id;
            const tabDomId = `${baseId}-tab-${tab.id}`;
            const panelDomId = `${baseId}-panel-${tab.id}`;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[index] = el;
                }}
                id={tabDomId}
                type="button"
                role="tab"
                className="log-tab"
                aria-selected={isSelected}
                aria-controls={panelDomId}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTabId(tab.id)}
                onKeyDown={(ev) => {
                  if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') {
                    ev.preventDefault();
                    const total = config.artifactTabs.length;
                    if (total === 0) return;
                    const delta = ev.key === 'ArrowRight' ? 1 : -1;
                    const nextIndex = (index + delta + total) % total;
                    const nextTab = config.artifactTabs[nextIndex];
                    if (nextTab) {
                      setActiveTabId(nextTab.id);
                      tabRefs.current[nextIndex]?.focus();
                    }
                  }
                }}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {activeTab && (
          <div
            id={`${baseId}-panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeTab.id}`}
          >
            <pre className="log-console">
              <code>
                {activeTab.lines
                  .map((line, i) => `${String(i + 1).padStart(2, '0')} | ${line}`)
                  .join('\n')}
              </code>
            </pre>
          </div>
        )}
      </div>

      {config.findings.map((finding, idx) => {
        const pickedChoice = currentFindings[finding.id] ?? '';
        const isCorrect = pickedChoice === finding.expectedChoiceId;

        return (
          <fieldset key={finding.id} className="pbq-fieldset stack-sm">
            <legend>ข้อค้นพบที่ {idx + 1}</legend>
            <BilingualPrompt
              textEn={finding.promptEn}
              textTh={finding.promptTh}
              showThai={showThai}
            />
            <div className="choice-list">
              {finding.choices.map((ch) => {
                const isSelected = pickedChoice === ch.id;
                const isExpected = ch.id === finding.expectedChoiceId;
                let stateClass = isSelected ? 'selected' : '';
                if (showExpected) {
                  if (isExpected) stateClass = 'correct';
                  else if (isSelected && !isExpected) stateClass = 'incorrect';
                }

                return (
                  <label key={ch.id} className={`choice-card ${stateClass}`}>
                    <input
                      type="radio"
                      name={`${baseId}-finding-${finding.id}`}
                      value={ch.id}
                      checked={isSelected}
                      disabled={disabled}
                      onChange={() => handleFindingChange(finding.id, ch.id)}
                    />
                    <div style={{ flex: 1 }}>
                      <BilingualPrompt
                        textEn={ch.textEn}
                        textTh={ch.textTh}
                        showThai={showThai}
                      />
                      {showExpected && isExpected && (
                        <div
                          style={{
                            marginTop: '4px',
                            fontSize: 'var(--text-xs)',
                            fontWeight: 700,
                            color: 'var(--status-success-text)'
                          }}
                        >
                          ✓ คำตอบที่ถูกต้อง
                        </div>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
            {showExpected && (
              <div
                style={{
                  fontSize: 'var(--text-xs)',
                  fontWeight: 700,
                  color: isCorrect ? 'var(--status-success-text)' : 'var(--status-danger-text)'
                }}
              >
                สถานะข้อค้นพบนี้: {isCorrect ? 'ถูกต้อง' : 'ยังไม่ถูกต้อง'}
              </div>
            )}
          </fieldset>
        );
      })}
    </div>
  );
}
