'use client';

import { useEffect, useRef, useState } from 'react';
import { getSkills, getTechPills } from '@/lib/firebaseData';
import type { Skill, TechPill } from '@/types/portfolio';

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [techPills, setTechPills] = useState<TechPill[]>([]);
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    getSkills().then(setSkills);
    getTechPills().then(setTechPills);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const pills = techPills.length > 0 ? techPills : [];

  return (
    <section id="skills" ref={ref} style={{ background: '#f9fafb', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">— My Expertise</span>
          <h2 className="heading-lg">
            Technologies{' '}
            <span className="pill pill-orange">I use</span>
          </h2>
          <p style={{ color: '#6b7280', marginTop: 16, fontFamily: "'Inter',sans-serif", maxWidth: 500, margin: '16px auto 0' }}>
            I focus on choosing the right tool for each project to achieve the best result.
          </p>
        </div>

        {/* Skills bars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: 16, marginBottom: 60 }}>
          {skills.map(skill => (
            <div key={skill.id ?? skill.name} className="card" style={{ padding: '20px 24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 20 }}>{skill.emoji}</span>
                  <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{skill.name}</span>
                </div>
                <span style={{ fontWeight: 900, fontSize: '1rem', color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{
                    width: animate ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div style={{ overflow: 'hidden' }}>
          <div style={{ marginBottom: 12, textAlign: 'center' }}>
            <span className="section-tag">Stack</span>
          </div>
          <div className="marquee-track">
            <div className="marquee-content">
              {[...pills, ...pills].map((tech, i) => (
                <span
                  key={i}
                  className="skill-tag"
                  style={{ margin: '0 8px', whiteSpace: 'nowrap' }}
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
