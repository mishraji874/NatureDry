"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  socialLinks?: Array<{
    label: string;
    href: string;
    emoji: string;
  }>;
}

const defaultSocialLinks = [
  { label: "Instagram", href: "#", emoji: "📷" },
  { label: "Twitter", href: "#", emoji: "🐦" },
  { label: "Facebook", href: "#", emoji: "📘" },
];

export function Footer({
  companyName = "NatureDry",
  companyDescription = "Premium dehydrated foods crafted from nature. We believe in preserving the goodness of whole foods — without compromise.",
  socialLinks = defaultSocialLinks,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className={styles.footerLogoIcon}>🍃</span>
              <span>
                Natur<span className={styles.footerLogoAccent}>Dry</span>
              </span>
            </div>
            <p className={styles.footerBrandDesc}>{companyDescription}</p>
          </div>

          {/* Shop Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Shop</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/products?category=vegetables">Vegetables</Link>
              </li>
              <li>
                <Link href="/products?category=powders">Fruit Powders</Link>
              </li>
              <li>
                <Link href="/products?category=kits">Meal Kits</Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Support</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/shipping">Shipping Info</Link>
              </li>
              <li>
                <Link href="/returns">Returns & Refunds</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            © {currentYear} {companyName}. All rights reserved.
          </p>
          <div className={styles.footerSocials}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className={styles.socialLink}
              >
                {link.emoji}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
