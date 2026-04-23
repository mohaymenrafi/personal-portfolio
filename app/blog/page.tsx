import type { Metadata } from 'next';
import { getPosts } from '@/lib/api';
import PostCard from '@/components/blog/post-card';
import Pagination from '@/components/blog/pagination';

export const metadata: Metadata = {
  title: 'Blog — Abdullah Al Mohaymen Rafi',
  description: 'Thoughts on frontend engineering, React, TypeScript, and building products.',
};

interface Props {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam ?? '1', 10));

  const { data: posts, totalPages } = await getPosts(page, 6);

  return (
    <section className="min-h-screen py-24 max-w-5xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-primary text-sm mb-2">04. Blog</p>
        <h1 className="text-4xl font-semibold text-foreground">Writing</h1>
        <p className="mt-3 text-muted-foreground max-w-lg">
          Thoughts on frontend engineering, React, TypeScript, and building products.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground text-center py-24">No posts published yet. Check back soon.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination page={page} totalPages={totalPages} />
        </>
      )}
    </section>
  );
}
