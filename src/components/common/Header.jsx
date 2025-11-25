import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-white shadow-md border-b border-gray-100">
      {/* Top Navigation Bar */}
      <div className="bg-[#DFEEF5] text-black py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left Section */}
          <div className="text-lg font-semibold"></div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">

            {/* My Account */}
            <Link 
              to="/mytca-app" 
              className="flex items-center space-x-2 hover:bg-[#66A038] px-3 py-1 rounded-lg transition-all duration-200 group"
              aria-label="MyTCA Account"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-semibold text-sm">MyTCA Account</span>
            </Link>

            {/* Location Selector */}
            <Link to="/change-location">
            <div className="relative flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-[#66A038] px-3 py-1 rounded-lg cursor-pointer hover:bg-[#558029] transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold text-sm">Irvine</span>
               
              </div>

             
            
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
