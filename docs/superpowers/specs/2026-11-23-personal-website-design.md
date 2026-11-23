# Personal Website — Interactive Apartment

## Intent & Why

A personal website that expresses who Jose is through the metaphor of his
apartment: a cozy, open-plan loft where every object is a portal to a facet of
his life. Inspired by Paul Fey's portfolio (paulfey.me/work) — same concept-art
DNA (immersive, illustrated, story-driven navigation) but a completely different
metaphor and purpose.

The site is primarily personal expression. The only "functional" page is the
professional portfolio (accessed via the laptop). Everything else exists for
people who want to know Jose and, if the craft is good enough, as inspiration.

**Philosophy**: a slow, tranquil life full of varied pleasures — all converging
into calm. The site's mood, palette, and pacing reflect this.

## Goals

- Immersive, memorable first impression (apartment scene)
- Each life facet gets its own dedicated page, accessed through its object
- Professional portfolio that works as a real portfolio
- Warm, calm, inviting aesthetic throughout
- Performant, accessible, responsive

## Non-Goals

- Not a traditional portfolio/resume site
- Not a blog (at least not in v1)
- Not a clone of paulfey.me — different metaphor, different content, different structure

## Anti-Goals

- Must NOT feel cold, corporate, or template-ish
- Must NOT require scroll on desktop Home
- Must NOT force users back to Home to navigate between sections

## Constraints

- Home page (desktop): single viewport, NO scroll — entire apartment visible
- Illustrations: start with wireframes/placeholders; AI-generated art in parallel; iterate without blocking dev
- Must work on mobile with a different layout strategy

---

## Visual Design

### Style
2D hand-drawn illustration, editorial quality, inspired by paulfey.me's
illustrated approach. Warm, textured, organic.

### Palette
- Primary: cream/off-white backgrounds
- Accents: sage green (plants), terracotta, warm wood tones
- Text: dark warm grey or espresso brown
- Overall: warmth, tranquility, natural textures

### Typography
- Headings: warm serif (e.g., Lora, Playfair Display, or similar)
- Body: clean sans-serif (e.g., Inter, DM Sans)
- Builder's call on final pairing

### Illustration Approach
1. Phase 1: Wireframe apartment scene with placeholder shapes/icons
2. Phase 2: AI-generated illustrations (Midjourney/Flux) for each object and scene
3. Phase 3: Iterate, refine, potentially hire illustrator if AI quality insufficient
4. Assets: SVG for simple elements, optimized PNG/WebP for complex illustrations

---

## Site Architecture

### Home Page — The Apartment (Desktop)

A single-viewport illustrated loft/open-plan studio. All objects visible.
No scroll. The scene contains:

| Object | Location in Scene | Click Interaction | Opens Page |
|--------|-------------------|-------------------|------------|
| 💻 Laptop | Desk area | Screen turns on + zoom in | Professional/Portfolio |
| ⚽ TV | Living area wall | TV turns on + zoom in | Football |
| 🎸 Guitar | Leaning on wall/stand | TBD per iteration | Music (playing/learning) |
| ☕ Coffee table | Kitchen/counter area | TBD per iteration | Coffee methods/ritual |
| 📚 Bookshelf | Wall unit | TBD per iteration | Books |
| 🎬 Movie shelf | Near TV / wall unit | TBD per iteration | Movies/Cinema |
| 🎵 Turntable | Side table / shelf | TBD per iteration | Music tastes/playlists page |
| 🌿 Balcony | Background, mountain view | TBD per iteration | Travel |

Additional illustrated elements (non-clickable, ambient):
- Plants throughout
- Warm lighting
- Textures (wood, fabric, ceramic)
- Name plaque/sign on wall or door

Contact elements in the illustration:
- Postits on fridge, letters in mailbox, or similar creative detail → links to contact/social

### Home Page — The Apartment (Mobile)

Vertical scroll tour with parallax. User "walks through" the apartment
top-to-bottom. Each object/zone appears as a section with its illustration
and a tap target to enter the page.

