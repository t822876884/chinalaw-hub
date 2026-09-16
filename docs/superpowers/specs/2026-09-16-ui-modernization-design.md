# ChinaLaw Hub - Modern Legal Tech & Trust UI Redesign Spec

## 1. Overview & Objective
Redesign and modernize ChinaLaw Hub to present an authoritative, sleek, and high-trust "Modern Legal Tech & Trust" aesthetic. The platform connects international clients with verified, PRC-qualified, English-speaking lawyers in China.

## 2. Visual Design & Theme System
* **Color Palette**:
  * Backgrounds: `#F8FAFC` (slate-50 background) with subtle ambient emerald/cyan glow gradients; white `#FFFFFF` for elevated cards.
  * Slate Dark / Ink: `#0F172A` (slate-900) primary text, `#1E293B` (slate-800) headers, `#64748B` (slate-500) muted labels.
  * Accent Emerald / Trust: `#0D9488` / `#059669` (emerald-600) with soft green background `#ECFDF5` for "Verified" badges and primary contact buttons.
  * Amber / Notice: `#D97706` (amber-600) for "Verification pending" and alert boxes.
  * Border & Dividers: `#E2E8F0` (slate-200), `#CBD5E1` (slate-300) on hover.
* **Component Styling**:
  * Cards: Rounded-2xl with clean slate borders, subtle shadow (`shadow-sm` transitioning to `shadow-md` on hover), ambient highlight ring on hover.
  * Badges & Tags: Rounded-full pills with clear semantic color tokens.
  * Typography: Enhanced typography hierarchy, crisp letter-spacing and line heights.

## 3. Key Components & Pages Redesign

### 3.1 Global Header & Footer (`app/layout.tsx`)
* **Header**:
  * Sticky with backdrop-blur (`bg-white/80 backdrop-blur-md`).
  * Modern brand logo featuring an icon badge (Scales of Justice / Shield emblem) and crisp typography.
  * Navigation links with subtle pill hover background and active states.
  * Quick action CTA button: "Browse Lawyers".
* **Footer**:
  * Multi-column clean layout with disclaimer, verification resource links, quick contact, and copyright.

### 3.2 Home Page (`app/page.tsx`)
* **Hero Section**:
  * Modern badge: "Official PRC Ministry of Justice Checked Profiles".
  * Impactful headline & subheadline.
  * Trust Stats Bar: (600k+ Lawyers Pool, 100% MOJ Verified Records, Direct WhatsApp/WeChat Access, $0 Platform Fee).
  * Direct action search/filter quick-bar.
* **Feature Highlights**:
  * 3 modern feature cards with iconography (Official Verification, Zero Middleman, Rapid Response).
* **Practice Areas & Cities**:
  * Interactive grid cards with category icons, lawyer counts, and hover micro-animations.
* **Featured Lawyers**:
  * Prominently displayed modern lawyer cards with direct contact options.

### 3.3 Lawyer Card & Directory (`components/LawyerCard.tsx`, `components/LawyerDirectory.tsx`)
* **LawyerCard**:
  * Avatar monogram with unique stylish background based on name/slug.
  * Verified seal badge with checkmark icon and exact verification status.
  * Experience chip ("X yrs experience").
  * Structured practice area pills and language tags.
  * Direct contact action group (WhatsApp button, WeChat with one-click copy feedback, Email link).
* **LawyerDirectory**:
  * Unified search & filter bar with search input (clear button, search icon), city dropdown, practice area dropdown, and quick active filter chips.
  * Result count badge and polished empty state.

### 3.4 Contact Buttons Component (`components/ContactButtons.tsx`)
* One-click copy for WeChat ID with visual "Copied to clipboard!" tooltip/badge.
* WhatsApp direct chat button styled in distinctive emerald green.
* Email client trigger.

### 3.5 Lawyer Detail Profile (`app/lawyers/[slug]/page.tsx`)
* Modern profile hero banner with avatar monogram, verified certification badge, and quick stats.
* Clean tabbed or segmented layout: Biography, Selected Experience highlights, Official Credentials breakdown.
* Sticky desktop sidebar for direct contact with legal disclaimer.

### 3.6 Verification & Sub-pages (`app/verify/page.tsx`, `app/city/page.tsx`, `app/practice/page.tsx`)
* Stepped visual timeline for the 5-step verification process.
* Official government register portal cards with external link indicators.
* Red flags advisory card with warning accents.

## 4. Verification Plan
* Validate build: `npm run build`
* Validate dev rendering across all routes:
  - `/` (Home)
  - `/lawyers` (Directory)
  - `/lawyers/li-wenjun` (Profile)
  - `/verify` (Verification guide)
  - `/city` & `/city/beijing`
  - `/practice` & `/practice/corporate`
* Test interactivity (search filter, WeChat copy-to-clipboard, responsive mobile menu).
