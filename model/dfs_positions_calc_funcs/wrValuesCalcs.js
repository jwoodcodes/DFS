const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const allWRs = require('../teamandpositionvariables/allWRVariables');
const wrrawdata = require('../teamandpostionsrawdata/wrrawdata');
const qbrawdata = require('../teamandpostionsrawdata/qbrawdata');
const allQBData = require('../dfs_positions_calc_funcs/qbValuesCalcs');

const allWROneTotalScores = [];
const allWRTwoTotalScores = [];
const allWRThreeTotalScores = [];

const allWROneHomeOrAwayFavoriteOrUnderdogs = [];
const allWRTwoHomeOrAwayFavoriteOrUnderdogs = [];
const allWRThreeHomeOrAwayFavoriteOrUnderdogs = [];
const allWROneVTTs = [];
const allWRTwoVTTs = [];
const allWRThreeVTTs = [];
const allWROneQBScore = [];
const allWRTwoQBScore = [];
const allWRThreeQBScore = [];
const allWROneEliteProjectedTargetsBonuss = [];
const allWRTwoEliteProjectedTargetsBonuss = [];
const allWRThreeEliteProjectedTargetsBonuss = [];
const allWROneGameEnvironmentInducedHighTargetVolume = [];
const allWRTwoGameEnvironmentInducedHighTargetVolume = [];
const allWRThreeGameEnvironmentInducedHighTargetVolume = [];
const allWROneIfTopTwelveTargetShareLasThreeWeeks = [];
const allWRTwoIfTopTwelveTargetShareLasThreeWeeks = [];
const allWRThreeIfTopTwelveTargetShareLasThreeWeeks = [];

///////////////////

class WrObject {
  constructor(
    playerName,
    position,
    teamName,
    teamABV,
    vtt,
    opponentVTT,
    byeWeek,
    homeOrAway,
    slate,
    teamProjectedPoints,
    hadByeInLastFiveWeeksIsTrue,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
    roleThisWeek,
    numberOfGamesPlayedInTheLastFiveWeeks,
    percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek,

    appQBProjectedPoints,
    projectedTargetsThisWeekFourForFour,
    targetShareLastFiveWeeks,

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
    PPRSeventyFifthPercentProjectedPoints,
    fourForFourHalfPPRProjectedPoints,
    fourForFourFullPPRProjectedPoints
  ) {
    this.playerName = playerName;

    this.position = position;
    this.teamName = teamName;
    this.teamABV = teamABV;
    this.vtt = vtt;
    this.opponentVTT = opponentVTT;
    this.byeWeek = byeWeek;
    this.homeOrAway = homeOrAway;
    this.slate = slate;
    this.teamProjectedPoints = teamProjectedPoints;

    this.hadByeInLastFiveWeeksIsTrue = hadByeInLastFiveWeeksIsTrue;
    this.teamProjectedForAHalfOfNegetiveGameScriptIsTrue =
      teamProjectedForAHalfOfNegetiveGameScriptIsTrue;

    this.roleThisWeek = roleThisWeek;
    this.numberOfGamesPlayedInTheLastFiveWeeks =
      numberOfGamesPlayedInTheLastFiveWeeks;
    this.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek =
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek;

    this.appQBProjectedPoints = appQBProjectedPoints;
    this.projectedTargetsThisWeekFourForFour =
      projectedTargetsThisWeekFourForFour;
    this.targetShareLastFiveWeeks = targetShareLastFiveWeeks;

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
    this.fourForFourHalfPPRProjectedPoints = fourForFourHalfPPRProjectedPoints;
    this.fourForFourFullPPRProjectedPoints = fourForFourFullPPRProjectedPoints;
  }

  //add methods here
}

//////////////////////

// const allWRCalcFunctions = {
//   calcWRHomeOrAwayFavoriteOrUnderdogs(team, i) {
//     let WROne = team.WROne;
//     let WRTwo = team.WRTwo;
//     let WRThree = team.WRThree;

//     // console.log(team.teamVTT);

//     let WROneHOAFOU = 0;
//     let WRTwoHOAFOU = 0;
//     let WRThreeHOAFOU = 0;

//     if ((i - 1) % 2 && team.teamVTT > allWRs[i + 1].teamVTT) {
//       WROneHOAFOU = 10;
//       WRTwoHOAFOU = 10;
//       WRThreeHOAFOU = 10;
//     } else if (i % 2 && team.teamVTT < allWRs[i - 1].teamVTT) {
//       WROneHOAFOU = 5;
//       WRTwoHOAFOU = 5;
//       WRThreeHOAFOU = 5;
//     } else if (
//       (i % 2 && team.teamVTT > allWRs[i - 1].teamVTT) ||
//       (i % 2 && team.teamVTT < allWRs[i - 1].teamVTT && team.teamVTT > 24.9)
//     ) {
//       WROneHOAFOU = -5;
//       WRTwoHOAFOU = -5;
//       WRThreeHOAFOU = -5;
//     } else if (
//       (i - 1) % 2 &&
//       team.teamVTT < allWRs[i + 1].teamVTT &&
//       team.teamVTT > 20 &&
//       team.teamVTT < 25
//     ) {
//       WROneHOAFOU = -10;
//       WRTwoHOAFOU = -10;
//       WRThreeHOAFOU = -10;
//     } else {
//       WROneHOAFOU = -15;
//       WRTwoHOAFOU = -15;
//       WRThreeHOAFOU = -15;
//     }

//     return WROneHOAFOU, WRTwoHOAFOU, WRThreeHOAFOU;
//   },

//   calcWRvtt(team) {
//     let wrvtt = team.teamVTT;

//     if (wrvtt > 27.4) {
//       wrvtt = 20;
//     } else if (wrvtt > 24.9 && wrvtt < 27.5) {
//       wrvtt = 15;
//     } else if (wrvtt > 22.4 && wrvtt < 25) {
//       wrvtt = 7.5;
//     } else if (wrvtt > 19.9 && wrvtt < 22.5) {
//       wrvtt = 0;
//     } else if (wrvtt > 17.4 && wrvtt < 20) {
//       wrvtt = -5;
//     } else if (wrvtt > 14.9 && wrvtt < 17.5) {
//       wrvtt = -10;
//     } else {
//       wrvtt = -15;
//     }

//     return wrvtt;
//   },

//   calcWRQBScore(team, i) {
//     let WRQBScore = allQBData.allQBFinalProjectedPointsValues[i];

//     let WRTargetShare = team.targetShareLastThreeGamesPlayed;

//     if (WRQBScore >= 22 && WRTargetShare >= 26) {
//       WRQBScore = 15;
//     } else if (WRQBScore >= 22 && WRTargetShare >= 24) {
//       WRQBScore = 10;
//     } else if (WRQBScore >= 22 && WRTargetShare >= 22) {
//       WRQBScore = 5;
//     } else if (WRQBScore <= 16 && WRTargetShare <= 22 && WRTargetShare >= 20) {
//       WRQBScore = -5;
//     } else if (WRQBScore <= 16 && WRTargetShare <= 20 && WRTargetShare >= 18) {
//       WRQBScore = -10;
//     } else if (WRQBScore <= 16 && WRTargetShare <= 18) {
//       WRQBScore = -15;
//     } else {
//       WRQBScore = 0;
//     }
//     return WRQBScore;
//   },

