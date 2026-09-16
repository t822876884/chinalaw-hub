# ChinaLaw Hub UI Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign ChinaLaw Hub into a high-trust, modern legal tech platform with enhanced aesthetics, responsive layouts, badges, avatars, quick contact copy feedback, and interactive directory filters.

**Architecture:** Tailwind CSS token enhancement + modern Next.js 15 UI component redesign with Lucide-style SVG icons, glassmorphic header, hero trust statistics, lawyer card avatar monograms, interactive search bar, and refined verification subpages.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3.4.

## Global Constraints
- Keep all existing data schemas in `lib/data.ts` and URLs backward-compatible.
- Use Chinese responses for user interaction as per global instructions.
- Ensure `npm run build` passes cleanly with no TypeScript/ESLint errors.

---

### Task 1: Design Tokens & Base Styles Modernization
**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Update Tailwind Config with brand tokens, subtle shadows, and slate/emerald palette**
- [ ] **Step 2: Update `globals.css` with smooth scroll, ambient background glow utilities, badge styles**
- [ ] **Step 3: Verify build with `npm run build`**

---

### Task 2: Layout, Header & Footer Redesign
**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Build sticky glassmorphism header with professional Shield/Scales Logo, navigation links, and CTA**
- [ ] **Step 2: Build structured multi-column footer with disclaimer, official verification links, and contact**
- [ ] **Step 3: Verify rendering with `npm run build`**

---

### Task 3: Interactive Contact Buttons & Copy Feedback
**Files:**
- Modify: `components/ContactButtons.tsx`

- [ ] **Step 1: Add one-click WeChat ID copy with animated "Copied!" tooltip/feedback**
- [ ] **Step 2: Enhance WhatsApp button with emerald gradient & icon**
- [ ] **Step 3: Enhance Email direct link**
- [ ] **Step 4: Verify component interaction and build**

---

### Task 4: LawyerCard & LawyerDirectory Redesign
**Files:**
- Modify: `components/LawyerCard.tsx`
- Modify: `components/LawyerDirectory.tsx`

- [ ] **Step 1: Redesign `LawyerCard` with avatar monogram, verified badge with checkmark, practice pills, and structured bio**
- [ ] **Step 2: Redesign `LawyerDirectory` with modern search bar (icon, clear button), city/practice dropdowns, result count, and empty state**
- [ ] **Step 3: Verify directory filtering with `npm run build`**

---

### Task 5: Home Page Hero, Features & Overview Redesign
**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Modernize Hero section with trust stats, announcement pill badge, and dual CTAs**
- [ ] **Step 2: Modernize 3 Value Proposition feature cards with SVG icons and soft border glow**
- [ ] **Step 3: Modernize Practice Areas and Cities navigation cards with lawyer counts and hover arrows**
- [ ] **Step 4: Connect Featured Lawyers list**
- [ ] **Step 5: Verify Home page layout**

---

### Task 6: Subpages Polish (Lawyer Profile, Practice, City & Verify Pages)
**Files:**
- Modify: `app/lawyers/[slug]/page.tsx`
- Modify: `app/verify/page.tsx`
- Modify: `app/practice/page.tsx`
- Modify: `app/city/page.tsx`

- [ ] **Step 1: Redesign Lawyer profile page with sticky contact box and credential badges**
- [ ] **Step 2: Redesign Verify page with 5-step timeline cards and official registry links**
- [ ] **Step 3: Redesign Practice area and City directory index pages**
- [ ] **Step 4: Run full `npm run build` verification**
