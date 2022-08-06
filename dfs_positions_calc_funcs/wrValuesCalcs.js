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

const allWRCalcFunctions = {
  calcWRHomeOrAwayFavoriteOrUnderdogs(team, i) {
    let WROne = team.WROne;
    let WRTwo = team.WRTwo;
    let WRThree = team.WRThree;

    // console.log(team.teamVTT);

    let WROneHOAFOU = 0;
    let WRTwoHOAFOU = 0;
    let WRThreeHOAFOU = 0;

    if ((i - 1) % 2 && team.teamVTT > allWRs[i + 1].teamVTT) {
      WROneHOAFOU = 10;
      WRTwoHOAFOU = 10;
      WRThreeHOAFOU = 10;
    } else if (i % 2 && team.teamVTT < allWRs[i - 1].teamVTT) {
      WROneHOAFOU = 5;
      WRTwoHOAFOU = 5;
      WRThreeHOAFOU = 5;
    } else if (
      (i % 2 && team.teamVTT > allWRs[i - 1].teamVTT) ||
      (team.teamVTT < allWRs[i - 1].teamVTT && team.teamVTT > 24.9)
    ) {
      WROneHOAFOU = -5;
      WRTwoHOAFOU = -5;
      WRThreeHOAFOU = -5;
    } else if (
      (i - 1) % 2 &&
      team.teamVTT < allWRs[i + 1].teamVTT &&
      team.teamVTT > 20 &&
      team.teamVTT < 25
    ) {
      WROneHOAFOU = -10;
      WRTwoHOAFOU = -10;
      WRThreeHOAFOU = -10;
    } else {
      WROneHOAFOU = -15;
      WRTwoHOAFOU = -15;
      WRThreeHOAFOU = -15;
    }

    return WROneHOAFOU, WRTwoHOAFOU, WRThreeHOAFOU;
  },

  calcWRvtt(team) {
    let wrvtt = team.teamVTT;

    if (wrvtt > 27.4) {
      wrvtt = 20;
    } else if (wrvtt > 24.9 && wrvtt < 27.5) {
      wrvtt = 15;
    } else if (wrvtt > 22.4 && wrvtt < 25) {
      wrvtt = 7.5;
    } else if (wrvtt > 19.9 && wrvtt < 22.5) {
      wrvtt = 0;
    } else if (wrvtt > 17.4 && wrvtt < 20) {
      wrvtt = -5;
    } else if (wrvtt > 14.9 && wrvtt < 17.5) {
      wrvtt = -10;
    } else {
      wrvtt = -15;
    }

    return wrvtt;
  },

  calcWRQBScore(team, i) {
    let WRQBScore = allQBData.allQBFinalProjectedPointsValues[i];

    let WRTargetShare = team.targetShareLastThreeGamesPlayed;

    if (WRQBScore >= 22 && WRTargetShare >= 26) {
      WRQBScore = 15;
    } else if (WRQBScore >= 22 && WRTargetShare >= 24) {
      WRQBScore = 10;
    } else if (WRQBScore >= 22 && WRTargetShare >= 22) {
      WRQBScore = 5;
    } else if (WRQBScore <= 16 && WRTargetShare <= 22 && WRTargetShare >= 20) {
      WRQBScore = -5;
    } else if (WRQBScore <= 16 && WRTargetShare <= 20 && WRTargetShare >= 18) {
      WRQBScore = -10;
    } else if (WRQBScore <= 16 && WRTargetShare <= 18) {
      WRQBScore = -15;
    } else {
      WRQBScore = 0;
    }
    return WRQBScore;
  },

  calcWREliteProjectedTargetsBonus(team, i) {
    let WR4for4ProjectedTargets = team.projectedTargets4For4;

    let QBGLSPProjectedPassAttempts = allWRs[i].QBGLSPProjectedPassAttempts;

    let WRTargetShare = team.targetShareLastThreeGamesPlayed;
    let decWRTargetShare = +(WRTargetShare / 100).toFixed(3);

    let calculatedWRProjectedTargets = +(
      QBGLSPProjectedPassAttempts * decWRTargetShare
    ).toFixed(3);

    let averageCalculatedWRProjectedTargets = +(
      (WR4for4ProjectedTargets + calculatedWRProjectedTargets) /
      2
    ).toFixed(3);

    let WRAvgPTS = averageCalculatedWRProjectedTargets;
    // console.log(WRAvgPTS);

    if (WRAvgPTS >= 8) {
      WRAvgPTS = 25;
    } else if (WRAvgPTS >= 7) {
      WRAvgPTS = 20;
    } else if (WRAvgPTS >= 6) {
      WRAvgPTS = 17.5;
    } else if (WRAvgPTS >= 5.5) {
      WRAvgPTS = 12.5;
    } else {
      WRAvgPTS = 0;
    }
    return WRAvgPTS;
  },

  calcGameEnvironmentInducedHighTargetVolume(team, i) {
    let WRTargetShare = team.targetShareLastThreeGamesPlayed;
    let WRTargetShareb = 0;

    if (i % 2 && allWRs[i - 1].teamVTT - allWRs[i].teamVTT >= 5) {
      //   console.log(team);
      if (WRTargetShare >= 28) {
        WRTargetShareb = 15;
      } else if (WRTargetShare >= 26 && WRTargetShare < 28) {
        WRTargetShareb = 12.5;
      } else if (WRTargetShare >= 24 && WRTargetShare < 26) {
        WRTargetShareb = 10;
      } else if (WRTargetShare >= 22 && WRTargetShare < 24) {
        WRTargetShareb = 5;
      } else {
        WRTargetShareb = 0;
      }

      return WRTargetShareb;
    }
    return WRTargetShareb;
  },

  calcTopTwelveInNFLTargetShareLastThreeWeeks(team, i) {
    let ifTopTwelve = team.top12NFLTargetShareLastThreeWeeks;

    if (ifTopTwelve === 1) {
      ifTopTwelve = 10;
    } else {
      ifTopTwelve = 0;
    }
    return ifTopTwelve;
  },
};

