'use client';

import React from 'react';
import { motion, MotionStyle } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useNavigation } from '@/context/NavigationContext';

interface ApartmentObjectProps {
  id: string;
  name: string;
  category: string;
  href: string;
  className?: string;
  style?: MotionStyle | React.CSSProperties;
  children: React.ReactNode;
}

export function ApartmentObject({
  id,
  name,
  category,
  href,
  className = '',
  style,
  children,
}: ApartmentObjectProps) {
  const router = useRouter();
  const { setActiveObject } = useNavigation();

  const handleClick = () => {
    setActiveObject(id);
    router.push(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.button
      type="button"
      role="button"
      tabIndex={0}
      aria-label={`${name} - ${category}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      style={style as MotionStyle}
      className={`group relative text-left focus:outline-none focus:ring-4 focus:ring-terracotta/50 cursor-pointer ${className}`}
    >
      {/* Visual illustration slot */}
      <div className="w-full h-full relative transition-all duration-300 group-hover:brightness-105 group-hover:drop-shadow-2xl">
        {children}
      </div>

      {/* Floating tooltip badge */}
      <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 bg-espresso text-cream text-[11px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shadow-md z-40 flex items-center space-x-1">
        <span>{name}</span>
        <span className="text-terracotta-light">→</span>
      </div>
    </motion.button>
  );
}
