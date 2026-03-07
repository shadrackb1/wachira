import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                Wachira Wekhomba Aim
              </h3>
              <p className="text-gray-400 text-xs uppercase tracking-[0.15em]">
                & Associates Advocates
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing reliable legal representation and professional legal services with integrity and dedication across Kenya.
            </p>
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center text-accent hover:text-white transition-colors text-sm font-bold uppercase tracking-wider group">
                Get in Touch <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Practice Areas', path: '/practice-areas' },
                { name: 'Our Team', path: '/team' },
                { name: 'Insights', path: '/insights' },
                { name: 'Contact Us', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-accent transition-colors text-sm flex items-center group">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-full mr-4 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <span className="text-gray-400 text-sm leading-relaxed">
                  CVS Plaza, 4th Floor, Lenana Road, Nairobi<br />
                  West Side Mall, 3rd Floor, Kenyatta Avenue, Nakuru
                </span>
              </li>
              <li className="flex items-center group">
                <div className="bg-gray-800 p-2 rounded-full mr-4 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <span className="text-gray-400 text-sm">
                  +254 713 209 487<br />
                  +254 708 156 186
                </span>
              </li>
              <li className="flex items-center group">
                <div className="bg-gray-800 p-2 rounded-full mr-4 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <span className="text-gray-400 text-sm break-all">
                  info@wachirawekombaimadvocates.com
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-8 relative inline-block">
              Office Hours
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sunday</span>
                <span className="text-accent">Closed</span>
              </li>
            </ul>
            
            <div className="mt-10 flex space-x-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all duration-300 transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Wachira Wekhomba Aim & Associates Advocates. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-xs hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-xs hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 text-xs hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
