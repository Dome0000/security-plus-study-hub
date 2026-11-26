import { useId } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
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
  const safeId = baseId.replace(/[^a-zA-Z0-9_-]/g, '');
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
  const svgHeight = 258;
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

  const frameGradId = `${safeId}-frame-grad`;
  const pillGradId = `${safeId}-pill-grad`;
  const slotGradId = `${safeId}-slot-grad`;
  const arrowMarkerId = `${safeId}-flow-arrow`;

  return (
    <div className="pbq-wrapper">
      <div className="svg-diagram-box">
        <div
          style={{
            fontWeight: 700,
            fontSize: 'var(--text-sm)',
            marginBottom: '10px',
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
          <defs>
            <linearGradient id={frameGradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--bg-surface)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--bg-subtle)" stopOpacity="0.65" />
            </linearGradient>
            <linearGradient id={pillGradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--bg-surface)" stopOpacity="0.92" />
            </linearGradient>
            <linearGradient id={slotGradId} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-soft)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="var(--bg-surface)" stopOpacity="1" />
            </linearGradient>
            <marker
              id={arrowMarkerId}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 1 1.5 L 8.5 5 L 1 8.5 z" fill="var(--accent-primary)" />
            </marker>
          </defs>

          {/* Outer architecture frame */}
          <rect
            x="10"
            y="10"
            width={svgWidth - 20}
            height={svgHeight - 20}
            rx="14"
            fill={`url(#${frameGradId})`}
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />

          {/* Top flow banner */}
          <text
            x={svgWidth / 2}
            y="36"
            textAnchor="middle"
            fill="var(--text-primary)"
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
            height="30"
            rx="8"
            fill={`url(#${pillGradId})`}
            stroke="var(--accent-primary)"
            strokeWidth="1.25"
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
            x1="244"
            y1="65"
            x2={svgWidth - 248}
            y2="65"
            stroke="var(--accent-primary)"
            strokeWidth="2"
            strokeDasharray="6 4"
            markerEnd={`url(#${arrowMarkerId})`}
          />

          <rect
            x={svgWidth - 238}
            y="50"
            width="210"
            height="30"
            rx="8"
            fill={`url(#${pillGradId})`}
            stroke="var(--accent-primary)"
            strokeWidth="1.25"
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
            const y = 106;
            const letter = String.fromCharCode(65 + index);
            const chosenId = currentPlacements[slot.id];
            const chosenOpt = chosenId ? optionLookup.get(chosenId) : undefined;
            const hasSelection = Boolean(chosenOpt);
            const isSlotCorrect = showExpected && chosenId === slot.expectedOptionId;
            const isSlotIncorrect = showExpected && chosenId !== slot.expectedOptionId;

            const boxStroke = isSlotCorrect
              ? 'var(--status-success-border)'
              : isSlotIncorrect
                ? 'var(--status-danger-border)'
                : hasSelection
                  ? 'var(--accent-primary)'
                  : 'var(--border-strong)';

            const boxFill = isSlotCorrect
              ? 'var(--status-success-bg)'
              : isSlotIncorrect
                ? 'var(--status-danger-bg)'
                : hasSelection
                  ? `url(#${slotGradId})`
                  : 'var(--bg-surface)';

            return (
              <g key={slot.id}>
                {/* Connector from top line with arrow */}
                <line
                  x1={x + slotBoxWidth / 2}
                  y1="65"
                  x2={x + slotBoxWidth / 2}
                  y2={y - 3}
                  stroke="var(--border-strong)"
                  strokeWidth="1.5"
                  markerEnd={`url(#${arrowMarkerId})`}
                />
                <rect
                  x={x}
                  y={y}
                  width={slotBoxWidth}
                  height="118"
                  rx="12"
                  fill={boxFill}
                  stroke={boxStroke}
                  strokeWidth={hasSelection || showExpected ? '2' : '1.5'}
                  strokeDasharray={hasSelection || showExpected ? undefined : '5 4'}
                />
                {/* Crisp Slot Header Pill */}
                <rect
                  x={x + slotBoxWidth / 2 - 34}
                  y={y + 10}
                  width="68"
                  height="22"
                  rx="999"
                  fill="var(--accent-soft)"
                  stroke="var(--accent-primary)"
                  strokeWidth="1"
                />
                <text
                  x={x + slotBoxWidth / 2}
                  y={y + 25}
                  textAnchor="middle"
                  fill="var(--accent-soft-text)"
                  fontSize="11"
                  fontWeight="800"
                >
                  {`Slot ${letter}`}
                </text>
                <text
                  x={x + slotBoxWidth / 2}
                  y={y + 50}
                  textAnchor="middle"
                  fill="var(--text-secondary)"
                  fontSize="10.5"
                  fontWeight="600"
                >
                  {truncateLabel(slot.zoneLabelEn.replace(/^Slot [A-Z]:\s*/i, ''), 24)}
                </text>
                <rect
                  x={x + 10}
                  y={y + 64}
                  width={slotBoxWidth - 20}
                  height="38"
                  rx="8"
                  fill="var(--bg-surface)"
                  stroke={hasSelection ? 'var(--accent-primary)' : 'var(--border-subtle)'}
                  strokeWidth="1"
                />
                <text
                  x={x + slotBoxWidth / 2}
                  y={y + 87}
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
            <div
              key={slot.id}
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
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}
                  >
                    <span className="choice-letter">{letter}</span>
                    <span>ตำแหน่ง {letter}</span>
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
                          <span>เฉลย: {expectedOpt.labelEn}</span>
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
    </div>
  );
}
