const axios = require('axios');
const { MongoClient } = require('mongodb');

let firstLevelSuperflexTEPLeagueIDsArray = [];

async function fetchInitialSetOfLeagues() {
  ///// GETTING USER ID OF USER TO BE SEARCHED

  initialSleeperNameToSearch = 'Tiger333';

  const usernameRes = await axios.get(
    `https://api.sleeper.app/v1/user/${initialSleeperNameToSearch}`
  );

  //   console.log(usernameRes.data.user_id);
  InitialSearchedUserID = usernameRes.data.user_id;

  // console.log(InitialSearchedUserID);

  ////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////
  // getting the league ID's for all of the initial searched users leagues
  ///////////////////

  const curYear = new Date().getFullYear();

  // console.log(curYear)

  const userLeaguesres = await axios.get(
    `https://api.sleeper.app/v1/user/${InitialSearchedUserID}/leagues/nfl/${curYear}`
  );
  //   console.log(userLeaguesres.data);
  let initialUserLeaguesArray = userLeaguesres.data;

  // console.log(initialUserLeaguesArray.length)
  initialUserLeaguesArray.forEach(function (league) {
    // console.log(league.roster_positions);
    let temp = league.roster_positions;
    //
    if (temp.includes('SUPER_FLEX') == true) {
      //   console.log(temp);

      if (league.scoring_settings.bonus_rec_te) {
        // console.log(league.league_id);
        if (
          firstLevelSuperflexTEPLeagueIDsArray.includes(league.league_id) ==
          false
        ) {
          firstLevelSuperflexTEPLeagueIDsArray.push(league.league_id);
        }
      }
    }
  });
  console.log(firstLevelSuperflexTEPLeagueIDsArray);
  return firstLevelSuperflexTEPLeagueIDsArray;
}

// let testArray = [];

// let test = fetchInitialSetOfLeagues().then(res => {
//   //   console.log(res);

//   setTimeout(() => {
//     testArray = res;
//   }, 3000);
//   //   testArray.push(res);
//   //   console.log(res.length);

//   return res;
// });

// setTimeout(() => {
//   console.log(testArray);
//   module.exports = testArray;
// }, 5000);
