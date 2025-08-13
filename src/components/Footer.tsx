import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Globe, Clock, Shield, Compass } from 'lucide-react';

// Custom MJ Logo Component for Footer
const MJLogo = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center h-12 w-auto ${className}`}>
    <img
      src="/Screenshot 2025-08-03 at 5.24.53 AM_prev_ui.png"
      alt="Mavika Journey Logo"
      className="h-full w-auto object-contain"
    />
  </div>
);

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <MJLogo />
            </div>
            <p className="text-gray-300 mb-4">
              Creating unforgettable travel experiences since 2013. Let us help you discover the world in comfort and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Travel Packages */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Travel Packages</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-teal-400 font-medium mb-2">International Packages</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/cultural-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Vietnam
                    </Link>
                  </li>
                  <li>
                    <Link to="/cultural-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Sri Lanka
                    </Link>
                  </li>
                  <li>
                    <Link to="/beach-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Bangkok
                    </Link>
                  </li>
                  <li>
                    <Link to="/beach-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Bali
                    </Link>
                  </li>
                  <li>
                    <Link to="/mountain-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Nepal
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-teal-400 font-medium mb-2">Domestic Packages</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/beach-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Andaman Islands
                    </Link>
                  </li>
                  <li>
                    <Link to="/beach-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Goa
                    </Link>
                  </li>
                  <li>
                    <Link to="/mountain-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Ladakh
                    </Link>
                  </li>
                  <li>
                    <Link to="/cultural-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Varanasi
                    </Link>
                  </li>
                  <li>
                    <Link to="/cultural-packages" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                      Tirupati
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Quick Links & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Services</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Globe size={16} className="text-teal-400 mr-2" />
                    <Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors">
                      Hotel Bookings
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Clock size={16} className="text-teal-400 mr-2" />
                    <Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors">
                      Air Tickets
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Shield size={16} className="text-teal-400 mr-2" />
                    <Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors">
                      Cruise Bookings
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Compass size={16} className="text-teal-400 mr-2" />
                    <Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors">
                      Customised Packages
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Shield size={16} className="text-teal-400 mr-2" />
                    <Link to="/contact" onClick={handleLinkClick} className="text-gray-300 hover:text-teal-400 transition-colors">
                      Travel Insurance
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">207, Hans Plaza, Ambedkar Road, Ghaziabad, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <a href="tel:+919891988944" className="text-gray-300 hover:text-teal-400 transition-colors">
                  +91 9891988944
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-teal-400 flex-shrink-0" />
                <a href="mailto:info@mavikajourney.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                info@mavikajourney.com
                </a>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-300 text-sm">
                  24/7 Customer Support Available
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mavika Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;