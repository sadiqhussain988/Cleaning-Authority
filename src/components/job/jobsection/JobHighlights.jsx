// JobHighlights.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HIGHLIGHTS = [
  {
    img: "https://www.thecleaningauthority.com/images/cta/hours-that-work.2403081018194.png",
    title1: "Hours",
    title2: "That Work",
    desc: "Daytime shifts, no nights or weekends",
  },
  {
    img: "https://www.thecleaningauthority.com/images/cta/exceptional-culture.2403081018548.png",
    title1: "Exceptional",
    title2: "Culture",
    desc: "Regular employee recognition",
  },
  {
    img: "https://www.thecleaningauthority.com/images/cta/competitive-comp.2403081019288.png",
    title1: "Competitive",
    title2: "Compensation",
    desc: "Earn competitive hourly wages and get paid weekly",
  },
  {
    img: "https://www.thecleaningauthority.com/images/cta/strong-support.2403081020046.png",
    title1: "Strong",
    title2: "Support",
    desc: "Training program and established work teams",
  },
];

export default function JobHighlights() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-white">
      {/* BLUE BAND + HEADING */}
      <div className="bg-[#0073b5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-24 lg:pt-14 lg:pb-28">
          <h2
            className="text-center text-white text-2xl sm:text-3xl lg:text-[2.7rem] font-extrabold leading-tight"
            data-aos="fade-down"
          >
            The hands-on, satisfying job you&apos;re looking for
          </h2>
        </div>
      </div>

      {/* WHITE AREA – CIRCLES OVERLAP BLUE/WHITE BORDER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 -mt-14 sm:-mt-16 lg:-mt-20 pb-16 lg:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 text-center">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 120}
            >
              {/* CIRCLE – half on blue, half on white */}
              <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.22)] bg-white flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src={item.img}
                  alt={`${item.title1} ${item.title2}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLES */}
              <h3 className="mt-6 text-lg sm:text-xl font-extrabold text-[#1c2533] leading-snug">
                {item.title1}
                <br />
                {item.title2}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-sm sm:text-base text-[#4c5664] leading-relaxed max-w-[230px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
