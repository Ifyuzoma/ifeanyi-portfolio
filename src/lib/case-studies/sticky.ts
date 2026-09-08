import type { CaseStudyData } from "@/lib/types";

const U = "/uploads/div/";
const shot = (file: string, label: string) => ({ src: U + file, label });

export const sticky: CaseStudyData = {
  slug: "sticky",
  tags: ["Sticky", "Mobile + Watch", "Product design", "Solo project", "In development"],
  title: "A to-do app built around one note at a time.",
  dek: "I designed Sticky solo: a task app built entirely around the physical sticky-note metaphor, made to fix what I found frustrating in existing to-do apps and built to be something I could actually share with friends and family, not just use alone.",
  facts: [
    { k: "Role", v: "Solo product designer, end to end" },
    { k: "Team", v: "Solo personal project" },
    { k: "Platform", v: "Mobile, iOS-style, with an Apple Watch companion" },
    { k: "Scope", v: "Desk and notes, voice capture, focus, calendar, shared households, settings, onboarding, watch" },
    { k: "Status", v: "In development, no release and no user testing yet" },
  ],
  chapters: [
    {
      n: "Context",
      title: "Backlogs or badges, pick your poison",
      paras: [
        "To-do apps tend to fail in one of two directions. They let lists grow into an overwhelming, guilt-inducing backlog, or they lean on gamification, streaks, badges and points, which turns getting things done into a performance instead of just doing them. Neither actually matches how a sticky note works in real life: you write it, you look at it, you do the thing, you throw it away.",
        "Picture someone who has tried several to-do apps, each abandoned after a few weeks once the backlog got long enough to feel bad about, or once the streak-tracking started to feel more like pressure than help. Sticky's starting point was that frustration, plus wanting something simple enough that a partner or roommate could actually use it too.",
      ],
      media: {
        kind: "group",
        shots: [shot("div-21.png", "The desk: notes, not rows"), shot("div-2.png", "Import: honest about a bloated backlog")],
        caption: "Acknowledging that most existing backlogs are bloated, and designing the migration around that honestly.",
      },
    },
    {
      n: "The challenge",
      title: "Light enough to keep, shared enough to matter",
      paras: [
        "This was a personal-experience-driven project, not a formally researched one. The frustration with existing to-do apps and the desire for something shareable with people close to me were the actual triggers.",
      ],
      callout: {
        label: "Core question",
        text: "How do you design a task app that avoids both a soul-crushing backlog and gamified pressure, while also working naturally as something a household can share rather than an individual productivity tool?",
      },
      media: {
        kind: "group",
        shots: [shot("div-5.png", "Two pings a day. That's it.")],
        caption: "Naming the exact fatigue most productivity apps create, and designing against it directly.",
      },
    },
    {
      n: "My role",
      title: "Solo, and clear about the research",
      paras: [
        "I designed Sticky solo, end to end: the desk and notes metaphor, voice capture, focus mode, calendar view, shared households and the Watch companion.",
        "Because this is a personal project, the design is grounded in my own frustration with existing to-do apps rather than formal user research, and there is no user testing yet since the app is still in development.",
      ],
      media: {
        kind: "group",
        shots: [shot("div-4.png", "Settings: the desk and nudges"), shot("div-22.png", "Choose your surface")],
        caption: "Every setting designed around a single principle: keep the app light, not another source of pressure.",
      },
    },
    {
      n: "Strategy",
      title: "Fidelity to the metaphor",
      paras: [
        "Hypothesis: if tasks behaved like physical sticky notes, written quickly, visually distinct, meant to be cleared rather than accumulated, and the app avoided gamified pressure entirely, people would actually keep using it, alone or with the people they share tasks with.",
        "The guiding principle was fidelity to the sticky-note metaphor itself. Every feature had to make sense as a note on a desk before it was allowed into the app, which kept the scope disciplined and the interaction model consistent.",
      ],
      media: {
        kind: "group",
        shots: [
          shot("div-21.png", "Desk"),
          shot("div-20.png", "Dump"),
          shot("div-13.png", "Focus"),
          shot("div.png", "Watch"),
        ],
        caption: "One consistent metaphor, carried from the phone to the wrist.",
      },
    },
  ],
  decisionsHeading: "The five decisions",
  decisions: [
    {
      n: "01",
      title: "The Watch shows exactly one task",
      rows: [
        { k: "Situation", v: "Most task-app watch complications either show a mini version of the full list or a vague summary, giving you the same overwhelm in a smaller space." },
        { k: "Decision", v: "I designed the Watch complication to show exactly one task at a time, with a single Done action. Completing it doesn't reveal the next item automatically; the note simply crumples with a haptic, reinforcing that this was the one thing, not an entry point into a list." },
        { k: "Why", v: "A watch screen is too small to browse a list well, so I didn't try to make it one. Constraining it to a single task turns a technical limitation into the actual point of the feature: total focus, enforced by the hardware itself." },
        { k: "Change", v: "The Watch became the purest expression of the one thing idea in the whole app, rather than a cramped, compromised version of the phone experience." },
      ],
      media: {
        kind: "group",
        shots: [shot("div.png", "Complication and focus running on the wrist"), shot("div-14.png", "The same one thing on the phone")],
        caption: "One task, one action: the constraint is the feature.",
      },
    },
    {
      n: "02",
      title: "Voice dumps split into separate notes",
      rows: [
        { k: "Situation", v: "People naturally think out loud in run-on sentences, call Sarah about the website, book the dentist next week, pay the electricity bill before Friday, but most voice-to-task features either transcribe it as one blob or require manual splitting." },
        { k: "Decision", v: "I designed the Dump feature to transcribe a rambling voice note live and automatically split it into distinct, color-coded notes as it listens: three separate tasks recognized and shown separately, with a single Stick all three action to commit them at once." },
        { k: "Why", v: "The whole value of a quick voice dump is not having to stop and organize while you are talking. Automatically splitting run-on speech removes the one step that would otherwise force you back into manual organizing, the exact friction the feature exists to avoid." },
        { k: "Change", v: "Capturing several tasks became as fast as talking for fifteen seconds, with the app doing the organizing work instead of the user." },
      ],
      media: {
        kind: "group",
        shots: [shot("div-7.png", "Live transcript with three notes heard so far"), shot("div-19.png", "One typed line parsed into a note")],
        caption: "Talking naturally, with the app doing the sorting.",
      },
    },
    {
      n: "03",
      title: "A tiered backlog import",
      rows: [
        { k: "Situation", v: "Someone migrating from another to-do app often has a bloated backlog: old, abandoned, half-relevant items that would immediately recreate the overwhelm Sticky is designed to avoid." },
        { k: "Decision", v: "I designed the import flow to bucket old items into tiers, due in the next 14 days, touched in the last month, someday or maybe, and untouched for three months or more, with the first two pre-selected and the stale tiers left for the user to opt into deliberately." },
        { k: "Why", v: "Importing everything by default would import the exact problem the app is trying to solve. Bucketing by recency and relevance lets someone start with a genuinely usable desk, while being honest that nothing is deleted, it is just not automatically brought along." },
        { k: "Change", v: "Migrating to Sticky became an active, honest decision about what is actually still relevant, rather than a wholesale copy of an already overwhelming list." },
      ],
      media: {
        kind: "group",
        shots: [shot("div-2.png", "Tiered counts with a first-desk preview"), shot("div-10.png", "The alternative: start empty")],
        caption: "A fresh start that is honest about the old backlog, instead of pretending it doesn't exist.",
      },
    },
    {
      n: "04",
      title: "A shared desk with unclaimed notes",
      rows: [
        { k: "Situation", v: "Shared task apps for households often either force rigid task assignment upfront or don't handle shared responsibility well at all." },
        { k: "Decision", v: "I designed a shared desk for households where notes can be posted unclaimed, visible to everyone and claimable by anyone via an I'll do it action, alongside notes already assigned to a specific person, with live typing indicators and threaded notes on shared items." },
        { k: "Why", v: "A lot of household tasks don't have a natural owner until someone decides to take them. Fix the shower door doesn't need to be pre-assigned, it needs to be visible until someone claims it. Forcing assignment upfront doesn't match how shared responsibility actually works day to day." },
        { k: "Change", v: "The shared desk supported the messier, more realistic way households actually divide tasks, instead of forcing a rigid assignment structure onto it." },
      ],
      media: {
        kind: "group",
        shots: [shot("div-3.png", "Flat 4B: unclaimed notes with I'll do it"), shot("div-6.png", "Shared note with thread and typing indicator")],
        caption: "Tasks that stay visible and available until someone takes them.",
      },
    },
    {
      n: "05",
      title: "Anti-gamification nudges, and notes that age",
      rows: [
        { k: "Situation", v: "Streaks, badges and points are common in to-do apps, but they turn task completion into a performance and create their own guilt when a streak breaks." },
        { k: "Decision", v: "I designed notifications around exactly two daily pings, a morning one thing prompt and an evening review, explicitly framed as no streak guilt and no badge spam, with both toggleable. I also designed a note ageing setting where old, untouched notes visibly fade and gather dust rather than sitting unchanged in a list." },
        { k: "Why", v: "Gamification mechanics optimize for engagement, not for actually feeling good about getting things done. Two honest, low-pressure nudges respect the user's attention instead of exploiting it, and a visibly ageing note communicates neglect the way a real note yellowing on a desk would: informative, not punishing." },
        { k: "Change", v: "The app's relationship with the user shifted from keep your streak alive to here's what is actually going stale, which is a fundamentally gentler kind of pressure." },
      ],
      media: {
        kind: "group",
        shots: [
          shot("div-5.png", "Two pings a day, both optional"),
          shot("div-17.png", "An aged note asking if it still matters"),
          shot("div-12.png", "Evening review, no streak framing"),
        ],
        caption: "Nudges designed to respect attention, not exploit it.",
      },
    },
  ],
  closers: [
    {
      n: "Implementation",
      title: "One filter, every screen",
      paras: [
        "As a solo project, I designed every part of Sticky myself: the desk metaphor, voice capture, focus mode, calendar, shared households, settings and the Watch companion, without a team to divide the work across.",
        "The consistency of the sticky-note metaphor across every screen was easier to maintain solo, since every design decision passed through the same filter: does this feel like a note on a desk.",
      ],
    },
    {
      n: "Outcome",
      title: "Honest about what exists",
      paras: [],
      rows: [
        { k: "Status", v: "Sticky is still in development, with no public release yet." },
        { k: "Proof", v: "I don't have hard data, since there is no shipped product to measure. Early, informal reactions from friends and family who have seen or tried early versions have been positive, particularly around the shared household desk and the anti-gamification approach. I state that directionally, not as a measured result." },
        { k: "For me", v: "This project pushed me to hold a single metaphor disciplined across very different contexts, a phone screen, a watch face, a shared household view, a voice interface, without letting any one feature drift away from this is a sticky note just because a screen made something else convenient." },
      ],
    },
    {
      n: "Reflection",
      title: "A metaphor is a constraint",
      paras: [
        "The clearest lesson from this project so far is that a strong physical metaphor is also a useful design constraint. Every time I was tempted to add a feature that didn't behave like a note on a desk, that was usually a sign it didn't belong in this app, even if it is common in other to-do apps.",
        "Since there is no real usage data yet, the honest next step is testing with actual households, not just friends giving informal reactions, particularly around the shared desk and the tiered backlog import, since both depend on real, messy, existing task lists to prove out.",
      ],
    },
  ],
  finalShots: {
    kind: "group",
    itemSize: "clamp(130px,17vw,215px)",
    shots: [
      shot("div-29.png", "Onboarding 1"),
      shot("div-27.png", "Onboarding 2"),
      shot("div-26.png", "Onboarding 3"),
      shot("div-21.png", "Desk"),
      shot("div-3.png", "Shared desk"),
    ],
    caption: "Onboarding through the shared desk: a consistent idea, not yet a finished, tested product.",
  },
  nextProject: { title: "PantryPal", href: "/work/pantrypal" },
};
