const allQBData = require('./qbValuesCalcs');
const allRBData = require('./rbValuesCalcs');
const allWRData = require('./wrValuesCalcs');
const allTEData = require('./teValuesCalcs');
const allQBs = require('../teamandpositionvariables/allQBVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');
const allWRs = require('../teamandpositionvariables/allWRVariables');
const allTEs = require('../teamandpositionvariables/allTEVariables');

// const allHalfFlexValues = [];
// const allPPRFlexValues = [];
// const allTEPFlexValues = [];

// const allHalfFlexValuesWithNames = [];
// const allPPRFlexValuesWithNames = [];
// const allTEPFlexValuesWithNames = [];

// const allHalfSuperflexValues = [];
// const allHalfSuperflexValuesWithNames = [];
// const allPPRSuperflexValues = [];
// const allPPRSuperflexValuesWithNames = [];
// const allTEPremiumSuperflexValues = [];
// const allTEPremiumSuperflexValuesWithNames = [];

// const allFlexDraftkingsProjectedpointsPerdollar = [];
// const allFlexFandeulProjectedpointsPerdollar = [];
// const allFlexYahooProjectedpointsPerdollar = [];

// const allSuperFlexDraftkingsProjectedpointsPerdollar = [];
// const allSuperFlexFandeulProjectedpointsPerdollar = [];
// const allSuperFlexYahooProjectedpointsPerdollar = [];

// const allHalfFlexManagedAndCashProjectedPointsValues = [];
// const allHalfFlexManagedAndCashProjectedPointsValuesPlusNames = [];
// const allFullFlexManagedAndCashProjectedPointsValues = [];
// const allFullFlexManagedAndCashProjectedPointsValuesPlusNames = [];
// const allTEPFlexManagedAndCashProjectedPointsValues = [];
// const allTEPFlexManagedAndCashProjectedPointsValuesPlusNames = [];

// const allHalfSuperFlexManagedAndCashProjectedPointsValues = [];
// const allHalfSuperFlexManagedAndCashProjectedPointsValuesPlusNames = [];
// const allFullSuperFlexManagedAndCashProjectedPointsValues = [];
// const allFullSuperFlexManagedAndCashProjectedPointsValuesPlusNames = [];
// const allTEPSuperFlexManagedAndCashProjectedPointsValues = [];
// const allTEPSuperFlexManagedAndCashProjectedPointsValuesPlusNames = [];

// const allFlexmanagedAndCashprojectedPointsPerDollarDraftkings = [];
// const allFlexmanagedAndCashprojectedPointsPerDollarDraftkingsPlusNames = [];
// const allFlexmanagedAndCashprojectedPointsPerDollarFanduel = [];
// const allFlexmanagedAndCashprojectedPointsPerDollarFanduelPlusNames = [];
// const allFlexmanagedAndCashprojectedPointsPerDollarYahoo = [];
// const allFlexmanagedAndCashprojectedPointsPerDollarYahooPlusNames = [];

// allRBData.allRBHalfPPRProjectedPointsValues.forEach(function (player, i) {
//   // console.log(allQBData.allQBFinalProjectedPointsValues[i]);
//   if (i < allQBData.allQBFinalProjectedPointsValues.length) {
//     allHalfSuperflexValues.push(allQBData.allQBFinalProjectedPointsValues[i]);
//     allSuperFlexDraftkingsProjectedpointsPerdollar.push(
//       +allQBData.projectedPointsPerDollarDraftkings[i].toFixed(3)
//     );
//     allSuperFlexFandeulProjectedpointsPerdollar.push(
//       +allQBData.projectedPointsPerDollarFanduel[i].toFixed(3)
//     );
//     allSuperFlexYahooProjectedpointsPerdollar.push(
//       +allQBData.projectedPointsPerDollarYahoo[i].toFixed(3)
//     );

//     allPPRSuperflexValues.push(allQBData.allQBFinalProjectedPointsValues[i]);
//     allTEPremiumSuperflexValues.push(
//       allQBData.allQBFinalProjectedPointsValues[i]
//     );
//     allHalfSuperflexValuesWithNames.push(
//       allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
//     );
//     allPPRSuperflexValuesWithNames.push(
//       allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
//     );
//     allTEPremiumSuperflexValuesWithNames.push(
//       allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
//     );

