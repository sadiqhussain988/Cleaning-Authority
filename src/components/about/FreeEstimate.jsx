import React from 'react';

const FreeEstimate = () => {
  return (
    <section
      className="flex flex-col items-center justify-center mx-auto max-w-5xl min-h-[200px] md:min-h-[500px] lg:min-h-[150px] mb-10 md:mb-20 bg-[#0079C1] text-white mt-20 rounded-md px-4 md:px-6"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 px-2">
        Life's Too Short To Clean Your Own Home®.
      </h1>

      {/* Button */}
      <button className="flex items-center gap-2 bg-[#4fa33a] px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg text-white hover:bg-[#e6f5f8] hover:text-[#2a8bdc] transition-all duration-300 uppercase text-sm sm:text-md md:text-lg">
        Get A Free Estimate
      </button>
    </section>
  );
};

export default FreeEstimate;
