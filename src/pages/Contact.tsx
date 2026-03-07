import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import TiltCard from '../components/ui/TiltCard';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert('Thank you for your message. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <PageTransition>
      <div className="bg-gray-50">
        {/* Header */}
        <div className="bg-primary text-white py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            >
              Get in touch with our legal team for professional assistance.
            </motion.p>
          </div>
        </div>

        <section className="py-24 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <TiltCard className="bg-white p-8 rounded-sm shadow-lg border-l-4 border-primary">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-8">Office Locations</h3>
                    
                    <div className="space-y-8">
                      <div className="flex items-start group">
                        <div className="bg-primary/5 p-3 rounded-full mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                          <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Nairobi Office</h4>
                          <p className="text-gray-600 mt-1">CVS Plaza, 4th Floor<br/>Lenana Road, Nairobi</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start group">
                         <div className="bg-primary/5 p-3 rounded-full mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                          <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Nakuru Office</h4>
                          <p className="text-gray-600 mt-1">West Side Mall, 3rd Floor<br/>Kenyatta Avenue, Nakuru</p>
                          <p className="text-gray-500 text-sm mt-2 font-medium">P.O Box 808 – 20100, Nakuru</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <TiltCard className="bg-white p-8 rounded-sm shadow-lg border-l-4 border-accent">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-8">Contact Details</h3>
                    
                    <div className="space-y-8">
                      <div className="flex items-start group">
                        <div className="bg-accent/10 p-3 rounded-full mr-4 group-hover:bg-accent group-hover:text-white transition-colors">
                          <Phone className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Phone Numbers</h4>
                          <p className="text-gray-600 mt-1">+254 713 209 487</p>
                          <p className="text-gray-600">+254 708 156 186</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start group">
                        <div className="bg-accent/10 p-3 rounded-full mr-4 group-hover:bg-accent group-hover:text-white transition-colors">
                          <Mail className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Email Addresses</h4>
                          <p className="text-gray-600 break-all text-sm mt-1">info@wachirawekombaimadvocates.com</p>
                          <p className="text-gray-600 break-all text-sm">wachirawekombaimadvocates@gmail.com</p>
                        </div>
                      </div>

                      <div className="flex items-start group">
                         <div className="bg-accent/10 p-3 rounded-full mr-4 group-hover:bg-accent group-hover:text-white transition-colors">
                          <Clock className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Working Hours</h4>
                          <p className="text-gray-600 mt-1">Mon - Fri: 8:00 AM - 5:00 PM</p>
                          <p className="text-gray-600">Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 md:p-12 rounded-sm shadow-2xl h-full"
                >
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">Request Legal Consultation</h3>
                  <p className="text-gray-600 mb-10 text-lg">Fill out the form below and our team will get back to you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400"
                          placeholder="+254..."
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide group-focus-within:text-primary transition-colors">Message / Case Details</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-4 bg-gray-50 border-b-2 border-gray-200 focus:border-primary outline-none transition-all resize-none text-gray-900 placeholder-gray-400"
                        placeholder="Please briefly describe your legal matter..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-bold py-5 px-8 rounded-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-3 group"
                    >
                      <span className="text-lg">Send Message</span>
                      <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819917806043!2d36.7915!3d-1.2841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10b7d7f7c1b7%3A0x2b0b0b0b0b0b0b0b!2sLenana%20Rd%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Office Location"
          ></iframe>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
