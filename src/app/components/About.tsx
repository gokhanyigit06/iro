'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getAboutData } from '@/lib/firebaseData';
import type { AboutData } from '@/types/portfolio';

export default function About() {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    getAboutData().then(setData);
  }, []);

  const d = data ?? {
    subtitle: 'Visual Communication Designer',
    title: 'what am I',
    titleHighlight: 'thinking',
    description: "The real world isn't always inspiring enough. That's why I chose to draw my own.",
    name: 'İREM ÇAĞAN',
    year: '2026',
    photo: '/cover.jpg',
  };

  return (
    <section
      id="about"
      className="parallax-section"
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        paddingBottom: 0,
      }}
    >
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(to bottom, transparent 0%, #000 100%)',
        zIndex: 10,
        pointerEvents: 'none',
      }} />

      {/* Sol: Fotoğraf */}
      <div className="reveal-left" style={{ flex: '0 0 48%', position: 'relative', overflow: 'hidden' }}>
        <Image
          src={d.photo}
          alt={d.name}
          fill
          sizes="48vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 10%',
            filter: 'grayscale(100%) contrast(1.05) brightness(0.85)',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, transparent 60%, #000 100%)',
          zIndex: 2,
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.85) 80%, #000 100%)',
          zIndex: 3, pointerEvents: 'none',
        }} />
      </div>

      {/* Sağ: İçerik */}
      <div className="reveal-right" style={{
        flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(40px, 6vw, 100px) clamp(32px, 5vw, 80px)',
        background: '#000', position: 'relative',
      }}>
        <div className="reveal reveal-delay-1" style={{ marginBottom: 32 }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)',
            fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#e71c39',
            display: 'block', marginBottom: 16,
          }}>{d.subtitle}</span>

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            fontWeight: 900, color: '#fff',
            lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0,
          }}>
            {d.title}{' '}
            <span style={{ color: '#e71c39' }}>{d.titleHighlight}</span>
          </h2>
        </div>

        {d.description.split('\n\n').map((para, i) => (
          <p key={i} className="reveal reveal-delay-2" style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.8, maxWidth: 520,
            marginBottom: i < d.description.split('\n\n').length - 1 ? 16 : 40,
          }}>
            {para}
          </p>
        ))}

        <div style={{
          position: 'absolute', bottom: '8%', left: 0,
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          fontWeight: 900, color: 'rgba(255,255,255,0.04)',
          letterSpacing: '-0.04em', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none',
        }}>
          MIND
        </div>

        <div className="reveal reveal-delay-3" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
          <span style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 900,
            fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
            color: '#fff', letterSpacing: '-0.01em',
          }}>{d.name}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem', color: '#e71c39', fontWeight: 700,
          }}>{d.year}</span>
        </div>
      </div>
    </section>
  );
}
