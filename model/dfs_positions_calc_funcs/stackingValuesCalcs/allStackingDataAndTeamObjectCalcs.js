'use strict';

const allQBData = require('../qbValuesCalcs');
const allRBData = require('../rbValuesCalcs');
const allWRData = require('../wrValuesCalcs');
const allTEData = require('../teValuesCalcs');
const allQBs = require('../../teamandpositionvariables/allQBVariables');
const allRBs = require('../../teamandpositionvariables/allRBVariables');
const allWRs = require('../../teamandpositionvariables/allWRVariables');
const allTEs = require('../../teamandpositionvariables/allTEVariables');
const allTeams = require('../../teamandpositionvariables/allTeamLevelVariables');

/////the back to front plan for all of this at the bottom of this file!!!!!!!

//first thing you should do is look to your old stackingValuesCalcs.js file and go ahead and define all possible triple stack combinations to their variables and construct and define all triple stack arrays in the allQBData.allQBFinalProjectedPointsValues.map below so that all you have to do in the calcAllStackData function is destructure the arrays that are being passed into it as params. more on how to do this and what to do in the top comment of the allQBData.allQBFinalProjectedPointsValues.map

// below is the function that will contain the destructureing of the arrays passed into it, create/define the constructor function then loop over it
const allTeamsHalfSingleStacks = [];

const calcAllStackData = function (array, scoring, i) {
  // const arr = [2, 6, 4, 3];

  const arr = array;
  const n = 2;
  const buildCombinations = (arr, num) => {
    const res = [];

    let temp,
      i,
      j,
      max = 1 << arr.length;

    for (i = 0; i < max; i++) {
      temp = [];
      for (j = 0; j < arr.length; j++) {
        if (i & (1 << j)) {
          temp.push(arr[j]);
        }
      }

      if (temp.length === num) {
        if (scoring === 'half') {
          res.push(
            temp.reduce(function (a, b) {
              return +(a + b).toFixed(4);
            })
          );
        }
      }
    }

    let sortedRes = res.sort((a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
    });

    return res;
  };
  // buildCombinations(arr, n);
  console.log(buildCombinations(arr, n));

  // console.log(allTeamsHalfSingleStacks);

  //first destructure array passed in as param and define any other variables for any other data that will be needed in here

  //after everything has been defined and assigned its variables define and build the constructor function here before the forEach loop

  //below is defining the map that all of the team objects should be put into. I want to create an array of all
  //team objects as well as this map of all team objects so I have access to and the option to use either later
  const allTeamDataObjectsWithStacksDataMap = new Map();

  allTeams.forEach(function (team) {
    //in here loop over the constructor function and pass a team in each interation and construct their entire team object from the plan using the constructor function. refer tp the defValuesCalcs for help and guidance here
    //also in this loop but outside of the constructor function stuff push to and populate all arrays that contain the data for every team from the plan i.e the array that holds every single projected points value for every single possible single stack with QB from every single team
  });
};

