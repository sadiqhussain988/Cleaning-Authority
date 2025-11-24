// JobMissionSection.jsx
import React from "react";

const JobMissionSection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top title */}
        <h2
          className="mb-10 text-center text-[28px] md:text-[38px] font-extrabold tracking-tight text-[#111111]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Work where company values match yours
        </h2>

        {/* Mission row */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:items-center">
          {/* LEFT: image card */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-[32px] bg-slate-200 shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
              <img
                src="https://www.thecleaningauthority.com/assets/content/mission.2403111027254.jpg"
                alt="Two Cleanic team members smiling"
                className="h-full w-full object-cover"
              />

              {/* subtle gradient overlay bottom for polish */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 via-black/0" />
            </div>
          </div>

          {/* RIGHT: mission text */}
          <div
            className="space-y-5"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <h3 className="text-[30px] md:text-[34px] font-extrabold text-[#111111]">
              Our Mission
            </h3>

            <p className="text-[16px] leading-relaxed text-[#222222]">
              To positively impact the quality of life of:
            </p>

            <ul className="space-y-4 text-[15px] leading-relaxed text-[#111111]">
              <li className="flex gap-3">
                <span className="mt-[6px] inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#111111]" />
                <span>
                  <span className="font-semibold">Homeowners we service</span>{" "}
                  by delivering detail-oriented, consistent services.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-[6px] inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#111111]" />
                <span>
                  <span className="font-semibold">People we employ</span> by
                  providing stable jobs with reasonable hours and wages.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-[6px] inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#111111]" />
                <span>
                  <span className="font-semibold">
                    Franchise owners we support
                  </span>{" "}
                  by helping them utilize their business as a vehicle to build
                  the lifestyle they desire.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-[6px] inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#111111]" />
                <span>
                  <span className="font-semibold">Future generations</span> by
                  using environmentally responsible cleaning products.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- NEW: Benefits for full-time employees --- */}
        <div
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-[28px] md:text-[36px] font-extrabold tracking-tight text-[#111111]">
            Benefits for full-time employees
          </h2>

          <p className="mt-5 mx-auto max-w-3xl text-[16px] leading-relaxed text-[#222222]">
            Housecleaner benefits for cleaning jobs vary by franchise. Contact
            your local branch of The Cleaning Authority to find out which
            benefits are available to full-time employees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JobMissionSection;
