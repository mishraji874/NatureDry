import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Clear existing data
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Create categories
  const vegCategory = await prisma.category.create({
    data: {
      name: "Dehydrated Vegetables",
      slug: "dehydrated-vegetables",
      description: "Premium dehydrated vegetables preserved at peak nutrition",
      imageUrl:
        "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=500&h=500&fit=crop",
    },
  });

  const fruitCategory = await prisma.category.create({
    data: {
      name: "Fruit Powders",
      slug: "fruit-powders",
      description: "Vibrant fruit powders perfect for smoothies and recipes",
      imageUrl:
        "https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=500&fit=crop",
    },
  });

  const kitCategory = await prisma.category.create({
    data: {
      name: "Meal Kits & Mixes",
      slug: "meal-kits-mixes",
      description: "Complete meal solutions and convenient mixes",
      imageUrl:
        "https://images.unsplash.com/photo-1555939594-58d7cb561141?w=500&h=500&fit=crop",
    },
  });

  // Create a test user for reviews
  const testUser = await prisma.user.create({
    data: {
      email: "customer@example.com",
      firstName: "John",
      lastName: "Doe",
      role: "USER",
    },
  });

  // Create products - VEGETABLES
  const carrotProduct = await prisma.product.create({
    data: {
      categoryId: vegCategory.id,
      name: "Organic Dehydrated Carrots",
      slug: "organic-dehydrated-carrots",
      shortDescription:
        "Sweet, crunchy carrot slices perfect for cooking and snacking",
      detailedDescription:
        "Our premium dehydrated carrots are harvested at peak ripeness and dried using low-temperature methods to preserve maximum nutrition. Each bite delivers the natural sweetness and crunch of fresh carrots with a 12-month shelf life. Perfect for soups, stews, salads, or enjoying as a nutritious snack.",
      ingredients: JSON.stringify(["Carrots (100%)"]),
      nutritionalInfo: JSON.stringify({
        servingSize: "1/4 cup (30g)",
        calories: 110,
        protein: "1g",
        carbs: "26g",
        fiber: "4g",
        vitaminA: "184%",
      }),
      isActive: true,
      variants: {
        create: [
          {
            sku: "DEHY-CARR-250",
            weightGrams: 250,
            price: 12.99,
            stockQuantity: 50,
          },
          {
            sku: "DEHY-CARR-500",
            weightGrams: 500,
            price: 22.99,
            stockQuantity: 35,
          },
          {
            sku: "DEHY-CARR-1000",
            weightGrams: 1000,
            price: 39.99,
            stockQuantity: 20,
          },
        ],
      },
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=500&h=500&fit=crop",
            altText: "Dehydrated carrots close-up",
            isPrimary: true,
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=500&h=500&fit=crop",
            altText: "Package of dehydrated carrots",
            isPrimary: false,
            sortOrder: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
            altText: "Dehydrated carrot slices in bowl",
            isPrimary: false,
            sortOrder: 3,
          },
        ],
      },
    },
  });

  const broccoliProduct = await prisma.product.create({
    data: {
      categoryId: vegCategory.id,
      name: "Green Broccoli Florets",
      slug: "green-broccoli-florets",
      shortDescription: "Nutrient-dense broccoli florets for healthy meals",
      detailedDescription:
        "Dehydrated broccoli florets packed with vitamins and minerals. Our broccoli is harvested fresh and dried at low temperatures to preserve the vibrant green color and nutritional content. Rich in vitamin C, fiber, and antioxidants.",
      ingredients: JSON.stringify(["Broccoli (100%)"]),
      nutritionalInfo: JSON.stringify({
        servingSize: "1/4 cup (20g)",
        calories: 70,
        protein: "3g",
        carbs: "13g",
        fiber: "3g",
        vitaminC: "89%",
        vitaminK: "127%",
      }),
      isActive: true,
      variants: {
        create: [
          {
            sku: "DEHY-BROC-200",
            weightGrams: 200,
            price: 14.99,
            stockQuantity: 40,
          },
          {
            sku: "DEHY-BROC-500",
            weightGrams: 500,
            price: 32.99,
            stockQuantity: 25,
          },
        ],
      },
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1577134200900-62fc8a0fb999?w=500&h=500&fit=crop",
            altText: "Fresh broccoli florets",
            isPrimary: true,
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1585518419759-e621a3b2f60f?w=500&h=500&fit=crop",
            altText: "Dehydrated broccoli in container",
            isPrimary: false,
            sortOrder: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1466169754798-aa64e539b123?w=500&h=500&fit=crop",
            altText: "Broccoli nutritional benefits",
            isPrimary: false,
            sortOrder: 3,
          },
        ],
      },
    },
  });

  const tomatoProduct = await prisma.product.create({
    data: {
      categoryId: vegCategory.id,
      name: "Sun-Dried Tomato Flakes",
      slug: "sun-dried-tomato-flakes",
      shortDescription: "Intensely flavored tomato flakes for soups and sauces",
      detailedDescription:
        "Premium sun-dried tomato flakes with concentrated flavor. Perfect for adding depth to soups, pasta sauces, salads, and Mediterranean dishes. Our tomatoes are sustainably grown and dried using traditional methods.",
      ingredients: JSON.stringify(["Tomatoes (100%)"]),
      nutritionalInfo: JSON.stringify({
        servingSize: "2 tbsp (10g)",
        calories: 30,
        protein: "1g",
        carbs: "6g",
        fiber: "1g",
        lycopene: "High",
      }),
      isActive: true,
      variants: {
        create: [
          {
            sku: "DEHY-TOM-150",
            weightGrams: 150,
            price: 9.99,
            stockQuantity: 60,
          },
          {
            sku: "DEHY-TOM-300",
            weightGrams: 300,
            price: 17.99,
            stockQuantity: 45,
          },
        ],
      },
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1555939594-58d7cb561141?w=500&h=500&fit=crop",
            altText: "Sun-dried tomato flakes",
            isPrimary: true,
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1508737011454-12336150fc0f?w=500&h=500&fit=crop",
            altText: "Fresh tomatoes before dehydration",
            isPrimary: false,
            sortOrder: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1566280795387-8ad6b338fea1?w=500&h=500&fit=crop",
            altText: "Tomato flakes in pasta",
            isPrimary: false,
            sortOrder: 3,
          },
        ],
      },
    },
  });

  // Create products - FRUIT POWDERS
  const strawberryProduct = await prisma.product.create({
    data: {
      categoryId: fruitCategory.id,
      name: "Strawberry Powder",
      slug: "strawberry-powder",
      shortDescription: "Pure strawberry powder for smoothies and desserts",
      detailedDescription:
        "100% pure freeze-dried strawberry powder with no added sugar or preservatives. Perfect for smoothies, yogurt, baking, and ice cream. One scoop delivers the flavor of fresh strawberries with enhanced concentration.",
      ingredients: JSON.stringify(["Strawberries (100%)"]),
      nutritionalInfo: JSON.stringify({
        servingSize: "1 tbsp (7g)",
        calories: 25,
        protein: "0g",
        carbs: "6g",
        fiber: "1g",
        vitaminC: "60%",
      }),
      isActive: true,
      variants: {
        create: [
          {
            sku: "POWDER-STRAW-100",
            weightGrams: 100,
            price: 13.99,
            stockQuantity: 55,
          },
          {
            sku: "POWDER-STRAW-250",
            weightGrams: 250,
            price: 29.99,
            stockQuantity: 30,
          },
        ],
      },
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1579033127427-f72793eb921c?w=500&h=500&fit=crop",
            altText: "Strawberry powder in spoon",
            isPrimary: true,
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=500&fit=crop",
            altText: "Strawberry smoothie with powder",
            isPrimary: false,
            sortOrder: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&h=500&fit=crop",
            altText: "Fresh strawberries",
            isPrimary: false,
            sortOrder: 3,
          },
        ],
      },
    },
  });

  const mangoProduct = await prisma.product.create({
    data: {
      categoryId: fruitCategory.id,
      name: "Mango Powder",
      slug: "mango-powder",
      shortDescription: "Tropical mango powder bursting with natural flavor",
      detailedDescription:
        "Delicious freeze-dried mango powder made from ripe tropical mangoes. Packed with vitamin A and natural sweetness, it's perfect for smoothie bowls, teas, and smoothies. No added sugar or preservatives.",
      ingredients: JSON.stringify(["Mangoes (100%)"]),
      nutritionalInfo: JSON.stringify({
        servingSize: "1 tbsp (8g)",
        calories: 30,
        protein: "0g",
        carbs: "7g",
        fiber: "0.5g",
        vitaminA: "54%",
      }),
      isActive: true,
      variants: {
        create: [
          {
            sku: "POWDER-MANGO-100",
            weightGrams: 100,
            price: 14.99,
            stockQuantity: 45,
          },
          {
            sku: "POWDER-MANGO-250",
            weightGrams: 250,
            price: 32.99,
            stockQuantity: 25,
          },
        ],
      },
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1552748814-5ff0651f56c0?w=500&h=500&fit=crop",
            altText: "Mango powder texture",
            isPrimary: true,
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1577082519677-d5c8b1e6e5d5?w=500&h=500&fit=crop",
            altText: "Fresh mangoes",
            isPrimary: false,
            sortOrder: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1505252585461-04db1267ae5b?w=500&h=500&fit=crop",
            altText: "Mango smoothie bowl",
            isPrimary: false,
            sortOrder: 3,
          },
        ],
      },
    },
  });

  const blueberryProduct = await prisma.product.create({
    data: {
      categoryId: fruitCategory.id,
      name: "Blueberry Powder",
      slug: "blueberry-powder",
      shortDescription:
        "Antioxidant-rich blueberry powder for health and flavor",
      detailedDescription:
        "Premium freeze-dried blueberry powder packed with antioxidants and natural sweetness. Perfect for smoothies, oatmeal, yogurt, and baking. Our blueberries are sourced from sustainable farms.",
      ingredients: JSON.stringify(["Blueberries (100%)"]),
      nutritionalInfo: JSON.stringify({
        servingSize: "1 tbsp (7g)",
        calories: 25,
        protein: "0.3g",
        carbs: "6g",
        fiber: "1g",
        antioxidants: "Very High",
      }),
      isActive: true,
      variants: {
        create: [
          {
            sku: "POWDER-BLUE-100",
            weightGrams: 100,
            price: 15.99,
            stockQuantity: 50,
          },
          {
            sku: "POWDER-BLUE-250",
            weightGrams: 250,
            price: 34.99,
            stockQuantity: 28,
          },
        ],
      },
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1555939594-58d7cb561141?w=500&h=500&fit=crop",
            altText: "Blueberry powder",
            isPrimary: true,
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64b73?w=500&h=500&fit=crop",
            altText: "Fresh blueberries",
            isPrimary: false,
            sortOrder: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1484723091739-37ac05292e97?w=500&h=500&fit=crop",
            altText: "Blueberry smoothie",
            isPrimary: false,
            sortOrder: 3,
          },
        ],
      },
    },
  });

  // Create products - MEAL KITS
  const soupKitProduct = await prisma.product.create({
    data: {
      categoryId: kitCategory.id,
      name: "Complete Vegetable Soup Mix",
      slug: "complete-vegetable-soup-mix",
      shortDescription: "All-in-one soup mix ready to simmer",
      detailedDescription:
        "Our Complete Vegetable Soup Mix combines dehydrated carrots, celery, onions, peas, and herbs for a nutritious homemade soup in minutes. Just add water and simmer for a delicious, wholesome meal. Perfect for busy weeknights.",
      ingredients: JSON.stringify([
        "Carrots",
        "Celery",
        "Onions",
        "Peas",
        "Beans",
        "Sea Salt",
        "Herbs & Spices",
      ]),
      nutritionalInfo: JSON.stringify({
        servingSize: "1 cup prepared",
        calories: 45,
        protein: "2g",
        carbs: "9g",
        fiber: "2g",
      }),
      isActive: true,
      variants: {
        create: [
          {
            sku: "KIT-SOUP-300",
            weightGrams: 300,
            price: 8.99,
            stockQuantity: 70,
          },
          {
            sku: "KIT-SOUP-600",
            weightGrams: 600,
            price: 15.99,
            stockQuantity: 50,
          },
        ],
      },
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1547592166-7bffa63cad00?w=500&h=500&fit=crop",
            altText: "Vegetable soup in bowl",
            isPrimary: true,
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1466269541081-a06fcd8eb636?w=500&h=500&fit=crop",
            altText: "Soup mix ingredients",
            isPrimary: false,
            sortOrder: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=500&fit=crop",
            altText: "Hot soup ready to serve",
            isPrimary: false,
            sortOrder: 3,
          },
        ],
      },
    },
  });

  const snackMixProduct = await prisma.product.create({
    data: {
      categoryId: kitCategory.id,
      name: "Superfood Snack Mix",
      slug: "superfood-snack-mix",
      shortDescription: "Nutritious trail mix with dehydrated fruits and nuts",
      detailedDescription:
        "A power-packed snack mix combining dehydrated strawberries, blueberries, coconut chips, and almonds. Perfect for on-the-go energy, workouts, or road trips. No artificial ingredients or excess sugar.",
      ingredients: JSON.stringify([
        "Dehydrated Strawberries",
        "Dehydrated Blueberries",
        "Almonds",
        "Coconut Chips",
        "Pumpkin Seeds",
      ]),
      nutritionalInfo: JSON.stringify({
        servingSize: "1/4 cup (30g)",
        calories: 140,
        protein: "5g",
        carbs: "13g",
        fiber: "3g",
        fat: "7g",
      }),
      isActive: true,
      variants: {
        create: [
          {
            sku: "KIT-SNACK-150",
            weightGrams: 150,
            price: 10.99,
            stockQuantity: 65,
          },
          {
            sku: "KIT-SNACK-400",
            weightGrams: 400,
            price: 26.99,
            stockQuantity: 40,
          },
        ],
      },
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1599599810696-d651d51a3bc8?w=500&h=500&fit=crop",
            altText: "Superfood snack mix",
            isPrimary: true,
            sortOrder: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1441512573154-0e96a52f37f5?w=500&h=500&fit=crop",
            altText: "Snack mix ingredients",
            isPrimary: false,
            sortOrder: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=500&fit=crop",
            altText: "Trail mix on hiking trail",
            isPrimary: false,
            sortOrder: 3,
          },
        ],
      },
    },
  });

  // Create reviews
  await prisma.review.create({
    data: {
      productId: carrotProduct.id,
      userId: testUser.id,
      rating: 5,
      comment: "Amazing quality! The carrots taste fresh and sweet.",
      isApproved: true,
    },
  });

  await prisma.review.create({
    data: {
      productId: strawberryProduct.id,
      userId: testUser.id,
      rating: 5,
      comment:
        "Perfect for my smoothies. No added sugar, just pure strawberry flavor!",
      isApproved: true,
    },
  });

  await prisma.review.create({
    data: {
      productId: soupKitProduct.id,
      userId: testUser.id,
      rating: 4,
      comment: "Great convenience and taste. Makes delicious soup in minutes.",
      isApproved: true,
    },
  });

  console.log("✅ Seed complete!");
  console.log(`
    Created:
    - 3 Categories
    - 8 Products
    - 18 Product Variants
    - 24 Product Images
    - 3 Reviews
  `);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
