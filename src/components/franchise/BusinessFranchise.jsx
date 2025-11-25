import React from "react";
import { FaChartLine, FaDollarSign, FaUsers } from "react-icons/fa";

const BusinessFranchise = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0079C1] mb-6">
          Elevate Your Future with Our Leading Cleaning Business Franchise!
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          The Cleaning Authority has helped over 225 individuals across North America achieve their dreams of successful franchise ownership. 
          If you’re looking for an <b>affordable cleaning franchise, we’re here to support you every step of the way.</b> 
          No matter where you plan to run your business, our experienced team is ready to guide you toward success. Explore our cleaning franchise for sale and take the first step toward building a thriving business.
        </p>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {/* Card 1 */}
          <div className="p-8 bg-[#E5F1F9] rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-[#4fa33a] text-5xl mb-4 flex justify-center animate-bounce">
              <FaChartLine />
            </div>
            <h3 className="text-xl text-[#0079C1] font-semibold mb-3">
              Marketing Designed For You
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our marketing program drives customers to your doorstep through digital and print strategies, letting you focus on operating your business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-[#F1F9EC] rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-[#4fa33a] text-5xl mb-4 flex justify-center animate-bounce">
              <FaDollarSign />
            </div>
            <h3 className="text-xl text-[#0079C1] font-semibold mb-3">
              Enjoy Recurring Revenue From a Repeat Customer Base
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Customers typically schedule cleanings every two weeks, so you don’t start from zero every month.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-[#E5F1F9] rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="text-[#4fa33a] text-5xl mb-4 flex justify-center animate-bounce">
              <FaUsers />
            </div>
            <h3 className="text-xl text-[#0079C1] font-semibold mb-3">
              Build Towards Absentee Ownership
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Infrastructure to manage daily operations gives franchisees more freedom to focus on what they love.
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-4 bg-[#0079C1] text-white rounded-md font-semibold hover:bg-[#005f94] transition shadow-md hover:shadow-lg">
            Explore Available Markets
          </button>
          <button className="px-10 py-4 bg-[#4fa33a] text-white rounded-md font-semibold hover:bg-[#3e8c2f] transition shadow-md hover:shadow-lg">
            Become an Owner
          </button>
        </div>

      </div>
    </section>
  );
};

export default BusinessFranchise;
