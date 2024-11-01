import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import MainNav from '@/components/MainNav';
import Footer from '@/components/Footer';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Daily Dynasties</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainNav />
        <h1 className={styles.mainSiteTitle}>Daily Dynasties</h1>
        <section className={styles.mainContentWrapper}>
          <Link href="/articles" className={styles.articlesLink}>
            Articles & Fantasy Musings
          </Link>
          <p className={styles.paragraphOne}>
            Daily Dynasties is a collection of tools with an overarching focus
            on zooming out and providing more context while looking at things in
            a different way than any other site. More tools will be added and
            the current ones continually improved going forward. <br />
            <br />
            <strong>Tools on the site currently are:</strong>
          </p>
          <h2 className={styles.subHeading}>Dynasty Rankings Vs. Market</h2>
          <p>
            Ever wanted it to be easier to tell how much higher or lower a site
            or expert is on a player compared to the player's market consensus
            value? My Dynasty Rankings are scaled to the same scale as the
            dynasty rankings on FantasyCalc, so the values in My rankings can be
            compared 1:1 against market values at a glance.
          </p>
          <h2 className={styles.subHeading}>
            Projected Next Offseason Dynasty Value
          </h2>
          <p>
            Factoring in all the key elements for what effects a player's value
            from one year to the next, I wrote an algorithm that projects what a
            player's PNODV (projected next offseason dynasty value) will be.
            This value can be viewed along with the rankings, the rankings
            sorted by PNODV to see projected rankings next offseason, and is
            used in the 3D trade analyzer.
          </p>
          <h2 className={styles.subHeading}>3D Trade Analyzer</h2>
          <p>
            A trade analyzer that tells you how a potential trade will actually
            effect your team this year AND going forward. All traditional trade
            calculators will simply tell you if a deal is fair and will evaluate
            a trade as the same for every team. We need to consider far more
            factors when evaluating if a trade is good for the specific team
            that will be making the trade than just if it's a fair deal. The 3D
            trade analyzer zooms out and shows you how much production your team
            is projected to add or lose this year and how much more or less
            dynasty value your team is projected to have next offseason.
            Different teams have different goals and the 3D trade analyzer
            provides more context for how a trade actually effects your team and
            if it helps it achieve it's specific goals.
          </p>
          <h2 className={styles.subHeading}>Sleeper League Connects</h2>
          <p>
            Input your sleeper username into the weekly porjections or 3D trade
            analyzer and select any of your leagues on Sleeper and get
            personalized advice for any of your teams. You can sort weekly
            projections by players on any sleeper team. I was tired of building
            trades by flipping between sleeper, dynasty rankings, redraft
            projections, and market value/trade calculator so I built the
            sleeper connect in the 3D trade analyzer to give the data from all
            of those sites in one place. You can pull up the roster, including
            picks, of any of your teams alongside the roster of any other team
            in the league and have my dynasty value, current market value,
            projected next offseason dynasty value, and redraft value for every
            player at a glace next to the trade analyzer. build out trades start
            to finish in one place
          </p>
        </section>
        <Footer />
      </main>
    </>
  );
}
