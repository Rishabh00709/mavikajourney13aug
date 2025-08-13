import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, MapPin, Phone } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import { travelPackages } from '../data/packages';

const MountainPackagesPage = () => {
  const mountainPackages = travelPackages.filter(pkg => pkg.category === 'Mountain');

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/2686558/pexels-photo-2686558.jpeg)',
            backgroundPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 container mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl"
          >
            <div className="flex items-center mb-4">
              <Mountain size={40} className="text-teal-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Mountain Packages</h1>
            </div>
            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              Experience breathtaking Himalayan peaks, serene valleys, and adventure in the mountains
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+919971145668"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                Call +91 9971145668
              </a>
              <div className="text-sm text-gray-200">
                Get customized mountain adventure packages
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            >
              Our Mountain Destinations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              From the majestic Ladakh landscapes to the Swiss Alps, discover mountain destinations that offer adventure, spirituality, and breathtaking natural beauty.
            </motion.p>
          </div>

          {/* Region Filters */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-3 bg-teal-50 rounded-lg">
                  <h3 className="font-semibold text-teal-800">Indian Mountains</h3>
                  <p className="text-sm text-teal-600">{mountainPackages.filter(pkg => pkg.region === 'India').length} Packages</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800">International Mountains</h3>
                  <p className="text-sm text-blue-600">{mountainPackages.filter(pkg => pkg.region === 'International').length} Packages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Indian Mountain Packages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <MapPin size={24} className="text-teal-600 mr-2" />
              Indian Mountain Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mountainPackages
                .filter(pkg => pkg.region === 'India')
                .map((pkg, index) => (
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

          {/* International Mountain Packages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <MapPin size={24} className="text-blue-600 mr-2" />
              International Mountain Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mountainPackages
                .filter(pkg => pkg.region === 'International')
                .map((pkg, index) => (
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

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready for Your Mountain Adventure?</h3>
              <p className="text-gray-600 mb-6">
                Contact our travel experts to plan your perfect mountain expedition with customized itineraries and the best adventure experiences.
              </p>
              <a 
                href="tel:+919971145668"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-lg"
              >
                <Phone size={24} className="mr-3" />
                Call Now: +91 9971145668
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MountainPackagesPage;