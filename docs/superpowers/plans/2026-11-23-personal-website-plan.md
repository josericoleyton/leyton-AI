# Personal Website (Interactive Apartment) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an interactive personal website for Jose centered around an illustrated loft apartment where each object is a portal to a life facet, featuring 8 dedicated content pages, smooth Motion transitions, a persistent Spotify mini-player, and a responsive mobile tour.

**Architecture:** Next.js 14+ App Router with TypeScript. The Home page is a single-viewport non-scrolling composite of layered SVG/HTML elements for desktop and a vertical parallax tour for mobile. Navigation uses Motion (`AnimatePresence` + `layoutId`) for object zoom/unzoom transitions and cross-navigation. Content is strictly typed static JSON/MDX modules. Component architecture follows Atomic Design.

**Tech Stack:** Next.js 14+ (App Router), React 18/19, TypeScript, Tailwind CSS, Motion (`motion`), Lucide React, Vitest + React Testing Library.

**Spec:** `docs/superpowers/specs/2026-11-23-personal-website-design.md`

## Global Constraints

- Desktop Home page: strictly single viewport (`h-screen overflow-hidden`), NO scrolling.
- Mobile Home page: vertical scrolling tour with parallax cards.
- Preserved directories: `.agents/` and `docs/` must remain intact.
- Color palette: cream backgrounds (`#FDFBF7`), terracotta accents (`#C86D51`), sage green (`#82957B`), warm espresso text (`#2C2523`).
- Typography: serif heading (`Playfair Display` or `Lora`), sans body (`Inter` or `Plus Jakarta Sans`).
- Performance: lazy-loaded heavy embeds (Spotify), SVG icons/illustrations, Lighthouse score target >= 90.
- Accessibility: semantic HTML, ARIA labels for all interactive apartment objects, full keyboard navigation support, and respect for `prefers-reduced-motion`.

## Review Focus

1. Mobile viewport resize / orientation change does not break desktop single-viewport constraint or mobile tour layout.
2. Browser direct URL navigation (e.g., direct visit to `/portfolio` or `/coffee`) loads cleanly without requiring Home mount.
3. Spotify embed iframe does not block page hydration or trigger unhandled autoplay permission errors.
4. Returning to Home via navbar button cleanly reverses object focus and restores apartment state without visual clipping.
5. Users with `prefers-reduced-motion: reduce` receive instantaneous page transitions without zoom/scale nausea.

---

### Task 1: Project Setup, Tooling & Design Tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `vitest.config.ts`, `src/styles/globals.css`, `tests/setup.ts`
- Modify: `.gitignore`
- Test: `tests/config.test.ts`

**Interfaces:**
- Consumes: None
- Produces: Tailwind theme config (`theme.colors.cream`, `theme.colors.terracotta`, `theme.colors.sage`, `theme.colors.espresso`), base CSS variables, Vitest test runner.

- [ ] **Step 1: Write configuration & token verification test**

```typescript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/config.test.ts`
Expected: FAIL (missing dependencies or files)

- [ ] **Step 3: Setup dependencies and config files**

Clean root non-essential files (leaving `.agents/` and `docs/`). Initialize `package.json` with Next.js, React, Tailwind, Motion, Vitest, Lucide React. Create `tailwind.config.ts` with color tokens and fonts. Setup `tsconfig.json` with `@/*` alias to `src/*`. Configure `vitest.config.ts` with React Testing Library.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/config.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json next.config.ts tailwind.config.ts postcss.config.mjs vitest.config.ts src/styles/globals.css tests/
git commit -m "chore: scaffold nextjs project with tailwind design tokens and vitest"
```

---

### Task 2: Content Schema & Static Data Models

**Files:**
- Create: `src/types/content.ts`
- Create: `src/content/portfolio.json`
- Create: `src/content/football.json`
- Create: `src/content/guitar.json`
- Create: `src/content/coffee.json`
- Create: `src/content/books.json`
- Create: `src/content/movies.json`
- Create: `src/content/music.json`
- Create: `src/content/travel.json`
- Test: `tests/content.test.ts`

**Interfaces:**
- Consumes: None
- Produces: Typed content getters: `getPortfolioContent()`, `getFootballContent()`, `getGuitarContent()`, `getCoffeeContent()`, `getBooksContent()`, `getMoviesContent()`, `getMusicContent()`, `getTravelContent()`.

- [ ] **Step 1: Write content structure tests**

```typescript
// tests/content.test.ts
import { describe, it, expect } from 'vitest';
import { getPortfolioContent, getTravelContent } from '../src/lib/content';

