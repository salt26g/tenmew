"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.fot_log}>
          <Link href="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>
            <picture>
              <source media="(min-width: 500px)" srcSet="/img/basic/logo_s.webp" />
              <img
                src="/img/basic/logo_long.webp"
                alt="株式会社テンミュー"
                loading="lazy"
              />
            </picture>
          </Link>
        </div>
        <ul className={styles.fot_nav}>
          <li>
            <div className={styles.fot_nav_ttl}>
              <Link href="/about"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
                <span className={styles.ja}>私たちについて</span><span className={styles.en}>ABOUT</span>
              </Link>
            </div>
            <ul className={styles.fot_nav_lnk}>
              <li><Link href="/about#vision">私たちの想い</Link></li>
              <li><Link href="/about#mission">ミッション</Link></li>
              <li><Link href="/about#company">会社概要</Link></li>
            </ul>
          </li>
          <li>
            <div className={styles.fot_nav_ttl}>
              <Link href="/service"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
                <span className={styles.ja}>サービス</span><span className={styles.en}>SERVICE</span>
              </Link>
            </div>
            <ul className={styles.fot_nav_lnk}>
              <li><Link href="/service#support">キャリア支援</Link></li>
              <li><Link href="/service#reasons">選ばれる理由</Link></li>
            </ul>
          </li>
          <li>
            <div className={styles.fot_nav_ttl}>
              <Link href="/contact"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
              <span className={styles.ja}>お問い合わせ<span className={styles.sp}>・採用情報</span></span><span className={styles.en}>CONTACT<span className={styles.sp}>・RECRUIT</span></span>
              </Link>
            </div>
            <ul className={styles.fot_nav_lnk}>
              <li><Link href="/contact#contact">お問い合わせ</Link></li>
              <li><Link href="/contact#recruit">採用情報</Link></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.wrap}>
          <Link className={styles.fot_txt_lnk} href="/privacy_policy"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>プライバシーポリシー</Link>
          <p className={styles.fot_txt}>© 2026 tenmew Corporation.</p>
      </div>
    </section>
  );
}