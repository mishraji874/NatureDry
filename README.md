# 🥗 NatureDRY: Dehydrated Foods E-Commerce Website

A modern, high-performance **full-stack e-commerce platform** for selling **dehydrated foods, vegetables, fruit powders, meal kits, and survival food products**.

Built using **Next.js App Router, TypeScript, PostgreSQL, Prisma, NextAuth.js, and Stripe**, the platform delivers a premium shopping experience with secure checkout, authentication, product discovery, and powerful admin management.

---

## ✨ Features

### Customer Features

* Modern responsive storefront
* Beautiful homepage with hero banners and featured collections
* Product catalog with:

  * Search functionality
  * Category filtering
  * Price filtering
  * Dietary preference filtering
  * Sorting options
* Product detail pages with:

  * High-resolution image galleries
  * Nutritional information
  * Ingredients list
  * Rehydration instructions
  * Variant selection (weight/size)
  * Reviews & ratings
* Shopping cart drawer
* Secure multi-step checkout
* Guest checkout support
* Stripe payment integration
* User authentication
* User dashboard
* Order history tracking
* Wishlist management
* Address management

### Admin Features

* Protected admin dashboard
* Product CRUD operations
* Inventory management
* Order management
* Customer management
* Sales analytics
* Revenue insights
* Order fulfillment updates

---

## 🛠 Tech Stack

### Frontend

* **Next.js 14+ (App Router)**
* **React**
* **TypeScript**
* **Vanilla CSS**
* **CSS Modules**

### Backend

* **Next.js API Routes**
* **Server Actions**
* **Prisma ORM**

### Database

* **PostgreSQL**

### Authentication

* **NextAuth.js (Auth.js)**
* Credentials Authentication
* OAuth Providers:

  * Google
  * Apple

### Payments

* **Stripe Checkout**
* Stripe Webhooks

### Media Storage

* Cloudinary / AWS S3

### Deployment

* **Vercel**
* Supabase / Neon / Railway

### Development Tools

* Git & GitHub
* ESLint
* Prettier
* Husky
* npm / pnpm

---

## 🏗 System Architecture

```txt
Client (Next.js Frontend)
        │
        ▼
Next.js App Router + Server Actions
        │
        ▼
API Routes (/app/api)
        │
        ▼
Prisma ORM
        │
        ▼
PostgreSQL Database
        │
        ├── Stripe API
        ├── NextAuth.js
        ├── Cloudinary / AWS S3
        └── Email Provider (Resend / SendGrid)
```

---

## 📂 Project Structure

```txt
app/
│
├── api/
│   ├── auth/
│   ├── products/
│   ├── cart/
│   ├── checkout/
│   └── orders/
│
├── products/
│   ├── page.tsx
│   └── [slug]/
│
├── checkout/
├── account/
├── admin/
├── login/
├── register/
└── layout.tsx

components/
│
├── atoms/
├── molecules/
├── organisms/
└── shared/

lib/
│
├── prisma.ts
├── auth.ts
├── stripe.ts
└── utils.ts

prisma/
│
├── schema.prisma
└── seed.ts

styles/
│
├── globals.css
└── variables.css
```

---

## 🗄 Database Schema Overview

### User

```txt
User
├── id
├── email
├── passwordHash
├── firstName
├── lastName
├── role
├── createdAt
└── updatedAt
```

### Product

```txt
Category
└── Product
    ├── ProductVariant
    ├── ProductImage
    └── Review
```

### Orders

```txt
Order
└── OrderItem
    └── ProductVariant
```

### Core Entities

* User
* Address
* Category
* Product
* ProductVariant
* ProductImage
* Order
* OrderItem
* Review

---

## 🔐 Authentication

Implemented using **NextAuth.js**.

Supported strategies:

### Credentials Authentication

* Email / Password
* bcrypt password hashing
* HTTP-only secure sessions

### OAuth Authentication

* Google Provider
* Apple Provider

---

## 💳 Payments

