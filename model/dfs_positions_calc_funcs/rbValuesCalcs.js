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
    opponentTeamProjectedPoints,

    halfTwentyFifthPercentProjectedPoints,
    halfFiftyithPercentProjectedPoints,
    halfSeventyFifthPercentProjectedPoints,
    PPRTwentyFifthPercentProjectedPoints,
    PPRFiftyithPercentProjectedPoints,
    PPRSeventyFifthPercentProjectedPoints
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

    this.halfTwentyFifthPercentProjectedPoints =
      halfTwentyFifthPercentProjectedPoints;
    this.halfFiftyithPercentProjectedPoints =
      halfFiftyithPercentProjectedPoints;
    this.halfSeventyFifthPercentProjectedPoints =
      halfSeventyFifthPercentProjectedPoints;
    this.PPRTwentyFifthPercentProjectedPoints =
      PPRTwentyFifthPercentProjectedPoints;
    this.PPRFiftyithPercentProjectedPoints = PPRFiftyithPercentProjectedPoints;
    this.PPRSeventyFifthPercentProjectedPoints =
      PPRSeventyFifthPercentProjectedPoints;
  }

  //add methods here
  //create method here to calculate and assign this.appProjectedPoints = appProjectedPoints; for ever player passed in
  //methods to make:
  //  calculate and assign this.appProjectedPoints
  //  calulate and assign appProjections per dollar on each site
  //  calculate and assign 4for4 projections per percent of cap on each site
  //  calculate and assign appProjections per percent of cap on each site.
  //  assign every rb a price bucket for each site and make arrays for each bucket on each site that holds
  //the full rb object of every rb in that bucket on each site
  // use 4for4 projections per percent of cap, how many people are in that players price bucket on the site,
  //and how each players 4for4 projections per percent of cap relates to the average 4for4 ////projections per percent of cap of the other people in that players price bucket to create ownership projections for each player on each site and assign those to teach players object. in this same method also run the same calculations using appProjections per percent of cap on each site to get a "ownership should be" metric for each player on each site and calculate and assign the difference betweem the two to get a "how much more or less owned a player is projected to be than I think they should be" metric. make sure everything from all of these methods is assinged to every players object

  calcAppProjectedPoints() {
    //team projected points 12, 15-18, 20-24, 25-30, 30+
    //percentOfTeamHVTsLastFiveWeeks, below 30, 30-50, 50-60, 60-70, 70+
    //if teamProjectedForAHalfOfNegetiveGameScriptIsTrue = true then targetSharePercentageLastFiveWeeks

    //less than 3, 3-4, 5-6, 7-8, 8+

    let tempValueForProjection = 0;

    if (this.teamProjectedPoints > 30) {
      tempValueForProjection += 6;
    }

    if (this.teamProjectedPoints > 24 && this.teamProjectedPoints < 31) {
      tempValueForProjection += 4;
    }

    if (this.teamProjectedPoints > 19 && this.teamProjectedPoints < 25) {
      tempValueForProjection += 3;
    }

    if (this.teamProjectedPoints > 14 && this.teamProjectedPoints < 20) {
      tempValueForProjection += 2;
    }

    if (this.teamProjectedPoints < 15) {
      tempValueForProjection += 0;
    }
    //

    if (this.percentOfTeamHVTsLastFiveWeeks > 0.7) {
      tempValueForProjection += 6;
    }

    if (
      this.percentOfTeamHVTsLastFiveWeeks > 0.6 &&
      this.percentOfTeamHVTsLastFiveWeeks < 0.71
    ) {
      tempValueForProjection += 4;
    }

    if (
      this.percentOfTeamHVTsLastFiveWeeks > 0.5 &&
      this.percentOfTeamHVTsLastFiveWeeks < 0.61
    ) {
      tempValueForProjection += 3;
    }

    if (
      this.percentOfTeamHVTsLastFiveWeeks > 0.3 &&
      this.percentOfTeamHVTsLastFiveWeeks < 0.51
    ) {
      tempValueForProjection += 2;
    }

    if (this.percentOfTeamHVTsLastFiveWeeks < 0.31) {
      tempValueForProjection += 0;
    }

    //
    //less than 3, 3-4, 5-6, 7-8, 8+
    let projecedPercentile = 0;

    if (tempValueForProjection > 8) {
      projecedPercentile = 75;
      if (this.FPOEPerGameLastFiveWeeks < -2) {
        projecedPercentile = 62.5;
      }
    }

    if (tempValueForProjection > 0.69 && tempValueForProjection < 9) {
      projecedPercentile = 62.5;
      if (this.FPOEPerGameLastFiveWeeks > 2) {
        projecedPercentile = 75;
      }
      if (this.FPOEPerGameLastFiveWeeks < -2) {
        projecedPercentile = 50;
      }
    }

    if (tempValueForProjection > 0.39 && tempValueForProjection < 7) {
      projecedPercentile = 50;
      if (this.FPOEPerGameLastFiveWeeks > 2) {
        projecedPercentile = 62.5;
      }
      if (this.FPOEPerGameLastFiveWeeks < -2) {
        projecedPercentile = 32.5;
      }
    }

    if (tempValueForProjection > 0.29 && tempValueForProjection < 5) {
      projecedPercentile = 32.5;
      if (this.FPOEPerGameLastFiveWeeks > 2) {
        projecedPercentile = 50;
      }
      if (this.FPOEPerGameLastFiveWeeks < -2) {
        projecedPercentile = 25;
      }
    }

    if (tempValueForProjection < 3) {
      projecedPercentile = 25;
      if (this.FPOEPerGameLastFiveWeeks > 2) {
        projecedPercentile = 32.5;
      }
    }
    this.projecedPercentile = projecedPercentile;

    if (projecedPercentile === 25) {
      this.appProjectedHalfPPRPoints =
        +this.halfTwentyFifthPercentProjectedPoints.toFixed(2);
      this.appProjectedFullPPRPoints =
        +this.PPRTwentyFifthPercentProjectedPoints.toFixed(2);
    }

    if (projecedPercentile === 32.5) {
      this.appProjectedHalfPPRPoints = +(
        (this.halfTwentyFifthPercentProjectedPoints +
          this.halfFiftyithPercentProjectedPoints) /
        2
      ).toFixed(2);
      this.appProjectedFullPPRPoints = +(
        (this.PPRTwentyFifthPercentProjectedPoints +
          this.PPRFiftyithPercentProjectedPoints) /
        2
      ).toFixed(2);
    }
    // halfTwentyFifthPercentProjectedPoints

    //   halfFiftyithPercentProjectedPoints

    //   halfSeventyFifthPercentProjectedPoints

    //   PPRTwentyFifthPercentProjectedPoints

    //   PPRFiftyithPercentProjectedPoints

    //   PPRSeventyFifthPercentProjectedPoints
  }
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

