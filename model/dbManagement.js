const allQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs');
const allRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs');

// console.log(allQBData);

const { MongoClient } = require('mongodb');
const allRBs = require('./teamandpositionvariables/allRBVariables');

// ATTENTION: have you checked out a new branch yet today????????????

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
      allQBsMap: allQBData.allQBsMap,
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

async function runRB() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
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

// runQB().catch(console.dir);
// runRB().catch(console.dir);