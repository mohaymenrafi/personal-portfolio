import Link from 'next/link';
import { getAllPostsAdmin } from '@/lib/api';
import PostTable from '@/components/admin/post-table';
import { buttonVariants } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

export default async function AdminPostsPage() {
  const posts = await getAllPostsAdmin();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Posts</h1>
        <Link href="/admin/posts/new" className={buttonVariants()}>New post</Link>
      </div>
      <PostTable posts={posts} />
    </div>
  );
}
