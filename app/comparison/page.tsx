import ColorComparisonSlider from "@/components/ColorComparisonSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparison - VIKRAM KUMPATI",
  description: "Color Grade Comparisons by VIKRAM KUMPATI",
};

// All 18 pairs from public/cmparrission/
// x.jpg = Log/Raw (Before)
// x.1.jpg = Graded (After)
const COMPARISONS = Array.from({ length: 18 }, (_, index) => {
  const id = index + 1;
  return {
    id,
    before: `/cmparrission/${id}.jpg`,
    after: `/cmparrission/${id}.1.jpg`,
    title: `Comparison ${String(id).padStart(2, "0")}`,
  };
});

export default function ComparisonPage() {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6">
      {/* Comparison Header text */}
      <div className="w-full max-w-[800px] mx-auto pt-[5px] pb-[8px] text-[#d1d5d7] text-center">
        <h1 className="text-[26px] font-light leading-[1.2] mb-3 tracking-wide uppercase">
          Color Grade Comparison
        </h1>
        <p className="text-xs text-neutral-400 font-mono tracking-widest uppercase">
          Drag the slider to compare Log / Raw vs. Graded look
        </p>
      </div>

      {/* Juxtapose Before / After Color Sliders */}
      <div className="w-full space-y-12 my-10 max-w-[1920px] mx-auto">
        <div className="space-y-10">
          {COMPARISONS.map((item) => (
            <ColorComparisonSlider
              key={item.id}
              beforeImage={item.before}
              afterImage={item.after}
              beforeLabel="Before (Raw / Log)"
              afterLabel="After (Graded)"
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
