export const siteEn = {
  name: "Theatre Seed",
  nameZh: "种戏",
  tagline: "Planting the seed of theatre within",
  description:
    "Theatre Seed is a free, no-barrier theatre education project for young people in China’s county regions—offering stage practice and creative collaboration at no cost.",
  wechat: "PEER毅恒挚友",
  contactNote:
    "Follow the WeChat account PEER毅恒挚友, or reach out to the Theatre Seed team for applications and partnerships.",
};

export const navEn = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
  { href: "/en/camps", label: "Camps & Archive" },
  { href: "/en/stories", label: "Voices" },
  { href: "/en/join", label: "Get Involved" },
] as const;

export const impactStatsEn = [
  { label: "Participants", value: 50, suffix: "+", note: "Nearly fifty across three cohorts" },
  { label: "First-timers", value: 95, suffix: "%+", note: "First time on stage" },
  { label: "Performances", value: 8, suffix: "+", note: "Villages · old towns · cities" },
  { label: "Camp seasons", value: 4, suffix: "", note: "Winter & summer, still growing" },
] as const;

export const featuresEn = [
  {
    title: "No barriers",
    body: "We open the door to young people who have never tried theatre. The stage belongs to everyone willing to begin.",
  },
  {
    title: "Fully nonprofit",
    body: "Mentors volunteer; participants join free. Lodging, travel, materials, and production costs are covered by public-interest funds.",
  },
  {
    title: "County-focused",
    body: "We serve PEER county youth in Hunan, Guangxi, and beyond—directing limited resources toward those who most need to be seen.",
  },
] as const;

export const uiEn = {
  status: {
    completed: "Archived",
    ongoing: "In progress",
    upcoming: "Coming soon",
  },
  archiveSoon: "Archive opening soon",
  phase: {
    arrival: "Arrival",
    training: "Training",
    workshop: "Workshop",
    rehearsal: "Rehearsal",
    performance: "Performance",
    wrap: "Wrap",
  },
  quoteFilters: [
    { id: "all", label: "All" },
    { id: "2025 Winter", label: "2025 Winter" },
    { id: "2025 Summer", label: "2025 Summer" },
    { id: "2026 Winter", label: "2026 Winter" },
  ],
  letter: {
    to: "To",
    open: "Open the letter",
    closeAria: "Close letter",
    fold: "Fold ✕",
    letterTo: "A letter to the character ·",
    dear: "Dear",
    footer: "— From actor to character · Theatre Seed Summer Camp",
  },
  campDetail: {
    dates: "Dates",
    location: "Location",
    scale: "Scale",
    highlights: "Highlights",
    venues: "Venues",
    schedule: "Schedule",
    scheduleDesc: "From icebreakers to the stage—each step leaves a mark.",
    productions: "Productions",
    premise: "Starting prompt:",
    story: "Camp story",
    voices: "Voices",
    wechatTitle: "Want the full recap?",
    wechatBody: "Our WeChat posts keep fuller text and images.",
    wechatLater: "A full recap will appear here after the camp ends.",
    readWechat: "Read on WeChat →",
    backList: "Back to camps",
    ongoingBody: "This camp is currently underway. The full archive will open when it ends.",
    ongoingMeta: "In progress",
  },
} as const;
