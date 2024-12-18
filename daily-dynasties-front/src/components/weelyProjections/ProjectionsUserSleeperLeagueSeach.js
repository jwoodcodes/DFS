import axios from 'axios';
import React from 'react';
import styles from '@/styles/sleeperLeagueSearch.module.css';

export default function UserSleeperLeagueSearch({
  // selectedLeagueData,
  // setSelectedLeagueData,
  selectedUserID,
  setSelectedUserID,
  initialSleeperPlayerData,
  setSelectedLeagueRosterNamesArray,
  setSelectedUserName,
  setSelectedLeaguesTeamObjectsArray,
  setOnLeagueSelectFunction,
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
  const [showSelectedLeagueButton, setShowSelectedLeagueButton] =
    React.useState(false);

  let selectedUserName;
  let userLeaguesDataArray = [];
  let userID = 0;

  let curYear = new Date().getFullYear();

  // let userLeaguesNamesArray = []

  function searchOnChange() {
    setUserSearchValue(event.target.value);
  }
  //
  function onSearch(userSearchValue) {
    event.preventDefault();
    if (userSearchValue) {
      setShowLeagues(true);
      // console.log(userSearchValue)
      selectedUserName = userSearchValue;

      ////
      ///
      // comment and uncomment below when pushing to github until sleeperLeagueStuff fully implimented
      // and also line 410 lower down!!!

      // setSelectedUserName(selectedUserName);

      /////
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
          `https://api.sleeper.app/v1/user/${userID}/leagues/nfl/${curYear}`
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
  }

  // console.log(userLeaguesNamesArray)

  // let selectedUserName = 'tiger333'
  let numOfTeamsInLeague = 0;

  function onLeagueSelect(team) {
    // console.log(team)
    // console.log(initialUserLeaguesArray)

    class TeamObject {
      constructor(userName, ownerId, teamsPlayers, teamRosterId, teamData) {
        this.userName = userName;
        this.ownerId = ownerId;
        this.teamsPlayers = teamsPlayers;
        this.teamRosterId = teamRosterId;
        this.teamData = teamData;
      }
    }

    let tempSelectedLeaguesTeamObjectsArray = [];

    initialUserLeaguesArray.map(function (league) {
      if (team === league.name) {
        numOfTeamsInLeague = league.total_rosters;
        // setSelectedLeagueData(league);
        setShowLeagues(false);
        setShowSelectedLeagueButton(team);
        // setShowSortBySelectedLeaguesPlayersCheckbox(true);
        setUserLeaguesNamesArray([]);
        //

        let curSeason = +league.season;
        let selectedLeaguesDraftData = [];
        let selectedLeaguesDraftStatus = '';
        let numOfDraftRounds = 3;

        let selectedLeagueID = league.league_id;
        // console.log(selectedLeagueID)

        async function getRostersOfSelectedLeague() {
          const selectedLeagueRostersRes = await axios.get(
            `https://api.sleeper.app/v1/league/${selectedLeagueID}/rosters`
          );
          // console.log(selectedLeagueRostersRes)
          let selectedLeagueRostersData = selectedLeagueRostersRes.data;
          // console.log(selectedLeagueRostersData)

          async function getPicks() {
            const picksRes = await axios.get(
              `https://api.sleeper.app/v1/league/${selectedLeagueID}/traded_picks`
            );
            let testpicks = picksRes.data;
            // console.log(testpicks)

            // console.log(selectedLeagueRostersData)

            const draftsRes = await axios.get(
              `https://api.sleeper.app/v1/league/${selectedLeagueID}/drafts`
            );
            // console.log(draftsRes.data[0].settings.rounds)
            numOfDraftRounds = draftsRes.data[0].settings.rounds;
            selectedLeaguesDraftStatus = draftsRes.data[0].status;

            selectedLeagueRostersData.forEach(team => {
              // console.log(team)

              let userId = team.owner_id;
              // console.log(userId)

              let teamPlayerIdsArray = team.players;
              let teamRosterNamesArray = [];

              for (const key in sleeperJustIDsAndNamesArray) {
                // console.log(sleeperJustIDsAndNamesArray[key].name)
                // console.log(selectedUsersRoster)
                teamPlayerIdsArray.forEach(function (player) {
                  // console.log(player)
                  if (sleeperJustIDsAndNamesArray[key].id === player) {
                    // console.log(sleeperJustIDsAndNamesArray[key].name)
                    teamRosterNamesArray.push(
                      sleeperJustIDsAndNamesArray[key].name
                    );
                    // selectedUsersRosterPlayerObjects.push(initialSleeperPlayerData[key])
                  }
                });
              }

              team.teamRosterNames = teamRosterNamesArray;

              let nextDraftYear = +(+curSeason + 1);
              let tradedPicksArray = [];
              let picksTradedForArray = [];

              let tempCurYearFirstPicksArray = [];
              let tempCurYearSecondsPicksArray = [];
              let tempCurYearThirdsPicksArray = [];

              let tempTeamPicksArray = [];

              team.nextDraftYearFirstArray = [`${nextDraftYear} Round 1`];
              team.nextDraftYearSecondsArray = [`${nextDraftYear} Round 2`];
              team.nextDraftYearThirdsArray = [`${nextDraftYear} Round 3`];

              //
              // looping over all traded away picks
              testpicks.forEach(picks => {
                // console.log(picks)
                // console.log(selectedLeaguesDraftStatus)
                // console.log(curSeason)
                // console.log(numOfDraftRounds)
                // console.log(teamRosterNamesArray)
                // console.log(team.roster_id)
                let pickYear = +picks.season;
                let pickRound = +picks.round;
                let nextDraftYear = +(+curSeason + 1);
                let twoYearsAwayDraftYear = +(+curSeason + 2);
                let threeYearsAwayDraftYear = +(+curSeason + 3);

                //
                //
                if (selectedLeaguesDraftStatus === 'complete') {
                  if (+pickYear !== curSeason) {
                    // adding picks team has that aren't their orginal picks

                    if (team.roster_id === picks.owner_id) {
                      // console.log(team.roster_id, picks)

                      picksTradedForArray.push({
                        name: `${pickYear} Round ${pickRound}`,
                        data: picks,
                      });
                    }

                    //
                    //

                    if (team.roster_id === picks.roster_id) {
                      if (pickYear === nextDraftYear) {
                        // if team has their own next draft first
                        if (picks.round === 1) {
                          // console.log(picks, team.roster_id)
                          team.nextDraftYearFirstArray = [];
                          if (picks.roster_id === picks.owner_id) {
                            team.nextDraftYearFirstArray = [
                              `${nextDraftYear} Round 1`,
                            ];
                          }
                        }
                        // if team has their own next draft seconds
                        if (picks.round === 2) {
                          team.nextDraftYearSecondsArray = [];
                          if (picks.roster_id === picks.owner_id) {
                            team.nextDraftYearSecondsArray = [
                              `${nextDraftYear} Round 2`,
                            ];
                          }
                        }
                        // if team has their own next draft third
                        if (picks.round === 3) {
                          team.nextDraftYearThirdsArray = [];
                          if (picks.roster_id === picks.owner_id) {
                            team.nextDraftYearThirdsArray = [
                              `${nextDraftYear} Round 3`,
                            ];
                          }
                        }
                      }

                      tradedPicksArray.push(picks);

                      team.tradedPicksArray = tradedPicksArray;
                    }

                    //
                    //
                    //adding traded for picks
                    //

                    //
                    if (team.roster_id === picks.owner_id) {
                      for (let i = 0; i <= numOfTeamsInLeague; i++) {
                        if (team.roster_id === i) {
                          if (pickYear === nextDraftYear) {
                            // next draft first
                            if (pickRound === 1) {
                              // console.log(picks)
                              if (picks.roster_id !== picks.owner_id) {
                                // console.log(picks, team.roster_id)
                                tempCurYearFirstPicksArray.push({
                                  name: `${pickYear} Round ${pickRound}`,
                                  data: picks,
                                });
                              }
                            }
                            // next draft seconds
                            if (pickRound === 2) {
                              // console.log(picks)
                              if (picks.roster_id !== picks.owner_id) {
                                // console.log(picks, team.roster_id)
                                tempCurYearSecondsPicksArray.push({
                                  name: `${pickYear} Round ${pickRound}`,
                                  data: picks,
                                });
                              }
                            }
                            // next draft thirds
                            if (pickRound === 3) {
                              // console.log(picks)
                              if (picks.roster_id !== picks.owner_id) {
                                // console.log(picks, team.roster_id)
                                tempCurYearThirdsPicksArray.push({
                                  name: `${pickYear} Round ${pickRound}`,
                                  data: picks,
                                });
                              }
                            }
                          }
                        }
                      }
                    }
                  } //if(+pickYear !== curSeason) {
                } //if(selectedLeaguesDraftStatus === 'complete') {

                team.picksTradedForArray = picksTradedForArray;
              }); //testpicks.forEach((picks) => {

              team.nextDraftYearFirstArray = [
                ...team.nextDraftYearFirstArray,
                ...tempCurYearFirstPicksArray,
              ];
              team.nextDraftYearSecondsArray = [
                ...team.nextDraftYearSecondsArray,
                ...tempCurYearSecondsPicksArray,
              ];
              team.nextDraftYearThirdsArray = [
                ...team.nextDraftYearThirdsArray,
                ...tempCurYearThirdsPicksArray,
              ];

              team.allDraftPicksArray = [
                ...team.nextDraftYearFirstArray,
                ...team.nextDraftYearSecondsArray,
                ...team.nextDraftYearThirdsArray,
              ];
              let tempPicksArray = team.allDraftPicksArray;

              async function getUserName() {
                const usernameRes = await axios.get(
                  `https://api.sleeper.app/v1/user/${userId}`
                );
                // console.log(team)

                let userName = usernameRes.data.username;
                // console.log(userName)
                // console.log(userName, team.testArray)
                // console.log(userName, team.nextDraftYearFirstArray)
                // console.log(userName, team.nextDraftYearSecondsArray)
                // console.log(userName, team.nextDraftYearThirdsArray)
                // console.log(userName, team.allDraftPicksArray)

                // console.log(userName, team.roster_id, team.curYearFirstArray)

                let teamObject = new TeamObject(
                  userName,
                  team.owner_id,
                  teamRosterNamesArray,
                  team.roster_id,
                  team
                );

                tempSelectedLeaguesTeamObjectsArray.push(teamObject);
              }

              // console.log(tempSelectedLeaguesTeamObjectsArray)
              // setSelectedUserPicksArray(tempSelectedLeaguesTeamObjectsArray.teamData.allDraftPicksArray)

              getUserName();
            });
            // console.log(tempSelectedLeaguesTeamObjectsArray)
          }

          getPicks();

          ////
          ///
          // comment and uncomment below when pushing to github until sleeperLeagueStuff fully implimented
          // and also line 51 further up!!!!!

          // console.log(tempSelectedLeaguesTeamObjectsArray)
          // setSelectedLeaguesTeamObjectsArray(tempSelectedLeaguesTeamObjectsArray)

          /////

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
          // console.log(selectedLeagueRosterNamesArray)
          setSelectedLeagueRosterNamesArray(selectedLeagueRosterNamesArray);
        }
        // setSelectedLeaguesTeamObjectsArray()
        getRostersOfSelectedLeague();
      }
    });
  }
  function secondCallForPicks(userSearchValue, team) {
    event.preventDefault();
    if (userSearchValue) {
      setShowLeagues(false);
      // console.log(userSearchValue)
      selectedUserName = userSearchValue;

      setSelectedUserName(selectedUserName);

      /////
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
        setUserLeaguesNamesArray([]);
        let initialSelectedLeague = {};

        //  console.log(selectedLeagueRostersRes)
        //  console.log(selectedLeagueData.league_id)
      }

      axiosFetch();
    }

    onLeagueSelect(team);
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
      {/* {showSelectedLeagueButton && 
        // console.log(showSelectedLeagueButton)
        
        <button className={styles.leaguesbtns} onClick={() => secondCallForPicks(userSearchValue, showSelectedLeagueButton)}>Show Teams Picks</button>
        
      } */}
    </div>
  );
}
