'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const rafRef  = useRef<number>(0);
  const hovering = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => { hovering.current = true; };
    const onLeave = () => { hovering.current = false; };

    document.addEventListener('mousemove', onMove);

    const interactables = 'a, button, [role="button"], input, textarea, label, select';
    const addListeners = () => {
      document.querySelectorAll<HTMLElement>(interactables).forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    addListeners();

    const animate = () => {
      const dot  = dotRef.current;
      const rng  = ringRef.current;
      if (!dot || !rng) { rafRef.current = requestAnimationFrame(animate); return; }

      // dot snaps instantly
      dot.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;

      // ring lags behind
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      const scale = hovering.current ? 1.8 : 1;
      rng.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px) scale(${scale})`;

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0,
        width: 8, height: 8, borderRadius: '50%',
        background: '#e71c39',
        pointerEvents: 'none', zIndex: 99999,
        mixBlendMode: 'difference',
        willChange: 'transform',
      }} />
      {/* Ring */}
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0,
        width: 40, height: 40, borderRadius: '50%',
        border: '1.5px solid #e71c39',
        pointerEvents: 'none', zIndex: 99998,
        transition: 'transform 0.08s linear, scale 0.2s ease',
        willChange: 'transform',
        opacity: 0.6,
      }} />
    </>
  );
}
