import React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  delay?: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  category,
  imageUrl,
  delay = 0,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-cyan-400">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <div className="flex items-center text-cyan-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
          Ler artigo <ArrowRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </motion.article>
  );
};
