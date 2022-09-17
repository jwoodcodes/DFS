const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');
const rbrawdata = require('../teamandpostionsrawdata/rbrawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');

const allRBOneHalfPPRProjectedPointsValues = [];
const allRBOneFullPPRProjectedPointsValues = [];
const allRBOneHalfManagedAndCashProjectedPointsValues = [];
const allRBOneFullManagedAndCashProjectedPointsValues = [];

const allRBTwoHalfPPRProjectedPointsValues = [];
const allRBTwoFullPPRProjectedPointsValues = [];
const allRBTwoHalfManagedAndCashProjectedPointsValues = [];
const allRBTwoFullManagedAndCashProjectedPointsValues = [];

const allRBOneHalfPPRProjectedPointsValuesPlusNames = [];
const allRBTwoHalfPPRProjectedPointsValuesPlusNames = [];
const allRBOneFullPPRProjectedPointsValuesPlusNames = [];
const allRBTwoFullPPRProjectedPointsValuesPlusNames = [];
const allRBOneHalfManagedAndCashProjectedPointsValuesPlusNames = [];
const allRBOneFullManagedAndCashProjectedPointsValuesPlusNames = [];
const allRBTwoHalfManagedAndCashProjectedPointsValuePlusNames = [];
const allRBTwoFullManagedAndCashProjectedPointsValuePlusNames = [];

const allRBHalfPPRProjectedPointsValues = [];
const allRBFullPPRProjectedPointsValues = [];
const allRBHalfManagedAndCashProjectedPointsValues = [];
const allRBFullManagedAndCashProjectedPointsValues = [];
const allRBHalfPPRProjectedPointsValuesPlusNames = [];
const allRBFullPPRProjectedPointsValuesPlusNames = [];
const allRBHalfManagedAndCashProjectedPointsValuesPlusNames = [];
const allRBFullManagedAndCashProjectedPointsValuesPlusNames = [];
const rbOnenumOfMatchingRoleWeeks = [];
const rbTwonumOfMatchingRoleWeeks = [];

///calculation percentage of weeks in the last x num of weeks up to 5 that a player has been in the role they will be in this week

allRBs.forEach(function (rb, i) {
  rbOneRoleThisWeek = rb.RBOne.roleThisWeek;
  rbTwoRoleThisWeek = rb.RBTwo.roleThisWeek;
  rbOneroleLastXNumOfWeeksUpToFiveArray = rb.RBOne.roleLastXNumOfWeeksUpToFive;
  rbTworoleLastXNumOfWeeksUpToFiveArray = rb.RBTwo.roleLastXNumOfWeeksUpToFive;

  let rbOnematchingWeeks = 0;
  let rbTwomatchingWeeks = 0;

  rbOneroleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === rbOneRoleThisWeek) {
      rbOnematchingWeeks = rbOnematchingWeeks + 1;
    }
  });
  rbOnenumOfMatchingRoleWeeks.push(rbOnematchingWeeks);

  rbTworoleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === rbTwoRoleThisWeek) {
      rbTwomatchingWeeks = rbTwomatchingWeeks + 1;
    }
  });
  rbTwonumOfMatchingRoleWeeks.push(rbTwomatchingWeeks);
});

const rbOnePercentageOfMatchingRoleWeeks = [];
const rbTwoPercentageOfMatchingRoleWeeks = [];

allRBs.map(function (team, i) {
  let rbOnematchingWeeksPercentage =
    rbOnenumOfMatchingRoleWeeks[i] /
    team.RBOne.roleLastXNumOfWeeksUpToFive.length;

  rbOnePercentageOfMatchingRoleWeeks.push(rbOnematchingWeeksPercentage);

  let rbTwomatchingWeeksPercentage =
    rbTwonumOfMatchingRoleWeeks[i] /
    team.RBTwo.roleLastXNumOfWeeksUpToFive.length;

  rbTwoPercentageOfMatchingRoleWeeks.push(rbTwomatchingWeeksPercentage);
});

