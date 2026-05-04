import * as React from "react";
import { cn } from "@/lib/utils";

interface HeroHeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
  highlight?: string;
  subtitle: string;
}

export function HeroHeadline({ title, highlight, subtitle, className, ...props }: HeroHeadlineProps) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto", className)} {...props}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary tracking-tight mb-6">
        {title}{" "}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