allWRs.map(function (team, i) {
  WROneTotalScore = 0;
  WRTwoTotalScore = 0;
  WRThreeTotalScore = 0;

  let allWRHomeOrAwayFavoriteOrUnderdog =
    allWRCalcFunctions.calcWRHomeOrAwayFavoriteOrUnderdogs(team, i);
  allWROneHomeOrAwayFavoriteOrUnderdogs.push(allWRHomeOrAwayFavoriteOrUnderdog);
  allWRTwoHomeOrAwayFavoriteOrUnderdogs.push(allWRHomeOrAwayFavoriteOrUnderdog);
  allWRThreeHomeOrAwayFavoriteOrUnderdogs.push(
    allWRHomeOrAwayFavoriteOrUnderdog
  );
  WROneTotalScore += allWRHomeOrAwayFavoriteOrUnderdog;
  WRTwoTotalScore += allWRHomeOrAwayFavoriteOrUnderdog;
  WRThreeTotalScore += allWRHomeOrAwayFavoriteOrUnderdog;

  let allWRVtt = allWRCalcFunctions.calcWRvtt(team);
  allWROneVTTs.push(allWRVtt);
  allWRTwoVTTs.push(allWRVtt);
  allWRThreeVTTs.push(allWRVtt);
  WROneTotalScore += allWRVtt;
  WRTwoTotalScore += allWRVtt;
  WRThreeTotalScore += allWRVtt;

  let allWROneQBScores = allWRCalcFunctions.calcWRQBScore(team.WROne, i);
  allWROneQBScore.push(allWROneQBScores);
  WROneTotalScore += allWROneQBScores;

  let allWRTwoQBScores = allWRCalcFunctions.calcWRQBScore(team.WRTwo, i);
  allWRTwoQBScore.push(allWRTwoQBScores);
  WRTwoTotalScore += allWRTwoQBScores;

  let allWRThreeQBScores = allWRCalcFunctions.calcWRQBScore(team.WRThree, i);
  allWRThreeQBScore.push(allWRThreeQBScores);
  WRThreeTotalScore += allWRThreeQBScores;

  let allWROneEliteProjectedTargetsBonus =
    allWRCalcFunctions.calcWREliteProjectedTargetsBonus(team.WROne, i);
  allWROneEliteProjectedTargetsBonuss.push(allWROneEliteProjectedTargetsBonus);
  WROneTotalScore += allWROneEliteProjectedTargetsBonus;

  let allWRTwoEliteProjectedTargetsBonus =
    allWRCalcFunctions.calcWREliteProjectedTargetsBonus(team.WRTwo, i);
  allWRTwoEliteProjectedTargetsBonuss.push(allWRTwoEliteProjectedTargetsBonus);
  WRTwoTotalScore += allWRTwoEliteProjectedTargetsBonus;

  let allWRThreeEliteProjectedTargetsBonus =
    allWRCalcFunctions.calcWREliteProjectedTargetsBonus(team.WRThree, i);
  allWRThreeEliteProjectedTargetsBonuss.push(
    allWRThreeEliteProjectedTargetsBonus
  );
  WRThreeTotalScore += allWRThreeEliteProjectedTargetsBonus;

  let allWROneGameInducedHighTargetVolume =
    allWRCalcFunctions.calcGameEnvironmentInducedHighTargetVolume(
      team.WROne,
      i
    );
  allWROneGameEnvironmentInducedHighTargetVolume.push(
    allWROneGameInducedHighTargetVolume
  );
  WROneTotalScore += allWROneGameInducedHighTargetVolume;

  let allWRTwoGameInducedHighTargetVolume =
    allWRCalcFunctions.calcGameEnvironmentInducedHighTargetVolume(
      team.WRTwo,
      i
    );
  allWRTwoGameEnvironmentInducedHighTargetVolume.push(
    allWRTwoGameInducedHighTargetVolume
  );
  WRTwoTotalScore += allWRTwoGameInducedHighTargetVolume;

  let allWRThreeGameInducedHighTargetVolume =
    allWRCalcFunctions.calcGameEnvironmentInducedHighTargetVolume(
      team.WRThree,
      i
    );
  allWRThreeGameEnvironmentInducedHighTargetVolume.push(
    allWRThreeGameInducedHighTargetVolume
  );
  WRThreeTotalScore += allWRThreeGameInducedHighTargetVolume;

  let WROneIfTopTwelveNFLTargetShare =
    allWRCalcFunctions.calcTopTwelveInNFLTargetShareLastThreeWeeks(
      team.WROne,
      i
    );
  allWROneIfTopTwelveTargetShareLasThreeWeeks.push(
    WROneIfTopTwelveNFLTargetShare
  );
  WROneTotalScore += WROneIfTopTwelveNFLTargetShare;

  let WRTwoIfTopTwelveNFLTargetShare =
    allWRCalcFunctions.calcTopTwelveInNFLTargetShareLastThreeWeeks(
      team.WRTwo,
      i
    );
  allWRTwoIfTopTwelveTargetShareLasThreeWeeks.push(
    WRTwoIfTopTwelveNFLTargetShare
  );
  WRTwoTotalScore += WRTwoIfTopTwelveNFLTargetShare;

  let WRThreeIfTopTwelveNFLTargetShare =
    allWRCalcFunctions.calcTopTwelveInNFLTargetShareLastThreeWeeks(
      team.WRThree,
      i
    );
  allWRThreeIfTopTwelveTargetShareLasThreeWeeks.push(
    WRThreeIfTopTwelveNFLTargetShare
  );
  WRThreeTotalScore += WRThreeIfTopTwelveNFLTargetShare;

  allWROneTotalScores.push(WROneTotalScore);
  allWRTwoTotalScores.push(WRTwoTotalScore);
  allWRThreeTotalScores.push(WRThreeTotalScore);
});

