'use client';

import { useEffect } from 'react';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function useParallaxScroll() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.parallax-section')
    );
    if (els.length === 0) return;

    // Her element için mevcut değerleri tut
    const current = els.map(() => ({ scale: 0.97, opacity: 0.5 }));

    let rafId: number;

    const animate = () => {
      const vh = window.innerHeight;

      els.forEach((el, i) => {
        const rect = el.getBoundingClientRect();

        // Sadece aşağıdan girerken efekt — yukarı geçince tam görünür
        const raw = (vh - rect.top) / (vh * 0.8);
        const progress = Math.min(1, Math.max(0, raw));

        const targetScale   = 0.97 + progress * 0.03;  // 0.97 → 1.00 (sadece %3 fark)
        const targetOpacity = 0.5  + progress * 0.5;   // 0.5  → 1.00

        current[i].scale   = lerp(current[i].scale,   targetScale,   0.08);
        current[i].opacity = lerp(current[i].opacity, targetOpacity, 0.08);

        // translateY YOK — sadece scale + opacity
        el.style.transform = `scale(${current[i].scale.toFixed(5)})`;
        el.style.opacity   = current[i].opacity.toFixed(4);
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);
}
