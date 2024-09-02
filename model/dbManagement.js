const allQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs');
const allRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs');
const allWRData = require('./dfs_positions_calc_funcs/wrValuesCalcs');
const allTEProjectionsObjects = require('./dfs_positions_calc_funcs/teValuesCalcs');
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

///
// console.log(allQBData);
// console.log(allQBData.allQBProjectionsObjects);
// console.log(allRBData.allRBProjectionsObjects);
let qbProjectionArray = allQBData.allQBProjectionsObjects;
// console.log(qbProjectionArray);
let tempRbProjectionArray = allRBData.allRBProjectionsObjects;
let rbProjectionArray = [...tempRbProjectionArray];
let tempWrProjectionArray = allWRData.allWRProjectionsObjects;
let wrProjectionArray = [...tempWrProjectionArray];
let teProjectionsArray = [...allTEProjectionsObjects];

// console.log(wrProjectionArray);

function compare(a, b) {
  if (a.appFullProjectedPoints < b.appFullProjectedPoints) {
    return 1;
  }
  if (a.appFullProjectedPoints > b.appFullProjectedPoints) {
    return -1;
  }
  return 0;
}

qbProjectionArray.sort(compare);

let allProjectionsArray = [
  qbProjectionArray,
  rbProjectionArray,
  wrProjectionArray,
  teProjectionsArray,
];

console.log(qbProjectionArray);

qbCSVArray = qbProjectionArray.map(obj => {
  return {
    name: obj.name,
    team: obj.team,
    appFullProjectedPoints: obj.appFullProjectedPoints,
  };
});

// console.log(qbCSVArray);

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
    fs.writeFileSync('week1-24-qbProjectionArray.csv', csv);
    console.log('CSV file successfully created');
  } catch (err) {
    console.error(err);
  }
}

arrayToCSV(qbCSVArray);

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