/////////assigning WR's their projected points for the week using totalScore from above///////////

////////////////////WR1's- calculaing and assigning projections for all WR1s

const allHalfWROneFinalProjectedPointsValues = [];
const allHalfWROneFinalProjectedPointsValuesPlusNames = [];

const allFullWROneFinalProjectedPointsValues = [];
const allFullWROneFinalProjectedPointsValuesPlusNames = [];

const wrOnenumOfMatchingRoleWeeks = [];
const wrTwonumOfMatchingRoleWeeks = [];
const wrThreenumOfMatchingRoleWeeks = [];

allWRs.forEach(function (wr, i) {
  wrOneRoleThisWeek = wr.WROne.roleThisWeek;
  wrTwoRoleThisWeek = wr.WRTwo.roleThisWeek;
  wrThreeRoleThisWeek = wr.WRThree.roleThisWeek;
  wrOneroleLastXNumOfWeeksUpToFiveArray = wr.WROne.roleLastXNumOfWeeksUpToFive;
  wrTworoleLastXNumOfWeeksUpToFiveArray = wr.WRTwo.roleLastXNumOfWeeksUpToFive;
  wrThreeroleLastXNumOfWeeksUpToFiveArray =
    wr.WRThree.roleLastXNumOfWeeksUpToFive;

  let wrOnematchingWeeks = 0;
  let wrTwomatchingWeeks = 0;
  let wrThreematchingWeeks = 0;

  wrOneroleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === wrOneRoleThisWeek) {
      wrOnematchingWeeks = wrOnematchingWeeks + 1;
    }
  });
  wrOnenumOfMatchingRoleWeeks.push(wrOnematchingWeeks);

  wrTworoleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === wrTwoRoleThisWeek) {
      wrTwomatchingWeeks = wrTwomatchingWeeks + 1;
    }
  });
  wrTwonumOfMatchingRoleWeeks.push(wrTwomatchingWeeks);

  wrThreeroleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === wrThreeRoleThisWeek) {
      wrThreematchingWeeks = wrThreematchingWeeks + 1;
    }
  });
  wrThreenumOfMatchingRoleWeeks.push(wrThreematchingWeeks);
});

