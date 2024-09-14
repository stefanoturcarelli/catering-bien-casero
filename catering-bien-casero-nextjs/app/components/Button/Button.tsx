import Link from "next/link";
import styles from "./Button.module.css";

interface WhiteButtonProps {
  readonly href: string | "/";
  readonly title: string | "Button";
  readonly style: "primary" | "secondary";
}

export const Button = ({ href, title, style }: WhiteButtonProps) => {
  return (
    <button
      className={`${style === "primary" ? styles.primary : styles.secondary}`}
    >
      <Link href={href}>{title}</Link>
    </button>
  );
};
