import { useEffect, useRef, useState } from 'react';
import './RotatingCards.css';

/**
 * A draggable 3D circular carousel: cards are arranged around a ring and
 * rotated with pointer drag or auto-rotation, snapping to the nearest card.
 */
const RotatingCards = ({ items = [], radius = 380, autoRotateSpeed = 0.05 }) => {
  const count = items.length || 1;
  const step = 360 / count;

  const ringRef = useRef(null);
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let raf = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tick = () => {
      if (!draggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.01) {
          angleRef.current += velocityRef.current;
          velocityRef.current *= 0.93;
        } else if (!reduceMotion) {
          angleRef.current += autoRotateSpeed;
        }
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${angleRef.current}deg)`;
      }

      const normalized = ((-angleRef.current % 360) + 360) % 360;
      const nearest = Math.round(normalized / step) % count;
      setActiveIndex(prev => (prev === nearest ? prev : nearest));

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoRotateSpeed, count, step]);

  const onPointerDown = e => {
    if (e.target.closest('a')) return;
    draggingRef.current = true;
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = e => {
    if (!draggingRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    angleRef.current += dx * 0.35;
    velocityRef.current = dx * 0.35;
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  const goTo = index => {
    const delta = index - activeIndex;
    angleRef.current -= delta * step;
  };

  return (
    <div className="rotating-cards-stage">
      <div
        className="rotating-cards-ring"
        ref={ringRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {items.map((item, i) => (
          <div
            key={item.title ?? i}
            className={`rotating-card ${i === activeIndex ? 'is-active' : ''}`}
            style={{ transform: `rotateY(${i * step}deg) translateZ(${radius}px)` }}
          >
            <div className="rotating-card__inner">
              {item.image && <img src={item.image} alt={item.title} draggable={false} />}
              <div className="rotating-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="rotating-card__link">
                    View project →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rotating-cards-dots">
        {items.map((item, i) => (
          <button
            key={item.title ?? i}
            aria-label={`Show ${item.title}`}
            className={`rotating-cards-dot ${i === activeIndex ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCards;