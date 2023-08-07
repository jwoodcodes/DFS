import styles from '@/styles/weeklyProjections.module.css';
import clientPromise from '@/lib/mongodb';
import Table from '@/components/weelyProjections/sortableTable/Table';
import React from 'react';

export default function WeeklyProjections(allProjections) {
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

  return (
    <>
      <div className={styles.mainTitle}>Weekly Projections</div>
      <div>{`Week ${curWeek} Projections`}</div>
      <Table data={newArray} />
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
