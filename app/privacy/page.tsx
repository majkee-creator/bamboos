"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Drone, Wind, Mail, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-semibold tracking-wide">
            <Drone className="h-5 w-5" />
            BAMBOOS
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="flex min-h-screen items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            Bamboos Wind Services
          </h1>

          <p className="mt-4 text-lg text-white/70">
            Drone inspections for offshore wind infrastructure
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="p-6 border border-white/10 rounded-xl">
            <Wind className="h-8 w-8 mb-4 text-white/80" />
            <h3 className="text-xl font-semibold">Wind Turbine Inspection</h3>
            <p className="mt-2 text-white/60 text-sm">
              High-precision drone inspections for offshore wind farms.
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-xl">
            <Drone className="h-8 w-8 mb-4 text-white/80" />
            <h3 className="text-xl font-semibold">Drone Monitoring</h3>
            <p className="mt-2 text-white/60 text-sm">
              Real-time aerial monitoring and data capture.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <div className="mt-6 space-y-4 max-w-md mx-auto">
          <Input placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button className="w-full">Send</Button>
        </div>

        <div className="mt-8 text-sm text-white/60 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-4 w-4" />
            info@bamboos.sk
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-4 w-4" />
            +421 XXX XXX XXX
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-10 text-white/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">

          <div>
            <p className="text-white font-semibold">BAMBOOS</p>
            <p className="text-sm mt-2">info@bamboos.sk</p>

            <div className="mt-4 flex gap-4 text-xs">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>

          <div className="text-sm text-right">
            <p className="text-white/80">Bamboos s.r.o.</p>
            <p>Bajkalská 9/B, Bratislava</p>
            <p>IČO: 52340911</p>
          </div>

        </div>
      </footer>

    </div>
  );
}