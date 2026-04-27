'use client';

import { useRef, useState } from 'react';

const works = [
  { file: '/6.svg?v=4',  title: 'Alphabet & Bug',  tag: 'Typography / Illustration' },
  { file: '/7.svg',      title: 'Work 02',          tag: 'Visual Design' },
  { file: '/8.svg',      title: 'Work 03',          tag: 'Concept' },
  { file: '/9.svg?v=2',  title: "Finger'S",         tag: 'Typography / Branding' },
  { file: '/10.svg?v=3', title: 'Work 05',          tag: 'Illustration' },
];

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const didDrag = useRef(false);

  /* ── Fare ile sürükleme ── */
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current; if (!el) return;
    didDrag.current = false;
    drag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = 'grabbing';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    const el = trackRef.current; if (!el || !drag.current.active) return;
    const x = e.pageX - el.offsetLeft;
    const delta = x - drag.current.startX;
    if (Math.abs(delta) > 4) didDrag.current = true;
    el.scrollLeft = drag.current.scrollLeft - delta * 1.4;
  };
  const onMouseUp = () => {
    drag.current.active = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  const handleCardClick = (i: number) => {
    if (!didDrag.current) setLightbox(i);
  };

  return (
    <section
      id="projects"
      className="parallax-section"
      style={{
        background: '#000',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 'clamp(80px, 10vw, 140px)',
        paddingBottom: 'clamp(60px, 8vw, 100px)',
      }}
    >
      {/* ── Başlık ── */}
      <div style={{ padding: '0 clamp(24px,5vw,80px)', marginBottom: 40 }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '0.72rem', fontWeight: 800,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#e71c39', display: 'block', marginBottom: 16,
        }}>— My Work</span>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontWeight: 900,
          fontSize: 'clamp(2.5rem, 5vw, 5rem)',
          color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.0, margin: 0,
        }}>
          Selected<br /><span style={{ color: '#e71c39' }}>works.</span>
        </h2>
      </div>

      {/* ── Yatay galeri track ── */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="projects-track"
        style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          cursor: 'grab',
          paddingLeft: 'clamp(24px,5vw,80px)',
          paddingRight: 'clamp(24px,5vw,80px)',
          paddingBottom: 8,
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        {works.map((w, i) => (
          <div
            key={i}
            onClick={() => handleCardClick(i)}
            style={{
              flex: '0 0 clamp(220px, 30vw, 400px)',
              scrollSnapAlign: 'start',
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid #1a1a1a',
              background: '#080808',
              transition: 'border-color 0.3s, transform 0.3s',
              userSelect: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '#e71c39';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = '#1a1a1a';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
          >
            {/* Görsel — 3:4 oran */}
            <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', background: '#0d0d0d' }}>
              <img
                src={w.file}
                alt={w.title}
                draggable={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Kart alt bilgi */}
            <div style={{ padding: '14px 16px 18px' }}>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '0.62rem', fontWeight: 800,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#e71c39', display: 'block', marginBottom: 5,
              }}>{w.tag}</span>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontWeight: 900,
                fontSize: 'clamp(0.95rem, 1.3vw, 1.15rem)',
                color: '#fff', letterSpacing: '-0.02em', margin: 0,
              }}>{w.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: 24,
            animation: 'fadeIn 0.25s ease',
            cursor: 'zoom-out',
          }}
        >
          {/* Kapat */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: 'absolute', top: 24, right: 28,
              background: 'none', border: 'none',
              color: '#fff', fontSize: '2rem', cursor: 'pointer',
              fontFamily: "'Syne', sans-serif", lineHeight: 1,
            }}
          >✕</button>

          {/* Önceki */}
          <button
            onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + works.length) % works.length); }}
            style={arrowBtn}
          >←</button>

          {/* Görsel */}
          <img
            src={works[lightbox].file}
            alt={works[lightbox].title}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '85vw', maxHeight: '82vh',
              objectFit: 'contain', borderRadius: 12,
              display: 'block',
            }}
          />

          {/* İsim */}
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#e71c39' }}>
              {works[lightbox].tag}
            </span>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#fff', margin: '6px 0 0', letterSpacing: '-0.02em' }}>
              {works[lightbox].title}
            </h3>
          </div>

          {/* Sonraki */}
          <button
            onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % works.length); }}
            style={{ ...arrowBtn, left: 'auto', right: 16 }}
          >→</button>
        </div>
      )}
    </section>
  );
}

const arrowBtn: React.CSSProperties = {
  position: 'absolute', top: '50%', left: 16,
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '50%', width: 48, height: 48,
  color: '#fff', fontSize: '1.2rem',
  cursor: 'pointer', display: 'flex',
  alignItems: 'center', justifyContent: 'center',
  transition: 'background 0.2s',
};
