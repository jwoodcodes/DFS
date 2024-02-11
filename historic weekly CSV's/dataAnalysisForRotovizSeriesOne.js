const { MongoClient } = require('mongodb');

const before2023SeasonRVRedraftRankingsTEP = require('./before2023SeasonRVRedraftRankings');
const before2023SeasonFFPCRedraftADP = require('./FFPCBefore2023RedraftADP');

const before2023SeasonRVDynastyRankings = require('./week-6-2023/rvDynastyRankingsTEP');

const full2023PPRFinalStandings = require('./full2023PPRFinalStandings');

const alltradeCalculaterDataArray = [];
const newData = [];

const august2023alltradeCalculaterDataArray = [];
const august2023NewData = [];

/////// fetching current fantasyCalc data

async function fetchRawFantasyCalcDataFromMongodb() {
  const url =
    'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/fantasycalcData';
  const client = new MongoClient(url);

  // The database to use
  const dbName = 'dailydynasties';
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    // Use the collection "fantasycalcData"
    const col = db.collection('fantasycalcData');

    // Construct a document

    // Insert a single document, wait for promise so we can read it back
    // const p = await col.insertOne(allFantasyCalcData);
    // Find one document
    const myDoc = await col.findOne();

    return myDoc;
    // Print to the console
    // console.log(myDoc);

    ////////////////////////////////////
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

// fetching late August 2023 fantasyCalc data

async function fetchAugust2023FantasyCalcDataFromMongodb() {
  const url =
    'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/august-28-2023-snapshot';
  const client = new MongoClient(url);

  // The database to use
  const dbName = 'dailydynasties';
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    // Use the collection "fantasycalcData"
    const col = db.collection('august-28-2023-snapshot');

    // Construct a document

    // Insert a single document, wait for promise so we can read it back
    // const p = await col.insertOne(allFantasyCalcData);
    // Find one document
    const myDoc = await col.findOne();

    return myDoc;
    // Print to the console
    // console.log(myDoc);

    ////////////////////////////////////
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

//using current and late august 2023 fantasycalc value

let playerArray = [];
let august2023PlayerArray = [];

const testfunc = async function () {
  const test = await alltradeCalculaterDataArray;
  // console.log(test);
  const testDoc = await fetchRawFantasyCalcDataFromMongodb();

  newData.push(testDoc);

  //   console.log(newData);

  const august2023TestDoc = await fetchAugust2023FantasyCalcDataFromMongodb();
  // console.log(testDoc);
  august2023NewData.push(august2023TestDoc);

  //   console.log(august2023NewData);

  newData.forEach(function (topLevelObject) {
    playerArray = topLevelObject.data;

    // console.log(PlayerArray);
  });

  august2023NewData.forEach(august2023TopLevelDataObject => {
    august2023PlayerArray =
      august2023TopLevelDataObject.dynastyRankingsDataObjectsArray;
  });

  //////////////////////////////////////////////////////////
  // below here is where the comparing august 2023 dynasty to value to current dynasty value is being done
  //
  // need to sanitize the name inputs from both before comparing names!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  let num = 0;
  playerArray.forEach(player => {
    // console.log(player.player.name, player.value);

    let sanitizedPlayerName = player.player.name;

    // sanitizing playerArray names

    sanitizedPlayerName = sanitizedPlayerName
      .replace("'", '')
      .replace('.', '')
      .replace('.', '');
    if (sanitizedPlayerName.includes('Jr')) {
      // console.log(playerObject['"PLAYER NAME"']);
      sanitizedPlayerName = sanitizedPlayerName.replace('Jr', '');
    }

    august2023PlayerArray.forEach(augPlayer => {
      // sanitizing augplayer names

      let sanitizedAugPlayerName = augPlayer.name;

      sanitizedAugPlayerName = sanitizedAugPlayerName
        .replace("'", '')
        .replace('.', '')
        .replace('.', '');
      if (sanitizedAugPlayerName.includes('Jr')) {
        // console.log(playerObject['"PLAYER NAME"']);
        sanitizedAugPlayerName = sanitizedAugPlayerName.replace('Jr', '');
      }

      if (sanitizedPlayerName === sanitizedAugPlayerName) {
        //////////////////////////////////
        //////////////////////////////////////
        /////////////////////////////////////////
        ////////////////////////////////////////
        //               do everything in here
        ///////////////////////////////
        //////////////////////////////////

        // console.log(player);
        // console.log(augPlayer);

        // console.log(sanitizedAugPlayerName);

        // console.log(sanitizedAugPlayerName);
        // console.log(augPlayer.marketValue);
        // console.log(player.player.maybeAge);

        let valueDifferenceFromAugustToThisOffseason =
          player.value - augPlayer.marketValue;

        let valueLostWillBeAPostiveNumberValueDiff =
          augPlayer.marketValue - player.value;

        let myValueValueDifferenceromAugustToThisOffseason =  player.value - augPlayer.myValue

       

        // console.log(sanitizedAugPlayerName, myValueValueDifferenceromAugustToThisOffseason)

        // console.log(
        //   sanitizedAugPlayerName,
        //   valueDifferenceFromAugustToThisOffseason
        // );

        // console.log(augPlayer);

        let augAge = player.player.maybeAge - 0.8;
        // && augAge < 25

        // for value risers

        // if (valueDifferenceFromAugustToThisOffseason > 800) {
        //   console.log(
        //     sanitizedAugPlayerName,
        //     valueDifferenceFromAugustToThisOffseason,
        //     player.player.maybeAge
        //   );
        // }

        // for value droppers

        // valueLostWillBeAPostiveNumberValueDiff > 800 &&  



        if (
          
          augPlayer.marketValue > 800 &&
          myValueValueDifferenceromAugustToThisOffseason > 800 &&
          valueDifferenceFromAugustToThisOffseason > 250
        ) {
          // num = num + 1;
          // console.log(
          //   num,
          //   sanitizedAugPlayerName,
          //   valueDifferenceFromAugustToThisOffseason,
            
          //   // player.player.maybeAge
          // );
        }

        before2023SeasonRVDynastyRankings.forEach(augRVDynastyPlayer => {
          // console.log(augRVDynastyPlayer['"Player"'].slice(1, -1));

          let sanitizedRVPlayerName = augRVDynastyPlayer['"Player"'].slice(
            1,
            -1
          );

          sanitizedAugPlayerName = sanitizedAugPlayerName
            .replace("'", '')
            .replace('.', '')
            .replace('.', '');
          if (sanitizedAugPlayerName.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            sanitizedAugPlayerName = sanitizedAugPlayerName.replace('Jr', '');
          }

          let whoRVwasLowerOn =
            +augRVDynastyPlayer['"Rank"'] - augPlayer.marketOverallRank;
          let whoRVwasHigherOn =
            augPlayer.marketOverallRank - +augRVDynastyPlayer['"Rank"'];

          // +augRVDynastyPlayer['"Rank"'] < 50
          // augAge > 25
          // valueDifferenceFromAugustToThisOffseason > 0
          // augPlayer.marketValue > 800 &&
          // whoRVwasHigherOn >= 5 &&

          if (sanitizedAugPlayerName === sanitizedRVPlayerName) {
            if (
              
              +augRVDynastyPlayer['"Rank"'] < 100 
            ) {
              // num = num + 1;
              // console.log(
              //   num,
              //   sanitizedRVPlayerName,
              //   // +augRVDynastyPlayer['"Rank"'],
              //   valueDifferenceFromAugustToThisOffseason,
              //   player.player.maybeAge
              // );

              before2023SeasonRVRedraftRankingsTEP.forEach(rvPlayer => {
                //   console.log(rvPlayer['"Player"'].slice(1, -1));
    
                before2023SeasonFFPCRedraftADP.forEach(ffpcPlayer => {
                  if(rvPlayer['"Player"'].slice(1, -1) === sanitizedAugPlayerName) {
                  if (
                    rvPlayer['"Player"'].slice(1, -1) === ffpcPlayer['"Player"'].slice(1, -1)
                  ) {
                    //   console.log(ffpcPlayer['"Player"'].slice(1, -1));
    
                    // ffpcPlayer['"ADP"'],
                    //     rvPlayer['"AVGRank"'],
                    
                    let difference = (ffpcPlayer['"ADP"'] - rvPlayer['"AVGRank"']).toFixed(2);
                    let IfMarketISHigherNumberIsPositiveDifference = (rvPlayer['"AVGRank"'] - ffpcPlayer['"ADP"']).toFixed(2)

                    // console.log(sanitizedRVPlayerName, ffpcPlayer['"ADP"'], rvPlayer['"AVGRank"'])

                    full2023PPRFinalStandings.forEach((final2023Player) => {
                      // console.log(final2023Player.Player)
                      let sanitized2023FinalPlayerName = final2023Player.Player.slice(
                        1,
                        -1
                      );
            
                      sanitized2023FinalPlayerName = sanitized2023FinalPlayerName
                        .replace("'", '')
                        .replace('.', '')
                        .replace('.', '');
                      if (sanitized2023FinalPlayerName.includes('Jr')) {
                        // console.log(playerObject['"PLAYER NAME"']);
                        sanitized2023FinalPlayerName = sanitized2023FinalPlayerName.replace('Jr', '');
                      }
                      
                      // console.log(sanitized2023FinalPlayerName)

                      if(sanitized2023FinalPlayerName === ffpcPlayer['"Player"'].slice(1, -1)) {
                        num = num + 1

                        



                        console.log(sanitized2023FinalPlayerName, final2023Player['"PPR Pts/G"'], ffpcPlayer['"ADP"'], num)
                      }
                    })

                    

                    if( IfMarketISHigherNumberIsPositiveDifference > 3 ) {
                      // num = num + 1
                      // console.log(
                      //   num,
                      //   ffpcPlayer['"Player"'].slice(1, -1),
                      //   valueDifferenceFromAugustToThisOffseason,
                      //   difference,
                      //   // player.player.maybeAge
                      // );
                    }

                    
                  }
                }
                });
              });

            }
          }


         

        });
      }
    });
  });

  //   console.log(august2023PlayerArray);
};

/// notes

// players who gained at least 800 value:

// 49 total
// 78% (38) below 25
// 41% (20) entered season under 23

// players who lost at least 800 value:

// 48 total
// 38% (18) under 25
// 8% (4) under 23

// 168 players entered last season OVER the age of 23 with a market value of at least 800:
// 16.7% (28) gained at least 800 in value
// 26.1% (44) lost at least 800 in value

//101 players entered last season OVER 25 with a market value of at least 800
// 10.8% (11) gained at least 800 in value
// 29.7% (30) lost at least 800 in value

// 46 players entered last season UNDER 23 with a market value of at least 800:
// 43.4% (20) gained at least 800 value
// only 8.7% (4 total) lost at least 800 value

// players ranked in top 50 or RV dynasty rankings that RV was at least 2 spots higher on than market:
// 19 total
// 79% (15) went up in value regardless of age
// only 5% (1) went down by more than 250 value points
// 12 entered season under 25, 75% (9) went up in value, none went down by more than 250 value points
// of players that entered season over 25: only 1/7 went down at all, tony pollard by 1075

//
// players who enetered season in top 100 of RV dynasty rankings && RV was at least 5 spots HIGHER on
// 47 total
// 64% (30) at least maintained value, 16/26 below 25, 8/13 below 23
// 51% (24) gained in value by more than 250 points
// 19.1% (9) went down by more than 250 value points, 6/26 below 25, 3/13 below 23

// players who enetered season in top 100 of RV dynasty rankings && RV was at least 5 spots LOWER on
// 19 total
// 15.7% (3 total) at least maintained value
// 15.7% (3 total) gained in value by more than 250 points, all 3 were over over 25
// 79% (15) went down by more than 250 value points, 73% (11/15) over 25,

/////////////// adding in redraft rankings stuff

// players who were in RV dynasty top 100 rankings && RV redraft rankingswas at least 3 spots higher than ADP:

// 51 total
// 49% (25) at least maintained value
// 41% (21) gained in value by more than 250 points
// 35% (18) lost at least 250 value points

// players that were top 100 in rotoviz dynasty rankings & RV dynasty rankings were at least 5 spots higher than market (i.e Rotoviz thought they were better) && RV redraft rankings were at least 3 spots higher than market
// 48 total
// 64.5% (31) at least maintained value
// 51.6% (16) gained in value by more than 250 points
// 16.1% (5) lost at least 250 value points

// players that were in top 100 in RV dynasty rankings && RV redraft rankings were at least 3 spots LOWER (i.e Rotoviz thought they were worse) than ADP 

// 20 total
// 40% (8) at least maintained value
// 30% (6) gained in value by more than 250 points
// 55% (11) lost at least 250 value points

// players who were in RV top 100 dynasty rankings && RV dynasty rankings were 5 or more spots lower on them than the market and RV redraft rankings were at least 3 spots higher than market

// 5 total
// all 5 lost more than 300 value points


///////////////// next things I need to do are the two sections below here  ////////////////////

///////////////////////// weaving age into the two above groupings

//////////////////////// just what happened to dynasty value depending on how much higher or lower they finished in final fantasy posiotnal finish than their preseason redraft ADP, (should also weave age into here as well)

testfunc();

// before2023SeasonRVRedraftRankingsTEP.forEach(rvPlayer => {
//   //   console.log(rvPlayer['"Player"'].slice(1, -1));
//   before2023SeasonFFPCRedraftADP.forEach(ffpcPlayer => {
//     if (
//       rvPlayer['"Player"'].slice(1, -1) === ffpcPlayer['"Player"'].slice(1, -1)
//     ) {
//       //   console.log(ffpcPlayer['"Player"'].slice(1, -1));

//       let difference = (ffpcPlayer['"ADP"'] - rvPlayer['"AVGRank"']).toFixed(2);

//         console.log(
//           ffpcPlayer['"Player"'].slice(1, -1),
//           ffpcPlayer['"ADP"'],
//           rvPlayer['"AVGRank"'],
//           difference
//         );
//     }
//   });
// });

// before2023SeasonFFPCRedraftADP.forEach(ffpcPlayer => {
//   console.log(ffpcPlayer['"Player"'].slice(1, -1));
// });
