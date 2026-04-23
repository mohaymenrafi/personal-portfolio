'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { createPost, updatePost } from '@/lib/api-mutations';
import type { Post } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import RichTextEditor from './rich-text-editor';
import CloudinaryUpload from './cloudinary-upload';

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens only'),
  excerpt: z.string().optional(),
  coverImage: z.string().optional(),
  tags: z.string().optional(),
  content: z.string().min(1, 'Content is required'),
  published: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

function toSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

interface PostFormProps {
  initialData?: Post;
}

export default function PostForm({ initialData }: PostFormProps) {
  const router = useRouter();
  const isEdit = !!initialData;

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: initialData?.title ?? '',
      slug: initialData?.slug ?? '',
      excerpt: initialData?.excerpt ?? '',
      coverImage: initialData?.coverImage ?? '',
      tags: initialData?.tags.map((t) => t.name).join(', ') ?? '',
      content: initialData?.content ?? '',
      published: initialData?.published ?? false,
    },
  });

  async function onSubmit(values: FormValues) {
    const tags = values.tags
      ? values.tags.split(',').map((t) => t.trim()).filter(Boolean)
      : [];

    const payload = {
      title: values.title,
      slug: values.slug,
      excerpt: values.excerpt || undefined,
      coverImage: values.coverImage || undefined,
      content: values.content,
      published: values.published,
      tags,
    };

    try {
      if (isEdit) {
        await updatePost(initialData!.id, payload);
        toast.success('Post updated');
      } else {
        await createPost(payload);
        toast.success('Post created');
      }
      router.push('/admin/posts');
      router.refresh();
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="My awesome post"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    if (!isEdit) {
                      form.setValue('slug', toSlug(e.target.value), { shouldValidate: true });
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Slug */}
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="my-awesome-post" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Excerpt */}
        <FormField
          control={form.control}
          name="excerpt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excerpt</FormLabel>
              <FormControl>
                <Textarea placeholder="Short summary shown on the blog listing…" rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Cover image */}
        <Controller
          control={form.control}
          name="coverImage"
          render={({ field }) => (
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Cover image</label>
              <CloudinaryUpload value={field.value ?? ''} onChange={field.onChange} />
            </div>
          )}
        />

        {/* Tags */}
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input placeholder="react, typescript, nextjs" {...field} />
              </FormControl>
              <FormMessage />
              <p className="text-xs text-muted-foreground">Comma-separated list of tags</p>
            </FormItem>
          )}
        />

        {/* Content */}
        <Controller
          control={form.control}
          name="content"
          render={({ field, fieldState }) => (
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Content</label>
              <RichTextEditor value={field.value} onChange={field.onChange} />
              {fieldState.error && (
                <p className="text-sm text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Published toggle */}
        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3">
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  className="w-4 h-4 accent-primary"
                />
              </FormControl>
              <FormLabel className="!mt-0">Publish immediately</FormLabel>
            </FormItem>
          )}
        />

        <div className="flex gap-3">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Saving…' : isEdit ? 'Save changes' : 'Create post'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/posts')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}
