const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');
const rbrawdata = require('../teamandpostionsrawdata/rbrawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const allQBData = require('./qbValuesCalcs');

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
  rb.RBOne.rbOnenumOfMatchingRoleWeeks = rbOnematchingWeeks;

  rbTworoleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === rbTwoRoleThisWeek) {
      rbTwomatchingWeeks = rbTwomatchingWeeks + 1;
    }
  });
  rbTwonumOfMatchingRoleWeeks.push(rbTwomatchingWeeks);
  rb.RBTwo.rbTwonumOfMatchingRoleWeeks = rbTwomatchingWeeks;
});

const rbOnePercentageOfMatchingRoleWeeks = [];
const rbTwoPercentageOfMatchingRoleWeeks = [];

allRBs.map(function (team, i) {
  let rbOnematchingWeeksPercentage =
    rbOnenumOfMatchingRoleWeeks[i] /
    team.RBOne.roleLastXNumOfWeeksUpToFive.length;
  team.RBOne.rbOnematchingWeeksPercentage = rbOnematchingWeeksPercentage;
  rbOnePercentageOfMatchingRoleWeeks.push(rbOnematchingWeeksPercentage);

  let rbTwomatchingWeeksPercentage =
    rbTwonumOfMatchingRoleWeeks[i] /
    team.RBTwo.roleLastXNumOfWeeksUpToFive.length;
  team.RBTwo.rbTwomatchingWeeksPercentage = rbTwomatchingWeeksPercentage;
  rbTwoPercentageOfMatchingRoleWeeks.push(rbTwomatchingWeeksPercentage);
});

/// have checked down to here for re-write. the rbOnematchingWeeksPercentage and rbTwomatchingWeeksPercentage above are working still. proceed down from here with the re-write

// ATTENTION: have you checked out a new branch yet today????????????

class RbObject {
  constructor(
    playerName,
    position,
    teamName,
    teamABV,
    byeWeek,
    homeOrAway,
    slate,
    teamProjectedPoints,
    teamTotalHVTsLastFiveWeeks,
    hadByeInLastFiveWeeksIsTrue,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue,

    roleThisWeek,
    percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek,

    FPOEPerGameLastFiveWeeks,
    HVTsLastFiveWeeks,
    percentOfTeamHVTsLastFiveWeeks,
    targetSharePercentageLastFiveWeeks,

    yahooSalary,
    fanduelSalary,
    draftkingsSalary,
    percentOfSalaryCapYahoo,
    percentOfSalaryCapFanduel,
    percentOfSalaryCapDraftkings,

    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints
  ) {
    this.playerName = playerName;
    this.position = position;
    this.teamName = teamName;
    this.teamABV = teamABV;
    this.byeWeek = byeWeek;
    this.homeOrAway = homeOrAway;
    this.slate = slate;
    this.teamProjectedPoints = teamProjectedPoints;
    this.teamTotalHVTsLastFiveWeeks = teamTotalHVTsLastFiveWeeks;
    this.hadByeInLastFiveWeeksIsTrue = hadByeInLastFiveWeeksIsTrue;
    this.teamProjectedForAHalfOfNegetiveGameScriptIsTrue =
      teamProjectedForAHalfOfNegetiveGameScriptIsTrue;

    this.roleThisWeek = roleThisWeek;
    this.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek =
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek;

    this.FPOEPerGameLastFiveWeeks = FPOEPerGameLastFiveWeeks;
    this.HVTsLastFiveWeeks = HVTsLastFiveWeeks;
    this.percentOfTeamHVTsLastFiveWeeks = percentOfTeamHVTsLastFiveWeeks;
    this.targetSharePercentageLastFiveWeeks =
      targetSharePercentageLastFiveWeeks;

    this.yahooSalary = yahooSalary;
    this.fanduelSalary = fanduelSalary;
    this.draftkingsSalary = draftkingsSalary;
    this.percentOfSalaryCapYahoo = percentOfSalaryCapYahoo;
    this.percentOfSalaryCapFanduel = percentOfSalaryCapFanduel;
    this.percentOfSalaryCapDraftkings = percentOfSalaryCapDraftkings;

    this.opponentTeamName = opponentTeamName;
    this.opponentABV = opponentABV;
    this.opponentTeamProjectedPoints = opponentTeamProjectedPoints;
  }

