import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import ScreenReel from "@/components/ScreenReel";

export const metadata: Metadata = {
  title: "PantryPal — Screen reel",
  description: "Flip through the PantryPal prototype screen by screen.",
};

const U = "/uploads/";
const screens = [
  { src: U + "Sign up - matches your Log In.png", label: "Sign up" },
  { src: U + "Sign up - step 2, set up the pantry.png", label: "Set up the pantry" },
  { src: U + "Home screen.png", label: "Home" },
  { src: U + "Pantry.png", label: "Pantry" },
  { src: U + "Add item - quick sheet over pantry.png", label: "Quick add" },
  { src: U + "Add item - full form.png", label: "Full form" },
  { src: U + "Barcode scanner - product found.png", label: "Barcode scan" },
  { src: U + "Item detail - freshness timeline.png", label: "Freshness timeline" },
  { src: U + "Search - filters & sort sheet.png", label: "Search & filters" },
  { src: U + "Empty state - grocery list, with suggestions.png", label: "Grocery list" },
  { src: U + "Meal plan - agenda, waste-first.png", label: "Rescue Plan" },
  { src: U + "Meal plan - week grid.png", label: "Week grid" },
  { src: U + "Cook mode - one step at a time.png", label: "Cook mode" },
  { src: U + "Household - invite code first.png", label: "Invite a household" },
  { src: U + "Household - member list.png", label: "Household members" },
  { src: U + "Notifications - all toggles on one page.png", label: "Notifications" },
];

export default function PantryPalReelPage() {
  return (
    <div className="min-h-screen bg-cream px-5 sm:px-8 md:px-16">
      <PageHeader variant="case" />
      <main className="mx-auto max-w-[1180px] py-10 sm:py-16">
        <div className="mb-8 flex flex-col gap-2">
          <div className="font-mono text-[11px] font-medium tracking-[0.16em] text-muted uppercase">
            PantryPal
          </div>
          <h1 className="text-[length:clamp(28px,4vw,44px)] leading-[1.1] tracking-[-0.03em] font-satoshi font-medium text-ink">
            Screen reel
          </h1>
          <p className="max-w-[60ch] text-[15px] leading-[1.6] text-body">
            Every screen from the prototype, in order. Use the arrows, the dots, or the ← / → keys.
          </p>
        </div>
        <ScreenReel screens={screens} />
      </main>
      <div className="mx-auto max-w-[1180px]">
        <PageFooter />
      </div>
    </div>
  );
}
