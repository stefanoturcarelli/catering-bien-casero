import Link from "next/link";
import styles from "./WhiteButton.module.css";

interface WhiteButtonProps {
  readonly href: string | "/";
  readonly title: string | "Button";
}

export const WhiteButton = ({ href, title }: WhiteButtonProps) => {
  return (
    <button className={styles.whiteButton}>
      <Link href={href}>{title}</Link>
    </button>
  );
};
