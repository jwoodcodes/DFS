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
  setSelectedLeaguesTeamObjectsArray
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
    if (userSearchValue) {
      setShowLeagues(true);
      // console.log(userSearchValue)
      selectedUserName = userSearchValue;


      ////
      ///
      // comment and uncomment below when pushing to github until sleeperLeagueStuff fully implimented
      // and also line 385 lower down!!!

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
  }

  // console.log(userLeaguesNamesArray)

  // let selectedUserName = 'tiger333'
  let numOfTeamsInLeague = 0;

  function onLeagueSelect(team) {
    // console.log(team)
    // console.log(initialUserLeaguesArray)
    

    class TeamObject {
      constructor (
        userName,
        ownerId,
        teamsPlayers,
        teamRosterId
      ){
        this.userName = userName;
        this.ownerId = ownerId;
        this.teamsPlayers = teamsPlayers
        this.teamRosterId = teamRosterId
      }
    }

    let tempSelectedLeaguesTeamObjectsArray = [];
    
    initialUserLeaguesArray.map(function (league) {
      if (team === league.name) {
        
        numOfTeamsInLeague = league.total_rosters
        setSelectedLeagueData(league);
        setShowLeagues(false);
        // setShowSortBySelectedLeaguesPlayersCheckbox(true);
        setUserLeaguesNamesArray([]);
        //

          let curSeason = +(league.season)
          let selectedLeaguesDraftData = []
          let selectedLeaguesDraftStatus = ''
          let numOfDraftRounds = 3

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
            
                const draftsRes = await axios.get(`https://api.sleeper.app/v1/league/${selectedLeagueID}/drafts`)
                // console.log(draftsRes.data[0].settings.rounds)
                numOfDraftRounds = draftsRes.data[0].settings.rounds
                selectedLeaguesDraftStatus = draftsRes.data[0].status
              
              

              selectedLeagueRostersData.forEach((team) => {
                // console.log(team)

                let userId = team.owner_id
                // console.log(userId)
                
                let teamPlayerIdsArray = team.players
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
                
                let nextDraftYear = +(+curSeason + 1)
                let tradedPicksArray = []
                let picksTradedForArray = []
                team.nextDraftYearFirstArray = [`${nextDraftYear} Round 1`]
                
                let tempTeamPicksArray = []
                testpicks.map((picks) => {
                  // console.log(picks)
                  // console.log(selectedLeaguesDraftStatus)
                  // console.log(curSeason)
                  // console.log(numOfDraftRounds)
                  // console.log(teamRosterNamesArray)
                  // console.log(team.roster_id)
                  let pickYear = +(picks.season)
                  let pickRound = +(picks.round)
                  let nextDraftYear = +(+curSeason + 1)
                  let twoYearsAwayDraftYear = +(+curSeason + 2)
                  let threeYearsAwayDraftYear = +(+curSeason + 3)
                  
                  //
                  //
                  if(selectedLeaguesDraftStatus === 'complete') {
                    if(+pickYear !== curSeason) {
                      // console.log(picks)
                      
                      
                      
                      
                    

                    //  console.log(nextDraftYearFirstArray)
                    
                    
                  if(team.roster_id === picks.roster_id) {
                    // console.log(picks)
                    for (let i = 0; i <= numOfTeamsInLeague; i++) {
                      if(team.roster_id === i) {
                        if(pickYear === nextDraftYear) {
                          if(pickRound === 1) {
                            // console.log(picks)
                            team.nextDraftYearFirstArray = []
                            if( picks.roster_id === picks.owner_id) {
                              team.nextDraftYearFirstArray = [`${nextDraftYear} Round 1`]
                            }
                          }
                        }
                      }
                      
                    }
                   
                    // console.log(team.nextDraftYearFirstArray)
                   
                    tradedPicksArray.push(picks)
                               
                  team.tradedPicksArray = tradedPicksArray
                  

              }
              // console.log(teamRosterNamesArray)
              // adding picks team has that aren't their orginal picks
              if(team.roster_id === picks.owner_id) {
                // console.log(team.roster_id, picks)
                
                  // console.log(picks)
                  // console.log(`${pickYear} Round ${pickRound}`)
                
                picksTradedForArray.push(
                  {
                    name: `${pickYear} Round ${pickRound}`,
                    data: picks
                  })
                // console.log(teamRosterNamesArray)
                for (let i = 0; i <= numOfTeamsInLeague; i++) {
                  if(team.roster_id === i) {
                    if(pickYear === nextDraftYear) {
                      if(pickRound === 1) {
                        // console.log(picks)
                        if( picks.roster_id !== picks.owner_id) {
                        team.nextDraftYearFirstArray.push( {
                          name: `${pickYear} Round ${pickRound}`,
                          data: picks
                        })
                      }
                      }
                    }
                  }
                  
                }

              }
                  // console.log(team.nextDraftYearFirstArray)
                  
                }
              }
              team.picksTradedForArray = picksTradedForArray
              // console.log(team)
              // console.log(pickYear)
              // tempTeamPicksArray.push()

              // console.log(selectedLeaguesDraftStatus)

              let intialPickSetArray = []
              let curYearFirstArray = []
              team.curYearFirstArray = []

              if(selectedLeaguesDraftStatus === 'complete') {
                curYearFirstArray = [{name: `${nextDraftYear} Round 1`, season: nextDraftYear, round: 1}]
              

              // console.log(intialPickSetArray)

              
              // taking out traded away picks
              tradedPicksArray.forEach((tradedPick) => {
                // console.log(tradedPick)
                //
                //curYearFirst
                team.curYearFirstArray = curYearFirstArray
                curYearFirstArray.forEach((curYearInitialFirst) => {
                // console.log(curYearInitialFirst.season, +tradedPick.season)
                if(curYearInitialFirst.season === +tradedPick.season) {
                  // console.log(tradedPick)
                  // console.log(curYearInitialFirst)
                  team.curYearFirstArray = []
                }
               
              }) 
                //
                // curYearSeconds
              
              
            })
            // adding in picks traded for
            team.picksTradedForArray.forEach((tradedForPick) => {
                  
              if(+tradedForPick.data.season === nextDraftYear && +tradedForPick.data.round === 1) {
                
              // console.log(tradedForPick.data)
              // curYearFirstArray.push(tradedForPick)
              
              if(tradedForPick.data.roster_id !== tradedForPick.data.owner_id) {
              team.curYearFirstArray.push(tradedForPick)
              }
              }
            })
              }
                })
                // console.log(team.curYearFirstArray)
                // console.log(teamRosterNamesArray)
                

                
                

                async function getUserName() {
                const usernameRes = await axios.get(
                  `https://api.sleeper.app/v1/user/${userId}`
                );
                // console.log(team)
                // console.log(usernameRes.data.username)
                let userName = usernameRes.data.username
                // console.log(userName)
                // console.log(userName, team.nextDraftYearFirstArray)
                if(team.roster_id === 1) {
                  // console.log(teamRosterNamesArray)
                }

                let teamObject = new TeamObject(
                  userName,
                  team.owner_id,
                  teamRosterNamesArray,
                  team.roster_id,
                )

                tempSelectedLeaguesTeamObjectsArray.push(teamObject)
                }

                
                getUserName()

                
              })

          }
          getPicks();

           ////
      ///
      // comment and uncomment below when pushing to github until sleeperLeagueStuff fully implimented
      // and also line 49 further up!!!!!

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
