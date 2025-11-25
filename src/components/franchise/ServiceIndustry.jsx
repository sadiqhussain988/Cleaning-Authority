import React from "react";

const ServiceIndustry = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#E5F1F9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://cleaningauthorityfranchise.com/wp-content/uploads/2024/05/own-cleaining-service-franchise-1.jpg"
            alt="Service"
            className="rounded-xl shadow-2xl w-full max-w-md md:max-w-lg hover:scale-105 transition duration-500 h-96 bg-cover"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-[#0079C1] mb-6">
            Own a Part of the Growing Cleaning Service Industry
          </h2>
          <p className="text-lg text-gray-900 leading-relaxed mb-8">
          The Cleaning Authority is a residential cleaning franchise that offers significant expansion potential and is a prime opportunity for those looking to start a cleaning service franchise. By franchising with us, forward-thinking individuals can build a business they’re proud of while enjoying long-term benefits. Investing in our <b>residential cleaning franchise</b> means investing in yourself, creating a rewarding future, and effectively managing the cost of running a business with an established system. Our franchisees have achieved an impressive average annual revenue of <b>$2.4 million*</b>. Discover how to start a cleaning service franchise with an established model and see the opportunity for yourself!</p>

          <button className="bg-[#4fa33a] text-white px-6 py-4 rounded-md text-md font-semibold hover:bg-[#0079C1] transition-all duration-300 hover:shadow-lg">
            See How You Will Benefit
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServiceIndustry;

