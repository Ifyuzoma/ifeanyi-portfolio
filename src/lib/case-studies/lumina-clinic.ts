import type { CaseStudyData } from "@/lib/types";

const U = "/uploads/div/";
const ph = (file: string, label: string) => ({ src: U + file, label });
const wd = (file: string, label: string) => ({ src: U + file, label });

const S = {
  profile: "div-7b4f0f3c.png",
  alerts: "div-1-fa56c638.png",
  payments: "div-2-8fb97199.png",
  history: "div-3-9d9d5f24.png",
  chat: "div-4-05ab8a4c.png",
  postVisit: "div-5-9dd1873e.png",
  dayOf: "div-6-95c8a3be.png",
  cancel: "div-7-81b7e756.png",
  move: "div-8-7ab52432.png",
  apptDetail: "div-9-f8c7278e.png",
  apptList: "div-10-6618c49f.png",
  booked: "div-11-6c9a3ef8.png",
  review: "div-12-4bdf3431.png",
  time: "div-13-a041ba7b.png",
  practitioner: "div-14-4824c58f.png",
  service: "div-15-b40ff477.png",
  home: "div-16-eb6e4bd2.png",
  prefs: "div-17-3828038d.png",
  code: "div-18-ced97168.png",
  splash: "div-19-54c3614e.png",
  states: "dv-card.png",
  assistant: "dv-card-1.png",
  notifications: "dv-card-2.png",
  help: "dv-card-3.png",
  settings: "dv-card-4.png",
  report: "dv-card-5.png",
  stock: "dv-card-6.png",
  payment: "dv-card-7.png",
  employee: "dv-card-8.png",
  newAppt: "dv-card-9.png",
  client: "dv-card-10.png",
  overview: "dv-card-11.png",
  signIn: "dv-card-12.png",
};

export const heroShots = [ph(S.alerts, "Alerts"), ph(S.home, "Home"), ph(S.dayOf, "Day of the visit")];

