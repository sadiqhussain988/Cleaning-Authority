import React from 'react';
import { 
  FaClock, 
  FaStar, 
  FaCheckCircle, 
  FaLeaf, 
  FaDollarSign, 
  FaListAlt,
  FaLightbulb,
  FaCalendarAlt,
  FaPhone,
  FaArrowRight,
  FaHome,
  FaBuilding,
  FaTruck,
  FaCalendarDay,
  FaBriefcase,
  FaBroom,
  FaPaintRoller,
  FaShieldVirus,
  FaWindowRestore,
  FaFire,
  FaSnowflake
} from 'react-icons/fa';

function ExpertHouseCleaning() {
  const services = [
    { name: 'House Cleaning', icon: FaHome, href: '/irvine/our-cleaning-services/house-cleaning/' },
    { name: 'Apartment Cleaning', icon: FaBuilding, href: '/irvine/our-cleaning-services/apartment-cleaning/' },
    { name: 'Move In / Move Out Cleaning', icon: FaTruck, href: '/irvine/our-cleaning-services/move-in-move-out-cleaning/' },
    { name: 'One-Time Cleans', icon: FaCalendarDay, href: '/our-cleaning-services/one-time-cleans/' },
    { name: 'Office Cleaning', icon: FaBriefcase, href: '/our-cleaning-services/office-cleaning/' },
    { name: 'Housekeeping', icon: FaBroom, href: '/irvine/our-cleaning-services/housekeeping/' },
    { name: 'After Remodeling Cleaning', icon: FaPaintRoller, href: '/our-cleaning-services/after-remodeling-cleaning/' },
    { name: 'Home Disinfection', icon: FaShieldVirus, href: '/our-cleaning-services/home-disinfection/' },
    { name: 'Window Washing', icon: FaWindowRestore, href: '/our-cleaning-services/window-washing/' },
    { name: 'Oven Cleaning', icon: FaFire, href: '/our-cleaning-services/oven-cleaning/' },
    { name: 'Refrigerator Cleaning', icon: FaSnowflake, href: '/our-cleaning-services/refrigerator-cleaning/' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Content Section - 3/5 width */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-400 to-[#66A038]  bg-clip-text text-transparent">
                Expert House Cleaning Services in Santa Ana, CA
              </h1>

              {/* Section 1 */}
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaClock className="text-blue-400 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">How Often Should House Cleaning Be Done?</h2>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Maintaining a pristine home environment is essential for both your health and peace of mind. 
                  At The Cleaning Authority - Irvine, we understand this need and recommend{' '}
                  <span className="font-semibold text-blue-400">regular house cleaning</span> to ensure your 
                  space remains welcoming and hygienic.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-4">
                  <p className="text-gray-700">
                    <strong>Get in touch with us today</strong> or{' '}
                    <a href="tel:(949) 603-1973" className="text-blue-400 hover:text-blue-500 font-semibold">
                      call us at (949) 603-1973
                    </a>{' '}
                    to schedule your cleaning service in Santa Ana.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaStar className="text-[#66A038]  text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Benefits of Professional House Cleaning</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Hiring a professional house cleaning service offers numerous benefits that enhance your quality of life. 
                  Not only do you save time and effort, but you also receive a higher standard of cleaning that reduces 
                  bacteria and allergens.
                </p>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaCheckCircle className="text-purple-400 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">What to Expect from Our House Cleaning Services</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  When you choose our services, expect meticulous attention to detail and a dedicated approach. 
                  Our trained professionals use industry-leading products and techniques to tackle every nook and cranny.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaLeaf className="text-[#66A038]  text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Eco-Friendly House Cleaning Products</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to <span className="font-semibold text-[#66A038] ">sustainability</span> at The Cleaning Authority - Irvine. 
                  All our products are eco-friendly, ensuring a safe and spotless home environment without compromising on cleaning power.
                </p>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaDollarSign className="text-yellow-600 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Understanding the Cost of House Cleaning Services</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Investing in professional house cleaning is an investment in your home and well-being. 
                  At The Cleaning Authority - Irvine, we offer competitive rates tailored to meet your unique cleaning needs.
                </p>
              </section>

              {/* Additional Sections */}
              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaListAlt className="text-indigo-400 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Difference Between Standard and Deep Cleaning</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Understanding the difference between standard and deep cleaning is crucial for choosing the right service. 
                  Standard cleaning focuses on maintaining cleanliness, while deep cleaning is more comprehensive.
                </p>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaLightbulb className="text-amber-500 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Top House Cleaning Tips</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Enhance your home maintenance routine with expert tips from our seasoned professionals. 
                  Always declutter before cleaning to maximize efficiency, and consider seasonal{' '}
                  <span className="font-semibold text-amber-600">deep cleans</span> for thorough refreshes.
                </p>
              </section>

              <section className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <FaCalendarAlt className="text-red-400 text-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800">Contact Us Today to Schedule Your Cleaning</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ready to experience unparalleled cleanliness? Contact The Cleaning Authority - Irvine today to 
                  schedule your next house cleaning service in Santa Ana.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <FaPhone className="text-sm" />
                    Schedule Your Cleaning
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
                    Get Free Estimate
                  </button>
                </div>
              </section>
            </div>
          </div>

          {/* Sidebar Section - 2/5 width */}
          <div className="lg:w-2/5">
            {/* Services Navigation */}
            <div className="bg-white rounded-2xl shadow-lg mb-6 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-[#66A038]  p-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FaListAlt className="text-white" />
                  Our Cleaning Services
                </h2>
              </div>
              <nav className="p-2">
                <ul className="space-y-1">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <li key={index}>
                        <a
                          href={service.href}
                          className="flex items-center justify-between p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <IconComponent className="text-blue-600 text-sm" />
                            <span className="font-medium group-hover:text-blue-600 transition duration-200">
                              {service.name}
                            </span>
                          </div>
                          <FaArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition duration-200" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* CTA Cards */}
            <div className="space-y-6">
              {/* Save Time & Money Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <FaClock className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Save Time. Save Money.</h3>
                    <p className="text-blue-100 mb-4">
                      Get a free estimate for our professional cleaning services and enjoy more free time.
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                      Get A Free Estimate
                    </button>
                  </div>
                </div>
              </div>

              {/* Free Year Card */}
              <div className="bg-gradient-to-br from-[#73bd36]  to-[#66A038] rounded-2xl shadow-lg p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <FaStar className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Win a Free Year of Housecleaning!</h3>
                    <p className="text-green-100 mb-4">
                      Enter our contest for a chance to win free cleaning services for an entire year!
                    </p>
                    <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                      Enter Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpertHouseCleaning;