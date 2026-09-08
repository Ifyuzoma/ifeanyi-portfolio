import type { CaseStudyData } from "@/lib/types";

const U = "/uploads/";
const shot = (file: string, label: string) => ({ src: U + file, label });

export const tripwise: CaseStudyData = {
  slug: "tripwise",
  tags: ["TripWise", "Mobile app", "Product design", "Travel tech", "In development"],
  title: 'Designing for "am I actually ready?" instead of just "what\'s the plan?"',
  dek: "As product designer on a three-person team I lead the UX and key design decisions for TripWise, a travel app built around trip readiness rather than itineraries, working directly with a full-stack developer through the build.",
  facts: [
    { k: "Role", v: "Product designer, owning UX and key design decisions" },
    { k: "Team", v: "Designer (me), full-stack developer, copywriter" },
    { k: "Platform", v: "Mobile, iOS-style and responsive" },
    { k: "Scope", v: "Onboarding, trip creation, readiness, packing, documents, alerts, profile, settings" },
    { k: "Status", v: "In active development, no release and no user testing yet" },
  ],
  chapters: [
    {
      n: "Context",
      title: "Trip prep is spread across five tools",
      paras: [
        "Preparing for international travel means juggling several disconnected concerns at once: visa requirements, vaccinations, packing for the destination's weather, insurance that has to still be valid on the return date, currency, local plug types. Most travel apps handle exactly one of these well and leave the rest for the traveler to track in their head, a notes app, or several different tools.",
        "Picture someone with a trip three weeks out. They have booked flights and a hotel, but haven't checked whether their visa situation is sorted, whether their travel insurance actually covers the full trip, or what they still need to pack for the weather at their destination. Nothing is technically wrong yet, but nothing confirms they are actually ready either.",
      ],
      media: {
        kind: "group",
        shots: [shot("Trips.png", "Trip readiness, 65% with done / in progress / to do"), shot("Home-127885ad.png", "Home, what to know about the destination")],
        caption: 'Replacing "what\'s the itinerary" with "what still needs my attention before I go."',
      },
    },
    {
      n: "The challenge",
      title: "One answer, not five open tabs",
      paras: [
        "The trigger for this project was a mix of things: personal frustration with how fragmented travel prep is across different apps, and noticing that existing travel tools each solve one narrow piece, planning or packing or documents, rather than the whole picture of being ready.",
      ],
      callout: {
        label: "Core question",
        text: 'How do you give a traveler one clear, ongoing answer to "am I ready for this trip," pulling together documents, packing and destination-specific requirements that are normally scattered across different apps and mental checklists?',
      },
      media: {
        kind: "group",
        shots: [shot("Home-127885ad.png", "What to know: visa and entry, health, safety, culture")],
        caption: "Surfacing destination-specific requirements automatically, instead of leaving research to the traveler.",
      },
    },
    {
      n: "My role",
      title: "Designing alongside the build, not ahead of it",
      paras: [
        "I own the UX and overall design structure for TripWise, making the key design decisions across the app. The copywriter owns content and microcopy.",
        "I also work directly with the full-stack developer through implementation rather than handing off static designs and stepping away, which matters for a project still actively being built and adjusted. This is personal-experience-driven work rather than formally researched; there is no user testing yet, since the app hasn't reached that stage.",
      ],
      media: {
        kind: "group",
        shots: [shot("Onboarding-2-afe77481.png", 'Onboarding 3, "Ready when you are"')],
        caption: "An idea shaped by direct experience with fragmented travel prep, not yet validated with outside users.",
      },
    },
    {
      n: "Strategy",
      title: "Readiness as the organizing idea",
      paras: [
        "Hypothesis: if a traveler had one score and one place that pulled together documents, packing and destination requirements instead of five disconnected tools, they would actually know whether they were ready to go, not just what was on their itinerary.",
        "The guiding principle was to make readiness the organizing idea for the entire app, not a feature within it. Every screen either contributes to that readiness picture or acts on something it surfaced.",
      ],
      callout: { label: "The loop", text: "Home → trip readiness → alerts → packing and documents → back to readiness." },
      media: {
        kind: "group",
        shots: [
          shot("Packing List-1.png", "New trip, what TripWise will prepare"),
          shot("Trips.png", "Readiness"),
          shot("Alerts.png", "Alerts"),
          shot("Travel doc.png", "Documents"),
        ],
        caption: "One idea, readiness, carried through every screen rather than siloed into a single tab.",
      },
    },
  ],
  decisionsHeading: "The five decisions",
  decisions: [
    {
      n: "01",
      title: "Trip readiness as a single, ongoing score",
      rows: [
        { k: "Situation", v: "Most travel apps show a flat checklist or itinerary with no sense of overall status. Everything looks equally urgent, or equally ignorable." },
        { k: "Decision", v: 'I designed a trip readiness score, a percentage paired with a done / in progress / to do breakdown, as the central metric on both the home and trip screens, with a "Continue where I left off" action tied directly to it.' },
        { k: "Why", v: "A single, ongoing score gives a traveler an immediate, honest answer to the question they actually have, instead of asking them to mentally tally a checklist themselves. It also gives the app a natural, non-alarming way to signal progress without treating every unfinished item as equally urgent." },
        { k: "Change", v: "The app's central metric became a status, not a list: something a user could check in on rather than something they had to fully parse each time." },
      ],
      media: {
        kind: "group",
        shots: [shot("Trips.png", "Readiness card with done / in progress / to do bar"), shot("Home-127885ad.png", "The same score on home, 7 of 8 ready")],
        caption: "One number that actually answers the question a traveler has.",
      },
    },
    {
      n: "02",
      title: "Destination requirements surfaced, not researched",
      rows: [
        { k: "Situation", v: "Visa rules, required vaccinations and safety advisories are normally scattered across government sites, forums and other apps. The traveler has to know to go look for them." },
        { k: "Decision", v: 'I designed a "What to know" section on the destination screen, visa and entry, health, safety, culture, each summarized with a clear status such as "Visa on arrival" or "1 vaccine required," right where the traveler is already looking at their trip.' },
        { k: "Why", v: "A traveler shouldn't need to know what questions to ask before they can find the answers. Surfacing these categories automatically, with a status at a glance, turns research the traveler wouldn't necessarily think to do into information they encounter passively just by opening the app." },
        { k: "Change", v: "Destination requirements moved from something to research elsewhere to something surfaced directly, closing one of the most likely gaps in the fragmented-tools problem this app exists to solve." },
      ],
      media: {
        kind: "group",
        shots: [shot("Home-127885ad.png", "What to know card grid on the trip"), shot("Trips.png", "Destination detail with time, money and plug")],
        caption: "Answers to questions a traveler might not think to ask, surfaced before they need them.",
      },
    },
    {
      n: "03",
      title: "A packing list that reacts to conditions",
      rows: [
        { k: "Situation", v: "Generic packing list templates don't account for what is actually happening at the destination, weather or local norms, leaving the traveler to adjust the list manually." },
        { k: "Decision", v: 'I designed the packing list to flag context-aware suggestions directly in the list: a compact umbrella marked "Suggested" with a note that rain is forecast in Rome, and an "Expiring" flag on a document tied to the packing context.' },
        { k: "Why", v: "A packing list that just sits there as a static checklist misses the chance to actually help. Flagging suggestions based on real conditions turns the list from a memory aid into something that proactively catches things a traveler might not think of themselves." },
        { k: "Change", v: "The packing list became a living, responsive part of the readiness picture, not a one-time checklist filled in and forgotten." },
      ],
      media: {
        kind: "group",
        shots: [shot("Packing List.png", "Suggested and expiring flags, rain forecast note")],
        caption: "A list that adjusts to real conditions instead of staying static.",
      },
    },
    {
      n: "04",
      title: "One expiry-aware home for every document",
      rows: [
        { k: "Situation", v: "Passports, visas, vaccination certificates and insurance policies are normally scattered across physical copies, emails and other apps, with no single view of what is valid, expiring or missing." },
        { k: "Decision", v: "I designed a travel documents screen consolidating all of them, passport, visa, health certificate, insurance, each with a clear status (valid, in review, or a countdown like 22 days) plus a proactive banner surfacing the single most urgent expiry issue." },
        { k: "Why", v: "The riskiest travel document problems are the ones a traveler doesn't notice until it is too late, insurance that lapses days before a trip ends being the clearest example. Centralizing every document with expiry awareness turns a passive folder into something that actively catches these problems ahead of time." },
        { k: "Change", v: "Document management moved from static storage to an active part of the readiness system, surfacing the specific risk rather than just storing a file." },
      ],
      media: {
        kind: "group",
        shots: [shot("Travel doc.png", "Expiry banner: insurance ends 12 days before the trip returns")],
        caption: "Catching a real, easy-to-miss risk before it becomes a problem.",
      },
    },
    {
      n: "05",
      title: "A proactive alerts feed",
      rows: [
        { k: "Situation", v: "Even with readiness, documents and packing all tracked, a traveler shouldn't have to open each section individually just to see if anything changed." },
        { k: "Decision", v: "I designed an alerts feed surfacing time-sensitive items directly: a visa needing confirmation, an insurance expiry, a packing list update triggered by a weather change, even a favorable currency movement, organized by urgency and recency." },
        { k: "Why", v: "Readiness isn't a one-time check. Conditions change between when a trip is booked and when it departs, so a proactive feed means the app tells the traveler what changed rather than relying on them to remember to check." },
        { k: "Change", v: "The app shifted from something a traveler has to actively interrogate to something that surfaces what needs attention on its own." },
      ],
      media: {
        kind: "group",
        shots: [shot("Alerts.png", "Needs action, with visa and insurance alerts"), shot("Settings.png", "Notification granularity behind the feed")],
        caption: "The app surfacing what changed, instead of waiting to be asked.",
      },
    },
  ],
  closers: [
    {
      n: "Implementation",
      title: "Built with the developer, not handed over",
      paras: [
        "Because this project is still in development, implementation isn't a separate later phase. I work directly with the full-stack developer as features get built, adjusting design decisions against real technical constraints as they come up. The copywriter owns the app's content and microcopy throughout.",
        "This is a small, three-person team, which means less handoff and more continuous, direct collaboration than the agency-team projects elsewhere in this portfolio.",
      ],
    },
    {
      n: "Outcome",
      title: "Honest about what exists",
      paras: [],
      rows: [
        { k: "Status", v: "TripWise is still under active development. There is no public release, no shipped version, and no user testing has happened yet." },
        { k: "Proof", v: "I have no outcome data to report, because there isn't a finished, tested product yet. I am stating that plainly rather than describing a result that doesn't exist." },
        { k: "For me", v: "This project differs from the shipped work in this portfolio in an important way: I am not just designing screens, I am working through implementation decisions with the developer in real time, so design decisions are tested against technical feasibility continuously rather than validated after the fact." },
      ],
    },
    {
      n: "Reflection",
      title: "Readiness beats itinerary",
      paras: [
        "The clearest idea shaping this project so far is that readiness is a stronger organizing principle than itinerary for this kind of app. It gives every feature, from packing to documents to alerts, a shared reason to exist rather than being separate tools bolted together under one app icon.",
        "Since this hasn't been tested with real users yet, the honest next step is exactly that: usability testing to see whether the readiness score, the destination requirement cards and the proactive alerts actually reduce the anxiety and fragmentation they are designed to address, rather than just looking like they should.",
      ],
    },
  ],
  finalShots: {
    kind: "group",
    itemSize: "clamp(130px,17vw,215px)",
    shots: [
      shot("Onboarding-bc5ff8e8.png", "Onboarding 1"),
      shot("Onboarding-1-6c4989f7.png", "Onboarding 2"),
      shot("Onboarding-3-cb63863d.png", "Create account"),
      shot("Home-127885ad.png", "Home"),
      shot("Profile-1.png", "Profile"),
    ],
    caption: "Onboarding through home: the core idea is built out, testing and validation still ahead.",
  },
  nextProject: { title: "Space'M Online", href: "/work/spacem-online" },
};
