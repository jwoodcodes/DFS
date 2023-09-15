import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/MainNav.module.css';
import Link from 'next/link';

export default function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.siteLogoOrName}>
        <div className={styles.navLogoWrapper}>
          Daily Dynasties
          {/* <Image
          src="/ebvLogo.jfif"
          className={styles.headerLogo}
          width={50}
          height={50}
          alt="ElderBlossom View Logo"
        ></Image> */}
        </div>
      </div>
      <div className={styles.navItemsWrapper}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/DynastyRankings">Dynasty Rankings</Link>
        </li>

        <li>
          <Link href="/3DTradeAnalyzer">3D Trade Analyzer</Link>
        </li>
        <li>
          <Link href="/WeeklyProjections">Weekly Projections</Link>
        </li>
        {/* <li>
          <Link href="/Contact">Contact</Link>
        </li>
        <li>
          <Link href="/Venue">Venue</Link>
        </li> */}
      </div>
      {/* <div className={styles.SignInAndCart}>
        <li>
          <button className={styles.loginButton}>Login</button>
        </li>
      </div> */}
    </nav>
  );
}
