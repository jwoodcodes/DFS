import MainNav from '@/components/MainNav';
import styles from '@/styles/tradeAnalyzer.module.css';
import clientPromise from '@/lib/mongodb';
import React from 'react';
import TeamOne from '@/components/tradeAnalyzer/TeamOne';
import TeamTwo from '@/components/tradeAnalyzer/TeamTwo';
import TradeOverview from '@/components/tradeAnalyzer/TradeOvervire';
import Footer from '@/components/Footer';

import UserSleeperLeagueSearch from '@/components/userSleeperLeagueSearch';
import SleeperLeagueStuff from '@/components/tradeAnalyzer/SleeperLeagueStuff';
import ErrorBoundary from '@/components/ErrorBoundry';

import TradeFinder from '../components/tradeAnalyzer/TradeFinder'

export default function ThreeDTradeAnalyzer(data) {
  // console.log(data.dynastyRankingsData[0].tradeAnalyzerDataObjectsArray
  //   )
  //
  const initialSleeperPlayerData = data.sleeperPlayerData;
  // console.log(initialSleeperPlayerData)
  //
  //
  const dataArray = data.dynastyRankingsData[0].tradeAnalyzerDataObjectsArray;
  //
  const [teamOnePlayers, setTeamOnePlayers] = React.useState([]);
  const [teamTwoPlayers, setTeamTwoPlayers] = React.useState([]);
  //

  return (
    <div>
      <MainNav />

      <h1 className={styles.pageTitle}>3D Trade Analyzer</h1>

      <div className={styles.directionToSleeperSearchText}>Build trades for specific sleeper teams and leagues completely in one place with sleeper league search below the legend</div>

      <div className={styles.wholeMainSectionWrapper}>
        

        {/* team 1 */}
        <TeamOne
          dataArray={dataArray}
          teamOnePlayers={teamOnePlayers}
          setTeamOnePlayers={setTeamOnePlayers}
        />

        {/* team 2 */}
        <TeamTwo
          dataArray={dataArray}
          teamTwoPlayers={teamTwoPlayers}
          setTeamTwoPlayers={setTeamTwoPlayers}
        />
        {/* trade overview */}
        <TradeOverview
          teamOnePlayers={teamOnePlayers}
          teamTwoPlayers={teamTwoPlayers}
        />
      
      <ErrorBoundary>
          <UserSleeperLeagueSearch
            initialSleeperPlayerData={initialSleeperPlayerData}
            dataArray={dataArray}
          />
        </ErrorBoundary>
        </div>

        {/* <div>
          <TradeFinder/>
        </div> */}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('dailydynasties');

    const dynastyRankingsData = await db
      .collection('tradeAnalyzerData')
      .find({})
      .toArray();
    // console.log(dynastyRankingsData);
    //
    const sleeperPlayerData = await db
      .collection('justSleeperKeysAndNames')
      .find({})
      .toArray();
    return {
      props: {
        dynastyRankingsData: JSON.parse(JSON.stringify(dynastyRankingsData)),
        sleeperPlayerData: JSON.parse(JSON.stringify(sleeperPlayerData)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
