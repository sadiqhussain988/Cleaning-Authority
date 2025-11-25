import React from "react";
import { FaLeaf, FaChartLine, FaClock } from "react-icons/fa";

const FeatureInvestment = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#F7FBFF] to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE CARDS */}
        <div className="space-y-10">

          {/* Card 1 */}
          <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 border border-[#dceefa]">
            <div className="w-16 h-16 rounded-2xl bg-[#E5F7EF] flex items-center justify-center shadow text-[#4fa33a] text-3xl">
              <FaLeaf />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
              $76,000 - $147,100 <br /> Initial Investment
            </h3>
          </div>

          {/* Card 2 */}
          <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 border border-[#e5f6e9]">
            <div className="w-16 h-16 rounded-2xl bg-[#E9F9EC] flex items-center justify-center shadow text-[#4fa33a] text-3xl">
              <FaChartLine />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
              Average Franchisee Revenues <br /> of $2.4 Million*
            </h3>
          </div>

          {/* Card 3 */}
          <div className="flex items-center gap-6 p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition duration-300 border border-[#dceefa]">
            <div className="w-16 h-16 rounded-2xl bg-[#E5F1F9] flex items-center justify-center shadow text-[#0079C1] text-3xl">
              <FaClock />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
              Monday – Friday <br /> 8AM – 5PM Business
            </h3>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://cleaningauthorityfranchise.com/wp-content/uploads/2024/05/cleaning-service-franchise-owner.jpg"
            alt="Cleaning team"
            className="rounded-xl shadow-2xl w-full max-w-md md:max-w-lg hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
};

export default FeatureInvestment;
