// const gameInfo = require('../gameinfo');
const axios = require('axios');
const { MongoClient } = require('mongodb');





const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const allQBs = require('../teamandpositionvariables/allQBVariables');
const qbrawdata = require('../teamandpostionsrawdata/qbrawdata');

const fetchTheData = require('./propsDataFetcher').qbPropsDataFromFetcher;

const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const { match } = require('assert');
const { jaguars } = require('../teamandpostionsrawdata/gameinfo');
const { is } = require('express/lib/request');



const allQBTotalScores = [];
const allQBGLSPScores = [];

const allQBvttValues = [];
const allQBYPALastFiveGamesPlayeds = [];
const allQBTDRateLastFiveGamesPlayeds = [];
const allQBHomeOrAwayFavoriteOrUnderdogs = [];
const allQBSecondHighlyProjectedPassCatchers = [];

const allQBNames = [];

const allTeamQBObjects = {};




// console.log(gameInfo);












//////////all functions///////

class QbObject {
  constructor(
    playerName,
    position,
    teamName,
    teamABV,
    byeWeek,
    homeOrAway,
    slate,
    vtt,
    teamProjectedPoints,
    teamPointsPerGameLastFiveWeeks,
    hadByeInLastFiveWeeksIsTrue,

    appProjectedPoints,
    appQBSixPointForPassingTDProjectedPoints,
    projectedPassAttempts,
    percentOfGamesPlayedLastFiveWeeks,
    fantasyPointsFromRushingPerGameLastFiveWeeks,
    fantasyPointsFromPassingPerGameLastFiveWeeks,
    passAttemptsPerGameLastFiveWeeks,
    fantasyPointsPerPassAttemptLastFiveWeeks,
    glspavg,
    twentyFifthPercentProjectedPoints,
    seventyFifthPercentProjectedPoints,
    fourForFourFullPPRProjectedPoints,

    prjpassattempts, 
        prjcompletions, 
        prjPassYards, 
        prjpassingTDs, 
        projectedPassingTDs, 
        prjINTs, 
        prjRushAttempts, 
        prjRushYards, 
        prjRushTDs, 

    appProjPassAttempts,
    appProjCompletions,
    appProjPassingYards,
    appProjPassTDs,
    appProjINTs,
    appProjQBRushAttempts,
    appProjQBRushYards,
    appProjQBRushTDs,
    astroQBProjection,
    astroSixPtTDQBProjection,

    UDFantasyPointsProp,

    yahooSalary,
    fanduelSalary,
    draftkingsSalary,
    percentOfSalaryCapYahoo,
    percentOfSalaryCapFanduel,
    percentOfSalaryCapDraftkings,

    opponentTeamName,
    opponentABV,
    opponentqbName,
    opponentTeamProjectedPoints,
    bonusForHighExplosivePassVsBadExplosivePassDef,
    percentageOfFantasyPointsFromPassingLastFiveWeeks
  ) {
    this.playerName = playerName;
    this.position = position;
    this.teamName = teamName;
    this.teamABV = teamABV;
    this.byeWeek = byeWeek;
    this.homeOrAway = homeOrAway;
    this.slate = slate;
    this.vtt = vtt;
    this.teamProjectedPoints = teamProjectedPoints;
    this.teamPointsPerGameLastFiveWeeks = teamPointsPerGameLastFiveWeeks;
    this.hadByeInLastFiveWeeksIsTrue = hadByeInLastFiveWeeksIsTrue;

    this.appProjectedPoints = appProjectedPoints;
    this.appQBSixPointForPassingTDProjectedPoints =
      appQBSixPointForPassingTDProjectedPoints;
    this.projectedPassAttempts = projectedPassAttempts;
    this.percentOfGamesPlayedLastFiveWeeks = percentOfGamesPlayedLastFiveWeeks;
    this.fantasyPointsFromRushingPerGameLastFiveWeeks =
      fantasyPointsFromRushingPerGameLastFiveWeeks;
    this.fantasyPointsFromPassingPerGameLastFiveWeeks =
      fantasyPointsFromPassingPerGameLastFiveWeeks;
    this.passAttemptsPerGameLastFiveWeeks = passAttemptsPerGameLastFiveWeeks;
    this.fantasyPointsPerPassAttemptLastFiveWeeks =
      fantasyPointsPerPassAttemptLastFiveWeeks;
    this.glspavg = glspavg;
    this.twentyFifthPercentProjectedPoints;
    this.seventyFifthPercentProjectedPoints;
    this.fourForFourFullPPRProjectedPoints = fourForFourFullPPRProjectedPoints;

    this.prjpassattempts = prjpassattempts;
        this.prjcompletions = prjcompletions;
        this.prjPassYards = prjPassYards; 
        this.prjpassingTDs = prjpassingTDs;
        this.projectedPassingTDs = projectedPassingTDs;
        this.prjINTs = prjINTs;
        this.prjRushAttempts = prjRushAttempts;
        this.prjRushYards = prjRushYards;
        this.prjRushTDs = prjRushTDs;

    this.appProjPassAttempts = appProjPassAttempts;
    this.appProjCompletions = appProjCompletions;
    this.appProjPassingYards = appProjPassingYards;
    this.appProjPassTDs = appProjPassTDs;
    this.appProjINTs = appProjINTs;
    this.appProjQBRushAttempts = appProjQBRushAttempts;
    this.appProjQBRushYards = appProjQBRushYards;
    this.appProjQBRushTDs = appProjQBRushTDs;
    this.astroQBProjection = astroQBProjection;
    this.astroSixPtTDQBProjection = astroSixPtTDQBProjection;

    this.UDFantasyPointsProp = UDFantasyPointsProp;

    this.yahooSalary = yahooSalary;
    this.fanduelSalary = fanduelSalary;
    this.draftkingsSalary = draftkingsSalary;
    this.percentOfSalaryCapYahoo = percentOfSalaryCapYahoo;
    this.percentOfSalaryCapFanduel = percentOfSalaryCapFanduel;
    this.percentOfSalaryCapDraftkings = percentOfSalaryCapDraftkings;

    this.opponentTeamName = opponentTeamName;
    this.opponentABV = opponentABV;
    this.opponentqbName = opponentqbName;
    this.opponentTeamProjectedPoints = opponentTeamProjectedPoints;
    this.bonusForHighExplosivePassVsBadExplosivePassDef =
      bonusForHighExplosivePassVsBadExplosivePassDef;
    this.percentageOfFantasyPointsFromPassingLastFiveWeeks =
      percentageOfFantasyPointsFromPassingLastFiveWeeks;
  }

  //add methods here

  //            --methods still to be done--

  //  - calulate and assign appProjections per dollar on each site
  //  - calculate and assign 4for4 projections per percent of cap on each site
  //  - calculate and assign appProjections per percent of cap on each site.
  //   -assign every qb a salary bucket for each site and make arrays for each bucket on each site that holds
  //   the full qb object of every qb in that bucket on each site
  // - assign to each QB a 4for4 projections per percent of cap bucket on each site.
  //  - assign each QB a number for how many players are in his salary bucket that are also in his 4for4   projections per percent of cap bucket. do the same for how many are in his salary bucket that are also in a higher/better 4for4 projections per percent of cap bucket
  //
  // - calculate projeted ownership: use 4for4 projections per dollar to assign a baseline projected ownership and then adjust that using the two numbers from the step above for each player on each site.
}

