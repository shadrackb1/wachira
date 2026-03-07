import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Award, History, Target } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import TiltCard from '../components/ui/TiltCard';

const About = () => {
  return (
    <PageTransition>
      <div className="bg-white overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-white py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Office Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl font-bold mb-6"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light"
            >
              Dedicated to excellence, integrity, and client success.
            </motion.p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-24 relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center">
                   <span className="w-8 h-px bg-primary mr-3"></span> Our Firm
                </h4>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Wachira Wekhomba Aim <br/> & Associates Advocates
                </h2>
                
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-6 leading-relaxed">
                    Wachira Wekhomba Aim & Associates Advocates is a professional law firm committed to delivering high-quality legal services with integrity, professionalism, and dedication. Established with a vision to provide accessible and top-tier legal representation, we serve individuals, businesses, and institutions across Kenya.
                  </p>
                  <p className="mb-6 leading-relaxed">
                    The firm focuses on building strong client relationships while delivering practical legal solutions tailored to each client's needs. We understand that every legal matter is unique, and we approach each case with the attention to detail and strategic thinking it deserves.
                  </p>
                  <p className="leading-relaxed">
                    With offices in Nairobi and Nakuru, we are strategically positioned to serve clients throughout the region, offering a wide range of legal services from corporate law and commercial transactions to civil litigation and family law.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-8">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <TiltCard className="bg-white p-10 rounded-sm shadow-xl border-l-4 border-primary h-full">
                    <div className="flex items-start mb-4">
                      <div className="bg-primary/10 p-3 rounded-full mr-6">
                        <Target className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                          To provide exceptional legal services that empower our clients to achieve their objectives while upholding the highest standards of ethics and professionalism.
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <TiltCard className="bg-white p-10 rounded-sm shadow-xl border-l-4 border-accent h-full">
                    <div className="flex items-start mb-4">
                      <div className="bg-accent/10 p-3 rounded-full mr-6">
                        <Award className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                          To be the preferred legal partner in Kenya, known for our reliability, expertise, and unwavering commitment to justice and client satisfaction.
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h4 className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4">What Drives Us</h4>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Integrity", desc: "We uphold the highest ethical standards in all our dealings, ensuring honesty and transparency." },
                { title: "Excellence", desc: "We strive for perfection in our legal practice, delivering top-tier quality in every case." },
                { title: "Dedication", desc: "We are fully committed to our clients' causes, working tirelessly to achieve the best outcomes." },
                { title: "Client Focus", desc: "We prioritize our clients' needs, offering personalized solutions and responsive communication." }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TiltCard className="bg-white/5 backdrop-blur-md p-8 rounded-sm border border-white/10 hover:bg-white/10 transition-colors h-full">
                    <h3 className="font-serif text-2xl font-bold text-accent mb-4">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.desc}</p>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