//     allHalfSuperFlexManagedAndCashProjectedPointsValues.push(
//       allQBData.allQBManagedAndCashProjectedPointsValues[i]
//     );
//     allHalfSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allQBData.allQBManagedAndCashProjectedPointsValuesPlusNames[i]
//     );
//     allFullSuperFlexManagedAndCashProjectedPointsValues.push(
//       allQBData.allQBManagedAndCashProjectedPointsValues[i]
//     );
//     allFullSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allQBData.allQBManagedAndCashProjectedPointsValuesPlusNames[i]
//     );
//     allTEPSuperFlexManagedAndCashProjectedPointsValues.push(
//       allQBData.allQBManagedAndCashProjectedPointsValues[i]
//     );
//     allTEPSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allQBData.allQBManagedAndCashProjectedPointsValuesPlusNames[i]
//     );
//   }

//   allHalfFlexValues.push(player);
//   allHalfSuperflexValues.push(player);
//   allFlexDraftkingsProjectedpointsPerdollar.push(
//     allRBData.ProjectedPointsPerDollarDraftkings[i]
//   );
//   allSuperFlexDraftkingsProjectedpointsPerdollar.push(
//     allRBData.ProjectedPointsPerDollarDraftkings[i]
//   );
//   allFlexFandeulProjectedpointsPerdollar.push(
//     allRBData.ProjectedPointsPerDollarFanduel[i]
//   );
//   allSuperFlexFandeulProjectedpointsPerdollar.push(
//     allRBData.ProjectedPointsPerDollarFanduel[i]
//   );
//   allFlexYahooProjectedpointsPerdollar.push(
//     allRBData.ProjectedPointsPerDollarYahoo[i]
//   );
//   allSuperFlexYahooProjectedpointsPerdollar.push(
//     allRBData.ProjectedPointsPerDollarYahoo[i]
//   );
//   allHalfFlexManagedAndCashProjectedPointsValues.push(
//     allRBData.allRBHalfManagedAndCashProjectedPointsValues[i]
//   );
//   allHalfFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//     allRBData.allRBHalfManagedAndCashProjectedPointsValuesPlusNames[i]
//   );

//   allFullFlexManagedAndCashProjectedPointsValues.push(
//     allRBData.allRBFullManagedAndCashProjectedPointsValues[i]
//   );
//   allFullFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//     allRBData.allRBFullManagedAndCashProjectedPointsValuesPlusNames[i]
//   );
//   allTEPFlexManagedAndCashProjectedPointsValues.push(
//     allRBData.allRBFullManagedAndCashProjectedPointsValues[i]
//   );
//   allTEPFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//     allRBData.allRBFullManagedAndCashProjectedPointsValuesPlusNames[i]
//   );

//   allHalfSuperFlexManagedAndCashProjectedPointsValues.push(
//     allRBData.allRBHalfManagedAndCashProjectedPointsValues[i]
//   );
//   allHalfSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//     allRBData.allRBHalfManagedAndCashProjectedPointsValuesPlusNames[i]
//   );

//   allFullSuperFlexManagedAndCashProjectedPointsValues.push(
//     allRBData.allRBFullManagedAndCashProjectedPointsValues[i]
//   );
//   allFullSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//     allRBData.allRBFullManagedAndCashProjectedPointsValuesPlusNames[i]
//   );
//   allTEPSuperFlexManagedAndCashProjectedPointsValues.push(
//     allRBData.allRBFullManagedAndCashProjectedPointsValues[i]
//   );
//   allTEPSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//     allRBData.allRBFullManagedAndCashProjectedPointsValuesPlusNames[i]
//   );
//   allFlexmanagedAndCashprojectedPointsPerDollarDraftkings.push(
//     allRBData.cashprojectedPointsPerDollarDraftkings[i]
//   );
//   allFlexmanagedAndCashprojectedPointsPerDollarFanduel.push(
//     allRBData.cashprojectedPointsPerDollarFanduel[i]
//   );
//   allFlexmanagedAndCashprojectedPointsPerDollarYahoo.push(
//     allRBData.cashprojectedPointsPerDollarYahoo[i]
//   );
//   allFlexmanagedAndCashprojectedPointsPerDollarDraftkingsPlusNames.push(
//     allRBData.cashprojectedPointsPerDollarDraftkingsPlusNames[i]
//   );
//   allFlexmanagedAndCashprojectedPointsPerDollarFanduelPlusNames.push(
//     allRBData.cashprojectedPointsPerDollarFanduelPlusNames[i]
//   );
//   allFlexmanagedAndCashprojectedPointsPerDollarYahooPlusNames.push(
//     allRBData.cashprojectedPointsPerDollarYahooPlusNames[i]
//   );

