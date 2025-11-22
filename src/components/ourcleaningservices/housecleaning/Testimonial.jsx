import React from 'react'

function Testimonial() {
  return (
    <div className="bg-[#1966c4] py-16 px-6">
      <div className="max-w-2xl mx-auto text-center text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          Life’s Too Short To Clean Your Own Home®.
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Spend your time doing what you love. Let us handle the cleaning for you.
        </p>
        <button className="bg-white text-[#0079C1] font-semibold py-3 px-6 rounded-lg text-lg transition duration-300 transform hover:text-white hover:bg-[#70B736] hover:scale-105 focus:outline-none">
          Get A Free Estimate
        </button>
      </div>
    </div>
  )
}

export default Testimonial
