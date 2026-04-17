import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-8 mt-16">
      {/* Mobile social links */}
      <div className="flex lg:hidden items-center gap-6 text-xl">
        <a
          href="https://github.com/mohaymenrafi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate hover:text-teal transition-colors"
        >
          <FiGithub />
        </a>
        <a
          href="https://linkedin.com/in/mohaymenrafi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate hover:text-teal transition-colors"
        >
          <FiLinkedin />
        </a>
      </div>

      <p className="font-[family-name:var(--font-sf-mono)] text-xs text-slate text-center">
        Designed &amp; Built by{" "}
        <a
          href="https://github.com/mohaymenrafi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal hover:underline"
        >
          Abdullah Al Mohaymen Rafi
        </a>
      </p>
    </footer>
  );
}