//   if (i < allWRData.allWRsHalfProjectedPointsValues.length) {
//     allHalfFlexValues.push(allWRData.allWRsHalfProjectedPointsValues[i]);
//     allHalfSuperflexValues.push(allWRData.allWRsHalfProjectedPointsValues[i]);
//     allHalfFlexValuesWithNames.push(
//       allWRData.allWRsHalfProjectedPointsValuesPlusNames[i]
//     );
//     allHalfSuperflexValuesWithNames.push(
//       allWRData.allWRsHalfProjectedPointsValuesPlusNames[i]
//     );
//     allFlexDraftkingsProjectedpointsPerdollar.push(
//       allWRData.fullProjectedPointsPerDollarDraftkings[i]
//     );
//     allSuperFlexDraftkingsProjectedpointsPerdollar.push(
//       allWRData.fullProjectedPointsPerDollarDraftkings[i]
//     );
//     allFlexFandeulProjectedpointsPerdollar.push(
//       allWRData.halfProjectedPointsPerDollarFanduel[i]
//     );
//     allSuperFlexFandeulProjectedpointsPerdollar.push(
//       allWRData.halfProjectedPointsPerDollarFanduel[i]
//     );
//     allFlexYahooProjectedpointsPerdollar.push(
//       allWRData.halfProjectedPointsPerDollarYahoo[i]
//     );
//     allSuperFlexYahooProjectedpointsPerdollar.push(
//       allWRData.halfProjectedPointsPerDollarYahoo[i]
//     );

//     //
//     allHalfFlexManagedAndCashProjectedPointsValues.push(
//       allWRData.allWRHalfManagedAndCashProjectedPointsValues[i]
//     );
//     allHalfFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allWRData.allWRHalfManagedAndCashProjectedPointsValuesPlusNames[i]
//     );
//     allFullFlexManagedAndCashProjectedPointsValues.push(
//       allWRData.allWRFullManagedAndCashProjectedPointsValues[i]
//     );
//     allFullFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allWRData.allWRFullManagedAndCashProjectedPointsValuesPlusNames[i]
//     );
//     allTEPFlexManagedAndCashProjectedPointsValues.push(
//       allWRData.allWRFullManagedAndCashProjectedPointsValues[i]
//     );
//     allTEPFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allWRData.allWRFullManagedAndCashProjectedPointsValuesPlusNames[i]
//     );

//     allHalfSuperFlexManagedAndCashProjectedPointsValues.push(
//       allWRData.allWRHalfManagedAndCashProjectedPointsValues[i]
//     );
//     allHalfSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allWRData.allWRHalfManagedAndCashProjectedPointsValuesPlusNames[i]
//     );
//     allFullSuperFlexManagedAndCashProjectedPointsValues.push(
//       allWRData.allWRFullManagedAndCashProjectedPointsValues[i]
//     );
//     allFullSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allWRData.allWRFullManagedAndCashProjectedPointsValuesPlusNames[i]
//     );
//     allTEPSuperFlexManagedAndCashProjectedPointsValues.push(
//       allWRData.allWRFullManagedAndCashProjectedPointsValues[i]
//     );
//     allTEPSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allWRData.allWRFullManagedAndCashProjectedPointsValuesPlusNames[i]
//     );

//     allFlexmanagedAndCashprojectedPointsPerDollarDraftkings.push(
//       allWRData.cashprojectedPointsPerDollarDraftkings[i]
//     );
//     allFlexmanagedAndCashprojectedPointsPerDollarFanduel.push(
//       allWRData.cashprojectedPointsPerDollarFanduel[i]
//     );
//     allFlexmanagedAndCashprojectedPointsPerDollarYahoo.push(
//       allWRData.cashprojectedPointsPerDollarYahoo[i]
//     );

