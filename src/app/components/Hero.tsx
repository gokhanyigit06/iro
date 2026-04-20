'use client';

export default function Hero() {
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
      {/* 3svg.svg — birebir, üstüne hiçbir şey yok */}
      <img
        src="/3svg.svg"
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

      {/* Alt fade — About'a smooth geçiş */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '35%',
        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 55%, #000 100%)',
        zIndex: 10,
        pointerEvents: 'none',
      }} />
    </section>
  );
}
