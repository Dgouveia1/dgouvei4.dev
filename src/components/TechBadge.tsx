import React from "react";
import { cn } from "@/src/lib/utils";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, icon, className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white hover:border-cyan-500/50 transition-all cursor-default",
        className
      )}
    >
      {icon && <span className="text-cyan-400">{icon}</span>}
      {name}
    </div>
  );
};
