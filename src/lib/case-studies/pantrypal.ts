import type { CaseStudyData } from "@/lib/types";

const U = "/uploads/";
const shot = (file: string, label: string) => ({ src: U + file, label });

export const pantrypal: CaseStudyData = {
  slug: "pantrypal",
  tags: ["PantryPal", "iOS", "Product design", "Prototyping", "2026"],
  title: "Designing one home for a household's grocery routine.",
  dek: "I designed and prototyped PantryPal end to end, solo, to bring pantry tracking, shopping and meal planning into a single connected app instead of three disconnected habits.",
  facts: [
    { k: "Role", v: "Solo product designer, research framing, UX, UI, prototyping" },
    { k: "Timeline", v: "3 months, 2026" },
    { k: "Team", v: "Solo personal project" },
    { k: "Platform", v: "iOS · high-fidelity prototype" },
    { k: "Status", v: "Prototype, not yet shipped or user-tested" },
  ],
  chapters: [
    {
      n: "Context",
      title: "Three habits, three separate tools",
      paras: [
        "Grocery management usually breaks down into three separate habits: keeping track of what's in the fridge or cupboard, deciding what to buy, and figuring out what to cook. Most tools solve exactly one of these. A shopping list app doesn't know what's already at home. A recipe app doesn't know what's about to expire.",
        "Picture someone opening the fridge on a Tuesday evening, staring at half a bag of spinach and a carton of yogurt, with no clear read on what's expiring, what's already been used for meals this week, or whether it's worth another grocery run. That moment is what PantryPal is built around.",
      ],
      media: {
        kind: "group",
        shots: [shot("Home screen.png", "Home, expiring soon"), shot("Pantry.png", "Pantry, full inventory")],
        caption:
          "The app surfaces the two questions people actually have: what's about to go bad, and what can I make right now.",
      },
    },
    {
      n: "The challenge",
      title: "Three things had to be true",
      paras: ["For PantryPal to be worth building instead of just another list app, all three of these had to hold:"],
      list: [
        { n: "01", t: "Adding items had to be fast enough that people would actually keep the data current." },
        { n: "02", t: "Expiry information had to be more useful than a countdown, it had to help someone act on it." },
        { n: "03", t: "Pantry, shopping and recipes had to feel like one connected system, not three tabs that don't talk to each other." },
      ],
      callout: {
        label: "Core question",
        text: "How do you make tracking a household's food low-effort enough that people keep doing it, while still making the data useful for shopping and cooking decisions?",
      },
      media: {
        kind: "group",
        shots: [shot("Add item - quick sheet over pantry.png", "Quick add, autocomplete matches")],
        caption: "The main risk to a tracking app is friction at the moment of adding an item, this was the first problem to solve.",
      },
    },
    {
      n: "My role",
      title: "Solo, and honest about the research",
      paras: [
        "I worked solo across the full process: problem framing, wireframes, UI, and a high-fidelity interactive prototype.",
        "Because this was a personal project, the research behind it was grounded in my own experience managing a household pantry, along with a review of existing grocery, pantry and recipe apps to see where they fell short. I didn't run formal user interviews, and I'm calling that out directly rather than implying otherwise, it shaped a few of the decisions below, particularly where I chose to keep scope narrow rather than validate against user data I didn't have.",
      ],
      media: {
        kind: "group",
        shots: [
          shot("Sign up - step 2, set up the pantry.png", "Setup, tunes reminders"),
          shot("Empty state - grocery list, with suggestions.png", "Empty state, first run"),
        ],
        caption: "Scope, timeline and research approach, a solo, personal-experience-driven project.",
      },
    },
    {
      n: "Who this is for",
      title: "A proto-persona, labelled as one",
      paras: [
        "Since there was no formal research phase, I built a proto-persona from personal experience and competitor review rather than interviews, I'm labelling it as exactly that, not as validated research.",
        "Amara, the household grocery coordinator, shares a home with two others and does most of the shopping and cooking. She checks the fridge out of habit rather than any system. She wants to stop throwing out food that quietly expired, stop buying duplicates, and decide dinner faster on weeknights. Her mental list falls apart the moment a housemate buys or uses something without telling her, and recipe apps never account for what's actually in her kitchen. She's comfortable with apps but has low patience for heavy manual upkeep, she'll abandon a tracker if logging items feels like a chore.",
        "The five decisions below are designed for someone managing a shared, moving target of a pantry, not a single person with a static shopping list.",
      ],
      media: {
        kind: "group",
        shots: [shot("Household - member list.png", "Household, shared by three")],
        caption: "The pantry is a moving target because more than one person touches it.",
      },
    },
    {
      n: "Strategy",
      title: "One connected loop, not one strong tool",
      paras: [
        "Hypothesis: if pantry tracking, shopping and meal planning shared the same data, people could make faster, less wasteful grocery decisions, because they'd never be reasoning about what's in the kitchen from memory alone.",
        "The guiding principle was to build one connected loop, know what you have, know what you need, know what you can make, rather than a strong tool for any single step. That meant some individually impressive features, like receipt scanning, were left out if they didn't directly serve that loop in v1.",
      ],
      callout: { label: "The loop", text: "Pantry → Grocery list → Recipes → back to Pantry." },
      media: {
        kind: "group",
        shots: [
          shot("Pantry.png", "Pantry"),
          shot("Empty state - grocery list, with suggestions.png", "Grocery list"),
          shot("Cook mode - one step at a time.png", "Cook mode"),
        ],
        caption: "The three habits people already have, connected instead of separate.",
      },
    },
  ],
  decisionsHeading: "The five decisions",
  decisions: [
    {
      n: "01",
      title: "One app, not three",
      rows: [
        { k: "Situation", v: "Pantry tracking, shopping lists and recipe discovery are usually separate tools, each solving one part of the same underlying routine." },
        { k: "Decision", v: "I combined all three into a single data model, the same pantry inventory drives what shows up as expiring soon, what gets suggested on the shopping list, and which recipes get recommended." },
        { k: "Why", v: "I considered building just an inventory tracker first and adding the rest later. But the value of tracking a pantry is almost entirely in what it enables downstream: better shopping, less waste, easier meal decisions. A standalone tracker without that connective tissue would have solved a smaller, less interesting problem." },
        { k: "Change", v: "Every other decision in this project follows from this one, it's why the shopping list can suggest items from low stock, and why recipes can be filtered by what's already on hand." },
      ],
      media: {
        kind: "group",
        shots: [shot("Home screen.png", "Home"), shot("Pantry.png", "Pantry"), shot("Empty state - grocery list, with suggestions.png", "Grocery list")],
        caption: "Same inventory, three different views of it.",
      },
    },
    {
      n: "02",
      title: "Two ways to add an item, on purpose",
      rows: [
        { k: "Situation", v: "Adding items is the highest-friction, highest-frequency action in the app. If it's slow, the whole pantry goes stale, literally and functionally." },
        { k: "Decision", v: "I designed two distinct entry flows instead of one compromise flow. Quick Add is a search-driven sheet with autocomplete, matched suggestions and one-tap shortcuts for frequently bought items, built for speed. The full form (barcode scan, photo, category, quantity, storage location, best-before date) is built for precision." },
        { k: "Why", v: "A single form that tried to do both would have been too slow for quick top-ups and too shallow for anyone who wanted to track quantity, storage location or exact expiry. Splitting them let each flow be genuinely good at its job instead of average at both." },
        { k: "Change", v: "Quick Add is the default path from Home and Pantry; the full form is reached when someone wants more control, barcode scanning, custom categories, or precise best-before dates." },
      ],
      media: {
        kind: "group",
        shots: [
          shot("Add item - quick sheet over pantry.png", "Quick add, speed"),
          shot("Add item - full form.png", "Full form, precision"),
          shot("Barcode scanner - product found.png", "Scan, matched product"),
        ],
        caption: "Speed for routine restocks, precision for everything else.",
      },
    },
    {
      n: "03",
      title: "Expiry as a timeline, not a countdown",
      rows: [
        { k: "Situation", v: "Most pantry apps reduce freshness to a number of days left. That tells you when something expires but nothing about why, or what to do about it." },
        { k: "Decision", v: "I replaced the flat countdown with a freshness timeline: a visual bar from purchase date to expiry date with the current position marked, paired with a contextual storage tip and quick actions like add to list, change date, or move to freezer." },
        { k: "Why", v: "A countdown only tells someone there's a problem. A timeline with a tip and an action gives them a reason and a next step, which is what actually prevents waste, and that is the core promise of the product." },
        { k: "Change", v: "Item detail went from a passive status display to something that actively helps someone extend or use an item before it's wasted." },
      ],
      media: {
        kind: "group",
        shots: [shot("Item detail - freshness timeline.png", "Freshness timeline, Whole Milk"), shot("Search - filters & sort sheet.png", "Filter by what expires first")],
        caption: "Not just how long is left, but what you should do about it.",
      },
    },
    {
      n: "04",
      title: "Meal planning framed around waste, not scheduling",
      rows: [
        { k: "Situation", v: "Meal planning wasn't part of the original scope, like household sharing, it was added later as the project grew. Once I decided to add it, I explored two structures: a traditional week grid with an auto-fill from pantry shortcut, and a waste-first agenda that leads with a Rescue Plan." },
        { k: "Decision", v: "I kept the waste-first Rescue Plan framing as the primary meal planning experience, a set of meals chosen specifically to use up whatever's expiring soonest." },
        { k: "Why", v: "A generic week-grid meal planner is a commodity; most calendar and recipe apps already do it well. Leading with \"these meals use up what's about to go bad\" ties meal planning directly back to the core problem the app exists to solve." },
        { k: "Change", v: "Meal planning stopped being a separate scheduling tool and became another way the app answers what should I do about what's expiring." },
      ],
      media: {
        kind: "group",
        shots: [shot("Meal plan - agenda, waste-first.png", "Rescue Plan, waste-first"), shot("Meal plan - week grid.png", "Week grid, the alternative")],
        caption: "Two ways to plan meals, one built specifically around reducing waste.",
      },
    },
    {
      n: "05",
      title: "Household sharing, with real permission boundaries",
      rows: [
        { k: "Situation", v: "Household sharing wasn't in the original scope. The first version assumed a single person managing their own pantry, an assumption that started to feel incomplete, since groceries get bought and used by whoever's in the house." },
        { k: "Decision", v: "I designed household sharing around an invite code and QR join, with a clear breakdown of what each role can do: everyone can add items and check off the shopping list, but only the owner can invite or remove members." },
        { k: "Why", v: "A single-user pantry tracker doesn't hold up against how groceries actually work in most homes. But shared data without permission boundaries creates trust problems fast, anyone being able to remove another member, for example, so the feature only made sense with roles attached." },
        { k: "Change", v: "PantryPal moved from a single-user assumption to a genuinely shared tool partway through the project, without needing every member to have the same level of control." },
      ],
      media: {
        kind: "group",
        shots: [shot("Household - invite code first.png", "Invite code + QR join"), shot("Household - member list.png", "Roles and permissions")],
        caption: "Shared access, with boundaries around who can manage the household itself.",
      },
    },
  ],
  closers: [
    {
      n: "Implementation",
      title: "What shipped, and what I cut",
      paras: [
        "Everything shown here is a high-fidelity interactive prototype, not a shipped product, there's no live backend, no real users and no usage data yet. I'm stating that plainly rather than implying otherwise.",
        "A few things were deliberately left out. Receipt scanning, photographing a grocery receipt to auto-populate the pantry, was explored early but cut: it would have added meaningful complexity around recognising products, quantities and expiry dates without being essential to proving the core loop.",
        "I also caught a gap between Home and Profile during this process, they were nearly identical in an earlier pass, both showing pantry status. I redesigned Profile around account and household management instead, so the two screens now answer genuinely different questions.",
      ],
    },
    {
      n: "Outcome",
      title: "Decisions as the evidence",
      paras: [],
      rows: [
        { k: "For the product", v: "PantryPal moved from a single-user pantry tracker concept to a connected, shareable system with a defensible reason for each major feature to exist, nothing here is included just because competitor apps have it." },
        { k: "For me", v: "Working solo across the full loop, from combining three habits into one data model to catching and fixing my own IA gap between Home and Profile, was a real test of scoping discipline without a team to catch blind spots." },
        { k: "Proof", v: "There's no usage data or testing feedback yet, since this hasn't shipped. The evidence is in the decisions themselves: what was combined, what was split into two flows, what was left out, and why." },
        { k: "Status", v: "Prototype, ready for usability testing as a next step." },
      ],
    },
    {
      n: "What's next",
      title: "A discussion guide, not more screens",
      paras: ["The honest next step is usability testing, so I put together a guide to run with 4–6 people, about 30 minutes each."],
      rows: [
        { k: "Current habits", v: "How do you keep track of what's in your fridge or pantry? When did you last throw something away because it expired unnoticed? Do you share shopping or cooking with anyone, and how does that coordination happen today?" },
        { k: "The core loop", v: "Shown Home + Pantry: what do you think this app is for? What would you expect Add Item to do? Does Expiring Soon give you enough to act on?" },
        { k: "Two entry flows", v: "Shown Quick Add vs. the full form: after a normal grocery trip, which would you reach for first? Is anything missing from the quick version that would make you switch?" },
        { k: "Sharing", v: "Would you want to know if someone else added or removed pantry items? Does the permission split match how you'd want to share this with people you live with?" },
        { k: "Wrap-up", v: "What would make you stop using this after a week? Was anything missing that you expected to see?" },
      ],
    },
    {
      n: "Reflection",
      title: "The lesson was scope discipline",
      paras: [
        "The most useful lesson from this project wasn't about any single screen; it was about scope. Receipt scanning, more complex recipe recommendation logic and a fuller notification system were all things I could have added. Cutting them kept the project focused on proving one thing well: that pantry, shopping and meal planning genuinely work better as one connected system than as three separate habits.",
        "If I were to take this further, the next step is usability testing with a real household, not more screens. The riskiest untested assumption is whether people will keep pantry data current enough for the rest of the app to be useful, and that's something no amount of additional design can answer on its own.",
      ],
    },
  ],
  finalShots: {
    kind: "group",
    itemSize: "clamp(130px,17vw,215px)",
    shots: [
      shot("Home screen.png", "Home"),
      shot("Pantry.png", "Pantry"),
      shot("Meal plan - agenda, waste-first.png", "Meal plan"),
      shot("Empty state - grocery list, with suggestions.png", "Grocery list"),
    ],
    caption: "A connected loop, track, plan, shop, cook, ready to test with real households next.",
  },
  nextProject: { title: "TripWise", href: "/work/tripwise" },
};