allQBData.allQBFinalProjectedPointsValues.map(function (value, i) {
  //////////////
  //first thing you should do is look to your old stackingValuesCalcs and go ahead and define all triple stack variables here so that all you have to do in the calcAllStackData function is destructure!!!!!!!!!!!!!!!!!!, go ahead and build the half, PPR, and TEPremium arrays for triple stacks in here as well like you are already doing for the double stack arrays and pass those into the calcAllStackData function. define everything possible in here. not sure yet how or if I want to do the with names arrays/stuff yet but define everything you possibly can in here
  //////////////

  // let qb = `${value}: ${allQBs[i].name}`;
  let qb = value;
  let rbOneHalf = allRBData.allRBOneHalfPPRProjectedPointsValues[i];
  let rbTwoHalf = allRBData.allRBTwoHalfPPRProjectedPointsValues[i];
  let wrOneHalf = allWRData.allHalfWROneFinalProjectedPointsValues[i];
  let wrTwoHalf = allWRData.allHalfWRTwoFinalProjectedPointsValues[i];
  let wrThreeHalf = allWRData.allHalfWRThreeFinalProjectedPointsValues[i];
  let teHalf = allTEData.allHalfTEFinalProjectedPointsValues[i];

  let rbOnePPR = allRBData.allRBOneFullPPRProjectedPointsValues[i];
  let rbTwoPPR = allRBData.allRBTwoFullPPRProjectedPointsValues[i];
  let wrOnePPR = allWRData.allFullWROneFinalProjectedPointsValues[i];
  let wrTwoPPR = allWRData.allFullWRTwoFinalProjectedPointsValues[i];
  let wrThreePPR = allWRData.allFullWRThreeFinalProjectedPointsValues[i];
  let tePPR = allTEData.allFullTEFinalProjectedPointsValues[i];
  let teTEPremium = allTEData.allTEPremiuimFinalProjectedPointsValues[i];

  let opposingRBOneHalf = 0;
  let opposingRBTwoHalf = 0;
  let opposingWROneHalf = 0;
  let opposingWRTwohalf = 0;
  let opposingWRThreehalf = 0;
  let opposingTEHalf = 0;
  let opposingRBOnePPR = 0;
  let opposingRBTwoPPR = 0;
  let opposingWROnePPR = 0;
  let opposingWRTwoPPR = 0;
  let opposingWRThreePPR = 0;
  let opposingTEPPR = 0;
  let opposingTEPremium = 0;

  if (i % 2 === 1) {
    opposingRBOneHalf = allRBData.allRBOneHalfPPRProjectedPointsValues[i - 1];
    opposingRBTwoHalf = allRBData.allRBTwoHalfPPRProjectedPointsValues[i - 1];
    opposingWROneHalf = allWRData.allHalfWROneFinalProjectedPointsValues[i - 1];
    opposingWRTwohalf = allWRData.allHalfWRTwoFinalProjectedPointsValues[i - 1];
    opposingWRThreehalf =
      allWRData.allHalfWRThreeFinalProjectedPointsValues[i - 1];
    opposingTEHalf = allTEData.allHalfTEFinalProjectedPointsValues[i - 1];

    opposingRBOnePPR = allRBData.allRBOneFullPPRProjectedPointsValues[i - 1];
    let opposingRBTwoPPR =
      allRBData.allRBTwoFullPPRProjectedPointsValues[i - 1];
    opposingWROnePPR = allWRData.allFullWROneFinalProjectedPointsValues[i - 1];
    opposingWRTwoPPR = allWRData.allFullWRTwoFinalProjectedPointsValues[i - 1];
    opposingWRThreePPR =
      allWRData.allFullWRThreeFinalProjectedPointsValues[i - 1];
    opposingTEPPR = allTEData.allFullTEFinalProjectedPointsValues[i - 1];
    opposingTEPremium =
      allTEData.allTEPremiuimFinalProjectedPointsValues[i - 1];

    // let oppRBOneName = allRBs[i - 1].RBOne.name;
    // let oppRBTwoName = allRBs[i - 1].RBTwo.name;
    // let oppWROneName = allWRs[i - 1].WROne.name;
    // let oppWRTwoName = allWRs[i - 1].WRTwo.name;
    // let oppWRThreeName = allWRs[i - 1].WRThree.name;
    // let oppteName = allTEs[i - 1].TE.name;
  } else {
    opposingRBOneHalf = allRBData.allRBOneHalfPPRProjectedPointsValues[i + 1];
    opposingRBTwoHalf = allRBData.allRBTwoHalfPPRProjectedPointsValues[i + 1];
    opposingWROneHalf = allWRData.allHalfWROneFinalProjectedPointsValues[i + 1];
    opposingWRTwohalf = allWRData.allHalfWRTwoFinalProjectedPointsValues[i + 1];
    opposingWRThreehalf =
      allWRData.allHalfWRThreeFinalProjectedPointsValues[i + 1];
    opposingTEHalf = allTEData.allHalfTEFinalProjectedPointsValues[i + 1];

    opposingRBOnePPR = allRBData.allRBOneFullPPRProjectedPointsValues[i + 1];
    opposingRBTwoPPR = allRBData.allRBTwoFullPPRProjectedPointsValues[i + 1];
    opposingWROnePPR = allWRData.allFullWROneFinalProjectedPointsValues[i + 1];
    opposingWRTwoPPR = allWRData.allFullWRTwoFinalProjectedPointsValues[i + 1];
    opposingWRThreePPR =
      allWRData.allFullWRThreeFinalProjectedPointsValues[i + 1];
    opposingTEPPR = allTEData.allFullTEFinalProjectedPointsValues[i + 1];
    opposingTEPremium =
      allTEData.allTEPremiuimFinalProjectedPointsValues[i + 1];

    // let oppRBOneName = allRBs[i + 1].RBOne.name;
    // let oppRBTwoName = allRBs[i + 1].RBTwo.name;
    // let oppWROneName = allWRs[i + 1].WROne.name;
    // let oppWRTwoName = allWRs[i + 1].WRTwo.name;
    // let oppWRThreeName = allWRs[i + 1].WRThree.name;
    // let oppteName = allTEs[i + 1].TE.name;
  }

  let halfDoubleStackArray = [
    qb,
    rbOneHalf,
    rbTwoHalf,
    wrOneHalf,
    wrTwoHalf,
    wrThreeHalf,
    teHalf,
    opposingRBOneHalf,
    opposingRBTwoHalf,
    opposingWROneHalf,
    opposingWRTwohalf,
    opposingWRThreehalf,
    opposingTEHalf,

    // oppRBOneName,
    // oppRBTwoName,
    // oppWROneName,
    // oppWRTwoName,
    // oppWRThreeName,
    // oppteName,
  ];

  let PPRDoubleStackArray = [
    qb,
    rbOnePPR,
    rbTwoPPR,
    wrOnePPR,
    wrTwoPPR,
    wrThreePPR,
    tePPR,
    opposingRBOnePPR,
    opposingRBTwoPPR,
    opposingWROnePPR,
    opposingWRTwoPPR,
    opposingWRThreePPR,
    opposingTEPPR,
    // oppRBOneName,
    // oppRBTwoName,
    // oppWROneName,
    // oppWRTwoName,
    // oppWRThreeName,
    // oppteName,
  ];

  let TEPremiumDoubleStackArray = [
    qb,
    rbOnePPR,
    rbTwoPPR,
    wrOnePPR,
    wrTwoPPR,
    wrThreePPR,
    teTEPremium,
    opposingRBOnePPR,
    opposingRBTwoPPR,
    opposingWROnePPR,
    opposingWRTwoPPR,
    opposingWRThreePPR,
    opposingTEPremium,
    // oppRBOneName,
    // oppRBTwoName,
    // oppWROneName,
    // oppWRTwoName,
    // oppWRThreeName,
    // oppteName,
  ];

  // const allHalfDoubleStackWithQBAndQBsWROne =
  calcAllStackData(halfDoubleStackArray, 'half');

  // const allPPRDoubleStackWithQBAndQBsWROne =
  // calcAllStackData(PPRDoubleStackArray);

  // // // const allTEPremiumDoubleStackWithQBAndQBsWROne =
  // calcAllStackData(TEPremiumDoubleStackArray);

  // ////assigning all stacks to variables to be used in arrays below

  //double stack combos, need to make list include all possible combos of three players(QB + two others), not just
  //the ones currently below that all include the QB's WROne
  //after whats above is done then need to make that whole list twice, once for half and once PPR
  //
  // let qbwrone = qb + wrOne;

  // let withrbOne = qbwrone + rbOne;
  // let withrbTwo = qbwrone + rbTwo;
  // let withwrTwo = qbwrone + wrTwo;
  // let withte = qbwrone + te;
  // let withopprbOne = qbwrone + opprbOne;
  // let withopprbTwo = qbwrone + opprbTwo;
  // let withoppwrOne = qbwrone + oppwrOne;
  // let withoppwrTwo = qbwrone + oppwrTwo;
  // let withoppte = qbwrone + oppte;

  //triple stack combos,
  //its going to be a lot but this should include all possible combos of a QB + three others from that game
  //also need to make this whole list twice, once for half and once for PPR
  //
  // let rbOneAndrbTwo = withrbOne + rbTwo;
  //   let rbOneAndwrTwo = withrbOne + wrTwo;
  //   let rbOneAndte = withrbOne + te;
  //   let rbOneAndopprbone = withrbOne + opprbOne;
  //   let rbOneAndopprbtwo = withrbOne + opprbTwo;
  //   let rbOneAndoppwrone = withrbOne + oppwrOne;
  //   let rbOneAndoppwrtwo = withrbOne + oppwrTwo;
  //   let rbOneAndoppte = withrbOne + oppte;
  //   let rbTwoAndwrTwo = withrbTwo + wrTwo;
  //   let rbTwoAndte = withrbTwo + te;
  //   let rbTwoAndopprbOne = withrbTwo + opprbOne;
  //   let rbTwoAndopprbTwo = withrbTwo + opprbTwo;
  //   let rbTwoAndoppwrOne = withrbTwo + oppwrOne;
  //   let rbTwoAndoppwrTwo = withrbTwo + oppwrTwo;
  //   let rbTwoAndoppte = withrbTwo + oppte;
  //   let wrTwoAndte = withwrTwo + te;
  //   let wrTwoAndopprbOne = withwrTwo + opprbOne;
  //   let wrTwoAndopprbTwo = withwrTwo + opprbTwo;
  //   let wrTwoAndoppwrOne = withwrTwo + oppwrOne;
  //   let wrTwoAndoppwrTwo = withwrTwo + oppwrTwo;
  //   let wrTwoAndoppte = withwrTwo + oppte;
  //   let teAndopprbOne = withte + opprbOne;
  //   let teAndopprbTwo = withte + opprbTwo;
  //   let teAndoppwrOne = withte + oppwrOne;
  //   let teAndoppwrTwo = withte + oppwrTwo;
  //   let teAndoppte = withte + oppte;
  //   let opprbOneAndopprbTwo = withopprbOne + opprbTwo;
  //   let opprbOneAndoppwrOne = withopprbOne + oppwrOne;
  //   let opprbOneAndoppwrTwo = withopprbOne + oppwrTwo;
  //   let opprbOneAndoppte = withopprbOne + oppte;
  //   let opprbTwoAndoppwrOne = withopprbTwo + oppwrOne;
  //   let opprbTwoAndoppwrTwo = withopprbTwo + oppwrTwo;
  //   let opprbTwoAndoppte = withopprbTwo + oppte;
  //   let oppwrOneAndoppwrTwo = withoppwrOne + oppwrTwo;
  //   let oppwrOneAndoppte = withoppwrOne + oppte;
  //   let oppwrTwoAndoppte = withoppwrTwo + oppte;

  //all the stacking arrays will now need to hold not just the projection for all single players but for all combos for the stack they are from the variables defined above
  //
  // let halfDoubleStackArray = [
  //   qb,
  //   rbOneHalf,
  //   rbTwoHalf,
  //   wrOneHalf,
  //   wrTwoHalf,
  //   wrThreeHalf,
  //   teHalf,
  //   opposingRBOneHalf,
  //   opposingRBTwoHalf,
  //   opposingWROneHalf,
  //   opposingWRTwohalf,
  //   opposingWRThreehalf,
  //   opposingTEHalf,
  //   oppRBOneName,
  //   oppRBTwoName,
  //   oppWROneName,
  //   oppWRTwoName,
  //   oppWRThreeName,
  //   oppteName,
  // ];

  // let PPRDoubleStackArray = [
  //   qb,
  //   rbOnePPR,
  //   rbTwoPPR,
  //   wrOnePPR,
  //   wrTwoPPR,
  //   wrThreePPR,
  //   tePPR,
  //   opposingRBOnePPR,
  //   opposingRBTwoPPR,
  //   opposingWROnePPR,
  //   opposingWRTwoPPR,
  //   opposingWRThreePPR,
  //   opposingTEPPR,
  //   oppRBOneName,
  //   oppRBTwoName,
  //   oppWROneName,
  //   oppWRTwoName,
  //   oppWRThreeName,
  //   oppteName,
  // ];

  // let TEPremiumDoubleStackArray = [
  //   qb,
  //   rbOnePPR,
  //   rbTwoPPR,
  //   wrOnePPR,
  //   wrTwoPPR,
  //   wrThreePPR,
  //   teTEPremium,
  //   opposingRBOnePPR,
  //   opposingRBTwoPPR,
  //   opposingWROnePPR,
  //   opposingWRTwoPPR,
  //   opposingWRThreePPR,
  //   opposingTEPremium,
  //   oppRBOneName,
  //   oppRBTwoName,
  //   oppWROneName,
  //   oppWRTwoName,
  //   oppWRThreeName,
  //   oppteName,
  // ];

  //below is where the function that the arrays defined in here are called witht the arrays defined here passed in as a parameter. obviously the actual functions below are from the old stackingValuesCalcs but this is where you will call the new function with the new arrays from here as params

  // // const allHalfDoubleStackWithQBAndQBsWROne =
  // calcAllStackData(halfDoubleStackArray, i);

  // // const allPPRDoubleStackWithQBAndQBsWROne =
  // calcAllStackData(PPRDoubleStackArray, i);

  // // const allTEPremiumDoubleStackWithQBAndQBsWROne =
  // calcAllStackData(TEPremiumDoubleStackArray, i);
});