const wrOnePercentageOfMatchingRoleWeeks = [];
const wrTwoPercentageOfMatchingRoleWeeks = [];
const wrThreePercentageOfMatchingRoleWeeks = [];

allWRs.map(function (team, i) {
  let wrOnematchingWeeksPercentage =
    wrOnenumOfMatchingRoleWeeks[i] /
    team.WROne.roleLastXNumOfWeeksUpToFive.length;

  wrOnePercentageOfMatchingRoleWeeks.push(wrOnematchingWeeksPercentage);

  let wrTwomatchingWeeksPercentage =
    wrTwonumOfMatchingRoleWeeks[i] /
    team.WRTwo.roleLastXNumOfWeeksUpToFive.length;

  wrTwoPercentageOfMatchingRoleWeeks.push(wrTwomatchingWeeksPercentage);

  let wrThreematchingWeeksPercentage =
    wrThreenumOfMatchingRoleWeeks[i] /
    team.WRThree.roleLastXNumOfWeeksUpToFive.length;

  wrThreePercentageOfMatchingRoleWeeks.push(wrThreematchingWeeksPercentage);
});

allWROneTotalScores.map(function (score, i, array) {
  let halfTwentyFifthPercentProjection =
    allWRs[i].WROne.halfTwentyFifthPercentProjectedPoints;
  let halfFiftyithPercentProjection =
    allWRs[i].WROne.halfFiftyithPercentProjectedPoints;
  let halfSeventyFifthPercentProjection =
    allWRs[i].WROne.halfSeventyFifthPercentProjectedPoints;
  let PPRTwentyFifthPercentProjection =
    allWRs[i].WROne.PPRTwentyFifthPercentProjectedPoints;
  let PPRFiftyithPercentProjection =
    allWRs[i].WROne.PPRFiftyithPercentProjectedPoints;
  let PPRSeventyFifthPercentProjection =
    allWRs[i].WROne.PPRSeventyFifthPercentProjectedPoints;

  let WRHalfProjectedPoints = 0;
  let WRFullProjectedPoints = 0;

  //   console.log(`${score}: ${allWRs[i].WROne.name}`);

  if (
    gameInfo.week.currentWeek > 3 &&
    wrOnePercentageOfMatchingRoleWeeks[i] > 0.74
  ) {
    if (score >= 45) {
      WRHalfProjectedPoints = halfSeventyFifthPercentProjection;
      WRFullProjectedPoints = PPRSeventyFifthPercentProjection;
    } else if (score >= -5) {
      WRHalfProjectedPoints = halfFiftyithPercentProjection;
      WRFullProjectedPoints = PPRFiftyithPercentProjection;
    } else {
      WRHalfProjectedPoints = halfTwentyFifthPercentProjection;
      WRFullProjectedPoints = PPRTwentyFifthPercentProjection;
    }
  } else if (
    gameInfo.week.currentWeek > 3 &&
    wrOnePercentageOfMatchingRoleWeeks[i] < 0.75
  ) {
    WRHalfProjectedPoints = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
  }

  if (
    gameInfo.week.currentWeek === 3 &&
    wrOnePercentageOfMatchingRoleWeeks[i] === 1
  ) {
    let totalHalfAvg =
      (allWRs[i].WROne.fourForFourHalfPPRProjectedPoints +
        halfFiftyithPercentProjection) /
      2;
    let totalFullAvg =
      (allWRs[i].WROne.fourForFourFullPPRProjectedPoints +
        PPRFiftyithPercentProjection) /
      2;

    WRHalfProjectedPoints = +totalHalfAvg.toFixed(2);
    WRFullProjectedPoints = +totalFullAvg.toFixed(2);
  } else if (
    gameInfo.week.currentWeek === 3 &&
    wrOnePercentageOfMatchingRoleWeeks[i] !== 1
  ) {
    WRHalfProjectedPoints = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
  }

  if (gameInfo.week.currentWeek < 3) {
    WRHalfProjectedPoints = allWRs[i].WROne.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WROne.fourForFourFullPPRProjectedPoints;
  }

  allHalfWROneFinalProjectedPointsValues.push(WRHalfProjectedPoints);
  allHalfWROneFinalProjectedPointsValuesPlusNames.push(
    `${allWRs[i].WROne.name}: ${WRHalfProjectedPoints}`
  );

  allFullWROneFinalProjectedPointsValues.push(WRFullProjectedPoints);
  allFullWROneFinalProjectedPointsValuesPlusNames.push(
    `${allWRs[i].WROne.name}: ${WRFullProjectedPoints}`
  );
});

////////////////////WR2's- calculaing and assigning projections for all WR2s

const allHalfWRTwoFinalProjectedPointsValues = [];
const allHalfWRTwoFinalProjectedPointsValuesPlusNames = [];

