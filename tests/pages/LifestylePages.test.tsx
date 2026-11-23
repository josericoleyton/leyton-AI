// tests/pages/LifestylePages.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FootballPage from '@/app/football/page';
import GuitarPage from '@/app/guitar/page';
import CoffeePage from '@/app/coffee/page';
import BooksPage from '@/app/books/page';
import { NavigationProvider } from '@/context/NavigationContext';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));

describe('Lifestyle Pages', () => {
  it('renders Football rankings', () => {
    render(
      <NavigationProvider>
        <FootballPage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Ranking de Clubes & Equipos/i)).toBeInTheDocument();
  });

  it('renders Guitar learning journey', () => {
    render(
      <NavigationProvider>
        <GuitarPage />
      </NavigationProvider>
    );
    expect(screen.getByText(/El Camino con las Cuerdas/i)).toBeInTheDocument();
  });

  it('renders Coffee brewing methods', () => {
    render(
      <NavigationProvider>
        <CoffeePage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Métodos de Preparación/i)).toBeInTheDocument();
  });

  it('renders Books reading list', () => {
    render(
      <NavigationProvider>
        <BooksPage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Leyendo Actualmente/i)).toBeInTheDocument();
  });
});
