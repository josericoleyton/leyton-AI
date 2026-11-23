// tests/components/Navbar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from '@/components/molecules/Navbar';
import { NavigationProvider } from '@/context/NavigationContext';

const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => '/',
}));

describe('Navbar Component', () => {
  it('renders brand name and navigation items', () => {
    render(
      <NavigationProvider>
        <Navbar />
      </NavigationProvider>
    );
    expect(screen.getByText(/Jose/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Volver al apartamento/i)).toBeInTheDocument();
  });

  it('toggles dropdown menu for direct cross-navigation', () => {
    render(
      <NavigationProvider>
        <Navbar />
      </NavigationProvider>
    );
    const menuToggle = screen.getByLabelText(/Abrir menú de navegación/i);
    fireEvent.click(menuToggle);
    expect(screen.getByText(/Fútbol/i)).toBeInTheDocument();
    expect(screen.getByText(/Café/i)).toBeInTheDocument();
    expect(screen.getByText(/Guitarra/i)).toBeInTheDocument();
    expect(screen.getByText(/Libros/i)).toBeInTheDocument();
    expect(screen.getByText(/Películas/i)).toBeInTheDocument();
    expect(screen.getByText(/Música/i)).toBeInTheDocument();
    expect(screen.getByText(/Viajes/i)).toBeInTheDocument();
    expect(screen.getByText(/Portafolio/i)).toBeInTheDocument();
  });
});
