'use strict';

const allQBData = require('../qbValuesCalcs');
const allRBData = require('../rbValuesCalcs');
const allWRData = require('../wrValuesCalcs');
const allTEData = require('../teValuesCalcs');
const allQBs = require('../../teamandpositionvariables/allQBVariables');
const allRBs = require('../../teamandpositionvariables/allRBVariables');
const allWRs = require('../../teamandpositionvariables/allWRVariables');
const allTEs = require('../../teamandpositionvariables/allTEVariables');
const { lookupService } = require('dns');

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
