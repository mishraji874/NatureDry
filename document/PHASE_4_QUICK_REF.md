# Phase 4 Quick Reference

## 🎯 What's New (Phase 4.1 - Organisms)

### 4 Core Organisms Built
1. **Header** - Sticky navigation with cart
2. **Footer** - Company info and links
3. **ProductGrid** - Flexible product display
4. **ProductFilters** - Category/price filtering

---

## 📦 Quick Stats

| Metric | Value |
|--------|-------|
| TypeScript Code | 578 lines |
| CSS Code | 816 lines |
| Total Code | 1,394 lines |
| Number of Components | 4 |
| Documentation | 548 lines |

---

## 🚀 Quick Start

### Import All Organisms
```typescript
import { 
  Header, 
  Footer, 
  ProductGrid, 
  ProductFilters 
} from "@/components/organisms";
```

### Basic Layout
```typescript
export default function Page() {
  return (
    <>
      <Header cartItemCount={3} onCartClick={() => {}} />
      <main>{/* Content */}</main>
      <Footer />
    </>
  );
}
```

---

## 1️⃣ Header Component

### Props
```typescript
{
  cartItemCount?: number;      // Badge count
  onCartClick?: () => void;    // Click handler
}
```

### Example
```typescript
<Header 
  cartItemCount={cartItems.length}
  onCartClick={openCart}
/>
```

### Features
- ✅ Sticky positioning
- ✅ Mobile hamburger menu
- ✅ Cart badge animation
- ✅ Responsive (3 breakpoints)

### File Location
`components/organisms/Header.tsx`

---

## 2️⃣ Footer Component

### Props
```typescript
{
  companyName?: string;         // Default: "NatureDry"
  companyDescription?: string;  // Brand description
  socialLinks?: Array<{         // Social media links
    label: string;
    href: string;
    emoji: string;
  }>;
}
```

### Example
```typescript
<Footer 
  companyName="NatureDry"
  companyDescription="Premium dehydrated foods..."
  socialLinks={[
    { label: "Instagram", href: "#", emoji: "📷" },
    { label: "Twitter", href: "#", emoji: "🐦" }
  ]}
/>
```

### Features
- ✅ Multi-column grid
- ✅ Dynamic social links
- ✅ Auto copyright year
- ✅ Responsive layout

### File Location
`components/organisms/Footer.tsx`

---

## 3️⃣ ProductGrid Component

### Props
```typescript
{
  products: GridProduct[];                // Product array
  isLoading?: boolean;                    // Loading state
  errorMessage?: string | null;           // Error text
  emptyMessage?: string;                  // Empty state text
  onAddToCart?: (productId: string) => void;
}
```

### Example
```typescript
<ProductGrid
  products={products}
  isLoading={isLoading}
  errorMessage={error}
  emptyMessage="No products found"
  onAddToCart={handleAdd}
/>
```

### Features
- ✅ Responsive grid (4→3→2 columns)
- ✅ Loading spinner
- ✅ Error state
- ✅ Empty state
- ✅ Image zoom on hover
- ✅ Stock badges

### GridProduct Interface
```typescript
{
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  categoryName: string;
  primaryImage: {
    url: string;
    altText: string;
  } | null;
  minPrice: number;
  maxPrice: number;
  reviewCount: number;
  averageRating: number;
  inStock: boolean;
  isOnSale?: boolean;
  originalPrice?: number;
}
```

### File Location
`components/organisms/ProductGrid.tsx`

---

## 4️⃣ ProductFilters Component

### Props
```typescript
{
  categories: FilterCategory[];           // Available categories
  minPriceDefault: number;                // Min price range
  maxPriceDefault: number;                // Max price range
  initialCategory?: string;               // Pre-selected category
  initialMinPrice?: string;               // Initial min value
  initialMaxPrice?: string;               // Initial max value
  onApplyFilters: (filters) => void;     // Apply handler
  onResetFilters?: () => void;            // Reset handler
  isLoading?: boolean;                    // Loading state
}
```

### Example
```typescript
<ProductFilters
  categories={categories}
  minPriceDefault={5.99}
  maxPriceDefault={99.99}
  onApplyFilters={(filters) => setFilters(filters)}
  onResetFilters={() => resetFilters()}
/>
```

