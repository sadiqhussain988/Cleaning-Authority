import React from "react";
import { GoDotFill } from "react-icons/go";

const Card = ({ title, items }) => {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-6 w-full hover:scale-105 transition-transform duration-300">
      {title && <h3 className="text-2xl font-bold mb-6 text-[#0079C1]">{title}</h3>}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 bg-gradient-to-r from-[#e0f7fa] to-[#f1f8e9] rounded-xl px-4 py-3 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
          >
            <GoDotFill className="text-[#7BC043] text-2xl flex-shrink-0 animate-pulse" />
            <span className="text-[#0079C1] font-medium text-left">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const OurPositively = () => {
  const firstCardItems = [
    { name: "Homeowners we service by delivering detail-oriented, consistent services." },
    { name: "People we employ by providing stable jobs with reasonable hours and wages." },
    { name: "Franchise owners we support by helping them utilize their business as a vehicle to build the lifestyle they want and desire." },
    { name: "Future generations by using environmentally-friendly cleaning products." },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-15 md:mb-20 text-center text-[#0079C1]">
        Our mission is to positively impact the quality of life of:
      </h2>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
        {/* Left Column */}
        <div className="md:w-1/2">
          <Card items={firstCardItems} />
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col gap-6 justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0079C1] animate-pulse">
            Stop Coming Home to a Second Job!
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We can help you save time and focus on the things you love and matter most to you, including your family and friends. Let us handle the hassle of keeping your house clean. You have better things to do! Get in touch with The Cleaning Authority today.
          </p>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0079C1] to-[#00bfff] text-white rounded-3xl px-6 py-6 shadow-2xl text-center">
            <h3 className="text-xl mb-5 text-gray-100 ">
              Invest in your free time with our services. Contact The Cleaning Authority to receive a free personalized estimate today. We look forward to helping you!
            </h3>
            <a
              href="https://www.thecleaningauthority.com/why-hire-us-/satisfaction-guaranteed/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#4fa33a] px-6 py-3 rounded-full shadow-lg hover:bg-[#0079C1] hover:scale-105 transition-all duration-300 font-semibold uppercase text-sm md:text-md"
            >
              Immediate Online Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPositively;
