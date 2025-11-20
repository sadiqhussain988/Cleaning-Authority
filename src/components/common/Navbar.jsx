import React, { useState } from "react";
import { Link } from "react-router-dom";

// Reusable Dropdown Component
const DropdownMenu = ({ items, index, activeDropdown, toggleDropdown }) => {
  return (
    <div
      className={`absolute top-full left-0 mt-1 w-50 bg-[#0067B6] rounded-lg shadow-lg text-white font-semibold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40`}
    >
      <div className="py-2">
        {items.map((dropdownItem, dropdownIndex) => (
          <Link
            key={dropdownIndex}
            to={dropdownItem.link}
            target={dropdownItem.external ? "_blank" : "_self"}
            className="block px-4 py-2 text-sm text-white hover:text-[#537c32] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#005B8F] transition-all duration-200 transform"
            aria-label={dropdownItem.title}
          >
            {dropdownItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const menuItems = [
    {
      title: "About Us",
      link: "/irvine/about-us/",
      dropdown: [
        { title: "Company History", link: "/about-us/company-history/" },
        { title: "Vision & Mission", link: "/about-us/vision-mission/" },
        { title: "Reviews", link: "/irvine/about-us/reviews/" },
        { title: "Own a Franchise", link: "/franchise/", external: true },
      ],
    },
    {
      title: "Why Hire Us?",
      link: "/why-hire-us-/",
      dropdown: [
        {
          title: "Detail-Clean Rotation System",
          link: "/why-hire-us-/detail-clean-rotation-system/",
        },
        { title: "Green Cleaning", link: "/why-hire-us-/green-cleaning/" },
        {
          title: "Satisfaction Guaranteed",
          link: "/why-hire-us-/satisfaction-guaranteed/",
        },
        {
          title: "Cleaning Frequencies",
          link: "/why-hire-us-/cleaning-frequencies/",
        },
        { title: "Bonded & Insured", link: "/why-hire-us-/bonded-insured/" },
        {
          title: "Fully Trained Employees",
          link: "/why-hire-us-/professionally-trained-employees/",
        },
        { title: "MyTCA App", link: "/why-hire-us-/mytca-app/" },
        { title: "The Cleaning Authority CARES", link: "/cares/" },
      ],
    },
    {
      title: "Our Services",
      link: "/our-cleaning-services/",
      dropdown: [
        {
          title: "House Cleaning",
          link: "/irvine/our-cleaning-services/house-cleaning/",
        },
        {
          title: "Office Cleaning",
          link: "/our-cleaning-services/office-cleaning/",
        },
        {
          title: "Move In/Move Out",
          link: "/irvine/our-cleaning-services/move-in-move-out-cleaning/",
        },
        {
          title: "Apartment Cleaning",
          link: "/irvine/our-cleaning-services/apartment-cleaning/",
        },
        {
          title: "One-Time Cleans",
          link: "/irvine/our-cleaning-services/one-time-cleans/",
        },
        {
          title: "Housekeeping",
          link: "/irvine/our-cleaning-services/housekeeping/",
        },
        {
          title: "After Remodeling Cleaning",
          link: "/irvine/our-cleaning-services/after-remodeling-cleaning/",
        },
        {
          title: "Home Disinfection",
          link: "/irvine/our-cleaning-services/home-disinfection/",
        },
        {
          title: "Window Washing",
          link: "/irvine/our-cleaning-services/window-washing/",
        },
        {
          title: "Oven Cleaning",
          link: "/irvine/our-cleaning-services/oven-cleaning/",
        },
        {
          title: "Refrigerator Cleaning",
          link: "/irvine/our-cleaning-services/refrigerator-cleaning/",
        },
      ],
    },

    { title: "Blog", link: "/articles/" },
    { title: "FAQs", link: "/faqs/" },
    { title: "Jobs", link: "/cleaning-jobs/" },
    { title: "Special Offers", link: "/irvine/special-offers/" },
  ];

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-6">
            <Link to="/irvine/" className="flex-shrink-0">
              <img
                alt="The Cleaning Authority"
                src="https://www.thecleaningauthority.com/images/brand/logo-dark.2012151510180.png"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.link}
                    className="text-gray-700 font-medium px-4 py-2 hover:text-[#5f992f] transition-colors duration-300"
                    aria-haspopup={item.dropdown ? "true" : "false"}
                    aria-expanded={activeDropdown === index ? "true" : "false"}
                  >
                    <span>{item.title}</span>
                    {item.dropdown && (
                      <svg
                        className="w-4 h-4 ml-auto transform group-hover:rotate-180 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <DropdownMenu
                      items={item.dropdown}
                      index={index}
                      activeDropdown={activeDropdown}
                      toggleDropdown={toggleDropdown}
                    />
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <div className=" font-semibold text-[#0079C1]">
                  Call for a Free Estimate
                </div>
                <a
                  href="tel:(949) 603-1973"
                  className="text-lg font-semibold text-gray-900 hover:text-[#66A038] transition-colors"
                >
                  (949) 603-1973
                </a>
              </div>
              <a
                href="#"
                className="bg-[#66A038] hover:bg-[#5f992f] text-white px-5 py-2 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Free Estimate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col space-y-1 p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-opacity ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-gray-700 transition-transform ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                onClick={() => item.dropdown && toggleDropdown(index)}
                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Link to={item.link} className="flex-1">
                  {item.title}
                </Link>
                {item.dropdown && (
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      activeDropdown === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.dropdown && activeDropdown === index && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.link}
                      target={dropdownItem.external ? "_blank" : "_self"}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-blue-600 rounded transition-colors"
                    >
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Contact Info */}
          <div className="pt-4 border-t border-gray-200">
            <div className="text-center">
              <div className=" font-semibold text-[#0079C1] mb-2">
                Call for a Free Estimate
              </div>
              <a
                href="tel:(949) 603-1973"
                className="text-lg font-semibold text-blue-600 block mb-4"
              >
                (949) 603-1973
              </a>
              <a
                href="https://tca.thecleaningauthority.com/Redirect.aspx?d=2&f=274&c=1&s=5"
                className="bg-[#66A038] hover:bg-[#5f992f] text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
