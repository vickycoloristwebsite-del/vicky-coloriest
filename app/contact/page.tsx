import ColorComparisonSlider from "@/components/ColorComparisonSlider";

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

export default function ContactPage() {
  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6">
      {/* Contact Header text */}
      <div className="w-full max-w-[800px] mx-auto pt-[5px] pb-[8px] text-[#d1d5d7]">
        <h1 className="text-[26px] font-light leading-[1.2] text-center mb-6 tracking-wide uppercase">
          CONTACT
        </h1>
        <div className="space-y-4 text-[16px] leading-[1.6]">
          <p>
            Email -{" "}
            <a
              href="mailto:tyler.markovich@gmail.com"
              className="text-[#d1d5d7] hover:text-white underline transition-colors"
            >
              tyler.markovich@gmail.com
            </a>
          </p>
          <p>Available to color grade remotely worldwide.</p>
          <p>Need color for a project? Book a call below!</p>
        </div>
      </div>

      {/* Color Grade Comparisons */}
      <div className="w-full space-y-12 my-12 max-w-[1920px] mx-auto">
        <div className="text-center">
          <h2 className="text-sm font-mono tracking-widest text-neutral-400 uppercase">
            Color Grade Comparisons
          </h2>
          <p className="text-xs text-neutral-500 mt-1">
            Drag the slider to compare Log / Raw vs. Graded look
          </p>
        </div>

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
