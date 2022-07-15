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

const allHalfTEFinalProjectedPointsValues = [];
const allHalfTEFinalProjectedPointsValuesPlusNames = [];

const allFullTEFinalProjectedPointsValues = [];
const allFullTEFinalProjectedPointsValuesPlusNames = [];

const allTEPremiuimFinalProjectedPointsValues = [];
const allTEPremiuimFinalProjectedPointsValuesPlusNames = [];

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

  let TEHalfProjectedPoints = 0;
  let TEFullProjectedPoints = 0;

  //   console.log(`${score}: ${allTEs[i].TE.name}`);

  if (score >= 40) {
    TEHalfProjectedPoints = halfSeventyFifthPercentProjection;
    TEFullProjectedPoints = PPRSeventyFifthPercentProjection;
  } else if (score >= 10) {
    TEHalfProjectedPoints = halfFiftyithPercentProjection;
    TEFullProjectedPoints = PPRFiftyithPercentProjection;
  } else {
    TEHalfProjectedPoints = halfTwentyFifthPercentProjection;
    TEFullProjectedPoints = PPRTwentyFifthPercentProjection;
  }

  let TEPremiuimAddedProjectedPoints = allTEProjectedReceptions[i] / 2;
  let TEPremiuimPorjectedPoints = +(
    TEFullProjectedPoints + TEPremiuimAddedProjectedPoints
  ).toFixed(2);

  allHalfTEFinalProjectedPointsValues.push(TEHalfProjectedPoints);
  allHalfTEFinalProjectedPointsValuesPlusNames.push(
    `${allTEs[i].TE.name}: ${TEHalfProjectedPoints}`
  );

  allFullTEFinalProjectedPointsValues.push(TEFullProjectedPoints);
  allFullTEFinalProjectedPointsValuesPlusNames.push(
    `${allTEs[i].TE.name}: ${TEFullProjectedPoints}`
  );

  allTEPremiuimFinalProjectedPointsValues.push(TEPremiuimPorjectedPoints);
  allTEPremiuimFinalProjectedPointsValuesPlusNames.push(
    `${allTEs[i].TE.name}: ${TEPremiuimPorjectedPoints}`
  );
});

const allTEData = {
  allTEVTTs: allTEVTTs,
  allTEHighProjectedTargetsBonus: allTEHighProjectedTargetsBonus,
  allTEPPRPointsPerGameLastThreeGamesPlayed:
    allTEPPRPointsPerGameLastThreeGamesPlayed,
  allTEProjectedReceptions: allTEProjectedReceptions,
  allTETotalScores: allTETotalScores,
  allHalfTEFinalProjectedPointsValues: allHalfTEFinalProjectedPointsValues,
  allHalfTEFinalProjectedPointsValuesPlusNames:
    allHalfTEFinalProjectedPointsValuesPlusNames,
  allFullTEFinalProjectedPointsValues: allFullTEFinalProjectedPointsValues,
  allFullTEFinalProjectedPointsValuesPlusNames:
    allFullTEFinalProjectedPointsValuesPlusNames,
  allTEPremiuimFinalProjectedPointsValues:
    allTEPremiuimFinalProjectedPointsValues,
  allTEPremiuimFinalProjectedPointsValuesPlusNames:
    allTEPremiuimFinalProjectedPointsValuesPlusNames,
};

module.exports = allTECalcFunctions;
module.exports = allTEData;
