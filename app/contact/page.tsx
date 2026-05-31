import Link from "next/link";
import styles from "@/app/shared-pages.module.css";

export const metadata = {
  title: "Contact Us",
  description:
    "Have questions? Get in touch with our customer support team. We're here to help!",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </nav>

        <div className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            We'd love to hear from you. Let us know how we can help!
          </p>
        </div>

        <div className={styles.twoColumn}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <ul className={styles.bulletList} style={{ marginLeft: "0" }}>
              <li style={{ marginBottom: "20px" }}>
                <strong>📧 Email:</strong>
                <br />
                <a
                  href="mailto:support@naturedry.com"
                  style={{ color: "var(--color-primary)", textDecoration: "none" }}
                >
                  support@naturedry.com
                </a>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <strong>📞 Phone:</strong>
                <br />
                <a
                  href="tel:1-800-NATURE-DRY"
                  style={{ color: "var(--color-primary)", textDecoration: "none" }}
                >
                  1-800-NATURE-DRY (1-800-628-8737)
                </a>
              </li>
              <li style={{ marginBottom: "20px" }}>
                <strong>📍 Address:</strong>
                <br />
                NatureDry Headquarters
                <br />
                123 Organic Lane
                <br />
                Green Valley, CA 94025, USA
              </li>
              <li>
                <strong>⏰ Business Hours:</strong>
                <br />
                Monday - Friday: 9AM - 6PM PST
                <br />
                Saturday: 10AM - 4PM PST
                <br />
                Sunday: Closed
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Send us a Message</h2>
            <form className={styles.contactForm} style={{ marginTop: "0" }}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={styles.formInput}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={styles.formInput}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={styles.formInput}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className={styles.formTextarea}
                  placeholder="Tell us more..."
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          </section>
        </div>

        <section className={styles.section} style={{ marginTop: "60px" }}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <p className={styles.sectionContent}>
            Check out our{" "}
            <Link
              href="/faq"
              style={{ color: "var(--color-primary)", textDecoration: "none" }}
            >
              FAQ page
            </Link>{" "}
            for quick answers to common questions.
          </p>
        </section>
      </div>
    </main>
  );
}
