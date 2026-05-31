import { getCatalogFilterMetadata } from "@/lib/products";
import { ProductCatalogClient } from "./product-catalog-client";
import styles from "./page.module.css";

type ProductsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getFirstQueryValue = (
  value: string | string[] | undefined
): string => {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const metadata = await getCatalogFilterMetadata();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroTag}>Product Catalog</span>
          <h1 className={styles.heroTitle}>Discover Premium Dehydrated Foods</h1>
          <p className={styles.heroDescription}>
            Browse our complete collection and refine results by category and
            price range to find the right products faster.
          </p>
        </div>
      </section>

      <section className={styles.catalogSection}>
        <div className="container">
          <ProductCatalogClient
            categories={metadata.categories}
            defaultMinPrice={metadata.minPrice}
            defaultMaxPrice={metadata.maxPrice}
            initialCategory={getFirstQueryValue(params.category)}
            initialMinPrice={getFirstQueryValue(params.minPrice)}
            initialMaxPrice={getFirstQueryValue(params.maxPrice)}
          />
        </div>
      </section>
    </main>
  );
}
