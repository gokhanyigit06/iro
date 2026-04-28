'use client';

import { useEffect, useState } from 'react';
import { getHeroData } from '@/lib/firebaseData';
import type { HeroData } from '@/types/portfolio';

export default function Hero() {
  const [data, setData] = useState<HeroData | null>(null);

  useEffect(() => {
    getHeroData().then(setData);
  }, []);

  const image = data?.image ?? '/3svg.svg';

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
      }}
    >
      <img
        src={image}
        alt="İrem Çağan Portfolio"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '60%',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 80%, #000 100%)',
        zIndex: 10,
        pointerEvents: 'none',
      }} />
    </section>
  );
}
