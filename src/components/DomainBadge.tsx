import { EXAM_METADATA } from '../data/examMeta';
import type { DomainId } from '../types';

interface DomainBadgeProps {
  domainId: DomainId;
  objectiveIds?: readonly string[];
  compact?: boolean;
}

export function DomainBadge({ domainId, objectiveIds, compact = false }: DomainBadgeProps) {
  const domain = EXAM_METADATA.domains.find((d) => d.id === domainId);

  return (
    <span className="btn-row" style={{ gap: '6px' }}>
      <span className="badge badge-domain" data-domain={domainId}>
        {domain
          ? compact
            ? `${domain.id} (${domain.number})`
            : `${domain.id} • ${domain.number} ${domain.titleEn}`
          : domainId}
      </span>
      {objectiveIds &&
        objectiveIds.map((objId) => (
          <span key={objId} className="badge" title={`Objective ${objId}`}>
            Obj {objId}
          </span>
        ))}
    </span>
  );
}
