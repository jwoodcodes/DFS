const axios = require('axios');
const { MongoClient } = require('mongodb');

let superflexTEPTempLeagueIDsArray = [];
let secondLevelSuperflexTEPTempLeagueIDsArray = [];
let superflexNonTEPTempLeagueIDsArray = [];
let secondLevelSuperflexNonTEPTempLeagueIDsArray = [];
let nonSuperflexTempLeagueIDsArray = [];
let secondLevelNonSuperflexTempLeagueIDsArray = [];

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
        // console.log(league.scoring_settings.bonus_rec_te);
        superflexTEPTempLeagueIDsArray.push(league.league_id);
      }

      if (!league.scoring_settings.bonus_rec_te) {
        // console.log(league.scoring_settings.bonus_rec_te, league.league_id);
        superflexNonTEPTempLeagueIDsArray.push(league.league_id);
      }
    }
    if (temp.includes('SUPER_FLEX') == false) {
      //   console.log(temp, league.league_id);
      nonSuperflexTempLeagueIDsArray.push(league.league_id);
    }
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////
  // building arrays of userIDs from the intitial searched users leagues one for superflex, one for non superflex
  //////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  ////////////
  //    for superflexTEP leagues only
  ////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  superflexTEPTempLeagueIDsArray.forEach(function (leagueID) {
    async function getAllIntitalSuperflesTEPUserIDs() {
      //   console.log(leagueID, curYear);
      const initialUserLeaguesUsersres = await axios.get(
        // `https://api.sleeper.app/v1/user/${leagueID}/leagues/nfl/${curYear}`
        `https://api.sleeper.app/v1/league/${leagueID}/users`
      );
      //   console.log(initialUserLeaguesUsersres.data);

      let initialUsersAllLeaguesUsersArray = initialUserLeaguesUsersres.data;

      //   console.log(initialUsersAllLeaguesUsersArray);
      superflexTEPsecondGenUserIdsArray = [];
      initialUsersAllLeaguesUsersArray.forEach(function (user) {
        // console.log(user.user_id);
        if (superflexTEPsecondGenUserIdsArray.includes(user.user_id) === true) {
          //   console.log(superflexTEPsecondGenUserIdsArray, user.user_id);
        }
        if (
          superflexTEPsecondGenUserIdsArray.includes(user.user_id) === false
        ) {
          //   console.log(superflexTEPsecondGenUserIdsArray, user.user_id);
          superflexTEPsecondGenUserIdsArray.push(user.user_id);
        }
      }); // end of const initialUserLeaguesUsersres = await axios.get(

      //
      //   console.log(superflexTEPsecondGenUserIdsArray);

      //////////////////////////////////////////////////////////////////////////////////////////  //////////////////////////////////////////////////////////////////////////////////////////

      /////////////////////////////////////////////////////////
      // using superflexTEPsecondGenUserIdsArray to get all league ID's for the second gen users list
      ////////////////////////////////////////////////////////

      superflexTEPsecondGenUserIdsArray.forEach(function (
        SFTEPsecondGenUserID
      ) {
        // console.log(SFTEPsecondGenUserID);
        const curYear = new Date().getFullYear();

        // console.log(curYear)
        async function getAllSecondLevelSuperflesTEPUserIDs() {
          const userLeaguesres = await axios.get(
            `https://api.sleeper.app/v1/user/${SFTEPsecondGenUserID}/leagues/nfl/${curYear}`
          );
          //   console.log(userLeaguesres.data);
          let tempUserLeaguesArray = userLeaguesres.data;

          // console.log(tempUserLeaguesArray.length)
          tempUserLeaguesArray.forEach(function (league) {
            // console.log(league.roster_positions);
            let temp = league.roster_positions;
            //
            if (temp.includes('SUPER_FLEX') == true) {
              //   console.log(temp);

              if (league.scoring_settings.bonus_rec_te) {
                // console.log(league.scoring_settings.bonus_rec_te);
                if (
                  secondLevelSuperflexTEPTempLeagueIDsArray.includes(
                    league.league_id
                  ) === false
                ) {
                  secondLevelSuperflexTEPTempLeagueIDsArray.push(
                    league.league_id
                  );
                }
              }

              if (!league.scoring_settings.bonus_rec_te) {
                if (
                  secondLevelSuperflexNonTEPTempLeagueIDsArray.includes(
                    league.league_id
                  ) === false
                ) {
                  // console.log(league.scoring_settings.bonus_rec_te, league.league_id);
                  secondLevelSuperflexNonTEPTempLeagueIDsArray.push(
                    league.league_id
                  );
                }
              }
            }

            if (temp.includes('SUPER_FLEX') == false) {
              if (
                secondLevelNonSuperflexTempLeagueIDsArray.includes(
                  league.league_id
                ) === false
              ) {
                //   console.log(temp, league.league_id);
                secondLevelNonSuperflexTempLeagueIDsArray.push(
                  league.league_id
                );
              }
            }
          });

          // console.log(secondLevelSuperflexTEPTempLeagueIDsArray);
          //   console.log(secondLevelSuperflexNonTEPTempLeagueIDsArray);
          //   console.log(secondLevelSuperflexNonTEPTempLeagueIDsArray);
        }

        getAllSecondLevelSuperflesTEPUserIDs();
      });

      ////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////
    } // end of async function getAllIntitalUserIDs() {

    getAllIntitalSuperflesTEPUserIDs();
  }); // end of superflexTEPTempLeagueIDsArray.forEach(function (leagueID) {

  ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  ////////////
  //    for superflexNonTEP leagues only
  ////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  superflexNonTEPTempLeagueIDsArray.forEach(function (leagueID) {
    async function getAllIntitalSuperflesNonTEPUserIDs() {
      //   console.log(leagueID, curYear);
      const initialUserLeaguesUsersres = await axios.get(
        // `https://api.sleeper.app/v1/user/${leagueID}/leagues/nfl/${curYear}`
        `https://api.sleeper.app/v1/league/${leagueID}/users`
      );
      //   console.log(initialUserLeaguesUsersres.data);

      let initialUsersAllLeaguesUsersArray = initialUserLeaguesUsersres.data;

      //   console.log(initialUsersAllLeaguesUsersArray);
      superflexNonTEPsecondGenUserIdsArray = [];
      initialUsersAllLeaguesUsersArray.forEach(function (user) {
        // console.log(user.user_id);
        if (
          superflexNonTEPsecondGenUserIdsArray.includes(user.user_id) === true
        ) {
          //   console.log(superflexNonTEPsecondGenUserIdsArray, user.user_id);
        }
        if (
          superflexNonTEPsecondGenUserIdsArray.includes(user.user_id) === false
        ) {
          //   console.log(superflexNonTEPsecondGenUserIdsArray, user.user_id);
          superflexNonTEPsecondGenUserIdsArray.push(user.user_id);
        }
      }); // end of const initialUserLeaguesUsersres = await axios.get(

      //
      //   console.log(superflexNonTEPsecondGenUserIdsArray);

      //////////////////////////////////////////////////////////////////////////////////////////  //////////////////////////////////////////////////////////////////////////////////////////

      // using superflexNonTEPsecondGenUserIdsArray to get all league ID's for the second gen users list

      superflexNonTEPsecondGenUserIdsArray.forEach(function (
        SFNonTEPsecondGenUserID
      ) {
        // console.log(SFNonTEPsecondGenUserID);
      });
    } // end of async function getAllIntitalSuperflesNonTEPUserIDs() {

    getAllIntitalSuperflesNonTEPUserIDs();
  }); // superflexNonTEPTempLeagueIDsArray.forEach(function (leagueID) {

  ////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  ////////////
  //    for non superflex leagues only
  ////////////
  ////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////

  nonSuperflexTempLeagueIDsArray.forEach(function (leagueID) {
    async function getAllIntitalNonSuperflexUserIDs() {
      //   console.log(leagueID, curYear);
      const initialUserLeaguesUsersres = await axios.get(
        // `https://api.sleeper.app/v1/user/${leagueID}/leagues/nfl/${curYear}`
        `https://api.sleeper.app/v1/league/${leagueID}/users`
      );
      //   console.log(initialUserLeaguesUsersres.data);

      let initialUsersAllLeaguesUsersArray = initialUserLeaguesUsersres.data;

      //   console.log(initialUsersAllLeaguesUsersArray);
      nonSuperflexsecondGenUserIdsArray = [];
      initialUsersAllLeaguesUsersArray.forEach(function (user) {
        // console.log(user.user_id);
        if (nonSuperflexsecondGenUserIdsArray.includes(user.user_id) === true) {
          //   console.log(nonSuperflexsecondGenUserIdsArray, user.user_id);
        }
        if (
          nonSuperflexsecondGenUserIdsArray.includes(user.user_id) === false
        ) {
          //   console.log(nonSuperflexsecondGenUserIdsArray, user.user_id);
          nonSuperflexsecondGenUserIdsArray.push(user.user_id);
        }
      }); // end of const initialUserLeaguesUsersres = await axios.get(

      //
      //   console.log(nonSuperflexsecondGenUserIdsArray);

      //////////////////////////////////////////////////////////////////////////////////////////  //////////////////////////////////////////////////////////////////////////////////////////

      // using nonSuperflexsecondGenUserIdsArray to get all league ID's for the second gen users list

      nonSuperflexsecondGenUserIdsArray.forEach(function (
        NonSFsecondGenUserID
      ) {
        // console.log(NonSFsecondGenUserID);
      });
    } // end of async function getAllIntitalNonSuperflexUserIDs() {

    getAllIntitalNonSuperflexUserIDs();
  }); // nonSuperflexTempLeagueIDsArray.forEach(function (leagueID) {
}
fetchInitialSetOfLeagues();
