import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SatisfactionContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sideLinks = [
    { title: "Detail Clean Rotation System", href: "/detail-clean-rotation-system" },
    { title: "Green Cleaning", href: "/green-cleaning" },
    { title: "Satisfaction Guaranteed", href: "/satisfaction-guaranted" },
    { title: "Cleaning Frequencies", href: "/cleaning-frequencies" },
    { title: "Bonded & Insured", href: "/bonded-insured" },
    { title: "Fully Trained Employees", href: "/fully-trained-employees" },
    { title: "MyTCA App", href: "/mytca-app" },
    { title: "The Cleaning Authority CARES", href: "/the-cleaning-authority-cares" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-green-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          
          {/* Main Content Section */}
          <div className="lg:w-3/5">
            <div className="space-y-6 sm:space-y-8">
              {/* Header Section */}
              <div className={`space-y-4 sm:space-y-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-3 md:-left-4 top-0 w-1 sm:w-2 h-12 sm:h-16 bg-[#66a038] rounded-full animate-pulse"></div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight pl-4 sm:pl-0">
                    Your Satisfaction Is <span className="text-[#66a038]">Guaranteed</span>
                  </h1>
                </div>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#0079c1] leading-relaxed">
                  More Than 25 Years of Expert House Cleaning Services
                </h2>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <p className="text-base sm:text-lg font-bold text-[#66a038] tracking-wide bg-green-50 px-4 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-green-100">
                    LESS MESS LESS STRESS™
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <div className={`space-y-4 sm:space-y-6 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  The experts at The Cleaning Authority are committed to providing thorough house cleaning services for our valued customers nationwide. In order to accomplish this goal, we adhere to strict standards that remain consistent across the board. Learn more about the steps we take to ensure that our clients are satisfied with our{" "}
                  <Link
                  to="/housecleaning" className="text-[#66a038] hover:text-[#558c2d] font-semibold underline transition-colors duration-200">
                    home cleaning services
                  </Link>.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-[#66a038] p-4 sm:p-6 rounded-r-lg sm:rounded-r-xl shadow-sm">
                  <p className="text-green-800 font-bold text-base sm:text-lg flex items-center">
                    <span className="text-[#66a038] mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                    Here are some of the reasons why your satisfaction is guaranteed:
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="space-y-6 sm:space-y-8">
                {/* Feature 1 */}
                <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-200 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#66a038] rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        We Treat Your Home Like Our Home
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        Our local cleaning crews are professionally trained on the Detail-Clean Rotation System®. If you are ever unhappy with any area that's been cleaned, please contact your local office within 24 hours, and they will gladly return the next day to address any concerns.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-300 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#66a038] rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Immediate, Accurate Online Quotes
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        We offer free, immediate price quotes so you instantly know pricing at the frequency and detail you need.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-400 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#66a038] rounded-full"></span>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        We Are Fully Bonded and Insured
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        At The Cleaning Authority, we are fully bonded and insured, meaning you can have peace of mind when we enter your home.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-500 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#66a038] rounded-full"></span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Our Passion for the Environment
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                        We as a company are committed to using cleaning products that are environmentally responsible, sustainable, and safe for the Earth.
                      </p>
                      <div className="bg-[#dfeef5] border-2 border-green-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                        <p className="text-green-800 font-bold text-lg sm:text-xl mb-2 sm:mb-3 flex items-center">
                          <span className="text-[#66a038] mr-2 sm:mr-3">🌱</span>
                          Clean Homes. Clean Earth.
                        </p>
                        <p className="text-green-700 text-base sm:text-lg">
                          Our team proudly uses residential cleaning solutions that are environmentally responsible.{" "}
                          <Link to="/green-cleaning" className="text-[#66a038] hover:text-green-800 font-semibold underline transition-colors duration-200">
                            About Our Eco-Friendly Methods
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className={`bg-gradient-to-r from-[#DFEEF5] to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-10 border-2 border-[#66a038] text-center shadow-lg sm:shadow-2xl transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className="max-w-3xl mx-auto">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-5">Ready to Experience the Difference?</h3>
                    <p className="text-[#66a038] font-bold text-lg sm:text-xl mb-4 sm:mb-6 leading-7 sm:leading-8">
                      Call The Cleaning Authority at (949) 990-5795 or{" "}
                      <Link
                        to="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1" 
                        target="_blank" 
                        className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 font-bold"
                      >
                        get your immediate online estimate
                      </Link> today.
                    </p>
                    <p className="text-gray-600 font-semibold text-base sm:text-lg">The Cleaning Authority is ready to help!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:w-2/5">
            <div className="space-y-4 sm:space-y-6">
              {/* Navigation Sidebar */}
              <div className={`bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="bg-gradient-to-r from-[#66a038] to-[#558c2d] px-4 sm:px-6 py-3 sm:py-5">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Why Hire Us?
                    </h2>
                </div>
                <nav>
                  <ul className="divide-y divide-gray-100">
                    {sideLinks.map((link, index) => (
                      <li 
                        key={link.title} 
                        className={`transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 group ${
                          link.title === "Satisfaction Guaranteed" ? 'bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-[#66a038]' : ''
                        }`}
                      >
                        <Link
                          to={link.href}
                          className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-gray-700 hover:text-[#66a038] transition-all duration-300 group-hover:pl-5 sm:group-hover:pl-8 text-sm sm:text-base"
                        >
                          <span className="font-medium">{link.title}</span>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Detail-Clean System Card */}
              <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-200 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-[#66a038] rounded-full"></span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Our Detail-Clean Rotation System® is Proven
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4 sm:mb-7">
                  We use our Detail-Clean Rotation System®, developed over 25+ years of experience, to ensure a thorough clean every time. It has proven effective in 20 million cleans.
                </p>
                <div className="space-y-3 sm:space-y-5">
                  <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-5 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                    <span className="bg-[#66a038] text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 sm:mt-1">1</span>
                    <div>
                      <strong className="text-gray-900 block mb-1 sm:mb-2 text-base sm:text-lg">First Clean:</strong>
                      <span className="text-gray-700 text-sm sm:text-base">Your entire home gets a general clean, plus your kitchen and bathroom(s) are detail-cleaned.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-5 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                    <span className="bg-[#66a038] text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 mt-0.5 sm:mt-1">2</span>
                    <div>
                      <strong className="text-gray-900 block mb-1 sm:mb-2 text-base sm:text-lg">Second Clean:</strong>
                      <span className="text-gray-700 text-sm sm:text-base">Your entire home gets a general clean, plus your sleeping and living areas are detail-cleaned.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Content */}
              <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg sm:shadow-2xl border border-gray-100 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-6 text-base sm:text-lg">
                  <p className="leading-7 sm:leading-8">
                    From there, we continue on with a system that ensures that your house maintains a detail level of clean at all times, with detailed services performed on a rotating basis.
                  </p>
                  <p className="leading-7 sm:leading-8">
                    You can rely on us, because we've proven our link <Link to="/vision-mishion"><span className='text-[#66a038] font-semibold hover:underline hover:text-[#0079c1]'>commitment to our clients</span></Link> . We have 25+ years of experience and a nationwide reputation for excellence. With house cleaning franchises in 225+ locations in the U.S. and Canada, our brand is well known and trusted.
                  </p>
                </div>
              </div>

              {/* CTA Sidebar */}
              <div className={`bg-gradient-to-br from-[#0079c1] to-[#005a8c] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-lg sm:shadow-2xl transform transition-all duration-700 delay-400 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-md sm:shadow-lg">
                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#66a038]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9ZM19 9H14V3L19 9Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Save Time. Save Money.</p>
                    <p className="text-blue-100 mb-4 sm:mb-6 text-base sm:text-lg">Get your free estimate today and experience the difference.</p>
                    <Link
                      to="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1"
                      target="_blank"
                      className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-3 sm:py-4 bg-white text-[#66a038] font-semibold rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md sm:shadow-lg group text-sm sm:text-base"
                    >
                      Get A Free Estimate
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionContent;