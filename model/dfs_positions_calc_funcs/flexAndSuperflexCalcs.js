const allQBData = require('./qbValuesCalcs');
const allRBData = require('./rbValuesCalcs');
const allWRData = require('./wrValuesCalcs');
const allTEData = require('./teValuesCalcs');
const allQBs = require('../teamandpositionvariables/allQBVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');
const allWRs = require('../teamandpositionvariables/allWRVariables');
const allTEs = require('../teamandpositionvariables/allTEVariables');

const allHalfFlexValues = [];
const allPPRFlexValues = [];
const allTEPFlexValues = [];

const allHalfFlexValuesWithNames = [];
const allPPRFlexValuesWithNames = [];
const allTEPFlexValuesWithNames = [];

const allHalfSuperflexValues = [];
const allHalfSuperflexValuesWithNames = [];
const allPPRSuperflexValues = [];
const allPPRSuperflexValuesWithNames = [];
const allTEPremiumSuperflexValues = [];
const allTEPremiumSuperflexValuesWithNames = [];

const allFlexDraftkingsProjectedpointsPerdollar = [];
const allFlexFandeulProjectedpointsPerdollar = [];
const allFlexYahooProjectedpointsPerdollar = [];

const allSuperFlexDraftkingsProjectedpointsPerdollar = [];
const allSuperFlexFandeulProjectedpointsPerdollar = [];
const allSuperFlexYahooProjectedpointsPerdollar = [];

allRBData.allRBHalfPPRProjectedPointsValues.forEach(function (player, i) {
  // console.log(allQBData.allQBFinalProjectedPointsValues[i]);
  if (i < allQBData.allQBFinalProjectedPointsValues.length) {
    allHalfSuperflexValues.push(allQBData.allQBFinalProjectedPointsValues[i]);
    allSuperFlexDraftkingsProjectedpointsPerdollar.push(
      +allQBData.projectedPointsPerDollarDraftkings[i].toFixed(3)
    );
    allSuperFlexFandeulProjectedpointsPerdollar.push(
      +allQBData.projectedPointsPerDollarFanduel[i].toFixed(3)
    );
    allSuperFlexYahooProjectedpointsPerdollar.push(
      +allQBData.projectedPointsPerDollarYahoo[i].toFixed(3)
    );

    allPPRSuperflexValues.push(allQBData.allQBFinalProjectedPointsValues[i]);
    allTEPremiumSuperflexValues.push(
      allQBData.allQBFinalProjectedPointsValues[i]
    );
    allHalfSuperflexValuesWithNames.push(
      allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
    );
    allPPRSuperflexValuesWithNames.push(
      allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
    );
    allTEPremiumSuperflexValuesWithNames.push(
      allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
    );
  }

  allHalfFlexValues.push(player);
  allHalfSuperflexValues.push(player);
  allFlexDraftkingsProjectedpointsPerdollar.push(
    allRBData.fullProjectedPointsPerDollarDraftkings[i]
  );
  allSuperFlexDraftkingsProjectedpointsPerdollar.push(
    allRBData.fullProjectedPointsPerDollarDraftkings[i]
  );
  allFlexFandeulProjectedpointsPerdollar.push(
    allRBData.halfProjectedPointsPerDollarFanduel[i]
  );
  allSuperFlexFandeulProjectedpointsPerdollar.push(
    allRBData.halfProjectedPointsPerDollarFanduel[i]
  );
  allFlexYahooProjectedpointsPerdollar.push(
    allRBData.halfProjectedPointsPerDollarYahoo[i]
  );
  allSuperFlexYahooProjectedpointsPerdollar.push(
    allRBData.halfProjectedPointsPerDollarYahoo[i]
  );
  if (i < allWRData.allWRsHalfProjectedPointsValues.length) {
    allHalfFlexValues.push(allWRData.allWRsHalfProjectedPointsValues[i]);
    allHalfSuperflexValues.push(allWRData.allWRsHalfProjectedPointsValues[i]);
    allHalfFlexValuesWithNames.push(
      allWRData.allWRsHalfProjectedPointsValuesPlusNames[i]
    );
    allHalfSuperflexValuesWithNames.push(
      allWRData.allWRsHalfProjectedPointsValuesPlusNames[i]
    );
    allFlexDraftkingsProjectedpointsPerdollar.push(
      allWRData.fullProjectedPointsPerDollarDraftkings[i]
    );
    allSuperFlexDraftkingsProjectedpointsPerdollar.push(
      allWRData.fullProjectedPointsPerDollarDraftkings[i]
    );
    allFlexFandeulProjectedpointsPerdollar.push(
      allWRData.halfProjectedPointsPerDollarFanduel[i]
    );
    allSuperFlexFandeulProjectedpointsPerdollar.push(
      allWRData.halfProjectedPointsPerDollarFanduel[i]
    );
    allFlexYahooProjectedpointsPerdollar.push(
      allWRData.halfProjectedPointsPerDollarYahoo[i]
    );
    allSuperFlexYahooProjectedpointsPerdollar.push(
      allWRData.halfProjectedPointsPerDollarYahoo[i]
    );
  }
  if (i < allTEData.allHalfTEFinalProjectedPointsValues.length) {
    allHalfFlexValues.push(allTEData.allHalfTEFinalProjectedPointsValues[i]);
    allHalfSuperflexValues.push(
      allTEData.allHalfTEFinalProjectedPointsValues[i]
    );
  }

  allHalfFlexValuesWithNames.push(
    allRBData.allRBHalfPPRProjectedPointsValuesPlusNames[i]
  );
  allHalfSuperflexValuesWithNames.push(
    allRBData.allRBHalfPPRProjectedPointsValuesPlusNames[i]
  );

  if (i < allTEData.allHalfTEFinalProjectedPointsValues.length) {
    allHalfFlexValuesWithNames.push(
      allTEData.allHalfTEFinalProjectedPointsValuesPlusNames[i]
    );
    allHalfSuperflexValuesWithNames.push(
      allTEData.allHalfTEFinalProjectedPointsValuesPlusNames[i]
    );
    allFlexDraftkingsProjectedpointsPerdollar.push(
      allTEData.fullProjectedPointsPerDollarDraftkings[i]
    );
    allSuperFlexDraftkingsProjectedpointsPerdollar.push(
      allTEData.fullProjectedPointsPerDollarDraftkings[i]
    );
    allFlexFandeulProjectedpointsPerdollar.push(
      allTEData.halfProjectedPointsPerDollarFanduel[i]
    );
    allSuperFlexFandeulProjectedpointsPerdollar.push(
      allTEData.halfProjectedPointsPerDollarFanduel[i]
    );
    allFlexYahooProjectedpointsPerdollar.push(
      allTEData.halfProjectedPointsPerDollarYahoo[i]
    );
    allSuperFlexYahooProjectedpointsPerdollar.push(
      allTEData.halfProjectedPointsPerDollarYahoo[i]
    );
  }
});

