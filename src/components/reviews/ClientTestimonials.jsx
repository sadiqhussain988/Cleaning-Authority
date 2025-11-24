import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Connie C.",
    text: "Both addresses sparkled after the cleaning. Thank you for being accommodating and professional.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "I have been with the Cleaning Authority for over 10 years. They are prompt, reliable, and very courteous. They do a great job. I highly recommend them.",
    rating: 4.5,
  },
  {
    name: "Suzie",
    text: "Very pleased. It is a challenge to find a service that provides what you pay for and more. Phim, the owner, came out and provided a very fair estimate...",
    rating: 5,
  },
  {
    name: "London J.",
    text: "Wonderful job through out my house. Very kind and have enjoyed my experience. Thank you from this mama of 4 for helping me with my clean home.",
    rating: 5,
  },
  {
    name: "Beibit A.",
    text: "The cleaning Authority absolutely amazing!!! Best cleaners we've ever had by far!! You won't be disappointed.",
    rating: 4.5,
  },
  {
    name: "Chaya S.",
    text: "This is my first time having cleaners and the ladies were an absolute doll. Very professional.",
    rating: 4,
  },
  {
    name: "Ronald",
    text: "Your assigned crew always does a thorough and conscientious job. We are very satisfied and happy with all them.",
    rating: 5,
  },
  {
    name: "Kathy",
    text: "Olga and Amalia are great. They do a lovely job and are always so pleasant.",
    rating: 4.5,
  },
  {
    name: "Kathy",
    text: "All of the employees have been friendly, thorough and do a great job.",
    rating: 4.5,
  },
  {
    name: "Reyna Altman",
    text: "The team of two did a great job. It's a 5 star review.",
    rating: 4.5,
  },
  {
    name: "Phyllis",
    text: "Excellent!",
    rating: 4.5,
  },
  {
    name: "Orange Resident",
    text: "The bathrooms were spotless. Everything sparkled. Very pleased!",
    rating: 4.5,
  },
  {
    name: "Tustin Resident",
    text: "Thank you so much for all you do to make our home beautiful!",
    rating: 4.5,
  },
  {
    name: "Tustin Resident",
    text: "I am very impressed. My house is cleaner than ever!",
    rating: 4.5,
  },
  {
    name: "Irvine Resident",
    text: "Everything sparkled. Extremely happy with their service!",
    rating: 4.5,
  },
  {
    name: "North Tustin Resident",
    text: "Everything was great - I was very pleased with the cleaning!",
    rating: 4.5,
  },
  {
    name: "Irvine Resident",
    text: "The crew did an excellent job! My home smells fresh and clean.",
    rating: 4.5,
  },
];

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef();
  const autoSlideRef = useRef();

  const visibleCards = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleCards + 1));
  };

  const goToSlide = (index) => setCurrentIndex(index);

  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlideRef.current);
  }, []);

  const handleMouseEnter = () => clearInterval(autoSlideRef.current);
  const handleMouseLeave = () => {
    autoSlideRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
        <div className="w-20 h-1 bg-[#4fa33a] mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Some of these reviews may have been submitted on other websites. We are not affiliated with or sponsored by these websites.
        </p>
        <button className="bg-[#4fa33a] hover:bg-[#0079C1] text-white font-semibold py-3 px-6 rounded-md shadow-lg transition-all duration-300 text-sm md:text-md mt-10">
          Leave a Review
        </button>
      </div>

      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Carousel Track */}
        <div className="overflow-hidden relative">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 animate-fade">
                <div className="bg-white p-8 rounded-xl shadow-lg h-full border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-transform duration-500">
                  
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1 text-yellow-400">
                      {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      {testimonial.rating % 1 !== 0 && <FaStarHalfAlt />}
                    </div>
                  </div>

                  <p className="mb-6 italic">"{testimonial.text}"</p>

                  <h4 className="font-semibold text-[#4fa33a]">{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full bg-gray-300 transition-all duration-300 ${
                index === currentIndex ? "scale-125 bg-[#4fa33a]" : ""
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
