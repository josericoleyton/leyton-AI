'use client';

import React from 'react';
import { ApartmentObject } from '@/components/molecules/ApartmentObject';
import { AmbientPlant } from '@/components/atoms/AmbientPlant';
import { NamePlaque } from '@/components/atoms/NamePlaque';
import { FridgePostits } from '@/components/atoms/FridgePostits';
import { ApartmentMobileTour } from '@/components/organisms/ApartmentMobileTour';

export function ApartmentScene() {
  return (
    <div className="w-full">
      {/* Mobile vertical scrolling tour */}
      <ApartmentMobileTour />

      {/* Desktop Single-Viewport Illustrated Scene */}
      <div className="hidden md:block relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FAF5EC] to-[#F2EAE0] select-none">
        {/* Architectural backdrop: Loft beams and window to mountains */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Ceiling beams */}
          <div className="absolute top-0 left-0 right-0 h-10 border-b border-espresso/10 bg-[#EDE4D8]/30 flex justify-between px-20">
            <div className="w-4 h-full bg-[#D8CBBA]/40" />
            <div className="w-4 h-full bg-[#D8CBBA]/40" />
            <div className="w-4 h-full bg-[#D8CBBA]/40" />
          </div>

          {/* Hardwood floor perspective lines */}
          <div className="absolute bottom-0 left-0 right-0 h-[38%] bg-[#EFE7DC] border-t-2 border-[#D8C9B5]">
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(90deg,#8C745E_0,#8C745E_2px,transparent_0,transparent_60px)]" />
          </div>

          {/* Warm room lighting ambience */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#FFF8E7]/40 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Ambient Wall Elements */}
        <div className="absolute top-16 left-8 z-10">
          <NamePlaque />
        </div>

        <div className="absolute bottom-28 left-6 z-10 hidden lg:block">
          <FridgePostits />
        </div>

        <div className="absolute bottom-6 left-2 z-10">
          <AmbientPlant className="w-28 h-36" />
        </div>

        <div className="absolute bottom-10 right-4 z-10">
          <AmbientPlant className="w-32 h-44" />
        </div>

        {/* --- 8 INTERACTIVE OBJECTS SCATTERED HARMONIOUSLY IN THE LOFT --- */}

        {/* 1. BALCONY WITH MOUNTAIN VIEW (Travel) - Top Right Center */}
        <div className="absolute top-14 right-12 lg:right-28 z-20">
          <ApartmentObject
            id="balcony"
            name="Balcón a la montaña"
            category="Viajes y horizontes"
            href="/travel"
          >
            <div className="w-56 h-36 lg:w-64 lg:h-40 rounded-t-full bg-gradient-to-b from-[#A4C4D7] to-[#D5E6EE] border-4 border-[#8C745E] shadow-lg overflow-hidden relative group">
              {/* Mountains silhouette */}
              <svg viewBox="0 0 100 60" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
                <polygon points="0,60 25,25 50,60" fill="#758A7A" />
                <polygon points="35,60 65,15 95,60" fill="#5F7565" />
                <polygon points="70,60 88,32 100,60" fill="#8EA393" />
                {/* Sun */}
                <circle cx="80" cy="18" r="6" fill="#FCE5B2" />
              </svg>
              {/* Balcony railing */}
              <div className="absolute bottom-0 inset-x-0 h-7 bg-espresso/80 border-t border-cream flex justify-around items-center px-2">
                <div className="w-1 h-full bg-cream/40" />
                <div className="w-1 h-full bg-cream/40" />
                <div className="w-1 h-full bg-cream/40" />
                <div className="w-1 h-full bg-cream/40" />
                <div className="w-1 h-full bg-cream/40" />
              </div>
            </div>
          </ApartmentObject>
        </div>

        {/* 2. BOOKSHELF (Books) - Top Left Wall */}
        <div className="absolute top-16 left-60 lg:left-72 z-20">
          <ApartmentObject
            id="bookshelf"
            name="Biblioteca de pared"
            category="Libros y lecturas"
            href="/books"
          >
            <div className="w-44 h-32 lg:w-48 lg:h-36 bg-[#B59E87] border-4 border-[#8C745E] rounded-md shadow-md p-2 flex flex-col justify-between">
              {/* Top shelf */}
              <div className="flex items-end space-x-1 border-b-4 border-[#8C745E] pb-1 h-14">
                <div className="w-4 h-12 bg-terracotta rounded-xs" />
                <div className="w-5 h-10 bg-sage rounded-xs" />
                <div className="w-4 h-13 bg-espresso rounded-xs" />
                <div className="w-3 h-9 bg-cream rounded-xs border border-espresso/20" />
                <div className="w-5 h-11 bg-terracotta-dark rounded-xs" />
              </div>
              {/* Bottom shelf */}
              <div className="flex items-end space-x-1 pb-0.5 h-14">
                <div className="w-5 h-11 bg-sage-dark rounded-xs" />
                <div className="w-4 h-9 bg-terracotta rounded-xs" />
                <div className="w-6 h-12 bg-espresso rounded-xs" />
                <div className="w-4 h-10 bg-cream rounded-xs border border-espresso/20" />
              </div>
            </div>
          </ApartmentObject>
        </div>

        {/* 3. TV RETRO (Football) - Left Wall */}
        <div className="absolute top-56 left-16 lg:left-32 z-20">
          <ApartmentObject
            id="tv"
            name="TV retro"
            category="Fútbol y pizarra"
            href="/football"
          >
            <div className="w-48 h-36 lg:w-52 lg:h-40 bg-[#3A3331] rounded-2xl p-2.5 shadow-xl border-4 border-[#241F1D] flex space-x-2 items-center">
              {/* Screen showing football field */}
              <div className="flex-1 h-full rounded-xl bg-gradient-to-b from-[#2E6B3E] to-[#1F4F2C] border-2 border-black/40 relative overflow-hidden flex items-center justify-center">
                {/* Field markings */}
                <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-white animate-bounce" />
                </div>
                <div className="absolute inset-x-0 h-0.5 bg-white/40 top-1/2 -translate-y-1/2" />
              </div>
              {/* Dials */}
              <div className="w-6 flex flex-col justify-around h-full py-2">
                <div className="w-4 h-4 rounded-full bg-[#B0A18F] border border-black/30" />
                <div className="w-4 h-4 rounded-full bg-[#B0A18F] border border-black/30" />
                <div className="w-4 h-2 bg-black/40 rounded-xs" />
              </div>
            </div>
          </ApartmentObject>
        </div>

        {/* 4. MOVIE SHELF (Movies) - Wall Unit near TV */}
        <div className="absolute top-64 left-72 lg:left-96 z-20">
          <ApartmentObject
            id="movies"
            name="Estantería de películas"
            category="Cine y cintas"
            href="/movies"
          >
            <div className="w-32 h-24 lg:w-36 lg:h-28 bg-[#8C745E] rounded-md border-2 border-[#6D5A47] p-2 flex flex-col justify-end shadow-md">
              <div className="flex items-end space-x-1.5 h-full">
                <div className="w-3.5 h-16 bg-[#2B3A42] rounded-xs border-t-2 border-red-500" />
                <div className="w-3.5 h-14 bg-[#3E2723] rounded-xs border-t-2 border-amber-400" />
                <div className="w-3.5 h-16 bg-[#1A237E] rounded-xs border-t-2 border-blue-400" />
                <div className="w-3.5 h-15 bg-[#212121] rounded-xs border-t-2 border-emerald-400" />
                <div className="w-3.5 h-16 bg-[#4A148C] rounded-xs border-t-2 border-purple-400" />
              </div>
            </div>
          </ApartmentObject>
        </div>

        {/* 5. LAPTOP ON WORK DESK (Portfolio) - Bottom Left */}
        <div className="absolute bottom-12 left-28 lg:left-48 z-20">
          <ApartmentObject
            id="laptop"
            name="Laptop abierta"
            category="Portafolio profesional"
            href="/portfolio"
          >
            <div className="relative">
              {/* Desk surface edge */}
              <div className="w-64 lg:w-72 h-44 bg-[#D1C2AF] rounded-xl border-t-4 border-[#B8A692] shadow-2xl p-4 flex flex-col items-center justify-center">
                {/* Laptop body */}
                <div className="relative flex flex-col items-center">
                  {/* Screen (always open) */}
                  <div className="w-36 h-24 lg:w-40 lg:h-28 bg-[#201C1B] rounded-t-lg border-2 border-[#4A423F] p-1.5 shadow-md flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="w-12 h-1 bg-terracotta rounded" />
                      <div className="w-20 h-1 bg-sage rounded" />
                      <div className="w-16 h-1 bg-cream/70 rounded" />
                    </div>
                    <div className="text-[9px] font-mono text-terracotta-light">
                      &gt; code &amp; design_
                    </div>
                  </div>
                  {/* Base / Keyboard */}
                  <div className="w-44 h-3 lg:w-48 lg:h-3.5 bg-[#4A423F] rounded-b-md shadow-lg border-t border-white/20" />
                </div>
                {/* Coffee mug near desk */}
                <div className="absolute right-4 bottom-5 w-5 h-6 bg-cream rounded-sm border border-espresso/20 flex items-center justify-center shadow-xs">
                  <div className="w-2 h-1 bg-espresso/60 rounded-full" />
                </div>
              </div>
            </div>
          </ApartmentObject>
        </div>

        {/* 6. GUITAR ON STAND (Guitar) - Center Room */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20">
          <ApartmentObject
            id="guitar"
            name="Guitarra acústica"
            category="Música y cuerdas"
            href="/guitar"
          >
            <div className="w-24 h-48 lg:w-28 lg:h-56 relative flex flex-col items-center">
              <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-xl">
                {/* Guitar Stand */}
                <path d="M25,185 L50,130 L75,185" stroke="#423B38" strokeWidth="4" fill="none" />
                <line x1="50" y1="130" x2="50" y2="70" stroke="#423B38" strokeWidth="4" />

                {/* Headstock */}
                <polygon points="44,20 56,20 54,45 46,45" fill="#5C382A" />
                {/* Neck */}
                <rect x="46" y="45" width="8" height="60" fill="#7A4B37" />
                <line x1="50" y1="25" x2="50" y2="105" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />

                {/* Body */}
                <ellipse cx="50" cy="120" rx="20" ry="16" fill="#C86D51" stroke="#5C382A" strokeWidth="3" />
                <ellipse cx="50" cy="150" rx="28" ry="24" fill="#C86D51" stroke="#5C382A" strokeWidth="3" />

                {/* Soundhole */}
                <circle cx="50" cy="132" r="8" fill="#2C2523" />
                {/* Bridge */}
                <rect x="42" y="156" width="16" height="5" fill="#2C2523" rx="1" />
              </svg>
            </div>
          </ApartmentObject>
        </div>

        {/* 7. COFFEE TABLE WITH DRIPPER (Coffee) - Center Right */}
        <div className="absolute bottom-20 right-80 lg:right-96 z-20">
          <ApartmentObject
            id="coffee"
            name="Mesa de café"
            category="Métodos de café"
            href="/coffee"
          >
            <div className="w-40 h-28 lg:w-44 lg:h-32 bg-[#E6DACB] rounded-2xl border-4 border-[#C7B5A1] shadow-lg p-2.5 flex flex-col items-center justify-between">
              {/* Dripper & Server */}
              <div className="flex flex-col items-center">
                {/* V60 Cone */}
                <svg viewBox="0 0 40 20" className="w-10 h-5">
                  <polygon points="4,2 36,2 20,18" fill="#FDFBF7" stroke="#C86D51" strokeWidth="2" />
                </svg>
                {/* Glass Server */}
                <div className="w-12 h-10 bg-sky-100/60 border-2 border-espresso/30 rounded-b-lg flex items-end justify-center pb-1">
                  <div className="w-9 h-4 bg-[#633A26] rounded-xs opacity-90" />
                </div>
              </div>
              <div className="text-[10px] font-mono text-espresso/70 font-semibold">
                1:15 Pour-over
              </div>
            </div>
          </ApartmentObject>
        </div>

        {/* 8. TURNTABLE ON CABINET (Music Listening) - Bottom Right */}
        <div className="absolute bottom-10 right-16 lg:right-28 z-20">
          <ApartmentObject
            id="turntable"
            name="Tocadiscos vintage"
            category="Música y vinilos"
            href="/music"
          >
            <div className="w-48 h-36 lg:w-52 lg:h-40 bg-[#8C6D58] rounded-xl border-4 border-[#6E5544] shadow-2xl p-3 flex flex-col justify-between">
              {/* Turntable Platter and Tonearm */}
              <div className="relative flex-1 bg-[#2C2523] rounded-lg p-2 flex items-center justify-between border border-black/40">
                {/* Spinning vinyl */}
                <div className="w-20 h-20 rounded-full bg-[#1A1615] border border-white/10 flex items-center justify-center shadow-md animate-spin" style={{ animationDuration: '5s' }}>
                  <div className="w-7 h-7 rounded-full bg-terracotta border border-cream" />
                </div>
                {/* Tonearm */}
                <div className="w-8 h-16 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-[#B3A394]" />
                  <div className="w-0.5 h-10 bg-[#B3A394] origin-top rotate-12" />
                </div>
              </div>
              {/* Volume / Pitch sliders */}
              <div className="flex items-center justify-between px-1 pt-1">
                <span className="text-[9px] uppercase tracking-wider font-bold text-cream/90 font-mono">
                  33 RPM
                </span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-sage" />
                </div>
              </div>
            </div>
          </ApartmentObject>
        </div>
      </div>
    </div>
  );
}
