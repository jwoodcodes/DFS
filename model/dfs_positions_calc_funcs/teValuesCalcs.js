const allTEs = require('../teamandpositionvariables/allTEVariables');
const terawdata = require('../teamandpostionsrawdata/terawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');

const allTETotalScores = [];
const allTEVTTs = [];
const allTEHighProjectedTargetsBonus = [];
const allTEPPRPointsPerGameLastThreeGamesPlayed = [];
const allTEProjectedReceptions = [];

const allTECalcFunctions = {
  calcTEvtt(team) {
    let tevtt = team.teamVTT;

    if (tevtt > 27.4) {
      tevtt = 25;
    } else if (tevtt > 24.9 && tevtt < 27.5) {
      tevtt = 15;
    } else if (tevtt > 22.4 && tevtt < 25) {
      tevtt = 7.5;
    } else if (tevtt > 19.9 && tevtt < 22.5) {
      tevtt = 0;
    } else if (tevtt > 17.4 && tevtt < 20) {
      tevtt = -5;
    } else if (tevtt > 14.9 && tevtt < 17.5) {
      tevtt = -10;
    } else {
      tevtt = -15;
    }

    return tevtt;
  },

  calcTEEliteProjectedTargetsBonus(team, i) {
    let TE4for4ProjectedTargets = team.projectedTargets4For4;

    let QBGLSPProjectedPassAttempts = allTEs[i].QBGLSPProjectedPassAttempts;

    let TETargetShare = team.targetShareLastThreeGamesPlayed;
    let decTETargetShare = +(TETargetShare / 100).toFixed(3);

    let calculatedTEProjectedTargets = +(
      QBGLSPProjectedPassAttempts * decTETargetShare
    ).toFixed(3);

    let averageCalculatedTEProjectedTargets = +(
      (TE4for4ProjectedTargets + calculatedTEProjectedTargets) /
      2
    ).toFixed(3);

    let TEAvgPTS = averageCalculatedTEProjectedTargets;

    // console.log(TEAvgPTS);
    const TEProjectedReceptions = TEAvgPTS * team.catchRateLastFiveGames;
    // console.log(TEProjectedReceptions);
    allTEProjectedReceptions.push(TEProjectedReceptions);

    if (TEAvgPTS >= 6) {
      TEAvgPTS = 25;
    } else if (TEAvgPTS >= 5.5) {
      TEAvgPTS = 20;
    } else if (TEAvgPTS >= 5) {
      TEAvgPTS = 15;
    } else if (TEAvgPTS >= 4.5) {
      TEAvgPTS = 10;
    } else if (TEAvgPTS >= 4) {
      TEAvgPTS = 5;
    } else {
      TEAvgPTS = 0;
    }
    return TEAvgPTS;
  },

  TEPPRPointsPerGameLastThreeGamesPlayed(team, i) {
    let TEPPG = team.pprFantasyPointsPerGameLastThreeGamesPlayed;

    if (TEPPG >= 15) {
      TEPPG = 15;
    } else if (TEPPG >= 14) {
      TEPPG = 12.5;
    } else if (TEPPG >= 13) {
      TEPPG = 10;
    } else if (TEPPG >= 12) {
      TEPPG = 7.5;
    } else if (TEPPG >= 11) {
      TEPPG = 5;
    } else if (TEPPG >= 10) {
      TEPPG = 2.5;
    } else {
      TEPPG = 0;
    }
    return TEPPG;
  },
};

allTEs.map(function (team, i) {
  let TETotalScore = 0;

  let TEVTT = allTECalcFunctions.calcTEvtt(team);
  allTEVTTs.push(TEVTT);
  TETotalScore += TEVTT;

  let TEHighProjectedTargets =
    allTECalcFunctions.calcTEEliteProjectedTargetsBonus(team.TE, i);
  allTEHighProjectedTargetsBonus.push(TEHighProjectedTargets);
  TETotalScore += TEHighProjectedTargets;

  let TEPPGLastThree =
    allTECalcFunctions.TEPPRPointsPerGameLastThreeGamesPlayed(team.TE);
  allTEPPRPointsPerGameLastThreeGamesPlayed.push(TEPPGLastThree);
  TETotalScore += TEPPGLastThree;

  allTETotalScores.push(TETotalScore);
});

