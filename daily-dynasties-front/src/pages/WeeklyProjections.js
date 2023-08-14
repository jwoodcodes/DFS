import styles from '@/styles/weeklyProjections.module.css';
import clientPromise from '@/lib/mongodb';
import Table from '@/components/weelyProjections/sortableTable/Table';
import React from 'react';
import MainNav from '@/components/MainNav';
import ProjIndividualPositions from '@/components/weelyProjections/proIndividualPositions';

export default function WeeklyProjections(allProjections) {
  const [positionToShow, setPositionToShow] = React.useState('Overall');

  // console.log(allProjections.allProjections[0].allProjectionsArray[0]);
  let tempQBArray = allProjections.allProjections[0].allProjectionsArray[0];
  let tempRBArray = allProjections.allProjections[0].allProjectionsArray[1];
  let tempWRArray = allProjections.allProjections[0].allProjectionsArray[2];
  let qbArray = [...tempQBArray];
  let rbArray = [...tempRBArray];
  let wrArray = [...tempWRArray];
  let newArray = [...qbArray, ...rbArray, ...wrArray];
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

  let dataToUse = [];

  return (
    <>
      <MainNav />
      <div className={styles.mainTitle}>Weekly Projections</div>
      <div className={styles.curWeek}>{`Week ${curWeek} Projections`}</div>
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
      {/* {positionToShow === 'TE' && (
        <ProjIndividualPositions
          data={teArray}
          positionToShow={positionToShow}
          
        />
      )} */}
    </>
  );
}

//////data fetching

//QB
export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('dailydynasties');

    const allProjections = await db
      .collection('allProjections')
      .find({})
      .toArray();
    // console.log(QBProjections);

    // const QBProjections = await db
    //   .collection('QBProjections')
    //   .find({})
    //   .toArray();
    // // console.log(QBProjections);

    // //RB

    // const RBProjections = await db
    //   .collection('RBProjections')
    //   .find({})
    //   .toArray();
    // // console.log(RBProjections);

    return {
      props: {
        allProjections: JSON.parse(JSON.stringify(allProjections)),
        // QBProjections: JSON.parse(JSON.stringify(QBProjections)),
        // RBProjections: JSON.parse(JSON.stringify(RBProjections)),
      },
    };
  } catch (e) {
    console.error(e);
  }
}
