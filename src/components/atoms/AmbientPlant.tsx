'use client';

import React from 'react';

export function AmbientPlant({ className = 'w-24 h-32' }: { className?: string }) {
  return (
    <div className={`relative pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-md">
        {/* Pot */}
        <polygon points="30,95 70,95 64,135 36,135" fill="#C86D51" />
        <ellipse cx="50" cy="95" rx="20" ry="4" fill="#A9543B" />
        <ellipse cx="50" cy="98" rx="18" ry="3" fill="#423B38" />

        {/* Stems & Leaves */}
        <path d="M50,96 Q45,60 30,45" stroke="#677A60" strokeWidth="3" fill="none" />
        <path d="M50,96 Q52,50 65,30" stroke="#677A60" strokeWidth="3" fill="none" />
        <path d="M50,96 Q35,75 20,70" stroke="#677A60" strokeWidth="3" fill="none" />
        <path d="M50,96 Q65,70 80,65" stroke="#677A60" strokeWidth="3" fill="none" />
        <path d="M50,96 Q50,40 50,15" stroke="#677A60" strokeWidth="3" fill="none" />

        {/* Leaves */}
        <ellipse cx="30" cy="45" rx="14" ry="9" transform="rotate(-30 30 45)" fill="#82957B" />
        <ellipse cx="65" cy="30" rx="16" ry="10" transform="rotate(25 65 30)" fill="#9CAF95" />
        <ellipse cx="20" cy="70" rx="12" ry="8" transform="rotate(-15 20 70)" fill="#677A60" />
        <ellipse cx="80" cy="65" rx="13" ry="8" transform="rotate(20 80 65)" fill="#82957B" />
        <ellipse cx="50" cy="15" rx="12" ry="15" fill="#9CAF95" />
      </svg>
    </div>
  );
}
