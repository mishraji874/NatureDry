import Link from "next/link";
import styles from "@/app/shared-pages.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Our commitment to protecting your privacy. Read our policy on data collection and usage.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Privacy Policy</span>
        </nav>

        <div className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Your privacy is important to us. This policy outlines how NatureDry
            collects, uses, and protects your personal information.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p className={styles.sectionContent}>
            We may collect personal information such as your name, email address,
            shipping address, and payment details when you place an order or interact
            with our services. We also collect non-personal information like browser
            type and IP address for site optimization.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <p className={styles.sectionContent}>
            Your information is used to process orders, provide customer support,
            improve our website and services, and occasionally send promotional
            materials (if you opt-in). We do not sell or rent your personal information
            to third parties.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Data Security</h2>
          <p className={styles.sectionContent}>
            We implement robust security measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction. All
            sensitive data is transmitted using secure, encrypted connections.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cookies and Tracking</h2>
          <p className={styles.sectionContent}>
            Our website uses cookies to enhance your user experience. You can manage
            cookie preferences through your browser settings. We may also use tracking
            technologies to analyze site traffic and usage patterns.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Third-Party Links</h2>
          <p className={styles.sectionContent}>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to This Policy</h2>
          <p className={styles.sectionContent}>
            We may update this Privacy Policy from time to time. Any changes will be
            posted on this page, and we encourage you to review it periodically.
          </p>
        </section>
      </div>
    </main>
  );
}
