import React from "react";

const StepSuccess = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#E5F1F9]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0079C1] mb-6">
          Steps to Success
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          Professionals like you join The Cleaning Authority in six simple steps.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">

          {[
            "Express Your Interest",
            "Connect With Our Experts",
            "Talk With Other Franchisees",
            "Attend Meet Your Team Day",
            "Sign Franchisee Agreement",
            "Attend Training in Maryland"
          ].map((title, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#0079C1] text-white text-2xl flex items-center justify-center font-bold animate-pulse">
                {index + 1}
              </div>
              <h3 className=" text- text-[#0079C1] font-semibold">
                {title}
              </h3>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button className="px-10 py-4 bg-[#4fa33a] text-white rounded-full font-semibold hover:bg-[#3e8c2f] transition shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default StepSuccess;
