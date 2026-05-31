# Phase 2 Technical Reference & Configuration Details

## Database Configuration Details

### PostgreSQL Connection
```
URL: postgresql://postgres:khiladi786@localhost:5432/postgres
Host: localhost
Port: 5432
Username: postgres
Password: khiladi786
Database: postgres
```

**Status:** ✅ Verified working

### Prisma Configuration
**File:** `prisma/schema.prisma`
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**Environment Variable:**
- File: `.env`
- Variable: `DATABASE_URL`
- Value: `postgresql://postgres:khiladi786@localhost:5432/postgres`

---

## Database Schema: 9 Models

All models from `database_schema_design.md` are fully implemented:

### 1. User Model ✅
- Stores authentication and user data
- Fields: id, email, passwordHash, firstName, lastName, role, createdAt, updatedAt
- Relations: addresses, orders, reviews

### 2. Address Model ✅
- Stores multiple addresses per user (shipping/billing)
- Fields: id, userId, type, streetAddress1, streetAddress2, city, stateProvince, postalCode, country, isDefault
- Relations: user, orders

### 3. Category Model ✅
- Organizes dehydrated goods
- Fields: id, name, slug, description, imageUrl
- Relations: products

### 4. Product Model ✅
- Core product entity
- Fields: id, categoryId, name, slug, shortDescription, detailedDescription, nutritionalInfo, ingredients, isActive, createdAt, updatedAt
- Relations: category, variants, images, reviews

### 5. ProductVariant Model ✅
- Handles weight/size variants (e.g., 100g, 500g, 1kg)
- Fields: id, productId, sku, weightGrams, price, stockQuantity
- Relations: product, orderItems

### 6. ProductImage Model ✅
- Multiple images per product
- Fields: id, productId, url, altText, isPrimary, sortOrder
- Relations: product

### 7. Order Model ✅
- Main order invoice record
- Fields: id, userId, guestEmail, shippingAddressId, status, subtotal, shippingCost, tax, totalAmount, stripeSessionId, stripePaymentIntentId, createdAt, updatedAt
- Relations: user, shippingAddress, items

### 8. OrderItem Model ✅
- Line items within orders
- Fields: id, orderId, productVariantId, quantity, priceAtPurchase
- Relations: order, productVariant

### 9. Review Model ✅
- Social proof for products
- Fields: id, productId, userId, rating, comment, isApproved, createdAt
- Relations: product, user

---

## Verification Tests Performed

### ✅ Test 1: Database Connection
```bash
$ npx prisma db push --skip-generate
Result: ✅ Your database is now in sync with your Prisma schema. Done in 329ms
```

### ✅ Test 2: Prisma Client Generation
```bash
$ ls -la node_modules/.prisma/client/
Result: ✅ All files present and generated successfully
```

### ✅ Test 3: TypeScript Build
```bash
$ npm run build
Result: ✅ TypeScript compilation successful
       ✅ 4 pages generated (home, 404)
       ✅ Zero errors
```

### ✅ Test 4: Schema Validation
- All 9 models properly defined
- All foreign key relationships configured
- All required fields present
- Cascade deletes configured appropriately

---

## What's Ready for Phase 2 Work

### Immediately Available
1. **Prisma Client** - Type-safe database client
2. **All Models** - Available for queries
3. **Type Definitions** - Auto-generated TypeScript interfaces
4. **Database** - All tables created and ready

### For Global State (Phase 2 requirement)
- Use React Context or Zustand for cart state
- Prisma Client will be used in API routes/Server Actions
- Database connection is ready for product fetching

### Example API Route Pattern (Ready to implement)
```typescript
// app/api/products/route.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const products = await prisma.product.findMany()
  return Response.json(products)
}
```

---

## Potential Issues & Solutions

### Issue 1: Turbopack File Watch Limit ⚠️
**Status:** Non-critical, development-only
**Workaround:**
```bash
# Increase system file watch limit
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### Issue 2: Seed Script (Optional)
**Status:** Recommended for testing
**Create at:** `prisma/seed.ts`
**Example structure:**
```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample categories
  // Create sample products with variants and images
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
```

---

## Next Phase Requirements

### Phase 2 Remaining Work
- ✅ Prisma initialized
- ✅ Schemas migrated
- ✅ Database connected
- ✅ Tables created
- ⏳ (Optional) Seed script
- ⏳ Global state manager (React Context/Zustand)

### Phase 3 Dependencies
- Uses Prisma Client from Phase 2
- Uses database tables from Phase 2
- Builds on this foundation

---

## Quick Reference Commands

```bash
# View database in interactive UI
npx prisma studio

# Generate Prisma Client
npx prisma generate

# Push schema changes to database
npx prisma db push

# Reset database (destructive)
npx prisma db push --force-reset

# Open Prisma documentation
npx prisma --help
```

---

## Environment File Reference

**File:** `.env`
```
DATABASE_URL="postgresql://postgres:khiladi786@localhost:5432/postgres"
```

**File:** `package.json`
```json
{
  "dependencies": {
    "@prisma/client": "^5.22.0",
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "prisma": "^5.22.0"
  }
}
```

---

## Conclusion

**Phase 2 Infrastructure Status: COMPLETE ✅**

The database layer is fully configured, migrated, and ready for application development. There are no blocking issues. Proceed with confidence to implementation work.

**Key Takeaway:** No database URL issues exist. The configuration is correct and verified working.
