// tests/pages/PortfolioPage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PortfolioPage from '@/app/portfolio/page';
import { NavigationProvider } from '@/context/NavigationContext';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/portfolio',
}));

describe('Portfolio Page', () => {
  it('renders career timeline, featured project, and tech stack', () => {
    render(
      <NavigationProvider>
        <PortfolioPage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Trayectoria Profesional/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyecto Actual Destacado/i)).toBeInTheDocument();
    expect(screen.getByText(/Filosofía de Trabajo/i)).toBeInTheDocument();
    expect(screen.getByText(/Stack Tecnológico & Habilidades/i)).toBeInTheDocument();
  });
});
