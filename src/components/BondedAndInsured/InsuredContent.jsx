import React from 'react'

const InsuredContent = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Main Content */}
        <div className="lg:w-3/5 space-y-8">
          {/* Header Section */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2 hover:scale-105 hover:shadow-md transition-all duration-300">
              Peace of Mind Guaranteed
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight hover:transform hover:scale-[1.01] transition-transform duration-500">
              Our Bonded & <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">Insured Cleaning Team</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 font-semibold leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
              Because a Clean House Means More Relaxation
            </h2>
          </div>

          {/* Introduction Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 animate-slide-in-left hover:transform hover:translate-x-2 transition-transform duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  Our company is fully bonded and insured, which means you can have peace of mind when you hire us as your <a href="/our-cleaning-services/" className="text-blue-600 font-semibold hover:underline hover:text-blue-700 transition-all duration-300">cleaning company</a>. Helping our customers feel confident in our services is very important to us, which is why we're committed to taking every step necessary to make sure they feel good about choosing The Cleaning Authority.
                </p>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-l-8 hover:transform hover:-translate-y-1 transition-all duration-500 animate-pulse-gentle">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold text-lg hover:transform hover:scale-[1.01] transition-transform duration-300">
                    Keep reading to learn more about what sets our house cleaning services apart from the competition!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Peace of Mind Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 animate-slide-in-right hover:transform hover:-translate-x-2 transition-transform duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-[#66a038] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 group-hover:text-gray-900 transition-colors duration-300">Why You Can Have Peace of Mind Choosing Us</h2>
                
                {/* Enhanced List */}
                <ul className="space-y-6">
                  {[
                    {
                      content: <>
                        <strong className="text-gray-900">We are a trusted national brand.</strong>
                        The Cleaning Authority has over 225 locations in North America.
                      </>
                    },
                    {
                      content: <>
                        <strong>Our businesses are </strong>
                        <a href="/why-hire-us-/locally-owned/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                          <strong>locally owned and operated</strong>
                        </a>
                        <strong>.</strong>
                        Each franchise is run by people in your community. We only succeed as a local business by taking care of our customers and providing exceptional service.
                      </>
                    },
                    {
                      content: <>
                        <strong>We have excellent </strong>
                        <a href="/reviews/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                          <strong>customer reviews</strong>
                        </a>
                        <strong>.</strong>
                        Our clients trust us, and there's a reason for this. We're committed to excellence, professionalism, and customer satisfaction. We go above and beyond!
                      </>
                    },
                    {
                      content: <>
                        <strong>All our employees are </strong>
                        <a href="/why-hire-us-/professionally-trained-employees/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                          <strong>screened and trained</strong>
                        </a>
                        <strong>.</strong>
                        Every single employee of The Cleaning Authority is thoroughly screened and highly trained for our customers' peace of mind.
                      </>
                    },
                    {
                      content: <>
                        <strong>We use a proven cleaning system, specialized to suit our clients' needs.</strong>
                        You can have confidence in getting a job well done because we use a highly specialized system. Our{" "}
                        <a href="/why-hire-us-/detail-clean-rotation-system/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                          Detail-Clean Rotation System
                        </a>
                        ® is thorough and proven.
                      </>
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:transform hover:-translate-y-1 transition-all duration-300 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                      </div>
                      <div className="flex-1 text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                        {item.content}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Callout Box */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-2 transition-all duration-500 animate-pulse-gentle">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex-1">
                <strong className="text-2xl block mb-2 hover:scale-105 transition-transform duration-300">Get an Impeccable Clean</strong>
                <p className="text-blue-100 text-lg hover:text-white transition-colors duration-300">
                  Our Detail-Clean Rotation System® has been proven to be effective in over 20 million cleans.
                </p>
              </div>
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg animate-bounce-subtle"
                 href="/why-hire-us-/detail-clean-rotation-system-/">
                Learn More
                <svg className="w-5 h-5 hover:scale-125 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

       
        </div>

        {/* Sidebar */}
        <aside className="lg:w-2/5 space-y-6">
          {/* Navigation Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:transform hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 hover:text-gray-700 transition-colors duration-300">Why Hire Us?</h2>
            <ul className="space-y-0">
              {[
                { href: "/why-hire-us-/detail-clean-rotation-system/", text: "Detail-Clean Rotation System" },
                { href: "/why-hire-us-/green-cleaning/", text: "Green Cleaning" },
                { href: "/why-hire-us-/satisfaction-guaranteed/", text: "Satisfaction Guaranteed" },
                { href: "/why-hire-us-/cleaning-frequencies/", text: "Cleaning Frequencies" },
                { href: "/why-hire-us-/bonded-insured/", text: "Bonded & Insured", current: true },
                { href: "/why-hire-us-/professionally-trained-employees/", text: "Fully Trained Employees" },
                { href: "/why-hire-us-/mytca-app/", text: "MyTCA App" },
                { href: "/cares/", text: "The Cleaning Authority CARES" }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group ${
                    item.current 
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:transform hover:translate-x-2 hover:scale-[1.02]'
                  }`}>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      item.current 
                        ? 'bg-blue-600 scale-150' 
                        : 'bg-blue-600 opacity-0 group-hover:opacity-100 group-hover:scale-150'
                    }`}></div>
                    <span className={`transition-all duration-300 ${
                      item.current ? 'font-semibold' : 'font-medium group-hover:font-semibold'
                    }`}>{item.text}</span>
                    <svg className="w-4 h-4 ml-auto transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>


             {/* Final Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 animate-slide-in-left hover:transform hover:translate-x-2 transition-transform duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-[#66a038] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 group-hover:text-gray-900 transition-colors duration-300">
                  Call The Cleaning Authority Today for a Free Estimate
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  Get a clean home without the hassle and focus on things that matter more. The Cleaning Authority is the name to trust. We always go above and beyond the expectations placed upon us, and your satisfaction is always guaranteed.
                </p>

               
              </div>
            </div>
             {/* Contact Highlight Box */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border  border-green-200 p-8 rounded-xl shadow-sm hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-transform duration-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <strong className="text-xl text-gray-900 block mb-4 hover:scale-105 transition-transform duration-300">Want a clean home?</strong>
                      <p className="text-lg text-gray-700 hover:text-gray-800 transition-colors duration-300">
                        Call us at <a href="tel:(949) 990-5795" className="text-blue-600 hover:text-blue-800 font-semibold text-xl transition-colors duration-200">(949) 990-5795</a> or{" "}
                        <a href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1736996442" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-blue-600 hover:text-blue-800 font-semibold underline transition-colors duration-200">
                          get an immediate online estimate
                        </a> by filling out our form today.
                      </p>
                    </div>
                  </div>
                </div>
          </div>

          {/* CTA Card */}
          <div className="bg-[#66a038] text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 animate-fade-in-up">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-180 transition-all duration-700">
              <svg className="w-8 h-8 text-white hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <strong className="block text-2xl font-bold mb-2 hover:scale-105 transition-transform duration-300">Save Time. Save Money.</strong>
            <p className="text-blue-100 mb-6 hover:text-white transition-colors duration-300">Get your free estimate today and discover the difference</p>
            <a href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&s=&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1736996442"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg animate-bounce-subtle">
              Get A Free Estimate
              <svg className="w-5 h-5 hover:scale-125 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </aside>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulseGentle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.01);
          }
        }
        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-pulse-gentle {
          animation: pulseGentle 3s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default InsuredContent