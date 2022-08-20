'use strict';

const allQBData = require('../qbValuesCalcs');
const allRBData = require('../rbValuesCalcs');
const allWRData = require('../wrValuesCalcs');
const allTEData = require('../teValuesCalcs');
const allQBs = require('../../teamandpositionvariables/allQBVariables');
const allRBs = require('../../teamandpositionvariables/allRBVariables');
const allWRs = require('../../teamandpositionvariables/allWRVariables');
const allTEs = require('../../teamandpositionvariables/allTEVariables');

const allTeamsBestHalfSingleStackWithQB = [];
const allTeamsBestHalfSingleStackWithQBWithNames = [];

const allTeamsBestPPRSingleStackWithQB = [];
const allTeamsBestPPRSingleStackWithQBWithNames = [];

const allTEPremiumBestSingleStackWithQB = [];
const allTEPremiumBestSingleStackWithQBWithNames = [];

const halfDKBestTeamQBWROneStackspointsperdollar = [];
const halfFDBestTeamQBWROneStackspointsperdollar = [];
const halfYahooBestTeamQBWROneStackspointsperdollar = [];

const fullDKBestTeamQBWROneStackspointsperdollar = [];
const fullFDBestTeamQBWROneStackspointsperdollar = [];
const fullYahooBestTeamQBWROneStackspointsperdollar = [];

const TEPDKBestTeamQBWROneStackspointsperdollar = [];
const TEPFDBestTeamQBWROneStackspointsperdollar = [];
const TEPYahooBestTeamQBWROneStackspointsperdollar = [];

const CalcTeamBestSingleStackWithQB = function (array, i) {
  // console.log(array);
  let [qb, rbOne, rbTwo, wrOne, wrTwo, te] = array;

  let qbrbOne = qb + rbOne;
  let qbrbTwo = qb + rbTwo;
  let qbwrOne = qb + wrOne;
  let qbwrTwo = qb + wrTwo;
  let qbte = qb + te;

  let qbrbOneWithNames = `${qbrbOne}: QB-RB1- ${allQBs[i].name}-${allRBs[i].RBOne.name}`;
  let qbrbTwoWithNames = `${qbrbTwo}: QB-RB2- ${allQBs[i].name}-${allRBs[i].RBTwo.name}`;
  let qbwrOneWithNames = `${qbwrOne}: QB-WR1- ${allQBs[i].name}-${allWRs[i].WROne.name}`;
  let qbwrTwoWithNames = `${qbwrTwo}: QB-WR2- ${allQBs[i].name}-${allWRs[i].WRTwo.name}`;
  let qbteWithNames = `${+qbte.toFixed(2)}: QB-TE- ${allQBs[i].name}-${
    allTEs[i].TE.name
  }`;

  let bestSingleStackWithQB = qbrbOne;
  let bestSingleStackWithQBAndNames = qbrbOneWithNames;

  //best single stack
  if (bestSingleStackWithQB < qbrbTwo) {
    bestSingleStackWithQB = qbrbTwo;
    bestSingleStackWithQBAndNames = qbrbTwoWithNames;
  }
  if (bestSingleStackWithQB < qbwrOne) {
    bestSingleStackWithQB = qbwrOne;
    bestSingleStackWithQBAndNames = qbwrOneWithNames;
  }
  if (bestSingleStackWithQB < qbwrTwo) {
    bestSingleStackWithQB = qbwrTwo;
    bestSingleStackWithQBAndNames = qbwrTwoWithNames;
  }
  if (bestSingleStackWithQB < qbte) {
    bestSingleStackWithQB = qbte;
    bestSingleStackWithQBAndNames = qbteWithNames;
  }

  //projected points per dollar

  let qbDKSalary = allQBs[i].draftkingsSalary;
  let qbFDSalary = allQBs[i].fanduelSalary;
  let qbYahooSalary = allQBs[i].yahooSalary;

  let rbOneDKSalary = allRBs[i].RBOne.draftkingsSalary;
  let rbOneFDSalary = allRBs[i].RBOne.fanduelSalary;
  let rbOneYahooSalary = allRBs[i].RBOne.yahooSalary;

  let rbTwoDKSalary = allRBs[i].RBTwo.draftkingsSalary;
  let rbTwoFDSalary = allRBs[i].RBTwo.fanduelSalary;
  let rbTwoYahooSalary = allRBs[i].RBTwo.yahooSalary;

  let wrOneDKSalary = allWRs[i].WROne.draftkingsSalary;
  let wrOneFDSalary = allWRs[i].WROne.fanduelSalary;
  let wrOneYahooSalary = allWRs[i].WROne.yahooSalary;

  //   console.log(wrOneYahooSalary);

  if (rbOne === allRBData.allRBOneHalfPPRProjectedPointsValues[i]) {
    allTeamsBestHalfSingleStackWithQB.push(bestSingleStackWithQB);
    allTeamsBestHalfSingleStackWithQBWithNames.push(
      bestSingleStackWithQBAndNames
    );
  }
  if (
    rbOne === allRBData.allRBOneFullPPRProjectedPointsValues[i] &&
    te === allTEData.allFullTEFinalProjectedPointsValues[i]
  ) {
    allTeamsBestPPRSingleStackWithQB.push(bestSingleStackWithQB);
    allTeamsBestPPRSingleStackWithQBWithNames.push(
      bestSingleStackWithQBAndNames
    );
  }
  if (te === allTEData.allTEPremiuimFinalProjectedPointsValues[i]) {
    allTEPremiumBestSingleStackWithQB.push(bestSingleStackWithQB);
    allTEPremiumBestSingleStackWithQBWithNames.push(
      bestSingleStackWithQBAndNames
    );
  }
};

