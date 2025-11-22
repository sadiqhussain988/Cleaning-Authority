import React from "react";

const HeroFaq = () => {
  return (
    
    <section className="relative w-full pt-17  ">
      <div className="w-full flex flex-col md:flex-row items-stretch relative">
        
        {/* LEFT GREEN PART - Hidden below 800px, visible on larger screens */}
        <div className="hidden md:block bg-[#66a038] w-full md:w-[50%] mt-8 md:mt-20 pt-8 pl-8 md:pl-20 h-32 md:h-45 z-30 flex items-center px-6 md:px-12 order-1 md:order-1">
          <h2 className="text-3xl md:text-5xl lg:text-5xl  font-semibold text-white">
                    Frequently Asked Questions
          </h2>
       
        </div>

        {/* RIGHT IMAGE - Full width on small screens, partial on larger */}
      <div className="w-full md:w-[60%] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden relative z-20 md:-mt-16 md:ml-[-8%] order-2 md:order-2 rounded-lg shadow-xl">
  <img
    src="https://www.thecleaningauthority.com/assets/banner/general.2012151513550.jpg"
    alt="Interior"
    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-103"
  />
</div>


      </div>
    </section>
  );
};

export default HeroFaq;