module.exports = calcAllStackData;

///////////////////////////////////////////////////////////////////////////////////

//The Plan

//back to front objectives here
//1) what do I want to be sent to the db in the end?
////A) an array of objects; one object for every team, that contains every relevant peice of data about the team
////that I might want to render to any page in the app including:
//////1) team name
//////2) projected points by vegas
//////3a)  full names of QB, RB1, RB2, WR1, WR2, WR3, TE for them that week
//////3b) projected points for QB, RB1, RB2, WR1, WR2, WR3, TE, and team DEF in all three scoring systems
//////4) arrays of total projected points for all possible single stacks with QB in all three scoring systems
//////5) arrays of total price for all possible single stacks with QB on all three sites
//////6) arrays of total projected points per dollar for all possible single stacks with QB on all three sites in all three scoring systems
//////7) arrays for total projected ownership of all possible single stacks with QB on all three sites
//////8) arrays of total projected points for all possible single stacks without QB in all three scoring systems
//////9) arrays of total price for all possible single stacks without QB on all three sites
//////10) arrays of total projected points per dollar for all possible single stacks without QB on all three sites in all three scoring systems
//////11) arrays for total projected ownership of all possible single stacks without QB on all three sites
//////12) arrays of total projected points for all possible double stacks with QB in all three scoring systems
//////13) arrays of total price for all possible double stacks with QB on all three sites
//////14) arrays of total projected points per dollar for all possible double stacks with QB on all three sites in all three scoring systems
//////15) arrays for total projected ownership of all possible double stacks with QB on all three sites
//////16) arrays of total projected points for all possible triple stacks with QB in all three scoring systems
//////17) arrays of total price for all possible triple stacks with QB on all three sites
//////18) arrays of total projected points per dollar for all possible triple stacks with QB on all three sites in all three scoring systems
//////19) arrays for total projected ownership of all possible triple stacks with QB on all three sites