const tenumOfMatchingRoleWeeks = [];

allTEs.forEach(function (te, i) {
  teRoleThisWeek = te.TE.roleThisWeek;

  teroleLastXNumOfWeeksUpToFiveArray = te.TE.roleLastXNumOfWeeksUpToFive;

  let tematchingWeeks = 0;

  teroleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === teRoleThisWeek) {
      tematchingWeeks = tematchingWeeks + 1;
    }
  });
  tenumOfMatchingRoleWeeks.push(tematchingWeeks);
});

// console.log(tenumOfMatchingRoleWeeks);

const tePercentageOfMatchingRoleWeeks = [];

allTEs.map(function (team, i) {
  let tematchingWeeksPercentage =
    tenumOfMatchingRoleWeeks[i] / team.TE.roleLastXNumOfWeeksUpToFive.length;

  tePercentageOfMatchingRoleWeeks.push(tematchingWeeksPercentage);
});

const allHalfTEFinalProjectedPointsValues = [];
const allHalfTEFinalProjectedPointsValuesPlusNames = [];

const allFullTEFinalProjectedPointsValues = [];
const allFullTEFinalProjectedPointsValuesPlusNames = [];

const allTEPremiuimFinalProjectedPointsValues = [];
const allTEPremiuimFinalProjectedPointsValuesPlusNames = [];

const allTEHalfManagedAndCashProjectedPointsValues = [];
const allTEFullManagedAndCashProjectedPointsValues = [];
const allTETEPManagedAndCashProjectedPointsValues = [];

const allTEHalfManagedAndCashProjectedPointsValuesPlusNames = [];
const allTEFullManagedAndCashProjectedPointsValuesPlusNames = [];
const allTETEPManagedAndCashProjectedPointsValuesPlusNames = [];

