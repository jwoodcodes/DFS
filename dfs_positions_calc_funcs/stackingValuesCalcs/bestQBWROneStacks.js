'use strict';

const allQBData = require('../qbValuesCalcs');
const allRBData = require('../rbValuesCalcs');
const allWRData = require('../wrValuesCalcs');
const allTEData = require('../teValuesCalcs');
const allQBs = require('../../teamandpositionvariables/allQBVariables');
const allRBs = require('../../teamandpositionvariables/allRBVariables');
const allWRs = require('../../teamandpositionvariables/allWRVariables');
const allTEs = require('../../teamandpositionvariables/allTEVariables');

const allHalfQBWROneStacks = [];
const allHalfQBWROneStackWithNames = [];
const allPPRQBWROneStacks = [];
const allPPRQBWROneStacksWithNames = [];

const halfDKBestQBWROneStackspointsperdollar = [];
const halfFDBestQBWROneStackspointsperdollar = [];
const halfYahooBestQBWROneStackspointsperdollar = [];

const fullDKBestQBWROneStackspointsperdollar = [];
const fullFDBestQBWROneStackspointsperdollar = [];
const fullYahooBestQBWROneStackspointsperdollar = [];

allQBData.allQBFinalProjectedPointsValues.map(function (team, i) {
  let qb = team;
  let wrOneHalf = allWRData.allHalfWROneFinalProjectedPointsValues[i];
  let wrOneFull = allWRData.allFullWROneFinalProjectedPointsValues[i];

  let qbwrOneHalf = qb + wrOneHalf;
  let qbwrOneHalfWithNames = `${qbwrOneHalf}: ${allQBs[i].name}-${allWRs[i].WROne.name}`;
  let qbwrOneFull = qb + wrOneFull;
  let qbwrOneFullWithNames = `${qbwrOneFull}: ${allQBs[i].name}-${allWRs[i].WROne.name}`;

  allHalfQBWROneStacks.push(qbwrOneHalf);
  allHalfQBWROneStackWithNames.push(qbwrOneHalfWithNames);

  allPPRQBWROneStacks.push(qbwrOneFull);
  allPPRQBWROneStacksWithNames.push(qbwrOneFullWithNames);

  /////points per doller

  let qbDKSalary = allQBs[i].draftkingsSalary;
  let qbFDSalary = allQBs[i].fanduelSalary;
  let qbYahooSalary = allQBs[i].yahooSalary;

  let wrOneDKSalary = allWRs[i].WROne.draftkingsSalary;
  let wrOneFDSalary = allWRs[i].WROne.fanduelSalary;
  let wrOneYahooSalary = allWRs[i].WROne.yahooSalary;

  /////half ppr p/d

  let halfDKtotalprojpointsperdollar =
    qbwrOneHalf / (qbDKSalary + wrOneDKSalary);
  let halfFDtotalprojpointsperdollar =
    qbwrOneHalf / (qbFDSalary + wrOneFDSalary);
  let halfYahoototalprojpointsperdollar =
    qbwrOneHalf / (qbYahooSalary + wrOneYahooSalary);

  halfDKBestQBWROneStackspointsperdollar.push(
    +halfDKtotalprojpointsperdollar.toFixed(5)
  );
  halfFDBestQBWROneStackspointsperdollar.push(
    +halfFDtotalprojpointsperdollar.toFixed(5)
  );
  halfYahooBestQBWROneStackspointsperdollar.push(
    +halfYahoototalprojpointsperdollar.toFixed(4)
  );

  ///Full PPR p/d
  let fullDKtotalprojpointsperdollar =
    qbwrOneFull / (qbDKSalary + wrOneDKSalary);
  let fullFDtotalprojpointsperdollar =
    qbwrOneFull / (qbFDSalary + wrOneFDSalary);
  let fullYahoototalprojpointsperdollar =
    qbwrOneFull / (qbYahooSalary + wrOneYahooSalary);

  fullDKBestQBWROneStackspointsperdollar.push(
    +fullDKtotalprojpointsperdollar.toFixed(5)
  );
  fullFDBestQBWROneStackspointsperdollar.push(
    +fullFDtotalprojpointsperdollar.toFixed(5)
  );
  fullYahooBestQBWROneStackspointsperdollar.push(
    +fullYahoototalprojpointsperdollar.toFixed(4)
  );

  return qbwrOneHalf;
});

const QBWROneSingleStackData = {
  allHalfQBWROneStacks: allHalfQBWROneStacks,
  allPPRQBWROneStacks: allPPRQBWROneStacks,
  allHalfQBWROneStackWithNames: allHalfQBWROneStackWithNames,
  allPPRQBWROneStacksWithNames: allPPRQBWROneStacksWithNames,
  halfDKBestQBWROneStackspointsperdollar:
    halfDKBestQBWROneStackspointsperdollar,
  halfFDBestQBWROneStackspointsperdollar:
    halfFDBestQBWROneStackspointsperdollar,
  halfYahooBestQBWROneStackspointsperdollar:
    halfYahooBestQBWROneStackspointsperdollar,
  fullDKBestQBWROneStackspointsperdollar:
    fullDKBestQBWROneStackspointsperdollar,
  fullFDBestQBWROneStackspointsperdollar:
    fullFDBestQBWROneStackspointsperdollar,
  fullYahooBestQBWROneStackspointsperdollar:
    fullYahooBestQBWROneStackspointsperdollar,
};

module.exports = QBWROneSingleStackData;
