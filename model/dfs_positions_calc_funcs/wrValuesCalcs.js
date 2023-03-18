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

const arrayOfProjectedPointsForMyDevUse = [];

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
    QBProjectedPassAttemptsThisWeek,
    percentOfQBFantasyPointsFromPassingLastFiveWeeks,
    appQBProjectedPointsFromPassing,
    projectedReceptions4For4,
    projectedRecpetionsPerQBPassAttempt,
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
    this.QBProjectedPassAttemptsThisWeek = QBProjectedPassAttemptsThisWeek;
    this.percentOfQBFantasyPointsFromPassingLastFiveWeeks =
      percentOfQBFantasyPointsFromPassingLastFiveWeeks;
    this.appQBProjectedPointsFromPassing = appQBProjectedPointsFromPassing;
    this.projectedReceptions4For4 = projectedReceptions4For4;
    this.projectedRecpetionsPerQBPassAttempt =
      projectedRecpetionsPerQBPassAttempt;

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

  //methods to make:
  //
  //                   already done
  //

  //
  //                   still need to do

  //  - calculate and assign this.appProjectedPoints
  //      --what should be used to calculate projected points: team projected points, qb projected points
  //     from passing, projected receptions from 4for4, if teamProjectedForAHalfOfNegetiveGameScriptIsTrue is
  //          true then use projectedRecpetionsPerQBPassAttempt and create a scale for what bonus the WR
  //        should get based off their projectedRecpetionsPerQBPassAttempt
  //             again only if teamProjectedForAHalfOfNegetiveGameScriptIsTrue is true,
  //         and home fav/home dog/road fav/road dog by vtt
  //

  //  - calulate and assign appProjections per dollar on each site
  //  - calculate and assign 4for4 projections per percent of cap on each site
  //  - calculate and assign appProjections per percent of cap on each site.
  //   -assign every wr a salary bucket for each site and make arrays for each bucket on each site that holds
  //   the full wr object of every wr in that bucket on each site
  // - assign to each WR a 4for4 projections per percent of cap bucket on each site.
  //  - assign each WR a number for how many players are in his salary bucket that are also in his 4for4   projections per percent of cap bucket. do the same for how many are in his salary bucket that are also in a higher/better 4for4 projections per percent of cap bucket
  //
  // - calculate projeted ownership: use 4for4 projections per dollar and QB projected ownership to assin a baseline projected ownership and then adjust that using the two numbers from the step above for each player on each site.

  calcAppProjectedPoints() {
    let tempValueForProjection = 0;

    //

    if (this.appQBProjectedPointsFromPassing) {
      if (this.appQBProjectedPointsFromPassing > 19.9) {
        tempValueForProjection += 6;
      }
      if (
        this.appQBProjectedPointsFromPassing > 17.9 &&
        this.appQBProjectedPointsFromPassing < 20
      ) {
        tempValueForProjection += 4;
      }
      if (
        this.appQBProjectedPointsFromPassing > 15.9 &&
        this.appQBProjectedPointsFromPassing < 18
      ) {
        tempValueForProjection += 2;
      }
      if (
        this.appQBProjectedPointsFromPassing > 13.9 &&
        this.appQBProjectedPointsFromPassing < 16
      ) {
        tempValueForProjection += 1;
      }
      if (
        this.appQBProjectedPointsFromPassing > 11.9 &&
        this.appQBProjectedPointsFromPassing < 14
      ) {
        tempValueForProjection += 0;
      }
      if (this.appQBProjectedPointsFromPassing < 12) {
        tempValueForProjection += -1;
      }
    } else {
      let valueForHere = this.appQBProjectedPoints * 0.9;

      if (valueForHere > 19.9) {
        tempValueForProjection += 6;
      }
      if (valueForHere > 17.9 && valueForHere < 20) {
        tempValueForProjection += 4;
      }
      if (valueForHere > 15.9 && valueForHere < 18) {
        tempValueForProjection += 2;
      }
      if (valueForHere > 13.9 && valueForHere < 16) {
        tempValueForProjection += 1;
      }
      if (valueForHere > 11.9 && valueForHere < 14) {
        tempValueForProjection += 0;
      }
      if (valueForHere < 12) {
        tempValueForProjection += -1;
      }
    }

    ///////////////////

    this.averageOfProjectedTeamTotals =
      +(this.teamProjectedPoints + this.vtt) / 2;

    // console.log(this.averageOfProjectedTeamTotals);

    // console.log(this.vtt);

    if (this.averageOfProjectedTeamTotals > 28) {
      tempValueForProjection += 6;
    }

    if (
      this.averageOfProjectedTeamTotals > 23.9 &&
      this.averageOfProjectedTeamTotals < 28.1
    ) {
      tempValueForProjection += 4;
    }

    if (
      this.averageOfProjectedTeamTotals > 19.9 &&
      this.averageOfProjectedTeamTotals < 24
    ) {
      tempValueForProjection += 2;
    }

    if (
      this.averageOfProjectedTeamTotals > 14.9 &&
      this.averageOfProjectedTeamTotals < 20
    ) {
      tempValueForProjection += 0;
    }

    if (this.averageOfProjectedTeamTotals < 15) {
      tempValueForProjection += -4;
    }

    ///////////////////////

    if (
      this.targetShareLastFiveWeeks > 0.25 &&
      this.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek > 0.49
    ) {
      tempValueForProjection += 6;
    } else {
      if (this.projectedReceptions4For4 > 6.9) {
        tempValueForProjection += 6;
      }
      if (
        this.projectedReceptions4For4 > 5.9 &&
        this.projectedReceptions4For4 < 7
      ) {
        tempValueForProjection += 4;
      }

      if (
        this.projectedReceptions4For4 > 4.9 &&
        this.projectedReceptions4For4 < 6
      ) {
        tempValueForProjection += 1;
      }

      if (
        this.projectedReceptions4For4 > 3.9 &&
        this.projectedReceptions4For4 < 5
      ) {
        tempValueForProjection += 0;
      }

      if (
        this.projectedReceptions4For4 > 2.9 &&
        this.projectedReceptions4For4 < 4
      ) {
        tempValueForProjection += -1;
      }

      if (this.projectedReceptions4For4 < 3) {
        tempValueForProjection += -4;
      }
    }

    // this.homeOrAway
    //this.vtt = vtt;
    //this.opponentVTT = opponentVTT;
    // if (this.homeOrAway === 'Home' && this.vtt > this.opponentVTT) {
    //   tempValueForProjection += 2;
    // }
    // if (this.homeOrAway === 'Away' && this.vtt < this.opponentVTT) {
    //   tempValueForProjection += 1;
    // }
    // if (this.homeOrAway === 'Away' && this.vtt > this.opponentVTT) {
    //   tempValueForProjection += 0;
    // }
    // if (this.homeOrAway === 'Home' && this.vtt < this.opponentVTT) {
    //   tempValueForProjection += -1;
    // }

    // console.log(tempValueForProjection);

    if (tempValueForProjection > 9) {
      this.appHalfProjectedPoints = this.halfSeventyFifthPercentProjectedPoints;
      this.appFullProjectedPoints = this.PPRSeventyFifthPercentProjectedPoints;
      this.percentileUsedForProjection = 75;
    }

    if (tempValueForProjection >= 0 && tempValueForProjection < 10) {
      this.appHalfProjectedPoints = this.halfFiftyithPercentProjectedPoints;
      this.appFullProjectedPoints = this.PPRFiftyithPercentProjectedPoints;
      this.percentileUsedForProjection = 50;
    }

    if (tempValueForProjection < 0) {
      this.appHalfProjectedPoints = this.halfTwentyFifthPercentProjectedPoints;
      this.appFullProjectedPoints = this.PPRTwentyFifthPercentProjectedPoints;
      this.percentileUsedForProjection = 25;
    }

    if (this.appHalfProjectedPoints === 0) {
      this.appHalfProjectedPoints = this.fourForFourHalfPPRProjectedPoints;
    }
    if (this.appFullProjectedPoints === 0) {
      this.appFullProjectedPoints = this.fourForFourFullPPRProjectedPoints;
    }

    this.valueForProjection = tempValueForProjection;
    arrayOfProjectedPointsForMyDevUse.push(
      `${this.appFullProjectedPoints} (${this.fourForFourFullPPRProjectedPoints}), ${this.playerName} ${this.projectedReceptions4For4} (${this.valueForProjection}) (${this.percentileUsedForProjection})`
    );
  }
}

