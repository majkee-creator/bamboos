export type PublishedApp = {
  slug: string;
  name: string;
  subtitle?: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  platforms: string[];
  icon: string;
  orientation: "landscape" | "portrait";
  screenshots: {
    src: string;
    alt: string;
  }[];
  appStoreUrl: string;
  appStoreId: string;
  websiteUrl?: string;
  websiteLabel?: string;
};

export type ComingSoonApp = {
  slug: string;
  name: string;
  category: string;
  statusLabel: string;
  description: string;
  highlights: string[];
  platforms: string[];
  icon: string;
  appStoreUrl: string;
  appStoreId: string;
  googlePlayUrl?: string;
  googlePlayId?: string;
  websiteUrl?: string;
  websiteLabel?: string;
};

export type InDevelopmentProject = {
  name: string;
  category: string;
  description: string;
};

export const COMING_SOON_APPS: ComingSoonApp[] = [
  {
    slug: "now",
    name: "NOW – Meet Your Friends",
    category: "Social Networking",
    statusLabel: "Coming Soon — submitted to Apple and Google for review",
    description:
      "A social networking app designed to bring friends together through live location sharing, spontaneous meetups, messaging, voice and video calls.",
    highlights: [
      "Live friend map with Ghost Mode ON by default",
      "Spontaneous meetups, Moments, and Private Circles",
      "End-to-end encrypted messaging, voice, and video calls",
    ],
    platforms: ["iOS", "iPadOS", "Android"],
    icon: "/software/now/icon.png",
    appStoreUrl: "https://apps.apple.com/app/id6839253524",
    appStoreId: "6839253524",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=now.nowapp.app",
    googlePlayId: "now.nowapp.app",
    websiteUrl: "https://nowapp.now",
    websiteLabel: "nowapp.now",
  },
  {
    slug: "wildswitch",
    name: "WildSwitch",
    category: "Multiplayer Game",
    statusLabel: "Coming Soon — submitted for Apple review",
    description:
      "A multiplayer animal adventure game featuring exciting chases, teamwork, rescues and immersive wildlife arenas.",
    highlights: [
      "Fast-paced multiplayer animal chases and rescues",
      "Teamwork-driven abilities across immersive wildlife arenas",
      "Built for iPhone and iPad",
    ],
    platforms: ["iOS", "iPadOS"],
    icon: "/software/wildswitch/icon.png",
    appStoreUrl: "https://apps.apple.com/app/id6832195230",
    appStoreId: "6832195230",
  },
];

