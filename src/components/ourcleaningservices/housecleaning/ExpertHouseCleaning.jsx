import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaClock, FaStar, FaCheckCircle, FaLeaf, FaDollarSign, FaListAlt,
  FaLightbulb, FaCalendarAlt, FaPhone, FaArrowRight, FaHome, FaBuilding,
  FaTruck, FaCalendarDay, FaBriefcase, FaBroom, FaPaintRoller,
  FaShieldVirus, FaWindowRestore, FaFire, FaSnowflake
} from 'react-icons/fa';

export default function ExpertHouseCleaning() {
  const services = [
    { name: 'House Cleaning', icon: FaHome, href: '/housecleaning' },
    { name: 'Apartment Cleaning', icon: FaBuilding, href: '/apartmentcleaning' },
    { name: 'Move In / Move Out Cleaning', icon: FaTruck, href: '/moveinmoveout' },
    { name: 'One-Time Cleans', icon: FaCalendarDay, href: '/onetimeclean' },
    { name: 'Office Cleaning', icon: FaBriefcase, href: '/officeclean' },
    { name: 'Housekeeping', icon: FaBroom, href: '/housekeeping' },
    { name: 'After Remodeling Cleaning', icon: FaPaintRoller, href: '/after-remodeling-cleaning' },
    { name: 'Home Disinfection', icon: FaShieldVirus, href: '/home-disinfection-cleaning' },
    { name: 'Window Washing', icon: FaWindowRestore, href: '/window-washing-cleaning' },
    { name: 'Oven Cleaning', icon: FaFire, href: '/oven-cleaning' },
    { name: 'Refrigerator Cleaning', icon: FaSnowflake, href: '/refrigenrator-cleaning' },
  ];

  const sections = [
    { icon: <FaClock className="text-blue-400 text-xl" />, title: "How Often Should House Cleaning Be Done?", text: "Maintaining a pristine home environment is essential. We recommend regular cleaning to keep your space hygienic." },
    { icon: <FaStar className="text-[#66A038] text-xl" />, title: "Benefits of Professional House Cleaning", text: "Save time & effort with higher-standard cleaning that reduces bacteria and allergens." },
    { icon: <FaCheckCircle className="text-purple-400 text-xl" />, title: "What to Expect from Our House Cleaning Services", text: "Our trained team delivers detailed cleaning using premium products and expert techniques." },
    { icon: <FaLeaf className="text-[#66A038] text-xl" />, title: "Eco-Friendly House Cleaning Products", text: "We use sustainable, eco-friendly, and safe cleaning products for your home." },
    { icon: <FaDollarSign className="text-yellow-600 text-xl" />, title: "Understanding the Cost of House Cleaning Services", text: "We provide competitive and transparent pricing tailored to your needs." },
    { icon: <FaListAlt className="text-indigo-400 text-xl" />, title: "Difference Between Standard and Deep Cleaning", text: "Standard cleaning maintains cleanliness while deep cleaning gives a complete detailed refresh." },
    { icon: <FaLightbulb className="text-amber-500 text-xl" />, title: "Top House Cleaning Tips", text: "Declutter before cleaning & consider seasonal deep cleaning for best results." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }}
          className="lg:w-2/5 space-y-6"
        >
          {/* Services Navigation */}
          <div className="bg-white rounded-2xl shadow-xl backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-blue-600 to-[#66A038] p-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FaListAlt /> Our Cleaning Services
              </h2>
            </div>
            <nav className="p-3">
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    >
                      <Link
                        to={service.href}
                        className="flex items-center justify-between p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className="text-blue-600 text-base group-hover:scale-110 transition-transform duration-300" />
                          <span className="font-medium group-hover:text-blue-600 transition-colors duration-300">
                            {service.name}
                          </span>
                        </div>
                        <FaArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* CTA Cards */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="space-y-6">

            {/* Save Time Card */}
            <motion.div 
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl p-6 text-white transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <FaClock className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save Time. Save Money.</h3>
                  <p className="text-blue-100 mb-4">Get a free estimate for professional cleaning & enjoy more free time.</p>
                  <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                    Get A Free Estimate
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Free Year Card */}
            <motion.div 
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="bg-gradient-to-br from-[#73bd36] to-[#66A038] rounded-2xl shadow-xl p-6 text-white transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                  <FaStar className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Win a Free Year of Housecleaning!</h3>
                  <p className="text-green-100 mb-4">Enter our contest for a chance to win free cleaning for a year.</p>
                  <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-2 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                    Enter Now
                  </button>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="lg:w-3/5">
          <motion.div 
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 transition-all duration-500"
          >

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-blue-400 to-[#66A038] bg-clip-text text-transparent drop-shadow-lg">
              Expert House Cleaning Services in Santa Ana, CA
            </h1>

            {/* Sections */}
            {sections.map((s, i) => (
              <motion.section
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="mb-8 p-4 rounded-xl hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4 text-lg">{s.icon}<h2 className="text-2xl font-semibold text-gray-800 hover:text-[#66A038] transition-colors">{s.title}</h2></div>
                <p className="text-gray-600 leading-relaxed">{s.text}</p>
              </motion.section>
            ))}

            {/* Contact Section */}
            <motion.section whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 250, damping: 20 }} className="mb-8 p-4 rounded-xl hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-red-400 text-xl" />
                <h2 className="text-2xl font-semibold text-gray-800">Contact Us Today to Schedule Your Cleaning</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">Ready for unmatched cleanliness? Contact us today.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-transform hover:scale-105 flex items-center gap-2">
                  <FaPhone /> Schedule Your Cleaning
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all flex items-center gap-2">
                  Get Free Estimate
                </button>
              </div>
            </motion.section>

          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
