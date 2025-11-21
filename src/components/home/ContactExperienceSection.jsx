import React from "react";

export default function ContactExperienceSection() {
  return (
    <section className="w-full py-16 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-12 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full rounded-md overflow-hidden group">
          <img
            src="https://www.thecleaningauthority.com/assets/content/mother-daughter-mobile.2012151513550.jpg"
            alt="Happy family on couch"
            className="w-full h-auto object-cover rounded-md transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold leading-tight mb-6">
            When You Contact Us, You Can <br /> Experience the Following:
          </h2>

          {/* BULLET LIST */}
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              Cleaning performed with environmentally responsible products
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              House cleaners who are fully bonded and insured
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              Service from a locally owned and operated company in Irvine
            </li>
          </ul>

          {/* CONTACT BOX */}
          <div className="bg-[#E4F1F8] mt-8 p-6 rounded-md flex items-center justify-between transition-transform duration-300 group-hover:scale-105 group-hover:opacity-70">
            <div className="text-lg leading-relaxed">
              <p className="font-semibold">
                Contact Us Today at{" "}
                <a href="tel:9499905795" className="text-blue-700 underline">
                  (949) 990-5795
                </a>{" "}
                or{" "}
                <a href="#" className="text-blue-700 underline">
                  Request a Free Price Estimate
                </a>
              </p>
            </div>

            <div>
              {/* Leaf Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-green-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79.98.81 2.73 2.1 4.79 2.71C10.47 13.39 11 15.31 11 17.93zm1-8.43c-1.93 0-4.13-.72-5.79-2.11C8.65 6.95 10.28 6 12 6c3.31 0 6 2.69 6 6 0 2.97-2.16 5.43-5 5.91v-3.45c1.16-.41 2-1.51 2-2.83 0-1.65-1.35-3-3-3z" />
              </svg>
            </div>
          </div>

          {/* PARAGRAPH */}
          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            Our owners are 20 year residents of Irvine and look forward to making
            your home, as well as the community, healthier. That is why we are
            committed to using environmentally-responsible cleaning products, such
            as HEPA vacuums, EPA-registered disinfectants, and microfiber cloths.
            They are safe for you and the planet. From Irvine to Santa Ana, Orange,
            Tustin, Lake Forest, and beyond, our professional house cleaning staff
            are here to help!
          </p>
        </div>

      </div>
    </section>
  );
}
