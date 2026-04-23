'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

export default function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') ?? '');

  const push = useCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (term) {
        params.set('search', term);
      } else {
        params.delete('search');
      }
      params.delete('page');
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, searchParams],
  );

  useEffect(() => {
    const timer = setTimeout(() => push(value), 400);
    return () => clearTimeout(timer);
  }, [value, push]);

  return (
    <Input
      type="search"
      placeholder="Search posts…"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="max-w-sm"
    />
  );
}
