import React, { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [activeSection, setActiveSection] = useState('Bathrooms');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const sections = [
    {
      id: 'Bathrooms',
      title: 'Bathrooms',
      image: 'images/bathrooms.jpg',
      normalClean: [
        'Tile walls, bathtubs, and showers cleaned and sanitized',
        'Shower doors cleaned and sanitized',
        'Vanity and sink cleaned and sanitized',
        'Mirrors and chrome fixtures cleaned and shined',
        'Floors cleaned/carpets vacuumed',
        'Toilets thoroughly cleaned',
        'Window sills, ledges, and blinds dusted',
        'Cobwebs removed',
        'Doors and door frames spot cleaned',
        'General dusting'
      ],
      rotationAdditions: [
        'Tile grouting scrubbed',
        'Shower door given extra attention',
        'Doors and door frames hand wiped',
        'Knickknacks individually cleaned',
        'Fronts of cabinets hand wiped',
        'Baseboards and window sills hand wiped',
        'Floors given extra attention',
        'Faucets, sinks, and drains cleaned with a toothbrush'
      ]
    },
    {
      id: 'Kitchens',
      title: 'Kitchens',
      image: 'images/kitchens.jpg',
      normalClean: [
        'Counter tops cleaned and sanitized',
        'Outside of range hood cleaned and sanitized',
        'Top and front of range cleaned',
        'Drip pans or glass top surfaces wiped',
        'Sinks cleaned and sanitized and chrome shined',
        'Fronts of all appliances cleaned',
        'Floors vacuumed and damp mopped',
        'Window sills, ledges, and blinds dusted',
        'Cobwebs removed',
        'Microwave wiped out',
        'Doors and door frames spot cleaned',
        'General dusting'
      ],
      rotationAdditions: [
        'Inside of range hood cleaned',
        'Drip pans or glass top surfaces cleaned',
        'Doors and door frames hand wiped',
        'Appliances cleaned and shined',
        'Knickknack areas cleaned',
        'Fronts of cabinets hand wiped',
        'Baseboards and window sills hand wiped',
        'Floors given extra attention',
        'All kitchen furniture hand wiped'
      ]
    },
    {
      id: 'Living-Areas',
      title: 'Living Areas',
      image: 'images/living-areas.jpg',
      normalClean: [
        'Flat areas hand wiped and sanitized',
        'Doors and door frames spot cleaned',
        'Cobwebs removed',
        'Picture frames dusted',
        'Ceiling fans dusted',
        'Lamp shades dusted',
        'Intricate items dusted',
        'Heavy knickknack areas dusted',
        'Window sills, ledges, and blinds dusted',
        'Clean hard surfaced floors: vacuumed and damp mopped',
        'Stairs vacuumed',
        'Empty closet floors vacuumed',
        'All readily accessible floors vacuumed'
      ],
      rotationAdditions: [
        'Doors and door frames hand wiped',
        'Window sills and ledges hand wiped',
        'Knickknacks individually cleaned',
        'Furniture surfaces hand wiped',
        'Baseboards hand wiped',
        'Furniture and upholstery vacuumed',
        'Carpet edges vacuumed',
        'Floors given extra attention',
        'Accessible areas under furniture vacuumed'
      ]
    },
    {
      id: 'Sleeping-Areas',
      title: 'Sleeping Areas',
      image: 'images/sleeping-areas.jpg',
      normalClean: [
        'Flat areas hand wiped and sanitized',
        'Doors and door frames spot cleaned',
        'Cobwebs removed',
        'Picture frames dusted',
        'Ceiling fans dusted',
        'Lamp shades dusted',
        'Intricate items dusted',
        'Heavy knickknack areas dusted',
        'Window sills, ledges, and blinds dusted',
        'Clean hard surfaced floors: vacuumed and damp mopped',
        'Stairs vacuumed',
        'Empty closet floors vacuumed',
        'All readily accessible floors vacuumed'
      ],
      rotationAdditions: [
        'Doors and door frames hand wiped',
        'Window sills and ledges hand wiped',
        'Knickknacks individually cleaned',
        'Furniture surfaces hand wiped',
        'Baseboards hand wiped',
        'Furniture and upholstery vacuumed',
        'Carpet edges vacuumed',
        'Floors given extra attention',
        'Accessible areas under furniture vacuumed'
      ]
    }
  ];

  const activeSectionData = sections.find(section => section.id === activeSection);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Leaf icon component - now in green
  const LeafIcon = () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 mr-3" fill="#10b981">
      <path d="M3.426 17.764S-5.344 4.093 20.694 0c0 0 5.576 13.896-11.647 17.854 0 0-3.705 0.084-2.563 6.086 0 0-1.213 0.134-1.439 0 0 0-1.079-10.987 11.512-20.027 0 0-10.658 4.407-13.132 13.851"/>
    </svg>
  );

  // Improved Checkmark icon
  const CheckmarkIcon = () => (
    <div className="w-6 h-6 mr-4 flex-shrink-0 bg-green-100 rounded-full flex items-center justify-center">
      <svg viewBox="0 0 20 20" className="w-3 h-3 text-green-600" fill="currentColor">
        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
      </svg>
    </div>
  );

  // Improved Plus icon
  const PlusIcon = () => (
    <div className="w-6 h-6 mr-4 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
      <svg viewBox="0 0 20 20" className="w-3 h-3 text-blue-600" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
      </svg>
    </div>
  );

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-4 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-2 md:mb-4">Our Cleaning Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services tailored to every room in your home
          </p>
        </div>

        {/* Image Navigation */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 ${
                  activeSection === section.id 
                    ? 'ring-4 ring-emerald-500 ring-offset-4 ring-offset-gray-50 scale-105' 
                    : 'hover:shadow-xl'
                } ${
                  isVisible 
                    ? `opacity-100 translate-y-0 animate-float` 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center p-6">
                  <div className="text-center">
                    <strong className="text-white text-xl font-bold block mb-2">
                      {section.title}
                    </strong>
                    <div className={`w-12 h-1 mx-auto transition-all duration-300 ${
                      activeSection === section.id ? 'bg-emerald-400' : 'bg-white/50'
                    }`}></div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Section Content */}
        {activeSectionData && (
          <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm border border-gray-100 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Section Header */}
            <div className="flex items-center justify-center mb-12 pb-8 border-b border-gray-200">
              <div className="flex items-center bg-emerald-50 px-6 py-3 rounded-full border border-emerald-100 animate-pulse">
                <LeafIcon />
                <h2 className="text-3xl font-bold text-gray-900">{activeSectionData.title}</h2>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              {/* Normal Clean */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-green-500 rounded-full mr-4 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-gray-900">During A Normal Clean</h3>
                </div>
                <ul className="space-y-2 flex-1">
                  {activeSectionData.normalClean.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-start group hover:bg-green-50 p-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <CheckmarkIcon />
                      <span className="text-gray-700 leading-relaxed text-base font-medium group-hover:text-gray-900 transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rotation Clean Additions */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-8 bg-blue-500 rounded-full mr-4 animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Rotation Clean Additions</h3>
                </div>
                <ul className="space-y-2 flex-1">
                  {activeSectionData.rotationAdditions.map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-start group hover:bg-blue-50 p-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2"
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <PlusIcon />
                      <span className="text-gray-700 leading-relaxed text-base font-medium group-hover:text-gray-900 transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
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
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        li {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        li:nth-child(1) { animation-delay: 0.1s; }
        li:nth-child(2) { animation-delay: 0.2s; }
        li:nth-child(3) { animation-delay: 0.3s; }
        li:nth-child(4) { animation-delay: 0.4s; }
        li:nth-child(5) { animation-delay: 0.5s; }
        li:nth-child(6) { animation-delay: 0.6s; }
        li:nth-child(7) { animation-delay: 0.7s; }
        li:nth-child(8) { animation-delay: 0.8s; }
        li:nth-child(9) { animation-delay: 0.9s; }
        li:nth-child(10) { animation-delay: 1.0s; }
        li:nth-child(11) { animation-delay: 1.1s; }
        li:nth-child(12) { animation-delay: 1.2s; }
        li:nth-child(13) { animation-delay: 1.3s; }
      `}</style>
    </div>
  );
};

export default ServicesSection;