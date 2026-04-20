"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string; // honeypot
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus({
      type: "loading",
      message: "Sending...",
    });

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
        message: data?.message || "Message sent successfully.",
      });

      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div style={{ display: "none" }}>
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
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400"
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
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400"
          placeholder="you@company.com"
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
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-400"
          placeholder="Tell us about your project or inspection needs..."
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="inline-flex items-center rounded-xl bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status.type === "loading" ? "Sending..." : "Send message"}
      </button>

      {status.type !== "idle" && (
        <p
          className={`text-sm ${
            status.type === "success"
              ? "text-emerald-400"
              : status.type === "error"
              ? "text-red-400"
              : "text-white/70"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}