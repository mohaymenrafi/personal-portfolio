import { cookies } from 'next/headers';
import type { PaginatedPosts, Post, Tag } from './types';

export interface PostPayload {
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  content?: string;
  published?: boolean;
  tags?: string[];
}

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

export function getPosts(page = 1, limit = 6): Promise<PaginatedPosts> {
  return apiFetch(`/api/posts?page=${page}&limit=${limit}`, {
    next: { revalidate: 60 },
  });
}

export function getPost(slug: string): Promise<Post> {
  return apiFetch(`/api/posts/${slug}`, { next: { revalidate: 60 } });
}

export function getAllPostsAdmin(): Promise<Post[]> {
  return apiFetch('/api/posts/admin/all', { cache: 'no-store' });
}

export function createPost(data: PostPayload): Promise<Post> {
  return apiFetch('/api/posts', { method: 'POST', body: JSON.stringify(data) });
}

export function updatePost(id: number, data: PostPayload): Promise<Post> {
  return apiFetch(`/api/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deletePost(id: number): Promise<void> {
  return apiFetch(`/api/posts/${id}`, { method: 'DELETE' });
}

// ─── Tags ─────────────────────────────────────────────────────────────────────

export function getTags(): Promise<Tag[]> {
  return apiFetch('/api/tags', { next: { revalidate: 300 } });
}
