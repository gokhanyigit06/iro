'use client';

export default function Divider() {
  return (
    <div style={{
      width: '100%',
      height: '200px',
      marginTop: '-80px',   /* hero ile overlap */
      marginBottom: '-80px', /* about ile overlap */
      position: 'relative',
      zIndex: 5,
      pointerEvents: 'none',
      background: 'transparent',
    }}>
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="fadeTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Çok hafif, geniş yayılan kırmızı eğri */}
        <path
          d="M0 140 Q360 80 720 120 Q1080 155 1440 90"
          stroke="rgba(231,28,57,0.18)"
          strokeWidth="1"
          fill="none"
          filter="url(#softGlow)"
        />
      </svg>
    </div>
  );
}
