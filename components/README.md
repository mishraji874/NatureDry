# Component Library - Phase 3: Atoms & Molecules

## Overview

This directory contains the core UI component library for the dehydrated food e-commerce application, organized using the **Atomic Design** methodology.

- **Atoms** (`components/atoms/`): Basic, reusable UI elements
- **Molecules** (`components/molecules/`): Combinations of atoms that form simple components

All components are built with **TypeScript**, styled with **CSS Modules**, and follow **WCAG AA accessibility standards**.

---

## Quick Start

### Importing Components

```typescript
// Import from atoms
import { Button, Input, Label, Badge, Rating } from '@/components/atoms';

// Import from molecules
import { ProductCard, StarRating, Toast, ToastContainer } from '@/components/molecules';
```

---

## Atoms

### Button
Universal button component with multiple variants and sizes.

**Props:**
- `variant`: `'primary'` | `'secondary'` | `'ghost'` (default: `'primary'`)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `fullWidth`: boolean
- `isLoading`: boolean
- `icon`: React.ReactNode
- `disabled`: boolean
- `children`: React.ReactNode (required)

**Usage:**
```typescript
<Button variant="primary" size="md">
  Add to Cart
</Button>

<Button variant="secondary" icon={<CheckIcon />}>
  Confirm
</Button>

<Button variant="ghost" disabled>
  Unavailable
</Button>
```

**Features:**
- ✓ Three variants: solid (primary), outline (secondary), text-only (ghost)
- ✓ Hover/active animations with elevation
- ✓ Loading state support
- ✓ Optional icon support
- ✓ 44px+ touch target on mobile
- ✓ Full keyboard navigation support

---

### Input
Accessible text input with validation states and help text.

**Props:**
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `error`: boolean
- `errorMessage`: string
- `helpText`: string
- `icon`: React.ReactNode
- `label`: string
- `required`: boolean
- `disabled`: boolean
- Plus all standard HTML input attributes

**Usage:**
```typescript
<Input
  label="Email"
  type="email"
  placeholder="your@email.com"
  required
  error={emailError}
  errorMessage="Invalid email format"
/>

<Input
  label="Password"
  type="password"
  helpText="Must be at least 8 characters"
/>
```

**Features:**
- ✓ Integrated label with required indicator
- ✓ Error and help text support
- ✓ Optional right-side icon
- ✓ Autofill styling for browsers
- ✓ 44px+ minimum height on mobile
- ✓ Focus ring with color change

---

### Label
Accessible form label with optional required indicator and tooltip.

**Props:**
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `required`: boolean
- `tooltip`: string (optional help tooltip)
- `children`: React.ReactNode (required)

**Usage:**
```typescript
<Label htmlFor="name" required>
  Full Name
</Label>

<Label tooltip="This helps us personalize your experience">
  Preferences
</Label>
```

**Features:**
- ✓ Hover to show optional tooltip
- ✓ Required indicator with red asterisk
- ✓ Keyboard accessible (Tab to focus)
- ✓ Smooth color transitions

---

### Badge
Compact label component for tags, status indicators, and sale badges.

**Props:**
- `variant`: `'default'` | `'primary'` | `'secondary'` | `'success'` | `'warning'` | `'error'` | `'info'` (default: `'default'`)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `style`: `'solid'` | `'outline'` (default: `'solid'`)
- `icon`: React.ReactNode
- `dismissible`: boolean
- `onDismiss`: () => void

**Usage:**
```typescript
<Badge variant="primary">New</Badge>

<Badge variant="secondary" style="outline">20% OFF</Badge>

<Badge variant="success" icon={<CheckIcon />}>
  In Stock
</Badge>

<Badge variant="error" dismissible onDismiss={handleDismiss}>
  Error: Item unavailable
</Badge>
```

**Features:**
- ✓ 7 color variants for different use cases
- ✓ Solid and outline styles
- ✓ Optional icon support
- ✓ Dismissible with animation
- ✓ Perfect for product labels and status indicators

---

### Rating
Star rating display with optional interactivity.

**Props:**
- `value`: number (0-5) (required)
- `max`: number (default: 5)
- `size`: `'sm'` | `'md'` | `'lg'` (default: `'md'`)
- `variant`: `'primary'` | `'secondary'` | `'warning'` (default: `'primary'`)
- `interactive`: boolean (default: false)
- `onChange`: (newRating: number) => void
- `count`: number (number of reviews)
- `showValue`: boolean (show numeric value)

**Usage:**
```typescript
// Display-only rating
<Rating value={4.5} count={124} />

// Interactive rating
<Rating
  value={myRating}
  interactive
  onChange={(newRating) => submitRating(newRating)}
  showValue
/>

// With metadata
<Rating 
  value={4.2}
  count={89}
  showValue
  variant="secondary"
/>
```

**Features:**
- ✓ Half-star support via partial fills
- ✓ Keyboard navigation (arrow keys)
- ✓ Hover effects for interactivity
- ✓ Optional review count display
- ✓ Multiple color variants
- ✓ 44px+ touch targets

---

## Molecules

