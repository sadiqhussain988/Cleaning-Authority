// JobCtaSection.jsx
import React from "react";

const JobCtaSection = () => {
  const handleApply = () => {
    // TODO: replace with your real jobs / apply route
    window.open(
      "https://www.thecleaningauthority.com/careers/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-[#63B000] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Headline */}
        <h2
          className="text-[30px] md:text-[40px] lg:text-[46px] font-extrabold leading-tight tracking-tight text-[#202021]"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Get your weekends back. Join a team now.
        </h2>

        {/* Sub copy */}
        <p
          className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-[#202021]"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="100"
        >
          With reliable hours, weekly pay and a culture that values and rewards
          you, The Cleaning Authority is the opportunity you’ve been searching
          for. Make a change — apply today.
        </p>

        {/* CTA button */}
        <div
          className="mt-10 flex justify-center"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="160"
        >
          <button
            onClick={handleApply}
            className="inline-flex items-center justify-center rounded-full bg-[#0077c8] px-10 md:px-14 py-4 text-[16px] md:text-[18px] font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] border-2 border-white hover:scale-[1.03] transition-transform"
          >
            Get Started Today
          </button>
        </div>

        {/* Disclaimer text */}
        <p
          className="mt-10 text-[12px] md:text-[13px] leading-relaxed text-[#202021]"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="220"
        >
          Each location is independently owned and operated by a franchisee.
          Employment opportunities throughout the franchised network are
          provided here so that they may be conveniently found at one location.
          Your application will go directly to the franchisee, which will make
          the hiring decision and will be your only employer.
        </p>
      </div>
    </section>
  );
};

export default JobCtaSection;
