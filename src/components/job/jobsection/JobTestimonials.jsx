import React from "react";

const TESTIMONIAL_IMG =
  "https://www.thecleaningauthority.com/images/cta/testimonial.2403071440269.png"; // replace with your image if needed

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
      {/* bottom green half */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#64b610]"
        aria-hidden="true"
      />

      {/* yellow card */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
        <div className="bg-[#ffcc07] rounded-[40px] shadow-[0_32px_80px_rgba(0,0,0,0.35)] px-6 sm:px-10 lg:px-14 py-10 lg:py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT: circular image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
            <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] rounded-full overflow-hidden">
              <img
                src={TESTIMONIAL_IMG}
                alt="Team member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT: quote content */}
          <div className="flex-1 flex flex-col justify-center">
            {/* quote marks */}
            <div className="flex justify-center lg:justify-start mb-4">
              <span className="text-[#0053c7] text-6xl sm:text-7xl font-extrabold leading-none">
                “”
              </span>
            </div>

            {/* framed quote */}
            <div className="border-[3px] border-white/90 rounded-[28px] px-6 sm:px-10 py-8 sm:py-10 text-center lg:text-left">
              <p className="text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold leading-snug text-[#1b1c1e]">
                Management is clear about how we can move up in the company.
                They were great at helping to support me.
              </p>

              <div className="mt-8">
                <p className="text-lg sm:text-xl font-extrabold text-[#1b1c1e]">
                  Loghan Boydstun
                </p>
                <p className="mt-2 text-sm sm:text-base text-[#333741]">
                  Started as a Professional Housecleaner; now working as a
                  Trainer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
