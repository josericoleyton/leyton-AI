'use client';

import React from 'react';
import Link from 'next/link';
import { Laptop, Tv, Disc, Coffee, BookOpen, Film, Music, Compass } from 'lucide-react';

const TOUR_ITEMS = [
  {
    name: 'Laptop abierta',
    category: 'Portafolio profesional',
    desc: 'Arquitectura frontend, experiencia técnica y filosofía de trabajo.',
    href: '/portfolio',
    icon: Laptop,
    accent: 'bg-terracotta/10 text-terracotta border-terracotta/20',
  },
  {
    name: 'TV retro',
    category: 'Fútbol y pizarra',
    desc: 'Equipos, ligas, jugadores admirados y la estética de la jugada.',
    href: '/football',
    icon: Tv,
    accent: 'bg-sage/10 text-sage border-sage/20',
  },
  {
    name: 'Guitarra acústica',
    category: 'Música y cuerdas',
    desc: 'El refugio análogo de practicar acordes y aprender canciones.',
    href: '/guitar',
    icon: Music,
    accent: 'bg-amber-700/10 text-amber-800 border-amber-700/20',
  },
  {
    name: 'Mesa de café',
    category: 'Métodos de café',
    desc: 'V60, AeroPress, molienda y el ritual pausado de las mañanas.',
    href: '/coffee',
    icon: Coffee,
    accent: 'bg-stone-600/10 text-stone-700 border-stone-600/20',
  },
  {
    name: 'Biblioteca de pared',
    category: 'Libros y lecturas',
    desc: 'Lecturas actuales, ficción que acompaña y filosofía práctica.',
    href: '/books',
    icon: BookOpen,
    accent: 'bg-indigo-900/10 text-indigo-900 border-indigo-900/20',
  },
  {
    name: 'Estantería de películas',
    category: 'Cine y cintas',
    desc: 'Películas atemporales, directores favoritos e impresiones cinematográficas.',
    href: '/movies',
    icon: Film,
    accent: 'bg-red-900/10 text-red-900 border-red-900/20',
  },
  {
    name: 'Tocadiscos vintage',
    category: 'Música y vinilos',
    desc: 'Bandas sonoras para la concentración, calma y playlists curadas.',
    href: '/music',
    icon: Disc,
    accent: 'bg-espresso/10 text-espresso border-espresso/20',
  },
  {
    name: 'Balcón a la montaña',
    category: 'Viajes y horizontes',
    desc: 'Países visitados, mapas de ruta y la búsqueda de nuevos destinos.',
    href: '/travel',
    icon: Compass,
    accent: 'bg-emerald-800/10 text-emerald-800 border-emerald-800/20',
  },
];

export function ApartmentMobileTour() {
  return (
    <div className="md:hidden flex flex-col space-y-6 pb-24 pt-6 px-4">
      {/* Intro header */}
      <div className="text-center py-6 border-b border-espresso/10">
        <span className="text-xs uppercase tracking-widest text-terracotta font-semibold">
          Recorrido Espacial
        </span>
        <h1 className="text-2xl font-serif font-bold text-espresso mt-1">
          El Apartamento de Leyton
        </h1>
        <p className="text-xs text-espresso/70 mt-2 max-w-xs mx-auto leading-relaxed">
          Cada rincón de este espacio representa una faceta de mi vida y mi forma de habitar el mundo.
        </p>
      </div>

      {/* Tour Cards */}
      <div className="space-y-4">
        {TOUR_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="block p-5 rounded-2xl bg-cream-light border border-espresso/10 shadow-sm hover:shadow-md transition-shadow active:scale-[0.99]"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl border ${item.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-terracotta uppercase tracking-wider">
                    {item.category}
                  </div>
                  <h3 className="text-base font-serif font-bold text-espresso mt-0.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-espresso/70 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
