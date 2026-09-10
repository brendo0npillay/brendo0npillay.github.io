import { useEffect, useRef } from 'react';

/**
 * Renders a large circular portrait that tilts and shifts gently toward
 * the pointer, as if the face is tracking the cursor across the hero.
 */
const FaceFollowCursor = ({ src, alt = 'Portrait', className = '' }) => {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const handlePointer = e => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (window.innerWidth / 2);
      const dy = (e.clientY - cy) / (window.innerHeight / 2);
      target.current.x = Math.max(-1, Math.min(1, dx));
      target.current.y = Math.max(-1, Math.min(1, dy));
    };

    window.addEventListener('pointermove', handlePointer);

    let raf = 0;
    const MAX_SHIFT = 22;
    const MAX_TILT = 6;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      if (imgRef.current) {
        const tx = current.current.x * MAX_SHIFT;
        const ty = current.current.y * MAX_SHIFT;
        const rotY = current.current.x * MAX_TILT;
        const rotX = -current.current.y * MAX_TILT;
        imgRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', handlePointer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${className}`} style={{ perspective: '900px' }}>
      <div className="absolute inset-0 rounded-full bg-lime/25 blur-[70px] scale-90" aria-hidden="true" />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        className="relative w-full h-full object-cover rounded-full border-2 border-lime/70 shadow-[0_0_60px_rgba(215,255,0,0.25)] will-change-transform select-none"
      />
    </div>
  );
};

export default FaceFollowCursor;
