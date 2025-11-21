import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function RoomCleaningSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const rooms = [
    {
      title: "BATHROOMS",
      image: "https://www.thecleaningauthority.com/assets/rotation-system/bathrooms.2102080931583.webp",
    },
    {
      title: "KITCHENS",
      image: "https://www.thecleaningauthority.com/assets/rotation-system/kitchens.2102080932307.webp",
    },
    {
      title: "LIVING AREAS",
      image: "https://www.thecleaningauthority.com/assets/rotation-system/living-areas.2102080933014.webp",
    },
    {
      title: "SLEEPING AREAS",
      image: "https://www.thecleaningauthority.com/assets/rotation-system/sleeping-areas.2102080934047.webp",
    },
  ];

  return (
    <section className="relative w-full py-16 px-4 md:px-20 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-full mx-auto">

        {/* Left Grid: Room Images */}
        <div className="grid grid-cols-2 gap-4 max-w-full">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="text-center group relative overflow-hidden rounded-md"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Headings only above first 2 images */}
              {index < 2 && (
                <h3 className="mb-2 text-xl font-bold text-black">
                  {room.title === "BATHROOMS" ? "Bathroom" : "Kitchens"}
                </h3>
              )}

              <img
                src={room.image}
                alt={room.title}
                className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105 group-hover:opacity-70"
              />

              {index >= 2 && (
                <h3 className="mt-2 font-bold text-black">{room.title}</h3>
              )}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div data-aos="fade-left" data-aos-delay="200">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-black">
            Keeping Your Home Cleaner With <br /> Our Detail-Clean Rotation System®
          </h2>
          <p className="text-gray-700 mb-6">
            We use a careful system to deep clean each of your rooms on a rotating
            basis. <br /> This ensures your home is always thoroughly cleaned and
            sanitized, from <br /> the areas you use daily to that hard-to-clean grout!
          </p>
          <button className="bg-[#66A038] text-white px-5 py-2 rounded-md hover:bg-blue-500 transition">
            LEARN ABOUT OUR SYSTEM
          </button>
        </div>
      </div>
    </section>
  );
}
