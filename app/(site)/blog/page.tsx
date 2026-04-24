import { Suspense } from 'react';
import type { Metadata } from 'next';
import SearchInput from '@/components/blog/search-input';
import PostsList from '@/components/blog/posts-list';

export const metadata: Metadata = {
  title: 'Blog — Abdullah Al Mohaymen Rafi',
  description: 'Thoughts on frontend engineering, React, TypeScript, and building products.',
};

interface Props {
  searchParams: Promise<{ page?: string; search?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page: pageParam, search } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? '1', 10));

  return (
    <section className="py-24 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-primary text-sm mb-2">04. Blog</p>
        <h1 className="text-4xl font-semibold text-foreground">Writing</h1>
        <p className="mt-3 text-muted-foreground max-w-lg">
          Thoughts on frontend engineering, React, TypeScript, and building products.
        </p>
      </div>

      <div className="mb-8">
        <Suspense>
          <SearchInput />
        </Suspense>
      </div>

      <PostsList page={page} search={search} />
    </section>
  );
}
