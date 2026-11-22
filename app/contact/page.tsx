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
    </div>
  );
}
