import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PaginationProps {
  page: number;
  totalPages: number;
  basePath?: string;
}

export default function Pagination({ page, totalPages, basePath = '/blog' }: PaginationProps) {
  if (totalPages <= 1) return null;

  const btnBase = cn(buttonVariants({ variant: 'outline', size: 'sm' }));
  const btnDisabled = cn(btnBase, 'pointer-events-none opacity-50');

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {page > 1 ? (
        <Link href={`${basePath}?page=${page - 1}`} className={btnBase}>
          ← Prev
        </Link>
      ) : (
        <span className={btnDisabled}>← Prev</span>
      )}

      <span className="text-sm text-muted-foreground font-mono px-3">
        {page} / {totalPages}
      </span>

      {page < totalPages ? (
        <Link href={`${basePath}?page=${page + 1}`} className={btnBase}>
          Next →
        </Link>
      ) : (
        <span className={btnDisabled}>Next →</span>
      )}
    </div>
  );
}
