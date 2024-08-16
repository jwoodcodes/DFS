const axios = require('axios');
const { MongoClient } = require('mongodb');
const ppSFTEPDynastyRankingsWithRookies = require('../model/datafilesmadefrom4for4CSVs/ppSFTEPDynastyRankingsWithRookies');
const ppSFTEPDynastyRankingsWithPicks = require('../model/datafilesmadefrom4for4CSVs/ppSFTEPDynastyRankingsWithPicks');
const rvDynastyRankingsTEP = require('../model/datafilesmadefrom4for4CSVs/rvDynastyRankingsTEP');
const rvRedraftRankingsTEP = require('../model/datafilesmadefrom4for4CSVs/rvRedraftRankingsTEP');
const fpMarketRedraftRankings = require('../model/datafilesmadefrom4for4CSVs/fpMarketRedraftRankings');

const PNODVCalcFunction = require('./PNODVCalcFunctions/PNODVCalcFunction');
const fourForFourRestOfSeasonRedraftRankings = require('../model/datafilesmadefrom4for4CSVs/fourForFourRestOfSeasonRedraftRankings');

let myJSON = {};

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

//so you remember change the future date once a year !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!below

const curDate = new Date();
const curMonth = curDate.getMonth() + 1;
// console.log(curMonth);

const futureDate = new Date('03/14/2025');

const time1 = curDate.getTime();
const futureTime = futureDate.getTime();

// console.log(time1);
// console.log(futureTime);

const timeDifference = futureTime - time1;

// console.log(timeDifference);

const dayDifference = timeDifference / (1000 * 3600 * 24);

// console.log(dayDifference);

const amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch =
  dayDifference / 365;

// console.log(amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch);

/////////////////////////////
/////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////
/////////////////////////////

// making const newData = [];trimmed fantasyCalc data

const newData = [];
const alltradeCalculaterDataArray = [];
const FinaltradeCalculaterDataArray = [];
const dynastyRankingsDataObjectsArray = [];
const oneOlderFantasyCalcData = [];

let allPlayersArray = [];
let allQBsArray = [];
let allRBsArray = [];
let allWRsArray = [];
let allTEsArray = [];
let allPicksArray = [];

//to fetch newest fantasyCalc data
//
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

///////to fetch one older fantasyCalc data

