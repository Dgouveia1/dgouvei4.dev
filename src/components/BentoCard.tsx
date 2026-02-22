import React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";

interface BentoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BentoCard: React.FC<BentoCardProps> = ({ title, description, icon, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-cyan-500/30 transition-colors duration-500",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">{description}</p>
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-cyan-500">
          <path d="M0 0H20V20" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    </motion.div>
  );
};