### Identity

- Name integrated into apartment illustration (plaque on door, sign on wall)
- Name also in navbar for persistent identification

### Contact & Social

- Navbar: discrete icons (GitHub, LinkedIn, email, etc.)
- Apartment: illustrated detail (postits, mailbox, etc.) linking to same

---

## Navigation

### Navbar (persistent, all pages)
- Minimal: logo/name (left) + home icon + hamburger/dropdown menu (right)
- Home icon click: triggers inverse animation (zoom out / object closes) back to apartment
- Dropdown menu: all 8 sections listed for direct cross-navigation

### Transitions

**Into a page**: Object-specific animation. Each object interacts differently:
- Laptop: always open → screen turns on → zoom into screen → page content
- TV: turns on → zoom → page content
- Others: to be designed per-object during implementation (each should feel natural to the object)

**Back to Home**: inverse animation — content "closes back into" the object → zoom out to apartment

**Cross-navigation**: via dropdown menu, standard page transition (no need for apartment animation when going section-to-section)

---

## Pages — Content Structure

Each inner page follows the pattern:
**Illustrated header** (contextual to the object/theme) → **clean editorial content below**

### 1. Professional / Portfolio (Laptop)
- **Header**: Illustrated desk/laptop scene
- **Sections**:
  - Professional timeline (visual, interactive)
  - Tech stack / skills
  - Current project (featured, detailed)
  - Studies / education
  - What I love about this facet of my life (philosophy of work)
- **This is the only "functional" page** — usable as a real portfolio

### 2. Football (TV)
- **Header**: Illustrated TV with match scene
- **Sections**:
  - Personal relationship with football
  - Favorite teams ranking
  - Favorite leagues
  - Favorite players
  - Memorable matches / moments

### 3. Music — Playing (Guitar)
- **Header**: Illustrated guitar scene
- **Sections**:
  - Journey learning guitar
  - Favorite genres to play
  - Bands/artists that inspire playing
  - Covers, practice, goals

### 4. Coffee (Coffee Table)
- **Header**: Illustrated coffee setup
- **Sections**:
  - Love for coffee
  - Brewing methods (pour-over, french press, espresso, etc.)
  - Favorite beans/origins
  - The ritual

### 5. Books (Bookshelf)
- **Header**: Illustrated bookshelf
- **Sections**:
  - Reading list / favorites
  - Currently reading
  - Books that changed perspective
  - Genres

### 6. Movies / Cinema (Movie Shelf)
- **Header**: Illustrated movie shelf (old-school rental style)
- **Sections**:
  - Favorite movies ranking
  - Favorite directors
  - Genres
  - Memorable cinema experiences

### 7. Music — Listening (Turntable)
- **Header**: Illustrated turntable scene
- **Sections**:
  - Musical taste / journey
  - Favorite genres, artists, albums
  - Curated playlists (Spotify embeds)
  - What music means in daily life

### 8. Travel (Balcony)
- **Header**: Illustrated balcony with mountain view
- **Sections**:
  - Love for travel
  - Countries visited (interactive map or list)
  - Cities visited
  - Bucket list destinations
  - Travel philosophy

---

## Persistent Mini-Player (Tocadiscos)

- Position: bottom corner of viewport, always visible on all pages
- Style: minimal, matches site aesthetic (cream/warm)
- Functionality: Spotify embed — plays Jose's curated playlists
- Controls: play/pause, skip, current track info
- Can expand/collapse
- Clicking turntable in apartment opens the full Music Listening page, NOT the mini-player

---

## Technical Decisions

### Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Motion (motion.dev, formerly Framer Motion)
- **Deployment**: Vercel
- **Language**: TypeScript

### Project Structure
This repo (`leyton-AI`) becomes the web app root. `.agents/` folder is preserved
(dev workflow skills). Everything else is restructured as a Next.js project.

