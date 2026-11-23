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
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-espresso/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-serif font-bold text-espresso tracking-tight hover:text-terracotta transition-colors"
        >
          Jose Leyton
        </Link>

        {/* Center: Home Button */}
        <div className="flex items-center">
          <HomeButton />
        </div>

        {/* Right: Actions & Menu */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-2 border-r border-espresso/10 pr-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-1.5 text-espresso/70 hover:text-espresso transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 text-espresso/70 hover:text-espresso transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@joseleyton.me"
              aria-label="Email"
              className="p-1.5 text-espresso/70 hover:text-espresso transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú de navegación"
            aria-expanded={isOpen}
            className="p-2 rounded-lg text-espresso/80 hover:text-espresso hover:bg-cream-dark transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-cream-light/95 border-b border-espresso/10 shadow-lg px-6 py-6 transition-all">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="group p-3 rounded-lg border border-espresso/5 hover:border-terracotta/40 hover:bg-cream transition-all"
              >
                <div className="text-sm font-semibold text-espresso group-hover:text-terracotta transition-colors">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
