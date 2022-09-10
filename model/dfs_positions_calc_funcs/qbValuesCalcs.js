// const gameInfo = require('../gameinfo');
const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const allQBs = require('../teamandpositionvariables/allQBVariables');
const qbrawdata = require('../teamandpostionsrawdata/qbrawdata');
const wrrawdata = require('../teamandpostionsrawdata/wrrawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const { match } = require('assert');

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

const allQBManagedAndCashProjectedPointsValues = [];
const allQBManagedAndCashProjectedPointsValuesPlusNames = [];

const numOfMatchingRoleWeeks = [];

allQBs.map(function (team, i) {
  let matchingWeeks = 0;

  team.roleLastXNumOfWeeksUpToFive.forEach(function (week) {
    if (week === allQBs[i].roleThisWeek) {
      matchingWeeks = matchingWeeks + 1;
    }
  });
  numOfMatchingRoleWeeks.push(matchingWeeks);
});

if (gameInfo.week.currentWeek < 5) {
  allQBs.map(function (team, i) {
    let QBProjectedPoints = 0;

    QBProjectedPoints = team.fourForFourHalfPPRProjectedPoints;

    allQBFinalProjectedPointsValues.push(QBProjectedPoints);
    allQBFinalProjectedPointsValuesPlusNames.push(
      `${allQBs[i].name}: ${QBProjectedPoints}`
    );
    allQBManagedAndCashProjectedPointsValues.push(QBProjectedPoints);
    allQBManagedAndCashProjectedPointsValuesPlusNames.push(
      `${allQBs[i].name}: ${QBProjectedPoints}`
    );
  });
}

if (gameInfo.week.currentWeek === 5 || gameInfo.week.currentWeek === 6) {
  allQBs.map(function (team, i) {
    let twentyFifthPercentProjection =
      allQBs[i].twentyFifthPercentProjectedPoints;
    let fiftyithPercentProjection = allQBs[i].fiftyithPercentProjectedPoints;
    let seventyFifthPercentProjection =
      allQBs[i].seventyFifthPercentProjectedPoints;

    let initialQBProjectedPoints = 0;

    // console.log(team.roleLastXNumOfWeeksUpToFive[1]);
    let matchingWeeksPercentage =
      numOfMatchingRoleWeeks[i] / allQBs[i].roleLastXNumOfWeeksUpToFive.length;

    if (
      allQBs[i].roleLastXNumOfWeeksUpToFive.length > 3 &&
      matchingWeeksPercentage > 0.74
    ) {
      let fourForFour = team.fourForFourHalfPPRProjectedPoints;

      if (allQBTotalScores[i] >= 35) {
        initialQBProjectedPoints = seventyFifthPercentProjection;
      } else if (allQBTotalScores[i] >= -25) {
        initialQBProjectedPoints = fiftyithPercentProjection;
      } else {
        initialQBProjectedPoints = twentyFifthPercentProjection;
      }

      let total = initialQBProjectedPoints + fourForFour;
      let QBProjectedPoints = total / 2;

      allQBFinalProjectedPointsValues.push(QBProjectedPoints);
      allQBFinalProjectedPointsValuesPlusNames.push(
        `${allQBs[i].name}: ${QBProjectedPoints}`
      );
      allQBManagedAndCashProjectedPointsValues.push(QBProjectedPoints);
      allQBManagedAndCashProjectedPointsValuesPlusNames.push(
        `${allQBs[i].name}: ${QBProjectedPoints}`
      );
    } else {
      QBProjectedPoints = team.fourForFourHalfPPRProjectedPoints;
      allQBFinalProjectedPointsValues.push(QBProjectedPoints);
      allQBFinalProjectedPointsValuesPlusNames.push(
        `${allQBs[i].name}: ${QBProjectedPoints}`
      );
      allQBManagedAndCashProjectedPointsValues.push(QBProjectedPoints);
      allQBManagedAndCashProjectedPointsValuesPlusNames.push(
        `${allQBs[i].name}: ${QBProjectedPoints}`
      );
    }
  });
}

if (gameInfo.week.currentWeek > 6) {
  allQBs.map(function (team, i) {
    let fourForFour = team.fourForFourHalfPPRProjectedPoints;

    let twentyFifthPercentProjection =
      allQBs[i].twentyFifthPercentProjectedPoints;
    let fiftyithPercentProjection = allQBs[i].fiftyithPercentProjectedPoints;
    let seventyFifthPercentProjection =
      allQBs[i].seventyFifthPercentProjectedPoints;

    let initialQBProjectedPoints = 0;

    if (allQBTotalScores[i] >= 35) {
      initialQBProjectedPoints = seventyFifthPercentProjection;
    } else if (allQBTotalScores[i] >= -25) {
      initialQBProjectedPoints = fiftyithPercentProjection;
    } else {
      initialQBProjectedPoints = twentyFifthPercentProjection;
    }

    let total = initialQBProjectedPoints + fourForFour;
    let QBProjectedPoints = total / 2;

    allQBManagedAndCashProjectedPointsValues.push(QBProjectedPoints);
    allQBManagedAndCashProjectedPointsValuesPlusNames.push(
      `${allQBs[i].name}: ${QBProjectedPoints}`
    );
  });
}

if (gameInfo.week.currentWeek > 6) {
  allQBTotalScores.map(function (score, i, array) {
    let twentyFifthPercentProjection =
      allQBs[i].twentyFifthPercentProjectedPoints;
    let fiftyithPercentProjection = allQBs[i].fiftyithPercentProjectedPoints;
    let seventyFifthPercentProjection =
      allQBs[i].seventyFifthPercentProjectedPoints;

    let QBProjectedPoints = 0;
    let matchingWeeksPercentage =
      numOfMatchingRoleWeeks[i] / allQBs[i].roleLastXNumOfWeeksUpToFive.length;

    if (
      allQBs[i].roleLastXNumOfWeeksUpToFive.length > 3 &&
      matchingWeeksPercentage > 0.74
    ) {
      if (score >= 35) {
        QBProjectedPoints = seventyFifthPercentProjection;
      } else if (score >= -25) {
        QBProjectedPoints = fiftyithPercentProjection;
      } else {
        QBProjectedPoints = twentyFifthPercentProjection;
      }

      allQBFinalProjectedPointsValues.push(QBProjectedPoints);
      allQBFinalProjectedPointsValuesPlusNames.push(
        `${allQBs[i].name}: ${QBProjectedPoints}`
      );
    } else {
      QBProjectedPoints = allQBs[i].fourForFourHalfPPRProjectedPoints;
      allQBFinalProjectedPointsValues.push(QBProjectedPoints);
      allQBFinalProjectedPointsValuesPlusNames.push(
        `${allQBs[i].name}: ${QBProjectedPoints}`
      );
    }
  });
}

////////////Calculating projected points per dollar, PP/d

const projectedPointsPerDollarDraftkings = [];
const projectedPointsPerDollarFanduel = [];
const projectedPointsPerDollarYahoo = [];

allQBs.forEach(function (team, i) {
  // console.log(team.draftkingsSalary);
  // console.log(allQBFinalProjectedPointsValues[i]);
  let pppddraftkings =
    allQBFinalProjectedPointsValues[i] / team.draftkingsSalary;
  let pppdfanduel = allQBFinalProjectedPointsValues[i] / team.fanduelSalary;
  let pppdyahoo = allQBFinalProjectedPointsValues[i] / team.yahooSalary;

  projectedPointsPerDollarDraftkings.push(pppddraftkings);
  projectedPointsPerDollarFanduel.push(pppdfanduel);
  projectedPointsPerDollarYahoo.push(pppdyahoo);
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

  allQBManagedAndCashProjectedPointsValues:
    allQBManagedAndCashProjectedPointsValues,
  allQBManagedAndCashProjectedPointsValuesPlusNames:
    allQBManagedAndCashProjectedPointsValuesPlusNames,

  projectedPointsPerDollarDraftkings: projectedPointsPerDollarDraftkings,
  projectedPointsPerDollarFanduel: projectedPointsPerDollarFanduel,
  projectedPointsPerDollarYahoo: projectedPointsPerDollarYahoo,
};

console.log(allQBData);

module.exports = allQBCalcFunctions;
module.exports = allQBData;
