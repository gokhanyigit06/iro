'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false);
    setDone(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setDone(false), 5000);
  };

  return (
    <section id="contact" style={{ background: '#f9fafb', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">— Benimle Çalışın</span>
          <h2 className="heading-lg">
            Bir{' '}
            <span className="pill pill-orange">fikriniz mi</span>
            {' '}var?
          </h2>
          <p style={{ color: '#6b7280', marginTop: 16, fontFamily: "'Inter',sans-serif", maxWidth: 480, margin: '16px auto 0' }}>
            Proje fikrinizi paylaşın, birlikte hayata geçirelim!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 40, alignItems: 'start' }}>

          {/* Left info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: Mail, label: 'E-posta', value: 'irem@example.com', href: 'mailto:irem@example.com', color: '#8b5cf6' },
              { icon: Phone, label: 'Telefon', value: '+90 555 000 00 00', href: 'tel:+905550000000', color: '#22c55e' },
              { icon: MapPin, label: 'Konum', value: 'İstanbul, Türkiye', href: null, color: '#f97316' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <div key={label} className="card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={20} color={color} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280', fontFamily: "'Inter',sans-serif", marginBottom: 2 }}>{label}</div>
                  {href
                    ? <a href={href} style={{ fontWeight: 700, color: '#111', textDecoration: 'none', fontSize: '0.95rem' }}>{value}</a>
                    : <span style={{ fontWeight: 700, color: '#111', fontSize: '0.95rem' }}>{value}</span>}
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div className="card" style={{ padding: '20px 24px', border: '1.5px solid #22c55e33', background: '#f0fdf4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22c55e', flexShrink: 0, animation: 'pulse 2s infinite' }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#111' }}>Müsait</div>
                  <div style={{ fontSize: '0.82rem', color: '#6b7280', fontFamily: "'Inter',sans-serif" }}>Freelance tekliflerine açığım</div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              {[
                { label: 'GitHub', emoji: '🐙', href: 'https://github.com/' },
                { label: 'LinkedIn', emoji: '💼', href: 'https://linkedin.com/' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="card"
                  style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: '#111', fontWeight: 700, fontSize: '0.85rem' }}>
                  {s.emoji} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="card" style={{ padding: 36 }}>
            {done ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <CheckCircle size={56} color="#22c55e" style={{ margin: '0 auto 16px' }} />
                <h3 style={{ fontWeight: 900, fontSize: '1.5rem', marginBottom: 8 }}>Mesaj Alındı!</h3>
                <p style={{ color: '#6b7280', fontFamily: "'Inter',sans-serif" }}>En kısa sürede geri döneceğim 🚀</p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label htmlFor="c-name" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6 }}>Adınız *</label>
                    <input id="c-name" type="text" required className="form-input"
                      placeholder="İrem Çağan"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="c-email" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6 }}>E-posta *</label>
                    <input id="c-email" type="email" required className="form-input"
                      placeholder="irem@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label htmlFor="c-subject" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6 }}>Konu</label>
                  <input id="c-subject" type="text" className="form-input"
                    placeholder="Proje iş birliği"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div>
                  <label htmlFor="c-msg" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#374151', display: 'block', marginBottom: 6 }}>Mesaj *</label>
                  <textarea id="c-msg" required className="form-input" rows={5}
                    placeholder="Merhaba İrem, seninle çalışmak istiyorum..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ resize: 'none' }} />
                </div>
                <button id="contact-submit" type="submit" disabled={sending} className="btn-dark"
                  style={{ justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
                  {sending ? (
                    <><div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} /> Gönderiliyor...</>
                  ) : (
                    <><Send size={16} /> Mesaj Gönder</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>
    </section>
  );
}