const allFullWRTwoFinalProjectedPointsValues = [];
const allFullWRTwoFinalProjectedPointsValuesPlusNames = [];

allWRTwoTotalScores.map(function (score, i, array) {
  let halfTwentyFifthPercentProjection =
    allWRs[i].WRTwo.halfTwentyFifthPercentProjectedPoints;
  let halfFiftyithPercentProjection =
    allWRs[i].WRTwo.halfFiftyithPercentProjectedPoints;
  let halfSeventyFifthPercentProjection =
    allWRs[i].WRTwo.halfSeventyFifthPercentProjectedPoints;
  let PPRTwentyFifthPercentProjection =
    allWRs[i].WRTwo.PPRTwentyFifthPercentProjectedPoints;
  let PPRFiftyithPercentProjection =
    allWRs[i].WRTwo.PPRFiftyithPercentProjectedPoints;
  let PPRSeventyFifthPercentProjection =
    allWRs[i].WRTwo.PPRSeventyFifthPercentProjectedPoints;

  let WRHalfProjectedPoints = 0;
  let WRFullProjectedPoints = 0;

  //   console.log(`${score}: ${allWRs[i].WRTwo.name}`);

  if (
    gameInfo.week.currentWeek > 3 &&
    wrTwoPercentageOfMatchingRoleWeeks[i] > 0.74
  ) {
    if (score >= 45) {
      WRHalfProjectedPoints = halfSeventyFifthPercentProjection;
      WRFullProjectedPoints = PPRSeventyFifthPercentProjection;
    } else if (score >= -5) {
      WRHalfProjectedPoints = halfFiftyithPercentProjection;
      WRFullProjectedPoints = PPRFiftyithPercentProjection;
    } else {
      WRHalfProjectedPoints = halfTwentyFifthPercentProjection;
      WRFullProjectedPoints = PPRTwentyFifthPercentProjection;
    }
  } else if (
    gameInfo.week.currentWeek > 3 &&
    wrTwoPercentageOfMatchingRoleWeeks[i] < 0.75
  ) {
    WRHalfProjectedPoints = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
  }

  if (
    gameInfo.week.currentWeek === 3 &&
    wrTwoPercentageOfMatchingRoleWeeks[i] === 1
  ) {
    let totalHalfAvg =
      (allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints +
        halfFiftyithPercentProjection) /
      2;

    let totalFullAvg =
      (allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints +
        PPRFiftyithPercentProjection) /
      2;

    WRHalfProjectedPoints = +totalHalfAvg.toFixed(2);
    WRFullProjectedPoints = +totalFullAvg.toFixed(2);
  } else if (
    gameInfo.week.currentWeek === 3 &&
    wrTwoPercentageOfMatchingRoleWeeks[i] !== 1
  ) {
    WRHalfProjectedPoints = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
  }

  if (gameInfo.week.currentWeek < 3) {
    WRHalfProjectedPoints = allWRs[i].WRTwo.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WRTwo.fourForFourFullPPRProjectedPoints;
  }

  allHalfWRTwoFinalProjectedPointsValues.push(WRHalfProjectedPoints);
  allHalfWRTwoFinalProjectedPointsValuesPlusNames.push(
    `${allWRs[i].WRTwo.name}: ${WRHalfProjectedPoints}`
  );

  allFullWRTwoFinalProjectedPointsValues.push(WRFullProjectedPoints);
  allFullWRTwoFinalProjectedPointsValuesPlusNames.push(
    `${allWRs[i].WRTwo.name}: ${WRFullProjectedPoints}`
  );
});

/////////////////////////////
////////////////////WR3's- calculaing and assigning projections for all WR3s

const allHalfWRThreeFinalProjectedPointsValues = [];
const allHalfWRThreeFinalProjectedPointsValuesPlusNames = [];

const allFullWRThreeFinalProjectedPointsValues = [];
const allFullWRThreeFinalProjectedPointsValuesPlusNames = [];

