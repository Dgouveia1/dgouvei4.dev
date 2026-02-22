import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  href: string;
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  icon: Icon,
  variant = "outline",
  className,
}) => {
  const variants = {
    primary: "bg-cyan-600 hover:bg-cyan-500 text-white border-transparent",
    secondary: "bg-emerald-600 hover:bg-emerald-500 text-white border-transparent",
    outline: "bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-cyan-500/50",
    ghost: "bg-transparent hover:bg-white/5 text-gray-300 hover:text-white border-transparent",
  };

  if (href.startsWith("/")) {
    return (
      <Link
        to={href}
        className={cn(
          "flex items-center w-full max-w-md p-4 rounded-xl border transition-all duration-300 shadow-lg backdrop-blur-sm group",
          variants[variant],
          className
        )}
      >
        <div className="flex-shrink-0 mr-4 p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <span className="flex-grow text-center font-medium text-lg tracking-wide">
          {label}
        </span>
        <div className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "flex items-center w-full max-w-md p-4 rounded-xl border transition-all duration-300 shadow-lg backdrop-blur-sm group",
        variants[variant],
        className
      )}
    >
      <div className="flex-shrink-0 mr-4 p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <span className="flex-grow text-center font-medium text-lg tracking-wide">
        {label}
      </span>
      <div className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  );
};