//   calcWREliteProjectedTargetsBonus(team, i) {
//     let WR4for4ProjectedTargets = team.projectedTargets4For4;

//     let QBGLSPProjectedPassAttempts = allWRs[i].QBGLSPProjectedPassAttempts;

//     let WRTargetShare = team.targetShareLastThreeGamesPlayed;
//     let decWRTargetShare = +(WRTargetShare / 100).toFixed(3);

//     let calculatedWRProjectedTargets = +(
//       QBGLSPProjectedPassAttempts * decWRTargetShare
//     ).toFixed(3);

//     let averageCalculatedWRProjectedTargets = +(
//       (WR4for4ProjectedTargets + calculatedWRProjectedTargets) /
//       2
//     ).toFixed(3);

//     let WRAvgPTS = averageCalculatedWRProjectedTargets;
//     // console.log(WRAvgPTS);

//     if (WRAvgPTS >= 8) {
//       WRAvgPTS = 25;
//     } else if (WRAvgPTS >= 7) {
//       WRAvgPTS = 20;
//     } else if (WRAvgPTS >= 6) {
//       WRAvgPTS = 17.5;
//     } else if (WRAvgPTS >= 5.5) {
//       WRAvgPTS = 12.5;
//     } else {
//       WRAvgPTS = 0;
//     }
//     return WRAvgPTS;
//   },

//   calcGameEnvironmentInducedHighTargetVolume(team, i) {
//     let WRTargetShare = team.targetShareLastThreeGamesPlayed;
//     let WRTargetShareb = 0;

//     if (i % 2 && allWRs[i - 1].teamVTT - allWRs[i].teamVTT >= 5) {
//       //   console.log(team);
//       if (WRTargetShare >= 28) {
//         WRTargetShareb = 15;
//       } else if (WRTargetShare >= 26 && WRTargetShare < 28) {
//         WRTargetShareb = 12.5;
//       } else if (WRTargetShare >= 24 && WRTargetShare < 26) {
//         WRTargetShareb = 10;
//       } else if (WRTargetShare >= 22 && WRTargetShare < 24) {
//         WRTargetShareb = 5;
//       } else {
//         WRTargetShareb = 0;
//       }

//       return WRTargetShareb;
//     }
//     return WRTargetShareb;
//   },

//   calcTopTwelveInNFLTargetShareLastThreeWeeks(team, i) {
//     let ifTopTwelve = team.top12NFLTargetShareLastThreeWeeks;

//     if (ifTopTwelve === 1) {
//       ifTopTwelve = 10;
//     } else {
//       ifTopTwelve = 0;
//     }
//     return ifTopTwelve;
//   },
// };

// allWRs.map(function (team, i) {
//   WROneTotalScore = 0;
//   WRTwoTotalScore = 0;
//   WRThreeTotalScore = 0;

//   let allWRHomeOrAwayFavoriteOrUnderdog =
//     allWRCalcFunctions.calcWRHomeOrAwayFavoriteOrUnderdogs(team, i);
//   allWROneHomeOrAwayFavoriteOrUnderdogs.push(allWRHomeOrAwayFavoriteOrUnderdog);
//   allWRTwoHomeOrAwayFavoriteOrUnderdogs.push(allWRHomeOrAwayFavoriteOrUnderdog);
//   allWRThreeHomeOrAwayFavoriteOrUnderdogs.push(
//     allWRHomeOrAwayFavoriteOrUnderdog
//   );
//   WROneTotalScore += allWRHomeOrAwayFavoriteOrUnderdog;
//   WRTwoTotalScore += allWRHomeOrAwayFavoriteOrUnderdog;
//   WRThreeTotalScore += allWRHomeOrAwayFavoriteOrUnderdog;

//   let allWRVtt = allWRCalcFunctions.calcWRvtt(team);
//   allWROneVTTs.push(allWRVtt);
//   allWRTwoVTTs.push(allWRVtt);
//   allWRThreeVTTs.push(allWRVtt);
//   WROneTotalScore += allWRVtt;
//   WRTwoTotalScore += allWRVtt;
//   WRThreeTotalScore += allWRVtt;

//   let allWROneQBScores = allWRCalcFunctions.calcWRQBScore(team.WROne, i);
//   allWROneQBScore.push(allWROneQBScores);
//   WROneTotalScore += allWROneQBScores;

//   let allWRTwoQBScores = allWRCalcFunctions.calcWRQBScore(team.WRTwo, i);
//   allWRTwoQBScore.push(allWRTwoQBScores);
//   WRTwoTotalScore += allWRTwoQBScores;

//   let allWRThreeQBScores = allWRCalcFunctions.calcWRQBScore(team.WRThree, i);
//   allWRThreeQBScore.push(allWRThreeQBScores);
//   WRThreeTotalScore += allWRThreeQBScores;

//   let allWROneEliteProjectedTargetsBonus =
//     allWRCalcFunctions.calcWREliteProjectedTargetsBonus(team.WROne, i);
//   allWROneEliteProjectedTargetsBonuss.push(allWROneEliteProjectedTargetsBonus);
//   WROneTotalScore += allWROneEliteProjectedTargetsBonus;

//   let allWRTwoEliteProjectedTargetsBonus =
//     allWRCalcFunctions.calcWREliteProjectedTargetsBonus(team.WRTwo, i);
//   allWRTwoEliteProjectedTargetsBonuss.push(allWRTwoEliteProjectedTargetsBonus);
//   WRTwoTotalScore += allWRTwoEliteProjectedTargetsBonus;

//   let allWRThreeEliteProjectedTargetsBonus =
//     allWRCalcFunctions.calcWREliteProjectedTargetsBonus(team.WRThree, i);
//   allWRThreeEliteProjectedTargetsBonuss.push(
//     allWRThreeEliteProjectedTargetsBonus
//   );
//   WRThreeTotalScore += allWRThreeEliteProjectedTargetsBonus;

//   let allWROneGameInducedHighTargetVolume =
//     allWRCalcFunctions.calcGameEnvironmentInducedHighTargetVolume(
//       team.WROne,
//       i
//     );
//   allWROneGameEnvironmentInducedHighTargetVolume.push(
//     allWROneGameInducedHighTargetVolume
//   );
//   WROneTotalScore += allWROneGameInducedHighTargetVolume;

//   let allWRTwoGameInducedHighTargetVolume =
//     allWRCalcFunctions.calcGameEnvironmentInducedHighTargetVolume(
//       team.WRTwo,
//       i
//     );
//   allWRTwoGameEnvironmentInducedHighTargetVolume.push(
//     allWRTwoGameInducedHighTargetVolume
//   );
//   WRTwoTotalScore += allWRTwoGameInducedHighTargetVolume;

