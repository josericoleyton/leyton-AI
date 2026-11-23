'use client';

import React from 'react';
import { BookMarked, Star } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  genre: string;
  takeaway: string;
  highlight?: boolean;
}

export function BookCard({ title, author, genre, takeaway, highlight }: BookCardProps) {
  return (
    <div className={`p-5 rounded-2xl border transition-all ${
      highlight
        ? 'bg-cream-dark/60 border-terracotta/30 shadow-xs'
        : 'bg-cream-light border-espresso/10 hover:border-espresso/25'
    }`}>
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <div className="flex items-center space-x-2">
          <BookMarked className="w-4 h-4 text-terracotta shrink-0" />
          <h4 className="text-base font-serif font-bold text-espresso">{title}</h4>
        </div>
        {highlight && (
          <span className="flex items-center space-x-1 text-[10px] text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-full font-medium">
            <Star className="w-3 h-3 fill-amber-500 text-amber-600" />
            <span>Destacado</span>
          </span>
        )}
      </div>

      <div className="flex items-center space-x-2 text-xs text-espresso/60 mb-2 font-medium">
        <span>{author}</span>
        <span>•</span>
        <span className="text-sage-dark">{genre}</span>
      </div>

      <p className="text-xs text-espresso/80 leading-relaxed italic bg-cream/70 p-3 rounded-xl border border-espresso/5">
        &ldquo;{takeaway}&rdquo;
      </p>
    </div>
  );
}