### ProductCard
Composite component for displaying product information in a card layout.

**Props:**
- `id`: string (required)
- `name`: string (required)
- `image`: string (required)
- `imageAlt`: string (required)
- `price`: number (required)
- `originalPrice`: number (optional)
- `rating`: number (required)
- `reviewCount`: number (required)
- `saleLabel`: string (optional, e.g., "20% OFF")
- `description`: string (optional)
- `inStock`: boolean (default: true)
- `onClick`: (productId: string) => void
- `onAddToCart`: (productId: string) => void

**Usage:**
```typescript
<ProductCard
  id="prod-123"
  name="Organic Dried Mango"
  image="/products/mango.jpg"
  imageAlt="Dried mango slices"
  price={12.99}
  originalPrice={16.99}
  rating={4.5}
  reviewCount={87}
  saleLabel="23% OFF"
  description="Premium sun-dried mango slices"
  inStock={true}
  onClick={(id) => router.push(`/product/${id}`)}
  onAddToCart={(id) => addToCart(id)}
/>
```

**Features:**
- ✓ Product image with hover zoom effect
- ✓ Integrated price display with discount calculation
- ✓ Star rating with review count
- ✓ Sale badge with animation
- ✓ Stock status overlay when unavailable
- ✓ Responsive grid layout
- ✓ Smooth hover animations
- ✓ Keyboard accessible

---

### StarRating
Enhanced rating display with breakdown and interactive features.

**Props:**
- `value`: number (0-5) (required)
- `count`: number (total reviews)
- `variant`: `'primary'` | `'secondary'` | `'warning'`
- `interactive`: boolean
- `onChange`: (rating: number) => void
- `breakdown`: Array<{ stars: number; count: number }> (optional)
- `label`: string (optional description)
- `size`: `'sm'` | `'md'` | `'lg'`

**Usage:**
```typescript
// Product page rating display
<StarRating
  value={4.2}
  count={156}
  label="Customer Reviews"
  breakdown={[
    { stars: 5, count: 89 },
    { stars: 4, count: 45 },
    { stars: 3, count: 15 },
    { stars: 2, count: 5 },
    { stars: 1, count: 2 },
  ]}
/>

// Interactive rating submission
<StarRating
  value={userRating}
  interactive
  onChange={(rating) => submitUserRating(rating)}
  label="Rate this product"
/>
```

**Features:**
- ✓ Large numeric display (X.X / 5)
- ✓ Rating breakdown with percentage bars
- ✓ Interactive mode for user submissions
- ✓ Success feedback animation
- ✓ "Based on N reviews" text
- ✓ Multiple size variants
- ✓ Fully responsive

---

### Toast
Temporary notification component with auto-dismiss and actions.

**Props:**
- `type`: `'success'` | `'error'` | `'warning'` | `'info'` (default: `'info'`)
- `message`: string (required)
- `description`: string (optional)
- `isOpen`: boolean (default: true)
- `duration`: number (auto-dismiss ms, default: 4000)
- `onDismiss`: () => void
- `actionLabel`: string (optional button text)
- `onAction`: () => void
- `position`: `'top-right'` | `'top-left'` | `'bottom-right'` | `'bottom-left'` | `'top-center'`
- `icon`: React.ReactNode

**Usage:**
```typescript
// Simple success toast
<Toast
  type="success"
  message="Product added to cart"
  duration={3000}
/>

// Error with action
<Toast
  type="error"
  message="Failed to process payment"
  description="Your card was declined"
  actionLabel="Retry"
  onAction={handleRetry}
/>

// With custom icon
<Toast
  type="info"
  message="New sale started!"
  icon={<SaleIcon />}
  duration={5000}
/>
```

### ToastContainer
Container for managing multiple toast notifications.

**Usage:**
```typescript
const [toasts, setToasts] = useState<ToastItem[]>([]);

const showToast = (message: string, type: ToastType = 'info') => {
  const id = Math.random().toString();
  setToasts(prev => [...prev, { id, message, type }]);
};

const dismissToast = (id: string) => {
  setToasts(prev => prev.filter(t => t.id !== id));
};

return (
  <>
    <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    <Button onClick={() => showToast('Saved successfully!', 'success')}>
      Save
    </Button>
  </>
);
```

**Features:**
- ✓ 4 status types with unique colors
- ✓ Auto-dismiss with configurable duration
- ✓ Optional action button
- ✓ Slide-in/out animations
- ✓ ARIA live region for screen readers
- ✓ 5 positioning options
- ✓ Mobile-responsive (full-width on small screens)
- ✓ Manual dismiss button

---

## Design System Integration

All components use the design tokens from `app/globals.css`:

### Colors
- Primary: `#2F855A` (green)
- Secondary: `#F97316` (orange)
- Accent: `#9D174D` (purple)
- Background: `#FAFAF8`
- Surface: `#FFFFFF`
- Text: `#1A1A1A`, `#64748B`, `#94A3B8`

### Typography
- Headings: Outfit font family
- Body: Inter font family
- Scale: xs (12px) to 6xl (60px)

### Spacing
- 8px base grid: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px

