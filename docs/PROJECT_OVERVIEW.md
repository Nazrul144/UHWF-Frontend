# Uttarchar Human Welfare Foundation — Project Overview & Feature Specification

**Document Version:** 1.0  
**Last Updated:** June 13, 2026  
**Status:** Pre-Development — Awaiting Scope Confirmation  
**Organization:** Uttarchar Human Welfare Foundation (UHWF)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Goals & Objectives](#2-goals--objectives)
3. [Target Users & Roles](#3-target-users--roles)
4. [Technology Stack](#4-technology-stack)
5. [Design Direction](#5-design-direction)
6. [Architecture Overview](#6-architecture-overview)
7. [Pages & Sections](#7-pages--sections)
8. [Complete Feature List](#8-complete-feature-list)
9. [Recommended Additional Features](#9-recommended-additional-features)
10. [Project Folder Structure](#10-project-folder-structure)
11. [Development Phases](#11-development-phases)
12. [Architectural Warnings & Considerations](#12-architectural-warnings--considerations)
13. [Open Decision Points](#13-open-decision-points)

---

## 1. Project Overview

**Uttarchar Human Welfare Foundation (UHWF)** is a professional, modern, and feature-rich web platform built for a Bangladesh-based non-profit human welfare organization. The application serves three primary purposes:

1. **Public presence** — A bilingual (Bangla/English), emotionally engaging website that communicates the foundation's mission, team, work, and impact to the general public.
2. **Member services** — A secure member portal where registered foundation members can manage their profile, view donation history, and receive digital receipts and notifications.
3. **Administrative operations** — A protected admin panel where foundation leadership and cashiers can manage members, record donations, publish content, and monitor organizational health through analytics.

The platform is designed with scalability in mind: new roles, pages, notification channels, and payment integrations can be added without major refactoring. It reflects the values of trust, compassion, and community through its visual design, accessibility standards, and transparent donation tracking.

### What Makes This Project Distinct

- **Bilingual-first** — Full Bangla and English support across all public and authenticated experiences.
- **Donation accountability** — Cash donations recorded by cashiers trigger automatic digital receipts via WhatsApp and in-app notifications.
- **Role-aware** — Four distinct access levels (Admin, Cashier, Member, Public) govern what each user can see and do.
- **Non-profit appropriate** — Warm, trustworthy design; immutable donation records; audit trails; and privacy-conscious handling of member data.

---

## 2. Goals & Objectives

| Goal | Description |
|------|-------------|
| **Build public trust** | Showcase mission, impact statistics, team transparency, and project outcomes. |
| **Streamline donations** | Enable cashiers to record donations quickly and automatically notify members with proof of payment. |
| **Empower members** | Give members self-service access to profiles, donation history, and receipts. |
| **Simplify administration** | Centralize member approval, content management, and analytics in one admin panel. |
| **Support growth** | Architect the codebase so online payments, new branches, and additional roles can be added later. |

---

## 3. Target Users & Roles

| Role | Access Level | Primary Responsibilities |
|------|--------------|--------------------------|
| **Public** | No login required | Browse website, view team/work, submit contact form, optionally request membership. |
| **Member** | Authenticated | Manage profile, view donation history and receipts, receive notifications. |
| **Cashier** | Authenticated (limited) | Record cash donations against members; view donation history with filters. |
| **Admin** | Authenticated (full) | All cashier capabilities plus member management, content CMS, settings, analytics, and role assignment. |

### Executive Committee Roles (Public Team Page)

The Our Team page displays 11 executive committee members with standard Bangladeshi organizational titles:

- Sobapoti (President)
- Vice Sobapoti (Vice-President)
- Sadaron Sompadok (General Secretary)
- Chashier (Treasurer)
- Sangothonik Sompadok (Organizing Secretary)
- Plus 6 additional designated roles

Additionally, 6 **Advisors** and a paginated/searchable list of **General Members** are displayed.

---

## 4. Technology Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| Next.js 14+ (App Router) | Server-rendered public pages, client dashboards, routing |
| TypeScript | Type safety across the application |
| Tailwind CSS | Utility-first styling, responsive design |
| shadcn/ui | Accessible, themeable UI component library |
| Framer Motion | Page transitions, hero animations, scroll-triggered counters |
| @formkit/auto-animate | List/table animations, notification dropdowns |
| next-intl | Bangla/English internationalization |
| next-themes | Light, dark, and custom theme switching |
| Recharts | Admin dashboard donation charts |
| TanStack Query | Server state and data fetching |
| React Hook Form + Zod | Form handling and validation |

### Backend

| Technology | Purpose |
|------------|---------|
| Node.js + Express.js + TypeScript | REST API, business logic, integrations |
| MongoDB + Mongoose | Document database for members, donations, content |
| Auth.js (NextAuth v5) | Authentication on Next.js; JWT validation on Express |
| Twilio WhatsApp API | Donation receipt and notification delivery |
| Resend / Nodemailer | Email notifications (nice-to-have) |
| BullMQ + Redis | Background jobs for receipts/notifications (future) |

### Infrastructure & Services

| Service | Purpose |
|---------|---------|
| Vercel | Next.js frontend hosting |
| Railway / Render / DigitalOcean | Express API hosting |
| MongoDB Atlas | Managed database |
| Cloudinary / AWS S3 | Image and media storage |
| Leaflet + OpenStreetMap | Interactive foundation location map (recommended) |
| Sentry | Error monitoring |

---

## 5. Design Direction

### Visual Identity

The UI should feel **modern, clean, accessible, and emotionally engaging** — appropriate for a human welfare non-profit.

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|------------|-----------|-------|
| Primary | `#2D6A4F` (Forest Green) | `#52B788` | CTAs, links, trust signals |
| Secondary | `#1B4965` (Deep Blue) | `#62B6CB` | Headers, navigation |
| Accent | `#D4A373` (Warm Sand) | `#E9C46A` | Highlights, donation CTAs |
| Surface | `#F8F9FA` | `#1A1D21` | Page backgrounds |
| Text | `#212529` | `#E9ECEF` | Body copy |

### Custom Themes (Nice-to-Have)

- **Shonar Bangla** — Gold accent (`#F4A261`) with deeper green primary
- **River** — Teal primary (`#2A9D8F`) with slate blue secondary

### Typography

| Role | English Font | Bangla Font |
|------|--------------|-------------|
| Headings | Plus Jakarta Sans / Outfit | Noto Sans Bengali |
| Body | Inter / Source Sans 3 | Noto Sans Bengali |
| Accent / Quotes | Lora (serif) | Noto Serif Bengali |

### UX Principles

- Mobile-first, fully responsive across all breakpoints
- WCAG 2.1 AA accessibility baseline
- Scroll-triggered animated impact counters on homepage
- Framer Motion parallax hero with staggered text reveal (recommended over heavy video sliders)

---

## 6. Architecture Overview

### Recommended Structure: Monorepo

A single repository with separate `apps/` (web + API) and `packages/` (shared types, validation) keeps frontend and backend in sync.

```
┌─────────────────────────────────────────────────────────────┐
│                    UHWF Platform Architecture                │
├─────────────────────────────────────────────────────────────┤
│  Presentation Layer (Next.js App Router)                     │
│    • Server Components → Public SEO pages                    │
│    • Client Components → Dashboards, forms, animations       │
│    • Auth.js → Login, session, role claims                   │
├─────────────────────────────────────────────────────────────┤
│  API Layer (Express.js + TypeScript)                       │
│    • Module-based: auth | members | donations | content      │
│    • Middleware: authenticate → rbac → validate → handler    │
├─────────────────────────────────────────────────────────────┤
│  Data Layer (MongoDB)                                        │
│    • Collections: users, members, donations, notifications,  │
│      content, audit_logs                                     │
├─────────────────────────────────────────────────────────────┤
│  Integrations                                                │
│    • Twilio WhatsApp → Donation receipts                     │
│    • Cloudinary/S3 → Media storage                           │
│    • Resend → Email notifications                            │
└─────────────────────────────────────────────────────────────┘
```

### Authentication Flow

1. User logs in via Auth.js on the Next.js application.
2. JWT/session token includes role claims (Admin, Cashier, Member).
3. Express API middleware verifies the token on every protected request.
4. RBAC is enforced at the API layer — not only by hiding UI elements.

---

## 7. Pages & Sections

### Public Pages (No Login Required)

| Page | Key Sections |
|------|--------------|
| **Home / Landing** | Navbar, animated hero, mission & vision, services, impact statistics, testimonials, latest news/events, FAQ accordion, interactive map, footer |
| **About** | Foundation history, mission, vision, values |
| **Our Team** | Advisors (6), Executive Committee (11), General Members (paginated/searchable) |
| **Our Work** | Gallery, completed projects, ongoing initiatives |
| **Contact** | Contact form, phone, email, map embed |

### Authenticated Pages

| Area | Key Sections |
|------|--------------|
| **Member Dashboard** | Profile editor, donation history, receipt viewer, notification center |
| **Admin Panel** | Analytics dashboard, member management, donation management, content CMS, settings |

---

## 8. Complete Feature List

Features are categorized by priority. Build Must-Have features first; Nice-to-Have and Advanced features can follow in later phases.

---

### 🔴 Must-Have (MVP — Core Functionality)

#### Public Website

| ID | Feature | Description |
|----|---------|-------------|
| M-01 | **Responsive Layout Shell** | Sticky navbar with mobile hamburger menu, footer with social links, quick links, and contact information. Foundation for all public pages. |
| M-02 | **Home / Landing Page** | Hero section, mission & vision, services overview, animated impact statistics, testimonials, latest news/events preview, FAQ accordion, map embed, and call-to-action sections. |
| M-03 | **About Page** | Foundation history, mission, vision, and core values with full bilingual content support. |
| M-04 | **Our Team Page** | Advisors section (6 members), Executive Committee section (11 members with Bangladeshi role titles), and paginated or searchable General Members list. Each person displayed in a card with name, photo, contact, role, and short bio. |
| M-05 | **Our Work Page** | Project showcase gallery, completed work highlights, and ongoing initiatives section. |
| M-06 | **Contact Page** | Contact form (name, email, phone, message), displayed phone and email, and embedded interactive map. |
| M-07 | **Interactive Map** | Google Maps or Leaflet map showing the foundation's physical location with marker, info popup, and directions link. |

#### Authentication & Access Control

| ID | Feature | Description |
|----|---------|-------------|
| M-08 | **Authentication System** | Secure login, logout, and password reset for Admin, Cashier, and Member roles. Session management with Auth.js. |
| M-09 | **Role-Based Access Control (RBAC)** | Route guards and API middleware enforcing four roles: Admin (full access), Cashier (donation access), Member (personal dashboard), Public (no login). |
| M-10 | **Member Registration & Approval** | New members can register or be invited; Admin approves or rejects before dashboard access is granted. |

#### Member Dashboard

| ID | Feature | Description |
|----|---------|-------------|
| M-11 | **Profile Management** | Members can view and edit their name, email, phone, photo, and address from a personal dashboard. |
| M-12 | **Donation History** | Personal donation list with month-wise breakdown, running totals, and individual transaction details. |
| M-13 | **Digital Receipt Viewer** | Members can view and download donation receipts generated when a cashier records their donation. |

#### Admin Panel

| ID | Feature | Description |
|----|---------|-------------|
| M-14 | **Admin Dashboard** | Overview with monthly donation bar/line chart, total member count, active/inactive member stats, and recent activity feed. |
| M-15 | **Member Management** | View all members, approve/reject new requests, deactivate or remove members, and assign roles (Admin, Cashier, Member). |
| M-16 | **Donation Recording** | Cashier can manually record cash donations against a member with amount, date, payment method, and optional notes. |
| M-17 | **Donation History & Filters** | Admin and cashier view of all donations with filters by member, month, and amount range. |
| M-18 | **Basic Content Management** | Admin can add, edit, and delete news/events, team/advisor profiles, and gallery images without developer involvement. |

#### Notifications

| ID | Feature | Description |
|----|---------|-------------|
| M-19 | **In-App Notifications** | Real-time or near-real-time alerts in the member dashboard when donations are recorded or membership status changes. |
| M-20 | **WhatsApp Donation Alerts** | Automatic WhatsApp message sent to the member via Twilio when a cashier records their donation, including receipt details or link. |

#### Core UX & Internationalization

| ID | Feature | Description |
|----|---------|-------------|
| M-21 | **Bangla + English i18n** | Full language toggle using next-intl. All static content and CMS-managed content available in both languages. |
| M-22 | **Light + Dark Themes** | Theme switcher in the navbar using next-themes and CSS custom properties. |
| M-23 | **Animated Impact Counters** | Scroll-triggered number animations on the homepage statistics section using Framer Motion. |
| M-24 | **Accessibility Baseline** | WCAG 2.1 AA compliance: keyboard navigation, focus indicators, alt text, semantic HTML, and sufficient color contrast. |

---

### 🟡 Nice-to-Have (Enhances Experience — Post-MVP)

| ID | Feature | Description |
|----|---------|-------------|
| N-01 | **Two Additional Custom Themes** | Beyond light/dark: "Shonar Bangla" (warm gold/green) and "River" (teal/slate) themes switchable from the navbar. |
| N-02 | **Cinematic Hero Animation** | Framer Motion parallax hero with staggered text reveal; optional subtle muted video background lazy-loaded for performance. |
| N-03 | **Testimonials Carousel** | Auto-playing, swipeable testimonial slider with pause-on-hover and touch support on mobile. |
| N-04 | **FAQ Search** | Client-side search/filter within the FAQ accordion so visitors can find answers quickly. |
| N-05 | **PDF Receipt Generation** | Server-side styled PDF receipt (via @react-pdf/renderer or Puppeteer) attached to WhatsApp messages and available for download. |
| N-06 | **Email Notifications** | Parallel notification channel to WhatsApp for receipts and membership updates using Resend or Nodemailer. |
| N-07 | **Advanced Donation Analytics** | Year-over-year comparison charts, anonymized top donor leaderboard, and CSV export for reporting. |
| N-08 | **Activity Audit Log** | Immutable log of who recorded donations, changed roles, edited content, and approved members — with timestamps. |
| N-09 | **Image Optimization Pipeline** | Next.js Image component integrated with Cloudinary or S3 for automatic resize, WebP conversion, and CDN delivery. |
| N-10 | **SEO & Open Graph** | Per-page meta tags, Organization/NGO structured data (JSON-LD), XML sitemap, and robots.txt. |
| N-11 | **Contact Form Spam Protection** | Honeypot field, rate limiting, and optional Google reCAPTCHA v3 on the contact form. |
| N-12 | **Notification Template Management** | Admin-editable WhatsApp and email templates with placeholders (e.g., `{{name}}`, `{{amount}}`, `{{receiptUrl}}`). |
| N-13 | **Member Photo Upload** | Cropped avatar upload with client-side validation for file size and format. |
| N-14 | **Global Site Search** | Search across news, projects, and (for admins) member records from a unified search bar. |
| N-15 | **Loading & Empty States** | Skeleton loaders, illustrated empty states, and toast feedback notifications using Sonner. |
| N-16 | **PWA Basics** | Installable progressive web app with offline fallback page for core public content. |
| N-17 | **Print-Friendly Receipt** | CSS print stylesheet so members can print a clean physical copy of their donation receipt. |
| N-18 | **Bangla Numeral Display** | Option to render amounts and dates using Bangla numerals (০১২৩৪৫৬৭৮৯) alongside Bengali text. |
| N-19 | **Content Draft/Publish Workflow** | News, events, and team updates saved as drafts before being published to the public site. |
| N-20 | **Admin Two-Factor Authentication** | TOTP-based 2FA for Admin and Cashier accounts handling financial data. |

---

### 🟢 Advanced / Future (Scale & Differentiation)

| ID | Feature | Description |
|----|---------|-------------|
| A-01 | **Online Payment Gateway** | Integration with bKash, Nagad, SSLCommerz, or Stripe for digital donations with automatic receipt generation. |
| A-02 | **Recurring Donations** | Monthly pledge tracking, automated reminder notifications, and recurring payment management. |
| A-03 | **Event RSVP & Calendar** | Public event registration, iCal/Google Calendar export, and attendance tracking for foundation events. |
| A-04 | **Volunteer Management** | Volunteer signup form, shift scheduling, hour logging, and volunteer recognition on the public site. |
| A-05 | **Project Funding Tracker** | Per-project donation goal setting with public progress bars and project-specific donation routing. |
| A-06 | **Document Portal** | Member-only or role-gated access to bylaws, AGM minutes, audit reports, and official documents. |
| A-07 | **SMS Fallback Notifications** | Twilio SMS as a fallback channel when WhatsApp delivery fails or member has no WhatsApp. |
| A-08 | **Multi-Branch Support** | Multiple foundation office locations, each with branch-specific admins and localized content. |
| A-09 | **Advanced RBAC Permissions Matrix** | Granular permissions beyond four roles — e.g., "Content Editor" who can manage news but not donations. |
| A-10 | **Real-Time Admin Dashboard** | WebSocket or Server-Sent Events live donation ticker and activity stream on the admin dashboard. |
| A-11 | **AI Chatbot (Bangla/English)** | FAQ assistant chatbot answering common questions about donations, membership, and foundation activities. |
| A-12 | **Impact Storytelling Module** | Before/after photo pairs and beneficiary stories with consent tracking and editorial workflow. |
| A-13 | **Annual Report Generator** | Auto-compile yearly statistics, charts, and narrative summaries into a downloadable annual PDF report. |
| A-14 | **Accounting Integration Export** | Export donation and member data to Excel or Tally-compatible formats for treasurer workflows. |
| A-15 | **Facebook Messenger Notifications** | Messenger API as an additional notification channel alongside WhatsApp and email. |
| A-16 | **Public Transparency Dashboard** | Aggregated, anonymized donation statistics publicly visible to build donor trust and accountability. |
| A-17 | **Lottie Animations** | Designer-exported Lottie JSON animations for hero illustrations, empty states, and loading indicators. |
| A-18 | **GSAP Advanced Animations** | Complex scroll-driven animations for marketing pages if Framer Motion limits are reached. |

---

## 9. Recommended Additional Features

These features were not in the original scope but are strongly recommended for a production non-profit platform:

| ID | Feature | Description |
|----|---------|-------------|
| R-01 | **Immutable Donation Ledger** | Donations are never hard-deleted. Soft-delete only, with full change history. Critical for financial accountability. |
| R-02 | **Sequential Receipt Numbering** | Auto-generated receipt IDs (e.g., `UHWF-2026-00421`) for legal documentation and tax reference. |
| R-03 | **Data Export & Backup** | Scheduled MongoDB backups and admin-triggered CSV/Excel export of members and donations for AGM reporting. |
| R-04 | **Privacy & Consent Management** | Privacy policy, terms of service, cookie notice, and explicit opt-in consent for WhatsApp/SMS communications. |
| R-05 | **Health Check Endpoint** | `/health` API endpoint for uptime monitoring and deployment verification. |
| R-06 | **Staging Environment** | Separate MongoDB instance and Twilio sandbox for testing before production WhatsApp template approval. |
| R-07 | **Rate Limiting & API Security** | Express rate limits, Helmet security headers, CORS whitelist, and input sanitization on all endpoints. |
| R-08 | **Error Monitoring** | Sentry integration on both Next.js and Express for production error tracking and alerting. |
| R-09 | **Atomic Receipt ID Generation** | MongoDB atomic counter to prevent duplicate receipt IDs when multiple cashiers record donations simultaneously. |
| R-10 | **Member Contact Privacy Controls** | Configurable visibility for phone/email on the public Team page (full, partial, or hidden). |

---

## 10. Project Folder Structure

### Monorepo Layout (Recommended)

```
uhwf-platform/
├── apps/
│   ├── web/                              # Next.js 14+ (App Router)
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── [locale]/             # next-intl locale routing (/en, /bn)
│   │   │   │   │   ├── (public)/         # Home, About, Team, Work, Contact
│   │   │   │   │   ├── (auth)/           # Login, Register, Forgot Password
│   │   │   │   │   ├── (member)/         # Member dashboard (protected)
│   │   │   │   │   └── (admin)/          # Admin panel (protected)
│   │   │   │   ├── api/                  # BFF routes (optional proxy to Express)
│   │   │   │   └── layout.tsx
│   │   │   ├── components/
│   │   │   │   ├── ui/                   # shadcn/ui primitives
│   │   │   │   ├── layout/               # Navbar, Footer, Sidebar
│   │   │   │   ├── public/               # Hero, Stats, Testimonials, FAQ, Map
│   │   │   │   ├── admin/                # Charts, data tables, admin forms
│   │   │   │   └── shared/               # ThemeToggle, LangSwitcher, Map
│   │   │   ├── hooks/
│   │   │   ├── lib/                      # API client, auth helpers, utils
│   │   │   ├── providers/                # ThemeProvider, QueryProvider
│   │   │   └── styles/                   # globals.css, theme CSS variables
│   │   ├── messages/                     # en.json, bn.json translation files
│   │   ├── public/                       # Static assets, favicon, OG images
│   │   └── next.config.ts
│   │
│   └── api/                              # Express.js + TypeScript
│       ├── src/
│       │   ├── config/                   # Environment, DB, Twilio, CORS config
│       │   ├── modules/
│       │   │   ├── auth/                 # Login, register, password reset
│       │   │   ├── users/                # User account management
│       │   │   ├── members/              # Member profiles, approval workflow
│       │   │   ├── donations/            # Record, list, filter donations
│       │   │   ├── notifications/        # In-app, WhatsApp, email dispatch
│       │   │   ├── content/              # News, events, gallery, team CMS
│       │   │   └── settings/             # Site settings, templates, themes
│       │   ├── middleware/               # auth, rbac, validate, rateLimit
│       │   ├── jobs/                     # Receipt generation, notification queue
│       │   ├── utils/
│       │   └── index.ts                  # Express app entry point
│       └── tests/
│
├── packages/
│   ├── shared-types/                     # TypeScript interfaces shared FE + BE
│   ├── validation/                       # Zod schemas shared FE + BE
│   └── constants/                        # Role enums, receipt prefixes, config
│
├── docker/
│   ├── docker-compose.yml                # MongoDB, Redis, API, Web services
│   └── Dockerfile.api
│
├── docs/
│   ├── PROJECT_OVERVIEW.md               # This document
│   ├── architecture.md
│   ├── api-spec.md
│   └── deployment.md
│
├── .env.example
├── turbo.json
├── package.json
└── README.md
```

---

## 11. Development Phases

| Phase | Estimated Duration | Scope |
|-------|-------------------|-------|
| **Phase 1 — Public Website** | 3–4 weeks | All 5 public pages, i18n (Bangla/English), light/dark themes, contact form, interactive map, basic CMS for content |
| **Phase 2 — Auth & Members** | 2–3 weeks | Authentication, RBAC, member registration and approval workflow, member profile dashboard |
| **Phase 3 — Donations** | 2–3 weeks | Donation recording by cashier, donation history with filters, in-app notifications, digital receipt viewer |
| **Phase 4 — Integrations** | 1–2 weeks | WhatsApp notifications via Twilio, PDF receipt generation, admin analytics dashboard, email notifications |
| **Phase 5 — Enhancement** | Ongoing | Custom themes, advanced analytics, audit logs, PWA, SEO, payment gateway (if approved) |

---

## 12. Architectural Warnings & Considerations

### Critical — Address Before Development Begins

| # | Warning | Recommended Action |
|---|---------|-------------------|
| 1 | **WhatsApp template approval takes time** | Submit Twilio/Meta message templates early. Use email/SMS as fallback during approval period. |
| 2 | **Donation data must be immutable** | Never hard-delete donations. Use soft-delete with audit trail. Amount and date changes must be logged. |
| 3 | **RBAC must be enforced on the API** | Hiding admin navigation is not security. Every Express route needs role-checking middleware. |
| 4 | **Member PII is sensitive** | Phone numbers, addresses, and donation amounts require careful access control and privacy policy compliance. |
| 5 | **Receipt legal requirements** | Confirm with foundation leadership what fields a valid digital receipt must contain (registration number, signatory, etc.). |
| 6 | **Do not store images in MongoDB** | Use Cloudinary or S3 from day one for team photos, gallery images, and member avatars. |
| 7 | **Bangla content workflow** | Plan CMS data model with `{ en: string, bn: string }` fields. Assign a content owner for translations. |
| 8 | **Concurrent donation entry** | Multiple cashiers recording simultaneously requires atomic receipt ID generation to prevent duplicates. |
| 9 | **Next.js version compatibility** | Pin Next.js version and read official docs before implementation — APIs may differ from training data. |
| 10 | **Member contact visibility** | Decide early whether team page shows full phone numbers publicly or uses partial masking. |

### Scalability Patterns to Adopt Early

- **Module-based API structure** — Each domain (auth, members, donations, content) in its own folder with routes, controllers, services, and models.
- **Shared Zod validation** — Single schema definition used by both frontend forms and backend API validation.
- **Event-driven notifications** — When a donation is created, emit an event that triggers receipt generation and WhatsApp/in-app notification dispatch.
- **Environment separation** — Development, staging, and production each with their own MongoDB database and Twilio sandbox/production credentials.

---

## 13. Open Decision Points

The following decisions should be confirmed before development begins:

| # | Decision | Options | Recommendation |
|---|----------|---------|----------------|
| 1 | Repository structure | Monorepo vs. separate frontend/backend repos | **Monorepo** (Turborepo) |
| 2 | Authentication provider | Auth.js vs. Clerk vs. raw JWT | **Auth.js (NextAuth v5)** — free, self-hosted |
| 3 | Map provider | Leaflet (free) vs. Google Maps (paid) | **Leaflet + OpenStreetMap** for cost efficiency |
| 4 | MVP scope | Phase 1–3 first, or include WhatsApp in MVP? | **Phase 1–3 first**, WhatsApp in Phase 4 |
| 5 | Member contact on Team page | Full public display vs. partially hidden | **Confirm with foundation leadership** |
| 6 | Online payment gateway | Include in MVP or defer to Advanced phase? | **Defer to Advanced phase** |
| 7 | Hosting budget | Affects map, media CDN, and notification service choices | **Confirm monthly budget** |
| 8 | Content translation ownership | Who writes and maintains Bangla content? | **Assign content owner before Phase 1** |

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | June 13, 2026 | Architecture Review | Initial project overview and complete feature specification |

---

*This document is the single source of truth for the UHWF platform scope. All development work should reference this document. Updates require version increment and changelog entry.*
