import styles from '@/styles/weeklyProjections.module.css';
import clientPromise from '@/lib/mongodb';
import Table from '@/components/weelyProjections/sortableTable/Table';
import React from 'react';
import MainNav from '@/components/MainNav';
import ProjIndividualPositions from '@/components/weelyProjections/ProjIndividualPositions';

export default function WeeklyProjections(allProjections) {
  const [positionToShow, setPositionToShow] = React.useState('Overall');

  // console.log(allProjections.allProjections[0].allProjectionsArray[0]);
  let tempQBArray = allProjections.allProjections[0].allProjectionsArray[0];
  let tempRBArray = allProjections.allProjections[0].allProjectionsArray[1];
  let tempWRArray = allProjections.allProjections[0].allProjectionsArray[2];
  let tempTEArray = allProjections.allProjections[0].allProjectionsArray[3];
  let qbArray = [...tempQBArray];
  let rbArray = [...tempRBArray];
  let wrArray = [...tempWRArray];
  let teArray = [...tempTEArray];
  let newArray = [...qbArray, ...rbArray, ...wrArray, ...teArray];
  let flexArray = [...rbArray, ...wrArray, ...teArray];
  // console.log(newArray[0]);
  const curWeek = newArray[0].currentWeek;

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
  function flex(event) {
    setPositionToShow('FLEX');
  }

  let dataToUse = [];

  return (
    <>
      <MainNav />
      <div className={styles.mainTitle}>Weekly Projections</div>
      <div className={styles.curWeek}>{`Week ${curWeek} Projections`}</div>
      <div className={styles.btnsWrapper}>
        <button className={styles.posBtn} onClick={overall}>
          Superflex
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
        <button className={styles.posBtn} onClick={flex}>
          Flex
        </button>
      </div>
      {positionToShow === 'Overall' && <Table data={newArray} />}
      {positionToShow === 'QB' && (
        <ProjIndividualPositions
          data={qbArray}
          positionToShow={positionToShow}
        />
      )}
      {positionToShow === 'RB' && (
        <ProjIndividualPositions
          data={rbArray}
          positionToShow={positionToShow}
        />
      )}
      {positionToShow === 'WR' && (
        <ProjIndividualPositions
          data={wrArray}
          positionToShow={positionToShow}
        />
      )}
      {positionToShow === 'TE' && (
        <ProjIndividualPositions
          data={teArray}
          positionToShow={positionToShow}
        />
      )}
      {positionToShow === 'FLEX' && (
        <ProjIndividualPositions
          data={flexArray}
          positionToShow={positionToShow}
        />
      )}
    </>
  );
}

//////data fetching

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('dailydynasties');

    const allProjections = await db
      .collection('allProjections')
      .find({})
      .toArray();

    return {
      props: {
        allProjections: JSON.parse(JSON.stringify(allProjections)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