const allQBCalcFunctions = {
  calcQBvtt(team) {
    let qbvtt = +(+team.teamProjectedPointsThisWeek + +team.teamVTT) / 2;
    let qbvttScore = 0;
    // console.log(team.teamProjectedPointsThisWeek);

    if (qbvtt > 28) {
      qbvttScore = 15;
    }

    if (qbvtt > 23.9 && qbvtt < 28.1) {
      qbvttScore = 10;
    }

    if (qbvtt > 19.9 && qbvtt < 24) {
      qbvttScore = 5;
    }

    if (qbvtt > 14.9 && qbvtt < 20) {
      qbvttScore = 0;
    }

    if (qbvtt < 15) {
      qbvttScore = -10;
    }

    return qbvttScore;
  }, //closing calcQBvtt tag

  // calcQBYPALastFiveGamesPlayed(team) {
  //   let QBYPA = team.ypaLastFiveGames;

  //   if (QBYPA > 7.9) {
  //     QBYPA = 10;
  //   } else if (QBYPA > 7.4 && QBYPA < 8) {
  //     QBYPA = 5;
  //   } else if (QBYPA > 6.9 && QBYPA < 7.5) {
  //     QBYPA = 2.5;
  //   } else if (QBYPA > 6.4 && QBYPA < 7) {
  //     QBYPA = 0;
  //   } else if (QBYPA > 5.9 && QBYPA < 6.5) {
  //     QBYPA = -2.5;
  //   } else if (QBYPA > 5.4 && QBYPA < 6) {
  //     QBYPA = -5;
  //   } else {
  //     QBYPA = -10;
  //   }

  //   return QBYPA;
  // },

  // allQBTDRateLastFiveGamesPlayeds(team) {
  //   let QBTDRate = team.TDrateLastFiveGames;

  //   if (QBTDRate > 6) {
  //     QBTDRate = 15;
  //   } else if (QBTDRate > 4.9 && QBTDRate < 6) {
  //     QBTDRate = 10;
  //   } else if (QBTDRate > 4.4 && QBTDRate < 5) {
  //     QBTDRate = 5;
  //   } else if (QBTDRate > 3.9 && QBTDRate < 4.5) {
  //     QBTDRate = 0;
  //   } else if (QBTDRate > 3.4 && QBTDRate < 4) {
  //     QBTDRate = -5;
  //   } else if (QBTDRate > 2.9 && QBTDRate < 3.5) {
  //     QBTDRate = -10;
  //   } else {
  //     QBTDRate = -15;
  //   }
  //   return QBTDRate;
  // },

  calcQBHomeOrAwayFavoriteOrUnderdogs(team, i) {
    let QBHOAFOU = 0;

    if ((i - 1) % 2 && team.teamVTT > allQBs[i + 1].teamVTT) {
      QBHOAFOU = 10;
    } else if (i % 2 && team.teamVTT < allQBs[i - 1].teamVTT) {
      QBHOAFOU = 5;
    } else if (
      (i % 2 && team.teamVTT > allQBs[i - 1].teamVTT) ||
      (i % 2 &&
        team.teamVTT < allQBs[i - 1].teamVTT &&
        allQBs[i - 1].teamVTT > 24.9)
    ) {
      QBHOAFOU = -5;
    } else if (
      (i - 1) % 2 &&
      team.teamVTT < allQBs[i + 1].teamVTT &&
      team.teamVTT > 20 &&
      team.teamVTT < 25
    ) {
      QBHOAFOU = -10;
    } else {
      QBHOAFOU = -15;
    }

    return QBHOAFOU;
  },

  // calcQBSecondHighlyProjectedPassCatchers(team) {
  //   let QBSHPPC = team.secondHighestProjectedPassCatcher4for4ProjectedPoints;

  //   if (QBSHPPC > 14.9) {
  //     QBSHPPC = 15;
  //   } else if (QBSHPPC > 13.9) {
  //     QBSHPPC = 12.5;
  //   } else if (QBSHPPC > 12.9) {
  //     QBSHPPC = 10;
  //   } else if (QBSHPPC > 11.9) {
  //     QBSHPPC = 5;
  //   } else {
  //     QBSHPPC = 0;
  //   }
  //   return QBSHPPC;
  // },

  calcQBPossibleGameScriptBonusIfEffiecient(team) {
    if (team.fantasyPointsPerPassAttemptLastFiveWeeks) {
      // console.log(team.fantasyPointsPerPassAttemptLastFiveWeeks);
      let efficiency = team.fantasyPointsPerPassAttemptLastFiveWeeks;
      let increaseOfPlaysInNonNeutralSituations =
        +team.teamPlaysPerSixtyMinAllSituations -
        +team.teamPlaysPerSixtyMinNeutralSituations;

      // console.log(team.name, team.negativeScriptPassPercentage);
      let tempneutralSituationPassAttemptsPerQuarter =
        (+team.passAttemptsPerGameLastFiveWeeks + +team.prjpassattempts) / 2;
      let neutralSituationPassAttemptsPerQuarter = (
        +tempneutralSituationPassAttemptsPerQuarter / 4
      ).toFixed(1);

      // console.log(team.name, neutralSituationPassAttemptsPerQuarter);

      let decnegativeScriptPassPercentage =
        +team.negativeScriptPassPercentage / 100;
      // console.log(team.name, decnegativeScriptPassPercentage);
      let negetiveSituationPassAttemptsPerQuarter = (
        (+team.teamPlaysPerSixtyMinAllSituations *
          +decnegativeScriptPassPercentage) /
        4
      ).toFixed(1);
      team.neutralSituationPassAttemptsPerQuarter =
        neutralSituationPassAttemptsPerQuarter;
      team.negetiveSituationPassAttemptsPerQuarter =
        negetiveSituationPassAttemptsPerQuarter;

      // console.log(team.name, negetiveSituationPassAttemptsPerQuarter);

      let numberOfIncresedPassAttemptsPerQuarterOfNegetiveGameScript = (
        negetiveSituationPassAttemptsPerQuarter -
        neutralSituationPassAttemptsPerQuarter
      ).toFixed(2);

      // console.log(
      //   team.name,
      //   neutralSituationPassAttemptsPerQuarter,
      //   negetiveSituationPassAttemptsPerQuarter,
      //   numberOfIncresedPassAttemptsPerQuarterOfNegetiveGameScript
      // );

      let increasedPassAttemptsByFantasyPointsPerPassAttemptsLastFiveWeeks = +(
        numberOfIncresedPassAttemptsPerQuarterOfNegetiveGameScript *
        team.fantasyPointsPerPassAttemptLastFiveWeeks
      ).toFixed(2);

      // console.log(
      //   team.name,
      //   increasedPassAttemptsByFantasyPointsPerPassAttemptsLastFiveWeeks
      // );

      let gameScriptBonusIfTeamThrowsMoreInNegetiveGameScriptsAndQBIsEfficient = 0;

      if (
        team.quarterOfNegetiveGameScriptPossible &&
        !team.halfOfNegetiveGameScriptPossible
      ) {
        // console.log(team);
        if (
          increasedPassAttemptsByFantasyPointsPerPassAttemptsLastFiveWeeks > 1.5
        ) {
          gameScriptBonusIfTeamThrowsMoreInNegetiveGameScriptsAndQBIsEfficient = 5;
        }
      }
      if (
        team.halfOfNegetiveGameScriptPossible &&
        !team.threeQuartersOfNegetiveGameScriptPossible
      ) {
        // console.log(team);
        if (
          increasedPassAttemptsByFantasyPointsPerPassAttemptsLastFiveWeeks > 1.5
        ) {
          gameScriptBonusIfTeamThrowsMoreInNegetiveGameScriptsAndQBIsEfficient = 10;
        }
      }
      if (team.threeQuartersOfNegetiveGameScriptPossible) {
        // console.log(team);
        if (
          increasedPassAttemptsByFantasyPointsPerPassAttemptsLastFiveWeeks > 1.5
        ) {
          gameScriptBonusIfTeamThrowsMoreInNegetiveGameScriptsAndQBIsEfficient = 15;
        }
      }

      return gameScriptBonusIfTeamThrowsMoreInNegetiveGameScriptsAndQBIsEfficient;
    }
  },

  calcQBScoreFromGlSPPercentageMatchesAndBuckets(team) {
    let ScoreFromGLSP = 0;
    let bucketTwentyFifthPercentileGLSPIsIn = 0;
    let bucketFiftyithPercentileGLSPIsIn = 0;
    let bucketSeventyFifthPercentileGLSPIsIn = 0;
    let percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow = 0;
    let percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove = 0;
    let allThreePercentilesInSameBucket = false;
    let bucketOfTwentyFifthAndFiftyithIsSame = false;
    let bucketOfSeventyFifthAndFiftyithIsSame = false;

    if (
      team.twentyFifthPercentProjectedPoints > 0 &&
      team.twentyFifthPercentProjectedPoints <= 5
    ) {
      bucketTwentyFifthPercentileGLSPIsIn = 2.5;
    }
    if (
      team.twentyFifthPercentProjectedPoints > 5 &&
      team.twentyFifthPercentProjectedPoints <= 10
    ) {
      bucketTwentyFifthPercentileGLSPIsIn = 7.5;
    }
    if (
      team.twentyFifthPercentProjectedPoints > 10 &&
      team.twentyFifthPercentProjectedPoints <= 15
    ) {
      bucketTwentyFifthPercentileGLSPIsIn = 12.5;
    }
    if (
      team.twentyFifthPercentProjectedPoints > 15 &&
      team.twentyFifthPercentProjectedPoints <= 20
    ) {
      bucketTwentyFifthPercentileGLSPIsIn = 17.5;
    }
    if (
      team.twentyFifthPercentProjectedPoints > 20 &&
      team.twentyFifthPercentProjectedPoints <= 25
    ) {
      bucketTwentyFifthPercentileGLSPIsIn = 22.5;
    }
    if (team.twentyFifthPercentProjectedPoints > 25) {
      bucketTwentyFifthPercentileGLSPIsIn = 27.5;
    }

    ///////////
    if (
      team.fiftyithPercentProjectedPoints > 0 &&
      team.fiftyithPercentProjectedPoints <= 5
    ) {
      bucketFiftyithPercentileGLSPIsIn = 2.5;
    }
    if (
      team.fiftyithPercentProjectedPoints > 5 &&
      team.fiftyithPercentProjectedPoints <= 10
    ) {
      bucketFiftyithPercentileGLSPIsIn = 7.5;
    }
    if (
      team.fiftyithPercentProjectedPoints > 10 &&
      team.fiftyithPercentProjectedPoints <= 15
    ) {
      bucketFiftyithPercentileGLSPIsIn = 12.5;
    }
    if (
      team.fiftyithPercentProjectedPoints > 15 &&
      team.fiftyithPercentProjectedPoints <= 20
    ) {
      bucketFiftyithPercentileGLSPIsIn = 17.5;
    }
    if (
      team.fiftyithPercentProjectedPoints > 20 &&
      team.fiftyithPercentProjectedPoints <= 25
    ) {
      bucketFiftyithPercentileGLSPIsIn = 22.5;
    }
    if (team.fiftyithPercentProjectedPoints > 25) {
      bucketFiftyithPercentileGLSPIsIn = 27.5;
    }

    ////////////

    if (
      team.seventyFifthPercentProjectedPoints > 0 &&
      team.seventyFifthPercentProjectedPoints <= 5
    ) {
      bucketSeventyFifthPercentileGLSPIsIn = 2.5;
    }
    if (
      team.seventyFifthPercentProjectedPoints > 5 &&
      team.seventyFifthPercentProjectedPoints <= 10
    ) {
      bucketSeventyFifthPercentileGLSPIsIn = 7.5;
    }
    if (
      team.seventyFifthPercentProjectedPoints > 10 &&
      team.seventyFifthPercentProjectedPoints <= 15
    ) {
      bucketSeventyFifthPercentileGLSPIsIn = 12.5;
    }
    if (
      team.seventyFifthPercentProjectedPoints > 15 &&
      team.seventyFifthPercentProjectedPoints <= 20
    ) {
      bucketSeventyFifthPercentileGLSPIsIn = 17.5;
    }
    if (
      team.seventyFifthPercentProjectedPoints > 20 &&
      team.seventyFifthPercentProjectedPoints <= 25
    ) {
      bucketSeventyFifthPercentileGLSPIsIn = 22.5;
    }
    if (team.seventyFifthPercentProjectedPoints > 25) {
      bucketSeventyFifthPercentileGLSPIsIn = 27.5;
    }
    // console.log(
    //   bucketTwentyFifthPercentileGLSPIsIn,
    //   bucketFiftyithPercentileGLSPIsIn,
    //   bucketSeventyFifthPercentileGLSPIsIn
    // );

    if (
      bucketTwentyFifthPercentileGLSPIsIn === bucketFiftyithPercentileGLSPIsIn
    ) {
      bucketOfTwentyFifthAndFiftyithIsSame = true;
    }
    if (
      bucketSeventyFifthPercentileGLSPIsIn === bucketFiftyithPercentileGLSPIsIn
    ) {
      bucketOfSeventyFifthAndFiftyithIsSame = true;
    }
    if (
      bucketTwentyFifthPercentileGLSPIsIn ===
        bucketFiftyithPercentileGLSPIsIn &&
      bucketSeventyFifthPercentileGLSPIsIn === bucketFiftyithPercentileGLSPIsIn
    ) {
      allThreePercentilesInSameBucket = true;
    }

    // console.log(
    //   bucketOfTwentyFifthAndFiftyithIsSame,
    //   bucketOfSeventyFifthAndFiftyithIsSame,
    //   allThreePercentilesInSameBucket
    // );

    // let percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow = 0;
    // let percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove = 0;
    // console.log(bucketTwentyFifthPercentileGLSPIsIn);
    if (bucketTwentyFifthPercentileGLSPIsIn === 2.5) {
      percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow =
        team.glspLessThanFive;
    }
    if (bucketTwentyFifthPercentileGLSPIsIn === 7.5) {
      percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow =
        team.glspLessThanFive + team.glspFiveToTen;
    }
    if (bucketTwentyFifthPercentileGLSPIsIn === 12.5) {
      percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow =
        team.glspLessThanFive + team.glspFiveToTen + team.glspTenToFifteen;
    }
    if (bucketTwentyFifthPercentileGLSPIsIn === 17.5) {
      percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow =
        team.glspLessThanFive +
        team.glspFiveToTen +
        team.glspTenToFifteen +
        team.glspFifteenToTwenty;
    }
    if (bucketTwentyFifthPercentileGLSPIsIn === 22.5) {
      percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow =
        team.glspLessThanFive +
        team.glspFiveToTen +
        team.glspTenToFifteen +
        team.glspFifteenToTwenty +
        team.glspTwentyToTwentyFive;
    }

    //////
    // console.log(bucketSeventyFifthPercentileGLSPIsIn);
    if (bucketSeventyFifthPercentileGLSPIsIn === 2.5) {
      percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove =
        team.glspLessThanFive +
        team.glspFiveToTen +
        team.glspTenToFifteen +
        team.glspFifteenToTwenty +
        team.glspTwentyToTwentyFive +
        team.glspGreaterThanTwentyFive;
    }
    if (bucketSeventyFifthPercentileGLSPIsIn === 7.5) {
      percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove =
        team.glspFiveToTen +
        team.glspTenToFifteen +
        team.glspFifteenToTwenty +
        team.glspTwentyToTwentyFive +
        team.glspGreaterThanTwentyFive;
    }
    if (bucketSeventyFifthPercentileGLSPIsIn === 12.5) {
      percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove =
        team.glspTenToFifteen +
        team.glspFifteenToTwenty +
        team.glspTwentyToTwentyFive +
        team.glspGreaterThanTwentyFive;
    }
    if (bucketSeventyFifthPercentileGLSPIsIn === 17.5) {
      percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove =
        team.glspFifteenToTwenty +
        team.glspTwentyToTwentyFive +
        team.glspGreaterThanTwentyFive;
    }
    if (bucketSeventyFifthPercentileGLSPIsIn === 22.5) {
      percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove =
        team.glspTwentyToTwentyFive + team.glspGreaterThanTwentyFive;
    }
    if (bucketSeventyFifthPercentileGLSPIsIn === 27.5) {
      percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove =
        team.glspGreaterThanTwentyFive;
    }
    // console.log(percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove);
    //   console.log(
    //     percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow,
    //     percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove
    //   );
    let glspSuggestedPercentileProjection = 0;

    if (
      percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow >= 40 &&
      percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove < 40
    ) {
      if (bucketOfTwentyFifthAndFiftyithIsSame === true) {
        glspSuggestedPercentileProjection = 50;
      } else glspSuggestedPercentileProjection = 25;
    }
    if (
      percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove >= 40 &&
      percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow < 40
    ) {
      if (bucketOfSeventyFifthAndFiftyithIsSame === true) {
        glspSuggestedPercentileProjection = 50;
      } else glspSuggestedPercentileProjection = 75;
    }
    if (
      (percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow >= 40 &&
        percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove >= 40) ||
      (percentOfCompsInTwentyFifthPercentileGLSPBucketAndBelow <= 40 &&
        percentOfCompsInSeventyFifthPercentileGLSPBucketAndAbove <= 40)
    ) {
      glspSuggestedPercentileProjection = 50;
    }
    if (allThreePercentilesInSameBucket === true) {
      glspSuggestedPercentileProjection = 50;
    }
    return glspSuggestedPercentileProjection;
  },
};

