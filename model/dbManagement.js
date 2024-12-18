// const allQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs');
const allQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs').allQBData;
const propsQBData =
  require('./dfs_positions_calc_funcs/qbValuesCalcs').allQBProjectionsObjects;
// const allRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs');
const allRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs').allRBData;
const propsRBData =
  require('./dfs_positions_calc_funcs/rbValuesCalcs').allRBProjectionsObjects;
const allWRData = require('./dfs_positions_calc_funcs/wrValuesCalcs').allWRData;
const propsWRData =
  require('./dfs_positions_calc_funcs/wrValuesCalcs').allWRProjectionsObjects;

const {
  allTEData,
  allTEProjectionsObjects,
} = require('./dfs_positions_calc_funcs/teValuesCalcs');
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

async function qbFunction() {
  const propsqbData = await propsQBData();

  propsqbData.forEach(player => {
    try {
      // if(player.name === 'Baker Mayfield' || player.name === 'Drake Maye') {
      //   // console.log(player)
      // }
      // let tempSuggestedPropsArray = [];
      // player.recsObject = {}
      player.propsRecs = '';
      // console.log( player);
      if (player.name) {
        if (player.name !== 'Davis Mills') {
          // console.log('ran');

          // pass attempts
          // completions
          // pass yards
          // pass TDs
          // INTs
          // rush attempts
          // rush yards
          // rush TDs
          // targets
          // receptions
          // receiving yards
          // receiving TDs
          // half fantasy points
          // full fantasy points
          // recommended props

          // console.log(player)

          //Pass Attempts
          if (player.udPassAttemptsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under UD Pass Attempts of ${player.udPassAttemptsProp.prop}`;
          }
          if (player.udPassAttemptsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over UD Pass Attempts of ${player.udPassAttemptsProp.prop}`;
          }
          if (player.ppPassAttemptsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under PP Pass Attempts of ${player.ppPassAttemptsProp.prop}`;
          }
          if (player.ppPassAttemptsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over PP Pass Attempts of ${player.ppPassAttemptsProp.prop}`;
          }
          //Completions
          if (player.udPassCompletionsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under UD Completions of ${player.udPassCompletionsProp.prop}`;
          }
          if (player.udPassCompletionsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over UD Completions of ${player.udPassCompletionsProp.prop}`;
          }
          if (player.ppPassCompletionsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under PP Completions of ${player.ppPassCompletionsProp.prop}`;
          }
          if (player.ppPassCompletionsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over PP Completions of ${player.ppPassCompletionsProp.prop}`;
          }
          // Pass Yards
          if (player.udPassYardsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under UD Pass Yards of ${player.udPassYardsProp.prop}`;
          }
          if (player.udPassYardsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over UD Pass Yards of ${player.udPassYardsProp.prop}`;
          }
          if (player.ppPassYardsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under PP Pass Yards of ${player.ppPassYardsProp.prop}`;
          }
          if (player.ppPassYardsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over PP Pass Yards of ${player.ppPassYardsProp.prop}`;
          }
          // Pass TDs
          if (player.udPassTDsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under UD Pass TDs of ${player.udPassTDsProp.prop}`;
          }
          if (player.udPassTDsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over UD Pass TDs of ${player.udPassTDsProp.prop}`;
          }
          if (player.ppPassTDsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under PP Pass TDs of ${player.ppPassTDsProp.prop}`;
          }
          if (player.ppPassTDsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over PP Pass TDs of ${player.ppPassTDsProp.prop}`;
          }
          // Rush Yards
          if (player.udRushYardsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under UD Rush Yards of ${player.udRushYardsProp.prop}`;
          }
          if (player.udRushYardsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over UD Rush Yards of ${player.udRushYardsProp.prop}`;
          }
          if (player.ppRushYardsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under PP Rush Yards of ${player.ppRushYardsProp.prop}`;
          }
          if (player.ppRushYardsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over PP Rush Yards of: ${player.ppRushYardsProp.prop}`;
          }
          // Pass Plus Rush Yards
          if (player.udPassPlusRushYardsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under UD Pass Plus Rush Yards of ${player.udPassPlusRushYardsProp.prop}`;
          }
          if (player.udPassPlusRushYardsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over UD Pass Plus Rush Yards of ${player.udPassPlusRushYardsProp.prop}`;
          }
          if (player.ppPassPlusRushYardsProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under PP Pass Plus Rush Yards of ${player.ppPassPlusRushYardsProp.prop}`;
          }
          if (player.ppPassPlusRushYardsProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over PP Pass Plus Rush Yards of ${player.ppPassPlusRushYardsProp.prop}`;
          }
          // Fantasy Score
          if (player.udFantasyScoreProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under UD Fantasy Score of ${player.udFantasyScoreProp.prop}`;
          }
          if (player.udFantasyScoreProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over UD Fantasy Score of ${player.udFantasyScoreProp.prop}`;
          }
          if (player.ppFantasyScoreProp.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under PP Fantasy Score of ${player.ppFantasyScoreProp.prop}`;
          }
          if (player.ppFantasyScoreProp.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over PP Fantasy Score of ${player.ppFantasyScoreProp.prop}`;
          }
        }

        // console.log(player)
        // if(player.propsRecs){
        // console.log(player.name, player.propsRecs)
        // }

        player.pos = 'QB';

        // console.log('before', typeof player.appProjQBRushTDs);

        player.passAttempts = +player.appProjPassAttempts
          ? +player.appProjPassAttempts
          : 0;
        player.completions = +player.appProjCompletions
          ? +player.appProjCompletions
          : 0;
        player.passingYards = +player.appProjPassingYards
          ? +player.appProjPassingYards
          : 0;
        player.passTDs = +player.appProjPassTDs ? +player.appProjPassTDs : 0;
        player.INTs = +player.appProjINTs ? +player.appProjINTs : 0;
        player.carries = +player.appProjQBRushAttempts;
        player.rushYards = +player.appProjQBRushYards;
        player.rushTDs = +player.appProjQBRushTDs;
        player.receptions = +0;
        player.receivingYards = +0;
        player.receivingTDs = +0;
        player.halfFantasyPoints = +player.astroQBProjection;
        player.fullFantasyPoints = +player.astroQBProjection;

        // console.log(
        //   'after',
        //   typeof player.appProjQBRushTDs,
        //   typeof player.rushTDs
        // );

        //

        // console.log(player)

        //     name: obj.name,
        // pos: obj.pos,
        // team: obj.team,
        // PassAttempts: obj.passAttempts,
        // Completions: obj.completions,
        // PassingYards: obj.passingYards,
        // PassTDs: obj.passTDs,
        // INTs: obj.INTs,
        // carries: obj.rushAttempts,
        // rushYards: obj.rushYards,
        // rushTDs: obj.rushTDs,
        // receptions: obj.receptions,
        // receivingYards: obj.receivingYards,
        // receivingTDs: obj.receivingTDs,
        // halfFantasyPoints: obj.halfFantasyPoints,
        // fullFantasyPoints: obj.fullFantasyPoints,
        // recProps: obj.propsRecs
        // console.log(propsqbData)
      }
    } catch (error) {
      console.error('Error in qbFunction:', error);
      return []; // Return empty array if there's an error
    }
  });
  return propsqbData;
}

