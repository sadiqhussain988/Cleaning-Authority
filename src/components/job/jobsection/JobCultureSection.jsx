import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ONE image that already has the two tiles inside it
const LIFE_POLAROID = "https://www.thecleaningauthority.com/assets/content/polaroid-01.2403080738122.jpg";

// TODO: replace this with your own “Working at TCA” combined polaroid image
const WORK_POLAROID =
  "https://www.thecleaningauthority.com/assets/content/polaroid-03.2403080738127.jpg";

export default function JobCultureSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* TOP HEADING + SUBTITLE */}
        <header className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2
            className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-[#111319] leading-tight"
            data-aos="fade-down"
          >
            A job that works. A culture that rewards.
          </h2>
          <p
            className="mt-4 text-sm sm:text-base text-[#4a4f59]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Celebrating the impact team members make on their community every
            day.
          </p>
        </header>

        {/* ===== ROW 1 – LIFE AT TCA ===== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-24">
          {/* Polaroid image LEFT */}
          <SinglePolaroid img={LIFE_POLAROID} aos="fade-right" />

          {/* Text RIGHT */}
          <div data-aos="fade-left">
            <h3 className="text-[33px] sm:text-3xl font-extrabold text-[#111319]">
              Life at TCA
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#404755] max-w-lg">
              Be recognized for things that matter most, both on and off the
              job. Celebrating the impact team members make on their community
              every day.
            </p>

            <a
              href="#life-at-tca"
              className="mt-4 inline-flex items-center text-[#0073b5] font-semibold text-sm sm:text-base underline-offset-4 hover:underline"
            >
              Take a look
              <span className="ml-1 text-lg">›</span>
            </a>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap gap-4">
              <SocialButton label="Facebook" icon="f" />
              <SocialButton label="Instagram" icon="◎" />
            </div>
          </div>
        </div>

        {/* ===== ROW 2 – WORKING AT TCA ===== */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Polaroid image LEFT */}
          <SinglePolaroid img={WORK_POLAROID} aos="fade-right" />

          {/* Text RIGHT */}
          <div data-aos="fade-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111319]">
              Working at TCA
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#404755] max-w-xl">
              Learn why Clean Work Makes the Dream Work™. See what you can
              expect from your team, your schedule, and your day-to-day work.
            </p>

            <a
              href="https://youtugX0Z3KBtb58qlhLB.be/aY0_d2tBgN4?si="
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center text-[#0073b5] font-semibold text-sm sm:text-base underline-offset-4 hover:underline"
            >
              Watch the video
              <span className="ml-1 text-lg">›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= */
/* REUSABLE BITS */
/* ============= */

function SocialButton({ label, icon }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 bg-[#ffd51e] px-6 py-3 rounded-full font-semibold text-sm sm:text-base text-[#111319] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-transform"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white text-sm">
        {icon}
      </span>
      {label}
    </a>
  );
}

/**
 * ONE polaroid image (your asset already has the two tiles inside).
 */
function SinglePolaroid({ img, aos }) {
  return (
    <div
      className="flex justify-center lg:justify-start"
      data-aos={aos}
    >
      <div className="bg-white rounded-[18px] shadow-[0_20px_55px_rgba(0,0,0,0.28)] px-3 pt-3 pb-6 max-w-md">
        <div className="overflow-hidden rounded-[10px]">
          <img
            src={img}
            alt="Life at TCA"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
