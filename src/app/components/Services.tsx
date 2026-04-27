'use client';

const services = [
  {
    num: '01',
    title: 'Visual Communication Design',
    desc: 'I build strong identities through editorial design, typography, and visual language. Every project carries its own unique feel.',
    tags: ['Editorial', 'Typography', 'Brand Identity'],
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'User-centered, aesthetic and functional interfaces — from wireframe to pixel perfection with Figma.',
    tags: ['Figma', 'Prototyping', 'Design System'],
  },
  {
    num: '03',
    title: 'Full Stack Development',
    desc: 'Modern web applications with React, Next.js and Node.js — from frontend to backend.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    num: '04',
    title: 'Motion & Digital',
    desc: 'Bringing brands to life through digital content, animation, and interactive experiences.',
    tags: ['Motion', 'Digital', 'Interactive'],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="parallax-section"
      style={{
        background: '#000',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)',
      }}
    >
      {/* Başlık */}
      <div className="reveal" style={{ marginBottom: 64 }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '0.72rem',
          fontWeight: 800,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#e71c39',
          display: 'block',
          marginBottom: 16,
        }}>— My Expertise</span>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2.5rem, 5vw, 5rem)',
          color: '#fff',
          letterSpacing: '-0.03em',
          lineHeight: 1.0,
          margin: 0,
        }}>What I<br /><span style={{ color: '#e71c39' }}>Do.</span></h2>
      </div>

      {/* Kartlar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 24,
        maxWidth: 1200,
      }}>
        {services.map((s, i) => (
          <div key={s.num}
            className={`reveal hover-lift reveal-delay-${i + 1}`}
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 4,
              padding: '32px 28px',
              background: 'rgba(255,255,255,0.02)',
            }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 800,
              color: '#e71c39',
              letterSpacing: '0.15em',
              marginBottom: 14,
            }}>{s.num}</div>

            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
              color: '#fff',
              letterSpacing: '-0.02em',
              marginBottom: 12,
              lineHeight: 1.2,
            }}>{s.title}</h3>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.75,
              marginBottom: 20,
            }}>{s.desc}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {s.tags.map(tag => (
                <span key={tag} style={{
                  padding: '3px 10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 50,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.05em',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
