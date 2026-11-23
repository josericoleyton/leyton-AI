'use client';

import React from 'react';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { CoffeeMethodCard } from '@/components/molecules/CoffeeMethodCard';
import { getCoffeeContent } from '@/lib/content';
import { Coffee, MapPin } from 'lucide-react';

export default function CoffeePage() {
  const content = getCoffeeContent();

  return (
    <PageTemplate
      title={content.title}
      subtitle={content.subtitle}
      objectKey="coffee"
    >
      {/* Ritual Reflection */}
      <section className="p-6 rounded-2xl bg-cream-dark/60 border border-espresso/10">
        <div className="flex items-center space-x-2 text-stone-700 mb-2">
          <Coffee className="w-4 h-4" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-espresso">
            El Ritual de Cada Mañana
          </h2>
        </div>
        <p className="text-base font-serif italic text-espresso/90 leading-relaxed">
          &ldquo;{content.ritual}&rdquo;
        </p>
      </section>

      {/* Brewing Methods */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-espresso">
          Métodos de Preparación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.brewingMethods.map((method) => (
            <CoffeeMethodCard
              key={method.id}
              name={method.name}
              ratio={method.ratio}
              grind={method.grind}
              time={method.time}
              tastingNotes={method.tastingNotes}
              description={method.description}
            />
          ))}
        </div>
      </section>

      {/* Favorite Origins */}
      <section className="space-y-3">
        <div className="flex items-center space-x-2 text-espresso">
          <MapPin className="w-5 h-5 text-terracotta" />
          <h2 className="text-xl font-serif font-bold">Orígenes Favoritos</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {content.favoriteOrigins.map((origin) => (
            <div key={origin} className="p-4 rounded-xl bg-cream-light border border-espresso/10 text-xs font-medium text-espresso">
              {origin}
            </div>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