//   let allWRThreeGameInducedHighTargetVolume =
//     allWRCalcFunctions.calcGameEnvironmentInducedHighTargetVolume(
//       team.WRThree,
//       i
//     );
//   allWRThreeGameEnvironmentInducedHighTargetVolume.push(
//     allWRThreeGameInducedHighTargetVolume
//   );
//   WRThreeTotalScore += allWRThreeGameInducedHighTargetVolume;

//   let WROneIfTopTwelveNFLTargetShare =
//     allWRCalcFunctions.calcTopTwelveInNFLTargetShareLastThreeWeeks(
//       team.WROne,
//       i
//     );
//   allWROneIfTopTwelveTargetShareLasThreeWeeks.push(
//     WROneIfTopTwelveNFLTargetShare
//   );
//   WROneTotalScore += WROneIfTopTwelveNFLTargetShare;

//   let WRTwoIfTopTwelveNFLTargetShare =
//     allWRCalcFunctions.calcTopTwelveInNFLTargetShareLastThreeWeeks(
//       team.WRTwo,
//       i
//     );
//   allWRTwoIfTopTwelveTargetShareLasThreeWeeks.push(
//     WRTwoIfTopTwelveNFLTargetShare
//   );
//   WRTwoTotalScore += WRTwoIfTopTwelveNFLTargetShare;

//   let WRThreeIfTopTwelveNFLTargetShare =
//     allWRCalcFunctions.calcTopTwelveInNFLTargetShareLastThreeWeeks(
//       team.WRThree,
//       i
//     );
//   allWRThreeIfTopTwelveTargetShareLasThreeWeeks.push(
//     WRThreeIfTopTwelveNFLTargetShare
//   );
//   WRThreeTotalScore += WRThreeIfTopTwelveNFLTargetShare;

//   allWROneTotalScores.push(WROneTotalScore);
//   allWRTwoTotalScores.push(WRTwoTotalScore);
//   allWRThreeTotalScores.push(WRThreeTotalScore);
// });

// /////////assigning WR's their projected points for the week using totalScore from above///////////

// ////////////////////WR1's- calculaing and assigning projections for all WR1s

// const allHalfWROneFinalProjectedPointsValues = [];
// const allHalfWROneFinalProjectedPointsValuesPlusNames = [];

// const allFullWROneFinalProjectedPointsValues = [];
// const allFullWROneFinalProjectedPointsValuesPlusNames = [];

// const wrOnenumOfMatchingRoleWeeks = [];
// const wrTwonumOfMatchingRoleWeeks = [];
// const wrThreenumOfMatchingRoleWeeks = [];

// allWRs.forEach(function (wr, i) {
//   wrOneRoleThisWeek = wr.WROne.roleThisWeek;
//   wrTwoRoleThisWeek = wr.WRTwo.roleThisWeek;
//   wrThreeRoleThisWeek = wr.WRThree.roleThisWeek;
//   wrOneroleLastXNumOfWeeksUpToFiveArray = wr.WROne.roleLastXNumOfWeeksUpToFive;
//   wrTworoleLastXNumOfWeeksUpToFiveArray = wr.WRTwo.roleLastXNumOfWeeksUpToFive;
//   wrThreeroleLastXNumOfWeeksUpToFiveArray =
//     wr.WRThree.roleLastXNumOfWeeksUpToFive;

//   let wrOnematchingWeeks = 0;
//   let wrTwomatchingWeeks = 0;
//   let wrThreematchingWeeks = 0;

//   wrOneroleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
//     if (role === wrOneRoleThisWeek) {
//       wrOnematchingWeeks = wrOnematchingWeeks + 1;
//     }
//   });
//   wrOnenumOfMatchingRoleWeeks.push(wrOnematchingWeeks);

//   wrTworoleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
//     if (role === wrTwoRoleThisWeek) {
//       wrTwomatchingWeeks = wrTwomatchingWeeks + 1;
//     }
//   });
//   wrTwonumOfMatchingRoleWeeks.push(wrTwomatchingWeeks);

//   wrThreeroleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
//     if (role === wrThreeRoleThisWeek) {
//       wrThreematchingWeeks = wrThreematchingWeeks + 1;
//     }
//   });
//   wrThreenumOfMatchingRoleWeeks.push(wrThreematchingWeeks);
// });

// const wrOnePercentageOfMatchingRoleWeeks = [];
// const wrTwoPercentageOfMatchingRoleWeeks = [];
// const wrThreePercentageOfMatchingRoleWeeks = [];

// allWRs.map(function (team, i) {
//   let wrOnematchingWeeksPercentage =
//     wrOnenumOfMatchingRoleWeeks[i] /
//     team.WROne.roleLastXNumOfWeeksUpToFive.length;

//   wrOnePercentageOfMatchingRoleWeeks.push(wrOnematchingWeeksPercentage);

//   let wrTwomatchingWeeksPercentage =
//     wrTwonumOfMatchingRoleWeeks[i] /
//     team.WRTwo.roleLastXNumOfWeeksUpToFive.length;

//   wrTwoPercentageOfMatchingRoleWeeks.push(wrTwomatchingWeeksPercentage);

//   let wrThreematchingWeeksPercentage =
//     wrThreenumOfMatchingRoleWeeks[i] /
//     team.WRThree.roleLastXNumOfWeeksUpToFive.length;

//   wrThreePercentageOfMatchingRoleWeeks.push(wrThreematchingWeeksPercentage);
// });

// const allWROneHalfManagedAndCashProjectedPointsValues = [];
// const allWROneFullManagedAndCashProjectedPointsValues = [];

// const allWROneHalfManagedAndCashProjectedPointsValuesPlusNames = [];
// const allWROneFullManagedAndCashProjectedPointsValuesPlusNames = [];

// const allWRHalfManagedAndCashProjectedPointsValues = [];
// const allWRFullManagedAndCashProjectedPointsValues = [];
// const allWRTEPManagedAndCashProjectedPointsValues = [];

// const allWRHalfManagedAndCashProjectedPointsValuesPlusNames = [];
// const allWRFullManagedAndCashProjectedPointsValuesPlusNames = [];
// const allWRTEPManagedAndCashProjectedPointsValuesPlusNames = [];

// allWROneTotalScores.map(function (score, i, array) {
//   let halfTwentyFifthPercentProjection =
//     allWRs[i].WROne.halfTwentyFifthPercentProjectedPoints;
//   let halfFiftyithPercentProjection =
//     allWRs[i].WROne.halfFiftyithPercentProjectedPoints;
//   let halfSeventyFifthPercentProjection =
//     allWRs[i].WROne.halfSeventyFifthPercentProjectedPoints;
//   let PPRTwentyFifthPercentProjection =
//     allWRs[i].WROne.PPRTwentyFifthPercentProjectedPoints;
//   let PPRFiftyithPercentProjection =
//     allWRs[i].WROne.PPRFiftyithPercentProjectedPoints;
//   let PPRSeventyFifthPercentProjection =
//     allWRs[i].WROne.PPRSeventyFifthPercentProjectedPoints;

