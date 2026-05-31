import Link from "next/link";
import styles from "@/app/shared-pages.module.css";

export const metadata = {
  title: "Blog",
  description:
    "Read articles about dehydrated foods, nutrition, recipes, and healthy living.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Science Behind Dehydration: Preserving Nutrients",
    excerpt:
      "Discover how our low-temperature dehydration process retains 97% of nutrients compared to traditional methods.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Nutrition",
  },
  {
    id: 2,
    title: "5 Easy Recipes Using Dehydrated Vegetables",
    excerpt:
      "From soups to smoothies, learn creative ways to incorporate dehydrated vegetables into your daily meals.",
    date: "March 10, 2025",
    readTime: "7 min read",
    category: "Recipes",
  },
  {
    id: 3,
    title: "Dehydrated Foods: Perfect for Camping & Hiking",
    excerpt:
      "Lightweight, nutritious, and shelf-stable. Why dehydrated foods are every adventurer's best friend.",
    date: "March 5, 2025",
    readTime: "6 min read",
    category: "Lifestyle",
  },
  {
    id: 4,
    title: "Sustainability in Every Bite: Our Farming Practices",
    excerpt:
      "Learn how NatureDry partners with sustainable farms to reduce environmental impact while maximizing nutrition.",
    date: "February 28, 2025",
    readTime: "8 min read",
    category: "Sustainability",
  },
  {
    id: 5,
    title: "Fruit Powders vs Fresh Fruit: A Nutritional Comparison",
    excerpt:
      "Are fruit powders as good as fresh fruit? We break down the science and numbers for you.",
    date: "February 20, 2025",
    readTime: "6 min read",
    category: "Nutrition",
  },
  {
    id: 6,
    title: "Emergency Food Storage: Building Your Pantry",
    excerpt:
      "A practical guide to creating a nutritious emergency food supply with dehydrated foods.",
    date: "February 15, 2025",
    readTime: "9 min read",
    category: "Guide",
  },
];

export default function BlogPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Blog</span>
        </nav>

        <div className={styles.header}>
          <h1 className={styles.title}>NatureDry Blog</h1>
          <p className={styles.subtitle}>
            Tips, recipes, nutrition facts, and stories about healthy living with
            dehydrated foods.
          </p>
        </div>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className={styles.card}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    color: "var(--color-primary)",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  {post.category}
                </span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardContent}>{post.excerpt}</p>
              </div>
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "15px",
                  borderTop: "1px solid var(--color-border)",
                  fontSize: "0.85rem",
                  color: "var(--color-text-secondary)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>

        <section className={styles.section} style={{ marginTop: "60px" }}>
          <h2 className={styles.sectionTitle}>Subscribe to Our Newsletter</h2>
          <p className={styles.sectionContent}>
            Get the latest recipes, nutrition tips, and exclusive offers delivered to your inbox.
          </p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.formInput}
              style={{ flex: 1, minWidth: "200px" }}
            />
            <button className={styles.submitButton}>Subscribe</button>
          </div>
        </section>
      </div>
    </main>
  );
}
