import React from "react";
import { Link } from "react-router-dom";

export default function LocallyOwnedContent() {
  const menuItems = [
    { title: "Detail-Clean Rotation System®", link: "/detail-clean-rotation-system" },
    { title: "Green Cleaning", link: "/green-cleaning/" },
    { title: "Satisfaction Guaranteed", link: "/satisfaction-guaranteed/" },
    { title: "Bonded & Insured", link: "/bonded-insured/" },
    { title: "Professionally Trained Employees", link: "/fully-trained-employees/" },
    { title: "Locally Owned", link: "/locally-owned/" },
    { title: "Cleaning Frequencies", link: "/cleaning-frequencies/" },
    { title: "MyTCA App", link: "/mytca-app/" },
    { title: "The Cleaning Authority CARES", link: "/the-cleaning-authority-cares/" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-16 px-6 lg:px-20 font-inter">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* LEFT CONTENT */}
        <div className="lg:w-3/5 space-y-10">

          {/* Header */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              Locally Owned & Community Focused
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Locally Owned <span className="text-[#66a038]">Home Cleaning Services</span>
            </h1>
          </div>

          {/* Section 1 */}
          <div className="space-y-4 animate-slide-in-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose The Cleaning Authority?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Life is too short to clean your own home. You deserve peace of mind,
              knowing your home is in good hands while you focus on what matters:
              family, friends, and the moments that enrich your life.
              Our helpful and courteous team ensures your home receives the care it deserves.
            </p>

            {/* CTA CARD */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-[#66a038] p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-l-8 transition-all duration-500 animate-pulse-gentle">
              <p className="text-gray-800 text-lg font-semibold">
                Get an Impeccable Clean —
                <span className="font-bold"> Our Detail-Clean Rotation System®</span>  
                has been proven effective in over 20 million cleans.
              </p>
              <Link
                to="/detail-clean-rotation-system"
                className="inline-block mt-4 px-6 py-3 bg-[#66a038] text-white rounded-lg font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300"
              >
                Always Get a Detail-Cleaned Home
              </Link>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-6 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-gray-800">
              National Brand Professionalism. Local Business Care.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
            We are able to combine the best of both worlds: the professionalism and reputation of a national brand with the care and attention of a community business. Our business has over 225 franchise locations in the United States and Canada. We're a <Link to="/company-history"><span className="text-[#4AA33A] text-semibold hover:text-[#0079c1] hover:underline">nationally recognized</span> </Link> cleaning service brand with a reputation for professionalism and excellence.


            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
             In spite of our big name, we don't lose our community feel. Every franchisee owns and operates their location, making him or her familiar with your individual area. This community aspect gives our clients confidence, knowing that there are localized customer reviews available and the ability to connect with real people in their communities.
            </p>

            <p className="text-xl font-semibold text-gray-900">
              Benefits of choosing a locally owned TCA franchise:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
              <li>Accountability</li>
              <li>Individual attention</li>
              <li>Prompt response time</li>
              <li>Understanding of local cleaning issues</li>
            </ul>
          </div>

        

        </div>

        {/* SIDEBAR */}
        <aside className="lg:w-2/5 space-y-4">

          {/* NAV CARD */}
          <div className="bg-white  px-2 md:px-8 py-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
              Why Hire Us?
            </h2>

           <ul className="space-y-1">
  {menuItems.map((item, index) => {
    const isActive = item.title === "Locally Owned";

    return (
      <li key={index}>
        <a
          href={item.link}
          className={`flex items-center gap-3  p-3 rounded-lg transition-all duration-300 group
            ${isActive
              ? "bg-green-50 text-[#66a038] font-semibold shadow-sm"
              : "text-gray-700 hover:text-[#66a038] hover:bg-green-50"
            }
            ${isActive ? "translate-x-2 scale-[1.02]" : "hover:translate-x-2 hover:scale-[1.02]"}
          `}
        >
          {/* Dot */}
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${isActive ? "bg-[#66a038] opacity-100" : "bg-[#66a038] opacity-0 group-hover:opacity-100"}
            `}
          ></div>

          {/* Title */}
          <span className={`${isActive ? "font-semibold" : "font-medium"}`}>
            {item.title}
          </span>

          {/* Arrow */}
          <svg
            className={`w-4 h-4 ml-auto transition-all duration-300
              ${isActive ? "opacity-100 text-[#66a038]" : "opacity-0 group-hover:opacity-100"}
            `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
      </li>
    );
  })}
</ul>

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


            {/* Section 3 */}
          <div className="space-y-4 animate-slide-in-left mt-10">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Wait? Focus On What Matters Most.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              <Link className="text-[#66a038] font-semibold hover:underline" to="/our-cleaning-services/">
                Our services
              </Link >{" "}
              are designed to save you time and help you focus on your priorities.
              No matter how often you need us, we’re here to help.
            </p>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-green-800 font-medium">
              Please do not hesitate to{" "}
              <a className="text-[#66a038] underline font-semibold" href="#">
                contact The Cleaning Authority
              </a>{" "}
              for your free online estimate.
            </div>
          </div>

        </aside>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp { from {opacity:0;transform:translateY(30px);} to {opacity:1;transform:translateY(0);} }
        @keyframes slideInLeft { from {opacity:0;transform:translateX(-50px);} to {opacity:1;transform:translateX(0);} }
        @keyframes slideInRight { from {opacity:0;transform:translateX(50px);} to {opacity:1;transform:translateX(0);} }
        @keyframes pulseGentle { 0%,100%{transform:scale(1);} 50%{transform:scale(1.01);} }

        .animate-fade-in-up { animation: fadeInUp .8s ease-out; }
        .animate-slide-in-left { animation: slideInLeft .8s ease-out; }
        .animate-slide-in-right { animation: slideInRight .8s ease-out; }
        .animate-pulse-gentle { animation: pulseGentle 3s ease-in-out infinite; }
      `}</style>

    </section>
  );
}
