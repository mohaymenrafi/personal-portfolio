import PostForm from '@/components/admin/post-form';

export default function NewPostPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-2xl font-semibold">New post</h1>
      <PostForm />
    </div>
  );
}
