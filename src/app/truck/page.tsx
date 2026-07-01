import styles from "./page.module.css";

export default function TruckPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Rokni Food Presents</p>
          <h1 className={styles.title}>Kebabi</h1>
          <p className={styles.intro}>
            Kebabi is our food truck side for quick, delicious Persian street
            food. Stop by in person or browse our menu before you order.
          </p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h2 className={styles.infoTitle}>Hours</h2>
            <p className={styles.infoText}>
              Mon-Sat: 11:00 AM - 9:00 PM
              <br />
              Sun: 12:00 PM - 7:00 PM
            </p>
          </div>
          <div className={styles.infoCard}>
            <h2 className={styles.infoTitle}>Location</h2>
            <p className={styles.infoText}>
              Placeholder location
              <br />
              Exact truck stops coming soon
            </p>
          </div>
        </div>

        <a href="/rokni-food/truck/menu" className={styles.ctaButton}>
          View Kebabi Menu
        </a>
      </section>
    </main>
  );
}
