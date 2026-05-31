import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/products";
import ProductDetailClient from "./product-detail-client";
import styles from "./page.module.css";

type ProductDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const formatNutritionLabel = (label: string): string => {
  return label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) => character.toUpperCase());
};

const formatDate = (value: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(value);
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <ProductDetailClient
          name={product.name}
          shortDescription={product.shortDescription}
          categoryName={product.category.name}
          images={product.images}
          variants={product.variants}
          averageRating={product.averageRating}
          reviewCount={product.reviewCount}
        />

        <section className={styles.descriptionSection}>
          <h2>Product Details</h2>
          <p>{product.detailedDescription}</p>
        </section>

        <section className={styles.metaGrid}>
          <article className={styles.infoCard}>
            <h2>Ingredients</h2>
            <ul className={styles.bulletList}>
              {product.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </article>

          <article className={styles.infoCard}>
            <h2>Nutritional Facts</h2>
            <dl className={styles.nutritionList}>
              {Object.entries(product.nutritionalInfo).map(([label, value]) => (
                <div key={label} className={styles.nutritionRow}>
                  <dt>{formatNutritionLabel(label)}</dt>
                  <dd>{String(value)}</dd>
                </div>
              ))}
            </dl>
          </article>
        </section>

        <section className={styles.reviewSection}>
          <h2>Customer Reviews</h2>
          <p className={styles.reviewSummary}>
            {product.reviewCount > 0
              ? `Average rating ${product.averageRating.toFixed(1)} / 5 from ${
                  product.reviewCount
                } review${product.reviewCount === 1 ? "" : "s"}.`
              : "No approved reviews yet."}
          </p>

          {product.reviewCount > 0 ? (
            <ul className={styles.reviewList}>
              {product.reviews.map((review) => (
                <li key={review.id} className={styles.reviewItem}>
                  <div className={styles.reviewHeader}>
                    <strong>{review.authorName}</strong>
                    <span>{formatDate(review.createdAt)}</span>
                  </div>
                  <div className={styles.reviewStars}>
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      </div>
    </main>
  );
}
