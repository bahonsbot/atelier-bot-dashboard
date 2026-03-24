# Atelier Bot | Pro Dashboard

A polished React dashboard for bot trading and operations, built with React, Vite, and Tailwind CSS. Inspired by the Material Design 3 Stitch design system.

## Design Language

- **Colors**: Material Design 3 palette (primary blue #0058bc, secondary green #006e28)
- **Typography**: Inter (Google Fonts)
- **Icons**: Material Symbols Outlined
- **Effects**: Glass-panel aesthetic with backdrop blur, soft shadows, rounded corners
- **Layout**: Sidebar + topbar + main content area, fully responsive

## Tech Stack

- **React 18** + **Vite 8**
- **Tailwind CSS 4** with `@tailwindcss/vite` plugin
- Component architecture (not a flat file dump)

## Components

- `Sidebar` — Fixed navigation sidebar with logo, nav links, and footer actions
- `TopBar` — Fixed top navigation with tabs and user controls
- `BotStatusCard` — Live bot engine status with pulse indicator
- `MarketHoursCard` — Global exchange market hours with backdrop image
- `DailyPerformanceCard` — Performance sparkline with win rate and profit metrics
- `DispatchQueueCard` — Bot task queue with health metrics bar
- `RiskAlertsCard` — Risk warning alerts with severity indicators
- `PositionsTable` — Active trading positions table
- `BottomNav` — Mobile bottom navigation bar
- `FAB` — Floating action button for mobile

## Run Locally

```bash
cd atelier-bot-dashboard
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## How It Was Built

1. Read the reference HTML (`atelier_dashboard.html`) to extract the design tokens, layout, and component structure
2. Scaffolded a Vite + React project
3. Configured Tailwind CSS with the exact M3 color palette from the reference
4. Built each component as a standalone React component
5. Composed them in `App.jsx` matching the reference layout
6. Verified build with `npm run build`
