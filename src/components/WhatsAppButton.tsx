import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WhatsAppButton = () => {
  const phoneNumber = "254713209487"; // Using one of the provided numbers
  const message = "Hello, I would like to enquire about legal services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <div className="absolute bottom-full right-0 mb-2 w-max bg-gray-900 text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
      </div>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
        <MessageCircle size={28} fill="white" className="relative z-10" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
