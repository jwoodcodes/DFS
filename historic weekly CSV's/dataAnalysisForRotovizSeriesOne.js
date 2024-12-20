const { MongoClient } = require('mongodb');

const rotovizOnePostWorkedWithData = require('./rotovizOnePostWorkedWithData');

const before2023SeasonRVRedraftRankingsTEP = require('./before2023SeasonRVRedraftRankings');

// 2020 redraft postional ADP's
const qb2020PPRRedraftADP = require('./historic Positional redraft ADPs/qb2020PPRRedraftADP');
const rb2020PPRRedraftADP = require('./historic Positional redraft ADPs/rb2020PPRRedraftADP');
const wr2020PPRRedraftADP = require('./historic Positional redraft ADPs/wr2020PPRRedraftADP');
const te2020PPRRedraftADP = require('./historic Positional redraft ADPs/te2020PPRRedraftADP');

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

// 2020 final position PPR standing

const qb2020PPRFinalStandings = require('./historic Positional season long finishes/qb2020PPRFinalStandings');
const rb2020PPRFinalStandings = require('./historic Positional season long finishes/rb2020PPRFinalStandings');
const wr2020PPRFinalStandings = require('./historic Positional season long finishes/wr2020PPRFinalStandings');
const te2020PPRFinalStandings = require('./historic Positional season long finishes/te2020PPRFinalStandings');

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
const FFPC2020OffseasonDynastyADP = require('./FFPC2020OffseasonDynastyADP');
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

        FFPC2022OffseasonDynastyADP.forEach(preseasonPlayer => {
          // console.log(preseasonPlayer['"Player"']);

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
          // console.log(preseasonPlayer['"ADP"']);

          if (sanitizedPreseasonPlayerName === sanitizedAugPlayerName) {
            // console.log(preseasonPlayer['"ADP"']);
            playersPreseasonDynastyADP = preseasonPlayer['"ADP"'];
          }
        });

        let playersPostseasonDynastyADP = 0;

        ///////////////////////////////////////////////////////////////////////////////////////////////////////

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////

        FFPC2023OffseasonDynastyADP.forEach(postseasonPlayer => {
          // console.log(postseasonPlayer['"Player"']);
          let sanitizedPostseasonPlayerName = postseasonPlayer[
            '"Player"'
          ].slice(1, -1);

          // console.log(sanitizedPostseasonPlayerName);

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
          // console.log(sanitizedPostseasonPlayerName, sanitizedAugPlayerName);
          // console.log(postseasonPlayer);

          if (sanitizedPostseasonPlayerName === sanitizedAugPlayerName) {
            // console.log(postseasonPlayer.adp_adp);
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
        let aug2020Age = player.player.maybeAge - 3.9;
        let aug2021Age = player.player.maybeAge - 2.9;

        let aug2022Age = player.player.maybeAge - 1.9;
        let aug2023Age = player.player.maybeAge - 0.9;

        wr2022PPRFinalStandings.forEach(finalPlayer => {
          // console.log(finalPlayer['"Player"'].slice(1, -1));
          // console.log(finalPlayer);

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
          // console.log(sanitizedFinalPlayerName);

          if (sanitizedFinalPlayerName === sanitizedAugPlayerName) {
            // console.log(sanitizedFinalPlayerName);
            wr2022PPRRedraftADP.forEach(ffpcPlayer => {
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
                +ffpcPlayer['"WR"'].slice(1, -1) -
                finalNumericalPositionalFinish;

              let posFinishDiffIfYouNeedALoseToBeAPositiveNumber =
                finalNumericalPositionalFinish -
                +ffpcPlayer['"WR"'].slice(1, -1);

              let valueWillBePositiveIfWorseposionalFinishDiff =
                finalNumericalPositionalFinish -
                +ffpcPlayer['"WR"'].slice(1, -1);

              // console.log(playersPostseasonDynastyADP);

              let adpDiff = +(
                playersPreseasonDynastyADP - playersPostseasonDynastyADP
              ).toFixed(2);

              //////////////////////////////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////////////////////////
              //////////////////////////////////////////////////////////////////////////////////////////////////
              /////////////////////////////////////////////////////////////////////////////////////////////////////
              ///////////////////////////////////////////////////////////////////////////////////////////////
              // below
              // console.log(sanitizedFinalPlayerName);

              if (sanitizedFinalPlayerName === sanitizedffpcPlayerName) {
                // console.log(sanitizedFinalPlayerName);
                // console.log(ffpcPlayer);

                let redraftDiff = 0;

                ////////////////////////////////////////////////////////////////////////////////

                if (aug2022Age >= 22 && aug2022Age < 23) {
                  num = num + 1;
                  console.log(
                    num,
                    ffpcPlayer['"Player"'].slice(1, -1),
                    '  ',
                    // ffpcPlayer['"ADP"'],
                    playersPreseasonDynastyADP,
                    playersPostseasonDynastyADP,
                    '  ',
                    adpDiff,
                    '  ',
                    // rvPlayer['"AVGRank"'],
                    // difference,
                    posionalFinishDiff
                  );
                }

                before2023SeasonRVRedraftRankingsTEP.forEach(rvPlayer => {
                  //   console.log(rvPlayer['"Player"'].slice(1, -1));
                  if (sanitizedFinalPlayerName === sanitizedffpcPlayerName) {
                    before2023SeasonFFPCRedraftADP.forEach(ffpcPlayer => {
                      // if (
                      //   rvPlayer['"Player"'].slice(1, -1) ===
                      //   ffpcPlayer['"Player"'].slice(1, -1)
                      // ) {
                      if (
                        sanitizedFinalPlayerName ===
                        ffpcPlayer['"Player"'].slice(1, -1)
                      ) {
                        //   console.log(ffpcPlayer['"Player"'].slice(1, -1));
                        if (
                          sanitizedFinalPlayerName ===
                          rvPlayer['"Player"'].slice(1, -1)
                        ) {
                          let difference = (
                            ffpcPlayer['"ADP"'] - rvPlayer['"AVGRank"']
                          ).toFixed(2);

                          redraftDiff = difference;

                          // console.log(aug2023Age);

                          if (aug2021Age >= 22 && aug2021Age < 23) {
                            // num = num + 1;
                            // console.log(
                            //   num,
                            //   ffpcPlayer['"Player"'].slice(1, -1),
                            //   '  ',
                            //   // ffpcPlayer['"ADP"'],
                            //   playersPreseasonDynastyADP,
                            //   playersPostseasonDynastyADP,
                            //   '  ',
                            //   adpDiff,
                            //   '  ',
                            //   // rvPlayer['"AVGRank"'],
                            //   // difference,
                            //   posionalFinishDiff
                            // );
                          }
                        }
                      }
                    });
                  }
                });

                // before2023SeasonFFPCRedraftADP.forEach(ffpcPlayer => {
                //   console.log(ffpcPlayer['"Player"'].slice(1, -1));
                // });

                ///////////////////////////////////////////////////////////////////////////
                if (
                  aug2023Age > 20
                  // uncomment below for those that overperformed
                  //   posionalFinishDiff > 10) ||
                  // (playersPreseasonDynastyADP < 13 && posionalFinishDiff > 4)
                  // uncomment below for those that underperformed
                  //   posFinishDiffIfYouNeedALoseToBeAPositiveNumber > 10) ||
                  // (playersPreseasonDynastyADP < 13 &&
                  //   posFinishDiffIfYouNeedALoseToBeAPositiveNumber > 4)
                ) {
                  // num = num + 1;
                  // console.log(
                  //   num,
                  //   sanitizedFinalPlayerName,
                  //   +ffpcPlayer['"TE"'].slice(1, -1),
                  //   // finalNumericalPositionalFinish,
                  //   posionalFinishDiff,
                  //   '  ',
                  //   playersPreseasonDynastyADP,
                  //   playersPostseasonDynastyADP,
                  //   '  ',
                  //   adpDiff,
                  //   redraftDiff
                  // );
                }
              }
            });
          }
        });

        //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
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

///////
///////
// entered season between 23 and 25 - 10 total

// 3/10 gained in ADP
// 3/10 rose at least a full round of ADP
// 7/10 dropped in ADP
// 4/10 dropped by at least a full round of ADP

// overperformed: 6/10 - 3/6 gained in ADP, 3/6 lost in ADP, 3/6 gained >= a full round of ADP, 1/6 lost >= a full round of ADP
//underperformed: 3/10 - 0/3 gained in ADP, 3/3 lost in ADP, 0/3 gained >= a full round of ADP, 2/3 lost >= a full round of ADP

///////
///////
// entered season over 25 - 18 total

// 3/18 gained in ADP
// 2/18 rose at least a full round of ADP
// 15/18 dropped in ADP
// 13/18 dropped by at least a full round of ADP

// overperformed: 4/18 - 1/4 gained in ADP, 3/4 lost in ADP, 1/4 gained >= a full round of ADP, 1/4 lost >= a full round of ADP
//underperformed: 5/18- 0/5 gained in ADP, 5/5 lost in ADP, 0/5 gained >= a full round of ADP, 5/5 lost >= a full round of ADP

//
//////////////////////////////////////////////////////// 2021-2022 totals  //////////////////////////////////////////////////////////:

// entered season under 23 - 45 total

// 28/45 (62%) gained in ADP
// 17/45 (38%) rose at least a full round of ADP
// 18/45 (40%) dropped in ADP
// 11/45 (25%) dropped by at least a full round of ADP

// overperformed: 23/45 (51%) - 18/23 (78%) gained in ADP, 5/23 (22%) lost in ADP, 14/23 (61%) gained >= a full round of ADP, 1/23 (4%) lost >= a full round of ADP
//underperformed: 9/45 (22%) - 2/9 (22%)  gained in ADP, 7/9 (78%) lost in ADP, 0/9 gained (0%)>= a full round of ADP, 7/9 (78%) lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 51 total

// 23/51 (46%) gained in ADP
// 11/51 (22%) rose at least a full round of ADP
// 26/51 (50%) dropped in ADP
// 18/51 (36%) dropped by at least a full round of ADP

// overperformed: 21/51 (46%) - 13/21 (62%) gained in ADP, 8/21 (38%) lost in ADP, 11/21 (52%) gained >= a full round of ADP, 2/21 (10%) lost >= a full round of ADP
//underperformed: 17/51 (36%) - 1/17 (6%) gained in ADP, 16/17 (94%) lost in ADP, 0/17 (0%) gained >= a full round of ADP, 11/17 (65%) lost >= a full round of ADP

///////
///////
// entered season over 25 - 82 total

// 26/82 (32%) gained in ADP
// 18/82 (22%) rose at least a full round of ADP
// 56/82 (68%) dropped in ADP
// 41/82 (50%) dropped by at least a full round of ADP

// overperformed: 31/82 (38%) - 14/31 (45%) gained in ADP, 17/31 (55%) lost in ADP, 12/31 (39%) gained >= a full round of ADP, 2/31 (6%) lost >= a full round of ADP
//underperformed: 23/82 (28%) - 1/23 (4%) gained in ADP, 22/23 (96%) lost in ADP, 1/23 (4%) gained >= a full round of ADP, 19/23 (83%) lost >= a full round of ADP

// need to do over 25 season totals for 2022-2023 like above still next

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2022-2023:

//
//////////////////////////////////////////////////////// QB  //////////////////////////////////////////////////////////:

// entered season under 23 - 5 total

// 3/5 gained in ADP
// 2/5 rose at least a full round of ADP
// 2/5 dropped in ADP
// 3/5 dropped by at least a full round of ADP

// overperformed: 1/5 - 1/1 gained in ADP, 0/1 lost in ADP, 1/1 gained >= a full round of ADP, 0/1 lost >= a full round of ADP
//underperformed: 3/5 - 1/3 gained in ADP, 2/3 lost in ADP, 1/3 gained >= a full round of ADP, 2/3 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 9 total

// 5/9 gained in ADP
// 5/9 rose at least a full round of ADP
// 4/9 dropped in ADP
// 3/9 dropped by at least a full round of ADP

// overperformed: 3/9 - 2/3 gained in ADP, 1/3 lost in ADP, 2/3 gained >= a full round of ADP, 1/3 lost >= a full round of ADP
//underperformed: 2/9 - 0/2 gained in ADP, 2/2 lost in ADP, 0/2 gained >= a full round of ADP, 1/2 lost >= a full round of ADP

//
///////
///////
// entered season over 25 - 19 total

// 5/19 gained in ADP
// 2/19 rose at least a full round of ADP
// 14/19 dropped in ADP
// 11/19 dropped by at least a full round of ADP

// overperformed: 5/19 - 3/5 gained in ADP, 2/5 lost in ADP, 2/5 gained >= a full round of ADP, 3/5 lost >= a full round of ADP
//underperformed: 6/19- 0/6 gained in ADP, 6/6 lost in ADP, 0/6 gained >= a full round of ADP, 3/6 lost >= a full round of ADP

//
//////////////////////////////////////////////////////////// RB ///////////////////////////////////////////////////////////////
//
// entered season under 23 - 12 total

// 5/12 gained in ADP
// 3/12 rose at least a full round of ADP
// 7/12 dropped in ADP
// 6/12 dropped by at least a full round of ADP

// overperformed: 1/12 - 0/1 gained in ADP, 1/1 lost in ADP, 0/1 gained >= a full round of ADP, 0/1 lost >= a full round of ADP
//underperformed: 8/12 - 2/8 gained in ADP, 6/8 lost in ADP, 1/8 gained >= a full round of ADP, 6/8 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 25 total

// 10/25 gained in ADP
// 9/25 rose at least a full round of ADP
// 15/25 dropped in ADP
// 13/25 dropped by at least a full round of ADP

// overperformed: 8/25 - 8/8 gained in ADP, 0/8 lost in ADP, 6/8 gained >= a full round of ADP, 0/8 lost >= a full round of ADP
//underperformed: 9/25 - 0/9 gained in ADP, 9/9 lost in ADP, 0/9 gained >= a full round of ADP, 9/9 lost >= a full round of ADP

///////
///////
// entered season over 25 - 25 total

// 5/25 gained in ADP
// 3/25 rose at least a full round of ADP
// 20/25 dropped in ADP
// 14/25 dropped by at least a full round of ADP

// overperformed: 7/25 - 5/7 gained in ADP, 2/7 lost in ADP, 4/7 gained >= a full round of ADP, 1/7 lost >= a full round of ADP
//underperformed: 7/25- 0/7 gained in ADP, 7/7 lost in ADP, 0/7 gained >= a full round of ADP, 7/7 lost >= a full round of ADP

//
////////////////////////////////////////////////////// WR ///////////////////////////////////////////////////////////////
//
// entered season under 23 - 21 total

// 9/21 gained in ADP
// 8/21 rose at least a full round of ADP
// 12/21 dropped in ADP
// 8/21 dropped by at least a full round of ADP

// overperformed: 8/21 - 6/8 gained in ADP, 2/8 lost in ADP, 6/8 gained >= a full round of ADP, 2/8 lost >= a full round of ADP
//underperformed: 10/21- 0/10 gained in ADP, 10/10 lost in ADP, 0/10 gained >= a full round of ADP, 6/10 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 17 total

// 8/17 gained in ADP
// 2/17 rose at least a full round of ADP
// 9/17 dropped in ADP
// 4/17 dropped by at least a full round of ADP

// overperformed: 5/17 - 3/5 gained in ADP, 2/5 lost in ADP, 2/5 gained >= a full round of ADP, 1/5 lost >= a full round of ADP
//underperformed: 6/17 - 0/6 gained in ADP, 6/6 lost in ADP, 0/6 gained >= a full round of ADP, 4/6 lost >= a full round of ADP

///////
///////
// entered season over 25 - 34 total

// 7/34 gained in ADP
// 4/34 rose at least a full round of ADP
// 27/34 dropped in ADP
// 24/27 dropped by at least a full round of ADP

// overperformed: 7/34 - 5/7 gained in ADP, 2/7 lost in ADP, 4/7 gained >= a full round of ADP, 1/7 lost >= a full round of ADP
//underperformed: 13/34- 1/13 gained in ADP, 12/13 lost in ADP, 0/13 gained >= a full round of ADP, 11/13 lost >= a full round of ADP

//
//////////////////////////////////////////////////// TE ///////////////////////////////////////////////////////////////
//

//
// entered season under 23 - 3 total

// 1/3 gained in ADP
// 1/3 rose at least a full round of ADP
// 2/3 dropped in ADP
// 2/3 dropped by at least a full round of ADP

// overperformed: 0/3 - 0/0 gained in ADP, 0/0 lost in ADP, 0/0 gained >= a full round of ADP, 0/0 lost >= a full round of ADP
//underperformed: 2/3- 0/2 gained in ADP, 2/2 lost in ADP, 0/2 gained >= a full round of ADP, 2/2 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 4 total

// 1/4 gained in ADP
// 0/4 rose at least a full round of ADP
// 3/4 dropped in ADP
// 2/4 dropped by at least a full round of ADP

// overperformed: 1/4 - 1/1 gained in ADP, 0/1 lost in ADP, 0/1 gained >= a full round of ADP, 0/1 lost >= a full round of ADP
//underperformed: 0/4 - 0/0 gained in ADP, 0/0 lost in ADP, 0/0 gained >= a full round of ADP, 0/0 lost >= a full round of ADP

///////
///////
// entered season over 25 - 18 total

// 5/18 gained in ADP
// 4/18 rose at least a full round of ADP
// 13/18 dropped in ADP
// 10/18 dropped by at least a full round of ADP

// overperformed: 3/18 - 2/3 gained in ADP, 1/3 lost in ADP, 2/3 gained >= a full round of ADP, 0/3 lost >= a full round of ADP
//underperformed: 3/18- 0/3 gained in ADP, 3/3 lost in ADP, 0/3 gained >= a full round of ADP, 3/3 lost >= a full round of ADP

//
//
//////////////////////////////////////////////////////// 2022-2023 totals  //////////////////////////////////////////////////////////:

//
// entered season under 23 - 40 total

// 18/40 (45%) gained in ADP
// 14/40 (35%) rose at least a full round of ADP
// 22/40 (55%) dropped in ADP
// 19/40 (45%) dropped by at least a full round of ADP

// overperformed: 12/40 (30%) - 8/12 (75%) gained in ADP, 4/12 (25%) lost in ADP, 7/12 (58%) gained >= a full round of ADP, 3/12 (25%) lost >= a full round of ADP
//underperformed: 23/40 (58%)- 3/23 (13%) gained in ADP, 20/23 (87%) lost in ADP, 2/23 (9%) gained >= a full round of ADP, 16/23 (70%)lost >= a full round of ADP

//
// entered season between 23 and 25 - 52 total

// 24/52 (46%) gained in ADP
// 16/52 (31%) rose at least a full round of ADP
// 31/52 (60%) dropped in ADP
// 22/52 (42%) dropped by at least a full round of ADP

// overperformed: 17/52 (33%) - 14/17 (82%) gained in ADP, 3/17 (18%) lost in ADP, 10/17 (59%) gained >= a full round of ADP, 2/17 (12%) lost >= a full round of ADP
//underperformed: 17/52 (33%)- 0/17 (0%) gained in ADP, 17/17 (100%) lost in ADP, 0/17 (0%) gained >= a full round of ADP, 14/17 (82%)lost >= a full round of ADP

//
// entered season over 25 - 96 total

// 23/96 (24%) gained in ADP
// 13/96 (14%) rose at least a full round of ADP
// 74/96 (77%) dropped in ADP
// 59/96 (61%) dropped by at least a full round of ADP

// overperformed: 22/96 (23%) - 15/22 (68%) gained in ADP, 7/22 (32%) lost in ADP, 12/22 (55%) gained >= a full round of ADP, 5/22 (23%) lost >= a full round of ADP
//underperformed: 29/96 (30%)- 1/29 (3%) gained in ADP, 28/29 (97%) lost in ADP, 0/29 (0%) gained >= a full round of ADP, 24/29 (83%)lost >= a full round of ADP

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2023-2024:

//
//////////////////////////////////////////////////////// QB  //////////////////////////////////////////////////////////:

// entered season under 23 - 4 total

// 2/4 gained in ADP
// 1/4ose at least a full round of ADP
// 2/4 dropped in ADP
// 2/4 dropped by at least a full round of ADP

// overperformed: 3/4 - 2/3 gained in ADP, 1/3 lost in ADP, 1/3 gained >= a full round of ADP, 1/3 lost >= a full round of ADP
//underperformed: 1/4 - 1/1 gained in ADP, 0/1 lost in ADP, 1/1 gained >= a full round of ADP, 0/1 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 10 total

// 4/10 gained in ADP
// 4/10 rose at least a full round of ADP
// 6/10 dropped in ADP
// 5/10 dropped by at least a full round of ADP

// overperformed: 5/10 - 4/5 gained in ADP, 1/5 lost in ADP, 4/5 gained >= a full round of ADP, 1/5 lost >= a full round of ADP
//underperformed: 2/10 - 0/2 gained in ADP, 2/2 lost in ADP, 0/2 gained >= a full round of ADP, 2/2 lost >= a full round of ADP

///////
///////
// entered season over 25 - 20 total

// 6/20 gained in ADP
// 2/20 rose at least a full round of ADP
// 14/20 dropped in ADP
// 10/20 dropped by at least a full round of ADP

// overperformed: 4/20 - 3/4 gained in ADP, 1/4 lost in ADP, 2/4 gained >= a full round of ADP, 0/4 lost >= a full round of ADP
//underperformed: 9/20 - 0/9 gained in ADP, 9/9 lost in ADP, 0/9 gained >= a full round of ADP, 7/9 lost >= a full round of ADP

//
//////////////////////////////////////////////////////////// RB ///////////////////////////////////////////////////////////////
//
// entered season under 23 - 16 total

// 7/16 gained in ADP
// 5/16 rose at least a full round of ADP
// 9/16 dropped in ADP
// 7/16 dropped by at least a full round of ADP

// overperformed: 5/16 - 5/5 gained in ADP, 0/5 lost in ADP, 5/5 gained >= a full round of ADP, 0/5 lost >= a full round of ADP
//underperformed: 6/16 - 0/6 gained in ADP, 6/6 lost in ADP, 0/6 gained >= a full round of ADP, 5/6 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 28 total

// 9/28 gained in ADP
// 9/28 rose at least a full round of ADP
// 19/28 dropped in ADP
// 17/28 dropped by at least a full round of ADP

// overperformed: 11/28 - 9/11 gained in ADP, 2/11 lost in ADP, 9/11 gained >= a full round of ADP, 1/11 lost >= a full round of ADP
//underperformed: 10/28 - 0/10 gained in ADP, 10/10 lost in ADP, 0/10 gained >= a full round of ADP, 8/10 lost >= a full round of ADP

///////
///////
// entered season over 25 - 31 total

// 7/31 gained in ADP
// 5/31 rose at least a full round of ADP
// 24/31 dropped in ADP
// 23/31 dropped by at least a full round of ADP

// overperformed: 10/31 - 6/10 gained in ADP, 4/10 lost in ADP, 5/10 gained >= a full round of ADP, 2/10 lost >= a full round of ADP
//underperformed: 14/31 - 0/14 gained in ADP, 14/14 lost in ADP, 0/14 gained >= a full round of ADP, 13/14 lost >= a full round of ADP

//
////////////////////////////////////////////////////// WR ///////////////////////////////////////////////////////////////
//
// entered season under 23 - 19 total

// 6/19 gained in ADP
// 6/19 rose at least a full round of ADP
// 13/19 dropped in ADP
// 10/19 dropped by at least a full round of ADP

// overperformed: 7/19 - 5/7 gained in ADP, 2/7 lost in ADP, 5/7 gained >= a full round of ADP, 1/7 lost >= a full round of ADP
//underperformed: 9/19- 2/9 gained in ADP, 7/9 lost in ADP, 0/9 gained >= a full round of ADP, 6/9 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 25 total

// 8/25 gained in ADP
// 7/25 rose at least a full round of ADP
// 17/25 dropped in ADP
// 14/28 dropped by at least a full round of ADP

// overperformed: 7/25 - 7/7 gained in ADP, 0/7 lost in ADP, 7/7 gained >= a full round of ADP, 0/7 lost >= a full round of ADP
//underperformed: 12/25 - 0/12 gained in ADP, 12/12 lost in ADP, 0/12 gained >= a full round of ADP, 12/12 lost >= a full round of ADP

///////
///////
// entered season over 25 - 41 total

// 6/41 gained in ADP
// 3/41 rose at least a full round of ADP
// 35/41 dropped in ADP
// 29/41 dropped by at least a full round of ADP

// overperformed: 7/41 - 4/7 gained in ADP, 3/7 lost in ADP, 2/7 gained >= a full round of ADP, 1/7 lost >= a full round of ADP
//underperformed: 14/41 - 0/14 gained in ADP, 14/14 lost in ADP, 0/14 gained >= a full round of ADP, 14/14 lost >= a full round of ADP

//
//////////////////////////////////////////////////// TE ///////////////////////////////////////////////////////////////
//

//
// entered season under 23 -  6 total

// 4/6 gained in ADP
// 4/6 rose at least a full round of ADP
// 2/6 dropped in ADP
// 1/6 dropped by at least a full round of ADP

// overperformed: 2/6 - 2/2 gained in ADP, 0/2 lost in ADP, 2/2 gained >= a full round of ADP, 0/2 lost >= a full round of ADP
//underperformed: 3/6- 1/3 gained in ADP, 2/3 lost in ADP, 1/3 gained >= a full round of ADP, 1/3 lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 11 total

// 6/11 gained in ADP
// 6/11 rose at least a full round of ADP
// 5/11 dropped in ADP
// 5/11 dropped by at least a full round of ADP

// overperformed: 5/11 - 4/5 gained in ADP, 1/5 lost in ADP, 4/5 gained >= a full round of ADP, 0/5 lost >= a full round of ADP
//underperformed: 3/11 - 0/3 gained in ADP, 3/3 lost in ADP, 0/3 gained >= a full round of ADP, 3/3 lost >= a full round of ADP

///////
///////
// entered season over 25 - 21 total

// 3/21 gained in ADP
// 2/21 rose at least a full round of ADP
// 17/21 dropped in ADP
// 17/21 dropped by at least a full round of ADP

// overperformed: 4/21 - 1/4 gained in ADP, 3/4 lost in ADP, 1/4 gained >= a full round of ADP, 2/4 lost >= a full round of ADP
//underperformed: 6/21 - 0/6 gained in ADP, 6/6 lost in ADP, 0/6 gained >= a full round of ADP, 6/6 lost >= a full round of ADP

//
//
//////////////////////////////////////////////////////// 2023-2024 totals  //////////////////////////////////////////////////////////:

// entered season under 23 - 45 total

// 19/45 (42%) gained in ADP
// 16/45 (36%) rose at least a full round of ADP
// 26/45 (58%) dropped in ADP
// 20/45 (45%) dropped by at least a full round of ADP

// overperformed: 17/45 (38%) - 14/17 (82%) gained in ADP, 3/17 (18%) lost in ADP, 13/17 (76%) gained >= a full round of ADP, 2/17 (12%) lost >= a full round of ADP
//underperformed: 19/45 (42%) - 4/19 (21%)  gained in ADP, 15/19 (79%) lost in ADP, 2/19 gained (11%)>= a full round of ADP, 12/19 (63%) lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 74 total

// 27/74 (36%) gained in ADP
// 26/74 (35%) rose at least a full round of ADP
// 47/74 (64%) dropped in ADP
// 41/74 (55%) dropped by at least a full round of ADP

// overperformed: 28/74 (38%) - 24/28 (86%) gained in ADP, 4/28 (14%) lost in ADP, 24/28 (86%) gained >= a full round of ADP, 2/28 (7%) lost >= a full round of ADP
//underperformed: 27/74 (36%) - 0/27 (0%) gained in ADP, 27/27 (100%) lost in ADP, 0/27 (0%) gained >= a full round of ADP, 25/27 (93%) lost >= a full round of ADP

///////
///////
// entered season over 25 - 113 total

// 22/113 (19%) gained in ADP
// 12/113 (11%) rose at least a full round of ADP
// 90/113 (80%) dropped in ADP
// 79/113 (70%) dropped by at least a full round of ADP

// overperformed: 25/113 (22%) - 14/25 (56%) gained in ADP, 10/25 (40%) lost in ADP, 10/25 (40%) gained >= a full round of ADP, 5/25 (20%) lost >= a full round of ADP
//underperformed: 43/113 (38%) - 0/43 (0%) gained in ADP, 43/43 (100%) lost in ADP, 0/43 (0%) gained >= a full round of ADP, 40/43 (93%) lost >= a full round of ADP

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////// all totals by year ////////////////////////////////////////////////////////

//
//////////////////////////////////////////////////////// 2021-2022 totals  //////////////////////////////////////////////////////////:

// entered season under 23 - 45 total

// 28/45 (62%) gained in ADP
// 17/45 (38%) rose at least a full round of ADP
// 18/45 (40%) dropped in ADP
// 11/45 (25%) dropped by at least a full round of ADP

// overperformed: 23/45 (51%) - 18/23 (78%) gained in ADP, 5/23 (22%) lost in ADP, 14/23 (61%) gained >= a full round of ADP, 1/23 (4%) lost >= a full round of ADP
//underperformed: 9/45 (22%) - 2/9 (22%)  gained in ADP, 7/9 (78%) lost in ADP, 0/9 gained (0%)>= a full round of ADP, 7/9 (78%) lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 51 total

// 23/51 (46%) gained in ADP
// 11/51 (22%) rose at least a full round of ADP
// 26/51 (50%) dropped in ADP
// 18/51 (36%) dropped by at least a full round of ADP

// overperformed: 21/51 (46%) - 13/21 (62%) gained in ADP, 8/21 (38%) lost in ADP, 11/21 (52%) gained >= a full round of ADP, 2/21 (10%) lost >= a full round of ADP
//underperformed: 17/51 (36%) - 1/17 (6%) gained in ADP, 16/17 (94%) lost in ADP, 0/17 (0%) gained >= a full round of ADP, 11/17 (65%) lost >= a full round of ADP

///////
///////
// entered season over 25 - 82 total

// 26/82 (32%) gained in ADP
// 18/82 (22%) rose at least a full round of ADP
// 56/82 (68%) dropped in ADP
// 41/82 (50%) dropped by at least a full round of ADP

// overperformed: 31/82 (38%) - 14/31 (45%) gained in ADP, 17/31 (55%) lost in ADP, 12/31 (39%) gained >= a full round of ADP, 2/31 (6%) lost >= a full round of ADP
//underperformed: 23/82 (28%) - 1/23 (4%) gained in ADP, 22/23 (96%) lost in ADP, 1/23 (4%) gained >= a full round of ADP, 19/23 (83%) lost >= a full round of ADP

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////2022-2023 totals /////////////////////////////////////////////////////////

//
// entered season under 23 - 40 total

// 18/40 (45%) gained in ADP
// 14/40 (35%) rose at least a full round of ADP
// 22/40 (55%) dropped in ADP
// 19/40 (45%) dropped by at least a full round of ADP

// overperformed: 12/40 (30%) - 8/12 (75%) gained in ADP, 4/12 (25%) lost in ADP, 7/12 (58%) gained >= a full round of ADP, 3/12 (25%) lost >= a full round of ADP
//underperformed: 23/40 (58%)- 3/23 (13%) gained in ADP, 20/23 (87%) lost in ADP, 2/23 (9%) gained >= a full round of ADP, 16/23 (70%)lost >= a full round of ADP

//
// entered season between 23 and 25 - 52 total

// 24/52 (46%) gained in ADP
// 16/52 (31%) rose at least a full round of ADP
// 31/52 (60%) dropped in ADP
// 22/52 (42%) dropped by at least a full round of ADP

// overperformed: 17/52 (33%) - 14/17 (82%) gained in ADP, 3/17 (18%) lost in ADP, 10/17 (59%) gained >= a full round of ADP, 2/17 (12%) lost >= a full round of ADP
//underperformed: 17/52 (33%)- 0/17 (0%) gained in ADP, 17/17 (100%) lost in ADP, 0/17 (0%) gained >= a full round of ADP, 14/17 (82%)lost >= a full round of ADP

//
// entered season over 25 - 96 total

// 23/96 (24%) gained in ADP
// 13/96 (14%) rose at least a full round of ADP
// 74/96 (77%) dropped in ADP
// 59/96 (61%) dropped by at least a full round of ADP

// overperformed: 22/96 (23%) - 15/22 (68%) gained in ADP, 7/22 (32%) lost in ADP, 12/22 (55%) gained >= a full round of ADP, 5/22 (23%) lost >= a full round of ADP
//underperformed: 29/96 (30%)- 1/29 (3%) gained in ADP, 28/29 (97%) lost in ADP, 0/29 (0%) gained >= a full round of ADP, 24/29 (83%)lost >= a full round of ADP

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////2023-2024 totals /////////////////////////////////////////////////////////

// entered season under 23 - 45 total

// 19/45 (42%) gained in ADP
// 16/45 (36%) rose at least a full round of ADP
// 26/45 (58%) dropped in ADP
// 20/45 (45%) dropped by at least a full round of ADP

// overperformed: 17/45 (38%) - 14/17 (82%) gained in ADP, 3/17 (18%) lost in ADP, 13/17 (76%) gained >= a full round of ADP, 2/17 (12%) lost >= a full round of ADP
//underperformed: 19/45 (42%) - 4/19 (21%)  gained in ADP, 15/19 (79%) lost in ADP, 2/19 gained (11%)>= a full round of ADP, 12/19 (63%) lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 74 total

// 27/74 (36%) gained in ADP
// 26/74 (35%) rose at least a full round of ADP
// 47/74 (64%) dropped in ADP
// 41/74 (55%) dropped by at least a full round of ADP

// overperformed: 28/74 (38%) - 24/28 (86%) gained in ADP, 4/28 (14%) lost in ADP, 24/28 (86%) gained >= a full round of ADP, 2/28 (7%) lost >= a full round of ADP
//underperformed: 27/74 (36%) - 0/27 (0%) gained in ADP, 27/27 (100%) lost in ADP, 0/27 (0%) gained >= a full round of ADP, 25/27 (93%) lost >= a full round of ADP

///////
///////
// entered season over 25 - 113 total

// 22/113 (19%) gained in ADP
// 12/113 (11%) rose at least a full round of ADP
// 90/113 (80%) dropped in ADP
// 79/113 (70%) dropped by at least a full round of ADP

// overperformed: 25/113 (22%) - 14/25 (56%) gained in ADP, 10/25 (40%) lost in ADP, 10/25 (40%) gained >= a full round of ADP, 5/25 (20%) lost >= a full round of ADP
//underperformed: 43/113 (38%) - 0/43 (0%) gained in ADP, 43/43 (100%) lost in ADP, 0/43 (0%) gained >= a full round of ADP, 40/43 (93%) lost >= a full round of ADP

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//

///////////////////////////////////////////////// all totals for all years together ///////////////////////////////////////////////////

// entered season under 23 - 130 total

// 65/130 (50%) gained in ADP
// 47/130 (34%) rose at least a full round of ADP
// 66/130 (50%) dropped in ADP
// 50/130 (38%) dropped by at least a full round of ADP

// overperformed: 52/130 (40%) - 40/52 (78%) gained in ADP, 12/52 (23%) lost in ADP, 34/52 (65%) gained >= a full round of ADP, 6/52 (12%) lost >= a full round of ADP
// 35% that didn't overperfrom gained in ADP
//underperformed: 51/130 (39%) - 9/51 (18%)  gained in ADP, 42/51 (82%) lost in ADP, 4/51 gained (8%)>= a full round of ADP, 35/51 (69%) lost >= a full round of ADP

///////
///////
// entered season between 23 and 25 - 177 total

// 74/177 (42%) gained in ADP
// 53/177 (30%) rose at least a full round of ADP
// 103/177 (58%) dropped in ADP
// 81/177 (46%) dropped by at least a full round of ADP

// overperformed: 66/177 (37%) - 51/66 (77%) gained in ADP, 15/66 (23%) lost in ADP, 45/66 (68%) gained >= a full round of ADP, 6/66 (9%) lost >= a full round of ADP
// 21% that didn't overperform their redraft ADP gained in ADP
//underperformed: 61/177 (34%) - 1/61 (2%) gained in ADP, 60/61 (98%) lost in ADP, 0/61 (0%) gained >= a full round of ADP, 50/61 (82%) lost >= a full round of ADP

///////
///////
// entered season over 25 - 291 total

// 71/291 (24%) gained in ADP
// 43/291 (15%) rose at least a full round of ADP
// 220/291 (76%) dropped in ADP
// 179/291 (62%) dropped by at least a full round of ADP

// overperformed: 85/291 (29%) - 51/85 (60%) gained in ADP, 34/85 (40%) lost in ADP, 34/85 (40%) gained >= a full round of ADP, 12/85 (14%) lost >= a full round of ADP
// 9.7% that didn't overperform their redraft ADP gained in value/ 90.2% that didn't lost ADP
//underperformed: 95/291 (33%) - 2/95 (2%) gained in ADP, 93/95 (98%) lost in ADP, 1/95 (1%) gained >= a full round of ADP, 83/95 (87%) lost >= a full round of ADP

///////////////////////// All Ages together ////////////////////

// - 598 total

// 210/598 (35%) gained in ADP
// 143/598 (22%) rose at least a full round of ADP
// 388/598 (65%) dropped in ADP
// 310/598 (52%) dropped by at least a full round of ADP

// overperformed: 203/598 (34%) - 142/203 (70%) gained in ADP, 61/203 (30%) lost in ADP, 113/203 (56%) gained >= a full round of ADP, 24/203 (12%) lost >= a full round of ADP
// total not over or under: 188/598 (31%) - 30% that didn't overperform their redraft ADP gained in value/ 70% that didn't lost ADP
//underperformed: 207/598 (35%) - 12/207 (6%) gained in ADP, 195/207 (94%) lost in ADP, 5/207 (2%) gained >= a full round of ADP, 168/207 (81%) lost >= a full round of ADP

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// all totals for all years by position and age bucket //////////////////////////////////

//
//////////////////////////////////////////////////////// QB  //////////////////////////////////////////////////////////:

// entered season under 23 - 16 total

// 8/16 (50%) gained in ADP
// 5/16 (31%)rose at least a full round of ADP
// 8/16 (50%) dropped in ADP
// 7/16 (44%) dropped by at least a full round of ADP

// overperformed: 4/16 (25%) - 3/4 (75%) gained in ADP, 1/4 (25%) lost in ADP, 2/4 (50%) gained >= a full round of ADP, 2/4 (50%) lost >= a full round of ADP
//underperformed: 7/16 (44%) - 3/7 (43%) gained in ADP, 4/7 (57%) lost in ADP, 2/16 (29%) gained >= a full round of ADP, 3/7 (43%) lost >= a full round of ADP

///////
///////

// entered season between 23 and 25 - 28 total

// 15/28 (54%) gained in ADP
// 9/28 (32%) rose at least a full round of ADP
// 13/28 (46%) dropped in ADP
// 10/28 (36%) dropped by at least a full round of ADP

// overperformed: 9/28 (32%) - 7/9 (78%) gained in ADP, 2/9 (22%) lost in ADP, 6/9 (67%) gained >= a full round of ADP, 2/9 (22%) lost >= a full round of ADP
//underperformed: 7/28 (25%) - 1/7 (14%) gained in ADP, 6/7 (86%) lost in ADP, 0/7 (0%) gained >= a full round of ADP, 3/7 (43%) lost >= a full round of ADP

///////
///////

// entered season over 25 - 51 total

// 16/51 (31%) gained in ADP
// 8/51 (16%) rose at least a full round of ADP
// 35/51 (69%) dropped in ADP
// 25/51 (49%) dropped by at least a full round of ADP

// overperformed: 12/51 (24%) - 8/12 (67%) gained in ADP, 4/12 (33%) lost in ADP, 6/12 (50%) gained >= a full round of ADP, 3/12 (25%) lost >= a full round of ADP
//underperformed: 19/51 (37%) - 1/19 (5%) gained in ADP, 18/19 (95%) lost in ADP, 1/19 (5%) gained >= a full round of ADP, 12/19 (63%) lost >= a full round of ADP

//
//////////////////////////////////////////////////////// RB  //////////////////////////////////////////////////////////:

///////
///////

// entered season under 23 - 42 total

// 19/42 (45%) gained in ADP
// 11/42 (26%)rose at least a full round of ADP
// 23/42 (55%) dropped in ADP
// 19/42 (45%) dropped by at least a full round of ADP

// overperformed: 11/42 (26%) - 8/11 (73%) gained in ADP, 3/11 (27%) lost in ADP, 8/11 (73%) gained >= a full round of ADP, 1/11 (9%) lost >= a full round of ADP
//underperformed: 17/42 (40%) - 3/17 (18%) gained in ADP, 14/17 (82%) lost in ADP, 1/17 (6%) gained >= a full round of ADP, 13/17 (76%) lost >= a full round of ADP

///////
///////

// entered season between 23 and 25 - 68 total

// 24/68 (35%) gained in ADP
// 21/68 (31%) rose at least a full round of ADP
// 44/68 (65%) dropped in ADP
// 38/68 (56%) dropped by at least a full round of ADP

// overperformed: 25/68 (37%) - 20/25 (80%) gained in ADP, 5/25 (20%) lost in ADP, 18/25 (72%) gained >= a full round of ADP, 2/25 (8%) lost >= a full round of ADP
//underperformed: 25/68 (37%) - 0/25 (0%) gained in ADP, 25/25 (100%) lost in ADP, 0/25 (0%) gained >= a full round of ADP, 22/25 (88%) lost >= a full round of ADP

///////
///////

// entered season over 25 - 74 total

// 18/74 (24%) gained in ADP
// 12/74 (16%) rose at least a full round of ADP
// 56/74 (76%) dropped in ADP
// 47/74 (64%) dropped by at least a full round of ADP

// overperformed: 23/74 (31%) - 16/23 (70%) gained in ADP, 7/23 (30%) lost in ADP, 13/23 (57%) gained >= a full round of ADP, 4/23 (17%) lost >= a full round of ADP
// underperformed: 27/51 (53%) - 0/27 (0%) gained in ADP, 27/27 (100%) lost in ADP, 0/27 (0%) gained >= a full round of ADP, 25/27 (93%) lost >= a full round of ADP

//////////////////////////////////////////////////////// WR  //////////////////////////////////////////////////////////:

///////
///////

// entered season under 23 - 60 total

// 30/60 (50%) gained in ADP
// 24/60 (40%) rose at least a full round of ADP
// 30/60 (50%) dropped in ADP
// 20/60 (33%) dropped by at least a full round of ADP

// overperformed: 32/60 (53%) - 25/32 (78%) gained in ADP, 7/32 (22%) lost in ADP, 21/32 (66%) gained >= a full round of ADP, 3/32 (9%) lost >= a full round of ADP
//underperformed: 22/60 (36%) - 2/22 (9%) gained in ADP, 20/22 (91%) lost in ADP, 0/22 (0%) gained >= a full round of ADP, 14/22(64%) lost >= a full round of ADP

///////
///////

// entered season between 23 and 25 - 59 total

// 25/59 (28%) gained in ADP
// 14/59 (24%) rose at least a full round of ADP
// 32/59 (54%) dropped in ADP
// 22/59 (37%) dropped by at least a full round of ADP

// overperformed: 20/59 (34%) - 16/20 (80%) gained in ADP, 4/20 (20%) lost in ADP, 14/20 (70%) gained >= a full round of ADP, 1/20 (5%) lost >= a full round of ADP
//underperformed: 24/59 (41%) - 0/24 (0%) gained in ADP, 24/24 (100%) lost in ADP, 0/24 (0%) gained >= a full round of ADP, 20/24 (83%) lost >= a full round of ADP

///////
///////

// entered season over 25 - 109 total

// 25/109 (23%) gained in ADP
// 15/109 (14%) rose at least a full round of ADP
// 84/109 (77%) dropped in ADP
// 67/109 (61%) dropped by at least a full round of ADP

// overperformed: 32/109 (29%) - 15/32 (47%) gained in ADP, 17/32 (53%) lost in ADP, 11/32 (34%) gained >= a full round of ADP, 2/32 (6%) lost >= a full round of ADP
// underperformed: 35/109 (32%) - 1/35 (3%) gained in ADP, 34/35 (97%) lost in ADP, 0/35 (0%) gained >= a full round of ADP, 32/35 (91%) lost >= a full round of ADP

//////////////////////////////////////////////////////// TE  //////////////////////////////////////////////////////////:

///////
///////

// entered season under 23 - 13 total

// 8/13 (62%) gained in ADP
// 7/13 (54%) rose at least a full round of ADP
// 5/13 (38%) dropped in ADP
// 4/13 (31%) dropped by at least a full round of ADP

// overperformed: 3/13 (23%) - 3/3 (100%) gained in ADP, 0/3 (0%) lost in ADP, 3/3 (100%) gained >= a full round of ADP, 0/3 (0%) lost >= a full round of ADP
//underperformed: 6/13 (46%) - 1/6 (17%) gained in ADP, 5/6 (83%) lost in ADP, 1/6 (17%) gained >= a full round of ADP, 4/6 (67%) lost >= a full round of ADP

///////
///////

// entered season between 23 and 25 - 25 total

// 10/25 (40%) gained in ADP
// 9/25 (36%) rose at least a full round of ADP
// 15/25 (60%) dropped in ADP
// 9/25 (36%) dropped by at least a full round of ADP

// overperformed: 12/25 (48%) - 8/12 (67%) gained in ADP, 4/12 (33%) lost in ADP, 7/12 (58%) gained >= a full round of ADP, 1/12 (8%) lost >= a full round of ADP
//underperformed: 6/25 (24%) - 0/6 (0%) gained in ADP, 6/6 (100%) lost in ADP, 0/6 (0%) gained >= a full round of ADP, 5/6 (83%) lost >= a full round of ADP

///////
///////

// entered season over 25 - 57 total

// 11/57 (19%) gained in ADP
// 8/57 (14%) rose at least a full round of ADP
// 40/57 (70%) dropped in ADP
// 40/57 (70%) dropped by at least a full round of ADP

// overperformed: 11/57 (19%) - 4/11 (36%) gained in ADP, 7/11 (63%) lost in ADP, 4/11 (36%) gained >= a full round of ADP, 3/11 (27%) lost >= a full round of ADP
// underperformed: 13/57 (23%) - 0/13 (0%) gained in ADP, 13/13 (100%) lost in ADP, 0/13 (0%) gained >= a full round of ADP, 13/13 (100%) lost >= a full round of ADP

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////   Notes for the article(s)  /////////////////////////////////////////////////////////////

// 1)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
