import { useEffect, useId, useRef } from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel?: string;
  tone?: 'primary' | 'danger';
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  open,
  title,
  description,
  confirmLabel,
  cancelLabel = 'ยกเลิก',
  tone = 'primary',
  onConfirm,
  onCancel
}: ConfirmModalProps) {
  const titleId = useId();
  const descId = useId();
  const cancelBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      const timer = window.setTimeout(() => {
        cancelBtnRef.current?.focus();
      }, 10);
      return () => window.clearTimeout(timer);
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const handleKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        ev.preventDefault();
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onCancel]);

  if (!open) return null;

  const isDanger = tone === 'danger';

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onClick={(ev) => {
        if (ev.target === ev.currentTarget) {
          onCancel();
        }
      }}
    >
      <div
        className="modal-panel modal-panel-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          <span
            aria-hidden="true"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '999px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              backgroundColor: isDanger ? 'var(--status-danger-bg)' : 'var(--accent-soft)',
              border: `1px solid ${isDanger ? 'var(--status-danger-border)' : 'var(--d1-border)'}`,
              color: isDanger ? 'var(--status-danger-text)' : 'var(--accent-primary)'
            }}
          >
            {isDanger ? <AlertTriangle size={22} /> : <ShieldCheck size={22} />}
          </span>

          <div className="stack-sm" style={{ gap: '6px', flex: 1, minWidth: 0 }}>
            <h2 id={titleId} style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
              {title}
            </h2>
            <p id={descId} style={{ margin: 0, color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
              {description}
            </p>
          </div>
        </div>

        <div
          className="btn-row"
          style={{
            justifyContent: 'flex-end',
            marginTop: '6px',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <button
            ref={cancelBtnRef}
            type="button"
            className="btn btn-ghost"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            className={`btn ${isDanger ? 'btn-danger' : 'btn-primary'}`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
