import Link from "next/link";
import styles from "@/app/shared-pages.module.css";

export const metadata = {
  title: "Shipping Information",
  description: "Details about shipping options, costs, and delivery times for NatureDry products.",
};

export default function ShippingInfoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Shipping Information</span>
        </nav>

        <div className={styles.header}>
          <h1 className={styles.title}>Shipping Information</h1>
          <p className={styles.subtitle}>
            Get your favorite dehydrated foods delivered right to your doorstep.
            Learn more about our shipping process.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Shipping Methods</h2>
          <p className={styles.sectionContent}>
            We offer several shipping options to meet your needs:
            <br />
            <strong>Standard Shipping:</strong> Typically delivered within 3-5
            business days.
            <br />
            <strong>Expedited Shipping:</strong> Delivered within 1-3 business
            days. Available at an additional cost.
            <br />
            <strong>Priority Shipping:</strong> Next-day or 2-day delivery for
            urgent orders.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Shipping Costs</h2>
          <p className={styles.sectionContent}>
            Shipping costs are calculated based on the weight of your order and your
            location. You can view the estimated shipping cost in your cart before
            completing your purchase. We also offer free standard shipping on orders
            over $75.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Order Processing</h2>
          <p className={styles.sectionContent}>
            Orders are typically processed within 1-2 business days. Orders placed on
            weekends or holidays will be processed on the next business day. You will
            receive a shipping confirmation email with tracking information once your
            order has been dispatched.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>International Shipping</h2>
          <p className={styles.sectionContent}>
            At this time, we only ship within the United States. We are working on
            expanding our shipping capabilities to serve international customers in the
            future.
          </p>
        </section>
      </div>
    </main>
  );
}
