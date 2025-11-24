import React from 'react';

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
            <a 
              href="#" 
              className="flex items-center space-x-2 hover:bg-[#66A038] px-3 py-1 rounded-lg transition-all duration-200 group"
              aria-label="MyTCA Account"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-semibold text-sm">MyTCA Account</span>
            </a>

            {/* Location Selector */}
            <div className="relative flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-[#66A038] px-3 py-1 rounded-lg cursor-pointer hover:bg-[#558029] transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold text-sm">Irvine</span>
                <svg className="w-4 h-4 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible hover:opacity-100 hover:visible transition-all duration-200 z-50">
                <a 
                  href="/locations/" 
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#66A038] transition-colors duration-150 rounded-lg"
                  aria-label="Change Location"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Change Location</span>
                  </div>
                </a>
                <div className="border-t border-gray-100"></div>
                <div className="p-3">
                  <p className="text-xs text-gray-500 mb-2">Recent Locations</p>
                  <div className="space-y-1">
                    <button className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                      Los Angeles
                    </button>
                    <button className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                      San Diego
                    </button>
                    <button className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors">
                      Orange County
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

export default Header;
