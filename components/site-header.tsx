"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type SiteHeaderProps = {
  isHome?: boolean;
  subtitle?: string;
  activePath?: "/" | "/software";
};

export default function SiteHeader({
  isHome = false,
  subtitle = "WIND SERVICES",
  activePath = "/",
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileOpen(false);
    if (isHome && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const servicesHref = isHome ? "#services" : "/#services";
  const contactHref = isHome ? "#contact" : "/#contact";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Go to homepage"
        >
          <Image
            src="/drone-logo.svg"
            alt="Bamboos Wind Services"
            width={34}
            height={34}
            className="h-8 w-8"
          />
          <div>
            <p className="text-[1.7rem] font-semibold leading-none tracking-[0.22em]">
              BAMBOOS
            </p>
            <p className="mt-1 text-[0.7rem] leading-none tracking-[0.32em] text-white/65">
              {subtitle}
            </p>
          </div>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm text-white/75 md:flex"
        >
          {isHome ? (
            <>
              <a href={servicesHref} className="transition hover:text-white">
                Services
              </a>
              <a href={contactHref} className="transition hover:text-white">
                Contact
              </a>
            </>
          ) : (
            <>
              <Link href={servicesHref} className="transition hover:text-white">
                Services
              </Link>
              <Link href={contactHref} className="transition hover:text-white">
                Contact
              </Link>
            </>
          )}
          <Link
            href="/software"
            aria-current={activePath === "/software" ? "page" : undefined}
            className={`transition hover:text-white ${
              activePath === "/software" ? "font-medium text-white" : ""
            }`}
          >
            Software Studio
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 text-white/85 transition hover:bg-white/10 hover:text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#05070b]/95 px-6 py-5 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 text-sm text-white/80">
            {isHome ? (
              <>
                <a
                  href={servicesHref}
                  onClick={() => setMobileOpen(false)}
                  className="py-1 transition hover:text-white"
                >
                  Services
                </a>
                <a
                  href={contactHref}
                  onClick={() => setMobileOpen(false)}
                  className="py-1 transition hover:text-white"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link
                  href={servicesHref}
                  onClick={() => setMobileOpen(false)}
                  className="py-1 transition hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href={contactHref}
                  onClick={() => setMobileOpen(false)}
                  className="py-1 transition hover:text-white"
                >
                  Contact
                </Link>
              </>
            )}
            <Link
              href="/software"
              onClick={() => setMobileOpen(false)}
              aria-current={activePath === "/software" ? "page" : undefined}
              className={`py-1 transition hover:text-white ${
                activePath === "/software" ? "font-medium text-white" : ""
              }`}
            >
              Software Studio
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
