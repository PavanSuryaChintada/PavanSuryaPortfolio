import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

type FooterProps = {
  showNowPlaying?: boolean;
};

// Updated, more professional link structure
const footerLinks = {
  navigation: [
    { label: "About Me", href: "#" },
    { label: "Experience", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Blog / Articles", href: "#" },
    { label: "Open Source", href: "#" },
    { label: "Tutorials / Guides", href: "#" },
    { label: "Code Snippets", href: "#" },
    { label: "Tech Stack", href: "#" },
  ],
  connect: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Email", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
  extras: [
    { label: "Side Projects", href: "#" },
    { label: "Experiments", href: "#" },
    { label: "Resume", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Design Inspirations", href: "#" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "License", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function Footer({ showNowPlaying = false }: FooterProps) {
  return (
    <footer className="mt-auto bg-[#121212] text-[#b3b3b3]">
      {showNowPlaying && (
        <div className="border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm">Now Playing — placeholder</div>
              <div className="flex items-center gap-2 text-xs text-[#b3b3b3]">
                <div
                  className="h-2 w-2 animate-pulse rounded-full bg-[#1DB954]"
                  aria-hidden="true"
                />
                <span className="hidden sm:inline">Streaming from Spotify</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="grid flex-1 grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
            {/* Updated FooterColumn components to use new keys */}
            <FooterColumn title="Navigation" items={footerLinks.navigation} />
            <FooterColumn title="Resources" items={footerLinks.resources} />
            <FooterColumn title="Connect" items={footerLinks.connect} />
            <FooterColumn title="Extras" items={footerLinks.extras} />
          </div>

          <div className="flex w-full items-center justify-center gap-4 sm:gap-5 lg:w-auto lg:items-start lg:justify-end">
            <Socials />
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-wide text-[#b3b3b3] md:justify-start">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-center text-[11px] text-[#b3b3b3] md:text-right">
              © 2025 Your Name – Built with ❤️ using React + Spotify API
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="transition-colors duration-200 hover:text-white hover:underline decoration-[#1DB954] underline-offset-4"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Socials() {
  const iconClass =
    "h-5 w-5 text-[#b3b3b3] transition-colors duration-200 group-hover:text-[#1DB954]";
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <a
        href="#"
        aria-label="GitHub"
        className="group rounded-full bg-neutral-900 p-2 transition-colors duration-200 hover:bg-neutral-800"
      >
        <Github className={iconClass} />
      </a>
      <a
        href="#"
        aria-label="LinkedIn"
        className="group rounded-full bg-neutral-900 p-2 transition-colors duration-200 hover:bg-neutral-800"
      >
        <Linkedin className={iconClass} />
      </a>
      <a
        href="#"
        aria-label="Twitter / X"
        className="group rounded-full bg-neutral-900 p-2 transition-colors duration-200 hover:bg-neutral-800"
      >
        <Twitter className={iconClass} />
      </a>
      <a
        href="#"
        aria-label="Email"
        className="group rounded-full bg-neutral-900 p-2 transition-colors duration-200 hover:bg-neutral-800"
      >
        <Mail className={iconClass} />
      </a>
    </div>
  );
}