import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_logo">
          <Link href="/"><Image src="/img/basic/logo_s.webp" alt="株式会社テンミュー" width={60} height={60} /></Link>
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="hamburger">
          <span className="hamburger_line"></span>
          <span className="hamburger_txt"></span>
        </label>
        <nav className="nav">
          <ul className="nav_lIst">
            <li className="nav_item">
              <Link href="/"><span className="ja">トップ</span><span className="en">TOP</span></Link>
            </li>
          </ul>
          <ul className="nav_lIst">
            <li className="nav_item">
              <Link href="/about"><span className="ja">私たちについて</span><span className="en">ABOUT</span></Link>
            </li>
            <li>
              <Link href="/about">私たちの想い</Link>
            </li>
            <li>
              <Link href="/about">ミッション</Link>
            </li>
            <li>
              <Link href="/about">会社概要</Link>
            </li>
          </ul>
          <ul className="nav_lIst">
            <li className="nav_item">
              <Link href="/service"><span className="ja">サービス</span><span className="en">SERVICE</span></Link>
            </li>
            <li>
              <Link href="/service">キャリア支援</Link>
            </li>
            <li>
              <Link href="/service">選ばれる理由</Link>
            </li>
          </ul>
          <ul className="nav_lIst">
            <li className="nav_item">
              <Link href="/contact"><span className="ja">お問い合わせ・採用情報</span><span className="en">CONTACT・RECRUIT</span></Link>
            </li>
            <li>
              <Link href="/contact">お問い合わせ</Link>
            </li>
            <li>
              <Link href="/contact">採用情報</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}