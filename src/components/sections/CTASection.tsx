import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

const CTASection = ({ data }: { data: any }) => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="py-32 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-b from-accent/20 to-transparent rounded-full blur-3xl"
      ></motion.div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {data.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/consultation" 
              className="bg-accent text-primary font-bold py-5 px-12 rounded-sm hover:bg-white transition-all shadow-xl transform hover:-translate-y-1 hover:shadow-2xl"
            >
              Request Consultation
            </Link>
            <a 
              href="tel:+254713209487" 
              className="bg-transparent border-2 border-white text-white font-bold py-5 px-12 rounded-sm hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1"
            >
              Call: +254 713 209 487
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
