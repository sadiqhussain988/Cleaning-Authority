import React, { useState, useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Memoized callback functions
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  const toggleDropdown = useCallback((index) => {
    setActiveDropdown(prev => prev === index ? null : index);
  }, []);

  const closeDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Menu items data
  const menuItems = [
    {
      title: "About Us",
      link: "/about",
      dropdown: [
        { title: "Company History", link: "/company-history" },
        { title: "Vision & Mission", link: "/vision-mishion" },
        { title: "Reviews", link: "/reviews" },
        { title: "Own a Franchise", link: "/ownf-franchiese", external: true },
      ],
    },
    {
      title: "Why Hire Us?",
      link: "/whyhireus",
      dropdown: [
        { title: "Detail-Clean Rotation System", link: "/detail-clean-rotation-system" },
        { title: "Green Cleaning", link: "/green-cleaning" },
        { title: "Satisfaction Guaranteed", link: "/satisfaction-guaranted" },
        { title: "Cleaning Frequencies", link: "/cleaning-frequencies" },
        { title: "Bonded & Insured", link: "/bonded-insured" },
        { title: "Fully Trained Employees", link: "/fully-trained-employees" },
        { title: "MyTCA App", link: "/mytca-app" },
        { title: "The Cleaning Authority CARES", link: "/the-cleaning-authority-cares" },
      ],
    },
    {
      title: "Our Services",
      link: "/our-services",
      dropdown: [
        { title: "House Cleaning", link: "/housecleaning" },
        { title: "Apartment Cleaning", link: "/apartmentcleaning" },
        { title: "Move In/Move Out", link: "/moveinmoveout" },
        { title: "One-Time Cleans", link: "/onetimeclean" },
        { title: "Office Cleaning", link: "/officeclean" },
        { title: "Housekeeping", link: "/housekeeping" },
        { title: "After Remodeling Cleaning", link: "/after-remodeling-cleaning" },
        { title: "Home Disinfection", link: "/home-disinfection-cleaning" },
        { title: "Window Washing", link: "/window-washing-cleaning" },
        { title: "Oven Cleaning", link: "/oven-cleaning" },
        { title: "Refrigerator Cleaning", link: "/refrigenrator-cleaning" },
      ],
    },
    // { title: "Blog", link: "/blogpage" },
    { title: "Blog", link: "/blog" },
    { title: "FAQs", link: "/faq" },
    { title: "Jobs", link: "/jobs" },
    { title: "Special Offers", link: "/special-offers" },
  ];

  // Dropdown Menu Component
  const DropdownMenu = ({ items, isOpen, onClose }) => {
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          onClose();
        }
      };

      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
      <div
        ref={dropdownRef}
        className="absolute top-full left-0 mt-1 w-56 bg-[#0067B6] rounded-lg shadow-lg text-white font-semibold z-50 animate-fadeIn"
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-2">
          {items.map((dropdownItem) => (
            <Link
              key={dropdownItem.link}
              to={dropdownItem.link}
              target={dropdownItem.external ? "_blank" : "_self"}
              rel={dropdownItem.external ? "noopener noreferrer" : undefined}
              className="block px-4 py-2 text-sm text-white hover:text-[#537c32] hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset transition-all duration-200"
              role="menuitem"
              aria-label={dropdownItem.title}
              onClick={onClose}
            >
              {dropdownItem.title}
            </Link>
          ))}
        </div>
      </div>
    );
  };

  // Mobile Menu Component
  const MobileMenu = () => {
    const menuRef = useRef(null);

    useEffect(() => {
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          closeMobileMenu();
        }
      };

      if (isMobileMenuOpen) {
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden"; // Disable scrolling when the mobile menu is open
      }

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset"; // Restore scrolling when the mobile menu is closed
      };
    }, [isMobileMenuOpen]);

    if (!isMobileMenuOpen) return null;

    return (
      <div 
        className="fixed inset-0  bg-black bg-opacity-50 z-50 lg:hidden" 
        onClick={closeMobileMenu}
        role="presentation"
      >
        <div 
          ref={menuRef}
          className="absolute top-0 right-0 h-full w-80 bg-white shadow-xl overflow-y-auto animate-slideInRight"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 py-8 space-y-4">
            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 last:border-b-0">
                <div className="flex items-center justify-between py-3">
                  <Link
                    to={item.link}
                    className="flex-1 text-gray-800 font-medium hover:text-[#5f992f] transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <button
                      onClick={() => toggleDropdown(menuItems.indexOf(item))}
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                      aria-expanded={activeDropdown === menuItems.indexOf(item)}
                      aria-label={`Toggle ${item.title} dropdown`}
                    >
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          activeDropdown === menuItems.indexOf(item) ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === menuItems.indexOf(item) && (
                  <div className="ml-4 mb-3 space-y-2 animate-fadeIn">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.link}
                        to={dropdownItem.link}
                        target={dropdownItem.external ? "_blank" : "_self"}
                        rel={dropdownItem.external ? "noopener noreferrer" : undefined}
                        className="block py-2 text-sm text-gray-600 hover:text-[#5f992f] hover:bg-gray-50 rounded transition-colors px-3"
                        onClick={closeMobileMenu}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-6 mt-6 border-t border-gray-200">
              <div className="text-center space-y-4">
                <div>
                  <div className="font-semibold text-[#0079C1] mb-1">
                    Call for a Free Estimate
                  </div>
                  <a
                    href="tel:(949) 603-1973"
                    className="text-lg font-semibold text-gray-900 hover:text-[#66A038] transition-colors block"
                  >
                    (949) 603-1973
                  </a>
                </div>
                <a
                  href="#"
                  className="inline-block bg-[#66A038] hover:bg-[#5f992f] text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg w-full"
                  onClick={closeMobileMenu}
                >
                  Free Estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Desktop Menu Item Component
  const DesktopMenuItem = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const itemRef = useRef(null);

    const isOpen = activeDropdown === index || isHovered;

    return (
      <div
        ref={itemRef}
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <Link
          to={item.link}
          className="flex items-center text-gray-700 font-medium px-4 py-2 hover:text-[#5f992f] transition-colors duration-300 group"
          aria-haspopup={item.dropdown ? "true" : "false"}
          aria-expanded={isOpen ? "true" : "false"}
          onClick={closeDropdowns}
        >
          <span>{item.title}</span>
          {item.dropdown && (
            <svg
              className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </Link>

        {/* Dropdown Menu */}
        {item.dropdown && (
          <DropdownMenu
            items={item.dropdown}
            isOpen={isOpen}
            onClose={() => {
              setIsHovered(false);
              toggleDropdown(null);
            }}
          />
        )}
      </div>
    );
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="flex-shrink-0" 
              onClick={closeDropdowns}
              aria-label="The Cleaning Authority Home"
            >
              <img
                alt="The Cleaning Authority"
                src="https://www.thecleaningauthority.com/images/brand/logo-dark.2012151510180.png"
                className="h-10 w-auto"
                width={120}
                height={40}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1" aria-label="Main navigation">
              {menuItems.map((item, index) => (
                <DesktopMenuItem
                  key={item.title}
                  item={item}
                  index={index}
                />
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-[#0079C1]">
                  Call for a Free Estimate
                </div>
                <a
                  href="tel:(949) 603-1973"
                  className="text-lg font-semibold text-gray-900 hover:text-[#66A038] transition-colors"
                  aria-label="Call (949) 603-1973"
                >
                  (949) 603-1973
                </a>
              </div>
              <a
                href="#"
                className="bg-[#66A038] hover:bg-[#5f992f] text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                aria-label="Get a Free Estimate"
              >
                Free Estimate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col space-y-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

export default Navbar;
