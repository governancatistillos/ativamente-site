import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SpecialtyCard = ({ icon: Icon, title, description, delay = 0, link = '/terapias' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-card-foreground text-balance">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <div className="mt-auto">
        <Link to={link}>
          <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80">
            Saiba mais
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default SpecialtyCard;