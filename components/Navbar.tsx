"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const links = [
  { label: "About", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav
        style={{ "--bg-opacity": bgOpacity } as React.CSSProperties}
        className="w-full max-w-[1280px] flex items-center justify-between px-6 py-3 rounded-[20px] transition-all"
        aria-label="Main navigation"
      >
        {/* bg layer that fades in on scroll */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 rounded-[20px] glass-strong pointer-events-none"
        />

        {/* Logo */}
        <a
          href="#hero"
          className="relative z-10 text-[#0040e0] dark:text-[#4e86b0] font-extrabold text-xl tracking-tight"
        >
          nesh.
        </a>

        {/* Desktop links */}
        <ul className="relative z-10 hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[14px] font-semibold tracking-wide text-[#191c1e] dark:text-[#dde6f0] hover:text-[#0040e0] dark:hover:text-[#4e86b0] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: dark mode toggle + resume */}
        <div className="relative z-10 hidden md:flex items-center gap-3">
          <DarkModeToggle />
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-full bg-[#0040e0] dark:bg-[#4e86b0] text-white text-[13px] font-semibold hover:bg-[#2e5bff] dark:hover:bg-[#5a96c4] transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="relative z-10 md:hidden flex items-center gap-2">
          <DarkModeToggle />
          <button
            className="text-[#191c1e] dark:text-[#dde6f0]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-6 right-6 glass-strong rounded-[20px] p-6 flex flex-col gap-4 z-40"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[15px] font-semibold text-[#191c1e] dark:text-[#dde6f0] hover:text-[#0040e0] dark:hover:text-[#4e86b0] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 rounded-full bg-[#0040e0] dark:bg-[#4e86b0] text-white text-[13px] font-semibold w-fit"
          >
            Resume
          </a>
        </motion.div>
      )}
    </header>
  );
}
