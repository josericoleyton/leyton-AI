'use client';

import React from 'react';

export function NamePlaque({ className = '' }: { className?: string }) {
  return (
    <div
      className={`px-4 py-2 rounded-md bg-[#DFD6C9] border-2 border-[#B8A898] shadow-sm select-none ${className}`}
      aria-label="Placa de bienvenida: Leyton - Estudio y Hogar"
    >
      <div className="text-[11px] font-serif font-bold tracking-widest text-espresso uppercase text-center">
        Leyton
      </div>
      <div className="text-[9px] tracking-wider text-espresso/70 text-center font-sans">
        Estudio & Hogar
      </div>
    </div>
  );
}
