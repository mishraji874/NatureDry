import Link from "next/link";
import styles from "@/app/shared-pages.module.css";

export const metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions about NatureDry products and services.",
};

export default function FAQPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>FAQ</span>
        </nav>

        <div className={styles.header}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Your questions answered. Find quick solutions to common queries about our
            dehydrated foods.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ordering & Payments</h2>
          <p className={styles.sectionContent}>
            <strong>Q: How can I place an order?</strong>
            <br />
            A: Simply browse our products, add your desired items to the cart, and
            proceed to checkout. You can create an account or check out as a guest.
          </p>
          <p className={styles.sectionContent}>
            <strong>Q: What payment methods do you accept?</strong>
            <br />
            A: We accept all major credit cards (Visa, Mastercard, American Express)
            and PayPal.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Shipping & Delivery</h2>
          <p className={styles.sectionContent}>
            <strong>Q: How long does shipping take?</strong>
            <br />
            A: Standard shipping usually takes 3-5 business days. Expedited options
            are available at checkout. For more details, please visit our{" "}
            <Link href="/shipping-info" style={{ color: "var(--color-primary)", textDecoration: "none" }}>
              Shipping Information
            </Link>{" "}
            page.
          </p>
          <p className={styles.sectionContent}>
            <strong>Q: Do you ship internationally?</strong>
            <br />
            A: Currently, we only ship within the United States. We hope to expand
            our shipping destinations in the future.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Returns & Refunds</h2>
          <p className={styles.sectionContent}>
            <strong>Q: What is your return policy?</strong>
            <br />
            A: We offer a 30-day return policy on unopened products. Please see our{" "}
            <Link href="/returns-refunds" style={{ color: "var(--color-primary)", textDecoration: "none" }}>
              Returns & Refunds
            </Link>{" "}
            page for full details.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Product Information</h2>
          <p className={styles.sectionContent}>
            <strong>Q: Are your products organic?</strong>
            <br />
            A: We prioritize sourcing high-quality ingredients, and many of our
            products are made with organic ingredients. Specific details can be found
            on each product's page.
          </p>
          <p className={styles.sectionContent}>
            <strong>Q: How should I store your dehydrated foods?</strong>
            <br />
            A: Store in a cool, dry place, away from direct sunlight. Ensure the
            packaging is sealed to maintain freshness.
          </p>
        </section>
      </div>
    </main>
  );
}
