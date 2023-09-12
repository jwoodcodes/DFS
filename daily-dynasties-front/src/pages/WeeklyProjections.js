import styles from '@/styles/weeklyProjections.module.css';
import clientPromise from '@/lib/mongodb';
import Table from '@/components/weelyProjections/sortableTable/Table';
import React from 'react';
import MainNav from '@/components/MainNav';
import ProjIndividualPositions from '@/components/weelyProjections/ProjIndividualPositions';
import Footer from '@/components/Footer';
import UserSleeperLeagueSearch from '@/components/userSleeperLeagueSearch';


export default function WeeklyProjections(data ) {
  //
// console.log(data.allProjections)
const initialSleeperPlayerData = data.sleeperPlayerData

// initialSleeperPlayerData

// const allProjections = data.allProjections[0].allProjectionsArray[0]

// console.log(allProjections)

  const [positionToShow, setPositionToShow] = React.useState('Overall');
  const [selectedLeagueData, setSelectedLeagueData] = React.useState({})
  const [selectedUserID, setSelectedUserID] = React.useState(0)

  // console.log(allProjections.allProjections[0].allProjectionsArray[0]);
  let tempQBArray = data.allProjections[0].allProjectionsArray[0];
  let tempRBArray = data.allProjections[0].allProjectionsArray[1];
  let tempWRArray = data.allProjections[0].allProjectionsArray[2];
  let tempTEArray = data.allProjections[0].allProjectionsArray[3];
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
      
       {/* <UserSleeperLeagueSearch 
       selectedLeagueData={selectedLeagueData} 
       setSelectedLeagueData={setSelectedLeagueData} 
       selectedUserID={selectedUserID}
       setSelectedUserID={setSelectedUserID}
       initialSleeperPlayerData={initialSleeperPlayerData}
       /> */}
       
      
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
      {positionToShow === 'Overall' && <Table data={newArray} selectedLeagueData={selectedLeagueData}/>}
      {positionToShow === 'QB' && (
        <ProjIndividualPositions
          data={qbArray}
          positionToShow={positionToShow}
selectedLeagueData={selectedLeagueData}
        />
      )}
      {positionToShow === 'RB' && (
        <ProjIndividualPositions
          data={rbArray}
          positionToShow={positionToShow}
          selectedLeagueData={selectedLeagueData}
        />
      )}
      {positionToShow === 'WR' && (
        <ProjIndividualPositions
          data={wrArray}
          positionToShow={positionToShow}
          selectedLeagueData={selectedLeagueData}
        />
      )}
      {positionToShow === 'TE' && (
        <ProjIndividualPositions
          data={teArray}
          positionToShow={positionToShow}
          selectedLeagueData={selectedLeagueData}
        />
      )}
      {positionToShow === 'FLEX' && (
        <ProjIndividualPositions
          data={flexArray}
          positionToShow={positionToShow}
          selectedLeagueData={selectedLeagueData}
        />
      )}
      <Footer />
    </>
  );
}

//////data fetching

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db('dailydynasties');

    

    // projections data
    const allProjections = await db
      .collection('allProjections')
      .find({})
      .toArray();
      //
      // console.log(allProjections)

      const sleeperPlayerData = await db
      .collection('formattedSleeperData')
      .find({})
      // .toArray()
      

      // console.log(sleeperPlayerData)
      
    return {
      props: {
        
        allProjections: JSON.parse(JSON.stringify(allProjections)),
        sleeperPlayerData: JSON.parse(JSON.stringify(sleeperPlayerData)),
       
      },
    };
  } catch (e) {
    console.error(e);
  }
}

///


 


