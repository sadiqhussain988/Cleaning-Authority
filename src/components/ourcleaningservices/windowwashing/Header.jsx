import React from 'react';

const Header = () => {
  return (
    <div>
      <section className="relative w-full pt-17">
        <div className="w-full flex flex-col md:flex-row items-stretch relative">

          {/* LEFT GREEN PART - Hidden on mobile, visible on md+ screens */}
          <div className="hidden md:flex bg-[#66a038] items-center justify-center w-full md:w-[50%] h-32 md:h-30 z-30 px-6 md:px-12 order-1 md:order-1 transition-all duration-500 transform hover:scale-105">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-semibold text-white transition-all duration-500 transform hover:scale-105">
              Window Cleaning
            </h2>
          </div>

          {/* RIGHT IMAGE - Full width on mobile, partial on larger screens */}
          <div className="w-full md:w-[60%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden relative z-20 md:-mt-16 md:ml-[-8%] order-2 md:order-2 rounded-lg shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
            <img
              src="https://www.thecleaningauthority.com/assets/banner/Window-Washing.2012151738550.jpg"
              alt="Interior"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110 hover:translate-x-2 hover:translate-y-2"
            />

            {/* MOBILE TITLE OVERLAY - Only visible on small screens */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center md:hidden">
              <h2 className="text-4xl font-bold text-white text-center px-4 transition-all duration-500 transform hover:scale-110">
                One-Time Cleans
              </h2>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Header;
