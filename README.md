# Karo Pitch — Landing Page

> A demo landing page built for the **KaroStartup Intern Assignment**, showcasing the **Karo Pitch** platform — India's startup discovery and funding platform for early-stage founders from Bharat.

---

## 🚀 Project Overview

**Karo Pitch** is an initiative by [KaroStartup](https://karostartup.com) that connects early-stage founders from Tier-2 and Tier-3 cities across India with investors through curated, structured pitch events.

This project is a fully responsive demo landing page built in **React**, designed to communicate the platform's mission, process, and value to both founders and investors.

---

## 🛠️ Tech Stack

| Tool | Usage |
|---|---|
| React (JSX) | UI Framework |
| CSS-in-JS (inline styles) | Styling |
| Google Fonts | Typography — Playfair Display + DM Sans |
| CSS Animations | Step animations, counters, transitions |

> No external UI libraries. No Tailwind. Pure React + CSS.

---

## ✨ Features

- **Sticky Navbar** — Transparent on top, frosted glass on scroll. Collapses to a hamburger menu on mobile with all CTAs inside the drawer.
- **Hero Section** — Left-side headline + CTA with an animated process card on the right showing the 4-step journey with staggered fade-in animations.
- **About Section** — Platform mission with a 2x2 feature card grid.
- **How It Works** — Interactive 4-step process with auto-cycling highlights and dot navigation.
- **Animated Stats** — Scroll-triggered number counters (500+ startups, 120+ investors, ₹45Cr+ facilitated, 200+ cities).
- **Who Can Apply** — Category grid covering D2C, MSMEs, SaaS, Manufacturing, Consumer, and Bharat startups.
- **Investors Section** — Investor profile cards with firm, focus area, and avatar.
- **Featured Startups** — Dummy startup cards with name, city, funding stage, and raised amount.
- **About KaroStartup** — 5-year legacy stats (10,000+ stories, 5M+ community).
- **Final CTA** — Pulsing rocket CTA with "Apply Now" and "Partner With Us" buttons.
- **Footer** — Nav links, social icons, and brand info.

---

## 📱 Responsive Design

Fully mobile-responsive using a `useState` + `resize` listener pattern (no CSS media queries):

- Hamburger menu with drawer on mobile
- Single-column stacked layouts on all sections
- Full-width buttons and appropriately scaled typography
- Process card hidden on mobile (shown inline as part of How It Works section instead)

---

## 🗂️ Project Structure

```
KaroPitch.jsx        # Single-file React component (entire landing page)
README.md            # This file
```

---

## ▶️ Getting Started

### Prerequisites
- Node.js 16+
- A React project (Create React App, Vite, or Next.js)

### Installation

1. Clone or copy `KaroPitch.jsx` into your project's `src/` directory.

2. Import and use the component:

```jsx
// App.jsx or pages/index.jsx
import KaroPitch from './KaroPitch';

export default function App() {
  return <KaroPitch />;
}
```

3. Start your dev server:

```bash
npm run dev
# or
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Note:** The component uses Google Fonts via `@import` inside a `<style>` tag. Make sure your environment supports this (it works in all standard React setups).

---

## 🎨 Design Decisions

**Color Palette**
- Background: `#0A0A0F` (near-black)
- Primary Accent: `#FF6B35` (saffron-orange)
- Secondary Accent: `#F7931E` (warm amber)
- Text: `#F5F0E8` (warm white)

The palette draws from India's saffron identity and gives the page a warm, bold, startup-energy feel without being generic.

**Typography**
- **Playfair Display** (serif, 700/900) — Headlines. Gives editorial gravitas.
- **DM Sans** (300/400/600) — Body, labels, UI text. Clean and modern.

**Animation Philosophy**
Animations are purposeful, not decorative. The hero process card uses staggered CSS keyframe animations to simulate a "step-by-step journey" feeling. The stats counter only fires once on scroll into view using `IntersectionObserver`.

---

## 📋 Assignment Details

| Field | Info |
|---|---|
| Organization | KaroStartup |
| Project | Karo Pitch Demo Website |
| Tool Used | React (manual, no AI website builder) |
| Deliverable | Single-file JSX landing page |
| Contact | business@karostartup.com |

---

## 🔗 Links

- 🌐 [KaroStartup Website](https://karostartup.com)
- 📸 [Instagram — @karo_startup_](https://www.instagram.com/karo_startup_/)
- 💼 [LinkedIn](https://www.linkedin.com/company/karo-startup/)
- 🐦 [Twitter / X](https://x.com/karo_startup)
- 📘 [Facebook](https://www.facebook.com/karostartup)
- ▶️ [YouTube](https://www.youtube.com/@karostartup/videos)

---

*Built with ❤️ for India's Founders*