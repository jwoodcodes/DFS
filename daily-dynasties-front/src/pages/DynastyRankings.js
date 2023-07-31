import React from 'react';
import MainNav from '@/components/MainNav';
import styles from '@/styles/dynastyRankings.module.css';
import clientPromise from '@/lib/mongodb';
import Table from '@/components/sortableTable/Table';
import IndividualPositions from '@/components/dynastyRankings/IndividualPositions';

export default function DynastyRankings(dynastyRankingsData) {
  const [positionToShow, setPositionToShow] = React.useState('Overall');

  let dataLevelOne = dynastyRankingsData.dynastyRankingsData;
  //   console.log(dataLevelOne);
  let dataLevelTwo;
  dataLevelOne.map(function (data) {
    // console.log(data);
    dataLevelTwo = data;
  });
  //   console.log(dataLevelTwo.dynastyRankingsDataObjectsArray);
  const dataArray = dataLevelTwo.dynastyRankingsDataObjectsArray;
  // console.log(dataArray);

  function overall(event) {
    setPositionToShow('Overall');
  }
  function qb(event) {
    setPositionToShow('QB');
  }
  function rb(event) {
    setPositionToShow('RB');
  }
  function wr(event) {
    setPositionToShow('WR');
  }
  function te(event) {
    setPositionToShow('TE');
  }

  let dataToUse = [];
  let qbDataArray = [];
  let rbDataArray = [];
  let wrDataArray = [];
  let teDataArray = [];

  dataArray.map(function (player) {
    if (player.position === 'QB') {
      //   console.log(player);
      qbDataArray.push(player);
    }
    if (player.position === 'RB') {
      //   console.log(player);
      rbDataArray.push(player);
    }
    if (player.position === 'WR') {
      //   console.log(player);
      wrDataArray.push(player);
    }
    if (player.position === 'TE') {
      //   console.log(player);
      teDataArray.push(player);
    }
  });

  function posToUse() {
    console.log(teDataArray);
    if (positionToShow === 'QB') {
      //   console.log(player);
      dataToUse = qbDataArray;
      return qbDataArray;
    }
    if (positionToShow === 'RB') {
      //   console.log(player);
      dataToUse = rbDataArray;
      return rbDataArray;
    }
    if (positionToShow === 'WR') {
      //   console.log(player);
      dataToUse = wrDataArray;
      return wrDataArray;
    }
    if (positionToShow === 'TE') {
      //   console.log(player);
      dataToUse = teDataArray;
      return teDataArray;
    }
  }
  posToUse();

  return (
    <div>
      <MainNav />
      <div className={styles.pageTitle}>Dynasty Rankings</div>
      <div className={styles.lastUpdated}>Last updated: 7/25/23</div>

      <div className={styles.btnsWrapper}>
        <button className={styles.posBtn} onClick={overall}>
          Overall
        </button>
        <button className={styles.posBtn} onClick={qb}>
          QB
        </button>
        <button className={styles.posBtn} onClick={rb}>
          RB
        </button>
        <button className={styles.posBtn} onClick={wr}>
          WR
        </button>
        <button className={styles.posBtn} onClick={te}>
          TE
        </button>
      </div>
      <div className={styles.lastUpdated}>
        *PNODV is projected next offseason dynasty value
      </div>
      <div className={styles.glosseryWrapper}>
        <ul className={styles.glosseryUl}>
          <li>MR= Market Rank</li>
          <li>MPR= Market Position Rank</li>
          <li>MDV= Market Dynasty Value</li>
          <li>DDR= daily dynasties Rank</li>
          <li>DDPR= daily dynasties Position Rank</li>
          <li>DDPR= daily dynasties Position Rank</li>
          <li>DDDV= daily dynasties Dynasty Value</li>
          <li>DDVM= daily dynasties Value vs. Market Value</li>
          <li>CM= Current Market</li>
        </ul>
      </div>

      {positionToShow === 'Overall' && <Table data={dataArray} />}
      {positionToShow === 'QB' && (
        <IndividualPositions
          data={qbDataArray}
          positionToShow={positionToShow}
        />
      )}
      {positionToShow === 'RB' && (
        <IndividualPositions
          data={rbDataArray}
          positionToShow={positionToShow}
        />
      )}
      {positionToShow === 'WR' && (
        <IndividualPositions
          data={wrDataArray}
          positionToShow={positionToShow}
        />
      )}
      {positionToShow === 'TE' && (
        <IndividualPositions
          data={teDataArray}
          positionToShow={positionToShow}
        />
      )}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('dailydynasties');

    const dynastyRankingsData = await db
      .collection('dynastyRankingsData')
      .find({})
      .toArray();
    // console.log(dynastyAndRedraftPlayerObjects);

    return {
      props: {
        dynastyRankingsData: JSON.parse(JSON.stringify(dynastyRankingsData)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
