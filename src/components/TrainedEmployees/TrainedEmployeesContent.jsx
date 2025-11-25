import React from "react";
import { Link } from "react-router-dom";

const TrainedEmployeesContent = () => {
  const primaryColor = "#66a038";
  const primaryHover = "#5a9430";
  const primaryLight = "#f0f7e9";
  const primaryLighter = "#f8fcf5";
  const primaryDark = "#4a7c2a";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content Section */}
          <main className="w-full lg:w-3/5">
            <article className="space-y-12">
              
              {/* Header Section */}
              <header className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                    Professional Cleaning Services
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                    Our Teams Consist of <span className="text-[#66a038]">Fully Trained</span> Employees
                  </h1>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                  What does it mean to say that employees are fully trained? It means every
                  individual hired at a franchise location of The Cleaning Authority goes
                  through a thorough screening process, and then is trained in every aspect
                  of our home cleaning services. This ensures high-quality service every time.
                </p>
              </header>

              {/* Guarantee Section */}
              <section className="bg-white rounded-3xl shadow-2xl p-10 border-l-[6px] border-[#66a038]">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#66a038] rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl  font-semibold text-[#0079c1] mb-4">
                      Your Satisfaction Is 100% Guaranteed with Us!
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We perform
                      <Link
                        to="/faq" 
                        className="mx-1 text-[#66a038] font-semibold hover:text-[#5a9430] underline transition-colors"
                      >
                        ongoing inspections
                      </Link>
                      to ensure that every clean is up to our high standards.
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Highlight */}
              <div className="bg-gradient-to-r from-[#66a038] to-[#5a9430] text-white rounded-3xl shadow-2xl p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <p className="text-2xl font-semibold">
                    Call our professionals at The Cleaning Authority at{" "}
                    <Link 
                      to="tel:9493680013" 
                      className="text-white hover:text-gray-100 font-bold text-3xl transition-colors"
                    >
                      (949) 368-0013
                    </Link>{" "}
                    for a complimentary personalized price estimate.
                  </p>
                </div>
              </div>

              {/* Experience Section */}
              <section className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-12 bg-[#66a038] rounded-full"></div>
                    <h3 className="text-4xl font-bold text-gray-900">
                      Providing House Cleaning Services for Over 25 Years
                    </h3>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
                    In addition to all of the regular services we provide with every clean,
                    employees of our over 225 franchises provide specialty cleaning services on a{" "}
                    <Link
                      to="/cleaning-frequencies" 
                      className="text-[#66a038] font-semibold hover:text-[#5a9430] underline transition-colors"
                    >
                      rotating basis
                    </Link>, including the following:
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8">
                  {/* Bathroom Service */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:border-[#66a038]/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-4 h-4 bg-[#66a038] rounded-full"></div>
                      <h4 className="text-2xl font-bold text-gray-900">Bathrooms</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Tile grout scrubbed, shower door cleaned, doors and door frames wiped,
                      knickknacks cleaned individually, cabinet fronts hand wiped, baseboards
                      and window sills hand wiped, floors cleaned, faucets, drains and sinks
                      cleaned with a toothbrush
                    </p>
                  </div>

                  {/* Sleeping Areas Service */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:border-[#66a038]/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-4 h-4 bg-[#66a038] rounded-full"></div>
                      <h4 className="text-2xl font-bold text-gray-900">Sleeping Areas</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Doors and door frames wiped, window sills and ledges hand wiped, knickknacks
                      individually cleaned, furniture surfaces hand wiped, baseboards hand wiped,
                      furniture and upholstery vacuumed, carpet areas vacuumed, floors deep-cleaned,
                      and any and all accessible areas under furniture vacuumed
                    </p>
                  </div>

                  {/* Living Areas Service */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:border-[#66a038]/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-4 h-4 bg-[#66a038] rounded-full"></div>
                      <h4 className="text-2xl font-bold text-gray-900">Living Areas</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Doors and door frames hand wiped, window sills and ledges hand wiped, knickknacks
                      individually cleaned, furniture surfaces hand wiped, baseboards hand wiped,
                      furniture and upholstery vacuumed, carpet edges vacuumed, floors deep-cleaned,
                      and any and all accessible areas under furniture vacuumed
                    </p>
                  </div>

                  {/* Kitchen Service */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group hover:border-[#66a038]/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-4 h-4 bg-[#66a038] rounded-full"></div>
                      <h4 className="text-2xl font-bold text-gray-900">Kitchen</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Inside of range hood cleaned, drip pans or glass top surfaces cleaned,
                      doors and door frames hand wiped,{" "}
                      <Link
                        to="/refrigenrator-cleaning" 
                        className="text-[#66a038] font-semibold hover:text-[#5a9430] underline transition-colors"
                      >
                        appliances cleaned and shined
                      </Link>, knickknack areas cleaned, cabinet fronts hand wiped, baseboards and window
                      sills hand wiped, floors deep-cleaned, and all kitchen furniture hand
                      wiped to a pristine clean
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </main>

          {/* Sidebar Section */}
          <aside className="w-full lg:w-2/5 space-y-8 lg:py-24">
            
            {/* Navigation Menu */}
            <nav className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <header className="bg-gradient-to-r from-[#66a038] to-[#5a9430] p-8">
                  <h2 className="text-3xl font-bold text-white text-center">Why Hire Us?</h2>
              </header>
              
             <div className="p-6">
  <ul className="space-y-0.5">
    {[
      { href: "/detail-clean-rotation-system/", text: "Detail-Clean Rotation System" },
      { href: "/green-cleaning/", text: "Green Cleaning" },
      { href: "/satisfaction-guaranteed/", text: "Satisfaction Guaranteed" },
      { href: "/cleaning-frequencies/", text: "Cleaning Frequencies" },
      { href: "/bonded-insured/", text: "Bonded & Insured" },
      { href: "/fully-trained-employees/", text: "Fully Trained Employees", active: true },
      { href: "/mytca-app/", text: "MyTCA App" },
      { href: "/the-cleaning-authority-cares/", text: "The Cleaning Authority CARES" }
    ].map((item, index) => (
      <li key={index}>
        <Link
          to={item.href}
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-200 group ${
            item.active 
              ? 'bg-[#f0f7e9] text-[#4a7c2a] font-semibold border-2 border-[#66a038]/30 shadow-md' 
              : 'text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:border hover:border-[#66a038]/10'
          }`}
        >
          <span className="text-lg group-hover:text-[#66a038] transition-colors">{item.text}</span>
          <svg 
            className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
              item.active ? 'text-[#66a038]' : 'text-gray-400 group-hover:text-[#66a038]'
            }`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </li>
    ))}
  </ul>
</div>

            </nav>

            {/* Final CTA Section */}
            <section className="space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-12 bg-[#66a038] rounded-full"></div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Contact The Cleaning Authority for a Professional Estimate
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    These are simply our detail-clean services, performed on a rotating basis
                    in addition to our regular services in order to ensure a complete and
                    thorough clean at all times. All employees at{" "}
                    <Link
                      to="/change-location" 
                      className="text-[#66a038] font-semibold hover:text-[#5a9430] underline transition-colors"
                    >
                      our 225+ franchise locations
                    </Link>{" "}
                    are fully-trained in all of these tasks to ensure adherence to quality
                    standards.
                  </p>
                </div>

                {/* Final CTA */}
                <div className="mt-8 bg-gradient-to-r from-[#66a038] to-[#5a9430] text-white rounded-2xl shadow-lg p-8 text-center">
                  <p className="text-xl font-semibold">
                    <Link
                      to="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1735021909" 
                      className="text-white hover:text-gray-100 underline font-bold text-2xl transition-colors"
                    >
                      Fill out our form
                    </Link>{" "}
                    to get in touch with our professionals at The Cleaning Authority for an
                    immediate online estimate.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#66a038] to-[#5a9430] text-white rounded-3xl shadow-2xl p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg 
                      className="w-10 h-10 text-[#66a038]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-6">Save Time. Save Money.</h3>
                <Link 
                  to="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1735021909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#66a038] font-bold text-xl px-10 py-5 rounded-2xl hover:bg-gray-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                >
                  Get A Free Estimate
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default TrainedEmployeesContent;