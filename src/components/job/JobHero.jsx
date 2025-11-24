// JobHero.jsx
import React from "react";

const JobHero = () => {
  const handlePlay = () => {
    window.open(
      "https://www.instagram.com/reel/Cfxav3guhSG/?utm_source=ig_web_button_share_sheet",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="bg-gradient-to-b from-[#e9f7ff] via-[#ecf8ff] to-white">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-32 sm:pb-28">
        {/* Heading */}
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="text-3xl sm:text-[52px] md:text-[64px] font-extrabold leading-tight text-[#111]">
            Hello, free time
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] sm:text-[17px] leading-relaxed text-[#222]">
            Take back your nights and weekends with reliable daytime shifts as a
            Professional Housecleaner. Cleanic offers housecleaner benefits like
            weekly pay, on-the-job training and support. You’ll work as part of a
            team and become the best part of the client’s day.
          </p>
        </div>

        {/* IMAGE + CIRCLES */}
        <div className="relative mt-14 flex justify-center">
          <div
            className="relative w-full max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {/* Image card */}
            <div className="overflow-hidden rounded-[30px] sm:rounded-[40px] shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
              <img
                src="https://www.thecleaningauthority.com/images/mainstage/why-join-mainstage.2403111443463.jpg"
                className="h-[240px] sm:h-[300px] md:h-[370px] w-full object-cover"
                alt="Happy housecleaner"
              />
            </div>

            {/* LEFT WHITE CIRCLE PNG (desktop/tablet only) */}
            <div
              className="absolute top-1/4 -left-20 md:-left-24 hidden h-32 w-32 md:h-44 md:w-44 -translate-y-1/2 items-center justify-center rounded-full bg-white sm:flex shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
              data-aos="fade-right"
              data-aos-duration="800"
            >
              <img
                src="https://www.thecleaningauthority.com/images/mainstage/nonightsweekends.2403081323046.png"
                className="h-[88%] w-[88%] object-contain"
                alt="No nights no weekends"
              />
            </div>

            {/* RIGHT VIDEO CIRCLE + CAPTION */}
            <div
              className="
                absolute 
                left-1/2 bottom-[-70px] -translate-x-1/2 
                flex flex-col items-center
                sm:left-auto sm:-right-24 sm:bottom-[-40px] sm:translate-x-0 sm:items-start
              "
              data-aos="fade-left"
              data-aos-duration="800"
            >
              {/* Video circle */}
              <div className="relative h-32 w-32 md:h-44 md:w-44 rounded-full border-[6px] md:border-[7px] border-[#0077c8] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.22)] overflow-hidden">
                <img
                  src="https://www.thecleaningauthority.com/images/mainstage/video-img.2403120715504.png"
                  className="h-full w-full object-cover"
                  alt="Video thumbnail"
                />

                {/* Play button – aligned & responsive */}
                <button
                  onClick={handlePlay}
                  className="absolute bottom-3 right-3 md:bottom-4 md:right-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#ffd600] text-black shadow-lg hover:scale-110 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 md:h-6 md:w-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Caption */}
              <p className="mt-3 md:mt-4 ml-0 md:ml-2 max-w-[260px] text-center sm:text-left text-[12px] md:text-[13px] leading-snug text-[#111]">
                Employees talk work/
                <br />
                life balance at The Cleaning Authority
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobHero;
