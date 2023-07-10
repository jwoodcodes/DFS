const axios = require('axios');
const { MongoClient } = require('mongodb');
const ppSFTEPDynastyRankingsWithRookies = require('../model/datafilesmadefrom4for4CSVs/ppSFTEPDynastyRankingsWithRookies');
const ppSFTEPDynastyRankingsWithPicks = require('../model/datafilesmadefrom4for4CSVs/ppSFTEPDynastyRankingsWithPicks');
const rvDynastyRankingsTEP = require('../model/datafilesmadefrom4for4CSVs/rvDynastyRankingsTEP');
const rvRedraftRankingsTEP = require('../model/datafilesmadefrom4for4CSVs/rvRedraftRankingsTEP');
const fpMarketRedraftRankings = require('../model/datafilesmadefrom4for4CSVs/fpMarketRedraftRankings');
const qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch = require('./PNODVCalcFunctions/QB/qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch/qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch');
const qbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch = require('./PNODVCalcFunctions/QB/qbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch/qbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch');

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

const futureDate = new Date('03/14/2024');

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

// making trimmed fantasyCalc data

const newData = [];
const alltradeCalculaterDataArray = [];
const FinaltradeCalculaterDataArray = [];
const dynastyRankingsDataObjectsArray = [];

