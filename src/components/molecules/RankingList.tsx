'use client';

import React from 'react';

interface RankingItem {
  rank: number;
  name: string;
  country?: string;
  description: string;
}

export function RankingList({ items }: { items: RankingItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.rank}
          className="p-4 rounded-xl bg-cream-light border border-espresso/10 flex items-start space-x-4 hover:border-terracotta/30 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-cream-dark text-espresso font-serif font-bold text-sm flex items-center justify-center shrink-0 border border-espresso/15">
            {item.rank}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-base font-serif font-bold text-espresso">{item.name}</h4>
              {item.country && (
                <span className="text-xs text-terracotta font-medium">{item.country}</span>
              )}
            </div>
            <p className="text-xs text-espresso/75 mt-1 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
