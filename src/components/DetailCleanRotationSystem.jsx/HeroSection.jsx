import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-hidden animate-sectionFade">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Geometric Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] hidden sm:block animate-gridPulse">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-[#0079c1] last:border-r-0"></div>
            ))}
          </div>
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute -top-28 -right-10 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-br from-[#0079c1]/10 to-[#66a038]/10 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute -bottom-28 -left-10 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-tr from-[#0079c1]/10 to-blue-200/10 rounded-full blur-3xl animate-floatSlower"></div>

        {/* Subtle Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,121,193,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,121,193,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-70 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-bgFade"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0079c1] mb-4 tracking-tight animate-slideUp">
            Our Detail-Clean Rotation System®
          </h1>

          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#0079c1] to-[#66a038] mx-auto mb-6 animate-lineGrow"></div>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-800 mb-8 tracking-wide animate-fadeScale">
            Services You Can Trust
          </h2>
        </div>

        <div className="relative px-2 sm:px-4 animate-fadeInSlow">
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
            We at The Cleaning Authority use our{" "}
            <strong className="font-semibold text-gray-900 bg-gradient-to-r from-[#0079c1]/10 to-transparent px-1 py-0.5 rounded animate-highlightPulse">
              Professional House Cleaning Checklist
            </strong>{" "}
            to ensure that nothing is missed when your home is thoroughly cleaned.
            As part of our{" "}
            <Link
              to="/our-cleaning-services"
              className="text-[#66a038] hover:text-[#0079c1] font-semibold transition-all duration-300  animate-linkFade"
            >
              house cleaning services
            </Link>
            , we begin with a fully detailed clean within the first two cleans.
            From there, we continue with a careful system that divides your home
            into four zones and rotates which is deep cleaned. This system ensures
            your home gets the level of clean it needs at the right frequency.
          </p>

          {/* Decorative Animated Corners */}
          <div className="absolute -top-3 -left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#0079c1]/20 animate-cornerReveal"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#0079c1]/20 animate-cornerReveal delay-200"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#66a038]/20 animate-cornerReveal delay-300"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#66a038]/20 animate-cornerReveal delay-500"></div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes sectionFade {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeScale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInSlow {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes lineGrow {
          0% { width: 0; }
          100% { width: 6rem; }
        }
        @keyframes cornerReveal {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes bgFade {
          0% { opacity: 0; }
          100% { opacity: 0.7; }
        }
        @keyframes highlightPulse {
          0%, 100% { background-color: rgba(0, 121, 193, 0.1); }
          50% { background-color: rgba(0, 121, 193, 0.18); }
        }
        @keyframes linkFade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-90deg); }
        }

        .animate-sectionFade { animation: sectionFade 0.8s ease-out forwards; }
        .animate-slideUp { animation: slideUp 1s ease-out forwards; }
        .animate-fadeScale { animation: fadeScale 1.1s ease-out forwards; }
        .animate-fadeInSlow { animation: fadeInSlow 1.4s ease-in forwards; }
        .animate-lineGrow { animation: lineGrow 1.2s ease-out forwards; }
        .animate-cornerReveal { animation: cornerReveal 1s ease-out forwards; }
        .animate-gridPulse { animation: gridPulse 5s ease-in-out infinite; }
        .animate-bgFade { animation: bgFade 1.8s ease-in forwards; }
        .animate-highlightPulse { animation: highlightPulse 2.5s ease-in-out infinite; }
        .animate-linkFade { animation: linkFade 1.6s ease-in forwards; }
        .animate-floatSlow { animation: floatSlow 9s ease-in-out infinite; }
        .animate-floatSlower { animation: floatSlower 14s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;