const allRBCalcFunctions = {
  calcRBProjectionToUseOffBackfieldShare(rb, i) {
    let halfTwentyFifthPercentProjectedPoints =
      rb.halfTwentyFifthPercentProjectedPoints;
    let halfFiftyithPercentProjectedPoints =
      rb.halfFiftyithPercentProjectedPoints;
    let halfSeventyFifthPercentProjectedPoints =
      rb.halfSeventyFifthPercentProjectedPoints;
    let PPRTwentyFifthPercentProjectedPoints =
      rb.PPRTwentyFifthPercentProjectedPoints;
    let PPRFiftyithPercentProjectedPoints =
      rb.PPRFiftyithPercentProjectedPoints;
    let PPRSeventyFifthPercentProjectedPoints =
      rb.PPRSeventyFifthPercentProjectedPoints;

    let totalTeamBackfieldMArket =
      allRBs[i].totalTeamPRojectedRBCarries +
      allRBs[i].totalTeamProjectedRBTargets;
    let rbTotalTouches = Math.trunc(rb.prjCarries + rb.prjTargets);
    let rbHalfPorjectedPoints = 0;
    let rbPPRProjectedPoints = 0;
    let halfManagedAndCash = 0;
    let fullManagedAndCash = 0;

    if (
      gameInfo.week.currentWeek > 6 &&
      rb.roleThisWeek === 1 &&
      rbOnePercentageOfMatchingRoleWeeks[i] > 0.74
    ) {
      if (rbTotalTouches >= totalTeamBackfieldMArket * 0.65) {
        rbHalfPorjectedPoints = halfSeventyFifthPercentProjectedPoints;
        rbPPRProjectedPoints = PPRSeventyFifthPercentProjectedPoints;
      } else if (
        rbTotalTouches > totalTeamBackfieldMArket * 0.35 &&
        rbTotalTouches < totalTeamBackfieldMArket * 0.65
      ) {
        rbHalfPorjectedPoints = halfFiftyithPercentProjectedPoints;
        rbPPRProjectedPoints = PPRFiftyithPercentProjectedPoints;
      } else {
        rbHalfPorjectedPoints = halfTwentyFifthPercentProjectedPoints;
        rbPPRProjectedPoints = PPRTwentyFifthPercentProjectedPoints;
      }

      halfManagedAndCash =
        (rbHalfPorjectedPoints + rb.fourForFourHalfPPRProjectedPoints) / 2;

      fullManagedAndCash =
        (rbPPRProjectedPoints + rb.fourForFourFullPPRProjectedPoints) / 2;

      allRBOneHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
      allRBOneFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
    } else if (
      gameInfo.week.currentWeek > 6 &&
      rb.roleThisWeek === 1 &&
      rbOnePercentageOfMatchingRoleWeeks[i] < 0.75
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
      allRBOneHalfManagedAndCashProjectedPointsValues.push(
        rb.fourForFourHalfPPRProjectedPoints
      );
      allRBOneFullManagedAndCashProjectedPointsValues.push(
        rb.fourForFourFullPPRProjectedPoints
      );
    }

    if (
      gameInfo.week.currentWeek > 6 &&
      rb.roleThisWeek === 2 &&
      rbTwoPercentageOfMatchingRoleWeeks[i] > 0.74
    ) {
      if (rbTotalTouches >= totalTeamBackfieldMArket * 0.65) {
        rbHalfPorjectedPoints = halfSeventyFifthPercentProjectedPoints;
        rbPPRProjectedPoints = PPRSeventyFifthPercentProjectedPoints;
      } else if (
        rbTotalTouches > totalTeamBackfieldMArket * 0.35 &&
        rbTotalTouches < totalTeamBackfieldMArket * 0.65
      ) {
        rbHalfPorjectedPoints = halfFiftyithPercentProjectedPoints;
        rbPPRProjectedPoints = PPRFiftyithPercentProjectedPoints;
      } else {
        rbHalfPorjectedPoints = halfTwentyFifthPercentProjectedPoints;
        rbPPRProjectedPoints = PPRTwentyFifthPercentProjectedPoints;
      }

      halfManagedAndCash =
        (rbHalfPorjectedPoints + rb.fourForFourHalfPPRProjectedPoints) / 2;

      fullManagedAndCash =
        (rbPPRProjectedPoints + rb.fourForFourFullPPRProjectedPoints) / 2;

      allRBTwoHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
      allRBTwoFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
    } else if (
      gameInfo.week.currentWeek > 6 &&
      rb.roleThisWeek === 2 &&
      rbTwoPercentageOfMatchingRoleWeeks[i] < 0.75
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
      allRBOneHalfManagedAndCashProjectedPointsValues.push(
        rb.fourForFourHalfPPRProjectedPoints
      );
      allRBOneFullManagedAndCashProjectedPointsValues.push(
        rb.fourForFourFullPPRProjectedPoints
      );
    }

    if (
      gameInfo.week.currentWeek === 5 ||
      (gameInfo.week.currentWeek === 6 &&
        rb.roleThisWeek === 1 &&
        rbOnePercentageOfMatchingRoleWeeks[i] > 0.74)
    ) {
      if (rbTotalTouches >= totalTeamBackfieldMArket * 0.65) {
        temprbHalfPorjectedPoints = halfSeventyFifthPercentProjectedPoints;
        temprbPPRProjectedPoints = PPRSeventyFifthPercentProjectedPoints;
      } else if (
        rbTotalTouches > totalTeamBackfieldMArket * 0.35 &&
        rbTotalTouches < totalTeamBackfieldMArket * 0.65
      ) {
        temprbHalfPorjectedPoints = halfFiftyithPercentProjectedPoints;
        temprbPPRProjectedPoints = PPRFiftyithPercentProjectedPoints;
      } else {
        temprbHalfPorjectedPoints = halfTwentyFifthPercentProjectedPoints;
        temprbPPRProjectedPoints = PPRTwentyFifthPercentProjectedPoints;
      }

      let avgHalf =
        (temprbHalfPorjectedPoints + rb.fourForFourHalfPPRProjectedPoints) / 2;
      let avgFull =
        (temprbPPRProjectedPoints + rb.fourForFourFullPPRProjectedPoints) / 2;

      rbHalfPorjectedPoints = avgHalf;
      rbPPRProjectedPoints = avgFull;
      halfManagedAndCash = avgHalf;
      fullManagedAndCash = avgFull;
    } else if (
      gameInfo.week.currentWeek === 5 ||
      (gameInfo.week.currentWeek === 6 &&
        rb.roleThisWeek === 1 &&
        rbOnePercentageOfMatchingRoleWeeks[i] < 0.75)
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
      allRBOneHalfManagedAndCashProjectedPointsValues.push(
        rb.fourForFourHalfPPRProjectedPoints
      );
      allRBOneFullManagedAndCashProjectedPointsValues.push(
        rb.fourForFourFullPPRProjectedPoints
      );
    }

    if (
      gameInfo.week.currentWeek === 5 ||
      (gameInfo.week.currentWeek === 6 &&
        rb.roleThisWeek === 2 &&
        rbTwoPercentageOfMatchingRoleWeeks[i] > 0.74)
    ) {
      if (rbTotalTouches >= totalTeamBackfieldMArket * 0.65) {
        temprbHalfPorjectedPoints = halfSeventyFifthPercentProjectedPoints;
        temprbPPRProjectedPoints = PPRSeventyFifthPercentProjectedPoints;
      } else if (
        rbTotalTouches > totalTeamBackfieldMArket * 0.35 &&
        rbTotalTouches < totalTeamBackfieldMArket * 0.65
      ) {
        temprbHalfPorjectedPoints = halfFiftyithPercentProjectedPoints;
        temprbPPRProjectedPoints = PPRFiftyithPercentProjectedPoints;
      } else {
        temprbHalfPorjectedPoints = halfTwentyFifthPercentProjectedPoints;
        temprbPPRProjectedPoints = PPRTwentyFifthPercentProjectedPoints;
      }

      let avgHalf =
        (temprbHalfPorjectedPoints + rb.fourForFourHalfPPRProjectedPoints) / 2;
      let avgFull =
        (temprbPPRProjectedPoints + rb.fourForFourFullPPRProjectedPoints) / 2;

      rbHalfPorjectedPoints = avgHalf;
      rbPPRProjectedPoints = avgFull;
      halfManagedAndCash = avgHalf;
      fullManagedAndCash = avgFull;
    } else if (
      gameInfo.week.currentWeek === 5 ||
      (gameInfo.week.currentWeek === 6 &&
        rb.roleThisWeek === 2 &&
        rbTwoPercentageOfMatchingRoleWeeks[i] < 0.75)
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
      allRBOneHalfManagedAndCashProjectedPointsValues.push(
        rb.fourForFourHalfPPRProjectedPoints
      );
      allRBOneFullManagedAndCashProjectedPointsValues.push(
        rb.fourForFourFullPPRProjectedPoints
      );
    }

    if (gameInfo.week.currentWeek < 5) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
      halfManagedAndCash = rb.fourForFourHalfPPRProjectedPoints;
      fullManagedAndCash = rb.fourForFourFullPPRProjectedPoints;
    }

    allRBHalfPPRProjectedPointsValues.push(rbHalfPorjectedPoints);
    allRBFullPPRProjectedPointsValues.push(rbPPRProjectedPoints);
    allRBHalfPPRProjectedPointsValuesPlusNames.push(
      `${rbHalfPorjectedPoints}: ${rb.name}`
    );
    allRBFullPPRProjectedPointsValuesPlusNames.push(
      `${rbPPRProjectedPoints}: ${rb.name}`
    );

    allRBHalfManagedAndCashProjectedPointsValuesPlusNames.push(
      `${halfManagedAndCash}: ${rb.name}`
    );
    allRBFullManagedAndCashProjectedPointsValuesPlusNames.push(
      `${fullManagedAndCash}: ${rb.name}`
    );

    if (rb.RBOneOrTwo === 1) {
      allRBOneHalfPPRProjectedPointsValues.push(rbHalfPorjectedPoints);
      allRBOneFullPPRProjectedPointsValues.push(rbPPRProjectedPoints);
      allRBOneHalfPPRProjectedPointsValuesPlusNames.push(
        `${rbHalfPorjectedPoints}: ${rb.name}`
      );
      allRBOneFullPPRProjectedPointsValuesPlusNames.push(
        `${rbPPRProjectedPoints}: ${rb.name}`
      );
      allRBOneHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
      allRBOneFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
      allRBHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
      allRBFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
      allRBOneHalfManagedAndCashProjectedPointsValuesPlusNames.push(
        `${halfManagedAndCash}: ${rb.name}`
      );
      allRBOneFullManagedAndCashProjectedPointsValuesPlusNames.push(
        `${fullManagedAndCash}: ${rb.name}`
      );
    } else {
      allRBTwoHalfPPRProjectedPointsValues.push(rbHalfPorjectedPoints);
      allRBTwoFullPPRProjectedPointsValues.push(rbPPRProjectedPoints);
      allRBTwoHalfPPRProjectedPointsValuesPlusNames.push(
        `${rbHalfPorjectedPoints}: ${rb.name}`
      );
      allRBTwoFullPPRProjectedPointsValuesPlusNames.push(
        `${rbPPRProjectedPoints}: ${rb.name}`
      );
      allRBTwoHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
      allRBTwoFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
      allRBHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
      allRBFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
      allRBTwoHalfManagedAndCashProjectedPointsValuePlusNames.push(
        `${halfManagedAndCash}: ${rb.name}`
      );
      allRBTwoFullManagedAndCashProjectedPointsValuePlusNames.push(
        `${fullManagedAndCash}: ${rb.name}`
      );
    }

    return rbHalfPorjectedPoints, rbPPRProjectedPoints;
  },
};

