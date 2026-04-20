'use client';

const steps = [
  {
    num: '01',
    title: 'Keşfet & Planla',
    desc: 'Projenizin hedeflerini, kullanıcı kitlesini ve gereksinimlerini birlikte belirliyoruz. Doğru bir başlangıç, başarılı bir sonucun yarısıdır.',
    icon: '🔍',
    color: '#22c55e',
  },
  {
    num: '02',
    title: 'Tasarla & Geliştir',
    desc: 'Figma\'da wireframe ve prototip hazırlıyorum, ardından kod yazıyorum. Her adımda estetik ve performansı bir arada sunuyorum.',
    icon: '🛠️',
    color: '#f97316',
  },
  {
    num: '03',
    title: 'Yayınla & Büyüt',
    desc: 'Kapsamlı testlerin ardından Firebase ya da Vercel\'e deploy ediyoruz. Canlıya geçtikten sonra da destek ve optimizasyon süresince yanınızdayım.',
    icon: '🚀',
    color: '#8b5cf6',
  },
];

export default function Process() {
  return (
    <section id="process" style={{ background: '#111', padding: '100px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280', display: 'block', marginBottom: 16 }}>
            — Nasıl Çalışıyorum
          </span>
          <h2 className="heading-lg" style={{ color: '#fff' }}>
            Basit, şeffaf{' '}
            <span className="pill pill-orange">bir süreç</span>
          </h2>
          <p style={{ color: '#9ca3af', marginTop: 16, maxWidth: 520, lineHeight: 1.7, fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
            Vizyonunuzu etkili dijital ürünlere dönüştürmek için izlediğim adım adım yaklaşım.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, position: 'relative' }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ position: 'relative' }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: 52, right: -1,
                  width: 2, height: 2,
                  zIndex: 0,
                }} />
              )}

              <div style={{
                background: '#1a1a1a',
                border: '1.5px solid #2a2a2a',
                borderRadius: 24,
                padding: '40px 36px',
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = step.color + '60';
                  (e.currentTarget as HTMLDivElement).style.background = '#1f1f1f';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#2a2a2a';
                  (e.currentTarget as HTMLDivElement).style.background = '#1a1a1a';
                }}
              >
                {/* Icon + number row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 18,
                    background: step.color + '18',
                    border: `1.5px solid ${step.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem',
                  }}>
                    {step.icon}
                  </div>
                  <span style={{
                    fontSize: '3rem', fontWeight: 900,
                    color: '#2a2a2a',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    fontFamily: "'Syne', sans-serif",
                  }}>{step.num}</span>
                </div>

                <h3 style={{ fontWeight: 900, fontSize: '1.3rem', color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
                  {step.desc}
                </p>

                <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 3, background: step.color, borderRadius: 99 }} />
                  <div style={{ width: 10, height: 3, background: step.color + '50', borderRadius: 99 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
