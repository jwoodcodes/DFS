const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');
const rbrawdata = require('../teamandpostionsrawdata/rbrawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');

const allRBOneHalfPPRProjectedPointsValues = [];
const allRBOneFullPPRProjectedPointsValues = [];

const allRBTwoHalfPPRProjectedPointsValues = [];
const allRBTwoFullPPRProjectedPointsValues = [];

const allRBOneHalfPPRProjectedPointsValuesPlusNames = [];
const allRBTwoHalfPPRProjectedPointsValuesPlusNames = [];
const allRBOneFullPPRProjectedPointsValuesPlusNames = [];
const allRBTwoFullPPRProjectedPointsValuesPlusNames = [];

const allRBHalfPPRProjectedPointsValues = [];
const allRBFullPPRProjectedPointsValues = [];
const allRBHalfPPRProjectedPointsValuesPlusNames = [];
const allRBFullPPRProjectedPointsValuesPlusNames = [];
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

    if (
      gameInfo.week.currentWeek > 3 &&
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
    } else if (
      gameInfo.week.currentWeek > 3 &&
      rb.roleThisWeek === 1 &&
      rbOnePercentageOfMatchingRoleWeeks[i] < 0.75
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
    }

    if (
      gameInfo.week.currentWeek > 3 &&
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
    } else if (
      gameInfo.week.currentWeek > 3 &&
      rb.roleThisWeek === 2 &&
      rbTwoPercentageOfMatchingRoleWeeks[i] < 0.75
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
    }

    if (
      gameInfo.week.currentWeek === 3 &&
      rb.roleLastXNumOfWeeksUpToFive.length === 2 &&
      rb.roleThisWeek === rb.roleLastXNumOfWeeksUpToFive[0] &&
      rb.roleThisWeek === rb.roleLastXNumOfWeeksUpToFive[1]
    ) {
      let avgHalf =
        (halfFiftyithPercentProjectedPoints +
          rb.fourForFourHalfPPRProjectedPoints) /
        2;
      let avgFull =
        (PPRFiftyithPercentProjectedPoints +
          rb.fourForFourFullPPRProjectedPoints) /
        2;

      rbHalfPorjectedPoints = avgHalf;
      rbPPRProjectedPoints = avgFull;
    } else if (
      (gameInfo.week.currentWeek === 3 &&
        rb.roleLastXNumOfWeeksUpToFive.length !== 2) ||
      rb.roleThisWeek !== rb.roleLastXNumOfWeeksUpToFive[0] ||
      rb.roleThisWeek !== rb.roleLastXNumOfWeeksUpToFive[1]
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
    }

    if (gameInfo.week.currentWeek < 3) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;
    }

    // console.log(rb);
    // console.log(rb.name);
    // console.log(PPRSeventyFifthPercentProjectedPoints);
    // console.log(totalTeamBackfieldMArket);
    // console.log(rbTotalTouches);
    // console.log(rbHalfPorjectedPoints);
    // console.log(rbPPRProjectedPoints);
    allRBHalfPPRProjectedPointsValues.push(rbHalfPorjectedPoints);
    allRBFullPPRProjectedPointsValues.push(rbPPRProjectedPoints);
    allRBHalfPPRProjectedPointsValuesPlusNames.push(
      `${rb.name}: ${rbHalfPorjectedPoints}`
    );
    allRBFullPPRProjectedPointsValuesPlusNames.push(
      `${rb.name}: ${rbPPRProjectedPoints}`
    );

    if (rb.RBOneOrTwo === 1) {
      allRBOneHalfPPRProjectedPointsValues.push(rbHalfPorjectedPoints);
      allRBOneFullPPRProjectedPointsValues.push(rbPPRProjectedPoints);
      allRBOneHalfPPRProjectedPointsValuesPlusNames.push(
        `${rb.name}: ${rbHalfPorjectedPoints}`
      );
      allRBOneFullPPRProjectedPointsValuesPlusNames.push(
        `${rb.name}: ${rbPPRProjectedPoints}`
      );
    } else {
      allRBTwoHalfPPRProjectedPointsValues.push(rbHalfPorjectedPoints);
      allRBTwoFullPPRProjectedPointsValues.push(rbPPRProjectedPoints);
      allRBTwoHalfPPRProjectedPointsValuesPlusNames.push(
        `${rb.name}: ${rbHalfPorjectedPoints}`
      );
      allRBTwoFullPPRProjectedPointsValuesPlusNames.push(
        `${rb.name}: ${rbPPRProjectedPoints}`
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
};

module.exports = allRBCalcFunctions;
module.exports = allRBData;
