const { MongoClient } = require('mongodb');

const before2023SeasonRVRedraftRankingsTEP = require('./before2023SeasonRVRedraftRankings');

// 2021 redraft positional ADPs
const qb2021 = require('./historic Positional redraft ADPs/qb2021');
const rb2021PPRRedraftADP = require('./historic Positional redraft ADPs/rb2021PPRRedraftADP');
const wr2021PPRRedraftADP = require('./historic Positional redraft ADPs/wr2021PPRRedraftADP');
const te2021PPRRedraftADP = require('./historic Positional redraft ADPs/te2021PPRRedraftADP');

// 2022 redraft positional ADPs
const qb2022PPRRedraftADP = require('./historic Positional redraft ADPs/qb2022PPRRedraftADP');
const rb2022PPRRedraftADP = require('./historic Positional redraft ADPs/rb2022PPRRedraftADP');
const wr2022PPRRedraftADP = require('./historic Positional redraft ADPs/wr2022PPRRedraftADP');
const te2022PPRRedraftADP = require('./historic Positional redraft ADPs/te2022PPRRedraftADP');

// 2023 redraft positional ADPs
const qb2023PPRRedraftADP = require('./historic Positional redraft ADPs/qb2023PPRRedraftADP');
const rb2023PPRRedraftADP = require('./historic Positional redraft ADPs/rb2023PPRRedraftADP');
const wr2023PPRRedraftADP = require('./historic Positional redraft ADPs/wr2023PPRRedraftADP');
const te2023PPRRedraftADP = require('./historic Positional redraft ADPs/te2023PPRRedraftADP');

const before2023SeasonFFPCRedraftADP = require('./FFPCBefore2023RedraftADP');

// 2021 final positional PPR standings
const qb2021PPRFinalStandings = require('./historic Positional season long finishes/qb2021PPRFinalStandings');
const rb2021PPRFinalStandings = require('./historic Positional season long finishes/rb2021PPRFinalStandings');
const wr2021PPRFinalStandings = require('./historic Positional season long finishes/wr2021PPRFinalStandings');
const te2021PPRFinalStandings = require('./historic Positional season long finishes/te2021PPRFinalStandings');

// 2022 final positional PPR standings
const qb2022PPRFinalStandings = require('./historic Positional season long finishes/qb2022PPRFinalStandings');
const rb2022PPRFinalStandings = require('./historic Positional season long finishes/rb2022PPRFinalStandings');
const wr2022PPRFinalStandings = require('./historic Positional season long finishes/wr2022PPRFinalStandings');
const te2022PPRFinalStandings = require('./historic Positional season long finishes/te2022PPRFinalStandings');

// 2023 final positional PPR standings
const qbFinal2023Standings = require('./qbFinal2023Standing');
const rbFinal2023Standings = require('./rbFinal2023Standings');
const wrFinal2023Standings = require('./wrFinal2023Standings');
const teFinal2023Standings = require('./teFinal2023Standings');

// offseason dynasty ADP's
const FFPC2021OffseasonDynastyADP = require('./FFPC2021OffseasonDynastyADP');
const FFPC2022OffseasonDynastyADP = require('./FFPC2022OffseasonDynastyADP');
const FFPC2023OffseasonDynastyADP = require('./FFPC2023OffseasonDynastyADP');
const jan1Feb16ADP = require('./jan1-feb16-2024ADP');

const before2023SeasonRVDynastyRankings = require('./week-6-2023/rvDynastyRankingsTEP');

const alltradeCalculaterDataArray = [];
const newData = [];

const august2023alltradeCalculaterDataArray = [];
const august2023NewData = [];