allTETotalScores.map(function (score, i, array) {
  let halfTwentyFifthPercentProjection =
    allTEs[i].TE.halfTwentyFifthPercentProjectedPoints;
  let halfFiftyithPercentProjection =
    allTEs[i].TE.halfFiftyithPercentProjectedPoints;
  let halfSeventyFifthPercentProjection =
    allTEs[i].TE.halfSeventyFifthPercentProjectedPoints;
  let PPRTwentyFifthPercentProjection =
    allTEs[i].TE.PPRTwentyFifthPercentProjectedPoints;
  let PPRFiftyithPercentProjection =
    allTEs[i].TE.PPRFiftyithPercentProjectedPoints;
  let PPRSeventyFifthPercentProjection =
    allTEs[i].TE.PPRSeventyFifthPercentProjectedPoints;
  let HalfFourForFour = allTEs[i].TE.fourForFourHalfPPRProjectedPoints;
  let FullFourForFour = allTEs[i].TE.fourForFourFullPPRProjectedPoints;

  let TEPremiuimAddedProjectedPoints = allTEProjectedReceptions[i] / 2;

  let TEHalfProjectedPoints = 0;
  let TEFullProjectedPoints = 0;
  let TEPremiuimPorjectedPoints = 0;

  let halfManagedAndCash = 0;
  let fullManagedAndCash = 0;
  let TEPManagedAndCash = 0;

  //   console.log(`${score}: ${allTEs[i].TE.name}`);

  if (
    gameInfo.week.currentWeek > 6 &&
    tePercentageOfMatchingRoleWeeks[i] > 0.74
  ) {
    if (score >= 40) {
      TEHalfProjectedPoints = halfSeventyFifthPercentProjection;
      TEFullProjectedPoints = PPRSeventyFifthPercentProjection;
      TEPremiuimPorjectedPoints = +(
        PPRSeventyFifthPercentProjection + TEPremiuimAddedProjectedPoints
      ).toFixed(2);
    } else if (score >= 10) {
      TEHalfProjectedPoints = halfFiftyithPercentProjection;
      TEFullProjectedPoints = PPRFiftyithPercentProjection;
      TEPremiuimPorjectedPoints = +(
        PPRFiftyithPercentProjection + TEPremiuimAddedProjectedPoints
      ).toFixed(2);
    } else {
      TEHalfProjectedPoints = halfTwentyFifthPercentProjection;
      TEFullProjectedPoints = PPRTwentyFifthPercentProjection;
      TEPremiuimPorjectedPoints = +(
        PPRTwentyFifthPercentProjection + TEPremiuimAddedProjectedPoints
      ).toFixed(2);
    }

    halfManagedAndCash = (TEHalfProjectedPoints + HalfFourForFour) / 2;
    fullManagedAndCash = (TEFullProjectedPoints + FullFourForFour) / 2;
    tempTEPremiuimPorjectedPoints = +(
      FullFourForFour + TEPremiuimAddedProjectedPoints
    ).toFixed(2);
    tempTEPManagedAndCash =
      (TEPremiuimPorjectedPoints + tempTEPremiuimPorjectedPoints) / 2;
    TEPManagedAndCash = +tempTEPManagedAndCash.toFixed(2);
  } else if (
    gameInfo.week.currentWeek > 6 &&
    tePercentageOfMatchingRoleWeeks[i] < 0.75
  ) {
    TEHalfProjectedPoints = HalfFourForFour;
    TEFullProjectedPoints = FullFourForFour;
    TEPremiuimPorjectedPoints = +(
      FullFourForFour + TEPremiuimAddedProjectedPoints
    ).toFixed(2);
    halfManagedAndCash = HalfFourForFour;
    fullManagedAndCash = FullFourForFour;
    TEPManagedAndCash = +(
      FullFourForFour + TEPremiuimAddedProjectedPoints
    ).toFixed(2);
  }

  if (
    gameInfo.week.currentWeek === 5 ||
    (gameInfo.week.currentWeek === 6 &&
      tePercentageOfMatchingRoleWeeks[i] > 0.74)
  ) {
    if (score >= 40) {
      TEHalfProjectedPoints =
        (halfSeventyFifthPercentProjection + HalfFourForFour) / 2;
      TEFullProjectedPoints =
        (PPRSeventyFifthPercentProjection + FullFourForFour) / 2;
      TEPremiuimPorjectedPointsTotal = +(
        PPRSeventyFifthPercentProjection + TEPremiuimAddedProjectedPoints
      ).toFixed(2);
      TEPremiuimPorjectedPoints =
        (TEPremiuimPorjectedPointsTotal + FullFourForFour) / 2;
    } else if (score >= 10) {
      TEHalfProjectedPoints =
        (halfFiftyithPercentProjection + HalfFourForFour) / 2;
      TEFullProjectedPoints =
        (PPRFiftyithPercentProjection + FullFourForFour) / 2;
      TEPremiuimPorjectedPointsTotal = +(
        PPRFiftyithPercentProjection + TEPremiuimAddedProjectedPoints
      ).toFixed(2);
      TEPremiuimPorjectedPoints =
        (TEPremiuimPorjectedPointsTotal + FullFourForFour) / 2;
    } else {
      TEHalfProjectedPoints =
        (halfTwentyFifthPercentProjection + HalfFourForFour) / 2;
      TEFullProjectedPoints =
        (PPRTwentyFifthPercentProjection + FullFourForFour) / 2;
      TEPremiuimPorjectedPointsTotal = +(
        PPRTwentyFifthPercentProjection + TEPremiuimAddedProjectedPoints
      ).toFixed(2);
      TEPremiuimPorjectedPoints =
        (TEPremiuimPorjectedPointsTotal + FullFourForFour) / 2;
    }

    halfManagedAndCash = TEHalfProjectedPoints;
    fullManagedAndCash = TEFullProjectedPoints;
    TEPManagedAndCash = TEPremiuimPorjectedPointsTotal;
  } else if (
    gameInfo.week.currentWeek === 5 ||
    (gameInfo.week.currentWeek === 6 &&
      tePercentageOfMatchingRoleWeeks[i] < 0.75)
  ) {
    TEHalfProjectedPoints = HalfFourForFour;
    TEFullProjectedPoints = FullFourForFour;
    TEPremiuimPorjectedPoints = +(
      FullFourForFour + TEPremiuimAddedProjectedPoints
    ).toFixed(2);
    halfManagedAndCash = HalfFourForFour;
    fullManagedAndCash = FullFourForFour;
    TEPManagedAndCash = +(
      FullFourForFour + TEPremiuimAddedProjectedPoints
    ).toFixed(2);
  }

  if (gameInfo.week.currentWeek < 5) {
    TEHalfProjectedPoints = HalfFourForFour;
    TEFullProjectedPoints = FullFourForFour;
    TEPremiuimPorjectedPoints = +(
      FullFourForFour + TEPremiuimAddedProjectedPoints
    ).toFixed(2);
    halfManagedAndCash = HalfFourForFour;
    fullManagedAndCash = FullFourForFour;
    TEPManagedAndCash = +(
      FullFourForFour + TEPremiuimAddedProjectedPoints
    ).toFixed(2);
  }

  allHalfTEFinalProjectedPointsValues.push(TEHalfProjectedPoints);
  allTEHalfManagedAndCashProjectedPointsValues.push(halfManagedAndCash);
  allHalfTEFinalProjectedPointsValuesPlusNames.push(
    `${TEHalfProjectedPoints}: ${allTEs[i].TE.name}`
  );
  allTEHalfManagedAndCashProjectedPointsValuesPlusNames.push(
    `${halfManagedAndCash}: ${allTEs[i].TE.name}`
  );

  allFullTEFinalProjectedPointsValues.push(TEFullProjectedPoints);
  allTEFullManagedAndCashProjectedPointsValues.push(fullManagedAndCash);
  allFullTEFinalProjectedPointsValuesPlusNames.push(
    `${TEFullProjectedPoints}: ${allTEs[i].TE.name}`
  );
  allTEFullManagedAndCashProjectedPointsValuesPlusNames.push(
    `${fullManagedAndCash}: ${allTEs[i].TE.name}`
  );

  allTEPremiuimFinalProjectedPointsValues.push(TEPremiuimPorjectedPoints);
  allTETEPManagedAndCashProjectedPointsValues.push(TEPManagedAndCash);
  allTEPremiuimFinalProjectedPointsValuesPlusNames.push(
    `${TEPManagedAndCash}: ${allTEs[i].TE.name}`
  );
  allTETEPManagedAndCashProjectedPointsValuesPlusNames.push(
    `${TEPManagedAndCash}: ${allTEs[i].TE.name}`
  );
});

