import React from "react";
import { Link } from "react-router-dom";

const CleaningContent = () => {
  const frequencies = [
    "Weekly Cleaning",
    "Bi-Weekly Cleaning",
    "Tri-Weekly Cleaning",
    "Quarter Weekly Cleaning",
    "Monthly Cleaning",
    "One-Time Cleans"
  ];

  const sideNavItems = [
    "Detail-Clean Rotation System",
    "Green Cleaning",
    "Satisfaction Guaranteed",
    "Cleaning Frequencies",
    "Bonded & Insured",
    "Fully Trained Employees",
    "MyTCA App",
    "The Cleaning Authority CARES"
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* MAIN CONTENT - LEFT SIDE */}
          <div className="lg:w-3/5">
            {/* Main Heading Section */}
            <section className="mb-16">
              <div className="relative">
                <div className="absolute -left-6 top-0 w-1 h-20 bg-gradient-to-b from-[#0079C1] to-[#66a038] rounded-full"></div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6 pl-8 leading-tight">
                  Cleaning Frequencies
                </h1>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Our expert cleaning services are offered in different frequencies, allowing
                  you to choose the program that best suits your needs! Please browse through
                  our website to learn about the
                  <a href="/our-cleaning-services/house-cleaning/" className="text-[#0079C1] hover:text-[#005a8c] font-semibold ml-1 transition-colors duration-200">
                    house cleaning services
                  </a> that we offer and the various packages provided by our residential cleaning company.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                  <p className="text-gray-600 text-base italic">
                    (Cleaning frequencies offered vary by location.)
                  </p>
                </div>
              </div>
            </section>

            {/* Frequencies List */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The schedules that we offer include the following:
              </h2>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {frequencies.map((frequency, index) => (
                    <li key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#66a038] rounded-full mr-3"></div>
                      <span className="font-medium text-gray-800">
                        {frequency}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Detail-Clean Rotation System */}
            <section className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Detail-Clean Rotation System<span className="text-[#001D35]">®</span> Gets the Job Done!
                </h2>
                
                <div className="bg-blue-50 rounded-xl p-6 mb-6 border-l-4 border-[#0079C1]">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    We use our Detail-Clean Rotation System<span className="text-[#001D35]">®</span> that has been honed over decades in order to ensure that our clients enjoy beautiful, clean homes after every visit.
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  With this system, your house enjoys a total detail-clean within the first two visits. Then, we maintain this pristine clean with each visit. On the first clean, we'll clean your home and provide special attention to your kitchen and bathrooms. On the second clean, we'll thoroughly clean your entire house, with{" "}
                  <Link  to="/detail-clean-rotation-system" className="text-[#0079C1] hover:text-[#005a8c] font-semibold transition-colors duration-200">
                    detail-clean services
                  </Link> for your living and sleeping areas. We maintain this thorough level of clean with detail cleaning on a rotating basis.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Stop Coming Home to a Second Job!
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our company was founded in 1977. We are trusted by our clients nationwide, and we have a reputation for{" "}
                  <Link to="/satisfaction-guaranteed/" className="text-[#0079C1] hover:text-[#005a8c] font-semibold transition-colors duration-200">
                    customer satisfaction
                  </Link> and for excellent service. <strong className="font-semibold text-gray-900">There's nothing better than a clean house, but who has time for cleaning?</strong> Our team of experts takes care of all the details, so you can enjoy a clean house while focusing on the things that matter most.
                </p>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-[#66a038]">
                  <p className="text-lg text-gray-800 leading-relaxed">
                    To learn more about us, please do not hesitate to contact our house cleaning experts by{" "}
                    <a href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&s=&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1736996442" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-[#0079C1] hover:text-[#005a8c] font-semibold transition-colors duration-200">
                      filling out this form
                    </a>.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* SIDEBAR - RIGHT SIDE */}
          <div className="lg:w-2/5">
            {/* Why Hire Us Navigation */}
            <aside className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden mb-8">
              <header className="bg-gradient-to-r from-[#66a038] to-[#5a943f] p-6">
               
                  <h2 className="text-2xl font-bold text-white text-center">
                    Why Hire Us?
                  </h2>
              </header>
              
              <nav className="p-4">
                <ul className="space-y-2">
                  {sideNavItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${item.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, '')}/`}
                        className={`flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                          item === "Cleaning Frequencies" 
                            ? "bg-gradient-to-r from-[#66a038] to-[#5a943f] text-white shadow-sm" 
                            : "text-gray-700 hover:bg-gray-50 hover:text-[#0079C1] border border-gray-100"
                        }`}
                      >
                        <span className="font-medium">{item}</span>
                        <svg className={`w-4 h-4 ${item === "Cleaning Frequencies" ? "text-white" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-md border border-gray-200 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#66a038] to-[#5a943f] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Save Time. Save Money.
              </h3>
              
              <a 
                href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&s=&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1736996442"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#66a038] to-[#5a943f] hover:from-[#5a943f] hover:to-[#4d8234] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-md mt-4"
              >
                Get A Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleaningContent;