import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, MapPin, Phone } from 'lucide-react';
import PackageCard from '../components/PackageCard';
import { travelPackages } from '../data/packages';

const CulturalPackagesPage = () => {
  const culturalPackages = travelPackages.filter(pkg => pkg.category === 'Cultural');

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg)',
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
              <Landmark size={40} className="text-teal-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold">Cultural Packages</h1>
            </div>
            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              Immerse yourself in rich heritage, ancient temples, and vibrant cultural experiences
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
                Get personalized cultural journey packages
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
              Our Cultural Destinations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              From sacred temples of Varanasi to the cultural wonders of international destinations, explore the world's most enriching cultural experiences.
            </motion.p>
          </div>

          {/* Region Filters */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-2 shadow-md">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-3 bg-teal-50 rounded-lg">
                  <h3 className="font-semibold text-teal-800">Indian Heritage</h3>
                  <p className="text-sm text-teal-600">{culturalPackages.filter(pkg => pkg.region === 'India').length} Packages</p>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800">International Culture</h3>
                  <p className="text-sm text-blue-600">{culturalPackages.filter(pkg => pkg.region === 'International').length} Packages</p>
                </div>
              </div>
            </div>
          </div>

          {/* Indian Cultural Packages */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <MapPin size={24} className="text-teal-600 mr-2" />
              Indian Cultural & Spiritual Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturalPackages
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

          {/* International Cultural Packages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <MapPin size={24} className="text-blue-600 mr-2" />
              International Cultural Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturalPackages
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
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready for Your Cultural Journey?</h3>
              <p className="text-gray-600 mb-6">
                Contact our travel experts to create your perfect cultural experience with authentic local insights and spiritual guidance.
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

export default CulturalPackagesPage;