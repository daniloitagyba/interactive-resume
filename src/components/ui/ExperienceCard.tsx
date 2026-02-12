import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../types';
import { cn } from '../../hooks/utils';

interface ExperienceCardProps {
  exp: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        height: "auto", 
        marginBottom: "3rem",
        transition: { 
          height: { duration: 0.4 },
          opacity: { duration: 0.3, delay: 0.1 },
          x: { duration: 0.4, delay: 0.1 }
        }
      }}
      exit={{ 
        opacity: 0, 
        x: 20,
        height: 0, 
        marginBottom: 0,
        transition: {
          height: { duration: 0.4, delay: 0.1 },
          opacity: { duration: 0.2 },
          x: { duration: 0.2 }
        }
      }}
      className="relative pl-10 overflow-hidden group"
    >
      {/* Vertical Line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-accent/30 group-hover:bg-accent transition-colors" />
      
      {/* Timeline Circle */}
      <div className="absolute left-[12px] top-0 w-4 h-4 rounded-full bg-accent z-10 scale-100 group-hover:scale-110 transition-transform" />
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-theme-text group-hover:text-accent transition-colors">{exp.role}</h3>
          <p className="font-medium">
            <span className="text-accent">{exp.company}</span>
            <span className="text-theme-text-muted text-sm ml-2">— {exp.location}</span>
          </p>
        </div>
        <div className={cn(
          "text-[12px] font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20",
          "mt-1 md:mt-0 shadow-sm backdrop-blur-sm"
        )}>
          {exp.period}
        </div>
      </div>

      <ul className="list-disc list-inside space-y-2 text-theme-text-muted mb-4">
        {exp.description.map((desc, i) => (
          <li key={i} className="leading-relaxed">{desc}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech, i) => (
          <span 
            key={i} 
            className="text-xs px-2 py-1 rounded bg-accent/10 text-accent border border-accent/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