//     allFlexmanagedAndCashprojectedPointsPerDollarDraftkingsPlusNames.push(
//       allWRData.cashprojectedPointsPerDollarDraftkingsPlusNames[i]
//     );
//     allFlexmanagedAndCashprojectedPointsPerDollarFanduelPlusNames.push(
//       allWRData.cashprojectedPointsPerDollarFanduelPlusNames[i]
//     );
//     allFlexmanagedAndCashprojectedPointsPerDollarYahooPlusNames.push(
//       allWRData.cashprojectedPointsPerDollarYahooPlusNames[i]
//     );
//   }

//   if (i < allTEData.allHalfTEFinalProjectedPointsValues.length) {
//     allHalfFlexValues.push(allTEData.allHalfTEFinalProjectedPointsValues[i]);
//     allHalfSuperflexValues.push(
//       allTEData.allHalfTEFinalProjectedPointsValues[i]
//     );

//     allHalfFlexManagedAndCashProjectedPointsValues.push(
//       allTEData.allTEHalfManagedAndCashProjectedPointsValues[i]
//     );

//     allHalfFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allTEData.allTEHalfManagedAndCashProjectedPointsValuesPlusNames[i]
//     );

//     allFullFlexManagedAndCashProjectedPointsValues.push(
//       allTEData.allTEFullManagedAndCashProjectedPointsValues[i]
//     );

//     allFullFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allTEData.allTEFullManagedAndCashProjectedPointsValuesPlusNames[i]
//     );

//     allTEPFlexManagedAndCashProjectedPointsValues.push(
//       allTEData.allTETEPManagedAndCashProjectedPointsValues[i]
//     );

//     allTEPFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allTEData.allTETEPManagedAndCashProjectedPointsValuesPlusNames[i]
//     );

//     allHalfSuperFlexManagedAndCashProjectedPointsValues.push(
//       allTEData.allTEHalfManagedAndCashProjectedPointsValues[i]
//     );

//     allHalfSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allTEData.allTEHalfManagedAndCashProjectedPointsValuesPlusNames[i]
//     );

//     allFullSuperFlexManagedAndCashProjectedPointsValues.push(
//       allTEData.allTEFullManagedAndCashProjectedPointsValues[i]
//     );

//     allFullSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allTEData.allTEFullManagedAndCashProjectedPointsValuesPlusNames[i]
//     );

//     allTEPSuperFlexManagedAndCashProjectedPointsValues.push(
//       allTEData.allTETEPManagedAndCashProjectedPointsValues[i]
//     );

//     allTEPSuperFlexManagedAndCashProjectedPointsValuesPlusNames.push(
//       allTEData.allTETEPManagedAndCashProjectedPointsValuesPlusNames[i]
//     );

//     allFlexmanagedAndCashprojectedPointsPerDollarDraftkings.push(
//       allTEData.cashprojectedPointsPerDollarDraftkings[i]
//     );

//     allFlexmanagedAndCashprojectedPointsPerDollarFanduel.push(
//       allTEData.cashprojectedPointsPerDollarFanduel[i]
//     );

//     allFlexmanagedAndCashprojectedPointsPerDollarYahoo.push(
//       allTEData.cashprojectedPointsPerDollarYahoo[i]
//     );

//     allFlexmanagedAndCashprojectedPointsPerDollarDraftkingsPlusNames.push(
//       allTEData.cashprojectedPointsPerDollarDraftkingsPlusNames[i]
//     );

//     allFlexmanagedAndCashprojectedPointsPerDollarFanduelPlusNames.push(
//       allTEData.cashprojectedPointsPerDollarFanduelPlusNames[i]
//     );

//     allFlexmanagedAndCashprojectedPointsPerDollarYahooPlusNames.push(
//       allTEData.cashprojectedPointsPerDollarYahooPlusNames[i]
//     );
//   }

//   allHalfFlexValuesWithNames.push(
//     allRBData.allRBHalfPPRProjectedPointsValuesPlusNames[i]
//   );
//   allHalfSuperflexValuesWithNames.push(
//     allRBData.allRBHalfPPRProjectedPointsValuesPlusNames[i]
//   );

