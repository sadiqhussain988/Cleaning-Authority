import React from "react";
import { GoDotFill } from "react-icons/go";

const Card = ({ title, items }) => {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-6 w-full md:w-1/2 hover:scale-105 transition-transform duration-300">
      {title && <h3 className="text-2xl font-bold mb-4 text-[#0079C1]">{title}</h3>}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 bg-gradient-to-r from-[#e0f7fa] to-[#f1f8e9] rounded-lg px-4 py-2 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <GoDotFill className="text-[#7BC043] text-lg flex-shrink-0" />
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0079C1] font-medium hover:text-[#4fa33a] transition-colors duration-300"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const OurStandard = () => {
  const firstCardItems = [
    { name: "Apartment Cleanings", link: "/apartmentcleaning" },
    { name: "Carpet Cleaning", link: "/carpet-cleaning" },
    { name: "Clean Up After Remodeling", link: "/after-remodeling-cleaning" },
    { name: "Basement Cleaning", link: "/basement-cleaning" },
    { name: "Commercial Cleaning", link: "/commercial-cleaning" },
    { name: "Office Cleaning", link: "/officeclean" },
    { name: "Green Cleaning", link: "/green-cleaning" },
  ];

  const secondCardItems = [
    { name: "Housekeeping", link: "/housekeeping" },
    { name: "Move In / Move Out Cleaning", link: "/moveinmoveout" },
    { name: "One-Time Cleans", link: "/onetimeclean" },
    { name: "Oven Cleaning", link: "/oven-cleaning" },
    { name: "Refrigerator Cleaning", link: "/refrigenrator-cleaning" },
    { name: "House / Residential Cleaning", link: "/housecleaning" },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 mx-auto max-w-4xl text-[#0079C1]">
        Our standard and add-on services include, but are not limited to, the following:
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-start p-6">
        <Card title="" items={firstCardItems} />
        <Card title="" items={secondCardItems} />
      </div>

      <h2 className="text-lg md:text-xl font-semibold mt-10 mb-10">
        *Services vary per location. Contact{" "}
        <a
          href="https://www.thecleaningauthority.com/locations/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7BC043] underline hover:text-[#0079C1] cursor-pointer"
        >
          The Cleaning Authority near you
        </a>{" "}
        for more information.
      </h2>

      <p className="text-lg md:text-xl mb-10 max-w-4xl mx-auto text-gray-700">
        We are committed to high standards of service and enforce stringent quality assurance. We are{" "}
        <a
          href="https://www.thecleaningauthority.com/why-hire-us-/bonded-insured/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7BC043] underline hover:text-[#0079C1] cursor-pointer"
        >
          insured and bonded
        </a>
        , using environmentally responsible and sustainable cleaning products.
      </p>

      {/* Guarantee Section */}
      <div className="flex flex-col items-center justify-center mx-auto max-w-5xl bg-gradient-to-r from-[#0079C1] to-[#00bfff] text-white rounded-2xl px-6 py-12 mb-16 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Your satisfaction is 100% guaranteed with us!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We perform ongoing inspections to ensure every clean meets our high standards.
        </p>
        <a
          href="https://www.thecleaningauthority.com/why-hire-us-/satisfaction-guaranteed/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#4fa33a] px-6 py-3 rounded-full shadow-lg text-white hover:bg-[#0079C1] border border-[#4fa33a] hover:text-white transition-all duration-300 font-semibold uppercase text-sm md:text-md"
        >
          How We Go Above & Beyond
        </a>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#0079C1]">
        Contact The Cleaning Authority for a Free Estimate
      </h2>

      <p className="text-lg md:text-xl mb-16 max-w-4xl mx-auto text-gray-700">
        Let us take care of your cleaning so you can enjoy more important things. We at The Cleaning Authority are proud of our commitment to clients and excellence, going above and beyond to{" "}
        <a
          href="https://www.thecleaningauthority.com/why-hire-us-/satisfaction-guaranteed/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7BC043] underline hover:text-[#0079C1] cursor-pointer"
        >
          guarantee your satisfaction
        </a>
        .
      </p>

      {/* Free Estimate Section */}
      <div className="flex flex-col items-center justify-center mx-auto max-w-5xl bg-gradient-to-r from-[#0079C1] to-[#00bfff] text-white rounded-2xl px-6 py-12 mb-16 shadow-lg">
        <p className="text-lg md:text-xl text-center">
          For a free estimate,{" "}
          <a
            href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=459&c=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 underline cursor-pointer"
          >
            contact our cleaning experts
          </a>{" "}
          today!
        </p>
      </div>
    </section>
  );
};

export default OurStandard;
