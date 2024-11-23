// const allQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs');
const allQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs').allQBData;
const propsQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs').allQBProjectionsObjects;
// const allRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs');
const allRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs').allRBData;
const propsRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs').allRBProjectionsObjects;
const allWRData = require('./dfs_positions_calc_funcs/wrValuesCalcs').allWRData;
const propsWRData = require('./dfs_positions_calc_funcs/wrValuesCalcs').allWRProjectionsObjects;

const { allTEData, allTEProjectionsObjects } = require('./dfs_positions_calc_funcs/teValuesCalcs');
const allQBModelDataData = require('./QB Prospect Model/qbmodel');

const wholeTeamObjects = require('./dfs_positions_calc_funcs/createWholeTeamObjects');

// console.log(allQBData);

const { MongoClient } = require('mongodb');
const allRBs = require('./teamandpositionvariables/allRBVariables');

const url =
  'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
const client = new MongoClient(url);

// The database to use
const dbName = 'dailydynasties';

async function runQB() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection('QBs');

    // Construct a document
    let QBObjects = {
      allTeamQBObjects: allQBData.allTeamQBObjects,
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(QBObjects);
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

///////////////////////

async function runRB() {
  try {
    await client.connect();

    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection('RBs');

    // Construct a document
    let RBObjects = {
      allTeamRBObjects: allRBData.allTeamRBObjects,
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(RBObjects);
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

////////////////////

async function runWholeTeamObjects() {
  try {
    await client.connect();

    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection('wholeTeams');

    // Construct a document
    let WholeTeamObjects = {
      wholeTeamObjects: wholeTeamObjects,
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(wholeTeamObjects);
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

/////

async function runQBProspectModel() {
  try {
    await client.connect();

    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection('QBProspectGrades');

    // Construct a document
    let QBProspectObjects = {
      allQBModelDataData: allQBModelDataData,
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(QBProspectObjects);
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

const rbData = []

async function someFunction() {
  try {
    const propsqbData = await propsQBData();
    const propsrbData = await propsRBData();
  
    propsqbData.forEach((player) => {
      if(player.name === 'Lamar Jackson' || player.name === 'Justin Herbert') {
        // console.log('QB:', player);
      }
    });

    propsrbData.forEach((player) => {
      // rbData.push(player)
      if(player.name === 'Kyren Williams' || player.name === 'Joe Mixon') {
        // console.log('RB:', player);
      }
    });
    
    return propsrbData;
  } catch (error) {
    console.error('Error in someFunction:', error);
  }
}

// propsWRData
async function wrFunction() {
  try {
    const propsWrData = await propsWRData();
   
  
    propsWrData.forEach((player) => {
      // console.log(player)
      if(player.name === 'Drake London' || player.name === 'Mike Evans') {
        // console.log('QB:', player);
      }
    });

    
    
    return propsWrData;
  } catch (error) {
    console.error('Error in wrFunction:', error);
  }
}

//

async function teFunction() {
  try {
    const teProjData = await allTEProjectionsObjects();
    // console.log(teProjData)
    if (teProjData && teProjData.length > 0) {
      teProjData.forEach((player) => {
        if(player.name === 'Travis Kelce' || player.name === 'Brock Bowers') {
          // console.log('TE:', player);
        }
      });
    }
    
    return teProjData;
  } catch (error) {
    console.error('Error in teFunction:', error);
    return []; // Return empty array if there's an error
  }
}

// propsTEData

async function processData() {
  
  let data = await someFunction();
  let wrData = await wrFunction();
  let teData = await teFunction();
  
  // console.log(data)
    // Create a map to store the most recent object for each player
    const playerMap = new Map();
    
    data.forEach((player) => {
      // Group all objects for the same player
      const playerObjects = data.filter(p => p.name === player.name);
      // Get only the most recent object
      const mostRecentObject = playerObjects[playerObjects.length - 1];
      
      // Store in map (this will automatically override any previous entry for this player)
      playerMap.set(player.name, mostRecentObject);
      
      if(player.name === 'Kyren Williams' || player.name === 'Joe Mixon') {
        // console.log('RB:', mostRecentObject);
      }
    });
  
    // Convert map values back to array - this will have only the most recent object for each player
    data = Array.from(playerMap.values());
  
    //
    const wrplayerMap = new Map();
    
    wrData.forEach((player) => {
      // Group all objects for the same player
      const playerObjects = wrData.filter(p => p.name === player.name);
      // Get only the most recent object
      const mostRecentObject = playerObjects[playerObjects.length - 1];
      
      // Store in map (this will automatically override any previous entry for this player)
      wrplayerMap.set(player.name, mostRecentObject);
      
      if(player.name === 'Drake London' || player.name === 'Mike Evans') {
        // console.log('RB:', mostRecentObject);
      }
    });
  
    // Convert map values back to array - this will have only the most recent object for each player
    wrdata = Array.from(wrplayerMap.values());
    

    // console.log(wrdata)

    const teplayerMap = new Map();
    
    teData.forEach((player) => {
      // Group all objects for the same player
      const playerObjects = teData.filter(p => p.name === player.name);
      // Get only the most recent object
      const mostRecentObject = playerObjects[playerObjects.length - 1];
      
      // Store in map (this will automatically override any previous entry for this player)
      teplayerMap.set(player.name, mostRecentObject);
      
      if(player.name === 'Travis Kelce' || player.name === 'Brock Bowers') {
        // console.log('RB:', mostRecentObject);
      }
    });
  
    // Convert map values back to array - this will have only the most recent object for each player
    teData = Array.from(teplayerMap.values());

    // console.log(teData)
///
// console.log(allQBData);
// console.log(allQBData.allQBProjectionsObjects);
// console.log(allRBData.allRBProjectionsObjects);
let qbProjectionArray = allQBData.allQBProjectionsObjects;
// console.log(qbProjectionArray);
// let tempRbProjectionArray = allRBData.allRBProjectionsObjects;
// console.log(rbData)
// let tempRbProjectionArray = propsrbData;
let tempRbProjectionArray = data;
// console.log(tempRbProjectionArray)
// let rbProjectionArray = [...tempRbProjectionArray];
let rbProjectionArray = tempRbProjectionArray;
// let tempWrProjectionArray = allWRData.allWRProjectionsObjects;
let wrProjectionArray = wrdata;
// let wrProjectionArray = [...tempWrProjectionArray];
// let teProjectionsArray = [...allTEProjectionsObjects];
let teProjectionsArray = teData;

// console.log(wrProjectionArray);
// console.log(rbProjectionArray);
// console.log(teProjectionsArray);

function halfCompare(a, b) {
  if (a.appHalfProjectedPoints < b.appHalfProjectedPoints) {
    return 1;
  }
  if (a.appHalfProjectedPoints > b.appHalfProjectedPoints) {
    return -1;
  }
  return 0;
}

function pprCompare(a, b) {
  if (a.appFullProjectedPoints < b.appFullProjectedPoints) {
    return 1;
  }
  if (a.appFullProjectedPoints > b.appFullProjectedPoints) {
    return -1;
  }
  return 0;
}

qbProjectionArray = qbProjectionArray.filter((obj1, i, arr) => 
  arr.findIndex(obj2 => obj2.name === obj1.name) === i
);

rbProjectionArray = rbProjectionArray.filter((obj1, i, arr) => 
  arr.findIndex(obj2 => obj2.name === obj1.name) === i
);

wrProjectionArray = wrProjectionArray.filter((obj1, i, arr) => 
  arr.findIndex(obj2 => obj2.name === obj1.name) === i
);

teProjectionsArray = teProjectionsArray.filter((obj1, i, arr) => 
  arr.findIndex(obj2 => obj2.name === obj1.name) === i
);

// console.log(rbProjectionArray);
// console.log(wrProjectionArray);
// console.log(teProjectionsArray);

qbProjectionArray.sort(halfCompare);
rbProjectionArray.sort(halfCompare);
// let pprSortedRBProjectionArray = rbProjectionArray.sort(pprCompare);
wrProjectionArray.sort(halfCompare);
// let pprSortedWRProjectionArray = wrProjectionArray.sort(pprCompare);
teProjectionsArray.sort(halfCompare);
// let pprSortedTEProjectionArray = teProjectionsArray.sort(pprCompare);

// console.log(wrProjectionArray)
// console.log(qbProjectionArray)

let allProjectionsArray = [
  qbProjectionArray,
  rbProjectionArray,
  wrProjectionArray,
  teProjectionsArray,
];

let tempFlexArray = [
  ...rbProjectionArray,
  ...wrProjectionArray,
  ...teProjectionsArray,
];
let tempSuperFlexArray = [
  ...qbProjectionArray,
  ...rbProjectionArray,
  ...wrProjectionArray,
  ...teProjectionsArray,
];
let flexArray = tempFlexArray.sort(halfCompare);
// let pprSortedFlexArray = flexArray.sort(pprCompare);
let superFlexArray = tempSuperFlexArray.sort(halfCompare);
// let pprSuperFlexArray = allProjectionsArray.sort(pprCompare);

// console.log(qbProjectionArray);
// console.log(rbProjectionArray);
// console.log(wrProjectionArray);
// console.log(flexArray);
// console.log(superFlexArray);

qbCSVArray = qbProjectionArray.map(obj => {
  // console.log(obj.name)
  return {
    name: obj.name,
    team: obj.team,
    appFullProjectedPoints: obj.appFullProjectedPoints,
    appProjPassAttempts: obj.appProjPassAttempts,
    appProjCompletions: obj.appProjCompletions,
    appProjPassingYards: obj.appProjPassingYards,
    appProjPassTDs: obj.appProjPassTDs,
    appProjINTs: obj.appProjINTs,
    appProjQBRushAttempts: obj.appProjQBRushAttempts,
    appProjQBRushYards: obj.appProjQBRushYards,
    appProjQBRushTDs: obj.appProjQBRushTDs,
    astroQBProjection: obj.astroQBProjection,
    astroSixPtTDQBProjection: obj.astroSixPtTDQBProjection,
  };
});

rbCSVArray = rbProjectionArray.map(obj => {
  return {
    name: obj.name,
    team: obj.team,
    appHalfProjectedPoints: obj.appHalfProjectedPoints,
    appProjectedCarriesThisWeek: obj.appProjectedCarriesThisWeek,
    appProjectedrushYardsThisWeek: obj.appProjectedrushYardsThisWeek,
    appProjectedrushTDsThisWeek: obj.appProjectedrushTDsThisWeek,
    appProjectedreceptionsThisWeek: obj.appProjectedreceptionsThisWeek,
    appProjectedrecYardsThisWeek: obj.appProjectedrecYardsThisWeek,
    appProjectedrecTDsThisWeek: obj.appProjectedrecTDsThisWeek,
    appProjectedrushFirstDownsThisWeek: obj.appProjectedrushFirstDownsThisWeek,
    appProjectedrecFirstDownsThisWeek: obj.appProjectedrecFirstDownsThisWeek,
    appProjectedRBTotalFirstDownsThisWeek:
      obj.appProjectedRBTotalFirstDownsThisWeek,
    astroHalfRBProjection: obj.astroHalfRBProjection,
    astroFullRBProjection: obj.astroFullRBProjection,
  };
});
// rbPPRCSVArray = pprSortedRBProjectionArray.map(obj => {
//   return {
//     name: obj.name,
//     team: obj.team,
//     appFullProjectedPoints: obj.appFullProjectedPoints,
//   };
// });
wrCSVArray = wrProjectionArray.map(obj => {
  return {
    name: obj.name,
    team: obj.team,
    appHalfProjectedPoints: obj.appHalfProjectedPoints,
    appProjectedCarriesThisWeek: obj.appProjectedCarriesThisWeek,
    appProjectedrushYardsThisWeek: obj.appProjectedrushYardsThisWeek,
    appProjectedrushTDsThisWeek: obj.appProjectedrushTDsThisWeek,
    appProjectedreceptionsThisWeek: obj.appProjectedreceptionsThisWeek,
    appProjectedrecYardsThisWeek: obj.appProjectedrecYardsThisWeek,
    appProjectedrecTDsThisWeek: obj.appProjectedrecTDsThisWeek,
    appProjectedrushFirstDownsThisWeek: obj.appProjectedrushFirstDownsThisWeek,
    appProjectedrecFirstDownsThisWeek: obj.appProjectedrecFirstDownsThisWeek,
    appProjectedRBTotalFirstDownsThisWeek:
      obj.appProjectedRBTotalFirstDownsThisWeek,
    astroHalfWRProjection: obj.astroHalfWRProjection,
    astroFullWRProjection: obj.astroFullWRProjection,
  };
});
// wrPPRCSVArray = pprSortedWRProjectionArray.map(obj => {
//   return {
//     name: obj.name,
//     team: obj.team,
//     appFullProjectedPoints: obj.appFullProjectedPoints,
//   };
// });
teCSVArray = teProjectionsArray.map(obj => {
  return {
    name: obj.name,
    team: obj.team,
    appHalfProjectedPoints: obj.appHalfProjectedPoints,
    appProjectedCarriesThisWeek: obj.appProjectedCarriesThisWeek,
    appProjectedrushYardsThisWeek: obj.appProjectedrushYardsThisWeek,
    appProjectedrushTDsThisWeek: obj.appProjectedrushTDsThisWeek,
    appProjectedreceptionsThisWeek: obj.appProjectedreceptionsThisWeek,
    appProjectedrecYardsThisWeek: obj.appProjectedrecYardsThisWeek,
    appProjectedrecTDsThisWeek: obj.appProjectedrecTDsThisWeek,
    appProjectedrushFirstDownsThisWeek: obj.appProjectedrushFirstDownsThisWeek,
    appProjectedrecFirstDownsThisWeek: obj.appProjectedrecFirstDownsThisWeek,
    appProjectedRBTotalFirstDownsThisWeek:
      obj.appProjectedRBTotalFirstDownsThisWeek,
    astroHalfWRProjection: obj.astroHalfWRProjection,
    astroFullWRProjection: obj.astroFullWRProjection,
  };
});
// tePPRCSVArray = pprSortedTEProjectionArray.map(obj => {
//   return {
//     name: obj.name,
//     team: obj.team,
//     appFullProjectedPoints: obj.appFullProjectedPoints,
//   };
// });
//
// flexCSVArray = flexArray.map(obj => {
//   return {
//     name: obj.name,
//     team: obj.team,
//     appHalfProjectedPoints: obj.appHalfProjectedPoints,
//   };
// });
//
superFlexCSVArray = superFlexArray.map(obj => {
  return {
    name: obj.name,
    team: obj.team,
    appHalfProjectedPoints: obj.appHalfProjectedPoints,
  };
});

// console.log(qbCSVArray);
// console.log(rbCSVArray);

//
// code in here below is for creating a csv file of the  projections
// arrays
//
const fs = require('fs');
const { parse } = require('json2csv');

function arrayToCSV(array) {
  const fields = Object.keys(array[0]);
  const opts = { fields };

  try {
    const csv = parse(array, opts);
    fs.writeFileSync('week12-24-superFlexHalfProjectionArray.csv', csv);
    console.log('CSV file successfully created');
  } catch (err) {
    console.error(err);
  }
}

// arrayToCSV(qbCSVArray);
// arrayToCSV(rbCSVArray);
// arrayToCSV(rbPPRCSVArray);
// arrayToCSV(wrCSVArray);
// arrayToCSV(wrPPRCSVArray);
// arrayToCSV(teCSVArray);
// arrayToCSV(tePPRCSVArray);
// arrayToCSV(flexCSVArray);
// arrayToCSV(superFlexCSVArray);
//
//

// console.log(allProjectionsArray);

async function runAllProjections() {
  try {
    await client.connect();

    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection('allProjections');
    console.log('connected');
    // Construct a document
    let allProjections = {
      allProjectionsArray: allProjectionsArray,
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(allProjections);
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


/////////////////////////////////////////////////////////////////////////

// runQB().catch(console.dir);
// runRB().catch(console.dir);
// runQBProspectModel().catch(console.dir);

// runWholeTeamObjects().catch(console.dir);

//

// runAllProjections().catch(console.dir);

}processData();

