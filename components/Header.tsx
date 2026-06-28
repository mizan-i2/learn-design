"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/navigation";

const THEME_KEY = "psdbim-theme";

function SunIcon() {
  return (
    <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 3a1 1 0 0 1-1-1v-1.09a1 1 0 1 1 2 0V19a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1 0-1.41l.77-.77a1 1 0 1 1 1.41 1.41l-.77.77a1 1 0 0 1-1.41 0ZM18.6 5.64a1 1 0 0 1 1.41 0l.77.77a1 1 0 0 1-1.41 1.41l-.77-.77a1 1 0 0 1 0-1.41ZM1 13a1 1 0 1 1 0-2h1.09a1 1 0 1 1 0 2H1Zm20.91 0a1 1 0 1 1 0-2H23a1 1 0 1 1 0 2h-1.09ZM4.22 18.36a1 1 0 0 1 1.41 0l.77.77a1 1 0 0 1-1.41 1.41l-.77-.77a1 1 0 0 1 0-1.41Zm14.95 0a1 1 0 0 1 0 1.41l-.77.77a1 1 0 1 1-1.41-1.41l.77-.77a1 1 0 0 1 1.41 0Z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 6.5 6.5 0 1 0 21 14.5Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const preferred = saved === "light" || saved === "dark" ? saved : "dark";
    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(THEME_KEY, next);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="top">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image
            src="/images/psdbim-logo.png"
            alt="Precision Steel Detailing Services"
            className="logo-img"
            width={220}
            height={48}
            priority
          />
        </Link>

        <div className="header-tools">
          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={toggleTheme}
          >
            <SunIcon />
            <MoonIcon />
          </button>
          <button
            className={`nav-toggle${navOpen ? " active" : ""}`}
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`main-nav${navOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-sm">
            Schedule A Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
