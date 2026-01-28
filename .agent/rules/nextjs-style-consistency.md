---
trigger: always_on
---

# nextjs-style-consistency.md

## 1. Visual Identity & Color Tokens
* **Primary Background:** Use a strict "true black" (`#000000`) or a very deep obsidian (`#050505`).
* **Card Surfaces:** Soft elevated dark greys (`#111111`) with a 1px solid border of `rgba(255, 255, 255, 0.08)`.
* **Accent Color:** Champagne Gold (`#C5A47E`). Use this strictly for call-to-action (CTA) buttons, decorative serifs, and active states.
* **Typography Tone:** * **Headings:** Mix a bold Sans-Serif (Inter/Outfit) with an italicized, high-contrast Serif (Playfair Display) to create a "Editorial" feel.
    * **Body:** Dimmed silver (`#A1A1A1`) at 14px-16px to maintain hierarchy and reduce visual noise.

## 2. Layout & Spacing Rules
* **The "Breathe" Rule:** Implement aggressive vertical padding (e.g., `py-24` or `py-32` in Tailwind) between sections.
* **Hero Alignment:** Center-align all text elements. The background image should be a "Ghost Image"—low opacity (20-30%) with a linear-gradient fade to bottom to merge seamlessly with the black background.
* **Service Cards:** * Numbering: Use small, dimmed monospaced digits (e.g., 01, 02).
    * Alignment: Left-aligned content within a structured grid.
* **Project Grid:** Two-column layout with a large gap (`gap-12`). Images must be 16:9 or 4:3 aspect ratio with a subtle `hover:scale-105` transition.

## 3. Component Specifications
* **Navigation:** Sticky header with a backdrop-blur (`backdrop-blur-md`) and a semi-transparent background.
* **Buttons:** * **Primary:** Solid Champagne background with black text, small caps, and 2px border radius.
    * **Secondary/Link:** Text-only with a small arrow icon and a `hover:translate-x-1` animation.
* **Image Treatments:** Apply a slight grain overlay or a high-contrast filter to portfolio thumbnails to match the moody, "noir" aesthetic of the reference.

## 4. Implementation Checklist (Next.js/Tailwind)
* [ ] Set `dark` mode as the permanent default.
* [ ] Install `Google Fonts` for **Inter** and **Playfair Display**.
* [ ] Configure `tailwind.config.js` with the `gold-accent` and `obsidian` colors.
* [ ] Use `framer-motion` for subtle "fade-in-up" entrance animations to reinforce the premium feel.