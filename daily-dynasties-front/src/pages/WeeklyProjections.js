import styles from '@/styles/weeklyProjections.module.css';
import clientPromise from '@/lib/mongodb';
import Table from '@/components/weelyProjections/sortableTable/Table';
import React from 'react';
import MainNav from '@/components/MainNav';
import ProjIndividualPositions from '@/components/weelyProjections/ProjIndividualPositions';
import Footer from '@/components/Footer';
// import UserSleeperLeagueSearch from '@/components/userSleeperLeagueSearch';
import ProjectionsUserSleeperLeagueSearch from '@/components/weelyProjections/ProjectionsUserSleeperLeagueSeach';

export default function WeeklyProjections(data) {
  //
  // console.log(data.allProjections)
  const initialSleeperPlayerData = data.sleeperPlayerData;

  // console.log(initialSleeperPlayerData)

  // const allProjections = data.allProjections[0].allProjectionsArray[0]

  // console.log(allProjections)

  const [positionToShow, setPositionToShow] = React.useState('Overall');

  const [selectedUserID, setSelectedUserID] = React.useState(0);
  const [selectedLeagueRosterNamesArray, setSelectedLeagueRosterNamesArray] =
    React.useState([]);
  const [isSortBySelectedTeamChecked, setIsSortBySelectedTeamChecked] =
    React.useState(false);
  // const [showSortBySelectedLeaguesPlayersCheckbox,  setShowSortBySelectedLeaguesPlayersCheckbox] = React.useState(false)
  const [pointsPerPassingTD, setPointsPerPassingTD] = React.useState('4');
  const [
    qbProjectionToUseBasedOffPointsPerTD,
    setQbProjectionToUseBasedOffPointsPerTD,
  ] = React.useState();

  // console.log(allProjections.allProjections[0].allProjectionsArray[0]);
  let tempQBArray = data.allProjections[0].allProjectionsArray[0];
  let tempRBArray = data.allProjections[0].allProjectionsArray[1];
  let tempWRArray = data.allProjections[0].allProjectionsArray[2];
  let tempTEArray = data.allProjections[0].allProjectionsArray[3];
  let qbArray = [...tempQBArray];
  qbArray.map(function (qb) {
    // console.log(qb)
    qb.isOnSelectedTeam = false;
    if (selectedLeagueRosterNamesArray) {
      // console.log(data2.name)
      selectedLeagueRosterNamesArray.map(function (player) {
        // console.log(player)
        if (player) {
          player = player.replace("'", '').replace('.', '').replace('.', '');
          if (player.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            player = player.replace('Jr', '');
          }

          qb.name = qb.name.replace("'", '').replace('.', '').replace('.', '');
          if (qb.name.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            qb.name = qb.name.replace('Jr', '');
            qb.name = qb.name.slice(0, -1);
          }
          let tempPlayer = player.toLowerCase();
          let tempQbName = qb.name.toLowerCase();
          if (tempPlayer === tempQbName) {
            qb.isOnSelectedTeam = true;
            // console.log(qb.isOnSelectedTeam)
          }
          // console.log(data.isOnSelectedTeam)
        }
      });
    }
  });

  let rbArray = [...tempRBArray];
  rbArray.map(function (rb) {
    // console.log(qb)
    rb.isOnSelectedTeam = false;
    if (selectedLeagueRosterNamesArray) {
      // console.log(data2.name)
      selectedLeagueRosterNamesArray.map(function (player) {
        // console.log(rb.name)
        if (player) {
          player = player.replace("'", '').replace('.', '').replace('.', '');
          if (player.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            player = player.replace('Jr', '');
          }

          rb.name = rb.name.replace("'", '').replace('.', '').replace('.', '');
          if (rb.name.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            rb.name = rb.name.replace('Jr', '');
            rb.name = rb.name.slice(0, -1);
          }

          let tempPlayer = player.toLowerCase();
          let tempRbName = rb.name.toLowerCase();
          if (tempPlayer === tempRbName) {
            // console.log(player)
            rb.isOnSelectedTeam = true;
            // console.log(rb.isOnSelectedTeam)
          }
          // console.log(data.isOnSelectedTeam)
        }
      });
    }
  });
  let wrArray = [...tempWRArray];
  wrArray.map(function (wr) {
    // console.log(qb)
    wr.isOnSelectedTeam = false;
    if (selectedLeagueRosterNamesArray) {
      // console.log(data2.name)
      selectedLeagueRosterNamesArray.map(function (player) {
        if (player) {
          player = player.replace("'", '').replace('.', '').replace('.', '');
          if (player.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            player = player.replace('Jr', '');
          }

          wr.name = wr.name.replace("'", '').replace('.', '').replace('.', '');
          if (wr.name.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            wr.name = wr.name.replace('Jr', '');
            wr.name = wr.name.slice(0, -1);
          }
          let tempPlayer = player.toLowerCase();
          let tempWrName = wr.name.toLowerCase();
          if (tempPlayer === tempWrName) {
            wr.isOnSelectedTeam = true;
            // console.log(wr.isOnSelectedTeam)
          }
          // console.log(data.isOnSelectedTeam)
        }
      });
    }
  });
  let teArray = [...tempTEArray];
  teArray.map(function (te) {
    // console.log(te)
    te.isOnSelectedTeam = false;
    if (selectedLeagueRosterNamesArray) {
      // console.log(data2.name)
      selectedLeagueRosterNamesArray.map(function (player) {
        // console.log(te.name)
        if (player) {
          player = player.replace("'", '').replace('.', '').replace('.', '');
          if (player.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            player = player.replace('Jr', '');
          }

          te.name = te.name.replace("'", '').replace('.', '').replace('.', '');
          if (te.name.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            te.name = te.name.replace('Jr', '');
            te.name = te.name.slice(0, -1);
          }
          let tempPlayer = player.toLowerCase();
          let tempTeName = te.name.toLowerCase();
          if (tempPlayer === tempTeName) {
            te.isOnSelectedTeam = true;
            // console.log(te.isOnSelectedTeam)
          }
          // console.log(data.isOnSelectedTeam)
        }
      });
    }
  });
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

  // console.log(isSortBySelectedTeamChecked)

  return (
    <>
      <MainNav />
      <div className={styles.mainTitle}>Weekly Projections</div>
      <div className={styles.curWeek}>{`Week ${curWeek} Projections`}</div>

      <ProjectionsUserSleeperLeagueSearch
        selectedUserID={selectedUserID}
        setSelectedUserID={setSelectedUserID}
        initialSleeperPlayerData={initialSleeperPlayerData}
        setSelectedLeagueRosterNamesArray={setSelectedLeagueRosterNamesArray}
      />
      {/* 
    {showSortBySelectedLeaguesPlayersCheckbox && 
      <div className={styles.checkboxWrapper}>
    
      To sort by players on selected team, <br />first sort by scoring in that league, then click isOnSelectedTeam header
      </div> */}
      {/* } */}

      <form
        onSubmit={event => {
          event.preventDefault();
        }}
        className={styles.pointPerPassingTDWrapper}
      >
        {/* <fieldset> */}
        <legend className={styles.legend}>
          Select point per passing TD, <br />
          then sort by PPR Setting
        </legend>
        <div>
          <input
            type="radio"
            name="point-per-passing-td"
            id="four-per-td"
            value="4"
            checked={pointsPerPassingTD === '4'}
            className={styles.PointPerRadioBtn}
            onChange={event => {
              setPointsPerPassingTD(event.target.value);
            }}
          />
          <label htmlFor="four-per-td">4 Point Per Passing TD</label>
          <br />
        </div>
        <div>
          <input
            type="radio"
            name="point-per-passing-td"
            id="six-per-td"
            value="6"
            checked={pointsPerPassingTD === '6'}
            className={styles.PointPerRadioBtn}
            onChange={event => {
              setPointsPerPassingTD(event.target.value);
            }}
          />
          <label htmlFor="six-per-td">6 Point Per Passing TD</label>
        </div>
        {/* </fieldset> */}
      </form>

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
      {positionToShow === 'Overall' && (
        <Table
          data={newArray}
          selectedLeagueRosterNamesArray={selectedLeagueRosterNamesArray}
          isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}
          setIsSortBySelectedTeamChecked={setIsSortBySelectedTeamChecked}
          pointsPerPassingTD={pointsPerPassingTD}
        />
      )}
      {positionToShow === 'QB' && (
        <ProjIndividualPositions
          data={qbArray}
          positionToShow={positionToShow}
          selectedLeagueRosterNamesArray={selectedLeagueRosterNamesArray}
          isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}
          setIsSortBySelectedTeamChecked={setIsSortBySelectedTeamChecked}
          pointsPerPassingTD={pointsPerPassingTD}
        />
      )}
      {positionToShow === 'RB' && (
        <ProjIndividualPositions
          data={rbArray}
          positionToShow={positionToShow}
          selectedLeagueRosterNamesArray={selectedLeagueRosterNamesArray}
          isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}
          setIsSortBySelectedTeamChecked={setIsSortBySelectedTeamChecked}
          pointsPerPassingTD={pointsPerPassingTD}
        />
      )}
      {positionToShow === 'WR' && (
        <ProjIndividualPositions
          data={wrArray}
          positionToShow={positionToShow}
          selectedLeagueRosterNamesArray={selectedLeagueRosterNamesArray}
          isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}
          setIsSortBySelectedTeamChecked={setIsSortBySelectedTeamChecked}
          pointsPerPassingTD={pointsPerPassingTD}
        />
      )}
      {positionToShow === 'TE' && (
        <ProjIndividualPositions
          data={teArray}
          positionToShow={positionToShow}
          selectedLeagueRosterNamesArray={selectedLeagueRosterNamesArray}
          isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}
          setIsSortBySelectedTeamChecked={setIsSortBySelectedTeamChecked}
          pointsPerPassingTD={pointsPerPassingTD}
        />
      )}
      {positionToShow === 'FLEX' && (
        <ProjIndividualPositions
          data={flexArray}
          positionToShow={positionToShow}
          selectedLeagueRosterNamesArray={selectedLeagueRosterNamesArray}
          isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}
          setIsSortBySelectedTeamChecked={setIsSortBySelectedTeamChecked}
          pointsPerPassingTD={pointsPerPassingTD}
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
      .collection('justSleeperKeysAndNames')
      .find({})
      .toArray();

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
