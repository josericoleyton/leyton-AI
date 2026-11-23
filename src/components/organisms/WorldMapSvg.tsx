'use client';

import React, { useState } from 'react';

interface CountryItem {
  code: string;
  name: string;
  year?: string;
  memory?: string;
}

export function WorldMapSvg({ visited }: { visited: CountryItem[] }) {
  const [hovered, setHovered] = useState<CountryItem | null>(null);

  const isVisited = (code: string) => visited.find((c) => c.code === code);

  return (
    <div
      className="p-6 rounded-2xl bg-[#EAE2D5] border border-espresso/15 shadow-sm relative overflow-hidden"
      aria-label="Mapa mundial de viajes"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-serif font-bold text-espresso uppercase tracking-wider">
            Cartografía Personal
          </h3>
          <p className="text-xs text-espresso/70">
            Regiones y países recorridos (resaltados en terracota cálido)
          </p>
        </div>
        <div className="flex items-center space-x-3 text-xs">
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-xs bg-terracotta" />
            <span className="text-espresso/80 text-[11px]">Visitado</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <div className="w-3 h-3 rounded-xs bg-[#D0C2B0]" />
            <span className="text-espresso/60 text-[11px]">Por explorar</span>
          </div>
        </div>
      </div>

      {/* Stylized Illustrated SVG Map */}
      <div className="relative w-full aspect-[2/1] bg-[#DFD5C6] rounded-xl border border-espresso/10 p-2 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          role="img"
          aria-label="Mapa mundial ilustrado"
        >
          {/* North America */}
          <path
            d="M150,80 L280,60 L360,110 L300,220 L230,260 L200,290 L160,250 L120,170 Z"
            fill="#D0C2B0"
            stroke="#BAAB97"
            strokeWidth="2"
          />
          {/* Mexico (Visited) */}
          <path
            d="M160,250 L230,260 L220,310 L180,310 Z"
            fill="#C86D51"
            stroke="#A9543B"
            strokeWidth="2"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onMouseEnter={() => setHovered(isVisited('MEX') || null)}
            onMouseLeave={() => setHovered(null)}
          />

          {/* South America */}
          <path
            d="M240,310 L350,330 L380,420 L310,480 L260,420 L230,340 Z"
            fill="#D0C2B0"
            stroke="#BAAB97"
            strokeWidth="2"
          />
          {/* Colombia (Visited) */}
          <path
            d="M240,310 L290,320 L280,360 L245,350 Z"
            fill="#C86D51"
            stroke="#A9543B"
            strokeWidth="2"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onMouseEnter={() => setHovered(isVisited('COL') || null)}
            onMouseLeave={() => setHovered(null)}
          />
          {/* Argentina (Visited) */}
          <path
            d="M275,395 L320,400 L300,480 L280,480 Z"
            fill="#C86D51"
            stroke="#A9543B"
            strokeWidth="2"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onMouseEnter={() => setHovered(isVisited('ARG') || null)}
            onMouseLeave={() => setHovered(null)}
          />

          {/* Europe */}
          <path
            d="M480,90 L600,80 L590,170 L520,180 L460,140 Z"
            fill="#D0C2B0"
            stroke="#BAAB97"
            strokeWidth="2"
          />
          {/* Spain (Visited) */}
          <path
            d="M470,145 L510,145 L500,180 L465,175 Z"
            fill="#C86D51"
            stroke="#A9543B"
            strokeWidth="2"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onMouseEnter={() => setHovered(isVisited('ESP') || null)}
            onMouseLeave={() => setHovered(null)}
          />

          {/* Africa */}
          <path
            d="M470,190 L590,190 L620,290 L570,390 L510,380 L460,260 Z"
            fill="#D0C2B0"
            stroke="#BAAB97"
            strokeWidth="2"
          />

          {/* Asia */}
          <path
            d="M600,70 L870,80 L880,240 L760,300 L640,240 L600,170 Z"
            fill="#D0C2B0"
            stroke="#BAAB97"
            strokeWidth="2"
          />

          {/* Oceania */}
          <path
            d="M780,340 L890,340 L880,430 L800,430 Z"
            fill="#D0C2B0"
            stroke="#BAAB97"
            strokeWidth="2"
          />
        </svg>

        {/* Hover Tooltip */}
        {hovered && (
          <div className="absolute bottom-3 left-3 bg-espresso text-cream px-3 py-1.5 rounded-lg text-xs shadow-lg flex items-center space-x-2 pointer-events-none">
            <span className="font-bold">{hovered.name}</span>
            <span className="text-terracotta-light">({hovered.year})</span>
            {hovered.memory && <span className="text-cream/80">— {hovered.memory}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