allRBData.allRBFullPPRProjectedPointsValues.forEach(function (player, i) {
  allPPRFlexValues.push(player);
  allPPRSuperflexValues.push(player);
  allTEPremiumSuperflexValues.push(player);
  if (i < allWRData.allWRsFullProjectedPointsValues.length) {
    allPPRFlexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
    allTEPFlexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
    allPPRSuperflexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
    allTEPremiumSuperflexValues.push(
      allWRData.allWRsFullProjectedPointsValues[i]
    );
    allPPRFlexValuesWithNames.push(
      allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
    );
    allTEPFlexValuesWithNames.push(
      allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
    );
    allPPRSuperflexValuesWithNames.push(
      allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
    );
    allTEPremiumSuperflexValuesWithNames.push(
      allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
    );
  }
  if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
    allPPRFlexValues.push(allTEData.allFullTEFinalProjectedPointsValues[i]);
    allPPRSuperflexValues.push(
      allTEData.allFullTEFinalProjectedPointsValues[i]
    );
  }

  allTEPFlexValues.push(player);

  if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
    allTEPFlexValues.push(allTEData.allTEPremiuimFinalProjectedPointsValues[i]);
    allTEPremiumSuperflexValues.push(
      allTEData.allTEPremiuimFinalProjectedPointsValues[i]
    );
  }

  allPPRFlexValuesWithNames.push(
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
  );
  allPPRSuperflexValuesWithNames.push(
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
  );
  allTEPremiumSuperflexValuesWithNames.push(
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
  );

  if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
    allPPRFlexValuesWithNames.push(
      allTEData.allFullTEFinalProjectedPointsValuesPlusNames[i]
    );
    allPPRSuperflexValuesWithNames.push(
      allTEData.allFullTEFinalProjectedPointsValuesPlusNames[i]
    );
  }

  allTEPFlexValuesWithNames.push(
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
  );

  if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
    allTEPFlexValuesWithNames.push(
      allTEData.allTEPremiuimFinalProjectedPointsValuesPlusNames[i]
    );
    allTEPremiumSuperflexValuesWithNames.push(
      allTEData.allTEPremiuimFinalProjectedPointsValuesPlusNames[i]
    );
  }
});

// let sortedallHalfFlexValuesWithNames = allHalfFlexValuesWithNames.sort(
//   (a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   }
// );

const allFlexAndSuperFlexData = {
  //flex data
  allHalfFlexValues: allHalfFlexValues,
  allHalfFlexValuesWithNames: allHalfFlexValuesWithNames,
  allPPRFlexValues: allPPRFlexValues,
  allPPRFlexValuesWithNames: allPPRFlexValuesWithNames,
  allTEPFlexValues: allTEPFlexValues,
  allTEPFlexValuesWithNames: allTEPFlexValuesWithNames,
  //superflex data
  allHalfSuperflexValues: allHalfSuperflexValues,
  allHalfSuperflexValuesWithNames: allHalfSuperflexValuesWithNames,
  allPPRSuperflexValues: allPPRSuperflexValues,
  allPPRSuperflexValuesWithNames: allPPRSuperflexValuesWithNames,
  allTEPremiumSuperflexValues: allTEPremiumSuperflexValues,
  allTEPremiumSuperflexValuesWithNames: allTEPremiumSuperflexValuesWithNames,

  allFlexDraftkingsProjectedpointsPerdollar:
    allFlexDraftkingsProjectedpointsPerdollar,
  allFlexFandeulProjectedpointsPerdollar:
    allFlexFandeulProjectedpointsPerdollar,
  allFlexYahooProjectedpointsPerdollar: allFlexYahooProjectedpointsPerdollar,

  allSuperFlexDraftkingsProjectedpointsPerdollar:
    allSuperFlexDraftkingsProjectedpointsPerdollar,
  allSuperFlexFandeulProjectedpointsPerdollar:
    allSuperFlexFandeulProjectedpointsPerdollar,
  allSuperFlexYahooProjectedpointsPerdollar:
    allSuperFlexYahooProjectedpointsPerdollar,
};

// console.log(allFlexAndSuperFlexData);

module.exports = allFlexAndSuperFlexData;
