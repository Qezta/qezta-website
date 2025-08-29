# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website project built with SvelteKit and TypeScript, featuring an interactive WebGL-based cursor effect and modern web technologies. The site serves as both a personal portfolio (divit.qezta.com) and development base for the Qezta website (qezta.com).

## Development Commands

**Primary Development:**

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (static site generation)
- `pnpm preview` - Preview production build

**Code Quality:**

- `pnpm check` - Run Svelte type checking
- `pnpm check:watch` - Run type checking in watch mode
- `pnpm lint` - Run Prettier formatting check and ESLint

**Package Management:**

- Uses `pnpm` as package manager (specified in package.json)
- Workspace configuration via `pnpm-workspace.yaml`

## Architecture & Structure

**Framework Configuration:**

- **SvelteKit** with static adapter (`@sveltejs/adapter-static`)
- **Vite** build system with SvelteKit plugin
- **TypeScript** with strict mode enabled
- **SCSS** for styling with component-scoped styles

**Component Architecture (Atomic Design Pattern):**

```
src/components/
├── atoms/          # Basic UI elements (Cursor, Image, Title, etc.)
├── molecules/      # Composed components (About, Socials)
└── organisms/      # Complex components (Card)
```

**Key Architectural Features:**

- **Static Site Generation:** All routes prerendered (`+page.server.js` exports `prerender = true`)
- **Custom Cursor System:** Interactive WebGL-based cursor with audio feedback and visual effects
- **Responsive Design:** Mobile-first approach with breakpoint-specific layouts
- **Audio Integration:** Click sound effects with Web Audio API and dynamic playback rates
- **State Management:** Svelte stores for cursor burst and scale effects

**Store System (`src/store/cursor.ts`):**

- `burst` store: Manages cursor expansion effect on clicks
- `scale` store: Controls cursor scaling animations
- Custom increment/decrement methods with bounded values

**Routing Structure:**

- Single-page application with main content in Card organism
- Layout includes global audio system and cursor component
- Meta tags and SEO optimization in layout head

## Nix Development Environment

**Flake-based Development:**

- `flake.nix` defines reproducible development environment
- Uses `devshell`, `treefmt-nix`, and `git-hooks` for tooling
- Automated CI/CD via GitHub Actions with Nix flake checks

**Available Nix Commands:**

- Flake checks run automatically via CI
- Sitemap generation integrated into build process
- Lock file updates managed via automated workflows

## Key Implementation Details

**Interactive Cursor (`src/components/atoms/Cursor.svelte`):**

- Tracks mouse position with real-time transform updates
- Burst effect with timed intervals and smooth transitions
- Responsive behavior (hidden on touch devices)
- CSS mix-blend-mode for visual interaction with page content

**Audio System (`src/routes/+layout.svelte`):**

- Web Audio API integration with gain control
- Random playback rate variation (0.6-1.3x)
- Volume modulation based on cursor burst intensity
- Conditional loading (disabled on mobile devices)

**Static Asset Management:**

- WebGL shaders in `/static/` (vertex/fragment GLSL files)
- Font files and sound assets in organized directories
- 404 error handling with custom PHP and JavaScript

## Development Workflow

**Code Style:**

- Prettier for formatting (with Svelte plugin)
- ESLint with TypeScript rules
- Component-scoped SCSS styling
- Consistent import patterns following atomic design

**Build & Deployment:**

- Static site generation for optimal performance
- Precompressed assets via adapter configuration
- Vercel Analytics and Speed Insights integration
- Automated sitemap generation

**Quality Assurance:**

- TypeScript strict mode with comprehensive type checking
- Svelte component validation
- Git hooks for pre-commit quality checks
- Automated CI via GitHub Actions with Nix flake validation
