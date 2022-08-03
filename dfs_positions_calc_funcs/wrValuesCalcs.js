const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const allWRs = require('../teamandpositionvariables/allWRVariables');
const wrrawdata = require('../teamandpostionsrawdata/wrrawdata');
const qbrawdata = require('../teamandpostionsrawdata/qbrawdata');
const allQBData = require('../dfs_positions_calc_funcs/qbValuesCalcs');

const allWROneTotalScores = [];
const allWRTwoTotalScores = [];

const allWROneHomeOrAwayFavoriteOrUnderdogs = [];
const allWRTwoHomeOrAwayFavoriteOrUnderdogs = [];
const allWROneVTTs = [];
const allWRTwoVTTs = [];
const allWROneQBScore = [];
const allWRTwoQBScore = [];
const allWROneEliteProjectedTargetsBonuss = [];
const allWRTwoEliteProjectedTargetsBonuss = [];
const allWROneGameEnvironmentInducedHighTargetVolume = [];
const allWRTwoGameEnvironmentInducedHighTargetVolume = [];
const allWROneIfTopTwelveTargetShareLasThreeWeeks = [];
const allWRTwoIfTopTwelveTargetShareLasThreeWeeks = [];

const allWRCalcFunctions = {
  calcWRHomeOrAwayFavoriteOrUnderdogs(team, i) {
    let WROne = team.WROne;
    let WRTwo = team.WRTwo;

    // console.log(team.teamVTT);

    let WROneHOAFOU = 0;
    let WRTwoHOAFOU = 0;

    if ((i - 1) % 2 && team.teamVTT > allWRs[i + 1].teamVTT) {
      WROneHOAFOU = 10;
      WRTwoHOAFOU = 10;
    } else if (i % 2 && team.teamVTT < allWRs[i - 1].teamVTT) {
      WROneHOAFOU = 5;
      WRTwoHOAFOU = 5;
    } else if (
      (i % 2 && team.teamVTT > allWRs[i - 1].teamVTT) ||
      (team.teamVTT < allWRs[i - 1].teamVTT && team.teamVTT > 24.9)
    ) {
      WROneHOAFOU = -5;
      WRTwoHOAFOU = -5;
    } else if (
      (i - 1) % 2 &&
      team.teamVTT < allWRs[i + 1].teamVTT &&
      team.teamVTT > 20 &&
      team.teamVTT < 25
    ) {
      WROneHOAFOU = -10;
      WRTwoHOAFOU = -10;
    } else {
      WROneHOAFOU = -15;
      WRTwoHOAFOU = -15;
    }

    return WROneHOAFOU, WRTwoHOAFOU;
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

  let allWRHomeOrAwayFavoriteOrUnderdog =
    allWRCalcFunctions.calcWRHomeOrAwayFavoriteOrUnderdogs(team, i);
  allWROneHomeOrAwayFavoriteOrUnderdogs.push(allWRHomeOrAwayFavoriteOrUnderdog);
  allWRTwoHomeOrAwayFavoriteOrUnderdogs.push(allWRHomeOrAwayFavoriteOrUnderdog);
  WROneTotalScore += allWRHomeOrAwayFavoriteOrUnderdog;
  WRTwoTotalScore += allWRHomeOrAwayFavoriteOrUnderdog;

  let allWRVtt = allWRCalcFunctions.calcWRvtt(team);
  allWROneVTTs.push(allWRVtt);
  allWRTwoVTTs.push(allWRVtt);
  WROneTotalScore += allWRVtt;
  WRTwoTotalScore += allWRVtt;

  let allWROneQBScores = allWRCalcFunctions.calcWRQBScore(team.WROne, i);
  allWROneQBScore.push(allWROneQBScores);
  WROneTotalScore += allWROneQBScores;

  let allWRTwoQBScores = allWRCalcFunctions.calcWRQBScore(team.WRTwo, i);
  allWRTwoQBScore.push(allWRTwoQBScores);
  WRTwoTotalScore += allWRTwoQBScores;

  let allWROneEliteProjectedTargetsBonus =
    allWRCalcFunctions.calcWREliteProjectedTargetsBonus(team.WROne, i);
  allWROneEliteProjectedTargetsBonuss.push(allWROneEliteProjectedTargetsBonus);
  WROneTotalScore += allWROneEliteProjectedTargetsBonus;

  let allWRTwoEliteProjectedTargetsBonus =
    allWRCalcFunctions.calcWREliteProjectedTargetsBonus(team.WRTwo, i);
  allWRTwoEliteProjectedTargetsBonuss.push(allWRTwoEliteProjectedTargetsBonus);
  WRTwoTotalScore += allWRTwoEliteProjectedTargetsBonus;

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

  allWROneTotalScores.push(WROneTotalScore);
  allWRTwoTotalScores.push(WRTwoTotalScore);
});

