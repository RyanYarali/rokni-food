import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Rokni Food",
  description: "Rokni Food: Kebabi food truck and catering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { label: "Kebabi Menu", href: "/rokni-food/truck/menu" },
    { label: "Catering", href: "/rokni-food/catering" },
    { label: "Gallery", href: "/rokni-food/truck/gallery" },
    { label: "About", href: "/rokni-food/about" },
  ];

  return (
    <html lang="en">
      <body>
        <div className={styles.pageShell}>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <a href="/rokni-food/" className={styles.brandLink}>
                Rokni Food
              </a>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </header>
          <main className={styles.content}>{children}</main>
        </div>
      </body>
    </html>
  );
}
