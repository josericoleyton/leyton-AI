'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface NavigationContextType {
  isTransitioning: boolean;
  activeObject: string | null;
  setActiveObject: (obj: string | null) => void;
  triggerReturnToApartment: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeObject, setActiveObject] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const triggerReturnToApartment = useCallback(() => {
    if (pathname === '/') {
      setActiveObject(null);
      return;
    }
    setIsTransitioning(true);
    // Smooth transition delay before route change
    setTimeout(() => {
      setActiveObject(null);
      router.push('/');
      setIsTransitioning(false);
    }, 200);
  }, [pathname, router]);

  return (
    <NavigationContext.Provider
      value={{
        isTransitioning,
        activeObject,
        setActiveObject,
        triggerReturnToApartment,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
