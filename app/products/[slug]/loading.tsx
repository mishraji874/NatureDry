import styles from "./page.module.css";

export default function ProductLoading() {
  return (
    <main className={styles.page}>
      <div className="container">
        <p>Loading product details...</p>
      </div>
    </main>
  );
}
