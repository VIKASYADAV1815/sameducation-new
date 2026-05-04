import * as React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({ title, description, icon, className, ...props }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200",
        className
      )}
      {...props}
    >
      {icon && <div className="mb-4 text-primary w-10 h-10 flex items-center justify-center bg-primary-light rounded-lg">{icon}</div>}
      <h4 className="text-lg font-bold font-heading text-secondary mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
