import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "WildSwitch — Support & Help Center | Bamboos s.r.o.",
  description:
    "Official support page for WildSwitch on iPhone, iPad, and macOS: troubleshooting, multiplayer help, restoring purchases, and contact information.",
  alternates: {
    canonical: "https://www.bamboos.sk/wildswitch/support",
  },
};

export default function WildSwitchSupportPage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <SiteHeader subtitle="SOFTWARE STUDIO" activePath="/software" />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="mb-10 border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            WildSwitch • Player Support
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            WildSwitch Support
          </h1>
          <p className="mt-3 text-sm text-white/65">
            Platforms: iPhone (iOS 16.0+), iPad (iPadOS 16.0+), and macOS
            &nbsp;•&nbsp; Publisher: Bamboos s.r.o.
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
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Terms of Use
            </Link>
            <Link
              href="/wildswitch/support"
              className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-1.5 font-medium text-emerald-300"
            >
              Support
            </Link>
          </div>
        </div>

        <div className="space-y-8 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              General Troubleshooting
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Ensure your device is running <strong>iOS 16.0 / iPadOS 16.0</strong>{" "}
                or newer and the latest version of WildSwitch from the App
                Store.
              </li>
              <li>
                If audio or haptics are muted, check the in-game{" "}
                <strong>Settings</strong> menu and your device&rsquo;s silent
                switch.
              </li>
              <li>
                If the app behaves unexpectedly after an OS update, force-close
                and relaunch WildSwitch.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              Multiplayer Connection Troubleshooting
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Online Play requires an active Wi-Fi or cellular connection to
                reach Photon multiplayer relay servers.
              </li>
              <li>
                If matchmaking times out or a restrictive firewall/VPN blocks
                UDP traffic, switch networks or disable VPN and tap{" "}
                <strong>Play Online</strong> again.
              </li>
              <li>
                <strong>Solo Practice</strong> is available anytime without an
                internet connection.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              How to Restore Purchases
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>
                Make sure your device is signed into the{" "}
                <strong>same Apple Account</strong> used for the original
                purchase.
              </li>
              <li>
                Open WildSwitch and navigate to{" "}
                <strong>Premium Shop</strong> (or <strong>Settings → Legal &amp; Support</strong>).
              </li>
              <li>
                Tap <strong>Restore Purchases</strong> to sync your verified
                non-consumable cosmetic entitlements from Apple StoreKit.
              </li>
            </ol>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              Purchase Issues &amp; Refunds
            </h2>
            <p className="mt-3">
              All real-money purchases are billed and managed directly by Apple.
              If a purchase did not unlock after tapping{" "}
              <strong>Restore Purchases</strong>, email us at{" "}
              <a
                href="mailto:info@bamboos.sk"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                info@bamboos.sk
              </a>{" "}
              with the product name and approximate purchase date (never send
              payment card numbers). To request a refund directly from Apple,
              visit{" "}
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                reportaproblem.apple.com
              </a>
              .
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              Data &amp; Local Profile Deletion
            </h2>
            <p className="mt-3">
              WildSwitch stores player profiles locally on your device rather
              than on a central account server. Deleting WildSwitch from your
              iPhone, iPad, or Mac permanently removes your local profile and
              gameplay data from that device. To request deletion of any support
              emails you have sent us, email{" "}
              <a
                href="mailto:info@bamboos.sk"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                info@bamboos.sk
              </a>
              .
            </p>
          </section>

          <section className="rounded-2xl border border-emerald-400/25 bg-emerald-500/10 p-6">
            <h2 className="text-lg font-semibold text-white">
              Contact Bamboos Support
            </h2>
            <p className="mt-2 text-white/85">
              Need help with WildSwitch? Email our team at{" "}
              <a
                href="mailto:info@bamboos.sk"
                className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                info@bamboos.sk
              </a>
              .
            </p>
            <p className="mt-2 text-xs text-white/65">
              Bamboos s.r.o. • Bajkalská 9/B, Bratislava, Slovakia • IČO:
              52340911
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
