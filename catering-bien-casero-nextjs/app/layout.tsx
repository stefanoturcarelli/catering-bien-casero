import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Nav } from "./components/Nav";

import "./styles/globals.css";
import "./styles/reset.css";
import styles from "./styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <header className={styles.header}>
            <div className={styles.container}>
              <Nav />
            </div>
          </header>

          <main className={styles.main}>
            <div>{children}</div>
          </main>

          <footer className={styles.footer}>
            <div className={styles.container}>
              <p>
                &copy; Diseñado por{" "}
                <a
                  href="https://ileanaecheverria.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ileana Echeverria
                </a>{" "}
                y{" "}
                <a
                  href="https://www.stefanoturcarelli.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stefano Turcarelli
                </a>
              </p>
            </div>
          </footer>
        </body>
      </html>
    </StoreProvider>
  );
}
