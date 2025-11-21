import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CleaningInfoSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-20 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image with hover animation */}
        <div
          className="relative group rounded-md overflow-hidden"
          data-aos="fade-right"
        >
          <img
            src="https://www.thecleaningauthority.com/assets/content/TCA_LA_2021-51-mobile.2511041304015.webp"
            alt="House Cleaning"
            className="w-full h-auto rounded-md object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-70"
          />
        </div>

        {/* Right Content with AOS animation */}
        <div className="space-y-4" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            House Cleaning in Irvine, CA
          </h2>
          <p className="text-blue-600 text-lg mb-4">
            Professional Maid Services in Santa Ana, Irvine, Orange & Surrounding Areas
          </p>
          <p className="text-gray-700 mb-6">
            At The Cleaning Authority - Irvine, we know how nice it is to come home to a sparkling clean house. Unfortunately, most people don’t have the time or the expertise to do it themselves. That is why we are here. If you want to reclaim your free hours, we encourage you to get in contact with our house cleaning professionals. We proudly provide our cleaning services to residents in Irvine, Santa Ana, Yorba Linda, Lake Forest, Tustin, Orange, Villa Park, and surrounding communities in Orange County.
          </p>

          {/* Highlight Box */}
          <div className="bg-blue-100 p-4 rounded-md flex items-center justify-between transition-transform duration-500 ease-in-out hover:scale-105">
            <div>
              <strong className="block mb-2">Stop Coming Home to a Second Job!</strong>
              <span>
                Invest in your free time by using our services. Call us at{" "}
                <a href="tel:9499905795" className="underline font-medium">(949) 990-5795</a> to get started with a personalized estimate!
              </span>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8 8 4 10 2 12s2 4 10 10 10-2 10-10-4-4-10-10z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
