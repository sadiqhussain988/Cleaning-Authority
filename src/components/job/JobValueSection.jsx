// JobValueSection.jsx
import React from "react";

const JobValueSection = () => {
  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/explore/tags/lifeattca/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Yellow band behind the blue card */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-[#ffd600]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div
          className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10 rounded-[32px] md:rounded-[48px] bg-[#0077c8] px-6 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-12 text-white shadow-[0_26px_70px_rgba(15,23,42,0.32)]"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* LEFT: Heading + text + button */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-[34px] md:text-[40px] font-extrabold leading-tight">
              You’re valued here
            </h2>

            <p className="mt-4 sm:mt-6 mx-auto md:mx-0 max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-[#e6f4ff]">
              #LifeAtCleanic celebrates your big and small wins: employee
              appreciation, birthdays, anniversaries and more.
            </p>

            <button
              onClick={handleInstagram}
              className="mt-6 sm:mt-8 inline-flex w-full max-w-xs sm:max-w-sm md:max-w-xl items-center justify-center rounded-full border border-white px-8 sm:px-10 py-3 text-[15px] sm:text-[16px] font-semibold tracking-wide text-white transition hover:bg-white hover:text-[#0077c8]"
            >
              Follow Us On Instagram
            </button>
          </div>

          {/* RIGHT: SINGLE combined image with 3 tiles inside */}
          <div className="flex flex-none items-center justify-center mt-6 md:mt-0">
            <figure
              className="w-full max-w-[460px] overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-[0_22px_60px_rgba(15,23,42,0.45)]"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="150"
            >
              <img
                src="https://www.thecleaningauthority.com/assets/content/image-thirds.2403111340178.png"
                alt="Life at Cleanic"
                className="block w-full h-auto"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobValueSection;
