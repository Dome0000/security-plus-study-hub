import { useEffect, useId, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  Layers,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { BilingualPrompt } from '../components/BilingualPrompt';
import { DomainBadge } from '../components/DomainBadge';
import { useAppContext } from '../context/AppContext';
import { EXAM_METADATA } from '../data/examMeta';
import type { DomainId, FlashcardConfidence } from '../types';

type ActiveTab = 'glossary' | 'flashcards';
type ConfidenceFilter = 'all' | 'unrated' | FlashcardConfidence;

export function FlashcardsGlossaryPage() {
  const { bundle, loading, lessonsById, progress, rateFlashcard } = useAppContext();
  const [searchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState<ActiveTab>('glossary');
  const [searchQuery, setSearchQuery] = useState<string>(() => searchParams.get('q') ?? '');
  const [domainFilter, setDomainFilter] = useState<'ALL' | DomainId>('ALL');

  const [cardDomainFilter, setCardDomainFilter] = useState<'ALL' | DomainId>('ALL');
  const [confidenceFilter, setConfidenceFilter] = useState<ConfidenceFilter>('all');
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [revealed, setRevealed] = useState<boolean>(false);

  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam !== null) {
      setSearchQuery(qParam);
      setActiveTab('glossary');
    }
  }, [searchParams]);

  const baseId = useId();
  const glossarySearchId = useId();
  const glossaryDomId = useId();
  const cardDomId = useId();
  const cardConfId = useId();

  const filteredGlossary = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return (bundle?.glossary ?? []).filter((entry) => {
      if (domainFilter !== 'ALL' && entry.domainId !== domainFilter) return false;
      if (!q) return true;
      const hay = [
        entry.termEn,
        entry.acronym ?? '',
        entry.fullNameEn ?? '',
        entry.explanationTh,
        entry.usageContextTh,
        ...entry.objectiveIds
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(q);
    });
  }, [bundle, searchQuery, domainFilter]);

  const filteredCards = useMemo(() => {
    return (bundle?.flashcards ?? []).filter((card) => {
      if (cardDomainFilter !== 'ALL' && card.domainId !== cardDomainFilter) return false;
      const conf = progress.flashcardProgress[card.id];
      if (confidenceFilter === 'unrated' && conf !== undefined) return false;
      if (
        confidenceFilter !== 'all' &&
        confidenceFilter !== 'unrated' &&
        conf !== confidenceFilter
      ) {
        return false;
      }
      return true;
    });
  }, [bundle, cardDomainFilter, confidenceFilter, progress.flashcardProgress]);

  const cardStats = useMemo(() => {
    const cards = bundle?.flashcards ?? [];
    let again = 0;
    let good = 0;
    let mastered = 0;
    let unrated = 0;
    for (const c of cards) {
      const status = progress.flashcardProgress[c.id];
      if (status === 'again') again++;
      else if (status === 'good') good++;
      else if (status === 'mastered') mastered++;
      else unrated++;
    }
    return { total: cards.length, again, good, mastered, unrated };
  }, [bundle, progress.flashcardProgress]);

  const safeCardIndex =
    filteredCards.length > 0 ? Math.min(cardIndex, filteredCards.length - 1) : 0;
  const activeCard = filteredCards[safeCardIndex] ?? null;

  const handleRateCard = (cardId: string, confidence: FlashcardConfidence) => {
    rateFlashcard(cardId, confidence);
    setRevealed(false);
    if (filteredCards.length > 1) {
      setCardIndex((prev) => (prev + 1) % filteredCards.length);
    }
  };

  if (loading) {
    return <div className="card">กำลังโหลดคลังคำศัพท์และแฟลชการ์ด...</div>;
  }

  return (
    <div className="stack-lg">
      <div className="page-header">
        <div>
          <h1>แฟลชการ์ด & คลังคำศัพท์ ({EXAM_METADATA.examCode})</h1>
          <p className="page-subtitle">
            ทบทวนคำศัพท์ ตัวย่อสำคัญ และฝึก Active Recall เชิงแนวคิดเปรียบเทียบ
          </p>
        </div>
      </div>

      <div className="tabs-bar" role="tablist" aria-label="โหมดทบทวนคำศัพท์และแฟลชการ์ด">
        <button
          id={`${baseId}-tab-glossary`}
          type="button"
          role="tab"
          className="tab-btn"
          aria-selected={activeTab === 'glossary'}
          aria-controls={`${baseId}-panel-glossary`}
          onClick={() => setActiveTab('glossary')}
        >
          <FileText size={16} aria-hidden="true" />
          <span>คลังคำศัพท์และตัวย่อ ({bundle?.glossary.length ?? 0})</span>
        </button>

        <button
          id={`${baseId}-tab-flashcards`}
          type="button"
          role="tab"
          className="tab-btn"
          aria-selected={activeTab === 'flashcards'}
          aria-controls={`${baseId}-panel-flashcards`}
          onClick={() => setActiveTab('flashcards')}
        >
          <Layers size={16} aria-hidden="true" />
          <span>แฟลชการ์ดเชิงแนวคิด ({bundle?.flashcards.length ?? 0})</span>
        </button>
      </div>

      {activeTab === 'glossary' ? (
        <section
          id={`${baseId}-panel-glossary`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-glossary`}
          className="stack-md"
        >
          <div className="card grid-2">
            <div className="field-group">
              <label htmlFor={glossarySearchId} className="field-label">
                ค้นหาคำศัพท์ / ตัวย่อ / คำอธิบาย
              </label>
              <input
                id={glossarySearchId}
                type="search"
                className="input"
                placeholder="เช่น CIA, AAA, SIEM, DMARC, Zero Trust..."
                value={searchQuery}
                onChange={(ev) => setSearchQuery(ev.target.value)}
              />
            </div>

            <div className="field-group">
              <label htmlFor={glossaryDomId} className="field-label">
                กรองตาม Domain
              </label>
              <select
                id={glossaryDomId}
                className="select"
                value={domainFilter}
                onChange={(ev) => setDomainFilter(ev.target.value as 'ALL' | DomainId)}
              >
                <option value="ALL">ทุก Domain</option>
                {EXAM_METADATA.domains.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.id} ({d.number}) — {d.titleEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filteredGlossary.length === 0 ? (
            <div className="card-subtle">ไม่พบคำศัพท์ที่ตรงกับเงื่อนไขการค้นหา</div>
          ) : (
            <div className="grid-2">
              {filteredGlossary.map((entry) => (
                <article key={entry.id} className="card stack-sm">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', flexWrap: 'wrap' }}>
                    <div>
                      <h2 style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
                        {entry.termEn}
                        {entry.acronym ? ` (${entry.acronym})` : ''}
                      </h2>
                      {entry.fullNameEn && (
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontWeight: 600 }}>
                          {entry.fullNameEn}
                        </div>
                      )}
                    </div>
                    <DomainBadge domainId={entry.domainId} objectiveIds={entry.objectiveIds} compact />
                  </div>

                  <p className="prose-text" style={{ margin: 0 }}>
                    {entry.explanationTh}
                  </p>
                  <div className="card-subtle" style={{ fontSize: 'var(--text-xs)' }}>
                    <strong>บริบทการใช้งาน / ข้อสอบ: </strong>
                    {entry.usageContextTh}
                  </div>

                  <div className="btn-row">
                    {entry.relatedLessonIds.map((lid) => {
                      const lesson = lessonsById.get(lid);
                      return (
                        <Link key={lid} to={`/lessons/${lid}`} className="btn btn-sm">
                          <BookOpen size={14} aria-hidden="true" />
                          <span>{lesson ? `${lid}: ${lesson.titleTh}` : lid}</span>
                        </Link>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      ) : (
        <section
          id={`${baseId}-panel-flashcards`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-flashcards`}
          className="stack-md"
        >
          <div className="card stack-md">
            <div className="btn-row">
              <span className="badge">ทั้งหมด {cardStats.total}</span>
              <span className="badge">ยังไม่ประเมิน {cardStats.unrated}</span>
              <span className="badge badge-warning">ทบทวนซ้ำ (Again) {cardStats.again}</span>
              <span className="badge badge-info">เข้าใจแล้ว (Good) {cardStats.good}</span>
              <span className="badge badge-success">แม่นยำ (Mastered) {cardStats.mastered}</span>
            </div>

            <div className="grid-2">
              <div className="field-group">
                <label htmlFor={cardDomId} className="field-label">
                  กรองตาม Domain
                </label>
                <select
                  id={cardDomId}
                  className="select"
                  value={cardDomainFilter}
                  onChange={(ev) => {
                    setCardDomainFilter(ev.target.value as 'ALL' | DomainId);
                    setCardIndex(0);
                    setRevealed(false);
                  }}
                >
                  <option value="ALL">ทุก Domain</option>
                  {EXAM_METADATA.domains.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.id} ({d.number}) — {d.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field-group">
                <label htmlFor={cardConfId} className="field-label">
                  กรองตามระดับความมั่นใจ
                </label>
                <select
                  id={cardConfId}
                  className="select"
                  value={confidenceFilter}
                  onChange={(ev) => {
                    setConfidenceFilter(ev.target.value as ConfidenceFilter);
                    setCardIndex(0);
                    setRevealed(false);
                  }}
                >
                  <option value="all">ทั้งหมด</option>
                  <option value="unrated">ยังไม่เคยประเมิน</option>
                  <option value="again">ต้องทบทวนซ้ำ (Again)</option>
                  <option value="good">เข้าใจแล้ว (Good)</option>
                  <option value="mastered">แม่นยำแล้ว (Mastered)</option>
                </select>
              </div>
            </div>
          </div>

          {!activeCard ? (
            <div className="card-subtle">
              ไม่พบแฟลชการ์ดที่ตรงกับตัวกรองนี้
            </div>
          ) : (
            <div className="flashcard-stage">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div className="btn-row">
                  <span className="badge">
                    ใบที่ {safeCardIndex + 1} / {filteredCards.length}
                  </span>
                  <DomainBadge
                    domainId={activeCard.domainId}
                    objectiveIds={activeCard.objectiveIds}
                    compact
                  />
                </div>

                {progress.flashcardProgress[activeCard.id] && (
                  <span className="badge badge-info">
                    ระดับเดิม: {progress.flashcardProgress[activeCard.id]}
                  </span>
                )}
              </div>

              <div className="stack-sm">
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
                  คำถามทบทวนแนวคิด (Prompt)
                </div>
                <BilingualPrompt
                  textEn={activeCard.conceptPromptEn}
                  textTh={activeCard.conceptPromptTh}
                  showThai={progress.preferences.showThaiTranslation}
                />
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  aria-expanded={revealed}
                  onClick={() => setRevealed((prev) => !prev)}
                >
                  {revealed ? (
                    <>
                      <EyeOff size={16} aria-hidden="true" />
                      <span>ซ่อนคำตอบ</span>
                    </>
                  ) : (
                    <>
                      <Eye size={16} aria-hidden="true" />
                      <span>พลิกดูคำตอบ (Reveal Answer)</span>
                    </>
                  )}
                </button>
              </div>

              {revealed && (
                <div className="stack-md" style={{ paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div className="card-subtle stack-sm">
                    <strong>คำตอบเชิงแนวคิด:</strong>
                    <p className="prose-text" style={{ margin: 0 }}>
                      {activeCard.conceptualAnswerTh}
                    </p>
                  </div>

                  <div className="alert alert-info">
                    <Sparkles size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong>จุดเปรียบเทียบสำคัญ (Compare & Contrast): </strong>
                      {activeCard.compareContrastTh}
                    </div>
                  </div>

                  <div className="btn-row">
                    {activeCard.relatedLessonIds.map((lid) => {
                      const lesson = lessonsById.get(lid);
                      return (
                        <Link key={lid} to={`/lessons/${lid}`} className="btn btn-sm">
                          <BookOpen size={14} aria-hidden="true" />
                          <span>{lesson ? `${lid}: ${lesson.titleTh}` : lid}</span>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="stack-sm">
                    <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)' }}>
                      ประเมินความเข้าใจของคุณ (บันทึกและเลื่อนไปใบถัดไป):
                    </span>
                    <div className="btn-row">
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => handleRateCard(activeCard.id, 'again')}
                      >
                        <RotateCcw size={14} aria-hidden="true" />
                        <span>ทบทวนซ้ำ (Again)</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm"
                        onClick={() => handleRateCard(activeCard.id, 'good')}
                      >
                        <span>เข้าใจแล้ว (Good)</span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-success"
                        onClick={() => handleRateCard(activeCard.id, 'mastered')}
                      >
                        <CheckCircle2 size={14} aria-hidden="true" />
                        <span>แม่นยำ (Mastered)</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="btn-row"
                style={{ justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}
              >
                <button
                  type="button"
                  className="btn btn-sm"
                  disabled={filteredCards.length <= 1}
                  onClick={() => {
                    setRevealed(false);
                    setCardIndex((prev) =>
                      prev === 0 ? filteredCards.length - 1 : prev - 1
                    );
                  }}
                >
                  <ArrowLeft size={15} aria-hidden="true" />
                  <span>ใบก่อนหน้า</span>
                </button>

                <button
                  type="button"
                  className="btn btn-sm"
                  disabled={filteredCards.length <= 1}
                  onClick={() => {
                    setRevealed(false);
                    setCardIndex((prev) => (prev + 1) % filteredCards.length);
                  }}
                >
                  <span>ใบถัดไป</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
