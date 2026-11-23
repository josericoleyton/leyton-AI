// tests/components/MiniPlayer.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MiniPlayer } from '@/components/organisms/MiniPlayer';

describe('MiniPlayer Component', () => {
  it('renders collapsed state by default and expands on click', () => {
    render(<MiniPlayer playlistId="37i9dQZF1DXcBWIGoYBM5M" />);
    const toggleBtn = screen.getByLabelText(/Abrir reproductor de música/i);
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTitle(/Spotify playlist player/i)).toBeInTheDocument();
  });

  it('can be collapsed again after expanding', async () => {
    render(<MiniPlayer playlistId="37i9dQZF1DXcBWIGoYBM5M" />);
    const toggleBtn = screen.getByLabelText(/Abrir reproductor de música/i);
    fireEvent.click(toggleBtn);

    const closeBtn = screen.getByLabelText(/Minimizar reproductor de música/i);
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByTitle(/Spotify playlist player/i)).not.toBeInTheDocument();
    });
  });
});
