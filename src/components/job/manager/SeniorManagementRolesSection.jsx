import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SeniorManagementRolesSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  const MANAGER_IMG =
    "https://www.thecleaningauthority.com/assets/content/positions-content-02.2403151050475.jpg";

  return (
    <section className="w-full bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Optional heading */}
        <div
          className="max-w-3xl mb-10"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-emerald-600 mb-2">
            Senior Management
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Lead the office, support the team, shape the future.
          </h2>
        </div>

        {/* Main card */}
        <div
          className="group bg-white rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.13)] overflow-hidden grid md:grid-cols-2 transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(15,23,42,0.20)]"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden">
            <img
              src={MANAGER_IMG}
              alt="Assistant manager"
              className="w-full h-full object-cover md:min-h-[520px] transform transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Badge */}
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-800">
                Pathway to office leadership
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-8 md:p-10 lg:p-12 border-l border-slate-100 space-y-10">
            {/* ASSISTANT MANAGER */}
            <div data-aos="fade-left" data-aos-delay="120">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                Assistant Manager
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Pre-qualifications:
              </p>
              <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800 mb-4">
                {[
                  "Complete and pass the Assistant Manager Training Course",
                  "Meet all job requirements of Quality Inspector",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold text-slate-900 mb-2">Requirements:</p>
              <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800">
                {[
                  "Demonstrate a full understanding of daily operations",
                  "Have exceptional written and verbal communication skills",
                  "Show strong conflict-resolution skills with teams and customers",
                  "Assist with routine office tasks and administrative duties",
                  "Support management with office goals, metrics, and initiatives",
                  "Be proficient with software, scheduling systems, and reporting tools",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* MANAGER */}
            <div data-aos="fade-left" data-aos-delay="170">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                Manager
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Pre-qualifications:
              </p>
              <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800 mb-4">
                {[
                  "Meet all job requirements of Assistant Manager",
                  "Demonstrate consistent high performance and leadership",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="font-semibold text-slate-900 mb-2">Requirements:</p>
              <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800">
                {[
                  "Lead office operations and ensure service standards are met",
                  "Oversee recruiting, training, scheduling, and performance reviews",
                  "Manage customer relationships and resolve escalated concerns",
                  "Analyze key performance metrics and drive continuous improvement",
                  "Partner with the franchise owner on strategy and growth",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorManagementRolesSection;
