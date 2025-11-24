// HousecleanerStorySection.jsx
import React from "react";

const HousecleanerStorySection = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      {/* WHITE GUTTERS + CENTERED CONTENT */}
      <div className="mx-auto max-w-6xl px-4">
        {/* YELLOW CARD */}
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-b from-[#ffe76a] to-[#f9c400] px-6 py-10 md:px-14 md:py-14 shadow-[0_26px_70px_rgba(15,23,42,0.25)]">
          {/* CLEANING TOOL (TOP-RIGHT) */}
          <img
            src="https://www.thecleaningauthority.com/assets/content/positions-testimonial-flair.2403130930046.png"
            alt="Cleaning tool"
            className="pointer-events-none absolute -right-10 -top-10 h-56 rotate-[18deg] md:h-72"
          />

          {/* GRID: TEXT + PHOTO/QUOTE */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:items-center">
            {/* LEFT: STORY TEXT */}
            <div
              className="space-y-6"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <h2 className="text-[30px] md:text-[38px] font-extrabold leading-tight text-[#111111]">
                More free time to
                <br />
                <span className="inline-block mt-1">spend with family</span>
              </h2>

              <p className="text-[15px] leading-relaxed text-[#111111]">
                Barbara Paredes was referred to the Cleaning Authority by a
                friend who was already working there. She stopped by the office
                and interviewed on the spot for a job as a Professional
                Housecleaner. Nine years later, she’s still with the company,
                cleaning houses and helping in the office when needed.
              </p>

              <p className="text-[15px] leading-relaxed text-[#111111]">
                Barbara enjoys the freedom that comes with her job, especially
                being able to move around a house as she works instead of
                standing in one place all day, every day. As the mother of two
                daughters that both play sports,{" "}
                <span className="font-semibold">
                  she appreciates the established Monday–Friday hours that give
                  her the free time she needs
                </span>{" "}
                to be able to attend their games. Being paid every week is also
                a positive.
              </p>
            </div>

            {/* RIGHT: QUOTE + CIRCULAR PHOTO */}
            <div
              className="relative mt-6 md:mt-0 flex justify-center md:justify-end"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* BLUE QUOTE BUBBLE */}
              <div className="absolute -top-16 right-0 w-[260px] rounded-[40px] bg-[#42c0ff] px-7 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.25)] md:w-[320px] md:-top-24 md:right-6">
                <span className="block text-[38px] leading-none text-white">
                  “
                </span>
                <p className="mt-1 text-[20px] md:text-[22px] font-extrabold leading-snug text-[#111111]">
                  I like my work.
                  <br />
                  I like being here.
                </p>
              </div>

              {/* CIRCULAR PHOTO (OVERLAPS BUBBLE) */}
              <div className="relative mt-16 md:mt-10">
                <div className="relative h-64 w-64 rounded-full border-[10px] border-[#0077c8] bg-white shadow-[0_26px_70px_rgba(15,23,42,0.35)] md:h-72 md:w-72">
                  <img
                    src="https://www.thecleaningauthority.com/assets/content/positions-testimonial.2403130848226.png"
                    alt="Barbara Paredes"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>

                {/* NAME + TITLE */}
                <div className="mt-5 text-center">
                  <p className="text-[16px] font-extrabold text-[#111111]">
                    Barbara Paredes
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-[#111111]">
                    Professional Housecleaner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default HousecleanerStorySection;
