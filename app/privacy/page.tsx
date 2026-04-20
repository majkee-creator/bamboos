export const metadata = {
  title: "Privacy Policy | Bamboos Wind Services",
  description: "Privacy Policy for Bamboos Wind Services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#05070b] px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
          Legal
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">Privacy Policy</h1>

        <div className="mt-10 space-y-8 text-sm leading-7 text-white/72 md:text-base">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              1. General Information
            </h2>
            <p>
              This website may collect personal information submitted through the
              contact form, including your name, email address and message.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              2. Purpose of Processing
            </h2>
            <p>
              Your data is used only to respond to your inquiry and communicate
              with you about requested services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              3. Data Sharing
            </h2>
            <p>
              We do not sell or rent your personal data. Information is used
              only for communication related to your request.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              4. Data Retention
            </h2>
            <p>
              Personal information is retained only as long as necessary to
              handle your inquiry or as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-white">
              5. Contact
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, contact us
              at info@bamboos.sk.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}