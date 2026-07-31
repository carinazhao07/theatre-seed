import { siteEn } from "@/lib/en/site";

export const aboutEn = {
  metadata: {
    title: "About Us",
    description:
      "Founder Ningqi (Carina) Zhao's journey and Theatre Seed's commitment to no barriers, fully nonprofit work focused on China's county regions.",
  },
  hero: {
    eyebrow: "About Us",
    title: "About Theatre Seed",
    body: "A seed of theatre planted on a school campus—how it took root in county communities and slowly grew new branches.",
  },
  founder: {
    eyebrow: "— 01 — Founder",
    title: "Breaking ground",
    name: "Ningqi (Carina) Zhao · Theatre Seed founder",
    imgAlt: "A moment from Theatre Seed camp",
  },
  journey: [
    {
      year: "2017",
      title: "A seed in peace",
      body: "At Shanghai Pinghe Bilingual School, the freedom and creativity theatre represented quietly planted a seed in Ningqi (Carina) Zhao's heart.",
    },
    {
      year: "2020",
      title: "Into county education",
      body: "Joining a PEER summer camp, she entered China's county education landscape for the first time—seeing the gap in resources between city and countryside, and the sharp potential of county youth.",
    },
    {
      year: "College",
      title: "From actor to director",
      body: "At Claremont McKenna College she joined the Chinese-language theatre club, moving from actor to director and staging The Donkey Gets Water—experiencing firsthand how theatre can draw a quiet person toward more confident expression and collaboration.",
    },
    {
      year: "2025",
      title: "Theatre Seed is born",
      body: "The seed planted in high school met her thinking about educational equity in county regions—and Theatre Seed was born: dedicated to free theatre education and stage practice for county youth in underserved areas.",
      accent: true,
    },
  ],
  principles: [
    {
      title: "No barriers",
      body: "We open the door to young people who have never tried theatre. The stage does not belong to a few—it belongs to everyone willing to begin.",
      icon: "door" as const,
    },
    {
      title: "Fully nonprofit",
      body: "Mentors volunteer; participants join free. Lodging, travel, materials, and production costs are covered by public-interest funds, so theatre can return to its roots in education.",
      icon: "gift" as const,
    },
    {
      title: "County-focused",
      body: "We serve PEER county youth in Hunan, Guangxi, and beyond—directing limited resources toward those who most need to be seen.",
      icon: "pin" as const,
    },
  ],
  abilities: [
    { title: "Expression & confidence", body: "Practice finding your voice in a safe space—and be heard seriously for the first time." },
    { title: "Teamwork & empathy", body: "Catch each other in rehearsal, understand a character, and understand the person beside you." },
    { title: "Self & society", body: "Through script and role, see more complex humanity and the times we live in." },
    { title: "Courage to finish from zero", body: "Take something that seemed impossible and, step by step, make it real on stage." },
  ],
  partners: {
    eyebrow: "Partners",
    title: "Partners & supporters",
    description:
      "Theatre Seed is supported by PEER. The founder and mentor team are volunteers; participants join at no cost.",
    name: "PEER毅恒挚友",
    body: "A nonprofit dedicated to educational equity between China's urban and rural areas, improving resources in underserved regions, and advancing liberal arts, humanities, and holistic education. Theatre Seed is a theatre education practice initiated by community members and nurtured with PEER's support.",
    cta: "Visit PEER website →",
    href: "https://peerchina.org/",
  },
  bannerAlt: "Learning together by the stream",
};

