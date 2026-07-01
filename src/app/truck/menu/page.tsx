import styles from "./page.module.css";

export default function TruckMenuPage() {
  const items = [
    { name: "Kebab", price: "$--" },
    { name: "Joje", price: "$--" },
    { name: "Salad", price: "$--" },
    { name: "Drinks", price: "$--" },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Kebabi Menu</h1>
        <p className={styles.subtitle}>
          Placeholder menu items for now. Final pricing and details will be
          added soon.
        </p>

        <ul className={styles.menuGrid}>
          {items.map((item) => (
            <li key={item.name} className={styles.menuItem}>
              <div className={styles.imagePlaceholder} aria-hidden="true" />
              <div className={styles.menuItemContent}>
                <h2 className={styles.menuItemTitle}>{item.name}</h2>
                <p className={styles.menuPrice}>{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
