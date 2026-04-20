"use client";

import { useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!showPopup) return;

    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [showPopup]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending message...",
    });
    setShowPopup(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message:
          data?.message ||
          "Your message was sent successfully. We will get back to you shortly.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });

      setShowPopup(true);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });

      setShowPopup(true);
    }
  }

  return (
    <>
      {showPopup && (
        <div className="fixed right-4 top-24 z-[100] w-[calc(100%-2rem)] max-w-md rounded-xl border border-white/10 bg-[#0b1220] px-5 py-4 shadow-2xl">
          <p
            className={`text-sm font-medium ${
              status.type === "success"
                ? "text-emerald-400"
                : status.type === "error"
                ? "text-red-400"
                : "text-white/80"
            }`}
          >
            {status.message}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="hidden">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="off"
            tabIndex={-1}
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/60 p-3.5 text-white outline-none placeholder:text-white/40 focus:border-white/25"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/60 p-3.5 text-white outline-none placeholder:text-white/40 focus:border-white/25"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-white/80"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="w-full rounded-md border border-white/10 bg-black/60 p-3.5 text-white outline-none placeholder:text-white/40 focus:border-white/25"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="mt-1 rounded-md bg-blue-600 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.14em] transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.type === "loading" ? "Sending..." : "Send"}
        </button>

        {status.type === "success" && (
          <p className="text-sm text-emerald-400">
            Your message was sent successfully. We will get back to you shortly.
          </p>
        )}

        {status.type === "error" && (
          <p className="text-sm text-red-400">{status.message}</p>
        )}
      </form>
    </>
  );
}