// const full2023PPRFinalStandings = require('./full2023PPRFinalStandings');

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

        let playersPreseasonDynastyADP = 0;

        FFPC2021OffseasonDynastyADP.forEach(preseasonPlayer => {
          // console.log(preseasonPlayer);
          let sanitizedPreseasonPlayerName = preseasonPlayer['"Player"'].slice(
            1,
            -1
          );

          sanitizedPreseasonPlayerName = sanitizedPreseasonPlayerName
            .replace("'", '')
            .replace('.', '')
            .replace('.', '');
          if (sanitizedPreseasonPlayerName.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            sanitizedPreseasonPlayerName = sanitizedPreseasonPlayerName.replace(
              'Jr',
              ''
            );
          }

          // console.log(sanitizedPreseasonPlayerName);

          if (sanitizedPreseasonPlayerName === sanitizedAugPlayerName) {
            // console.log(preseasonPlayer['"ADP"']);
            playersPreseasonDynastyADP = preseasonPlayer['"ADP"'];
          }
        });

        let playersPostseasonDynastyADP = 0;

        FFPC2022OffseasonDynastyADP.forEach(postseasonPlayer => {
          let sanitizedPostseasonPlayerName = postseasonPlayer[
            '"Player"'
          ].slice(1, -1);

          sanitizedPostseasonPlayerName = sanitizedPostseasonPlayerName
            .replace("'", '')
            .replace('.', '')
            .replace('.', '');
          if (sanitizedPostseasonPlayerName.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            sanitizedPostseasonPlayerName =
              sanitizedPostseasonPlayerName.replace('Jr', '');
          }

          // console.log(sanitizedPostseasonPlayerName);

          if (sanitizedPostseasonPlayerName === sanitizedAugPlayerName) {
            // console.log(preseasonPlayer['"ADP"']);
            playersPostseasonDynastyADP = postseasonPlayer['"ADP"'];
          }
        });

        let valueDifferenceFromAugustToThisOffseason =
          player.value - augPlayer.marketValue;

        let valueLostWillBeAPostiveNumberValueDiff =
          augPlayer.marketValue - player.value;

        let myValueValueDifferenceromAugustToThisOffseason =
          player.value - augPlayer.myValue;

        // console.log(sanitizedAugPlayerName, myValueValueDifferenceromAugustToThisOffseason)

        // console.log(
        //   sanitizedAugPlayerName,
        //   valueDifferenceFromAugustToThisOffseason
        // );

        // console.log(augPlayer);
        let aug2021Age = player.player.maybeAge - 2.8;
        let aug2022Age = player.player.maybeAge - 1.8;
        let aug2023Age = player.player.maybeAge - 0.8;

        te2021PPRFinalStandings.forEach(finalPlayer => {
          // console.log(finalPlayer['"Player"'].slice(1, -1));

          let sanitizedFinalPlayerName = finalPlayer['"Player"'].slice(1, -1);

          sanitizedFinalPlayerName = sanitizedFinalPlayerName
            .replace("'", '')
            .replace('.', '')
            .replace('.', '');
          if (sanitizedFinalPlayerName.includes('Jr')) {
            // console.log(playerObject['"PLAYER NAME"']);
            sanitizedFinalPlayerName ===
              sanitizedFinalPlayerName.replace('Jr', '');
          }

          if (sanitizedFinalPlayerName === sanitizedAugPlayerName) {
            // console.log(sanitizedFinalPlayerName);
            te2021PPRRedraftADP.forEach(ffpcPlayer => {
              // console.log(ffpcPlayer['"Player"']);

              let sanitizedffpcPlayerName = ffpcPlayer['"Player"'].slice(1, -1);

              sanitizedffpcPlayerName = sanitizedffpcPlayerName
                .replace("'", '')
                .replace('.', '')
                .replace('.', '');
              if (sanitizedffpcPlayerName.includes('Jr')) {
                // console.log(playerObject['"PLAYER NAME"']);
                sanitizedffpcPlayerName = sanitizedffpcPlayerName.replace(
                  'Jr',
                  ''
                );
              }

              let finalNumericalPositionalFinish = +finalPlayer['"#"'].slice(
                1,
                -1
              );

              let posionalFinishDiff =
                +ffpcPlayer['"TE"'].slice(1, -1) -
                finalNumericalPositionalFinish;

              let posFinishDiffIfYouNeedALoseToBeAPositiveNumber =
                finalNumericalPositionalFinish -
                +ffpcPlayer['"TE"'].slice(1, -1);

              let valueWillBePositiveIfWorseposionalFinishDiff =
                finalNumericalPositionalFinish -
                +ffpcPlayer['"TE"'].slice(1, -1);

              let adpDiff = +(
                playersPreseasonDynastyADP - playersPostseasonDynastyADP
              ).toFixed(2);

              if (sanitizedFinalPlayerName === sanitizedffpcPlayerName) {
                // console.log(sanitizedFinalPlayerName);
                // console.log(ffpcPlayer);
                if (
                  aug2021Age < 23
                  // uncomment below for those that overperformed
                  //   posionalFinishDiff > 10) ||
                  // (playersPreseasonDynastyADP < 13 && posionalFinishDiff > 4)
                  // uncomment below for those that underperformed
                  //   posFinishDiffIfYouNeedALoseToBeAPositiveNumber > 10) ||
                  // (playersPreseasonDynastyADP < 13 &&
                  //   posFinishDiffIfYouNeedALoseToBeAPositiveNumber > 4)
                ) {
                  num = num + 1;
                  console.log(
                    num,
                    sanitizedFinalPlayerName,
                    +ffpcPlayer['"TE"'].slice(1, -1),
                    // finalNumericalPositionalFinish,

                    posionalFinishDiff,
                    '  ',
                    playersPreseasonDynastyADP,
                    playersPostseasonDynastyADP,
                    '  ',
                    adpDiff
                  );
                }
              }
            });
          }
        });

        /////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////

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
          // whoRVwasHigherOn > 2 &&
          // +augRVDynastyPlayer['"Rank"'] < 100 &&
          // valueDifferenceFromAugustToThisOffseason > 799

          if (sanitizedAugPlayerName === sanitizedRVPlayerName) {
            if (aug2021Age < 23) {
              // num = num + 1;
              // console.log(
              //   num,
              //   sanitizedRVPlayerName,
              //   augPlayer.marketValue,
              //   player.value,
              //   // +augRVDynastyPlayer['"Rank"'],
              //   valueDifferenceFromAugustToThisOffseason,
              //   whoRVwasHigherOn
              // );
            }
          }
        });
      }
    });
  });

  //   console.log(august2023PlayerArray);
};