////////////Calculating projected points per dollar, PP/d

const halfProjectedPointsPerDollarFanduel = [];
const halfProjectedPointsPerDollarYahoo = [];
const fullProjectedPointsPerDollarDraftkings = [];

const cashprojectedPointsPerDollarDraftkings = [];
const cashprojectedPointsPerDollarFanduel = [];
const cashprojectedPointsPerDollarYahoo = [];

const cashprojectedPointsPerDollarDraftkingsPlusNames = [];
const cashprojectedPointsPerDollarFanduelPlusNames = [];
const cashprojectedPointsPerDollarYahooPlusNames = [];

allTEs.forEach(function (team, i) {
  let halfpppdfanduel =
    allHalfTEFinalProjectedPointsValues[i] / team.TE.fanduelSalary;
  let halfpppdyahoo =
    allHalfTEFinalProjectedPointsValues[i] / team.TE.yahooSalary;

  let fullpppddraftkings =
    allFullTEFinalProjectedPointsValues[i] / team.TE.draftkingsSalary;

  let cashFanduel =
    allTEHalfManagedAndCashProjectedPointsValues[i] / team.TE.fanduelSalary;
  let cashYahoo =
    allTEHalfManagedAndCashProjectedPointsValues[i] / team.TE.yahooSalary;
  let cashDraftkings =
    allTEHalfManagedAndCashProjectedPointsValues[i] / team.TE.draftkingsSalary;

  halfProjectedPointsPerDollarFanduel.push(+halfpppdfanduel.toFixed(5));
  halfProjectedPointsPerDollarYahoo.push(+halfpppdyahoo.toFixed(4));
  fullProjectedPointsPerDollarDraftkings.push(+fullpppddraftkings.toFixed(5));

  cashprojectedPointsPerDollarDraftkings.push(+cashDraftkings.toFixed(5));
  cashprojectedPointsPerDollarFanduel.push(+cashFanduel.toFixed(4));
  cashprojectedPointsPerDollarYahoo.push(+cashYahoo.toFixed(5));

  cashprojectedPointsPerDollarDraftkingsPlusNames.push(
    `${+cashDraftkings.toFixed(5)}: ${team.TE.name}`
  );
  cashprojectedPointsPerDollarFanduelPlusNames.push(
    `${+cashFanduel.toFixed(5)}: ${team.TE.name}`
  );
  cashprojectedPointsPerDollarYahooPlusNames.push(
    `${+cashYahoo.toFixed(5)}: ${team.TE.name}`
  );
});

