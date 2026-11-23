'use client';

import React from 'react';
import { Timer, Scale, Sparkles } from 'lucide-react';

interface CoffeeMethodCardProps {
  name: string;
  ratio: string;
  grind: string;
  time: string;
  tastingNotes: string;
  description: string;
}

export function CoffeeMethodCard({
  name,
  ratio,
  grind,
  time,
  tastingNotes,
  description,
}: CoffeeMethodCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-cream-light border border-espresso/10 hover:border-terracotta/30 shadow-xs hover:shadow-md transition-all">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <h3 className="text-lg font-serif font-bold text-espresso">{name}</h3>
        <span className="text-xs font-mono font-semibold text-terracotta bg-cream-dark px-2.5 py-1 rounded-full">
          {ratio}
        </span>
      </div>

      <p className="text-xs text-espresso/80 leading-relaxed mb-4">
        {description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-espresso/10 mb-3 text-espresso/70">
        <div className="flex items-center space-x-1.5">
          <Scale className="w-3.5 h-3.5 text-sage" />
          <span>Molienda: <strong className="text-espresso">{grind}</strong></span>
        </div>
        <div className="flex items-center space-x-1.5">
          <Timer className="w-3.5 h-3.5 text-terracotta" />
          <span>Tiempo: <strong className="text-espresso">{time}</strong></span>
        </div>
      </div>

      {/* Tasting notes */}
      <div className="flex items-start space-x-1.5 text-xs text-espresso/80">
        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
        <span><strong className="text-espresso">Notas:</strong> {tastingNotes}</span>
      </div>
    </div>
  );
}