  //add methods here
  //create method here to calculate and assign this.appProjectedPoints = appProjectedPoints; for ever player passed in
}

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
      rbOnePercentageOfMatchingRoleWeeks[i] > 0.59
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
    } else if (
      gameInfo.week.currentWeek > 6 &&
      rb.roleThisWeek === 1 &&
      rbOnePercentageOfMatchingRoleWeeks[i] < 0.6
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
      rbTwoPercentageOfMatchingRoleWeeks[i] > 0.59
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
    } else if (
      gameInfo.week.currentWeek > 6 &&
      rb.roleThisWeek === 2 &&
      rbTwoPercentageOfMatchingRoleWeeks[i] < 0.6
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
        rbOnePercentageOfMatchingRoleWeeks[i] > 0.59)
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
        rbOnePercentageOfMatchingRoleWeeks[i] < 0.6)
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;

      halfManagedAndCash = rb.fourForFourHalfPPRProjectedPoints;
      fullManagedAndCash = rb.fourForFourFullPPRProjectedPoints;
    }

    if (
      gameInfo.week.currentWeek === 5 ||
      (gameInfo.week.currentWeek === 6 &&
        rb.roleThisWeek === 2 &&
        rbTwoPercentageOfMatchingRoleWeeks[i] > 0.59)
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
        rbTwoPercentageOfMatchingRoleWeeks[i] < 0.6)
    ) {
      rbHalfPorjectedPoints = rb.fourForFourHalfPPRProjectedPoints;
      rbPPRProjectedPoints = rb.fourForFourFullPPRProjectedPoints;

      halfManagedAndCash = rb.fourForFourHalfPPRProjectedPoints;
      fullManagedAndCash = rb.fourForFourFullPPRProjectedPoints;
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

const ProjectedPointsPerDollarFanduel = [];
const ProjectedPointsPerDollarYahoo = [];
const ProjectedPointsPerDollarDraftkings = [];

const cashprojectedPointsPerDollarDraftkings = [];
const cashprojectedPointsPerDollarFanduel = [];
const cashprojectedPointsPerDollarYahoo = [];

const cashprojectedPointsPerDollarDraftkingsPlusNames = [];
const cashprojectedPointsPerDollarFanduelPlusNames = [];
const cashprojectedPointsPerDollarYahooPlusNames = [];

allRBs.forEach(function (team, i) {
  let RBOnes = team.RBOne;
  let RBTwos = team.RBTwo;

  let rbOneFanduel = +(
    allRBOneHalfPPRProjectedPointsValues[i] / RBOnes.fanduelSalary
  ).toFixed(4);
  let rbOneYahoo = +(
    allRBOneHalfPPRProjectedPointsValues[i] / RBOnes.yahooSalary
  ).toFixed(3);

  let rbOneCashFanduel = +(
    allRBOneHalfManagedAndCashProjectedPointsValues[i] / RBOnes.fanduelSalary
  ).toFixed(4);
  let rbOneCashYahoo = +(
    allRBOneHalfManagedAndCashProjectedPointsValues[i] / RBOnes.yahooSalary
  ).toFixed(3);

  let rbTwoFanduel = +(
    allRBTwoHalfPPRProjectedPointsValues[i] / RBTwos.fanduelSalary
  ).toFixed(4);
  let rbTwoYahoo = +(
    allRBTwoHalfPPRProjectedPointsValues[i] / RBTwos.yahooSalary
  ).toFixed(3);

  let rbTwoCashFanduel = +(
    allRBTwoHalfManagedAndCashProjectedPointsValues[i] / RBTwos.fanduelSalary
  ).toFixed(4);
  let rbTwoCashYahoo = +(
    allRBTwoHalfManagedAndCashProjectedPointsValues[i] / RBTwos.yahooSalary
  ).toFixed(3);

  ProjectedPointsPerDollarFanduel.push(rbOneFanduel);
  ProjectedPointsPerDollarYahoo.push(rbOneYahoo);
  ProjectedPointsPerDollarFanduel.push(rbTwoFanduel);
  ProjectedPointsPerDollarYahoo.push(rbTwoYahoo);
  cashprojectedPointsPerDollarFanduel.push(rbOneCashFanduel);
  cashprojectedPointsPerDollarYahoo.push(rbOneCashYahoo);
  cashprojectedPointsPerDollarFanduel.push(rbTwoCashFanduel);
  cashprojectedPointsPerDollarYahoo.push(rbTwoCashYahoo);
  cashprojectedPointsPerDollarFanduelPlusNames.push(
    `${rbOneCashFanduel}: ${RBOnes.name}`
  );
  cashprojectedPointsPerDollarFanduelPlusNames.push(
    `${rbTwoCashFanduel}: ${RBTwos.name}`
  );
  cashprojectedPointsPerDollarYahooPlusNames.push(
    `${rbOneCashYahoo}: ${RBOnes.name}`
  );
  cashprojectedPointsPerDollarYahooPlusNames.push(
    `${rbTwoCashYahoo}: ${RBTwos.name}`
  );

  let rbOnedraftkings = +(
    allRBOneFullPPRProjectedPointsValues[i] / RBOnes.draftkingsSalary
  ).toFixed(4);

  let rbTwodraftkings = +(
    allRBTwoFullPPRProjectedPointsValues[i] / RBTwos.draftkingsSalary
  ).toFixed(4);

  let rbOneCashDraftkings = +(
    allRBOneFullManagedAndCashProjectedPointsValues[i] / RBOnes.draftkingsSalary
  ).toFixed(4);
  let rbTwoCashDraftkings = +(
    allRBTwoFullManagedAndCashProjectedPointsValues[i] / RBTwos.draftkingsSalary
  ).toFixed(4);

  ProjectedPointsPerDollarDraftkings.push(rbOnedraftkings);
  ProjectedPointsPerDollarDraftkings.push(rbTwodraftkings);
  cashprojectedPointsPerDollarDraftkings.push(rbOneCashDraftkings);
  cashprojectedPointsPerDollarDraftkings.push(rbTwoCashDraftkings);
  cashprojectedPointsPerDollarDraftkingsPlusNames.push(
    `${rbOneCashDraftkings}: ${RBOnes.name}`
  );
  cashprojectedPointsPerDollarDraftkingsPlusNames.push(
    `${rbTwoCashDraftkings}: ${RBTwos.name}`
  );
});

// class RbObject {
//   constructor(
//     playerName,
//     position,
//     teamName,
//     teamABV,
//     byeWeek,
//     homeOrAway,
//     slate,
//     teamProjectedPoints,
//     teamTotalHVTsLastFiveWeeks,
//     hadByeInLastFiveWeeksIsTrue,
//     teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
//     teamProjectedForThreeQuartersOfNegetiveGameScriptIsTrue,

//     roleThisWeek,
//     percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek,

//     FPOEPerGameLastFiveWeeks,
//     HVTsLastFiveWeeks,
//     percentOfTeamHVTsLastFiveWeeks,
//     targetSharePercentageLastFiveWeeks,

//     yahooSalary,
//     fanduelSalary,
//     draftkingsSalary,
//     percentOfSalaryCapYahoo,
//     percentOfSalaryCapFanduel,
//     percentOfSalaryCapDraftkings,

//     opponentTeamName,
//     opponentABV,
//     opponentTeamProjectedPoints
//   ) {
//     this.playerName = playerName;
//     this.position = position;
//     this.teamName = teamName;
//     this.teamABV = teamABV;
//     this.byeWeek = byeWeek;
//     this.homeOrAway = homeOrAway;
//     this.slate = slate;
//     this.teamProjectedPoints = teamProjectedPoints;
//     this.teamTotalHVTsLastFiveWeeks = teamTotalHVTsLastFiveWeeks;
//     this.hadByeInLastFiveWeeksIsTrue = hadByeInLastFiveWeeksIsTrue;
//     this.teamProjectedForAHalfOfNegetiveGameScriptIsTrue =
//       teamProjectedForAHalfOfNegetiveGameScriptIsTrue;
//
//       (this.roleThisWeek = roleThisWeek);
//     this.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek =
//       percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek;

//     this.FPOEPerGameLastFiveWeeks = FPOEPerGameLastFiveWeeks;
//     this.HVTsLastFiveWeeks = HVTsLastFiveWeeks;
//     this.percentOfTeamHVTsLastFiveWeeks = percentOfTeamHVTsLastFiveWeeks;
//     this.targetSharePercentageLastFiveWeeks =
//       targetSharePercentageLastFiveWeeks;

//     this.yahooSalary = yahooSalary;
//     this.fanduelSalary = fanduelSalary;
//     this.draftkingsSalary = draftkingsSalary;
//     this.percentOfSalaryCapYahoo = percentOfSalaryCapYahoo;
//     this.percentOfSalaryCapFanduel = percentOfSalaryCapFanduel;
//     this.percentOfSalaryCapDraftkings = percentOfSalaryCapDraftkings;

//     this.opponentTeamName = opponentTeamName;
//     this.opponentABV = opponentABV;
//     this.opponentTeamProjectedPoints = opponentTeamProjectedPoints;
//   }

//   //add methods here
//   //create method here to calculate and assign this.appProjectedPoints = appProjectedPoints; for ever player passed in
// }

//constructing all RB objects

// populateTeamObjects(rbrawdata.SF49ers, gameInfo.SF49ers);
// populateTeamObjects(rbrawdata.bears, gameInfo.bears);
// populateTeamObjects(rbrawdata.bengals, gameInfo.bengals);
// populateTeamObjects(rbrawdata.bills, gameInfo.bills);
// populateTeamObjects(rbrawdata.broncos, gameInfo.broncos);
// populateTeamObjects(rbrawdata.browns, gameInfo.browns);
// populateTeamObjects(rbrawdata.buccaneers, gameInfo.buccaneers);
// populateTeamObjects(rbrawdata.cardinals, gameInfo.cardinals);
// populateTeamObjects(rbrawdata.chargers, gameInfo.chargers);
// populateTeamObjects(rbrawdata.chiefs, gameInfo.chiefs);
// populateTeamObjects(rbrawdata.colts, gameInfo.colts);
// populateTeamObjects(rbrawdata.commanders, gameInfo.commanders);
// populateTeamObjects(rbrawdata.cowboys, gameInfo.cowboys);
// populateTeamObjects(rbrawdata.dolphins, gameInfo.dolphins);
// populateTeamObjects(rbrawdata.eagles, gameInfo.eagles);
// populateTeamObjects(rbrawdata.falcons, gameInfo.falcons);
// populateTeamObjects(rbrawdata.giants, gameInfo.giants);
// populateTeamObjects(rbrawdata.jaguars, gameInfo.jaguars);
// populateTeamObjects(rbrawdata.jets, gameInfo.jets);
// populateTeamObjects(rbrawdata.lions, gameInfo.lions);
// populateTeamObjects(rbrawdata.packers, gameInfo.packers);
// populateTeamObjects(rbrawdata.panthers, gameInfo.panthers);
// populateTeamObjects(rbrawdata.patriots, gameInfo.patriots);
// populateTeamObjects(rbrawdata.raiders, gameInfo.raiders);
// populateTeamObjects(rbrawdata.rams, gameInfo.rams);
// populateTeamObjects(rbrawdata.ravens, gameInfo.ravens);
// populateTeamObjects(rbrawdata.saints, gameInfo.saints);
// populateTeamObjects(rbrawdata.seahawks, gameInfo.seahawks);
// populateTeamObjects(rbrawdata.steelers, gameInfo.steelers);
// populateTeamObjects(rbrawdata.texans, gameInfo.texans);
// populateTeamObjects(rbrawdata.titans, gameInfo.titans);
// populateTeamObjects(rbrawdata.vikings, gameInfo.vikings);

const allTeamRBObjects = {
  SF49ers: {},
  bears: {},
  bengals: {},
  bills: {},
  broncos: {},
  buccaneers: {},
  cardinals: {},
  chargers: {},
  chiefs: {},
  colts: {},
  commanders: {},
  cowboys: {},
  dolphins: {},
  eagles: {},
  falcons: {},
  giants: {},
  jaguars: {},
  jets: {},
  lions: {},
  packers: {},
  panthers: {},
  patriots: {},
  raiders: {},
  rams: {},
  ravens: {},
  saints: {},
  seahawks: {},
  steelers: {},
  texans: {},
  titans: {},
  vikings: {},
};
const allRBObjectsArray = [];
const allRBsMap = new Map();

allRBs.forEach(function (team, i) {
  // console.log(team);

  let teamName = '';
  allTeams.forEach(function (giTeam) {
    if (team.teamABV === giTeam.teamABV) {
      // console.log(giTeam);
      teamName = giTeam.teamName;
      teamProjectedPoints = giTeam.teamProjectedPointsThisWeek;
      hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveWeeks;
    }
  });

  let rbObject = new RbObject(
    team.RBOne.name,
    'RB',
    teamName,
    team.teamABV,
    team.byeWeek,
    team.homeOrAway,
    team.slate,
    teamProjectedPoints,
    team.totalTeamHVTsLastFiveWeeks,
    team.hadByeInTheLastFiveweeks,
    team.teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
    team.RBOne.roleThisWeek
  );
  {
  }

  allRBsMap.set(`${teamName}RBOneThisWeek`, rbObject);

  allRBObjectsArray.push(rbObject);
});

allRBs.forEach(function (team, i) {
  // console.log(team);

  let teamName = '';
  allTeams.forEach(function (giTeam) {
    if (team.teamABV === giTeam.teamABV) {
      // console.log(giTeam);
      teamName = giTeam.teamName;
      teamProjectedPoints = giTeam.teamProjectedPointsThisWeek;
      hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveWeeks;
    }
  });

  let rbObject = new RbObject(
    team.RBTwo.name,
    'RB',
    teamName,
    team.teamABV,
    team.byeWeek,
    team.homeOrAway,
    team.slate,
    teamProjectedPoints,
    team.totalTeamHVTsLastFiveWeeks,
    team.hadByeInTheLastFiveweeks,
    team.teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
    team.RBTwo.roleThisWeek
  );
  {
  }

  allRBsMap.set(`${teamName}RBTwoThisWeek`, rbObject);
  // allRBObjects.playerName = rbObject;
  allRBObjectsArray.push(rbObject);
});

// console.log(allRBsMap);
allRBObjectsArray.forEach(function (rb) {
  // console.log(rb);

  // console.log(rb.playerName);
  if (rb.teamABV === 'SEA') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.seahawks.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.seahawks.RBTwo = rb;
    }
  }
});

