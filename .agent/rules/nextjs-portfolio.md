---
trigger: always_on
---

# project-standards-and-best-practices.md

## 1. Architecture & Directory Structure
* **App Router Supremacy:** All routes must reside in `src/app`. Use `components/` for shared UI and `features/` for domain-specific logic.
* **Component Colocation:** Keep styles, types, and small sub-components in the same folder as the main component to minimize "folder jumping."
* **Client vs. Server:** Default to **Server Components**. Only use `'use client'` at the lowest possible leaf in the component tree (e.g., for `framer-motion` or `Radix UI` primitives).

## 2. TypeScript & Type Safety
* **Strict Typing:** Avoid `any` at all costs. Use `interface` for component Props and `type` for unions/aliases.
* **Component Props:** Always define a `Props` type for every component.
    ```typescript
    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      variant?: 'primary' | 'outline';
    }
    ```
* **Lucide Icons:** Always type icon props using `LucideIcon` from `lucide-react`.

## 3. Tailwind CSS 4.0 & Styling
* **Utility Composition:** Use `cn()` (utility combining `clsx` and `tailwind-merge`) for all dynamic class names to prevent style conflicts.
* **Design Token Adherence:** Never use arbitrary values (e.g., `text-[#C5A47E]`) directly in components. Use the theme tokens defined in your CSS/config (e.g., `text-gold-accent`).
* **CVA for Variants:** Use `class-variance-authority` (CVA) for any component with multiple states (buttons, badges, inputs) to keep logic out of the JSX.

## 4. Performance & Modern React 19
* **Next.js 15 Features:** Utilize the new `next/form` for client-side navigation on forms and follow the new caching semantics (Next.js 15 caches are no longer "on" by default).
* **Image Optimization:** Always use `next/image`. Every image must have `alt` text and appropriate `priority` for LCP elements (like the hero image).
* **Animations:** Use `framer-motion` sparingly. Prefer CSS transitions via Tailwind for simple hovers; save `framer-motion` for layout transitions and complex entry animations.

## 5. Coding Style & Linting
* **Functional Purity:** Use functional components with arrow functions.
* **Early Returns:** Use early returns to handle loading, error, or empty states to avoid deeply nested JSX.
* **Destructuring:** Destructure props and state variables for cleaner access.
* **Naming Conventions:** * Components: `PascalCase`
    * Hooks/Functions/Variables: `camelCase`
    * Constants: `SNAKE_UPPERCASE`

## 6. Radix UI & Accessibility (a11y)
* **Accessibility First:** Ensure all Radix primitives maintain their accessibility features. Never strip away `aria-` labels or keyboard navigation support.
* **Semantic HTML:** Use `<section>`, `<article>`, `<nav>`, and `<header>` tags appropriately instead of generic `<div>` soup.