//   let WRHalfProjectedPoints = 0;
//   let WRFullProjectedPoints = 0;
//   let halfManagedAndCash = 0;
//   let fullManagedAndCash = 0;

//   //   console.log(`${score}: ${allWRs[i].WROne.name}`);

//   if (
//     gameInfo.week.currentWeek > 6 &&
//     wrOnePercentageOfMatchingRoleWeeks[i] > 0.74
//   ) {
//     if (score >= 45) {
//       WRHalfProjectedPoints = halfSeventyFifthPercentProjection;
//       WRFullProjectedPoints = PPRSeventyFifthPercentProjection;
//     } else if (score >= -5) {
//       WRHalfProjectedPoints = halfFiftyithPercentProjection;
//       WRFullProjectedPoints = PPRFiftyithPercentProjection;
//     } else {
//       WRHalfProjectedPoints = halfTwentyFifthPercentProjection;
//       WRFullProjectedPoints = PPRTwentyFifthPercentProjection;
//     }

//     halfManagedAndCash =
//       (WRHalfProjectedPoints +
//         allWRs[i].WROne.fourForFourHalfPPRProjectedPoints) /
//       2;
//     fullManagedAndCash =
//       (WRFullProjectedPoints +
//         allWRs[i].WROne.fourForFourFullPPRProjectedPoints) /
//       2;
//   } else if (
//     gameInfo.week.currentWeek > 6 &&
//     wrOnePercentageOfMatchingRoleWeeks[i] < 0.75
//   ) {
//     WRHalfProjectedPoints = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
//   }

//   if (
//     gameInfo.week.currentWeek === 5 ||
//     (gameInfo.week.currentWeek === 6 &&
//       wrOnePercentageOfMatchingRoleWeeks[i] > 0.74)
//   ) {
//     if (score >= 45) {
//       tempWRHalfProjectedPoints = halfSeventyFifthPercentProjection;
//       tempWRFullProjectedPoints = PPRSeventyFifthPercentProjection;
//     } else if (score >= -5) {
//       tempWRHalfProjectedPoints = halfFiftyithPercentProjection;
//       tempWRFullProjectedPoints = PPRFiftyithPercentProjection;
//     } else {
//       tempWRHalfProjectedPoints = halfTwentyFifthPercentProjection;
//       tempWRFullProjectedPoints = PPRTwentyFifthPercentProjection;
//     }

//     let totalHalfAvg =
//       (allWRs[i].WROne.fourForFourHalfPPRProjectedPoints +
//         tempWRHalfProjectedPoints) /
//       2;
//     let totalFullAvg =
//       (allWRs[i].WROne.fourForFourFullPPRProjectedPoints +
//         tempWRFullProjectedPoints) /
//       2;

//     WRHalfProjectedPoints = +totalHalfAvg.toFixed(2);
//     WRFullProjectedPoints = +totalFullAvg.toFixed(2);
//     halfManagedAndCash = +totalHalfAvg.toFixed(2);
//     fullManagedAndCash = +totalFullAvg.toFixed(2);
//   } else if (
//     gameInfo.week.currentWeek === 5 ||
//     (gameInfo.week.currentWeek === 6 &&
//       wrOnePercentageOfMatchingRoleWeeks[i] < 0.75)
//   ) {
//     WRHalfProjectedPoints = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
//   }

//   if (gameInfo.week.currentWeek < 5) {
//     WRHalfProjectedPoints = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
//   }

//   allHalfWROneFinalProjectedPointsValues.push(WRHalfProjectedPoints);
//   allWROneHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
//   allHalfWROneFinalProjectedPointsValuesPlusNames.push(
//     `${WRHalfProjectedPoints}: ${allWRs[i].WROne.name}`
//   );
//   allWROneHalfManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${halfManagedAndCash}: ${allWRs[i].WROne.name}`
//   );
//   allWRHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
//   allWRHalfManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${halfManagedAndCash}: ${allWRs[i].WROne.name}`
//   );

//   allFullWROneFinalProjectedPointsValues.push(WRFullProjectedPoints);
//   allWROneFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allFullWROneFinalProjectedPointsValuesPlusNames.push(
//     `${WRFullProjectedPoints}: ${allWRs[i].WROne.name}`
//   );
//   allWROneFullManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WROne.name}`
//   );
//   allWRFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allWRFullManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WROne.name}`
//   );
//   allWRTEPManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allWRTEPManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WROne.name}`
//   );
// });

// // const allWRTEPManagedAndCashProjectedPointsValues = [];
// // const allWRTEPManagedAndCashProjectedPointsValuesPlusNames = [];

// // const allWROneHalfManagedAndCashProjectedPointsValues = [];
// // const allWROneFullManagedAndCashProjectedPointsValues = [];

// // const allWROneHalfManagedAndCashProjectedPointsValuesPlusNames = [];
// // const allWROneFullManagedAndCashProjectedPointsValuesPlusNames = [];

// ////////////////////WR2's- calculaing and assigning projections for all WR2s

// const allHalfWRTwoFinalProjectedPointsValues = [];
// const allHalfWRTwoFinalProjectedPointsValuesPlusNames = [];

// const allFullWRTwoFinalProjectedPointsValues = [];
// const allFullWRTwoFinalProjectedPointsValuesPlusNames = [];

// const allWRTwoHalfManagedAndCashProjectedPointsValues = [];
// const allWRTwoFullManagedAndCashProjectedPointsValues = [];

// const allWRTwoHalfManagedAndCashProjectedPointsValuePlusNames = [];
// const allWRTwoFullManagedAndCashProjectedPointsValuePlusNames = [];

// allWRTwoTotalScores.map(function (score, i, array) {
//   let halfTwentyFifthPercentProjection =
//     allWRs[i].WRTwo.halfTwentyFifthPercentProjectedPoints;
//   let halfFiftyithPercentProjection =
//     allWRs[i].WRTwo.halfFiftyithPercentProjectedPoints;
//   let halfSeventyFifthPercentProjection =
//     allWRs[i].WRTwo.halfSeventyFifthPercentProjectedPoints;
//   let PPRTwentyFifthPercentProjection =
//     allWRs[i].WRTwo.PPRTwentyFifthPercentProjectedPoints;
//   let PPRFiftyithPercentProjection =
//     allWRs[i].WRTwo.PPRFiftyithPercentProjectedPoints;
//   let PPRSeventyFifthPercentProjection =
//     allWRs[i].WRTwo.PPRSeventyFifthPercentProjectedPoints;

//   let WRHalfProjectedPoints = 0;
//   let WRFullProjectedPoints = 0;
//   let halfManagedAndCash = 0;
//   let fullManagedAndCash = 0;

