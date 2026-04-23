'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { deletePost } from '@/lib/api-mutations';

export async function deletePostAction(id: number) {
  const cookieStore = await cookies();
  // Override credentials with the server-side cookie
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`,
    {
      method: 'DELETE',
      headers: { cookie: cookieStore.toString() },
    },
  );

  revalidatePath('/admin/posts');
  revalidatePath('/blog');
}
