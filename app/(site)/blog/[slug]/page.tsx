import type { Metadata } from 'next';
import Link from 'next/link';
import PostContent from '@/components/blog/post-content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`,
      { next: { revalidate: 60 } },
    );
    if (!res.ok) return { title: 'Blog — Rafi' };
    const post = await res.json();
    return {
      title: `${post.title} — Rafi`,
      description: post.excerpt ?? undefined,
      openGraph: {
        title: post.title,
        description: post.excerpt ?? undefined,
        images: post.coverImage ? [post.coverImage] : [],
      },
    };
  } catch {
    return { title: 'Blog — Rafi' };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <article className="py-24 max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
      >
        ← Back to blog
      </Link>

      <PostContent slug={slug} />
    </article>
  );
}