//   //   console.log(`${score}: ${allWRs[i].WRTwo.name}`);

//   if (
//     gameInfo.week.currentWeek > 6 &&
//     wrTwoPercentageOfMatchingRoleWeeks[i] > 0.74
//   ) {
//     if (score >= 45) {
//       WRHalfProjectedPoints = halfSeventyFifthPercentProjection;
//       WRFullProjectedPoints = PPRSeventyFifthPercentProjection;
//     } else if (score >= -5) {
//       WRHalfProjectedPoints = halfFiftyithPercentProjection;
//       WRFullProjectedPoints = PPRFiftyithPercentProjection;
//     } else {
//       WRHalfProjectedPoints = halfTwentyFifthPercentProjection;
//       WRFullProjectedPoints = PPRTwentyFifthPercentProjection;
//     }

//     halfManagedAndCash =
//       (WRHalfProjectedPoints +
//         allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints) /
//       2;
//     fullManagedAndCash =
//       (WRFullProjectedPoints +
//         allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints) /
//       2;
//   } else if (
//     gameInfo.week.currentWeek > 6 &&
//     wrTwoPercentageOfMatchingRoleWeeks[i] < 0.75
//   ) {
//     WRHalfProjectedPoints = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
//   }

//   if (
//     gameInfo.week.currentWeek === 5 ||
//     (gameInfo.week.currentWeek === 6 &&
//       wrTwoPercentageOfMatchingRoleWeeks[i] > 0.74)
//   ) {
//     if (score >= 45) {
//       tempWRHalfProjectedPoints = halfSeventyFifthPercentProjection;
//       tempWRFullProjectedPoints = PPRSeventyFifthPercentProjection;
//     } else if (score >= -5) {
//       tempWRHalfProjectedPoints = halfFiftyithPercentProjection;
//       tempWRFullProjectedPoints = PPRFiftyithPercentProjection;
//     } else {
//       tempWRHalfProjectedPoints = halfTwentyFifthPercentProjection;
//       tempWRFullProjectedPoints = PPRTwentyFifthPercentProjection;
//     }

//     let totalHalfAvg =
//       (allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints +
//         tempWRHalfProjectedPoints) /
//       2;
//     let totalFullAvg =
//       (allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints +
//         tempWRFullProjectedPoints) /
//       2;

//     WRHalfProjectedPoints = +totalHalfAvg.toFixed(2);
//     WRFullProjectedPoints = +totalFullAvg.toFixed(2);
//     halfManagedAndCash = +totalHalfAvg.toFixed(2);
//     fullManagedAndCash = +totalFullAvg.toFixed(2);
//   } else if (
//     gameInfo.week.currentWeek === 5 ||
//     (gameInfo.week.currentWeek === 6 &&
//       wrTwoPercentageOfMatchingRoleWeeks[i] < 0.75)
//   ) {
//     WRHalfProjectedPoints = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
//   }

//   if (gameInfo.week.currentWeek < 5) {
//     WRHalfProjectedPoints = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
//   }

//   allHalfWRTwoFinalProjectedPointsValues.push(WRHalfProjectedPoints);
//   allWRTwoHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
//   allHalfWRTwoFinalProjectedPointsValuesPlusNames.push(
//     `${WRHalfProjectedPoints}: ${allWRs[i].WRTwo.name}`
//   );
//   allWRTwoHalfManagedAndCashProjectedPointsValuePlusNames.push(
//     `${halfManagedAndCash}: ${allWRs[i].WRTwo.name}`
//   );
//   allWRHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
//   allWRHalfManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${halfManagedAndCash} ${allWRs[i].WRTwo.name}`
//   );

//   allFullWRTwoFinalProjectedPointsValues.push(WRFullProjectedPoints);
//   allWRTwoFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allFullWRTwoFinalProjectedPointsValuesPlusNames.push(
//     `${WRFullProjectedPoints}: ${allWRs[i].WRTwo.name}`
//   );
//   allWRTwoFullManagedAndCashProjectedPointsValuePlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WRTwo.name}`
//   );
//   allWRFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allWRFullManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WRTwo.name}`
//   );
//   allWRTEPManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allWRTEPManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WRTwo.name}`
//   );
// });

// /////////////////////////////
// ////////////////////WR3's- calculaing and assigning projections for all WR3s

// const allHalfWRThreeFinalProjectedPointsValues = [];
// const allHalfWRThreeFinalProjectedPointsValuesPlusNames = [];

// const allFullWRThreeFinalProjectedPointsValues = [];
// const allFullWRThreeFinalProjectedPointsValuesPlusNames = [];

// const allWRThreeHalfManagedAndCashProjectedPointsValues = [];
// const allWRThreeFullManagedAndCashProjectedPointsValues = [];

// const allWRThreeHalfManagedAndCashProjectedPointsValuePlusNames = [];
// const allWRThreeFullManagedAndCashProjectedPointsValuePlusNames = [];

// allWRThreeTotalScores.map(function (score, i, array) {
//   let halfTwentyFifthPercentProjection =
//     allWRs[i].WRThree.halfTwentyFifthPercentProjectedPoints;
//   let halfFiftyithPercentProjection =
//     allWRs[i].WRThree.halfFiftyithPercentProjectedPoints;
//   let halfSeventyFifthPercentProjection =
//     allWRs[i].WRThree.halfSeventyFifthPercentProjectedPoints;
//   let PPRTwentyFifthPercentProjection =
//     allWRs[i].WRThree.PPRTwentyFifthPercentProjectedPoints;
//   let PPRFiftyithPercentProjection =
//     allWRs[i].WRThree.PPRFiftyithPercentProjectedPoints;
//   let PPRSeventyFifthPercentProjection =
//     allWRs[i].WRThree.PPRSeventyFifthPercentProjectedPoints;

//   let WRHalfProjectedPoints = 0;
//   let WRFullProjectedPoints = 0;
//   let halfManagedAndCash = 0;
//   let fullManagedAndCash = 0;

//   //   console.log(`${score}: ${allWRs[i].WRTwo.name}`);

//   if (
//     gameInfo.week.currentWeek > 6 &&
//     wrThreePercentageOfMatchingRoleWeeks[i] > 0.74
//   ) {
//     if (score >= 45) {
//       WRHalfProjectedPoints = halfSeventyFifthPercentProjection;
//       WRFullProjectedPoints = PPRSeventyFifthPercentProjection;
//     } else if (score >= -5) {
//       WRHalfProjectedPoints = halfFiftyithPercentProjection;
//       WRFullProjectedPoints = PPRFiftyithPercentProjection;
//     } else {
//       WRHalfProjectedPoints = halfTwentyFifthPercentProjection;
//       WRFullProjectedPoints = PPRTwentyFifthPercentProjection;
//     }

