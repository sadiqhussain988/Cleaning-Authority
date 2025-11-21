import React from "react";
import bgVideo from "../../assets/Cleaning-mp4.mp4"; // Ensure path is correct

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden ">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for darker look */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <h1 className="text-3xl md:text-5xl text-white mb-4">
          Enjoy Your <span className="font-bold text-[#66A038]">Freshly Cleaned</span> Home
        </h1>

        <p className="text-white text-xl md:text-2xl mb-6">
          Professional Cleaning that leaves you stress-free
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <a
            href="tel:+19496135338"
            className="bg-[#66A038] text-white px-4 py-2 md:px-5 md:py-2 rounded-md text-sm md:text-md font-medium shadow-md transition duration-300 ease-in-out hover:bg-green-700 hover:scale-105"
          >
            Call Us
          </a>
          <a
            href="/get-pricing"
            className="bg-[#66A038] text-white px-4 py-2 md:px-5 md:py-2 rounded-md text-sm md:text-md font-medium shadow-md transition duration-300 ease-in-out hover:bg-green-700 hover:scale-105"
          >
            Get Pricing
          </a>
        </div>

        {/* Google logo + rating */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <img
            src="https://www.thecleaningauthority.com/assets/google-icon.2409170816416.png"
            alt="Google"
            className="h-8 w-auto"
          />

          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <polygon points="9.9,1.1 12.3,6.7 18.4,7.4 13.9,11.7 15,17.8 9.9,14.4 4.9,17.8 5.9,11.7 1.5,7.4 7.6,6.7" />
              </svg>
            ))}
          </div>

          <span className="text-white text-sm md:text-lg font-medium ml-0 md:ml-2">
            4.7 Average Customer Rating
          </span>
        </div>
      </div>
    </section>
  );
}
