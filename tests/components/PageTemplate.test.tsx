// tests/components/PageTemplate.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PageTemplate } from '@/components/templates/PageTemplate';
import { NavigationProvider } from '@/context/NavigationContext';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/football',
}));

describe('PageTemplate Component', () => {
  it('renders illustrated header and children content', () => {
    render(
      <NavigationProvider>
        <PageTemplate
          title="Fútbol"
          subtitle="Mi pasión por el juego"
          objectKey="tv"
        >
          <div data-testid="page-content">Contenido editorial</div>
        </PageTemplate>
      </NavigationProvider>
    );
    expect(screen.getByText('Fútbol')).toBeInTheDocument();
    expect(screen.getByText('Mi pasión por el juego')).toBeInTheDocument();
    expect(screen.getByTestId('page-content')).toBeInTheDocument();
  });
});
