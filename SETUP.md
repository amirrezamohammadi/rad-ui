# Rad UI Setup Guide

## Project Structure

```
rad-ui/
├── apps/
│   ├── web/          # Next.js 14+ landing page and documentation
│   └── mobile/       # Expo React Native app
├── packages/
│   ├── ui/           # Shared UI component library
│   └── config/       # Shared ESLint and TypeScript configs
├── package.json      # Root workspace configuration
└── turbo.json        # Turborepo pipeline configuration
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Servers

```bash
# Run all apps
npm run dev

# Or run individually:
cd apps/web && npm run dev
cd apps/mobile && npm run dev
```

### 3. Build

```bash
npm run build
```

## Features Implemented

### ✅ Monorepo Structure
- Turborepo workspace with proper pipeline configuration
- Shared packages for UI components and configs

### ✅ Web App (Next.js)
- Next.js 14+ with App Router
- TypeScript configuration
- Tailwind CSS with RTL support
- Vazirmatn font for Farsi, Inter for English
- RTL-first layout (`dir="rtl"`)
- Theme toggle (light/dark mode)
- Beautiful landing page with:
  - Glassmorphism navbar
  - Hero section with Persian typography
  - Feature showcase grid

### ✅ Mobile App (Expo)
- Expo with React Native
- NativeWind for Tailwind CSS
- TypeScript configuration
- Shared color palette

### ✅ Design System
- Persian color palette (Kahgel light mode, Shab dark mode)
- CSS variables for theming
- RTL support via `tailwindcss-rtl`
- Consistent styling across web and mobile

## Next Steps

1. **Install dependencies**: Run `npm install` in the root directory
2. **Start development**: Run `npm run dev` to start all apps
3. **Add components**: Start building components in `packages/ui/src`
4. **Mobile assets**: Add icon, splash, and adaptive-icon images to `apps/mobile/assets/`

## Tech Stack

- **Monorepo**: Turborepo
- **Web**: Next.js 14+, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons
- **Mobile**: Expo, React Native, NativeWind, TypeScript
- **UI**: Shared component library with RTL support

