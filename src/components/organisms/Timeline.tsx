'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { SkillBadge } from '@/components/molecules/SkillBadge';

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description: string;
  details: string[];
  skills: string[];
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-espresso/15 space-y-8">
      {items.map((item, idx) => {
        const isExpanded = expandedIndex === idx;
        return (
          <div key={idx} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-cream border-2 border-terracotta flex items-center justify-center shadow-xs">
              <Briefcase className="w-3 h-3 text-terracotta" />
            </div>

            <div className="p-5 rounded-2xl bg-cream-light border border-espresso/10 shadow-xs hover:border-terracotta/30 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-mono font-semibold text-terracotta">
                  {item.period}
                </span>
                <button
                  onClick={() => toggleExpand(idx)}
                  className="p-1 rounded-md text-espresso/60 hover:text-espresso hover:bg-cream transition-colors text-xs flex items-center space-x-1"
                  aria-label={`Expandir detalles de ${item.role}`}
                >
                  <span>{isExpanded ? 'Menos' : 'Detalles'}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              <h4 className="text-lg font-serif font-bold text-espresso">
                {item.role}
              </h4>
              <p className="text-xs font-medium text-espresso/70 mb-2">
                {item.company}
              </p>
              <p className="text-sm text-espresso/80 leading-relaxed mb-3">
                {item.description}
              </p>

              {isExpanded && (
                <div className="pt-3 border-t border-espresso/10 space-y-3">
                  <ul className="list-disc list-inside space-y-1 text-xs text-espresso/75 leading-relaxed">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx}>{detail}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
