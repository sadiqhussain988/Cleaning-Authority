import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const LeadershipRolesSection = () => {
  React.useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  // Online image
  const LEADER_IMG =
    "https://www.thecleaningauthority.com/assets/content/positions-content-03.2403151050477.jpg";

  return (
    <section className="w-full bg-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Optional section heading */}
        <div
          className="max-w-3xl mb-10"
          data-aos="fade-up"
        >
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-emerald-600 mb-2">
            Leadership & Growth
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Step into leadership and shape the team.
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
              src={LEADER_IMG}
              alt="Team leader"
              className="w-full h-full object-cover md:min-h-[520px] transform transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Badge on image */}
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-800">
                Career path: Lead • Train • Inspect
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-8 md:p-10 lg:p-12 border-l border-slate-100 space-y-10">
            {/* TEAM LEADER */}
            <div data-aos="fade-left" data-aos-delay="120">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
                Team Leader
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Pre-qualifications:
              </p>
              <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800 mb-4">
                {[
                  "Complete and pass the Team Leader Training Course",
                  "Meet all job requirements of Certified Professional Housecleaner",
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
                  "Demonstrate leadership by mentoring new team members",
                  "Manage the team’s daily schedule and routing",
                  "Initiate quality inspections with each clean",
                  "Communicate with management as needed",
                  "Interact with customers to guarantee a positive, professional experience",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TRAINER */}
            <div data-aos="fade-left" data-aos-delay="160">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                Trainer
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Pre-qualifications:
              </p>
              <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800 mb-4">
                {[
                  "Complete and pass Train-the-Trainer Course",
                  "Meet all job requirements of Team Leader",
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
                  "Attend and actively participate in the two-week training program for newly assigned trainees",
                  "Show patience and strong communication skills to coach trainees",
                  "Demonstrate the Detail-Clean Rotation System® at a high level",
                  "Educate trainees on established processes and best practices",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUALITY INSPECTOR */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                Quality Inspector
              </h3>

              <p className="font-semibold text-slate-900 mb-2">
                Pre-qualifications:
              </p>
              <ul className="space-y-2 text-[15px] md:text-[16px] leading-relaxed text-slate-800 mb-4">
                {[
                  "Meet all job requirements of Trainer",
                  "Maintain outstanding performance scores",
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
                  "Perform regular in-home inspections and coach teams on improvements",
                  "Ensure systems and safety standards are followed on every clean",
                  "Provide feedback to management on quality trends and wins",
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

export default LeadershipRolesSection;
