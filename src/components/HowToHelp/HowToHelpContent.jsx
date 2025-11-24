import React from "react";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

          {/* MAIN CONTENT */}
          <main className="w-full lg:w-3/5 space-y-10">

            {/* Header */}
            <header className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                How You Can <span className="text-[#66a038]">Get Involved</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                We Can't Do This Without You!
              </h2>
            </header>

            {/* Intro Highlight */}
            <section className="bg-gradient-to-r from-[#f8fcf5] to-[#f0f7e9] rounded-xl p-6 shadow-sm border border-[#e8f4e0]">
              <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                It's easy to get involved and make a difference in your community.
                Here's how:
              </p>
            </section>

            {/* Steps */}
            <section className="grid gap-5">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-5 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#66a038] text-white rounded-lg flex items-center justify-center text-xl font-bold group-hover:scale-105 transition-transform duration-300">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
              <img
                src="https://www.thecleaningauthority.com/images/TCA-Cares[3].jpg"
                alt="The Cleaning Authority Cares"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Collection Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                What We're Collecting Now
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Thank you to everyone who participated in our summer food drive.
                We will be doing another food collection this winter, so look
                out for more information later this year.
              </p>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <p className="text-gray-700 font-medium mb-6 text-center">
                  Please put items from this list into The Cleaning Authority
                  CARES bag and leave it out during one of your house cleanings:
                </p>

                <div className="flex flex-col lg:flex-row gap-6 items-start">

                  {/* Image */}
                  <div className="w-full lg:w-2/5 rounded-lg overflow-hidden shadow-sm border border-gray-200">
                    <img
                      src="https://www.thecleaningauthority.com/images/TCA-Cares-Bag[1].jpg"
                      alt="The Cleaning Authority Care paper bag"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Food List */}
                  <ul className="w-full lg:w-3/5 space-y-2">
                    {foodItems.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 group py-1"
                      >
                        <span className="w-2 h-2 bg-[#66a038] rounded-full group-hover:scale-125 transition-all duration-300"></span>
                        <span className="text-gray-600 group-hover:text-gray-800 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                In addition, we can also collect any other non-perishable food
                items you might have on hand. For more information, contact your
                local office of The Cleaning Authority.
              </p>

              {/* Final Banner */}
              <div className="bg-gradient-to-r from-[#66a038] to-[#5a9430] text-white rounded-xl p-8 text-center shadow-md">
                <p className="text-xl font-bold">
                  We appreciate your support in this endeavor to end hunger!
                </p>
              </div>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="w-full lg:w-2/5 space-y-6">

            {/* Menu */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#66a038] to-[#5a9430] p-5">
                <a href="/cares/" className="block">
                  <h2 className="text-xl font-bold text-white text-center">
                    Cares
                  </h2>
                </a>
              </div>

              <div className="p-4">
                <a
                  href="/cares/how-to-help/"
                  className="flex items-center justify-between p-4 rounded-lg bg-[#f8fcf5] border border-[#66a038] font-medium text-[#4a7c2a] group hover:bg-[#f0f7e9] transition-colors"
                >
                  <span>How To Help</span>
                  <svg
                    className="w-4 h-4 text-[#66a038] transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#66a038] to-[#5a9430] text-white rounded-xl shadow-md p-8 text-center relative overflow-hidden">

              <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-6 translate-y-6"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Save Time.
                  <br />
                  Save Money.
                </h3>

                <a
                  href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&utm_campaign=&utm_source=&utm_medium=cpc&utm_content=&fbclid=&t=888.658.0659&sa=-1735021909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#66a038] font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-sm"
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