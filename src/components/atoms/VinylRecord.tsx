'use client';

import React from 'react';

interface VinylRecordProps {
  isPlaying?: boolean;
  className?: string;
}

export function VinylRecord({ isPlaying = false, className = 'w-8 h-8' }: VinylRecordProps) {
  return (
    <div
      className={`relative rounded-full aspect-square bg-[#1a1716] flex items-center justify-center shadow-md ${
        isPlaying ? 'animate-spin' : ''
      } ${className}`}
      style={{ animationDuration: '6s', animationTimingFunction: 'linear' }}
      aria-hidden="true"
    >
      {/* Grooves */}
      <div className="w-[85%] h-[85%] rounded-full border border-white/10 flex items-center justify-center">
        <div className="w-[70%] h-[70%] rounded-full border border-white/5 flex items-center justify-center">
          {/* Label */}
          <div className="w-[45%] h-[45%] rounded-full bg-terracotta border-2 border-cream flex items-center justify-center">
            {/* Spindle hole */}
            <div className="w-1.5 h-1.5 rounded-full bg-cream" />
          </div>
        </div>
      </div>
    </div>
  );
}
