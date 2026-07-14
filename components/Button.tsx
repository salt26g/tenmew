import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
}: ButtonProps) {
  const className = `${styles.button} ${
    variant === "secondary" ? styles.secondary : styles.primary
  }`;

  // href があればリンクとして、なければボタンとして表示する
  if (href) {
    return (
      <div className={styles.btn1}><Link href={href} className={className}>
        {children}
      </Link></div>
    );
  }

  return (
    <div className={styles.btn2}><button type={type} onClick={onClick} className={className}>
      {children}
    </button></div>
  );
}