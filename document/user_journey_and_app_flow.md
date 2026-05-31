# App Flow and User Journey Document

**Project Name:** Dehydrated Foods E-Commerce Website
**Date:** 2026-05-31
**Version:** 1.0

## 1. Overview
This document defines the comprehensive user journeys, screen-by-screen flows, and interaction points for the Dehydrated Foods E-Commerce App. It outlines how different users (Guests, Registered Customers, and Admins) navigate through the application.

## 2. Core User Journeys

### 2.1. The "Discovery to Purchase" Journey (Guest / New User)
1. **Entry:** Lands on the **Home Page**.
2. **Discovery:** Scrolls through educational content ("Why Dehydrated Foods?") and clicks on a "Best Sellers" category (e.g., Dehydrated Vegetables).
3. **Browsing:** Arrives at the **Product Listing Page (PLP)**. Filters by "Gluten-Free".
4. **Evaluation:** Clicks on a specific product (e.g., "Dehydrated Carrots") to view the **Product Details Page (PDP)**.
5. **Action:** Reads the rehydration instructions, selects a quantity (e.g., 500g), and clicks "Add to Cart".
6. **Cart Review:** The **Slide-out Cart Drawer** opens. The user reviews the item and clicks "Checkout".
7. **Checkout:** Enters the secure **Checkout Flow** as a guest. Provides shipping details, selects a shipping method, and completes payment via the Stripe integration.
8. **Confirmation:** Redirected to the **Order Confirmation Page** and receives an automatic email receipt.

### 2.2. The "Returning Customer" Journey
1. **Entry & Auth:** Lands on the **Home Page** and clicks "Login" in the navigation bar. Logs in via the **Authentication Modal/Page**.
2. **Dashboard:** Redirected to their **User Dashboard** where they can see past orders.
3. **Re-ordering:** Clicks "Reorder" on a previous order of "Mixed Vegetable Toolkit", instantly adding it to their cart.
4. **Checkout:** Proceeds to the **Checkout Flow**, where their saved address and payment method are auto-filled.
5. **Completion:** Confirms the order effortlessly.

## 3. Screen-by-Screen App Flow & Actions

### 3.1. Home Page (`/`)
- **Primary Goal:** Brand introduction, education, and funneling users to the catalog.
- **Key Actions:**
  - `Click "Shop Now" Hero CTA` -> Routes to Catalog (`/products`).
  - `Click specific Category Card` -> Routes to filtered Catalog (`/products?category=[id]`).
  - `Click Login/Register` -> Opens Auth Flow.

### 3.2. Product Listing Page (PLP) (`/products`)
- **Primary Goal:** Product discovery and filtering.
- **Key Actions:**
  - `Type in Search Bar` -> Dynamically updates product grid via API (`/api/products?search=[query]`).
  - `Toggle Filters (Category, Price, Dietary)` -> Refines results.
  - `Click Product Card` -> Routes to PDP (`/products/[slug]`).
  - `Quick Add to Cart` (hover state) -> Adds default size/quantity to cart and opens Cart Drawer.

### 3.3. Product Details Page (PDP) (`/products/[slug]`)
- **Primary Goal:** Education and conversion.
- **Key Actions:**
  - `Select Variant (Size/Weight)` -> Updates price dynamically on the UI.
  - `View Image Gallery` -> Clicks to zoom or pan high-res images.
  - `Click "Add to Cart"` -> Dispatches cart update action, triggers success toast, opens Cart Drawer.
  - `Click "Add to Wishlist"` -> (If logged in) saves to user profile; (If guest) prompts to login.

### 3.4. Cart Drawer (Slide-out Overlay)
- **Primary Goal:** Order review without losing current page context.
- **Key Actions:**
  - `Increment/Decrement Quantity` -> Instantly updates cart subtotal.
  - `Remove Item` -> Deletes item from cart.
  - `Click "Checkout"` -> Routes to Checkout Flow (`/checkout`).
  - `Click "Continue Shopping"` -> Closes drawer.

### 3.5. Checkout Flow (`/checkout`)
- **Primary Goal:** Frictionless, secure transaction completion.
- **Key Actions:**
  - **Step 1: Contact/Shipping Info** -> Validates email and address format.
  - **Step 2: Shipping Method** -> Fetches/displays shipping rates (Standard, Expedited).
  - **Step 3: Payment (Stripe Elements)** -> Securely inputs card details.
  - `Click "Pay Now"` -> Sends payment intent to Stripe; upon success, routes to `/checkout/success`.

### 3.6. Order Confirmation Page (`/checkout/success`)
- **Primary Goal:** Reassurance and next steps.
- **Key Actions:**
  - `View Order Number & Summary.`
  - `Click "Track Order"` -> Routes to order status page (if logged in).
  - `Click "Return Home"` -> Routes to `/`.

### 3.7. User Dashboard (`/account`)
- **Primary Goal:** User management and post-purchase support.
- **Key Actions:**
  - `View Order History` -> Lists previous transactions with statuses (Processing, Shipped).
  - `Edit Profile` -> Update name, password, or saved addresses.
  - `View Wishlist` -> Access saved items for quick purchase.

### 3.8. Admin Dashboard (`/admin`) *(Protected Route)*
- **Primary Goal:** Manage store inventory, catalog, and fulfilling orders.
- **Key Actions:**
  - **Order Management:** `Update Order Status` (e.g., from "Paid" to "Shipped"), triggering customer emails.
  - **Product Management:** `Create/Edit Product`, uploading image assets, setting inventory levels.
  - **Analytics:** View revenue charts and top-selling items.

## 4. Key Global Components
- **Global Header (Navigation Bar):** Contains Logo, Links (Shop, About, FAQ), Search Icon, Account Icon, and Cart Icon (with dynamic item count badge).
- **Global Footer:** Contains Newsletter Signup, Social Links, Legal Pages (Terms, Privacy), and Customer Support links.
- **Toast Notifications:** Used globally to provide non-intrusive feedback (e.g., "Item added to cart", "Profile updated successfully").

## 5. Next Steps
With the PRD, TRD, and App Flow finalized, the immediate next step is to initiate the Next.js project repository, establish the design system CSS, and begin scaffolding these defined routes and layouts.
