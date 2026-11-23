'use client';

import React from 'react';

export function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cream-dark text-espresso border border-espresso/10 hover:border-terracotta/40 hover:text-terracotta transition-colors">
      {skill}
    </span>
  );
}
