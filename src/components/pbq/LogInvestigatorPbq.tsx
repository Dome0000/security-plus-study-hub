import { useId, useRef, useState } from 'react';
import { CheckCircle2, FileTerminal, XCircle } from 'lucide-react';
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
                <FileTerminal size={13} aria-hidden="true" style={{ marginRight: '5px', verticalAlign: '-2px' }} />
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
            <div className="soc-terminal">
              <div className="soc-terminal-bar">
                <div className="soc-terminal-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="mono" style={{ fontSize: 'var(--text-xs)', fontWeight: 600 }}>
                  {activeTab.title}
                </span>
                <span className="mono tabular-nums" style={{ fontSize: 'var(--text-xs)', opacity: 0.72, marginLeft: 'auto' }}>
                  {activeTab.lines.length} lines
                </span>
              </div>
              <pre className="log-console">
                <code>
                  {activeTab.lines
                    .map((line, i) => `${String(i + 1).padStart(2, '0')} | ${line}`)
                    .join('\n')}
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>

      {config.findings.map((finding, idx) => {
        const pickedChoice = currentFindings[finding.id] ?? '';
        const isCorrect = pickedChoice === finding.expectedChoiceId;

        return (
          <fieldset key={finding.id} className="pbq-fieldset stack-sm">
            <legend style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge badge-info tabular-nums">ข้อค้นพบที่ {idx + 1}</span>
            </legend>
            <BilingualPrompt
              textEn={finding.promptEn}
              textTh={finding.promptTh}
              showThai={showThai}
            />
            <div className="choice-list">
              {finding.choices.map((ch, chIdx) => {
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
            {showExpected && (
              <div className={`badge ${isCorrect ? 'badge-success' : 'badge-danger'}`}>
                {isCorrect ? (
                  <>
                    <CheckCircle2 size={14} aria-hidden="true" />
                    <span>สถานะข้อค้นพบนี้: ถูกต้อง</span>
                  </>
                ) : (
                  <>
                    <XCircle size={14} aria-hidden="true" />
                    <span>สถานะข้อค้นพบนี้: ยังไม่ถูกต้อง</span>
                  </>
                )}
              </div>
            )}
          </fieldset>
        );
      })}
    </div>
  );
}
