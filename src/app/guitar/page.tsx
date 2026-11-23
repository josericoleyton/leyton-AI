'use client';

import React from 'react';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { getGuitarContent } from '@/lib/content';
import { Music, Target, Flame } from 'lucide-react';

export default function GuitarPage() {
  const content = getGuitarContent();

  return (
    <PageTemplate
      title={content.title}
      subtitle={content.subtitle}
      objectKey="guitar"
    >
      {/* Learning Journey */}
      <section className="p-6 rounded-2xl bg-cream-dark/60 border border-espresso/10">
        <div className="flex items-center space-x-2 text-terracotta mb-2">
          <Music className="w-4 h-4" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-espresso">
            El Camino con las Cuerdas
          </h2>
        </div>
        <p className="text-base font-serif italic text-espresso/90 leading-relaxed">
          &ldquo;{content.learningJourney}&rdquo;
        </p>
      </section>

      {/* Inspirations */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-espresso">
          <Flame className="w-5 h-5 text-amber-700" />
          <h2 className="text-xl font-serif font-bold">Inspiraciones & Sonidos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.inspirations.map((item) => (
            <div key={item.artist} className="p-5 rounded-2xl bg-cream-light border border-espresso/10">
              <h3 className="text-base font-serif font-bold text-espresso">{item.artist}</h3>
              <p className="text-xs text-espresso/75 mt-2 leading-relaxed">{item.influence}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Goals */}
      <section className="space-y-3">
        <div className="flex items-center space-x-2 text-espresso">
          <Target className="w-5 h-5 text-terracotta" />
          <h2 className="text-xl font-serif font-bold">Metas de Práctica</h2>
        </div>
        <div className="space-y-2">
          {content.practiceGoals.map((goal, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-cream-light border border-espresso/10 text-xs text-espresso flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
              <span>{goal}</span>
            </div>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
