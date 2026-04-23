import { notFound } from 'next/navigation';
import { getAllPostsAdmin } from '@/lib/api';
import PostForm from '@/components/admin/post-form';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const posts = await getAllPostsAdmin();
  const post = posts.find((p) => p.id === parseInt(id, 10));

  if (!post) notFound();

  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold">Edit post</h1>
      <PostForm initialData={post} />
    </div>
  );
}
