import Image from "next/image";
import Link from "next/link";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  en: string;
  ja: string;
  lead: string;
  image_pc: string;
  image_sp: string;
  alt: string;
  links: {
    href: string;
    txt: string;
  }[];
};

export default function PageHero({
  en,
  ja,
  lead,
  image_pc,
  image_sp,
  alt,
  links,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_mv}>
        <div className={styles.hero_lead}>
          <h1>
            <span className={styles.en}>{en}</span>
            <span className={styles.ja}>{ja}</span>
          </h1>

          <p className={styles.lead}>
            {lead.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className={styles.hero_img}>
          <picture>
            <source media="(min-width: 500px)" srcSet={image_pc} />
            <img
              src={image_sp}
              alt={alt}
              loading="lazy"
            />
          </picture>
        </div>
      </div>
      <ul className={styles.hero_anc}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.txt}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}