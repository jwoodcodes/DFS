import MainNav from '@/components/MainNav';
import styles from '@/styles/tradeAnalyzer.module.css';
import clientPromise from '@/lib/mongodb';
import React from 'react';
import TeamOne from '@/components/tradeAnalyzer/TeamOne';
import TeamTwo from '@/components/tradeAnalyzer/TeamTwo';
import TradeOverview from '@/components/tradeAnalyzer/TradeOvervire';

export default function ThreeDTradeAnalyzer(dynastyRankingsData) {
  let dataLevelOne = dynastyRankingsData.dynastyRankingsData;
  // console.log(dataLevelOne);
  let dataLevelTwo;
  dataLevelOne.map(function (data) {
    // console.log(data);
    dataLevelTwo = data;
  });

  const dataArray = dataLevelTwo.tradeAnalyzerDataObjectsArray;
  // console.log(dataArray);
  //
  //
  const [teamOnePlayers, setTeamOnePlayers] = React.useState([]);
  const [teamTwoPlayers, setTeamTwoPlayers] = React.useState([]);

  return (
    <div>
      <MainNav />
      <h1 className={styles.pageTitle}>3D Trade Analyzer</h1>
      <h2 className={styles.secondaryHeading}>
        A trade calculator that tells you how a trade <b>actually</b> effects{' '}
        <b>your</b> team, not simply if a deal is fair
      </h2>
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
      </div>
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
    return {
      props: {
        dynastyRankingsData: JSON.parse(JSON.stringify(dynastyRankingsData)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
