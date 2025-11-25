import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to trigger animations when the header section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    const headerSection = document.getElementById("header-section");
    if (headerSection) observer.observe(headerSection);

    return () => {
      if (headerSection) observer.unobserve(headerSection);
    };
  }, []);

  return (
    <section
      id="header-section"
      className="relative w-full pt-20 md:pt-28 px-4 md:px-10 overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row items-center md:items-stretch relative">
        {/* LEFT GREEN PART - Positioned from left side */}
        <div
          className={`hidden md:block bg-[#66a038] w-full md:w-[50%] mt-8 md:mt-20 pt-8 h-32 md:h-[130px] z-30 flex items-center justify-start md:px-12 rounded shadow-lg transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          } transition-all duration-700 ease-out`}
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white">
            Our Cleaning Services
          </h2>
        </div>

        {/* RIGHT IMAGE - Positioned to the right side */}
        <div
          className={`w-full md:w-[50%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden relative z-20 md:-mt-16 md:ml-[-8%] rounded-lg shadow-xl transform ${
            isVisible ? "scale-105 opacity-100" : "scale-95 opacity-50"
          } transition-transform duration-700 ease-in-out`}
        >
          <img
            src="https://www.thecleaningauthority.com/assets/banner/TCA-5.2012151738550.jpg"
            alt="Interior"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