const rbData = [];

async function someFunction() {
  try {
    const propsrbData = await propsRBData();

    propsrbData.forEach(player => {
      // rbData.push(player)
      if (player.name === 'Kyren Williams' || player.name === 'Joe Mixon') {
        // console.log('RB:', player);
      }

      //

      player.propsRecs = '';
      // console.log( player);
      if (player.name) {
        // pass attempts
        // completions
        // pass yards
        // pass TDs
        // INTs
        // carris
        // rush yards
        // rush TDs

        // receptions
        // receiving yards
        // receiving TDs
        // half fantasy points
        // full fantasy points
        // recommended props

        player.pos = 'RB';
        player.PassAttempts = 0;
        player.Completions = 0;
        player.PassYards = 0;
        player.PassTDs = 0;
        player.INTs = 0;

        // console.log(player)

        //carries

        if (player.udCarriesProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under UD Carries of ${player.udCarriesProp.prop}`;
        }
        if (player.udCarriesProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over UD Carries of ${player.udCarriesProp.prop}`;
        }
        if (player.ppCarriesProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under PP Carries of ${player.ppCarriesProp.prop}`;
        }
        if (player.ppCarriesProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over PP Carries of: ${player.ppCarriesProp.prop}`;
        }

        // Rush Yards
        //
        if (player.udRushYardsProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under UD Rush Yards of ${player.udRushYardsProp.prop}`;
        }
        if (player.udRushYardsProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over UD Rush Yards of ${player.udRushYardsProp.prop}`;
        }
        if (player.ppRushYardsProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under PP Rush Yards of ${player.ppRushYardsProp.prop}`;
        }
        if (player.ppRushYardsProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over PP Rush Yards of: ${player.ppRushYardsProp.prop}`;
        }

        //rush TDs
        //
        if (player.udRushTDsProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under UD Rush TDs of ${player.udRushTDsProp.prop}`;
        }
        if (player.udRushTDsProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over UD Rush TDs of ${player.udRushTDsProp.prop}`;
        }
        if (player.ppRushTDsProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under PP Rush TDs of ${player.ppRushTDsProp.prop}`;
        }
        if (player.ppRushTDsProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over PP Rush TDs of ${player.ppRushTDsProp.prop}`;
        }

        // receptions
        //
        if (player.udReceptionsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under UD Receptions of ${player.udReceptionsProp.prop}`;
        }
        if (player.udReceptionsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over UD Receptions of ${player.udReceptionsProp.prop}`;
        }
        if (player.ppReceptionsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under PP Receptions of ${player.ppReceptionsProp.prop}`;
        }
        if (player.ppReceptionsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over PP Receptions of ${player.ppReceptionsProp.prop}`;
        }

        // receiving yards
        //
        if (player.udReceivingYardsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under UD Receiving Yards of ${player.udReceivingYardsProp.prop}`;
        }
        if (player.udReceivingYardsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over UD Receiving Yards of ${player.udReceivingYardsProp.prop}`;
        }
        if (player.ppReceivingYardsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under PP Receiving Yards of ${player.ppReceivingYardsProp.prop}`;
        }
        if (player.ppReceivingYardsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over PP Receiving Yards of ${player.ppReceivingYardsProp.prop}`;
        }

        // receiving TDs
        //
        if (player.udReceivingTDsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under UD Receiving TDs of ${player.udReceivingTDsProp.prop}`;
        }
        if (player.udReceivingTDsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over UD Receiving TDs of ${player.udReceivingTDsProp.prop}`;
        }
        if (player.ppReceivingTDsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under PP Receiving TDs of ${player.ppReceivingTDsProp.prop}`;
        }
        if (player.ppReceivingTDsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over PP Receiving TDs of ${player.ppReceivingTDsProp.prop}`;
        }

        // Fantasy Score
        if (player.udFantasyScoreProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under UD Fantasy Score of ${player.udFantasyScoreProp.prop}`;
        }
        if (player.udFantasyScoreProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over UD Fantasy Score of ${player.udFantasyScoreProp.prop}`;
        }
        if (player.ppFantasyScoreProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under PP Fantasy Score of ${player.ppFantasyScoreProp.prop}`;
        }
        if (player.ppFantasyScoreProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over PP Fantasy Score of ${player.ppFantasyScoreProp.prop}`;
        }
      }

      //

      // console.log(player)
      // if(player.propsRecs){
      //   console.log(player.name, player.propsRecs)
      //   }

      player.passAttempts = 0;
      player.completions = 0;
      player.passingYards = 0;
      player.passTDs = 0;
      player.INTs = 0;
      player.carries = player.appProjectedCarriesThisWeek
        ? player.appProjectedCarriesThisWeek
        : 0;
      player.rushYards = player.appProjectedrushYardsThisWeek
        ? player.appProjectedrushYardsThisWeek
        : 0;
      player.rushTDs = player.appProjectedrushTDsThisWeek
        ? player.appProjectedrushTDsThisWeek
        : 0;
      player.receptions = player.appProjectedreceptionsThisWeek
        ? player.appProjectedreceptionsThisWeek
        : 0;
      player.receivingYards = player.appProjectedrecYardsThisWeek
        ? player.appProjectedrecYardsThisWeek
        : 0;
      player.receivingTDs = player.appProjectedrecTDsThisWeek
        ? player.appProjectedrecTDsThisWeek
        : 0;
      player.halfFantasyPoints = player.astroHalfRBProjection
        ? player.astroHalfRBProjection
        : 0;
      player.fullFantasyPoints = player.astroFullRBProjection
        ? player.astroFullRBProjection
        : 0;

      // console.log(player)

      /// end RB's
    }); // end propsrbData.forEach((player) => {

    return propsrbData;
  } catch (error) {
    console.error('Error in someFunction:', error);
  }
}

