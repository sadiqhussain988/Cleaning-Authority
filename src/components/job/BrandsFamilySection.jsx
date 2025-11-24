import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  [
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/asp.2012151506040.png",
      alt: "ASP - America’s Swimming Pool Co.",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/ben-franklin.2012151506080.png",
      alt: "Benjamin Franklin Plumbing",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/TCA-logo.2105261111215.png",
      alt: "The Cleaning Authority",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/DoodyCalls-logo.2107141540324.png",
      alt: "DoodyCalls",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/Drymedic-Logo.2301181555497.png",
      alt: "DryMedic Restoration Services",
    },
  ],
  [
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/JNK-005_Oval_Logo_Final_no_tagline_RGB.2301181555091.png",
      alt: "The Junkluggers",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/lsq_logo_fullcolor[1].2502201302352.png",
      alt: "Lawn Squad",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/Image-9.2105261112362.png",
      alt: "Mister Sparky",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/monster.2012151506180.png",
      alt: "Monster Tree Service",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/msq_pluslogo_fullcolor_horizontal.1)[1].2502200938003.png",
      alt: "Mosquito Squad",
    },
  ],
  [
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/one-hour.2012151506260.png",
      alt: "Monster Tree Service",
    },
    {
      src: "https://www.thecleaningauthority.com/sub/55878/images/SM-logo-EPS.png",
      alt: "Mosquito Squad",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/STOP-logo.2104191057477.png",
      alt: "One Hour Heating & Air Conditioning",
    },
    {
      src: "https://www.thecleaningauthority.com/images/brand-logos/woofies-logo.2202011543542.png",
      alt: "Screenmobile",
    },
    {
      src: "https://www.thecleaningauthority.com/images/authority-brands/homewatch.2012151506120.png",
      alt: "Service Team of Professionals",
    },
  ],
];

const FamilySection = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  const goNext = () =>
    setIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section
      className="bg-white py-16 md:py-20 border-t border-gray-100 overflow-x-hidden"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl px-4 text-center">

        {/* Heading */}
        <h2
          className="text-[28px] md:text-[38px] font-semibold tracking-tight text-[#111111]"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Part of the Authority Brands Family
        </h2>

        <p
          className="mx-auto mt-4 max-w-3xl text-[15px] leading-relaxed text-[#222222]"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          Authority Brands is the leading provider of in-home services, building
          brands that support the success of franchisees as well as better the
          lives of the homeowners we serve and the people we employ.
        </p>

        {/* Logos */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-10 md:gap-14"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {slides[index].map((brand) => (
            <div
              key={brand.alt}
              className="flex h-16 w-[150px] items-center justify-center opacity-90 transition hover:opacity-100"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div
          className="mt-10 flex items-center justify-center gap-4 text-sm text-[#111111]"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          {/* Prev */}
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A5D46A] text-white shadow-sm hover:scale-105 transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Left arrow */}
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          {/* Slide Indicator */}
          <span className="text-[15px] font-medium">
            {index + 1} <span className="opacity-60">/ {totalSlides}</span>
          </span>

          {/* Next */}
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A5D46A] text-white shadow-sm hover:scale-105 transition"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {/* Right arrow */}
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default FamilySection;