//&& allQBs[i].teamVTT > allQBs[i + 1].teamVTT

////////calling all functions and calculating all total scores////////////
// console.log(allQBs);

allQBs.map(function (team, i) {
  // console.log(team);
  let totalScore = 0;

  let curVTTValue = allQBCalcFunctions.calcQBvtt(team);
  allQBvttValues.push(curVTTValue);
  totalScore += curVTTValue;

  // let qbypavalue = allQBCalcFunctions.calcQBYPALastFiveGamesPlayed(team);
  // allQBYPALastFiveGamesPlayeds.push(qbypavalue);
  // totalScore += qbypavalue;

  // let QBTDRateValue = allQBCalcFunctions.allQBTDRateLastFiveGamesPlayeds(team);
  // allQBTDRateLastFiveGamesPlayeds.push(QBTDRateValue);
  // totalScore += QBTDRateValue;

  let allQBHomeOrAwayFavoriteOrUnderdog =
    allQBCalcFunctions.calcQBHomeOrAwayFavoriteOrUnderdogs(team, i);
  allQBHomeOrAwayFavoriteOrUnderdogs.push(allQBHomeOrAwayFavoriteOrUnderdog);
  totalScore += allQBHomeOrAwayFavoriteOrUnderdog;

  // let QBSHPPCS =
  //   allQBCalcFunctions.calcQBSecondHighlyProjectedPassCatchers(team);
  // allQBSecondHighlyProjectedPassCatchers.push(QBSHPPCS);
  // totalScore += QBSHPPCS;

  let gameScriptBonus =
    allQBCalcFunctions.calcQBPossibleGameScriptBonusIfEffiecient(team);
  totalScore += gameScriptBonus;

  let ScoreFromGLSP =
    allQBCalcFunctions.calcQBScoreFromGlSPPercentageMatchesAndBuckets(team);
  // totalScore += ScoreFromGLSP;

  if (totalScore >= 20) {
    suggestionProjectionFromTotalScore = 75;
  } else if (totalScore >= 0 && totalScore < 20) {
    suggestionProjectionFromTotalScore = 50;
  } else {
    suggestionProjectionFromTotalScore = 25;
  }
  // console.log(ScoreFromGLSP);
  // console.log(
  //   `${team.name} ${totalScore} ${suggestionProjectionFromTotalScore} ${ScoreFromGLSP} -- ${allQBHomeOrAwayFavoriteOrUnderdog} ${curVTTValue}  - ${team.twentyFifthPercentProjectedPoints} ${team.fiftyithPercentProjectedPoints} ${team.seventyFifthPercentProjectedPoints} --- ${team.fourForFourHalfPPRProjectedPoints}`
  // );
  // console.log(suggestionProjectionFromTotalScore);
  let FinalTotalScore = 0;

  if (team.fantasyPointsFromRushingPerGameLastFiveWeeks > 7.4) {
    // console.log(team.name, suggestionProjectionFromTotalScore, ScoreFromGLSP);
    if (suggestionProjectionFromTotalScore === 75) {
      if (ScoreFromGLSP === 75) {
        FinalTotalScore = 75;
      }
      if (ScoreFromGLSP < 75) {
        FinalTotalScore = 62.5;
      }
    }
    if (suggestionProjectionFromTotalScore === 50) {
      if (ScoreFromGLSP === 75) {
        FinalTotalScore = 62.5;
      }
      if (ScoreFromGLSP === 50) {
        FinalTotalScore = 50;
      }
      if (ScoreFromGLSP === 25) {
        FinalTotalScore = 37.5;
      }
    }
    if (suggestionProjectionFromTotalScore === 25) {
      if (ScoreFromGLSP === 75) {
        FinalTotalScore = 50;
      }
      if (ScoreFromGLSP === 50) {
        FinalTotalScore = 37.5;
      }

      if (ScoreFromGLSP === 25) {
        FinalTotalScore = 25;
      }
    }
  }

  if (team.fantasyPointsFromRushingPerGameLastFiveWeeks <= 7.5) {
    FinalTotalScore = suggestionProjectionFromTotalScore;
  }
  allQBTotalScores.push(FinalTotalScore);
  allQBGLSPScores.push(ScoreFromGLSP);
  allQBNames.push(team.name);
  team.qbFinalTotalScore = FinalTotalScore;
  // console.log(
  //   team.name,
  //   ScoreFromGLSP,
  //   suggestionProjectionFromTotalScore,
  //   FinalTotalScore
  // );
  // allQBs.forEach(function(qb) {

  // })
});

/////////assigning QB's their projected points for the week using totalScore from above///////////

const allQBFinalProjectedPointsValues = [];
const allQBFinalProjectedPointsValuesPlusNames = [];

const allQBManagedAndCashProjectedPointsValues = [];
const allQBManagedAndCashProjectedPointsValuesPlusNames = [];

// const numOfMatchingRoleWeeks = [];

// allQBs.map(function (team, i) {
//   let matchingWeeks = 0;

//   team.roleLastXNumOfWeeksUpToFive.forEach(function (week) {
//     if (week === allQBs[i].roleThisWeek) {
//       matchingWeeks = matchingWeeks + 1;
//     }
//   });
//   numOfMatchingRoleWeeks.push(matchingWeeks);
// });

if (gameInfo.week.currentWeek < 4) {
  let tempValue = 0;
  allQBs.map(function (team, i) {
    let ranNum = (Math.random() * 1.5 - 0.75).toFixed(1);
    // console.log(ranNum);
    let QBProjectedPoints = 0;
    let valueFromGLSP = 0;
    if (allQBGLSPScores[i] === 25) {
      valueFromGLSP = +allQBs[i].twentyFifthPercentProjectedPoints;
    }
    if (allQBGLSPScores[i] === 50) {
      valueFromGLSP = +allQBs[i].fiftyithPercentProjectedPoints;
    }
    if (allQBGLSPScores[i] === 75) {
      valueFromGLSP = +allQBs[i].seventyFifthPercentProjectedPoints;
    }

    if (valueFromGLSP && valueFromGLSP > 0) {
      let tempTotalValue =
        +team.fourForFourHalfPPRProjectedPoints +
        +team.fourForFourHalfPPRProjectedPoints +
        +team.fourForFourHalfPPRProjectedPoints +
        valueFromGLSP;

      tempValue = +(tempTotalValue.toFixed(2) / 4).toFixed(2);
    } else {
      firstTempvalue = +team.fourForFourHalfPPRProjectedPoints;
      tempValue = firstTempvalue.toFixed(2);
      // console.log(tempValue);
      tempValue = +(+tempValue + +ranNum).toFixed(2);
      // console.log(tempValue, team);
      if (team.name === 'Jayden Daniels') {
        // console.log(team);
        tempValue = +tempValue + 1;
      }
    }

    if (tempValue) {
      QBProjectedPoints = tempValue;
    }
    team.appQBProjectedPoints = +QBProjectedPoints;

    // console.log(team.projectedPassingTDs)

    let valueToAddForSixPointsForPassingTD = +(team.projectedPassingTDs * 2);
    team.appQBSixPointForPassingTDProjectedPoints = +(
      +QBProjectedPoints + +valueToAddForSixPointsForPassingTD
    ).toFixed(1);
    allQBFinalProjectedPointsValues.push(QBProjectedPoints);
    allQBFinalProjectedPointsValuesPlusNames.push(
      `${QBProjectedPoints}: ${allQBs[i].name}`
    );
    allQBManagedAndCashProjectedPointsValues.push(QBProjectedPoints);
    allQBManagedAndCashProjectedPointsValuesPlusNames.push(
      `${QBProjectedPoints}: ${allQBs[i].name}`
    );
  });
}

if (gameInfo.week.currentWeek > 3) {
  allQBs.map(function (team, i) {
    let QBProjectedPoints = 0;
    let valueFromGLSP = 0;
    let ranNum = (Math.random() * 1.5 - 0.75).toFixed(1);
    if (allQBGLSPScores[i] === 25) {
      valueFromGLSP = +allQBs[i].twentyFifthPercentProjectedPoints;
    }
    if (allQBGLSPScores[i] === 50) {
      valueFromGLSP = +allQBs[i].fiftyithPercentProjectedPoints;
    }
    if (allQBGLSPScores[i] === 75) {
      valueFromGLSP = +allQBs[i].seventyFifthPercentProjectedPoints;
    }

    let lowMax = +(
      (+team.twentyFifthPercentProjectedPoints +
        +team.fiftyithPercentProjectedPoints) /
      2
    ).toFixed(1);
    let highMax = +(
      (+team.seventyFifthPercentProjectedPoints +
        +team.fiftyithPercentProjectedPoints) /
      2
    ).toFixed(1);

    if (valueFromGLSP < lowMax) {
      valueFromGLSP = lowMax;
    }
    if (valueFromGLSP > highMax) {
      valueFromGLSP = highMax;
    }
    // console.log(team, +team.fourForFourHalfPPRProjectedPoints)
    let tempValue = 0;
    if (valueFromGLSP && valueFromGLSP > 0) {
      let initialTempValue = +team.fourForFourHalfPPRProjectedPoints;

      let secondTempValue = initialTempValue.toFixed(2);
      let tempTotalValue =
        +secondTempValue +
        +secondTempValue +
        +secondTempValue +
        valueFromGLSP +
        valueFromGLSP;

      tempValue = +(tempTotalValue / 5).toFixed(1);
    } else {
      let initialTempValue = +team.fourForFourHalfPPRProjectedPoints;

      let secondTempValue = initialTempValue.toFixed(1);
      tempValue = +secondTempValue;
      tempValue = +(+tempValue + +ranNum).toFixed(2);
    }

    QBProjectedPoints = tempValue;
    team.appQBProjectedPoints = +QBProjectedPoints;
    // console.log(team)
    // console.log(team.name, team.appQBProjectedPoints)
    // console.log(team.name, team.prjpassingTDs)
    let valueToAddForSixPointsForPassingTD = +(team.prjpassingTDs * 2);
    team.appQBSixPointForPassingTDProjectedPoints = +(
      +QBProjectedPoints + +valueToAddForSixPointsForPassingTD
    ).toFixed(1);
    // console.log(team.name, team.appQBProjectedPoints, team.appQBSixPointForPassingTDProjectedPoints)
    allQBFinalProjectedPointsValues.push(QBProjectedPoints);
    allQBFinalProjectedPointsValuesPlusNames.push(
      `${QBProjectedPoints}: ${allQBs[i].name}`
    );
    allQBManagedAndCashProjectedPointsValues.push(QBProjectedPoints);
    allQBManagedAndCashProjectedPointsValuesPlusNames.push(
      `${QBProjectedPoints}: ${allQBs[i].name}`
    );
  });
}

// if (gameInfo.week.currentWeek === 5 || gameInfo.week.currentWeek === 6) {
//   allQBs.forEach(function (team, i) {
//     // console.log(team);
//     let twentyFifthPercentProjection =
//       +allQBs[i].twentyFifthPercentProjectedPoints;
//     let fiftyithPercentProjection = +allQBs[i].fiftyithPercentProjectedPoints;
//     let seventyFifthPercentProjection =
//       +allQBs[i].seventyFifthPercentProjectedPoints;

//     let initialQBProjectedPoints = 0;

