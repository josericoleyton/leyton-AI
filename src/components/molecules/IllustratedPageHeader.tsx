'use client';

import React from 'react';
import { Laptop, Tv, Disc, Coffee, BookOpen, Film, Music, Compass } from 'lucide-react';

interface IllustratedPageHeaderProps {
  title: string;
  subtitle: string;
  objectKey: string;
}

const OBJECT_VIGNETTES: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  laptop: { icon: Laptop, color: 'text-terracotta', bg: 'bg-terracotta/10 border-terracotta/20' },
  tv: { icon: Tv, color: 'text-sage', bg: 'bg-sage/10 border-sage/20' },
  guitar: { icon: Music, color: 'text-amber-700', bg: 'bg-amber-700/10 border-amber-700/20' },
  coffee: { icon: Coffee, color: 'text-stone-700', bg: 'bg-stone-700/10 border-stone-700/20' },
  books: { icon: BookOpen, color: 'text-indigo-900', bg: 'bg-indigo-900/10 border-indigo-900/20' },
  movies: { icon: Film, color: 'text-red-900', bg: 'bg-red-900/10 border-red-900/20' },
  turntable: { icon: Disc, color: 'text-espresso', bg: 'bg-espresso/10 border-espresso/20' },
  balcony: { icon: Compass, color: 'text-emerald-800', bg: 'bg-emerald-800/10 border-emerald-800/20' },
};

export function IllustratedPageHeader({ title, subtitle, objectKey }: IllustratedPageHeaderProps) {
  const vignette = OBJECT_VIGNETTES[objectKey] || OBJECT_VIGNETTES.laptop;
  const Icon = vignette.icon;

  return (
    <div className="pb-8 mb-10 border-b border-espresso/10">
      <div className="flex items-center space-x-3 mb-3">
        <div className={`p-2.5 rounded-xl border ${vignette.bg}`}>
          <Icon className={`w-5 h-5 ${vignette.color}`} />
        </div>
        <span className="text-xs uppercase tracking-widest font-semibold text-espresso/60">
          Apartamento / {title}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-espresso tracking-tight">
        {title}
      </h1>
      <p className="mt-3 text-base sm:text-lg text-espresso/70 max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