//   if (i < allTEData.allHalfTEFinalProjectedPointsValues.length) {
//     allHalfFlexValuesWithNames.push(
//       allTEData.allHalfTEFinalProjectedPointsValuesPlusNames[i]
//     );
//     allHalfSuperflexValuesWithNames.push(
//       allTEData.allHalfTEFinalProjectedPointsValuesPlusNames[i]
//     );
//     allFlexDraftkingsProjectedpointsPerdollar.push(
//       allTEData.fullProjectedPointsPerDollarDraftkings[i]
//     );
//     allSuperFlexDraftkingsProjectedpointsPerdollar.push(
//       allTEData.fullProjectedPointsPerDollarDraftkings[i]
//     );
//     allFlexFandeulProjectedpointsPerdollar.push(
//       allTEData.halfProjectedPointsPerDollarFanduel[i]
//     );
//     allSuperFlexFandeulProjectedpointsPerdollar.push(
//       allTEData.halfProjectedPointsPerDollarFanduel[i]
//     );
//     allFlexYahooProjectedpointsPerdollar.push(
//       allTEData.halfProjectedPointsPerDollarYahoo[i]
//     );
//     allSuperFlexYahooProjectedpointsPerdollar.push(
//       allTEData.halfProjectedPointsPerDollarYahoo[i]
//     );
//   }
// });

// allRBData.allRBFullPPRProjectedPointsValues.forEach(function (player, i) {
//   allPPRFlexValues.push(player);
//   allPPRSuperflexValues.push(player);
//   allTEPremiumSuperflexValues.push(player);
//   if (i < allWRData.allWRsFullProjectedPointsValues.length) {
//     allPPRFlexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
//     allTEPFlexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
//     allPPRSuperflexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
//     allTEPremiumSuperflexValues.push(
//       allWRData.allWRsFullProjectedPointsValues[i]
//     );
//     allPPRFlexValuesWithNames.push(
//       allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
//     );
//     allTEPFlexValuesWithNames.push(
//       allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
//     );
//     allPPRSuperflexValuesWithNames.push(
//       allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
//     );
//     allTEPremiumSuperflexValuesWithNames.push(
//       allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
//     );
//   }
//   if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
//     allPPRFlexValues.push(allTEData.allFullTEFinalProjectedPointsValues[i]);
//     allPPRSuperflexValues.push(
//       allTEData.allFullTEFinalProjectedPointsValues[i]
//     );
//   }

//   allTEPFlexValues.push(player);

//   if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
//     allTEPFlexValues.push(allTEData.allTEPremiuimFinalProjectedPointsValues[i]);
//     allTEPremiumSuperflexValues.push(
//       allTEData.allTEPremiuimFinalProjectedPointsValues[i]
//     );
//   }

//   allPPRFlexValuesWithNames.push(
//     allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
//   );
//   allPPRSuperflexValuesWithNames.push(
//     allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
//   );
//   allTEPremiumSuperflexValuesWithNames.push(
//     allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
//   );

//   if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
//     allPPRFlexValuesWithNames.push(
//       allTEData.allFullTEFinalProjectedPointsValuesPlusNames[i]
//     );
//     allPPRSuperflexValuesWithNames.push(
//       allTEData.allFullTEFinalProjectedPointsValuesPlusNames[i]
//     );
//   }

//   allTEPFlexValuesWithNames.push(
//     allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
//   );

//   if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
//     allTEPFlexValuesWithNames.push(
//       allTEData.allTEPremiuimFinalProjectedPointsValuesPlusNames[i]
//     );
//     allTEPremiumSuperflexValuesWithNames.push(
//       allTEData.allTEPremiuimFinalProjectedPointsValuesPlusNames[i]
//     );
//   }
// });

// // let sortedallHalfFlexValuesWithNames = allHalfFlexValuesWithNames.sort(
// //   (a, b) => {
// //     if (a > b) return 1;
// //     if (a < b) return -1;
// //   }
// // );

// const allFlexAndSuperFlexData = {
//   //flex data
//   allHalfFlexValues: allHalfFlexValues,
//   allHalfFlexValuesWithNames: allHalfFlexValuesWithNames,
//   allPPRFlexValues: allPPRFlexValues,
//   allPPRFlexValuesWithNames: allPPRFlexValuesWithNames,
//   allTEPFlexValues: allTEPFlexValues,
//   allTEPFlexValuesWithNames: allTEPFlexValuesWithNames,
//   //superflex data
//   allHalfSuperflexValues: allHalfSuperflexValues,
//   allHalfSuperflexValuesWithNames: allHalfSuperflexValuesWithNames,
//   allPPRSuperflexValues: allPPRSuperflexValues,
//   allPPRSuperflexValuesWithNames: allPPRSuperflexValuesWithNames,
//   allTEPremiumSuperflexValues: allTEPremiumSuperflexValues,
//   allTEPremiumSuperflexValuesWithNames: allTEPremiumSuperflexValuesWithNames,

