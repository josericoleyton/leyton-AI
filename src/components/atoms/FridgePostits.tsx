'use client';

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function FridgePostits({ className = '' }: { className?: string }) {
  return (
    <div
      className={`p-3 rounded-xl bg-[#EBE5DC] border border-espresso/15 shadow-md flex flex-col space-y-2 select-none ${className}`}
      aria-label="Nevera con notas de contacto"
    >
      <div className="text-[9px] uppercase tracking-wider font-bold text-espresso/60 pb-1 border-b border-espresso/10">
        Notas & Contacto
      </div>
      <div className="flex flex-col space-y-1.5">
        <a
          href="mailto:contact@joseleyton.me"
          className="flex items-center space-x-1.5 px-2 py-1 bg-[#FFF9C4] rounded shadow-xs text-[10px] text-espresso hover:scale-105 transition-transform"
        >
          <Mail className="w-3 h-3 text-terracotta" />
          <span>Escríbeme</span>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-1.5 px-2 py-1 bg-[#E1F5FE] rounded shadow-xs text-[10px] text-espresso hover:scale-105 transition-transform"
        >
          <Github className="w-3 h-3 text-espresso" />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-1.5 px-2 py-1 bg-[#E8F5E9] rounded shadow-xs text-[10px] text-espresso hover:scale-105 transition-transform"
        >
          <Linkedin className="w-3 h-3 text-[#0077B5]" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
