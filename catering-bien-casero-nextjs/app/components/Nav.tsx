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
            pathname === "/about" ? styles.active : ""
          }`}
          href="/about"
        >
          Nosotros
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/contact" ? styles.active : ""
          }`}
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className={`${styles.link} ${
            pathname === "/dashboard" ? styles.active : ""
          }`}
          href="/dashboard"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};
