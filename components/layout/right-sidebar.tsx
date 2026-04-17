export default function RightSidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 right-8 xl:right-12 flex-col items-center gap-5 z-40">
      <a
        href="mailto:mohaymen.rafi@gmail.com"
        className="text-sideways text-slate hover:text-teal hover:-translate-y-1 transition-all duration-200 font-mono text-xs tracking-widest"
      >
        mohaymen.rafi@gmail.com
      </a>
      <div className="w-px h-24 bg-slate" />
    </div>
  );
}
