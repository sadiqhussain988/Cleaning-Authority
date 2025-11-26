import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import { Link } from 'react-router-dom';

const AuthorityBrands = () => {
  const brands = [
    { src: "/images/asp.png", alt: "Asp", path:"https://www.asppoolco.com/" },
    { src: "/images/ben-franklin.png", alt: "Benjamin Franklin", path:"https://www.benjaminfranklinplumbing.com/" },
    { src: "/images/TCA.png", alt: "Cleaning Authority", path:"https://www.thecleaningauthority.com/#~6394d625-1406-4d9b-be3c-f39260293a87" },
    { src: "/images/DoodyCalls.png", alt: "Doody Calls", path:"https://www.doodycalls.com/" },

    { src: "/images/Drymedic-Logo.png", alt: "Drymedic", path:"https://www.drymedic.com/" },
    { src: "/images/homewatch.png", alt: "Homewatch",path:"https://www.homewatchcaregivers.com/" },
    { src: "/images/JNK.png", alt: "JNK" ,path:"https://www.junkluggers.com/" },
    { src: "/images/lawnSquad.png", alt: "Lawn Squad" , path:"https://lawnsquad.com/" },
    { src: "/images/miskySpark.png", alt: "Misky Spark" , path:"https://www.mistersparky.com/" },
    { src: "/images/monster.png", alt: "Monster" ,path:"https://www.monstertreeservice.com/" },
    { src: "/images/msq.png", alt: "MSQ" , path:"https://www.mosquitosquad.com/" },
    { src: "/images/one-hour.png", alt: "One Hour" , path:"https://www.mosquitosquad.com/" },
    { src: "/images/SM.png", alt: "Screen Mobile" , path:"https://www.screenmobile.com/" },
    { src: "/images/STOP.png", alt: "STOP" , path:"https://www.stoprestoration.com/" },
    { src: "/images/woofies.png", alt: "Woofies" , path:"https://www.woofies.com/" },
  ];

 const swiperConfig = {
  modules: [Autoplay, FreeMode],
  autoplay: {
    delay:0.8,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed:2000,
  loop: true,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 20, // default for desktop
  breakpoints: {
    0: {       // from 0px up
      spaceBetween: 5,
    },
    640: {     // from 640px up
      spaceBetween: 20,
    },
    1024: {    // from 1024px up
      spaceBetween: 50,
    },
  },
  className: "brands-swiper"
};


  return (
    <div className="bg-gray-50 py-16 px-4  rounded-2xl ">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
        Part of the Authority Brands Family
        </h3>
        <p className='lg:w-[58%] mx-auto text-center text-gray-700'>
            Authority Brands is the leading provider of in-home services, building brands that support the success of franchisees as well as better the lives of the homeowners we serve and the people we employ.
        </p>
        
        <Swiper {...swiperConfig}>
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <Link to={brand.path} className="flex items-center justify-center h-20 px-8 mt-8">
                <img 
                  src={brand.src} 
                  alt={brand.alt}
                  className="h-12 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AuthorityBrands;