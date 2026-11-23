'use client';

import React from 'react';
import { Film } from 'lucide-react';

interface MovieCardProps {
  rank: number;
  title: string;
  director: string;
  year: number;
  impression: string;
}

export function MovieCard({ rank, title, director, year, impression }: MovieCardProps) {
  return (
    <div className="p-5 rounded-2xl bg-cream-light border border-espresso/10 hover:border-terracotta/30 shadow-xs hover:shadow-md transition-all">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center space-x-3">
          <span className="w-7 h-7 rounded-full bg-cream-dark border border-espresso/15 flex items-center justify-center text-xs font-serif font-bold text-espresso">
            {rank}
          </span>
          <div>
            <h4 className="text-base font-serif font-bold text-espresso">{title}</h4>
            <p className="text-xs text-espresso/60 font-medium">
              Dir. {director}
            </p>
          </div>
        </div>
        <span className="text-xs font-mono font-medium text-terracotta bg-cream-dark px-2.5 py-0.5 rounded-full">
          {year}
        </span>
      </div>

      <p className="text-xs text-espresso/80 leading-relaxed italic bg-cream/70 p-3 rounded-xl border border-espresso/5 mt-3">
        &ldquo;{impression}&rdquo;
      </p>
    </div>
  );
}