//     // console.log(team.roleLastXNumOfWeeksUpToFive[1]);
//     // let matchingWeeksPercentage =
//     //   numOfMatchingRoleWeeks[i] / allQBs[i].roleLastXNumOfWeeksUpToFive.length;

//     if (team.percentOfGamesPlayedLastFiveWeeks > 0.49) {
//       let fourForFour = team.fourForFourHalfPPRProjectedPoints;

//       if (allQBTotalScores[i] === 75) {
//         initialQBProjectedPoints = seventyFifthPercentProjection;
//       } else if (allQBTotalScores[i] === 62.5) {
//         initialQBProjectedPoints =
//           (fiftyithPercentProjection + seventyFifthPercentProjection) / 2;
//       } else if (allQBTotalScores[i] === 50) {
//         initialQBProjectedPoints = fiftyithPercentProjection;
//       } else if (allQBTotalScores[i] === 37.5) {
//         initialQBProjectedPoints =
//           (fiftyithPercentProjection + twentyFifthPercentProjection) / 2;
//       } else {
//         initialQBProjectedPoints = twentyFifthPercentProjection;
//       }

//       let total = +initialQBProjectedPoints + +fourForFour;

//       let QBProjectedPoints = (total / 2).toFixed(2);
//       // console.log(`${team.name}: ${QBProjectedPoints}`);
//       team.appQBProjectedPoints = +initialQBProjectedPoints;
//       allQBFinalProjectedPointsValues.push(QBProjectedPoints);
//       allQBFinalProjectedPointsValuesPlusNames.push(
//         `${QBProjectedPoints}: ${allQBs[i].name}`
//       );
//       allQBManagedAndCashProjectedPointsValues.push(QBProjectedPoints);
//       allQBManagedAndCashProjectedPointsValuesPlusNames.push(
//         `${QBProjectedPoints}: ${allQBs[i].name}`
//       );
//     } else {
//       QBProjectedPoints = team.fourForFourHalfPPRProjectedPoints;
//       team.appQBProjectedPoints = +QBProjectedPoints;

//       // console.log(team);

//       allQBFinalProjectedPointsValues.push(QBProjectedPoints);
//       allQBFinalProjectedPointsValuesPlusNames.push(
//         `${QBProjectedPoints}: ${allQBs[i].name}`
//       );
//       allQBManagedAndCashProjectedPointsValues.push(QBProjectedPoints);
//       allQBManagedAndCashProjectedPointsValuesPlusNames.push(
//         `${QBProjectedPoints}: ${allQBs[i].name}`
//       );
//     }
//   });
// }

// if (gameInfo.week.currentWeek > 6) {
//   allQBs.map(function (team, i) {
//     let fourForFour = team.fourForFourHalfPPRProjectedPoints;

//     let twentyFifthPercentProjection =
//       +allQBs[i].twentyFifthPercentProjectedPoints;
//     let fiftyithPercentProjection = +allQBs[i].fiftyithPercentProjectedPoints;
//     let seventyFifthPercentProjection =
//       +allQBs[i].seventyFifthPercentProjectedPoints;

//     let initialQBProjectedPoints = 0;

//     if (allQBs[i].percentOfGamesPlayedLastFiveWeeks > 0.49) {
//       // console.log(`${team.name} ${allQBTotalScores[i]}`);
//       if (allQBTotalScores[i] === 75) {
//         initialQBProjectedPoints = seventyFifthPercentProjection;
//       } else if (allQBTotalScores[i] === 62.5) {
//         let temp = fiftyithPercentProjection + seventyFifthPercentProjection;

//         initialQBProjectedPoints = temp / 2;
//       } else if (allQBTotalScores[i] === 50) {
//         initialQBProjectedPoints = fiftyithPercentProjection;
//       } else if (allQBTotalScores[i] === 37.5) {
//         let temp = fiftyithPercentProjection + twentyFifthPercentProjection;
//         initialQBProjectedPoints = temp / 2;
//       } else {
//         initialQBProjectedPoints = twentyFifthPercentProjection;
//       }

//       // console.log(`${initialQBProjectedPoints}: ${allQBs[i].name}`);

//       let total = +initialQBProjectedPoints + +fourForFour;
//       let QBProjectedPoints = +(total / 2).toFixed(2);

//       team.appQBProjectedPoints = +initialQBProjectedPoints;
//       let valueToAddForSixPointsForPassingTD = +(team.projectedPassingTDs * 2)
//     team.appQBSixPointForPassingTDProjectedPoints = +(+QBProjectedPoints + +valueToAddForSixPointsForPassingTD).toFixed(1)

//       // console.log(team);

//       allQBFinalProjectedPointsValues.push(initialQBProjectedPoints.toFixed(2));
//       allQBFinalProjectedPointsValuesPlusNames.push(
//         `${initialQBProjectedPoints.toFixed(2)}: ${allQBs[i].name}`
//       );

//       allQBManagedAndCashProjectedPointsValues.push(
//         QBProjectedPoints.toFixed(2)
//       );
//       allQBManagedAndCashProjectedPointsValuesPlusNames.push(
//         `${QBProjectedPoints.toFixed(2)}: ${allQBs[i].name}`
//       );
//     } else {
//       let valueFromGLSP = 0;
//       if (allQBGLSPScores[i] === 25) {
//         valueFromGLSP = +allQBs[i].twentyFifthPercentProjectedPoints;
//       }
//       if (allQBGLSPScores[i] === 50) {
//         valueFromGLSP = +allQBs[i].fiftyithPercentProjectedPoints;
//       }
//       if (allQBGLSPScores[i] === 75) {
//         valueFromGLSP = +allQBs[i].seventyFifthPercentProjectedPoints;
//       }

//       let tempTotalValue =
//         +team.fourForFourHalfPPRProjectedPoints +
//         +team.fourForFourHalfPPRProjectedPoints +
//         +team.fourForFourHalfPPRProjectedPoints +
//         valueFromGLSP;

//       let tempValue = +(tempTotalValue / 4).toFixed(2);

//       initialQBProjectedPoints = tempValue;

//       team.appQBProjectedPoints = +initialQBProjectedPoints;
//       let valueToAddForSixPointsForPassingTD = +(team.projectedPassingTDs * 2)
//     team.appQBSixPointForPassingTDProjectedPoints = +(+QBProjectedPoints + +valueToAddForSixPointsForPassingTD).toFixed(1)

//       allQBFinalProjectedPointsValues.push(
//         +initialQBProjectedPoints.toFixed(2)
//       );
//       allQBFinalProjectedPointsValuesPlusNames.push(
//         `${initialQBProjectedPoints.toFixed(2)}: ${allQBs[i].name}`
//       );
//       allQBManagedAndCashProjectedPointsValues.push(
//         initialQBProjectedPoints.toFixed(2)
//       );
//       allQBManagedAndCashProjectedPointsValuesPlusNames.push(
//         `${initialQBProjectedPoints.toFixed(2)}: ${allQBs[i].name}`
//       );
//     }
//   });
// }

////////////Calculating projected points per dollar, PP/d

const projectedPointsPerDollarDraftkings = [];
const projectedPointsPerDollarFanduel = [];
const projectedPointsPerDollarYahoo = [];

const managedAndCashprojectedPointsPerDollarDraftkings = [];
const managedAndCashprojectedPointsPerDollarFanduel = [];
const managedAndCashprojectedPointsPerDollarYahoo = [];

allQBs.forEach(function (team, i) {
  // console.log(team.draftkingsSalary);
  // console.log(allQBFinalProjectedPointsValues[i]);
  let pppddraftkings =
    allQBFinalProjectedPointsValues[i] / team.draftkingsSalary;
  let pppdfanduel = allQBFinalProjectedPointsValues[i] / team.fanduelSalary;
  let pppdyahoo = allQBFinalProjectedPointsValues[i] / team.yahooSalary;

  let draftkingsCashPorjectedPointsPerDollar = (
    +allQBManagedAndCashProjectedPointsValues[i] / team.draftkingsSalary
  ).toFixed(4);
  let fanduelCashPorjectedPointsPerDollar = (
    +allQBManagedAndCashProjectedPointsValues[i] / team.fanduelSalary
  ).toFixed(4);
  let yahooCashPorjectedPointsPerDollar = (
    +allQBManagedAndCashProjectedPointsValues[i] / team.yahooSalary
  ).toFixed(3);

  // console.log(`${team.name} ${yahooCashPorjectedPointsPerDollar}`);

  projectedPointsPerDollarDraftkings.push(pppddraftkings);
  projectedPointsPerDollarFanduel.push(pppdfanduel);
  projectedPointsPerDollarYahoo.push(pppdyahoo);

  managedAndCashprojectedPointsPerDollarDraftkings.push(
    draftkingsCashPorjectedPointsPerDollar
  );
  managedAndCashprojectedPointsPerDollarFanduel.push(
    fanduelCashPorjectedPointsPerDollar
  );
  managedAndCashprojectedPointsPerDollarYahoo.push(
    yahooCashPorjectedPointsPerDollar
  );
});

//creating all QB objects

const allQBObjects = {};
const allQBObjectsArray = [];
const allQBsMap = new Map();

