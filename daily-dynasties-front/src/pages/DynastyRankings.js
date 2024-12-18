import React from 'react';
import MainNav from '@/components/MainNav';
import styles from '@/styles/dynastyRankings.module.css';
import clientPromise from '@/lib/mongodb';
import Table from '@/components/sortableTable/Table';
import IndividualPositions from '@/components/dynastyRankings/IndividualPositions';
import Footer from '@/components/Footer';

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
  function pick(event) {
    setPositionToShow('PICK');
  }
  function rookie(event) {
    setPositionToShow('ROOKIE');
  }

  let dataToUse = [];
  let qbDataArray = [];
  let rbDataArray = [];
  let wrDataArray = [];
  let teDataArray = [];
  let pickArray = [];
  let rookieArray = [];

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
    if (player.position === 'PICK') {
      // console.log(player);
      pickArray.push(player);
    }
    // console.log(player.yearsExperience);
    if (player.yearsExperience === 0 && player.position !== 'PICK') {
      rookieArray.push(player);
    }
  });

  function posToUse() {
    // console.log(teDataArray);
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
    if (positionToShow === 'PICK') {
      //   console.log(player);
      dataToUse = pickArray;
      return pickArray;
    }
    if (positionToShow === 'ROOKIE') {
      //   console.log(player);
      dataToUse = rookieArray;
      return rookieArray;
    }
  }
  posToUse();

  return (
    <div className={styles.wholePageWrapper}>
      <MainNav />
      <div className={styles.pageTitle}>Dynasty Rankings</div>
      <div className={styles.lastUpdated}>Last updated: 12/6/24</div>

      <div className={styles.glosseryWrapper}>
        <ul className={styles.glosseryUl}>
          <li>MK= Market</li>
          <li>PNODV= projected next offseason dynasty value</li>
          <li>CMV= Current Market Value</li>
          <li className={styles.fantasyCalc}>
            <strong>
              ** All Market Values From{' '}
              <a href="fantasyCalc.com" className={styles.fantasyCalcLink}>
                FantasyCalc.com
              </a>{' '}
              **
            </strong>
          </li>
        </ul>
      </div>
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
        <button className={styles.posBtn} onClick={pick}>
          PICK
        </button>
      </div>
      <div className={styles.rookieBtn}>
        <button className={styles.posBtn} onClick={rookie}>
          ROOKIES
        </button>
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
      {positionToShow === 'PICK' && (
        <IndividualPositions data={pickArray} positionToShow={positionToShow} />
      )}
      {positionToShow === 'ROOKIE' && (
        <IndividualPositions
          data={rookieArray}
          positionToShow={positionToShow}
        />
      )}
      <Footer />
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


// import { getProjectionsForGrid } from 'backend/projections';

// $w.onReady(function () {
//     console.log('Page ready');
    
//     const htmlElement = $w('#html1');
//     if (htmlElement) {
//         console.log('HTML element found');
//         htmlElement.onMessage((event) => {
//             console.log('Message received:', event.data);
//             if (event.data && event.data.type === 'setHeight') {
//                 htmlElement.height = event.data.height;
//             }
//         });

//         htmlElement.width = "100%";
//         htmlElement.show();
//         console.log('About to load grid data');
//         loadGridData();
//     } else {
//         console.error('HTML element not found');
//     }
// });

// async function loadGridData() {
//     try {
//         console.log('Starting data load');
//         const data = await getProjectionsForGrid();
//         console.log('Data received:', {
//             isArray: Array.isArray(data),
//             length: data?.length,
//             firstItem: data?.[0]
//         });

//         if (Array.isArray(data)) {
//             console.log('Posting data to iframe');
//             $w('#html1').postMessage(data);
//             console.log('Data posted to iframe');
//         } else {
//             console.error('Invalid data structure:', data);
//         }
//     } catch (error) {
//         console.error('Error loading data:', {
//             message: error.message,
//             stack: error.stack
//         });
//     }
// }

// export function refreshButton_click() {
//     console.log('Refresh button clicked');
//     loadGridData();
// }