//   allFlexDraftkingsProjectedpointsPerdollar:
//     allFlexDraftkingsProjectedpointsPerdollar,
//   allFlexFandeulProjectedpointsPerdollar:
//     allFlexFandeulProjectedpointsPerdollar,
//   allFlexYahooProjectedpointsPerdollar: allFlexYahooProjectedpointsPerdollar,

//   allSuperFlexDraftkingsProjectedpointsPerdollar:
//     allSuperFlexDraftkingsProjectedpointsPerdollar,
//   allSuperFlexFandeulProjectedpointsPerdollar:
//     allSuperFlexFandeulProjectedpointsPerdollar,
//   allSuperFlexYahooProjectedpointsPerdollar:
//     allSuperFlexYahooProjectedpointsPerdollar,

//   allHalfFlexManagedAndCashProjectedPointsValues:
//     allHalfFlexManagedAndCashProjectedPointsValues,
//   allHalfFlexManagedAndCashProjectedPointsValuesPlusNames:
//     allHalfFlexManagedAndCashProjectedPointsValuesPlusNames,
//   allFullFlexManagedAndCashProjectedPointsValues:
//     allFullFlexManagedAndCashProjectedPointsValues,
//   allFullFlexManagedAndCashProjectedPointsValuesPlusNames:
//     allFullFlexManagedAndCashProjectedPointsValuesPlusNames,
//   allTEPFlexManagedAndCashProjectedPointsValues:
//     allTEPFlexManagedAndCashProjectedPointsValues,
//   allTEPFlexManagedAndCashProjectedPointsValuesPlusNames:
//     allTEPFlexManagedAndCashProjectedPointsValuesPlusNames,

//   allHalfSuperFlexManagedAndCashProjectedPointsValues:
//     allHalfSuperFlexManagedAndCashProjectedPointsValues,
//   allHalfSuperFlexManagedAndCashProjectedPointsValuesPlusNames:
//     allHalfSuperFlexManagedAndCashProjectedPointsValuesPlusNames,
//   allFullSuperFlexManagedAndCashProjectedPointsValues:
//     allFullSuperFlexManagedAndCashProjectedPointsValues,
//   allFullSuperFlexManagedAndCashProjectedPointsValuesPlusNames:
//     allFullSuperFlexManagedAndCashProjectedPointsValuesPlusNames,
//   allTEPSuperFlexManagedAndCashProjectedPointsValues:
//     allTEPSuperFlexManagedAndCashProjectedPointsValues,
//   allTEPSuperFlexManagedAndCashProjectedPointsValuesPlusNames:
//     allTEPSuperFlexManagedAndCashProjectedPointsValuesPlusNames,

//   allFlexmanagedAndCashprojectedPointsPerDollarDraftkings:
//     allFlexmanagedAndCashprojectedPointsPerDollarDraftkings,
//   allFlexmanagedAndCashprojectedPointsPerDollarFanduel:
//     allFlexmanagedAndCashprojectedPointsPerDollarFanduel,
//   allFlexmanagedAndCashprojectedPointsPerDollarYahoo:
//     allFlexmanagedAndCashprojectedPointsPerDollarYahoo,
//   allFlexmanagedAndCashprojectedPointsPerDollarDraftkingsPlusNames:
//     allFlexmanagedAndCashprojectedPointsPerDollarDraftkingsPlusNames,
//   allFlexmanagedAndCashprojectedPointsPerDollarFanduelPlusNames:
//     allFlexmanagedAndCashprojectedPointsPerDollarFanduelPlusNames,
//   allFlexmanagedAndCashprojectedPointsPerDollarYahooPlusNames:
//     allFlexmanagedAndCashprojectedPointsPerDollarYahooPlusNames,
// };

// // console.log(allFlexAndSuperFlexData);

// module.exports = allFlexAndSuperFlexData;