export const campsPageEn = {
  metadata: {
    title: "Camps & Archive",
    description: "Winter and summer camp models, and a full archive of past Theatre Seed seasons.",
  },
  hero: {
    eyebrow: "Camps & Archive",
    title: "Camps & Archive",
    body: "Winter camp plants the seed; summer camp grows the branches. Two tracks, one shared process—no barriers, fully nonprofit, county-focused.",
  },
  modes: {
    winter: {
      eyebrow: "Winter",
      title: "Theatre Seed Winter Camp",
      duration: "5–7 days · short, intensive co-creation",
      items: [
        "Held in county towns or villages (Guangnan Village, Qianyang Ancient Town…)—immersed in making",
        "Core model: co-creation + short plays, from inspiration to stage in days",
        "Improv training, script co-writing, lighting & sound, community / school tours",
        "Completed: 2025 Guangnan original · 2026 Qianyang double bill (Say It Out Loud · Delayed Repair)",
      ],
      imgAlt: "Winter camp",
    },
    summer: {
      eyebrow: "Summer",
      title: "Theatre Seed Summer Camp",
      duration: "Approx. 10 days · long-cycle deep work",
      items: [
        "Often uses dual venues—county + city (e.g. Guangnan + Changsha)",
        "Core model: full production of a classic play + multi-stop tour",
        "Online pre-study, auditions, read-alouds, workshops, costume photos, technical integration",
        "Completed: 2025 The Donkey Gets Water, two performances; 2026 Jiaxing — Oppression & The Little Prince, three shows",
      ],
      imgAlt: "Theatre Seed Summer Camp",
    },
  },
  flow: [
    {
      title: "Online pre-study",
      body: "4–6 weeks before camp: shared reading of Sunrise, Teahouse, The Donkey Gets Water, and more—woven with frameworks like iceberg theory and tragedy; character biographies and small-group connection.",
    },
    {
      title: "In-person rehearsal",
      body: "Voice and emotion, improvisation and blocking, script refinement; hands-on props, costumes, and sets; sound, lighting, and technical integration.",
    },
    {
      title: "Tour performances",
      body: "At least two performances for different audiences—village or ancient-town communities, and broader stages at county or city schools.",
    },
    {
      title: "Debrief & archive",
      body: "Daily debriefs, survey feedback, photos and posts—keeping community connections alive so growth is seen and remembered.",
    },
  ],
  flowImages: [
    { src: "/images/process-01-online.jpg", alt: "01 Online pre-study" },
    { src: "/images/gallery-25.jpg", alt: "02 In-person rehearsal" },
    { src: "/images/process-03-tour.jpg", alt: "03 Tour performances" },
    { src: "/images/gallery-40.jpg", alt: "04 Debrief & archive" },
  ],
  archive: {
    eyebrow: "Timeline",
    title: "Past camps",
    description: "Click into each season's story, images, and voices.",
  },
};

export const joinEn = {
  metadata: {
    title: "Get Involved",
    description: "Join as a participant, mentor volunteer, or sponsor and partner.",
  },
  hero: {
    eyebrow: "Get Involved",
    title: "Join & support us",
    body: "Whether you want to step on stage for the first time, walk alongside us as a mentor, or support educational equity as a partner—we welcome you to keep planting the seeds of theatre together.",
  },
  channels: [
    {
      id: "student",
      eyebrow: "01",
      title: "Become a participant",
      body: "For county youth served by PEER with no prior theatre experience. Online pre-study before camp, in-person rehearsal and tour—entirely free.",
      cta: "Learn how to apply",
      href: "#contact",
      tone: "light" as const,
    },
    {
      id: "mentor",
      eyebrow: "02",
      title: "Become a mentor / volunteer",
      body: "Directors, performance coaches, set and lighting designers, photographers, and logistics—we welcome anyone willing to invest time in theatre education.",
      cta: "Contact the Theatre Seed team",
      href: "#contact",
      tone: "mid" as const,
    },
    {
      id: "partner",
      eyebrow: "03",
      title: "Sponsorship & partnership",
      body: "For foundations, funders, and institutional partners. With a clear focus on no barriers, fully nonprofit, county-based work, Theatre Seed builds a project archive that can be seen and sustained.",
      cta: "Request project materials",
      href: "#contact",
      tone: "dark" as const,
    },
  ],
  contact: {
    eyebrow: "Contact",
    title: "How to reach us",
    description: siteEn.contactNote,
    lead: "Project lead · Ningqi (Carina) Zhao",
    email: siteEn.contactEmail,
    note: "For applications, mentor volunteering, or sponsorship, email us directly. A written project overview is available on request.",
    ctaCamps: "Browse camp archive",
    ctaAbout: "Learn about our mission",
  },
  imgs: [
    { src: "/images/gallery-21.jpg", alt: "Training session" },
    { src: "/images/gallery-25.jpg", alt: "Backstage preparation" },
    { src: "/images/gallery-37.jpg", alt: "Camp partners" },
  ],
};

export const storiesPageEn = {
  metadata: {
    title: "Voices & Change",
    description: "Reflections from Theatre Seed participants and letters actors wrote to their characters.",
  },
  hero: {
    eyebrow: "Stories & Impact",
    title: "Voices & Change",
    body: "After the lights go down, what remains are moments treated with care—participants' growth, and letters written to the characters they played.",
  },
  voices: {
    eyebrow: "Voices",
    title: "Interactive voice wall",
    description:
      "Original words from three camp seasons—surveys and recaps. Filter by camp; hover to feel the warmth in each line.",
  },
  letters: {
    eyebrow: "Letters",
    title: "Letters to the characters",
    description:
      "After rehearsing The Donkey Gets Water (《驴得水》), actors left unsaid words for the roles they played. Open an envelope and read slowly.",
    watermark: "信",
  },
};
