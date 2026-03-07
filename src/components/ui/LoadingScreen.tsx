import React from 'react';
import { motion } from 'motion/react';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center relative"
      >
        <div className="mb-8 relative w-24 h-24 flex items-center justify-center">
           {/* Outer Ring */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
             className="absolute inset-0 border-[1px] border-gray-100 border-t-accent rounded-full w-full h-full"
           />
           {/* Inner Ring */}
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
             className="absolute inset-2 border-[1px] border-gray-100 border-b-primary rounded-full w-20 h-20"
           />
           
           {/* Logo */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, duration: 0.5 }}
             className="font-serif font-bold text-primary text-3xl relative z-10"
           >
             W
           </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-wide mb-2">
            Wachira Wekhomba Aim
          </h1>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-secondary">
            & Associates Advocates
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