//constructing all RB objects

const allTeamRBObjects = {
  SF49ers: {},
  bears: {},
  bengals: {},
  bills: {},
  broncos: {},
  browns: {},
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
      opponentTeamName = giTeam.opponentThisWeek.teamName;
      opponentABV = giTeam.opponentThisWeek.teamABV;
      opponentTeamProjectedPoints =
        giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
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
    team.RBOne.roleThisWeek,
    team.RBOne.rbOnematchingWeeksPercentage,
    team.RBOne.FPOEPerGameLastFiveWeeks,
    team.RBOne.totalHVTsLastFiveWeeks,
    team.RBOne.totalPercentOfTeamHighValueTouchesLastFiveweeks,
    team.RBOne.targetSharePercentageLastFiveWeeks,
    team.RBOne.yahooSalary,
    team.RBOne.fanduelSalary,
    team.RBOne.draftkingsSalary,
    team.RBOne.percentOfSalaryCapYahoo,
    team.RBOne.percentOfSalaryCapFanduel,
    team.RBOne.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.RBOne.halfTwentyFifthPercentProjectedPoints,
    team.RBOne.halfFiftyithPercentProjectedPoints,
    team.RBOne.halfSeventyFifthPercentProjectedPoints,
    team.RBOne.PPRTwentyFifthPercentProjectedPoints,
    team.RBOne.PPRFiftyithPercentProjectedPoints,
    team.RBOne.PPRSeventyFifthPercentProjectedPoints
  );

  rbObject.calcAppProjectedPoints();

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
      opponentTeamName = giTeam.opponentThisWeek.teamName;
      opponentABV = giTeam.opponentThisWeek.teamABV;
      opponentTeamProjectedPoints =
        giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
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
    team.RBTwo.roleThisWeek,
    team.RBTwo.rbTwomatchingWeeksPercentage,
    team.RBTwo.FPOEPerGameLastFiveWeeks,
    team.RBTwo.totalHVTsLastFiveWeeks,
    team.RBTwo.totalPercentOfTeamHighValueTouchesLastFiveweeks,
    team.RBTwo.targetSharePercentageLastFiveWeeks,
    team.RBTwo.yahooSalary,
    team.RBTwo.fanduelSalary,
    team.RBTwo.draftkingsSalary,
    team.RBTwo.percentOfSalaryCapYahoo,
    team.RBTwo.percentOfSalaryCapFanduel,
    team.RBTwo.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.RBTwo.halfTwentyFifthPercentProjectedPoints,
    team.RBTwo.halfFiftyithPercentProjectedPoints,
    team.RBTwo.halfSeventyFifthPercentProjectedPoints,
    team.RBTwo.PPRTwentyFifthPercentProjectedPoints,
    team.RBTwo.PPRFiftyithPercentProjectedPoints,
    team.RBTwo.PPRSeventyFifthPercentProjectedPoints
  );

  rbObject.calcAppProjectedPoints();

  allRBsMap.set(`${teamName}RBTwoThisWeek`, rbObject);
  // allRBObjects.playerName = rbObject;
  allRBObjectsArray.push(rbObject);
});

