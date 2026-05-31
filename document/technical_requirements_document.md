# Technical Requirements Document (TRD)

**Project Name:** Dehydrated Foods E-Commerce Website
**Date:** 2026-05-31
**Version:** 1.0

## 1. System Overview
This document defines the technical architecture, technology stack, and toolset required to support the Dehydrated Foods E-Commerce Website. The system is designed to be a highly performant, scalable, and secure full-stack web application capable of handling high traffic and providing a seamless user experience.

## 2. Technology Stack

### 2.1. Core Application (Frontend & Backend)
- **Framework:** Next.js (App Router format for server-side rendering, static site generation, and optimized routing).
- **Core Language:** TypeScript (for type safety, improved developer experience, and maintainability).
- **Styling:** Vanilla CSS & CSS Modules (ensuring bespoke, performant designs without the overhead of heavy CSS frameworks).

### 2.2. Database & Storage
- **Primary Database:** PostgreSQL (Reliable, ACID-compliant relational testing for orders, users, and complex product relational data).
- **ORM (Object-Relational Mapping):** Prisma (Type-safe database client for efficient querying and schema management).
- **Media Asset Storage:** AWS S3 or Cloudinary (for serving high-resolution product imagery, videos, and user-generated content efficiently).

### 2.3. Authentication
- **Provider:** NextAuth.js (Auth.js) combined with secure, HTTP-only cookie-based sessions.
- **Strategies:** 
  - Credentials (Email/Password with bcrypt hashing).
  - OAuth (Google Provider, Apple Provider).

## 3. System Architecture

The application will follow a **Monolithic Edge Architecture**, leveraging Next.js to provide both the frontend UI and API layer in a single repository, deployed optimally across global edge networks (e.g., via Vercel).

- **Client Layer:** React/Next.js components consuming bespoke CSS.
- **API Layer (Next.js Data Fetching):** Next.js Server Actions and API Routes (`app/api/`) acting as the intermediary between the client and the database.
- **Data Layer:** PostgreSQL database securely accessed via Prisma. Only server components and API routes will communicate with the database directly.

## 4. APIs and External Integrations

### 4.1. Internal APIs (Server Actions / Route Handlers)
- `/api/auth/[...nextauth]`: Handles user authentication flows.
- `/api/products`: Fetch, search, filter, and paginate catalog data.
- `/api/cart`: Sync guest carts to user accounts.
- `/api/checkout`: Initiates secure checkout sessions.
- `/api/orders`: Process new orders and retrieve order history.

### 4.2. External Third-Party APIs
- **Payment Processing:** Stripe API (Stripe Checkout and Webhooks for fulfilling orders and handling payment state securely).
- **Email/Transactional Notifications:** Resend API or SendGrid API (for order confirmations, password resets, and marketing).
- **Image Optimization & CDN:** Cloudinary API (for responsive image delivery and dynamic transformations).
- **Optional - Shipping & Logistics:** Shippo or EasyPost API (to calculate real-time shipping rates and generate labels).

## 5. High-Level Data Model (PostgreSQL)

- **User:** `id`, `name`, `email`, `password_hash`, `role` (ADMIN/USER), `created_at`.
- **Product:** `id`, `name`, `slug`, `description`, `price`, `stock_quantity`, `category_id`, `image_urls`, `nutritional_info`.
- **Category:** `id`, `name`, `slug`, `description`.
- **Order:** `id`, `user_id`, `status` (PENDING, PAID, SHIPPED, DELIVERED), `total_amount`, `stripe_session_id`, `created_at`.
- **OrderItem:** `id`, `order_id`, `product_id`, `quantity`, `price_at_purchase`.

## 6. Security Requirements
- **Data Protection:** All passwords must be hashed using `bcryptjs`.
- **Transport Security:** Strict enforcement of HTTPS/TLS 1.3 across all endpoints.
- **Sanitization:** All user inputs (especially search and checkout fields) must be sanitized to prevent SQL Injection and Cross-Site Scripting (XSS).
- **Rate Limiting:** Implement rate limiting on authentication routes to prevent brute-force attacks.
- **Webhooks:** Securely verify Stripe webhook signatures to prevent spoofed payment confirmations.

## 7. Deployment and DevOps
- **Hosting Provider:** Vercel (Preferred for Next.js out-of-the-box optimization, edge caching, and CI/CD pipelines).
- **Database Hosting:** Supabase, Neon, or Railway for managing the managed PostgreSQL instance.
- **CI/CD:** GitHub Actions (for automated linting, unit testing, and triggering secure deployments).
- **Domain & DNS:** Managed via Vercel for automatic SSL certificate provisioning.

## 8. Development Tools & Standards
- **Version Control:** Git & GitHub.
- **Package Manager:** `npm` or `pnpm`.
- **Code Quality:** ESLint (for static code analysis), Prettier (for formatting), and Huskey (for pre-commit hooks).
- **Local Environment:** Environment variables managed securely via `.env.local` files (never committed to the repository).
