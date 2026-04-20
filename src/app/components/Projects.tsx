'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Rota',
    desc: 'Sürdürülebilir ürün kataloğu ve QR kod entegrasyonlu modern e-ticaret platformu.',
    tags: ['Next.js', 'Firebase', 'Tailwind'],
    emoji: '🌿',
    bg: '#f0fdf4',
    accent: '#22c55e',
    github: 'https://github.com/',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'CStudio',
    desc: 'Kreatif ajans için geliştirilen portföy ve proje yönetim platformu.',
    tags: ['Next.js', 'TypeScript', 'Firebase Auth'],
    emoji: '🎬',
    bg: '#fdf4ff',
    accent: '#8b5cf6',
    github: 'https://github.com/',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'AI Recipe Generator',
    desc: 'Elinizdeki malzemelere göre tarif öneren yapay zeka destekli uygulama.',
    tags: ['Next.js', 'OpenAI', 'Tailwind'],
    emoji: '🍳',
    bg: '#fff7ed',
    accent: '#f97316',
    github: 'https://github.com/',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Personal Dashboard',
    desc: 'Görev yöneticisi, alışkanlık takipçisi ve hava durumu entegrasyonlu kişisel dashboard.',
    tags: ['React', 'Redux', 'Node.js'],
    emoji: '📊',
    bg: '#eff6ff',
    accent: '#3b82f6',
    github: 'https://github.com/',
    live: null,
    featured: false,
  },
  {
    title: 'E-Commerce Mobile',
    desc: 'Gerçek zamanlı stok takibi ve ödeme entegrasyonlu React Native alışveriş uygulaması.',
    tags: ['React Native', 'Expo', 'Stripe'],
    emoji: '📱',
    bg: '#fdf2f8',
    accent: '#ec4899',
    github: 'https://github.com/',
    live: null,
    featured: false,
  },
  {
    title: 'DevBlog',
    desc: 'MDX destekli, kod vurgulama ve full-text arama özellikli teknik blog platformu.',
    tags: ['Next.js', 'MDX', 'Vercel'],
    emoji: '✍️',
    bg: '#f0f9ff',
    accent: '#0ea5e9',
    github: 'https://github.com/',
    live: 'https://example.com',
    featured: false,
  },
];

const filters = ['Tümü', 'Next.js', 'React', 'Firebase', 'TypeScript'];

export default function Projects() {
  const [active, setActive] = useState('Tümü');

  const filtered = active === 'Tümü'
    ? projects
    : projects.filter(p => p.tags.some(t => t.includes(active)));

  return (
    <section id="projects" style={{ background: '#fff', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className="section-tag">— Geliştirdiklerim</span>
            <h2 className="heading-lg">
              Seçili{' '}
              <span className="pill pill-green">projelerim</span>
            </h2>
          </div>
          {/* Filter pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f}
                id={`filter-${f}`}
                onClick={() => setActive(f)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 50,
                  border: '1.5px solid',
                  borderColor: active === f ? '#111' : '#e5e7eb',
                  background: active === f ? '#111' : '#fff',
                  color: active === f ? '#fff' : '#374151',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
          {filtered.map(p => (
            <div
              key={p.title}
              className="card"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Card top banner */}
              <div style={{
                background: p.bg,
                padding: '36px 32px',
                fontSize: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span>{p.emoji}</span>
                {p.featured && (
                  <span style={{
                    background: p.accent, color: '#fff',
                    fontSize: '0.7rem', fontWeight: 800,
                    padding: '4px 10px', borderRadius: 50,
                  }}>FEATURED</span>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontWeight: 900, fontSize: '1.2rem', marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6, fontFamily: "'Inter',sans-serif", marginBottom: 16, flex: 1 }}>
                  {p.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      background: p.bg, color: p.accent,
                      border: `1px solid ${p.accent}33`,
                      padding: '3px 10px', borderRadius: 50,
                      fontSize: '0.78rem', fontWeight: 700,
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    style={{ color: '#6b7280', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                    🐙 Kaynak Kod
                  </a>
                  {p.live && (
                    <>
                      <span style={{ color: '#e5e7eb' }}>|</span>
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        style={{ color: p.accent, fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                        <ExternalLink size={13} /> Canlı Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ color: '#6b7280', marginBottom: 16, fontFamily: "'Inter',sans-serif" }}>
            Daha fazla proje için GitHub&apos;ı ziyaret edin
          </p>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn-outline">
            🐙 GitHub Profilim
          </a>
        </div>
      </div>
    </section>
  );
}
