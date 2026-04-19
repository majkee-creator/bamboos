"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Drone, Wind, Waves } from "lucide-react";

export default function BamboosWebsite() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-semibold tracking-[0.35em]">BAMBOOS</div>
          <nav className="hidden md:flex items-center gap-10 text-sm text-white/75">
            <a href="#technology">Technology</a>
            <a href="#services">Services</a>
            <a href="#cases">Cases</a>
            <a href="#contact">Contact</a>
          </nav>
          <Button className="rounded-full bg-white text-black hover:bg-white/90">
            Get Quote
          </Button>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020406]/70 via-transparent to-[#05070b]" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto max-w-5xl px-6 pt-24"
        >
          <h1 className="text-6xl font-extrabold tracking-tight md:text-8xl lg:text-[8rem]">
            BAMBOOS
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-2xl">
            Autonomous drone inspection for offshore wind turbines
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="min-w-[170px] rounded-xl bg-[#1d2430] px-8 py-6 text-base text-white hover:bg-[#252d3b]">
              Start Project
            </Button>
            <Button
              variant="outline"
              className="min-w-[170px] rounded-xl border-white/20 bg-white/10 px-8 py-6 text-base text-white hover:bg-white/15"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="border-t border-white/10 bg-black/40 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 text-center md:grid-cols-3">
          {["70% Faster", "Zero Downtime", "AI Inspection"].map((item) => (
            <div key={item} className="text-3xl font-semibold md:text-4xl">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Drone, title: "Autonomous Flights", text: "AI-powered navigation" },
            { icon: Wind, title: "Blade Analysis", text: "Detect damage & erosion" },
            { icon: Waves, title: "Offshore Ready", text: "Extreme weather operations" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_40px_rgba(255,255,255,0.03)]"
            >
              <item.icon className="mb-6 h-10 w-10 text-white/90" />
              <h3 className="text-3xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-lg text-white/65">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="technology"
        className="bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] px-6 py-20 text-center"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold md:text-6xl">AI Intelligence Layer</h2>
          <p className="mt-6 text-lg text-white/70 md:text-2xl">
            Turning drone data into predictive maintenance insights for wind farms.
          </p>
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              src: "/case-1.jpg",
              title: "Offshore Wind Farm",
              text: "Full inspection in 24h",
            },
            {
              src: "/case-2.jpg",
              title: "Blade Monitoring",
              text: "High-resolution defect analysis",
            },
          ].map((item) => (
            <div
              key={item.src}
              className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute left-6 top-6">
                <h3 className="text-2xl font-semibold md:text-4xl">{item.title}</h3>
                <p className="mt-2 text-white/80 md:text-xl">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold md:text-6xl">Contact Us</h2>
          <p className="mt-4 text-lg text-white/70 md:text-2xl">
            Get a quote within 24 hours
          </p>

          <div className="mt-10 space-y-4">
            <Input
              placeholder="Email"
              className="h-14 border-white/10 bg-white/[0.04] text-white placeholder:text-white/35"
            />
            <Textarea
              placeholder="Project details"
              className="min-h-[120px] border-white/10 bg-white/[0.04] text-white placeholder:text-white/35"
            />
            <Button className="mt-2 w-full rounded-xl bg-[#111826] py-6 text-lg text-white hover:bg-[#192233]">
              Send Request
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/55">
        <p>info@bamboos.sk</p>
      </footer>
    </div>
  );
}