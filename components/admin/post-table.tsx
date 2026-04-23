'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';
import type { Post } from '@/lib/types';
import { deletePostAction } from '@/actions/posts';
import { Button, buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });
}

export default function PostTable({ posts }: { posts: Post[] }) {
  const [pending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<number | null>(null);

  function handleDelete(post: Post) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    setDeletingId(post.id);
    startTransition(async () => {
      try {
        await deletePostAction(post.id);
        toast.success('Post deleted');
      } catch {
        toast.error('Failed to delete post');
      } finally {
        setDeletingId(null);
      }
    });
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        No posts yet.{' '}
        <Link href="/admin/posts/new" className="text-primary hover:underline">
          Create your first post →
        </Link>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-muted/40 text-muted-foreground">
          <tr>
            <th className="text-left px-4 py-3 font-medium">Title</th>
            <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Status</th>
            <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Date</th>
            <th className="text-right px-4 py-3 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-muted/20 transition-colors">
              <td className="px-4 py-3">
                <p className="font-medium line-clamp-1">{post.title}</p>
                <p className="text-xs text-muted-foreground font-mono">{post.slug}</p>
              </td>
              <td className="px-4 py-3 hidden sm:table-cell">
                <Badge variant={post.published ? 'default' : 'secondary'}>
                  {post.published ? 'Published' : 'Draft'}
                </Badge>
              </td>
              <td className="px-4 py-3 hidden md:table-cell text-muted-foreground">
                {formatDate(post.createdAt)}
              </td>
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/admin/posts/${post.id}/edit`}
                    className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
                  >
                    Edit
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(post)}
                    disabled={pending && deletingId === post.id}
                  >
                    {pending && deletingId === post.id ? '…' : 'Delete'}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
