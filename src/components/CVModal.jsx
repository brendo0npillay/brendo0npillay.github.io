import { useEffect } from 'react';

/**
 * Full-page overlay that shows the CV image over a dimmed, blurred
 * background. Closes on the X button, an Escape press, or a backdrop click.
 */
const CVModal = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-grape-ink/90 backdrop-blur-sm px-4 py-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close CV"
        className="fixed top-5 right-5 z-[110] w-10 h-10 grid place-items-center border border-lime text-lime hover:bg-lime hover:text-grape-ink transition-colors font-techno text-lg leading-none"
      >
        &times;
      </button>

      <img
        src="/CV.png"
        alt="Brendon Pillay CV"
        onClick={e => e.stopPropagation()}
        className="max-h-full max-w-full object-contain border border-grape/50 shadow-[0_0_60px_rgba(109,40,217,0.35)]"
      />
    </div>
  );
};

export default CVModal;