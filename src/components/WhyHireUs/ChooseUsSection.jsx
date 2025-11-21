import React from 'react'

const ChooseUsSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white to-gray-50 py-16 px-6 lg:px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* Main Content */}
        <div className="lg:w-3/5 space-y-8">
          {/* Header Section */}
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-2 hover:scale-105 hover:shadow-md transition-all duration-300">
              Why Choose The Cleaning Authority
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight hover:transform hover:scale-[1.01] transition-transform duration-500">
              Why Hire <span className="text-[#66a038] hover:text-green-600 transition-colors duration-300">The Cleaning Authority?</span>
            </h1>
          </div>

          {/* Excellence Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 animate-slide-in-left hover:transform hover:translate-x-2 transition-transform duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-[#66a038] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">Our Reputation for Excellence</h2>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  Choose us because of our <strong className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">reputation for excellence</strong>. For more than 25 years, we've earned a name for quality and customer service. The homeowners we serve rely on us for detail-oriented, consistent cleaning services, every single time we clean their homes.
                </p>
              </div>
            </div>

            {/* CTA Card 1 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-[#66a038] p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-l-8 hover:transform hover:-translate-y-1 transition-all duration-500 animate-pulse-gentle">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#66a038] rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold text-lg mb-3 hover:transform hover:scale-[1.01] transition-transform duration-300">
                    Stop Coming Home to a Second Job! Invest in your free time by using our services. Get started with a personalized estimate!
                  </p>
                  <a href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&s=5&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1737710574" 
                     className="inline-flex items-center gap-2 px-6 py-3 bg-[#66a038] text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg animate-bounce-subtle">
                    Immediate Online Estimate
                    <svg className="w-4 h-4 hover:scale-110 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 animate-slide-in-right hover:transform hover:-translate-x-2 transition-transform duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-[#66a038] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">Our Commitment to Quality</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  Our <a href="/why-hire-us-/detail-clean-rotation-system-/" className="text-[#66a038] font-semibold hover:underline hover:text-green-600 transition-all duration-300">Detail-Clean Rotation System</a>® ensures that our work is always high quality. You simply can't underestimate the power of a good clean - but who has time for it? Focus on the things that matter most to you, and let us take care of the cleaning.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  Our Professional House Cleaning Checklist ensures we achieve a thorough clean every time. To back this up, we ensure our clients are always happy with our services. There's no risk in choosing us! Learn more about our <a href="/why-hire-us-/satisfaction-guaranteed/" className="text-[#66a038] font-semibold hover:underline hover:text-green-600 transition-all duration-300">satisfaction guarantee</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Environment Section */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 animate-slide-in-left hover:transform hover:translate-x-2 transition-transform duration-300 group">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-[#66a038] group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">Our Passion for the Environment</h2>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                  Keeping the Earth clean is part of what we care about, so we take steps to <a href="/why-hire-us-/green-cleaning/" className="text-[#66a038] font-semibold hover:underline hover:text-green-600 transition-all duration-300">be environmentally friendly</a>. We're one of the only cleaning companies in North America to use cleaning products that are environmentally responsible or sustainable.
                </p>
              </div>
            </div>

            {/* CTA Card 2 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-[#66a038] p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-l-8 hover:transform hover:-translate-y-1 transition-all duration-500 animate-pulse-gentle">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#66a038] rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-semibold text-lg mb-3 hover:transform hover:scale-[1.01] transition-transform duration-300">
                    Get an Impeccable Clean. Our Detail-Clean Rotation System® has been proven to be effective in over 20 million cleans.
                  </p>
                  <a href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&s=5&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1737710574"
                     className="inline-flex items-center gap-2 px-6 py-3 bg-[#66a038] text-white font-semibold rounded-lg hover:bg-green-700 hover:scale-105 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg animate-bounce-subtle">
                    Get a Free Price Estimate
                    <svg className="w-4 h-4 hover:scale-110 hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar / Navigation / CTA */}
        <aside className="lg:w-2/5 space-y-6">
          {/* Navigation Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:transform hover:-translate-y-2 hover:border-green-200 transition-all duration-500 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200 hover:text-gray-700 transition-colors duration-300">Why Hire Us?</h2>
            <ul className="space-y-0">
              {[
                { href: "/why-hire-us-/detail-clean-rotation-system/", text: "Detail-Clean Rotation System" },
                { href: "/why-hire-us-/green-cleaning/", text: "Green Cleaning" },
                { href: "/why-hire-us-/satisfaction-guaranteed/", text: "Satisfaction Guaranteed" },
                { href: "/why-hire-us-/cleaning-frequencies/", text: "Cleaning Frequencies" },
                { href: "/why-hire-us-/bonded-insured/", text: "Bonded & Insured" },
                { href: "/why-hire-us-/professionally-trained-employees/", text: "Fully Trained Employees" },
                { href: "/why-hire-us-/mytca-app/", text: "MyTCA App" },
                { href: "/cares/", text: "The Cleaning Authority CARES" }
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="flex items-center gap-3 p-3 text-gray-700 hover:text-[#66a038] hover:bg-green-50 hover:transform hover:translate-x-2 hover:scale-[1.02] rounded-lg transition-all duration-300 group">
                    <div className="w-2 h-2 bg-[#66a038] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                    <span className="font-medium group-hover:font-semibold transition-all duration-300">{item.text}</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-[#66a038] to-green-600 text-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 animate-fade-in-up hover:animate-pulse-gentle">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-110 hover:rotate-180 transition-all duration-700">
              <svg className="w-8 h-8 text-white hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <strong className="block text-2xl font-bold mb-2 hover:scale-105 transition-transform duration-300">Save Time. Save Money.</strong>
            <p className="text-green-100 mb-6 hover:text-white transition-colors duration-300">Get your free estimate today and discover the difference</p>
            <a href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&s=5&utm_campaign=&utm_source=&utm_medium=&utm_content=&fbclid=&t=888.658.0659&sa=-1737710574"
               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#66a038] font-bold rounded-lg hover:bg-gray-100 hover:scale-110 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-bounce-subtle">
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

export default ChooseUsSection