/// notes

// new notes

// for this an overperfrom is finishing 5 spots better if were top 12 or 10 spots better if outside top 12 august positioal ADP

//
//2021-2022:
//

//
//////////////////////////////////////////////////////// QB  //////////////////////////////////////////////////////////:

// entered season under 23 - 7 total

// 3/7 gained in ADP
// 2/7 rose at least a full round of ADP
// 4/7 dropped in ADP
// 2/7 dropped by at least a full round of ADP

// overperformed: 0
//underperformed: 3/7 - 1/3 gained in ADP, 2/3 lost in ADP, 0/3 gained >= a full round of ADP, 1/3 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 9 total

// 6/9 gained in ADP
// 0/9 rose at least a full round of ADP
// 3/9 dropped in ADP
// 2/9 dropped by at least a full round of ADP

// overperformed: 1/9  - 1/1 gained in ADP, 0/1 lost in ADP, 0/1 gained >= a full round of ADP, 0/1 lost >= a full round of ADP
//underperformed: 2/9 - 1/2 gained in ADP, 1/2 lost in ADP, 0/2 gained >= a full round of ADP, 0/2 lost >= a full round of ADP

///////
///////
// entered season over 25 - 12 total

// 5/12 gained in ADP
// 4/9 rose at least a full round of ADP
// 7/9 dropped in ADP
// 4/9 dropped by at least a full round of ADP

// overperformed: 3/12 - 2/3 gained in ADP, 1/3 lost in ADP, 2/3 gained >= a full round of ADP, 0/3 lost >= a full round of ADP
//underperformed: 4/12 - 1/4 gained in ADP, 3/4 lost in ADP, 1/4 gained >= a full round of ADP, 2/4 lost >= a full round of ADP

