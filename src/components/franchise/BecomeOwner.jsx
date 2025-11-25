import React from "react";

const BecomeOwner = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#EAF4F5] to-[#ffffff]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col justify-start text-center md:text-left">
            <h1 className="text">We Clean Out the Competition
</h1>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0079C1] mb-3 tracking-tight drop-shadow-sm">
            Become an Owner
          </h2>

          <p className="text-2xl md:text-3xl font-semibold text-gray-700 drop-shadow-sm mb-6">
            Franchise with The Cleaning Authority
          </p>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
            Start your journey toward financial freedom with a proven, recession-resistant business model. Take control of your future and build a successful franchise with us.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-[#0079C1] text-white rounded-xl shadow-lg font-medium hover:bg-[#00609a] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              Become an Owner
            </button>

            <button className="px-8 py-3 bg-[#4fa33a] text-white rounded-xl shadow-lg font-medium hover:bg-[#3f8c30] transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#0079C1] p-10 rounded-3xl shadow-2xl border-2 border-white/30">
          
          <h3 className="text-2xl font-bold text-center text-white mb-2">
            Ready to Build a Rewarding Business?
          </h3>

          <p className="text-center text-gray-200 mb-3 text-sm">
            Fill out the form and our franchise development team will contact you.
          </p>

          <p className="text-gray-100 text-sm mb-5 leading-relaxed">
            Interested parties must have a minimum $50,000 cash on hand to invest in a franchise. At the moment, we are only accepting franchise applications in the United States.
          </p>

          {/* FORM */}
          <form className="space-y-6">

            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium text-white">First Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff] transition"
                />
              </div>

              <div>
                <label className="font-medium text-white">Last Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff] transition"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium text-white">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff] transition"
                />
              </div>

              <div>
                <label className="font-medium text-white">Phone Number</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff] transition"
                />
              </div>
            </div>

            {/* City / State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-medium text-white">City</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff] transition"
                />
              </div>

              <div>
                <label className="font-medium text-white">State</label>
                <select className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff] transition">
                  <option>Select State</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Florida</option>
                  <option>Texas</option>
                </select>
              </div>
            </div>

            {/* Postal Code */}
            <div>
              <label className="font-medium text-white">Postal Code*</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff] transition"
              />
            </div>

            {/* Amount to Invest */}
            <div>
              <label className="font-medium text-white">
                Amount Available to Invest*
              </label>
              <select className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff] transition">
                <option>Select Amount</option>
                <option>$20,000 - $50,000</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000 - $250,000</option>
                <option>$250,000+</option>
              </select>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <p className="text-white text-sm leading-relaxed">
                By checking this box, I expressly consent to receive recurring text messages by or on behalf of The Cleaning Authority, regarding franchise opportunities. Consent is not a condition of purchase. Msg & data rates may apply. <span className="text-yellow-200 underline hover:text-white cursor-pointer">
                  Privacy Policy
                </span>.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button className="px-10 py-3 bg-[#4fa33a] text-white rounded-full shadow-lg font-semibold hover:bg-[#3b8c2d] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                Submit Application
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default BecomeOwner;
