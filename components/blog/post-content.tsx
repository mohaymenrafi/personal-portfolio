'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TagBadge from './tag-badge';
import type { Post } from '@/lib/types';

const RETRY_INTERVAL = 5000;
const MAX_RETRIES = 12;

interface Adjacent {
  prev: { title: string; slug: string } | null;
  next: { title: string; slug: string } | null;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default function PostContent({ slug }: { slug: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [adjacent, setAdjacent] = useState<Adjacent>({ prev: null, next: null });
  const [state, setState] = useState<'loading' | 'waking' | 'ready' | 'failed'>('loading');
  const [retries, setRetries] = useState(0);

  const fetchData = useCallback(async () => {
    const base = process.env.NEXT_PUBLIC_API_URL;
    const [postRes, adjRes] = await Promise.all([
      fetch(`${base}/api/posts/${slug}`, { cache: 'no-store' }),
      fetch(`${base}/api/posts/${slug}/adjacent`, { cache: 'no-store' }),
    ]);
    if (!postRes.ok) throw new Error('failed');
    const [postData, adjData] = await Promise.all([postRes.json(), adjRes.json()]);
    return { post: postData as Post, adjacent: adjData as Adjacent };
  }, [slug]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let attempt = 0;

    async function run() {
      try {
        const result = await fetchData();
        setPost(result.post);
        setAdjacent(result.adjacent);
        setState('ready');
      } catch {
        attempt++;
        if (attempt === 1) setState('waking');
        if (attempt >= MAX_RETRIES) { setState('failed'); return; }
        setRetries(attempt);
        timer = setTimeout(run, RETRY_INTERVAL);
      }
    }

    run();
    return () => clearTimeout(timer);
  }, [fetchData]);

  if (state === 'failed') {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-3 text-center">
        <p className="text-muted-foreground">Server is unavailable. Please try again later.</p>
      </div>
    );
  }

  if (state !== 'ready' || !post) {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground font-mono">
          {state === 'loading' ? 'Loading post…' : 'Server is waking up, please wait…'}
        </p>
        {retries > 0 && (
          <p className="text-xs text-muted-foreground">Retrying… ({retries}/{MAX_RETRIES})</p>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => <TagBadge key={tag.id} tag={tag} />)}
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-3">
        {post.title}
      </h1>

      <p className="text-sm text-muted-foreground font-mono mb-8">
        {formatDate(post.createdAt)}
      </p>

      {post.coverImage && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-10">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
        </div>
      )}

      <div
        className="prose prose-slate dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {(adjacent.prev || adjacent.next) && (
        <nav className="flex items-start justify-between gap-4 mt-16 pt-8 border-t border-border">
          {adjacent.prev ? (
            <Link href={`/blog/${adjacent.prev.slug}`} className="group flex flex-col gap-1 max-w-[45%]">
              <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">← Previous</span>
              <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{adjacent.prev.title}</span>
            </Link>
          ) : <span />}

          {adjacent.next ? (
            <Link href={`/blog/${adjacent.next.slug}`} className="group flex flex-col gap-1 items-end text-right max-w-[45%]">
              <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">Next →</span>
              <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">{adjacent.next.title}</span>
            </Link>
          ) : <span />}
        </nav>
      )}
    </>
  );
}