allWRThreeTotalScores.map(function (score, i, array) {
  let halfTwentyFifthPercentProjection =
    allWRs[i].WRThree.halfTwentyFifthPercentProjectedPoints;
  let halfFiftyithPercentProjection =
    allWRs[i].WRThree.halfFiftyithPercentProjectedPoints;
  let halfSeventyFifthPercentProjection =
    allWRs[i].WRThree.halfSeventyFifthPercentProjectedPoints;
  let PPRTwentyFifthPercentProjection =
    allWRs[i].WRThree.PPRTwentyFifthPercentProjectedPoints;
  let PPRFiftyithPercentProjection =
    allWRs[i].WRThree.PPRFiftyithPercentProjectedPoints;
  let PPRSeventyFifthPercentProjection =
    allWRs[i].WRThree.PPRSeventyFifthPercentProjectedPoints;

  let WRHalfProjectedPoints = 0;
  let WRFullProjectedPoints = 0;

  //   console.log(`${score}: ${allWRs[i].WRTwo.name}`);

  if (
    gameInfo.week.currentWeek > 3 &&
    wrThreePercentageOfMatchingRoleWeeks[i] > 0.74
  ) {
    if (score >= 45) {
      WRHalfProjectedPoints = halfSeventyFifthPercentProjection;
      WRFullProjectedPoints = PPRSeventyFifthPercentProjection;
    } else if (score >= -5) {
      WRHalfProjectedPoints = halfFiftyithPercentProjection;
      WRFullProjectedPoints = PPRFiftyithPercentProjection;
    } else {
      WRHalfProjectedPoints = halfTwentyFifthPercentProjection;
      WRFullProjectedPoints = PPRTwentyFifthPercentProjection;
    }
  } else if (
    gameInfo.week.currentWeek > 3 &&
    wrThreePercentageOfMatchingRoleWeeks[i] < 0.75
  ) {
    WRHalfProjectedPoints = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
  }

  if (
    gameInfo.week.currentWeek === 3 &&
    wrThreePercentageOfMatchingRoleWeeks[i] === 1
  ) {
    let totalHalfAvg =
      (allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints +
        halfFiftyithPercentProjection) /
      2;

    let totalFullAvg =
      (allWRs[i].WRThree.fourForFourFullPPRProjectedPoints +
        PPRFiftyithPercentProjection) /
      2;

    WRHalfProjectedPoints = +totalHalfAvg.toFixed(2);
    WRFullProjectedPoints = +totalFullAvg.toFixed(2);
  } else if (
    gameInfo.week.currentWeek === 3 &&
    wrThreePercentageOfMatchingRoleWeeks[i] !== 1
  ) {
    WRHalfProjectedPoints = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
  }

  if (gameInfo.week.currentWeek < 3) {
    WRHalfProjectedPoints = allWRs[i].WRThree.fourForFourHalfPPRProjectedPoints;
    WRFullProjectedPoints = allWRs[i].WRThree.fourForFourFullPPRProjectedPoints;
  }

  allHalfWRThreeFinalProjectedPointsValues.push(WRHalfProjectedPoints);
  allHalfWRThreeFinalProjectedPointsValuesPlusNames.push(
    `${allWRs[i].WRThree.name}: ${WRHalfProjectedPoints}`
  );

  allFullWRThreeFinalProjectedPointsValues.push(WRFullProjectedPoints);
  allFullWRThreeFinalProjectedPointsValuesPlusNames.push(
    `${allWRs[i].WRThree.name}: ${WRFullProjectedPoints}`
  );
});

/////////////populating arrays for all WR's

const allWRsHalfProjectedPointsValues = [];
const allWRsFullProjectedPointsValues = [];
const allWRsHalfProjectedPointsValuesPlusNames = [];
const allWRsFullProjectedPointsValuesPlusNames = [];

allHalfWROneFinalProjectedPointsValues.map(function (proj, i) {
  allWRsHalfProjectedPointsValues.push(proj);
  allWRsHalfProjectedPointsValues.push(
    allHalfWRTwoFinalProjectedPointsValues[i]
  );
  allWRsHalfProjectedPointsValues.push(
    allHalfWRThreeFinalProjectedPointsValues[i]
  );
});

allFullWROneFinalProjectedPointsValues.map(function (proj, i) {
  allWRsFullProjectedPointsValues.push(proj);
  allWRsFullProjectedPointsValues.push(
    allFullWRTwoFinalProjectedPointsValues[i]
  );
  allWRsFullProjectedPointsValues.push(
    allFullWRThreeFinalProjectedPointsValues[i]
  );
});

allHalfWROneFinalProjectedPointsValuesPlusNames.map(function (proj, i) {
  allWRsHalfProjectedPointsValuesPlusNames.push(proj);
  allWRsHalfProjectedPointsValuesPlusNames.push(
    allHalfWRTwoFinalProjectedPointsValuesPlusNames[i]
  );
  allWRsHalfProjectedPointsValuesPlusNames.push(
    allHalfWRThreeFinalProjectedPointsValuesPlusNames[i]
  );
});

allFullWROneFinalProjectedPointsValuesPlusNames.map(function (proj, i) {
  allWRsFullProjectedPointsValuesPlusNames.push(proj);
  allWRsFullProjectedPointsValuesPlusNames.push(
    allFullWRTwoFinalProjectedPointsValuesPlusNames[i]
  );
  allWRsFullProjectedPointsValuesPlusNames.push(
    allFullWRThreeFinalProjectedPointsValuesPlusNames[i]
  );
});