allQBData.allQBFinalProjectedPointsValues.map(function (value, i) {
  let qb = value;
  let rbOneHalf = allRBData.allRBOneHalfPPRProjectedPointsValues[i];
  let rbTwoHalf = allRBData.allRBTwoHalfPPRProjectedPointsValues[i];
  let wrOneHalf = allWRData.allHalfWROneFinalProjectedPointsValues[i];
  let wrTwoHalf = allWRData.allHalfWRTwoFinalProjectedPointsValues[i];
  let teHalf = allTEData.allHalfTEFinalProjectedPointsValues[i];

  let rbOnePPR = allRBData.allRBOneFullPPRProjectedPointsValues[i];
  let rbTwoPPR = allRBData.allRBTwoFullPPRProjectedPointsValues[i];
  let wrOnePPR = allWRData.allFullWROneFinalProjectedPointsValues[i];
  let wrTwoPPR = allWRData.allFullWRTwoFinalProjectedPointsValues[i];
  let tePPR = allTEData.allFullTEFinalProjectedPointsValues[i];
  let teTEPremium = allTEData.allTEPremiuimFinalProjectedPointsValues[i];

  let halfArray = [qb, rbOneHalf, rbTwoHalf, wrOneHalf, wrTwoHalf, teHalf];
  let fullArray = [qb, rbOnePPR, rbTwoPPR, wrOnePPR, wrTwoPPR, tePPR];
  let TEPremiumArray = [
    qb,
    rbOnePPR,
    rbTwoPPR,
    wrOnePPR,
    wrTwoPPR,
    teTEPremium,
  ];

  const bestHalfTeamSingleStackWithQB = CalcTeamBestSingleStackWithQB(
    halfArray,
    i
  );

  const bestPPRTeamSingleStackWithQB = CalcTeamBestSingleStackWithQB(
    fullArray,
    i
  );

  const bestTEPremiumTeamSingleStackWithQB = CalcTeamBestSingleStackWithQB(
    TEPremiumArray,
    i
  );
});

const bestTeamSingleStackWithQB = {
  allTeamsBestHalfSingleStackWithQB: allTeamsBestHalfSingleStackWithQB,
  allTeamsBestHalfSingleStackWithQBWithNames:
    allTeamsBestHalfSingleStackWithQBWithNames,
  // sortedAllHalfQBWROneStacks: sortedAllHalfQBWROneStacks,
  allTeamsBestPPRSingleStackWithQB: allTeamsBestPPRSingleStackWithQB,
  allTeamsBestPPRSingleStackWithQBWithNames:
    allTeamsBestPPRSingleStackWithQBWithNames,
  allTEPremiumBestSingleStackWithQB: allTEPremiumBestSingleStackWithQB,
  allTEPremiumBestSingleStackWithQBWithNames:
    allTEPremiumBestSingleStackWithQBWithNames,
};

module.exports = bestTeamSingleStackWithQB;
