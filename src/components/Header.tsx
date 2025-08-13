import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom MJ Logo Component
// Custom MJ Logo Component
const MJLogo = ({ className }: { className?: string }) => (
  // Adjusting the container size for a typical header logo,
  // making it wider to accommodate most horizontal logos.
  // You might choose 'h-16' (64px) or 'h-20' (80px) for height,
  // and 'w-auto' to let the width adjust based on the image's aspect ratio.
  <div className={`flex items-center justify-center h-16 w-auto ${className}`}>
    <img
      src="/Screenshot 2025-08-03 at 5.24.53 AM_prev_ui.png"
      alt="MJ Logo"
      // Making the image fill the height of its container,
      // and maintaining its aspect ratio.
      className="h-full w-auto object-contain"
    />
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToPackages = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#packages';
      return;
    }
    
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and scroll to packages
      window.location.href = '/#packages';
    } else {
      // If on home page, scroll to packages section
      const packagesSection = document.getElementById('packages');
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Header styling logic
  const getHeaderClass = () => {
    if (isHomePage) {
      // On home page: transparent when at top, white when scrolled
      return isScrolled 
        ? 'bg-white shadow-md text-gray-800' 
        : 'bg-transparent text-white';
    } else {
      // On internal pages: always white background with dark text
      return 'bg-white shadow-md text-gray-800';
    }
  };
  
  const getActiveColor = () => {
    if (isHomePage && !isScrolled) {
      return 'text-teal-400';
    }
    return 'text-teal-600';
  };
  
  const getHoverColor = () => {
    if (isHomePage && !isScrolled) {
      return 'hover:text-teal-400';
    }
    return 'hover:text-teal-600';
  };
  
  const getButtonClass = () => {
    if (isHomePage && !isScrolled) {
      return 'bg-white text-teal-600 hover:bg-gray-100';
    }
    return 'bg-teal-600 text-white hover:bg-teal-700';
  };

  const headerClass = getHeaderClass();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={handleLogoClick} className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity">
          <MJLogo isScrolled={isScrolled} isHomePage={isHomePage} />
          <span></span>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            className={`text-lg font-medium ${getHoverColor()} transition-colors ${
              location.pathname === '/' ? getActiveColor() : ''
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <button
            onClick={scrollToPackages}
            className={`text-lg font-medium ${getHoverColor()} transition-colors`}
          >
            Packages
          </button>
          <Link 
            to="/about"
            className={`text-lg font-medium ${getHoverColor()} transition-colors ${
              location.pathname === '/about' ? getActiveColor() : ''
            }`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/contact"
            className={`text-lg font-medium ${getHoverColor()} transition-colors ${
              location.pathname === '/contact' ? getActiveColor() : ''
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link 
            to="/contact" 
            className={`px-6 py-2 rounded-full font-medium transition-all ${getButtonClass()}`}
          >
            Book Now
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-lg font-medium text-gray-800 hover:text-teal-600 py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <button
                onClick={scrollToPackages}
                className="text-lg font-medium text-gray-800 hover:text-teal-600 py-2 text-left"
              >
                Packages
              </button>
              <Link 
                to="/about"
                className="text-lg font-medium text-gray-800 hover:text-teal-600 py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className="text-lg font-medium text-gray-800 hover:text-teal-600 py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-teal-600 text-white rounded-full font-medium text-center hover:bg-teal-700 transition-colors"
                onClick={closeMenu}
              >
                Book Now
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;