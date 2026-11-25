'use client';

import React from 'react';
import { ApartmentObject } from '@/components/molecules/ApartmentObject';
import { ApartmentMobileTour } from '@/components/organisms/ApartmentMobileTour';

export function ApartmentScene() {
  return (
    <div className="w-full">
      {/* Mobile vertical scrolling tour */}
      <ApartmentMobileTour />

      {/* Desktop Panoramic Illustrated Loft Scene - Full Screen */}
      <div className="hidden md:block fixed inset-0 w-screen h-screen overflow-hidden bg-[#FAF5EC] select-none">
        {/* Full Viewport Canvas */}
        <div className="relative w-full h-full">
          {/* 1. BASE BACKGROUND LAYER (fills entire viewport) */}
          <img
            src="/images/apartment/background.png"
            alt="Ilustración del apartamento loft de Leyton"
            className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
          />

          {/* --- AMBIENT SUNBEAM OVERLAY ON BALCONY --- */}
          <div
            className="absolute pointer-events-none z-1 anim-sunbeam"
            style={{
              left: '72.5%',
              top: '0%',
              width: '23%',
              height: '58%',
              background:
                'radial-gradient(ellipse at 60% 25%, rgba(254, 243, 199, 0.45) 0%, rgba(254, 215, 170, 0.2) 45%, transparent 75%)',
            }}
          />

          {/* ======================================================== */}
          {/* --- 8 INTERACTIVE LIFE PORTALS --- */}
          {/* ======================================================== */}

          {/* PORTAL 1: BALCONY (Travel / Viajes y horizontes) */}
          <div
            className="absolute z-10"
            style={{
              left: '72.7%',
              top: '0%',
              width: '22.1%',
              height: '58.6%',
            }}
          >
            <ApartmentObject
              id="balcony"
              name="Balcón a la montaña"
              category="Viajes y horizontes"
              href="/travel"
              className="w-full h-full rounded-t-full"
            >
              <div className="w-full h-full relative group">
                {/* Subtle golden hover wash */}
                <div className="absolute inset-0 rounded-t-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-amber-300/15" />
              </div>
            </ApartmentObject>
          </div>

          {/* PORTAL 2: BOOKSHELF (Books / Libros y lecturas) */}
          <div
            className="absolute z-15"
            style={{
              left: '0%',
              top: '0%',
              width: '36.04%',
              height: '29.2%',
            }}
          >
            <ApartmentObject
              id="bookshelf"
              name="Biblioteca de pared"
              category="Libros y lecturas"
              href="/books"
              className="w-full h-full"
            >
              <img
                src="/images/apartment/bookshelf.png"
                alt="Biblioteca de pared"
                className="w-full h-full object-contain pointer-events-none"
              />
            </ApartmentObject>
          </div>

          {/* PORTAL 3: TV RETRO (Football / Fútbol y pizarra) */}
          <div
            className="absolute z-16"
            style={{
              left: '12.14%',
              top: '32.91%',
              width: '13.77%',
              height: '19.43%',
            }}
          >
            <ApartmentObject
              id="tv"
              name="TV retro"
              category="Fútbol y pizarra"
              href="/football"
              className="w-full h-full"
            >
              <div className="relative w-full h-full anim-tv">
                <img
                  src="/images/apartment/tv.png"
                  alt="TV retro con partido de fútbol"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            </ApartmentObject>
          </div>

          {/* PORTAL 4: MOVIE SHELF & FILM REEL (Movies / Cine y cintas) */}
          {/* Ubicado en z-15 para verse detrás de la laptop (z-22) */}
          <div
            className="absolute z-15"
            style={{
              left: '0%',
              top: '34.57%',
              width: '15.06%',
              height: '35.0%',
            }}
          >
            <ApartmentObject
              id="movies"
              name="Estantería de películas"
              category="Cine y cintas"
              href="/movies"
              className="w-full h-full"
            >
              <div className="relative w-full h-full">
                {/* Film Reel sitting on top of the shelf (STATIC, NO ROTATION OF BASE) */}
                <div
                  className="absolute"
                  style={{
                    left: '26.7%',
                    top: '0%',
                    width: '50.9%',
                    height: '34.6%',
                  }}
                >
                  <img
                    src="/images/apartment/film_reel.png"
                    alt="Carrete de películas"
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>
                {/* Movie Shelf Unit with VHS tapes */}
                <div
                  className="absolute"
                  style={{
                    left: '0%',
                    top: '16.4%',
                    width: '100%',
                    height: '83.6%',
                  }}
                >
                  <img
                    src="/images/apartment/movie_shelf.png"
                    alt="Mueble de películas y cintas VHS"
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>
              </div>
            </ApartmentObject>
          </div>

          {/* PORTAL 5: GUITAR (Guitar / Música y cuerdas) */}
          {/* Selector correctamente ubicado en la guitarra (L15: x=49.94%, y=32.81%) */}
          <div
            className="absolute z-14"
            style={{
              left: '49.94%',
              top: '32.81%',
              width: '7.01%',
              height: '28.13%',
            }}
          >
            <ApartmentObject
              id="guitar"
              name="Guitarra acústica"
              category="Música y cuerdas"
              href="/guitar"
              className="w-full h-full"
            >
              <img
                src="/images/apartment/guitar.png"
                alt="Guitarra acústica en su soporte"
                className="w-full h-full object-contain pointer-events-none hover:rotate-1 transition-transform duration-300"
              />
            </ApartmentObject>
          </div>

          {/* PORTAL 6: COFFEE BAR (Coffee / Métodos de café) */}
          <div
            className="absolute z-16"
            style={{
              left: '60.5%',
              top: '31.5%',
              width: '9.8%',
              height: '14.2%',
            }}
          >
            <ApartmentObject
              id="coffee"
              name="Mesa de café"
              category="Métodos de café"
              href="/coffee"
              className="w-full h-full"
            >
              <div className="relative w-full h-full">
                {/* Espresso Machine */}
                <img
                  src="/images/apartment/coffee_espresso.png"
                  alt="Cafetera espresso"
                  className="absolute left-0 bottom-0 w-[58%] h-auto object-contain pointer-events-none"
                />
                {/* Rising steam from espresso */}
                <div className="absolute left-[18%] top-[5%] pointer-events-none anim-steam-1">
                  <div className="w-2 h-4 rounded-full bg-cream/70 blur-[1px]" />
                </div>
                {/* Coffee Grinder */}
                <img
                  src="/images/apartment/coffee_grinder.png"
                  alt="Molino de café"
                  className="absolute left-[48%] bottom-0 w-[27%] h-auto object-contain pointer-events-none"
                />
                {/* Coffee Beans Jar */}
                <img
                  src="/images/apartment/coffee_jar.png"
                  alt="Frasco con granos de café"
                  className="absolute left-[72%] bottom-0 w-[26%] h-auto object-contain pointer-events-none"
                />
              </div>
            </ApartmentObject>
          </div>

          {/* PORTAL 7: TURNTABLE (Music / Música y vinilos) */}
          <div
            className="absolute z-18"
            style={{
              left: '80.84%',
              top: '69.82%',
              width: '19.16%',
              height: '28.22%',
            }}
          >
            <ApartmentObject
              id="turntable"
              name="Tocadiscos vintage"
              category="Música y vinilos"
              href="/music"
              className="w-full h-full"
            >
              <img
                src="/images/apartment/turntable.png"
                alt="Tocadiscos vintage y vinilo"
                className="w-full h-full object-contain pointer-events-none"
              />
            </ApartmentObject>
          </div>

          {/* PORTAL 8: LAPTOP ON DESK (Portfolio / Portafolio profesional) */}
          {/* z-22 para estar en primer plano sobre el mueble de películas (z-15) */}
          <div
            className="absolute z-22"
            style={{
              left: '0%',
              top: '64.55%',
              width: '24.22%',
              height: '25.78%',
            }}
          >
            <ApartmentObject
              id="laptop"
              name="Laptop abierta"
              category="Portafolio profesional"
              href="/portfolio"
              className="w-full h-full"
            >
              <div className="relative w-full h-full anim-laptop-screen">
                <img
                  src="/images/apartment/laptop.png"
                  alt="Laptop de desarrollo abierta con código"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            </ApartmentObject>
          </div>

          {/* ======================================================== */}
          {/* --- AMBIENT ANIMATED PLANTS --- */}
          {/* ======================================================== */}

          {/* Large Floor Monstera (L13: x=41.30%, y=36.13%, al lado de la guitarra) */}
          <div
            className="absolute pointer-events-none z-12 anim-plant-monstera"
            style={{
              left: '41.30%',
              top: '36.13%',
              width: '9.94%',
              height: '24.71%',
            }}
          >
            <img
              src="/images/apartment/plant_monstera.png"
              alt="Planta Monstera"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Coffee Table Succulent */}
          <div
            className="absolute pointer-events-none z-16 anim-plant-table"
            style={{
              left: '53.44%',
              top: '60.45%',
              width: '4.35%',
              height: '9.38%',
            }}
          >
            <img
              src="/images/apartment/plant_table.png"
              alt="Suculenta en mesa de centro"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Foreground Leaves (Bottom Left corner) */}
          <div
            className="absolute pointer-events-none z-25 anim-plant-fg-left"
            style={{
              left: '0%',
              top: '79.69%',
              width: '17.34%',
              height: '20.31%',
            }}
          >
            <img
              src="/images/apartment/plant_left_fg.png"
              alt="Hojas en primer plano izquierdo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Foreground Leaves (Bottom Right corner) */}
          <div
            className="absolute pointer-events-none z-25 anim-plant-fg-right"
            style={{
              left: '84.42%',
              top: '87.89%',
              width: '15.58%',
              height: '12.11%',
            }}
          >
            <img
              src="/images/apartment/plant_right_fg.png"
              alt="Hojas en primer plano derecho"
              className="w-full h-full object-contain"
            />
          </div>

          {/* ======================================================== */}
          {/* --- ANIMATED CATS --- */}
          {/* ======================================================== */}

          {/* Grey Tabby Cat (Sleeping on Rug) - Con Zzz siempre visible */}
          <div
            className="absolute z-15 anim-cat-grey group cursor-default"
            style={{
              left: '65.32%',
              top: '75.20%',
              width: '17.73%',
              height: '15.14%',
            }}
            title="Gato atigrado durmiendo plácidamente"
          >
            <img
              src="/images/apartment/cat_grey.png"
              alt="Gato atigrado gris durmiendo en la alfombra"
              className="w-full h-full object-contain pointer-events-none"
            />
            {/* Zzz flotante SIEMPRE VISIBLE con animación suave */}
            <div className="absolute -top-3.5 left-[38%] pointer-events-none anim-badge-float bg-espresso/90 text-cream text-[11px] font-mono font-bold px-2 py-0.5 rounded-full shadow-md border border-cream/20 flex items-center space-x-1">
              <span>Zzz...</span>
            </div>
          </div>

          {/* Calico Cat (Resting on Sofa) - Con Ronroneo siempre visible */}
          <div
            className="absolute z-15 anim-cat-calico group cursor-default"
            style={{
              left: '89.35%',
              top: '54.30%',
              width: '10.65%',
              height: '10.35%',
            }}
            title="Gata calicó descansando en el sofá"
          >
            <img
              src="/images/apartment/cat_calico.png"
              alt="Gata calicó descansando en el sofá"
              className="w-full h-full object-contain pointer-events-none"
            />
            {/* Ronroneo flotante SIEMPRE VISIBLE con animación suave */}
            <div className="absolute -top-3.5 left-[30%] pointer-events-none anim-badge-float-alt bg-terracotta-dark text-cream text-[10px] font-mono font-medium px-2 py-0.5 rounded-full shadow-md border border-cream/20 flex items-center space-x-1">
              <span>Purr... ♪</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* --- DESK PROPS --- */}
          {/* ======================================================== */}

          {/* Coffee Mug with mountain logo y humo abundante */}
          <div
            className="absolute pointer-events-none z-22"
            style={{
              left: '17.34%',
              top: '68.26%',
              width: '7.40%',
              height: '10.64%',
            }}
          >
            <div className="relative w-full h-full">
              <img
                src="/images/apartment/mug.png"
                alt="Taza de café en el escritorio"
                className="w-full h-full object-contain"
              />
              {/* Humo abundante multi-pluma subiendo desde la taza */}
              <div className="absolute left-[34%] -top-4 w-6 h-8 pointer-events-none">
                {/* Wisp 1 */}
                <div className="absolute left-1 bottom-0 w-2 h-5 rounded-full bg-cream/75 blur-[1.5px] anim-steam-1" />
                {/* Wisp 2 */}
                <div className="absolute left-2.5 bottom-0 w-2.5 h-6 rounded-full bg-cream/80 blur-[1px] anim-steam-2" />
                {/* Wisp 3 */}
                <div className="absolute left-4 bottom-0 w-2 h-4.5 rounded-full bg-cream/65 blur-[1.2px] anim-steam-3" />
              </div>
            </div>
          </div>

          {/* Spiral Notebook with Pen */}
          <div
            className="absolute pointer-events-none z-22"
            style={{
              left: '23.44%',
              top: '77.83%',
              width: '17.47%',
              height: '12.21%',
            }}
          >
            <img
              src="/images/apartment/notebook.png"
              alt="Libreta con bolígrafo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
