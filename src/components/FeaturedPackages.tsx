import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PackageCard from './PackageCard';
import { travelPackages } from '../data/packages';

const categories = ['All', 'Beach', 'Mountain', 'Cultural', 'Adventure'];
const regions = ['All', 'India', 'International'];

const FeaturedPackages = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeRegion, setActiveRegion] = useState('All');
  
  // Check URL hash for category selection
  React.useEffect(() => {
    const hash = location.hash;
    if (hash === '#beach') {
      setActiveCategory('Beach');
    } else if (hash === '#mountain') {
      setActiveCategory('Mountain');
    } else if (hash === '#cultural') {
      setActiveCategory('Cultural');
    }
  }, [location.hash]);
  
  const filteredPackages = travelPackages.filter(pkg => {
    const matchesCategory = activeCategory === 'All' || pkg.category === activeCategory;
    const matchesRegion = activeRegion === 'All' || pkg.region === activeRegion;
    return matchesCategory && matchesRegion;
  });
  
  return (
    <section id="packages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-3 text-gray-800"
          >
            Popular Travel Packages
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover our most loved destinations and expertly crafted travel experiences
          </motion.p>
        </div>
        
        {/* Region Tabs */}
        <div className="flex justify-center mb-6 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {regions.map((region, index) => (
              <button
                key={index}
                onClick={() => setActiveRegion(region)}
                className={`px-6 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-colors ${
                  activeRegion === region
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {region} Packages
              </button>
            ))}
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <PackageCard package={pkg} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;