//this array of objects should ALWAYS be in the EXACT same order as every other array (allteams, allQBs, etc...)!1!!!!

////B) arrays outside of the team objects array that hold total projected points for all possbile single stacks with QB, single stacks without QB's, double stacks with QBs, and triple stacks with QBs in all three scoring systems for all teams that week
////C) arrays outside of the team objects array that hold all the total prices for all possible single stacks with QB, single stacks without QB's, double stacks with QBs, and triple stacks with QBs on all three sites for all teams that week
////C) arrays outside of the team objects array that hold all the total projected points per dollar for all possible single stacks with QB, single stacks without QB's, double stacks with QBs, and triple stacks with QBs on all three sites and in all three scoring systems for all teams that week
////C) arrays outside of the team objects array that holds all the total projected ownership for all possible single stacks with QB, single stacks without QB's, double stacks with QBs, and triple stacks with QBs on all three sites for all teams that week

//2) look to your defValuesCalcs.js file for how to do this step. make a constructor function that will take in all the relevant data and make methods inside of the constructor function that will do all the calulations that need to be done to get all the data above and populate all the arrays above. you will then loop of allTeams (again look to defValuesCalcs for an example of this) and inside of that loop assign all varibles needed, loop over the constructor function so it is called for every team and then after and outside of the constructor function call but still inside the loop populate the arrays for every single possible stack for every single team. when this loop is done every single thing in the list of things you want sent to the db above should be done

//3) use the exact same logic and loops and building of and passing arrays in as parameters into a loops function call that you used in stackingValuesCalcs.js to assign all positions and all possible stack combinations for all teams. seriously copy and paste your logic from there. this will be the first step. you will use all of the assigned variables in the step above
//
//
//
