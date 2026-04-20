'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: '#000',
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
      }}
    >
      {/* Sol: Fotoğraf */}
      <div style={{
        flex: '0 0 48%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Image
          src="/cover.jpg"
          alt="İrem Çağan"
          fill
          sizes="48vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 10%',
            filter: 'grayscale(100%) contrast(1.05) brightness(0.85)',
          }}
        />
        {/* Sağa siyah fade */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, transparent 60%, #000 100%)',
          zIndex: 2,
        }} />
      </div>

      {/* Sağ: İçerik */}
      <div style={{
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(40px, 6vw, 100px) clamp(32px, 5vw, 80px)',
        background: '#000',
        position: 'relative',
      }}>

        <div style={{ marginBottom: 32 }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(0.75rem, 1.1vw, 0.9rem)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#e71c39',
            display: 'block',
            marginBottom: 16,
          }}>Visual Communication Designer</span>

          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            margin: 0,
          }}>
            what am I{' '}
            <span style={{ color: '#e71c39' }}>thinking</span>
            <span style={{
              color: '#e71c39',
              fontFamily: 'serif',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            }}> ?</span>
          </h2>
        </div>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
          color: 'rgba(255,255,255,0.65)',
          lineHeight: 1.8,
          maxWidth: 520,
          marginBottom: 40,
        }}>
          The real world isn&apos;t always inspiring enough. That&apos;s why I
          chose to draw my own. Sometimes tangled lines, sometimes colors
          erupting in unexpected places.
          <br /><br />
          From the outside, it might look like chaos, but this is entirely my
          personal order. This portfolio isn&apos;t a showcase; it&apos;s my
          unfiltered, living mind itself, running by my own rules.
        </p>

        {/* Ghost watermark */}
        <div style={{
          position: 'absolute',
          bottom: '8%',
          left: 'clamp(32px, 5vw, 80px)',
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(4rem, 10vw, 9rem)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.04)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          BUD
        </div>

        {/* İsim + yıl */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          marginTop: 8,
        }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
            color: '#fff',
            letterSpacing: '-0.01em',
          }}>İREM ÇAĞAN</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: '#e71c39',
            fontWeight: 700,
          }}>2026</span>
        </div>

      </div>
    </section>
  );
}
