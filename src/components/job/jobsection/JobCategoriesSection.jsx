import React from "react";

const jobs = [
  {
    title: "Housecleaners",
    image:
      "https://www.thecleaningauthority.com/images/cta/housecleaners.2403071314113.jpg",
    link: "/jobs/housecleaners",
  },
  {
    title: "Team Leaders & Trainers",
    image:
      "https://www.thecleaningauthority.com/images/cta/teamleaders.2403071314270.jpg",
    link: "/jobs/team-leaders-trainers",
  },
  {
    title: "Managers",
    image:
      "https://www.thecleaningauthority.com/images/cta/managers.2403071314370.jpg",
    link: "/jobs/managers",
  },
];

export default function JobCategoriesSection() {
  return (
    <section className="bg-[#64b610] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold text-[#18181b] leading-tight">
            A professional cleaning job is just the beginning
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#1e293b]">
            Jobs at The Cleaning Authority can be the start of a rewarding
            career.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:gap-10 md:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="bg-white rounded-[26px] shadow-[0_18px_45px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.30)] transition-transform duration-300"
            >
              {/* image */}
              <div className="h-64 sm:h-72 overflow-hidden">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* bottom link */}
              <div className="px-6 py-5 sm:px-7 sm:py-6 border-t border-slate-100">
                <a
                  href={job.link}
                  className="inline-flex items-center text-[#006bbf] font-extrabold text-lg sm:text-xl tracking-tight hover:underline underline-offset-4"
                >
                  {job.title}
                  <span className="ml-2 text-2xl leading-none">›</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom text */}
        <div className="mt-12 lg:mt-14 text-center max-w-4xl mx-auto">
          <p className="font-extrabold text-base sm:text-lg text-[#111827]">
            Get your weekends back. Join a team now.
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#111827]">
            With reliable hours, weekly pay and a culture that values and
            rewards you, The Cleaning Authority is the opportunity you’ve been
            looking for. Make a change — apply today.
          </p>
        </div>
      </div>
    </section>
  );
}
