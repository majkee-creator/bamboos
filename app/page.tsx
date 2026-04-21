"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "@/components/ui/contact-form";

export default function HomePage() {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#05070b] text-white"
    >
      {/* HEADER */}
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
                WIND SERVICES
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Offshore wind turbines"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(5,7,11,0.92)_88%)]" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/65">
              Drone services for offshore wind inspection
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] md:text-7xl">
              Bamboos Wind Services
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/72 md:text-xl">
              Advanced drone inspections for offshore wind infrastructure,
              smarter maintenance and safer operations.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] transition hover:bg-blue-500"
              >
                Our Services
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] transition hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden min-h-[440px] lg:block"
          >
            <Image
              src="/drone-hero.png"
              alt="Drone"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_18px_48px_rgba(0,0,0,0.45)]"
            />
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-t border-white/10 bg-[#06090f] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold md:text-4xl">
            Our Services
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Inspection</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                High-precision drone inspections of offshore and onshore wind
                assets with safer access and faster execution.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Monitoring</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Real-time aerial monitoring for efficient maintenance planning,
                clearer oversight and lower operational risk.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">Data Analysis</h3>
              <p className="mt-3 text-sm leading-7 text-white/68">
                Smart visual reporting and actionable insights to reduce
                downtime, improve decision-making and support safer operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-bold">Contact</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <ContactForm />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-white">
                Bamboos Wind Services
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/68">
                Offshore wind drone inspections, monitoring and visual data
                support for safer and more efficient operations.
              </p>

              <div className="mt-8 space-y-2 text-sm text-white/68">
                <p>info@bamboos.sk</p>
                <p>+421 949 566 174</p>
                <p>Bratislava, Slovakia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/58">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-semibold text-white">BAMBOOS</p>
            <p className="mt-2">info@bamboos.sk</p>

            <div className="mt-4 flex gap-4">
              <Link href="/privacy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p>Bamboos s.r.o.</p>
            <p>Bajkalská 9/B, Bratislava</p>
            <p>IČO: 52340911</p>
            <p>DIČ: 2121022783</p>
          </div>
        </div>
      </footer>
    </main>
  );
}