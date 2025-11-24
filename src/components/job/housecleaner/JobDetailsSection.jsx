import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const JobDetailsSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const CLEANING_IMAGE =
    "https://www.thecleaningauthority.com/assets/content/positions-content-1.2403281151555.jpg";

  return (
    <section className="w-full bg-slate-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section heading (optional) */}
        <div
          className="max-w-3xl mb-10"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-emerald-600 mb-2">
            Roles & Requirements
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Grow your skills with Clear, friendly roles.
          </h2>
        </div>

        {/* Main card */}
        <div
          className="group bg-white rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.13)] overflow-hidden grid md:grid-cols-2 transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden">
            <img
              src={CLEANING_IMAGE}
              alt="Professional housecleaner"
              className="w-full h-full object-cover md:min-h-[520px] transform transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Small badge on image */}
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-800">
                Now hiring in your area
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-between border-l border-slate-100">
            <div className="space-y-8">
              {/* Professional Housecleaner */}
              <div data-aos="fade-left" data-aos-delay="150">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                  Professional Housecleaner
                </h3>

                <p className="text-[15px] md:text-[16px] leading-relaxed text-slate-800 mb-4">
                  No experience necessary&mdash;we provide paid training. All Professional
                  Housecleaners complete and pass our in-depth training course so you feel
                  confident in every home you clean.
                </p>

                <p className="font-semibold text-slate-900 mb-2">Requirements:</p>
                <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800">
                  {[
                    "Arrive on time for work and maintain exemplary attendance",
                    "Have a positive attitude and be a team player",
                    "Give 100% effort with a quality-oriented approach",
                    "Follow the Detail-Clean Rotation System®",
                    "Clean 3–5 homes per day efficiently, with a focus on excellence",
                    "Work collaboratively with your team",
                    "Follow all office policies and procedures",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2"
                    >
                      <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certified Professional Housecleaner */}
              <div data-aos="fade-left" data-aos-delay="200">
                <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 mt-6">
                  Certified Professional Housecleaner
                </h4>

                <p className="font-semibold text-slate-900 mb-2">
                  Pre-qualifications:
                </p>
                <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800 mb-4">
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>
                      Complete and pass the Certified Professional Housecleaner training course
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>Meet all job requirements of Professional Housecleaner</span>
                  </li>
                </ul>

                <p className="font-semibold text-slate-900 mb-2">Requirements:</p>
                <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800">
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>Maintain consistent quality scores and reliability</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>Model company standards and help mentor new teammates</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div
              className="mt-8 flex flex-wrap items-center justify-between gap-4"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="text-sm text-slate-500">
                Full-time, daytime schedule • Paid training • Weekly pay
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5">
                Apply for this role
                <span className="text-lg leading-none">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsSection;
