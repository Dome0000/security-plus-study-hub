import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Search, Target, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';
import type { DomainId } from '../types';

interface SearchResultItem {
  key: string;
  kind: 'lesson' | 'glossary' | 'objective';
  title: string;
  subtitle: string;
  domainId: DomainId;
  route: string;
}

export function GlobalSearchModal() {
  const { bundle, searchOpen, closeSearch } = useAppContext();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const inputId = useId();

  useEffect(() => {
    if (searchOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setQuery('');
      setActiveIdx(0);
      const timer = window.setTimeout(() => {
        inputRef.current?.focus();
      }, 15);
      return () => window.clearTimeout(timer);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
    return undefined;
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return undefined;
    const handleEsc = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        ev.preventDefault();
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [searchOpen, closeSearch]);

  const results = useMemo<SearchResultItem[]>(() => {
    const trimmed = query.trim().toLowerCase();
    const items: SearchResultItem[] = [];

    if (!trimmed) {
      for (const lesson of (bundle?.lessons ?? []).slice(0, 4)) {
        items.push({
          key: `lesson-${lesson.id}`,
          kind: 'lesson',
          title: `${lesson.id}: ${lesson.titleTh}`,
          subtitle: `${lesson.titleEn} • Obj ${lesson.objectiveIds.join(', ')}`,
          domainId: lesson.domainId,
          route: `/lessons/${lesson.id}`
        });
      }
      for (const domain of EXAM_METADATA.domains.slice(0, 3)) {
        const firstObj = domain.objectives[0];
        if (firstObj) {
          items.push({
            key: `obj-${firstObj.id}`,
            kind: 'objective',
            title: `Objective ${firstObj.id}: ${firstObj.titleTh}`,
            subtitle: firstObj.titleEn,
            domainId: firstObj.domainId,
            route: `/curriculum?objective=${encodeURIComponent(firstObj.id)}`
          });
        }
      }
      return items;
    }

    for (const lesson of bundle?.lessons ?? []) {
      const hay = [
        lesson.id,
        lesson.titleTh,
        lesson.titleEn,
        ...lesson.objectiveIds,
        ...lesson.keyTerms.map((k) => `${k.termEn} ${k.acronym ?? ''} ${k.explanationTh}`)
      ]
        .join(' ')
        .toLowerCase();
      if (hay.includes(trimmed)) {
        items.push({
          key: `lesson-${lesson.id}`,
          kind: 'lesson',
          title: `${lesson.id}: ${lesson.titleTh}`,
          subtitle: `${lesson.titleEn} • Obj ${lesson.objectiveIds.join(', ')}`,
          domainId: lesson.domainId,
          route: `/lessons/${lesson.id}`
        });
      }
    }

    for (const entry of bundle?.glossary ?? []) {
      const hay = [
        entry.termEn,
        entry.acronym ?? '',
        entry.fullNameEn ?? '',
        entry.explanationTh,
        ...entry.objectiveIds
      ]
        .join(' ')
        .toLowerCase();
      if (hay.includes(trimmed)) {
        items.push({
          key: `glossary-${entry.id}`,
          kind: 'glossary',
          title: entry.acronym ? `${entry.termEn} (${entry.acronym})` : entry.termEn,
          subtitle: entry.explanationTh,
          domainId: entry.domainId,
          route: `/glossary?q=${encodeURIComponent(entry.termEn)}`
        });
      }
    }

    for (const domain of EXAM_METADATA.domains) {
      for (const obj of domain.objectives) {
        const hay = [obj.id, obj.titleEn, obj.titleTh, ...obj.subtopics].join(' ').toLowerCase();
        if (hay.includes(trimmed)) {
          items.push({
            key: `obj-${obj.id}`,
            kind: 'objective',
            title: `Objective ${obj.id}: ${obj.titleTh}`,
            subtitle: obj.titleEn,
            domainId: obj.domainId,
            route: `/curriculum?objective=${encodeURIComponent(obj.id)}`
          });
        }
      }
    }

    return items.slice(0, 30);
  }, [bundle, query]);

  const safeActiveIdx = results.length > 0 ? Math.min(activeIdx, results.length - 1) : 0;

  const selectResult = (item: SearchResultItem) => {
    closeSearch();
    void navigate(item.route);
  };

  if (!searchOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={(ev) => {
        if (ev.target === ev.currentTarget) closeSearch();
      }}
    >
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            paddingBottom: '10px',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <h2
            id={titleId}
            style={{
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: 'var(--text-lg)'
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Search size={17} />
            </span>
            <span>ค้นหาทั่วทั้งระบบ (Global Search)</span>
          </h2>
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            onClick={closeSearch}
            aria-label="ปิดหน้าต่างค้นหา"
          >
            <X size={16} aria-hidden="true" />
            <span>ปิด</span>
          </button>
        </div>

        <div className="field-group">
          <label htmlFor={inputId} className="sr-only">
            ค้นหาบทเรียน คำศัพท์ ตัวย่อ หรือ Objective SY0-701
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            className="input"
            placeholder="พิมพ์คำค้น เช่น Zero Trust, DMARC, 1.2, L1-01, Ransomware..."
            value={query}
            onChange={(ev) => {
              setQuery(ev.target.value);
              setActiveIdx(0);
            }}
            onKeyDown={(ev) => {
              if (ev.key === 'ArrowDown') {
                ev.preventDefault();
                setActiveIdx((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
              } else if (ev.key === 'ArrowUp') {
                ev.preventDefault();
                setActiveIdx((prev) =>
                  results.length > 0 ? (prev - 1 + results.length) % results.length : 0
                );
              } else if (ev.key === 'Enter') {
                const chosen = results[safeActiveIdx];
                if (chosen) {
                  ev.preventDefault();
                  selectResult(chosen);
                }
              }
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              fontSize: 'var(--text-xs)',
              color: 'var(--text-muted)',
              fontWeight: 600
            }}
          >
            <span>
              {query.trim() ? 'ผลลัพธ์ที่ตรงกับคำค้น' : 'แนะนำด่วน (Quick Access)'}
            </span>
            <span className="tabular-nums">พบ {results.length} รายการ</span>
          </div>
        </div>

        <div className="search-results-list" role="region" aria-label="ผลลัพธ์การค้นหา">
          {results.length === 0 ? (
            <div className="card-subtle" style={{ textAlign: 'center', padding: '24px 16px' }}>
              ไม่พบรายการที่ตรงกับ &ldquo;{query}&rdquo; ลองค้นด้วยรหัส Objective (เช่น 1.1–5.6) หรือคำศัพท์ภาษาอังกฤษ
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = idx === safeActiveIdx;
              const KindIcon =
                item.kind === 'lesson'
                  ? BookOpen
                  : item.kind === 'glossary'
                    ? FileText
                    : Target;
              const kindLabel =
                item.kind === 'lesson'
                  ? 'บทเรียน'
                  : item.kind === 'glossary'
                    ? 'คำศัพท์'
                    : 'Objective';
              const kindBadgeClass =
                item.kind === 'lesson'
                  ? 'badge-info'
                  : item.kind === 'glossary'
                    ? 'badge-success'
                    : 'badge-warning';

              return (
                <button
                  key={item.key}
                  type="button"
                  className={`search-result-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => selectResult(item)}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      flexWrap: 'wrap'
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <KindIcon size={16} aria-hidden="true" style={{ flexShrink: 0, color: 'var(--accent-primary)' }} />
                      <span>{item.title}</span>
                    </span>
                    <span className="btn-row" style={{ gap: '6px' }}>
                      <span className="badge badge-domain" data-domain={item.domainId}>
                        <span className="domain-dot" data-domain={item.domainId} aria-hidden="true" />
                        {item.domainId}
                      </span>
                      <span className={`badge ${kindBadgeClass}`}>{kindLabel}</span>
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px'
                    }}
                  >
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                      {item.subtitle}
                    </span>
                    {isSelected && (
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        style={{ flexShrink: 0, color: 'var(--accent-primary)' }}
                      />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            paddingTop: '10px',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: 'var(--text-xs)',
            color: 'var(--text-muted)'
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <kbd className="kbd-chip">↑</kbd>
            <kbd className="kbd-chip">↓</kbd>
            <span>เลือกรายการ</span>
            <span aria-hidden="true">•</span>
            <kbd className="kbd-chip">Enter</kbd>
            <span>เปิดหน้า</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <kbd className="kbd-chip">Esc</kbd>
            <span>ปิดหน้าต่าง</span>
          </span>
        </div>
      </div>
    </div>
  );
}