export const luminaClinic: CaseStudyData = {
  slug: "lumina-clinic",
  tags: ["Lumina Clinic", "Mobile app", "Web dashboard", "Solo", "In development"],
  title: "Designing both sides of a booking relationship.",
  dek: "I designed Lumina Clinic solo: a two-sided booking platform for aesthetics and wellness clinics, built to fix a real gap I saw in Toronto's clinic booking systems. It covers the client-facing app and the business-side dashboard with an AI scheduling assistant.",
  facts: [
    { k: "Role", v: "Solo product designer, end to end on both sides" },
    { k: "Product", v: "Two-sided booking platform for aesthetics and wellness clinics" },
    { k: "Users", v: "Clients booking treatments, and the staff and owners running the clinic" },
    { k: "Platforms", v: "Mobile client app, web business dashboard" },
    { k: "Status", v: "In development. No public release, no user testing yet" },
  ],
  chapters: [
    {
      n: "Context",
      title: "Booking tools that only solve half the problem",
      paras: [
        "Toronto has plenty of aesthetics and wellness clinics, but the booking systems behind them tend to be split in an unhelpful way. Either a convenient client-facing app that gives clinic staff little real control, or practice-management software built for staff that treats the client experience as an afterthought. Neither side gets designed with the other genuinely in mind.",
        "Picture a clinic that loses a Friday afternoon slot to a late cancellation while eleven people sit on a waitlist for that exact treatment, and nobody closes the gap in time. Or a client who is unsure whether their $50 deposit is refundable, discovers a package of prepaid sessions is about to expire, or simply forgets to rebook the appointment their practitioner actually recommended. These are the same underlying problem, a gap between what a clinic could offer and what a client is actually shown, seen from two different sides.",
      ],
      media: { kind: "wide", shots: [wd(S.states, "Business dashboard: empty and error states")], caption: "Unused capacity on one side, an unclaimed waitlist on the other. The same gap, seen from the business side." },
    },
    {
      n: "The challenge",
      title: "A gap in the market, not a client brief",
      paras: [
        "This was a new, solo build aimed directly at a gap I saw in how Toronto clinics handle booking. Not a rebrand, and not a client brief, but building the product I thought this market was missing.",
      ],
      callout: {
        label: "Core question",
        text: "How do you design a booking platform where the client side and the business side reinforce each other, so unused capacity, unpaid balances and expiring packages get surfaced to the right person at the right time on both ends of the relationship?",
      },
      media: { kind: "group", bordered: false, shots: [ph(S.alerts, "Client alerts, waitlist and confirmations"), ph(S.apptList, "Upcoming, past and waitlisted")], caption: "The client-facing half of the same coordination problem the dashboard solves from the other side." },
    },
    {
      n: "My role",
      title: "Solo across both products, and honest about the research",
      paras: [
        "I designed Lumina Clinic solo, end to end: every screen on both the client app and the business dashboard, including the AI assistant's permission model.",
        "Because this is a personal project built to address a gap I identified directly in the Toronto market, the direction came from that observation rather than a formal brief or user research. There is no user testing yet, since the product is still in development, and I am stating that plainly rather than implying otherwise.",
      ],
      media: { kind: "wide", shots: [wd(S.overview, "Business dashboard overview")], caption: "A full practice-management surface: clients, appointments, staff, payments and stock, designed solo alongside the client app." },
    },
    {
      n: "Strategy",
      title: "Two views of one relationship",
      paras: [
        "Hypothesis: if the client app and the business dashboard were designed as two views of the same underlying relationship, bookings, payments, waitlists and packages, rather than as separate products, both a clinic and its clients would get fewer missed opportunities. Fewer empty slots, fewer expiring credits, fewer forgotten rebookings.",
        "The guiding principle was continuity across both sides. Anything that mattered to a client, a waitlist spot or a package expiring, needed a clear counterpart on the business side: who to offer that slot to, when a package needs a nudge. And anything the business automated, such as an assistant chasing a confirmation, needed to be visible and explicable to the client receiving it.",
      ],
      media: { kind: "group", bordered: false, shots: [ph(S.splash, "Ten-second sign-in"), ph(S.code, "Recognised from a past call"), ph(S.prefs, "Days, times and how to reach you")], caption: "The client side opens with preferences the business side can act on later." },
    },
  ],
  decisionsHeading: "The five decisions",
  decisions: [
    {
      n: "01",
      title: "One alerts feed instead of scattered notifications",
      rows: [
        { k: "Situation", v: "A client's relationship with a clinic involves several kinds of time-sensitive information: appointment confirmations, waitlist openings, expiring package credits, payment receipts. Most apps split these across separate screens or notification types." },
        { k: "Decision", v: "I designed a single, prioritised Alerts feed as the client app's home screen, combining confirmation requests, waitlist offers, package status and payment receipts into one chronological stream, each with its own direct action: Confirm, Take it, Pass." },
        { k: "Why", v: "A client should not have to check four different places to know what needs their attention. A unified feed, ordered by urgency and recency, means the most time-sensitive item, a same-day confirmation or a waitlist spot about to close, is never buried behind less urgent information." },
        { k: "Change", v: "The client's home screen became a single source of what needs my attention, rather than a menu of separate features to check individually." },
      ],
      media: { kind: "group", bordered: false, shots: [ph(S.alerts, "Alerts: confirm, take it, pass"), ph(S.home, "Home: next visit, package, membership")], caption: "Every time-sensitive moment in one place, each with a direct action." },
    },
    {
      n: "02",
      title: "Cancellation flows that default to rescheduling",
      rows: [
        { k: "Situation", v: "A cancellation is a lost booking for the clinic and often an awkward deposit conversation for the client. Most apps treat it as a single, final action." },
        { k: "Decision", v: "I designed the cancellation flow to lead with a reschedule offer, Move it two weeks instead, generated automatically, with outright cancellation available but visually secondary, alongside an upfront statement of the deposit refund policy based on how much notice was given." },
        { k: "Why", v: "Most cancellations are not really I never want this appointment. They are not this exact time. Leading with a concrete, one-tap reschedule addresses the client's actual need in most cases, and the transparent refund policy removes the uncertainty that might otherwise make someone hesitate to cancel honestly in the first place." },
        { k: "Change", v: "A cancellation stopped being purely a lost booking and became, more often, a rescheduled one, with the deposit policy handled honestly either way." },
      ],
      media: { kind: "group", bordered: false, shots: [ph(S.cancel, "Reschedule offered before cancelling"), ph(S.move, "Deposit moves with the appointment"), ph(S.chat, "Or just ask, in plain language")], caption: "Reschedule first, cancellation still available, refund policy stated upfront either way." },
    },
    {
      n: "03",
      title: "Feedback, rebooking and payment on one screen",
      rows: [
        { k: "Situation", v: "After an appointment a client typically has to handle feedback, paying any remaining balance, and rebooking as three separate interactions. Three separate reasons to open the app, or three separate reasons not to." },
        { k: "Decision", v: "I designed a single post-visit screen combining a private satisfaction rating, an optional note, a clear balance breakdown of treatment cost, member discount and deposit already paid, a practitioner-suggested rebooking interval, and the payment action." },
        { k: "Why", v: "Bundling these means the client resolves the entire post-appointment relationship in one sitting, right when the visit is freshest in their mind, instead of leaving balance payment or rebooking as a task to remember later and possibly forget." },
        { k: "Change", v: "Post-visit follow-through became a single completed action instead of three separate ones a client could drop at any point." },
      ],
      media: { kind: "group", bordered: false, shots: [ph(S.postVisit, "How was today?"), ph(S.payments, "One balance to settle"), ph(S.history, "Visits, spend and notes over time")], caption: "Feedback, balance and the next booking, resolved together while it is still top of mind." },
    },
    {
      n: "04",
      title: "An assistant with visible permission boundaries",
      rows: [
        { k: "Situation", v: "An AI assistant that can act autonomously on scheduling, payments or client communication is genuinely useful, but also genuinely risky if a clinic cannot see or control exactly what it is allowed to do." },
        { k: "Decision", v: "I designed a dedicated Assistant rules panel where staff toggle specific autonomous actions individually: book into open slots, reschedule on request, take deposits, chase unconfirmed clients, offer the waitlist a cancelled slot. Alongside it sits an explicit Never do this guardrail list and a stated escalation point after two failed attempts." },
        { k: "Why", v: "Trust in an assistant does not come from it being capable. It comes from a business being able to see and set exactly where its autonomy ends. Naming specific, real risks in the guardrail list, rather than a generic disclaimer, shows the assistant was designed around actual failure modes a clinic would worry about." },
        { k: "Change", v: "The assistant went from an opaque automation feature to something a clinic owner could configure and trust deliberately, action by action." },
      ],
      media: { kind: "wide", shots: [wd(S.settings, "Assistant rules: what LC may do on its own"), wd(S.assistant, "The assistant working inside the calendar"), wd(S.notifications, "Needs you, and LC did this, kept separate")], caption: "Autonomy, but only exactly as much as the clinic explicitly grants, and always visible after the fact." },
    },
    {
      n: "05",
      title: "Empty and error states that keep working",
      rows: [
        { k: "Situation", v: "Empty states, no clients yet or an unbooked day, and error states such as a lost connection are often treated as dead ends: a blank message with nothing useful to do next." },
        { k: "Decision", v: "I designed empty states that propose a specific next action tied to real context, importing a client spreadsheet with automatic deduplication, or opening unused Sunday hours directly to the eleven people already on a waitlist. The connection-loss state explicitly confirms nothing was lost, changes will sync, and the clinic can keep working offline meanwhile." },
        { k: "Why", v: "A clinic running day-to-day operations cannot afford a dead end, whether that is an empty calendar or a lost connection. Turning both into a specific, actionable next step keeps the business moving instead of just informing them something is empty or broken." },
        { k: "Change", v: "Empty and error states became functional parts of the product instead of the parts that quietly did nothing." },
      ],
      media: { kind: "wide", shots: [wd(S.states, "Empty, loading, thinking and offline, side by side")], caption: "Even the dead ends point to a next action." },
    },
  ],
  closers: [
    {
      n: "Implementation",
      title: "Both sides, kept in step",
      paras: [
        "As a solo project I designed every part of Lumina Clinic myself: the client app and the full business dashboard, including the assistant's permission model.",
        "Keeping both sides consistent with each other was more direct to manage solo, since every client-facing feature could be checked against its business-side counterpart without coordinating across a handoff. The booking flow a client walks through is the same appointment a staff member creates in three steps from the calendar, and the flags and package credits on a client record are the same ones surfaced in the app.",
      ],
      rows: [
        { k: "Client side", v: "Sign-in, preferences, booking, day-of check-in, post-visit, payments, history, alerts, profile" },
        { k: "Business side", v: "Overview, calendar, client records, appointment creation, staff and certifications, payments, stock, reporting, help, settings" },
        { k: "Shared spine", v: "One appointment, one client record, one set of package credits and flags, read from both sides" },
      ],
    },
    {
      n: "Status",
      title: "In development",
      paras: [
        "Lumina Clinic is currently in development. There is no public release yet, and no outcome or usage data to report at this stage. The evidence here is in the decisions themselves: what was combined, what was made secondary, what the assistant is not allowed to do, and why.",
      ],
    },
    {
      n: "Reflection",
      title: "Two audiences that affect each other",
      paras: [
        "The clearest idea shaping this project is that a booking platform's two audiences, the client and the clinic, are usually designed as if they do not affect each other, when in practice every gap on one side, an empty slot or an unconfirmed appointment, is a missed opportunity on the other, a waitlisted client or a lost booking. Designing both sides together, solo, made it possible to trace that connection directly instead of guessing at it across a handoff.",
        "The assistant's permission model in particular came out of thinking about trust from the business's side first. A clinic will not hand over scheduling autonomy to something it cannot see or limit, so the guardrails needed to be as concrete and visible as the automation itself.",
      ],
    },
  ],
  finalShots: {
    kind: "wide",
    shots: [wd(S.client, "Client record: history, flags, consents, credits"), wd(S.report, "Where enquiries land, and what the assistant recovered")],
    caption: "Still in development: two sides of one booking relationship, designed together from the start.",
  },
  nextProject: { label: "Next", title: "Back to all work", href: "/#work" },
};
