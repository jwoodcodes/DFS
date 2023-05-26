const axios = require('axios');
const { MongoClient } = require('mongodb');
const ppSFTEPDynastyRankingsWithRookies = require('../model/datafilesmadefrom4for4CSVs/ppSFTEPDynastyRankingsWithRookies');
const ppSFTEPDynastyRankingsWithPicks = require('../model/datafilesmadefrom4for4CSVs/ppSFTEPDynastyRankingsWithPicks');
const rvDynastyRankingsTEP = require('../model/datafilesmadefrom4for4CSVs/rvDynastyRankingsTEP');

///////fetching fantasyCalc data from API and pushing rawFantasyCalc data to db

const FCDataFetch = async function () {
  const res = await axios.get(
    'https://api.fantasycalc.com/values/current?isDynasty=true&numQbs=2&numTeams=12&ppr=1'
  );
  //   console.log(res.data);

  const url =
    'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/fantasycalcData';
  const client = new MongoClient(url);

  // The database to use
  const dbName = 'dailydynasties';

  async function pushFantasyCalcData() {
    try {
      await client.connect();
      console.log('Connected correctly to server');
      const db = client.db(dbName);

      // Use the collection "fantasycalcData"
      const col = db.collection('fantasycalcData');
      console.log(res.data);
      let data = res.data;
      // Construct a document
      let allFantasyCalcData = {
        data,
      };

      // Insert a single document, wait for promise so we can read it back
      const p = await col.insertOne(allFantasyCalcData);
      // Find one document
      const myDoc = await col.findOne();
      // Print to the console
      // console.log(myDoc);
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }

  //uncomment the three commented out lines below and nodemon file to hit fantasycalc API(not more than once a day!)

  // pushFantasyCalcData().catch(console.dir);
  // return res.data;
};

// FCDataFetch();

/////////////////////////////
/////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////
/////////////////////////////

// making trimmed fantasyCalc data

const newData = [];
const alltradeCalculaterDataArray = [];
const FinaltradeCalculaterDataArray = [];

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

let fcMaxValue = 0;
let ppMaxValue = 0;
let ppMaxValueArray = [];
let ppSFTEPValue = 0;
let ppSFTEPPercentOfMax = 0;
let ppOverallRank = 0;
let highestighestValuePlayerValueArray = [];
let fcPickYear = 0;
let fcPickRound = 0;
let fcPickNumber = 0;
let fcPickRoundAndNumberFormattedForPP = 0;
let rvValue = 0;
let rvPercentOfMax = 0;

const curYear = new Date().getFullYear();

const testfunc = async function () {
  const test = await alltradeCalculaterDataArray;
  // console.log(test);
  const testDoc = await fetchRawFantasyCalcDataFromMongodb();
  // console.log(testDoc);
  newData.push(testDoc);
  // console.log(newData);

  class tradeCalculaterData {
    constructor(
      name,
      fantasyCalcID,
      mflID,
      sleeperID,
      position,
      team,
      age,
      sanitizedFCPlayerName,
      fantasyCalcValue,
      fantasyCalcRank,
      fantasyCalcPositionRank,
      percentOfFantasyCalcMaxValue,
      ppSFTEPValue,
      ppSFTEPPercentOfMax,
      rvValue,
      rvPercentOfMax
    ) {
      this.name = name;
      this.fantasyCalcID = fantasyCalcID;
      this.mflID = mflID;
      this.sleeperID = sleeperID;
      this.position = position;
      this.team = team;
      this.age = age;
      this.sanitizedFCPlayerName = sanitizedFCPlayerName;
      this.fantasyCalcValue = fantasyCalcValue;
      this.fantasyCalcRank = fantasyCalcRank;
      this.fantasyCalcPositionRank = fantasyCalcPositionRank;
      this.percentOfFantasyCalcMaxValue = percentOfFantasyCalcMaxValue;
      this.ppSFTEPValue = ppSFTEPValue;
      this.ppSFTEPPercentOfMax = ppSFTEPPercentOfMax;
      this.rvValue = rvValue;
      this.rvPercentOfMax = rvPercentOfMax;
    }

    rvData(
      sanitizedFCPlayerName,
      fcPickYear,
      fcPickRound,
      fcPickNumber,
      fcPosition,
      SleeperIDFromMe
    ) {
      rvDynastyRankingsTEP.forEach(function (rvPlayer) {
        if (rvPlayer['"Player"'].includes("'")) {
          rvPlayer['"Player"'] = rvPlayer['"Player"'].replace("'", '');
        }

        let sanitizedRVPlayerName = rvPlayer['"Player"']
          .slice(1, -1)
          .replace("'", '')
          .replace('.', '')
          .replace('.', '');

        if (sanitizedRVPlayerName === sanitizedFCPlayerName) {
          // console.log(sanitizedRVPlayerName);

          if (fcPosition !== 'PICK') {
            if (
              sanitizedRVPlayerName === 'Patrick Mahomes' ||
              sanitizedRVPlayerName === 'Josh Allen'
            ) {
              // console.log(rvPlayer);
              rvValue = 3.33;
              rvPercentOfMax = 100;
            }
            if (
              +rvPlayer['"AVGTier"'] === 1 &&
              sanitizedRVPlayerName !== 'Patrick Mahomes' &&
              sanitizedRVPlayerName !== 'Josh Allen'
            ) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 3;
              rvPercentOfMax = 0.9;
            }
            if (+rvPlayer['"AVGTier"'] > 1 && +rvPlayer['"AVGTier"'] < 2) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 2.5;
              rvPercentOfMax = 0.75;
            }
            if (+rvPlayer['"AVGTier"'] === 2) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 2;
              rvPercentOfMax = 0.6;
            }
            if (+rvPlayer['"AVGTier"'] > 2 && +rvPlayer['"AVGTier"'] < 3) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 1.67;
              rvPercentOfMax = 0.5;
            }
            if (+rvPlayer['"AVGTier"'] === 3) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 1.33;
              rvPercentOfMax = 0.4;
            }
            if (+rvPlayer['"AVGTier"'] > 3 && +rvPlayer['"AVGTier"'] < 4) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 1.17;
              rvPercentOfMax = 0.35;
            }
            if (+rvPlayer['"AVGTier"'] === 4) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 1;
              rvPercentOfMax = 0.3;
            }
            if (+rvPlayer['"AVGTier"'] > 4 && +rvPlayer['"AVGTier"'] < 5) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 0.83;
              rvPercentOfMax = 0.25;
            }
            if (+rvPlayer['"AVGTier"'] === 5) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 0.67;
              rvPercentOfMax = 0.2;
            }
            if (+rvPlayer['"AVGTier"'] > 5 && +rvPlayer['"AVGTier"'] < 6) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 0.55;
              rvPercentOfMax = 0.17;
            }
            if (+rvPlayer['"AVGTier"'] === 6) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 0.44;
              rvPercentOfMax = 0.13;
            }
            if (+rvPlayer['"AVGTier"'] > 6 && +rvPlayer['"AVGTier"'] < 7) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 0.385;
              rvPercentOfMax = 0.12;
            }
            if (+rvPlayer['"AVGTier"'] === 7) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 0.33;
              rvPercentOfMax = 0.1;
            }
            if (+rvPlayer['"AVGTier"'] > 7 && +rvPlayer['"AVGTier"'] < 8) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 0.22;
              rvPercentOfMax = 0.07;
            }
            if (+rvPlayer['"AVGTier"'] === 8) {
              // console.log(sanitizedRVPlayerName);
              rvValue = 0.11;
              rvPercentOfMax = 0.03;
            }
          }

          // console.log(fcPickYear);
          // console.log(fcPickRoundAndNumberFormattedForPP);

          ////////////////////////////////////////////////
          ////////////////////////////////////////////////////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////below needs to be updated once a year!!!!!!////
          /////////////////////////////////////////////////////////

          if (fcPosition === 'PICK') {
            // console.log(SleeperIDFromMe);
            if (+fcPickRoundAndNumberFormattedForPP === 201) {
              this.rvValue = 0.67;
              this.rvPercentOfMax = 0.2;
            }
            if (fcPickYear === 2023) {
              // console.log(fcPickRoundAndNumberFormattedForPP);
              if (+fcPickRound === 1 && +fcPickNumber === 1) {
                // console.log(fcPickNumber);
                this.rvValue = 3;
                this.rvPercentOfMax = 0.9;
              }
              if (
                +fcPickRound === 1 &&
                +fcPickNumber > 1 &&
                +fcPickNumber < 6
              ) {
                // console.log(fcPickYear, fcPickRound, fcPickNumber);
                this.rvValue = 2;
                this.rvPercentOfMax = 0.6;
              }

              if (
                +fcPickRoundAndNumberFormattedForPP > 105 &&
                +fcPickRoundAndNumberFormattedForPP < 111
              ) {
                // console.log(fcPickRoundAndNumberFormattedForPP);
                this.rvValue = 1.17;
                this.rvPercentOfMax = 0.35;
              }
              if (
                (+fcPickRoundAndNumberFormattedForPP > 109 &&
                  +fcPickRoundAndNumberFormattedForPP < 202) ||
                +fcPickRoundAndNumberFormattedForPP === 11
              ) {
                // console.log(fcPickRoundAndNumberFormattedForPP);
                this.rvValue = 0.67;
                this.rvPercentOfMax = 0.2;
              }
              if (
                +fcPickRoundAndNumberFormattedForPP > 201 &&
                +fcPickRoundAndNumberFormattedForPP < 211
              ) {
                // console.log(fcPickRoundAndNumberFormattedForPP);
                rvValue = 0.44;
                rvPercentOfMax = 0.13;
              }
              if (
                (+fcPickRoundAndNumberFormattedForPP > 209 &&
                  +fcPickRoundAndNumberFormattedForPP < 307) ||
                +fcPickRoundAndNumberFormattedForPP === 21
              ) {
                // console.log(fcPickRoundAndNumberFormattedForPP);
                rvValue = 0.33;
                rvPercentOfMax = 0.1;
              }
              if (+fcPickRoundAndNumberFormattedForPP > 306) {
                rvValue = 0.11;
                rvPercentOfMax = 0.03;
              }
            }
            if (fcPickYear === 2024) {
              // console.log(fcPickRoundAndNumberFormattedForPP);
              if (+fcPickRoundAndNumberFormattedForPP < 201) {
                rvValue = 0.83;
                rvPercentOfMax = 0.25;
              }
              if (
                +fcPickRoundAndNumberFormattedForPP > 111 &&
                +fcPickRoundAndNumberFormattedForPP < 301
              ) {
                rvValue = 0.33;
                rvPercentOfMax = 0.1;
              }
              if (
                +fcPickRoundAndNumberFormattedForPP > 211 &&
                +fcPickRoundAndNumberFormattedForPP < 401
              ) {
                rvValue = 0.11;
                rvPercentOfMax = 0.03;
              }
            }
          }
        }
      });
    }
  }

  //////////////////////////////

  ppSFTEPDynastyRankingsWithPicks.forEach(function (ppWithPicksPlayer) {
    if (ppWithPicksPlayer['"Full Name"'].includes("'")) {
      ppWithPicksPlayer['"Full Name"'] = ppWithPicksPlayer[
        '"Full Name"'
      ].replace("'", '');
    }

    let sanitizedPPPWithPicksPlayerName = ppWithPicksPlayer['"Full Name"']
      .slice(1, -1)
      .replace("'", '')
      .replace('.', '')
      .replace('.', '');

    // sanitizedPPPWithPicksPlayerName.length < 5
    if (ppWithPicksPlayer['"Position"'] === '""') {
      if (sanitizedPPPWithPicksPlayerName === '106') {
        // console.log(ppWithPicksPlayer);
        let value = +ppWithPicksPlayer['"Team Abbrev"'].slice(1, -1);

        ppMaxValue = +(value * 4).toFixed(3);
        // console.log(ppMaxValue);
        ppMaxValueArray.push(ppMaxValue);
      }
      // console.log(ppMaxValue);
    }
  });

  ////////////////////////
  let SleeperIDFromMe = '';

  newData.forEach(function (topLevelObject) {
    // console.log(topLevelObject.data);
    const PlayerArray = topLevelObject.data;

    //for fantasycalc

    PlayerArray.forEach(function (player) {
      if (player.player.name.includes("'")) {
        player.player.name = player.player.name.replace("'", '');
      }

      let sanitizedFCPlayerName = player.player.name
        .replace("'", '')
        .replace('.', '')
        .replace('.', '');

      // console.log(SanitizedFCPlayerName);
      let fcPosition = player.player.position;

      let fcPercentOfMax = 0;

      // console.log(player);
      // console.log(player.player.ID);

      if (player.overallRank === 1) {
        fcMaxValue = fcMaxValue += player.value;

        fcPercentOfMax = 100;
      }

      if (player.overallRank === 2) {
        fcMaxValue = +(fcMaxValue += player.value) / 2;
        fcPercentOfMax = +(player.value / fcMaxValue).toFixed(2);
      }
      const testFCMaxValue = fcMaxValue;
      if (player.overallRank > 2) {
        fcPercentOfMax = +(player.value / testFCMaxValue).toFixed(2);
      }

      if (player.player.position === 'PICK') {
        // console.log(sanitizedFCPlayerName);
        fcPickYear = +sanitizedFCPlayerName.slice(0, 4);
        // console.log(fcPickYear);
        fcPickRound = +sanitizedFCPlayerName.slice(10, 12);
        // console.log(fcPickRound);
        fcPickNumber = +sanitizedFCPlayerName.slice(17);
        // console.log(fcPickYear, fcPickRound, fcPickNumber);
        SleeperIDFromMe = player.player.sleeperId;
        if (fcPickYear === 2023) {
          if (fcPickNumber < 10) {
            fcPickRoundAndNumberFormattedForPP =
              `${fcPickRound}0${fcPickNumber}`.replace(/\s/g, '');

            // console.log(fcPickRoundAndNumberFormattedForPP, fcPickYear);
          }
          if (fcPickNumber === 10) {
            fcPickRoundAndNumberFormattedForPP = `${fcPickRound}${fcPickNumber}`
              .replace(/\s/g, '')
              .slice(0, 2);

            // console.log(fcPickRoundAndNumberFormattedForPP);
          }
          if (fcPickNumber === 11 || fcPickNumber === 12) {
            fcPickRoundAndNumberFormattedForPP =
              `${fcPickRound}${fcPickNumber}`.replace(/\s/g, '');

            // console.log(fcPickRoundAndNumberFormattedForPP);
            // rvValue = ;
          }
        }
      }

      if (fcPosition === 'PICK') {
        // console.log(fcPickYear);
        if (+fcPickYear === curYear + 1 && +fcPickRound === 1) {
          // console.log(fcPickYear);
          let fcNextYearFirstValue = +player.value;
        }
      }
      //for pp

      ppMaxValue = ppMaxValueArray[0];
      // console.log(ppMaxValue);

      ppSFTEPDynastyRankingsWithPicks.forEach(function (ppWithPicksPlayer) {
        if (ppWithPicksPlayer['"Full Name"'].includes("'")) {
          ppWithPicksPlayer['"Full Name"'] = ppWithPicksPlayer[
            '"Full Name"'
          ].replace("'", '');
        }

        let sanitizedPPPWithPicksPlayerName = ppWithPicksPlayer['"Full Name"']
          .slice(1, -1)
          .replace("'", '')
          .replace('.', '')
          .replace('.', '');

        if (player.player.position === 'PICK') {
          // console.log(ppWithPicksPlayer);
          // console.log(sanitizedFCPlayerName);
          // console.log(sanitizedPPPWithPicksPlayerName);
          // console.log(player);
          // console.log(fcPickYear, fcPickRound, fcPickNumber);
          SleeperIDFromMe = player.player.sleeperId;

          if (
            fcPickRoundAndNumberFormattedForPP ===
            sanitizedPPPWithPicksPlayerName
          ) {
            // console.log(ppWithPicksPlayer);
            // console.log(sanitizedPPPWithPicksPlayerName);

            ppSFTEPValue = +ppWithPicksPlayer['"Team Abbrev"'].slice(1, -1);
            ppSFTEPPercentOfMax = +(ppSFTEPValue / ppMaxValue).toFixed(3);
          }
        }
      });

      //with rookies no picks

      ppSFTEPDynastyRankingsWithRookies.forEach(function (ppPlayer) {
        // console.log(ppPlayer['"Full Name"']);

        if (ppPlayer['"Full Name"'].includes("'")) {
          ppPlayer['"Full Name"'] = ppPlayer['"Full Name"'].replace("'", '');
        }

        let sanitizedPPPlayerName = ppPlayer['"Full Name"']
          .slice(1, -1)
          .replace("'", '')
          .replace('.', '')
          .replace('.', '');
        // console.log(sanitizedPPPlayerName);

        // console.log(sanitizedPPPlayerName, sanitizedFCPlayerName);
        // console.log(ppMaxValue);

        if (sanitizedPPPlayerName === sanitizedFCPlayerName) {
          // console.log(sanitizedFCPlayerName);

          ppSFTEPValue = +ppPlayer['"Lifetime Value"'].slice(1, -1);
          // console.log(ppPlayer['"Overall Rank"']);
          ppOverallRank = +ppPlayer['"Rank"'].slice(1, -1);

          if (+ppOverallRank === 1) {
            // console.log(ppPlayer['"Full Name"']);
            let tempHighestValuePlayerValue = ppPlayer[
              '"Lifetime Value"'
            ].slice(1, -1);
            let highestighestValuePlayerValue = +tempHighestValuePlayerValue;
            highestighestValuePlayerValueArray.push(
              highestighestValuePlayerValue
            );
            ppSFTEPPercentOfMax = 100;
            // console.log(ppSFTEPValue);
          }

          if (
            +ppSFTEPValue > 450 &&
            ppPlayer['"Position"'] !== '""' &&
            +ppOverallRank > 1
          ) {
            // console.log(ppMaxValue);
            // console.log(ppPlayer);
            // console.log(highestighestValuePlayerValueArray[0]);
            let percentOfUnAdjustedMax = +(
              ppSFTEPValue / highestighestValuePlayerValueArray[0]
            ).toFixed(3);
            // console.log(percentOfUnAdjustedMax);
            ppSFTEPPercentOfMax = +percentOfUnAdjustedMax;
          }

          if (+ppSFTEPValue < 451 && ppPlayer['"Position"'] !== '""') {
            // console.log(ppMaxValue);
            ppSFTEPPercentOfMax = +(+ppSFTEPValue / +ppMaxValue).toFixed(2);
          }
        }
      });

      let tradeCalculaterDataObject = new tradeCalculaterData(
        sanitizedFCPlayerName,
        player.player.id,
        player.player.mflId,
        player.player.sleeperId,
        player.player.position,
        player.player.maybeTeam,
        player.player.maybeAge,
        sanitizedFCPlayerName,
        player.value,
        player.overallRank,
        player.positionRank,
        fcPercentOfMax,
        +ppSFTEPValue,
        +ppSFTEPPercentOfMax,
        +rvValue,
        +rvPercentOfMax
      );

      tradeCalculaterDataObject.rvData(
        sanitizedFCPlayerName,
        fcPickYear,
        fcPickRound,
        fcPickNumber,
        fcPosition,
        SleeperIDFromMe
      );

      alltradeCalculaterDataArray.push(tradeCalculaterDataObject);
      // console.log(alltradeCalculaterDataArray);
      // if (player.player.overallRank < 30) {
      //   console.log(tradeCalculaterDataObject);
      // }

      // if (player.player.position === 'PICK') {
      //   console.log(tradeCalculaterDataObject);
      // }
      alltradeCalculaterDataArray.map(function (obj) {
        // console.log(obj);
        const newObj = { ...obj };
        // console.log(newObj);
        FinaltradeCalculaterDataArray.push(newObj);
      });
    });
  });
};
testfunc();
