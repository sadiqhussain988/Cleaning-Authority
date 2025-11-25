import React from "react";
import { Link } from "react-router-dom";

const HowToHelpContent = () => {
  const steps = [
    {
      number: "1",
      title: "Receive a Bag",
      description:
        "A bag from your Professional Housecleaners will be left in your home with information about the current food campaign we are running.",
    },
    {
      number: "2",
      title: "Fill it Up",
      description:
        "Between visits, we ask that you fill the bag with foods you'd like to donate.",
    },
    {
      number: "3",
      title: "Cleaner Pick-Up and Transport",
      description:
        "Leave the bag out in the open with your donation inside for your Professional Housecleaners to take back to the office.",
    },
    {
      number: "4",
      title: "Food Bank Delivery",
      description:
        "Each franchise owner will deliver the food they've collected to a local food bank of their choice.",
    },
  ];

  const foodItems = [
    "Canned Vegetables",
    "Canned Fruit, Fruit Cups, or Dried Fruit",
    "Mixed Nuts",
    "Peanut Butter",
    "Canned Tuna, Chicken, and Salmon",
    "Whole Grain Pasta",
    "Brown Rice",
    "Instant Oatmeal",
    "Bottle Water",
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* MAIN CONTENT */}
          <main className="w-full lg:w-3/5 space-y-12">

            {/* Header */}
            <header className="text-center lg:text-left space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  How You Can <span className="text-[#66a038]">Get Involved</span>
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                  We Can't Do This Without You!
                </h2>
              </div>

              {/* Image moved below header */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="/images/TCA-Care.jpg"
                  alt="The Cleaning Authority Cares"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </header>

            {/* Intro Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                It's easy to get involved and make a difference in your community. Here's how:
              </p>
            </div>

            {/* Steps - Improved Design */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:border-[#66a038]/20 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#66a038] text-white flex items-center justify-center text-xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#66a038] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Collection Section */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 text-center">What We're Collecting Now</h2>

              <p className="text-gray-700 leading-relaxed text-center">
                Thank you to everyone who participated in our summer food drive.
                We will be doing another food collection this winter, so look
                out for more information later this year.
              </p>

              {/* Item Card */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <p className="text-gray-700 font-medium mb-8 text-center text-lg">
                  Please put items from this list into The Cleaning Authority CARES bag and leave it out during one of your house cleanings:
                </p>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                  {/* Image */}
                  <div className="w-full lg:w-2/5">
                    <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                      <img
                        src="/images/TCA-Cares-Bag.jpg"
                        alt="TCA Cares Bag"
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* List */}
                  <div className="w-full lg:w-3/5">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {foodItems.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#f8fcf5] transition-colors duration-200">
                          <span className="w-2 h-2 bg-[#66a038] rounded-full flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-center">
                In addition, we can also collect any other non-perishable food
                items you might have on hand. For more information, contact your
                local office of The Cleaning Authority.
              </p>

              {/* Banner */}
              <div className="bg-gradient-to-r from-[#66a038] to-[#5a9430] text-white py-8 px-6 rounded-2xl text-center shadow-lg relative">
                {/* Leaf Icon */}
                <div className="absolute top-4 left-6 opacity-20">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 right-6 opacity-20">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7 8 17 8 17 8Z"/>
                  </svg>
                </div>
                
                <p className="text-xl font-bold tracking-wide relative z-10">
                  We appreciate your support in this endeavor to end hunger!
                </p>
              </div>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="w-full lg:w-2/5">
            <div className="sticky top-24 space-y-8">
              {/* Menu Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-[#66a038] to-[#5a9430] p-6">
                  <h2 className="text-xl font-bold text-white text-center">Cares</h2>
                </div>

                <div className="p-6">
                  <Link
                    to="/cares/how-to-help/"
                    className="block p-4 rounded-xl bg-[#f8fcf5] border-2 border-[#66a038] font-semibold text-[#4a7c2a] text-center hover:bg-[#eef7e8] transition-all duration-300"
                  >
                    How To Help
                  </Link>
                </div>
              </div>

              {/* CTA BOX */}
              <div className="bg-gradient-to-br from-[#66a038] to-green-600 text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 animate-fade-in-up">
                <strong className="block text-2xl mb-2">Save Time. Save Money.</strong>
                <p className="text-green-100 mb-6">Get your free estimate today and discover the difference.</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#66a038] font-bold rounded-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300"
                >
                  Get A Free Estimate
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default HowToHelpContent;