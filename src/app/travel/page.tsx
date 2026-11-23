'use client';

import React from 'react';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { WorldMapSvg } from '@/components/organisms/WorldMapSvg';
import { getTravelContent } from '@/lib/content';
import { Compass, MapPin, Sparkles } from 'lucide-react';

export default function TravelPage() {
  const content = getTravelContent();

  return (
    <PageTemplate
      title={content.title}
      subtitle={content.subtitle}
      objectKey="balcony"
    >
      {/* Travel Philosophy */}
      <section className="p-6 rounded-2xl bg-cream-dark/60 border border-espresso/10">
        <div className="flex items-center space-x-2 text-emerald-800 mb-2">
          <Compass className="w-4 h-4" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-espresso">
            La Filosofía del Viaje Lento
          </h2>
        </div>
        <p className="text-base font-serif italic text-espresso/90 leading-relaxed">
          &ldquo;{content.philosophy}&rdquo;
        </p>
      </section>

      {/* World Map Component */}
      <section className="space-y-4">
        <WorldMapSvg visited={content.countriesVisited} />
      </section>

      {/* Cities Visited */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-espresso">
          <MapPin className="w-5 h-5 text-terracotta" />
          <h2 className="text-xl font-serif font-bold">Ciudades Visitadas</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.citiesVisited.map((city) => (
            <span
              key={city}
              className="px-3.5 py-1.5 rounded-full bg-cream-light text-xs font-medium text-espresso border border-espresso/10 hover:border-terracotta/40 transition-colors"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Bucket List */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-espresso">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-serif font-bold">Destinos en el Horizonte</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.bucketList.map((dest) => (
            <div key={dest.place} className="p-5 rounded-2xl bg-cream-light border border-espresso/10">
              <span className="text-xs font-mono font-medium text-sage-dark">{dest.country}</span>
              <h3 className="text-base font-serif font-bold text-espresso mt-0.5">{dest.place}</h3>
              <p className="text-xs text-espresso/75 mt-2 leading-relaxed">{dest.reason}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