export const PUBLISHED_APPS: PublishedApp[] = [
  {
    slug: "empires",
    name: "EMPIRES: Dawn of Civilization",
    category: "Strategy Game",
    tagline: "Premium civilization-building strategy game",
    description:
      "Start with a single settler in an unexplored medieval world. Build settlements and castles, manage resources, sail across uncharted oceans, and expand your kingdom in an offline-first simulation built for iPhone and iPad.",
    highlights: [
      "Offline-first real-time medieval strategy simulation",
      "Settlement construction, resource economy, and maritime exploration",
      "Designed for iPhone and iPad",
    ],
    platforms: ["iOS", "iPadOS"],
    icon: "/software/empires/icon.jpg",
    orientation: "landscape",
    screenshots: [
      {
        src: "/software/empires/screen-1.jpg",
        alt: "EMPIRES: Dawn of Civilization kingdom overview screenshot",
      },
      {
        src: "/software/empires/screen-2.jpg",
        alt: "EMPIRES: Dawn of Civilization settlement building screenshot",
      },
      {
        src: "/software/empires/screen-3.jpg",
        alt: "EMPIRES: Dawn of Civilization world exploration screenshot",
      },
    ],
    appStoreUrl:
      "https://apps.apple.com/app/empires-dawn-of-civilization/id6829475045",
    appStoreId: "6829475045",
  },
  {
    slug: "bw-camera",
    name: "B&W Camera",
    subtitle: "SHOOTBW",
    category: "Photography & Video",
    tagline: "Black-and-white photography and video",
    description:
      "A dedicated monochrome camera built for photographers and filmmakers who want to compose directly in black and white. Shoot stills and cinematic 4K video with real-time optical contrast filters and classic film stocks.",
    highlights: [
      "Live monochrome viewfinder with real-time GPU processing",
      "Cinematic 4K black-and-white video recording",
      "Optical spectral contrast filters and classic film stocks",
    ],
    platforms: ["iOS"],
    icon: "/software/bw-camera/icon.jpg",
    orientation: "portrait",
    screenshots: [
      {
        src: "/software/bw-camera/screen-1.jpg",
        alt: "B&W Camera live monochrome viewfinder screenshot",
      },
      {
        src: "/software/bw-camera/screen-2.jpg",
        alt: "B&W Camera film stocks and optical filters screenshot",
      },
      {
        src: "/software/bw-camera/screen-3.jpg",
        alt: "B&W Camera black-and-white capture controls screenshot",
      },
    ],
    appStoreUrl: "https://apps.apple.com/app/b-w-camera/id6809041972",
    appStoreId: "6809041972",
    websiteUrl: "https://www.shootbw.app",
    websiteLabel: "shootbw.app",
  },
  {
    slug: "meetbrief",
    name: "MeetBrief",
    category: "Productivity",
    tagline: "AI-powered meeting recording and summaries",
    description:
      "Turn spoken conversations into structured, actionable meeting briefs. Record meetings on iOS and automatically distill discussions into clear summaries, key decisions, and follow-up items.",
    highlights: [
      "One-tap meeting audio recording and transcription",
      "Structured AI summaries with key decisions and action items",
      "Built for iPhone and iPad workflows",
    ],
    platforms: ["iOS", "iPadOS"],
    icon: "/software/meetbrief/icon.jpg",
    orientation: "portrait",
    screenshots: [
      {
        src: "/software/meetbrief/screen-1.jpg",
        alt: "MeetBrief meeting summary interface screenshot",
      },
      {
        src: "/software/meetbrief/screen-2.jpg",
        alt: "MeetBrief live recording view screenshot",
      },
      {
        src: "/software/meetbrief/screen-3.jpg",
        alt: "MeetBrief structured notes and action items screenshot",
      },
    ],
    appStoreUrl:
      "https://apps.apple.com/app/meetbrief-ai-meeting-notes/id6782604191",
    appStoreId: "6782604191",
  },
  {
    slug: "offshore-fly",
    name: "Offshore Fly",
    category: "Aviation & Weather",
    tagline: "Professional drone flight decision-support application",
    description:
      "Operational weather intelligence and flight decision support tailored for offshore drone pilots and marine UAV operations. Evaluate wind profiles, sea state, and mission readiness before every launch.",
    highlights: [
      "Marine and offshore wind condition assessment",
      "Mission-focused flight decision support for UAV pilots",
      "Built for iPhone and iPad field operations",
    ],
    platforms: ["iOS", "iPadOS"],
    icon: "/software/offshore-fly/icon.jpg",
    orientation: "portrait",
    screenshots: [
      {
        src: "/software/offshore-fly/screen-1.jpg",
        alt: "Offshore Fly flight weather dashboard screenshot",
      },
      {
        src: "/software/offshore-fly/screen-2.jpg",
        alt: "Offshore Fly wind and operational metrics screenshot",
      },
      {
        src: "/software/offshore-fly/screen-3.jpg",
        alt: "Offshore Fly mission decision support screenshot",
      },
    ],
    appStoreUrl:
      "https://apps.apple.com/app/offshorefly-drone-weather/id6790969834",
    appStoreId: "6790969834",
  },
];

export const IN_DEVELOPMENT_PROJECTS: InDevelopmentProject[] = [
  {
    name: "ABYSS",
    category: "Exploration Game",
    description: "Underwater exploration game.",
  },
  {
    name: "AURA Guardian",
    category: "Family & Safety",
    description: "Family baby monitoring application.",
  },
];
