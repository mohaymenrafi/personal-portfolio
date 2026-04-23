import { cookies } from 'next/headers';
import type { PaginatedPosts, Post, Tag } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  // Forward the session cookie on server-side calls
  let cookieHeader: string | undefined;
  try {
    const store = await cookies();
    cookieHeader = store.toString();
  } catch {
    // cookies() throws outside of a Server Component / Route Handler — fine for client calls
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(cookieHeader ? { Cookie: cookieHeader } : {}),
      ...options.headers,
    },
    credentials: 'include',
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message ?? `Request failed: ${res.status}`);
  }

  // 204 No Content
  if (res.status === 204) return undefined as T;

  return res.json() as Promise<T>;
}

// ─── Posts ────────────────────────────────────────────────────────────────────

export function getPosts(page = 1, limit = 6, search?: string): Promise<PaginatedPosts> {
  const params = new URLSearchParams({ page: String(page), limit: String(limit) });
  if (search) params.set('search', search);
  return apiFetch(`/api/posts?${params}`, { next: { revalidate: 60 } });
}

export function getPost(slug: string): Promise<Post> {
  return apiFetch(`/api/posts/${slug}`, { next: { revalidate: 60 } });
}

export function getAllPostsAdmin(): Promise<Post[]> {
  return apiFetch('/api/posts/admin/all', { cache: 'no-store' });
}

// ─── Tags ─────────────────────────────────────────────────────────────────────

export function getTags(): Promise<Tag[]> {
  return apiFetch('/api/tags', { next: { revalidate: 300 } });
}
