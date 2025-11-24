import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ManagementStorySection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const PERSON_IMG =
    "https://www.thecleaningauthority.com/assets/content/DerickaFrancis.2403141131440.png";
  const BROOM_IMG =
    "https://www.thecleaningauthority.com/assets/content/positions-testimonial-flair.2403130930046.png";

  return (
    <section className="w-full bg-gradient-to-b from-[#E4F5FC] to-white pt-20 pb-24 px-4">
      {/* TOP HEADING SECTION */}
      <div
        className="max-w-4xl mx-auto text-center mb-14"
        data-aos="fade-up"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
          Grow your career here
        </h2>

        <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-3">
          Professional cleaning roles at Cleanic Authority can grow into
          rewarding management careers. We give you the tools, training, and
          support to become a leader and move up in the company.
        </p>

        <p className="text-lg">
          Learn more about{" "}
          <a
            href="#management-positions"
            className="text-sky-600 font-semibold underline hover:text-sky-800"
          >
            management positions
          </a>{" "}
          below.
        </p>
      </div>

      {/* YELLOW STORY CARD */}
      <div
        className="max-w-6xl mx-auto bg-[#FFD600] rounded-[40px] md:rounded-[46px] shadow-[0_24px_80px_rgba(15,23,42,0.25)] overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_110px_rgba(15,23,42,0.32)]"
        data-aos="zoom-in-up"
      >
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 px-8 md:px-12 lg:px-16 py-14 items-center">
          {/* LEFT TEXT COLUMN */}
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              A summer job became a fulfilling career
            </h3>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-900 mb-4">
              Dericka Francis first joined Cleanic Authority looking for a job
              to get her through the summer. She quickly discovered how much she
              enjoyed the freedom of working in different homes, without a boss
              constantly looking over her shoulder.
            </p>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-900 mb-4">
              By the end of that summer, she decided to stay and build her
              career here. Over time she moved up to Quality Inspector and now
              works in the office, helping train new location owners as they
              prepare to open their own branches.
            </p>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-900 mb-4 italic">
              “This company has changed me in a positive way,” she says. “I&apos;ve
              learned how to be a leader.”
            </p>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-900">
              Her story is just one example of how a cleaning job can turn into
              long-term growth in management.
            </p>
          </div>

          {/* RIGHT QUOTE + IMAGE COLUMN */}
          <div className="relative flex flex-col items-center md:items-end">
            {/* QUOTE BUBBLE */}
            <div className="relative w-full md:w-[90%] lg:w-[85%] mb-10">
              <div className="bg-[#A9E5F3] rounded-[52px] px-10 py-10 shadow-lg">
                <div className="text-5xl text-sky-600 font-black mb-4">
                  &ldquo;
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                  This company has changed me in a positive way.
                </p>
              </div>

              {/* Sparkle + Broom */}
              <div className="absolute -top-6 right-4 flex items-center gap-3">
                <span className="inline-block h-5 w-5 rounded-full bg-white/80 shadow-md" />
              </div>
              <img
                src={BROOM_IMG}
                alt="Cleaning tool"
                className="absolute -bottom-10 -right-6 w-70 md:w-64 lg:w-78 rotate-3 drop-shadow-xl transform transition-transform duration-300 group-hover:translate-y-1"
              />
            </div>

            {/* PERSON IMAGE + CAPTION */}
            <div className="relative mt-6 md:mt-10 text-center md:text-right">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-emerald-500 scale-110 opacity-60 blur-md" />
                <img
                  src={PERSON_IMG}
                  alt="Dericka Francis"
                  className="relative w-76 h-76 md:w-82 md:h-82 rounded-full object-cover border-[6px] border-[#FFD600] shadow-[0_16px_40px_rgba(15,23,42,0.45)] transform transition-transform duration-300 group-hover:-translate-y-1"
                />
              </div>
              <h4 className="mt-4 text-xl font-extrabold text-slate-900">
                Dericka Francis
              </h4>
              <p className="text-sm md:text-[15px] text-slate-800 max-w-xs md:ml-auto">
                Started as a Professional Housecleaner, now thriving as an
                Assistant Manager and mentor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementStorySection;
