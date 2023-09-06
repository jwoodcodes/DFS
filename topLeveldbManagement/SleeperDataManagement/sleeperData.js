//
//

//
const axios = require('axios');
const { MongoClient } = require('mongodb');

///////fetching sleeper data from API and pushing Sleeper data to db

const sleeperDataFetch = async function () {
    const res = await axios.get(
      'https://api.sleeper.app/v1/players/nfl'
    );
    //   console.log(res.data);
  
    const url =
      'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/sleeperData';
    const client = new MongoClient(url);
  
    // The database to use
    const dbName = 'dailydynasties';
  
    async function pushSleeperData() {
      try {
        await client.connect();
        console.log('Connected correctly to server');
        const db = client.db(dbName);
  
        // Use the collection "sleeperData"
        const col = db.collection('sleeperData');
        // console.log(res.data);
        let data = res.data;
        // Construct a document
        let allsleeperData = {
          data,
        };
  
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(allsleeperData);
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
  
    //uncomment the three commented out lines below and nodemon file to hit sleeper API(not more than once a day!)
  
    // pushSleeperData().catch(console.dir);
    // return res.data;
  };
  
//   sleeperDataFetch();

//
//
//

//
async function fetchRawSleeperDataFromMongodb() {
    const url =
      'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/sleeperData';
    const client = new MongoClient(url);
  
    // The database to use
    const dbName = 'dailydynasties';
    try {
      await client.connect();
      console.log('Connected correctly to server');
      const db = client.db(dbName);
  
      // Use the collection "fantasycalcData"
      const col = db.collection('sleeperData');
  
      // Construct a document
  
      // Insert a single document, wait for promise so we can read it back
    //   const p = await col.insertOne(allsleeperData);
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

  const newData = [];
  const allSleeperDataArray = [];

  const testfunc = async function () {
  const test = await allSleeperDataArray;
  // console.log(test);
  const testDoc = await fetchRawSleeperDataFromMongodb();
  // console.log(testDoc);
  newData.push(testDoc);
//   console.log(newData);
  }

  testfunc()

  newData.forEach(function (topLevelObject) {
    PlayerArray = topLevelObject.data;
  });


  const testUserFetch = async function () {

    const usernameRes = await axios.get('https://api.sleeper.app/v1/user/tiger333')

    // console.log(usernameRes.data.user_id)
    const userID = usernameRes.data.user_id

    let userLeaguesArray = []
    let userLeaguesNamesArray = []

  const userLeaguesres = await axios.get(
    `https://api.sleeper.app/v1/user/${userID}/leagues/nfl/2023`
  );
    // console.log(userLeaguesres.data);
    let initialUserLeaguesArray = userLeaguesres.data
    
    initialUserLeaguesArray.forEach(function(league) {
        // console.log(league.name)
        userLeaguesNamesArray.push(league.name)
        userLeaguesArray.push(league)
    })
    console.log(userLeaguesArray)
  }
  
  testUserFetch()