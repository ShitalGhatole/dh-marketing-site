# 🚀 HeroPulse — B2B Marketing Platform

A modern, high-performance, and fully accessible B2B marketing website built with **Next.js 14 App Router**, **TypeScript**, and **SCSS Modules**. Designed with clean architecture, structured metadata (JSON-LD), and decoupled content for effortless maintainability.

![Lighthouse Score](https://img.shields.io/badge/Lighthouse-97%2F100-brightgreen?style=for-the-badge&logo=googlechrome)
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/SCSS_Modules-CC6699?style=for-the-badge&logo=sass&logoColor=white)

---

## 🌟 Live Demo

🔗 **Live URL:** [dh-marketing-site.vercel.app](https://dh-marketing-site.vercel.app/)  
📄 **Verification Credit:** Visible credit line in the footer linking to [digitalheroesco.com](https://digitalheroesco.com).

---

## ✨ Features & Technical Highlights

### 📁 1. Decoupled Architecture & Content Management
- **Zero Page Builders:** Built from scratch using modern web engineering principles.
- **Content Separation:** Page content is stored in clean TS data files (`app/content/*.ts`), allowing non-technical marketing teams to update copy, features, pricing tiers, and FAQs without touching JSX or styling logic.
- **Shared UI Library:** Reusable components like `Header`, `Footer`, `FeatureCard`, `FaqSection`, and `ContactForm`.

### ♿ 2. Accessibility & Semantics (A11y)
- **Semantic HTML5:** Strict structural layout utilizing `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, and `<form>`.
- **Keyboard Navigation:** Includes a hidden *"Skip to main content"* link for keyboard and screen reader users.
- **Accessible Controls:** Mobile drawer navigation with dynamic `aria-expanded` attributes, accessible `<details>`/`<summary>` accordion FAQs, and proper `<label htmlFor="...">` associations across all inputs.
- **Focus Ring Management:** High-contrast, custom `:focus-visible` outlines on all interactive elements.

### 🔍 3. Structured Data (JSON-LD) & OpenGraph
- **Organization Schema:** Embedded on the Homepage (`Organization`).
- **Product Schema:** Rich snippets for application features and pricing tiers on the Product page (`SoftwareApplication` / `Offer`).
- **Dynamic FAQ Schema:** Dynamic `FAQPage` schema injected by the reusable `FaqSection` component.
- **Meta & Open Graph:** Comprehensive social preview cards enabled via Next.js Metadata API.

### ⚡ 4. Core Web Vitals & Performance
- **Mobile Lighthouse Score:** **97/100 Performance** | **100/100 Accessibility** | **100/100 Best Practices** | **100/100 SEO**.
- **CSS Modules:** Zero utility bloat—scoped CSS prevents style pollution and optimizes critical CSS delivery.
- **Server-Side Rendering (SSR):** Optimized hydration and minimal client-side JavaScript execution.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Framework** | [Next.js 16.2.11](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | SCSS / Sass Modules (`.module.scss`) |
| **Icons & Media** | Inline SVGs (Zero third-party icon bundle footprint) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 📂 Project Structure

```text
├── app/
│   ├── components/       # Shared UI & layout components
│   │   ├── layout/       # Header (Mobile Navigation), Footer
│   │   └── ui/           # ContactForm, FaqSection, FeatureCard
│   ├── content/          # Content files (home.ts, product.ts, pricing.ts, contact.ts)
│   ├── contact/          # Contact Page (/contact)
│   ├── pricing/          # Pricing Page (/pricing)
│   ├── product/          # Product Page (/product)
│   ├── globals.scss      # Reset styles & CSS variables
│   ├── layout.tsx        # Root layout, Skip Link, and global metadata
│   └── page.tsx          # Home Page (/)
├── public/               # Static assets & favicon
└── README.md