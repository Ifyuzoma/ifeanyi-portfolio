import type { CaseStudyData } from "@/lib/types";

const SNAP = "/uploads/fullpage_snapshot_spacemonline_com_2026-09-06-07-31-40.png";
const crop = (label: string, off: string) => ({
  src: SNAP,
  label,
  imgStyle: { transform: `translateY(${off})` },
});

export const spacemOnline: CaseStudyData = {
  slug: "spacem-online",
  tags: ["Space'M Online", "Web design", "B2B marketing site", "Shipped"],
  title: "Designing an SEO agency site that proves its own pitch.",
  dek: "As Product Designer on a six-month freelance team engagement, I worked on the redesign of Space'M Online's website, an international SEO agency site built to prove its results credibly enough to attract larger, more serious clients.",
  liveUrl: "https://spacemonline.com/",
  facts: [
    { k: "Engagement", v: "Freelance, team effort, six months" },
    { k: "Role", v: "Product Designer, owning the product design work" },
    { k: "Product", v: "spacemonline.com" },
    { k: "Users", v: "Established, growth-stage businesses evaluating SEO agencies, often burned before" },
    { k: "Scope", v: "Site redesign: homepage, case results, process, pricing framing" },
    { k: "Status", v: "Shipped and live, 2026" },
  ],
  chapters: [
    {
      n: "Context",
      title: "A category full of overpromising",
      paras: [
        "SEO is a category full of agencies that overpromise and underdeliver, and Space'M Online's own copy names that directly: done with overpromising SEO agencies that don't get you results? That is a hard positioning to earn. An SEO agency's website is itself a test of whether they can practice what they sell, and the people evaluating them are often already skeptical from past experience.",
        "Picture a business owner who has paid for SEO or PPC before and gotten mediocre results despite big promises. She lands on this site specifically looking for a reason to believe this agency is different: not more claims, but something she can actually verify.",
      ],
      media: {
        kind: "cards",
        shots: [crop("Naming the skepticism directly", "-40%"), crop("Client results as specific figures", "-12%")],
        caption: "Naming the exact skepticism a prospective client already has, instead of ignoring it.",
      },
    },
    {
      n: "The challenge",
      title: "Proof, not more marketing language",
      paras: [
        "This was a redesign with a clear intent: evolve the existing site so it read as credible enough to win larger, more serious clients, the kind of business that has been disappointed by agencies before and needs real proof.",
      ],
      callout: {
        label: "Core question",
        text: "How do you design a marketing site for a marketing agency in a way that itself demonstrates the rigor and results the agency is trying to sell?",
      },
      media: {
        kind: "cards",
        shots: [crop("VloerenBaas revenue progression across three years", "-12%")],
        caption: "The core proof problem: an agency claiming results needs to show them, not just state them.",
      },
    },
    {
      n: "My role",
      title: "Structure carrying the proof",
      paras: [
        "I was the Product Designer on this project, working as part of a team on a freelance, six-month engagement. Copy and business direction came from the client's brief.",
        "My focus was on how the site's structure and layout could carry credible proof, case results, client scale, process clarity, rather than relying on copy alone to do the persuading.",
      ],
      media: {
        kind: "cards",
        shots: [crop("A message from our founder", "-80%")],
        caption: "Working within an existing brand voice and business positioning, redesigning around it rather than replacing it.",
      },
    },
    {
      n: "Strategy",
      title: "Evidence over assertion",
      paras: [
        "Hypothesis: if the site led with verifiable, specific proof, real client numbers, clickable full results, a clear process, instead of persuasive claims alone, it would read as credible to exactly the skeptical, previously disappointed buyer the agency was trying to reach.",
        "The guiding principle was evidence over assertion. Wherever the old site made a claim, the redesign's job was to find a way to show it instead.",
      ],
      media: {
        kind: "cards",
        shots: [crop("Client results, checkable numbers", "-21%"), crop("Client logo wall, breadth of scale", "-33%")],
        caption: "Proof structured to be checked, not just read.",
      },
    },
  ],
  decisionsHeading: "The five decisions",
  decisions: [
    {
      n: "01",
      title: "Client results as real, specific numbers",
      rows: [
        { k: "Situation", v: "Most agency sites default to vague outcome language, we drive results, proven strategies, that a skeptical buyer has learned to discount." },
        { k: "Decision", v: "I structured the results sections around specific, named client cases with real year-over-year figures, one client's revenue shown growing from roughly €5,540K to €20M to €40M across three years alongside organic visitor counts, paired with clickable, full-size result screenshots a visitor could inspect directly." },
        { k: "Why", v: "A specific number tied to a named client is far harder to dismiss than a general claim, and letting visitors click through to the full-size proof signals nothing is being hidden or exaggerated, exactly the opposite of the overpromise experience the site's own copy calls out." },
        { k: "Change", v: "The results section moved from something a skeptical visitor might scroll past to something built to be actually checked." },
      ],
      media: {
        kind: "cards",
        shots: [crop("VloerenBaas: 400K to 4 million in three years", "-12%"), crop("Nr1elektrischestep: ranked #1 in three months", "-21%")],
        caption: "Proof designed to be inspected, not just claimed.",
      },
    },
    {
      n: "02",
      title: "A numbered three-step process to de-risk starting",
      rows: [
        { k: "Situation", v: "Hiring an SEO agency is a significant, often multi-month commitment, and a business that has been burned before is likely hesitant to commit to another unclear engagement." },
        { k: "Decision", v: "I designed a clear, numbered three-step process, receive a growth roadmap, schedule a discovery call, start getting more leads, laid out before any pricing or contract commitment is mentioned." },
        { k: "Why", v: "Breaking the engagement into small, sequential, low-commitment steps makes the first move feel safe, rather than asking a skeptical visitor to commit to a six-month contract on the strength of a homepage alone." },
        { k: "Change", v: "The path from interested to committed became a visible sequence instead of a single, high-stakes leap." },
      ],
      media: {
        kind: "cards",
        shots: [crop("Ready for more leads: the three-step on-ramp", "-67%")],
        caption: "A visible, low-risk on-ramp before any real commitment is asked for.",
      },
    },
    {
      n: "03",
      title: "The six-month minimum stated upfront",
      rows: [
        { k: "Situation", v: "A minimum contract term is a real constraint that could easily be buried in fine print or a sales call, to avoid scaring off visitors early." },
        { k: "Decision", v: "I kept the six-month minimum contract requirement visible directly alongside the process and pricing information, framed with the reasoning behind it, SEO strategies need time to work, rather than tucked away." },
        { k: "Why", v: "For an agency positioning itself against overpromising competitors, hiding a real constraint would undercut that positioning immediately. Stating it upfront, with reasoning, filters for clients who are ready for a real engagement and builds trust with the ones who stay." },
        { k: "Change", v: "A potential objection became a stated, explained expectation instead of a surprise a prospect might discover later and resent." },
      ],
      media: {
        kind: "cards",
        shots: [crop("Pricing panel with the minimum term note", "-70.5%")],
        caption: "An honest constraint, stated plainly rather than hidden.",
      },
    },
    {
      n: "04",
      title: "A confident, exclusivity-driven founder voice",
      rows: [
        { k: "Situation", v: "Generic we care about your success agency copy is easy to skim past and does nothing to signal this agency is different from the last one a prospect worked with." },
        { k: "Decision", v: "I gave the founder's message section direct visual and structural prominence, carrying a confident, exclusivity-driven voice, positioning the agency around elite online businesses and growth architects rather than generic reassurance." },
        { k: "Why", v: "A business already at seven or eight figures that has been let down by agencies before responds more to confident specificity about who the agency serves than to broad reassurance meant to appeal to everyone. Narrowing the positioning, visibly, signals the agency knows exactly who it is for." },
        { k: "Change", v: "The founder's voice became a positioning tool with real visual weight, rather than a generic bio section." },
      ],
      media: {
        kind: "cards",
        shots: [crop("Founder message with photo and signature", "-80%"), crop("Offices in Eindhoven and Barcelona", "-74%")],
        caption: "A deliberately narrow, confident voice, not a message trying to appeal to everyone.",
      },
    },
    {
      n: "05",
      title: "A logo wall paired with an ongoing content hub",
      rows: [
        { k: "Situation", v: "A prospective client wants to know the agency has real scale and expertise, not just one or two good case studies." },
        { k: "Decision", v: "I structured a large client logo wall alongside an extensive expert guides content section covering SEO strategy across many industries and regions, giving the site breadth of proof beyond the two or three detailed cases." },
        { k: "Why", v: "The detailed case studies prove depth on a few accounts; the logo wall and content hub prove breadth, that this isn't a one-off success story but a pattern across many clients and topics, which matters to a buyer evaluating scale and consistency." },
        { k: "Change", v: "The site carried two different kinds of proof simultaneously: deep, verifiable case detail, and broad evidence of scale and expertise." },
      ],
      media: {
        kind: "cards",
        shots: [crop("Effective solutions for ambitious clients: logo wall", "-33%"), crop("Service and region coverage across the site", "-50%")],
        caption: "Depth from the case studies, breadth from the logo wall and content hub.",
      },
    },
  ],
  closers: [
    {
      n: "Implementation",
      title: "A redesign, not a rebuild",
      paras: [
        "This was a team-based freelance engagement rather than a solo build. I worked within that team as the Product Designer, with business direction and copy coming from the client's brief.",
        "As a redesign rather than a ground-up rebuild, the work involved evolving what already existed toward stronger proof and clarity rather than replacing the site's structure outright.",
      ],
    },
    {
      n: "Outcome",
      title: "Live, with the honest caveat",
      paras: [],
      rows: [
        { k: "Shipped", v: "Live in production at spacemonline.com." },
        { k: "Proof", v: "I don't have visibility into this project's performance. Client results and agency performance data are sensitive, and I am not presenting a result I can't see or verify." },
        { k: "For me", v: "This project sharpened a specific skill: designing proof, not just claims. The core design problem wasn't visual polish, it was structuring real client data so a skeptical visitor could verify it themselves, which is a different discipline than typical marketing-site design." },
      ],
    },
    {
      n: "Reflection",
      title: "Built to survive skepticism",
      paras: [
        "The clearest lesson from this project was that a marketing site for a results-driven business has to survive skepticism, not just capture attention. Every major decision here, specific client numbers over vague claims, a visible process, an upfront contract term, a narrow positioning, was really the same move applied in different places: replace something a skeptical visitor would question with something they could verify or understand plainly.",
        "Without outcome visibility, I can't say how much this redesign actually moved client acquisition. If I were to revisit it, the case-results structure is the piece I would most want real data on, whether visitors were actually clicking through to the full-size proof, or scrolling past it the way they might scroll past a vaguer claim.",
      ],
    },
  ],
  finalShots: {
    kind: "cards",
    shots: [crop("Hero and positioning", "0%"), crop("Client results", "-12%"), crop("Process and pricing", "-67%"), crop("Founder and offices", "-78%")],
    caption: "Two kinds of proof on one page: verifiable client numbers, and breadth across clients, regions and guides.",
  },
  nextProject: { title: "Sticky", href: "/work/sticky" },
};