// console.log(allRBsMap);
allRBObjectsArray.forEach(function (rb) {
  // console.log(rb);

  // console.log(rb.playerName);
  if (rb.teamABV === 'SF') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.SF49ers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.SF49ers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'CHI') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.bears.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.bears.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'CIN') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.bengals.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.bengals.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'BUF') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.bills.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.bills.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'DEN') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.broncos.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.broncos.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'CLE') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.browns.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.browns.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'TB') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.buccaneers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.buccaneers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'ARI') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.cardinals.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.cardinals.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'LAC') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.chargers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.chargers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'KC') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.chiefs.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.chiefs.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'IND') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.colts.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.colts.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'WAS') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.commanders.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.commanders.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'DAL') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.cowboys.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.cowboys.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'MIA') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.dolphins.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.dolphins.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'PHI') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.eagles.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.eagles.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'ATL') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.falcons.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.falcons.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NYG') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.giants.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.giants.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NYG') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.giants.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.giants.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'JAC' || rb.teamABV === 'JAx') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.jaguars.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.jaguars.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NYJ') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.jets.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.jets.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'DET') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.lions.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.lions.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'GB') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.packers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.packers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'CAR') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.panthers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.panthers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NE') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.patriots.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.patriots.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'LV') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.raiders.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.raiders.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'LAR') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.rams.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.rams.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'BAL') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.ravens.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.ravens.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NO') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.saints.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.saints.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'SEA') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.seahawks.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.seahawks.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'PIT') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.steelers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.steelers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'HOU') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.texans.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.texans.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'TEN') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.titans.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.titans.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'MIN') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.vikings.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.vikings.RBTwo = rb;
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
