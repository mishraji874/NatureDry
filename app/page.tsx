import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ── Hero Section ── */}
      <section className={styles.hero} id="hero">
        {/* Decorative blurred orbs */}
        <div className={`${styles.heroBgOrb} ${styles.heroBgOrb1}`} />
        <div className={`${styles.heroBgOrb} ${styles.heroBgOrb2}`} />
        <div className={`${styles.heroBgOrb} ${styles.heroBgOrb3}`} />

        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.heroBadgeIcon}>🌿</span>
            100% Natural &bull; No Preservatives
          </span>

          <h1 className={styles.heroTitle}>
            Nature&apos;s Goodness,{" "}
            <span className={styles.heroTitleAccent}>Concentrated</span>
          </h1>

          <p className={styles.heroDescription}>
            Premium dehydrated vegetables, fruit powders, and superfood blends —
            crafted to preserve peak nutrition and flavor. From farm to your pantry,
            naturally.
          </p>

          <div className={styles.heroActions}>
            <a href="/products">
              <button className={styles.btnPrimary} id="shop-now-btn">
                Shop Collection →
              </button>
            </a>
            <a href="/about">
              <button className={styles.btnSecondary} id="learn-more-btn">
                Learn More
              </button>
            </a>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>50+</div>
              <div className={styles.heroStatLabel}>Products</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>12mo</div>
              <div className={styles.heroStatLabel}>Shelf Life</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>10K+</div>
              <div className={styles.heroStatLabel}>Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories Section ── */}
      <section className={styles.categories} id="categories">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Categories</span>
            <h2 className={styles.sectionTitle}>Browse Our Collection</h2>
            <p className={styles.sectionDescription}>
              Explore our carefully curated categories of dehydrated foods designed
              for every lifestyle and need.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {[
              {
                icon: "🥕",
                name: "Dehydrated Vegetables",
                desc: "Carrots, beans, peas, onions, and more — ready to rehydrate into fresh flavors.",
              },
              {
                icon: "🍓",
                name: "Fruit Powders",
                desc: "Vibrant strawberry, mango, blueberry powders for smoothies, baking, and recipes.",
              },
              {
                icon: "🌿",
                name: "Herb & Spice Blends",
                desc: "Dried herb mixes and aromatic spice blends to elevate every dish instantly.",
              },
              {
                icon: "🥗",
                name: "Meal Kits & Mixes",
                desc: "Complete soup mixes, trail mixes, and camping-ready meal kits in one package.",
              },
            ].map((cat) => (
              <div key={cat.name} className={styles.categoryCard}>
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <h3 className={styles.categoryName}>{cat.name}</h3>
                <p className={styles.categoryDesc}>{cat.desc}</p>
                <span className={styles.categoryArrow}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Dehydrated? Section ── */}
      <section className={styles.features} id="why-dehydrated">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Why Choose Dehydrated?</span>
            <h2 className={styles.sectionTitle}>The Smart Way to Eat Natural</h2>
            <p className={styles.sectionDescription}>
              Dehydrated foods retain up to 97% of their original nutrients while
              lasting months longer than fresh produce.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {[
              {
                icon: "🧬",
                color: "Green",
                title: "97% Nutrients Retained",
                desc: "Low-temperature dehydration preserves vitamins, minerals, and antioxidants at near-fresh levels.",
              },
              {
                icon: "⏳",
                color: "Orange",
                title: "12+ Months Shelf Life",
                desc: "No refrigeration required. Store them in your pantry for up to a year without loss of quality.",
              },
              {
                icon: "🪶",
                color: "Purple",
                title: "Lightweight & Portable",
                desc: "Perfect for camping, hiking, and travel. All the nutrition at a fraction of the weight.",
              },
              {
                icon: "🚫",
                color: "Green",
                title: "Zero Additives",
                desc: "No preservatives, no artificial colors, no added sugar. Just pure, whole food in every bite.",
              },
            ].map((feature) => (
              <div key={feature.title} className={styles.featureCard}>
                <div
                  className={`${styles.featureIconWrap} ${feature.color === "Green"
                      ? styles.featureIconGreen
                      : feature.color === "Orange"
                        ? styles.featureIconOrange
                        : styles.featureIconPurple
                    }`}
                >
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Go Natural?</h2>
            <p className={styles.ctaDescription}>
              Join thousands of health-conscious families who trust NatureDry for
              their daily nutrition. Free shipping on your first order.
            </p>
            <a href="/products">
              <button className={styles.btnWhite} id="cta-shop-btn">
                Start Shopping →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer} id="footer">
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <span className={styles.footerLogoIcon}>🍃</span>
                Nature<span className={styles.footerLogoAccent}>Dry</span>
              </div>
              <p className={styles.footerBrandDesc}>
                Premium dehydrated foods crafted from nature. We believe in
                preserving the goodness of whole foods — without compromise.
              </p>
            </div>

            <div className={styles.footerColumn}>
              <h4>Shop</h4>
              <ul>
                <li><a href="/products">All Products</a></li>
                <li><a href="/products?category=vegetables">Vegetables</a></li>
                <li><a href="/products?category=powders">Fruit Powders</a></li>
                <li><a href="/products?category=kits">Meal Kits</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>

            <div className={styles.footerColumn}>
              <h4>Support</h4>
              <ul>
                <li><a href="/shipping-info">Shipping Info</a></li>
                <li><a href="/returns-refunds">Returns & Refunds</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              © 2026 NatureDry. All rights reserved.
            </p>
            <div className={styles.footerSocials}>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Facebook">📘</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
