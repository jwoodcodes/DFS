const axios = require('axios');
const { MongoClient } = require('mongodb');
const allWRs = require('../teamandpositionvariables/allWRVariables');




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

  async function fetchTheWRData() {

 
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
 
       allWRs.forEach((wr) => {
        //  console.log(wr.WROne)
         if(player.players[0].name === wr.WROne.name) {
        //    console.log(wr.WROne.name, player.market, player.line)
     
           if(player.market === 'rush attempts') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.udCarriesProp  = player.line
           }
           
           if(player.market === 'rush yards') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.udRushYardsProp  = player.line
           }
           if(player.market === 'rush tds') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.udRushTDsProp  = player.line
           }
 
           if(player.market === 'receptions') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.udReceptionsProp  = player.line
           }
           if(player.market === 'receiving yards') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.udRecYardsProp  = player.line
           }
           if(player.market === 'rush+rec yds') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.udRushPlusRecYardsProp  = player.line
           }
 
           if(player.market === 'fantasy score') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.udFantasyScoreProp  = player.line
           }
 
           
         }
 
 
       //
       //                    WRTwo
 
       if(player.players[0].name === wr.WRTwo.name) {
         // console.log(wr.WRTwo.name, player.market, player.line)
   
         if(player.market === 'rush attempts') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.udCarriesProp  = player.line
         }
         
         if(player.market === 'rush yards') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.udRushYardsProp  = player.line
         }
         if(player.market === 'rush tds') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.udRushTDsProp  = player.line
         }
 
         if(player.market === 'receptions') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.udReceptionsProp  = player.line
         }
         if(player.market === 'receiving yards') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.udRecYardsProp  = player.line
         }
         if(player.market === 'rush+rec yds') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.udRushPlusRecYardsProp  = player.line
         }
 
         if(player.market === 'fantasy score') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.udFantasyScoreProp  = player.line
         }
 
         
       }

         //
       //                    WRThree
 
       if(player.players[0].name === wr.WRTwo.name) {
        // console.log(wr.WRThree.name, player.market, player.line)
  
        if(player.market === 'rush attempts') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.udCarriesProp  = player.line
        }
        
        if(player.market === 'rush yards') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.udRushYardsProp  = player.line
        }
        if(player.market === 'rush tds') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.udRushTDsProp  = player.line
        }

        if(player.market === 'receptions') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.udReceptionsProp  = player.line
        }
        if(player.market === 'receiving yards') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.udRecYardsProp  = player.line
        }
        if(player.market === 'rush+rec yds') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.udRushPlusRecYardsProp  = player.line
        }

        if(player.market === 'fantasy score') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.udFantasyScoreProp  = player.line
        }

        
      }
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
 
       allWRs.forEach((wr) => {
         // console.log(wr.WROne)
         if(player.players[0].name === wr.WROne.name) {
           // console.log(wr.WROne.name, player.market, player.line)
 
           
           if(player.market === 'rush attempts') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.ppCarriesProp  = player.line
           }
     
           if(player.market === 'rush yards') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.ppRushYardsProp  = player.line
           }
           if(player.market === 'rush tds') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.ppRushTDsProp  = player.line
           }
           if(player.market === 'receptions') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.ppReceptionsProp  = player.line
           }
           if(player.market === 'receiving yards') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.ppRecYardsProp  = player.line
           }
           if(player.market === 'rush+rec yds') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.ppRushPlusRecYardsProp  = player.line
           }
           
           if(player.market === 'fantasy score') {
             // console.log(wr.WROne.name, player.market, player.line)
             wr.WROne.ppFantasyScoreProp  = player.line
           }
 
 
           // console.log(wr.WROne)
         }
 
           //
       //                        WRTwo
       //
 
       if(player.players[0].name === wr.WRTwo.name) {
         // console.log(wr.WRTwo.name, player.market, player.line)
 
         
         if(player.market === 'rush attempts') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.ppCarriesProp  = player.line
         }
   
         if(player.market === 'rush yards') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.ppRushYardsProp  = player.line
         }
         if(player.market === 'rush tds') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.ppRushTDsProp  = player.line
         }
         if(player.market === 'receptions') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.ppReceptionsProp  = player.line
         }
         if(player.market === 'receiving yards') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.ppRecYardsProp  = player.line
         }
         if(player.market === 'rush+rec yds') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.ppRushPlusRecYardsProp  = player.line
         }
         
         if(player.market === 'fantasy score') {
           // console.log(wr.WRTwo.name, player.market, player.line)
           wr.WRTwo.ppFantasyScoreProp  = player.line
         }
 
 
        //  console.log(wr.WRTwo)
       }

       // 
       
           //                  WRThree
       //                        
       //
 
       if(player.players[0].name === wr.WRThree.name) {
        // console.log(wr.WRThree.name, player.market, player.line)

        
        if(player.market === 'rush attempts') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.ppCarriesProp  = player.line
        }
  
        if(player.market === 'rush yards') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.ppRushYardsProp  = player.line
        }
        if(player.market === 'rush tds') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.ppRushTDsProp  = player.line
        }
        if(player.market === 'receptions') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.ppReceptionsProp  = player.line
        }
        if(player.market === 'receiving yards') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.ppRecYardsProp  = player.line
        }
        if(player.market === 'rush+rec yds') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.ppRushPlusRecYardsProp  = player.line
        }
        
        if(player.market === 'fantasy score') {
          // console.log(wr.WRThree.name, player.market, player.line)
          wr.WRThree.ppFantasyScoreProp  = player.line
        }


        // console.log(wr.WRThree)
      }

       });
     
     }); // end fetchPrizePicksDataFromMongodb().then((res) => {
 
  
 })
 return allWRs;
 }
 
 fetchTheWRData()

 module.exports = fetchTheWRData;