"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.header_logo}>
          <Link href="/"
          onClick={() => {
            closeMenu();

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>
            <picture>
              <source media="(min-width: 500px)" srcSet="/img/basic/logo_long.webp" />
              <img
                src="/img/basic/logo_s.webp"
                alt="株式会社テンミュー"
                loading="lazy"
              />
            {/*<Image src="/img/basic/logo_s.webp" alt="株式会社テンミュー" fill style={{ objectFit: "contain" }} />*/}
            </picture>
          </Link>
        </div>
        <input
          type="checkbox"
          id="check"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <label htmlFor="check" className={styles.hamburger}>
          <span className={styles.hamburger_line}></span>
          <span className={styles.hamburger_txt}></span>
        </label>
        <nav className={styles.nav_sp} aria-label="モバイルナビゲーション">
          <ul className={styles.nav_lIst}>
            <li className={styles.nav_item}>
              <Link href="/"
              onClick={() => {
                closeMenu();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
              <span className={styles.ja}>トップ</span><span className={styles.en}>TOP</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.nav_lIst}>
            <li className={styles.nav_item}>
              <Link href="/about"
              onClick={() => {
                closeMenu();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
                <span className={styles.ja}>私たちについて</span><span className={styles.en}>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link href="/about#vision" onClick={closeMenu}>私たちの想い</Link>
            </li>
            <li>
              <Link href="/about#mission" onClick={closeMenu}>ミッション</Link>
            </li>
            <li>
              <Link href="/about#company" onClick={closeMenu}>会社概要</Link>
            </li>
          </ul>
          <ul className={styles.nav_lIst}>
            <li className={styles.nav_item}>
              <Link href="/service"
              onClick={() => {
                closeMenu();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
                <span className={styles.ja}>サービス</span><span className={styles.en}>SERVICE</span>
              </Link>
            </li>
            <li>
              <Link href="/service#support" onClick={closeMenu}>キャリア支援</Link>
            </li>
            <li>
              <Link href="/service#reasons" onClick={closeMenu}>選ばれる理由</Link>
            </li>
          </ul>
          <ul className={styles.nav_lIst}>
            <li className={styles.nav_item}>
              <Link href="/contact#top"
              onClick={() => {
                closeMenu();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
                <span className={styles.ja}>お問い合わせ・採用情報</span><span className={styles.en}>CONTACT・RECRUIT</span>
              </Link>
            </li>
            <li>
              <Link href="/contact#contact" onClick={closeMenu}>お問い合わせ</Link>
            </li>
            <li>
              <Link href="/contact#recruit" onClick={closeMenu}>採用情報</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.nav_pc} aria-label="デスクトップナビゲーション">
          <ul className={styles.nav_lIst}>
            <li>
              <Link href="/about"
              onClick={() => {
                closeMenu();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
              私たちについて
              </Link>
            </li>
            <li>
              <Link href="/service"
              onClick={() => {
                closeMenu();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
              サービス
              </Link>
            </li>
            <li>
              <Link href="/about#company" onClick={closeMenu}>会社概要</Link>
            </li>
            <li>
              <Link href="/contact#recruit" onClick={closeMenu}>採用情報</Link>
            </li>
            <li>
              <Link href="/contact#top"
              onClick={() => {
                closeMenu();

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}