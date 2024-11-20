const axios = require('axios');
const { MongoClient } = require('mongodb');
const allTEs = require('../teamandpositionvariables/allTEVariables');




async function fetchRawFantasyCalcDataFromMongodb() {
    const url =
      'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/fantasycalcData';
    const client = new MongoClient(url);
  
    // The database to use
    const dbName = 'dailydynasties';
    try {
      await client.connect();
      // console.log('Connected correctly to server');
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
  
  async function fetchPrizePicksDataFromMongodb() {
    const url =
      'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/fantasycalcData';
    const client = new MongoClient(url);
  
    // The database to use
    const dbName = 'dailydynasties';
    try {
      await client.connect();
      // console.log('Connected correctly to server');
      const db = client.db(dbName);
  
      // Use the collection "fantasycalcData"
      const col = db.collection('prizepicksWeeklyPropsData');
  
      // Construct a document
  
      // Insert a single document, wait for promise so we can read it back
      // const p = await col.insertOne(prizepicksWeeklyPropsData);
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

  async function fetchTheTEData() {

 
    // 
   ///             underdog
   //
 
   await fetchRawFantasyCalcDataFromMongodb().then((res) => {
 
     
     
     let TopData = res.data;
     // console.log(TopData);
     
     //
 
     TopData.forEach((player) => {
       // console.log(player)
       // console.log(player.players[0].name)
 
     
      
 
       //                           WROne
 
       allTEs.forEach((te) => {
        //  console.log(te)
         if(player.players[0].name === te.TE1.name) {
        //    console.log(te.TE1.name, player.market, player.line)
     
         
 
           if(player.market === 'receptions') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.udReceptionsProp  = player.line
           }
           if(player.market === 'receiving yards') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.udRecYardsProp  = player.line
           }
           
 
           if(player.market === 'fantasy score') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.udFantasyScoreProp  = player.line
           }
 
           
         }
 
 
       //
       //                    WRTwo
 
       if(player.players[0].name === te.TE2.name) {
         // console.log(te.TE2.name, player.market, player.line)
   
         
         
 
         if(player.market === 'receptions') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.udReceptionsProp  = player.line
         }
         if(player.market === 'receiving yards') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.udRecYardsProp  = player.line
         }
       
 
         if(player.market === 'fantasy score') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.udFantasyScoreProp  = player.line
         }
 
         
       }

         //
      
    //    console.log(wr.WROne)
 
       });
       
     }); 
 
         
     }) // end await fetchRawFantasyCalcDataFromMongodb().then((res) => {
 
 
     //
     ///
     ////        prize picks
     ///
     //
 
     await fetchPrizePicksDataFromMongodb().then((res) => {
       let TopData = res.data;
       // console.log(TopData);
       
       TopData.forEach((player) => {
         // console.log(player)
         // console.log(player.players[0].name)
   
 
       
 
       //                           WROne
 
       allTEs.forEach((te) => {
         // console.log(te.TE1)
         if(player.players[0].name === te.TE1.name) {
           // console.logte.TE1.name, player.market, player.line)
 
           
           if(player.market === 'rush attempts') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.ppCarriesProp  = player.line
           }
     
           if(player.market === 'rush yards') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.ppRushYardsProp  = player.line
           }
           if(player.market === 'rush tds') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.ppRushTDsProp  = player.line
           }
           if(player.market === 'receptions') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.ppReceptionsProp  = player.line
           }
           if(player.market === 'receiving yards') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.ppRecYardsProp  = player.line
           }
           if(player.market === 'rush+rec yds') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.ppRushPlusRecYardsProp  = player.line
           }
           
           if(player.market === 'fantasy score') {
             // console.log(te.TE1.name, player.market, player.line)
             te.TE1.ppFantasyScoreProp  = player.line
           }
 
 
           // console.log(wr.WROne)
         }
 
           //
       //                        WRTwo
       //
 
       if(player.players[0].name === te.TE2.name) {
         // console.log(te.TE2.name, player.market, player.line)
 
         
         if(player.market === 'rush attempts') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.ppCarriesProp  = player.line
         }
   
         if(player.market === 'rush yards') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.ppRushYardsProp  = player.line
         }
         if(player.market === 'rush tds') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.ppRushTDsProp  = player.line
         }
         if(player.market === 'receptions') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.ppReceptionsProp  = player.line
         }
         if(player.market === 'receiving yards') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.ppRecYardsProp  = player.line
         }
         if(player.market === 'rush+rec yds') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.ppRushPlusRecYardsProp  = player.line
         }
         
         if(player.market === 'fantasy score') {
           // console.log(te.TE2.name, player.market, player.line)
           te.TE2.ppFantasyScoreProp  = player.line
         }
 
 
        //  console.log(te.TE2)
       }

       // 
       
       

       });
     
     }); // end fetchPrizePicksDataFromMongodb().then((res) => {
 
  
 })
 return allTEs;
 }
 
 fetchTheTEData()

 module.exports = fetchTheTEData;