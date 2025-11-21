import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FreeEstimate = () => {
  return (
    <section
      className="flex flex-col items-center justify-center mx-auto max-w-5xl h-xl mb-20 bg-[#0079C1] text-white mt-20"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Life’s Too Short To Clean Your Own Home®.
      </h1>

      {/* Button */}
      <button className="flex items-center gap-2 bg-[#4fa33a] px-6 py-3 rounded-lg shadow-lg text-white hover:bg-[#e6f5f8] hover:text-[#2a8bdc] transition-all duration-300 uppercase text-md">
        Get A Free Estimate 
      </button>
    </section>
  );
};

export default FreeEstimate;