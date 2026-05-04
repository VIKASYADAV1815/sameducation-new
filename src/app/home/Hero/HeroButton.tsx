import * as React from "react";
import { cn } from "@/lib/utils";

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          variant === "primary"
            ? "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25"
            : "bg-transparent text-primary border-2 border-primary hover:bg-primary-light",
          className
        )}
        {...props}
      />
    );
  }
);
HeroButton.displayName = "HeroButton";
