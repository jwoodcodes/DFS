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

  console.log(initialSleeperPlayerData);

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

      if (id && selectedWeek) {
        let leagueName = leagueData.name;
        // console.log(leagueName);

        const leaguesData = await axios.get(
          `https://api.sleeper.app/v1/league/${id}/transactions/${selectedWeek}`
        );

        // console.log(leaguesData.data)
        let leaguesTransactionData = leaguesData.data;

        // console.log(completedTradesArray.length, completedTradesArray);
        // console.log(completedTradesArray.length, selectedUserLeaguesIDsArray.length)

        if (completedTradesArray.length < selectedUserLeaguesIDsArray.length) {
          leaguesTransactionData.forEach(function (data) {
            // console.log(data.type)
            if (data.type === 'trade') {
              console.log(data);
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
              if (data.status === 'complete') {
                // console.log(leagueName, transactionDate, data);
                tempCompletedTradesTransactions.push({
                  leagueName: leagueName,
                  dateOfTrade: transactionDate,
                  transactionTime: transactionTime,
                  status: data.status,
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