describe('Content Layer', () => {
  it('loads portfolio content with timeline items and current project', () => {
    const portfolio = getPortfolioContent();
    expect(portfolio.title).toBeDefined();
    expect(portfolio.timeline.length).toBeGreaterThan(0);
    expect(portfolio.currentProject).toBeDefined();
    expect(portfolio.techStack.length).toBeGreaterThan(0);
  });

  it('loads travel content with visited countries and cities', () => {
    const travel = getTravelContent();
    expect(travel.countriesVisited.length).toBeGreaterThan(0);
    expect(travel.citiesVisited.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/content.test.ts`
Expected: FAIL

- [ ] **Step 3: Implement data schemas, JSON files, and loader helper in `src/lib/content.ts`**

Define TypeScript interfaces in `src/types/content.ts` for all 8 domains. Create JSON files with rich mock data capturing Jose's calm aesthetic and life facets. Implement type-safe getters in `src/lib/content.ts`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/content.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/types/content.ts src/content/ src/lib/content.ts tests/content.test.ts
git commit -m "feat: add typed content schemas and static datasets for 8 life facets"
```

---

### Task 3: Navbar, Navigation Context & Reverse-Animation Architecture

**Files:**
- Create: `src/context/NavigationContext.tsx`
- Create: `src/components/molecules/Navbar.tsx`
- Create: `src/components/atoms/HomeButton.tsx`
- Test: `tests/components/Navbar.test.tsx`

**Interfaces:**
- Consumes: Tailwind tokens, Next.js routing (`next/navigation`)
- Produces: `NavigationProvider`, `useNavigation()`, `<Navbar />` with dropdown cross-nav and animated home trigger.

- [ ] **Step 1: Write Navbar interaction tests**

```typescript
// tests/components/Navbar.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '../../src/components/molecules/Navbar';
import { NavigationProvider } from '../../src/context/NavigationContext';

describe('Navbar Component', () => {
  it('renders brand name and navigation items', () => {
    render(
      <NavigationProvider>
        <Navbar />
      </NavigationProvider>
    );
    expect(screen.getByText(/Jose/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Return to apartment/i)).toBeInTheDocument();
  });

  it('toggles dropdown menu for direct cross-navigation', () => {
    render(
      <NavigationProvider>
        <Navbar />
      </NavigationProvider>
    );
    const menuToggle = screen.getByLabelText(/Open navigation menu/i);
    fireEvent.click(menuToggle);
    expect(screen.getByText(/Fútbol/i)).toBeInTheDocument();
    expect(screen.getByText(/Café/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/components/Navbar.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement NavigationContext and Navbar component**

Create `NavigationContext.tsx` providing `isTransitioning`, `activeObject`, and `triggerReturnToApartment()`. Implement `<Navbar />` with minimal layout: left brand name, center home button, right dropdown menu with all 8 routes and social links (GitHub, LinkedIn, Email). Include ARIA labels and escape key listener for menu.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/components/Navbar.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/context/NavigationContext.tsx src/components/molecules/Navbar.tsx src/components/atoms/HomeButton.tsx tests/components/Navbar.test.tsx
git commit -m "feat: implement navbar with cross-navigation dropdown and home return trigger"
```

---

### Task 4: Persistent Spotify Mini-Player (Tocadiscos)

**Files:**
- Create: `src/components/organisms/MiniPlayer.tsx`
- Create: `src/components/atoms/VinylRecord.tsx`
- Test: `tests/components/MiniPlayer.test.tsx`

**Interfaces:**
- Consumes: `theme.colors`
- Produces: `<MiniPlayer />` pinned to viewport bottom corner with expand/collapse states and accessible controls.

- [ ] **Step 1: Write MiniPlayer interaction test**

```typescript
// tests/components/MiniPlayer.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MiniPlayer } from '../../src/components/organisms/MiniPlayer';

describe('MiniPlayer Component', () => {
  it('renders collapsed state by default and expands on click', () => {
    render(<MiniPlayer playlistId="37i9dQZF1DXcBWIGoYBM5M" />);
    const toggleBtn = screen.getByLabelText(/Toggle turntable music player/i);
    expect(toggleBtn).toBeInTheDocument();

    fireEvent.click(toggleBtn);
    expect(screen.getByTitle(/Spotify playlist player/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/components/MiniPlayer.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement `<MiniPlayer />` with Spotify iframe embed**

Create `MiniPlayer.tsx` using Motion for smooth expand/collapse. Include spinning vinyl disk icon when active, lazy loading for the Spotify iframe (`loading="lazy"`), accessible toggle button, and keyboard controls.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/components/MiniPlayer.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/organisms/MiniPlayer.tsx src/components/atoms/VinylRecord.tsx tests/components/MiniPlayer.test.tsx
git commit -m "feat: add persistent expandable spotify mini-player component"
```

---

### Task 5: Interactive Apartment Scene (Desktop & Mobile Tour)

**Files:**
- Create: `src/components/organisms/ApartmentScene.tsx`
- Create: `src/components/organisms/ApartmentMobileTour.tsx`
- Create: `src/components/molecules/ApartmentObject.tsx`
- Create: `src/components/atoms/AmbientPlant.tsx`
- Create: `src/components/atoms/NamePlaque.tsx`
- Create: `src/components/atoms/FridgePostits.tsx`
- Test: `tests/components/ApartmentScene.test.tsx`

**Interfaces:**
- Consumes: `useNavigation()`, `theme.colors`
- Produces: `<ApartmentScene />` (desktop single viewport, no scroll), `<ApartmentMobileTour />` (vertical parallax tour).

- [ ] **Step 1: Write Apartment scene object rendering and interaction test**

```typescript
// tests/components/ApartmentScene.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ApartmentScene } from '../../src/components/organisms/ApartmentScene';
import { NavigationProvider } from '../../src/context/NavigationContext';

const mockPush = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}));

describe('ApartmentScene Component', () => {
  it('renders all 8 interactive life portals with accessible names', () => {
    render(
      <NavigationProvider>
        <ApartmentScene />
      </NavigationProvider>
    );
    expect(screen.getByRole('button', { name: /laptop.*portfolio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /tv.*fútbol/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /guitar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /coffee/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /bookshelf/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /movies/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /turntable/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /balcony/i })).toBeInTheDocument();
  });

  it('triggers navigation on object click', () => {
    render(
      <NavigationProvider>
        <ApartmentScene />
      </NavigationProvider>
    );
    const laptopBtn = screen.getByRole('button', { name: /laptop.*portfolio/i });
    fireEvent.click(laptopBtn);
    expect(mockPush).toHaveBeenCalledWith('/portfolio');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/components/ApartmentScene.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement `<ApartmentScene />` and `<ApartmentMobileTour />`**

Construct the layered apartment composition:
- Desktop: `h-screen w-screen overflow-hidden relative` containing layered SVG/HTML items positioned via percentage coordinates: Laptop (desk), TV (living wall), Guitar (wall stand), Coffee table (kitchen/counter), Bookshelf, Movie shelf, Turntable, and Balcony (mountain background).
- Mobile: vertical scrolling list of section cards with parallax imagery and tap targets.
- Include ambient elements: warm lighting gradient, houseplants, name plaque on wall, fridge post-its linking to contact modal/links.
- Wire keyboard accessibility (`Tab` navigates through all 8 interactive elements; `Enter` activates).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/components/ApartmentScene.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/organisms/ApartmentScene.tsx src/components/organisms/ApartmentMobileTour.tsx src/components/molecules/ApartmentObject.tsx src/components/atoms/ tests/components/ApartmentScene.test.tsx
git commit -m "feat: implement interactive 2d apartment scene and mobile parallax tour"
```

---

### Task 6: Shared Layout Template & Page Header Component

**Files:**
- Create: `src/components/templates/PageTemplate.tsx`
- Create: `src/components/molecules/IllustratedPageHeader.tsx`
- Create: `src/app/template.tsx`
- Test: `tests/components/PageTemplate.test.tsx`

**Interfaces:**
- Consumes: `Navbar`, `MiniPlayer`, Motion transitions
- Produces: Standard page wrapper with contextual illustrated header and editorial body grid.

- [ ] **Step 1: Write PageTemplate wrapper test**

```typescript
// tests/components/PageTemplate.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageTemplate } from '../../src/components/templates/PageTemplate';
import { NavigationProvider } from '../../src/context/NavigationContext';

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
    expect(screen.getByTestId('page-content')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/components/PageTemplate.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement PageTemplate and IllustratedPageHeader**

Create `IllustratedPageHeader.tsx` displaying the contextual illustrated vignette (e.g. glowing TV, laptop on desk, steam rising from coffee dripper) with serif headline and calm subtitle. Create `PageTemplate.tsx` ensuring max-width containment (`max-w-4xl mx-auto`), warm background, padding, and smooth entrance animation via Motion.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/components/PageTemplate.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/components/templates/PageTemplate.tsx src/components/molecules/IllustratedPageHeader.tsx src/app/template.tsx tests/components/PageTemplate.test.tsx
git commit -m "feat: create reusable page template with illustrated contextual headers"
```

---

### Task 7: Professional Portfolio Page (`/portfolio`)

**Files:**
- Create: `src/app/portfolio/page.tsx`
- Create: `src/components/organisms/Timeline.tsx`
- Create: `src/components/molecules/ProjectCard.tsx`
- Create: `src/components/molecules/SkillBadge.tsx`
- Test: `tests/pages/PortfolioPage.test.tsx`

**Interfaces:**
- Consumes: `getPortfolioContent()`, `PageTemplate`
- Produces: Full `/portfolio` route with interactive career timeline, featured project showcase, tech stack list, education, and work philosophy.

- [ ] **Step 1: Write Portfolio page render test**

```typescript
// tests/pages/PortfolioPage.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PortfolioPage from '../../src/app/portfolio/page';
import { NavigationProvider } from '../../src/context/NavigationContext';

describe('Portfolio Page', () => {
  it('renders career timeline, featured project, and tech stack', () => {
    render(
      <NavigationProvider>
        <PortfolioPage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Trayectoria/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyecto Actual/i)).toBeInTheDocument();
    expect(screen.getByText(/Filosofía de Trabajo/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/pages/PortfolioPage.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement `/portfolio` page and components**

Build `Timeline.tsx` featuring expandable cards with milestone dates, role details, and achievements. Build `ProjectCard.tsx` displaying current featured project with tags and links. Integrate philosophy section emphasizing craftsmanship and slow, deliberate engineering.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/pages/PortfolioPage.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/portfolio/page.tsx src/components/organisms/Timeline.tsx src/components/molecules/ProjectCard.tsx src/components/molecules/SkillBadge.tsx tests/pages/PortfolioPage.test.tsx
git commit -m "feat: implement professional portfolio page with interactive timeline"
```

---

### Task 8: Lifestyle Pages — Football, Guitar, Coffee & Books

**Files:**
- Create: `src/app/football/page.tsx`
- Create: `src/app/guitar/page.tsx`
- Create: `src/app/coffee/page.tsx`
- Create: `src/app/books/page.tsx`
- Create: `src/components/molecules/RankingList.tsx`
- Create: `src/components/molecules/CoffeeMethodCard.tsx`
- Create: `src/components/molecules/BookCard.tsx`
- Test: `tests/pages/LifestylePages.test.tsx`

**Interfaces:**
- Consumes: `getFootballContent()`, `getGuitarContent()`, `getCoffeeContent()`, `getBooksContent()`, `PageTemplate`
- Produces: Four fully rendered lifestyle routes.

- [ ] **Step 1: Write Lifestyle pages verification test**

```typescript
// tests/pages/LifestylePages.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FootballPage from '../../src/app/football/page';
import CoffeePage from '../../src/app/coffee/page';
import { NavigationProvider } from '../../src/context/NavigationContext';

describe('Lifestyle Pages', () => {
  it('renders Football rankings', () => {
    render(
      <NavigationProvider>
        <FootballPage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Equipos/i)).toBeInTheDocument();
  });

  it('renders Coffee brewing methods', () => {
    render(
      <NavigationProvider>
        <CoffeePage />
      </NavigationProvider>
    );
    expect(screen.getByText(/Métodos de Preparación/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/pages/LifestylePages.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement `/football`, `/guitar`, `/coffee`, `/books`**

Build custom UI molecules: `RankingList.tsx` for football teams and players; `CoffeeMethodCard.tsx` with grind size, ratio, and tasting notes; `BookCard.tsx` with cover styling and personal takeaways. Connect to respective JSON data loaders.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/pages/LifestylePages.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/football/page.tsx src/app/guitar/page.tsx src/app/coffee/page.tsx src/app/books/page.tsx src/components/molecules/ tests/pages/LifestylePages.test.tsx
git commit -m "feat: implement football, guitar, coffee, and books pages"
```

---

### Task 9: Culture & Exploration Pages — Movies, Music & Travel

**Files:**
- Create: `src/app/movies/page.tsx`
- Create: `src/app/music/page.tsx`
- Create: `src/app/travel/page.tsx`
- Create: `src/components/organisms/WorldMapSvg.tsx`
- Create: `src/components/molecules/MovieCard.tsx`
- Test: `tests/pages/TravelAndCulture.test.tsx`

**Interfaces:**
- Consumes: `getMoviesContent()`, `getMusicContent()`, `getTravelContent()`, `PageTemplate`
- Produces: `/movies`, `/music`, and `/travel` routes, interactive SVG world map highlighting visited countries.

- [ ] **Step 1: Write Travel and Culture test**

```typescript
// tests/pages/TravelAndCulture.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TravelPage from '../../src/app/travel/page';
import { NavigationProvider } from '../../src/context/NavigationContext';

describe('Travel and Culture Pages', () => {
  it('renders travel world map and visited cities list', () => {
    render(
      <NavigationProvider>
        <TravelPage />
      </NavigationProvider>
    );
    expect(screen.getByLabelText(/Mapa mundial de viajes/i)).toBeInTheDocument();
    expect(screen.getByText(/Ciudades Visitadas/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/pages/TravelAndCulture.test.tsx`
Expected: FAIL

- [ ] **Step 3: Implement `/movies`, `/music`, `/travel` and `<WorldMapSvg />`**

- `/movies`: vintage VHS/film-rack aesthetic ranking favorite films and directors.
- `/music`: deep dive into musical genres, vinyl appreciation, and embedded Spotify playlists.
- `/travel`: custom lightweight SVG world map with visited countries colored in terracotta/sage and hover tooltips, followed by categorized lists of visited and bucket-list destinations.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run tests/pages/TravelAndCulture.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/movies/page.tsx src/app/music/page.tsx src/app/travel/page.tsx src/components/organisms/WorldMapSvg.tsx src/components/molecules/MovieCard.tsx tests/pages/TravelAndCulture.test.tsx
git commit -m "feat: implement movies, music, and travel pages with svg world map"
```

---

### Task 10: App Layout Integration, Reduced-Motion & Production Build

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Modify: `src/styles/globals.css`
- Test: `tests/pages/Home.test.tsx`

**Interfaces:**
- Consumes: All components from Tasks 1-9
- Produces: Root Next.js layout, Home view, verified production build.

- [ ] **Step 1: Write Home integration test**

```typescript
// tests/pages/Home.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../../src/app/page';
import { NavigationProvider } from '../../src/context/NavigationContext';

describe('Home Page Integration', () => {
  it('renders main apartment scene and navbar', () => {
    render(
      <NavigationProvider>
        <Home />
      </NavigationProvider>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run tests/pages/Home.test.tsx`
Expected: FAIL

- [ ] **Step 3: Wire root layout, metadata, fonts, and Motion config**

Configure `src/app/layout.tsx` with Google fonts (Playfair Display + Inter), metadata, favicon, and global providers. Wire `<Navbar />` and `<MiniPlayer />`. In `globals.css`, add accessibility focus rings and `@media (prefers-reduced-motion)` rules to disable transition zooms if requested.

- [ ] **Step 4: Run all unit tests and build check**

Run: `npm run test && npm run build`
Expected: All tests pass, Next.js build produces clean static outputs.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx src/styles/globals.css tests/pages/Home.test.tsx
git commit -m "feat: integrate root layout, home page, accessibility and verify production build"
```
