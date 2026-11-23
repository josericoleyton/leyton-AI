// tests/pages/Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from '@/app/page';
import { NavigationProvider } from '@/context/NavigationContext';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));

describe('Home Page Integration', () => {
  it('renders main apartment scene and life portals', () => {
    render(
      <NavigationProvider>
        <Home />
      </NavigationProvider>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /laptop.*portafolio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tv.*fútbol/i })).toBeInTheDocument();
  });
});
