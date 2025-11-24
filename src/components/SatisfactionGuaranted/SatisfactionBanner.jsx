import React from "react";

const SatisfactionBanner = () => {
return ( <section className="relative w-full h-[28rem] md:h-[30rem] lg:h-[32rem] rounded-3xl overflow-hidden shadow-xl transition-shadow duration-500 hover:shadow-2xl group">


  {/* Background Image with Overlay */}
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <img
      src="/images/Satisfaction-Guaranteed.jpg"
      alt="Satisfaction Guaranteed"
      loading="lazy"
      className="w-full h-full object-cover object-center transform transition-transform duration-[1500ms] ease-out group-hover:scale-110"
    />
    {/* Overlay Gradients */}
    <div className="absolute inset-0 bg-black/30"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
  </div>

  {/* Content Box */}
  <div className="relative h-full flex items-center justify-start px-6 md:px-12 lg:px-20">
    <div className="bg-[#66a038] bg-opacity-90 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl py-10 px-8 md:px-12 lg:px-16 transform transition-all duration-700 hover:scale-[1.05] hover:-translate-y-2 relative overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#66a038]/20 blur-3xl opacity-40 animate-pulse pointer-events-none"></div>

      {/* Heading */}
      <h2 className="relative text-2xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-xl animate-fade-in">
        Satisfaction Guaranteed
      </h2>

      {/* Animated Dividers */}
      <div className="mt-6 flex flex-col gap-2 relative z-10">
        <div className="w-20 h-2 bg-white rounded-full transition-all duration-700 ease-out hover:w-28 animate-slide-left"></div>
        <div className="w-16 h-1.5 bg-white/80 rounded-full transition-all duration-700 ease-out delay-100 hover:w-24 animate-slide-right"></div>
      </div>

      {/* Subtle Shine Animation */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -rotate-12 opacity-0 hover:opacity-50 pointer-events-none transition-opacity duration-1000"></div>
    </div>
  </div>

  {/* Floating Orbs */}
  <div className="absolute top-8 right-8 w-5 h-5 bg-white/30 rounded-full animate-bounce-slow"></div>
  <div className="absolute bottom-10 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce-slow delay-300"></div>
  <div className="absolute bottom-16 right-20 w-3 h-3 bg-white/30 rounded-full animate-bounce-slow delay-500"></div>

  {/* Optional Scroll Parallax (requires extra JS for scroll) */}
</section>

);
};

export default SatisfactionBanner;
