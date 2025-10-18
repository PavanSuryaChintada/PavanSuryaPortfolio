import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import React from "react";

type FooterProps = {
  showNowPlaying?: boolean;
};

const links = {
  portfolio: [
    { label: "About Me", href: "#" },
    { label: "Experience", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Resume", href: "#" },
  ],
  resources: [
    { label: "Blog / Articles", href: "#" },
    { label: "Open Source Contributions", href: "#" },
    { label: "GitHub Repositories", href: "#" },
    { label: "Tutorials / Guides", href: "#" },
    { label: "Code Snippets", href: "#" },
  ],
  connect: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Email", href: "#" },
    { label: "Newsletter / Subscribe", href: "#" },
  ],
  extras: [
    { label: "Now Playing 🎵 (Spotify API widget placeholder)", href: "#" },
    { label: "Side Projects / Experiments", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Design Inspirations", href: "#" },
    { label: "Support / Buy Me a Coffee ☕", href: "#" },
  ],
};

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "License", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Changelog", href: "#" },
];

export default function Footer({ showNowPlaying = false }: FooterProps) {
  return (
    <footer className="bg-[#121212] text-[#b3b3b3]">
      {showNowPlaying && (
        <div className="border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm">Now Playing — placeholder</div>
              <div className="h-2 w-2 rounded-full bg-[#1DB954] animate-pulse" aria-hidden="true" />
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-1 text-center sm:text-left">
            <FooterColumn title="Portfolio" items={links.portfolio} />
            <FooterColumn title="Resources" items={links.resources} />
            <FooterColumn title="Connect" items={links.connect} />
            <FooterColumn title="Extras" items={links.extras} />
          </div>

          <div className="flex w-full lg:w-auto items-center lg:items-start gap-4 justify-center lg:justify-end">
            <Socials />
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
            <ul className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
              {legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-center md:text-right text-[11px] md:text-xs text-[#b3b3b3]">
              © 2025 Your Name – Built with ❤️ using React + Spotify API · v2.3.0 – Updated October 2025
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
      <h3 className="mb-3 text-white text-sm tracking-wide">{title}</h3>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
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
    "h-5 w-5 text-[#b3b3b3] hover:text-[#1DB954] transition-colors duration-200";
  return (
    <div className="flex items-center gap-4">
      <a href="#" aria-label="GitHub" className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors">
        <Github className={iconClass} />
      </a>
      <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors">
        <Linkedin className={iconClass} />
      </a>
      <a href="#" aria-label="Twitter / X" className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors">
        <Twitter className={iconClass} />
      </a>
      <a href="#" aria-label="Email" className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors">
        <Mail className={iconClass} />
      </a>
    </div>
  );
}