### Borders
- Radius: 8px (sm), 12px (md), 16px (lg), 24px (xl), 9999px (full)
- Colors: Primary borders, light borders, subtle dividers

### Shadows
- xs: `0 1px 3px rgba(0,0,0,0.04)`
- sm: `0 2px 8px rgba(0,0,0,0.04)`
- md: `0 4px 20px rgba(0,0,0,0.04)`
- lg: `0 10px 30px rgba(0,0,0,0.08)`
- xl: `0 20px 50px rgba(0,0,0,0.12)`

### Animations
- Duration: 150ms (fast), 250ms (normal), 400ms (slow)
- Easing: cubic-bezier(0.16, 1, 0.3, 1) out, cubic-bezier(0.4, 0, 0.2, 1) smooth

---

## Accessibility (WCAG AA)

All components include:

✓ **Semantic HTML** - Proper heading hierarchy, form associations
✓ **Keyboard Navigation** - Full keyboard support including Tab, Enter, Escape, Arrow keys
✓ **Focus Management** - Visible focus indicators with 2px solid outlines
✓ **Color Contrast** - Minimum 4.5:1 ratio for text
✓ **ARIA Labels** - Descriptive labels for screen readers
✓ **Touch Targets** - Minimum 44x44px on mobile devices
✓ **Live Regions** - Toast notifications use `aria-live="polite"`
✓ **Disabled States** - Proper styling and interaction blocking

---

## Responsive Design

All components are fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px – 1024px
- **Desktop**: > 1024px

Key responsive features:
- Buttons scale down on mobile while maintaining 44px height
- Inputs maintain 44px height for touch targets
- Star ratings use relative sizing
- Toast notifications go full-width on mobile
- Product cards adjust image aspect ratios on smaller screens

---

## Micro-Animations

Components include smooth, purposeful animations:

- **Hover**: Subtle scale and shadow changes
- **Active**: Press-down effect with reduced shadow
- **Focus**: Focus ring appears with smooth transition
- **Loading**: Optional loading state indication
- **Entry/Exit**: Fade-in and slide animations

---

## TypeScript Support

All components are fully typed with:
- Component props interfaces
- React.ForwardRef support for ref forwarding
- Proper event type definitions
- TypeScript strict mode compatible

---

## File Structure

```
components/
├── atoms/
│   ├── Button.tsx
│   ├── Button.module.css
│   ├── Input.tsx
│   ├── Input.module.css
│   ├── Label.tsx
│   ├── Label.module.css
│   ├── Badge.tsx
│   ├── Badge.module.css
│   ├── Rating.tsx
│   ├── Rating.module.css
│   └── index.ts
│
└── molecules/
    ├── ProductCard.tsx
    ├── ProductCard.module.css
    ├── StarRating.tsx
    ├── StarRating.module.css
    ├── Toast.tsx
    ├── Toast.module.css
    └── index.ts
```

---

## Usage Examples

### Form Section with All Components

```typescript
import { Button, Input, Label, Badge } from '@/components/atoms';

export function ProductSearchForm() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  return (
    <form onSubmit={handleSearch}>
      <Label htmlFor="search" required tooltip="Search by product name">
        Search Products
      </Label>

      <Input
        id="search"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        error={!!error}
        errorMessage={error}
        placeholder="e.g., dried mango..."
        label="Search"
      />

      <div>
        <Badge variant="info">Tip: Use keywords like "organic" or "vegan"</Badge>
      </div>

      <Button type="submit" fullWidth>
        Search
      </Button>
    </form>
  );
}
```

### Product Grid with Molecules

```typescript
import { ProductCard } from '@/components/molecules';

export function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          onClick={() => router.push(`/product/${product.id}`)}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
```

### Toast Notifications

```typescript
import { ToastContainer, Toast } from '@/components/molecules';

export function CheckoutFlow() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showNotification = (msg: string, type: 'success' | 'error') => {
    setToasts(prev => [...prev, {
      id: Date.now().toString(),
      message: msg,
      type,
      duration: 4000,
    }]);
  };

  return (
    <>
      <ToastContainer 
        toasts={toasts}
        onDismiss={(id) => setToasts(prev => prev.filter(t => t.id !== id))}
      />
      {/* Checkout content */}
    </>
  );
}
```

---

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari (iOS): Latest 2 versions
- Chrome Android: Latest version

---

## Next Steps

Future phases will include:
- **Phase 4: Organisms** - Complex components combining multiple molecules
- **Phase 5: Templates** - Page-level layouts
- **Phase 6: Storybook** - Component documentation and testing sandbox

---

## Contributing

When adding new components:

1. Follow the Atomic Design principles
2. Include TypeScript interfaces for all props
3. Use CSS Modules for styling
4. Ensure WCAG AA compliance
5. Support keyboard navigation
6. Maintain 44px+ touch targets
7. Add comprehensive JSDoc comments
8. Test across breakpoints

---

## Questions?

Refer to:
- Design System: `app/globals.css`
- Project Rules: `AGENTS.md`
- Next.js Docs: `node_modules/next/dist/docs/`
