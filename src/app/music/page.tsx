'use client';

import React from 'react';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { getMusicContent } from '@/lib/content';
import { Disc, Radio } from 'lucide-react';

export default function MusicPage() {
  const content = getMusicContent();

  return (
    <PageTemplate
      title={content.title}
      subtitle={content.subtitle}
      objectKey="turntable"
    >
      {/* Music Philosophy */}
      <section className="p-6 rounded-2xl bg-cream-dark/60 border border-espresso/10">
        <div className="flex items-center space-x-2 text-espresso mb-2">
          <Disc className="w-4 h-4 text-terracotta" />
          <h2 className="text-xs font-bold uppercase tracking-wider">
            La Música como Atmósfera
          </h2>
        </div>
        <p className="text-base font-serif italic text-espresso/90 leading-relaxed">
          &ldquo;{content.philosophy}&rdquo;
        </p>
      </section>

      {/* Curated Playlists */}
      <section className="space-y-6">
        <h2 className="text-xl font-serif font-bold text-espresso">
          Playlists Curadas en Spotify
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.curatedPlaylists.map((playlist) => (
            <div key={playlist.name} className="p-5 rounded-2xl bg-cream-light border border-espresso/10 space-y-3">
              <div>
                <span className="text-xs font-mono font-medium text-terracotta">{playlist.mood}</span>
                <h3 className="text-lg font-serif font-bold text-espresso mt-0.5">{playlist.name}</h3>
                <p className="text-xs text-espresso/70 mt-1">{playlist.description}</p>
              </div>
              <iframe
                title={playlist.name}
                src={`https://open.spotify.com/embed/playlist/${playlist.spotifyId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl shadow-xs"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Favorite Artists */}
      <section className="space-y-3">
        <div className="flex items-center space-x-2 text-espresso">
          <Radio className="w-5 h-5 text-sage" />
          <h2 className="text-xl font-serif font-bold">Artistas que Definen el Sonido</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {content.favoriteArtists.map((artist) => (
            <span key={artist} className="px-4 py-2 rounded-xl bg-cream-dark text-xs font-medium text-espresso border border-espresso/10">
              {artist}
            </span>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