allRBs.map(function (rb, i) {
  let RBOnecalc = allRBCalcFunctions.calcRBProjectionToUseOffBackfieldShare(
    rb.RBOne,
    i
  );

  let RBTwocalc = allRBCalcFunctions.calcRBProjectionToUseOffBackfieldShare(
    rb.RBTwo,
    i
  );
});

////////////Calculating projected points per dollar, PP/d

const halfProjectedPointsPerDollarDraftkings = [];
const halfProjectedPointsPerDollarFanduel = [];
const halfProjectedPointsPerDollarYahoo = [];

const fullProjectedPointsPerDollarDraftkings = [];
const fullProjectedPointsPerDollarFanduel = [];
const fullProjectedPointsPerDollarYahoo = [];

allRBs.forEach(function (team, i) {
  let RBOnes = team.RBOne;
  let RBTwos = team.RBTwo;

  let rbOnehalfdraftkings = +(
    allRBOneHalfPPRProjectedPointsValues[i] / RBOnes.draftkingsSalary
  ).toFixed(4);
  let rbOnehalfFanduel = +(
    allRBOneHalfPPRProjectedPointsValues[i] / RBOnes.fanduelSalary
  ).toFixed(4);
  let rbOnehalfYahoo = +(
    allRBOneHalfPPRProjectedPointsValues[i] / RBOnes.yahooSalary
  ).toFixed(4);

  let rbTwohalfdraftkings = +(
    allRBTwoHalfPPRProjectedPointsValues[i] / RBTwos.draftkingsSalary
  ).toFixed(4);
  let rbTwohalfFanduel = +(
    allRBTwoHalfPPRProjectedPointsValues[i] / RBTwos.fanduelSalary
  ).toFixed(4);
  let rbTwohalfYahoo = +(
    allRBTwoHalfPPRProjectedPointsValues[i] / RBTwos.yahooSalary
  ).toFixed(4);

  halfProjectedPointsPerDollarDraftkings.push(rbOnehalfdraftkings);
  halfProjectedPointsPerDollarFanduel.push(rbOnehalfFanduel);
  halfProjectedPointsPerDollarYahoo.push(rbOnehalfYahoo);
  halfProjectedPointsPerDollarDraftkings.push(rbTwohalfdraftkings);
  halfProjectedPointsPerDollarFanduel.push(rbTwohalfFanduel);
  halfProjectedPointsPerDollarYahoo.push(rbTwohalfYahoo);

  let rbOneFulldraftkings = +(
    allRBOneFullPPRProjectedPointsValues[i] / RBOnes.draftkingsSalary
  ).toFixed(4);
  let rbOneFullFanduel = +(
    allRBOneFullPPRProjectedPointsValues[i] / RBOnes.fanduelSalary
  ).toFixed(4);
  let rbOneFullYahoo = +(
    allRBOneFullPPRProjectedPointsValues[i] / RBOnes.yahooSalary
  ).toFixed(4);

  let rbTwoFulldraftkings = +(
    allRBTwoFullPPRProjectedPointsValues[i] / RBTwos.draftkingsSalary
  ).toFixed(4);
  let rbTwoFullFanduel = +(
    allRBTwoFullPPRProjectedPointsValues[i] / RBTwos.fanduelSalary
  ).toFixed(4);
  let rbTwoFullYahoo = +(
    allRBTwoFullPPRProjectedPointsValues[i] / RBTwos.yahooSalary
  ).toFixed(4);

  fullProjectedPointsPerDollarDraftkings.push(rbOneFulldraftkings);
  fullProjectedPointsPerDollarFanduel.push(rbOneFullFanduel);
  fullProjectedPointsPerDollarYahoo.push(rbOneFullYahoo);
  fullProjectedPointsPerDollarDraftkings.push(rbTwoFulldraftkings);
  fullProjectedPointsPerDollarFanduel.push(rbTwoFullFanduel);
  fullProjectedPointsPerDollarYahoo.push(rbTwoFullYahoo);
});