//
//////////////////////////////////////////////////////////// RB ///////////////////////////////////////////////////////////////
//
// entered season under 23 - 14 total

// 7/14 gained in ADP
// 3/14 rose at least a full round of ADP
// 7/14 dropped in ADP
// 6/14 dropped by at least a full round of ADP

// overperformed: 5/14 - 3/5 gained in ADP, 2/5 lost in ADP, 3/5 gained >= a full round of ADP, 1/5 lost >= a full round of ADP
//underperformed: 3/14 - 1/3 gained in ADP, 2/3 lost in ADP, 0/3 gained >= a full round of ADP, 2/3 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 15 total

// 5/15 gained in ADP
// 3/15 rose at least a full round of ADP
// 10/15 dropped in ADP
// 8/15 dropped by at least a full round of ADP

// overperformed: 6/15 - 3/6 gained in ADP, 3/6 lost in ADP, 3/6 gained >= a full round of ADP, 1/6 lost >= a full round of ADP
//underperformed: 6/15 - 0/6 gained in ADP, 6/6 lost in ADP, 0/6 gained >= a full round of ADP, 5/6 lost >= a full round of ADP

///////
///////
// entered season over 25 - 18 total

// 6/18 gained in ADP
// 4/18 rose at least a full round of ADP
// 12/18 dropped in ADP
// 10/18 dropped by at least a full round of ADP

// overperformed: 6/18 - 5/6 gained in ADP, 1/6 lost in ADP, 4/6 gained >= a full round of ADP, 1/6 lost >= a full round of ADP
//underperformed: 6/18- 0/6 gained in ADP, 6/6 lost in ADP, 0/6 gained >= a full round of ADP, 5/6 lost >= a full round of ADP

//
////////////////////////////////////////////////////// WR ///////////////////////////////////////////////////////////////
//
// entered season under 23 - 20 total

// 15/20 gained in ADP
// 10/20 rose at least a full round of ADP
// 5/20 dropped in ADP
// 2/20 dropped by at least a full round of ADP

// overperformed: 17/20 - 14/17 gained in ADP, 3/17 lost in ADP, 10/17 gained >= a full round of ADP, 0/17 lost >= a full round of ADP
//underperformed: 3/20- 0/3 gained in ADP, 2/3 lost in ADP, 0/3 gained >= a full round of ADP, 2/3 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 17 total

// 9/17 gained in ADP
// 5/17 rose at least a full round of ADP
// 6/17 dropped in ADP
// 4/17 dropped by at least a full round of ADP

// overperformed: 8/17 - 6-8 gained in ADP, 2/8 lost in ADP, 5/8 gained >= a full round of ADP, 0/8 lost >= a full round of ADP
//underperformed: 6/17 - 0/6 gained in ADP, 6/6 lost in ADP, 0/6 gained >= a full round of ADP, 4/6 lost >= a full round of ADP

///////
///////
// entered season over 25 - 34 total

// 12/34 gained in ADP
// 8/34 rose at least a full round of ADP
// 22/34 dropped in ADP
// 14/34 dropped by at least a full round of ADP

// overperformed: 18/34 - 6/18 gained in ADP, 12/18 lost in ADP, 5/18 gained >= a full round of ADP, 0/18 lost >= a full round of ADP
//underperformed: 8/34- 0/8 gained in ADP, 8/8 lost in ADP, 0/8 gained >= a full round of ADP, 7/8 lost >= a full round of ADP

//
//////////////////////////////////////////////////// TE ///////////////////////////////////////////////////////////////
//

//
// entered season under 23 - 4 total

// 3/4 gained in ADP
// 2/4 rose at least a full round of ADP
// 3/4 dropped in ADP
// 1/4 dropped by at least a full round of ADP

