import React from "react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface UseCaseCardProps {
  title: string;
  category: string;
  problem: string;
  solution: string;
  results: string[];
  techStack: string[];
  delay?: number;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  category,
  problem,
  solution,
  results,
  techStack,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-500/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20">
            {category}
          </span>
          <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <div className="space-y-4 mb-6 flex-grow">
          <div>
            <p className="text-xs text-red-400 font-mono mb-1 uppercase tracking-wider">Desafio</p>
            <p className="text-sm text-gray-400">{problem}</p>
          </div>
          <div>
            <p className="text-xs text-emerald-400 font-mono mb-1 uppercase tracking-wider">Solução</p>
            <p className="text-sm text-gray-300">{solution}</p>
          </div>
        </div>

        <div className="space-y-2 mb-6 bg-black/20 p-4 rounded-lg border border-white/5">
          {results.map((result, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
              <span className="text-xs text-gray-300">{result}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
          {techStack.map((tech, idx) => (
            <span key={idx} className="text-[10px] text-gray-500 font-mono border border-white/10 px-2 py-1 rounded bg-black/40">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
