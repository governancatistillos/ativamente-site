import React from 'react';
import { motion } from 'framer-motion';

const EnvironmentCard = ({ image, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2 text-balance">
          {title}
        </h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default EnvironmentCard;