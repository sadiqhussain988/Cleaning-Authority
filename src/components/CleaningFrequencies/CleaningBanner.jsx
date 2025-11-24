import React from "react";

export default function CleaningBanner() {
  return (
    <section className="w-full bg-[#DfeeF5] overflow-hidden">
      <div className="relative w-full flex flex-col lg:flex-row items-center">

        {/* LEFT CONTENT — Animated Green Block */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center lg:justify-end py-16 lg:py-0">
          
          <div
            className="bg-gradient-to-br from-[#6aa84f] to-[#5d9745] 
            p-12 lg:p-20 rounded-r-3xl lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 
            lg:w-[88%] shadow-2xl overflow-hidden border-l-8 border-white/30
            animate-slideLeft transition-all duration-700"
          >

            {/* Glass Light Sweep Animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent animate-shine pointer-events-none"></div>

            {/* Glow Spots */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>

            {/* TEXT CONTENT */}
            <div className="relative z-10 space-y-6 animate-fadeIn">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-lg">
                Cleaning
                <span className="block text-white/90 mt-2">Frequencies</span>
              </h2>

              {/* Animated underline */}
              <div className="w-24 h-2 bg-white/80 rounded-full shadow-lg animate-expand"></div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative overflow-hidden group animate-slideRight rounded-2xl">

            <img
              src="/images/cleaning-banner.jpg"
              alt="Cleaning Banner"
              className="w-full h-80 lg:h-[500px] object-cover 
              transition-transform duration-[1200ms] group-hover:scale-110"
            />

            {/* Side Green Accent Ribbon */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 
              w-4 h-64 bg-[#6aa84f] rounded-r-xl shadow-xl animate-pulseSlow" />

            {/* Right Diagonal Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-white/20 via-transparent to-transparent pointer-events-none"></div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-40 h-40 border-t-4 border-r-4 border-[#6aa84f]/40 rounded-tr-3xl"></div>
          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideLeft { animation: slideLeft 1.2s ease-out forwards; }

        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-slideRight { animation: slideRight 1.2s ease-out forwards; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1.4s ease-out forwards; }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shine { animation: shine 2.8s infinite linear; }

        @keyframes expand {
          0% { width: 0; }
          100% { width: 6rem; }
        }
        .animate-expand { animation: expand 1.3s ease-out forwards; }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulseSlow { animation: pulseSlow 4s infinite; }
      `}</style>
    </section>
  );
}
