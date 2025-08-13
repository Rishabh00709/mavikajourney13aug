import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Star,
  ChevronLeft,
  Plane,
  Hotel,
  Utensils,
  Camera,
  Shield,
  Users,
  Phone,
  Mail,
  User,
  Calendar,
  IndianRupee,
  Check,
  X,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { travelPackages } from '../data/packages';
import { packageContent } from '../data/packageContent';
import { submitToGoogleSheets } from '../utils/googleSheets';

const PackageDetailsPage = () => {
  const { id } = useParams();
  const packageDetails = travelPackages.find((pkg) => pkg.id === id);
  const content = packageContent[id || ''];
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    destination: packageDetails?.location || '',
    startDate: '',
    endDate: '',
    travelers: '2',
    budget: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Package inquiry data being submitted:', formData);
      
      const success = await submitToGoogleSheets({
        ...formData,
        formType: 'package-inquiry',
        packageName: packageDetails?.title
      });

      console.log('Package inquiry submission result:', success);

      if (success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          destination: packageDetails?.location || '',
          startDate: '',
          endDate: '',
          travelers: '2',
          budget: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!packageDetails) {
    return (
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-2xl font-bold text-gray-800">Package not found</h1>
        <Link
          to="/"
          className="text-teal-600 hover:text-teal-700 mt-4 inline-block"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const defaultContent = {
    overview: packageDetails.description,
    highlights: [
      "Professional guided tours",
      "Comfortable accommodation",
      "Breakfast included",
      "Transportation provided",
      "24/7 support",
      "Cultural experiences"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Welcome",
        description: "Arrive at your destination and check into accommodation. Welcome briefing and orientation.",
        activities: ["Airport pickup", "Hotel check-in", "Welcome briefing", "Evening at leisure"]
      },
      {
        day: 2,
        title: "Exploration Day",
        description: "Full day of sightseeing and cultural exploration with professional guide.",
        activities: ["Morning sightseeing", "Local lunch", "Afternoon activities", "Cultural performance"]
      },
      {
        day: 3,
        title: "Adventure and Activities",
        description: "Engage in adventure activities and local experiences.",
        activities: ["Adventure activities", "Local interactions", "Traditional lunch", "Free time"]
      }
    ],
    reviews: [
      {
        id: "1",
        name: "Travel Enthusiast",
        rating: 5,
        date: "2024-01-15",
        comment: "Amazing experience! Well organized trip with great guides and beautiful destinations. Highly recommended for anyone looking for a memorable vacation."
      },
      {
        id: "2",
        name: "Adventure Seeker",
        rating: 4,
        date: "2024-01-08",
        comment: "Great package with good value for money. The itinerary was well planned and we enjoyed every moment of our trip."
      }
    ],
    inclusions: [
      "Accommodation as per itinerary",
      "All meals during the trip",
      "Professional guide",
      "Transportation",
      "Entry fees to attractions",
      "Airport transfers"
    ],
    exclusions: [
      "International flights",
      "Personal expenses",
      "Travel insurance",
      "Tips and gratuities",
      "Additional activities not mentioned"
    ]
  };

  const displayContent = content || defaultContent;

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${packageDetails.image})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white max-w-3xl"
          >
            <Link
              to="/"
              className="inline-flex items-center text-white hover:text-teal-400 mb-6 transition-colors"
            >
              <ChevronLeft size={20} className="mr-1" />
              Back to Packages
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {packageDetails.title}
            </h1>
            <div className="flex items-center space-x-4 text-lg">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                {packageDetails.location}
              </div>
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                {packageDetails.duration}
              </div>
              <div className="flex items-center">
                <Star size={20} className="mr-2 text-amber-400" />
                {packageDetails.rating} ({packageDetails.reviews} reviews)
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Package Overview */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Package Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{displayContent.overview}</p>

              <h3 className="text-xl font-semibold mb-4">Package Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {displayContent.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <Check size={16} className="text-teal-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                {[
                  { icon: Plane, text: 'Transportation' },
                  { icon: Hotel, text: 'Accommodation' },
                  { icon: Utensils, text: 'Meals included' },
                  { icon: Camera, text: 'Guided tours' },
                  { icon: Shield, text: 'Travel support' },
                  { icon: Users, text: 'Expert guides' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <item.icon size={20} className="text-teal-600 mr-2" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Itinerary */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {displayContent.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-teal-600 pl-6 pb-6">
                    <div className="flex items-center mb-2">
                      <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                        {day.day}
                      </div>
                      <h3 className="text-lg font-semibold">{day.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-3">{day.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">What's Included & Excluded</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-600">✓ Included</h3>
                  <ul className="space-y-2">
                    {displayContent.inclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">✗ Not Included</h3>
                  <ul className="space-y-2">
                    {displayContent.exclusions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X size={16} className="text-red-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Traveler Reviews</h2>
              <div className="flex items-center mb-6">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < packageDetails.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-300'
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {packageDetails.rating} out of 5 ({packageDetails.reviews} reviews)
                </span>
              </div>
              
              <div className="space-y-6">
                {displayContent.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-6 last:border-0"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={
                                  i < review.rating
                                    ? 'text-amber-400 fill-amber-400'
                                    : 'text-gray-300'
                                }
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-800 mb-4">
                  Get Best Price & Availability
                </div>
                <a 
                  href="tel:+919971145668"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-lg"
                >
                  <Phone size={20} className="mr-2" />
                  Call +91 9971145668
                </a>
              </div>
              
              <h2 className="text-xl font-bold mb-6">Request Information</h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                >
                  <CheckCircle size={20} className="text-green-600 mr-2" />
                  <span className="text-green-800">Thank you! We'll contact you soon.</span>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
                >
                  <AlertCircle size={20} className="text-red-600 mr-2" />
                  <span className="text-red-800">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <User className="inline-block w-4 h-4 mr-2" />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Phone className="inline-block w-4 h-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="+91 98765 43210"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Mail className="inline-block w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Calendar className="inline-block w-4 h-4 mr-2" />
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Calendar className="inline-block w-4 h-4 mr-2" />
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      min={
                        formData.startDate ||
                        new Date().toISOString().split('T')[0]
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Users className="inline-block w-4 h-4 mr-2" />
                    Number of Travelers
                  </label>
                  <select
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    disabled={isSubmitting}
                  >
                    <option value="1">1 Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3">3 Travelers</option>
                    <option value="4">4 Travelers</option>
                    <option value="5+">5+ Travelers</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mb-4"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Mail size={20} className="mr-2" />
                      Request Information
                    </>
                  )}
                </button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Or call directly for instant booking</p>
                  <a 
                    href="tel:+919971145668"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    <Phone size={16} className="mr-2" />
                    Call +91 9971145668
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;