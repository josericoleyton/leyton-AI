'use client';

import React from 'react';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { MovieCard } from '@/components/molecules/MovieCard';
import { getMoviesContent } from '@/lib/content';
import { Film, Clapperboard } from 'lucide-react';

export default function MoviesPage() {
  const content = getMoviesContent();

  return (
    <PageTemplate
      title={content.title}
      subtitle={content.subtitle}
      objectKey="movies"
    >
      {/* Cinema Reflection */}
      <section className="p-6 rounded-2xl bg-cream-dark/60 border border-espresso/10">
        <div className="flex items-center space-x-2 text-red-900 mb-2">
          <Film className="w-4 h-4" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-espresso">
            El Amor por la Pantalla Grande
          </h2>
        </div>
        <p className="text-base font-serif italic text-espresso/90 leading-relaxed">
          &ldquo;{content.cinemaLove}&rdquo;
        </p>
      </section>

      {/* Top Movies */}
      <section className="space-y-4">
        <h2 className="text-xl font-serif font-bold text-espresso">
          Películas Inolvidables
        </h2>
        <div className="space-y-3">
          {content.topMovies.map((movie) => (
            <MovieCard
              key={movie.rank}
              rank={movie.rank}
              title={movie.title}
              director={movie.director}
              year={movie.year}
              impression={movie.impression}
            />
          ))}
        </div>
      </section>

      {/* Favorite Directors */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-espresso">
          <Clapperboard className="w-5 h-5 text-terracotta" />
          <h2 className="text-xl font-serif font-bold">Directores de Cabecera</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.favoriteDirectors.map((director) => (
            <div key={director.name} className="p-5 rounded-2xl bg-cream-light border border-espresso/10">
              <h3 className="text-base font-serif font-bold text-espresso">{director.name}</h3>
              <p className="text-xs text-espresso/75 mt-2 leading-relaxed">{director.hallmark}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