allQBs.forEach(function (team, i) {
  let playerName = team.name;
  let position = 'QB';
  let teamABV = team.teamABV;
  let homeOrAway = team.homeOrAway;

  let percentDiffBetweenAppAndFourProj = +(
    +team.appQBProjectedPoints / +team.fourForFourFullPPRProjectedPoints
  ).toFixed(2);

  // console.log(
  //   team.name,
  //   team.appQBProjectedPoints,
  //   team.fourForFourFullPPRProjectedPoints,
  //   percentDiffBetweenAppAndFourProj
  // );

  // console.log(team);

  

  let tempAdj = +(+team.prjPassYards * .05).toFixed(1);
  let adj = +team.prjPassYards - +tempAdj

  let tempPassAdj = +(+team.prjpassingTDs * .05).toFixed(1);
  let passAdj = +team.prjpassingTDs - +tempPassAdj

  let tempRushAdj = +(+team.prjRushYards * .05).toFixed(1);
  let rushAdj = +team.prjRushYards - +tempRushAdj
  

  let tempAppProjPassAttempts = +(
    +team.prjpassattempts * +percentDiffBetweenAppAndFourProj
  ).toFixed(1);

  let tempAppProjCompletions = +(
    +team.prjcompletions * +percentDiffBetweenAppAndFourProj
  ).toFixed(1);

  let tempAppProjPassingYards = +(
    adj * +percentDiffBetweenAppAndFourProj 
  ).toFixed(1);

  let tempAppProjPassTDs = +(
    passAdj * +percentDiffBetweenAppAndFourProj
  ).toFixed(1);

  let ran = +(Math.random() * .2 - .1).toFixed(1);

  // console.log(ran);

  let tempAppProjINTs = +(+team.prjINTs + +ran).toFixed(1);

  let tempAppQBRushAttempts = +(
    +team.prjRushAttempts * +percentDiffBetweenAppAndFourProj
  ).toFixed(1);

  let tempAppQBRushYards = +(
    +rushAdj * +percentDiffBetweenAppAndFourProj
  ).toFixed(1);

  if(+team.prjRushYards - +tempAppQBRushYards < 1)  {
    if(percentDiffBetweenAppAndFourProj > 1) {
      tempAppQBRushYards = +(tempAppQBRushYards + 1).toFixed(1)
    }
    if(percentDiffBetweenAppAndFourProj <= 1) {
      tempAppQBRushYards = +(tempAppQBRushYards - 1).toFixed(1)
    }
    
  }

  let tempAppQBRushTDs = +(
    +team.prjRushTDs * +percentDiffBetweenAppAndFourProj
  ).toFixed(1);

  tempAppQBRushTDs = +(+tempAppQBRushTDs + +ran).toFixed(1);

  if(tempAppQBRushTDs < .05) {
    tempAppQBRushTDs = 0.1
  }

  let tempAstroQBProjection = +(
    (+tempAppProjPassingYards * .04) + 
    (+tempAppProjPassTDs * 4) +
    (+tempAppQBRushYards * .1) +
    (+tempAppQBRushTDs * 6) - 
    (+tempAppProjINTs * 2)
  ).toFixed(1);

  let tempAstroSixPtTDQBProjection = +(
    (+tempAppProjPassingYards * .04) + 
    (+tempAppProjPassTDs * 6) +
    (+tempAppQBRushYards * .1) +
    (+tempAppQBRushTDs * 6) - 
    (+tempAppProjINTs * 2)
  ).toFixed(1);
  
  
  // console.log(
  //   team.name, "-",
  //   `PassAttempts - ${tempAppProjPassAttempts}, four - ${team.prjpassattempts}`,  
  // );

  bye

  let teamName = '';
  allTeams.forEach(function (giTeam) {
    if (team.teamABV === giTeam.teamABV || team.teamABV === giTeam.altTeamABV) {
      teamName = giTeam.teamName;
      teamPointsPerGameLastFiveWeeks = giTeam.teamPointsPerGameLastFiveWeeks;
      byeWeek = giTeam.byeWeek2022;
      hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveweeks;
      opponentTeamName = giTeam.opponentThisWeek.teamName;
      opponentABV = giTeam.opponentThisWeek.teamABV;
      opponentqbName = giTeam.opponentThisWeek.qbName;
      opponentTeamProjectedPoints =
        giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
      bonusForHighExplosivePassVsBadExplosivePassDef =
        giTeam.bonusForHighExplosivePassVsBadExplosivePassDef;
    }
  });

  // console.log(team.appQBProjectedPoints);

  
  let qbObject = new QbObject(
    playerName,
    position,
    teamName,
    teamABV,
    
    byeWeek,
    homeOrAway,
    team.slate,
    +team.teamVTT,
    +team.teamProjectedPoints,
    +teamPointsPerGameLastFiveWeeks,
    hadByeInLastFiveWeeksIsTrue,
    team.appQBProjectedPoints,
    team.appQBSixPointForPassingTDProjectedPoints,
    team.prjpassattempts,
    team.percentOfGamesPlayedLastFiveWeeks,
    team.fantasyPointsFromRushingPerGameLastFiveWeeks,
    team.fantasyPointsFromPassingPerGameLastFiveWeeks,
    team.passAttemptsPerGameLastFiveWeeks,
    team.fantasyPointsPerPassAttemptLastFiveWeeks,
    team.glspavg,
    team.twentyFifthPercentProjectedPoints,
    team.seventyFifthPercentProjectedPoints,
    team.fourForFourFullPPRProjectedPoints,

    team.prjpassattempts, 
    team.prjcompletions, 
    team.prjPassYards, 
    team.prjpassingTDs, 
    team.projectedPassingTDs, 
    team.prjINTs, 
    team.prjRushAttempts, 
    team.prjRushYards, 
    team.prjRushTDs, 

    tempAppProjPassAttempts,
    tempAppProjCompletions,
    tempAppProjPassingYards,
    tempAppProjPassTDs,
    tempAppProjINTs,
    tempAppQBRushAttempts,
    tempAppQBRushYards,
    tempAppQBRushTDs,
    tempAstroQBProjection,
    tempAstroSixPtTDQBProjection,

    team.UDFantasyPointsProp,

    team.yahooSalary,
    team.fanduelSalary,
    team.draftkingsSalary,
    +team.percentOfSalaryCapYahoo,
    +team.percentOfSalaryCapFanduel,
    +team.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentqbName,
    opponentTeamProjectedPoints,
    bonusForHighExplosivePassVsBadExplosivePassDef,
    team.percentageOfFantasyPointsFromPassingLastFiveWeeks
  );


  allQBsMap.set(`${teamName}QB`, qbObject);
  allQBObjects.playerName = qbObject;
  allQBObjectsArray.push(qbObject);
});

// console.log(allQBsMap);

// allTeamQBObjects.SF49ers = qb;

allQBObjectsArray.forEach(function (qb) {
  if (qb.teamABV === 'SF') {
    allTeamQBObjects.SF49ers = qb;
  }
  if (qb.teamABV === 'CHI') {
    allTeamQBObjects.bears = qb;
  }
  if (qb.teamABV === 'CIN') {
    allTeamQBObjects.bengals = qb;
  }
  if (qb.teamABV === 'BUF') {
    allTeamQBObjects.bills = qb;
  }
  if (qb.teamABV === 'DEN') {
    allTeamQBObjects.broncos = qb;
  }
  if (qb.teamABV === 'CLE') {
    allTeamQBObjects.browns = qb;
  }
  if (qb.teamABV === 'TB') {
    allTeamQBObjects.buccaneers = qb;
  }
  if (qb.teamABV === 'ARI') {
    allTeamQBObjects.cardinals = qb;
  }
  if (qb.teamABV === 'LAC') {
    allTeamQBObjects.chargers = qb;
  }
  if (qb.teamABV === 'KC') {
    allTeamQBObjects.chiefs = qb;
  }
  if (qb.teamABV === 'IND') {
    allTeamQBObjects.colts = qb;
  }
  if (qb.teamABV === 'WAS') {
    allTeamQBObjects.commanders = qb;
  }
  if (qb.teamABV === 'DAL') {
    allTeamQBObjects.cowboys = qb;
  }
  if (qb.teamABV === 'MIA') {
    allTeamQBObjects.dolphins = qb;
  }
  if (qb.teamABV === 'PHI') {
    allTeamQBObjects.eagles = qb;
  }
  if (qb.teamABV === 'ATL') {
    allTeamQBObjects.falcons = qb;
  }
  if (qb.teamABV === 'NYG') {
    allTeamQBObjects.giants = qb;
  }
  if (qb.teamABV === 'JAC' || qb.teamABV === 'JAX') {
    allTeamQBObjects.jaguars = qb;
  }
  if (qb.teamABV === 'NYJ') {
    allTeamQBObjects.jets = qb;
  }
  if (qb.teamABV === 'DET') {
    allTeamQBObjects.lions = qb;
  }
  if (qb.teamABV === 'GB') {
    allTeamQBObjects.packers = qb;
  }
  if (qb.teamABV === 'CAR') {
    allTeamQBObjects.panthers = qb;
  }
  if (qb.teamABV === 'NE') {
    allTeamQBObjects.patriots = qb;
  }
  if (qb.teamABV === 'LV') {
    allTeamQBObjects.raiders = qb;
  }
  if (qb.teamABV === 'LAR') {
    allTeamQBObjects.rams = qb;
  }
  if (qb.teamABV === 'BAL') {
    allTeamQBObjects.ravens = qb;
  }
  if (qb.teamABV === 'NO') {
    allTeamQBObjects.saints = qb;
  }
  if (qb.teamABV === 'SEA') {
    allTeamQBObjects.seahawks = qb;
  }
  if (qb.teamABV === 'PIT') {
    allTeamQBObjects.steelers = qb;
  }
  if (qb.teamABV === 'HOU') {
    allTeamQBObjects.texans = qb;
  }
  if (qb.teamABV === 'TEN') {
    allTeamQBObjects.titans = qb;
  }
  if (qb.teamABV === 'MIN') {
    allTeamQBObjects.vikings = qb;
  }
});

// console.log(allTeamQBObjects);

//
////////////calc team def score///////////

const calcTeamDefScore = function (passedInTeamQBData, passedInTeamGameInfo) {
  // console.log(passedInTeamQBData);
  // console.log(passedInTeamGameInfo);
  // console.log(passedInTeamQBData.name);
  // console.log(passedInTeamQBData.name, passedInTeamQBData.oppQBName);
  // allQBs.forEach(function (qb) {
  //   if (passedInTeamQBData.oppQBName) {
  //     if (passedInTeamQBData.oppQBName === qb.name) console.log(qb.name);
  //   }
  // });
};

calcTeamDefScore(qbrawdata.SF49ers, gameInfo.SF49ers);
calcTeamDefScore(qbrawdata.bears, gameInfo.bears);
calcTeamDefScore(qbrawdata.bengals, gameInfo.bengals);
calcTeamDefScore(qbrawdata.bills, gameInfo.bills);
calcTeamDefScore(qbrawdata.broncos, gameInfo.broncos);
calcTeamDefScore(qbrawdata.browns, gameInfo.browns);
calcTeamDefScore(qbrawdata.buccaneers, gameInfo.buccaneers);
calcTeamDefScore(qbrawdata.cardinals, gameInfo.cardinals);
calcTeamDefScore(qbrawdata.chargers, gameInfo.chargers);
calcTeamDefScore(qbrawdata.chiefs, gameInfo.chiefs);
calcTeamDefScore(qbrawdata.colts, gameInfo.colts);
calcTeamDefScore(qbrawdata.commanders, gameInfo.commanders);
calcTeamDefScore(qbrawdata.cowboys, gameInfo.cowboys);
calcTeamDefScore(qbrawdata.dolphins, gameInfo.dolphins);
calcTeamDefScore(qbrawdata.eagles, gameInfo.eagles);
calcTeamDefScore(qbrawdata.falcons, gameInfo.falcons);
calcTeamDefScore(qbrawdata.giants, gameInfo.giants);
calcTeamDefScore(qbrawdata.jaguars, gameInfo.jaguars);
calcTeamDefScore(qbrawdata.jets, gameInfo.jets);
calcTeamDefScore(qbrawdata.lions, gameInfo.lions);
calcTeamDefScore(qbrawdata.packers, gameInfo.packers);
calcTeamDefScore(qbrawdata.panthers, gameInfo.panthers);
calcTeamDefScore(qbrawdata.patriots, gameInfo.patriots);
calcTeamDefScore(qbrawdata.raiders, gameInfo.raiders);
calcTeamDefScore(qbrawdata.rams, gameInfo.rams);
calcTeamDefScore(qbrawdata.ravens, gameInfo.ravens);
calcTeamDefScore(qbrawdata.saints, gameInfo.saints);
calcTeamDefScore(qbrawdata.seahawks, gameInfo.seahawks);
calcTeamDefScore(qbrawdata.steelers, gameInfo.steelers);
calcTeamDefScore(qbrawdata.texans, gameInfo.texans);
calcTeamDefScore(qbrawdata.titans, gameInfo.titans);
calcTeamDefScore(qbrawdata.vikings, gameInfo.vikings);

/////////all QB data////////////

const allQBData = {
  // allQBVtts: allQBvttValues,
  // allQBYPALastFiveGamesPlayeds: allQBYPALastFiveGamesPlayeds,
  // allQBTDRateLastFiveGamesPlayeds: allQBTDRateLastFiveGamesPlayeds,
  // allQBHomeOrAwayFavoriteOrUnderdogs: allQBHomeOrAwayFavoriteOrUnderdogs,
  // allQBSecondHighlyProjectedPassCatchers,
  // allQBSecondHighlyProjectedPassCatchers,

  // allQBTotalScores: allQBTotalScores,

  // allQBFinalProjectedPointsValues: allQBFinalProjectedPointsValues,
  allQBFinalProjectedPointsValuesPlusNames:
    allQBFinalProjectedPointsValuesPlusNames,

  // allQBManagedAndCashProjectedPointsValues:
  //   allQBManagedAndCashProjectedPointsValues,
  // allQBManagedAndCashProjectedPointsValuesPlusNames:
  //   allQBManagedAndCashProjectedPointsValuesPlusNames,

  // projectedPointsPerDollarDraftkings: projectedPointsPerDollarDraftkings,
  // projectedPointsPerDollarFanduel: projectedPointsPerDollarFanduel,
  // projectedPointsPerDollarYahoo: projectedPointsPerDollarYahoo,

  // managedAndCashprojectedPointsPerDollarDraftkings:
  //   managedAndCashprojectedPointsPerDollarDraftkings,
  // managedAndCashprojectedPointsPerDollarFanduel:
  //   managedAndCashprojectedPointsPerDollarFanduel,
  // managedAndCashprojectedPointsPerDollarYahoo:
  //   managedAndCashprojectedPointsPerDollarYahoo,

  allQBsMap: allQBsMap,

  allQBObjectsArray: allQBObjectsArray,
  allTeamQBObjects: allTeamQBObjects,
};

// console.log(allQBObjs.allQBObjectsArray);

// console.log(allQBData.projectedPointsPerDollarYahoo);
// console.log(allQBData.allQBFinalProjectedPointsValuesPlusNames);