//     halfManagedAndCash =
//       (WRHalfProjectedPoints +
//         allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints) /
//       2;
//     fullManagedAndCash =
//       (WRFullProjectedPoints +
//         allWRs[i].WRThree.fourForFourFullPPRProjectedPoints) /
//       2;
//   } else if (
//     gameInfo.week.currentWeek > 6 &&
//     wrThreePercentageOfMatchingRoleWeeks[i] < 0.75
//   ) {
//     WRHalfProjectedPoints = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
//   }

//   if (
//     gameInfo.week.currentWeek === 5 ||
//     (gameInfo.week.currentWeek === 6 &&
//       wrThreePercentageOfMatchingRoleWeeks[i] > 0.74)
//   ) {
//     if (score >= 45) {
//       tempWRHalfProjectedPoints = halfSeventyFifthPercentProjection;
//       tempWRFullProjectedPoints = PPRSeventyFifthPercentProjection;
//     } else if (score >= -5) {
//       tempWRHalfProjectedPoints = halfFiftyithPercentProjection;
//       tempWRFullProjectedPoints = PPRFiftyithPercentProjection;
//     } else {
//       tempWRHalfProjectedPoints = halfTwentyFifthPercentProjection;
//       tempWRFullProjectedPoints = PPRTwentyFifthPercentProjection;
//     }

//     let totalHalfAvg =
//       (allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints +
//         tempWRHalfProjectedPoints) /
//       2;
//     let totalFullAvg =
//       (allWRs[i].WRThree.fourForFourFullPPRProjectedPoints +
//         tempWRFullProjectedPoints) /
//       2;

//     WRHalfProjectedPoints = +totalHalfAvg.toFixed(2);
//     WRFullProjectedPoints = +totalFullAvg.toFixed(2);
//     halfManagedAndCash = +totalHalfAvg.toFixed(2);
//     fullManagedAndCash = +totalFullAvg.toFixed(2);
//   } else if (
//     gameInfo.week.currentWeek === 5 ||
//     (gameInfo.week.currentWeek === 6 &&
//       wrThreePercentageOfMatchingRoleWeeks[i] < 0.75)
//   ) {
//     WRHalfProjectedPoints = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
//   }

//   if (gameInfo.week.currentWeek < 5) {
//     WRHalfProjectedPoints = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
//     WRFullProjectedPoints = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
//     halfManagedAndCash = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
//     fullManagedAndCash = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
//   }

//   allHalfWRThreeFinalProjectedPointsValues.push(WRHalfProjectedPoints);
//   allWRThreeHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
//   allHalfWRThreeFinalProjectedPointsValuesPlusNames.push(
//     `${WRHalfProjectedPoints}: ${allWRs[i].WRThree.name}`
//   );
//   allWRThreeHalfManagedAndCashProjectedPointsValuePlusNames.push(
//     `${halfManagedAndCash}: ${allWRs[i].WRThree.name}`
//   );
//   allWRHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
//   allWRHalfManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${halfManagedAndCash}: ${allWRs[i].WRThree.name}`
//   );

//   allFullWRThreeFinalProjectedPointsValues.push(WRFullProjectedPoints);
//   allWRThreeFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allFullWRThreeFinalProjectedPointsValuesPlusNames.push(
//     `${WRFullProjectedPoints} ${allWRs[i].WRThree.name}`
//   );
//   allWRThreeFullManagedAndCashProjectedPointsValuePlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WRThree.name}`
//   );

//   allWRFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allWRFullManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WRThree.name}`
//   );
//   allWRTEPManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
//   allWRTEPManagedAndCashProjectedPointsValuesPlusNames.push(
//     `${fullManagedAndCash}: ${allWRs[i].WRThree.name}`
//   );
// });

// // allWRFullManagedAndCashProjectedPointsValuesPlusNames

// /////////////populating arrays for all WR's

// const allWRsHalfProjectedPointsValues = [];
// const allWRsFullProjectedPointsValues = [];
// const allWRsHalfProjectedPointsValuesPlusNames = [];
// const allWRsFullProjectedPointsValuesPlusNames = [];

// allHalfWROneFinalProjectedPointsValues.map(function (proj, i) {
//   allWRsHalfProjectedPointsValues.push(proj);
//   allWRsHalfProjectedPointsValues.push(
//     allHalfWRTwoFinalProjectedPointsValues[i]
//   );
//   allWRsHalfProjectedPointsValues.push(
//     allHalfWRThreeFinalProjectedPointsValues[i]
//   );
// });

// allFullWROneFinalProjectedPointsValues.map(function (proj, i) {
//   allWRsFullProjectedPointsValues.push(proj);
//   allWRsFullProjectedPointsValues.push(
//     allFullWRTwoFinalProjectedPointsValues[i]
//   );
//   allWRsFullProjectedPointsValues.push(
//     allFullWRThreeFinalProjectedPointsValues[i]
//   );
// });

// allHalfWROneFinalProjectedPointsValuesPlusNames.map(function (proj, i) {
//   allWRsHalfProjectedPointsValuesPlusNames.push(proj);
//   allWRsHalfProjectedPointsValuesPlusNames.push(
//     allHalfWRTwoFinalProjectedPointsValuesPlusNames[i]
//   );
//   allWRsHalfProjectedPointsValuesPlusNames.push(
//     allHalfWRThreeFinalProjectedPointsValuesPlusNames[i]
//   );
// });

// allFullWROneFinalProjectedPointsValuesPlusNames.map(function (proj, i) {
//   allWRsFullProjectedPointsValuesPlusNames.push(proj);
//   allWRsFullProjectedPointsValuesPlusNames.push(
//     allFullWRTwoFinalProjectedPointsValuesPlusNames[i]
//   );
//   allWRsFullProjectedPointsValuesPlusNames.push(
//     allFullWRThreeFinalProjectedPointsValuesPlusNames[i]
//   );
// });

// /////////////////////////projected points per dollar

// const halfProjectedPointsPerDollarFanduel = [];
// const halfProjectedPointsPerDollarYahoo = [];
// const fullProjectedPointsPerDollarDraftkings = [];

// const cashprojectedPointsPerDollarDraftkings = [];
// const cashprojectedPointsPerDollarFanduel = [];
// const cashprojectedPointsPerDollarYahoo = [];

// const cashprojectedPointsPerDollarDraftkingsPlusNames = [];
// const cashprojectedPointsPerDollarFanduelPlusNames = [];
// const cashprojectedPointsPerDollarYahooPlusNames = [];

// allWRs.forEach(function (team, i) {
//   let WROnes = team.WROne;
//   let WRTwos = team.WRTwo;
//   let WRThrees = team.WRThree;

//   let wrOnehalfFanduel = +(
//     allHalfWROneFinalProjectedPointsValues[i] / WROnes.fanduelSalary
//   ).toFixed(4);
//   let wrOnehalfYahoo = +(
//     allHalfWROneFinalProjectedPointsValues[i] / WROnes.yahooSalary
//   ).toFixed(4);

