"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        <Image
          src="/img/favicon.png"
          className={styles.logo}
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div className={styles.links}>
        <Link
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
          href="/"
        >
          Inicio
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/nosotros" ? styles.active : ""
          }`}
          href="/nosotros"
        >
          Nosotros
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/verify" ? styles.active : ""
          }`}
          href="/verify"
        >
          Verify
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/quotes" ? styles.active : ""
          }`}
          href="/quotes"
        >
          Quotes
        </Link>
      </div>
    </nav>
  );
};
