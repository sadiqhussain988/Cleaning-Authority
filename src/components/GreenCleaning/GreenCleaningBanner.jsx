import React from "react";

const GreenCleaningBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#66a038]">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/green-cleaning-banner.jpg"
          alt="Green Cleaning Background"
          className="w-full h-full object-cover object-center brightness-[1] parallax-element"
          loading="lazy"
        />

        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#66a038]/70 via-[#4a7c2a]/60 to-[#2e5a1a]/20"></div>

        {/* Soft Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')]"></div>
      </div>

      {/* Floating Animated Shapes - Hidden on XS for clean layout */}
      <div className="hidden sm:block absolute top-10 left-10 w-8 h-8 border border-white/30 rounded-full animate-ping-slow"></div>
      <div className="hidden md:block absolute bottom-20 right-20 w-6 h-6 bg-white/20 rounded-xl animate-float-slow"></div>
      <div className="hidden md:block absolute top-1/3 right-1/4 w-4 h-4 bg-white/25 rounded-full animate-pulse-slow"></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 min-h-[35vh] sm:min-h-[45vh] flex items-center justify-center">
        <div className="text-center py-14 space-y-6">

          {/* Logo + Title Block */}
          <div className="inline-flex items-center justify-center mb-6 sm:mb-10 px-6 sm:px-8 py-4 sm:py-6 bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-lg transition-all duration-500 hover:bg-white/20 hover:scale-[1.02]">

            {/* Icon Box */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-white to-[#bfeaa3] rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-xl transition-all duration-500">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-[#4a7c2a]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3.426 17.764S-5.344 4.093 20.694 0c0 0 5.576 13.896-11.647 17.854 0 0-3.705 0.084-2.563 6.086 0 0-1.213 0.134-1.439 0 0 0-1.079-10.987 11.512-20.027 0 0-10.658 4.407-13.132 13.851" />
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-xl leading-tight">
              Green Cleaning
            </h2>
          </div>

          {/* Divider */}
          <div className="flex justify-center items-center space-x-4 pt-2">
            <div className="w-10 sm:w-14 h-1 bg-white/40 rounded-full"></div>
            <div className="w-3 h-3 bg-white/80 rounded-full animate-pulse"></div>
            <div className="w-10 sm:w-14 h-1 bg-white/40 rounded-full"></div>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        .parallax-element {
          transition: transform 0.15s ease-out;
        }
      `}</style>
    </section>
  );
};

export default GreenCleaningBanner;
