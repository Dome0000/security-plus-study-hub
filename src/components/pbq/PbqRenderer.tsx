import { Info, Layers } from 'lucide-react';
import type { PbqQuestion, PbqResponse } from '../../types';
import { BilingualPrompt } from '../BilingualPrompt';
import { ArchitectureConfiguratorPbq } from './ArchitectureConfiguratorPbq';
import { LogInvestigatorPbq } from './LogInvestigatorPbq';
import { MatchingMatrixPbq } from './MatchingMatrixPbq';
import { RuleBuilderPbq } from './RuleBuilderPbq';
import { SequenceTriagePbq } from './SequenceTriagePbq';

interface PbqRendererProps {
  pbq: PbqQuestion;
  response: PbqResponse | undefined;
  onChange: (next: PbqResponse) => void;
  disabled?: boolean;
  showThai: boolean;
  showExpected?: boolean;
}

export function PbqRenderer({
  pbq,
  response,
  onChange,
  disabled = false,
  showThai,
  showExpected = false
}: PbqRendererProps) {
  const cfg = pbq.config;

  return (
    <div className="stack-md">
      <div className="card-subtle stack-sm">
        <div className="btn-row" style={{ gap: '6px' }}>
          <span className="badge badge-info">
            <Layers size={14} aria-hidden="true" />
            Interactive PBQ
          </span>
          <span className="badge mono">{pbq.id}</span>
        </div>

        <div>
          <h3 style={{ margin: 0 }}>{pbq.titleEn}</h3>
          {showThai && (
            <p className="bilingual-th" style={{ marginTop: '6px', marginBottom: 0, fontWeight: 700 }}>
              {pbq.titleTh}
            </p>
          )}
        </div>

        <BilingualPrompt
          textEn={pbq.scenarioEn}
          textTh={pbq.scenarioTh}
          showThai={showThai}
        />

        <div
          className="alert alert-info"
          style={{ padding: '10px 12px', marginTop: '4px' }}
        >
          <Info size={16} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: 'var(--text-sm)' }}>
            <strong>คำชี้แจง (Instructions): </strong>
            <span>{pbq.instructionsEn}</span>
            {showThai && (
              <span style={{ display: 'block', marginTop: '4px', opacity: 0.92 }}>
                {pbq.instructionsTh}
              </span>
            )}
          </div>
        </div>
      </div>

      {cfg.template === 'matching-matrix' && (
        <MatchingMatrixPbq
          config={cfg}
          response={response}
          onChange={onChange}
          disabled={disabled}
          showThai={showThai}
          showExpected={showExpected}
        />
      )}

      {cfg.template === 'rule-builder' && (
        <RuleBuilderPbq
          config={cfg}
          response={response}
          onChange={onChange}
          disabled={disabled}
          showThai={showThai}
          showExpected={showExpected}
        />
      )}

      {cfg.template === 'log-investigator' && (
        <LogInvestigatorPbq
          config={cfg}
          response={response}
          onChange={onChange}
          disabled={disabled}
          showThai={showThai}
          showExpected={showExpected}
        />
      )}

      {cfg.template === 'architecture-configurator' && (
        <ArchitectureConfiguratorPbq
          config={cfg}
          response={response}
          onChange={onChange}
          disabled={disabled}
          showThai={showThai}
          showExpected={showExpected}
        />
      )}

      {cfg.template === 'sequence-and-triage' && (
        <SequenceTriagePbq
          config={cfg}
          response={response}
          onChange={onChange}
          disabled={disabled}
          showThai={showThai}
          showExpected={showExpected}
        />
      )}
    </div>
  );
}
