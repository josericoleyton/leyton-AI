'use client';

import React from 'react';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { RankingList } from '@/components/molecules/RankingList';
import { getFootballContent } from '@/lib/content';
import { Trophy, Users, Shield } from 'lucide-react';

export default function FootballPage() {
  const content = getFootballContent();

  return (
    <PageTemplate
      title={content.title}
      subtitle={content.subtitle}
      objectKey="tv"
    >
      {/* Reflection */}
      <section className="p-6 rounded-2xl bg-cream-dark/60 border border-espresso/10">
        <h2 className="text-xs font-bold uppercase tracking-wider text-terracotta mb-2">
          La Filosofía del Juego
        </h2>
        <p className="text-base font-serif italic text-espresso/90 leading-relaxed">
          &ldquo;{content.reflection}&rdquo;
        </p>
      </section>

      {/* Teams Ranking */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-espresso">
          <Trophy className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-serif font-bold">Ranking de Clubes & Equipos</h2>
        </div>
        <RankingList items={content.teamsRanking} />
      </section>

      {/* Favorite Players */}
      <section className="space-y-4">
        <div className="flex items-center space-x-2 text-espresso">
          <Users className="w-5 h-5 text-terracotta" />
          <h2 className="text-xl font-serif font-bold">Perfiles & Jugadores Favoritos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.favoritePlayers.map((player) => (
            <div key={player.name} className="p-5 rounded-2xl bg-cream-light border border-espresso/10">
              <span className="text-xs font-mono font-medium text-sage-dark">{player.position} • {player.era}</span>
              <h3 className="text-base font-serif font-bold text-espresso mt-1">{player.name}</h3>
              <p className="text-xs text-espresso/75 mt-2 leading-relaxed">{player.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Leagues */}
      <section className="space-y-3">
        <div className="flex items-center space-x-2 text-espresso">
          <Shield className="w-5 h-5 text-sage" />
          <h2 className="text-xl font-serif font-bold">Ligas & Competiciones</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.favoriteLeagues.map((league) => (
            <span key={league} className="px-4 py-2 rounded-xl bg-cream-dark text-xs font-medium text-espresso border border-espresso/10">
              {league}
            </span>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
