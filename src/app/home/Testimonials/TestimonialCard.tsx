import * as React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

export function TestimonialCard({ quote, author, role, avatarUrl, className, ...props }: TestimonialCardProps) {
  return (
    <div className={cn("bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow break-inside-avoid mb-6", className)} {...props}>
      <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">"{quote}"</p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
          {avatarUrl ? (
            <img src={avatarUrl} alt={author} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-bold">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h5 className="font-bold text-gray-900 text-sm sm:text-base">{author}</h5>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
