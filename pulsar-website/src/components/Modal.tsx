import { useEffect, useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import { getFocusable, trapTab } from '../lib/focus';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Modal({ open, onClose, title, eyebrow, children }: ModalProps) {
  const { t } = useLanguage();
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    lastFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const panel = panelRef.current;
    const focusables = panel ? getFocusable(panel) : [];
    (focusables[0] ?? panel)?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (panel) trapTab(event, panel);
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      lastFocus.current?.focus();
    };
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div className="modal-root">
      <div className="modal-backdrop" onClick={onClose} />
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={panelRef}
        tabIndex={-1}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label={t.a11y.closeDialog}>
          <span aria-hidden="true">×</span>
        </button>
        {eyebrow ? <p className="modal-eyebrow">{eyebrow}</p> : null}
        <h2 id={titleId} className="modal-title">
          {title}
        </h2>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
