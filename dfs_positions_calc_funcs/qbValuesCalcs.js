// const gameInfo = require('../gameinfo');
const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const allQBs = require('../teamandpositionvariables/allQBVariables');
const qbrawdata = require('../teamandpostionsrawdata/qbrawdata');
const wrrawdata = require('../teamandpostionsrawdata/wrrawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');

const allQBTotalScores = [];

const allQBvttValues = [];
const allQBYPALastFiveGamesPlayeds = [];
const allQBTDRateLastFiveGamesPlayeds = [];
const allQBHomeOrAwayFavoriteOrUnderdogs = [];
const allQBSecondHighlyProjectedPassCatchers = [];

// console.log(gameInfo);

//////////all functions///////

const allQBCalcFunctions = {
  calcQBvtt(team) {
    let qbvtt = team.teamVTT;

    if (qbvtt > 27.4) {
      qbvtt = 20;
    } else if (qbvtt > 24.9 && qbvtt < 27.5) {
      qbvtt = 15;
    } else if (qbvtt > 22.4 && qbvtt < 25) {
      qbvtt = 7.5;
    } else if (qbvtt > 19.9 && qbvtt < 22.5) {
      qbvtt = 0;
    } else if (qbvtt > 17.4 && qbvtt < 20) {
      qbvtt = -5;
    } else if (qbvtt > 14.9 && qbvtt < 17.5) {
      qbvtt = -10;
    } else {
      qbvtt = -15;
    }

    return qbvtt;
  }, //closing calcQBvtt tag

  calcQBYPALastFiveGamesPlayed(team) {
    let QBYPA = team.ypaLastFiveGames;

    if (QBYPA > 7.9) {
      QBYPA = 15;
    } else if (QBYPA > 7.4 && QBYPA < 8) {
      QBYPA = 10;
    } else if (QBYPA > 6.9 && QBYPA < 7.5) {
      QBYPA = 5;
    } else if (QBYPA > 6.4 && QBYPA < 7) {
      QBYPA = 0;
    } else if (QBYPA > 5.9 && QBYPA < 6.5) {
      QBYPA = -5;
    } else if (QBYPA > 5.4 && QBYPA < 6) {
      QBYPA = -10;
    } else {
      QBYPA = -15;
    }

    return QBYPA;
  },

  allQBTDRateLastFiveGamesPlayeds(team) {
    let QBTDRate = team.TDrateLastFiveGames;

    if (QBTDRate > 6) {
      QBTDRate = 15;
    } else if (QBTDRate > 4.9 && QBTDRate < 6) {
      QBTDRate = 10;
    } else if (QBTDRate > 4.4 && QBTDRate < 5) {
      QBTDRate = 5;
    } else if (QBTDRate > 3.9 && QBTDRate < 4.5) {
      QBTDRate = 0;
    } else if (QBTDRate > 3.4 && QBTDRate < 4) {
      QBTDRate = -5;
    } else if (QBTDRate > 2.9 && QBTDRate < 3.5) {
      QBTDRate = -10;
    } else {
      QBTDRate = -15;
    }
    return QBTDRate;
  },

  calcQBHomeOrAwayFavoriteOrUnderdogs(team, i) {
    let QBHOAFOU = 0;

    if ((i - 1) % 2 && team.teamVTT > allQBs[i + 1].teamVTT) {
      QBHOAFOU = 10;
    } else if (i % 2 && team.teamVTT < allQBs[i - 1].teamVTT) {
      QBHOAFOU = 5;
    } else if (
      (i % 2 && team.teamVTT > allQBs[i - 1].teamVTT) ||
      (team.teamVTT < allQBs[i - 1].teamVTT && allQBs[i - 1].teamVTT > 24.9)
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

  calcQBSecondHighlyProjectedPassCatchers(team) {
    let QBSHPPC =
      team.secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints;

    if (QBSHPPC > 14.9) {
      QBSHPPC = 15;
    } else if (QBSHPPC > 13.9) {
      QBSHPPC = 12.5;
    } else if (QBSHPPC > 12.9) {
      QBSHPPC = 10;
    } else if (QBSHPPC > 11.9) {
      QBSHPPC = 5;
    } else {
      QBSHPPC = 0;
    }
    return QBSHPPC;
  },
};

//&& allQBs[i].teamVTT > allQBs[i + 1].teamVTT

////////calling all functions and calculating all total scores////////////

allQBs.map(function (team, i) {
  let totalScore = 0;

  let curVTTValue = allQBCalcFunctions.calcQBvtt(team);
  allQBvttValues.push(curVTTValue);
  totalScore += curVTTValue;

  let qbypavalue = allQBCalcFunctions.calcQBYPALastFiveGamesPlayed(team);
  allQBYPALastFiveGamesPlayeds.push(qbypavalue);
  totalScore += qbypavalue;

  let QBTDRateValue = allQBCalcFunctions.allQBTDRateLastFiveGamesPlayeds(team);
  allQBTDRateLastFiveGamesPlayeds.push(QBTDRateValue);
  totalScore += QBTDRateValue;

  let allQBHomeOrAwayFavoriteOrUnderdog =
    allQBCalcFunctions.calcQBHomeOrAwayFavoriteOrUnderdogs(team, i);
  allQBHomeOrAwayFavoriteOrUnderdogs.push(allQBHomeOrAwayFavoriteOrUnderdog);
  totalScore += allQBHomeOrAwayFavoriteOrUnderdog;

  let QBSHPPCS =
    allQBCalcFunctions.calcQBSecondHighlyProjectedPassCatchers(team);
  allQBSecondHighlyProjectedPassCatchers.push(QBSHPPCS);
  totalScore += QBSHPPCS;

  allQBTotalScores.push(totalScore);
});

/////////assigning QB's their projected points for the week using totalScore from above///////////

const allQBFinalProjectedPointsValues = [];
const allQBFinalProjectedPointsValuesPlusNames = [];

allQBTotalScores.map(function (score, i, array) {
  let twentyFifthPercentProjection =
    allQBs[i].twentyFifthPercentProjectedPoints;
  let fiftyithPercentProjection = allQBs[i].fiftyithPercentProjectedPoints;
  let seventyFifthPercentProjection =
    allQBs[i].seventyFifthPercentProjectedPoints;

  let QBProjectedPoints = 0;

  console.log(gameInfo.week.currentWeek);

  if (gameInfo.week.currentWeek < 3) {
    allQBs.map(function (team, i) {
      // console.log(team.fourForFourHalfPPRProjectedPoints);
      QBProjectedPoints = team.fourForFourHalfPPRProjectedPoints;
    });
  }

  if (gameInfo.week.currentWeek > 2) {
    if (score >= 35) {
      QBProjectedPoints = seventyFifthPercentProjection;
    } else if (score >= -25) {
      QBProjectedPoints = fiftyithPercentProjection;
    } else {
      QBProjectedPoints = twentyFifthPercentProjection;
    }
  }
  allQBFinalProjectedPointsValues.push(QBProjectedPoints);
  allQBFinalProjectedPointsValuesPlusNames.push(
    `${allQBs[i].name}: ${QBProjectedPoints}`
  );
});

/////////all QB data////////////

const allQBData = {
  allQBVtts: allQBvttValues,
  allQBYPALastFiveGamesPlayeds: allQBYPALastFiveGamesPlayeds,
  allQBTDRateLastFiveGamesPlayeds: allQBTDRateLastFiveGamesPlayeds,
  allQBHomeOrAwayFavoriteOrUnderdogs: allQBHomeOrAwayFavoriteOrUnderdogs,
  allQBSecondHighlyProjectedPassCatchers,
  allQBSecondHighlyProjectedPassCatchers,

  allQBTotalScores: allQBTotalScores,

  allQBFinalProjectedPointsValues: allQBFinalProjectedPointsValues,
  allQBFinalProjectedPointsValuesPlusNames:
    allQBFinalProjectedPointsValuesPlusNames,
};

// console.log(allQBData);

module.exports = allQBCalcFunctions;
module.exports = allQBData;
