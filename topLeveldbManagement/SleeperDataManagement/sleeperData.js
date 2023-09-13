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
  const PlayerArray = []
  const testfunc = async function () {
  const test = await allSleeperDataArray;
  // console.log(test);
  const testDoc = await fetchRawSleeperDataFromMongodb();
  // console.log(testDoc);
  newData.push(testDoc);
  // console.log(newData);
  
// }
  
 let testnum = 1
 let dataObject = {}

  newData.forEach(function (topLevelObject) {
    dataObject = topLevelObject.data
    PlayerArray.push(topLevelObject.data);
    
  });

//  console.log(PlayerArray)

  const testUserFetch = async function () {

    let selectedUserName = 'tiger333'
    const usernameRes = await axios.get(`https://api.sleeper.app/v1/user/${selectedUserName}`)

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
    // console.log(userLeaguesArray)
    let selectedLeagueName = 'FootClan Dynasty'
    let selectedLeagueID = 0
    let selectedLeagueNumOfTeams = 0
    let selectedLeagueScoringSettings = {}
    let selectedLeagueRosterPositions = []
    userLeaguesArray.forEach(function(league) {
      if(league.name === selectedLeagueName) {
        // console.log(league)
        selectedLeagueID = league.league_id
        selectedLeagueNumOfTeams = league.total_rosters
        selectedLeagueScoringSettings = league.scoring_settings
        selectedLeagueRosterPositions = league.roster_positions
      }
    })
    // console.log(selectedLeagueRosterPositions)
    const selectedLeagueRostersRes = await axios.get(
      `https://api.sleeper.app/v1/league/${selectedLeagueID}/rosters`
    );
    let selectedLeagueRostersData =  selectedLeagueRostersRes.data
    let selectedUsersTeamObject = {}
      let selectedUsersRoster = []

    selectedLeagueRostersData.forEach(function(team) {
      // console.log(team.owner_id)
      if(team.owner_id === userID) {
        // console.log(team)
        selectedUsersTeamObject = team
        selectedUsersRoster = team.players
      }
    })

    let selectedUsersRosterPlayerObjects = []

    // console.log(dataObject)

    //

//     async function pushFormattedSleeperData() {
//       const url =
//   'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
// const client = new MongoClient(url);
// const dbName = 'dailydynasties';
//       try {
//         await client.connect();
    
//         const db = client.db(dbName);
    
//         // Use the collection "people"
//         const col = db.collection('formattedSleeperData');
//         console.log('connected');
//         // Construct a document
//         let formattedSleeperData = dataObject
    
//         // Insert a single document, wait for promise so we can read it back
//         const p = await col.insertOne(formattedSleeperData);
//         // Find one document
//         const myDoc = await col.findOne();
//         // Print to the console
//         // console.log(myDoc);
//       } catch (err) {
//         console.log(err.stack);
//       } finally {
//         await client.close();
//       }
//     }
//     // pushFormattedSleeperData()

    const JustSleeperKeysAndNamesObjectsArray = []

    class JustKeyAndName {
      constructor(
        id, 
        name
      ) {
        this.id = id;
        this.name = name;
      }

      
    }

    for (const key in dataObject) {
      // console.log(`${key}: ${dataObject[key].player_id}`)
      // console.log(`${key}: ${dataObject[key].full_name}`)

     let justSleeperKeysAndNamesObject = new JustKeyAndName(
      key, 
      dataObject[key].full_name,
     )
      JustSleeperKeysAndNamesObjectsArray.push(justSleeperKeysAndNamesObject)
     

      selectedUsersRoster.forEach(function(player) {
        
        if(key === player) {
          // console.log(dataObject[key].full_name)
          selectedUsersRosterPlayerObjects.push(dataObject[key])
        }
      })
    }

    // console.log(JustSleeperKeysAndNamesObjectsArray)
    // JustSleeperKeysAndNamesObjectsArray.forEach(function(playerObj) {
    //   console.log(playerObj)
    // })

    async function pushJustSleeperKeysAndNames() {
      const url =
  'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
      const client = new MongoClient(url);
      const dbName = 'dailydynasties';
      try {
        await client.connect();
    
        const db = client.db(dbName);
    
        // Use the collection "justSleeperKeysAndNames"
        const col = db.collection('justSleeperKeysAndNames');
        console.log('connected');
        // Construct a document
        let justSleeperKeysAndNames
        = { JustSleeperKeysAndNamesObjectsArray }
    
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(justSleeperKeysAndNames);
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
    // pushJustSleeperKeysAndNames()
   
  }
  testUserFetch()
  }
  
  testfunc()
  
  