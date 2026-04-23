import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getPosts } from '@/lib/api';
import PostCard from '@/components/blog/post-card';
import Pagination from '@/components/blog/pagination';
import SearchInput from '@/components/blog/search-input';

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

  const { data: posts, totalPages } = await getPosts(page, 6, search);

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

      {posts.length === 0 ? (
        <p className="text-muted-foreground text-center py-24">
          {search ? `No posts found for "${search}".` : 'No posts published yet. Check back soon.'}
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} basePath="/blog" search={search} />
        </>
      )}
    </section>
  );
}
