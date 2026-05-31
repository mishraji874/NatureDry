import Link from "next/link";
import styles from "@/app/shared-pages.module.css";

export const metadata = {
  title: "Terms of Service",
  description: "Read the terms and conditions for using the NatureDry website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Terms of Service</span>
        </nav>

        <div className={styles.header}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.subtitle}>
            Please read these terms carefully before using our website. Your access
            to and use of the service is conditioned on your acceptance of and
            compliance with these Terms.
          </p>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
          <p className={styles.sectionContent}>
            By accessing or using the NatureDry website and services, you agree to be
            bound by these Terms of Service. If you disagree with any part of the
            terms, you may not access the service.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Use of Website</h2>
          <p className={styles.sectionContent}>
            You agree to use the NatureDry website only for lawful purposes and in
            accordance with these Terms. You are prohibited from using the site in
            any way that violates any applicable federal, state, local, or
            international law or regulation.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Intellectual Property</h2>
          <p className={styles.sectionContent}>
            The content, design, and trademarks on this website are owned by NatureDry
            and are protected by copyright and other intellectual property laws. You
            may not reproduce, distribute, or display any portion of the website
            without our prior written consent.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Product Information and Sales</h2>
          <p className={styles.sectionContent}>
            We strive to ensure that product descriptions and pricing are accurate.
            However, we reserve the right to correct any errors or inaccuracies and
            to change or update information at any time without prior notice. All sales
            are subject to availability.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Links to Other Websites</h2>
          <p className={styles.sectionContent}>
            Our Service may contain links to third-party websites or services that are
            not owned or controlled by NatureDry. We have no control over, and assume
            no responsibility for, the content, privacy policies, or practices of any
            third-party websites or services.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Governing Law</h2>
          <p className={styles.sectionContent}>
            These Terms shall be governed and construed in accordance with the laws of
            the jurisdiction in which NatureDry operates, without regard to its conflict
            of law principles.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Changes to Terms</h2>
          <p className={styles.sectionContent}>
            We reserve the right, at our sole discretion, to modify or replace these
            Terms at any time. If a revision is material, we will try to provide at
            least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>
      </div>
    </main>
  );
}
