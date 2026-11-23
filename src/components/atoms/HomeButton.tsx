'use client';

import React from 'react';
import { Home } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';

export function HomeButton() {
  const { triggerReturnToApartment } = useNavigation();

  return (
    <button
      onClick={triggerReturnToApartment}
      aria-label="Volver al apartamento"
      className="p-2 rounded-full text-espresso/80 hover:text-espresso hover:bg-cream-dark transition-colors focus:outline-none focus:ring-2 focus:ring-terracotta"
    >
      <Home className="w-5 h-5" />
    </button>
  );
}
