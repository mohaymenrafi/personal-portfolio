import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let title = slug.replace(/-/g, ' ');
  let excerpt = '';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`,
      { next: { revalidate: 3600 } },
    );
    if (res.ok) {
      const post = await res.json();
      title = post.title;
      excerpt = post.excerpt ?? '';
    }
  } catch {
    // use slug as fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a192f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
        }}
      >
        <div style={{ color: '#64ffda', fontSize: 20, fontFamily: 'monospace' }}>
          mhabdullah.vercel.app/blog
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              color: '#ccd6f6',
              fontSize: title.length > 50 ? 48 : 60,
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            {title}
          </div>
          {excerpt && (
            <div style={{ color: '#8892b0', fontSize: 24, lineHeight: 1.5 }}>
              {excerpt.length > 120 ? excerpt.slice(0, 120) + '…' : excerpt}
            </div>
          )}
        </div>

        <div style={{ color: '#64ffda', fontSize: 18, fontFamily: 'monospace' }}>
          Abdullah Al Mohaymen Rafi
        </div>
      </div>
    ),
    { ...size },
  );
}
