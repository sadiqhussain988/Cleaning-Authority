import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight, FaRegClock, FaDollarSign } from 'react-icons/fa';

// Updated SidebarLink to support external links
const SidebarLink = ({ text, active = false, href, target }) => (
    <a 
        href={href || `#${text.toLowerCase().replace(/ /g, '-')}`}
        target={target || '_self'}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`block text-lg py-2 px-3 rounded-lg transition duration-300
            ${active ? 'bg-blue-100 text-blue-700 font-semibold shadow-md flex items-center' : 'text-blue-800 hover:bg-blue-50 hover:text-blue-600'}`}
    >
        {text} {active && <FaArrowRight className="ml-2 text-blue-600" />}
    </a>
);

const OurBeginnings = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="max-w-8xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Left Sidebar */}
                <div className="md:col-span-1 space-y-6" data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">About Us</h2>
                    <div className="space-y-2">
                        <SidebarLink 
                            text="Company History" 
                            active={true} 
                            href="/company-history" 
                            target="_blank"
                        />
                        <SidebarLink 
                            text="Vision & Mission" 
                            href="/vision-mishion" 
                            target="_blank"
                        />
                        <SidebarLink 
                            text="Reviews" 
                            href="/reviews" 
                            target="_blank"
                        />
                        <SidebarLink 
                            text="Own a Franchise" 
                            href="/ownf-franchiese" 
                            target="_blank"
                        />
                    </div>

                    {/* CTA Box */}
                    <div className="p-5 bg-gradient-to-r from-[#CDE1B3] to-[#E6F4D9] border border-green-300 rounded-2xl flex items-center shadow-lg transform transition hover:scale-105" data-aos="zoom-in" data-aos-delay="300">
                        <div className="flex-shrink-0 w-16 h-16 bg-white border border-green-400 rounded-full flex items-center justify-center relative mr-4">
                            <FaRegClock className="text-green-600 text-2xl absolute left-2 top-2" />
                            <FaDollarSign className="text-green-600 text-xl absolute right-2 bottom-2" />
                        </div>
                        <div className="flex-grow">
                            <p className="text-gray-800 font-semibold mb-3 text-nowrap">Save Time. Save Money.</p>
                            <button className="py-2 px-4 rounded-full shadow-md transform transition hover:-translate-y-1 hover:scale-105 duration-300 text-sm bg-[#4fa33a] hover:bg-[#0079C1] text-white font-semibold">
                                GET A FREE ESTIMATE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-3 space-y-6" data-aos="fade-up">
                    <h2 className="text-3xl font-bold text-gray-800">History of The Cleaning Authority</h2>
                    <h3 className="text-xl text-blue-600 font-medium underline decoration-dashed decoration-blue-400">
                        How We Got Started: Story of Our Beginnings
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                        Our company was founded in the Baltimore-Washington metro area in 1977 as one of the first whole house cleaning services in the region. In 1989, Steve Robinson and Tim Evankovich purchased the company and broadened its scope to serve even more clients.
                    </p>

                    <div className="p-5 bg-blue-50 border-l-4 border-blue-400 rounded-xl shadow-md text-gray-700" data-aos="fade-left" data-aos-delay="500">
                        <p>
                            Franchising began in 1995 and has grown to include more than 225 locations across North America.
                        </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        This quality commitment and reputation for excellent service attracted outside investors. In 2014, the company announced a majority acquisition by PNC Riverarch Capital. Since then, the company has continued to grow and evolve. In 2017, The Cleaning Authority became the flagship brand of Authority Brands, the nation's leading home services franchisor. Authority Brands is the parent company of The Cleaning Authority and other best-in-class home service franchise brands.
                    </p>

                    <h1 className="text-2xl text-[#0079C1] font-semibold leading-relaxed">
                        Providing House Cleaning Services for More Than 25 Years
                    </h1>

                    <p className="text-gray-700 leading-relaxed">
                        The Cleaning Authority is widely recognized for our commitment to serving our customers while staying friendly to the environment. We have a history of excellence and dedication to our clients through providing professional and high-quality house cleaning services across America.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default OurBeginnings;
