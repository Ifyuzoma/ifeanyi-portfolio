import type { CaseStudyData } from "@/lib/types";

const U = "/uploads/";
const shot = (file: string, label: string, off?: string) => ({
  src: U + file,
  label,
  imgStyle: off ? { transform: `translateY(${off})` } : undefined,
});

export const ceoCreative: CaseStudyData = {
  slug: "ceo-creative",
  tags: ["The CEO Creative", "Web design", "E-commerce UX", "Shipped"],
  title: "Rebuilding a storefront around what it's actually selling.",
  dek: "As Product Designer at The CEO Creative, I led the homepage redesign that turned a cluttered, hard-to-navigate storefront into a business organized around clear service categories and its core NET30 financing offer.",
  liveUrl: "https://theceocreative.com/",
  facts: [
    { k: "Company", v: "The CEO Creative" },
    { k: "Role", v: "Product Designer, UX + UI" },
    { k: "Team", v: "Designer (me), Marketing, Copywriter, PM, CEO, Developer" },
    { k: "Users", v: "Small businesses buying supplies, merch and printing" },
    { k: "Platform", v: "Responsive web, desktop + mobile" },
    { k: "Status", v: "Shipped and live" },
  ],
  chapters: [
    {
      n: "Context",
      title: "A wide catalog, all shouting at once",
      paras: [
        "The CEO Creative isn't a single-category store. It spans apparel, drinkware, office supplies, printing, tech accessories and customizable branded merch, plus web design services and a NET30 buy-now-pay-later program for businesses. That range is a strength, but it turns into visual noise the moment the homepage stops organizing it.",
        "Picture a small business owner landing on the site looking for branded T-shirts for her team, or trying to work out whether she qualifies for NET30. If the homepage greets her with a dozen competing promotional banners of similar size and weight, she has to work out what this business actually does and whether it's for her, and she may leave before finding out.",
      ],
      media: {
        kind: "cards",
        shots: [shot("old-homepage.png", "Before — old homepage, banner grid"), shot("New CEO homepage.jpg", "After — shipped homepage")],
        caption: "Before: every product line shouting at once, with nothing telling the visitor where to start. After: a clear order of operations.",
      },
    },
    {
      n: "The challenge",
      title: "A business problem, not a visual refresh",
      paras: [
        "Sales were low, and the team was hearing directly that people found the old site hard to navigate. That gave the project a clear bar: this wasn't a restyle, it was a fix for a business problem.",
      ],
      callout: {
        label: "Core question",
        text: "How do you organize a wide, multi-category catalog, plus a financing product central to the business, so a visitor understands what's here and what to do next, fast?",
      },
      media: {
        kind: "cards",
        shots: [shot("old-homepage.png", "Old homepage — top section, competing banners")],
        caption: "The starting point: low sales and real customer confusion, not just an outdated look. NET30 sat in a small gray block near the footer.",
      },
    },
    {
      n: "My role",
      title: "Design lead in a cross-functional team",
      paras: [
        "I was the Product Designer on this project, working with Marketing, a copywriter, a PM, the CEO and a developer. I owned the UX and UI of the homepage redesign: restructuring the information architecture, deciding what got visual priority, and designing the new layout.",
        "Marketing and the copywriter shaped messaging, the PM managed scope, the CEO weighed in directly given how central NET30 is to the business, and the developer implemented the build.",
      ],
      media: {
        kind: "cards",
        shots: [shot("Office supplies.png", "Office Supplies"), shot("Printing services.png", "Printing Services")],
        caption: "Turning a wide catalog into a small number of clear, named entry points.",
      },
    },
    {
      n: "Strategy",
      title: "Lead with the offer, group the rest",
      paras: [
        "Hypothesis: if the homepage organized the catalog around clear categories and led with NET30 instead of burying it, more visitors would find what they came for and more businesses would apply for financing, directly addressing the low sales and navigation complaints driving the project.",
        "The guiding principle was to design around what the business actually needed visitors to understand first, the range of what's sold and the NET30 offer that sets it apart, rather than treating every promotion as equally important.",
      ],
      callout: { label: "The order", text: "What is this business → what can I buy → why should I trust it → how do I get started." },
    },
  ],
  decisionsHeading: "The four decisions",
  decisions: [
    {
      n: "01",
      title: "Navigation reorganized around named categories",
      rows: [
        { k: "Situation", v: "The old homepage presented products through a grid of similarly weighted promotional banners, diffusers, electronics, branded merch, printing, with no clear hierarchy or entry point for someone who knew roughly what they wanted." },
        { k: "Decision", v: "I restructured the homepage around named, icon-led categories: Apparel, Drinkware, Office Essentials, Printing Services, Phone Accessories and Customizable Products, each with its own section and clear sub-links." },
        { k: "Why", v: "A visitor who knows they need branded apparel shouldn't have to scan a dozen unrelated banners to find it. Naming and grouping categories explicitly turns browsing from a search into a direct path." },
        { k: "Change", v: "The homepage went from a flat grid of promotions to a structured catalog a visitor can scan and navigate by their actual need." },
      ],
      media: {
        kind: "cards",
        shots: [shot("old-homepage.png", "Before — undifferentiated banner grid"), shot("Customizable apparel.png", "After — named category with sub-links")],
        caption: "Named categories replaced a wall of undifferentiated banners, and each one carries its own sub-category row.",
      },
    },
    {
      n: "02",
      title: "NET30 moved from a small banner to the hero",
      rows: [
        { k: "Situation", v: "In the old design NET30, the business's core financing offer, appeared as one small banner among many, no more prominent than a diffuser collection or an electronics sale." },
        { k: "Decision", v: 'I redesigned the hero to lead with NET30 directly: "We Make Shopping Easy For You", paired with a clear apply-for-NET30 call to action, positioned as the first thing any visitor sees.' },
        { k: "Why", v: "NET30 isn't just another promotion, it's a differentiator that changes how a business customer can buy. Burying it at the same visual weight as a product sale undersold the thing most likely to convert a hesitant B2B buyer." },
        { k: "Change", v: "NET30 became the first message on the page instead of one of many, giving it visual priority that matched its actual importance to the business." },
      ],
      media: {
        kind: "cards",
        shots: [shot("old-homepage.png", "Before — NET30 as a small block low on the page", "-75%"), shot("New CEO homepage.jpg", "After — NET30 in the hero")],
        caption: "The business's strongest offer went from a gray box above the footer to the first thing anyone sees.",
      },
    },
    {
      n: "03",
      title: "Trust signals that didn't exist before",
      rows: [
        { k: "Situation", v: "The old homepage had no testimonials, no social proof and nothing that reassured a new visitor this was a business other people trusted." },
        { k: "Decision", v: "I added a client testimonials section with named clients and photos, plus a video section showcasing the company's service and printing work." },
        { k: "Why", v: "For a B2B buyer considering NET30 financing or a first bulk order, trust matters more than product photography. Real client names and a video of the actual service close a gap that product grids alone can't." },
        { k: "Change", v: "The homepage went from a pure product catalog to one that also makes the case that this is a business worth trusting." },
      ],
      media: {
        kind: "cards",
        shots: [shot("Website & Design Services.png", "Services, where trust matters most"), shot("Printing services.png", "Printing, the work shown in video")],
        caption: "Social proof and service evidence, neither of which existed on the old homepage.",
      },
    },
    {
      n: "04",
      title: "Fewer, clearer sections",
      rows: [
        { k: "Situation", v: "The old homepage stacked many small promotional sections in a row, cleaning supplies, business cards, bathroom essentials, best offers, each fighting for attention with no clear reading order." },
        { k: "Decision", v: "I consolidated the page into fewer, more clearly separated sections: hero, NET30 custom products by category, a benefits explainer for NET30, testimonials and a blog preview, each with visual breathing room and a clear purpose." },
        { k: "Why", v: "A homepage that presents everything at once, with equal weight, effectively presents nothing. Reducing the number of competing sections gave each one enough space to communicate before the next started." },
        { k: "Change", v: "The page went from a dense layout that only rewarded effort to one with a clear reading order, from what is this business, to why you should trust it, to how to get started." },
      ],
      media: {
        kind: "cards",
        shots: [shot("old-homepage.png", "Before — many small competing sections", "-42%"), shot("New CEO homepage.jpg", "After — fewer sections, clear reading order")],
        caption: "Same amount of content, organized into a page that guides the visitor instead of flooding them.",
      },
    },
  ],
  closers: [
    {
      n: "Implementation",
      title: "Shipped with the whole team",
      paras: [
        "The developer implemented the new structure, Marketing and the copywriter reworked messaging to match the new hierarchy, the PM managed scope and timeline, and the CEO was directly involved given how central NET30 is to the business model.",
        "This was a cross-functional effort grounded in a stated business problem, low sales and poor navigation, not a redesign for its own sake. The same reorganization carried through to mobile, where navigation problems are usually worse.",
      ],
    },
    {
      n: "Outcome",
      title: "Higher conversion, more NET30 signups",
      paras: [],
      rows: [
        { k: "For the business", v: "The redesign led to higher conversion and more businesses registering for NET30, the two outcomes the project was meant to move." },
        { k: "For the client", v: "The team reported that customers could now shop without the friction and confusion the old site caused." },
        { k: "Proof", v: "I don't have access to the specific conversion or registration figures, that data sits with the business, so I'm stating the outcome directionally rather than with numbers I can't verify." },
        { k: "Status", v: "Live in production at theceocreative.com." },
      ],
    },
    {
      n: "Reflection",
      title: "Start with the problem, not the style",
      paras: [
        "The clearest lesson was that a homepage redesign for a business problem needs to start with the problem, not the visual style. Low sales and navigation complaints pointed directly at information architecture and hierarchy, so the highest-leverage decisions here were structural, what gets grouped and what gets top billing, rather than decorative.",
        "If I were to take this further, I'd want conversion and NET30 registration data broken down by section, to know which of the four decisions moved the needle most rather than crediting the redesign as a whole.",
      ],
    },
  ],
  finalShots: {
    kind: "cards",
    shots: [
      shot("Accessories.png", "Accessories"),
      shot("customizable Embroidery.png", "Embroidery"),
      shot("Fitness & Health.png", "Fitness & Health"),
      shot("Phone Accessories.png", "Phone Accessories"),
    ],
    caption: "The structure carried across the catalog: every category page inherits the same navigation and sub-category pattern.",
  },
  nextProject: { title: "PantryPal", href: "/work/pantrypal" },
};
