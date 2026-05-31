import Link from "next/link";
import styles from "@/app/shared-pages.module.css";

export const metadata = {
  title: "Returns & Refunds",
  description: "Information on how to return products and our refund policy for NatureDry.",
};

export default function ReturnsRefundsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Returns & Refunds</span>
        </nav>

        <div className={styles.header}>
          <h1 className={styles.title}>Returns & Refunds</h1>
          <p className={styles.subtitle}>
            Your satisfaction is our priority. Learn about our easy return and
            refund process.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Return Policy</h2>
          <p className={styles.sectionContent}>
            We accept returns of unopened products within 30 days of delivery. If you
            are not satisfied with your purchase, please contact our customer support
            team to initiate a return. Please note that return shipping costs are the
            responsibility of the customer, unless the return is due to an error on our
            part (e.g., received a wrong or defective item).
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Refunds</h2>
          <p className={styles.sectionContent}>
            Once your return is received and inspected, we will send you an email to
            notify you that we have received your returned item. We will then process
            your refund. A credit will automatically be applied to your original method
            of payment within a certain number of days, depending on your card issuer's
            policies.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exchanges</h2>
          <p className={styles.sectionContent}>
            If you need to exchange an item, please contact our customer support. We
            will guide you through the process. Exchanges are subject to product
            availability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Damaged or Defective Items</h2>
          <p className={styles.sectionContent}>
            If you received a damaged or defective item, please contact us immediately
            with a photo of the item and your order details. We will arrange for a
            replacement or refund as quickly as possible.
          </p>
        </section>
      </div>
    </main>
  );
}
