import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, Calendar, Phone } from 'lucide-react';
import { TravelPackage } from '../types';

interface PackageCardProps {
  package: TravelPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-semibold text-teal-600">
          {pkg.discount ? `${pkg.discount}% OFF` : 'Popular'}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-teal-600 mr-1" />
          <span className="text-gray-500 text-sm">{pkg.location}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
        
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={16} 
                className={i < pkg.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">({pkg.reviews} reviews)</span>
        </div>
        
        <div className="flex justify-between items-center mb-4 text-sm">
          <div className="flex items-center">
            <Clock size={16} className="text-gray-500 mr-1" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="text-gray-500 mr-1" />
            <span>{pkg.availability}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a 
              href="tel:+919971145668"
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              Call Now
            </a>
          </div>
          
          <Link 
            to={`/packages/${pkg.id}`}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;