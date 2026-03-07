import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

const HeroSection = ({ data }: { data: any }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img 
          src={data.backgroundImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 mix-blend-multiply"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block mb-6 px-5 py-2 border border-accent/50 rounded-full bg-black/30 backdrop-blur-md"
          >
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">{data.tagline}</span>
          </motion.div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 drop-shadow-2xl">
            {data.title?.split(' ').slice(0, -1).join(' ')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">{data.title?.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-12 max-w-2xl leading-relaxed font-light opacity-90">
            {data.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <Link 
              to="/consultation" 
              className="group relative bg-accent text-primary font-bold py-4 px-10 rounded-sm overflow-hidden shadow-xl"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10">Book Consultation</span>
            </Link>
            <Link 
              to="/contact" 
              className="group bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-sm transition-all hover:bg-white hover:text-primary shadow-xl"
            >
              Contact Our Advocates
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/70 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
