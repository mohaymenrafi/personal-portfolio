'use client';

import { useEffect, useState, useCallback } from 'react';
import PostCard from './post-card';
import Pagination from './pagination';
import ServerWakeBoundary from './server-wake-boundary';
import type { PaginatedPosts } from '@/lib/types';

const RETRY_INTERVAL = 5000;
const MAX_RETRIES = 12;

interface Props {
  page: number;
  search?: string;
}

export default function PostsList({ page, search }: Props) {
  const [data, setData] = useState<PaginatedPosts | null>(null);
  const [state, setState] = useState<'loading' | 'waking' | 'ready' | 'failed'>('loading');
  const [retries, setRetries] = useState(0);

  const fetchPosts = useCallback(async () => {
    const params = new URLSearchParams({ page: String(page), limit: '6' });
    if (search) params.set('search', search);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${params}`,
      { cache: 'no-store' },
    );
    if (!res.ok) throw new Error('failed');
    return res.json() as Promise<PaginatedPosts>;
  }, [page, search]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let attempt = 0;

    async function run() {
      try {
        const result = await fetchPosts();
        setData(result);
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
  }, [fetchPosts]);

  if (state === 'failed') {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-3 text-center">
        <p className="text-muted-foreground">Server is unavailable. Please try again later.</p>
      </div>
    );
  }

  if (state !== 'ready' || !data) {
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
          {state === 'loading' ? 'Loading posts…' : 'Server is waking up, please wait…'}
        </p>
        {retries > 0 && (
          <p className="text-xs text-muted-foreground">Retrying… ({retries}/{MAX_RETRIES})</p>
        )}
      </div>
    );
  }

  const { data: posts, totalPages } = data;

  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-24">
        {search ? `No posts found for "${search}".` : 'No posts published yet. Check back soon.'}
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} basePath="/blog" search={search} />
    </>
  );
}
