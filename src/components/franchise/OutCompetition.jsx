import React from "react";
import { FaArrowRight } from "react-icons/fa";

const OutCompetition = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-[#F7FBFF] to-white">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0079C1] max-w-3xl mx-auto mb-6 drop-shadow-sm">
                We Clean Out the Competition
            </h2>

            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
                Curious if the home cleaning franchise industry is right for you? Contact us today at <span className="text-[#0079C1]">(888) 718-4534</span> or explore the cards below to learn more.
            </p>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* LEFT SIDE CARDS */}
                <div className="space-y-8">

                    {[
                        {
                            img: "https://cleaningauthorityfranchise.com/wp-content/uploads/2024/05/cleaning-authority-supplies-1.jpg",
                            title: "About The Cleaning Authority"
                        },
                        {
                            img: "https://cleaningauthorityfranchise.com/wp-content/uploads/2024/05/investment-information-cleaning-authority-franchise.jpg",
                            title: "Investing in Our Franchise"
                        },
                        {
                            img: "https://cleaningauthorityfranchise.com/wp-content/uploads/2024/05/cleaning-service-franchise-owner.jpg",
                            title: "Meet Our Franchisees"
                        },
                        {
                            img: "https://cleaningauthorityfranchise.com/wp-content/uploads/2024/05/owner-support-cleaning-franchise.jpg",
                            title: "Franchisee Training & Support"
                        },
                        {
                            img: "https://cleaningauthorityfranchise.com/wp-content/uploads/2024/05/cleaning-authority-franchise-support.jpg",
                            title: "Marketing Tools"
                        },
                    ].map((card, idx) => (
                        <div key={idx} className="flex flex-col items-start p-3 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 border border-[#dceefa] max-w-sm">
                            
                            {/* Picture */}
                            <div className="w-full h-32 rounded-2xl overflow-hidden mb-4">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3 leading-tight">
                                {card.title}
                            </h3>

                            {/* Learn More Button */}
                            <button className="flex items-center gap-2 text-[#0079C1] font-semibold hover:text-[#005f94] transition transform hover:translate-x-1">
                                Learn More <FaArrowRight />
                            </button>
                        </div>
                    ))}

                </div>

                {/* RIGHT SIDE FORM */}
                <div className="bg-[#0079C1] p-10 rounded-3xl shadow-xl border-2 border-white/30">
                    <h3 className="text-2xl font-bold text-center text-white mb-2">
                        Ready to Build a Rewarding Business?
                    </h3>

                    <p className="text-center text-gray-200 mb-3 text-sm">
                        Fill out the form and our franchise development team will contact you.
                    </p>

                    <p className="text-gray-100 text-sm mb-6 leading-relaxed">
                        Interested parties must have a minimum $50,000 cash on hand to invest in a franchise. We are currently only accepting franchise applications in the United States.
                    </p>

                    {/* FORM */}
                    <form className="space-y-6">

                        {/* First & Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium text-white">First Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff]"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-white">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff]"
                                />
                            </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium text-white">Email</label>
                                <input
                                    type="email"
                                    className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff]"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-white">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff]"
                                />
                            </div>
                        </div>

                        {/* City / State */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium text-white">City</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff]"
                                />
                            </div>
                            <div>
                                <label className="font-medium text-white">State</label>
                                <select className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff]">
                                    <option>Select State</option>
                                    <option>California</option>
                                    <option>New York</option>
                                    <option>Florida</option>
                                    <option>Texas</option>
                                </select>
                            </div>
                        </div>

                        {/* Postal Code */}
                        <div>
                            <label className="font-medium text-white">Postal Code*</label>
                            <input
                                type="text"
                                className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff]"
                            />
                        </div>

                        {/* Amount to Invest */}
                        <div>
                            <label className="font-medium text-white">
                                Amount Available to Invest*
                            </label>
                            <select className="w-full mt-1 px-4 py-2 rounded-xl bg-white/90 text-gray-800 shadow focus:outline-[#52d2ff] focus:ring-2 focus:ring-[#52d2ff]">
                                <option>Select Amount</option>
                                <option>$20,000 - $50,000</option>
                                <option>$50,000 - $100,000</option>
                                <option>$100,000 - $250,000</option>
                                <option>$250,000+</option>
                            </select>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" />
                            <p className="text-white text-sm leading-relaxed">
                                By checking this box, I consent to receive recurring text messages regarding franchise opportunities. Msg & data rates may apply. <span className="text-yellow-200 underline hover:text-white cursor-pointer">Privacy Policy</span>.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-4">
                            <button className="px-10 py-3 bg-[#4fa33a] text-white rounded-full shadow-lg font-semibold hover:bg-[#3b8c2d] transition-all duration-300 transform hover:-translate-y-1">
                                Submit Application
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default OutCompetition;
