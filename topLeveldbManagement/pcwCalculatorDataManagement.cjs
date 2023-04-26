const axios = require('axios');
const { MongoClient } = require('mongodb');

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
const allTrimedFantasyCalcPlayerDataAray = [];
const FinalTrimedFantasyCalcPlayerDataAray = [];

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

let maxValue = 0;

const testfunc = async function () {
  const test = await allTrimedFantasyCalcPlayerDataAray;
  // console.log(test);
  const testDoc = await fetchRawFantasyCalcDataFromMongodb();
  // console.log(testDoc);
  newData.push(testDoc);
  // console.log(newData);

  class trimmedFantasyCalcData {
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
      percentOfFantasyCalcMaxValue
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
    }
  }

  newData.forEach(function (topLevelObject) {
    // console.log(topLevelObject.data);
    const PlayerArray = topLevelObject.data;

    PlayerArray.forEach(function (player) {
      let percentOfMax = 0;

      // console.log(player);
      // console.log(player.player.ID);

      if (player.overallRank === 1) {
        maxValue = maxValue += player.value;
        percentOfMax = 100;
      }

      if (player.overallRank === 2) {
        maxValue = +(maxValue += player.value) / 2;
      }
      const testMaxValue = maxValue;
      if (player.overallRank > 1) {
        percentOfMax = +(player.value / testMaxValue).toFixed(2);
      }

      let trimmedFantasyCalcDataObject = new trimmedFantasyCalcData(
        player.player.name,
        player.player.id,
        player.player.mflId,
        player.player.sleeperId,
        player.player.position,
        player.player.maybeTeam,
        player.player.maybeAge,
        player.value,
        player.overallRank,
        player.positionRank,
        percentOfMax
      );

      allTrimedFantasyCalcPlayerDataAray.push(trimmedFantasyCalcDataObject);
      // if (player.overallRank === 15) {
      //   console.log(allTrimedFantasyCalcPlayerDataAray);
      // }
      allTrimedFantasyCalcPlayerDataAray.map(function (obj) {
        // console.log(obj);
        const newObj = { ...obj };
        // console.log(newObj);
        FinalTrimedFantasyCalcPlayerDataAray.push(newObj);
      });
    });
  });
};
testfunc();
