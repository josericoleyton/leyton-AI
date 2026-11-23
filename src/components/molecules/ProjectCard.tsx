'use client';

import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { SkillBadge } from '@/components/molecules/SkillBadge';

interface ProjectCardProps {
  name: string;
  description: string;
  status: string;
  tags: string[];
  link?: string;
}

export function ProjectCard({ name, description, status, tags, link }: ProjectCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-cream-light border border-espresso/15 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-terracotta" />
          <h3 className="text-xl font-serif font-bold text-espresso">{name}</h3>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-sage/15 text-sage-dark font-medium border border-sage/20">
          {status}
        </span>
      </div>
      <p className="text-sm text-espresso/80 leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {tags.map((tag) => (
          <SkillBadge key={tag} skill={tag} />
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-terracotta hover:underline mt-2"
        >
          <span>Explorar proyecto</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}
