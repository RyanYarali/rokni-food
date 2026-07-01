import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>About Rokni Food</h1>
        <p className={styles.firstParagraph}>
          Rokni Food is our parent brand focused on sharing approachable Persian
          flavors with our community.
        </p>
        <p className={styles.paragraph}>
          Our Kebabi food truck brings everyday street-food favorites for
          walk-up service and quick ordering, while Rokni Food Catering supports
          events, parties, and larger gatherings with flexible menus.
        </p>
        <p className={styles.paragraph}>
          Placeholder brand story content goes here, including team background,
          sourcing approach, and mission.
        </p>
      </section>
    </main>
  );
}
