"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export interface HeaderProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export function Header({ cartItemCount = 0, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🍃</span>
          <span className={styles.logoText}>
            Natur<span className={styles.logoAccent}>Dry</span>
          </span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className={styles.menuToggle}
          onClick={handleMobileMenuToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        {/* Navigation */}
        <nav
          className={`${styles.nav} ${
            isMobileMenuOpen ? styles.navOpen : ""
          }`}
          aria-label="Main navigation"
        >
          <Link
            href="/products"
            className={styles.navLink}
            onClick={handleMenuItemClick}
          >
            Shop
          </Link>
          <Link
            href="/#categories"
            className={styles.navLink}
            onClick={handleMenuItemClick}
          >
            Categories
          </Link>
          <Link
            href="/#why-dehydrated"
            className={styles.navLink}
            onClick={handleMenuItemClick}
          >
            Why Dehydrated?
          </Link>
          <Link
            href="/#footer"
            className={styles.navLink}
            onClick={handleMenuItemClick}
          >
            Contact
          </Link>
        </nav>

        {/* Cart Icon */}
        <button
          type="button"
          className={styles.cartButton}
          onClick={onCartClick}
          aria-label={`Shopping cart with ${cartItemCount} items`}
        >
          <span className={styles.cartIcon}>🛒</span>
          {cartItemCount > 0 && (
            <span className={styles.cartBadge}>{cartItemCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
