import axios from 'axios';
import React from 'react';
import styles from '@/styles/sleeperLeagueSearch.module.css';

export default function UserSleeperLeagueSearch({
  selectedLeagueData,
  setSelectedLeagueData,
  selectedUserID,
  setSelectedUserID,
  initialSleeperPlayerData,
  setSelectedLeagueRosterNamesArray,
  setSelectedUserName,
}) {
  // console.log(searchedUser)
  // const [data, setData] = React.useState(null)
  // console.log(initialSleeperPlayerData)

  const [userSearchValue, setUserSearchValue] = React.useState('');
  const [initialUserLeaguesArray, setInitialUserLeaguesArray] = React.useState(
    []
  );
  const [userLeaguesNamesArray, setUserLeaguesNamesArray] = React.useState([]);
  const [showLeagues, setShowLeagues] = React.useState(false);

  let selectedUserName;
  let userLeaguesDataArray = [];
  let userID = 0;

  // let userLeaguesNamesArray = []

  function searchOnChange() {
    setUserSearchValue(event.target.value);
  }
  //
  function onSearch(userSearchValue) {
    event.preventDefault();
    setShowLeagues(true);
    // console.log(userSearchValue)
    selectedUserName = userSearchValue;
    setSelectedUserName(selectedUserName);
    async function axiosFetch() {
      // console.log(selectedUserName)
      const usernameRes = await axios.get(
        `https://api.sleeper.app/v1/user/${selectedUserName}`
      );
      // console.log(usernameRes.data.user_id)
      userID = usernameRes.data.user_id;
      setSelectedUserID(userID);
      // console.log(userID)

      //

      const userLeaguesres = await axios.get(
        `https://api.sleeper.app/v1/user/${userID}/leagues/nfl/2023`
      );
      // console.log(userLeaguesres.data);
      // let initialUserLeaguesArray = userLeaguesres.data
      setInitialUserLeaguesArray(userLeaguesres.data);
      let newLeagueNameArray = [];
      initialUserLeaguesArray.forEach(function (league) {
        // console.log(league.name)
        //  newLeagueNameArray = [...userLeaguesNamesArray, league.name]
        newLeagueNameArray.push(league.name);
        // console.log(newLeagueNameArray)
        userLeaguesDataArray.push(league);
        // setUserLeaguesNamesArray(newLeagueNameArray)
      });
      setUserLeaguesNamesArray(newLeagueNameArray);
      let initialSelectedLeague = {};

      //  console.log(selectedLeagueRostersRes)
      //  console.log(selectedLeagueData.league_id)
    }

    axiosFetch();
  }

  // console.log(userLeaguesNamesArray)

  // let selectedUserName = 'tiger333'

  function onLeagueSelect(team) {
    // console.log(team)
    // console.log(initialUserLeaguesArray)
    initialUserLeaguesArray.map(function (league) {
      if (team === league.name) {
        // console.log(league)
        setSelectedLeagueData(league);
        setShowLeagues(false);
        // setShowSortBySelectedLeaguesPlayersCheckbox(true);
        setUserLeaguesNamesArray([]);
        //

        let selectedLeagueID = league.league_id;
        // console.log(selectedLeagueID)

        async function getRostersOfSelectedLeague() {
          const selectedLeagueRostersRes = await axios.get(
            `https://api.sleeper.app/v1/league/${selectedLeagueID}/rosters`
          );
          // console.log(selectedLeagueRostersRes)

          // async function getPicks(){
          //   const picksRes = await axios.get(
          //     `https://api.sleeper.app/v1/league/${selectedLeagueID}/traded_picks`
          //   );
          //   let testpicks = picksRes.data
          // // console.log(testpicks)
          // testpicks.map((pickObj) => {
          //   if(pickObj.season === "2024" && pickObj.round === 1) {
          //   // console.log(pickObj)
          //   }
          // })
          // }
          // getPicks()

          let selectedLeagueRostersData = selectedLeagueRostersRes.data;
          // console.log(selectedLeagueRostersData)
          let selectedUsersTeamObject = {};
          let selectedUsersRoster = [];

          selectedLeagueRostersData.forEach(function (team) {
            // console.log(team.owner_id)
            if (team.owner_id === selectedUserID) {
              // console.log(team)
              selectedUsersTeamObject = team;
              selectedUsersRoster = team.players;
              // console.log(selectedUsersRoster)
            }
          });

          let selectedUsersRosterPlayerObjects = [];

          //  console.log(initialSleeperPlayerData)
          let sleeperJustIDsAndNamesArray =
            initialSleeperPlayerData[0].JustSleeperKeysAndNamesObjectsArray;

          //  console.log(sleeperJustIDsAndNamesArray)
          let selectedLeagueRosterNamesArray = [];

          for (const key in sleeperJustIDsAndNamesArray) {
            // console.log(sleeperJustIDsAndNamesArray[key].name)
            // console.log(selectedUsersRoster)
            selectedUsersRoster.forEach(function (player) {
              // console.log(player)
              if (sleeperJustIDsAndNamesArray[key].id === player) {
                // console.log(sleeperJustIDsAndNamesArray[key].name)
                selectedLeagueRosterNamesArray.push(
                  sleeperJustIDsAndNamesArray[key].name
                );
                // selectedUsersRosterPlayerObjects.push(initialSleeperPlayerData[key])
              }
            });
          }
          setSelectedLeagueRosterNamesArray(selectedLeagueRosterNamesArray);
        }

        getRostersOfSelectedLeague();
      }
    });
  }

  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.label}>Sleeper League Search</div>
      <form onSubmit={() => onSearch(userSearchValue)} className={styles.form}>
        <input
          type="text"
          value={userSearchValue}
          onChange={searchOnChange}
          placeholder="Sleeper Username"
          className={styles.textInput}
        ></input>
        <button
          onClick={() => onSearch(userSearchValue)}
          className={styles.searchbtn}
        >
          Search
        </button>
      </form>
      {showLeagues && (
        <button
          className={styles.showLeaguesbtn}
          onClick={() => onSearch(userSearchValue)}
        >
          Show Leagues
        </button>
      )}
      {userLeaguesNamesArray && (
        <div className={styles.leaguebtnsWrapper}>
          {userLeaguesNamesArray.map(function (team) {
            return (
              <button
                key={team}
                className={styles.leaguesbtns}
                onClick={() => onLeagueSelect(team)}
              >
                {team}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
