import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AuthorityCares = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  const buttonAnimation =
    'transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg';

  return (
    <section className="py-0 md:py-20 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* --- Left Content Section --- */}
        <div className="lg:col-span-2 mt-15">
          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            data-aos="fade-up"
          >
            The Cleaning Authority <span className="text-blue-600">CARES</span>
          </h2>
          
          {/* Paragraph */}
          <p
            className="text-gray-700 text-lg mb-8 max-w-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The Cleaning Authority Matthews-Waxhaw is committed to serving the local
            community in ways that really matter. Learn how our team has helped make
            a difference. If you want to get involved, learn how you can participate in the
            giving.
          </p>
          
          {/* Button */}
          <button
            className={`text-white bg-[#4fa33a] hover:bg-[#0b63a6] cursor-pointer py-3 px-6 rounded-lg shadow-md ${buttonAnimation}`}
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            HOW TO PARTICIPATE
          </button>
        </div>

        {/* --- Right Visual Section --- */}
        <div
          className="lg:col-span-1 flex flex-col space-y-4 overflow-hidden rounded-xl shadow-2xl"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {/* Image Container with hover group */}
          <div className="relative group flex-grow min-h-[350px] sm:min-h-[400px] rounded-xl overflow-hidden">
            
            {/* The Image */}
            <img 
              src="https://www.thecleaningauthority.com/images/ctas/charity-cta.1803081044560.jpg"
              alt="A group of smiling people with their hands raised in the air" 
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 bg-blue-600/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl text-center">
              <p className="text-lg font-light mb-2 tracking-wide">Charity Donated to:</p>
              <p className="text-2xl font-bold drop-shadow-lg">Matthews-Waxhaw's Charity</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AuthorityCares;
