// JobStorySection.jsx
import React from "react";

const JobStorySection = () => {
  return (
    <section className="bg-[#ffcf05] py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-start md:gap-14">
        {/* LEFT COLUMN – Heading + Story */}
        <div
          className="w-full md:w-[58%]"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          <h2 className="text-[36px] md:text-[48px] leading-tight font-extrabold text-[#111111]">
            Breaking the cycle of
            <br />
            frequent job changes
          </h2>

          <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-[#111111]">
            <p>
              Sarah Hart was a job hopper, moving from position to position as
              she tried to figure out what to do with her life. She was
              searching for a way out of a job that was making her unhappy when
              she saw a posting for a job at The Cleaning Authority, a company
              she had never heard of before. Sarah liked to clean and decided to
              take a shot on something different. She sent in an application
              online and was called for an interview the same day.{" "}
              <span className="font-semibold">
                The consistent Monday through Friday work schedule and having
                all major holidays off was a big selling point
              </span>
              , and Sarah started her new job as a Professional Housecleaner
              soon after completing her interview.
            </p>

            <p>
              Seven years later, Sarah is still with The Cleaning Authority and
              is a job hopper no more. She’s worked her way up from Professional
              Housecleaner to Assistant Manager and found the stability she was
              looking for.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN – Big circle image + name + caption */}
        <div
          className="w-full md:w-[42%] flex flex-col items-center md:items-center md:mt-[-40px]"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          {/* Full circular graphic (includes blue ring + star in the PNG) */}
          <div className="w-[320px] h-[320px] md:w-[360px] md:h-[360px]">
            <img
              src="https://www.thecleaningauthority.com/assets/content/testimonials-sarah.2403111102137.png"
              alt="Sarah Hart"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Name + role text */}
          <div className="mt-6 text-center max-w-sm">
            <p className="text-lg font-semibold text-[#111111]">Sarah Hart</p>
            <p className="mt-3 text-[15px] leading-snug text-[#111111]">
              Started as a Professional Housecleaner;
              <br />
              now working as an Assistant Manager
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobStorySection;
