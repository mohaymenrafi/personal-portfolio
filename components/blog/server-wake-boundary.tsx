'use client';

import { useEffect, useState, useCallback } from 'react';

const RETRY_INTERVAL = 5000;
const MAX_RETRIES = 12; // ~1 minute

interface Props {
  children: React.ReactNode;
}

type State = 'checking' | 'waking' | 'ready' | 'failed';

export default function ServerWakeBoundary({ children }: Props) {
  const [state, setState] = useState<State>('checking');
  const [retries, setRetries] = useState(0);

  const ping = useCallback(async (): Promise<boolean> => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`, {
        cache: 'no-store',
      });
      return res.ok;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    async function check() {
      const alive = await ping();
      if (alive) {
        setState('ready');
        return;
      }

      setState('waking');
      setRetries((r) => {
        const next = r + 1;
        if (next >= MAX_RETRIES) {
          setState('failed');
          return next;
        }
        timer = setTimeout(check, RETRY_INTERVAL);
        return next;
      });
    }

    check();
    return () => clearTimeout(timer);
  }, [ping]);

  if (state === 'ready') return <>{children}</>;

  if (state === 'failed') {
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-3 text-center">
        <p className="text-muted-foreground">Server is unavailable. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <p className="text-sm text-muted-foreground font-mono">
        {state === 'checking' ? 'Connecting to server…' : 'Server is waking up, please wait…'}
      </p>
      {retries > 0 && (
        <p className="text-xs text-muted-foreground">Retrying… ({retries}/{MAX_RETRIES})</p>
      )}
    </div>
  );
}
