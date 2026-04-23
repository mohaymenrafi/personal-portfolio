const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

async function mutate<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
    credentials: 'include',
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message ?? `Request failed: ${res.status}`);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export interface PostPayload {
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  content?: string;
  published?: boolean;
  tags?: string[];
}

import type { Post } from './types';

export function createPost(data: PostPayload): Promise<Post> {
  return mutate('/api/posts', { method: 'POST', body: JSON.stringify(data) });
}

export function updatePost(id: number, data: PostPayload): Promise<Post> {
  return mutate(`/api/posts/${id}`, { method: 'PATCH', body: JSON.stringify(data) });
}

export function deletePost(id: number): Promise<void> {
  return mutate(`/api/posts/${id}`, { method: 'DELETE' });
}