const allTeamWRObjects = {
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
const allWRObjectsArray = [];
const allWRsMap = new Map();

//WROne's

allWRs.forEach(function (team, i) {
  let teamName = '';
  allTeams.forEach(function (giTeam) {
    if (team.teamABV === giTeam.teamABV) {
      // console.log(giTeam);
      teamName = giTeam.teamName;
      vtt = +giTeam.vtt;

      teamProjectedPoints = +giTeam.teamProjectedPointsThisWeek;
      hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveweeks;
      opponentTeamName = giTeam.opponentThisWeek.teamName;
      opponentABV = giTeam.opponentThisWeek.teamABV;
      opponentTeamProjectedPoints =
        +giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
      opponentVTT = giTeam.opponentThisWeek.vtt;
    }
  });

  appQBProjectedPointsFromPassing = +(
    team.appQBProjectedPoints *
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks
  ).toFixed(2);

  projectedRecpetionsPerQBPassAttempt = +(
    team.WROne.projectedReceptions4For4 / team.QBProjectedPassAttemptsThisWeek
  ).toFixed(3);

  let wrObject = new WrObject(
    team.WROne.name,
    'WR',
    teamName,
    team.teamABV,
    vtt,
    opponentVTT,
    team.byeWeek,
    team.homeOrAway,
    team.slate,
    teamProjectedPoints,
    hadByeInLastFiveWeeksIsTrue,
    team.teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
    team.WROne.roleThisWeek,
    +team.WROne.numberOfGamesPlayedLastFiveWeeks,
    +team.WROne.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek.toFixed(
      2
    ),
    team.appQBProjectedPoints,
    team.QBProjectedPassAttemptsThisWeek,
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks,
    appQBProjectedPointsFromPassing,
    team.WROne.projectedReceptions4For4,
    projectedRecpetionsPerQBPassAttempt,
    team.WROne.targetShareLastFiveWeeks,
    team.WROne.yahooSalary,
    team.WROne.fanduelSalary,
    team.WROne.draftkingsSalary,
    team.WROne.percentOfSalaryCapYahoo,
    team.WROne.percentOfSalaryCapFanduel,
    team.WROne.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.WROne.halfTwentyFifthPercentProjectedPoints,
    team.WROne.halfFiftyithPercentProjectedPoints,
    team.WROne.halfSeventyFifthPercentProjectedPoints,
    team.WROne.PPRTwentyFifthPercentProjectedPoints,
    team.WROne.PPRFiftyithPercentProjectedPoints,
    team.WROne.PPRSeventyFifthPercentProjectedPoints,
    team.WROne.fourForFourHalfPPRProjectedPoints,
    team.WROne.fourForFourFullPPRProjectedPoints
  );

  wrObject.calcAppProjectedPoints();

  allWRsMap.set(`${teamName}WROneThisWeek`, wrObject);

  allWRObjectsArray.push(wrObject);
});

//WRTwo's

allWRs.forEach(function (team, i) {
  let teamName = '';
  allTeams.forEach(function (giTeam) {
    if (team.teamABV === giTeam.teamABV) {
      // console.log(giTeam);
      teamName = giTeam.teamName;
      vtt = +giTeam.vtt;

      teamProjectedPoints = +giTeam.teamProjectedPointsThisWeek;
      hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveweeks;
      opponentTeamName = giTeam.opponentThisWeek.teamName;
      opponentABV = giTeam.opponentThisWeek.teamABV;
      opponentTeamProjectedPoints =
        +giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
      opponentVTT = giTeam.opponentThisWeek.vtt;
    }
  });

  appQBProjectedPointsFromPassing = +(
    team.appQBProjectedPoints *
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks
  ).toFixed(3);

  projectedRecpetionsPerQBPassAttempt = +(
    team.WRTwo.projectedReceptions4For4 / team.QBProjectedPassAttemptsThisWeek
  ).toFixed(2);

  let wrObject = new WrObject(
    team.WRTwo.name,
    'WR',
    teamName,
    team.teamABV,
    vtt,
    opponentVTT,
    team.byeWeek,
    team.homeOrAway,
    team.slate,
    teamProjectedPoints,
    hadByeInLastFiveWeeksIsTrue,
    team.teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
    team.WRTwo.roleThisWeek,
    +team.WRTwo.numberOfGamesPlayedLastFiveWeeks,
    +team.WRTwo.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek.toFixed(
      2
    ),
    team.appQBProjectedPoints,
    team.QBProjectedPassAttemptsThisWeek,
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks,
    appQBProjectedPointsFromPassing,
    team.WRTwo.projectedReceptions4For4,
    projectedRecpetionsPerQBPassAttempt,
    team.WRTwo.targetShareLastFiveWeeks,
    team.WRTwo.yahooSalary,
    team.WRTwo.fanduelSalary,
    team.WRTwo.draftkingsSalary,
    team.WRTwo.percentOfSalaryCapYahoo,
    team.WRTwo.percentOfSalaryCapFanduel,
    team.WRTwo.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.WRTwo.halfTwentyFifthPercentProjectedPoints,
    team.WRTwo.halfFiftyithPercentProjectedPoints,
    team.WRTwo.halfSeventyFifthPercentProjectedPoints,
    team.WRTwo.PPRTwentyFifthPercentProjectedPoints,
    team.WRTwo.PPRFiftyithPercentProjectedPoints,
    team.WRTwo.PPRSeventyFifthPercentProjectedPoints,
    team.WRTwo.fourForFourHalfPPRProjectedPoints,
    team.WRTwo.fourForFourFullPPRProjectedPoints
  );

  wrObject.calcAppProjectedPoints();

  allWRsMap.set(`${teamName}WROneThisWeek`, wrObject);

  allWRObjectsArray.push(wrObject);
});

//WRThree's

allWRs.forEach(function (team, i) {
  let teamName = '';
  allTeams.forEach(function (giTeam) {
    if (team.teamABV === giTeam.teamABV) {
      // console.log(giTeam);
      teamName = giTeam.teamName;
      vtt = +giTeam.vtt;

      teamProjectedPoints = +giTeam.teamProjectedPointsThisWeek;
      hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveweeks;
      opponentTeamName = giTeam.opponentThisWeek.teamName;
      opponentABV = giTeam.opponentThisWeek.teamABV;
      opponentTeamProjectedPoints =
        +giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
      opponentVTT = giTeam.opponentThisWeek.vtt;
    }
  });

  appQBProjectedPointsFromPassing = +(
    team.appQBProjectedPoints *
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks
  ).toFixed(3);

  projectedRecpetionsPerQBPassAttempt = +(
    team.WRThree.projectedReceptions4For4 / team.QBProjectedPassAttemptsThisWeek
  ).toFixed(2);

  let wrObject = new WrObject(
    team.WRThree.name,
    'WR',
    teamName,
    team.teamABV,
    vtt,
    opponentVTT,
    team.byeWeek,
    team.homeOrAway,
    team.slate,
    teamProjectedPoints,
    hadByeInLastFiveWeeksIsTrue,
    team.teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
    team.WRThree.roleThisWeek,
    +team.WRThree.numberOfGamesPlayedLastFiveWeeks,
    +team.WRThree.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek.toFixed(
      2
    ),
    team.appQBProjectedPoints,
    team.QBProjectedPassAttemptsThisWeek,
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks,
    appQBProjectedPointsFromPassing,
    team.WRThree.projectedReceptions4For4,
    projectedRecpetionsPerQBPassAttempt,
    team.WRThree.targetShareLastFiveWeeks,
    team.WRThree.yahooSalary,
    team.WRThree.fanduelSalary,
    team.WRThree.draftkingsSalary,
    team.WRThree.percentOfSalaryCapYahoo,
    team.WRThree.percentOfSalaryCapFanduel,
    team.WRThree.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.WRThree.halfTwentyFifthPercentProjectedPoints,
    team.WRThree.halfFiftyithPercentProjectedPoints,
    team.WRThree.halfSeventyFifthPercentProjectedPoints,
    team.WRThree.PPRTwentyFifthPercentProjectedPoints,
    team.WRThree.PPRFiftyithPercentProjectedPoints,
    team.WRThree.PPRSeventyFifthPercentProjectedPoints,
    team.WRThree.fourForFourHalfPPRProjectedPoints,
    team.WRThree.fourForFourFullPPRProjectedPoints
  );

  wrObject.calcAppProjectedPoints();

  allWRsMap.set(`${teamName}WROneThisWeek`, wrObject);

  allWRObjectsArray.push(wrObject);
});

// console.log(allWRObjectsArray);

allWRObjectsArray.forEach(function (wr) {
  //   console.log(wr);

  // console.log(wr.playerName);
  if (wr.teamABV === 'SF') {
    // console.log(wr);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.SF49ers.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.SF49ers.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.SF49ers.WRThree = wr;
    }
  }

  if (wr.teamABV === 'CHI') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.bears.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.bears.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.bears.WRThree = wr;
    }
  }

  if (wr.teamABV === 'CIN') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.bengals.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.bengals.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.bengals.WRThree = wr;
    }
  }

  if (wr.teamABV === 'BUF') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.bills.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.bills.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.bills.WRThree = wr;
    }
  }

  if (wr.teamABV === 'DEN') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.broncos.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.broncos.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.broncos.WRThree = wr;
    }
  }

  if (wr.teamABV === 'CLE') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.browns.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.browns.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.browns.WRThree = wr;
    }
  }

  if (wr.teamABV === 'TB') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.buccaneers.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.buccaneers.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.buccaneers.WRThree = wr;
    }
  }

  if (wr.teamABV === 'ARI') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.cardinals.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.cardinals.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.cardinals.WRThree = wr;
    }
  }

  if (wr.teamABV === 'LAC') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.chargers.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.chargers.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.chargers.WRThree = wr;
    }
  }

  if (wr.teamABV === 'KC') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.chiefs.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.chiefs.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.chiefs.WRThree = wr;
    }
  }

  if (wr.teamABV === 'IND') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.colts.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.colts.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.colts.WRThree = wr;
    }
  }

  if (wr.teamABV === 'WAS') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.commanders.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.commanders.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.commanders.WRThree = wr;
    }
  }

  if (wr.teamABV === 'DAL') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.cowboys.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.cowboys.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.cowboys.WRThree = wr;
    }
  }

  if (wr.teamABV === 'MIA') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.dolphins.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.dolphins.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.dolphins.WRThree = wr;
    }
  }

  if (wr.teamABV === 'PHI') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.eagles.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.eagles.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.eagles.WRThree = wr;
    }
  }

  if (wr.teamABV === 'ATL') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.falcons.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.falcons.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.falcons.WRThree = wr;
    }
  }

  if (wr.teamABV === 'NYG') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.giants.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.giants.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.giants.WRThree = wr;
    }
  }

  if (wr.teamABV === 'JAC' || wr.teamABV === 'JAX') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.jaguars.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.jaguars.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.jaguars.WRThree = wr;
    }
  }

  if (wr.teamABV === 'NYJ') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.jets.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.jets.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.jets.WRThree = wr;
    }
  }

  if (wr.teamABV === 'DET') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.lions.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.lions.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.lions.WRThree = wr;
    }
  }

  if (wr.teamABV === 'GB') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.packers.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.packers.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.packers.WRThree = wr;
    }
  }

  if (wr.teamABV === 'CAR') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.panthers.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.panthers.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.panthers.WRThree = wr;
    }
  }

  if (wr.teamABV === 'NE') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.patriots.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.patriots.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.patriots.WRThree = wr;
    }
  }

  if (wr.teamABV === 'LV') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.raiders.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.raiders.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.raiders.WRThree = wr;
    }
  }

  if (wr.teamABV === 'LAR') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.rams.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.rams.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.rams.WRThree = wr;
    }
  }

  if (wr.teamABV === 'BAL') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.ravens.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.ravens.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.ravens.WRThree = wr;
    }
  }

  if (wr.teamABV === 'NO') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.saints.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.saints.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.saints.WRThree = wr;
    }
  }

  if (wr.teamABV === 'SEA') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.seahawks.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.seahawks.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.seahawks.WRThree = wr;
    }
  }

  if (wr.teamABV === 'PIT') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.steelers.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.steelers.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.steelers.WRThree = wr;
    }
  }

  if (wr.teamABV === 'HOU') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.texans.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.texans.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.texans.WRThree = wr;
    }
  }

  if (wr.teamABV === 'TEN') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.titans.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.titans.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.titans.WRThree = wr;
    }
  }

  if (wr.teamABV === 'MIN') {
    // console.log(rb);
    if (wr.roleThisWeek === 1) {
      allTeamWRObjects.vikings.WROne = wr;
    }
    if (wr.roleThisWeek === 2) {
      allTeamWRObjects.vikings.WRTwo = wr;
    }
    if (wr.roleThisWeek === 3) {
      allTeamWRObjects.vikings.WRThree = wr;
    }
  }
});

// console.log(allTeamWRObjects);

const allWRData = {
  allWRsMap: allWRsMap,
  allTeamWRObjects: allTeamWRObjects,
  allWRObjectsArray: allWRObjectsArray,
};

console.log(arrayOfProjectedPointsForMyDevUse);

// console.log(allTeamWRObjects.panthers.WROne);
// console.log(
//   allTeamWRObjects.cowboys.WROne,

//   allTeamWRObjects.titans.WROne
// );
// console.log(allTeamWRObjects);

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
