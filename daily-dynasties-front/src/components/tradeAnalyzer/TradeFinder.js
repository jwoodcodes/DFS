import React from 'react';
import styles from '@/styles/tradeFinder.module.css';
import axios from 'axios';
import TradeFinderDisplay from './TradeFinderDisplay';


export default function TradeFinder(initialSleeperPlayerData) {
  const [selectedWeek, setSelectedWeek] = React.useState(1);
  const [userSearchValue, setUserSearchValue] = React.useState('');
  const [selectedUserID, setSelectedUserID] = React.useState(0);
  const [initialUserLeaguesArray, setInitialUserLeaguesArray] = React.useState(
    []
  );
  const [selectedUserLeaguesIDsArray, setSelectedUserLeaguesIDsArray] =
    React.useState([]);
  const [pendingTradesArray, setPendingtradesArray] = React.useState([]);
  const [completedTradesArray, setCompletedtradesArray] = React.useState([]);
  const [completedTradesToPassToDisplay, setCompletedTradesToPassToDisplay] =
    React.useState([]);
    const [usernameWithRosterID, setUsernameWithRosterID] = React.useState([])

  const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
  };

  // console.log(initialSleeperPlayerData.initialSleeperPlayerData);
  let tempSleeperArray = initialSleeperPlayerData.initialSleeperPlayerData
  let sleeperJustIDsAndNamesArray =
  tempSleeperArray[0].JustSleeperKeysAndNamesObjectsArray;
    // console.log(sleeperJustIDsAndNamesArray)

    let selectedLeagueRosterNamesArray = [];

 

  function searchOnChange() {
    setUserSearchValue(event.target.value);
  }

  function onSearch(userSearchValue, selectedWeek) {
    event.preventDefault();

    // console.log(selectedWeek)

    const curYear = new Date().getFullYear();

    // console.log(userSearchValue)
    let userID;

    async function axiosFetch() {
      // console.log(selectedUserName)

      const usernameRes = await axios.get(
        `https://api.sleeper.app/v1/user/${userSearchValue}`
      );

      // console.log(usernameRes.data.user_id)
      userID = usernameRes.data.user_id;
      setSelectedUserID(userID);
      // console.log(userID);

      //
      const curYear = new Date().getFullYear();
      let leagueIDsArray = [];

      // console.log(curYear)

      const userLeaguesres = await axios.get(
        `https://api.sleeper.app/v1/user/${userID}/leagues/nfl/${curYear}`
      );
      // console.log(userLeaguesres.data);
      let initialUserLeaguesArray = userLeaguesres.data;
      setInitialUserLeaguesArray(userLeaguesres.data);

      // console.log(selectedUserLeaguesIDsArray)
      // setUserLeaguesNamesArray(newLeagueNameArray);
      // let initialSelectedLeague = {};

      let newLeagueNameArray = [];
      let tempLeagueIDsArray = [];
      // console.log(initialUserLeaguesArray.length)
      initialUserLeaguesArray.forEach(function (league) {
        // console.log(league);
        newLeagueNameArray.push(league.name);
        tempLeagueIDsArray.push(league.league_id);

        if (
          selectedUserLeaguesIDsArray.length <= initialUserLeaguesArray.length
        ) {
          selectedUserLeaguesIDsArray.push({
            id: league.league_id,
            name: league.name,
          });
        }

        // console.log(newLeagueNameArray)
        //   userLeaguesDataArray.push(league);
        // setUserLeaguesNamesArray(newLeagueNameArray)
      });
      // setSelectedUserLeaguesIDsArray(tempLeagueIDsArray)
      //  console.log(selectedLeagueRostersRes)
      //  console.log(selectedLeagueData.league_id)
    }
    axiosFetch();

    async function getLeaguesTransactionsData(id, leagueData) {
      // console.log(id);
      // console.log(leagueData);
      let tempPendingTradesTransactions = [];
      let tempCompletedTradesTransactions = [];
      let leaguesManagersOwnerIDsWithTheirRosterIDsObjectsArray = []
      let userIDsArray = []
      let allLeaguesUsernamesWithUserIDsObjectsArray = [];
      let tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray = []
      let allOFLeaguesUsernamesWithRosterIDsobjectsArray = []

      if (id && selectedWeek) {
        let leagueName = leagueData.name;
        // console.log(leagueName);

        const leaguesData = await axios.get(
          `https://api.sleeper.app/v1/league/${id}/transactions/${selectedWeek}`
        );

        // console.log(leaguesData.data)
        let leaguesTransactionData = leaguesData.data;

        const selectedLeagueRostersRes = await axios.get(
          `https://api.sleeper.app/v1/league/${id}/rosters`
        );
        // console.log(selectedLeagueRostersRes)
        let selectedLeagueRostersData = selectedLeagueRostersRes.data;
        // console.log(selectedLeagueRostersData);

        selectedLeagueRostersData.map((user) => {
          // console.log(user.owner_id, user.roster_id)
          leaguesManagersOwnerIDsWithTheirRosterIDsObjectsArray.push({ownerID: user.owner_id, rosterID: user.roster_id})

          let userOwnerID = user.owner_id
          userIDsArray.push(user.owner_id)
        })

        async function getUserInfo (id) {
        
          const userInfoRes = await axios.get(`https://api.sleeper.app/v1/user/${id}`)

          // console.log(userInfoRes.data)
          let username = userInfoRes.data.username
          let userID = userInfoRes.data.user_id
          allLeaguesUsernamesWithUserIDsObjectsArray.push(
            {
              username: username,
              userID: userID
            }
          )
          allLeaguesUsernamesWithUserIDsObjectsArray.map((noRosterID) => {
            // console.log(noRosterID)
            let userObject = {}

            leaguesManagersOwnerIDsWithTheirRosterIDsObjectsArray.map((noUserName) => {

              if(noUserName.ownerID === noRosterID.userID) {
                // console.log(noRosterID.username)
                let tempUsername = noRosterID.username;
                let tempRosterID = noUserName.rosterID
                
                tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray.push({
                  username: tempUsername,
                  rosterID: tempRosterID
                })
                }
                
            })
          })
          
      }

      allOFLeaguesUsernamesWithRosterIDsobjectsArray.push(tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray)

      

      // console.log(usernameWithRosterID)
      

      userIDsArray.map((id) => {
        getUserInfo(id)

       
      })
        
      
    // console.log(allLeaguesUsernamesWithUserIDsObjectsArray)
    
   
      // console.log(noUserName)
      // console.log(allLeaguesUsernamesWithUserIDsObjectsArray)
      
      // console.log(allOFLeaguesUsernamesWithRosterIDsobjectsArray)


    // leaguesManagersOwnerIDsWithTheirRosterIDsObjectsArray

        // console.log(completedTradesArray.length, completedTradesArray);
        // console.log(completedTradesArray.length, selectedUserLeaguesIDsArray.length)

        // console.log(sleeperJustIDsAndNamesArray)

        if (completedTradesArray.length < selectedUserLeaguesIDsArray.length) {

          

          leaguesTransactionData.forEach(function (data) {
            // console.log(data.type)
            if (data.type === 'trade') {
              // console.log(data);

              // allOFLeaguesUsernamesWithRosterIDsobjectsArray.map((tempUser) => {
              //   console.log(tempUser)
              // })
              

              let transactionTime = data.status_updated;
              let transactionDate = String(new Date(transactionTime));
              // console.log(transactionDate.toString());
              // console.log(data.status)
              if (data.status === 'pending') {
                // console.log(leagueName, transactionDate, data);
                tempPendingTradesTransactions.push({
                  leagueName: leagueName,
                  dateOfTrade: transactionDate,
                  transactionTime: transactionTime,
                  status: data.status,
                });
              }
              //
              let completedTradesPlayerInvolvedIDsArray = []
              let playersInvolvedNames = []
              let playerIDWithManagerTradedToIdObjectsArray = []

              if (data.status === 'complete') {
                // console.log(leagueName, transactionDate, data);
                if(data.adds) {
                // console.log(data.adds)
                let tempPlayerIDsInvolved = data.adds
                // console.log(tempPlayerIDsInvolved)
                
                // allOFLeaguesUsernamesWithRosterIDsobjectsArray
                // console.log(allOFLeaguesUsernamesWithRosterIDsobjectsArray)
                // allOFLeaguesUsernamesWithRosterIDsobjectsArray.map((user) => {
                //   console.log(user)
                // })

                
                  
                
                  

                  for(const [key, value] of Object.entries(tempPlayerIDsInvolved)) {
                    // console.log(key)
                    // console.log(key, value)

                    allOFLeaguesUsernamesWithRosterIDsobjectsArray.map((tempUser) => {
                      // console.log(tempUser)
                      
                     
                      
                    })

                    completedTradesPlayerInvolvedIDsArray.push(key)
                    playerIDWithManagerTradedToIdObjectsArray.push({playerID: key, managerTradedToID: value})
                  }
                }

                

               

                
              // console.log(allOFLeaguesUsernamesWithRosterIDsobjectsArray)
              
               

                // console.log(playerIDWithManagerTradedToIdObjectsArray)

                   for (const key in sleeperJustIDsAndNamesArray) {
               // console.log(sleeperJustIDsAndNamesArray[key].name)
               // console.log(selectedUsersRoster)
               completedTradesPlayerInvolvedIDsArray.forEach(function (player) {
                // console.log(player)
               if (sleeperJustIDsAndNamesArray[key].id === player) {
              //  console.log(sleeperJustIDsAndNamesArray[key].name)
               playersInvolvedNames.push(sleeperJustIDsAndNamesArray[key].name)
              //  selectedLeagueRosterNamesArray.push(
              //   sleeperJustIDsAndNamesArray[key].name
              //  );
                // selectedUsersRosterPlayerObjects.push(initialSleeperPlayerData[key])
                 }
                });
                 }

                tempCompletedTradesTransactions.push({
                  leagueName: leagueName,
                  dateOfTrade: transactionDate,
                  transactionTime: transactionTime,
                  status: data.status,
                  playersInvolvedNames: playersInvolvedNames, 
                });
              }
            }
          }); //end leaguesTransactionData.forEach
          //
          // console.log(tempPendingTradesTransactions);
          // console.log(tempCompletedTradesTransactions.length);

          // completedTradesArray.push(tempCompletedTradesTransactions);

          // setPendingtradesArray([
          //   ...tempPendingTradesTransactions,
          //   pendingTradesArray,
          // ]);
          // console.log(completedTradesArray.length)

          if (tempCompletedTradesTransactions.length > 0) {
            completedTradesArray.push(tempCompletedTradesTransactions);
          }
        }
      }

      setCompletedtradesArray([...tempCompletedTradesTransactions]);
    }

    selectedUserLeaguesIDsArray.map(function (league) {
      // console.log(league.id);
      let id = league.id;

      getLeaguesTransactionsData(id, league);
    });

    //   console.log(selectedUserLeaguesIDsArray)
    // console.log(completedTradesArray);
    setCompletedTradesToPassToDisplay(completedTradesArray);
  }

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          onSearch(userSearchValue, selectedWeek);
        }}
      >
        <label htmlFor="week-select">Week to pull trades from</label>
        <select
          className={styles.weekSelect}
          id="week-select"
          value={selectedWeek}
          onChange={event => {
            console.log(event.target.value);
            setSelectedWeek(event.target.value);
          }}
        >
          {range(1, 53).map(num => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={userSearchValue}
          onChange={searchOnChange}
          placeholder="Sleeper Username"
          className={styles.textInput}
        ></input>
        {!selectedUserID ? (
          <button
            onClick={() => onSearch(userSearchValue, selectedWeek)}
            className={styles.searchbtn}
          >
            Search
          </button>
        ) : (
          <button
            onClick={() => onSearch(userSearchValue, selectedWeek)}
            className={styles.searchbtn}
          >
            Fetch Leagues
          </button>
        )}
      </form>
      <TradeFinderDisplay
        completedTradesToPassToDisplay={completedTradesToPassToDisplay}
      />
    </div>
  );
}