console.log(allTeamRBObjects);

allRBs.forEach(function (rb) {
  // console.log(rb);
  // console.log(
  //   rb.RBOne.name,
  //   rb.RBOne.totalPercentOfTeamHighValueTouchesLastFiveweeks,
  //   rb.RBTwo.name,
  //   rb.RBTwo.totalPercentOfTeamHighValueTouchesLastFiveweeks
  // );
  // console.log(rb.RBOne.name, rb.RBOne.HVTsFiveweeksAgo);
  // console.log(rb.RBOne.name, rb.RBOne.FPOEPerGameLastFiveWeeks);
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

  ProjectedPointsPerDollarFanduel: ProjectedPointsPerDollarFanduel,
  ProjectedPointsPerDollarYahoo: ProjectedPointsPerDollarYahoo,
  ProjectedPointsPerDollarDraftkings: ProjectedPointsPerDollarDraftkings,

  cashprojectedPointsPerDollarDraftkings:
    cashprojectedPointsPerDollarDraftkings,
  cashprojectedPointsPerDollarFanduel: cashprojectedPointsPerDollarFanduel,
  cashprojectedPointsPerDollarYahoo: cashprojectedPointsPerDollarYahoo,

  cashprojectedPointsPerDollarDraftkingsPlusNames:
    cashprojectedPointsPerDollarDraftkingsPlusNames,
  cashprojectedPointsPerDollarFanduelPlusNames:
    cashprojectedPointsPerDollarFanduelPlusNames,
  cashprojectedPointsPerDollarYahooPlusNames:
    cashprojectedPointsPerDollarYahooPlusNames,

  allRBsMap: allRBsMap,
  allTeamRBObjects: allTeamRBObjects,
  allRBObjectsArray: allRBObjectsArray,
};

// console.log(allRBData);

module.exports = allRBCalcFunctions;
module.exports = allRBData;
