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
  const [usernameWithRosterID, setUsernameWithRosterID] = React.useState([]);

  const [isDataReady, setIsDataReady] = React.useState(false);

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
  let tempSleeperArray = initialSleeperPlayerData.initialSleeperPlayerData;
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
        // console.log(league.total_rosters);
        newLeagueNameArray.push(league.name);
        tempLeagueIDsArray.push(league.league_id);

        if (
          selectedUserLeaguesIDsArray.length <= initialUserLeaguesArray.length
        ) {
          selectedUserLeaguesIDsArray.push({
            id: league.league_id,
            name: league.name,
            numOfRosters: league.total_rosters,
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
      let leaguesManagersOwnerIDsWithTheirRosterIDsObjectsArray = [];
      let userIDsArray = [];
      let allLeaguesUsernamesWithUserIDsObjectsArray = [];
      let tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray = [];
      let allOFLeaguesUsernamesWithRosterIDsobjectsArray = [];

      if (id && selectedWeek) {
        let leagueName = leagueData.name;
        // console.log(leagueName);
        let numOfRostersInLeague = leagueData.numOfRosters;
        // console.log(numOfRostersInLeague);

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

        if (
          leaguesManagersOwnerIDsWithTheirRosterIDsObjectsArray.length <
          numOfRostersInLeague
        ) {
          selectedLeagueRostersData.map(user => {
            // console.log(user.owner_id, user.roster_id)

            leaguesManagersOwnerIDsWithTheirRosterIDsObjectsArray.push({
              ownerID: user.owner_id,
              rosterID: user.roster_id,
            });

            let userOwnerID = user.owner_id;
            userIDsArray.push(user.owner_id);
          });
        }

        async function getUserInfo(id) {
          const userInfoRes = await axios.get(
            `https://api.sleeper.app/v1/user/${id}`
          );

          // console.log(userInfoRes.data)
          let username = userInfoRes.data.username;
          let userID = userInfoRes.data.user_id;
          allLeaguesUsernamesWithUserIDsObjectsArray.push({
            username: username,
            userID: userID,
          });

          let userObject = {};

          leaguesManagersOwnerIDsWithTheirRosterIDsObjectsArray.map(
            noUserName => {
              if (noUserName.ownerID === userID) {
                // console.log(noRosterID.username)
                let tempUsername = username;
                let tempRosterID = noUserName.rosterID;

                tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray.push({
                  username: tempUsername,
                  rosterID: tempRosterID,
                });
              }
            }
          );

          return tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray;
        } // end of getUserInfo function, this function is passed a single user at a time where as the outside getLeaguesTransactionsData func is passed one league at a time

        // console.log(usernameWithRosterID)

        ////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////

        ///////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////

        /////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////

        userIDsArray.map(id => {
          getUserInfo(id).then(() => {
            if (
              tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray.length ===
              numOfRostersInLeague
            ) {
              //
              /////////////*put everything inside here*///////////////
              //everything in here will only run once per league and only after tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray is available///

              // console.log(tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray);

              // console.log(leagueName);

              setUsernameWithRosterID(
                tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray
              );

              // tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray.map(
              //   singleUser => {
              //     console.log(singleUser);
              //   }
              // );

              if (
                completedTradesArray.length < selectedUserLeaguesIDsArray.length
              ) {
                leaguesTransactionData.forEach(function (data) {
                  // console.log(data.type)

                  if (data.type === 'trade') {
                    /////////////////////////
                    ///////////////everything inside of here runs once for every trade
                    //////////////////

                    let playerTradedToIDWithUserTradedToUsernameObjectsArray =
                      [];
                    let userWhoRecivedPicksUsernameWithPick = [];

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
                    let completedTradesPlayerInvolvedIDsArray = [];
                    let playersInvolvedNames = [];

                    if (data.status === 'complete') {
                      // console.log(leagueName, transactionDate, data);
                      // console.log(data.draft_picks);

                      if (data.draft_picks.length > 0) {
                        // console.log(data.draft_picks);
                        data.draft_picks.map(pick => {
                          // console.log(pick.owner_id);
                          tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray.map(
                            manager => {
                              if (manager.rosterID === pick.owner_id) {
                                // console.log(manager.username, pick);

                                let pickName = `${pick.season} Round ${pick.round}`;

                                userWhoRecivedPicksUsernameWithPick.push({
                                  userWhoeRecievedPick: manager.username,
                                  pickRecieved: pickName,
                                });
                              }
                            }
                          );
                        });

                        // console.log(
                        //   tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray
                        // );
                      }

                      // console.log(userWhoRecivedPicksUsernameWithPick);

                      /////////////////
                      ///////////////
                      //every trade inside of the below if (data.adds) { involves players, excludes all trades that are only picks!!!!!!!!!!!!!!
                      ////////////////
                      ///////////////
                      /////////////
                      if (data.adds) {
                        // console.log(data.adds)
                        let tempPlayerIDsInvolved = data.adds;
                        // console.log(tempPlayerIDsInvolved)

                        // console.log('ran really up top'); // this line runs once per trade
                        let usernameOfUserReceivingPlayerWithPlayersNameObjectsArray =
                          [];
                        let tempplayerTradedToIDWithUserTradedToUsernameObjectsArray =
                          [];
                        // console.log(
                        //   'playerTradedToIDWithUserTradedToUsernameObjectsArray cleared here'
                        // );

                        for (const [key, value] of Object.entries(
                          tempPlayerIDsInvolved
                        )) {
                          //////                                                                                                     ////////////
                          /////////// this takes in each trade once and loops through each player involed in the trade once each  ///////////////
                          ///////// everything in here runs once per player in trade, will run as many times are players in deal   //////////////
                          ////////                                                                                                  /////////////

                          let playerIDWithManagerTradedToIdObjectsArray = [];
                          let tempUsersInTradeArray = [];

                          // console.log(key)
                          // console.log(key, value);

                          /////////////////////////////////////////////////////////////
                          /////////////////////////////////////////////////////////////////
                          ///////////////////////////////////////////////////////////////////
                          //////////////////////////////////////////////////////////////////
                          ///////////////////////////////////////////////////////////////////

                          /////////////////////////////////////////////////////////////
                          ///////////////////////////////////////////////////////////////

                          /////////////////////////////////////////////////////////////////
                          /////////////////////////////////////////////////////////////////

                          // console.log(usernamesWithRosterIDsArrayOfArrays);

                          // console.log(usernameWithRosterID);

                          // console.log(' ran up top');
                          // console.log(leagueName, transactionDate, data);

                          tempAllOFLeaguesUsernamesWithRosterIDsobjectsArray.map(
                            singleUser => {
                              // console.log(singleUser);

                              if (value === singleUser.rosterID) {
                                // console.log(key, singleUser.username);
                                // console.log('run inside', singleUser.username);
                                tempUsersInTradeArray.push(singleUser.username);
                                tempplayerTradedToIDWithUserTradedToUsernameObjectsArray.push(
                                  {
                                    playerTradedToID: key,
                                    userThatPlayerWasTradedToUsername:
                                      singleUser.username,
                                  }
                                );
                                // console.log(tempUsersInTradeArray);
                              }
                            }
                          );

                          playerTradedToIDWithUserTradedToUsernameObjectsArray =
                            tempplayerTradedToIDWithUserTradedToUsernameObjectsArray;

                          completedTradesPlayerInvolvedIDsArray.push(key);

                          playerIDWithManagerTradedToIdObjectsArray.push({
                            playerID: key,
                            managerTradedToID: value,
                          });
                        } //end of for (const [key, value] of Object.entries(
                      }

                      // console.log(
                      //   playerTradedToIDWithUserTradedToUsernameObjectsArray
                      // );

                      /////////////////////////
                      ////////////////////////
                      //////////////////////////
                      // !!!!!!!!!!!!!!!!NEED TO DO BELOW FOR TRADES THAT ONLY INVOLVE PICKS!!!!!!!!!!!!!!!!!!!!!
                      // !!!!!!!!!!!!!!!!NEED TO DO BELOW FOR TRADES THAT ONLY INVOLVE PICKS!!!!!!!!!!!!!!!!!!!!!
                      // !!!!!!!!!!!!!!!!NEED TO DO BELOW FOR TRADES THAT ONLY INVOLVE PICKS!!!!!!!!!!!!!!!!!!!!!
                      // !!!!!!!!!!!!!!!!NEED TO DO BELOW FOR TRADES THAT ONLY INVOLVE PICKS!!!!!!!!!!!!!!!!!!!!!
                      ////////////////////
                      ///////////////////////

                      if (!data.adds) {
                        // console.log(data);
                      }

                      /////////////////////////
                      ////////////////////////
                      //////////////////////////
                      // !!!!!!!!!!!!!!!!NEED TO DO ABOVE FOR TRADES THAT ONLY INVOLVE PICKS!!!!!!!!!!!!!!!!!!!!!
                      // !!!!!!!!!!!!!!!!NEED TO DO ABOVE FOR TRADES THAT ONLY INVOLVE PICKS!!!!!!!!!!!!!!!!!!!!!
                      // !!!!!!!!!!!!!!!!NEED TO DO ABOVE FOR TRADES THAT ONLY INVOLVE PICKS!!!!!!!!!!!!!!!!!!!!!
                      // !!!!!!!!!!!!!!!!NEED TO DO ABOVE FOR TRADES THAT ONLY INVOLVE PICKS!!!!!!!!!!!!!!!!!!!!!
                      ////////////////////
                      ///////////////////////

                      // console.log(allOFLeaguesUsernamesWithRosterIDsobjectsArray)

                      // console.log(playerIDWithManagerTradedToIdObjectsArray)

                      //////////////
                      /////////// below is sleeper work to match player IDs to player names
                      /////////////

                      let usernameOfUserReceivingPlayerWithPlayersNameObjectsArray =
                        [];

                      // console.log(
                      //   'ran whole trade',
                      //   leagueName,
                      //   transactionDate
                      // );

                      let tempSingleTradeWhoGotWhoBothNames = [];
                      let managersInvolvedInDeal = [];

                      for (const key in sleeperJustIDsAndNamesArray) {
                        // console.log(sleeperJustIDsAndNamesArray[key].name)
                        // console.log(selectedUsersRoster)
                        completedTradesPlayerInvolvedIDsArray.forEach(function (
                          player
                        ) {
                          // console.log(player)

                          if (sleeperJustIDsAndNamesArray[key].id === player) {
                            //  console.log(sleeperJustIDsAndNamesArray[key].name)
                            playersInvolvedNames.push(
                              sleeperJustIDsAndNamesArray[key].name
                            );
                            //  selectedLeagueRosterNamesArray.push(
                            //   sleeperJustIDsAndNamesArray[key].name
                            //  );
                            // selectedUsersRosterPlayerObjects.push(initialSleeperPlayerData[key])
                          }
                        });

                        if (
                          playerTradedToIDWithUserTradedToUsernameObjectsArray
                        ) {
                          playerTradedToIDWithUserTradedToUsernameObjectsArray.map(
                            playerWithUsername => {
                              if (
                                sleeperJustIDsAndNamesArray[key].id ===
                                playerWithUsername.playerTradedToID
                              ) {
                                //
                                //when this fires it means a player involved in the trade's playerID matched with a playerID in sleeperJustIDsAndNamesArray
                                //
                                // console.log('ran');

                                // console.log(
                                //   playerWithUsername.userThatPlayerWasTradedToUsername
                                // );

                                managersInvolvedInDeal.push(
                                  playerWithUsername.userThatPlayerWasTradedToUsername
                                );

                                // console.log(
                                //   sleeperJustIDsAndNamesArray[key].name
                                // );

                                // console.log(
                                //   playerWithUsername.userThatPlayerWasTradedToUsername,
                                //   sleeperJustIDsAndNamesArray[key].name,
                                //   transactionDate,
                                //   leagueName
                                // );

                                tempSingleTradeWhoGotWhoBothNames.push({
                                  userWhoRecievedThePlayer:
                                    playerWithUsername.userThatPlayerWasTradedToUsername,
                                  PlayerRecievedName:
                                    sleeperJustIDsAndNamesArray[key].name,
                                });
                              }
                            }
                          );
                        }

                        //!!!!!!!!!!!!!!!!!DO NOT PUT ANYTHING HERE! WILL RUN MULTIPLE TIMES OVER EVERY SLEEPER ID AND CRASH!!!!!!!!!!!!!!!!!!!!!!!
                      } // end of for (const key in sleeperJustIDsAndNamesArray) {

                      // console.log(
                      //   'ran whole trade',
                      //   leagueName,
                      //   transactionDate,
                      //   tempSingleTradeWhoGotWhoBothNames
                      // );

                      // console.log(
                      //   usernameOfUserReceivingPlayerWithPlayersNameObjectsArray,
                      //   playersInvolvedNames
                      // );

                      // console.log(
                      //   leagueName,
                      //   transactionDate
                      //   // usernameOfUserReceivingPlayerWithPlayersNameObjectsArray
                      // );

                      ///                                                                                                             ///
                      ////                                                                                                           ////
                      /////                                                                                                         /////
                      //////below is inside of leaguesTransactionData.forEach(function (data) { and runs only once per trade       //////
                      /////                                                                                                         /////
                      ////                                                                                                           ////
                      ///                                                                                                             ///

                      tempCompletedTradesTransactions.push({
                        leagueName: leagueName,
                        dateOfTrade: transactionDate,
                        transactionTime: transactionTime,
                        status: data.status,
                        playersInvolvedNames: playersInvolvedNames,
                        managersInvolvedInDeal: managersInvolvedInDeal,
                        usernameWithPlayersTheyRecievedArray:
                          tempSingleTradeWhoGotWhoBothNames,
                        draftPicksInDeal: userWhoRecivedPicksUsernameWithPick,
                      });
                    }
                  } //if (data.type === 'trade') {
                }); //end of leaguesTransactionData.forEach(function (data) {
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
              setIsDataReady(true);
            } // end of if statement everything needs to run inside of
          }); //end of getUserInfo(id).then(()
        }); // end of userIDsArray.map(id => {

        ////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////

        ///////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////

        /////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////
      } // end of if (id && selectedWeek) {

      setCompletedtradesArray([...tempCompletedTradesTransactions]);
    }

    selectedUserLeaguesIDsArray.map(function (league) {
      // console.log(league);
      let id = league.id;

      getLeaguesTransactionsData(id, league);
    });

    //   console.log(selectedUserLeaguesIDsArray)
    // console.log(completedTradesArray);
    setCompletedTradesToPassToDisplay(completedTradesArray);
  } // end of onSearch function

  return (
    <div>
      <div className={styles.tradeFinderLabel}>Trade Finder (Beta)</div>
      <div className={styles.subLabel}>
        Pull up all recent Trades across all you sleeper leagues
      </div>
      <form
        className={styles.formWrapper}
        onSubmit={event => {
          event.preventDefault();
          onSearch(userSearchValue, selectedWeek);
        }}
      >
        {/* <label htmlFor="week-select">Week to pull trades from</label>
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
        </select> */}

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

      {isDataReady && (
        <div>
          {completedTradesToPassToDisplay.map(tradeArray => {
            // console.log(tradeArray);
            let sortedTradeArray = tradeArray.sort(
              (a, b) => a.transactionTime < b.transactionTime
            );

            return sortedTradeArray.map(trade => {
              console.log(trade);

              let usernameWithPlayersTheyRecievedArrayForHere =
                trade.usernameWithPlayersTheyRecievedArray;

              let picksInDealArray = trade.draftPicksInDeal;

              return (
                <div>
                  <div
                    key={trade.transactionTime}
                    className={styles.individualTradeWrapper}
                  >
                    {trade.leagueName} {trade.dateOfTrade}
                  </div>
                  {/* <div>{trade.playersInvolvedNames}</div> */}
                  <div className={styles.tradeContentsWrapper}>
                    {usernameWithPlayersTheyRecievedArrayForHere.map(pair => {
                      return (
                        <div>{`${pair.userWhoRecievedThePlayer} - ${pair.PlayerRecievedName}`}</div>
                      );
                    })}

                    {picksInDealArray.map(pick => {
                      return (
                        <div>{`${pick.userWhoeRecievedPick} - ${pick.pickRecieved}`}</div>
                      );
                    })}
                  </div>
                </div>
              );
            });
          })}
        </div>
      )}
    </div>
  );
}