//   let wrOneCashFanduel = +(
//     allWROneHalfManagedAndCashProjectedPointsValues[i] / WROnes.fanduelSalary
//   ).toFixed(4);

//   let wrOneCashYahoo = +(
//     allWROneHalfManagedAndCashProjectedPointsValues[i] / WROnes.yahooSalary
//   ).toFixed(4);

//   let wrTwohalfFanduel = +(
//     allHalfWRTwoFinalProjectedPointsValues[i] / WRTwos.fanduelSalary
//   ).toFixed(4);
//   let wrTwohalfYahoo = +(
//     allHalfWRTwoFinalProjectedPointsValues[i] / WRTwos.yahooSalary
//   ).toFixed(4);

//   let wrTwoCashFanduel = +(
//     allWRTwoHalfManagedAndCashProjectedPointsValues[i] / WRTwos.fanduelSalary
//   ).toFixed(4);

//   let wrTwoCashYahoo = +(
//     allWRTwoHalfManagedAndCashProjectedPointsValues[i] / WRTwos.yahooSalary
//   ).toFixed(4);

//   let wrThreehalfFanduel = +(
//     allHalfWRThreeFinalProjectedPointsValues[i] / WRThrees.fanduelSalary
//   ).toFixed(4);
//   let wrThreehalfYahoo = +(
//     allHalfWRThreeFinalProjectedPointsValues[i] / WRThrees.yahooSalary
//   ).toFixed(4);

//   let wrThreeCashFanduel = +(
//     allWRThreeHalfManagedAndCashProjectedPointsValues[i] /
//     WRThrees.fanduelSalary
//   ).toFixed(4);

//   let wrThreeCashYahoo = +(
//     allWRThreeHalfManagedAndCashProjectedPointsValues[i] / WRThrees.yahooSalary
//   ).toFixed(4);

//   halfProjectedPointsPerDollarFanduel.push(wrOnehalfFanduel);
//   halfProjectedPointsPerDollarYahoo.push(wrOnehalfYahoo);
//   halfProjectedPointsPerDollarFanduel.push(wrTwohalfFanduel);
//   halfProjectedPointsPerDollarYahoo.push(wrTwohalfYahoo);
//   halfProjectedPointsPerDollarFanduel.push(wrThreehalfFanduel);
//   halfProjectedPointsPerDollarYahoo.push(wrThreehalfYahoo);

//   cashprojectedPointsPerDollarFanduel.push(wrOneCashFanduel);
//   cashprojectedPointsPerDollarYahoo.push(wrOneCashYahoo);
//   cashprojectedPointsPerDollarFanduel.push(wrTwoCashFanduel);
//   cashprojectedPointsPerDollarYahoo.push(wrTwoCashYahoo);
//   cashprojectedPointsPerDollarFanduel.push(wrThreeCashFanduel);
//   cashprojectedPointsPerDollarYahoo.push(wrThreeCashYahoo);

//   cashprojectedPointsPerDollarFanduelPlusNames.push(
//     `${wrOneCashFanduel}: ${WROnes.name}`
//   );
//   cashprojectedPointsPerDollarFanduelPlusNames.push(
//     `${wrTwoCashFanduel}: ${WRTwos.name}`
//   );
//   cashprojectedPointsPerDollarFanduelPlusNames.push(
//     `${wrThreeCashFanduel}: ${WRThrees.name}`
//   );

//   cashprojectedPointsPerDollarYahooPlusNames.push(
//     `${wrOneCashYahoo}: ${WROnes.name}`
//   );
//   cashprojectedPointsPerDollarYahooPlusNames.push(
//     `${wrTwoCashYahoo}: ${WRTwos.name}`
//   );
//   cashprojectedPointsPerDollarYahooPlusNames.push(
//     `${wrThreeCashYahoo}: ${WRThrees.name}`
//   );

//   //   const cashprojectedPointsPerDollarDraftkingsPlusNames = [];
//   // const cashprojectedPointsPerDollarFanduelPlusNames = [];
//   // const cashprojectedPointsPerDollarYahooPlusNames = [];

//   let wrOneFulldraftkings = +(
//     allFullWROneFinalProjectedPointsValues[i] / WROnes.draftkingsSalary
//   ).toFixed(4);

//   let wrTwoFulldraftkings = +(
//     allFullWRTwoFinalProjectedPointsValues[i] / WRTwos.draftkingsSalary
//   ).toFixed(4);

//   let wrThreeFulldraftkings = +(
//     allFullWRThreeFinalProjectedPointsValues[i] / WRThrees.draftkingsSalary
//   ).toFixed(4);

//   let wrOneCashDraftkings = +(
//     allWROneFullManagedAndCashProjectedPointsValues[i] / WROnes.draftkingsSalary
//   ).toFixed(4);

//   let wrTwoCashDraftkings = +(
//     allWRTwoFullManagedAndCashProjectedPointsValues[i] / WRTwos.draftkingsSalary
//   ).toFixed(4);

//   let wrThreeCashDraftkings = +(
//     allWRThreeFullManagedAndCashProjectedPointsValues[i] /
//     WRThrees.draftkingsSalary
//   ).toFixed(4);

//   fullProjectedPointsPerDollarDraftkings.push(wrOneFulldraftkings);
//   fullProjectedPointsPerDollarDraftkings.push(wrTwoFulldraftkings);
//   fullProjectedPointsPerDollarDraftkings.push(wrThreeFulldraftkings);

//   cashprojectedPointsPerDollarDraftkings.push(wrOneCashDraftkings);
//   cashprojectedPointsPerDollarDraftkings.push(wrTwoCashDraftkings);
//   cashprojectedPointsPerDollarDraftkings.push(wrThreeCashDraftkings);

//   cashprojectedPointsPerDollarDraftkingsPlusNames.push(
//     `${wrOneCashDraftkings}: ${WROnes.name}`
//   );
//   cashprojectedPointsPerDollarDraftkingsPlusNames.push(
//     `${wrTwoCashDraftkings}: ${WRTwos.name}`
//   );
//   cashprojectedPointsPerDollarDraftkingsPlusNames.push(
//     `${wrThreeCashDraftkings}: ${WRThrees.name}`
//   );
// });

