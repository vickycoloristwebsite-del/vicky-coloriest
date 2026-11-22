export default function ContactPage() {
  const whatsappMessage = encodeURIComponent(
    "Hi Vicky, I'm reaching out regarding color grading for a project."
  );

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
              href="mailto:Vickyk3788@gmail.com"
              className="text-[#d1d5d7] hover:text-white underline transition-colors"
            >
              Vickyk3788@gmail.com
            </a>
          </p>
          <p>
            Phone / WhatsApp -{" "}
            <a
              href={`https://wa.me/919440274673?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d1d5d7] hover:text-white underline transition-colors"
            >
              +91 94402 74673
            </a>
          </p>
          <p>Available to color grade remotely worldwide.</p>
          <p>Need color for a project? Send a message on WhatsApp!</p>
        </div>
      </div>
    </div>
  );
}