async function fetchRawOneOlderFantasyCalcDataFromMongodb() {
  const url =
    'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/fantasycalcData';
  const client = new MongoClient(url);

  // The database to use
  const dbName = 'dailydynasties';
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    // Use the collection "OnePreviousFantasyCalcData"
    const col = db.collection('OnePreviousFantasyCalcData');

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
let fcQBMaxValue = 0;
let fcNonQBMaxValue = 0;
let ppMaxValue = 0;
let ppMaxValueArray = [];
let ppSFTEPQBMaxValue = 0;
let ppSFTEPNonQBMaxValue = 0;
let ppSFTEPValue = 0;
let ppSFTEPPercentOfMax = 0;
let ppSFQBTEPPercentOfMax = 0;
let ppSFNonQBTEPPercentOfMax = 0;
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

  //////////////////////below is to push old data to OnePreviousFantasyCalcData db before pulling in new fantasycalc data
  /////////////////////////////////////
  //////////////////////////////////////////
  /////////////////////////////////
  //////////////////////////////////////////////////////////
  ////////////////////////////////////////////
  /////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  ////////////////////////////////////////////////

  // when pushing new data to db's Always do below first!

  // const url =
  //   'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
  // const client = new MongoClient(url);

  // // The database to use
  // const dbName = 'dailydynasties';

  // async function runOnePreviousFantasyCalcData() {
  //   try {
  //     await client.connect();
  //     console.log('Connected correctly to server');
  //     const db = client.db(dbName);

  //     // Use the collection "people"
  //     const col = db.collection('OnePreviousFantasyCalcData');

  //     // Construct a document
  //     let OnePreviousFantasyCalcData = {
  //       newData,
  //     };

  //     // Insert a single document, wait for promise so we can read it back
  //     const p = await col.insertOne(OnePreviousFantasyCalcData);
  //     // Find one document
  //     const myDoc = await col.findOne();
  //     // Print to the console
  //     // console.log(myDoc);
  //   } catch (err) {
  //     console.log(err.stack);
  //   } finally {
  //     await client.close();
  //   }
  // }

  // runOnePreviousFantasyCalcData().catch(console.dir);
  //

  const test2 = await alltradeCalculaterDataArray;
  // console.log(test);
  const testDoc2 = await fetchRawOneOlderFantasyCalcDataFromMongodb();
  // console.log(testDoc);
  oneOlderFantasyCalcData.push(testDoc2);
  // console.log(newData);

  ////////////////////////////////////
  /////////////////////////////////

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
      playerOneOlderFantasyCalc,
      fantasyCalcRank,
      fantasyCalcPositionRank,
      fcQBPercentOfMax,
      fcNonQBPercentOfMax,
      ppSFTEPValue,
      ppSFQBTEPPercentOfMax,
      ppSFNonQBTEPPercentOfMax,
      yearsExperience
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
      this.playerOneOlderFantasyCalc = playerOneOlderFantasyCalc;
      this.fantasyCalcRank = fantasyCalcRank;
      this.fantasyCalcPositionRank = fantasyCalcPositionRank;
      this.fcQBPercentOfMax = fcQBPercentOfMax;
      this.fcNonQBPercentOfMax = fcNonQBPercentOfMax;
      this.ppSFTEPValue = ppSFTEPValue;
      this.ppSFQBTEPPercentOfMax = ppSFQBTEPPercentOfMax;
      this.ppSFNonQBTEPPercentOfMax = ppSFNonQBTEPPercentOfMax;
      this.yearsExperience = yearsExperience;
    }

    ppData(
      player,
      sanitizedFCPlayerName,
      ppPlayerObject,
      sanitizedPPPlayerName,
      sanitizedPPPWithPicksPlayerName,
      ppSFTEPQBMaxValue,
      ppSFTEPNonQBMaxValue
    ) {
      // console.log(ppSFTEPNonQBMaxValue);

      if (player.player.position === 'PICK') {
        this.SleeperIDFromMe = player.player.sleeperId;

        if (
          fcPickRoundAndNumberFormattedForPP === sanitizedPPPWithPicksPlayerName
        ) {
          // console.log(ppWithPicksPlayer);
          // console.log(sanitizedPPPWithPicksPlayerName);

          ppSFTEPValue = +ppPlayerObject['"Team Abbrev"'].slice(1, -1);
          ppSFQBTEPPercentOfMax = +(
            ppSFTEPValue / ppSFTEPNonQBMaxValue
          ).toFixed(3);
          this.ppSFTEPValue = ppSFTEPValue;
          this.ppSFQBTEPPercentOfMax = ppSFQBTEPPercentOfMax;
        }
      }

      if (
        sanitizedPPPlayerName === sanitizedFCPlayerName &&
        player.player.position !== 'PICK'
      ) {
        // console.log(sanitizedFCPlayerName);
        this.SleeperIDFromMe = player.player.sleeperId;

        // console.log(ppSFTEPNonQBMaxValue);
        // console.log(sanitizedPPPlayerName, ppPlayer);

        ppSFTEPValue = +ppPlayerObject['"Lifetime Value"'].slice(1, -1);
        this.ppSFTEPValue = ppSFTEPValue;
        // if (SleeperIDFromMe === '4046') {
        //   console.log(ppSFTEPValue, ppPlayerObject['"Position"'].slice(1, -1));
        // }
        if (ppPlayerObject['"Position"'].slice(1, -1) === 'QB') {
          // console.log(ppSFTEPQBMaxValue);

          ppSFQBTEPPercentOfMax = +(
            +ppPlayerObject['"Lifetime Value"'].slice(1, -1) /
            +ppSFTEPQBMaxValue
          ).toFixed(3);
          // console.log(
          //   ppPlayerObject['"Full Name"'],
          //   +ppPlayerObject['"Lifetime Value"'].slice(1, -1),
          //   +ppSFTEPQBMaxValue,
          //   ppSFQBTEPPercentOfMax
          // );
          // if (player.player.name === 'Patrick Mahomes') {
          //   console.log(
          //     player.player.name,
          //     +ppPlayerObject['"Lifetime Value"'].slice(1, -1),
          //     +ppSFTEPQBMaxValue,
          //     ppSFQBTEPPercentOfMax
          //   );
          // }
          this.ppSFQBTEPPercentOfMax = ppSFQBTEPPercentOfMax;
        }

        if (ppPlayerObject['"Position"'].slice(1, -1) !== 'QB') {
          // console.log(ppSFTEPQBMaxValue);
          // console.log(ppPlayer['"Full Name"']);
          // console.log(ppPlayer['"Position"'].slice(1, -1));
          ppSFNonQBTEPPercentOfMax = +(
            +ppPlayerObject['"Lifetime Value"'].slice(1, -1) /
            +ppSFTEPNonQBMaxValue
          ).toFixed(3);
          this.ppSFNonQBTEPPercentOfMax = ppSFNonQBTEPPercentOfMax;
        }
      }
    }

    rvData(
      player,
      sanitizedFCPlayerName,
      sanitizedRVPlayerName,
      rvPlayer,
      fcPickYear,
      fcPickRound,
      fcPickNumber,
      fcPosition,
      SleeperIDFromMe
    ) {
      if (+rvPlayer['"AVGTier"']) {
        // console.log(+rvPlayer['"Rank"']);

        if (fcPosition !== 'PICK') {
          //
          //Tier 1A QB's only
          if (+rvPlayer['"Rank"'] === 1 || +rvPlayer['"Rank"'] === 2) {
            // console.log(rvPlayer);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = +3.33;
            this.rvPercentOfQBMax = 1;
          }
          //Tier 1 non QB's
          if (
            +rvPlayer['"AVGTier"'] === 1 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(rvPlayer);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 3;
            this.rvPercentOfNonQBMax = 1;
          }
          // tier 1B QB's
          if (
            +rvPlayer['"AVGTier"'] === 1 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            if (+rvPlayer['"Rank"'] !== 1 && +rvPlayer['"Rank"'] !== 2) {
              // console.log(sanitizedRVPlayerName, rvPlayer['"POS"']);
              this.rvTier = +rvPlayer['"AVGTier"'];
              this.rvValue = 3;
              this.rvPercentOfQBMax = 0.9;
            }
          }
          //
          //Tier 1.5 QB's
          if (
            +rvPlayer['"AVGTier"'] > 1 &&
            +rvPlayer['"AVGTier"'] < 2 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            if (+rvPlayer['"Rank"'] !== 1 && +rvPlayer['"Rank"'] !== 2)
              // console.log(sanitizedRVPlayerName, rvPlayer['"POS"']);
              this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 2.5;
            this.rvPercentOfQBMax = 0.75;
          }
          //Tier 1.5 non QB's
          if (
            +rvPlayer['"AVGTier"'] > 1 &&
            +rvPlayer['"AVGTier"'] < 2 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 2.5;
            this.rvPercentOfNonQBMax = 0.83;
          }
          //
          // Tier 2 QB's
          if (
            +rvPlayer['"AVGTier"'] === 2 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 2;
            this.rvPercentOfQBMax = 0.6;
          }
          // Tier 2 non QB's
          if (
            +rvPlayer['"AVGTier"'] === 2 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 2;
            this.rvPercentOfNonQBMax = 0.67;
          }
          //
          //Tier 2.5 QB's
          if (
            +rvPlayer['"AVGTier"'] > 2 &&
            +rvPlayer['"AVGTier"'] < 3 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 1.67;
            this.rvPercentOfQBMax = 0.5;
          }
          //Tier 2.5 non QB's
          if (
            +rvPlayer['"AVGTier"'] > 2 &&
            +rvPlayer['"AVGTier"'] < 3 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 1.67;
            this.rvPercentOfNonQBMax = 0.56;
          }
          //
          // Tier 3 QB's
          if (
            +rvPlayer['"AVGTier"'] === 3 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 1.33;
            this.rvPercentOfQBMax = 0.4;
          }
          // Tier 3 non QB's
          if (
            +rvPlayer['"AVGTier"'] === 3 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 1.33;
            this.rvPercentOfNonQBMax = 0.44;
          }
          //
          //Tier 3.5 QB's
          if (
            +rvPlayer['"AVGTier"'] > 3 &&
            +rvPlayer['"AVGTier"'] < 4 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];

            this.rvValue = 1.17;
            this.rvPercentOfQBMax = 0.35;
          }
          //Tier 3.5 non QB's
          if (
            +rvPlayer['"AVGTier"'] > 3 &&
            +rvPlayer['"AVGTier"'] < 4 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 1.17;
            this.rvPercentOfNonQBMax = 0.39;
          }
          //
          // Tier 4 QB's
          if (
            +rvPlayer['"AVGTier"'] === 4 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 1;
            this.rvPercentOfQBMax = 0.3;
          }
          // Tier 4 non QB's
          if (
            +rvPlayer['"AVGTier"'] === 4 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 1;
            this.rvPercentOfNonQBMax = 0.33;
          }
          //
          //Tier 4.5 QB's
          if (
            +rvPlayer['"AVGTier"'] > 4 &&
            +rvPlayer['"AVGTier"'] < 5 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.83;
            this.rvPercentOfQBMax = 0.25;
          }
          //Tier 4.5 non QB's
          if (
            +rvPlayer['"AVGTier"'] > 4 &&
            +rvPlayer['"AVGTier"'] < 5 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.83;
            this.rvPercentOfNonQBMax = 0.28;
          }
          //
          // Tier 5 QB's
          if (
            +rvPlayer['"AVGTier"'] === 5 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.67;
            this.rvPercentOfQBMax = 0.2;
          }
          // Tier 5 non QB's
          if (
            +rvPlayer['"AVGTier"'] === 5 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.67;
            this.rvPercentOfNonQBMax = 0.22;
          }
          //
          //Tier 5.5 QB's
          if (
            +rvPlayer['"AVGTier"'] > 5 &&
            +rvPlayer['"AVGTier"'] < 6 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.55;
            this.rvPercentOfQBMax = 0.17;
          }
          //Tier 5.5 non QB's
          if (
            +rvPlayer['"AVGTier"'] > 5 &&
            +rvPlayer['"AVGTier"'] < 6 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.55;
            this.rvPercentOfNonQBMax = 0.18;
          }
          //
          // Tier 6 QB's
          if (
            +rvPlayer['"AVGTier"'] === 6 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.44;
            this.rvPercentOfQBMax = 0.13;
          }
          // Tier 6 non QB's
          if (
            +rvPlayer['"AVGTier"'] === 6 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.44;
            this.rvPercentOfNonQBMax = 0.15;
          }
          //
          //Tier 6.5 QB's
          if (
            +rvPlayer['"AVGTier"'] > 6 &&
            +rvPlayer['"AVGTier"'] < 7 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.385;
            this.rvPercentOfQBMax = 0.12;
          }
          //Tier 6.5 non QB's
          if (
            +rvPlayer['"AVGTier"'] > 6 &&
            +rvPlayer['"AVGTier"'] < 7 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.385;
            this.rvPercentOfNonQBMax = 0.13;
          }
          //
          // Tier 7 QB's
          if (
            +rvPlayer['"AVGTier"'] === 7 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.33;
            this.rvPercentOfQBMax = 0.1;
          }
          // Tier 7 non QB's
          if (
            +rvPlayer['"AVGTier"'] === 7 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.33;
            this.rvPercentOfNonQBMax = 0.11;
          }
          //
          //Tier 7.5 QB's
          if (
            +rvPlayer['"AVGTier"'] > 7 &&
            +rvPlayer['"AVGTier"'] < 8 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.22;
            this.rvPercentOfQBMax = 0.07;
          }
          //Tier 7.5 non QB's
          if (
            +rvPlayer['"AVGTier"'] > 7 &&
            +rvPlayer['"AVGTier"'] < 8 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.22;
            this.rvPercentOfNonQBMax = 0.07;
          }
          // Tier 8 QB's
          if (
            +rvPlayer['"AVGTier"'] === 8 &&
            rvPlayer['"POS"'].slice(1, -1) === 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.11;
            this.rvPercentOfQBMax = 0.03;
          }
          // Tier 8 non QB's
          if (
            +rvPlayer['"AVGTier"'] === 8 &&
            rvPlayer['"POS"'].slice(1, -1) !== 'QB'
          ) {
            // console.log(sanitizedRVPlayerName);
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.11;
            this.rvPercentOfNonQBMax = 0.03;
          }

          if (+rvPlayer['"AVGTier"'] > 8) {
            this.rvTier = +rvPlayer['"AVGTier"'];
            this.rvValue = 0.05;
            this.rvPercentOfQBMax = 0.01;
            this.rvPercentOfNonQBMax = 0.015;
          }
        }
      }

      if (!+rvPlayer['"AVGTier"']) {
        if (fcPosition !== 'PICK') {
          this.rvTier = 11;
          this.rvValue = 0.05;
          this.rvPercentOfQBMax = 0.01;
          this.rvPercentOfNonQBMax = 0.015;
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
      if (!+rvPlayer['"AVGTier"']) {
        if (fcPosition === 'PICK') {
          // console.log(SleeperIDFromMe);

          if (fcPickYear === curYear) {
            // console.log(fcPickRoundAndNumberFormattedForPP);
            if (+fcPickRound === 1 && +fcPickNumber === 1) {
              // console.log(fcPickNumber);
              this.rvValue = 3;
              this.rvPercentOfNonQBMax = 0.8;
            }
            if (+fcPickRound === 1 && +fcPickNumber > 1 && +fcPickNumber < 4) {
              // console.log(fcPickYear, fcPickRound, fcPickNumber);
              this.rvValue = 2.5;
              this.rvPercentOfNonQBMax = 0.7;
            }
            if (+fcPickRound === 1 && +fcPickNumber > 3 && +fcPickNumber < 6) {
              // console.log(fcPickYear, fcPickRound, fcPickNumber);
              this.rvValue = 2;
              this.rvPercentOfNonQBMax = 0.6;
            }
            if (+fcPickRound === 1 && +fcPickNumber > 5 && +fcPickNumber < 9) {
              // console.log(fcPickYear, fcPickRound, fcPickNumber);
              this.rvValue = 1.55;
              this.rvPercentOfNonQBMax = 0.45;
            }

            if (
              (+fcPickRoundAndNumberFormattedForPP > 108 &&
                +fcPickRoundAndNumberFormattedForPP < 111) ||
              +fcPickRoundAndNumberFormattedForPP === 100
            ) {
              // console.log(fcPickRoundAndNumberFormattedForPP);
              this.rvValue = 1.17;
              this.rvPercentOfNonQBMax = 0.35;
            }
            if (
              (+fcPickRoundAndNumberFormattedForPP > 109 &&
                +fcPickRoundAndNumberFormattedForPP < 202) ||
              +fcPickRoundAndNumberFormattedForPP === 11
            ) {
              // console.log(fcPickRoundAndNumberFormattedForPP);
              this.rvValue = 0.67;
              this.rvPercentOfNonQBMax = 0.2;
            }
            if (
              +fcPickRoundAndNumberFormattedForPP > 201 &&
              +fcPickRoundAndNumberFormattedForPP < 211
            ) {
              // console.log(fcPickRoundAndNumberFormattedForPP);
              this.rvValue = 0.44;
              this.rvPercentOfNonQBMax = 0.13;
            }
            if (
              (+fcPickRoundAndNumberFormattedForPP > 209 &&
                +fcPickRoundAndNumberFormattedForPP < 307) ||
              +fcPickRoundAndNumberFormattedForPP === 21
            ) {
              // console.log(fcPickRoundAndNumberFormattedForPP);
              this.rvValue = 0.33;
              this.rvPercentOfNonQBMax = 0.1;
            }
            if (+fcPickRoundAndNumberFormattedForPP > 306) {
              this.rvValue = 0.11;
              this.rvPercentOfNonQBMax = 0.03;
            }
          }

          // console.log(curMonth);

          if (curMonth < 6) {
            // if (fcPickYear === +curYear) {
            //   // console.log(fcPickYear);
            //   // console.log(fcPickRound);
            //   // console.log(fcNonQBMaxValue);
            //   // console.log(player.player.name);
            //   // console.log(fcPickRoundAndNumberFormattedForPP);
            //   if (+fcPickRound === 1) {
            //     this.rvValue = 1.15;
            //     this.rvPercentOfNonQBMax = 0.33;
            //   }
            //   if (+fcPickRound === 2) {
            //     this.rvValue = 0.33;
            //     this.rvPercentOfNonQBMax = 0.11;
            //   }
            //   if (+fcPickRound === 3) {
            //     this.rvValue = 0.12;
            //     this.rvPercentOfNonQBMax = 0.04;
            //   }
            // }
            if (fcPickYear === +(curYear + 1)) {
              // console.log(fcPickYear);
              // console.log(player.player.name);
              // console.log(fcPickRoundAndNumberFormattedForPP);

              if (+fcPickRound === 1) {
                this.rvValue = 0.92;
                this.rvPercentOfNonQBMax = 0.25;
              }
              if (+fcPickRound === 2) {
                this.rvValue = 0.22;
                this.rvPercentOfNonQBMax = 0.08;
              }
              if (+fcPickRound === 3) {
                this.rvValue = 0.08;
                this.rvPercentOfNonQBMax = 0.0275;
              }
            }
            if (fcPickYear === +(curYear + 2)) {
              // console.log(fcPickYear);
              // console.log(player.player.name);
              // console.log(fcPickRoundAndNumberFormattedForPP);

              if (+fcPickRound === 1) {
                this.rvValue = 0.65;
                this.rvPercentOfNonQBMax = 0.19;
              }
              if (+fcPickRound === 2) {
                this.rvValue = 0.17;
                this.rvPercentOfNonQBMax = 0.06;
              }
              if (+fcPickRound === 3) {
                this.rvValue = 0.05;
                this.rvPercentOfNonQBMax = 0.02;
              }
            }
          }

          if (curMonth > 5) {
            if (fcPickYear === +(curYear + 1)) {
              // console.log(fcPickYear);
              // console.log(fcPickRound);
              // console.log(fcNonQBMaxValue);
              // console.log(player.player.name);
              // console.log(fcPickRoundAndNumberFormattedForPP);
              if (+fcPickRound === 1) {
                this.rvValue = 1.15;
                this.rvPercentOfNonQBMax = 0.33;
              }
              if (+fcPickRound === 2) {
                this.rvValue = 0.33;
                this.rvPercentOfNonQBMax = 0.11;
              }
              if (+fcPickRound === 3) {
                this.rvValue = 0.12;
                this.rvPercentOfNonQBMax = 0.04;
              }
            }
            if (fcPickYear === +(curYear + 2)) {
              // console.log(fcPickYear);
              // console.log(player.player.name);
              // console.log(fcPickRoundAndNumberFormattedForPP);

              if (+fcPickRound === 1) {
                this.rvValue = 0.92;
                this.rvPercentOfNonQBMax = 0.25;
              }
              if (+fcPickRound === 2) {
                this.rvValue = 0.22;
                this.rvPercentOfNonQBMax = 0.08;
              }
              if (+fcPickRound === 3) {
                this.rvValue = 0.08;
                this.rvPercentOfNonQBMax = 0.0275;
              }
            }
            if (fcPickYear === +(curYear + 3)) {
              // console.log(fcPickYear);
              // console.log(player.player.name);
              // console.log(fcPickRoundAndNumberFormattedForPP);

              if (+fcPickRound === 1) {
                this.rvValue = 0.65;
                this.rvPercentOfNonQBMax = 0.19;
              }
              if (+fcPickRound === 2) {
                this.rvValue = 0.17;
                this.rvPercentOfNonQBMax = 0.06;
              }
              if (+fcPickRound === 3) {
                this.rvValue = 0.05;
                this.rvPercentOfNonQBMax = 0.02;
              }
            }
          }
        }
      }
    }

    myRanksAndMyValuesAgainstMarketValue(
      player,
      fcQBMaxValue,
      fcNonQBMaxValue
    ) {
      // console.log(
      //   this.rvValue,
      //   player.player.name,
      //   this.rvPercentOfQBMax,
      //   this.rvPercentOfNonQBMax
      // );
      let myPercentOfQBMax = 0;
      let myPercentOfNonQBMax = 0;
      let myValue = 0;
      let myOverallRank = 0;
      let temppercentValueDiffBetweenMyValueAndMarket = 0;
      let temptemppercentValueDiffBetweenMyValueAndMarket = 0;

      //QB's

      if (player.player.position === 'QB') {
        // console.log(player.player.name, this.fcQBPercentOfMax);
        // console.log(player.player.age);

        if (this.fcQBPercentOfMax === Infinity) {
          // console.log(this.name)
          this.fcQBPercentOfMax = 1;
        }

        this.myPercentOfQBMax = +(
          (this.fcQBPercentOfMax +
            +this.rvPercentOfQBMax +
            +this.rvPercentOfQBMax +
            +this.rvPercentOfQBMax +
            +this.rvPercentOfQBMax) /
          5
        ).toFixed(2);
        // console.log(player.player.name, this.myPercentOfQBMax);
        // console.log(fcQBMaxValue);

        // this.myValue = +(fcQBMaxValue * this.myPercentOfQBMax).toFixed(2);

        let tempValue = +(fcQBMaxValue * this.myPercentOfQBMax).toFixed(2);
        this.myValue = Math.round(tempValue);

        if (this.myValue < 1000) {
          // console.log(this.name)

          this.myPercentOfQBMax = +(
            (+this.fcQBPercentOfMax +
              +this.fcQBPercentOfMax +
              +this.fcQBPercentOfMax +
              +this.fcQBPercentOfMax +
              +this.rvPercentOfQBMax) /
            5
          ).toFixed(2);

          let tempValue = +(fcQBMaxValue * this.myPercentOfQBMax).toFixed(2);
          this.myValue = Math.round(tempValue);
        }

        if (this.myValue < 1000) {
          // console.log(this.name, this.myValue)
        }

        // if(this.name === 'Patrick Mahomes') {
        //   console.log(fcQBMaxValue, this.myPercentOfQBMax, tempValue, this.myValue, this.ppSFQBTEPPercentOfMax)
        // }

        // console.log(this.name, this.myValue);

        if (this.name === 'Justin Herbert') {
          this.myValue = +(this.myValue * 0.7).toFixed(0);
          // console.log(this.myValue)
        }

        if (this.name === 'Jayden Daniels') {
          this.myValue = +(this.myValue + 500).toFixed(0);
          // console.log(this.myValue);
        }

        this.valueDiffBetweenMyValueAndMarketValue = +(
          this.myValue - +player.value
        ).toFixed(2);

        if (this.myValue >= +player.value) {
          temppercentValueDiffBetweenMyValueAndMarket = +(
            +player.value / this.myValue
          ).toFixed(2);
        }

        if (this.myValue <= +player.value) {
          temppercentValueDiffBetweenMyValueAndMarket = +(
            this.myValue / +player.value
          ).toFixed(2);
        }

        temptemppercentValueDiffBetweenMyValueAndMarket =
          1 - temppercentValueDiffBetweenMyValueAndMarket.toFixed(2);

        this.percentValueDiffBetweenMyValueAndMarket = +(
          temptemppercentValueDiffBetweenMyValueAndMarket * 100
        ).toFixed(2);

        if (this.myValue <= +player.value) {
          this.percentValueDiffBetweenMyValueAndMarket =
            -this.percentValueDiffBetweenMyValueAndMarket;
        }
        // console.log(
        //   player.player.name,
        //   player.value,
        //   this.myValue,
        //   this.valueDiffBetweenMyValueAndMarketValue,
        //   this.percentValueDiffBetweenMyValueAndMarket
        // );
        // this.myPercentOfQBMax,
      }

      // non QB's

      if (player.player.position !== 'QB') {
        // console.log(player.player.name, this.rvPercentOfNonQBMax);
        // console.log(player.player.name, this.fcNonQBPercentOfMax);

        this.myPercentOfNonQBMax = +(
          (+this.fcNonQBPercentOfMax +
            +this.rvPercentOfNonQBMax +
            +this.rvPercentOfNonQBMax +
            +this.rvPercentOfNonQBMax +
            +this.rvPercentOfNonQBMax) /
          5
        ).toFixed(2);
        // console.log(+fcNonQBMaxValue);
        // this.myValue = +(+fcNonQBMaxValue * +this.myPercentOfNonQBMax).toFixed(
        //   2
        // );

        let tempValue = +(fcNonQBMaxValue * this.myPercentOfNonQBMax).toFixed(
          2
        );
        this.myValue = Math.round(tempValue);

        if (this.name === 'Drake London') {
          this.myValue = +(this.myValue + 200).toFixed(0);
          // console.log(this.myValue);
        }
        if (this.name === 'Marvin Harrison Jr') {
          this.myValue = 6200;
          // console.log(this.myValue);
        }
        if (this.name === 'Troy Franklin') {
          this.myValue = 2100;
          // console.log(this.myValue);
        }
        if (this.name === 'Brian Thomas') {
          this.myValue = 2000;
          // console.log(this.myValue);
        }
        if (this.name === 'Keon Coleman') {
          this.myValue = 1800;
          // console.log(this.myValue);
        }
        if (this.name === 'Jalen McMillan') {
          this.myValue = 1500;
          // console.log(this.myValue);
        }

        if (this.myValue < 1000) {
          // console.log(this.name, this.myValue)

          this.myPercentOfNonQBMax = +(
            (+this.fcNonQBPercentOfMax +
              +this.fcNonQBPercentOfMax +
              +this.fcNonQBPercentOfMax +
              +this.fcNonQBPercentOfMax +
              +this.rvPercentOfNonQBMax) /
            5
          ).toFixed(2);

          let tempValue = +(fcNonQBMaxValue * this.myPercentOfNonQBMax).toFixed(
            2
          );
          this.myValue = Math.round(tempValue);
        }

        if (this.myValue < 1000) {
          // console.log(this.name, this.myValue)
        }

        // console.log(this.name, this.myValue);

        this.valueDiffBetweenMyValueAndMarketValue = +(
          this.myValue - +player.value
        ).toFixed(2);

        if (this.myValue >= +player.value) {
          temppercentValueDiffBetweenMyValueAndMarket = +(
            +player.value / this.myValue
          ).toFixed(2);
        }

        if (this.myValue <= +player.value) {
          temppercentValueDiffBetweenMyValueAndMarket = +(
            this.myValue / +player.value
          ).toFixed(2);
        }

        temptemppercentValueDiffBetweenMyValueAndMarket =
          1 - temppercentValueDiffBetweenMyValueAndMarket.toFixed(2);

        this.percentValueDiffBetweenMyValueAndMarket = +(
          temptemppercentValueDiffBetweenMyValueAndMarket * 100
        ).toFixed(2);

        if (this.myValue <= +player.value) {
          this.percentValueDiffBetweenMyValueAndMarket =
            -this.percentValueDiffBetweenMyValueAndMarket;
        }

        // if (player.player.position === 'PICK') {
        //   console.log(this.name, this.myValue)
        // }
        // if (player.player.position === 'PICK') {
        //   // console.log(player);
        //   // console.log(fcPickYear);
        //   console.log();
        //   if (fcPickYear === curYear + 1) {
        //     // console.log(player);
        //     // console.log(fcNonQBMaxValue);
        //     if (!myNextYearFirstValue) {
        //       let myNextYearFirstValue = 0;
        //     }
        //     if (fcPickRound === 1) {
        //       let tempValue = +(fcNonQBMaxValue / 3);
        //       let tempTwo = Math.round(tempValue);
        //       // console.log(tempTwo);
        //       myNextYearFirstValue = tempTwo;
        //       this.myValue = tempTwo;
        //     }
        //     if (fcPickRound === 2) {
        //       let tempValue = +(myNextYearFirstValue / 3);
        //       let tempTwo = Math.round(tempValue);
        //       console.log(tempTwo);
        //       myNextYearSecondValue = tempTwo;
        //       this.myValue = tempTwo;
        //     }
        //   }

        //   //

        //   this.valueDiffBetweenMyValueAndMarketValue = +(
        //     this.myValue - +player.value
        //   ).toFixed(2);

        //   if (this.myValue >= +player.value) {
        //     temppercentValueDiffBetweenMyValueAndMarket = +(
        //       +player.value / this.myValue
        //     ).toFixed(2);
        //   }

        //   if (this.myValue <= +player.value) {
        //     temppercentValueDiffBetweenMyValueAndMarket = +(
        //       this.myValue / +player.value
        //     ).toFixed(2);
        //   }

        //   temptemppercentValueDiffBetweenMyValueAndMarket =
        //     1 - temppercentValueDiffBetweenMyValueAndMarket.toFixed(2);

        //   this.percentValueDiffBetweenMyValueAndMarket = +(
        //     temptemppercentValueDiffBetweenMyValueAndMarket * 100
        //   ).toFixed(2);

        //   if (this.myValue <= +player.value) {
        //     this.percentValueDiffBetweenMyValueAndMarket =
        //       -this.percentValueDiffBetweenMyValueAndMarket;
        //   }
        // }
        // console.log(
        //   player.player.name,

        //   player.value,
        //   this.myValue,
        //   this.valueDiffBetweenMyValueAndMarketValue,
        //   this.percentValueDiffBetweenMyValueAndMarket
        // );
        //   this.myPercentOfNonQBMax,
      }
    }

    fpRedraftData(
      playerObject,
      sanitizedFCPlayerName,
      fcPosition,
      fpRedraftPlayerObject,
      sanitizedFPRedraftPlayerName
    ) {
      // console.log(sanitizedFPRedraftPlayerName);
      // if (fcPosition !== 'PICK') {
      //   console.log(sanitizedFPRedraftPlayerName, sanitizedFCPlayerName);
      // }
      // console.log(this.sanitizedFCPlayerName);

      // if (sanitizedFPRedraftPlayerName === this.sanitizedFCPlayerName) {
      // console.log(sanitizedFCPlayerName);

      if (fcPosition !== 'PICK') {
        // console.log(this.sanitizedFCPlayerName);
        // console.log(fpRedraftPlayerObject);
        // console.log(fpRedraftPlayerObject);
        if (fpRedraftPlayerObject) {
          let tempOverallRank = fpRedraftPlayerObject['"RK"'].slice(1, -1);
          let fpRedraftOverallRank = +tempOverallRank;

          if (fpRedraftOverallRank) {
            // console.log(fpRedraftOverallRank);
            this.fpRedraftOverallRank = +fpRedraftOverallRank;
          }

          // console.log(fpRedraftPlayerObject['"POS"'].slice(3, -1));
          let tempPositionRank = fpRedraftPlayerObject['"POS"'].slice(3, -1);
          // console.log(sanitizedFCPlayerName, tempPositionRank);
          let fpRedraftPositionRank = +tempPositionRank;
          // console.log(fpRedraftPositionRank);
          if (fpRedraftPositionRank) {
            // console.log(fpRedraftPositionRank);
            this.fpRedraftPositionRank = +fpRedraftPositionRank;
          }
        }
        // // console.log(fpRedraftPlayerObject);
        // let tempfpRedraftTier = fpRedraftPlayerObject['TIERS'];
        // // console.log(tempfpRedraftTier);
        // let fpRedraftTier = +tempfpRedraftTier;
        // // console.log(fpRedraftTier);
        // if (fpRedraftTier) {
        //   // console.log(fpRedraftTier);
        //   this.fpRedraftTier = +fpRedraftTier;
        // }
        // }
      }
    }

    rvRedraftData(
      player,
      fcPosition,
      sanitizedFCPlayerName,
      rvRedraftPlayerObject,
      sanitizedRVRedraftPlayerName,
      fourForFourRestOfSeasonRedraftPlayerGroup,
      sanitizedFourForFourRedraftPlayerName,
      qbWorstPosRankOfEachTier,
      rbWorstPosRankOfEachTier,
      wrWorstPosRankOfEachTier,
      teWorstPosRankOfEachTier
    ) {
      // console.log(rvRedraftPlayerObject);

      // fourForFourRestOfSeasonRedraftRankings

      // console.log(qbWorstPosRankOfEachTier);

      // console.log(curMonth)
      if (curMonth < 9) {
        if (sanitizedRVRedraftPlayerName === sanitizedFCPlayerName) {
          // console.log(rvRedraftPlayerObject);
          // console.log(sanitizedRVRedraftPlayerName);
          // console.log(fpRedraftPlayerObject);
          // console.log(fpRedraftPlayerObject);
          let tempOverallRank = rvRedraftPlayerObject['"Rank"'];
          // console.log(tempOverallRank);
          let rvRedraftOverallRank = +tempOverallRank;

          if (rvRedraftOverallRank) {
            // console.log(rvRedraftOverallRank);
            this.rvRedraftOverallRank = +rvRedraftOverallRank;
          }

          // console.log(fpRedraftPlayerObject['"POS"'].slice(3, -1));
          let tempPositionRank = rvRedraftPlayerObject['"PosRank"'];
          // console.log(tempPositionRank);
          let rvRedraftPositionRank = +tempPositionRank;
          // console.log(fpRedraftPositionRank);
          if (rvRedraftPositionRank) {
            // console.log(fpRedraftPositionRank);
            this.rvRedraftPositionRank = +rvRedraftPositionRank;
          }

          // console.log(rvRedraftPlayerObject);
          let temprvRedraftTier = rvRedraftPlayerObject['"AVGTier"'];
          // console.log(temprvRedraftTier);
          let rvRedraftTier = +temprvRedraftTier;
          // console.log(fpRedraftTier);

          //

          if (rvRedraftTier) {
            // console.log(rvRedraftTier);
            this.rvRedraftTier = +rvRedraftTier;
          } else {
            // console.log(rvRedraftPlayerObject);
            // console.log(rvRedraftPlayerObject['"PosRank"']);

            // qbWorstPosRankOfEachTier,
            // rbWorstPosRankOfEachTier,
            // wrWorstPosRankOfEachTier,
            //   teWorstPosRankOfEachTier
            if (fcPosition === 'QB') {
              // console.log(
              //   player.player.name,
              //   rvRedraftPlayerObject['"PosRank"']

              // );
              // console.log(
              //   player.player.name,
              //   +rvRedraftPlayerObject['"PosRank"'],
              //   +qbWorstPosRankOfEachTier.tier3
              // );
              // QB
              if (
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +qbWorstPosRankOfEachTier.tier3 &&
                +qbWorstPosRankOfEachTier.tier3 > 1
              ) {
                this.rvRedraftTier = 3;
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +qbWorstPosRankOfEachTier.tier3 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +qbWorstPosRankOfEachTier.tier4 &&
                +qbWorstPosRankOfEachTier.tier4 > 1
              ) {
                if (+qbWorstPosRankOfEachTier.tier3 > 1) {
                  this.rvRedraftTier = 4;
                }
                if (
                  +qbWorstPosRankOfEachTier.tier3 === 1 &&
                  this.rvRedraftTier !== 2
                ) {
                  this.rvRedraftTier = 4;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +qbWorstPosRankOfEachTier.tier4 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +qbWorstPosRankOfEachTier.tier5 &&
                +qbWorstPosRankOfEachTier.tier5 > 1
              ) {
                if (+qbWorstPosRankOfEachTier.tier4 > 1) {
                  this.rvRedraftTier = 5;
                }
                if (
                  +qbWorstPosRankOfEachTier.tier4 === 1 &&
                  this.rvRedraftTier !== 3
                ) {
                  this.rvRedraftTier = 5;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +qbWorstPosRankOfEachTier.tier5 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +qbWorstPosRankOfEachTier.tier6 &&
                +qbWorstPosRankOfEachTier.tier6 > 1
              ) {
                if (+qbWorstPosRankOfEachTier.tier5 > 1) {
                  this.rvRedraftTier = 6;
                }
                if (
                  +qbWorstPosRankOfEachTier.tier5 === 1 &&
                  this.rvRedraftTier !== 4
                ) {
                  this.rvRedraftTier = 6;
                }
              }
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +qbWorstPosRankOfEachTier.tier6 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +qbWorstPosRankOfEachTier.tier7 &&
                +qbWorstPosRankOfEachTier.tier7 > 1
              ) {
                if (+qbWorstPosRankOfEachTier.tier6 > 1) {
                  this.rvRedraftTier = 7;
                }
                if (
                  +qbWorstPosRankOfEachTier.tier6 === 1 &&
                  this.rvRedraftTier !== 5
                ) {
                  this.rvRedraftTier = 7;
                }
              }
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +qbWorstPosRankOfEachTier.tier7 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +qbWorstPosRankOfEachTier.tier8 &&
                +qbWorstPosRankOfEachTier.tier8 > 1
              ) {
                if (+qbWorstPosRankOfEachTier.tier7 > 1) {
                  this.rvRedraftTier = 8;
                }
                if (
                  +qbWorstPosRankOfEachTier.tier7 === 1 &&
                  this.rvRedraftTier !== 6
                ) {
                  this.rvRedraftTier = 8;
                }
              }

              // console.log(
              //   player.player.name,
              //   rvRedraftPlayerObject['"PosRank"'],
              //   this.rvRedraftTier
              // qbWorstPosRankOfEachTier.tier3,
              // qbWorstPosRankOfEachTier.tier4
              // );
            }

            //RB
            if (fcPosition === 'RB') {
              // console.log(
              //   player.player.name,
              //   rvRedraftPlayerObject['"PosRank"']

              // );
              // console.log(
              //   player.player.name,
              //   +rvRedraftPlayerObject['"PosRank"'],
              //   +qbWorstPosRankOfEachTier.tier3
              // );
              // RB
              if (
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +rbWorstPosRankOfEachTier.tier1 &&
                +rbWorstPosRankOfEachTier.tier1 > 1
              ) {
                this.rvRedraftTier = 1;
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +rbWorstPosRankOfEachTier.tier1 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +rbWorstPosRankOfEachTier.tier2 &&
                +rbWorstPosRankOfEachTier.tier2 > 1
              ) {
                if (+rbWorstPosRankOfEachTier.tier1 > 1) {
                  this.rvRedraftTier = 2;
                }
                if (
                  +rbWorstPosRankOfEachTier.tier1 === 1 &&
                  this.rvRedraftTier !== 1
                ) {
                  this.rvRedraftTier = 2;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +rbWorstPosRankOfEachTier.tier2 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +rbWorstPosRankOfEachTier.tier3 &&
                +rbWorstPosRankOfEachTier.tier3 > 1
              ) {
                if (+rbWorstPosRankOfEachTier.tier2 > 1) {
                  this.rvRedraftTier = 3;
                }
                if (
                  +rbWorstPosRankOfEachTier.tier2 === 1 &&
                  this.rvRedraftTier !== 1
                ) {
                  this.rvRedraftTier = 3;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +rbWorstPosRankOfEachTier.tier3 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +rbWorstPosRankOfEachTier.tier4 &&
                +rbWorstPosRankOfEachTier.tier4 > 1
              ) {
                if (+rbWorstPosRankOfEachTier.tier3 > 1) {
                  this.rvRedraftTier = 4;
                }
                if (
                  +rbWorstPosRankOfEachTier.tier3 === 1 &&
                  this.rvRedraftTier !== 2
                ) {
                  this.rvRedraftTier = 4;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +rbWorstPosRankOfEachTier.tier4 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +rbWorstPosRankOfEachTier.tier5 &&
                +rbWorstPosRankOfEachTier.tier5 > 1
              ) {
                if (+rbWorstPosRankOfEachTier.tier4 > 1) {
                  this.rvRedraftTier = 5;
                }
                if (
                  +rbWorstPosRankOfEachTier.tier4 === 1 &&
                  this.rvRedraftTier !== 3
                ) {
                  this.rvRedraftTier = 5;
                }
              }

              // console.log(
              //   player.player.name,
              //   rvRedraftPlayerObject['"PosRank"'],
              //   this.rvRedraftTier
              // );
            }

            //WR
            if (fcPosition === 'WR') {
              // console.log(
              //   player.player.name,
              //   rvRedraftPlayerObject['"PosRank"']

              // );
              // console.log(
              //   player.player.name,
              //   +rvRedraftPlayerObject['"PosRank"'],
              //   +qbWorstPosRankOfEachTier.tier3
              // );
              // WR
              if (
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +wrWorstPosRankOfEachTier.tier1 &&
                +wrWorstPosRankOfEachTier.tier1 > 1
              ) {
                this.rvRedraftTier = 1;
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +wrWorstPosRankOfEachTier.tier1 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +wrWorstPosRankOfEachTier.tier2 &&
                +wrWorstPosRankOfEachTier.tier2 > 1
              ) {
                if (+wrWorstPosRankOfEachTier.tier1 > 1) {
                  this.rvRedraftTier = 2;
                }
                if (
                  +wrWorstPosRankOfEachTier.tier1 === 1 &&
                  this.rvRedraftTier !== 1
                ) {
                  this.rvRedraftTier = 2;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +wrWorstPosRankOfEachTier.tier2 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +wrWorstPosRankOfEachTier.tier3 &&
                +wrWorstPosRankOfEachTier.tier3 > 1
              ) {
                if (+wrWorstPosRankOfEachTier.tier2 > 1) {
                  this.rvRedraftTier = 3;
                }
                if (
                  +wrWorstPosRankOfEachTier.tier2 === 1 &&
                  this.rvRedraftTier !== 1
                ) {
                  this.rvRedraftTier = 3;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +wrWorstPosRankOfEachTier.tier3 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +wrWorstPosRankOfEachTier.tier4 &&
                +wrWorstPosRankOfEachTier.tier4 > 1
              ) {
                if (+wrWorstPosRankOfEachTier.tier3 > 1) {
                  this.rvRedraftTier = 4;
                }
                if (
                  +wrWorstPosRankOfEachTier.tier3 === 1 &&
                  this.rvRedraftTier !== 2
                ) {
                  this.rvRedraftTier = 4;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +wrWorstPosRankOfEachTier.tier4 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +wrWorstPosRankOfEachTier.tier5 &&
                +wrWorstPosRankOfEachTier.tier5 > 1
              ) {
                if (+wrWorstPosRankOfEachTier.tier4 > 1) {
                  this.rvRedraftTier = 5;
                }
                if (
                  +wrWorstPosRankOfEachTier.tier4 === 1 &&
                  this.rvRedraftTier !== 3
                ) {
                  this.rvRedraftTier = 5;
                }
              }

              // console.log(
              //   player.player.name,
              //   rvRedraftPlayerObject['"PosRank"'],
              //   this.rvRedraftTier
              // );
            }

            //TE
            if (fcPosition === 'TE') {
              // console.log(
              //   player.player.name,
              //   rvRedraftPlayerObject['"PosRank"']

              // );
              // console.log(
              //   player.player.name,
              //   +rvRedraftPlayerObject['"PosRank"'],
              //   +qbWorstPosRankOfEachTier.tier3
              // );
              // TE
              if (
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +teWorstPosRankOfEachTier.tier1 &&
                +teWorstPosRankOfEachTier.tier1 > 1
              ) {
                this.rvRedraftTier = 1;
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +teWorstPosRankOfEachTier.tier1 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +teWorstPosRankOfEachTier.tier2 &&
                +teWorstPosRankOfEachTier.tier2 > 1
              ) {
                if (+teWorstPosRankOfEachTier.tier1 > 1) {
                  this.rvRedraftTier = 2;
                }
                if (
                  +teWorstPosRankOfEachTier.tier1 === 1 &&
                  this.rvRedraftTier !== 1
                ) {
                  this.rvRedraftTier = 2;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +teWorstPosRankOfEachTier.tier2 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +teWorstPosRankOfEachTier.tier3 &&
                +teWorstPosRankOfEachTier.tier3 > 1
              ) {
                if (+teWorstPosRankOfEachTier.tier2 > 1) {
                  this.rvRedraftTier = 3;
                }
                if (
                  +teWorstPosRankOfEachTier.tier2 === 1 &&
                  this.rvRedraftTier !== 1
                ) {
                  this.rvRedraftTier = 3;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +teWorstPosRankOfEachTier.tier3 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +teWorstPosRankOfEachTier.tier4 &&
                +teWorstPosRankOfEachTier.tier4 > 1
              ) {
                if (+teWorstPosRankOfEachTier.tier3 > 1) {
                  this.rvRedraftTier = 4;
                }
                if (
                  +teWorstPosRankOfEachTier.tier3 === 1 &&
                  this.rvRedraftTier !== 2
                ) {
                  this.rvRedraftTier = 4;
                }
              }
              //
              if (
                +rvRedraftPlayerObject['"PosRank"'] >
                  +teWorstPosRankOfEachTier.tier4 &&
                +rvRedraftPlayerObject['"PosRank"'] <=
                  +teWorstPosRankOfEachTier.tier5 &&
                +teWorstPosRankOfEachTier.tier5 > 1
              ) {
                if (+teWorstPosRankOfEachTier.tier4 > 1) {
                  this.rvRedraftTier = 5;
                }
                if (
                  +teWorstPosRankOfEachTier.tier4 === 1 &&
                  this.rvRedraftTier !== 3
                ) {
                  this.rvRedraftTier = 5;
                }
              }

              // console.log(
              //   player.player.name,
              //   rvRedraftPlayerObject['"PosRank"'],
              //   this.rvRedraftTier
              // );
            }
          }
        }
      }

      if (curMonth > 8) {
        //setting this.rvRedraftPositionRank
        // console.log(sanitizedFourForFourRedraftPlayerName)
        if (sanitizedFourForFourRedraftPlayerName === sanitizedFCPlayerName) {
          // console.log(sanitizedFourForFourRedraftPlayerName)
          let initialTempPosRank = fourForFourRestOfSeasonRedraftPlayerGroup[
            '"Rank"'
          ].slice(1, -1);
          let tempPosRank = +initialTempPosRank;
          this.rvRedraftPositionRank = tempPosRank;
          // console.log(sanitizedFCPlayerName, this.rvRedraftPositionRank)

          //
          // setting this.rvRedraftTier
          if (fcPosition === 'QB') {
            // console.log(sanitizedFourForFourRedraftPlayerName, this.rvRedraftPositionRank)
            if (this.rvRedraftPositionRank < 4) {
              this.rvRedraftTier = 1;
            }
            if (
              this.rvRedraftPositionRank > 3 &&
              this.rvRedraftPositionRank < 9
            ) {
              this.rvRedraftTier = 2;
            }
            if (
              this.rvRedraftPositionRank > 8 &&
              this.rvRedraftPositionRank < 11
            ) {
              this.rvRedraftTier = 3;
            }
            if (
              this.rvRedraftPositionRank > 10 &&
              this.rvRedraftPositionRank < 16
            ) {
              this.rvRedraftTier = 4;
            }
            if (
              this.rvRedraftPositionRank > 15 &&
              this.rvRedraftPositionRank < 20
            ) {
              this.rvRedraftTier = 5;
            }
            if (
              this.rvRedraftPositionRank > 19 &&
              this.rvRedraftPositionRank < 26
            ) {
              this.rvRedraftTier = 6;
            }
            if (this.rvRedraftPositionRank > 25) {
              this.rvRedraftTier = 7;
            }
          }

          if (fcPosition === 'RB' || fcPosition === 'WR') {
            // console.log(sanitizedFourForFourRedraftPlayerName, this.rvRedraftPositionRank)
            if (this.rvRedraftPositionRank < 7) {
              this.rvRedraftTier = 1;
            }
            if (
              this.rvRedraftPositionRank > 6 &&
              this.rvRedraftPositionRank < 14
            ) {
              this.rvRedraftTier = 2;
            }
            if (
              this.rvRedraftPositionRank > 13 &&
              this.rvRedraftPositionRank < 21
            ) {
              this.rvRedraftTier = 3;
            }
            if (
              this.rvRedraftPositionRank > 20 &&
              this.rvRedraftPositionRank < 30
            ) {
              this.rvRedraftTier = 4;
            }
            if (
              this.rvRedraftPositionRank > 29 &&
              this.rvRedraftPositionRank < 36
            ) {
              this.rvRedraftTier = 5;
            }
            if (
              this.rvRedraftPositionRank > 35 &&
              this.rvRedraftPositionRank < 41
            ) {
              this.rvRedraftTier = 6;
            }
            if (this.rvRedraftPositionRank > 40) {
              this.rvRedraftTier = 7;
            }
          }

          if (fcPosition === 'TE') {
            // console.log(sanitizedFourForFourRedraftPlayerName, this.rvRedraftPositionRank)
            if (this.rvRedraftPositionRank < 3) {
              this.rvRedraftTier = 1;
            }
            if (
              this.rvRedraftPositionRank > 2 &&
              this.rvRedraftPositionRank < 8
            ) {
              this.rvRedraftTier = 2;
            }
            if (
              this.rvRedraftPositionRank > 7 &&
              this.rvRedraftPositionRank < 12
            ) {
              this.rvRedraftTier = 3;
            }
            if (
              this.rvRedraftPositionRank > 11 &&
              this.rvRedraftPositionRank < 16
            ) {
              this.rvRedraftTier = 4;
            }
            if (
              this.rvRedraftPositionRank > 15 &&
              this.rvRedraftPositionRank < 20
            ) {
              this.rvRedraftTier = 5;
            }
            if (
              this.rvRedraftPositionRank > 19 &&
              this.rvRedraftPositionRank < 23
            ) {
              this.rvRedraftTier = 6;
            }
            if (this.rvRedraftPositionRank > 22) {
              this.rvRedraftTier = 7;
            }
          }
        }
      }
    }

    puttingItAllTogetherRedraft(
      sanitizedFCPlayerName,
      sanitizedRVRedraftPlayerName,
      fcPosition,
      fourForFourRestOfSeasonRedraftPlayerGroup,
      sanitizedFourForFourRedraftPlayerName
    ) {
      let nameToUse = '';

      if (curMonth < 9) {
        nameToUse = sanitizedRVRedraftPlayerName;
      }
      if (curMonth > 8) {
        nameToUse = sanitizedFourForFourRedraftPlayerName;
      }
      if (nameToUse === sanitizedFCPlayerName) {
        //////////////
        //setting myRedraftScoreFromPlayersRedraftTier
        ////////////////
        let bestQBTier = 1;
        if (fcPosition === 'QB') {
          // console.log(fcPosition);
          if (curMonth < 9) {
            bestQBTier = 2;
            if (this.rvRedraftTier === 1) {
              bestQBTier = 1;
            }
            if (bestQBTier > 1 && this.rvRedraftTier === 2) {
              bestQBTier = 2;
            }
            if (bestQBTier > 2 && this.rvRedraftTier === 3) {
              bestQBTier = 3;
            }
            if (bestQBTier > 3 && this.rvRedraftTier === 4) {
              bestQBTier = 4;
            }
          }
          if (curMonth > 8) {
            bestQBTier = 1;
          }
          this.curBestQBTier = bestQBTier;

          if (this.rvRedraftTier === bestQBTier) {
            // console.log(this.name, this.rvRedraftTier, bestQBTier);
            this.myRedraftScoreFromPlayersRedraftTier = 700;
          }
          if (this.rvRedraftTier === bestQBTier + 1) {
            // console.log(this.name, this.rvRedraftTier, bestQBTier);
            this.myRedraftScoreFromPlayersRedraftTier = 500;
          }
          if (this.rvRedraftTier === bestQBTier + 2) {
            // console.log(this.name, this.rvRedraftTier, bestQBTier);
            this.myRedraftScoreFromPlayersRedraftTier = 400;
          }
          if (this.rvRedraftTier === bestQBTier + 3) {
            // console.log(this.name, this.rvRedraftTier, bestQBTier);
            this.myRedraftScoreFromPlayersRedraftTier = 300;
          }
          if (this.rvRedraftTier === bestQBTier + 4) {
            // console.log(this.name, this.rvRedraftTier, bestQBTier);
            this.myRedraftScoreFromPlayersRedraftTier = 200;
          }
          if (this.rvRedraftTier === bestQBTier + 5) {
            // console.log(this.name, this.rvRedraftTier, bestQBTier);
            this.myRedraftScoreFromPlayersRedraftTier = 100;
          }
          if (this.rvRedraftTier > bestQBTier + 5) {
            // console.log(this.name, this.rvRedraftTier, bestQBTier);
            this.myRedraftScoreFromPlayersRedraftTier = 0;
          }
        }
        if (fcPosition !== 'QB') {
          // console.log(fcPosition);

          if (this.rvRedraftTier === 1) {
            this.myRedraftScoreFromPlayersRedraftTier = 600;
          }
          if (this.rvRedraftTier === 2) {
            this.myRedraftScoreFromPlayersRedraftTier = 400;
          }
          if (this.rvRedraftTier === 3) {
            this.myRedraftScoreFromPlayersRedraftTier = 300;
          }
          if (this.rvRedraftTier === 4) {
            this.myRedraftScoreFromPlayersRedraftTier = 200;
          }
          if (this.rvRedraftTier === 5) {
            this.myRedraftScoreFromPlayersRedraftTier = 100;
          }
          if (this.rvRedraftTier > 5) {
            this.myRedraftScoreFromPlayersRedraftTier = 0;
          }
        }
      }

      //   ///////////////
      //   ////////////////////////////
      //   // comparing my redraft rank to market redraft rank
      //   //////////////////////////////
      //   // console.log(
      //   //   sanitizedFCPlayerName,
      //   //   fpRedraftPositionRank,
      //   //   rvRedraftPositionRank
      //   // );
      if (sanitizedRVRedraftPlayerName === sanitizedFCPlayerName) {
        this.myRedraftDifferenceScore = 0;
        //1-10 average
        if (
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 <
          11
        ) {
          // console.log(
          //   sanitizedFCPlayerName,
          //   this.fpRedraftPositionRank,
          //   this.rvRedraftPositionRank
          // );
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 3) {
            this.myRedraftDifferenceScore = 100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -3) {
            this.myRedraftDifferenceScore = -100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 4) {
            this.myRedraftDifferenceScore = 300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -4) {
            this.myRedraftDifferenceScore = -300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 5) {
            this.myRedraftDifferenceScore = 500;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -5) {
            this.myRedraftDifferenceScore = -500;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 5) {
            this.myRedraftDifferenceScore = 600;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -5) {
            this.myRedraftDifferenceScore = -600;
            if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 7) {
              this.myRedraftDifferenceScore = 700;
            }
            if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -7) {
              this.myRedraftDifferenceScore = -700;
            }
          }
        }
        //11-20 average
        if (
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 > 10 &&
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 < 21
        ) {
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 4) {
            this.myRedraftDifferenceScore = 100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -4) {
            this.myRedraftDifferenceScore = -100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 5) {
            this.myRedraftDifferenceScore = 300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -5) {
            this.myRedraftDifferenceScore = -300;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === 6 ||
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === 7
          ) {
            this.myRedraftDifferenceScore = 500;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === -6 ||
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === -7
          ) {
            this.myRedraftDifferenceScore = -500;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 7) {
            this.myRedraftDifferenceScore = 600;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -7) {
            this.myRedraftDifferenceScore = -600;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 9) {
            this.myRedraftDifferenceScore = 700;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -9) {
            this.myRedraftDifferenceScore = -700;
          }
        }
        //21-30 average
        if (
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 > 20 &&
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 < 31
        ) {
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 4) {
            this.myRedraftDifferenceScore = 100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -4) {
            this.myRedraftDifferenceScore = -100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 5) {
            this.myRedraftDifferenceScore = 200;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -5) {
            this.myRedraftDifferenceScore = -200;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 6) {
            this.myRedraftDifferenceScore = 300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -6) {
            this.myRedraftDifferenceScore = -300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 7) {
            this.myRedraftDifferenceScore = 400;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -7) {
            this.myRedraftDifferenceScore = -400;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === 8 ||
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === 9
          ) {
            this.myRedraftDifferenceScore = 500;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === -8 ||
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === -9
          ) {
            this.myRedraftDifferenceScore = -500;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 9) {
            this.myRedraftDifferenceScore = 600;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -9) {
            this.myRedraftDifferenceScore = -600;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 13) {
            this.myRedraftDifferenceScore = 700;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -13) {
            this.myRedraftDifferenceScore = -700;
          }
        }
        //31-50 avarage
        if (
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 > 30 &&
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 < 51
        ) {
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 5) {
            this.myRedraftDifferenceScore = 100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -5) {
            this.myRedraftDifferenceScore = -100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 6) {
            this.myRedraftDifferenceScore = 200;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -6) {
            this.myRedraftDifferenceScore = -200;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 7) {
            this.myRedraftDifferenceScore = 300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -7) {
            this.myRedraftDifferenceScore = -300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 8) {
            this.myRedraftDifferenceScore = 400;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -8) {
            this.myRedraftDifferenceScore = -400;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === 9 ||
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === 10
          ) {
            this.myRedraftDifferenceScore = 500;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === -9 ||
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === -10
          ) {
            this.myRedraftDifferenceScore = -500;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank > 10 &&
            this.fpRedraftPositionRank - this.rvRedraftPositionRank < 14
          ) {
            this.myRedraftDifferenceScore = 600;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank < -10 &&
            this.fpRedraftPositionRank - this.rvRedraftPositionRank > -14
          ) {
            this.myRedraftDifferenceScore = -600;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 13) {
            this.myRedraftDifferenceScore = 700;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -13) {
            this.myRedraftDifferenceScore = -700;
          }
        }
        //average 51-90
        if (
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 > 40 &&
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 < 91
        ) {
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 19) {
            this.myRedraftDifferenceScore = 100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -19) {
            this.myRedraftDifferenceScore = -100;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 20) {
            this.myRedraftDifferenceScore = 200;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -20) {
            this.myRedraftDifferenceScore = -200;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 21) {
            this.myRedraftDifferenceScore = 300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -21) {
            this.myRedraftDifferenceScore = -300;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === 22) {
            this.myRedraftDifferenceScore = 400;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank === -22) {
            this.myRedraftDifferenceScore = -400;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === 23 ||
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === 24
          ) {
            this.myRedraftDifferenceScore = 500;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === -23 ||
            this.fpRedraftPositionRank - this.rvRedraftPositionRank === -24
          ) {
            this.myRedraftDifferenceScore = -500;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank > 24 &&
            this.fpRedraftPositionRank - this.rvRedraftPositionRank < 30
          ) {
            this.myRedraftDifferenceScore = 600;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank < -24 &&
            this.fpRedraftPositionRank - this.rvRedraftPositionRank > -30
          ) {
            this.myRedraftDifferenceScore = -600;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 30) {
            this.myRedraftDifferenceScore = 700;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -30) {
            this.myRedraftDifferenceScore = -700;
          }
        }
        //average greater than 90
        if (
          (this.rvRedraftPositionRank + this.fpRedraftPositionRank) / 2 >
          90
        ) {
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank > 40 &&
            this.fpRedraftPositionRank - this.rvRedraftPositionRank < 46
          ) {
            this.myRedraftDifferenceScore = 200;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank > -40 &&
            this.fpRedraftPositionRank - this.rvRedraftPositionRank < -46
          ) {
            this.myRedraftDifferenceScore = -200;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank > 45 &&
            this.fpRedraftPositionRank - this.rvRedraftPositionRank < 51
          ) {
            this.myRedraftDifferenceScore = 400;
          }
          if (
            this.fpRedraftPositionRank - this.rvRedraftPositionRank > -45 &&
            this.fpRedraftPositionRank - this.rvRedraftPositionRank < -51
          ) {
            this.myRedraftDifferenceScore = -400;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank > 50) {
            this.myRedraftDifferenceScore = 600;
          }
          if (this.fpRedraftPositionRank - this.rvRedraftPositionRank < -50) {
            this.myRedraftDifferenceScore = -600;
          }
        }
      }
    }

    calculatingProjectedNextOffseasonDynastyValue(
      sanitizedFCPlayerName,
      sanitizedRVPlayerName,
      fcQBMaxValue,
      fcNonQBMaxValue,
      fcPickYear,
      fcPickRound
    ) {
      //things ill need to do this
      //current date, age, position, position age apex, current market value, dynasty value difference from mine to market, my projected redraft postional tier score, my redraft difference score

      // console.log(curDate);

      // console.log(amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch);

      if (this.position === 'PICK') {
        // console.log(this.name, this.fantasyCalcValue, this.myValue);
        // console.log(fcPickYear);
        this.projectedNextOffseasonDynastyValue = this.fantasyCalcValue;

        if (fcPickYear === curYear + 1) {
          // console.log(this.name);
          if (fcPickRound === 1) {
            this.projectedNextOffseasonDynastyValue = 3500;
          }
          if (fcPickRound === 2) {
            // console.log(this.name);
            this.projectedNextOffseasonDynastyValue = 1750;
          }
          if (fcPickRound === 3) {
            // console.log(this.name);
            this.projectedNextOffseasonDynastyValue = 1000;
          }
        }
        if (fcPickYear === curYear + 2) {
          // console.log(this.name);
          if (fcPickRound === 1) {
            // console.log(this.name);
            this.projectedNextOffseasonDynastyValue = 2800;
          }
          if (fcPickRound === 2) {
            // console.log(this.name);
            this.projectedNextOffseasonDynastyValue = 1500;
          }
          if (fcPickRound === 3) {
            // console.log(this.name);
            this.projectedNextOffseasonDynastyValue = 1000;
          }
        }
        if (fcPickYear === curYear + 3) {
          // console.log(this.name);
          if (fcPickRound === 1) {
            // console.log(this.name);
            this.projectedNextOffseasonDynastyValue = 2200;
          }
          if (fcPickRound === 2) {
            // console.log(this.name);
            this.projectedNextOffseasonDynastyValue = 1300;
          }
          if (fcPickRound === 3) {
            // console.log(this.name);
            this.projectedNextOffseasonDynastyValue = 1000;
          }
        }
      }

      if (
        sanitizedFCPlayerName &&
        sanitizedFCPlayerName === sanitizedRVPlayerName
      ) {
        // console.log(sanitizedFCPlayerName);
        // console.log(
        //   sanitizedFCPlayerName,
        //   this.myRedraftScoreFromPlayersRedraftTier,
        //   this.myRedraftDifferenceScore
        // );

        let value = PNODVCalcFunction(
          sanitizedFCPlayerName,
          sanitizedRVPlayerName,
          this.position,
          this.age,
          amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch,
          curMonth,
          this.name,
          this.fantasyCalcValue,
          this.valueDiffBetweenMyValueAndMarketValue,
          this.myRedraftScoreFromPlayersRedraftTier,
          this.myRedraftDifferenceScore,
          this.fcQBPercentOfMax,
          this.fcNonQBPercentOfMax,
          this.rvTier,
          this.percentValueDiffBetweenMyValueAndMarket,
          fcQBMaxValue,
          fcNonQBMaxValue
        );

        // if (!value) {
        //   console.log(sanitizedFCPlayerName, this.fantasyCalcValue);
        // }

        if (value) {
          // console.log(sanitizedFCPlayerName, value);

          if (this.position === 'QB') {
            let tempprojectedNextOffseasonDynastyValue = +(
              fcQBMaxValue * value
            ).toFixed(2);

            let percentageChange = (
              (this.fantasyCalcValue - tempprojectedNextOffseasonDynastyValue) /
              this.fantasyCalcValue
            ).toFixed(2);

            let positivePercentageChange = (
              (tempprojectedNextOffseasonDynastyValue - this.fantasyCalcValue) /
              this.fantasyCalcValue
            ).toFixed(2);

            if (percentageChange < 0.3 && positivePercentageChange < 0.59) {
              this.projectedNextOffseasonDynastyValue = +(
                fcQBMaxValue * value
              ).toFixed(0);
              this.projectedNextOffseasonMarketPercentOfMax = value;

              // console.log(
              //   this.name,
              //   this.fantasyCalcValue,
              //   tempprojectedNextOffseasonDynastyValue,
              //   this.projectedNextOffseasonDynastyValue,

              //   this.projectedNextOffseasonMarketPercentOfMax
              // );
            }

            if (percentageChange >= 0.3 && positivePercentageChange < 0.59) {
              this.projectedNextOffseasonDynastyValue = +(
                this.fantasyCalcValue * 0.7
              ).toFixed(0);

              this.projectedNextOffseasonMarketPercentOfMax = +(
                this.projectedNextOffseasonDynastyValue / fcQBMaxValue
              ).toFixed(0);

              // console.log(
              //   this.name,
              //   this.fantasyCalcValue,
              //   tempprojectedNextOffseasonDynastyValue,
              //   this.projectedNextOffseasonDynastyValue,

              //   this.projectedNextOffseasonMarketPercentOfMax
              // );
            }

            if (positivePercentageChange >= 0.59) {
              // console.log(this.name, positivePercentageChange);
              let tempValue = this.fantasyCalcValue * 0.6;
              let newValue = this.fantasyCalcValue + tempValue;
              // console.log(this.name, this.fantasyCalcValue, newValue);
              this.projectedNextOffseasonDynastyValue = +newValue.toFixed(0);

              this.projectedNextOffseasonMarketPercentOfMax = +(
                this.projectedNextOffseasonDynastyValue / fcQBMaxValue
              ).toFixed(0);
            }
          }

          /////////////////////////

          if (this.position !== 'QB') {
            let tempprojectedNextOffseasonDynastyValue = +(
              fcNonQBMaxValue * value
            ).toFixed(2);

            let percentageChange = (
              (this.fantasyCalcValue - tempprojectedNextOffseasonDynastyValue) /
              this.fantasyCalcValue
            ).toFixed(2);

            let positivePercentageChange = (
              (tempprojectedNextOffseasonDynastyValue - this.fantasyCalcValue) /
              this.fantasyCalcValue
            ).toFixed(2);

            // if (this.name === 'Christian McCaffrey') {
            //   console.log(
            //     tempprojectedNextOffseasonDynastyValue,
            //     percentageChange,
            //     this.fantasyCalcValue,
            //     this.myValue
            //   );
            // }

            if (percentageChange < 0.3 && positivePercentageChange < 0.59) {
              //

              if (this.rvRedraftTier === 1 && percentageChange >= 0.1) {
                let tempValue = this.fantasyCalcValue * 0.1;
                let newValue = this.fantasyCalcValue - tempValue;

                this.projectedNextOffseasonDynastyValue = newValue.toFixed(0);
                this.projectedNextOffseasonMarketPercentOfMax = +(
                  this.projectedNextOffseasonDynastyValue / fcNonQBMaxValue
                ).toFixed(0);

                // console.log(
                //   this.name,
                //   this.fantasyCalcValue,
                //   this.projectedNextOffseasonDynastyValue,
                //   percentageChange
                // );
              }

              if (this.rvRedraftTier === 2 && percentageChange >= 0.2) {
                let tempValue = this.fantasyCalcValue * 0.2;
                let newValue = this.fantasyCalcValue - tempValue;

                this.projectedNextOffseasonDynastyValue = newValue.toFixed(0);
                this.projectedNextOffseasonMarketPercentOfMax = +(
                  this.projectedNextOffseasonDynastyValue / fcNonQBMaxValue
                ).toFixed(0);

                // console.log(
                //   this.name,
                //   this.fantasyCalcValue,
                //   this.projectedNextOffseasonDynastyValue,
                //   percentageChange
                // );
              }

              if (
                this.rvRedraftTier > 2 ||
                (this.rvRedraftTier === 1 && percentageChange < 0.1) ||
                (this.rvRedraftTier === 2 && percentageChange < 0.2)
              ) {
                // if (this.name === 'Saquon Barkley') {
                //   console.log(
                //     tempprojectedNextOffseasonDynastyValue,
                //     percentageChange,
                //     this.fantasyCalcValue,
                //     this.myValue
                //   );
                // }

                this.projectedNextOffseasonDynastyValue = +(
                  fcNonQBMaxValue * value
                ).toFixed(0);
                this.projectedNextOffseasonMarketPercentOfMax = value;
              }
            }

            if (percentageChange >= 0.3 && positivePercentageChange < 0.59) {
              if (this.rvRedraftTier === 1 && percentageChange > 0.1) {
                this.projectedNextOffseasonDynastyValue = +(
                  this.fantasyCalcValue * 0.9
                ).toFixed(0);

                this.projectedNextOffseasonMarketPercentOfMax = +(
                  this.projectedNextOffseasonDynastyValue / fcNonQBMaxValue
                ).toFixed(0);
              }

              if (this.rvRedraftTier === 2 && percentageChange > 0.2) {
                this.projectedNextOffseasonDynastyValue = +(
                  this.fantasyCalcValue * 0.8
                ).toFixed(0);

                this.projectedNextOffseasonMarketPercentOfMax = +(
                  this.projectedNextOffseasonDynastyValue / fcNonQBMaxValue
                ).toFixed(0);
              }

              if (this.rvRedraftTier > 2) {
                this.projectedNextOffseasonDynastyValue = +(
                  this.fantasyCalcValue * 0.7
                ).toFixed(0);

                this.projectedNextOffseasonMarketPercentOfMax = +(
                  this.projectedNextOffseasonDynastyValue / fcNonQBMaxValue
                ).toFixed(0);

                // console.log(
                //   this.name,
                //   this.fantasyCalcValue,
                //   tempprojectedNextOffseasonDynastyValue,
                //   this.projectedNextOffseasonDynastyValue,

                //   this.projectedNextOffseasonMarketPercentOfMax
                // );
              }
            }

            if (positivePercentageChange >= 0.59) {
              // console.log(this.name, positivePercentageChange);
              let tempValue = this.fantasyCalcValue * 0.6;
              let newValue = this.fantasyCalcValue + tempValue;
              // console.log(this.name, this.fantasyCalcValue, newValue);
              this.projectedNextOffseasonDynastyValue = +newValue.toFixed(0);

              this.projectedNextOffseasonMarketPercentOfMax = +(
                this.projectedNextOffseasonDynastyValue / fcNonQBMaxValue
              ).toFixed(0);
            }

            if (
              positivePercentageChange >= 0.29 &&
              this.fantasyCalcValue > 4000
            ) {
              // console.log(this.name, positivePercentageChange);

              let tempValue = this.fantasyCalcValue * 0.3;
              let newValue = this.fantasyCalcValue + tempValue;
              // console.log(this.name, this.fantasyCalcValue, newValue);
              this.projectedNextOffseasonDynastyValue = +newValue.toFixed(0);

              this.projectedNextOffseasonMarketPercentOfMax = +(
                this.projectedNextOffseasonDynastyValue / fcNonQBMaxValue
              ).toFixed(0);

              // console.log(this.name, this.projectedNextOffseasonDynastyValue);
            }

            // console.log(
            //   this.name,
            //   this.fantasyCalcValue,

            //   this.projectedNextOffseasonDynastyValue

            //   // this.projectedNextOffseasonMarketPercentOfMax
            // );
          }
        }
      }
    }

    assigningPNODVToThoseThatFellThroug(
      sanitizedFCPlayerName,
      sanitizedRVPlayerName,
      fcQBMaxValue,
      fcNonQBMaxValue
    ) {
      if (!this.projectedNextOffseasonDynastyValue) {
        if (this.position !== 'PICK') {
          // console.log(this.name);
          this.projectedNextOffseasonDynastyValue = this.fantasyCalcValue;
          if (this.position === 'QB') {
            // console.log(this.name);
            this.projectedNextOffseasonMarketPercentOfMax = +(
              this.projectedNextOffseasonDynastyValue / fcQBMaxValue
            ).toFixed(0);
          }
          if (this.position !== 'QB') {
            this.projectedNextOffseasonMarketPercentOfMax = +(
              this.projectedNextOffseasonDynastyValue / fcNonQBMaxValue
            ).toFixed(0);
          }
        }
      }
    }

    assigningDifferenceBetweenCurrentMarketDynastyValueAndPNODV(
      sanitizedFCPlayerName,
      sanitizedRVPlayerName,
      fcQBMaxValue,
      fcNonQBMaxValue
    ) {
      // if (this.position === 'PICK') {
      //   console.log(
      //     this.position,
      //     this.projectedNextOffseasonDynastyValue,
      //     this.fantasyCalcValue
      //   );
      // }
      let tempValueDifference = +(
        this.projectedNextOffseasonDynastyValue - this.fantasyCalcValue
      ).toFixed(2);
      // console.log(this.name, tempValueDifference);
      this.valueDifferenceBetweenCurrentMarketValueAndPNODV =
        tempValueDifference;
    }
  }

  ///////////end of methods///////////////////////

  //////////////////////////////

  //////////////////////////////////

  //////////////////////////////////

  ////////////////////fantasyCalc below///////////////////////////////////////////

  /////////////////////////////////////////
  ////////////////////////////

  let SleeperIDFromMe = '';
  let PlayerArray = [];
  let oneOlderPlayerArray = [];
  let oneOlderPlayerValues = [];
  let ppPlayerObject;
  let fpRedraftPlayerObject;
  let sanitizedFPRedraftPlayerName = '';
  let rvRedraftPlayerObject;
  let sanitizedRVRedraftPlayerName = '';
  let fourForFourRestOfSeasonRedraftPlayerObject;
  let sanitizedFourForFourRedraftPlayerName = '';

  // let sanitizedPPPlayerName = '';
  // let sanitizedPPPWithPicksPlayerName = '';

  newData.forEach(function (topLevelObject) {
    PlayerArray = topLevelObject.data;
  });

  oneOlderFantasyCalcData.forEach(function (oneOlderTopLevelObject) {
    // console.log(oneOlderTopLevelObject.newData);
    // console.log(oneOlderTopLevelObject);
    oneOlderPlayerArray = oneOlderTopLevelObject.newData;
  });

  // console.log(oneOlderPlayerArray);

  //for fantasycalc

  let counter = 0;
  // console.log(PlayerArray);
  PlayerArray.forEach(function (player) {
    if (
      player.overallRank === 1 ||
      (player.overallRank === 2 && player.player.position === 'QB')
    ) {
      let playerOneValue = 0;
      let playerTwoValue = 0;
      // console.log(player);
      if (player.overallRank === 1) {
        playerOneValue = +player.value;
        fcQBMaxValue = +player.value;
        // console.log(playerOneValue);
      }
      if (player.overallRank === 2) {
        playerTwoValue = +player.value;
        fcQBMaxValue = +fcQBMaxValue + +player.value;
        // console.log(fcQBMaxValue);
        fcQBMaxValue = +(fcQBMaxValue / 2);
      }
      // console.log(fcQBMaxValue);
      // fcQBMaxValue = +((fcQBPercentOfMax += player.value) / 2).toFixed(2);

      ///
    }
    if (player.player.position !== 'QB' && fcNonQBMaxValue === 0) {
      // console.log(player.player.name);
      fcNonQBMaxValue = +player.value;
      // console.log(fcNonQBMaxValue);
      counter = 1;
    }
    if (
      player.player.position !== 'QB' &&
      counter === 1 &&
      fcNonQBMaxValue !== +player.value
    ) {
      // console.log(player.player.name);
      fcNonQBMaxValue = +fcNonQBMaxValue + +player.value;
      // console.log(fcQBMaxValue);
      fcNonQBMaxValue = +(fcNonQBMaxValue / 2);
      // console.log(fcNonQBMaxValue);
      counter = 0;
    }
  });

  let qbWorstPosRankInTier3 = 1;
  let qbWorstPosRankInTier4 = 1;
  let qbWorstPosRankInTier5 = 1;
  let qbWorstPosRankInTier6 = 1;
  let qbWorstPosRankInTier7 = 1;
  let qbWorstPosRankInTier8 = 1;

  let rbWorstPosRankInTier1 = 1;
  let rbWorstPosRankInTier2 = 1;
  let rbWorstPosRankInTier3 = 1;
  let rbWorstPosRankInTier4 = 1;
  let rbWorstPosRankInTier5 = 1;

  let wrWorstPosRankInTier1 = 1;
  let wrWorstPosRankInTier2 = 1;
  let wrWorstPosRankInTier3 = 1;
  let wrWorstPosRankInTier4 = 1;
  let wrWorstPosRankInTier5 = 1;

  let teWorstPosRankInTier1 = 1;
  let teWorstPosRankInTier2 = 1;
  let teWorstPosRankInTier3 = 1;
  let teWorstPosRankInTier4 = 1;
  let teWorstPosRankInTier5 = 1;

  PlayerArray.forEach(function (player) {
    if (player.player.name.includes("'")) {
      player.player.name = player.player.name.replace("'", '');
    }

    let sanitizedFCPlayerName = player.player.name
      .replace("'", '')
      .replace('.', '')
      .replace('.', '');

    rvRedraftRankingsTEP.forEach(function (playerObject) {
      // console.log(playerObject);
      if (playerObject['"Player"'].includes("'")) {
        playerObject['"Player"'] = playerObject['"Player"'].replace("'", '');
      }

      let tempsanitizedRVRedraftPlayerName = playerObject['"Player"']
        .replace("'", '')
        .replace('.', '')
        .replace('.', '')
        .slice(1, -1);

      if (tempsanitizedRVRedraftPlayerName === sanitizedFCPlayerName) {
        sanitizedRVRedraftPlayerName = tempsanitizedRVRedraftPlayerName;

        //QB
        if (playerObject['"POS"'].slice(1, -1) === 'QB') {
          // console.log(playerObject['"PosRank"'], playerObject['"AVGTier"']);
          let tier = +playerObject['"AVGTier"'];
          let posRank = +playerObject['"PosRank"'];
          // console.log(posRank, qbWorstPosRankInTier3);
          // tier 3
          if (tier && tier === 3 && posRank > qbWorstPosRankInTier3) {
            qbWorstPosRankInTier3 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 4
          if (tier && tier === 4 && posRank > qbWorstPosRankInTier4) {
            qbWorstPosRankInTier4 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          if (tier && tier === 5 && posRank > qbWorstPosRankInTier5) {
            qbWorstPosRankInTier5 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          if (tier && tier === 6 && posRank > qbWorstPosRankInTier6) {
            qbWorstPosRankInTier6 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          if (tier && tier === 7 && posRank > qbWorstPosRankInTier7) {
            qbWorstPosRankInTier7 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
        }
        //
        // RB

        if (playerObject['"POS"'].slice(1, -1) === 'RB') {
          // console.log(playerObject['"PosRank"'], playerObject['"AVGTier"']);
          let tier = +playerObject['"AVGTier"'];
          let posRank = +playerObject['"PosRank"'];
          // console.log(posRank, qbWorstPosRankInTier3);
          // tier 1
          if (tier && tier === 1 && posRank > rbWorstPosRankInTier1) {
            rbWorstPosRankInTier1 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 2
          if (tier && tier === 2 && posRank > rbWorstPosRankInTier2) {
            rbWorstPosRankInTier2 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 3
          if (tier && tier === 3 && posRank > rbWorstPosRankInTier3) {
            rbWorstPosRankInTier3 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 3
          if (tier && tier === 4 && posRank > rbWorstPosRankInTier4) {
            rbWorstPosRankInTier4 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 5
          if (tier && tier === 5 && posRank > rbWorstPosRankInTier5) {
            rbWorstPosRankInTier5 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
        }

        //
        // WR

        if (playerObject['"POS"'].slice(1, -1) === 'WR') {
          // console.log(playerObject['"PosRank"'], playerObject['"AVGTier"']);
          let tier = +playerObject['"AVGTier"'];
          let posRank = +playerObject['"PosRank"'];
          // console.log(posRank, qbWorstPosRankInTier3);
          // tier 1
          if (tier && tier === 1 && posRank > wrWorstPosRankInTier1) {
            wrWorstPosRankInTier1 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 2
          if (tier && tier === 2 && posRank > wrWorstPosRankInTier2) {
            wrWorstPosRankInTier2 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 3
          if (tier && tier === 3 && posRank > wrWorstPosRankInTier3) {
            wrWorstPosRankInTier3 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 3
          if (tier && tier === 4 && posRank > wrWorstPosRankInTier4) {
            wrWorstPosRankInTier4 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 5
          if (tier && tier === 5 && posRank > wrWorstPosRankInTier5) {
            wrWorstPosRankInTier5 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
        }

        //
        // TE

        if (playerObject['"POS"'].slice(1, -1) === 'TE') {
          // console.log(playerObject['"PosRank"'], playerObject['"AVGTier"']);
          let tier = +playerObject['"AVGTier"'];
          let posRank = +playerObject['"PosRank"'];
          // console.log(posRank, qbWorstPosRankInTier3);
          // tier 1
          if (tier && tier === 1 && posRank > teWorstPosRankInTier1) {
            teWorstPosRankInTier1 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 2
          if (tier && tier === 2 && posRank > teWorstPosRankInTier2) {
            teWorstPosRankInTier2 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 3
          if (tier && tier === 3 && posRank > teWorstPosRankInTier3) {
            teWorstPosRankInTier3 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 3
          if (tier && tier === 4 && posRank > teWorstPosRankInTier4) {
            teWorstPosRankInTier4 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
          // tier 5
          if (tier && tier === 5 && posRank > teWorstPosRankInTier5) {
            teWorstPosRankInTier5 = playerObject['"PosRank"'];
            // console.log(playerObject);
          }
        }
      }
    });
  });

  let qbWorstPosRankOfEachTier = {
    tier3: qbWorstPosRankInTier3,
    tier4: qbWorstPosRankInTier4,
    tier5: qbWorstPosRankInTier5,
    tier6: qbWorstPosRankInTier6,
    tier7: qbWorstPosRankInTier7,
    tier8: qbWorstPosRankInTier8,
  };

  let rbWorstPosRankOfEachTier = {
    tier1: rbWorstPosRankInTier1,
    tier2: rbWorstPosRankInTier2,
    tier3: rbWorstPosRankInTier3,
    tier4: rbWorstPosRankInTier4,
    tier5: rbWorstPosRankInTier5,
  };

  let wrWorstPosRankOfEachTier = {
    tier1: wrWorstPosRankInTier1,
    tier2: wrWorstPosRankInTier2,
    tier3: wrWorstPosRankInTier3,
    tier4: wrWorstPosRankInTier4,
    tier5: wrWorstPosRankInTier5,
  };

  let teWorstPosRankOfEachTier = {
    tier1: teWorstPosRankInTier1,
    tier2: teWorstPosRankInTier2,
    tier3: teWorstPosRankInTier3,
    tier4: teWorstPosRankInTier4,
    tier5: teWorstPosRankInTier5,
  };

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

    let fcQBPercentOfMax = 0;
    let fcNonQBPercentOfMax = 0;

    // console.log(player);
    // console.log(player.player.ID);

    if (player.player.position === 'QB') {
      // console.log(player.player.name);
      fcQBPercentOfMax = +(+player.value / fcQBMaxValue).toFixed(3);
      // console.log(player.player.name, fcQBPercentOfMax);
    }

    if (player.player.position !== 'QB' && player.player.position !== 'PICK') {
      // console.log(player.player.name);
      fcNonQBPercentOfMax = +(+player.value / fcNonQBMaxValue).toFixed(3);
      // console.log(player.player.name, fcNonQBPercentOfMax);
    }

    if (player.player.position === 'PICK') {
      // console.log(sanitizedFCPlayerName);
      // console.log(fcNonQBPercentOfMax);
      fcNonQBPercentOfMax = +(+player.value / fcNonQBMaxValue).toFixed(3);

      // console.log(sanitizedFCPlayerName, +sanitizedFCPlayerName.slice(11, 12));

      if (+sanitizedFCPlayerName.slice(11, 12) === 0) {
        fcPickYear = +sanitizedFCPlayerName.slice(0, 4);
        // console.log(fcPickYear);
        fcPickRound = +sanitizedFCPlayerName.slice(10, 11);
        // console.log(fcPickRound);
        fcPickNumber = +sanitizedFCPlayerName.slice(12);
        // console.log(sanitizedFCPlayerName, fcPickYear, fcPickRound, fcPickNumber);
      }
      // console.log(sanitizedFCPlayerName.slice(5, 6));
      if (
        +sanitizedFCPlayerName.slice(11, 12) !== 0 &&
        sanitizedFCPlayerName.slice(5, 6) === 'P'
      ) {
        fcPickYear = +sanitizedFCPlayerName.slice(0, 4);
        // console.log(fcPickYear);
        fcPickRound = +sanitizedFCPlayerName.slice(10, 11);
        // console.log(fcPickRound);
        fcPickNumber = +sanitizedFCPlayerName.slice(11);
        // console.log(
        //   sanitizedFCPlayerName,
        //   fcPickYear,
        //   fcPickRound,
        //   fcPickNumber
        // );
      }
      // console.log(sanitizedFCPlayerName, +sanitizedFCPlayerName.slice(11, 12));
      if (
        +sanitizedFCPlayerName.slice(11, 12) !== 0 &&
        sanitizedFCPlayerName.slice(5, 6) === 'R'
      ) {
        fcPickYear = +sanitizedFCPlayerName.slice(0, 4);
        // console.log(fcPickYear);
        fcPickRound = +sanitizedFCPlayerName.slice(11, 12);
        // console.log(fcPickRound);
        fcPickNumber = 0;
        // console.log(
        //   sanitizedFCPlayerName,
        //   fcPickYear,
        //   fcPickRound,
        //   fcPickNumber
        // );
      }

      SleeperIDFromMe = player.player.sleeperId;
      // console.log(curYear);
      if (fcPickYear === curYear) {
        if (fcPickNumber < 10) {
          fcPickRoundAndNumberFormattedForPP =
            `${fcPickRound}0${fcPickNumber}`.replace(/\s/g, '');
          // console.log(`${fcPickRound}0${fcPickNumber}`.replace(/\s/g, ''));
          // console.log(
          //   sanitizedFCPlayerName,
          //   fcPickRoundAndNumberFormattedForPP,
          //   fcPickYear
          // );
        }
        if (fcPickNumber === 10) {
          fcPickRoundAndNumberFormattedForPP = `${fcPickRound}${fcPickNumber}`
            .replace(/\s/g, '')
            .slice(0, 2);
          // console.log(
          //   sanitizedFCPlayerName,
          //   fcPickRoundAndNumberFormattedForPP,
          //   fcPickYear
          // );
        }
        if (fcPickNumber === 11 || fcPickNumber === 12) {
          fcPickRoundAndNumberFormattedForPP =
            `${fcPickRound}${fcPickNumber}`.replace(/\s/g, '');

          // console.log(
          //   sanitizedFCPlayerName,
          //   fcPickRoundAndNumberFormattedForPP,
          //   fcPickYear,
          //
          // );
          // rvValue = ;
        }
      }
    }

    if (fcPosition === 'PICK') {
      // console.log(fcPickYear);
      if (+fcPickYear === curYear + 1 && +fcPickRound === 1) {
        // console.log(fcPickYear);
        let fcNextYearFirstValue = +player.value;
        // console.log(player);
        // console.log(fcNextYearFirstValue);
      }
    }

    // pp

    let sanitizedPPPlayerName = '';
    let sanitizedPPPWithPicksPlayerName = '';
    let tempSanitizedPPPWithPicksPlayerName = '';

    if (player.player.position === 'PICK') {
      // console.log(player.player.name);

      ppSFTEPDynastyRankingsWithPicks.forEach(function (ppWithPicksPlayer) {
        if (ppWithPicksPlayer['"Full Name"'].includes("'")) {
          ppWithPicksPlayer['"Full Name"'] = ppWithPicksPlayer[
            '"Full Name"'
          ].replace("'", '');
        }

        // console.log(ppWithPicksPlayer['"Age"'].slice(1, -1));
        if (!ppWithPicksPlayer['"Age"'].slice(1, -1)) {
          // console.log(ppWithPicksPlayer);

          tempSanitizedPPPWithPicksPlayerName = ppWithPicksPlayer['"Full Name"']
            .slice(1, -1)
            .replace("'", '')
            .replace('.', '')
            .replace('.', '');
          // console.log(sanitizedPPPWithPicksPlayerName);

          // console.log(
          //   sanitizedPPPWithPicksPlayerName,
          //   fcPickRoundAndNumberFormattedForPP
          // );

          // console.log(sanitizedPPPWithPicksPlayerName);
          // sanitizedPPPWithPicksPlayerName =
          //   tempSanitizedPPPWithPicksPlayerName;

          if (tempSanitizedPPPWithPicksPlayerName.slice(0, 1) < 4) {
            if (
              tempSanitizedPPPWithPicksPlayerName ===
                fcPickRoundAndNumberFormattedForPP &&
              fcPickYear === curYear
            ) {
              sanitizedPPPWithPicksPlayerName =
                tempSanitizedPPPWithPicksPlayerName;
              // console.log(player);
              // console.log(
              //   sanitizedPPPWithPicksPlayerName,
              //   fcPickRoundAndNumberFormattedForPP,
              //   sanitizedFCPlayerName
              // );
              ppPlayerObject = ppWithPicksPlayer;
            }
          }
        }
      });
    }

    if (player.player.position !== 'PICK') {
      ppSFTEPDynastyRankingsWithRookies.forEach(function (ppPlayer) {
        // console.log(ppPlayer['"Full Name"']);

        if (ppPlayer['"Full Name"'].includes("'")) {
          ppPlayer['"Full Name"'] = ppPlayer['"Full Name"'].replace("'", '');
        }

        tempSanitizedPPPlayerName = ppPlayer['"Full Name"']
          .slice(1, -1)
          .replace("'", '')
          .replace('.', '')
          .replace('.', '');
        // console.log(sanitizedPPPlayerName);

        // console.log(player.player.position);
        if (ppPlayer['"Age"'].slice(1, -1)) {
          if (tempSanitizedPPPlayerName === sanitizedFCPlayerName) {
            // console.log(sanitizedFCPlayerName);
            // console.log(ppSFTEPNonQBMaxValue);
            // console.log(sanitizedPPPlayerName, ppPlayer);

            ppPlayerObject = ppPlayer;

            let counter = 0;

            if (
              +ppPlayerObject['"Rank"'].slice(1, -1) === 1 ||
              (+ppPlayerObject['"Rank"'].slice(1, -1) === 2 &&
                ppPlayerObject['"Position"'].slice(1, -1) === 'QB')
            ) {
              let playerOneValue = 0;
              let playerTwoValue = 0;
              // console.log(player);
              if (+ppPlayerObject['"Rank"'].slice(1, -1) === 1) {
                playerOneValue = +ppPlayerObject['"Lifetime Value"'];
                ppSFTEPQBMaxValue = +ppPlayerObject['"Lifetime Value"'].slice(
                  1,
                  -1
                );
                // console.log(playerOneValue);
              }
              if (+ppPlayerObject['"Rank"'].slice(1, -1) === 2) {
                playerTwoValue = +ppPlayerObject['"Lifetime Value"'];
                ppSFTEPQBMaxValue =
                  +ppSFTEPQBMaxValue +
                  +ppPlayerObject['"Lifetime Value"'].slice(1, -1);
                // console.log(fcQBMaxValue);
                ppSFTEPQBMaxValue = +(ppSFTEPQBMaxValue / 2);
              }
              // console.log(fcQBMaxValue);
              // fcQBMaxValue = +((fcQBPercentOfMax += player.value) / 2).toFixed(2);

              ///
            }
            if (
              ppPlayerObject['"Position"'].slice(1, -1) !== 'QB' &&
              ppSFTEPNonQBMaxValue === 0
            ) {
              // console.log(player.player.name);
              ppSFTEPNonQBMaxValue = +ppPlayerObject['"Lifetime Value"'].slice(
                1,
                -1
              );
              // console.log(ppSFTEPNonQBMaxValue);
              counter = 1;
            }
            if (
              ppPlayerObject['"Position"'].slice(1, -1) !== 'QB' &&
              counter === 1 &&
              ppSFTEPNonQBMaxValue !==
                +ppPlayerObject['"Lifetime Value"'].slice(1, -1)
            ) {
              // console.log(player.player.name);
              ppSFTEPNonQBMaxValue =
                +ppSFTEPNonQBMaxValue +
                +ppPlayerObject['"Lifetime Value"'].slice(1, -1);
              // console.log(fcQBMaxValue);
              ppSFTEPNonQBMaxValue = +(ppSFTEPNonQBMaxValue / 2);
              // console.log(ppSFTEPNonQBMaxValue);
              // console.log(ppSFTEPQBMaxValue);
              counter = 0;
            }

            sanitizedPPPlayerName = tempSanitizedPPPlayerName;
            ppPlayerObject = ppPlayer;
          }
        }
      });
    }

    //
    /// for passing to rvData method below
    //

    let tempsanitizedRVPlayerName = '';
    let sanitizedRVPlayerName = '';
    let rvPlayer = {};

    rvDynastyRankingsTEP.forEach(function (InitialrvPlayer) {
      if (InitialrvPlayer['"Player"']) {
        // console.log(InitialrvPlayer['"Player"'])

        if (InitialrvPlayer['"Player"'].includes("'")) {
          InitialrvPlayer['"Player"'] = InitialrvPlayer['"Player"'].replace(
            "'",
            ''
          );
        }

        if (player.player.position !== 'PICK') {
          tempsanitizedRVPlayerName = InitialrvPlayer['"Player"']
            .slice(1, -1)
            .replace("'", '')
            .replace('.', '')
            .replace('.', '');

          if (InitialrvPlayer['"Player"'].slice(1, -1) === 'Nathaniel Dell') {
            // console.log(InitialrvPlayer['"Player"'])
            tempsanitizedRVPlayerName = 'Tank Dell';
          }

          if (sanitizedFCPlayerName === tempsanitizedRVPlayerName) {
            // console.log(sanitizedRVPlayerName, sanitizedFCPlayerName);
            sanitizedRVPlayerName = tempsanitizedRVPlayerName;
            rvPlayer = InitialrvPlayer;
          }
        }

        if (
          player.player.position === 'PICK' &&
          InitialrvPlayer['"POS"'].slice(1, -1) === ''
        ) {
          // console.log(InitialrvPlayer);
          // rvPlayer = InitialrvPlayer;
        }
      }
    });

    ppMaxValue = ppMaxValueArray[0];
    // console.log(ppMaxValue);
    // console.log(ppSFNonQBTEPPercentOfMax);

    ///for fp redraft

    fpMarketRedraftRankings.forEach(function (playerObject) {
      if (playerObject['"PLAYER NAME"'].includes("'")) {
        playerObject['"PLAYER NAME"'] = playerObject['"PLAYER NAME"'].replace(
          "'",
          ''
        );
      }

      if (playerObject['"PLAYER NAME"'].includes('III')) {
        playerObject['"PLAYER NAME"'] = playerObject['"PLAYER NAME"'].replace(
          'III',
          'II'
        );
      }

      if (playerObject['"PLAYER NAME"'].includes('II')) {
        playerObject['"PLAYER NAME"'] = playerObject['"PLAYER NAME"'].replace(
          'II',
          ''
        );
        playerObject['"PLAYER NAME"'] =
          playerObject['"PLAYER NAME"'].slice(0, -2) + '"';
        // console.log(playerObject['"PLAYER NAME"']);
      }

      if (playerObject['"PLAYER NAME"'].includes('Jr.')) {
        // console.log(playerObject['"PLAYER NAME"']);
        playerObject['"PLAYER NAME"'] = playerObject['"PLAYER NAME"'].replace(
          'Jr.',
          ''
        );
        playerObject['"PLAYER NAME"'] =
          playerObject['"PLAYER NAME"'].slice(0, -2) + '"';
        // console.log(playerObject['"PLAYER NAME"']);
      }

      let tempsanitizedFPRedraftPlayerName = playerObject['"PLAYER NAME"']
        .replace("'", '')
        .replace('.', '')
        .replace('.', '')
        .slice(1, -1);

      if (sanitizedFCPlayerName === 'Patrick Mahomes') {
        // console.log(tempsanitizedFPRedraftPlayerName, sanitizedFCPlayerName);
      }

      if (tempsanitizedFPRedraftPlayerName === sanitizedFCPlayerName) {
        // console.log(tempsanitizedFPRedraftPlayerName, sanitizedFCPlayerName);
        sanitizedFPRedraftPlayerName = tempsanitizedFPRedraftPlayerName;
        fpRedraftPlayerObject = playerObject;
      }
    });

    /////for rv redraft

    rvRedraftRankingsTEP.forEach(function (playerObject) {
      // console.log(playerObject);
      if (playerObject['"Player"'].includes("'")) {
        playerObject['"Player"'] = playerObject['"Player"'].replace("'", '');
      }

      let tempsanitizedRVRedraftPlayerName = playerObject['"Player"']
        .replace("'", '')
        .replace('.', '')
        .replace('.', '')
        .slice(1, -1);

      if (tempsanitizedRVRedraftPlayerName === sanitizedFCPlayerName) {
        sanitizedRVRedraftPlayerName = tempsanitizedRVRedraftPlayerName;
        rvRedraftPlayerObject = playerObject;
      }
    });

    // console.log(qbWorstPosRankInTier3);

    // for four for four rest of season redraft rankings in season

    let fourForFourRestOfSeasonRedraftPlayerGroup;
    let sanitizedFourForFourRedraftPlayerName = '';

    fourForFourRestOfSeasonRedraftRankings.forEach(function (group) {
      //
      let tempsanitizedFourForFourPlayerName = '';
      // console.log(initial['"QB"'])

      // for(const key of initial) {
      //   console.log(key)
      // }

      // let test = Object.values(initial)
      // console.log(test)

      //
      // test.forEach(function (group) {
      // console.log(group)

      //QB
      if (group['"QB"']) {
        let teamABVLength = 3;
        if (player.player.maybeTeam) {
          if (player.player.maybeTeam.length === 2) {
            teamABVLength = 2;
          }
        }
        let qbNameOne = '';
        if (teamABVLength === 2) {
          if (group['"QB"'].slice(-1) !== ')') {
            // console.log(group['"QB"'])
            qbNameOne = group['"QB"'].slice(1, -6);
          }
          if (group['"QB"'].slice(-1) === ')') {
            // console.log(group['"QB"'])
            qbNameOne = group['"QB"'].slice(1, -5);
          }
        }
        if (teamABVLength === 3) {
          if (group['"QB"'].slice(-1) !== ')') {
            // console.log(group['"QB"'])
            qbNameOne = group['"QB"'].slice(1, -7);
          }
          if (group['"QB"'].slice(-1) === ')') {
            // console.log(group['"QB"'])
            qbNameOne = group['"QB"'].slice(1, -6);
          }
        }
        if (qbNameOne.includes("'")) {
          qbNameOne = qbNameOne.replace("'", '');
        }
        tempsanitizedFourForFourPlayerName = qbNameOne
          .replace("'", '')
          .replace('.', '')
          .replace('.', '');

        // console.log(tempsanitizedFourForFourPlayerName)
        if (
          tempsanitizedFourForFourPlayerName &&
          tempsanitizedFourForFourPlayerName === sanitizedFCPlayerName
        ) {
          // console.log(tempsanitizedFourForFourPlayerName, group)
          fourForFourRestOfSeasonRedraftPlayerGroup = group;
          sanitizedFourForFourRedraftPlayerName =
            tempsanitizedFourForFourPlayerName;
        }
      }
      // RB
      if (group['"RB"']) {
        let teamABVLength = 3;
        if (player.player.maybeTeam) {
          if (player.player.maybeTeam.length === 2) {
            teamABVLength = 2;
          }
        }
        let rbNameOne = '';

        if (teamABVLength === 2) {
          if (group['"RB"'].slice(-1) !== ')') {
            // console.log(group['"RB"'])
            rbNameOne = group['"RB"'].slice(1, -6);
          }
          if (group['"RB"'].slice(-1) === ')') {
            // console.log(group['"RB"'])
            rbNameOne = group['"RB"'].slice(1, -5);
          }
        }
        if (teamABVLength === 3) {
          if (group['"RB"'].slice(-1) !== ')') {
            // console.log(group['"RB"'])
            rbNameOne = group['"RB"'].slice(1, -7);
          }
          if (group['"RB"'].slice(-1) === ')') {
            // console.log(group['"RB"'])
            rbNameOne = group['"RB"'].slice(1, -6);
          }
        }
        if (rbNameOne.includes("'")) {
          rbNameOne = rbNameOne.replace("'", '');
        }
        tempsanitizedFourForFourPlayerName = rbNameOne
          .replace("'", '')
          .replace('.', '')
          .replace('.', '');

        // console.log(tempsanitizedFourForFourPlayerName)
        if (
          tempsanitizedFourForFourPlayerName &&
          tempsanitizedFourForFourPlayerName === sanitizedFCPlayerName
        ) {
          // console.log(tempsanitizedFourForFourPlayerName, group)
          fourForFourRestOfSeasonRedraftPlayerGroup = group;
          sanitizedFourForFourRedraftPlayerName =
            tempsanitizedFourForFourPlayerName;
        }
      }
      //WR
      if (group['"WR"']) {
        let teamABVLength = 3;
        if (player.player.maybeTeam) {
          if (player.player.maybeTeam.length === 2) {
            teamABVLength = 2;
          }
        }
        let wrNameOne = '';
        if (teamABVLength === 2) {
          if (group['"WR"'].slice(-1) !== ')') {
            // console.log(group['"WR"'])
            wrNameOne = group['"WR"'].slice(1, -6);
          }
          if (group['"WR"'].slice(-1) === ')') {
            // console.log(group['"WR"'])
            wrNameOne = group['"WR"'].slice(1, -5);
          }
        }
        if (teamABVLength === 3) {
          if (group['"WR"'].slice(-1) !== ')') {
            // console.log(group['"WR"'])
            wrNameOne = group['"WR"'].slice(1, -7);
          }
          if (group['"WR"'].slice(-1) === ')') {
            // console.log(group['"WR"'])
            wrNameOne = group['"WR"'].slice(1, -6);
          }
        }
        if (wrNameOne.includes("'")) {
          wrNameOne = wrNameOne.replace("'", '');
        }
        tempsanitizedFourForFourPlayerName = wrNameOne
          .replace("'", '')
          .replace('.', '')
          .replace('.', '');

        // console.log(tempsanitizedFourForFourPlayerName)
        if (
          tempsanitizedFourForFourPlayerName &&
          tempsanitizedFourForFourPlayerName === sanitizedFCPlayerName
        ) {
          // console.log(tempsanitizedFourForFourPlayerName, group)
          fourForFourRestOfSeasonRedraftPlayerGroup = group;
          sanitizedFourForFourRedraftPlayerName =
            tempsanitizedFourForFourPlayerName;
        }
      }
      //TE
      if (group['"TE"']) {
        let teamABVLength = 3;
        if (player.player.maybeTeam) {
          if (player.player.maybeTeam.length === 2) {
            teamABVLength = 2;
          }
        }
        // console.log(teamABVLength)
        let teNameOne = '';
        if (teamABVLength === 2) {
          if (group['"TE"'].slice(-1) !== ')') {
            // console.log(group['"TE"'])
            teNameOne = group['"TE"'].slice(1, -6);
          }
          if (group['"TE"'].slice(-1) === ')') {
            // console.log(group['"TE"'])
            teNameOne = group['"TE"'].slice(1, -5);
          }
        }
        if (teamABVLength === 3) {
          if (group['"TE"'].slice(-1) !== ')') {
            // console.log(group['"TE"'])
            teNameOne = group['"TE"'].slice(1, -7);
          }
          if (group['"TE"'].slice(-1) === ')') {
            // console.log(group['"TE"'])
            teNameOne = group['"TE"'].slice(1, -6);
          }
        }
        if (teNameOne.includes("'")) {
          teNameOne = teNameOne.replace("'", '');
        }

        tempsanitizedFourForFourPlayerName = teNameOne
          .replace("'", '')
          .replace('.', '')
          .replace('.', '');

        // console.log(tempsanitizedFourForFourPlayerName)
        if (
          tempsanitizedFourForFourPlayerName &&
          tempsanitizedFourForFourPlayerName === sanitizedFCPlayerName
        ) {
          // console.log(tempsanitizedFourForFourPlayerName, group)
          fourForFourRestOfSeasonRedraftPlayerGroup = group;
          sanitizedFourForFourRedraftPlayerName =
            tempsanitizedFourForFourPlayerName;
        }
      }

      //

      //////////////////////////////////////////////////////
      // if (playerObject['"Player"'].includes("'")) {
      //   playerObject['"Player"'] = playerObject['"Player"'].replace("'", '');
      // }

      // let tempsanitizedRVRedraftPlayerName = playerObject['"Player"']
      //   .replace("'", '')
      //   .replace('.', '')
      //   .replace('.', '')
      //   .slice(1, -1);

      // if (tempsanitizedRVRedraftPlayerName === sanitizedFCPlayerName) {
      //   sanitizedFourForFourRedraftPlayerName = tempsanitizedRVRedraftPlayerName;
      //   fourForFourRestOfSeasonRedraftPlayerObject = playerObject;
      // }
    });

    // for one older player fantasycalc value

    let oneOlderPlayerNext = [];
    let playerOneOlderFantasyCalc = 0;

    oneOlderPlayerArray.forEach(function (oneOlderplayer) {
      oneOlderPlayerNext = oneOlderplayer.data;
    });

    oneOlderPlayerNext.forEach(function (player) {
      if (player.player.name === sanitizedFCPlayerName) {
        // console.log(player);
        playerOneOlderFantasyCalc = player.value;
      }
    });
    let valueToUseForFantasyCalcValue = +(+player.value).toFixed(0);
    if (playerOneOlderFantasyCalc === 0) {
      valueToUseForFantasyCalcValue = +(+player.value).toFixed(0);
    }
    if (playerOneOlderFantasyCalc > 0) {
      valueToUseForFantasyCalcValue = +(
        (+player.value + +playerOneOlderFantasyCalc) /
        2
      ).toFixed(0);
    }

    // console.log(player.player.maybeYoe);
    // let valueToUseForFantasyCalcValue = +(+player.value).toFixed(0);
    // console.log(
    //   player.player.name,
    //   player.value,
    //   playerOneOlderFantasyCalc,
    //   valueToUseForFantasyCalcValue
    // );

    let tradeCalculaterDataObject = new tradeCalculaterData(
      sanitizedFCPlayerName,
      player.player.id,
      player.player.mflId,
      player.player.sleeperId,
      player.player.position,
      player.player.maybeTeam,
      player.player.maybeAge,
      sanitizedFCPlayerName,
      valueToUseForFantasyCalcValue,
      playerOneOlderFantasyCalc,
      player.overallRank,
      player.positionRank,
      +fcQBPercentOfMax,
      +fcNonQBPercentOfMax,
      +ppSFTEPValue,
      +ppSFQBTEPPercentOfMax,
      +ppSFNonQBTEPPercentOfMax,
      +player.player.maybeYoe
    );

    // console.log(sanitizedPPPlayerName, ppPlayerObject);

    tradeCalculaterDataObject.ppData(
      player,
      sanitizedFCPlayerName,
      ppPlayerObject,
      sanitizedPPPlayerName,
      sanitizedPPPWithPicksPlayerName,
      ppSFTEPQBMaxValue,
      ppSFTEPNonQBMaxValue
    );
    // console.log(rvPlayer);

    tradeCalculaterDataObject.rvData(
      player,
      sanitizedFCPlayerName,
      sanitizedRVPlayerName,
      rvPlayer,
      fcPickYear,
      fcPickRound,
      fcPickNumber,
      fcPosition,
      SleeperIDFromMe
    );

    tradeCalculaterDataObject.myRanksAndMyValuesAgainstMarketValue(
      player,
      fcQBMaxValue,
      fcNonQBMaxValue
    );

    tradeCalculaterDataObject.fpRedraftData(
      player,
      sanitizedFCPlayerName,
      fcPosition,
      fpRedraftPlayerObject,
      sanitizedFPRedraftPlayerName
    );

    tradeCalculaterDataObject.rvRedraftData(
      player,
      fcPosition,
      sanitizedFCPlayerName,
      rvRedraftPlayerObject,
      sanitizedRVRedraftPlayerName,
      fourForFourRestOfSeasonRedraftPlayerGroup,
      sanitizedFourForFourRedraftPlayerName,
      qbWorstPosRankOfEachTier,
      rbWorstPosRankOfEachTier,
      wrWorstPosRankOfEachTier,
      teWorstPosRankOfEachTier
    );

    tradeCalculaterDataObject.puttingItAllTogetherRedraft(
      sanitizedFCPlayerName,
      sanitizedRVRedraftPlayerName,
      fcPosition,
      fourForFourRestOfSeasonRedraftPlayerGroup,
      sanitizedFourForFourRedraftPlayerName
    );

    if (sanitizedFCPlayerName) {
      tradeCalculaterDataObject.calculatingProjectedNextOffseasonDynastyValue(
        sanitizedFCPlayerName,
        sanitizedRVPlayerName,
        fcQBMaxValue,
        fcNonQBMaxValue,
        fcPickYear,
        fcPickRound
      );

      tradeCalculaterDataObject.assigningPNODVToThoseThatFellThroug(
        sanitizedFCPlayerName,
        sanitizedRVPlayerName,
        fcQBMaxValue,
        fcNonQBMaxValue
      );

      tradeCalculaterDataObject.assigningDifferenceBetweenCurrentMarketDynastyValueAndPNODV(
        sanitizedFCPlayerName,
        sanitizedRVPlayerName,
        fcQBMaxValue,
        fcNonQBMaxValue
      );
    }

    // let allPlayersArray = [];
    // let allQBsArray = [];
    // let allRBsArray = [];
    // let allWRsArray = [];
    // let allTEsArray = [];
    // let allPicksArray = [];

    allPlayersArray.push(tradeCalculaterDataObject);
    //
    if (player.player.position === 'QB') {
      allQBsArray.push(tradeCalculaterDataObject);
    }
    if (player.player.position === 'RB') {
      allRBsArray.push(tradeCalculaterDataObject);
    }
    if (player.player.position === 'WR') {
      allWRsArray.push(tradeCalculaterDataObject);
    }
    if (player.player.position === 'TE') {
      allTEsArray.push(tradeCalculaterDataObject);
    }
    if (player.player.position === 'PICK') {
      allPicksArray.push(tradeCalculaterDataObject);
    }

    // console.log(allPlayersArray);
    // console.log(allQBsArray);
    // console.log(allRBsArray);
    // console.log(allWRsArray);
    // console.log(allTEsArray);
    // console.log(allPicksArray);

    alltradeCalculaterDataArray.push(tradeCalculaterDataObject);
    // console.log(alltradeCalculaterDataArray);
    // if (player.player.overallRank < 30) {
    //   console.log(tradeCalculaterDataObject);
    // }

    // if (player.player.position === 'PICK') {
    //   console.log(tradeCalculaterDataObject);
    // }
    // if (player.player.position === 'QB') {
    //   console.log(tradeCalculaterDataObject);
    // }
    // if (player.player.position === 'RB') {
    //   console.log(tradeCalculaterDataObject);
    // }
    // if (player.player.position === 'WR') {
    //   console.log(tradeCalculaterDataObject);
    // }
    // if (player.player.position === 'TE') {
    //   console.log(tradeCalculaterDataObject);
    // }
    // if (player.player.position === 'QB') {
    //   console.log(
    //     tradeCalculaterDataObject.name,
    //     tradeCalculaterDataObject.fantasyCalcValue,
    //     tradeCalculaterDataObject.myValue,
    //     tradeCalculaterDataObject.projectedNextOffseasonDynastyValue
    //   );
    // }
    // if (player.player.position === 'RB') {
    //   console.log(
    //     tradeCalculaterDataObject.name,
    //     tradeCalculaterDataObject.fantasyCalcValue,
    //     tradeCalculaterDataObject.myValue,
    //     tradeCalculaterDataObject.projectedNextOffseasonDynastyValue
    //   );
    // }
    // if (player.player.position === 'WR') {
    //   console.log(
    //     tradeCalculaterDataObject.name,
    //     tradeCalculaterDataObject.fantasyCalcValue,
    //     tradeCalculaterDataObject.projectedNextOffseasonDynastyValue
    //   );
    // }
    // if (player.player.position === 'TE') {
    //   console.log(
    //     tradeCalculaterDataObject.name,
    //     tradeCalculaterDataObject.fantasyCalcValue,
    //     tradeCalculaterDataObject.projectedNextOffseasonDynastyValue
    //   );
    // }
    // if (
    //   player.player.position === 'WR'
    //   //&&
    //   //   sanitizedFCPlayerName === 'Diontae Johnson') ||
    //   // sanitizedFCPlayerName === 'Jaylen Waddle' ||
    //   // sanitizedFCPlayerName === 'Jahan Dotson' ||
    //   // sanitizedFCPlayerName === 'Drake London'
    // ) {
    // console.log(
    //   tradeCalculaterDataObject.name,
    //   tradeCalculaterDataObject.myRedraftDifferenceScore
    // );
    // }
    // console.log(
    //   tradeCalculaterDataObject.name,
    //   tradeCalculaterDataObject.myRedraftDifferenceScore
    // );
    // if (
    //   (player.player.position === 'RB')
    // ) {
    //   console.log(tradeCalculaterDataObject);
    // }
    // if (player.player.position !== 'QB' && player.player.position !== 'PICK') {
    //   console.log(tradeCalculaterDataObject);
    // }

    ////////////////////////
    //
    myJSON = JSON.stringify(Object.assign({}, alltradeCalculaterDataArray));
    // console.log(myJSON);

    /////////////////////////////////////////////////
    alltradeCalculaterDataArray.map(function (obj) {
      // console.log(obj);
      const newObj = { ...obj };
      // console.log(newObj);
      FinaltradeCalculaterDataArray.push(newObj);
    });
  });
  // console.log(myJSON);

  ///////////////////////
  //////////////
  // ///////////uncomment below to push all data from above to db named dynastyAndRedraftPlayerObjects

  // const url =
  //   'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
  // const client = new MongoClient(url);

  // // The database to use
  // const dbName = 'dailydynasties';

  // async function runDynastyAndRedraftPlayerObjects() {
  //   try {
  //     await client.connect();
  //     console.log('Connected correctly to server');
  //     const db = client.db(dbName);

  //     // Use the collection "people"
  //     const col = db.collection('dynastyAndRedraftPlayerObjects');

  //     // Construct a document
  //     let dynastyAndRedraftPlayerObjects = {
  //       alltradeCalculaterDataArray,
  //     };

  //     // Insert a single document, wait for promise so we can read it back
  //     const p = await col.insertOne(dynastyAndRedraftPlayerObjects);
  //     // Find one document
  //     const myDoc = await col.findOne();
  //     // Print to the console
  //     // console.log(myDoc);
  //   } catch (err) {
  //     console.log(err.stack);
  //   } finally {
  //     await client.close();
  //   }
  // }

  // runDynastyAndRedraftPlayerObjects().catch(console.dir);

  // console.log(alltradeCalculaterDataArray);

  ///////////////////
  //////////////////////////
  ////////////////////////////////////
  ///////////// for dynasty rankings
  ////////////////////////////////////
  /////////////////////////////
  /////////////////////////

  const justMyDynastyValuesWithNames = [];
  const sortedDynastyRankingsWithNamesValuesAndRank = [];
  const sortedDynastyRankingsWithNamesValuesAndRankAndPositionalRank = [];

  alltradeCalculaterDataArray.forEach(function (playerObject) {
    justMyDynastyValuesWithNames.push({
      value: playerObject.myValue,
      name: playerObject.name,
      pos: playerObject.position,
    });
  });

  function compare(a, b) {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  }

  let SortedjustMyDynastyValuesWithNames =
    justMyDynastyValuesWithNames.sort(compare);

  function addRank(SortedjustMyDynastyValuesWithNames) {
    let rank = 0;
    let posRank;
    let playerPlusPosRank;
    let QBRank = 0;
    let RBRank = 0;
    let WRRank = 0;
    let TERank = 0;

    SortedjustMyDynastyValuesWithNames.forEach(function (player) {
      rank = rank + 1;
      let playerPlusRank = { ...player, rank };
      sortedDynastyRankingsWithNamesValuesAndRank.push(playerPlusRank);

      if (player.pos === 'QB') {
        QBRank = QBRank + 1;

        let posRank = QBRank;

        playerPlusPosRank = { ...player, posRank };
      }
      if (player.pos === 'RB') {
        RBRank = RBRank + 1;
        let posRank = RBRank;
        playerPlusPosRank = { ...player, posRank };
      }
      if (player.pos === 'WR') {
        WRRank = WRRank + 1;
        let posRank = WRRank;
        playerPlusPosRank = { ...player, posRank };
      }
      if (player.pos === 'TE') {
        TERank = TERank + 1;
        let posRank = TERank;
        playerPlusPosRank = { ...player, posRank };
      }
      // console.log(playerPlusPosRank);
      sortedDynastyRankingsWithNamesValuesAndRankAndPositionalRank.push(
        playerPlusPosRank
      );
    });
  }

  addRank(SortedjustMyDynastyValuesWithNames);

  // console.log(sortedDynastyRankingsWithNamesValuesAndRank);

  class dynastyRankingsDataConstructor {
    constructor(
      name,
      position,
      team,
      marketValue,
      marketOverallRank,
      marketPositionRank,
      myValue,
      myOverallRank,
      myPositionRank,
      valueDiffBetweenMyValueAndMarketValue,
      projectedNextOffseasonDynastyValue,
      valueDifferenceBetweenCurrentMarketValueAndPNODV,
      yearsExperience
    ) {
      this.name = name;
      this.position = position;
      this.team = team;
      this.marketValue = marketValue;
      this.marketOverallRank = marketOverallRank;
      this.marketPositionRank = marketPositionRank;
      this.myValue = myValue;
      this.myOverallRank = myOverallRank;
      this.myPositionRank = myPositionRank;
      this.valueDiffBetweenMyValueAndMarketValue =
        valueDiffBetweenMyValueAndMarketValue;
      this.projectedNextOffseasonDynastyValue =
        projectedNextOffseasonDynastyValue;
      this.valueDifferenceBetweenCurrentMarketValueAndPNODV =
        valueDifferenceBetweenCurrentMarketValueAndPNODV;
      this.yearsExperience = yearsExperience;
    }
  }

  alltradeCalculaterDataArray.forEach(function (playerObject) {
    // console.log(playerObject.name, playerObject.myValue);

    // console.log(SortedjustMyDynastyValuesWithNames);
    let name = playerObject.name;
    let overallRank;
    let posRank;

    sortedDynastyRankingsWithNamesValuesAndRank.forEach(function (player) {
      // console.log(player);
      if (player.name) {
        if (player.name === name) {
          // console.log(player.rank);
          overallRank = +player.rank;
        }
      }
    });

    // console.log(sortedDynastyRankingsWithNamesValuesAndRankAndPositionalRank);

    sortedDynastyRankingsWithNamesValuesAndRankAndPositionalRank.forEach(
      function (player) {
        // console.log(player);
        // console.log(player.name);
        if (player.name) {
          if (player.name === name) {
            posRank = +player.posRank;
          }
        }
      }
    );

    // console.log(playerObject.yearsExperience);

    // console.log(
    //   playerObject.name,
    //   playerObject.fantasyCalcValue,
    //   playerObject.myValue,
    //   playerObject.projectedNextOffseasonDynastyValue
    // );
    let temp = +playerObject.projectedNextOffseasonDynastyValue;
    let PNODVToUse = temp.toFixed(0);

    let dynastyRankingsDataObject = new dynastyRankingsDataConstructor(
      playerObject.name,
      playerObject.position,
      playerObject.team,
      playerObject.fantasyCalcValue,
      playerObject.fantasyCalcRank,
      playerObject.fantasyCalcPositionRank,
      playerObject.myValue,
      overallRank,
      posRank,
      playerObject.valueDiffBetweenMyValueAndMarketValue,
      PNODVToUse,
      playerObject.valueDifferenceBetweenCurrentMarketValueAndPNODV,
      playerObject.yearsExperience
    );

    // console.log(sortedDynastyRankingsWithNamesValuesAndRank);

    dynastyRankingsDataObjectsArray.push(dynastyRankingsDataObject);
  });
  // console.log(dynastyRankingsDataObjectsArray);

  ///////////////////////
  //////////////
  ///////////uncomment below to push all dynasty ranking data from above to db named dynastyRankingsData

  // const url =
  //   'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
  // const client = new MongoClient(url);

  // // The database to use
  // const dbName = 'dailydynasties';

  // async function runDynastyRankingsData() {
  //   try {
  //     await client.connect();
  //     console.log('Connected correctly to server');
  //     const db = client.db(dbName);

  //     // Use the collection "dynastyRankingsData"
  //     const col = db.collection('dynastyRankingsData');
  //     // const col = db.collection('dynastyRankingsData');

  //     // Construct a document
  //     let dynastyRankingsData = {
  //       dynastyRankingsDataObjectsArray,
  //     };

  //     // Insert a single document, wait for promise so we can read it back
  //     const p = await col.insertOne(dynastyRankingsData);
  //     // Find one document
  //     const myDoc = await col.findOne();
  //     // Print to the console
  //     // console.log(myDoc);
  //   } catch (err) {
  //     console.log(err.stack);
  //   } finally {
  //     await client.close();
  //   }
  // }

  // runDynastyRankingsData().catch(console.dir);

  ///////////////////
  //////////////////////////
  ////////////////////////////////////
  ///////////// for 3D trade Analyzer
  ////////////////////////////////////
  /////////////////////////////
  /////////////////////////

  let tradeAnalyzerDataObjectsArray = [];
  let ariRBOnePassed = 0;
  let atlRBOnePassed = 0;
  let balRBOnePassed = 0;
  let bufRBOnePassed = 0;
  let carRBOnePassed = 0;
  let chiRBOnePassed = 0;
  let cinRBOnePassed = 0;
  let cleRBOnePassed = 0;
  let dalRBOnePassed = 0;
  let denRBOnePassed = 0;
  let detRBOnePassed = 0;
  let gbRBOnePassed = 0;
  let houRBOnePassed = 0;
  let indRBOnePassed = 0;
  let jacRBOnePassed = 0;
  let kcRBOnePassed = 0;
  let lvRBOnePassed = 0;
  let lacRBOnePassed = 0;
  let larRBOnePassed = 0;
  let miaRBOnePassed = 0;
  let minRBOnePassed = 0;
  let neRBOnePassed = 0;
  let noRBOnePassed = 0;
  let nygRBOnePassed = 0;
  let nyjRBOnePassed = 0;
  let phiRBOnePassed = 0;
  let pitRBOnePassed = 0;
  let sfRBOnePassed = 0;
  let seaRBOnePassed = 0;
  let tbRBOnePassed = 0;
  let tenRBOnePassed = 0;
  let wasRBOnePassed = 0;

  class tradeAnalyzerDataConstructor {
    constructor(
      name,
      position,
      team,
      // age,
      // ageNextMarch,
      marketValue,
      myValue,
      valueDiffBetweenMyValueAndMarketValue,
      // marketRedraftOverallRank,
      // marketRedraftPositionRank,
      // myRedraftOverallRank,
      // myRedraftPositionRank,
      // myRedraftTier,
      PRPScore,
      // myRedraftDifferenceScore,
      projectedNextOffseasonDynastyValue,
      valueDifferenceBetweenCurrentMarketValueAndPNODV
    ) {
      this.name = name;
      this.position = position;
      this.team = team;
      // this.age = age;
      // this.ageNextMarch = ageNextMarch;
      this.marketValue = marketValue;

      this.myValue = myValue;

      this.valueDiffBetweenMyValueAndMarketValue =
        valueDiffBetweenMyValueAndMarketValue;
      // this.marketRedraftOverallRank = marketRedraftOverallRank;
      // this.marketRedraftPositionRank = marketRedraftPositionRank;
      // this.myRedraftOverallRank = myRedraftOverallRank;
      // this.myRedraftPositionRank = myRedraftPositionRank;
      // this.myRedraftTier = myRedraftTier;
      this.PRPScore = PRPScore;
      // this.myRedraftDifferenceScore = myRedraftDifferenceScore;
      this.projectedNextOffseasonDynastyValue =
        projectedNextOffseasonDynastyValue;
      this.valueDifferenceBetweenCurrentMarketValueAndPNODV =
        valueDifferenceBetweenCurrentMarketValueAndPNODV;
    }

    calcScoreFromDifferenceBetweenCurrentMarketValueAndPNODV() {
      // console.log(
      //     this.name,
      //     this.valueDifferenceBetweenCurrentMarketValueAndPNODV
      //   );
      if (this.valueDifferenceBetweenCurrentMarketValueAndPNODV > 899) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );

        this.PNODVScore = 700;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > 599 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < 900
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = 600;
        if (this.position === 'PICK') {
          // console.log(
          //   this.name,
          //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV,
          //   this.PNODVScore
          // );
        }
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > 499 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < 600
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = 500;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > 399 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < 500
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = 400;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > 299 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < 400
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = 300;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > 199 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < 300
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = 200;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > 99 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < 200
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = 100;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > -201 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < 100
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = 0;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > -401 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < -200
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = -100;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > -501 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < -400
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = -200;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > -601 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < -500
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = -300;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > -701 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < -600
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = -400;
      }
      //
      if (
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV > -801 &&
        this.valueDifferenceBetweenCurrentMarketValueAndPNODV < -700
      ) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = -500;
      }
      //
      if (this.valueDifferenceBetweenCurrentMarketValueAndPNODV < -800) {
        // console.log(
        //   this.name,
        //   this.valueDifferenceBetweenCurrentMarketValueAndPNODV
        // );
        this.PNODVScore = -600;
      }
    }

    setIfTeamRBOneHasBeenPassed() {
      if (this.position === 'RB') {
        // console.log(this.team);

        if (this.team === 'ARI') {
          ariRBOnePassed = ariRBOnePassed + 1;
          if (ariRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'ATL') {
          atlRBOnePassed = atlRBOnePassed + 1;
          if (atlRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'BAL') {
          balRBOnePassed = balRBOnePassed + 1;
          if (balRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'BUF') {
          bufRBOnePassed = bufRBOnePassed + 1;
          if (bufRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'CAR') {
          carRBOnePassed = carRBOnePassed + 1;
          if (carRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'CHI') {
          chiRBOnePassed = chiRBOnePassed + 1;
          if (chiRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'CIN') {
          cinRBOnePassed = cinRBOnePassed + 1;
          if (cinRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'CLE') {
          cleRBOnePassed = cleRBOnePassed + 1;
          if (cleRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'DAL') {
          dalRBOnePassed = dalRBOnePassed + 1;
          if (dalRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'DEN') {
          denRBOnePassed = denRBOnePassed + 1;
          if (denRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'DET') {
          detRBOnePassed = detRBOnePassed + 1;
          if (detRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'GB') {
          gbRBOnePassed = gbRBOnePassed + 1;
          if (gbRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'HOU') {
          houRBOnePassed = houRBOnePassed + 1;
          if (houRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'IND') {
          indRBOnePassed = indRBOnePassed + 1;
          if (indRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'JAX') {
          jacRBOnePassed = jacRBOnePassed + 1;
          if (jacRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'KC') {
          kcRBOnePassed = kcRBOnePassed + 1;
          if (kcRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'LV') {
          lvRBOnePassed = lvRBOnePassed + 1;
          if (lvRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'LAC') {
          lacRBOnePassed = lacRBOnePassed + 1;
          if (lacRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'LAR') {
          larRBOnePassed = larRBOnePassed + 1;
          if (larRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'MIA') {
          miaRBOnePassed = miaRBOnePassed + 1;
          if (miaRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'MIN') {
          minRBOnePassed = minRBOnePassed + 1;
          if (minRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'NE') {
          neRBOnePassed = neRBOnePassed + 1;
          if (neRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'NO') {
          noRBOnePassed = noRBOnePassed + 1;
          if (noRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'NYG') {
          nygRBOnePassed = nygRBOnePassed + 1;
          if (nygRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'NYJ') {
          nyjRBOnePassed = nyjRBOnePassed + 1;
          if (nyjRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'PHI') {
          phiRBOnePassed = phiRBOnePassed + 1;
          if (phiRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'PIT') {
          pitRBOnePassed = pitRBOnePassed + 1;
          if (pitRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'SF') {
          sfRBOnePassed = sfRBOnePassed + 1;
          if (sfRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'SEA') {
          seaRBOnePassed = seaRBOnePassed + 1;
          if (seaRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'TB') {
          tbRBOnePassed = tbRBOnePassed + 1;
          if (tbRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'TEN') {
          tenRBOnePassed = tenRBOnePassed + 1;
          if (tenRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
        if (this.team === 'WAS') {
          wasRBOnePassed = wasRBOnePassed + 1;
          if (wasRBOnePassed > 1) {
            this.notTeamsRBOne = true;
          }
        }
      }
    }

    calcZeroRBPRPBonus() {
      if (this.position === 'RB') {
        // console.log(this.team);
        let marketValue = +(
          this.myValue - this.valueDiffBetweenMyValueAndMarketValue
        );

        if (this.notTeamsRBOne === true) {
          // console.log(
          //   this.name,

          //   +marketValue,
          //   this.myValue
          // );

          if (
            ((this.marketValue > 500 && this.marketValue < 1001) ||
              this.myValue > 500) &&
            this.myValue < 1001
          ) {
            if (this.marketValue < 1000 && this.myValue < 1000) {
              this.PRPScore = this.PRPScore + 25;
            }
          }
          if (
            ((this.marketValue > 1000 && this.marketValue < 1500) ||
              this.myValue > 1000) &&
            this.myValue < 1500
          ) {
            if (this.marketValue < 1500 && this.myValue < 1500) {
              this.PRPScore = this.PRPScore + 50;
            }
          }
          if (
            ((this.marketValue > 1499 && this.marketValue < 2000) ||
              this.myValue > 1499) &&
            this.myValue < 2000
          ) {
            if (this.marketValue < 2000 && this.myValue < 2000) {
              this.PRPScore = this.PRPScore + 75;
            }
          }
          if (this.marketValue > 2000 || this.myValue > 2000) {
            this.PRPScore = this.PRPScore + 100;
          }
        }
      }
    }

    calcRVS() {
      this.RVSScore = +this.PRPScore + +this.PNODVScore;
    }
  }

  alltradeCalculaterDataArray.forEach(function (playerObject) {
    // console.log(playerObject);

    let tradeAnalyzerDataObject = new tradeAnalyzerDataConstructor(
      playerObject.name,
      playerObject.position,
      playerObject.team,
      // playerObject.age,
      // playerObject.ageNextMarch,
      playerObject.fantasyCalcValue,
      playerObject.myValue,
      playerObject.valueDiffBetweenMyValueAndMarketValue,
      // playerObject.fpRedraftOverallRank,
      // playerObject.fpRedraftPositionRank,
      // playerObject.rvRedraftOverallRank,
      // playerObject.rvRedraftPositionRank,
      // playerObject.rvRedraftTier,
      playerObject.myRedraftScoreFromPlayersRedraftTier,
      // playerObject.myRedraftDifferenceScore,
      playerObject.projectedNextOffseasonDynastyValue,
      playerObject.valueDifferenceBetweenCurrentMarketValueAndPNODV
    );

    tradeAnalyzerDataObject.calcScoreFromDifferenceBetweenCurrentMarketValueAndPNODV();

    tradeAnalyzerDataObject.setIfTeamRBOneHasBeenPassed();

    tradeAnalyzerDataObject.calcZeroRBPRPBonus();

    tradeAnalyzerDataObject.calcRVS();

    tradeAnalyzerDataObjectsArray.push(tradeAnalyzerDataObject);
  });
  // console.log(tradeAnalyzerDataObjectsArray);

  // ///////////uncomment below to push all trade analyzer data from above to db named tradeAnalyzerData

  // const url =
  //   'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
  // const client = new MongoClient(url);

  // // The database to use
  // const dbName = 'dailydynasties';

  // async function runTradeAnalyzerData() {
  //   try {
  //     await client.connect();
  //     console.log('Connected correctly to server');
  //     const db = client.db(dbName);

  //     const col = db.collection('tradeAnalyzerData');

  //     // Construct a document
  //     let tradeAnalyzerData = {
  //       tradeAnalyzerDataObjectsArray,
  //     };

  //     // Insert a single document, wait for promise so we can read it back
  //     const p = await col.insertOne(tradeAnalyzerData);
  //     // Find one document
  //     const myDoc = await col.findOne();
  //     // Print to the console
  //     // console.log(myDoc);
  //   } catch (err) {
  //     console.log(err.stack);
  //   } finally {
  //     await client.close();
  //   }
  // }

  // runTradeAnalyzerData().catch(console.dir);

  //
  //d

  // below is for pushing players data to the undroppables db

  // const url =
  //   'mongodb+srv://FFCoder:Hesstrucksarethebest!@undroppables.unq112p.mongodb.net/undroppables';
  // const client = new MongoClient(url);

  // // The database to use
  // const dbName = 'projectionsBuilder';

  // async function runTradeAnalyzerData() {
  //   try {
  //     await client.connect();
  //     console.log('Connected correctly to server');
  //     const db = client.db(dbName);

  //     const col = db.collection('allPlayerData');

  //     let allPlayerData = tradeAnalyzerDataObjectsArray;

  //     // Construct a document
  //     let allPlayersData = {
  //       allPlayerData,
  //     };

  //     // Insert a single document, wait for promise so we can read it back
  //     const p = await col.insertOne(allPlayersData);
  //     // Find one document
  //     const myDoc = await col.findOne();
  //     // Print to the console
  //     // console.log(myDoc);
  //   } catch (err) {
  //     console.log(err.stack);
  //   } finally {
  //     await client.close();
  //   }
  // }

  // runTradeAnalyzerData().catch(console.dir);
};
// console.log(myJSON);
testfunc();

/***************************************************************!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/////////////////////////////////
//create a couple new constructor functions down here that will take in alltradeCalculaterDataArray as an input and loop over it and make player object arrays for specific purposes that only contain the info I am going to render for a page. one for dynasty rankings (done), one for redraft/rest of season rankings, and one for 3d trade view. then send these to the db in their own collections so you only have to call getstaticprops for the smaller objects that contain only the data that will be rendered on that page
/////////////////////////////////////// */
//********************************************************************!!!!!!!!!!!!!!!!!!!!!!!
