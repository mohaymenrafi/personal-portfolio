import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/types';
import TagBadge from './tag-badge';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors bg-card"
    >
      {post.coverImage && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TagBadge key={tag.id} tag={tag} />
          ))}
        </div>

        <h2 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
            {post.excerpt}
          </p>
        )}

        <p className="text-xs text-muted-foreground font-mono mt-auto">
          {formatDate(post.createdAt)}
        </p>
      </div>
    </Link>
  );
}
