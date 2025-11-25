import React from 'react'

const LifeShortSection = () => {
  return (
    <section className='px-2 lg:px-20 md:mt-10 mb-10 mt-6 md:mt-0 md:mb-14'>
      <div className="main relative bg-gradient-to-br from-[#0079c1] to-blue-700 overflow-hidden rounded-2xl shadow-lg p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center text-left border border-blue-200 animate-float-gentle">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-white/5 animate-pulse-slow"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-4 h-4 bg-white/10 rounded-full top-1/4 left-1/4 animate-float-1"></div>
          <div className="absolute w-3 h-3 bg-white/15 rounded-full top-3/4 right-1/3 animate-float-2"></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full bottom-1/3 left-1/2 animate-float-3"></div>
          <div className="absolute w-5 h-5 bg-white/5 rounded-full top-1/2 right-1/4 animate-float-4"></div>
        </div>

        {/* Main Leaf SVG Background */}
        <svg 
          className="absolute top-4 right-4 w-48 h-48 md:w-64 md:h-64 opacity-20 text-white animate-float-leaf-1" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          role="presentation"
        >
          <path d="M3.426 17.764S-5.344 4.093 20.694 0c0 0 5.576 13.896-11.647 17.854 0 0-3.705 0.084-2.563 6.086 0 0-1.213 0.134-1.439 0 0 0-1.079-10.987 11.512-20.027 0 0-10.658 4.407-13.132 13.851"></path>
        </svg>

        {/* Hero Text */}
        <header className="relative z-10 max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-6 hover:scale-105 hover:transform hover:transition-transform hover:duration-500">
            Life's Too Short To Clean Your Own Home®.
          </h2>
          
          {/* Call to Action Button */}
          <a 
            href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&amp;f=274&amp;c=1&amp;s=5&amp;utm_campaign=&amp;utm_source=&amp;utm_medium=&amp;utm_content=&amp;fbclid=&amp;t=949.613.5338&amp;sa=-1737710574"
            className="inline-block bg-white hover:bg-gray-100 text-[#0079c1] font-semibold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 transform hover:-translate-y-0.5 animate-bounce-subtle"
            target="_blank" 
            id="LocalWideCTA_1" 
            aria-describedby="audioeye_new_window_message"
          >
            Get A Free Estimate
          </a>
        </header>

        {/* Bottom Leaf SVG */}
        <svg 
          className="absolute bottom-4 left-4 w-32 h-32 md:w-48 md:h-48 opacity-15 text-white animate-float-leaf-2" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          role="presentation"
        >
          <path d="M3.426 17.764S-5.344 4.093 20.694 0c0 0 5.576 13.896-11.647 17.854 0 0-3.705 0.084-2.563 6.086 0 0-1.213 0.134-1.439 0 0 0-1.079-10.987 11.512-20.027 0 0-10.658 4.407-13.132 13.851"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.01);
          }
        }
        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.1;
          }
        }
        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(10px, -15px) rotate(90deg);
          }
          50% {
            transform: translate(20px, 0) rotate(180deg);
          }
          75% {
            transform: translate(10px, 15px) rotate(270deg);
          }
        }
        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-15px, 10px) rotate(-90deg);
          }
          50% {
            transform: translate(0, 20px) rotate(-180deg);
          }
          75% {
            transform: translate(15px, 10px) rotate(-270deg);
          }
        }
        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -10px) scale(1.2);
          }
          66% {
            transform: translate(-10px, 15px) scale(0.8);
          }
        }
        @keyframes float4 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-10px, -5px) rotate(45deg);
          }
          50% {
            transform: translate(5px, -10px) rotate(90deg);
          }
          75% {
            transform: translate(10px, 5px) rotate(135deg);
          }
        }
        @keyframes floatLeaf1 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(5px, -3px) rotate(2deg);
          }
          50% {
            transform: translate(3px, 2px) rotate(-1deg);
          }
          75% {
            transform: translate(-2px, -1px) rotate(1deg);
          }
        }
        @keyframes floatLeaf2 {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-3px, 2px) rotate(-2deg);
          }
          50% {
            transform: translate(2px, -1px) rotate(1deg);
          }
          75% {
            transform: translate(-1px, 3px) rotate(-1deg);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        .animate-float-gentle {
          animation: floatGentle 6s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .animate-float-1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float3 12s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: float4 9s ease-in-out infinite;
        }
        .animate-float-leaf-1 {
          animation: floatLeaf1 15s ease-in-out infinite;
        }
        .animate-float-leaf-2 {
          animation: floatLeaf2 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default LifeShortSection