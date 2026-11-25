'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { HomeButton } from '@/components/atoms/HomeButton';

const NAV_ITEMS = [
  { label: 'Portafolio & Carrera', href: '/portfolio', key: 'laptop' },
  { label: 'Fútbol & Pizarra', href: '/football', key: 'tv' },
  { label: 'Guitarra & Cuerdas', href: '/guitar', key: 'guitar' },
  { label: 'Café & Métodos', href: '/coffee', key: 'coffee' },
  { label: 'Libros & Pensamiento', href: '/books', key: 'books' },
  { label: 'Películas & Cine', href: '/movies', key: 'movies' },
  { label: 'Música & Vinilos', href: '/music', key: 'turntable' },
  { label: 'Viajes & Montañas', href: '/travel', key: 'balcony' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 group">
      {/* Subtle indicator handle at the top edge for discoverability */}
      <div
        className={`w-16 h-1 mx-auto rounded-full bg-white/30 backdrop-blur-xs transition-opacity duration-300 mt-1 ${
          isOpen ? 'opacity-0' : 'opacity-40 group-hover:opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Main Navbar Bar - Fades in on hover with dark blur */}
      <div
        className={`transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 bg-black/85 backdrop-blur-md border-b border-white/10 shadow-2xl'
            : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-black/80 group-hover:backdrop-blur-md group-hover:border-b group-hover:border-white/10 group-hover:shadow-2xl'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Brand: Leyton */}
          <Link
            href="/"
            className="text-lg font-serif font-bold text-white tracking-tight hover:text-terracotta-light transition-colors drop-shadow-sm"
          >
            Leyton
          </Link>

          {/* Center: Home Button */}
          <div className="flex items-center">
            <HomeButton className="text-white/80 hover:text-white hover:bg-white/10" />
          </div>

          {/* Right: Actions & Menu */}
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center space-x-2 border-r border-white/15 pr-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-1.5 text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-md"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-1.5 text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-md"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@leyton.me"
                aria-label="Email"
                className="p-1.5 text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-md"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú de navegación"
              aria-expanded={isOpen}
              className="p-2 rounded-lg text-white hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu with dark blurred surface */}
        {isOpen && (
          <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-2xl px-6 py-6 transition-all">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group/item p-3.5 rounded-xl border border-white/10 bg-white/5 hover:border-terracotta hover:bg-white/10 transition-all shadow-sm"
                >
                  <div className="text-sm font-semibold text-white group-hover/item:text-terracotta-light transition-colors">
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
