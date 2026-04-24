'use client';

import { useEffect } from 'react';

export default function ServerPing() {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`, { cache: 'no-store' }).catch(() => {
      // server is sleeping — ping sent, nothing to do
    });
  }, []);

  return null;
}
