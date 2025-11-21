import React, { useState, useEffect } from 'react';
import { FaPhone, FaQuoteLeft, FaFacebook, FaTwitter, FaGoogle, FaPinterest, FaYoutube, FaRss, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaCreditCard, FaCashRegister } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });

    const handleScroll = () => {
      const form = document.querySelector('.masthead.local');
      if (form) {
        const formBottom = form.getBoundingClientRect().bottom;
        setIsScrolled(formBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { name: 'facebook', url: 'https://www.facebook.com/TCAIrvine/', icon: <FaFacebook /> },
    { name: 'twitter', url: 'https://twitter.com/livelifeweclean', icon: <FaTwitter /> },
    { name: 'google', url: 'https://www.google.com/maps?cid=16797985708399161230', icon: <FaGoogle /> },
    { name: 'pinterest', url: 'https://www.pinterest.com/tcauthority/', icon: <FaPinterest /> },
    { name: 'youtube', url: 'https://www.youtube.com/user/thecleaningauthority', icon: <FaYoutube /> },
    { name: 'rss', url: 'https://www.thecleaningauthority.com/blog/', icon: <FaRss /> },
    { name: 'instagram', url: 'https://www.instagram.com/the_cleaning_authority/', icon: <FaInstagram /> },
    { name: 'linkedin', url: 'https://www.linkedin.com/company/the-cleaning-authority/', icon: <FaLinkedin /> }
  ];

  const paymentMethods = [
    { name: 'Cash', icon: <FaCashRegister /> },
    { name: 'MasterCard', icon: <FaCreditCard /> },
    { name: 'AMEX', icon: <FaCreditCard /> },
    { name: 'Check', icon: <FaCreditCard /> },
    { name: 'Visa', icon: <FaCreditCard /> },
    { name: 'Discover', icon: <FaCreditCard /> }
  ];

  return (
    <footer className="bg-[#0079C1] py-5 text-white">
      <div 
        className={`lg:hidden bg-[#0079C1] transition-all duration-300 ${isScrolled ? 'fixed top-0 w-full z-50 shadow-lg' : 'hidden'}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-around items-center">
            <a 
              href="https://estimate.thecleaningauthority.com/" 
              className="flex flex-col items-center text-white hover:text-blue-100 transition-colors group"
              data-aos="fade-up"
            >
              <FaQuoteLeft className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Get Pricing</span>
            </a>
            <a 
              href="tel:(949) 603-1973" 
              className="flex flex-col items-center text-white hover:text-blue-100 transition-colors group"
              data-aos="fade-up"
            >
              <FaPhone className="w-6 h-6 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold">Call Us</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="space-y-4" data-aos="fade-right">
            <a href="/irvine/" className="block">
              <img 
                alt="The Cleaning Authority" 
                src="https://www.thecleaningauthority.com/images/brand/logo-light.2012151510160.png"
                className="h-12 w-auto mb-4"
              />
            </a>
            
            <div className="space-y-2">
              <strong className="text-lg block">Call Now for a Free Estimate!</strong>
              <a 
                href="tel:(949) 603-1973" 
                className="text-2xl font-bold text-white hover:text-blue-100 transition-colors block"
              >
                (949) 603-1973
              </a>
              <div className="text-gray-300">
                <span>Fax: 949.603.1973</span>
              </div>
            </div>

            <address className="not-italic space-y-2">
              <div className="space-y-1">
                <span className="block">630 S Grand Ave #113</span>
                <span className="block">Santa Ana, CA 92705</span>
              </div>
              <a 
                href="/locations/" 
                className="inline-block bg-white text-black hover:bg-[#66A038] hover:text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
              >
                Change Location
              </a>
            </address>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8" data-aos="fade-up">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/irvine/about-us/" className="text-gray-300 hover:text-white transition-colors quick-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/irvine/about-us/reviews/" className="text-gray-300 hover:text-white transition-colors quick-link">
                    Reviews
                  </a>
                </li>
                <li>
                  <a 
                    href="/franchise/?SPPC=Offline&sppccampaignid=383896" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors quick-link"
                  >
                    Own a Franchise
                  </a>
                </li>
                <li>
                  <a 
                    href="https://myaccount.thecleaningauthority.com/Account/Login?locationId=274" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors quick-link"
                  >
                    MyTCA Account
                  </a>
                </li>
                <li>
                  <a 
                    href="https://gifts.thecleaningauthority.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors quick-link"
                  >
                    Gift Certificates
                  </a>
                </li>
                <li>
                  <a href="/our-family/" className="text-gray-300 hover:text-white transition-colors quick-link">
                    Our Brand Family
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="/irvine/site-map/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors quick-link"
                  >
                    Site Map
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy/" className="text-gray-300 hover:text-white transition-colors quick-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/ada-notice/" className="text-gray-300 hover:text-white transition-colors quick-link">
                    ADA Notice
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy/consumer-protection/" className="text-gray-300 hover:text-white transition-colors quick-link">
                    Your Privacy Choices
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social & Payments */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0079C1] hover:bg-[#66A038] rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Payments We Accept</h3>
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((payment, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-[#66A038] rounded-full flex items-center justify-center"
                    title={payment.name}
                  >
                    {payment.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-1 text-sm text-gray-100">
        <div>
          <strong className="block mb-2">
            © 2025 The Cleaning Authority Franchising SPE LLC. All rights reserved. Each location individually owned and operated.
          </strong>
          <a 
            href="/privacy-policy/consumer-protection/" 
            className="text-white transition-colors"
          >
            Do Not Sell My Information - California Residents
          </a>
        </div>
      </div>
      
      <style jsx>{`
        /* Add these styles for the hover effect */
        .quick-link {
          position: relative;
          display: inline-block;
        }

        .quick-link::before,
        .quick-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }

        .quick-link::before {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .quick-link::after {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .quick-link:hover::before,
        .quick-link:hover::after {
          width: 100%;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