let allPlayersArray = [];
let allQBsArray = [];
let allRBsArray = [];
let allWRsArray = [];
let allTEsArray = [];
let allPicksArray = [];

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
      fcQBPercentOfMax,
      fcNonQBPercentOfMax,
      ppSFTEPValue,
      ppSFQBTEPPercentOfMax,
      ppSFNonQBTEPPercentOfMax
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
      this.fcQBPercentOfMax = fcQBPercentOfMax;
      this.fcNonQBPercentOfMax = fcNonQBPercentOfMax;
      this.ppSFTEPValue = ppSFTEPValue;
      this.ppSFQBTEPPercentOfMax = ppSFQBTEPPercentOfMax;
      this.ppSFNonQBTEPPercentOfMax = ppSFNonQBTEPPercentOfMax;
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
              this.rvPercentOfNonQBMax = 0.9;
            }
            if (+fcPickRound === 1 && +fcPickNumber > 1 && +fcPickNumber < 6) {
              // console.log(fcPickYear, fcPickRound, fcPickNumber);
              this.rvValue = 2;
              this.rvPercentOfNonQBMax = 0.6;
            }

            if (
              +fcPickRoundAndNumberFormattedForPP > 105 &&
              +fcPickRoundAndNumberFormattedForPP < 111
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
          if (fcPickYear === +(curYear + 1)) {
            // console.log(fcPickYear);
            // console.log(player.player.name);
            // console.log(fcPickRoundAndNumberFormattedForPP);
            if (+fcPickRoundAndNumberFormattedForPP < 201) {
              this.rvValue = 0.83;
              this.rvPercentOfNonQBMax = 0.25;
            }
            if (
              +fcPickRoundAndNumberFormattedForPP > 111 &&
              +fcPickRoundAndNumberFormattedForPP < 301
            ) {
              this.rvValue = 0.33;
              this.rvPercentOfNonQBMax = 0.1;
            }
            if (
              +fcPickRoundAndNumberFormattedForPP > 211 &&
              +fcPickRoundAndNumberFormattedForPP < 401
            ) {
              this.rvValue = 0.11;
              this.rvPercentOfNonQBMax = 0.03;
            }
          }
          if (fcPickYear === +(curYear + 2)) {
            // console.log(fcPickYear);
            // console.log(player.player.name);
            // console.log(fcPickRoundAndNumberFormattedForPP);
            if (+fcPickRoundAndNumberFormattedForPP < 201) {
              this.rvValue = 0.5;
              this.rvPercentOfNonQBMax = 0.16;
            }
            if (
              +fcPickRoundAndNumberFormattedForPP > 111 &&
              +fcPickRoundAndNumberFormattedForPP < 301
            ) {
              this.rvValue = 0.16;
              this.rvPercentOfNonQBMax = 0.05;
            }
            if (
              +fcPickRoundAndNumberFormattedForPP > 211 &&
              +fcPickRoundAndNumberFormattedForPP < 401
            ) {
              this.rvValue = 0.05;
              this.rvPercentOfNonQBMax = 0.016;
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
        // console.log(player.player.name);

        this.myPercentOfQBMax = +(
          (+this.ppSFQBTEPPercentOfMax +
            +this.rvPercentOfQBMax +
            +this.rvPercentOfQBMax +
            +this.rvPercentOfQBMax) /
          4
        ).toFixed(2);
        // console.log(player.player.name, this.myPercentOfQBMax);
        // console.log(fcQBMaxValue);

        this.myValue = +(fcQBMaxValue * this.myPercentOfQBMax).toFixed(2);

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
        // console.log(player.player.name);

        this.myPercentOfNonQBMax = +(
          (+this.ppSFNonQBTEPPercentOfMax +
            +this.rvPercentOfNonQBMax +
            +this.rvPercentOfNonQBMax +
            +this.rvPercentOfNonQBMax) /
          4
        ).toFixed(2);
        // console.log(+fcNonQBMaxValue);
        this.myValue = +(+fcNonQBMaxValue * +this.myPercentOfNonQBMax).toFixed(
          2
        );

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
      sanitizedFCPlayerName,
      rvRedraftPlayerObject,
      sanitizedRVRedraftPlayerName
    ) {
      // console.log(rvRedraftPlayerObject);

      if (sanitizedRVRedraftPlayerName === sanitizedFCPlayerName) {
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
        if (rvRedraftTier) {
          // console.log(rvRedraftTier);
          this.rvRedraftTier = +rvRedraftTier;
        }
      }
    }

    puttingItAllTogetherRedraft(
      sanitizedFCPlayerName,
      sanitizedRVRedraftPlayerName,
      fcPosition
    ) {
      if (sanitizedRVRedraftPlayerName === sanitizedFCPlayerName) {
        //////////////
        //setting myRedraftScoreFromPlayersRedraftTier
        ////////////////

        if (fcPosition === 'QB') {
          // console.log(fcPosition);
          if (this.rvRedraftTier === 3) {
            this.myRedraftScoreFromPlayersRedraftTier = 600;
          }
          if (this.rvRedraftTier === 4) {
            this.myRedraftScoreFromPlayersRedraftTier = 400;
          }
          if (this.rvRedraftTier === 5) {
            this.myRedraftScoreFromPlayersRedraftTier = 300;
          }
          if (this.rvRedraftTier === 6) {
            this.myRedraftScoreFromPlayersRedraftTier = 200;
          }
          if (this.rvRedraftTier === 7) {
            this.myRedraftScoreFromPlayersRedraftTier = 100;
          }
          if (this.rvRedraftTier > 7) {
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

        ///////////////
        ////////////////////////////
        // comparing my redraft rank to marker redraft rank
        //////////////////////////////

        // console.log(
        //   sanitizedFCPlayerName,
        //   this.fpRedraftPositionRank,
        //   this.rvRedraftPositionRank
        // );

        let rvRedraftPositionRank = +this.rvRedraftPositionRank;
        let fpRedraftPositionRank = +this.fpRedraftPositionRank;

        this.myRedraftDifferenceScore = 0;

        //1-10 average

        if ((rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 11) {
          // console.log(
          //   sanitizedFCPlayerName,
          //   this.fpRedraftPositionRank,
          //   this.rvRedraftPositionRank
          // );

          if (fpRedraftPositionRank - rvRedraftPositionRank === 3) {
            this.myRedraftDifferenceScore = 100;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -3) {
            this.myRedraftDifferenceScore = -100;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank === 4) {
            this.myRedraftDifferenceScore = 300;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -4) {
            this.myRedraftDifferenceScore = -300;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank === 5) {
            this.myRedraftDifferenceScore = 500;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -5) {
            this.myRedraftDifferenceScore = -500;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 5) {
            this.myRedraftDifferenceScore = 600;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -5) {
            this.myRedraftDifferenceScore = -600;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 7) {
            this.myRedraftDifferenceScore = 700;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -7) {
            this.myRedraftDifferenceScore = -700;
          }
        }

        //11-20 average

        if (
          (rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 10 &&
          (rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 21
        ) {
          if (fpRedraftPositionRank - rvRedraftPositionRank === 4) {
            this.myRedraftDifferenceScore = 100;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -4) {
            this.myRedraftDifferenceScore = -100;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank === 5) {
            this.myRedraftDifferenceScore = 300;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -5) {
            this.myRedraftDifferenceScore = -300;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank === 6 ||
            fpRedraftPositionRank - rvRedraftPositionRank === 7
          ) {
            this.myRedraftDifferenceScore = 500;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank === -6 ||
            fpRedraftPositionRank - rvRedraftPositionRank === -7
          ) {
            this.myRedraftDifferenceScore = -500;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 7) {
            this.myRedraftDifferenceScore = 600;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -7) {
            this.myRedraftDifferenceScore = -600;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 9) {
            this.myRedraftDifferenceScore = 700;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -9) {
            this.myRedraftDifferenceScore = -700;
          }
        }

        //21-30 average

        if (
          (rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 20 &&
          (rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 31
        ) {
          if (fpRedraftPositionRank - rvRedraftPositionRank === 4) {
            this.myRedraftDifferenceScore = 100;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -4) {
            this.myRedraftDifferenceScore = -100;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 5) {
            this.myRedraftDifferenceScore = 200;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -5) {
            this.myRedraftDifferenceScore = -200;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 6) {
            this.myRedraftDifferenceScore = 300;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -6) {
            this.myRedraftDifferenceScore = -300;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 7) {
            this.myRedraftDifferenceScore = 400;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -7) {
            this.myRedraftDifferenceScore = -400;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank === 8 ||
            fpRedraftPositionRank - rvRedraftPositionRank === 9
          ) {
            this.myRedraftDifferenceScore = 500;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank === -8 ||
            fpRedraftPositionRank - rvRedraftPositionRank === -9
          ) {
            this.myRedraftDifferenceScore = -500;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 9) {
            this.myRedraftDifferenceScore = 600;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -9) {
            this.myRedraftDifferenceScore = -600;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 13) {
            this.myRedraftDifferenceScore = 700;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -13) {
            this.myRedraftDifferenceScore = -700;
          }
        }

        //31-50 avarage

        if (
          (rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 30 &&
          (rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 51
        ) {
          if (fpRedraftPositionRank - rvRedraftPositionRank === 5) {
            this.myRedraftDifferenceScore = 100;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -5) {
            this.myRedraftDifferenceScore = -100;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 6) {
            this.myRedraftDifferenceScore = 200;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -6) {
            this.myRedraftDifferenceScore = -200;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 7) {
            this.myRedraftDifferenceScore = 300;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -7) {
            this.myRedraftDifferenceScore = -300;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 8) {
            this.myRedraftDifferenceScore = 400;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -8) {
            this.myRedraftDifferenceScore = -400;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank === 9 ||
            fpRedraftPositionRank - rvRedraftPositionRank === 10
          ) {
            this.myRedraftDifferenceScore = 500;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank === -9 ||
            fpRedraftPositionRank - rvRedraftPositionRank === -10
          ) {
            this.myRedraftDifferenceScore = -500;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank > 10 &&
            fpRedraftPositionRank - rvRedraftPositionRank < 14
          ) {
            this.myRedraftDifferenceScore = 600;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank < -10 &&
            fpRedraftPositionRank - rvRedraftPositionRank > -14
          ) {
            this.myRedraftDifferenceScore = -600;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 13) {
            this.myRedraftDifferenceScore = 700;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -13) {
            this.myRedraftDifferenceScore = -700;
          }
        }

        //average 51-90

        if (
          (rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 40 &&
          (rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 91
        ) {
          if (fpRedraftPositionRank - rvRedraftPositionRank === 19) {
            this.myRedraftDifferenceScore = 100;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -19) {
            this.myRedraftDifferenceScore = -100;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 20) {
            this.myRedraftDifferenceScore = 200;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -20) {
            this.myRedraftDifferenceScore = -200;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 21) {
            this.myRedraftDifferenceScore = 300;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -21) {
            this.myRedraftDifferenceScore = -300;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === 22) {
            this.myRedraftDifferenceScore = 400;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank === -22) {
            this.myRedraftDifferenceScore = -400;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank === 23 ||
            fpRedraftPositionRank - rvRedraftPositionRank === 24
          ) {
            this.myRedraftDifferenceScore = 500;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank === -23 ||
            fpRedraftPositionRank - rvRedraftPositionRank === -24
          ) {
            this.myRedraftDifferenceScore = -500;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank > 24 &&
            fpRedraftPositionRank - rvRedraftPositionRank < 30
          ) {
            this.myRedraftDifferenceScore = 600;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank < -24 &&
            fpRedraftPositionRank - rvRedraftPositionRank > -30
          ) {
            this.myRedraftDifferenceScore = -600;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 30) {
            this.myRedraftDifferenceScore = 700;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -30) {
            this.myRedraftDifferenceScore = -700;
          }
        }

        //average greater than 90

        if ((rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 90) {
          if (
            fpRedraftPositionRank - rvRedraftPositionRank > 40 &&
            fpRedraftPositionRank - rvRedraftPositionRank < 46
          ) {
            this.myRedraftDifferenceScore = 200;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank > -40 &&
            fpRedraftPositionRank - rvRedraftPositionRank < -46
          ) {
            this.myRedraftDifferenceScore = -200;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank > 45 &&
            fpRedraftPositionRank - rvRedraftPositionRank < 51
          ) {
            this.myRedraftDifferenceScore = 400;
          }
          if (
            fpRedraftPositionRank - rvRedraftPositionRank > -45 &&
            fpRedraftPositionRank - rvRedraftPositionRank < -51
          ) {
            this.myRedraftDifferenceScore = -400;
          }

          if (fpRedraftPositionRank - rvRedraftPositionRank > 50) {
            this.myRedraftDifferenceScore = 600;
          }
          if (fpRedraftPositionRank - rvRedraftPositionRank < -50) {
            this.myRedraftDifferenceScore = -600;
          }
        }
      }
    }

    calculatingProjectedNextOffseasonDynastyValue(
      sanitizedFCPlayerName,
      sanitizedRVPlayerName
    ) {
      //things ill need to do this
      //current date, age, position, position age apex, current market value, dynasty value difference from mine to market, my projected redraft postional tier score, my redraft difference score

      // console.log(curDate);

      // console.log(amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch);
      this.ageNextMarch =
        this.age + amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch;

      const qbAgeApex = 28;
      const rbAgeApex = 25;
      const wrAgeApex = 27;
      const teAgeApex = 28;

      if (sanitizedFCPlayerName === sanitizedRVPlayerName) {
        // console.log(this.age);
        // console.log(this.position);
        // console.log(this.fantasyCalcValue);
        // console.log(this.valueDiffBetweenMyValueAndMarketValue);
        // console.log(this.myRedraftScoreFromPlayersRedraftTier);
        // console.log(this.myRedraftDifferenceScore);
        // console.log(this.fcQBPercentOfMax);

        //
        //

        ///////////////////////////////
        //QB
        ///////////////////////////////
        ///////////////////////////////

        if (this.position === 'QB') {
          // console.log(this.position);
          // console.log(this.name);
          // console.log(this.name, this.age, this.ageNextMarch);
          // console.log(this.name, this.myRedraftDifferenceScore);

          //
          // 2 or more years pre age apex
          //
          if (qbAgeApex - this.age >= 2) {
            // console.log(this.name);
            // console.log(this.name, this.age, this.ageNextMarch);

            //
            //
            //wont age into the next age bucket by next march
            //
            if (qbAgeApex - this.ageNextMarch >= 2) {
              // console.log(this.name, this.age, this.ageNextMarch);
              qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch(
                curMonth,
                this.name,
                this.fantasyCalcValue,
                this.valueDiffBetweenMyValueAndMarketValue,
                this.myRedraftScoreFromPlayersRedraftTier,
                this.myRedraftDifferenceScore,
                this.fcQBPercentOfMax,
                this.rvTier,
                this.percentValueDiffBetweenMyValueAndMarket
              );
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
              qbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch(
                curMonth,
                this.name,
                this.fantasyCalcValue,
                this.valueDiffBetweenMyValueAndMarketValue,
                this.myRedraftScoreFromPlayersRedraftTier,
                this.myRedraftDifferenceScore,
                this.fcQBPercentOfMax,
                this.rvTier,
                this.percentValueDiffBetweenMyValueAndMarket
              );
            }
          }

          //within 2 years of age apex but not past age apex

          if (qbAgeApex - this.age >= 0 && qbAgeApex - this.age < 2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (
              qbAgeApex - this.ageNextMarch >= 0 &&
              qbAgeApex - this.ageNextMarch < 2
            ) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //past age apex but 2 years or less past it

          if (qbAgeApex - this.age <= 0 && qbAgeApex - this.age > -2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (
              qbAgeApex - this.ageNextMarch <= 0 &&
              qbAgeApex - this.ageNextMarch > -2
            ) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //more than 2 years post age apex

          if (qbAgeApex - this.age <= -2) {
            // console.log(this.name);
          }
        }

        ///////////////////////////////
        //RB
        ///////////////////////////////
        ///////////////////////////////

        if (this.position === 'RB') {
          // console.log(this.position);

          // 2 or more years pre age apex
          if (rbAgeApex - this.age >= 2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (rbAgeApex - this.ageNextMarch >= 2) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //within 2 years of age apex but not past age apex

          if (rbAgeApex - this.age >= 0 && rbAgeApex - this.age < 2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (
              rbAgeApex - this.ageNextMarch >= 0 &&
              rbAgeApex - this.ageNextMarch < 2
            ) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //past age apex but 2 years or less past it

          if (rbAgeApex - this.age <= 0 && rbAgeApex - this.age > -2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (
              rbAgeApex - this.ageNextMarch <= 0 &&
              rbAgeApex - this.ageNextMarch > -2
            ) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //more than 2 years post age apex

          if (rbAgeApex - this.age <= -2) {
            // console.log(this.name);
          }
        }

        ///////////////////////////////
        //WR
        ///////////////////////////////
        ///////////////////////////////

        if (this.position === 'WR') {
          // console.log(this.position);

          // 2 or more years pre age apex
          if (wrAgeApex - this.age >= 2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (wrAgeApex - this.ageNextMarch >= 2) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //within 2 years of age apex but not past age apex

          if (wrAgeApex - this.age >= 0 && wrAgeApex - this.age < 2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (
              wrAgeApex - this.ageNextMarch >= 0 &&
              wrAgeApex - this.ageNextMarch < 2
            ) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //past age apex but 2 years or less past it

          if (wrAgeApex - this.age <= 0 && wrAgeApex - this.age > -2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (
              wrAgeApex - this.ageNextMarch <= 0 &&
              wrAgeApex - this.ageNextMarch > -2
            ) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //more than 2 years post age apex

          if (wrAgeApex - this.age <= -2) {
            // console.log(this.name);
          }
        }

        ///////////////////////////////
        //TE
        ///////////////////////////////
        ///////////////////////////////

        if (this.position === 'TE') {
          // console.log(this.position);

          // 2 or more years pre age apex
          if (teAgeApex - this.age >= 2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (teAgeApex - this.ageNextMarch >= 2) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //within 2 years of age apex but not past age apex

          if (teAgeApex - this.age >= 0 && teAgeApex - this.age < 2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (
              teAgeApex - this.ageNextMarch >= 0 &&
              teAgeApex - this.ageNextMarch < 2
            ) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //past age apex but 2 years or less past it

          if (teAgeApex - this.age <= 0 && teAgeApex - this.age > -2) {
            // console.log(this.name);
            //
            //wont age into the next age bucket by next march
            if (
              teAgeApex - this.ageNextMarch <= 0 &&
              teAgeApex - this.ageNextMarch > -2
            ) {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
            //
            //will age into next age bucket by next march
            else {
              // console.log(this.name, this.age, this.ageNextMarch);
            }
          }

          //more than 2 years post age apex

          if (teAgeApex - this.age <= -2) {
            // console.log(this.name);
          }
        }
      }
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
  let ppPlayerObject;
  let fpRedraftPlayerObject;
  let sanitizedFPRedraftPlayerName = '';
  let rvRedraftPlayerObject;
  let sanitizedRVRedraftPlayerName = '';

  // let sanitizedPPPlayerName = '';
  // let sanitizedPPPWithPicksPlayerName = '';

  newData.forEach(function (topLevelObject) {
    PlayerArray = topLevelObject.data;
  });

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
      +fcQBPercentOfMax,
      +fcNonQBPercentOfMax,
      +ppSFTEPValue,
      +ppSFQBTEPPercentOfMax,
      +ppSFNonQBTEPPercentOfMax
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
      sanitizedFCPlayerName,
      rvRedraftPlayerObject,
      sanitizedRVRedraftPlayerName
    );

    tradeCalculaterDataObject.puttingItAllTogetherRedraft(
      sanitizedFCPlayerName,
      sanitizedRVRedraftPlayerName,
      fcPosition
    );

    tradeCalculaterDataObject.calculatingProjectedNextOffseasonDynastyValue(
      sanitizedFCPlayerName,
      sanitizedRVPlayerName
    );

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
    // if (
    //   (player.player.position === 'QB' &&
    //     sanitizedFCPlayerName === 'Sam Darnold') ||
    //   sanitizedFCPlayerName === 'Joe Burrow'
    // ) {
    //   console.log(tradeCalculaterDataObject);
    // }
    // if (
    //   player.player.position === 'WR' &&
    //   sanitizedFCPlayerName === 'Jerry Jeudy'
    // ) {
    //   console.log(tradeCalculaterDataObject);
    // }
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
  ///////////uncomment below to push all data from above to db named dynastyAndRedraftPlayerObjects

  //   const url =
  //     'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
  //   const client = new MongoClient(url);

  //   // The database to use
  //   const dbName = 'dailydynasties';

  //   async function runDynastyAndRedraftPlayerObjects() {
  //     try {
  //       await client.connect();
  //       console.log('Connected correctly to server');
  //       const db = client.db(dbName);

  //       // Use the collection "people"
  //       const col = db.collection('dynastyAndRedraftPlayerObjects');

  //       // Construct a document
  //       let dynastyAndRedraftPlayerObjects = {
  //         alltradeCalculaterDataArray,
  //       };

  //       // Insert a single document, wait for promise so we can read it back
  //       const p = await col.insertOne(dynastyAndRedraftPlayerObjects);
  //       // Find one document
  //       const myDoc = await col.findOne();
  //       // Print to the console
  //       // console.log(myDoc);
  //     } catch (err) {
  //       console.log(err.stack);
  //     } finally {
  //       await client.close();
  //     }
  //   }

  //   runDynastyAndRedraftPlayerObjects().catch(console.dir);

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
      valueDiffBetweenMyValueAndMarketValue
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
      playerObject.valueDiffBetweenMyValueAndMarketValue
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

  //     // Use the collection "people"
  //     const col = db.collection('dynastyRankingsData');

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

  class tradeAnalyzerDataConstructor {
    constructor(
      name,
      position,
      team,
      age,
      ageNextMarch,
      marketValue,

      myValue,

      valueDiffBetweenMyValueAndMarketValue,
      marketRedraftOverallRank,
      marketRedraftPositionRank,
      myRedraftOverallRank,
      myRedraftPositionRank,
      myRedraftTier,
      myRedraftScoreFromPlayersRedraftTier,
      myRedraftDifferenceScore,
      projectedNextOffseasonDynastyValue
    ) {
      this.name = name;
      this.position = position;
      this.team = team;
      this.age = age;
      this.ageNextMarch = ageNextMarch;
      this.marketValue = marketValue;

      this.myValue = myValue;

      this.valueDiffBetweenMyValueAndMarketValue =
        valueDiffBetweenMyValueAndMarketValue;
      this.marketRedraftOverallRank = marketRedraftOverallRank;
      this.marketRedraftPositionRank = marketRedraftPositionRank;
      this.myRedraftOverallRank = myRedraftOverallRank;
      this.myRedraftPositionRank = myRedraftPositionRank;
      this.myRedraftTier = myRedraftTier;
      this.myRedraftScoreFromPlayersRedraftTier =
        myRedraftScoreFromPlayersRedraftTier;
      this.myRedraftDifferenceScore = myRedraftDifferenceScore;
      this.projectedNextOffseasonDynastyValue =
        projectedNextOffseasonDynastyValue;
    }
  }

  alltradeCalculaterDataArray.forEach(function (playerObject) {
    let tradeAnalyzerDataObject = new tradeAnalyzerDataConstructor(
      playerObject.name,
      playerObject.position,
      playerObject.team,
      playerObject.age,
      playerObject.ageNextMarch,
      playerObject.fantasyCalcValue,
      playerObject.myValue,
      playerObject.valueDiffBetweenMyValueAndMarketValue,
      playerObject.fpRedraftOverallRank,
      playerObject.fpRedraftPositionRank,
      playerObject.rvRedraftOverallRank,
      playerObject.rvRedraftPositionRank,
      playerObject.rvRedraftTier,
      playerObject.myRedraftScoreFromPlayersRedraftTier,
      playerObject.myRedraftDifferenceScore,
      playerObject.projectedNextOffseasonDynastyValue
    );

    tradeAnalyzerDataObjectsArray.push(tradeAnalyzerDataObject);
  });
  // console.log(tradeAnalyzerDataObjectsArray);

  ///////////uncomment below to push all trade analyzer data from above to db named dynastyRankingsData

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
};
// console.log(myJSON);
testfunc();

/***************************************************************!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/////////////////////////////////
//create a couple new constructor functions down here that will take in alltradeCalculaterDataArray as an input and loop over it and make player object arrays for specific purposes that only contain the info I am going to render for a page. one for dynasty rankings (done), one for redraft/rest of season rankings, and one for 3d trade view. then send these to the db in their own collections so you only have to call getstaticprops for the smaller objects that contain only the data that will be rendered on that page
/////////////////////////////////////// */
//********************************************************************!!!!!!!!!!!!!!!!!!!!!!!!!!!111 */
