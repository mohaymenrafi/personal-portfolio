import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import LeftSidebar from '@/components/layout/left-sidebar';
import RightSidebar from '@/components/layout/right-sidebar';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <main className="flex-1 px-6 md:px-12 lg:px-24 xl:px-36">{children}</main>
      <Footer />
    </div>
  );
}
