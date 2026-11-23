// tests/config.test.ts
import { describe, it, expect } from 'vitest';
import tailwindConfig from '../tailwind.config';

describe('Theme Configuration', () => {
  it('defines custom design tokens from spec', () => {
    const colors = tailwindConfig.theme?.extend?.colors as Record<string, any>;
    expect(colors).toBeDefined();
    expect(colors.cream?.DEFAULT).toBe('#FDFBF7');
    expect(colors.terracotta?.DEFAULT).toBe('#C86D51');
    expect(colors.sage?.DEFAULT).toBe('#82957B');
    expect(colors.espresso?.DEFAULT).toBe('#2C2523');
  });
});
