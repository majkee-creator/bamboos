import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "WildSwitch — Terms of Use | Bamboos s.r.o.",
  description:
    "Official Terms of Use for WildSwitch, including multiplayer conduct, Wild Coins, and non-consumable App Store cosmetic purchases.",
  alternates: {
    canonical: "https://www.bamboos.sk/wildswitch/terms",
  },
};

export default function WildSwitchTermsPage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <SiteHeader subtitle="SOFTWARE STUDIO" activePath="/software" />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="mb-10 border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            WildSwitch • Legal Documentation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-white/65">
            Effective Date: November 19, 2026 &nbsp;•&nbsp; Publisher: Bamboos
            s.r.o. (Bratislava, Slovakia)
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <Link
              href="/wildswitch/privacy"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/wildswitch/terms"
              className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-1.5 font-medium text-emerald-300"
            >
              Terms of Use
            </Link>
            <Link
              href="/wildswitch/support"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>

        <article className="space-y-10 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Acceptance &amp; License
            </h2>
            <p className="mt-3">
              By downloading or playing <strong>WildSwitch</strong>, you agree
              to these Terms of Use and our{" "}
              <Link
                href="/wildswitch/privacy"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                Privacy Policy
              </Link>
              . Bamboos s.r.o. grants you a limited, non-exclusive,
              non-transferable, revocable license to use WildSwitch for
              personal, non-commercial entertainment on Apple devices you own or
              control, in accordance with Apple&rsquo;s App Store Media Services
              Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Acceptable Behavior &amp; Multiplayer Conduct
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Choose respectful, family-friendly nicknames and do not enter
                personal contact details (such as phone numbers, addresses, or
                social media handles) in your nickname.
              </li>
              <li>
                Do not attempt to exploit, cheat, tamper with network packets,
                reverse-engineer, or disrupt online multiplayer sessions.
              </li>
              <li>
                Players may report inappropriate nicknames inside the Online
                Lobby to mask them immediately on their device.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Local Profiles &amp; Nicknames
            </h2>
            <p className="mt-3">
              WildSwitch stores player progress, nicknames, and earned Wild
              Coins locally on your device. Because we do not operate a
              cloud-synced account server, uninstalling WildSwitch removes local
              progression data from that device. Permanent Apple App Store
              cosmetic purchases remain tied to your Apple Account and can be
              restored at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Virtual Wild Coins
            </h2>
            <p className="mt-3">
              Wild Coins are an in-game virtual currency earned exclusively
              through gameplay (such as completing matches, daily missions,
              achievements, and Sky Crates). Wild Coins have no real-world
              monetary value, cannot be exchanged for real money, and are
              non-refundable and non-transferable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Cosmetic In-App Purchases, Restore &amp; Refunds
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>100% Cosmetic Only:</strong> Paid items in WildSwitch
                are purely visual cosmetics (coat skins and accessories) and
                provide zero competitive gameplay advantage.
              </li>
              <li>
                <strong>Permanent Non-Consumable Entitlements:</strong> Paid
                store items are one-time, non-consumable purchases verified by
                Apple StoreKit 2.
              </li>
              <li>
                <strong>Restore Purchases:</strong> You can restore previously
                purchased non-consumable items on any compatible device signed
                into the same Apple Account using the{" "}
                <strong>Restore Purchases</strong> button in the Premium Shop or
                Settings.
              </li>
              <li>
                <strong>Billing &amp; Refunds:</strong> All real-money payments
                and refund requests are processed directly by Apple under
                Apple&rsquo;s App Store policies (via{" "}
                <a
                  href="https://reportaproblem.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                >
                  reportaproblem.apple.com
                </a>
                ).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Intellectual Property
            </h2>
            <p className="mt-3">
              All game code, UI artwork, branding, audio, and original content
              in WildSwitch are owned by or licensed to Bamboos s.r.o. and are
              protected by applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Service Availability, Liability &amp; Changes
            </h2>
            <p className="mt-3">
              Online multiplayer depends on internet connectivity and third-party
              Photon relay availability and may experience maintenance or
              interruptions; Solo Practice remains playable offline. To the
              maximum extent permitted by applicable law, WildSwitch is provided
              &ldquo;as is&rdquo; without warranties of uninterrupted
              availability, and nothing in these Terms excludes statutory
              consumer rights that cannot be waived under EU or local law. We
              may update WildSwitch and these Terms over time; continued use
              after updates take effect constitutes acceptance of the revised
              Terms.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              8. Contact &amp; Support
            </h2>
            <p className="mt-2 text-white/75">
              <strong>Bamboos s.r.o.</strong>
              <br />
              Bajkalská 9/B, Bratislava, Slovakia (IČO: 52340911)
              <br />
              Support Email:{" "}
              <a
                href="mailto:info@bamboos.sk"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                info@bamboos.sk
              </a>
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
