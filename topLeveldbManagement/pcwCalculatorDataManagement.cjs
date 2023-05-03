const axios = require('axios');
const { MongoClient } = require('mongodb');
const ppSFTEPDynastyRankingsWithRookies = require('../model/datafilesmadefrom4for4CSVs/ppSFTEPDynastyRankingsWithRookies');
const ppSFTEPDynastyRankingsWithPicks = require('../model/datafilesmadefrom4for4CSVs/ppSFTEPDynastyRankingsWithPicks');

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
      fantasyCalcValue,
      fantasyCalcRank,
      fantasyCalcPositionRank,
      percentOfFantasyCalcMaxValue,
      ppSFTEPValue,
      ppSFTEPPercentOfMax
    ) {
      this.name = name;
      this.fantasyCalcID = fantasyCalcID;
      this.mflID = mflID;
      this.sleeperID = sleeperID;
      this.position = position;
      this.team = team;
      this.age = age;
      this.fantasyCalcValue = fantasyCalcValue;
      this.fantasyCalcRank = fantasyCalcRank;
      this.fantasyCalcPositionRank = fantasyCalcPositionRank;
      this.percentOfFantasyCalcMaxValue = percentOfFantasyCalcMaxValue;
      this.ppSFTEPValue = ppSFTEPValue;
      this.ppSFTEPPercentOfMax = ppSFTEPPercentOfMax;
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
          // console.log(sanitizedFCPlayerName);
          // console.log(player);
        }

        if (ppWithPicksPlayer['"Position"'] === '""') {
          ppSFTEPValue = +ppWithPicksPlayer['"Team Abbrev"'].slice(1, -1);
          // console.log(ppSFTEPValue);

          ppSFTEPPercentOfMax = +(ppSFTEPValue / ppMaxValue).toFixed(3);
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

          if (+ppSFTEPValue > 450 && ppPlayer['"Position"'] !== '""') {
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
        player.value,
        player.overallRank,
        player.positionRank,
        fcPercentOfMax,
        +ppSFTEPValue,
        +ppSFTEPPercentOfMax
      );

      alltradeCalculaterDataArray.push(tradeCalculaterDataObject);
      if (player.overallRank === 15) {
        console.log(alltradeCalculaterDataArray);
      }
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
