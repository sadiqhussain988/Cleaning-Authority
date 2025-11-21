import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesWeOffer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: "House Cleaning & Sanitizing",
      icon: "/icons/services.png",
      link: "#",
    },
    {
      title: "Apartment Cleaning & Sanitizing",
      icon: "/icons/services.png",
      link: "#",
    },
    {
      title: "Move In / Move Out Cleaning",
      icon: "/icons/services.png",
      link: "#",
    },
    {
      title: "One-Time Cleans",
      icon: "/icons/services.png",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-16 overflow-hidden">
      <h2
        className="text-center text-4xl font-semibold mb-14"
        data-aos="fade-up"
      >
        Services We Offer
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div
              className="w-24 h-24 mb-6 bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: `url(${service.icon})` }}
            ></div>

            <h3 className="text-xl text-blue-700 font-medium mb-3 leading-snug">
              {service.title}
            </h3>

            <a
              href={service.link}
              className="text-green-600 font-semibold hover:underline"
            >
              LEARN MORE
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
