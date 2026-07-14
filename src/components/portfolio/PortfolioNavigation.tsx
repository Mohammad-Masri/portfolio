"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
] as const;

type PortfolioNavigationProps = {
  email: string;
};

export default function PortfolioNavigation({ email }: PortfolioNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry?.target.id) {
          setActiveSection(`#${activeEntry.target.id}`);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.05, 0.2, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="nav-shell mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-4">
        <a href="#top" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="brand-mark">MM</span>
          <span className="hidden text-sm font-semibold tracking-[-0.01em] text-white sm:block">
            Mohammed Masri
          </span>
        </a>

        <nav
          className="hidden items-center rounded-full border border-white/[0.06] bg-black/20 p-1 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`mailto:${email}`} className="nav-cta hidden lg:inline-flex">
            Let&apos;s talk <Icon name="arrowUpRight" className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Icon name={menuOpen ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="nav-shell mobile-nav-shell mobile-nav-enter mx-auto mt-2 max-w-7xl overflow-hidden p-2 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 p-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-4 py-3 font-bold text-emerald-950"
            >
              Let&apos;s talk <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
