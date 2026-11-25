import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SoftwareStudioContent from "@/components/software/software-studio-content";

export const metadata: Metadata = {
  title: "Bamboos Software Studio — Mobile Apps, Creative Software & Games",
  description:
    "Independent mobile applications, creative software and interactive entertainment developed and published by Bamboos, including EMPIRES: Dawn of Civilization, B&W Camera, MeetBrief, Offshore Fly, NOW – Meet Your Friends, and WildSwitch.",
  alternates: {
    canonical: "https://www.bamboos.sk/software",
  },
  openGraph: {
    title: "Bamboos Software Studio",
    description:
      "Independent mobile applications, creative software and interactive entertainment developed and published by Bamboos.",
    url: "https://www.bamboos.sk/software",
    siteName: "Bamboos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bamboos Software Studio",
    description:
      "Independent mobile applications, creative software and interactive entertainment developed and published by Bamboos.",
  },
};

export default function SoftwareStudioPage() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-x-hidden bg-[#05070b] text-white"
    >
      <SiteHeader subtitle="SOFTWARE STUDIO" activePath="/software" />
      <SoftwareStudioContent />
    </main>
  );
}
