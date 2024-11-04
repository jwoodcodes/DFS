const axios = require('axios');
const { MongoClient } = require('mongodb');

async function fetchPropsDataFromMongodb() {
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
      const col = db.collection('weeklyPropData');
  
      // Construct a document
  
      // Insert a single document, wait for promise so we can read it back
      // const p = await col.insertOne(weeklyPropData);
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

const propData = []
  
  
  async function main() {
    const testDoc = await fetchPropsDataFromMongodb();

    propData.push(testDoc.data);
    // console.log(testDoc);
  }

  
  
  // Call the wrapper function
  main().catch(console.error).then(() => {
    // console.log(propData);
    module.exports = propData
  });

  