// propsWRData
async function wrFunction() {
  try {
    const propsWrData = await propsWRData();

    propsWrData.forEach(player => {
      // console.log(player)
      if (player.name === 'Drake London' || player.name === 'Mike Evans') {
        // console.log('QB:', player);
      }

      //
      //

      player.propsRecs = '';
      // console.log( player);
      if (player.name) {
        // pass attempts
        // completions
        // pass yards
        // pass TDs
        // INTs
        // carris
        // rush yards
        // rush TDs

        // receptions
        // receiving yards
        // receiving TDs
        // half fantasy points
        // full fantasy points
        // recommended props

        player.pos = 'WR';
        player.PassAttempts = 0;
        player.Completions = 0;
        player.PassYards = 0;
        player.PassTDs = 0;
        player.INTs = 0;

        // console.log(player)

        //carries

        if (player.udCarriesProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under UD Carries of ${player.udCarriesProp.prop}`;
        }
        if (player.udCarriesProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over UD Carries of ${player.udCarriesProp.prop}`;
        }
        if (player.ppCarriesProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under PP Carries of ${player.ppCarriesProp.prop}`;
        }
        if (player.ppCarriesProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over PP Carries of: ${player.ppCarriesProp.prop}`;
        }

        // Rush Yards
        //
        if (player.udRushYardsProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under UD Rush Yards of ${player.udRushYardsProp.prop}`;
        }
        if (player.udRushYardsProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over UD Rush Yards of ${player.udRushYardsProp.prop}`;
        }
        if (player.ppRushYardsProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under PP Rush Yards of ${player.ppRushYardsProp.prop}`;
        }
        if (player.ppRushYardsProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over PP Rush Yards of: ${player.ppRushYardsProp.prop}`;
        }

        //rush TDs
        //
        if (player.udRushTDsProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under UD Rush TDs of ${player.udRushTDsProp.prop}`;
        }
        if (player.udRushTDsProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over UD Rush TDs of ${player.udRushTDsProp.prop}`;
        }
        if (player.ppRushTDsProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under PP Rush TDs of ${player.ppRushTDsProp.prop}`;
        }
        if (player.ppRushTDsProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over PP Rush TDs of ${player.ppRushTDsProp.prop}`;
        }

        // receptions
        //
        if (player.udReceptionsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under UD Receptions of ${player.udReceptionsProp.prop}`;
        }
        if (player.udReceptionsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over UD Receptions of ${player.udReceptionsProp.prop}`;
        }
        if (player.ppReceptionsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under PP Receptions of ${player.ppReceptionsProp.prop}`;
        }
        if (player.ppReceptionsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over PP Receptions of ${player.ppReceptionsProp.prop}`;
        }

        // receiving yards
        //
        if (player.udReceivingYardsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under UD Receiving Yards of ${player.udReceivingYardsProp.prop}`;
        }
        if (player.udReceivingYardsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over UD Receiving Yards of ${player.udReceivingYardsProp.prop}`;
        }
        if (player.ppReceivingYardsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under PP Receiving Yards of ${player.ppReceivingYardsProp.prop}`;
        }
        if (player.ppReceivingYardsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over PP Receiving Yards of ${player.ppReceivingYardsProp.prop}`;
        }

        // receiving TDs
        //
        if (player.udReceivingTDsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under UD Receiving TDs of ${player.udReceivingTDsProp.prop}`;
        }
        if (player.udReceivingTDsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over UD Receiving TDs of ${player.udReceivingTDsProp.prop}`;
        }
        if (player.ppReceivingTDsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under PP Receiving TDs of ${player.ppReceivingTDsProp.prop}`;
        }
        if (player.ppReceivingTDsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over PP Receiving TDs of ${player.ppReceivingTDsProp.prop}`;
        }

        //rush plus recieving yards
        //
        if (player.udRushPlusReceivingYardsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under UD Rush Plus Receiving Yards of ${player.udRushPlusReceivingYardsProp.prop}`;
        }
        if (player.udRushPlusReceivingYardsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over UD Rush Plus Receiving Yards of ${player.udRushPlusReceivingYardsProp.prop}`;
        }
        if (player.ppRushPlusReceivingYardsProp?.isUnderRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Under PP Rush Plus Receiving Yards of ${player.ppRushPlusReceivingYardsProp.prop}`;
        }
        if (player.ppRushPlusReceivingYardsProp?.isOverRecomended) {
          // console.log(player.name)
          player.propsRecs = `${player.propsRecs} -- Over PP Rush Plus Receiving Yards of ${player.ppRushPlusReceivingYardsProp.prop}`;
        }

        // Fantasy Score
        if (player.udFantasyScoreProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under UD Fantasy Score of ${player.udFantasyScoreProp.prop}`;
        }
        if (player.udFantasyScoreProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over UD Fantasy Score of ${player.udFantasyScoreProp.prop}`;
        }
        if (player.ppFantasyScoreProp?.isUnderRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Under PP Fantasy Score of ${player.ppFantasyScoreProp.prop}`;
        }
        if (player.ppFantasyScoreProp?.isOverRecomended) {
          // console.log(player.name)

          player.propsRecs = `${player.propsRecs} -- Over PP Fantasy Score of ${player.ppFantasyScoreProp.prop}`;
        }
      }

      //

      // console.log(player)

      player.passAttempts = 0;
      player.completions = 0;
      player.passingYards = 0;
      player.passTDs = 0;
      player.INTs = 0;
      player.carries = player.appProjectedCarriesThisWeek
        ? player.appProjectedCarriesThisWeek
        : 0;
      player.rushYards = player.appProjectedrushYardsThisWeek
        ? player.appProjectedrushYardsThisWeek
        : 0;
      player.rushTDs = player.appProjectedrushTDsThisWeek
        ? player.appProjectedrushTDsThisWeek
        : 0;
      player.receptions = player.appProjectedreceptionsThisWeek
        ? player.appProjectedreceptionsThisWeek
        : 0;
      player.receivingYards = player.appProjectedrecYardsThisWeek
        ? player.appProjectedrecYardsThisWeek
        : 0;
      player.receivingTDs = player.appProjectedrecTDsThisWeek
        ? player.appProjectedrecTDsThisWeek
        : 0;
      player.halfFantasyPoints = player.astroHalfWRProjection
        ? player.astroHalfWRProjection
        : 0;
      player.fullFantasyPoints = player.astroFullWRProjection
        ? player.astroFullWRProjection
        : 0;

      // console.log(player)
      // end WRs
    }); //

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
      teProjData.forEach(player => {
        if (player.name === 'Travis Kelce' || player.name === 'Brock Bowers') {
          // console.log('TE:', player);
        }

        //
        //

        player.propsRecs = '';
        // console.log( player);
        if (player.name) {
          // pass attempts
          // completions
          // pass yards
          // pass TDs
          // INTs
          // carris
          // rush yards
          // rush TDs

          // receptions
          // receiving yards
          // receiving TDs
          // half fantasy points
          // full fantasy points
          // recommended props

          player.pos = 'TE';
          player.carries = 0;
          player.rushYards = 0;
          player.rushTDs = 0;
          player.PassAttempts = 0;
          player.Completions = 0;
          player.PassYards = 0;
          player.PassTDs = 0;
          player.INTs = 0;

          // console.log(player)

          // receptions
          //
          if (player.udReceptionsProp?.isUnderRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Under UD Receptions of ${player.udReceptionsProp.prop}`;
          }
          if (player.udReceptionsProp?.isOverRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Over UD Receptions of ${player.udReceptionsProp.prop}`;
          }
          if (player.ppReceptionsProp?.isUnderRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Under PP Receptions of ${player.ppReceptionsProp.prop}`;
          }
          if (player.ppReceptionsProp?.isOverRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Over PP Receptions of ${player.ppReceptionsProp.prop}`;
          }

          // receiving yards
          //
          if (player.udReceivingYardsProp?.isUnderRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Under UD Receiving Yards of ${player.udReceivingYardsProp.prop}`;
          }
          if (player.udReceivingYardsProp?.isOverRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Over UD Receiving Yards of ${player.udReceivingYardsProp.prop}`;
          }
          if (player.ppReceivingYardsProp?.isUnderRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Under PP Receiving Yards of ${player.ppReceivingYardsProp.prop}`;
          }
          if (player.ppReceivingYardsProp?.isOverRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Over PP Receiving Yards of ${player.ppReceivingYardsProp.prop}`;
          }

          // receiving TDs
          //
          if (player.udReceivingTDsProp?.isUnderRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Under UD Receiving TDs of ${player.udReceivingTDsProp.prop}`;
          }
          if (player.udReceivingTDsProp?.isOverRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Over UD Receiving TDs of ${player.udReceivingTDsProp.prop}`;
          }
          if (player.ppReceivingTDsProp?.isUnderRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Under PP Receiving TDs of ${player.ppReceivingTDsProp.prop}`;
          }
          if (player.ppReceivingTDsProp?.isOverRecomended) {
            // console.log(player.name)
            player.propsRecs = `${player.propsRecs} -- Over PP Receiving TDs of ${player.ppReceivingTDsProp.prop}`;
          }

          // Fantasy Score
          if (player.udFantasyScoreProp?.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under UD Fantasy Score of ${player.udFantasyScoreProp.prop}`;
          }
          if (player.udFantasyScoreProp?.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over UD Fantasy Score of ${player.udFantasyScoreProp.prop}`;
          }
          if (player.ppFantasyScoreProp?.isUnderRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Under PP Fantasy Score of ${player.ppFantasyScoreProp.prop}`;
          }
          if (player.ppFantasyScoreProp?.isOverRecomended) {
            // console.log(player.name)

            player.propsRecs = `${player.propsRecs} -- Over PP Fantasy Score of ${player.ppFantasyScoreProp.prop}`;
          }
        }

        //

        // console.log(player)

        player.passAttempts = 0;
        player.completions = 0;
        player.passingYards = 0;
        player.passTDs = 0;
        player.INTs = 0;
        player.carries = player.appProjectedCarriesThisWeek
          ? player.appProjectedCarriesThisWeek
          : 0;
        player.rushYards = player.appProjectedrushYardsThisWeek
          ? player.appProjectedrushYardsThisWeek
          : 0;
        player.rushTDs = player.appProjectedrushTDsThisWeek
          ? player.appProjectedrushTDsThisWeek
          : 0;
        player.receptions = player.appProjectedreceptionsThisWeek
          ? player.appProjectedreceptionsThisWeek
          : 0;
        player.receivingYards = player.appProjectedrecYardsThisWeek
          ? player.appProjectedrecYardsThisWeek
          : 0;
        player.receivingTDs = player.appProjectedrecTDsThisWeek
          ? player.appProjectedrecTDsThisWeek
          : 0;
        player.halfFantasyPoints = player.astroHalfWRProjection
          ? player.astroHalfWRProjection
          : 0;
        player.fullFantasyPoints = player.astroFullWRProjection
          ? player.astroFullWRProjection
          : 0;

        // console.log(player.receptions)
        // console.log(player)

        //

        // end TE's
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
  let qbData = await qbFunction();
  let data = await someFunction();
  let wrData = await wrFunction();
  let teData = await teFunction();

  // console.log(qbData)
  const qbplayerMap = new Map();

  qbData.forEach(player => {
    // Group all objects for the same player
    const playerObjects = qbData.filter(p => p.name === player.name);
    // Get only the most recent object
    const mostRecentObject = playerObjects[playerObjects.length - 1];

    // Store in map (this will automatically override any previous entry for this player)
    qbplayerMap.set(player.name, mostRecentObject);
  });

  // Convert map values back to array - this will have only the most recent object for each player
  qbData = Array.from(qbplayerMap.values());

  //
  // console.log(data)
  // Create a map to store the most recent object for each player
  const playerMap = new Map();

  data.forEach(player => {
    // Group all objects for the same player
    const playerObjects = data.filter(p => p.name === player.name);
    // Get only the most recent object
    const mostRecentObject = playerObjects[playerObjects.length - 1];

    // Store in map (this will automatically override any previous entry for this player)
    playerMap.set(player.name, mostRecentObject);

    if (player.name === 'Kyren Williams' || player.name === 'Joe Mixon') {
      // console.log('RB:', mostRecentObject);
    }
  });

  // Convert map values back to array - this will have only the most recent object for each player
  data = Array.from(playerMap.values());

  //
  const wrplayerMap = new Map();

  wrData.forEach(player => {
    // Group all objects for the same player
    const playerObjects = wrData.filter(p => p.name === player.name);
    // Get only the most recent object
    const mostRecentObject = playerObjects[playerObjects.length - 1];

    // Store in map (this will automatically override any previous entry for this player)
    wrplayerMap.set(player.name, mostRecentObject);

    if (player.name === 'Drake London' || player.name === 'Mike Evans') {
      // console.log('RB:', mostRecentObject);
    }
  });

  // Convert map values back to array - this will have only the most recent object for each player
  wrdata = Array.from(wrplayerMap.values());

  // console.log(wrdata)

  const teplayerMap = new Map();

  teData.forEach(player => {
    // Group all objects for the same player
    const playerObjects = teData.filter(p => p.name === player.name);
    // Get only the most recent object
    const mostRecentObject = playerObjects[playerObjects.length - 1];

    // Store in map (this will automatically override any previous entry for this player)
    teplayerMap.set(player.name, mostRecentObject);

    if (player.name === 'Travis Kelce' || player.name === 'Brock Bowers') {
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
  let qbProjectionArray = qbData;
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

  let allAstroProjectionsArray = [
    ...qbProjectionArray,
    ...rbProjectionArray,
    ...wrProjectionArray,
    ...teProjectionsArray,
  ];

  // console.log(qbProjectionArray)
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

  qbProjectionArray = qbProjectionArray.filter(
    (obj1, i, arr) => arr.findIndex(obj2 => obj2.name === obj1.name) === i
  );

  rbProjectionArray = rbProjectionArray.filter(
    (obj1, i, arr) => arr.findIndex(obj2 => obj2.name === obj1.name) === i
  );

  wrProjectionArray = wrProjectionArray.filter(
    (obj1, i, arr) => arr.findIndex(obj2 => obj2.name === obj1.name) === i
  );

  teProjectionsArray = teProjectionsArray.filter(
    (obj1, i, arr) => arr.findIndex(obj2 => obj2.name === obj1.name) === i
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
    // console.log(obj)
    return {
      name: obj.name,
      pos: obj.pos,
      team: obj.team,
      appFullProjectedPoints: obj.appFullProjectedPoints,
      PassAttempts: obj.appProjPassAttempts,
      Completions: obj.appProjCompletions,
      PassingYards: obj.appProjPassingYards,
      PassTDs: obj.appProjPassTDs,
      INTs: obj.appProjINTs,
      carries: obj.appProjQBRushAttempts,
      rushYards: obj.appProjQBRushYards,
      rushTDs: obj.appProjQBRushTDs,
      targets: 0,
      receptions: 0,
      receivingYards: 0,
      receivingTDs: 0,
      halfFantasyPoints: obj.astroQBProjection,
      fullFantasyPoints: obj.astroQBProjection,
      // astroSixPtTDQBProjection: obj.astroSixPtTDQBProjection,
      recProps: obj.propsRecs,
    };
  });

  // ````     pass attempts
  // completions
  // pass yards
  // pass TDs
  // INTs
  // carries
  // rush yards
  // rush TDs
  // targets
  // receptions
  // receiving yards
  // receiving TDs
  // half fantasy points
  // full fantasy points
  // recommended props

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
      appProjectedrushFirstDownsThisWeek:
        obj.appProjectedrushFirstDownsThisWeek,
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
      appProjectedrushFirstDownsThisWeek:
        obj.appProjectedrushFirstDownsThisWeek,
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
      appProjectedrushFirstDownsThisWeek:
        obj.appProjectedrushFirstDownsThisWeek,
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

  //
  astroCSVArray = allAstroProjectionsArray.map(obj => {
    // if (obj.propsRecs) {
    //   console.log(obj.name, obj.propsRecs)
    // }
    return {
      name: obj.name,
      pos: obj.pos,
      team: obj.team,
      PassAttempts: +obj.passAttempts,
      Completions: +obj.completions,
      PassingYards: +obj.passingYards,
      PassTDs: +obj.passTDs,
      INTs: +obj.INTs,
      carries: +obj.carries,
      rushYards: +obj.rushYards,
      rushTDs: +obj.rushTDs,
      receptions: +obj.receptions,
      receivingYards: +obj.receivingYards,
      receivingTDs: +obj.receivingTDs,
      halfFantasyPoints: +obj.halfFantasyPoints,
      fullFantasyPoints: +obj.fullFantasyPoints,
      recProps: obj.propsRecs,
    };
  });

  // ````     pass attempts
  // completions
  // pass yards
  // pass TDs
  // INTs
  // carries
  // rush yards
  // rush TDs
  // targets
  // receptions
  // receiving yards
  // receiving TDs
  // half fantasy points
  // full fantasy points
  // recommended props

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
      fs.writeFileSync('week16-24-earlyAstroflexProjectionArray.csv', csv);
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
  // arrayToCSV(astroCSVArray);
  //
  //

  // console.log(allProjectionsArray);

  async function runAstroProjections() {
    try {
      await client.connect();

      const db = client.db(dbName);

      // Use the collection "people"
      const col = db.collection('astroProjections');
      console.log('runAstroProjections connected');
      // Construct a document
      let allProjections = {
        astroCSVArray: astroCSVArray,
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

  //

  async function runAllProjections() {
    try {
      await client.connect();

      const db = client.db(dbName);

      // Use the collection "people"
      const col = db.collection('allProjections');
      console.log('runAllProjections connected');
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
  // runAstroProjections().catch(console.dir);

  //

  // runAllProjections().catch(console.dir);
}
processData();