// overperformed: 1/4 - 1/1 gained in ADP, 0/1 lost in ADP, 1/1 gained >= a full round of ADP, 0/1 lost >= a full round of ADP
//underperformed: 1/4- 0/1 gained in ADP, 1/1 lost in ADP, 0/1 gained >= a full round of ADP, 1/1 lost >= a full round of ADP

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2022-2023:

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2023-2024:

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////// just age

// players who gained at least 800 value:

// 49 total
// 78% (38) below 25
// 41% (20) entered season under 23

// players who lost at least 800 value:

// 48 total
// 54% (26) over 25
// 38% (18) under 25
// 8% (4) under 23

//

// 168 players entered last season OVER the age of 23 with a market value of at least 800:
// 16.7% (28) gained at least 800 in value
// 26.1% (44) lost at least 800 in value

//101 players entered last season OVER 25 with a market value of at least 800
// 10.8% (11) gained at least 800 in value
// 29.7% (30) lost at least 800 in value

// 46 players entered last season UNDER 23 with a market value of at least 800:
// 43.4% (20) gained at least 800 value
// only 8.7% (4 total) lost at least 800 value

/////////////////////////////////////////// bringing in RV dynasty rankings and RV dynasty rankings vs. market

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

// of the 11 players who were over 25 and gained more than 800 value points RV dynasty rankings were at least 6 higher on 8/11 and at least 2 higher on 9/11

////////////
///////////

/////////////// adding in redraft rankings stuff

// how age effected value considering how they player performed vs. expectations

// for this an overperfrom is finishing 5 spots better if were top 12 or 10 spots better if outside top 12 august positioal ADP

// below 23 years old

//// QB- 4 total
// 2 overperform- 1/2 gained, 1/2 lost (howell), 1/2 gained > 250, 1/2 lost > 250, 1/2 gained greater than 800, 0/2 lost more than 800
// 1 underperform- 1/1 gained, 0/1 lost, 1/1 gained > 250, 0/1 lost > 250, 1/1 gained > 800, 0/1 lost > 800

//// RB- 11 total who started year > 800 market value
// 3 overperform- 3/3 gained, 0/3 lost, 3/3 gained > 250, 0/3 lost > 250, 3/3 gained greater than 800 (all gained > 1,000), 0/3 lost more than 800
// 6 underperform- 2/6 gained, 4/6 lost, 1/6 gained > 250, 4/6 lost > 250, 0/6 gained > 800, 0/6 lost > 800

//// WR- 19 total who started year > 800 market value
// 7 overperform- 6/7 gained, 1/7 lost, 5/7 gained > 250, 0/7 lost > 250, 4/7 gained greater than 800 , 0/7 lost more than 800
// 8 underperform- 4/8 gained, 4/8 lost, 1/8 gained > 250, 2/8 lost > 250, 0/8 gained > 800, 2/8 lost > 800 (QJ & Skyy)

//// TE - 4 total who started year > 800 market value
// 1 overperform- 1/1 gained, 0/1 lost, 1/1 gained > 250, 0/1 lost > 250, 1/1 gained greater than 800 , 0/1 lost more than 800
// 2 underperform- 1/2 gained, 1/2 lost, 0/2 gained > 250, 0/2 lost > 250, 0/2 gained > 800, 0/2 lost > 800

// between 23.0 and 25.0 years old

// QB- 9 total
// 3 overperform- 2/3 gained, 1/3 lost (ridder), 2/3 gained > 250, 1/3 lost > 250, 2/3 gained greater than 800, 1/3 lost more than 800 (ridder)
// 4 underperformed- 0/4 gained, 4/4 lost, 0/4 gained > 250, 4/4 lost > 250, 0/4 gained > 800, 3/4 lost > 800

//// RB- 22 total who started year > 800 market value
// 8 overperform- 5/8 gained, 2/8 lost, 5/8 gained > 250, 1/8 lost > 250, 3/8 gained greater than 800, 0/8 lost more than 800
// 7 underperform- 0/7 gained, 7/7 lost, 0/7 gained > 250, 7/7 lost > 250, 0/7 gained > 800, 5/7 lost > 800

