import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const socials = [
  {
    icon: FiGithub,
    href: "https://github.com/mohaymenrafi",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/mohaymenabdullah/",
    label: "LinkedIn",
  },
  {
    icon: FiTwitter,
    href: "https://x.com/mohaymen_rafi",
    label: "Twitter",
  },
];

export default function LeftSidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 left-8 xl:left-12 flex-col items-center gap-5 z-40">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-slate hover:text-teal hover:-translate-y-1 transition-all duration-200 text-xl"
        >
          <Icon />
        </a>
      ))}
      <div className="w-px h-24 bg-slate" />
    </div>
  );
}