Secure payment processing powered by **Stripe**.

Features:

* Stripe Checkout
* Payment Intents
* Webhook verification
* Order creation after payment confirmation
* Payment status synchronization

---

## 🔌 API Endpoints

### Authentication

```txt
/api/auth/[...nextauth]
```

### Products

```txt
/api/products
```

Supports:

* Pagination
* Search
* Filtering
* Sorting

### Cart

```txt
/api/cart
```

### Checkout

```txt
/api/checkout
```

### Orders

```txt
/api/orders
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/mishraji874/NatureDry.git
```

```bash
cd NatureDry
```

### Install Dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

## ⚙ Environment Variables

Create a `.env.local` file.

```env
DATABASE_URL=

NEXTAUTH_SECRET=
NEXTAUTH_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

APPLE_CLIENT_ID=
APPLE_CLIENT_SECRET=

STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

CLOUDINARY_URL=
```

---

## 🧪 Database Setup

Initialize Prisma:

```bash
npx prisma init
```

Generate client:

```bash
npx prisma generate
```

Push schema:

```bash
npx prisma db push
```

Run migrations:

```bash
npx prisma migrate dev
```

Seed database:

```bash
npm run seed
```

---

## ▶ Running Development Server

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## 👤 User Journey

### Guest Journey

```txt
Homepage
    ↓
Browse Products
    ↓
Product Details
    ↓
Add to Cart
    ↓
Checkout
    ↓
Stripe Payment
    ↓
Order Confirmation
```

### Returning Customer Journey

```txt
Login
    ↓
Dashboard
    ↓
Reorder Product
    ↓
Checkout
    ↓
Payment Success
```

### Admin Journey

```txt
Admin Dashboard
    ↓
Manage Products
    ↓
Manage Orders
    ↓
Inventory Updates
    ↓
Analytics
```

---

## 📈 Development Roadmap

### Phase 1 — Foundation

* Next.js initialization
* TypeScript setup
* Design system
* Global layouts

### Phase 2 — Database Layer

* Prisma setup
* PostgreSQL connection
* Schema migration
* Seed data

### Phase 3 — UI Components

* Buttons
* Inputs
* Cards
* Header
* Footer

### Phase 4 — Product Discovery

* Homepage
* Catalog
* Product pages

### Phase 5 — Cart System

* Global state
* Cart drawer
* Quantity management

### Phase 6 — Checkout

* Shipping forms
* Stripe integration
* Order creation

### Phase 7 — Authentication

* Login
* Register
* Dashboard

### Phase 8 — Admin System

* Admin routes
* Product management
* Analytics

### Phase 9 — Optimization

* SEO
* Performance audits
* Micro-animations
* Testing

---

## 🔒 Security

Security measures include:

* HTTPS/TLS enforcement
* bcrypt password hashing
* XSS prevention
* SQL Injection prevention
* Input sanitization
* Authentication route rate limiting
* Stripe webhook signature verification
* Secure HTTP-only cookies

---

## 📦 Deployment

### Recommended Stack

**Frontend Hosting**

* Vercel

**Database Hosting**

* Supabase
* Neon
* Railway

### CI/CD

GitHub Actions:

* Linting
* Testing
* Automated deployments

---

## 🔮 Future Enhancements

* Subscribe & Save subscriptions
* Community recipes platform
* Loyalty rewards system
* Wholesale / B2B portal
* Advanced analytics
* AI product recommendations

---

## 🤝 Contributing

Contributions are welcome.

Steps:

1. Fork repository
2. Create feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push branch

```bash
git push origin feature/amazing-feature
```

5. Open Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Developed with ❤️ using **Next.js, TypeScript, Prisma, PostgreSQL, and Stripe**.

## 📬 Contact
For any inquiries or support, reach out via:

🌐 Portfolio: https://adityamishra-dev.vercel.app/

🐦 Twitter: https://x.com/mishraji874_eth

🔗 LinkedIn: https://www.linkedin.com/in/aditya-mishra-a76237226/