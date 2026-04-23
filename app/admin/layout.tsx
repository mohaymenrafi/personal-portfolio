import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from 'next/link';
import LogoutButton from '@/components/auth/logout-button';

async function getSession() {
  const cookieStore = await cookies();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-session`,
    {
      headers: { cookie: cookieStore.toString() },
      cache: 'no-store',
    },
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session?.user) redirect('/login');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <header className="border-b border-border bg-card px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-mono text-primary font-semibold text-sm">
            rafi.
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/admin/posts"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Posts
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground hidden sm:block">
            {session.user.email}
          </span>
          <LogoutButton />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 md:p-8 max-w-5xl w-full mx-auto">
        {children}
      </main>
    </div>
  );
}