/////////////////////////projected points per dollar

const halfProjectedPointsPerDollarDraftkings = [];
const halfProjectedPointsPerDollarFanduel = [];
const halfProjectedPointsPerDollarYahoo = [];

const fullProjectedPointsPerDollarDraftkings = [];
const fullProjectedPointsPerDollarFanduel = [];
const fullProjectedPointsPerDollarYahoo = [];

allWRs.forEach(function (team, i) {
  let WROnes = team.WROne;
  let WRTwos = team.WRTwo;
  let WRThrees = team.WRThree;

  let wrOnehalfdraftkings = +(
    allHalfWROneFinalProjectedPointsValues[i] / WROnes.draftkingsSalary
  ).toFixed(4);
  let wrOnehalfFanduel = +(
    allHalfWROneFinalProjectedPointsValues[i] / WROnes.fanduelSalary
  ).toFixed(4);
  let wrOnehalfYahoo = +(
    allHalfWROneFinalProjectedPointsValues[i] / WROnes.yahooSalary
  ).toFixed(4);

  let wrTwohalfdraftkings = +(
    allHalfWRTwoFinalProjectedPointsValues[i] / WRTwos.draftkingsSalary
  ).toFixed(4);
  let wrTwohalfFanduel = +(
    allHalfWRTwoFinalProjectedPointsValues[i] / WRTwos.fanduelSalary
  ).toFixed(4);
  let wrTwohalfYahoo = +(
    allHalfWRTwoFinalProjectedPointsValues[i] / WRTwos.yahooSalary
  ).toFixed(4);

  let wrThreehalfdraftkings = +(
    allHalfWRThreeFinalProjectedPointsValues[i] / WRThrees.draftkingsSalary
  ).toFixed(4);
  let wrThreehalfFanduel = +(
    allHalfWRThreeFinalProjectedPointsValues[i] / WRThrees.fanduelSalary
  ).toFixed(4);
  let wrThreehalfYahoo = +(
    allHalfWRThreeFinalProjectedPointsValues[i] / WRThrees.yahooSalary
  ).toFixed(4);

  halfProjectedPointsPerDollarDraftkings.push(wrOnehalfdraftkings);
  halfProjectedPointsPerDollarFanduel.push(wrOnehalfFanduel);
  halfProjectedPointsPerDollarYahoo.push(wrOnehalfYahoo);
  halfProjectedPointsPerDollarDraftkings.push(wrTwohalfdraftkings);
  halfProjectedPointsPerDollarFanduel.push(wrTwohalfFanduel);
  halfProjectedPointsPerDollarYahoo.push(wrTwohalfYahoo);
  halfProjectedPointsPerDollarDraftkings.push(wrThreehalfdraftkings);
  halfProjectedPointsPerDollarFanduel.push(wrThreehalfFanduel);
  halfProjectedPointsPerDollarYahoo.push(wrThreehalfYahoo);

  let wrOneFulldraftkings = +(
    allFullWROneFinalProjectedPointsValues[i] / WROnes.draftkingsSalary
  ).toFixed(4);
  let wrOneFullFanduel = +(
    allFullWROneFinalProjectedPointsValues[i] / WROnes.fanduelSalary
  ).toFixed(4);
  let wrOneFullYahoo = +(
    allFullWROneFinalProjectedPointsValues[i] / WROnes.yahooSalary
  ).toFixed(4);

  let wrTwoFulldraftkings = +(
    allFullWRTwoFinalProjectedPointsValues[i] / WRTwos.draftkingsSalary
  ).toFixed(4);
  let wrTwoFullFanduel = +(
    allFullWRTwoFinalProjectedPointsValues[i] / WRTwos.fanduelSalary
  ).toFixed(4);
  let wrTwoFullYahoo = +(
    allFullWRTwoFinalProjectedPointsValues[i] / WRTwos.yahooSalary
  ).toFixed(4);

  let wrThreeFulldraftkings = +(
    allFullWRThreeFinalProjectedPointsValues[i] / WRThrees.draftkingsSalary
  ).toFixed(4);
  let wrThreeFullFanduel = +(
    allFullWRThreeFinalProjectedPointsValues[i] / WRThrees.fanduelSalary
  ).toFixed(4);
  let wrThreeFullYahoo = +(
    allFullWRThreeFinalProjectedPointsValues[i] / WRThrees.yahooSalary
  ).toFixed(4);

  fullProjectedPointsPerDollarDraftkings.push(wrOneFulldraftkings);
  fullProjectedPointsPerDollarFanduel.push(wrOneFullFanduel);
  fullProjectedPointsPerDollarYahoo.push(wrOneFullYahoo);
  fullProjectedPointsPerDollarDraftkings.push(wrTwoFulldraftkings);
  fullProjectedPointsPerDollarFanduel.push(wrTwoFullFanduel);
  fullProjectedPointsPerDollarYahoo.push(wrTwoFullYahoo);
  fullProjectedPointsPerDollarDraftkings.push(wrThreeFulldraftkings);
  fullProjectedPointsPerDollarFanduel.push(wrThreeFullFanduel);
  fullProjectedPointsPerDollarYahoo.push(wrThreeFullYahoo);
});

