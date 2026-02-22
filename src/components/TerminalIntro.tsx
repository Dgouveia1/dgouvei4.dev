import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TerminalIntroProps {
  onComplete: () => void;
}

export const TerminalIntro: React.FC<TerminalIntroProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  const bootSequence = [
    "> INITIALIZING SYSTEM...",
    "> LOADING KERNEL MODULES...",
    "> CONNECTING TO DATABASE...",
    "> OPTIMIZING ASSETS...",
    "> ACCESS GRANTED."
  ];

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((line, index) => {
      delay += Math.random() * 300 + 200; // Random delay between 200-500ms
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
        if (index === bootSequence.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center font-mono text-cyan-500 text-sm md:text-base p-8"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
    >
      <div className="w-full max-w-lg">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-2"
          >
            {line}
          </motion.div>
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-3 h-5 bg-cyan-500 ml-1 align-middle"
        />
      </div>
    </motion.div>
  );
};
