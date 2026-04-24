import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Abdullah Al Mohaymen Rafi — Frontend Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a192f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div style={{ color: '#64ffda', fontSize: 22, fontFamily: 'monospace', marginBottom: 24 }}>
          portfolio.
        </div>
        <div
          style={{
            color: '#ccd6f6',
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Abdullah Al Mohaymen Rafi
        </div>
        <div style={{ color: '#8892b0', fontSize: 28 }}>
          Frontend Engineer — React · Next.js · TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}
