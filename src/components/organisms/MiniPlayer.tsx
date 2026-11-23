'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Disc3, X, Volume2 } from 'lucide-react';
import { VinylRecord } from '@/components/atoms/VinylRecord';

interface MiniPlayerProps {
  playlistId?: string;
}

export function MiniPlayer({ playlistId = '37i9dQZF1DXcBWIGoYBM5M' }: MiniPlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="fixed bottom-4 right-4 z-40">
      <AnimatePresence>
        {!isExpanded ? (
          <motion.button
            key="collapsed"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(true)}
            aria-label="Abrir reproductor de música"
            className="flex items-center space-x-3 px-4 py-2.5 rounded-full bg-espresso text-cream shadow-xl border border-cream/20 hover:bg-espresso-light transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            <VinylRecord isPlaying={true} className="w-6 h-6" />
            <span className="text-xs font-medium tracking-wide">Tocadiscos</span>
            <Volume2 className="w-3.5 h-3.5 text-sage-light animate-pulse" />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 sm:w-96 rounded-2xl bg-cream border border-espresso/15 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-cream-dark/60 border-b border-espresso/10">
              <div className="flex items-center space-x-2">
                <Disc3 className="w-4 h-4 text-terracotta animate-spin" style={{ animationDuration: '4s' }} />
                <div>
                  <h4 className="text-xs font-bold text-espresso uppercase tracking-wider">Tocadiscos</h4>
                  <p className="text-[10px] text-espresso/70">Música de fondo seleccionada</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                aria-label="Minimizar reproductor de música"
                className="p-1 rounded-full text-espresso/60 hover:text-espresso hover:bg-cream-dark transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Spotify Player Embed */}
            <div className="p-3 bg-cream">
              <iframe
                title="Spotify playlist player"
                src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl shadow-inner"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
