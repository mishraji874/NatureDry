import Link from "next/link";
import styles from "@/app/shared-pages.module.css";

export const metadata = {
  title: "About Us",
  description:
    "Learn about NatureDry's mission to provide premium dehydrated foods with maximum nutrition and minimal environmental impact.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </nav>

        <div className={styles.header}>
          <h1 className={styles.title}>About NatureDry</h1>
          <p className={styles.subtitle}>
            Preserving Nature's Goodness, One Dehydrated Bite at a Time
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.sectionContent}>
            NatureDry was founded on a simple belief: nature provides everything we need
            for optimal health, and it shouldn't require preservatives, additives, or
            complex processing to enjoy it. What started as a small family project in 2015
            has grown into a trusted brand serving thousands of health-conscious families
            across the country.
          </p>
          <p className={styles.sectionContent}>
            Our journey began when our founder realized that conventional dried foods often
            lose up to 40% of their nutritional value. That's when we invested in
            cutting-edge low-temperature dehydration technology to preserve up to 97% of
            the original nutrients in every product we make.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.highlight}>
            <p className={styles.highlightText}>
              To make premium, nutrient-rich dehydrated foods accessible to everyone,
              while promoting sustainable farming practices and reducing food waste.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Makes Us Different</h2>
          <ul className={styles.bulletList}>
            <li>
              <strong>Premium Quality:</strong> We source from certified organic farms and
              partner with growers who share our commitment to sustainability.
            </li>
            <li>
              <strong>Advanced Technology:</strong> Our low-temperature dehydration process
              retains 97% of nutrients compared to industry average of 60%.
            </li>
            <li>
              <strong>Zero Additives:</strong> No preservatives, artificial colors, added
              sugars, or mysterious ingredients. Just pure, whole foods.
            </li>
            <li>
              <strong>Transparent Sourcing:</strong> Every product is fully traceable from
              farm to your pantry.
            </li>
            <li>
              <strong>Customer-Centric:</strong> We stand behind every product with a
              100% satisfaction guarantee.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🌱 Sustainability</h3>
              <p className={styles.cardContent}>
                We're committed to reducing our carbon footprint through eco-friendly
                packaging, renewable energy, and supporting regenerative agriculture.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>💪 Health & Wellness</h3>
              <p className={styles.cardContent}>
                Your health is our priority. Every product is nutritionally optimized and
                designed to fit into a clean, healthy lifestyle.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>🤝 Community</h3>
              <p className={styles.cardContent}>
                We partner with local farmers, support food banks, and give back to
                communities that support us.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>✨ Quality</h3>
              <p className={styles.cardContent}>
                Excellence isn't just a goal—it's non-negotiable. Every batch is tested
                and verified for purity and nutritional integrity.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>10,000+</h3>
              <p className={styles.cardContent}>Happy customers nationwide</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>500 Tons</h3>
              <p className={styles.cardContent}>Of food waste prevented through dehydration</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>50+</h3>
              <p className={styles.cardContent}>Premium products in our collection</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>100%</h3>
              <p className={styles.cardContent}>Natural, no artificial anything</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Join the Movement</h2>
          <p className={styles.sectionContent}>
            When you choose NatureDry, you're choosing more than just healthy food—you're
            supporting sustainable farming, reducing plastic waste, and investing in your
            long-term health. Together, we're creating a healthier future.
          </p>
          <div style={{ marginTop: "30px" }}>
            <Link href="/products">
              <button className={styles.submitButton} style={{ cursor: "pointer" }}>
                Explore Our Products →
              </button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