// const allWRData = {
//   allWROneHomeOrAwayFavoriteOrUnderdogs: allWROneHomeOrAwayFavoriteOrUnderdogs,
//   allWRTwoHomeOrAwayFavoriteOrUnderdogs: allWRTwoHomeOrAwayFavoriteOrUnderdogs,
//   allWROneVTTs: allWROneVTTs,
//   allWRTwoVTTs: allWRTwoVTTs,
//   allWROneQBScore: allWROneQBScore,
//   allWRTwoQBScore: allWRTwoQBScore,
//   allWROneEliteProjectedTargetsBonuss: allWROneEliteProjectedTargetsBonuss,
//   allWRTwoEliteProjectedTargetsBonuss: allWRTwoEliteProjectedTargetsBonuss,
//   allWROneGameEnvironmentInducedHighTargetVolume:
//     allWROneGameEnvironmentInducedHighTargetVolume,
//   allWRTwoGameEnvironmentInducedHighTargetVolume:
//     allWRTwoGameEnvironmentInducedHighTargetVolume,
//   allWROneIfTopTwelveTargetShareLasThreeWeeks:
//     allWROneIfTopTwelveTargetShareLasThreeWeeks,
//   allWRTwoIfTopTwelveTargetShareLasThreeWeeks:
//     allWRTwoIfTopTwelveTargetShareLasThreeWeeks,
//   allWROneTotalScores: allWROneTotalScores,
//   allWRTwoTotalScores: allWRTwoTotalScores,
//   allHalfWROneFinalProjectedPointsValues:
//     allHalfWROneFinalProjectedPointsValues,
//   allHalfWROneFinalProjectedPointsValuesPlusNames:
//     allHalfWROneFinalProjectedPointsValuesPlusNames,
//   allFullWROneFinalProjectedPointsValues:
//     allFullWROneFinalProjectedPointsValues,
//   allFullWROneFinalProjectedPointsValuesPlusNames:
//     allFullWROneFinalProjectedPointsValuesPlusNames,
//   allHalfWRTwoFinalProjectedPointsValues:
//     allHalfWRTwoFinalProjectedPointsValues,
//   allHalfWRTwoFinalProjectedPointsValuesPlusNames:
//     allHalfWRTwoFinalProjectedPointsValuesPlusNames,
//   allFullWRTwoFinalProjectedPointsValues:
//     allFullWRTwoFinalProjectedPointsValues,
//   allFullWRTwoFinalProjectedPointsValuesPlusNames:
//     allFullWRTwoFinalProjectedPointsValuesPlusNames,

//   allHalfWRThreeFinalProjectedPointsValues:
//     allHalfWRThreeFinalProjectedPointsValues,
//   allHalfWRThreeFinalProjectedPointsValuesPlusNames:
//     allHalfWRThreeFinalProjectedPointsValuesPlusNames,

//   allFullWRThreeFinalProjectedPointsValues:
//     allFullWRThreeFinalProjectedPointsValues,
//   allFullWRThreeFinalProjectedPointsValuesPlusNames:
//     allFullWRThreeFinalProjectedPointsValuesPlusNames,

//   allWRsHalfProjectedPointsValues: allWRsHalfProjectedPointsValues,
//   allWRsFullProjectedPointsValues: allWRsFullProjectedPointsValues,
//   allWRsHalfProjectedPointsValuesPlusNames:
//     allWRsHalfProjectedPointsValuesPlusNames,
//   allWRsFullProjectedPointsValuesPlusNames:
//     allWRsFullProjectedPointsValuesPlusNames,

//   halfProjectedPointsPerDollarFanduel: halfProjectedPointsPerDollarFanduel,
//   halfProjectedPointsPerDollarYahoo: halfProjectedPointsPerDollarYahoo,

//   fullProjectedPointsPerDollarDraftkings:
//     fullProjectedPointsPerDollarDraftkings,

//   //managedAndCash
//   allWROneHalfManagedAndCashProjectedPointsValues:
//     allWROneHalfManagedAndCashProjectedPointsValues,
//   allWROneFullManagedAndCashProjectedPointsValues:
//     allWROneFullManagedAndCashProjectedPointsValues,
//   allWRTwoHalfManagedAndCashProjectedPointsValues:
//     allWRTwoHalfManagedAndCashProjectedPointsValues,
//   allWRTwoFullManagedAndCashProjectedPointsValues:
//     allWRTwoFullManagedAndCashProjectedPointsValues,
//   allWRThreeHalfManagedAndCashProjectedPointsValues:
//     allWRThreeHalfManagedAndCashProjectedPointsValues,
//   allWRThreeFullManagedAndCashProjectedPointsValues:
//     allWRThreeFullManagedAndCashProjectedPointsValues,

//   allWROneHalfManagedAndCashProjectedPointsValuesPlusNames:
//     allWROneHalfManagedAndCashProjectedPointsValuesPlusNames,
//   allWROneFullManagedAndCashProjectedPointsValuesPlusNames:
//     allWROneFullManagedAndCashProjectedPointsValuesPlusNames,
//   allWRTwoHalfManagedAndCashProjectedPointsValuePlusNames:
//     allWRTwoHalfManagedAndCashProjectedPointsValuePlusNames,
//   allWRTwoFullManagedAndCashProjectedPointsValuePlusNames:
//     allWRTwoFullManagedAndCashProjectedPointsValuePlusNames,
//   allWRThreeHalfManagedAndCashProjectedPointsValuePlusNames:
//     allWRThreeHalfManagedAndCashProjectedPointsValuePlusNames,
//   allWRThreeFullManagedAndCashProjectedPointsValuePlusNames:
//     allWRThreeFullManagedAndCashProjectedPointsValuePlusNames,

//   allWRHalfManagedAndCashProjectedPointsValues:
//     allWRHalfManagedAndCashProjectedPointsValues,
//   allWRFullManagedAndCashProjectedPointsValues:
//     allWRFullManagedAndCashProjectedPointsValues,
//   allWRHalfManagedAndCashProjectedPointsValuesPlusNames:
//     allWRHalfManagedAndCashProjectedPointsValuesPlusNames,
//   allWRFullManagedAndCashProjectedPointsValuesPlusNames:
//     allWRFullManagedAndCashProjectedPointsValuesPlusNames,
//   allWRTEPManagedAndCashProjectedPointsValues:
//     allWRTEPManagedAndCashProjectedPointsValues,
//   allWRTEPManagedAndCashProjectedPointsValuesPlusNames:
//     allWRTEPManagedAndCashProjectedPointsValuesPlusNames,

//   //managedAndCash projected points per dollar

//   cashprojectedPointsPerDollarDraftkings:
//     cashprojectedPointsPerDollarDraftkings,
//   cashprojectedPointsPerDollarFanduel: cashprojectedPointsPerDollarFanduel,
//   cashprojectedPointsPerDollarYahoo: cashprojectedPointsPerDollarYahoo,

//   cashprojectedPointsPerDollarDraftkingsPlusNames:
//     cashprojectedPointsPerDollarDraftkingsPlusNames,
//   cashprojectedPointsPerDollarFanduelPlusNames:
//     cashprojectedPointsPerDollarFanduelPlusNames,
//   cashprojectedPointsPerDollarYahooPlusNames:
//     cashprojectedPointsPerDollarYahooPlusNames,
// };

// // console.log(allWRData.allWRFullManagedAndCashProjectedPointsValuesPlusNames);
// // console.log(allFullWRThreeFinalProjectedPointsValuesPlusNames);
// // console.log(allWRsHalfProjectedPointsValuesPlusNames);

// // console.log(allWRData);

// module.exports = allWRCalcFunctions;
// module.exports = allWRData;
