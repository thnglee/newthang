# Portfolio Project Objectives & Master Plan

## 1. Project Overview
The goal is to build a premium, high-performance portfolio website using Next.js 15 and Tailwind CSS 4.0. The design must reflect a "noir" aesthetic with high-contrast editorial typography and smooth, subtle animations.

## 2. Layout Structure
The application should be structured as a single-page or multi-section scrolling experience with the following order:

### 2.1 Hero Section
- **Content**: Developer Name (Thang Lee) and a compelling Introduction/Bio.
- **Design**: 
  - Center-aligned text.
  - Background: "Ghost Image" with low opacity (20-30%) and a linear-gradient fade to bottom into the black background.
  - Typography: Mix of bold Sans-Serif (Inter/Outfit) and italicized Serif (Playfair Display).

### 2.2 Projects Section
- **Content**: Showcase of GitHub projects. Each project should include a demo video if available.
- **Design**:
  - Two-column grid layout (`gap-12`).
  - Images/Videos: 16:9 or 4:3 aspect ratio.
  - Interactions: Subtle `hover:scale-105` transition.
  - Visuals: Grain overlay or high-contrast filter on thumbnails.

### 2.3 Experience Section
- **Content**: Professional history (companies worked at).
- **Design**:
  - Clean, timeline or vertical list format.
  - Consistent typography hierarchy (Role, Company, Date, Description).

### 2.4 Interests Section
- **Content**: Personal interests/hobbies to add personality.
- **Design**: 
  - Visual or text-based grid, maintaining the noir aesthetic.

### 2.5 Contact Section
- **Content**: Contact information and/or form.
- **Design**:
  - Clear Call-to-Action (CTA).
  - Social links (GitHub, LinkedIn, etc.) using Lucide icons.

## 3. Design System & Aesthetics
**Strict adherence to these rules is required:**

### 3.1 Color Palette
- **Primary Background**: True Black (`#000000`) or Deep Obsidian (`#050505`).
- **Surface/Cards**: Elevated Dark Grey (`#111111`) with 1px solid border (`rgba(255, 255, 255, 0.08)`).
- **Accent**: Champagne Gold (`#C5A47E`). Use strictly for CTAs, decorative serifs, and active states.
- **Text Body**: Dimmed Silver (`#A1A1A1`).

### 3.2 Typography
- **Headings**: Editorial feel. Mix bold Sans-Serif (Inter/Outfit) with italicized Serif (Playfair Display).
- **Body**: Sans-Serif (Inter/Outfit).

### 3.3 UI Elements
- **Navigation**: Sticky header, `backdrop-blur-md`, semi-transparent.
- **Buttons**:
  - *Primary*: Solid Champagne background, black text, small caps, 2px radius.
  - *Secondary*: Text-only, arrow icon, `hover:translate-x-1`.
- **Animations**: `framer-motion` for complex entry (fade-in-up), CSS transitions for hovers.

## 4. Technical Standards
**Stack**: Next.js 15 (App Router), Tailwind CSS 4.0, TypeScript, Framer Motion, Lucide React.

### 4.1 Architecture
- **App Router**: All routes in `src/app` (or `app/`).
- **Components**: specific UI in `components/`, domain logic in `features/`.
- **Server Components**: Default choice. Use `'use client'` only when necessary.

### 4.2 Code Quality
- **TypeScript**: Strict mode. No `any`. explicit `Props` interfaces.
- **Tailwind**: Use `cn()` for class merging. Use designated theme tokens (e.g., `text-gold-accent`), NO arbitrary values (e.g., `text-[#C5A47E]`).
- **Icons**: Type with `LucideIcon`.

## 5. Implementation Roadmap
1. [ ] **Setup**: Configure Tailwind theme (colors, fonts) and global CSS.
2. [ ] **Components**: Build core UI atoms (Button, Card, Typography).
3. [ ] **Hero**: Implement Hero section with ghost background and typography mix.
4. [ ] **Projects**: Create Project grid with video support.
5. [ ] **Experience**: Build Experience timeline/list.
6. [ ] **Interests & Contact**: Implement remaining sections.
7. [ ] **Polish**: Apply animations and final accessibility checks.