// console.log(allQBData);

//
///
/////    PROJECTIONS    ////

const allQBProjectionsObjects = [];

async function propsData() {
  const propsData = await fetchTheData();
  // Now you can work with propsData here
  // console.log(propsData);
  propsData.forEach((player) => {
    // console.log(player.name)
    // console.log(player.udPassCompletionsProp);
    allQBObjectsArray.forEach((qb) => {
      // console.log(qb.playerName)
      if (qb.playerName === player.name) {
      
        // console.log(qb)
        // console.log(player.udPassCompletionsProp)
        // console.log(player)

        if(qb.playerName) {

        qb.udPassAttemptsProp = { prop: player.udPassAttemptsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.ppPassAttemptsProp = { prop: player.ppPassAttemptsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.udPassCompletionsProp = { prop: player.udPassCompletionsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.ppPassCompletionsProp = { prop: player.ppPassCompletionsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.udPassYardsProp = { prop: player.udPassYardsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.ppPassYardsProp = { prop: player.ppPassYardsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.udPassTDsProp = { prop: player.udPassTDsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.ppPassTDsProp = { prop: player.ppPassTDsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.udRushYardsProp = { prop: player.udRushYardssProp, isOverRecomended: false, isUnderRecomended: false };
        qb.ppRushYardsProp = { prop: player.ppRushYardssProp, isOverRecomended: false, isUnderRecomended: false };
        qb.udPassPlusRushYardsProp = { prop: player.udPassPlusRushYardsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.ppPassPlusRushYardsProp = { prop: player.ppPassPlusRushYardsProp, isOverRecomended: false, isUnderRecomended: false };
        qb.udFantasyScoreProp = { prop: player.udFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };
        qb.ppFantasyScoreProp = { prop: player.ppFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };
        

        // console.log(qb.playerName, qb.appProjCompletions, player.udPassCompletionsProp, player.ppPassCompletionsProp)

        //
        //
        //                                            passattempts
        //

           

           //                                             under
           //

           //normal

            //  console.log(qb.playerName, qb.udPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
        if(qb.udPassAttemptsProp.prop - qb.prjpassattempts  > 2 && qb.udPassAttemptsProp.prop - qb.appProjPassAttempts  > 2) {      
          qb.udPassAttemptsProp.isUnderRecomended = true
          // console.log(qb.playerName, qb.udPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
        }
        if(qb.ppPassAttemptsProp.prop - qb.prjpassattempts > 2 && qb.ppPassAttemptsProp.prop - qb.appProjPassAttempts > 2) {      
          qb.ppPassAttemptsProp.isUnderRecomended = true
          // console.log(qb.playerName, qb.ppPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
        }

           // high confidence

           if(qb.udPassAttemptsProp.prop - qb.prjpassattempts  > 3 && qb.udPassAttemptsProp.prop - qb.appProjPassAttempts > 3) {      
            qb.udPassAttemptsProp.highUnderConfidence = true
            //  console.log(qb.playerName, qb.udPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
          }
          if(qb.ppPassAttemptsProp.prop - qb.prjpassattempts  > 3 && qb.ppPassAttemptsProp.prop - qb.appProjPassAttempts > 3) {      
            qb.ppPassAttemptsProp.highUnderConfidence = true
          }



           //                                              over
           //

           //normal

          //  console.log(qb.playerName, qb.udPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
        if(qb.prjpassattempts - qb.udPassAttemptsProp.prop > 2 && qb.appProjPassAttempts - qb.udPassAttemptsProp.prop > 2) {      
          qb.udPassAttemptsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.udPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
        }
        if(qb.prjpassattempts - qb.ppPassAttemptsProp.prop > 2 && qb.appProjPassAttempts - qb.ppPassAttemptsProp.prop > 2) {      
          qb.ppPassAttemptsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.ppPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
        }

           // high confidence

           if(qb.prjpassattempts - qb.udPassAttemptsProp.prop > 3 && qb.appProjPassAttempts - qb.udPassAttemptsProp.prop > 3) {      
            qb.udPassAttemptsProp.highOverConfidence = true
            //  console.log(qb.playerName, qb.udPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
          }
          if(qb.prjpassattempts - qb.ppPassAttemptsProp.prop > 3 && qb.appProjPassAttempts - qb.ppPassAttemptsProp.prop > 3) {      
            qb.ppPassAttemptsProp.highOverConfidence = true
            // console.log(qb.playerName, qb.ppPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
          }

          //
      //
        //                                              Pass Completions
        //


        
           //                                             under
           //

           //normal

            // console.log(qb.playerName, qb.udPassCompletionsProp.prop, qb.appProjCompletions, qb.prjcompletions )
            if(qb.udPassCompletionsProp.prop - qb.prjcompletions  > 2 && qb.udPassCompletionsProp.prop - qb.appProjCompletions  > 2) {      
              qb.udPassCompletionsProp.isUnderRecomended = true
              //  console.log(qb.playerName, qb.udPassCompletionsProp.prop, qb.appProjCompletions, qb.prjcompletions )
            }
            if(qb.ppPassCompletionsProp.prop - qb.prjcompletions > 2 && qb.ppPassCompletionsProp.prop - qb.appProjCompletions > 2) {      
              qb.ppPassCompletionsProp.isUnderRecomended = true
              // console.log(qb.playerName, qb.ppPassAttemptsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
            }
    
               // high confidence
    
               if(qb.udPassCompletionsProp.prop - qb.prjcompletions  > 3 && qb.udPassCompletionsProp.prop - qb.appProjCompletions > 3) {      
                qb.udPassCompletionsProp.highUnderConfidence = true
                //  console.log(qb.playerName, qb.udPassCompletionsProp.prop, qb.appProjCompletions, qb.prjcompletions )
              }
              if(qb.ppPassCompletionsProp.prop - qb.prjcompletions  > 3 && qb.ppPassCompletionsProp.prop - qb.appProjCompletions > 3) {      
                qb.ppPassCompletionsProp.highUnderConfidence = true
              }
    
    
    
               //                                              over
               //

            //normal


            // console.log(qb.playerName, qb.udPassCompletionsProp.prop, qb.appProjCompletions, qb.prjcompletions )
        if(qb.prjcompletions - qb.udPassCompletionsProp.prop > 1.5 && qb.appProjCompletions - qb.udPassCompletionsProp.prop > 1.5) {      
          qb.udPassCompletionsProp.isOverRecomended = true
          //  console.log(qb.playerName, qb.udPassCompletionsProp.prop, qb.appProjCompletions, qb.prjcompletions )
        }
        if(qb.prjcompletions - qb.ppPassCompletionsProp.prop > 1.5 && qb.appProjCompletions - qb.ppPassCompletionsProp.prop > 1.5) {      
          qb.ppPassCompletionsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.ppPassCompletionsProp.prop, qb.prjcompletions, qb.appProjCompletions )
        }
        
        // console.log(qb.playerName, qb.ppPassCompletionsProp.prop, qb.prjcompletions, qb.appProjCompletions )

            // high confidence

        if(qb.prjcompletions - qb.udPassCompletionsProp.prop > 2.5 && qb.appProjCompletions - qb.udPassCompletionsProp.prop > 2.5) {      
              qb.udPassCompletionsProp.highOverConfidence = true
            }
        if(qb.prjcompletions - qb.ppPassCompletionsProp.prop > 2.5 && qb.appProjCompletions - qb.ppPassCompletionsProp.prop > 2.5) {      
              qb.ppPassCompletionsProp.highOverConfidence = true
              // console.log(qb.playerName, qb.ppPassCompletionsProp.prop, qb.prjcompletions, qb.appProjCompletions )
            }

        //
        //                                           Pass Yards
        //


        //                                             under
           //

           //normal

            // console.log(qb.playerName, qb.udPassYardsProp.prop, qb.appProjPassingYards, qb.prjPassYards )
            if(qb.udPassYardsProp.prop - qb.prjPassYards  > 15 && qb.udPassYardsProp.prop - qb.appProjPassingYards  > 15) {      
              qb.udPassYardsProp.isUnderRecomended = true
              //  console.log(qb.playerName, qb.udPassYardsProp.prop, qb.appProjPassingYards, qb.prjPassYards )
            }
            if(qb.ppPassYardsProp.prop - qb.prjPassYards > 15 && qb.ppPassYardsProp.prop - qb.appProjPassingYards > 15) {      
              qb.ppPassYardsProp.isUnderRecomended = true
              // console.log(qb.playerName, qb.ppPassYardsProp.prop, qb.appProjPassingYards, qb.prjPassYards )
            }
    
               // high confidence
    
               if(qb.udPassYardsProp.prop - qb.prjPassYards  > 30 && qb.udPassYardsProp.prop - qb.appProjPassingYards > 30) {      
                qb.udPassYardsProp.highUnderConfidence = true
                //  console.log(qb.playerName, qb.udPassYardsProp.prop, qb.appProjPassingYards, qb.prjPassYards )
              }
              if(qb.ppPassYardsProp.prop - qb.prjPassYards  > 30 && qb.ppPassYardsProp.prop - qb.appProjPassingYards > 30) {      
                qb.ppPassYardsProp.highUnderConfidence = true
                // console.log(qb.playerName, qb.ppPassYardsProp.prop, qb.appProjPassAttempts, qb.prjpassattempts )
              }
              
    
    
               //                                              over
               //


            // normal

        if(qb.prjPassYards - qb.udPassYardsProp.prop > 15 && qb.appProjPassingYards - qb.udPassYardsProp.prop > 15) {      
          qb.udPassYardsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.udPassYardsProp.prop, qb.prjPassYards, qb.appProjPassingYards )
        }
        if(qb.prjPassYards - qb.ppPassYardsProp.prop > 15 && qb.appProjPassingYards - qb.ppPassYardsProp.prop > 15) {      
          qb.ppPassYardsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.ppPassYardsProp.prop, qb.prjPassYards, qb.appProjPassingYards )
        }

            // high confidence

        if(qb.prjPassYards - qb.udPassYardsProp.prop > 30 && qb.appProjPassingYards - qb.udPassYardsProp.prop > 30) {      
              qb.udPassYardsProp.highOverConfidence = true
              // console.log(qb.playerName, qb.udPassYardsProp.prop, qb.prjPassYards, qb.appProjPassingYards )
            }
        if(qb.prjPassYards - qb.ppPassYardsProp.prop > 30 && qb.appProjPassingYards - qb.ppPassYardsProp.prop > 30) {      
              qb.ppPassYardsProp.highOverConfidence = true
              // console.log(qb.playerName, qb.ppPassYardsProp.prop, qb.prjPassYards, qb.appProjPassingYards )
            }

      //    
      //                                           Pass TDs
      //
      
      //                                             under
           //

           //normal

            // console.log(qb.playerName, qb.udPassTDsProp.prop, qb.appProjPassTDs, qb.prjpassingTDs )
            if(qb.udPassTDsProp.prop - qb.prjpassingTDs  > .2 && qb.udPassTDsProp.prop - qb.appProjPassTDs  > .2) {      
              qb.udPassTDsProp.isUnderRecomended = true
              //  console.log(qb.playerName, qb.udPassTDsProp.prop, qb.appProjPassTDs, qb.prjpassingTDs )
            }
            if(qb.ppPassTDsProp.prop - qb.prjpassingTDs > .2 && qb.ppPassTDsProp.prop - qb.appProjPassTDs > .2) {      
              qb.ppPassTDsProp.isUnderRecomended = true
              // console.log(qb.playerName, qb.ppPassTDsProp.prop, qb.appProjPassAttempts, qb.prjpassingTDs )
            }
    
               // high confidence
    
               if(qb.udPassTDsProp.prop - qb.prjpassingTDs  > .4 && qb.udPassTDsProp.prop - qb.appProjPassTDs > .4) {      
                qb.udPassTDsProp.highUnderConfidence = true
                //  console.log(qb.playerName, qb.udPassTDsProp.prop, qb.appProjPassTDs, qb.prjpassingTDs )
              }
              if(qb.ppPassTDsProp.prop - qb.prjpassingTDs  > .4 && qb.ppPassTDsProp.prop - qb.appProjPassTDs > .4) {      
                qb.ppPassTDsProp.highUnderConfidence = true
                // console.log(qb.playerName, qb.ppPassTDsProp.prop, qb.appProjPassTDs, qb.prjpassingTDs )
              }
              
    
    
               //                                              over
               //

                    // normal

      // console.log(qb.playerName, qb.udPassTDsProp.prop, qb.prjpassingTDs, qb.appProjPassTDs )
        if(qb.prjpassingTDs - qb.udPassTDsProp.prop > .2 && qb.appProjPassTDs - qb.udPassTDsProp.prop > .2) {      
          qb.udPassTDsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.udPassTDsProp.prop, qb.prjpassingTDs, qb.appProjPassTDs )
        }
        // console.log(qb.playerName, qb.ppPassTDsProp.prop, qb.prjpassingTDs, qb.appProjPassTDs )
        if(qb.prjpassingTDs - qb.ppPassTDsProp.prop > .2 && qb.appProjPassTDs - qb.ppPassTDsProp.prop > .2) {      
          qb.ppPassTDsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.ppPassTDsProp.prop, qb.prjpassingTDs, qb.appProjPassTDs )
        }

            // high confidence

        if(qb.prjpassingTDs - qb.udPassTDsProp.prop > .4 && qb.appProjPassTDs - qb.udPassTDsProp.prop > .4) {      
              qb.udPassTDsProp.highOverConfidence = true
              // console.log(qb.playerName, qb.udPassTDsProp.prop, qb.prjpassingTDs, qb.appProjPassTDs )
            }
        if(qb.prjpassingTDs - qb.ppPassTDsProp.prop > .4 && qb.appProjPassTDs - qb.ppPassTDsProp.prop > .4) {      
              qb.ppPassTDsProp.highOverConfidence = true
              // console.log(qb.playerName, qb.ppPassTDsProp.prop, qb.prjpassingTDs, qb.appProjPassTDs )
            }


            
      //    
      //                                           Rush Yards
      //

      //                                               under
      //

      //normal

      //  console.log(qb.playerName, qb.udRushYardsProp.prop, qb.appProjQBRushYards, qb.prjRushYards )
       if(qb.udRushYardsProp.prop - qb.prjRushYards  > 7 && qb.udRushYardsProp.prop - qb.appProjQBRushYards  > 7) {      
         qb.udRushYardsProp.isUnderRecomended = true
          // console.log(qb.playerName, qb.udRushYardsProp.prop, qb.appProjQBRushYards, qb.prjRushYards )
       }
       if(qb.ppRushYardsProp.prop - qb.prjRushYards > 7 && qb.ppRushYardsProp.prop - qb.appProjQBRushYards > 7) {      
         qb.ppRushYardsProp.isUnderRecomended = true
        //  console.log(qb.playerName, qb.ppRushYardsProp.prop, qb.appProjPassAttempts, qb.prjRushYards )
       }

          // high confidence

          if(qb.udRushYardsProp.prop - qb.prjRushYards  > 12 && qb.udRushYardsProp.prop - qb.appProjQBRushYards > 12) {      
           qb.udRushYardsProp.highUnderConfidence = true
           //  console.log(qb.playerName, qb.udRushYardsProp.prop, qb.appProjQBRushYards, qb.prjRushYards )
         }
         if(qb.ppRushYardsProp.prop - qb.prjRushYards  > 12 && qb.ppRushYardsProp.prop - qb.appProjQBRushYards > 12) {      
           qb.ppRushYardsProp.highUnderConfidence = true
           // console.log(qb.playerName, qb.ppRushYardsProp.prop, qb.appProjQBRushYards, qb.prjRushYards )
         }
         


          //                                              over
          //
      

                    // normal

      // console.log(qb.playerName, qb.udRushYardsProp.prop, qb.prjRushYards, qb.appProjQBRushYards )
        if(qb.prjRushYards - qb.udRushYardsProp.prop > 7 && qb.appProjQBRushYards - qb.udRushYardsProp.prop > 7) {      
          qb.udRushYardsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.udRushYardsProp.prop, qb.prjRushYards, qb.appProjQBRushYards )
        }
        // console.log(qb.playerName, qb.ppRushYardsProp.prop, qb.prjRushYards, qb.appProjQBRushYards )
        if(qb.prjRushYards - qb.ppRushYardsProp.prop > 7 && qb.appProjQBRushYards - qb.ppRushYardsProp.prop > 7) {      
          qb.ppRushYardsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.ppRushYardsProp.prop, qb.prjRushYards, qb.appProjQBRushYards )
        }

            // high confidence

        if(qb.prjRushYards - qb.udRushYardsProp.prop > 12 && qb.appProjQBRushYards - qb.udRushYardsProp.prop > 12) {      
              qb.udRushYardsProp.highOverConfidence = true
              // console.log(qb.playerName, qb.udRushYardsProp.prop, qb.prjRushYards, qb.appProjQBRushYards )
            }
        if(qb.prjRushYards - qb.ppRushYardsProp.prop > 12 && qb.appProjQBRushYards - qb.ppRushYardsProp.prop > 12) {      
              qb.ppRushYardsProp.highOverConfidence = true
              // console.log(qb.playerName, qb.ppRushYardsProp.prop, qb.prjRushYards, qb.appProjQBRushYards )
            }
        


            //    
      //                                         Pass + Rush Yards
      //

      //                                               under
      // 

      //normal

      //  console.log(qb.playerName, qb.udPassPlusRushYardsProp.prop, qb.appProjQBRushYards, qb.prjRushYards )
       if(qb.udPassPlusRushYardsProp.prop - (+qb.prjRushYards + +qb.prjPassYards)  > 7 && qb.udPassPlusRushYardsProp.prop - (qb.appProjQBRushYards + qb.appProjPassingYards)  > 7) {      
        qb.udPassPlusRushYardsProp.isUnderRecomended = true
        //  console.log(qb.playerName, qb.udPassPlusRushYardsProp.prop, (qb.appProjQBRushYards + qb.appProjPassingYards), (+qb.prjRushYards + +qb.prjPassYards) )
      }
      if(qb.ppPassPlusRushYardsProp.prop - (+qb.prjRushYards + +qb.prjPassYards) > 7 && qb.ppPassPlusRushYardsProp.prop - (qb.appProjQBRushYards + qb.appProjPassingYards) > 7) {      
        qb.ppPassPlusRushYardsProp.isUnderRecomended = true
        // console.log(qb.playerName, qb.ppPassPlusRushYardsProp.prop, (qb.appProjQBRushYards + qb.appProjPassingYards), (+qb.prjRushYards + +qb.prjPassYards) )
      }

         // high confidence

         if(qb.udPassPlusRushYardsProp.prop - (+qb.prjRushYards + +qb.prjPassYards)  > 12 && qb.udPassPlusRushYardsProp.prop - (qb.appProjQBRushYards + qb.appProjPassingYards) > 12) {      
          qb.udPassPlusRushYardsProp.highUnderConfidence = true
          //  console.log(qb.playerName, qb.udPassPlusRushYardsProp.prop, (qb.appProjQBRushYards + qb.appProjPassingYards), (+qb.prjRushYards + +qb.prjPassYards) )
        }
        if(qb.ppPassPlusRushYardsProp.prop - (+qb.prjRushYards + +qb.prjPassYards)  > 12 && qb.ppPassPlusRushYardsProp.prop - (qb.appProjQBRushYards + qb.appProjPassingYards) > 12) {      
          qb.ppPassPlusRushYardsProp.highUnderConfidence = true
          // console.log(qb.playerName, qb.ppPassPlusRushYardsProp.prop, (qb.appProjQBRushYards + qb.appProjPassingYards), (+qb.prjRushYards + +qb.prjPassYards) )
        }
        


         //                                              over
         //
     

                   // normal

    //  console.log(qb.playerName, qb.udPassPlusRushYardsProp.prop, (+qb.prjRushYards + +qb.prjPassYards), (qb.appProjQBRushYards + qb.appProjPassingYards) )
       if((+qb.prjRushYards + +qb.prjPassYards) - qb.udPassPlusRushYardsProp.prop > 7 && (qb.appProjQBRushYards + qb.appProjPassingYards) - qb.udPassPlusRushYardsProp.prop > 7) {      
         qb.udPassPlusRushYardsProp.isOverRecomended = true
        // console.log(qb.playerName, qb.udPassPlusRushYardsProp.prop, (qb.appProjQBRushYards + qb.appProjPassingYards), (+qb.prjRushYards + +qb.prjPassYards) )
       }
       // console.log(qb.playerName, qb.ppPassPlusRushYardsProp.prop, qb.prjRushYards, qb.appProjQBRushYards )
       if((+qb.prjRushYards + +qb.prjPassYards) - qb.ppPassPlusRushYardsProp.prop > 7 && (qb.appProjQBRushYards + qb.appProjPassingYards) - qb.ppPassPlusRushYardsProp.prop > 7) {      
         qb.ppPassPlusRushYardsProp.isOverRecomended = true
          // console.log(qb.playerName, qb.ppPassPlusRushYardsProp.prop, (qb.appProjQBRushYards + qb.appProjPassingYards), (+qb.prjRushYards + +qb.prjPassYards) )
       }

           // high confidence

       if((+qb.prjRushYards + +qb.prjPassYards) - qb.udPassPlusRushYardsProp.prop > 12 && (qb.appProjQBRushYards + qb.appProjPassingYards) - qb.udPassPlusRushYardsProp.prop > 12) {      
             qb.udPassPlusRushYardsProp.highOverConfidence = true
          //  console.log(qb.playerName, qb.udPassPlusRushYardsProp.prop, (qb.appProjQBRushYards + qb.appProjPassingYards), (+qb.prjRushYards + +qb.prjPassYards) )
           }
       if((+qb.prjRushYards + +qb.prjPassYards) - qb.ppPassPlusRushYardsProp.prop > 12 && (qb.appProjQBRushYards + qb.appProjPassingYards) - qb.ppPassPlusRushYardsProp.prop > 12) {      
             qb.ppPassPlusRushYardsProp.highOverConfidence = true
            //  console.log(qb.playerName, qb.ppPassPlusRushYardsProp.prop, (qb.appProjQBRushYards + qb.appProjPassingYards), (+qb.prjRushYards + +qb.prjPassYards) )
           }



             //    
      //                                           Fantasy Score
      //

      //                                               under
      //

      //normal

      //  console.log(qb.playerName, qb.udFantasyScoreProp.prop, qb.astroQBProjection, qb.fourForFourFullPPRProjectedPoints, qb.glspavg )
       if(qb.udFantasyScoreProp.prop - qb.fourForFourFullPPRProjectedPoints  > 1.5 && qb.udFantasyScoreProp.prop - qb.astroQBProjection  > 1 && qb.udFantasyScoreProp.prop - qb.glspavg > 1.5) {      
        qb.udFantasyScoreProp.isUnderRecomended = true
        //  console.log(qb.playerName, qb.udFantasyScoreProp.prop, qb.astroQBProjection, qb.fourForFourFullPPRProjectedPoints, qb.glspavg )
      }
      if(qb.ppFantasyScoreProp.prop - qb.fourForFourFullPPRProjectedPoints > 1.5 && qb.ppFantasyScoreProp.prop - qb.astroQBProjection > 1 && qb.ppFantasyScoreProp.prop - qb.glspavg > 1.5) {      
        qb.ppFantasyScoreProp.isUnderRecomended = true
        // console.log(qb.playerName, qb.ppFantasyScoreProp.prop, qb.appProjPassAttempts, qb.fourForFourFullPPRProjectedPoints, qb.glspavg )
      }

         // high confidence

         if(qb.udFantasyScoreProp.prop - qb.fourForFourFullPPRProjectedPoints  > 2 && qb.udFantasyScoreProp.prop - qb.astroQBProjection > 2 && qb.udFantasyScoreProp.prop - qb.glspavg > 2) {      
          qb.udFantasyScoreProp.highUnderConfidence = true
          //  console.log(qb.playerName, qb.udFantasyScoreProp.prop, qb.astroQBProjection, qb.fourForFourFullPPRProjectedPoints, qb.glspavg )
        }
        if(qb.ppFantasyScoreProp.prop - qb.fourForFourFullPPRProjectedPoints  > 2 && qb.ppFantasyScoreProp.prop - qb.astroQBProjection > 2 && qb.ppFantasyScoreProp.prop - qb.glspavg > 2) {      
          qb.ppFantasyScoreProp.highUnderConfidence = true
          // console.log(qb.playerName, qb.ppFantasyScoreProp.prop, qb.astroQBProjection, qb.fourForFourFullPPRProjectedPoints, qb.glspavg )
        }
        


         //                                              over
         //
     

                   // normal

    //  console.log(qb.playerName, qb.udFantasyScoreProp.prop, qb.fourForFourFullPPRProjectedPoints, qb.astroQBProjection, qb.glspavg )
       if(qb.astroQBProjection - qb.udFantasyScoreProp.prop > 1.5 && qb.glspavg - qb.udFantasyScoreProp.prop> 1.5) {      
         qb.udFantasyScoreProp.isOverRecomended = true
        //  console.log(qb.playerName, qb.udFantasyScoreProp.prop,qb.astroQBProjection, qb.glspavg )
       }
       // console.log(qb.playerName, qb.ppFantasyScoreProp.prop,qb.astroQBProjection )
       if(qb.astroQBProjection - qb.ppFantasyScoreProp.prop > 1.5 && qb.glspavg - qb.ppFantasyScoreProp.prop > 1.5) {      
         qb.ppFantasyScoreProp.isOverRecomended = true
        //  console.log(qb.playerName, qb.ppFantasyScoreProp.prop,qb.astroQBProjection, qb.glspavg )
       }

           // high confidence

       if(qb.astroQBProjection - qb.udFantasyScoreProp.prop > 2.5 && qb.glspavg - qb.udFantasyScoreProp.prop> 2.5) {      
             qb.udFantasyScoreProp.highOverConfidence = true
            //  console.log(qb.playerName, qb.udFantasyScoreProp.prop,qb.astroQBProjection, qb.glspavg )
           }
       if(qb.astroQBProjection - qb.ppFantasyScoreProp.prop > 2.5 && qb.glspavg - qb.ppFantasyScoreProp.prop> 2.5) {      
             qb.ppFantasyScoreProp.highOverConfidence = true
            //  console.log(qb.playerName, qb.ppFantasyScoreProp.prop, qb.astroQBProjection, qb.glspavg )
           }
      

        // console.log(qb)  
        //  console.log(qb.playerName, qb.udPassYardsProp.prop, qb.prjPassYards, qb.appProjPassingYards )
      }
    }
    })
  })

  allQBObjectsArray.forEach(function (player) {
    // console.log(player);
    class ProjectionsObject {
      constructor(
        currentWeek,
        name,
        position,
        team,
        appProjPassAttempts,
      appProjCompletions,
      appProjPassingYards,
      appProjPassTDs,
      appProjINTs,
      appProjQBRushAttempts,
      appProjQBRushYards,
      appProjQBRushTDs,
      astroQBProjection,
      astroSixPtTDQBProjection,
  
      udPassAttemptsProp,
      ppPassAttemptsProp,
      udPassCompletionsProp,
      ppPassCompletionsProp,
      udPassYardsProp,
      ppPassYardsProp,
      udPassTDsProp,
      ppPassTDsProp,
      udRushYardsProp,
      ppRushYardsProp,
      udPassPlusRushYardsProp,
      ppPassPlusRushYardsProp,
      udFantasyScoreProp,
      ppFantasyScoreProp,
  
  
        appHalfProjectedPoints,
        appFullProjectedPoints,
        appTEPProjectedPoints,
        appQBSixPointForPassingTDProjectedPoints,
        staticFourPointPerProjection
      ) {
        this.currentWeek = currentWeek;
        this.name = name;
        this.position = position;
        this.team = team;
        this.appProjPassAttempts = appProjPassAttempts;
      this.appProjCompletions = appProjCompletions;
      this.appProjPassingYards = appProjPassingYards;
      this.appProjPassTDs = appProjPassTDs;
      this.appProjINTs = appProjINTs;
      this.appProjQBRushAttempts = appProjQBRushAttempts;
      this.appProjQBRushYards = appProjQBRushYards;
      this.appProjQBRushTDs = appProjQBRushTDs;
      this.astroQBProjection = astroQBProjection;
      this.astroSixPtTDQBProjection = astroSixPtTDQBProjection
  
      this.udPassAttemptsProp = udPassAttemptsProp
      this.ppPassAttemptsProp = ppPassAttemptsProp
      this.udPassCompletionsProp = udPassCompletionsProp
      this.ppPassCompletionsProp = ppPassCompletionsProp     
      this.udPassYardsProp = udPassYardsProp
      this.ppPassYardsProp = ppPassYardsProp
      this.udPassTDsProp = udPassTDsProp
      this.ppPassTDsProp = ppPassTDsProp
      this.udRushYardsProp = udRushYardsProp
      this.ppRushYardsProp = ppRushYardsProp
      this.udPassPlusRushYardsProp = udPassPlusRushYardsProp
      this.ppPassPlusRushYardsProp = ppPassPlusRushYardsProp
      this.udFantasyScoreProp = udFantasyScoreProp
      this.ppFantasyScoreProp = ppFantasyScoreProp
  
        this.appHalfProjectedPoints = appHalfProjectedPoints;
        this.appFullProjectedPoints = appFullProjectedPoints;
        this.appTEPProjectedPoints = appTEPProjectedPoints;
        this.appQBSixPointForPassingTDProjectedPoints =
          appQBSixPointForPassingTDProjectedPoints;
        this.staticFourPointPerProjection = staticFourPointPerProjection;
      }
    }
  
    let projectionToUse = +player.appProjectedPoints.toFixed(1);
  
    let qbProjectionsObject = new ProjectionsObject(
      gameInfo.week.currentWeek,
      player.playerName,
      player.position,
      player.teamABV,
  
      player.appProjPassAttempts,
      player.appProjCompletions,
      player.appProjPassingYards,
      player.appProjPassTDs,
      player.appProjINTs,
      player.appProjQBRushAttempts,
      player.appProjQBRushYards,
      player.appProjQBRushTDs,
      player.astroQBProjection,
      player.astroSixPtTDQBProjection,
  
      player.udPassAttemptsProp,
      player.ppPassAttemptsProp,
      player.udPassCompletionsProp,
      player.ppPassCompletionsProp,    
      player.udPassYardsProp,
      player.ppPassYardsProp,
      player.udPassTDsProp,
      player.ppPassTDsProp,
      player.udRushYardsProp,
      player.ppRushYardsProp,
      player.udPassPlusRushYardsProp,
      player.ppPassPlusRushYardsProp,
      player.udFantasyScoreProp,
      player.ppFantasyScoreProp,
  
      projectionToUse,
      projectionToUse,
      projectionToUse,
      player.appQBSixPointForPassingTDProjectedPoints,
      projectionToUse
    );
  
    allQBProjectionsObjects.push(qbProjectionsObject);
  });
  return allQBProjectionsObjects
}

propsData()

// allQBObjectsArray.forEach(function (player) {
//   // console.log(player);
//   class ProjectionsObject {
//     constructor(
//       currentWeek,
//       name,
//       position,
//       team,
//       appProjPassAttempts,
//     appProjCompletions,
//     appProjPassingYards,
//     appProjPassTDs,
//     appProjINTs,
//     appProjQBRushAttempts,
//     appProjQBRushYards,
//     appProjQBRushTDs,
//     astroQBProjection,
//     astroSixPtTDQBProjection,

//     udPassAttemptsProp,
//     ppPassAttemptsProp,
//     udPassCompletionsProp,
//     ppPassCompletionsProp,
//     udPassYardsProp,
//     ppPassYardsProp,
//     udPassTDsProp,
//     ppPassTDsProp,
//     udRushYardsProp,
//     ppRushYardsProp,
//     udPassPlusRushYardsProp,
//     ppPassPlusRushYardsProp,
//     udFantasyScoreProp,
//     ppFantasyScoreProp,


//       appHalfProjectedPoints,
//       appFullProjectedPoints,
//       appTEPProjectedPoints,
//       appQBSixPointForPassingTDProjectedPoints,
//       staticFourPointPerProjection
//     ) {
//       this.currentWeek = currentWeek;
//       this.name = name;
//       this.position = position;
//       this.team = team;
//       this.appProjPassAttempts = appProjPassAttempts;
//     this.appProjCompletions = appProjCompletions;
//     this.appProjPassingYards = appProjPassingYards;
//     this.appProjPassTDs = appProjPassTDs;
//     this.appProjINTs = appProjINTs;
//     this.appProjQBRushAttempts = appProjQBRushAttempts;
//     this.appProjQBRushYards = appProjQBRushYards;
//     this.appProjQBRushTDs = appProjQBRushTDs;
//     this.astroQBProjection = astroQBProjection;
//     this.astroSixPtTDQBProjection = astroSixPtTDQBProjection

//     this.udPassAttemptsProp = udPassAttemptsProp
//     this.ppPassAttemptsProp = ppPassAttemptsProp
//     this.udPassCompletionsProp = udPassCompletionsProp
//     this.ppPassCompletionsProp = ppPassCompletionsProp     
//     this.udPassYardsProp = udPassYardsProp
//     this.ppPassYardsProp = ppPassYardsProp
//     this.udPassTDsProp = udPassTDsProp
//     this.ppPassTDsProp = ppPassTDsProp
//     this.udRushYardsProp = udRushYardsProp
//     this.ppRushYardsProp = ppRushYardsProp
//     this.udPassPlusRushYardsProp = udPassPlusRushYardsProp
//     this.ppPassPlusRushYardsProp = ppPassPlusRushYardsProp
//     this.udFantasyScoreProp = udFantasyScoreProp
//     this.ppFantasyScoreProp = ppFantasyScoreProp

//       this.appHalfProjectedPoints = appHalfProjectedPoints;
//       this.appFullProjectedPoints = appFullProjectedPoints;
//       this.appTEPProjectedPoints = appTEPProjectedPoints;
//       this.appQBSixPointForPassingTDProjectedPoints =
//         appQBSixPointForPassingTDProjectedPoints;
//       this.staticFourPointPerProjection = staticFourPointPerProjection;
//     }
//   }

//   let projectionToUse = +player.appProjectedPoints.toFixed(1);

//   let qbProjectionsObject = new ProjectionsObject(
//     gameInfo.week.currentWeek,
//     player.playerName,
//     player.position,
//     player.teamABV,

//     player.appProjPassAttempts,
//     player.appProjCompletions,
//     player.appProjPassingYards,
//     player.appProjPassTDs,
//     player.appProjINTs,
//     player.appProjQBRushAttempts,
//     player.appProjQBRushYards,
//     player.appProjQBRushTDs,
//     player.astroQBProjection,
//     player.astroSixPtTDQBProjection,

//     player.udPassAttemptsProp,
//     player.ppPassAttemptsProp,
//     player.udPassCompletionsProp,
//     player.ppPassCompletionsProp,    
//     player.udPassYardsProp,
//     player.ppPassYardsProp,
//     player.udPassTDsProp,
//     player.ppPassTDsProp,
//     player.udRushYardsProp,
//     player.ppRushYardsProp,
//     player.udPassPlusRushYardsProp,
//     player.ppPassPlusRushYardsProp,
//     player.udFantasyScoreProp,
//     player.ppFantasyScoreProp,

//     projectionToUse,
//     projectionToUse,
//     projectionToUse,
//     player.appQBSixPointForPassingTDProjectedPoints,
//     projectionToUse
//   );

//   allQBProjectionsObjects.push(qbProjectionsObject);
// });









// console.log(allTeamQBObjects);

allQBData.allQBProjectionsObjects = allQBProjectionsObjects;
// console.log(allQBProjectionsObjects);
// console.log(allQBData.allQBProjectionsObjects);
// console.log(allQBData);



module.exports.allQBProjectionsObjects = propsData
module.exports.allQBData = allQBData;

// module.exports = allQBData;
