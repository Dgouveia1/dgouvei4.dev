import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "glass p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10 group",
        className
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};
