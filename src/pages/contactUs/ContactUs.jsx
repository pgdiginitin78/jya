import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactUsBg from "../../asset/contactusbg/contactUsBg.jpg"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[\d\s\-\+\(\)]+$/;
    return phone.length >= 10 && re.test(phone);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    setErrors(prev => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formDataObject = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
      submittedAt: new Date().toISOString()
    };

    console.group('📩 Contact Form Data');
    console.table(formDataObject);
    console.groupEnd();

    setSubmitStatus('sent');
    setTimeout(() => {
      setSubmitStatus('');
      setFormData({ email: '', phone: '', name: '', message: '' });
    }, 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    
    if (!newsletterEmail) {
      setNewsletterError('Email is required');
      return;
    }

    if (!validateEmail(newsletterEmail)) {
      setNewsletterError('Please enter a valid email');
      return;
    }

    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterStatus('subscribed');
    setTimeout(() => {
      setNewsletterStatus('');
      setNewsletterEmail('');
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };


  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
        backgroundImage: `url(${contactUsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'saturate(0.85) contrast(0.95)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-green-100/20 to-emerald-200/30 backdrop-blur-sm" />
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-4 lg:left-16 top-24 opacity-20"
        >
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
            <path d="M0 20 L12 10 L24 20 L12 30 Z" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M24 20 L36 10 L48 20 L36 30 Z" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M48 20 L60 10 L72 20 L60 30 Z" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M72 20 L84 10 L96 20 L84 30 Z" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M96 20 L108 10 L120 20 L108 30 Z" stroke="#64748b" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ 
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-4 lg:right-16 top-32 opacity-20"
        >
          <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
            <path d="M0 30 L12 20 L24 30 L12 40 Z" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M24 30 L36 20 L48 30 L36 40 Z" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M48 30 L60 20 L72 30 L60 40 Z" stroke="#64748b" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        <motion.div 
          animate={{ 
            x: [0, 15, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-8 lg:right-32 bottom-8 opacity-20"
        >
          <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
            <path d="M0 20 L12 10 L24 20 L12 30 Z" stroke="#16a34a" strokeWidth="2" fill="none" />
            <path d="M24 20 L36 10 L48 20 L36 30 Z" stroke="#16a34a" strokeWidth="2" fill="none" />
            <path d="M48 20 L60 10 L72 20 L60 30 Z" stroke="#16a34a" strokeWidth="2" fill="none" />
            <path d="M72 20 L84 10 L96 20 L84 30 Z" stroke="#16a34a" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto py-40 md:py-40">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-50 to-white bg-clip-text text-transparent"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            Connect With Us
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <svg width="200" height="20" viewBox="0 0 200 20" fill="none">
              <motion.path 
                d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10" 
                stroke="rgba(255,255,255,0.6)" 
                strokeWidth="2"
                fill="none" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6 }}
              />
            </svg>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white/90 px-4 leading-relaxed backdrop-blur-sm bg-white/10 rounded-2xl py-6"
          >
            Begin your journey to wellness and balance. Our Ayurvedic practitioners are here to guide you
            towards natural healing and harmonious living. We're committed to providing personalized care
            and sustainable wellness solutions.
          </motion.p>
        </div>
      </motion.div>

      <div className="px-4 sm:px-6 lg:px-20 py-12 lg:py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-2 border p-3 rounded-xl bg-white"
          >
            <h3 className='py-2 text-xl font-semibold tracking-wide '>
                Contact Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    className={`w-full px-6 py-4 rounded-full bg-green-100 text-green-900 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                      errors.email ? 'ring-2 ring-red-400' : ''
                    }`}
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-500 text-sm mt-2 ml-4"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>
                
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number *"
                    className={`w-full px-6 py-4 rounded-full bg-green-100 text-green-900 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                      errors.phone ? 'ring-2 ring-red-400' : ''
                    }`}
                  />
                  {errors.phone && (
                    <motion.p 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-500 text-sm mt-2 ml-4"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  className={`w-full px-6 py-4 rounded-full bg-green-100 text-green-900 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                    errors.name ? 'ring-2 ring-red-400' : ''
                  }`}
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm mt-2 ml-4"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *"
                  rows="6"
                  className={`w-full px-6 py-4 rounded-3xl bg-green-100 text-green-900 placeholder-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none transition-all ${
                    errors.message ? 'ring-2 ring-red-400' : ''
                  }`}
                ></textarea>
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-500 text-sm mt-2 ml-4"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-medium transition-all shadow-lg ${
                    submitStatus === 'sent'
                      ? 'bg-green-700 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {submitStatus === 'sent' ? 'Message Sent! ✓' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl p-6 lg:p-8 text-white shadow-2xl"
          >
            <div className="mb-6">
              <h3 className=" lg:text-3xl font-bold mb-3 whitespace-nowrap">Wellness Newsletter</h3>
              <p className="text-green-50 text-sm lg:text-base leading-relaxed">
                Subscribe to receive Ayurvedic tips, seasonal recipes, holistic wellness practices, 
                mindfulness techniques, and exclusive retreat offers delivered to your inbox monthly.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    setNewsletterError('');
                  }}
                  placeholder="Enter your email"
                  className={`w-full px-6 py-3 rounded-full bg-white text-green-900 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-white ${
                    newsletterError ? 'ring-2 ring-red-300' : ''
                  }`}
                />
                {newsletterError && (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-green-100 text-sm mt-2"
                  >
                    {newsletterError}
                  </motion.p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-full font-medium transition-all ${
                  newsletterStatus === 'subscribed'
                    ? 'bg-green-800 text-white'
                    : 'bg-green-800 hover:bg-green-900 text-white'
                }`}
              >
                {newsletterStatus === 'subscribed' ? 'Subscribed! ✓' : 'Subscribe Now'}
              </motion.button>
            </form>

            <div className="mt-6 pt-6 border-t border-green-400/30">
              <p className="text-green-50 text-xs">
                Join 10,000+ wellness enthusiasts on their journey to holistic health.
              </p>
            </div>
          </motion.div>
        </motion.div>

   

   
      </div>
    </div>
  );
};

export default ContactPage;