/////////assigning WR's their projected points for the week using totalScore from above///////////

////////////////////WR1's- calculaing and assigning projections for all WR1s

const allHalfWROneFinalProjectedPointsValues = [];
const allHalfWROneFinalProjectedPointsValuesPlusNames = [];

const allFullWROneFinalProjectedPointsValues = [];
const allFullWROneFinalProjectedPointsValuesPlusNames = [];

const wrOnenumOfMatchingRoleWeeks = [];
const wrTwonumOfMatchingRoleWeeks = [];

allWRs.forEach(function (wr, i) {
  wrOneRoleThisWeek = wr.WROne.roleThisWeek;
  wrTwoRoleThisWeek = wr.WRTwo.roleThisWeek;
  wrOneroleLastXNumOfWeeksUpToFiveArray = wr.WROne.roleLastXNumOfWeeksUpToFive;
  wrTworoleLastXNumOfWeeksUpToFiveArray = wr.WRTwo.roleLastXNumOfWeeksUpToFive;

  let wrOnematchingWeeks = 0;
  let wrTwomatchingWeeks = 0;

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
});

const wrOnePercentageOfMatchingRoleWeeks = [];
const wrTwoPercentageOfMatchingRoleWeeks = [];

allWRs.map(function (team, i) {
  let wrOnematchingWeeksPercentage =
    wrOnenumOfMatchingRoleWeeks[i] /
    team.WROne.roleLastXNumOfWeeksUpToFive.length;

  wrOnePercentageOfMatchingRoleWeeks.push(wrOnematchingWeeksPercentage);

  let wrTwomatchingWeeksPercentage =
    wrTwonumOfMatchingRoleWeeks[i] /
    team.WRTwo.roleLastXNumOfWeeksUpToFive.length;

  wrTwoPercentageOfMatchingRoleWeeks.push(wrTwomatchingWeeksPercentage);
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

const allWRsHalfProjectedPointsValues = [];
const allWRsFullProjectedPointsValues = [];
const allWRsHalfProjectedPointsValuesPlusNames = [];
const allWRsFullProjectedPointsValuesPlusNames = [];

allHalfWROneFinalProjectedPointsValues.map(function (proj, i) {
  allWRsHalfProjectedPointsValues.push(proj);
  allWRsHalfProjectedPointsValues.push(
    allHalfWRTwoFinalProjectedPointsValues[i]
  );
});

allFullWROneFinalProjectedPointsValues.map(function (proj, i) {
  allWRsFullProjectedPointsValues.push(proj);
  allWRsFullProjectedPointsValues.push(
    allFullWRTwoFinalProjectedPointsValues[i]
  );
});

allHalfWROneFinalProjectedPointsValuesPlusNames.map(function (proj, i) {
  allWRsHalfProjectedPointsValuesPlusNames.push(proj);
  allWRsHalfProjectedPointsValuesPlusNames.push(
    allHalfWRTwoFinalProjectedPointsValuesPlusNames[i]
  );
});

allFullWROneFinalProjectedPointsValuesPlusNames.map(function (proj, i) {
  allWRsFullProjectedPointsValuesPlusNames.push(proj);
  allWRsFullProjectedPointsValuesPlusNames.push(
    allFullWRTwoFinalProjectedPointsValuesPlusNames[i]
  );
});

/////////////////////////projected points per dollar

const halfProjectedPointsPerDollarDraftkings = [];
const halfProjectedPointsPerDollarFanduel = [];
const halfProjectedPointsPerDollarYahoo = [];

const fullProjectedPointsPerDollarDraftkings = [];
const fullProjectedPointsPerDollarFanduel = [];
const fullProjectedPointsPerDollarYahoo = [];

// allRBs.forEach(function (team, i) {
//   let RBOnes = team.RBOne;
//   let RBTwos = team.RBTwo;

//   let rbOnehalfdraftkings = +(
//     allRBOneHalfPPRProjectedPointsValues[i] / RBOnes.draftkingsSalary
//   ).toFixed(4);
//   let rbOnehalfFanduel = +(
//     allRBOneHalfPPRProjectedPointsValues[i] / RBOnes.fanduelSalary
//   ).toFixed(4);
//   let rbOnehalfYahoo = +(
//     allRBOneHalfPPRProjectedPointsValues[i] / RBOnes.yahooSalary
//   ).toFixed(4);

//   let rbTwohalfdraftkings = +(
//     allRBTwoHalfPPRProjectedPointsValues[i] / RBTwos.draftkingsSalary
//   ).toFixed(4);
//   let rbTwohalfFanduel = +(
//     allRBTwoHalfPPRProjectedPointsValues[i] / RBTwos.fanduelSalary
//   ).toFixed(4);
//   let rbTwohalfYahoo = +(
//     allRBTwoHalfPPRProjectedPointsValues[i] / RBTwos.yahooSalary
//   ).toFixed(4);

//   halfProjectedPointsPerDollarDraftkings.push(rbOnehalfdraftkings);
//   halfProjectedPointsPerDollarFanduel.push(rbOnehalfFanduel);
//   halfProjectedPointsPerDollarYahoo.push(rbOnehalfYahoo);
//   halfProjectedPointsPerDollarDraftkings.push(rbTwohalfdraftkings);
//   halfProjectedPointsPerDollarFanduel.push(rbTwohalfFanduel);
//   halfProjectedPointsPerDollarYahoo.push(rbTwohalfYahoo);

//   let rbOneFulldraftkings = +(
//     allRBOneFullPPRProjectedPointsValues[i] / RBOnes.draftkingsSalary
//   ).toFixed(4);
//   let rbOneFullFanduel = +(
//     allRBOneFullPPRProjectedPointsValues[i] / RBOnes.fanduelSalary
//   ).toFixed(4);
//   let rbOneFullYahoo = +(
//     allRBOneFullPPRProjectedPointsValues[i] / RBOnes.yahooSalary
//   ).toFixed(4);

//   let rbTwoFulldraftkings = +(
//     allRBTwoFullPPRProjectedPointsValues[i] / RBTwos.draftkingsSalary
//   ).toFixed(4);
//   let rbTwoFullFanduel = +(
//     allRBTwoFullPPRProjectedPointsValues[i] / RBTwos.fanduelSalary
//   ).toFixed(4);
//   let rbTwoFullYahoo = +(
//     allRBTwoFullPPRProjectedPointsValues[i] / RBTwos.yahooSalary
//   ).toFixed(4);

//   fullProjectedPointsPerDollarDraftkings.push(rbOneFulldraftkings);
//   fullProjectedPointsPerDollarFanduel.push(rbOneFullFanduel);
//   fullProjectedPointsPerDollarYahoo.push(rbOneFullYahoo);
//   fullProjectedPointsPerDollarDraftkings.push(rbTwoFulldraftkings);
//   fullProjectedPointsPerDollarFanduel.push(rbTwoFullFanduel);
//   fullProjectedPointsPerDollarYahoo.push(rbTwoFullYahoo);
// });

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
  allWRsHalfProjectedPointsValues: allWRsHalfProjectedPointsValues,
  allWRsFullProjectedPointsValues: allWRsFullProjectedPointsValues,
  allWRsHalfProjectedPointsValuesPlusNames:
    allWRsHalfProjectedPointsValuesPlusNames,
  allWRsFullProjectedPointsValuesPlusNames:
    allWRsFullProjectedPointsValuesPlusNames,
};

module.exports = allWRCalcFunctions;
module.exports = allWRData;