//////////////calculating projected points per dollar

const allRBData = {
  allRBOneHalfPPRProjectedPointsValues: allRBOneHalfPPRProjectedPointsValues,
  allRBOneFullPPRProjectedPointsValues: allRBOneFullPPRProjectedPointsValues,

  allRBTwoHalfPPRProjectedPointsValues: allRBTwoHalfPPRProjectedPointsValues,
  allRBTwoFullPPRProjectedPointsValues: allRBTwoFullPPRProjectedPointsValues,

  allRBOneHalfPPRProjectedPointsValuesPlusNames:
    allRBOneHalfPPRProjectedPointsValuesPlusNames,
  allRBTwoHalfPPRProjectedPointsValuesPlusNames:
    allRBTwoHalfPPRProjectedPointsValuesPlusNames,
  allRBOneFullPPRProjectedPointsValuesPlusNames:
    allRBOneFullPPRProjectedPointsValuesPlusNames,
  allRBTwoFullPPRProjectedPointsValuesPlusNames:
    allRBTwoFullPPRProjectedPointsValuesPlusNames,

  allRBHalfPPRProjectedPointsValues: allRBHalfPPRProjectedPointsValues,
  allRBFullPPRProjectedPointsValues: allRBFullPPRProjectedPointsValues,
  allRBHalfPPRProjectedPointsValuesPlusNames:
    allRBHalfPPRProjectedPointsValuesPlusNames,
  allRBFullPPRProjectedPointsValuesPlusNames:
    allRBFullPPRProjectedPointsValuesPlusNames,

  //////managed and cash

  allRBOneHalfManagedAndCashProjectedPointsValues:
    allRBOneHalfManagedAndCashProjectedPointsValues,
  allRBOneFullManagedAndCashProjectedPointsValues:
    allRBOneFullManagedAndCashProjectedPointsValues,

  allRBTwoHalfManagedAndCashProjectedPointsValues:
    allRBTwoHalfManagedAndCashProjectedPointsValues,
  allRBTwoFullManagedAndCashProjectedPointsValues:
    allRBTwoFullManagedAndCashProjectedPointsValues,

  allRBOneHalfManagedAndCashProjectedPointsValuesPlusNames:
    allRBOneHalfManagedAndCashProjectedPointsValuesPlusNames,
  allRBOneFullManagedAndCashProjectedPointsValuesPlusNames:
    allRBOneFullManagedAndCashProjectedPointsValuesPlusNames,
  allRBTwoHalfManagedAndCashProjectedPointsValuePlusNames:
    allRBTwoHalfManagedAndCashProjectedPointsValuePlusNames,
  allRBTwoFullManagedAndCashProjectedPointsValuePlusNames:
    allRBTwoFullManagedAndCashProjectedPointsValuePlusNames,

  allRBHalfManagedAndCashProjectedPointsValues:
    allRBHalfManagedAndCashProjectedPointsValues,
  allRBFullManagedAndCashProjectedPointsValues:
    allRBFullManagedAndCashProjectedPointsValues,
  allRBHalfManagedAndCashProjectedPointsValuesPlusNames:
    allRBHalfManagedAndCashProjectedPointsValuesPlusNames,
  allRBFullManagedAndCashProjectedPointsValuesPlusNames:
    allRBFullManagedAndCashProjectedPointsValuesPlusNames,

  //////projected points per dollar arrays
  halfProjectedPointsPerDollarDraftkings:
    halfProjectedPointsPerDollarDraftkings,
  halfProjectedPointsPerDollarFanduel: halfProjectedPointsPerDollarFanduel,
  halfProjectedPointsPerDollarYahoo: halfProjectedPointsPerDollarYahoo,

  fullProjectedPointsPerDollarDraftkings:
    fullProjectedPointsPerDollarDraftkings,
  fullProjectedPointsPerDollarFanduel: fullProjectedPointsPerDollarFanduel,
  fullProjectedPointsPerDollarYahoo: fullProjectedPointsPerDollarYahoo,
};

// console.log(allRBData);

module.exports = allRBCalcFunctions;
module.exports = allRBData;