const allWRData = {
  allWROneHomeOrAwayFavoriteOrUnderdogs: allWROneHomeOrAwayFavoriteOrUnderdogs,
  allWRTwoHomeOrAwayFavoriteOrUnderdogs: allWRTwoHomeOrAwayFavoriteOrUnderdogs,
  allWROneVTTs: allWROneVTTs,
  allWRTwoVTTs: allWRTwoVTTs,
  allWROneQBScore: allWROneQBScore,
  allWRTwoQBScore: allWRTwoQBScore,
  allWROneEliteProjectedTargetsBonuss: allWROneEliteProjectedTargetsBonuss,
  allWRTwoEliteProjectedTargetsBonuss: allWRTwoEliteProjectedTargetsBonuss,
  allWROneGameEnvironmentInducedHighTargetVolume:
    allWROneGameEnvironmentInducedHighTargetVolume,
  allWRTwoGameEnvironmentInducedHighTargetVolume:
    allWRTwoGameEnvironmentInducedHighTargetVolume,
  allWROneIfTopTwelveTargetShareLasThreeWeeks:
    allWROneIfTopTwelveTargetShareLasThreeWeeks,
  allWRTwoIfTopTwelveTargetShareLasThreeWeeks:
    allWRTwoIfTopTwelveTargetShareLasThreeWeeks,
  allWROneTotalScores: allWROneTotalScores,
  allWRTwoTotalScores: allWRTwoTotalScores,
  allHalfWROneFinalProjectedPointsValues:
    allHalfWROneFinalProjectedPointsValues,
  allHalfWROneFinalProjectedPointsValuesPlusNames:
    allHalfWROneFinalProjectedPointsValuesPlusNames,
  allFullWROneFinalProjectedPointsValues:
    allFullWROneFinalProjectedPointsValues,
  allFullWROneFinalProjectedPointsValuesPlusNames:
    allFullWROneFinalProjectedPointsValuesPlusNames,
  allHalfWRTwoFinalProjectedPointsValues:
    allHalfWRTwoFinalProjectedPointsValues,
  allHalfWRTwoFinalProjectedPointsValuesPlusNames:
    allHalfWRTwoFinalProjectedPointsValuesPlusNames,
  allFullWRTwoFinalProjectedPointsValues:
    allFullWRTwoFinalProjectedPointsValues,
  allFullWRTwoFinalProjectedPointsValuesPlusNames:
    allFullWRTwoFinalProjectedPointsValuesPlusNames,

  allHalfWRThreeFinalProjectedPointsValues:
    allHalfWRThreeFinalProjectedPointsValues,
  allHalfWRThreeFinalProjectedPointsValuesPlusNames:
    allHalfWRThreeFinalProjectedPointsValuesPlusNames,

  allFullWRThreeFinalProjectedPointsValues:
    allFullWRThreeFinalProjectedPointsValues,
  allFullWRThreeFinalProjectedPointsValuesPlusNames:
    allFullWRThreeFinalProjectedPointsValuesPlusNames,

  allWRsHalfProjectedPointsValues: allWRsHalfProjectedPointsValues,
  allWRsFullProjectedPointsValues: allWRsFullProjectedPointsValues,
  allWRsHalfProjectedPointsValuesPlusNames:
    allWRsHalfProjectedPointsValuesPlusNames,
  allWRsFullProjectedPointsValuesPlusNames:
    allWRsFullProjectedPointsValuesPlusNames,

  halfProjectedPointsPerDollarDraftkings:
    halfProjectedPointsPerDollarDraftkings,
  halfProjectedPointsPerDollarFanduel: halfProjectedPointsPerDollarFanduel,
  halfProjectedPointsPerDollarYahoo: halfProjectedPointsPerDollarYahoo,

  fullProjectedPointsPerDollarDraftkings:
    fullProjectedPointsPerDollarDraftkings,
  fullProjectedPointsPerDollarFanduel: fullProjectedPointsPerDollarFanduel,
  fullProjectedPointsPerDollarYahoo: fullProjectedPointsPerDollarYahoo,
};

// console.log(allFullWRThreeFinalProjectedPointsValuesPlusNames);
// console.log(allWRsHalfProjectedPointsValuesPlusNames);

module.exports = allWRCalcFunctions;
module.exports = allWRData;
