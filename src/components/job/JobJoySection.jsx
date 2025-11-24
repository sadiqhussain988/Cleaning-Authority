// JobJoySection.jsx
import React from "react";

const benefits = [
  {
    title: "Hours That Work",
    body: "A predictable daytime schedule with no nights or weekends means you have more time to do the things you love with the people who are important to you.",
    icon: "⏰",
  },
  {
    title: "Competitive Compensation",
    body: "Every Cleanic location is locally owned and operated. Professional Housecleaners earn an hourly wage, are paid weekly, and can grow their income over time.",
    icon: "💵",
  },
  {
    title: "Exceptional Culture",
    body: "You’re valued as a professional—never called a “maid.” Team members are regularly celebrated and recognized and there are plenty of opportunities for advancement.",
    icon: "✨",
  },
  {
    title: "Strong Support",
    body: "Our training program is designed to give you confidence from day one. You’ll work with a supportive team while you job shadow, train in the field, and learn hands-on.",
    icon: "🤝",
  },
];

const JobJoySection = () => {
  return (
    <section className="relative bg-white">
      {/* soft gradient glow behind cards */}
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 max-w-5xl rounded-[40px] bg-gradient-to-b from-[#e0f3ff] via-white to-white opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-20">
        {/* Heading */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl md:text-[40px] font-extrabold tracking-tight text-[#111111]">
            There’s joy in this job
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-base text-[#444444]">
            Discover a rewarding position that gives you the chance to brighten
            someone’s day with every shift.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {benefits.map((item, idx) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl bg-white/90 p-6 md:p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ring-1 ring-slate-100 transition-transform transition-shadow hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(15,23,42,0.14)] hover:ring-[#0077c8]/25"
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="800"
              data-aos-delay={150 + idx * 70}
            >
              {/* subtle top gradient border on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-[#0077c8] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              {/* icon + title */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f4ff] text-lg">
                  <span className="translate-y-[1px]">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#111111]">
                  {item.title}
                </h3>
              </div>

              {/* body */}
              <p className="mt-4 text-[15px] leading-relaxed text-[#444444]">
                {item.body}
              </p>

              {/* accent line */}
              <span className="mt-6 block h-0.5 w-10 origin-left scale-x-0 rounded-full bg-[#0077c8] transition-transform group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobJoySection;