```
leyton-AI/
├── .agents/              # Preserved — dev workflow skills
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Atomic Design (atoms/molecules/organisms)
│   ├── lib/              # Utils, constants, types
│   ├── assets/           # Illustrations, SVGs, images
│   └── styles/           # Global styles, Tailwind config
├── public/               # Static assets, fonts
├── docs/                 # Design docs (this file)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Apartment Scene Architecture (builder's call)
The apartment is **layered separate assets composited in the browser**, NOT a
single monolithic SVG. Each object is an independent component (SVG or image)
positioned via CSS. This enables:
- Swapping individual object illustrations without touching others
- Independent hover/click states per object
- Easier responsive scaling
- Phased illustration replacement (wireframe → AI art → refined art)

### Transitions Architecture (builder's call)
Motion `layoutId` + `AnimatePresence` for route transitions. Object-specific
entry animations trigger on click, then shared-layout morph into the new page.
Inverse animation on return to Home.

### Spotify Integration
Simple **embed iframe** for v1. No auth, no backend, no Premium requirement.
Provides play/pause + track info display. Upgrade path to Web Playback SDK
exists for v2 if fuller control is desired.

### Travel Map
**SVG world map** with visited countries highlighted (colored/filled) — lightweight,
fits the illustrated aesthetic. Detailed **list below** the map with countries,
cities, and notes.

### Professional Timeline (builder's call)
Vertical scrollable timeline with expandable cards. Each card = a career
milestone with date, role, description, expandable details.

### Content Strategy
Static content via **MDX/JSON files** in the repo. No CMS for v1. Jose edits
files directly. Structure:

```
src/
├── content/
│   ├── portfolio/        # Professional timeline, skills, projects
│   ├── football/         # Teams, leagues, players rankings
│   ├── guitar/           # Learning journey, inspirations
│   ├── coffee/           # Methods, beans, ritual
│   ├── books/            # Reading list, favorites
│   ├── movies/           # Rankings, directors, genres
│   ├── music/            # Playlists, artists, genres
│   └── travel/           # Countries, cities, bucket list
```

### Performance Considerations
- Apartment illustration: layered SVG/image assets, lazy load non-critical elements
- Page transitions: Motion AnimatePresence + layout animations
- Images: next/image with WebP/AVIF, blur placeholders
- Spotify embed: lazy loaded, doesn't block page render
- Target: 90+ Lighthouse performance score

### Accessibility
- All interactive objects have descriptive labels (aria-label)
- Keyboard navigation through apartment objects (tab order)
- Skip-to-content link
- Alt text for all illustrations
- Mini-player has keyboard controls
- Reduced-motion: simpler transitions, no parallax on mobile

---

## Approaches Considered

### A) 2D Illustrated Interactive Scene (CHOSEN)
Hand-drawn 2D illustration, objects clickable, object-specific animations.
- **Pros**: Warm, matches paulfey.me inspiration, achievable, performant, scales well
- **Cons**: Requires illustration assets (mitigated by phased approach)
- **Why chosen**: Best balance of immersion, feasibility, and warmth

### B) 3D Interactive Room (WebGL / Three.js)
Full 3D navigable apartment.
- **Pros**: Most immersive, modern "wow" factor
- **Cons**: Heavy, slow, complex, accessibility nightmare, overkill for content site
- **Why rejected**: Performance and complexity vs. value

### C) Isometric Pixel Art
Isometric view of apartment, pixel art style.
- **Pros**: Trendy, can be built with CSS/SVG, no external illustration dependency
- **Cons**: Less warm, more "gamey" than personal, doesn't match the calm/tranquil philosophy
- **Why rejected**: Wrong emotional tone

---

## What's Left to the Builder

- Final typography pairing
- Exact animation details per object (iterate with Jose one by one)
- Illustration asset pipeline specifics (AI generation workflow)
- Exact responsive breakpoints
- Component architecture (Atomic Design recommended given skills available)
- SEO meta structure
- Favicon / OG image design
- Exact navbar layout and hamburger behavior
- State management approach for mini-player (Zustand recommended)
- Travel SVG map implementation details
