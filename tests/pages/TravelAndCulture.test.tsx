// tests/pages/TravelAndCulture.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import MoviesPage from '@/app/movies/page';
import MusicPage from '@/app/music/page';
import TravelPage from '@/app/travel/page';
import { NavigationProvider } from '@/context/NavigationContext';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));

describe('Travel and Culture Pages', () => {
  it('renders Movies top movies and directors', () => {
    render(
      <NavigationProvider>
        <MoviesPage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Películas Inolvidables/i)).toBeInTheDocument();
    expect(screen.getByText(/Directores de Cabecera/i)).toBeInTheDocument();
  });

  it('renders Music curated playlists', () => {
    render(
      <NavigationProvider>
        <MusicPage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Playlists Curadas en Spotify/i)).toBeInTheDocument();
  });

  it('renders travel world map and visited cities list', () => {
    render(
      <NavigationProvider>
        <TravelPage />
      </NavigationProvider>
    );
    expect(screen.getByLabelText(/Mapa mundial de viajes/i)).toBeInTheDocument();
    expect(screen.getByText(/Ciudades Visitadas/i)).toBeInTheDocument();
    expect(screen.getByText(/Destinos en el Horizonte/i)).toBeInTheDocument();
  });
});
