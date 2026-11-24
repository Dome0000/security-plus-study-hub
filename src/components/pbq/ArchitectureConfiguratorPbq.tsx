import { useId } from 'react';
import type { PbqConfig, PbqResponse } from '../../types';
import { BilingualPrompt } from '../BilingualPrompt';

type ArchConfig = Extract<PbqConfig, { template: 'architecture-configurator' }>;
type ArchResponse = Extract<PbqResponse, { template: 'architecture-configurator' }>;

interface ArchitectureConfiguratorPbqProps {
  config: ArchConfig;
  response: PbqResponse | undefined;
  onChange: (next: ArchResponse) => void;
  disabled?: boolean;
  showThai: boolean;
  showExpected?: boolean;
}

function truncateLabel(text: string, maxLen = 22): string {
  return text.length > maxLen ? `${text.slice(0, maxLen - 1)}…` : text;
}

export function ArchitectureConfiguratorPbq({
  config,
  response,
  onChange,
  disabled = false,
  showThai,
  showExpected = false
}: ArchitectureConfiguratorPbqProps) {
  const baseId = useId();
  const currentPlacements =
    response && response.template === 'architecture-configurator' ? response.placements : {};

  const optionLookup = new Map(config.options.map((o) => [o.id, o]));

  const handleSelect = (slotId: string, optionId: string) => {
    const nextPlacements = { ...currentPlacements };
    if (optionId === '') {
      delete nextPlacements[slotId];
    } else {
      nextPlacements[slotId] = optionId;
    }
    onChange({
      template: 'architecture-configurator',
      placements: nextPlacements
    });
  };

  // Compute dynamic horizontal positions for slots inside the SVG diagram
  const slotCount = config.slots.length;
  const svgWidth = 720;
  const svgHeight = 250;
  const slotBoxWidth = Math.min(180, Math.floor((svgWidth - 80) / Math.max(slotCount, 1)) - 16);
  const totalSlotsSpan = slotCount * slotBoxWidth + Math.max(0, slotCount - 1) * 18;
  const startX = Math.max(24, Math.floor((svgWidth - totalSlotsSpan) / 2));

  const diagramHeaderText =
    config.diagramType === 'zero-trust'
      ? 'Zero Trust Control & Data Plane Flow'
      : config.diagramType === 'perimeter-dmz'
        ? 'External Perimeter -> DMZ -> Internal Network'
        : 'Multi-Site Resilience & Disaster Recovery Architecture';

  const zoneColors =
    config.diagramType === 'zero-trust'
      ? { left: 'Subject / Identity', right: 'Protected Enterprise Resource' }
      : config.diagramType === 'perimeter-dmz'
        ? { left: 'Untrusted Internet', right: 'Internal Core LAN' }
        : { left: 'Primary Production Site', right: 'Secondary Recovery Site' };

  return (
    <div className="pbq-wrapper">
      <div className="svg-diagram-box">
        <div
          style={{
            fontWeight: 700,
            fontSize: 'var(--text-sm)',
            marginBottom: '8px',
            color: 'var(--text-primary)'
          }}
        >
          {config.diagramTitle}
        </div>
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          role="img"
          aria-label={config.diagramTitle}
        >
          <title>{config.diagramTitle}</title>

          {/* Outer architecture frame */}
          <rect
            x="10"
            y="10"
            width={svgWidth - 20}
            height={svgHeight - 20}
            rx="12"
            fill="var(--bg-surface)"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />

          {/* Top flow banner */}
          <text
            x={svgWidth / 2}
            y="36"
            textAnchor="middle"
            fill="var(--text-secondary)"
            fontSize="13"
            fontWeight="700"
          >
            {diagramHeaderText}
          </text>

          {/* Left & Right boundary pills */}
          <rect
            x="28"
            y="50"
            width="210"
            height="28"
            rx="6"
            fill="var(--accent-soft)"
            stroke="var(--accent-primary)"
            strokeWidth="1"
          />
          <text
            x="133"
            y="69"
            textAnchor="middle"
            fill="var(--accent-soft-text)"
            fontSize="11.5"
            fontWeight="700"
          >
            {zoneColors.left}
          </text>

          <line
            x1="246"
            y1="64"
            x2={svgWidth - 246}
            y2="64"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeDasharray="5 4"
          />

          <rect
            x={svgWidth - 238}
            y="50"
            width="210"
            height="28"
            rx="6"
            fill="var(--accent-soft)"
            stroke="var(--accent-primary)"
            strokeWidth="1"
          />
          <text
            x={svgWidth - 133}
            y="69"
            textAnchor="middle"
            fill="var(--accent-soft-text)"
            fontSize="11.5"
            fontWeight="700"
          >
            {zoneColors.right}
          </text>

          {/* Interactive Slot Boxes */}
          {config.slots.map((slot, index) => {
            const x = startX + index * (slotBoxWidth + 18);
            const y = 104;
            const letter = String.fromCharCode(65 + index);
            const chosenId = currentPlacements[slot.id];
            const chosenOpt = chosenId ? optionLookup.get(chosenId) : undefined;
            const hasSelection = Boolean(chosenOpt);

            return (
              <g key={slot.id}>
                {/* Connector from top line */}
                <line
                  x1={x + slotBoxWidth / 2}
                  y1="64"
                  x2={x + slotBoxWidth / 2}
                  y2={y}
                  stroke="var(--border-strong)"
                  strokeWidth="1.5"
                />
                <rect
                  x={x}
                  y={y}
                  width={slotBoxWidth}
                  height="112"
                  rx="10"
                  fill={hasSelection ? 'var(--accent-soft)' : 'var(--bg-subtle)'}
                  stroke={hasSelection ? 'var(--accent-primary)' : 'var(--border-strong)'}
                  strokeWidth={hasSelection ? '2' : '1.5'}
                  strokeDasharray={hasSelection ? undefined : '4 3'}
                />
                <text
                  x={x + slotBoxWidth / 2}
                  y={y + 24}
                  textAnchor="middle"
                  fill="var(--accent-primary)"
                  fontSize="12"
                  fontWeight="800"
                >
                  {`Slot ${letter}`}
                </text>
                <text
                  x={x + slotBoxWidth / 2}
                  y={y + 46}
                  textAnchor="middle"
                  fill="var(--text-secondary)"
                  fontSize="10.5"
                >
                  {truncateLabel(slot.zoneLabelEn.replace(/^Slot [A-Z]:\s*/i, ''), 24)}
                </text>
                <rect
                  x={x + 10}
                  y={y + 62}
                  width={slotBoxWidth - 20}
                  height="36"
                  rx="6"
                  fill="var(--bg-surface)"
                  stroke="var(--border-subtle)"
                />
                <text
                  x={x + slotBoxWidth / 2}
                  y={y + 84}
                  textAnchor="middle"
                  fill={hasSelection ? 'var(--text-primary)' : 'var(--text-muted)'}
                  fontSize="11"
                  fontWeight={hasSelection ? '700' : '500'}
                >
                  {chosenOpt ? truncateLabel(chosenOpt.labelEn, 20) : 'ยังไม่เลือก'}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="stack-sm">
        {config.slots.map((slot, index) => {
          const selectId = `${baseId}-slot-${slot.id}`;
          const letter = String.fromCharCode(65 + index);
          const selectedVal = currentPlacements[slot.id] ?? '';
          const expectedOpt = optionLookup.get(slot.expectedOptionId);
          const isCorrect = selectedVal === slot.expectedOptionId;

          return (
            <div key={slot.id} className="card-subtle stack-sm">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 280px' }}>
                  <label htmlFor={selectId} className="field-label" style={{ display: 'block', marginBottom: '4px' }}>
                    ตำแหน่ง {letter}
                  </label>
                  <BilingualPrompt
                    textEn={slot.zoneLabelEn}
                    textTh={slot.zoneLabelTh}
                    showThai={showThai}
                  />
                  <div style={{ marginTop: '4px', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    คำใบ้: {slot.roleHintEn}
                    {showThai && slot.roleHintTh ? ` (${slot.roleHintTh})` : ''}
                  </div>
                </div>

                <div style={{ flex: '1 1 240px', maxWidth: '380px' }}>
                  <select
                    id={selectId}
                    className="select"
                    value={selectedVal}
                    disabled={disabled}
                    onChange={(ev) => handleSelect(slot.id, ev.target.value)}
                  >
                    <option value="">-- เลือกอุปกรณ์/กลไก --</option>
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
                        color: isCorrect
                          ? 'var(--status-success-text)'
                          : 'var(--status-danger-text)'
                      }}
                    >
                      {isCorrect ? '✓ ถูกต้อง' : `✗ เฉลย: ${expectedOpt.labelEn}`}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
