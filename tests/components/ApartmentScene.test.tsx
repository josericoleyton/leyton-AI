// tests/components/ApartmentScene.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ApartmentScene } from '@/components/organisms/ApartmentScene';
import { NavigationProvider } from '@/context/NavigationContext';

const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => '/',
}));

describe('ApartmentScene Component', () => {
  it('renders all 8 interactive life portals with accessible names', () => {
    render(
      <NavigationProvider>
        <ApartmentScene />
      </NavigationProvider>
    );
    expect(screen.getByRole('button', { name: /laptop.*portafolio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tv.*fútbol/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /guitarra.*música/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /café/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /biblioteca.*libros/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /películas.*cine/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tocadiscos.*música/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /balcón.*viajes/i })).toBeInTheDocument();
  });

  it('triggers navigation on object click', () => {
    render(
      <NavigationProvider>
        <ApartmentScene />
      </NavigationProvider>
    );
    const laptopBtn = screen.getByRole('button', { name: /laptop.*portafolio/i });
    fireEvent.click(laptopBtn);
    expect(mockPush).toHaveBeenCalledWith('/portfolio');
  });
});
