// JobHero.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Online hero image – change URL if you want a different picture
const HERO_IMAGE_URL =
  "https://www.thecleaningauthority.com/assets/mainstage/careers/mainstage-img.2403071135157.png";

export default function JobHero() {
  const [zip, setZip] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!zip.trim()) {
      alert("Please enter a ZIP code.");
      return;
    }
    // Replace this with real search logic later
    alert(`Searching jobs near ${zip}...`);
  };

  return (
    <section className="relative overflow-hidden bg-[#bfe8ff]">
      {/* RIGHT SIDE GRADIENT (blue -> green) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#c8f37f] via-[#c8f37f]/80 to-transparent" />

      {/* MAIN CONTENT */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-16 pb-24 lg:pt-20 lg:pb-28 min-h-[520px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* LEFT: text + perks */}
          <div className="flex-1" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight text-[#111319]">
              <span className="text-[#0084d8]">Love</span> your work.
              <br />
              <span className="text-[#0084d8]">Live</span> your life.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#374051] max-w-xl">
              Say hello to a rewarding job and goodbye to working nights and
              weekends. Join a team of Professional Housecleaners.
            </p>

            {/* Perks row */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
              <Perk icon="🕒" label="Reliable hours" delay={0} />
              <Perk icon="💰" label="Steady pay" delay={100} />
              <Perk icon="😊" label="Happy you" delay={200} />
            </div>
          </div>

          {/* RIGHT: circular image with halo (aligned & larger) */}
          <div
            className="flex-1 flex justify-center lg:justify-end"
            data-aos="fade-left"
          >
            {/* Wrapper to keep halo + image perfectly centered */}
            <div className="relative flex items-center justify-center w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] lg:w-[500px] lg:h-[500px]">
              {/* soft halo */}
              <div
                className="
                  absolute inset-0
                  rounded-full
                  bg-[radial-gradient(circle_at_15%_15%,#aaf779,transparent_55%),radial-gradient(circle_at_80%_80%,#78ddff,transparent_60%)]
                  blur-[2px]
                "
              />

              {/* inner circular image */}
              <div
                className="
                  relative 
                  w-[240px] h-[240px]
                  sm:w-[290px] sm:h-[290px]
                  lg:w-[340px] lg:h-[340px]
                  rounded-full 
                  overflow-hidden shadow-2xl
                "
              >
                <img
                  src={HERO_IMAGE_URL}
                  alt="Cleaning professional"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NO NIGHTS NO WEEKENDS – aligned under the circle */}
              <p className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden md:block rotate-[17deg] text-[10px] tracking-[0.35em] font-semibold text-[#111319]">
                NO NIGHTS · NO WEEKENDS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BLUE STRIP */}
      <div className="relative h-20 bg-[#0073b5]" />

      {/* GREEN SEARCH CARD – overlaps blue strip, width decreased */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-4 w-[92%] sm:w-[80%] lg:w-[70%] max-w-4xl -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="pointer-events-auto bg-[#5fbe00] text-[#111319] rounded-[32px] shadow-2xl px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl font-extrabold">
              See jobs available near you!
            </h2>
            <p className="text-sm sm:text-base mt-1">
              I&apos;m looking for a position near:
            </p>
          </div>

          <form
            className="flex-1 flex flex-col sm:flex-row gap-3"
            onSubmit={handleSubmit}
          >
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#f5546a] text-lg">
                📍
              </span>
              <input
                type="text"
                placeholder="Zip Code"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full rounded-full pl-10 pr-4 py-3 bg-white text-[#111319] text-sm sm:text-base outline-none border border-transparent focus:border-[#0084d8] focus:ring-2 focus:ring-[#8fd6ff] transition"
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center items-center px-8 py-3 rounded-full bg-[#111319] text-white text-sm sm:text-base font-semibold border-[3px] border-[#111319] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition transform"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Perk({ icon, label, delay }) {
  return (
    <div
      className="flex flex-col items-center text-center group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ffd316] shadow-md mb-3 group-hover:-translate-y-1 group-hover:shadow-lg transition-transform">
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="text-sm sm:text-base font-medium text-[#323c4f]">
        {label}
      </p>
    </div>
  );
}