const allTEData = {
  // allTEVTTs: allTEVTTs,
  // allTEHighProjectedTargetsBonus: allTEHighProjectedTargetsBonus,
  // allTEPPRPointsPerGameLastThreeGamesPlayed:
  //   allTEPPRPointsPerGameLastThreeGamesPlayed,
  // allTEProjectedReceptions: allTEProjectedReceptions,
  // allTETotalScores: allTETotalScores,
  // allHalfTEFinalProjectedPointsValues: allHalfTEFinalProjectedPointsValues,
  // allHalfTEFinalProjectedPointsValuesPlusNames:
  //   allHalfTEFinalProjectedPointsValuesPlusNames,
  // allFullTEFinalProjectedPointsValues: allFullTEFinalProjectedPointsValues,
  // allFullTEFinalProjectedPointsValuesPlusNames:
  //   allFullTEFinalProjectedPointsValuesPlusNames,
  // allTEPremiuimFinalProjectedPointsValues:
  //   allTEPremiuimFinalProjectedPointsValues,
  // allTEPremiuimFinalProjectedPointsValuesPlusNames:
  //   allTEPremiuimFinalProjectedPointsValuesPlusNames,
  // halfProjectedPointsPerDollarFanduel: halfProjectedPointsPerDollarFanduel,
  // halfProjectedPointsPerDollarYahoo: halfProjectedPointsPerDollarYahoo,
  // fullProjectedPointsPerDollarDraftkings:
  //   fullProjectedPointsPerDollarDraftkings,
  // //managed and cash
  // allTEHalfManagedAndCashProjectedPointsValues:
  //   allTEHalfManagedAndCashProjectedPointsValues,
  // allTEFullManagedAndCashProjectedPointsValues:
  //   allTEFullManagedAndCashProjectedPointsValues,
  // allTETEPManagedAndCashProjectedPointsValues:
  //   allTETEPManagedAndCashProjectedPointsValues,
  // allTEHalfManagedAndCashProjectedPointsValuesPlusNames:
  //   allTEHalfManagedAndCashProjectedPointsValuesPlusNames,
  // allTEFullManagedAndCashProjectedPointsValuesPlusNames:
  //   allTEFullManagedAndCashProjectedPointsValuesPlusNames,
  // allTETEPManagedAndCashProjectedPointsValuesPlusNames:
  //   allTETEPManagedAndCashProjectedPointsValuesPlusNames,
  // //managed and cash per dollar
  // cashprojectedPointsPerDollarDraftkings:
  //   cashprojectedPointsPerDollarDraftkings,
  // cashprojectedPointsPerDollarFanduel: cashprojectedPointsPerDollarFanduel,
  // cashprojectedPointsPerDollarYahoo: cashprojectedPointsPerDollarYahoo,
  // cashprojectedPointsPerDollarDraftkingsPlusNames:
  //   cashprojectedPointsPerDollarDraftkingsPlusNames,
  // cashprojectedPointsPerDollarFanduelPlusNames:
  //   cashprojectedPointsPerDollarFanduelPlusNames,
  // cashprojectedPointsPerDollarYahooPlusNames:
  //   cashprojectedPointsPerDollarYahooPlusNames,
};

// console.log(allTEData);

module.exports = allTECalcFunctions;
module.exports = allTEData;
