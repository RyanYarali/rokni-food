import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.card}>
        <h1 className={styles.title}>Rokni Food</h1>
        <p className={styles.tagline}>Persian street food, two ways.</p>

        <div className={styles.cardsSection}>
          <div className={styles.optionsGrid}>
            <a href="/rokni-food/truck" className={styles.optionCard}>
              <h2 className={styles.optionTitle}>Kebabi Food Truck</h2>
              <p className={styles.optionText}>
                Walk-up favorites and quick online ordering.
              </p>
            </a>

            <a href="/rokni-food/catering" className={styles.optionCard}>
              <h2 className={styles.optionTitle}>Rokni Food Catering</h2>
              <p className={styles.optionText}>
                Event and party catering with customizable menus.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
