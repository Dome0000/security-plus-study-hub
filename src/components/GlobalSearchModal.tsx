import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, FileText, Search, Target, X } from 'lucide-react';
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
      // Quick suggestions when search is empty
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <h2 id={titleId} style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={20} aria-hidden="true" />
            ค้นหาทั่วทั้งระบบ (Global Search)
          </h2>
          <button
            type="button"
            className="btn btn-sm"
            onClick={closeSearch}
            aria-label="ปิดหน้าต่างค้นหา"
          >
            <X size={16} aria-hidden="true" />
            ปิด
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
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
            ใช้ปุ่มลูกศร ขึ้น/ลง เพื่อเลือก และกด Enter เพื่อเปิดหน้า หรือ Esc เพื่อปิด
          </span>
        </div>

        <div className="search-results-list" role="region" aria-label="ผลลัพธ์การค้นหา">
          {results.length === 0 ? (
            <div className="card-subtle" style={{ textAlign: 'center' }}>
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

              return (
                <button
                  key={item.key}
                  type="button"
                  className={`search-result-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => selectResult(item)}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <KindIcon size={16} aria-hidden="true" />
                      {item.title}
                    </span>
                    <span className="btn-row" style={{ gap: '4px' }}>
                      <span className="badge badge-domain" data-domain={item.domainId}>
                        {item.domainId}
                      </span>
                      <span className="badge">{kindLabel}</span>
                    </span>
                  </div>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                    {item.subtitle}
                  </span>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