### Features
- ✅ Category dropdown
- ✅ Min/Max price inputs
- ✅ Price range display
- ✅ Input validation
- ✅ Apply/Reset buttons
- ✅ Disabled state support

### FilterCategory Interface
```typescript
{
  id: string;
  name: string;
  slug: string;
}
```

### File Location
`components/organisms/ProductFilters.tsx`

---

## 🎨 Styling Reference

### CSS Classes (Header)
```css
.header           /* Root container */
.logo             /* Brand logo */
.nav              /* Navigation menu */
.navLink          /* Nav links */
.cartButton       /* Cart icon */
.cartBadge        /* Notification badge */
.menuToggle       /* Mobile menu button */
```

### CSS Classes (Footer)
```css
.footer           /* Root container */
.footerGrid       /* Multi-column layout */
.footerColumn     /* Individual column */
.footerLinks      /* Link list */
.socialLink       /* Social media buttons */
```

### CSS Classes (ProductGrid)
```css
.grid             /* Grid container */
.productCard      /* Individual product card */
.imageWrapper     /* Image section */
.cardContent      /* Text content area */
.badgeGroup       /* Stock/Sale badges */
.spinner          /* Loading indicator */
```

### CSS Classes (ProductFilters)
```css
.filters          /* Form container */
.filterGroup      /* Individual filter */
.select           /* Category dropdown */
.priceRangeInfo   /* Price range display */
.filterActions    /* Button group */
```

---

## 🔄 Integration Patterns

### Pattern 1: Typical Page Layout
```typescript
<Header cartItemCount={3} />
<main>
  <aside>
    <ProductFilters {...filterProps} />
  </aside>
  <section>
    <ProductGrid {...gridProps} />
  </section>
</main>
<Footer />
```

### Pattern 2: Page With Filters
```typescript
const [filters, setFilters] = useState({});
const [products, setProducts] = useState([]);

const handleApplyFilters = (newFilters) => {
  setFilters(newFilters);
  // Fetch products with filters
};

<ProductFilters 
  {...filterProps}
  onApplyFilters={handleApplyFilters}
/>
<ProductGrid products={products} />
```

---

## ♿ Accessibility Highlights

✅ **All Organisms:**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- 4.5:1 color contrast
- 44px touch targets

---

## 📱 Responsive Breakpoints

```css
Mobile:   < 640px
Tablet:   640px - 1024px
Desktop:  > 1024px
```

---

## 🎬 Animation Features

### Header
- Nav underline slide
- Cart badge pulse
- Mobile menu transition

### ProductGrid
- Card elevation on hover
- Image 1.05x zoom
- Loading spinner
- Badge pulse

### ProductFilters
- Select focus shadow
- Button transitions
- Text color changes

---

## 📁 File Structure

```
components/organisms/
├── Header.tsx               (101 lines)
├── Header.module.css        (229 lines)
├── Footer.tsx               (125 lines)
├── Footer.module.css        (181 lines)
├── ProductGrid.tsx          (175 lines)
├── ProductGrid.module.css   (263 lines)
├── ProductFilters.tsx       (177 lines)
├── ProductFilters.module.css (143 lines)
├── index.ts                 (11 lines)
└── README.md                (548 lines)
```

---

## ✅ Quality Checklist

- ✅ TypeScript Strict Mode
- ✅ WCAG AA Accessibility
- ✅ Mobile Responsive
- ✅ Smooth Animations
- ✅ CSS Modules
- ✅ Production Ready
- ✅ Well Documented
- ✅ Zero `any` types

---

## 🚀 Next Phase (Phase 4.2)

Remaining organisms to build:
1. ImageGallery
2. VariantSelector
3. ReviewSection
4. FormGroup
5. Modal
6. CartDrawer
7. SearchBar
8. Breadcrumbs

---

## 📞 Need More Info?

See full documentation:
- `components/organisms/README.md` - Complete guide
- `document/PHASE_4_COMPLETION.md` - Detailed report
- Individual component files - JSDoc comments

---

## 🎯 Key Integration Steps

1. Import organisms: `import { Header, Footer } from "@/components/organisms"`
2. Add to layout/page components
3. Pass required props
4. Wire up event handlers
5. Style with CSS Modules

---

**Phase 4.1 Status:** ✅ COMPLETE & PRODUCTION READY