//// WR- 24 total who started year > 800 market value
// 6 overperform- 6/6 gained, 0/6 lost, 6/6 gained > 250, 0/6 lost > 250, 2/6 gained greater than 800, 0/6 lost more than 800
// 14 underperform- 1/14 gained, 13/14 lost, 1/14 gained > 250, 12/14 lost > 250, 1/14 gained > 800 (Jefferson), 4/14 lost > 800

//// TE- 9 total who started year > 800 market value
// 4 overperform- 4/4 gained, 0/4 lost, 4/4 gained > 250, 0/4 lost > 250, 2/4 gained greater than 800, 0/4 lost more than 800
// 2 underperform- 0/2 gained, 2/2 lost, 0/2 gained > 250, 1/2 lost > 250, 0/2 gained > 800, 0/2 lost > 800

// over 25.0 years old
// QB- 19 total
//// 4 overperform- 4/4 gained, 0/4 lost, 4/4 gained > 250, 0/4 lost > 250, 1/4 gained greater than 800, 0/4 lost more than 800 (ridder)
// 7 underperformed- 0/7 gained, 7/7 lost, 0/7 gained > 250, 6/7 lost > 250, 0/7 gained > 800, 5/7 lost > 800

//// RB- 27 total who started year > 800 market value
// 7 overperform- 4/7 gained, 3/7 lost, 2/7 gained > 250, 3/7 lost > 250, 0/7 gained greater than 800, 1/7 lost more than 800
// 15 underperform- 0/15 gained, 15/15 lost, 0/15 gained > 250, 14/15 lost > 250, 0/15 gained > 800, 10/15 lost > 800

//// WR- 35 total
// 7 overperform- 4/7 gained, 3/7 lost, 4/7 gained > 250, 2/7 lost > 250, 2/7 gained greater than 800, 0/7 lost more than 800
// 12 underperform- 1/12 gained, 11/12 lost, 1/12 gained > 250, 10/12 lost > 250, 0/12 gained > 800, 2/12 lost > 800

//// TE- 15 total
// 2 overperform- 2/2 gained, 0/2 lost, 1/2 gained > 250, 0/2 lost > 250, 1/2 gained greater than 800, 0/2 lost more than 800
// 6 underperform- 0/6 gained, 6/6 lost, 5/6 gained > 250, 6/6 lost > 250, 0/6 gained > 800, 1/6 lost > 800

// totals from above:

// under 23-
// 38 total who started year > 800 market value

// 13 (34%) overperform- 11/13(85%) gained, 2/13(15%) lost, 10/13(77%) gained > 250, 1/13(8%) lost > 250, 9/13(69%) gained greater than 800, 0/13(0%) lost more than 800
// 17 (45%) underperform- 8/17(47%) gained, 9/17(53%) lost, 3/17(18%) gained > 250, 6/17(35%) lost > 250, 1/17(5%) gained > 800, 2/17(29%) lost > 800

// between 23 and 25 -
// 64 total who started year > 800 market value

// 21/64(32%) overperform- 17/21(84%) gained, 4/17(23%) lost, 17/21(84%) gained > 250, 2/21(10%) lost > 250, 9/21(42%) gained greater than 800, 1/21(5%) lost more than 800
// 27/64(42%) underperform- 1/27(3%) gained, 26/27(96%) lost, 1/27(3%) gained > 250, 24/27(92%) lost > 250, 1/27(4%) gained > 800, 12/27(38%) lost > 800

// over 25.0 -
// 96 total who started year > 800 market value

// 20/96(21%) overperform- 14/20(70%) gained, 6/20(30%) lost, 11/20(55%) gained > 250, 5/20(25%) lost > 250, 4/20(20%) gained greater than 800, 1/20(5%) lost more than 800
// 40/96(42%) underperform- 1/40(2%) gained, 39/40(98%) lost, 1/40(2%) gained > 250, 36/40(95%) lost > 250, 0/40(0%) gained > 800, 18/40(45%) lost > 800

///////////////////////////////////

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

// QB-

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
