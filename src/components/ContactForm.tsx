import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, User, MapPin, Calendar, Users, IndianRupee, CheckCircle, AlertCircle } from 'lucide-react';
import { submitToGoogleSheets } from '../utils/googleSheets';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    startDate: '',
    endDate: '',
    travelers: '2',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Form data being submitted:', formData);
      
      const success = await submitToGoogleSheets({
        ...formData,
        formType: 'callback'
      });

      console.log('Submission result:', success);

      if (success) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          email: '',
          destination: '',
          startDate: '',
          endDate: '',
          travelers: '2',
          budget: ''
        });
        
        // Close form after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus('idle');
        }, 2000);
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

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-8 rounded-l-lg shadow-lg hover:bg-teal-700 transition-colors z-[60]"
      >
        <div className="writing-mode-vertical flex items-center gap-2">
          <Phone size={20} />
          <span className="font-medium">Request Callback</span>
        </div>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[110]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Form Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[120] overflow-y-auto"
          >
            <div className="p-4 sm:p-6 pt-20 sm:pt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Request Callback</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                >
                  <CheckCircle size={20} className="text-green-600 mr-2" />
                  <span className="text-green-800">Thank you! We'll call you back soon.</span>
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

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4 sm:space-y-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <User className="inline-block w-4 h-4 mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Phone className="inline-block w-4 h-4 mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                      placeholder="+91 98765 43210"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Mail className="inline-block w-4 h-4 mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <MapPin className="inline-block w-4 h-4 mr-2" />
                      Destination
                    </label>
                    <input
                      type="text"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                      placeholder="Where do you want to go?"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
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
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        <Calendar className="inline-block w-4 h-4 mr-2" />
                        End Date
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        min={formData.startDate || new Date().toISOString().split('T')[0]}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Users className="inline-block w-4 h-4 mr-2" />
                      Number of Travelers
                    </label>
                    <select
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                      disabled={isSubmitting}
                    >
                      <option value="1">1 Traveler</option>
                      <option value="2">2 Travelers</option>
                      <option value="3">3 Travelers</option>
                      <option value="4">4 Travelers</option>
                      <option value="5+">5+ Travelers</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <IndianRupee className="inline-block w-4 h-4 mr-2" />
                      Budget Range (INR)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
                      disabled={isSubmitting}
                    >
                      <option value="">Select Budget Range</option>
                      <option value="10000-25000">₹10,000 - ₹25,000</option>
                      <option value="25000-50000">₹25,000 - ₹50,000</option>
                      <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                      <option value="100000+">Above ₹1,00,000</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Phone size={16} className="mr-2 sm:w-5 sm:h-5" />
                      Request Callback
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;