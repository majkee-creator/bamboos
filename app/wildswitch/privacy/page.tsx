import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "WildSwitch — Privacy Policy | Bamboos s.r.o.",
  description:
    "Official Privacy Policy for the WildSwitch mobile and desktop game by Bamboos s.r.o.",
  alternates: {
    canonical: "https://www.bamboos.sk/wildswitch/privacy",
  },
};

export default function WildSwitchPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <SiteHeader subtitle="SOFTWARE STUDIO" activePath="/software" />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-32">
        <div className="mb-10 border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            WildSwitch • Legal Documentation
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/65">
            Effective Date: November 19, 2026 &nbsp;•&nbsp; Publisher: Bamboos
            s.r.o. (Bratislava, Slovakia)
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <Link
              href="/wildswitch/privacy"
              className="rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-1.5 font-medium text-emerald-300"
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
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>

        <article className="space-y-10 text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Overview</h2>
            <p className="mt-3">
              Bamboos s.r.o. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) publishes <strong>WildSwitch</strong> for iOS,
              iPadOS, and macOS. We designed WildSwitch to be privacy-friendly
              and family-appropriate. We do not sell personal data, we do not
              display third-party advertisements, and we do not track players
              across other apps or websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Information WildSwitch Stores and Uses
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Local Player Profile (On-Device Only):</strong>{" "}
                WildSwitch does not require account registration, email
                addresses, or passwords. Your chosen nickname, randomly
                generated local player identifier, selected animal, unlocked
                cosmetics, Wild Coins balance, level, XP, daily missions,
                achievements, and match statistics are stored locally on your
                device using Apple&rsquo;s standard{" "}
                <code>NSUserDefaults</code> (Unity <code>PlayerPrefs</code>).
              </li>
              <li>
                <strong>Player Nicknames:</strong> You may customize an
                in-game nickname (3–14 characters). WildSwitch applies automated
                filtering to discourage profanity and personal information
                (such as phone numbers, email domains, or social media handles).
                Other players in an online match can see your nickname and
                report inappropriate nicknames locally.
              </li>
              <li>
                <strong>No Third-Party Ad or Tracking SDKs:</strong> WildSwitch
                does not integrate third-party advertising networks, cross-app
                tracking frameworks, or IDFA collection. Our Apple Privacy
                Manifest declares <code>NSPrivacyTracking = false</code>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Online Multiplayer &amp; Photon Fusion
            </h2>
            <p className="mt-3">
              Online multiplayer matches use{" "}
              <strong>Photon Fusion</strong> (operated by Exit Games GmbH) to
              connect players and synchronize real-time gameplay state—such as
              animal movement, selected species/skin, match roles, and your
              in-game nickname—while a session is active. Standard network
              metadata (such as IP address and regional routing information) is
              processed transiently by Photon&rsquo;s relay servers to deliver
              multiplayer connectivity. Bamboos s.r.o. does not operate a
              separate backend database storing persistent personal profiles.
              Offline Solo Practice can be played without connecting to online
              multiplayer servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. In-App Purchases (Processed by Apple)
            </h2>
            <p className="mt-3">
              Optional cosmetic in-app purchases in WildSwitch are processed
              exclusively by <strong>Apple Inc.</strong> through Apple StoreKit
              2. We do not collect, view, or store your payment card details,
              billing address, or Apple Account credentials. WildSwitch receives
              only Apple-verified transaction confirmations and product
              identifiers needed to unlock and restore your permanent
              non-consumable cosmetic entitlements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Children&rsquo;s Privacy
            </h2>
            <p className="mt-3">
              WildSwitch is designed for a family audience. We do not knowingly
              collect personal contact information from children, do not include
              open free-text chat, and protect real-money purchases and external
              web links behind a grown-up parental gate. If a parent or guardian
              believes personal information has been shared with us via email
              support, please contact{" "}
              <a
                href="mailto:info@bamboos.sk"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                info@bamboos.sk
              </a>{" "}
              and we will promptly delete that correspondence.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Data Retention, Deletion &amp; Your Rights
            </h2>
            <p className="mt-3">
              Because your WildSwitch profile is stored locally on your device,
              you remain in direct control of it. Uninstalling WildSwitch from
              your device deletes the local profile and progress stored on that
              device (your permanent Apple App Store cosmetic purchases can
              always be restored later via <strong>Restore Purchases</strong>{" "}
              using the same Apple Account). If you contact us by email for
              support, we retain your email correspondence only as long as
              necessary to resolve your request and meet applicable legal
              obligations. Under GDPR and applicable privacy laws, you may
              request access to, correction of, or deletion of any support
              correspondence you have sent us by emailing{" "}
              <a
                href="mailto:info@bamboos.sk"
                className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
              >
                info@bamboos.sk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Security &amp; Changes to This Policy
            </h2>
            <p className="mt-3">
              Network communication for online multiplayer and Apple StoreKit
              uses standard encrypted transport provided by iOS/macOS and our
              networking infrastructure. We may update this Privacy Policy if
              WildSwitch&rsquo;s features change; the effective date at the top
              of this page will always reflect the latest version.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              8. Contact Information
            </h2>
            <p className="mt-2 text-white/75">
              <strong>Bamboos s.r.o.</strong>
              <br />
              Bajkalská 9/B, Bratislava, Slovakia (IČO: 52340911)
              <br />
              Email:{" "}
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
