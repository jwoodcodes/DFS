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
    qbFantasyPointsPerGameLastFiveWeeks,
    qbProjectedPointsThisWeekPercentage,
    QBProjectedPassAttemptsThisWeek,
    percentOfQBFantasyPointsFromPassingLastFiveWeeks,
    appQBProjectedPointsFromPassing,
    projectedReceptions4For4,
    receptionsPerGameInGamesPlayedLastFiveWeeks,
    percentOfAveragesReceptionsLastFiveWeeksThatThisWeeksProjectedReceptionsIs,
    projectedRecpetionsPerQBPassAttempt,
    targetShareLastFiveWeeks,

    halfPPRPointsPerGameLastFiveWeeks,
    percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks,
    roleScorePercentageThisWeek,
    teamProjectedPointsThisWeekPercentage,

    yahooSalary,
    fanduelSalary,
    draftkingsSalary,
    percentOfSalaryCapYahoo,
    percentOfSalaryCapFanduel,
    percentOfSalaryCapDraftkings,

    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,

    halfGLSPAvg,
    halfTwentyFifthPercentProjectedPoints,
    halfFiftyithPercentProjectedPoints,
    halfSeventyFifthPercentProjectedPoints,
    PPRGLSPAvg,
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
    this.qbFantasyPointsPerGameLastFiveWeeks =
      qbFantasyPointsPerGameLastFiveWeeks;
    this.qbProjectedPointsThisWeekPercentage =
      qbProjectedPointsThisWeekPercentage;
    this.QBProjectedPassAttemptsThisWeek = QBProjectedPassAttemptsThisWeek;
    this.percentOfQBFantasyPointsFromPassingLastFiveWeeks =
      percentOfQBFantasyPointsFromPassingLastFiveWeeks;
    this.appQBProjectedPointsFromPassing = appQBProjectedPointsFromPassing;
    this.projectedReceptions4For4 = projectedReceptions4For4;
    this.receptionsPerGameInGamesPlayedLastFiveWeeks =
      receptionsPerGameInGamesPlayedLastFiveWeeks;
    this.percentOfAveragesReceptionsLastFiveWeeksThatThisWeeksProjectedReceptionsIs =
      percentOfAveragesReceptionsLastFiveWeeksThatThisWeeksProjectedReceptionsIs;
    this.projectedRecpetionsPerQBPassAttempt =
      projectedRecpetionsPerQBPassAttempt;

    this.targetShareLastFiveWeeks = targetShareLastFiveWeeks;
    this.halfPPRPointsPerGameLastFiveWeeks = halfPPRPointsPerGameLastFiveWeeks;
    this.percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks =
      percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks;
    this.roleScorePercentageThisWeek = roleScorePercentageThisWeek;
    this.teamProjectedPointsThisWeekPercentage =
      teamProjectedPointsThisWeekPercentage;

    this.yahooSalary = yahooSalary;
    this.fanduelSalary = fanduelSalary;
    this.draftkingsSalary = draftkingsSalary;
    this.percentOfSalaryCapYahoo = percentOfSalaryCapYahoo;
    this.percentOfSalaryCapFanduel = percentOfSalaryCapFanduel;
    this.percentOfSalaryCapDraftkings = percentOfSalaryCapDraftkings;

    this.opponentTeamName = opponentTeamName;
    this.opponentABV = opponentABV;
    this.opponentTeamProjectedPoints = opponentTeamProjectedPoints;

    this.halfGLSPAvg = halfGLSPAvg;
    this.halfTwentyFifthPercentProjectedPoints =
      halfTwentyFifthPercentProjectedPoints;
    this.halfFiftyithPercentProjectedPoints =
      halfFiftyithPercentProjectedPoints;
    this.halfSeventyFifthPercentProjectedPoints =
      halfSeventyFifthPercentProjectedPoints;
    this.PPRGLSPAvg = PPRGLSPAvg;
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
  //  -calculate and assign this.appProjectedPoints
  //
  //
  //                   still need to do

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
    // for weeks 1 & 2

    if (gameInfo.week.currentWeek < 3) {
      let tempHalfProjection = +(
        (this.fourForFourHalfPPRProjectedPoints +
          this.fourForFourHalfPPRProjectedPoints +
          this.fourForFourHalfPPRProjectedPoints +
          this.halfGLSPAvg) /
        4
      ).toFixed(2);

      let tempPPRProjection = +(
        (this.fourForFourFullPPRProjectedPoints +
          this.fourForFourFullPPRProjectedPoints +
          this.fourForFourFullPPRProjectedPoints +
          this.PPRGLSPAvg) /
        4
      ).toFixed(2);

      this.appHalfProjectedPoints = tempHalfProjection;
      this.appFullProjectedPoints = tempPPRProjection;
    }

    // for weeks 3 & 4

    if (gameInfo.week.currentWeek === 3 || gameInfo.week.currentWeek === 4) {
      let tempHalfProjection = +(
        (this.fourForFourHalfPPRProjectedPoints +
          this.fourForFourHalfPPRProjectedPoints +
          this.halfGLSPAvg) /
        3
      ).toFixed(2);

      let tempPPRProjection = +(
        (this.fourForFourFullPPRProjectedPoints +
          this.fourForFourFullPPRProjectedPoints +
          this.PPRGLSPAvg) /
        3
      ).toFixed(2);

      this.appHalfProjectedPoints = tempHalfProjection;
      this.appFullProjectedPoints = tempPPRProjection;
    }

    // for weeks 4-18

    if (gameInfo.week.currentWeek > 4) {
      if (
        this.roleScorePercentageThisWeek &&
        this.roleScorePercentageThisWeek > 0.49 &&
        this.roleScorePercentageThisWeek < 1.51
      ) {
        if (
          this.qbProjectedPointsThisWeekPercentage &&
          this.qbProjectedPointsThisWeekPercentage > 0
        ) {
          let qbAdjustmentForHere = this.qbProjectedPointsThisWeekPercentage;
          if (qbAdjustmentForHere < 0.5) {
            qbAdjustmentForHere = 0.5;
          }
          if (qbAdjustmentForHere > 1.5) {
            qbAdjustmentForHere = 1.5;
          }

          let teamAdjustmentForHere =
            this.teamProjectedPointsThisWeekPercentage;

          if (teamAdjustmentForHere < 0.5) {
            teamAdjustmentForHere = 0.5;
          }
          if (teamAdjustmentForHere > 1.5) {
            teamAdjustmentForHere = 1.5;
          }

          let adjustmentFactor = +(
            (teamAdjustmentForHere +
              qbAdjustmentForHere +
              this.roleScorePercentageThisWeek) /
            3
          ).toFixed(3);

          let tempHalfProjection = +(
            this.halfGLSPAvg * adjustmentFactor
          ).toFixed(2);
          let tempPPRProjection = +(this.PPRGLSPAvg * adjustmentFactor).toFixed(
            2
          );

          if (
            tempHalfProjection > this.halfSeventyFifthPercentProjectedPoints
          ) {
            tempHalfProjection = this.halfSeventyFifthPercentProjectedPoints;
          }

          if (tempPPRProjection > this.PPRSeventyFifthPercentProjectedPoints) {
            tempPPRProjection = this.PPRSeventyFifthPercentProjectedPoints;
          }

          if (tempHalfProjection < this.halfTwentyFifthPercentProjectedPoints) {
            tempHalfProjection = this.halfTwentyFifthPercentProjectedPoints;
          }

          if (tempPPRProjection < this.PPRTwentyFifthPercentProjectedPoints) {
            tempPPRProjection = this.PPRTwentyFifthPercentProjectedPoints;
          }

          if (tempHalfProjection === 0 || !tempHalfProjection) {
            tempHalfProjection = this.fourForFourHalfPPRProjectedPoints;
          }

          if (tempPPRProjection === 0 || !tempPPRProjection) {
            tempPPRProjection = this.fourForFourFullPPRProjectedPoints;
          }

          this.appHalfProjectedPoints = tempHalfProjection;
          this.appFullProjectedPoints = tempPPRProjection;

          // console.log(
          //   this.playerName,
          //   this.roleScorePercentageThisWeek,
          //   this.teamProjectedPointsThisWeekPercentage,
          //   this.qbProjectedPointsThisWeekPercentage,
          //   adjustmentFactor,
          //   this.fourForFourFullPPRProjectedPoints,
          //   this.appHalfProjectedPoints,
          //   this.appFullProjectedPoints
          // );
        } else {
          let teamAdjustmentForHere =
            this.teamProjectedPointsThisWeekPercentage;

          if (teamAdjustmentForHere < 0.5) {
            teamAdjustmentForHere = 0.5;
          }
          if (teamAdjustmentForHere > 1.5) {
            teamAdjustmentForHere = 1.5;
          }

          let adjustmentFactor =
            +(this.roleScorePercentageThisWeek + teamAdjustmentForHere) / 2;

          let tempHalfProjection = +(
            this.halfGLSPAvg * adjustmentFactor
          ).toFixed(2);
          let tempPPRProjection = +(this.PPRGLSPAvg * adjustmentFactor).toFixed(
            2
          );

          if (
            tempHalfProjection > this.halfSeventyFifthPercentProjectedPoints
          ) {
            tempHalfProjection = this.halfSeventyFifthPercentProjectedPoints;
          }

          if (tempPPRProjection > this.PPRSeventyFifthPercentProjectedPoints) {
            tempPPRProjection = this.PPRSeventyFifthPercentProjectedPoints;
          }

          if (tempHalfProjection < this.halfTwentyFifthPercentProjectedPoints) {
            tempHalfProjection = this.halfTwentyFifthPercentProjectedPoints;
          }

          if (tempPPRProjection < this.PPRTwentyFifthPercentProjectedPoints) {
            tempPPRProjection = this.PPRTwentyFifthPercentProjectedPoints;
          }

          if (tempHalfProjection === 0 || !tempHalfProjection) {
            tempHalfProjection = this.fourForFourHalfPPRProjectedPoints;
          }

          if (tempPPRProjection === 0 || !tempPPRProjection) {
            tempPPRProjection = this.fourForFourFullPPRProjectedPoints;
          }

          this.appHalfProjectedPoints = tempHalfProjection;
          this.appFullProjectedPoints = tempPPRProjection;

          // console.log(
          //   this.playerName,
          //   this.roleScorePercentageThisWeek,
          //   this.teamProjectedPointsThisWeekPercentage,
          //   this.qbProjectedPointsThisWeekPercentage,
          //   this.fourForFourFullPPRProjectedPoints,
          //   this.appHalfProjectedPoints,
          //   this.appFullProjectedPoints
          // );
        }
      } else {
        let teamAdjustmentForHere = this.teamProjectedPointsThisWeekPercentage;
        if (teamAdjustmentForHere < 0.5) {
          teamAdjustmentForHere = 0.5;
        }
        if (teamAdjustmentForHere > 1.5) {
          teamAdjustmentForHere = 1.5;
        }

        let tempHalfProjection = +(
          this.fourForFourHalfPPRProjectedPoints * teamAdjustmentForHere
        );

        let tempPPRProjection = +(
          this.fourForFourFullPPRProjectedPoints * teamAdjustmentForHere
        );

        if (tempHalfProjection > this.halfSeventyFifthPercentProjectedPoints) {
          tempHalfProjection = this.halfSeventyFifthPercentProjectedPoints;
        }

        if (tempPPRProjection > this.PPRSeventyFifthPercentProjectedPoints) {
          tempPPRProjection = this.PPRSeventyFifthPercentProjectedPoints;
        }

        if (tempHalfProjection < this.halfTwentyFifthPercentProjectedPoints) {
          tempHalfProjection = this.halfTwentyFifthPercentProjectedPoints;
        }

        if (tempPPRProjection < this.PPRTwentyFifthPercentProjectedPoints) {
          tempPPRProjection = this.PPRTwentyFifthPercentProjectedPoints;
        }

        if (tempHalfProjection === 0 || !tempHalfProjection) {
          tempHalfProjection = this.fourForFourHalfPPRProjectedPoints;
        }

        if (tempPPRProjection === 0 || !tempPPRProjection) {
          tempPPRProjection = this.fourForFourFullPPRProjectedPoints;
        }

        this.appHalfProjectedPoints = +tempHalfProjection.toFixed(2);
        this.appFullProjectedPoints = +tempPPRProjection.toFixed(2);

        // console.log(
        //   this.playerName,
        //   this.roleScorePercentageThisWeek,
        //   this.teamProjectedPointsThisWeekPercentage,
        //   this.qbProjectedPointsThisWeekPercentage,
        //   this.fourForFourFullPPRProjectedPoints,
        //   this.appHalfProjectedPoints,
        //   this.appFullProjectedPoints
        // );
      }
    }

    /////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////
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

  percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks =
    +(
      team.WROne.fourForFourHalfPPRProjectedPoints /
      team.WROne.halfPPRPointsPerGameLastFiveWeeks
    ).toFixed(2);

  roleScorePercentageThisWeek = +(
    (percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks +
      team.WROne
        .percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks) /
    2
  ).toFixed(3);

  qbProjectedPointsThisWeekPercentage = +(
    team.appQBProjectedPoints /
    team.WROne.qbFantasyPointsScoredPerGameLastFiveWeeks
  ).toFixed(3);

  teamProjectedPointsThisWeekPercentage = +(
    team.appTeamProjectedPoints /
    team.WROne.teamRealLifePointsScoredPerGameLastFiveWeeks
  ).toFixed(2);

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
    team.WROne.qbFantasyPointsScoredPerGameLastFiveWeeks,
    qbProjectedPointsThisWeekPercentage,
    team.QBProjectedPassAttemptsThisWeek,
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks,
    appQBProjectedPointsFromPassing,
    team.WROne.projectedReceptions4For4,
    team.WROne.receptionsPerGameInGamesPlayedLastFiveWeeks,
    team.WROne.percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks,
    projectedRecpetionsPerQBPassAttempt,
    team.WROne.targetShareLastFiveWeeks,
    team.WROne.halfPPRPointsPerGameLastFiveWeeks,
    percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks,
    roleScorePercentageThisWeek,
    teamProjectedPointsThisWeekPercentage,
    team.WROne.yahooSalary,
    team.WROne.fanduelSalary,
    team.WROne.draftkingsSalary,
    team.WROne.percentOfSalaryCapYahoo,
    team.WROne.percentOfSalaryCapFanduel,
    team.WROne.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.WROne.glspHalfAvg,
    team.WROne.halfTwentyFifthPercentProjectedPoints,
    team.WROne.halfFiftyithPercentProjectedPoints,
    team.WROne.halfSeventyFifthPercentProjectedPoints,
    team.WROne.glspPPRAvg,
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

  percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks =
    +(
      team.WRTwo.fourForFourHalfPPRProjectedPoints /
      team.WRTwo.halfPPRPointsPerGameLastFiveWeeks
    ).toFixed(2);

  roleScorePercentageThisWeek = +(
    (percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks +
      team.WRTwo
        .percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks) /
    2
  ).toFixed(3);

  qbProjectedPointsThisWeekPercentage = +(
    team.appQBProjectedPoints /
    team.WRTwo.qbFantasyPointsScoredPerGameLastFiveWeeks
  ).toFixed(3);

  teamProjectedPointsThisWeekPercentage = +(
    team.appTeamProjectedPoints /
    team.WRTwo.teamRealLifePointsScoredPerGameLastFiveWeeks
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
    team.WRTwo.qbFantasyPointsScoredPerGameLastFiveWeeks,
    qbProjectedPointsThisWeekPercentage,
    team.QBProjectedPassAttemptsThisWeek,
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks,
    appQBProjectedPointsFromPassing,
    team.WRTwo.projectedReceptions4For4,
    team.WRTwo.receptionsPerGameInGamesPlayedLastFiveWeeks,
    team.WRTwo.percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks,
    projectedRecpetionsPerQBPassAttempt,
    team.WRTwo.targetShareLastFiveWeeks,
    team.WRTwo.halfPPRPointsPerGameLastFiveWeeks,
    percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks,
    roleScorePercentageThisWeek,
    teamProjectedPointsThisWeekPercentage,
    team.WRTwo.yahooSalary,
    team.WRTwo.fanduelSalary,
    team.WRTwo.draftkingsSalary,
    team.WRTwo.percentOfSalaryCapYahoo,
    team.WRTwo.percentOfSalaryCapFanduel,
    team.WRTwo.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.WRTwo.glspHalfAvg,
    team.WRTwo.halfTwentyFifthPercentProjectedPoints,
    team.WRTwo.halfFiftyithPercentProjectedPoints,
    team.WRTwo.halfSeventyFifthPercentProjectedPoints,
    team.WRTwo.glspPPRAvg,
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

  percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks =
    +(
      team.WRThree.fourForFourHalfPPRProjectedPoints /
      team.WRThree.halfPPRPointsPerGameLastFiveWeeks
    ).toFixed(2);

  roleScorePercentageThisWeek = +(
    (percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks +
      team.WRThree
        .percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks) /
    2
  ).toFixed(3);

  qbProjectedPointsThisWeekPercentage = +(
    team.appQBProjectedPoints /
    team.WRThree.qbFantasyPointsScoredPerGameLastFiveWeeks
  ).toFixed(3);

  teamProjectedPointsThisWeekPercentage = +(
    team.appTeamProjectedPoints /
    team.WRThree.teamRealLifePointsScoredPerGameLastFiveWeeks
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
    team.WRThree.qbFantasyPointsScoredPerGameLastFiveWeeks,
    qbProjectedPointsThisWeekPercentage,
    team.QBProjectedPassAttemptsThisWeek,
    team.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks,
    appQBProjectedPointsFromPassing,
    team.WRThree.projectedReceptions4For4,
    team.WRThree.receptionsPerGameInGamesPlayedLastFiveWeeks,
    team.WRThree.percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks,
    projectedRecpetionsPerQBPassAttempt,
    team.WRThree.targetShareLastFiveWeeks,
    team.WRThree.halfPPRPointsPerGameLastFiveWeeks,
    percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks,
    roleScorePercentageThisWeek,
    teamProjectedPointsThisWeekPercentage,
    team.WRThree.yahooSalary,
    team.WRThree.fanduelSalary,
    team.WRThree.draftkingsSalary,
    team.WRThree.percentOfSalaryCapYahoo,
    team.WRThree.percentOfSalaryCapFanduel,
    team.WRThree.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.WRThree.glspHalfAvg,
    team.WRThree.halfTwentyFifthPercentProjectedPoints,
    team.WRThree.halfFiftyithPercentProjectedPoints,
    team.WRThree.halfSeventyFifthPercentProjectedPoints,
    team.WRThree.glspPPRAvg,
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

const allWRProjectionsObjects = [];

allWRObjectsArray.forEach(function (player) {
  // console.log(player.appHalfProjectedPoints);
  class ProjectionsObject {
    constructor(
      name,
      position,
      team,
      appHalfProjectedPoints,
      appFullProjectedPoints,
      appTEPProjectedPoints
    ) {
      this.name = name;
      this.position = position;
      this.team = team;
      this.appHalfProjectedPoints = appHalfProjectedPoints;
      this.appFullProjectedPoints = appFullProjectedPoints;
      this.appTEPProjectedPoints = appTEPProjectedPoints
    }
  }

  // console.log(player);

  let wrProjectionsObject = new ProjectionsObject(
    player.playerName,
    player.position,
    player.teamABV,
    player.appHalfProjectedPoints,
    player.appFullProjectedPoints,
    player.appFullProjectedPoints,
  );

  allWRProjectionsObjects.push(wrProjectionsObject);
});

 allWRData.allWRProjectionsObjects = allWRProjectionsObjects


// console.log(allWRProjectionsObjects);

///uncoment below to add wr projections to db

// const { MongoClient } = require('mongodb');

// const url =
//   'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
// const client = new MongoClient(url);

// // The database to use
// const dbName = 'dailydynasties';

// async function runWRProjections() {
//   try {
//     await client.connect();
//     console.log('Connected correctly to server');
//     const db = client.db(dbName);

//     // Use the collection "people"
//     const col = db.collection('WRProjections');

//     // Construct a document
//     let WRProjections = {
//       allWRProjectionsObjects: allWRProjectionsObjects,
//     };

//     // Insert a single document, wait for promise so we can read it back
//     const p = await col.insertOne(WRProjections);
//     // Find one document
//     const myDoc = await col.findOne();
//     // Print to the console
//     // console.log(myDoc);
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }

// runWRProjections().catch(console.dir);

// console.log(arrayOfProjectedPointsForMyDevUse);

// console.log(allTeamWRObjects.giants.WRThree);
// console.log(allTeamWRObjects.packers.WRTwo);

// console.log(
//   allTeamWRObjects.cowboys.WROne,

//   allTeamWRObjects.titans.WROne
// );
// console.log(allTeamWRObjects);

//////////////////////

module.exports = allWRData;
