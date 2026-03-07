import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import TiltCard from '../components/ui/TiltCard';

const Team = () => {
  return (
    <PageTransition>
      <div className="bg-white">
        {/* Header */}
        <div className="bg-gray-900 text-white py-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl font-bold mb-6"
            >
              Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            >
              Meet the dedicated professionals behind our success.
            </motion.p>
          </div>
        </div>

        {/* Team Content */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              {/* Profile Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-5xl"
              >
                <TiltCard className="bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row border-t-4 border-primary">
                  {/* Image Placeholder - In a real scenario, this would be a real photo */}
                  <div className="md:w-2/5 bg-gray-200 min-h-[500px] relative group overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Patrick Oduor" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-8 md:hidden">
                      <div>
                        <h3 className="text-white font-serif text-2xl font-bold">Patrick Oduor</h3>
                        <p className="text-accent font-medium">Advocate</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                      <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z"/>
                      </svg>
                    </div>
                    
                    <div className="hidden md:block mb-8">
                      <h3 className="text-primary font-serif text-4xl font-bold mb-2">Patrick Oduor</h3>
                      <p className="text-secondary font-medium text-lg uppercase tracking-[0.2em]">Advocate</p>
                      <div className="w-20 h-1 bg-accent mt-6"></div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                      Patrick Oduor is an advocate at Wachira Wekhomba Aim & Associates Advocates. He provides professional legal services and representation while maintaining strong ethical standards and dedication to client success. With a deep understanding of the Kenyan legal landscape, Patrick is committed to delivering strategic solutions that protect client interests.
                    </p>

                    <div className="space-y-5 mb-10">
                      <div className="flex items-center text-gray-700 group">
                        <div className="bg-accent/10 p-2 rounded-full mr-4 group-hover:bg-accent group-hover:text-white transition-colors">
                          <Mail className="h-5 w-5 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <a href="mailto:info@wachirawekombaimadvocates.com" className="hover:text-primary transition-colors font-medium">
                          info@wachirawekombaimadvocates.com
                        </a>
                      </div>
                      <div className="flex items-center text-gray-700 group">
                        <div className="bg-accent/10 p-2 rounded-full mr-4 group-hover:bg-accent group-hover:text-white transition-colors">
                          <Phone className="h-5 w-5 text-accent group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-medium">+254 713 209 487</span>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-widest">Areas of Practice</h4>
                      <div className="flex flex-wrap gap-3">
                        {['Civil Litigation', 'Corporate Law', 'Property Law', 'Legal Advisory'].map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-sm text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Team;
