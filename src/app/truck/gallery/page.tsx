import styles from "./page.module.css";

export default function TruckGalleryPage() {
  const photos = [
    "Truck exterior placeholder",
    "Signature dish placeholder",
    "Service window placeholder",
    "Event setup placeholder",
    "Grill action placeholder",
    "Customer line placeholder",
  ];

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.title}>Kebabi Gallery</h1>
        <p className={styles.subtitle}>
          Sample gallery layout. Real photos and captions will be added later.
        </p>

        <div className={styles.galleryGrid}>
          {photos.map((photo) => (
            <div key={photo} className={styles.photoCard}>
              <div className={styles.photoLabel}>{photo}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
