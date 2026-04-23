import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getPost } from '@/lib/api';
import TagBadge from '@/components/blog/tag-badge';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPost(slug);
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
    return { title: 'Post not found' };
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPost(slug);
  } catch {
    notFound();
  }

  return (
    <article className="min-h-screen py-24 max-w-3xl mx-auto">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <TagBadge key={tag.id} tag={tag} />
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-3">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-sm text-muted-foreground font-mono mb-8">
        {formatDate(post.createdAt)}
      </p>

      {/* Cover image */}
      {post.coverImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-10">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content — TipTap outputs HTML */}
      <div
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
