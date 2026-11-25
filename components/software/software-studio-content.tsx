"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, X } from "lucide-react";
import {
  COMING_SOON_APPS,
  IN_DEVELOPMENT_PROJECTS,
  PUBLISHED_APPS,
  type ComingSoonApp,
  type PublishedApp,
} from "@/lib/software-catalog";

type LightboxImage = {
  src: string;
  alt: string;
  orientation: "landscape" | "portrait";
};

function AppleGlyph() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.78-.96 2.84 1.04.08 2.09-.52 2.72-1.3z" />
    </svg>
  );
}

function GooglePlayGlyph() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 shrink-0"
    >
      <path d="M3.61 1.814L13.793 12 3.61 22.186a1.75 1.75 0 0 1-.61-1.33V3.144c0-.517.224-.995.61-1.33zm1.42-.916l11.27 6.49-2.81 2.81-8.46-9.3zm12.48 7.187l2.97 1.71c.97.56.97 1.96 0 2.52l-2.97 1.71-3.1-3.1 3.1-2.84zM5.03 23.102l8.46-9.3 2.81 2.81-11.27 6.49z" />
    </svg>
  );
}

function ComingSoonShowcaseCard({
  app,
  index,
}: {
  app: ComingSoonApp;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.16) }}
      className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-white/20 sm:p-8"
    >
      <div>
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[18px] border border-white/15 bg-black shadow-[0_12px_32px_rgba(0,0,0,0.45)] sm:h-20 sm:w-20 sm:rounded-[22px]">
            <Image
              src={app.icon}
              alt={`${app.name} app icon`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/12 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                {app.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/25 bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-200">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-amber-400"
                />
                Coming Soon
              </span>
            </div>

            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {app.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-amber-200/80">
              {app.statusLabel}
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-white/72 sm:text-[0.95rem]">
          {app.description}
        </p>

        <ul className="mt-5 space-y-2 text-sm text-white/68">
          {app.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/80"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/15"
          >
            <AppleGlyph />
            <span>App Store</span>
            <span className="rounded bg-white/15 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-white/85">
              Pending Review
            </span>
          </a>

          {app.googlePlayUrl && (
            <a
              href={app.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/35 hover:bg-white/15"
            >
              <GooglePlayGlyph />
              <span>Google Play</span>
              <span className="rounded bg-white/15 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-white/85">
                Pending Review
              </span>
            </a>
          )}

          {app.websiteUrl && (
            <a
              href={app.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
            >
              <Globe className="h-4 w-4 text-white/65" />
              <span>{app.websiteLabel ?? "Website"}</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
            </a>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/45">
          <span className="inline-flex items-center gap-1.5">
            <Smartphone className="h-3.5 w-3.5" />
            {app.platforms.join(" · ")}
          </span>
          <span>App Store ID: {app.appStoreId}</span>
          {app.googlePlayId && <span>Google Play ID: {app.googlePlayId}</span>}
        </div>
      </div>
    </motion.article>
  );
}

function AppShowcaseCard({
  app,
  index,
  onSelectImage,
}: {
  app: PublishedApp;
  index: number;
  onSelectImage: (img: LightboxImage) => void;
}) {
  const isLandscape = app.orientation === "landscape";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.18) }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition-colors hover:border-white/20"
    >
      <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-10">
        {/* App details */}
        <div className={isLandscape ? "lg:col-span-5" : "lg:col-span-5"}>
          <div className="flex items-start gap-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[18px] border border-white/15 bg-black shadow-[0_12px_32px_rgba(0,0,0,0.45)] sm:h-20 sm:w-20 sm:rounded-[22px]">
              <Image
                src={app.icon}
                alt={`${app.name} app icon`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/12 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                  {app.category}
                </span>
                {app.subtitle && (
                  <span className="rounded-full border border-white/12 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium tracking-[0.16em] text-white/55">
                    {app.subtitle}
                  </span>
                )}
              </div>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-[1.7rem]">
                {app.name}
              </h3>
              <p className="mt-1 text-sm text-white/60">{app.tagline}</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-7 text-white/72 sm:text-[0.95rem]">
            {app.description}
          </p>

          <ul className="mt-6 space-y-2.5 text-sm text-white/68">
            {app.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/80"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-[#05070b] transition hover:bg-white/90"
            >
              <AppleGlyph />
              <span>App Store</span>
              <ArrowUpRight className="h-4 w-4 opacity-70" />
            </a>

            {app.websiteUrl && (
              <a
                href={app.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              >
                <Globe className="h-4 w-4 text-white/65" />
                <span>{app.websiteLabel ?? "Website"}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </a>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/45">
            <span className="inline-flex items-center gap-1.5">
              <Smartphone className="h-3.5 w-3.5" />
              {app.platforms.join(" · ")}
            </span>
            <span>App Store ID: {app.appStoreId}</span>
          </div>
        </div>

        {/* Screenshots */}
        <div className={isLandscape ? "lg:col-span-7" : "lg:col-span-7"}>
          {isLandscape ? (
            <div className="space-y-3">
              <button
                type="button"
                onClick={() =>
                  onSelectImage({
                    src: app.screenshots[0].src,
                    alt: app.screenshots[0].alt,
                    orientation: "landscape",
                  })
                }
                className="group relative block aspect-[900/414] w-full overflow-hidden rounded-2xl border border-white/12 bg-black/60 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Image
                  src={app.screenshots[0].src}
                  alt={app.screenshots[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </button>

              <div className="grid grid-cols-2 gap-3">
                {app.screenshots.slice(1).map((shot) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() =>
                      onSelectImage({
                        src: shot.src,
                        alt: shot.alt,
                        orientation: "landscape",
                      })
                    }
                    className="group relative block aspect-[900/414] w-full overflow-hidden rounded-xl border border-white/12 bg-black/60 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 28vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {app.screenshots.map((shot) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() =>
                    onSelectImage({
                      src: shot.src,
                      alt: shot.alt,
                      orientation: "portrait",
                    })
                  }
                  className="group relative block aspect-[414/900] w-full overflow-hidden rounded-2xl border border-white/12 bg-black/60 shadow-[0_14px_34px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 28vw, 18vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function SoftwareStudioContent() {
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.16),transparent_60%)]"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/60 sm:text-sm">
              Bamboos Division
            </p>

            <h1 className="text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
              Bamboos Software Studio
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Independent mobile applications, creative software and interactive
              entertainment.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#published"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition hover:bg-blue-500"
              >
                Published Apps
              </a>
              <a
                href="#coming-soon"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition hover:bg-white/10"
              >
                Coming Soon
              </a>
              <a
                href="#in-development"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium uppercase tracking-[0.14em] transition hover:bg-white/10"
              >
                In Development
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Published Applications */}
      <section
        id="published"
        className="border-t border-white/10 bg-[#06090f] px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/50">
                Available Now
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Published Applications
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60">
              Original software designed, engineered, and published in-house by
              Bamboos.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {PUBLISHED_APPS.map((app, index) => (
              <AppShowcaseCard
                key={app.slug}
                app={app}
                index={index}
                onSelectImage={setLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon — Submitted for Store Review */}
      <section
        id="coming-soon"
        className="border-t border-white/10 bg-[#05070b] px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-white/50">
                Submitted for Store Review
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Coming Soon
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60">
              Completed releases currently awaiting App Store and Google Play
              review approval.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {COMING_SOON_APPS.map((app, index) => (
              <ComingSoonShowcaseCard key={app.slug} app={app} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* In Development */}
      <section
        id="in-development"
        className="border-t border-white/10 bg-[#05070b] px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.32em] text-white/50">
              Upcoming
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              In Development
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/62">
              Projects currently being built in the studio. Not yet available
              for download.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {IN_DEVELOPMENT_PROJECTS.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-0.5 text-[11px] font-medium text-white/65">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-amber-400/80"
                      />
                      In Development
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-7 text-white/65">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-sm text-white/58">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-semibold text-white">BAMBOOS</p>
            <p className="mt-2">info@bamboos.sk</p>

            <div className="mt-4 flex flex-wrap gap-4">
              <Link href="/" className="transition hover:text-white">
                Wind Services
              </Link>
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

      {/* Screenshot Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close screenshot preview"
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl ${
                lightbox.orientation === "landscape"
                  ? "aspect-[900/414] w-full max-w-5xl"
                  : "aspect-[414/900] h-[82vh] max-h-[820px]"
              }`}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
