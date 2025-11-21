import React from 'react';

function Header() {
  return (
    <section id="SubBanner" className="relative w-full overflow-hidden bg-gradient-to-r from-[#4A7C2A] to-[#66A038]">
      <div className="flex flex-col md:flex-row md:items-center w-full min-h-[280px]">
        {/* Text Content */}
        <div className="w-full md:w-2/5 flex items-center justify-center p-8 md:p-12 relative">
          <div className="text-center md:text-left max-w-md">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                Professional Service
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Premium House Cleaning
            </h1>
            <p className="text-white/90 text-lg md:text-xl mb-6 font-light">
              Experience the difference with our expert cleaning services
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button className="px-6 py-3 bg-white text-[#66A038] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-x-8 translate-y-8"></div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-3/5 relative">
          <picture className="w-full h-full block">
            <img 
              src="https://www.thecleaningauthority.com/assets/banner/general.2012151513550.jpg" 
              alt="Professional house cleaning service" 
              loading="lazy"
              className="w-full h-[300px] md:h-full object-cover"
            />
          </picture>
          
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#66A038] via-transparent to-transparent opacity-20"></div>
          
          {/* Stats overlay */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#66A038]">500+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#66A038]">98%</div>
                <div className="text-xs text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-white"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Header;