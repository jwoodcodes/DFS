const axios = require('axios');
const { MongoClient } = require('mongodb');
const allQBs = require('../teamandpositionvariables/allQBVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');




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

async function fetchTheData() {

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

      //
      // QBs
      //

      allQBs.forEach((qb) => {
        // console.log(qb)
        if(player.players[0].name === qb.name) {
          // console.log(qb.name, player.market, player.line)
          if(player.market === 'pass attempts') {
            // console.log(qb.name, player.market, player.line)
            qb.udPassAttemptsProp  = player.line
          }
          if(player.market === 'pass completions') {
            // console.log(qb.name, player.market, player.line)
            qb.udPassCompletionsProp  = player.line
          }
          if(player.market === 'pass yards') {
            // console.log(qb.name, player.market, player.line)
            qb.udPassYardsProp  = player.line
          }
          if(player.market === 'pass tds') {
            // console.log(qb.name, player.market, player.line)
            qb.udPassTDsProp  = player.line
          }
          if(player.market === 'rush yards') {
            // console.log(qb.name, player.market, player.line)
            qb.udRushYardssProp  = player.line
          }
          if(player.market === 'pass+rush yds') {
            // console.log(qb.name, player.market, player.line)
            qb.udPassPlusRushYardsProp  = player.line
          }
          if(player.market === 'fantasy score') {
            // console.log(qb.name, player.market, player.line)
            qb.udFantasyScoreProp  = player.line
          }

          
        }
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
  
        //
        // QBs
        //
  
        allQBs.forEach((qb) => {
          // console.log(qb)
          if(player.players[0].name === qb.name) {
            // console.log(qb.name, player.market, player.line)
            if(player.market === 'pass attempts') {
              // console.log(qb.name, player.market, player.line)
              qb.ppPassAttemptsProp  = player.line
            }
            if(player.market === 'pass completions') {
              // console.log(qb.name, player.market, player.line)
              qb.ppPassCompletionsProp  = player.line
            }
            if(player.market === 'pass yards') {
              // console.log(qb.name, player.market, player.line)
              qb.ppPassYardsProp  = player.line
            }
            if(player.market === 'pass tds') {
              // console.log(qb.name, player.market, player.line)
              qb.ppPassTDsProp  = player.line
            }
            if(player.market === 'rush yards') {
              // console.log(qb.name, player.market, player.line)
              qb.ppRushYardssProp  = player.line
            }
            if(player.market === 'pass+rush yds') {
              // console.log(qb.name, player.market, player.line)
              qb.ppPassPlusRushYardsProp  = player.line
            }
            if(player.market === 'fantasy score') {
              // console.log(qb.name, player.market, player.line)
              qb.ppFantasyScoreProp  = player.line
            }

            
          }
          })

             
    
    
    }); // end fetchPrizePicksDataFromMongodb().then((res) => {

 
})
return allQBs;
}

fetchTheData()

async function fetchTheRBData() {

 
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

    
     

      //                           RBOne

      allRBs.forEach((rb) => {
        // console.log(rb.RBOne)
        if(player.players[0].name === rb.RBOne.name) {
          // console.log(rb.RBOne.name, player.market, player.line)
    
          if(player.market === 'rush attempts') {
            // console.log(rb.rbOne.name, player.market, player.line)
            rb.RBOne.udCarriesProp  = player.line
          }
          
          if(player.market === 'rush yards') {
            // console.log(rb.rbOne.name, player.market, player.line)
            rb.RBOne.udRushYardsProp  = player.line
          }
          if(player.market === 'rush tds') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.udRushTDsProp  = player.line
          }

          if(player.market === 'receptions') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.udReceptionsProp  = player.line
          }
          if(player.market === 'receiving yards') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.udRecYardsProp  = player.line
          }
          if(player.market === 'rush+rec yds') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.udRushPlusRecYardsProp  = player.line
          }

          if(player.market === 'fantasy score') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.udFantasyScoreProp  = player.line
          }

          
        }


      //
      //                    RBTwo

      if(player.players[0].name === rb.RBTwo.name) {
        // console.log(rb.RBOne.name, player.market, player.line)
  
        if(player.market === 'rush attempts') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.udCarriesProp  = player.line
        }
        
        if(player.market === 'rush yards') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.udRushYardsProp  = player.line
        }
        if(player.market === 'rush tds') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.udRushTDsProp  = player.line
        }

        if(player.market === 'receptions') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.udReceptionsProp  = player.line
        }
        if(player.market === 'receiving yards') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.udRecYardsProp  = player.line
        }
        if(player.market === 'rush+rec yds') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.udRushPlusRecYardsProp  = player.line
        }

        if(player.market === 'fantasy score') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.udFantasyScoreProp  = player.line
        }

        
      }
      

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
  

      

      //                           RBOne

      allRBs.forEach((rb) => {
        // console.log(rb.RBTwo)
        if(player.players[0].name === rb.RBOne.name) {
          // console.log(rb.RBOne.name, player.market, player.line)

          
          if(player.market === 'rush attempts') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.ppCarriesProp  = player.line
          }
    
          if(player.market === 'rush yards') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.ppRushYardsProp  = player.line
          }
          if(player.market === 'rush tds') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.ppRushTDsProp  = player.line
          }
          if(player.market === 'receptions') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.ppReceptionsProp  = player.line
          }
          if(player.market === 'receiving yards') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.ppRecYardsProp  = player.line
          }
          if(player.market === 'rush+rec yds') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.ppRushPlusRecYardsProp  = player.line
          }
          
          if(player.market === 'fantasy score') {
            // console.log(rb.RBOne.name, player.market, player.line)
            rb.RBOne.ppFantasyScoreProp  = player.line
          }


          // console.log(rb.RBOne)
        }

          //
      //                        RBTwo
      //

      if(player.players[0].name === rb.RBTwo.name) {
        // console.log(rb.RBTwo.name, player.market, player.line)

        
        if(player.market === 'rush attempts') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.ppCarriesProp  = player.line
        }
  
        if(player.market === 'rush yards') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.ppRushYardsProp  = player.line
        }
        if(player.market === 'rush tds') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.ppRushTDsProp  = player.line
        }
        if(player.market === 'receptions') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.ppReceptionsProp  = player.line
        }
        if(player.market === 'receiving yards') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.ppRecYardsProp  = player.line
        }
        if(player.market === 'rush+rec yds') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.ppRushPlusRecYardsProp  = player.line
        }
        
        if(player.market === 'fantasy score') {
          // console.log(rb.RBTwo.name, player.market, player.line)
          rb.RBTwo.ppFantasyScoreProp  = player.line
        }


        // console.log(rb.RBTwo)
      }
      });
    
    }); // end fetchPrizePicksDataFromMongodb().then((res) => {

 
})
return allRBs;
}

fetchTheRBData()

module.exports.qbPropsDataFromFetcher = fetchTheData;
module.exports.rbPropsDataFromFetcher = fetchTheRBData;



