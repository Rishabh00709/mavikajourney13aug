import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg)',
            backgroundPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 container mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MavikaJourney</h1>
            <p className="text-xl">Creating unforgettable travel experiences since 2013</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Mavikva Journeys is the rebranded version of Sri Sri Vardhman Travels, originally established in 2013 by Vikas Jain, who brings over 25 years of experience in the tourism industry. Rooted in a legacy of trust and excellence, we continue to offer curated travel experiences with a personal touch. Our mission is to craft memorable journeys that combine comfort, culture, and discovery. Whether it's a spiritual retreat or a family vacation, we ensure every detail is thoughtfully planned for a seamless experience.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Users, label: 'Happy Travelers', value: '50,000+' },
            { icon: Globe, label: 'Destinations', value: '100+' },
            { icon: Award, label: 'Awards Won', value: '25+' },
            { icon: Clock, label: 'Years Experience', value: '13+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={40} className="text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertly Crafted Itineraries',
                description: 'Each journey is thoughtfully designed to provide the perfect balance of experiences, comfort, and adventure.'
              },
              {
                title: 'Local Expertise',
                description: 'Our network of local experts ensures authentic experiences and insider access to unique destinations.'
              },
              {
                title: '24/7 Support',
                description: 'Travel with peace of mind knowing our dedicated team is always available to assist you.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;