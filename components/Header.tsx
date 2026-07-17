"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <Link href="/">
            <Image src="/img/basic/logo_s.webp" alt="株式会社テンミュー" fill style={{ objectFit: "contain" }} />
          </Link>
        </div>
        <input
          type="checkbox"
          id="check"
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        />
        <label htmlFor="check" className="hamburger">
          <span className="hamburger_line"></span>
          <span className="hamburger_txt"></span>
        </label>
        <nav className="nav">
          <ul className="nav_lIst">
            <li className="nav_item">
              <Link href="/" onClick={closeMenu}>
                <span className="ja">トップ</span><span className="en">TOP</span>
              </Link>
            </li>
          </ul>
          <ul className="nav_lIst">
            <li className="nav_item">
              <Link href="/about" onClick={closeMenu}>
                <span className="ja">私たちについて</span><span className="en">ABOUT</span>
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
          <ul className="nav_lIst">
            <li className="nav_item">
              <Link href="/service" onClick={closeMenu}>
                <span className="ja">サービス</span><span className="en">SERVICE</span>
              </Link>
            </li>
            <li>
              <Link href="/service#support" onClick={closeMenu}>キャリア支援</Link>
            </li>
            <li>
              <Link href="/service#reasons" onClick={closeMenu}>選ばれる理由</Link>
            </li>
          </ul>
          <ul className="nav_lIst">
            <li className="nav_item">
              <Link href="/contact" onClick={closeMenu}>
                <span className="ja">お問い合わせ・採用情報</span><span className="en">CONTACT・RECRUIT</span>
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
      </div>
    </header>
  );
}