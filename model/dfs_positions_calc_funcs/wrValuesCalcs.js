const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const allWRs = require('../teamandpositionvariables/allWRVariables');
const wrrawdata = require('../teamandpostionsrawdata/wrrawdata');
const qbrawdata = require('../teamandpostionsrawdata/qbrawdata');
const allQBData = require('../dfs_positions_calc_funcs/qbValuesCalcs');

const propsWRData = require('../dfs_positions_calc_funcs/wrPropsDataFetcher.js');

//
const WRProspectModelData = require('../DataForUndroppablesProspectModels/WRProspectModelData.js');

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

  calcAppProjectedPoints(
    recs,
    recYards,
    recTDs,
    rushAttempts,
    rushYards,
    rushTDs,
    rec1Ds,
    rush1Ds
  ) {
    // for weeks 1 & 2
    let ranNum = +(Math.random() * 1.5 - 0.75).toFixed(1);
    // console.log(ranNum);

    if (gameInfo.week.currentWeek < 3) {
      // if(this.teamABV === 'LAR') {
      //   console.log(this.name)
      // }

      let tempHalfProjection = 0;
      if (this.halfGLSPAvg) {
        tempHalfProjection = +(
          (this.fourForFourHalfPPRProjectedPoints +
            this.fourForFourHalfPPRProjectedPoints +
            this.fourForFourHalfPPRProjectedPoints +
            this.halfGLSPAvg) /
          4
        ).toFixed(1);
      } else {
        tempHalfProjection = this.fourForFourHalfPPRProjectedPoints.toFixed(0);
        tempHalfProjection = +(+tempHalfProjection + +ranNum).toFixed(1);
        // console.log(tempHalfProjection);
      }
      let tempPPRProjection = 0;
      if (this.PPRGLSPAvg) {
        tempPPRProjection = +(
          (this.fourForFourFullPPRProjectedPoints +
            this.fourForFourFullPPRProjectedPoints +
            this.fourForFourFullPPRProjectedPoints +
            this.PPRGLSPAvg) /
          4
        ).toFixed(1);
      } else {
        tempPPRProjection = this.fourForFourFullPPRProjectedPoints.toFixed(0);
        tempPPRProjection = +(+tempPPRProjection + +ranNum).toFixed(1);
      }

      this.appHalfProjectedPoints = tempHalfProjection;
      this.appFullProjectedPoints = tempPPRProjection;
    }

    // for weeks 3 & 4

    if (gameInfo.week.currentWeek > 2 && gameInfo.week.currentWeek < 5) {
      let tempHalfProjection = 0;
      let tempPPRProjection = 0;

      if (this.halfGLSPAvg) {
        tempHalfProjection = +(
          (this.fourForFourHalfPPRProjectedPoints +
            this.fourForFourHalfPPRProjectedPoints +
            this.halfGLSPAvg) /
          3
        ).toFixed(1);
      } else {
        tempHalfProjection = this.fourForFourHalfPPRProjectedPoints.toFixed(1);
        tempHalfProjection = +(+tempHalfProjection + +ranNum).toFixed(1);
      }

      if (this.PPRGLSPAvg) {
        tempPPRProjection = +(
          (this.fourForFourFullPPRProjectedPoints +
            this.fourForFourFullPPRProjectedPoints +
            this.PPRGLSPAvg) /
          3
        ).toFixed(1);
      } else {
        tempPPRProjection = this.fourForFourFullPPRProjectedPoints.toFixed(1);
        tempPPRProjection = +(+tempPPRProjection + +ranNum).toFixed(1);
      }

      if (tempHalfProjection === 0) {
        tempHalfProjection = this.fourForFourHalfPPRProjectedPoints.toFixed(1);
        tempHalfProjection = +(+tempHalfProjection + +ranNum).toFixed(1);
      }
      if (tempPPRProjection === 0) {
        tempPPRProjection = this.fourForFourFullPPRProjectedPoints.toFixed(1);
        tempPPRProjection = +(+tempPPRProjection + +ranNum).toFixed(1);
      }

      this.appHalfProjectedPoints = tempHalfProjection;
      this.appFullProjectedPoints = tempPPRProjection;
    }

    // for weeks 5-18

    if (gameInfo.week.currentWeek > 4) {
      let playersBottomLineHalfProj = +(
        (+this.halfTwentyFifthPercentProjectedPoints +
          +this.halfFiftyithPercentProjectedPoints) /
        2
      ).toFixed(1);
      let playersTopLineHalfProj = +(
        (+this.halfSeventyFifthPercentProjectedPoints +
          +this.halfFiftyithPercentProjectedPoints) /
        2
      ).toFixed(1);

      let playersBottomLineFullProj = +(
        (+this.PPRTwentyFifthPercentProjectedPoints +
          +this.PPRFiftyithPercentProjectedPoints) /
        2
      ).toFixed(1);
      let playersTopLineFullProj = +(
        (+this.PPRSeventyFifthPercentProjectedPoints +
          +this.PPRFiftyithPercentProjectedPoints) /
        2
      ).toFixed(1);

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
          ).toFixed(1);
          let tempPPRProjection = +(this.PPRGLSPAvg * adjustmentFactor).toFixed(
            1
          );

          if (tempHalfProjection > playersTopLineHalfProj) {
            tempHalfProjection = playersTopLineHalfProj;
          }

          if (tempPPRProjection > playersTopLineFullProj) {
            tempPPRProjection = playersTopLineFullProj;
          }

          if (tempHalfProjection < playersBottomLineHalfProj) {
            tempHalfProjection = playersBottomLineHalfProj;
          }

          if (tempPPRProjection < playersBottomLineFullProj) {
            tempPPRProjection = playersBottomLineFullProj;
          }

          if (tempHalfProjection === 0 || !tempHalfProjection) {
            tempHalfProjection = this.fourForFourHalfPPRProjectedPoints;
            tempHalfProjection = +(+tempHalfProjection + +ranNum).toFixed(1);
          }

          if (tempPPRProjection === 0 || !tempPPRProjection) {
            tempPPRProjection = this.fourForFourFullPPRProjectedPoints;
            tempPPRProjection = +(+tempPPRProjection + +ranNum).toFixed(1);
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
          ).toFixed(1);
          let tempPPRProjection = +(this.PPRGLSPAvg * adjustmentFactor).toFixed(
            1
          );

          if (tempHalfProjection > playersTopLineHalfProj) {
            tempHalfProjection = playersTopLineHalfProj;
          }

          if (tempPPRProjection > playersTopLineFullProj) {
            tempPPRProjection = playersTopLineFullProj;
          }

          if (tempHalfProjection < playersBottomLineHalfProj) {
            tempHalfProjection = playersBottomLineHalfProj;
          }

          if (tempPPRProjection < playersBottomLineFullProj) {
            tempPPRProjection = playersBottomLineFullProj;
          }

          if (tempHalfProjection === 0 || !tempHalfProjection) {
            tempHalfProjection = this.fourForFourHalfPPRProjectedPoints;
            tempHalfProjection = +(+tempHalfProjection + +ranNum).toFixed(1);
          }

          if (tempPPRProjection === 0 || !tempPPRProjection) {
            tempPPRProjection = this.fourForFourFullPPRProjectedPoints;
            tempPPRProjection = +(+tempPPRProjection + +ranNum).toFixed(1);
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

        if (tempHalfProjection > playersTopLineHalfProj) {
          tempHalfProjection = playersTopLineHalfProj;
        }

        if (tempPPRProjection > playersTopLineFullProj) {
          tempPPRProjection = playersTopLineFullProj;
        }

        if (tempHalfProjection < playersBottomLineHalfProj) {
          tempHalfProjection = playersBottomLineHalfProj;
        }

        if (tempPPRProjection < playersBottomLineFullProj) {
          tempPPRProjection = playersBottomLineFullProj;
        }

        if (tempHalfProjection === 0 || !tempHalfProjection) {
          tempHalfProjection = this.fourForFourHalfPPRProjectedPoints;
          tempHalfProjection = +(+tempHalfProjection + +ranNum).toFixed(1);
        }

        if (tempPPRProjection === 0 || !tempPPRProjection) {
          tempPPRProjection = this.fourForFourFullPPRProjectedPoints;
          tempPPRProjection = +(+tempPPRProjection + +ranNum).toFixed(1);
        }

        this.appHalfProjectedPoints = +tempHalfProjection.toFixed(1);
        this.appFullProjectedPoints = +tempPPRProjection.toFixed(1);

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

      let oldStyleHalfAdjustor = 0;
      let oldStylePPRAdjustor = 0;

      if (this.halfGLSPAvg) {
        oldStyleHalfAdjustor = +(
          (this.fourForFourHalfPPRProjectedPoints +
            this.fourForFourHalfPPRProjectedPoints +
            this.halfGLSPAvg) /
          3
        ).toFixed(1);
      } else {
        oldStyleHalfAdjustor =
          this.fourForFourHalfPPRProjectedPoints.toFixed(1);
      }

      if (this.PPRGLSPAvg) {
        oldStylePPRAdjustor = +(
          (this.fourForFourFullPPRProjectedPoints +
            this.fourForFourFullPPRProjectedPoints +
            this.PPRGLSPAvg) /
          3
        ).toFixed(1);
      } else {
        oldStylePPRAdjustor = this.fourForFourFullPPRProjectedPoints.toFixed(1);
        oldStylePPRAdjustor = +(+oldStylePPRAdjustor + +ranNum).toFixed(1);
      }

      if (oldStyleHalfAdjustor === 0) {
        oldStyleHalfAdjustor =
          this.fourForFourHalfPPRProjectedPoints.toFixed(1);
        oldStyleHalfAdjustor = +(+oldStyleHalfAdjustor + +ranNum).toFixed(1);
      }
      if (oldStylePPRAdjustor === 0) {
        oldStylePPRAdjustor = this.fourForFourFullPPRProjectedPoints.toFixed(1);
        oldStylePPRAdjustor = +(+oldStylePPRAdjustor + +ranNum).toFixed(1);
      }

      let finalHalfTemp = +(
        (+this.appHalfProjectedPoints +
          +oldStyleHalfAdjustor +
          +oldStyleHalfAdjustor) /
        3
      ).toFixed(1);
      let finalFullTemp = +(
        (+this.appFullProjectedPoints +
          +oldStylePPRAdjustor +
          +oldStylePPRAdjustor) /
        3
      ).toFixed(1);

      //this.fourForFourHalfPPRProjectedPoints
      //this.fourForFourFullPPRProjectedPoints

      // console.log(
      //   this.playerName,
      //   this.fourForFourFullPPRProjectedPoints,
      //   finalFullTemp
      // );

      this.appHalfProjectedPoints = +finalHalfTemp;
      this.appFullProjectedPoints = +finalFullTemp;

          // console.log(this.playerName, recs);
      // console.log(this.playerName, recYards);
      // console.log(this.playerName, recTDs);
      // console.log(this.playerName, rushAttempts);
      // console.log(this.playerName, rushYards);
      // console.log(this.playerName, rushTDs);
      // console.log(this.playerName, rec1Ds);
      // console.log(this.playerName, rush1Ds);

      this.appProjectedCarriesThisWeek = +rushAttempts
      this.appProjectedrushYardsThisWeek = +rushYards
      this.appProjectedrushTDsThisWeek = +rushTDs
      this.appProjectedreceptionsThisWeek = +recs
      this.appProjectedrecYardsThisWeek = +recYards
      this.appProjectedrecTDsThisWeek = +recTDs
      this.appProjectedrushFirstDownsThisWeek = +rush1Ds
      this.appProjectedrecFirstDownsThisWeek = +rec1Ds

      let halfPercentDifference = +(+this.appHalfProjectedPoints / +this.fourForFourHalfPPRProjectedPoints).toFixed(2)
      let fullPercentDifference = +(+this.appFullProjectedPoints / +this.fourForFourFullPPRProjectedPoints).toFixed(2)
      let differenceToUse = +((+halfPercentDifference + +fullPercentDifference) / 2).toFixed(2)

      // console.log(this.playerName, differenceToUse);

      let carriesDifferenceToUse = differenceToUse

      if(differenceToUse < .92) {
        differenceToUse = .92
      }
      
      

      // console.log(this.playerName, this.appHalfProjectedPoints)
      // console.log(this.playerName, fullPercentDifference)
      // console.log(this.playerName, halfPercentDifference, fullPercentDifference, differenceToUse)

      this.appProjectedCarriesThisWeek = +(+this.appProjectedCarriesThisWeek * +differenceToUse).toFixed(1)
      this.appProjectedrushYardsThisWeek = +(+this.appProjectedrushYardsThisWeek * +differenceToUse).toFixed(1)
      this.appProjectedrushTDsThisWeek = +((+this.appProjectedrushTDsThisWeek * +differenceToUse) ).toFixed(1)
      this.appProjectedreceptionsThisWeek = +(+this.appProjectedreceptionsThisWeek * +differenceToUse).toFixed(1)
      this.appProjectedrecYardsThisWeek = +(+this.appProjectedrecYardsThisWeek * +differenceToUse).toFixed(1)
      this.appProjectedrecTDsThisWeek = +((+this.appProjectedrecTDsThisWeek * +differenceToUse) + .06).toFixed(1)
      this.appProjectedrushFirstDownsThisWeek = +(+this.appProjectedrushFirstDownsThisWeek * +differenceToUse).toFixed(1)
      this.appProjectedrecFirstDownsThisWeek = +(+this.appProjectedrecFirstDownsThisWeek * +differenceToUse).toFixed(1)
      this.appProjectedRBTotalFirstDownsThisWeek = +(this.appProjectedrushFirstDownsThisWeek + this.appProjectedrecFirstDownsThisWeek).toFixed(1)

      this.astroHalfWRProjection = +((+this.appProjectedrushYardsThisWeek * .1) + +(+this.appProjectedrushTDsThisWeek * 6) + +(+this.appProjectedrecYardsThisWeek * .1) + +(+this.appProjectedrecTDsThisWeek * 6) + (+this.appProjectedreceptionsThisWeek * .5)).toFixed(1)

      this.astroFullWRProjection = +((+this.appProjectedrushYardsThisWeek * .1) + +(+this.appProjectedrushTDsThisWeek * 6) + +(+this.appProjectedrecYardsThisWeek * .1) + +(+this.appProjectedrecTDsThisWeek * 6) + (+this.appProjectedreceptionsThisWeek * 1)).toFixed(1)

      if(this.astroHalfWRProjection && this.astroFullWRProjection) {
        this.appHalfProjectedPoints = +((+this.appHalfProjectedPoints + +this.astroHalfWRProjection) / 2).toFixed(1)
      this.appFullProjectedPoints = +((+this.appFullProjectedPoints + +this.astroFullWRProjection) / 2).toFixed(1)
      }

      //  console.log(this.playerName, this.appHalfProjectedPoints, this.fourForFourHalfPPRProjectedPoints)
      //  console.log(this.playerName, this.appFullProjectedPoints, this.fourForFourFullPPRProjectedPoints)
  
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
    if (team.teamABV === giTeam.teamABV || team.teamABV === giTeam.altTeamABV) {
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

  // console.log(team.WROne.halfPPRPointsPerGameLastFiveWeeks)

  percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks =
    +(
      +team.WROne.fourForFourHalfPPRProjectedPoints /
      +team.WROne.halfPPRPointsPerGameLastFiveWeeks
    ).toFixed(2);

  // console.log(percentProjectedfantasyPointsThisWeekIsHigherOrLowerThanFantasyPointsScoredLastFiveWeeks)

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

  // console.log(team.WROne.name, team.WROne.projRush1D);

  wrObject.calcAppProjectedPoints(
    team.WROne.projReceptions,
    team.WROne.projRecYards,
    team.WROne.projRecTDs,
    team.WROne.projRushAttempts,
    team.WROne.projRushYards,
    team.WROne.projRushTD,
    team.WROne.projRec1D,
    team.WROne.projRush1D
  );

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

  wrObject.calcAppProjectedPoints(
    team.WRTwo.projReceptions,
    team.WRTwo.projRecYards,
    team.WRTwo.projRecTDs,
    team.WRTwo.projRushAttempts,
    team.WRTwo.projRushYards,
    team.WRTwo.projRushTD,
    team.WRTwo.projRec1D,
    team.WRTwo.projRush1D
  );

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

  wrObject.calcAppProjectedPoints(
    team.WRThree.projReceptions,
    team.WRThree.projRecYards,
    team.WRThree.projRecTDs,
    team.WRThree.projRushAttempts,
    team.WRThree.projRushYards,
    team.WRThree.projRushTD,
    team.WRThree.projRec1D,
    team.WRThree.projRush1D
  );

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

class ProjectionsObject {
  constructor(
    name,
    position,
    team,

    appProjectedCarriesThisWeek,
    appProjectedrushYardsThisWeek,
    appProjectedrushTDsThisWeek,
    appProjectedreceptionsThisWeek,
    appProjectedrecYardsThisWeek,
    appProjectedrecTDsThisWeek,
    appProjectedrushFirstDownsThisWeek,
    appProjectedrecFirstDownsThisWeek,
    appProjectedRBTotalFirstDownsThisWeek,
    astroHalfWRProjection,
    astroFullWRProjection,

    
    udReceptionsProp,
    ppReceptionsProp,
    udReceivingYardsProp,
    ppReceivingYardsProp,

    udFantasyScoreProp ,
ppFantasyScoreProp,

    appHalfProjectedPoints,
    appFullProjectedPoints,
    appTEPProjectedPoints
  ) {
    this.name = name;
    this.position = position;
    this.team = team;
    

    this.appProjectedCarriesThisWeek = +appProjectedCarriesThisWeek;
    this.appProjectedrushYardsThisWeek = +appProjectedrushYardsThisWeek;
    this.appProjectedrushTDsThisWeek = +appProjectedrushTDsThisWeek;
    this.appProjectedreceptionsThisWeek = +appProjectedreceptionsThisWeek;
    this.appProjectedrecYardsThisWeek = +appProjectedrecYardsThisWeek;
    this.appProjectedrecTDsThisWeek = +appProjectedrecTDsThisWeek;
    this.appProjectedrushFirstDownsThisWeek = +appProjectedrushFirstDownsThisWeek;
    this.appProjectedrecFirstDownsThisWeek = +appProjectedrecFirstDownsThisWeek;
    this.appProjectedRBTotalFirstDownsThisWeek = +appProjectedRBTotalFirstDownsThisWeek;

    this.astroHalfWRProjection = +astroHalfWRProjection;

    this.astroFullWRProjection = +astroFullWRProjection;

    this.udReceptionsProp = udReceptionsProp
    this.ppReceptionsProp = ppReceptionsProp
    this.udReceivingYardsProp = udReceivingYardsProp
    this.ppReceivingYardsProp = ppReceivingYardsProp
    this.udFantasyScoreProp = udFantasyScoreProp
    this.ppFantasyScoreProp = ppFantasyScoreProp

    this.appHalfProjectedPoints = +appHalfProjectedPoints;
    this.appFullProjectedPoints = +appFullProjectedPoints;
    this.appTEPProjectedPoints = +appTEPProjectedPoints;
    
  }
}

async function propsData() {


  const propsData = await propsWRData();
  
  propsData.forEach(function (player) {

  // console.log(player.WROne)

  allWRObjectsArray.forEach(function (wr) {
    // console.log(wr.appHalfProjectedPoints);
  
    // console.log(wr.appFullProjectedPoints)
    
  
    // console.log(wr.appFullProjectedPoints);


    //
    //
    //
    //                                        WR One
    //
    //

    if (wr.roleThisWeek === 1) {
      // console.log(wr.playerName);
      // console.log(player.WROne.name);
      // console.log(wr);
      // console.log(player.WROne);
      if(wr.playerName === player.WROne.name){
        // console.log(wr);
        // console.log(player.WROne);
        // console.log(player.WROne);

        wr.prjReceptions = player.WROne.projReceptions;
        wr.prjReceivingYards = player.WROne.projRecYards;
        wr.prjReceivingTDs = player.WROne.projRecTDs;
        // wr.astroHalfWRProjection = player.WROne.astroHalfWRProjection;
        // wr.astroFullWRProjection = player.WROne.astroFullWRProjection;
        
      
       
        wr.udReceptionsProp = { prop: player.WROne.udReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.ppReceptionsProp = { prop: player.WROne.ppReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.udReceivingYardsProp = { prop: player.WROne.udRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.ppReceivingYardsProp = { prop: player.WROne.ppRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
   
        wr.udFantasyScoreProp = { prop: player.WROne.udFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };
    wr.ppFantasyScoreProp = { prop: player.WROne.ppFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };

        // console.log(wr)
    
        //                                        
        //                                       
        //

               //
        //                                        Receptions
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            //  console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            if(wr.udReceptionsProp.prop - wr.prjReceptions  > .2 && wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek  > .2) {      
              wr.udReceptionsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.ppReceptionsProp.prop - wr.prjReceptions > .2 && wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .2) {      
              wr.ppReceptionsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
              //                                            test
    
              if(wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek  > .4) {      
                wr.udReceptionsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.ppReceptionsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
    
               // high confidence
    
               if(wr.udReceptionsProp.prop - wr.prjReceptions  > .4 && wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.udReceptionsProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.ppReceptionsProp.prop - wr.prjReceptions  > .4 && wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.ppReceptionsProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            if(wr.prjReceptions - wr.udReceptionsProp.prop > .4 && wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .4) {      
              wr.udReceptionsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.prjReceptions - wr.ppReceptionsProp.prop > .4 && wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .4) {      
              wr.ppReceptionsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
            //                                                    Test
    
            if(wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .5) {      
              wr.udReceptionsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .5) {      
              wr.ppReceptionsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
               // high confidence
    
               if(wr.prjReceptions - wr.udReceptionsProp.prop > .7 && wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .7) {      
                wr.udReceptionsProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.prjReceptions - wr.ppReceptionsProp.prop > .7 && wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .7) {      
                wr.ppReceptionsProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }


              //
               //                                       Rec Yards
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            //  console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            if(wr.udReceivingYardsProp.prop - wr.prjReceivingYards  > .5 && wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek  > .5) {      
              wr.udReceivingYardsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.ppReceivingYardsProp.prop - wr.prjReceivingYards > .5 && wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > .5) {      
              wr.ppReceivingYardsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
              //                                            test
    
              if(wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek  > .7) {      
                wr.udReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > .7) {      
                wr.ppReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
    
               // high confidence
    
               if(wr.udReceivingYardsProp.prop - wr.prjReceivingYards  > 1 && wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > 1) {      
                wr.udReceivingYardsProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.ppReceivingYardsProp.prop - wr.prjReceivingYards  > 1 && wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > 1) {      
                wr.ppReceivingYardsProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            if(wr.prjReceivingYards - wr.udReceivingYardsProp.prop > 10 && wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 10) {      
              wr.udReceivingYardsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.prjReceivingYards - wr.ppReceivingYardsProp.prop > 10 && wr.appProjectedrecYardsThisWeek - wr.ppReceivingYardsProp.prop > 10) {      
              wr.ppReceivingYardsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
            //                                                    Test
    
            if(wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 12) {      
              wr.udReceivingYardsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.appProjectedrecYardsThisWeek - wr.ppReceivingYardsProp.prop > 12) {      
              wr.ppReceivingYardsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
               // high confidence
    
               if(wr.prjReceivingYards - wr.udReceivingYardsProp.prop > 15 && wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 15) {      
                wr.udReceivingYardsProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.prjReceivingYards - wr.ppReceivingYardsProp.prop > 15 && wr.appProjectedrecYardsThisWeek - wr.ppReceptionsProp.prop > 15) {      
                wr.ppReceivingYardsProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }


              //
              
              //
               //                                       Fantasy Score
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            //  console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            if(wr.udFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > .5 && wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection  > .5) {      
              wr.udFantasyScoreProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.ppFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints > .5 && wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > .5) {      
              wr.ppFantasyScoreProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
              //                                            test
    
              if(wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection  > 1) {      
                wr.udFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.ppFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
    
               // high confidence
    
               if(wr.udFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > 1 && wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.udFantasyScoreProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.ppFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > 1 && wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.ppFantasyScoreProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            if(wr.fourForFourHalfPPRProjectedPoints - wr.udFantasyScoreProp.prop > 1.25 && wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 1.25) {      
              wr.udFantasyScoreProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.fourForFourHalfPPRProjectedPoints - wr.ppFantasyScoreProp.prop > 1.25 && wr.astroHalfWRProjection - wr.ppFantasyScoreProp.prop > 1.25) {      
              wr.ppFantasyScoreProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
            //                                                    Test
    
            if(wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 2.5) {      
              wr.udFantasyScoreProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.astroHalfWRProjection - wr.ppFantasyScoreProp.prop > 2.5) {      
              wr.ppFantasyScoreProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
               // high confidence
    
               if(wr.fourForFourHalfPPRProjectedPoints - wr.udFantasyScoreProp.prop > 2.5 && wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 2.5) {      
                wr.udFantasyScoreProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.fourForFourHalfPPRProjectedPoints - wr.ppFantasyScoreProp.prop > 2.5&& wr.astroHalfWRProjection - wr.ppReceptionsProp.prop > 2.5) {      
                wr.ppFantasyScoreProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }

        // console.log(wr);
        // console.log(wr.playerName, wr.ppFantasyScoreProp);

      } // end of if(wr.playerName === player.WROne.name){
    } // end of if (wr.roleThisWeek === 1) {




    //
    //
    //
    //                                                              WR Two
    //
    //

    if (wr.roleThisWeek === 2) {
      // console.log(wr.playerName);
      // console.log(player.WRTwo.name);
      // console.log(wr);
      // console.log(player.WRTwo);
      if(wr.playerName === player.WRTwo.name){
        // console.log(wr);
        // console.log(player.WRTwo);
        // console.log(player.WRTwo);

        wr.prjReceptions = player.WRTwo.projReceptions;
        wr.prjReceivingYards = player.WRTwo.projRecYards;
        wr.prjReceivingTDs = player.WRTwo.projRecTDs;
        // wr.astroHalfWRProjection = player.WRTwo.astroHalfWRProjection;
        // wr.astroFullWRProjection = player.WRTwo.astroFullWRProjection;
        
      
       
        wr.udReceptionsProp = { prop: player.WRTwo.udReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.ppReceptionsProp = { prop: player.WRTwo.ppReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.udReceivingYardsProp = { prop: player.WRTwo.udRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.ppReceivingYardsProp = { prop: player.WRTwo.ppRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
   
        wr.udFantasyScoreProp = { prop: player.WRTwo.udFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };
    wr.ppFantasyScoreProp = { prop: player.WRTwo.ppFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };

        // console.log(wr)
    
        //                                        
        //                                       
        //

               //
        //                                        Receptions
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            //  console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            if(wr.udReceptionsProp.prop - wr.prjReceptions  > .2 && wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek  > .2) {      
              wr.udReceptionsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.ppReceptionsProp.prop - wr.prjReceptions > .2 && wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .2) {      
              wr.ppReceptionsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
              //                                            test
    
              if(wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek  > .4) {      
                wr.udReceptionsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.ppReceptionsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
    
               // high confidence
    
               if(wr.udReceptionsProp.prop - wr.prjReceptions  > .4 && wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.udReceptionsProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.ppReceptionsProp.prop - wr.prjReceptions  > .4 && wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.ppReceptionsProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            if(wr.prjReceptions - wr.udReceptionsProp.prop > .4 && wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .4) {      
              wr.udReceptionsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.prjReceptions - wr.ppReceptionsProp.prop > .4 && wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .4) {      
              wr.ppReceptionsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
            //                                                    Test
    
            if(wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .5) {      
              wr.udReceptionsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .5) {      
              wr.ppReceptionsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
               // high confidence
    
               if(wr.prjReceptions - wr.udReceptionsProp.prop > .7 && wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .7) {      
                wr.udReceptionsProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.prjReceptions - wr.ppReceptionsProp.prop > .7 && wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .7) {      
                wr.ppReceptionsProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }


              //
               //                                       Rec Yards
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            //  console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            if(wr.udReceivingYardsProp.prop - wr.prjReceivingYards  > .5 && wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek  > .5) {      
              wr.udReceivingYardsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.ppReceivingYardsProp.prop - wr.prjReceivingYards > .5 && wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > .5) {      
              wr.ppReceivingYardsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
              //                                            test
    
              if(wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek  > .7) {      
                wr.udReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > .7) {      
                wr.ppReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
    
               // high confidence
    
               if(wr.udReceivingYardsProp.prop - wr.prjReceivingYards  > 1 && wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > 1) {      
                wr.udReceivingYardsProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.ppReceivingYardsProp.prop - wr.prjReceivingYards  > 1 && wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > 1) {      
                wr.ppReceivingYardsProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            if(wr.prjReceivingYards - wr.udReceivingYardsProp.prop > 10 && wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 10) {      
              wr.udReceivingYardsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.prjReceivingYards - wr.ppReceivingYardsProp.prop > 10 && wr.appProjectedrecYardsThisWeek - wr.ppReceivingYardsProp.prop > 10) {      
              wr.ppReceivingYardsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
            //                                                    Test
    
            if(wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 12) {      
              wr.udReceivingYardsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.appProjectedrecYardsThisWeek - wr.ppReceivingYardsProp.prop > 12) {      
              wr.ppReceivingYardsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
               // high confidence
    
               if(wr.prjReceivingYards - wr.udReceivingYardsProp.prop > 15 && wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 15) {      
                wr.udReceivingYardsProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.prjReceivingYards - wr.ppReceivingYardsProp.prop > 15 && wr.appProjectedrecYardsThisWeek - wr.ppReceptionsProp.prop > 15) {      
                wr.ppReceivingYardsProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }


              //
              
              //
               //                                       Fantasy Score
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            //  console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            if(wr.udFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > .5 && wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection  > .5) {      
              wr.udFantasyScoreProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.ppFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints > .5 && wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > .5) {      
              wr.ppFantasyScoreProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
              //                                            test
    
              if(wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection  > 1) {      
                wr.udFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.ppFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
    
               // high confidence
    
               if(wr.udFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > 1 && wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.udFantasyScoreProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.ppFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > 1 && wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.ppFantasyScoreProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            if(wr.fourForFourHalfPPRProjectedPoints - wr.udFantasyScoreProp.prop > 1.25 && wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 1.25) {      
              wr.udFantasyScoreProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.fourForFourHalfPPRProjectedPoints - wr.ppFantasyScoreProp.prop > 1.25 && wr.astroHalfWRProjection - wr.ppFantasyScoreProp.prop > 1.25) {      
              wr.ppFantasyScoreProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
            //                                                    Test
    
            if(wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 2.5) {      
              wr.udFantasyScoreProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.astroHalfWRProjection - wr.ppFantasyScoreProp.prop > 2.5) {      
              wr.ppFantasyScoreProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
               // high confidence
    
               if(wr.fourForFourHalfPPRProjectedPoints - wr.udFantasyScoreProp.prop > 2.5 && wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 2.5) {      
                wr.udFantasyScoreProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.fourForFourHalfPPRProjectedPoints - wr.ppFantasyScoreProp.prop > 2.5&& wr.astroHalfWRProjection - wr.ppReceptionsProp.prop > 2.5) {      
                wr.ppFantasyScoreProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }

        // console.log(wr);
        // console.log(wr.playerName, wr.ppFantasyScoreProp);

      } // end of if(wr.playerName === player.WROne.name){
    } // end of if (wr.roleThisWeek === 1) {


    //
    //
    //                                                        WR Three
    //
    //

    if (wr.roleThisWeek === 3) {
      // console.log(wr.playerName);
      // console.log(player.WRThree.name);
      // console.log(wr);
      // console.log(player.WRThree);
      if(wr.playerName === player.WRThree.name){
        // console.log(wr);
        // console.log(player.WRThree);
        // console.log(player.WRThree);

        wr.prjReceptions = player.WRThree.projReceptions;
        wr.prjReceivingYards = player.WRThree.projRecYards;
        wr.prjReceivingTDs = player.WRThree.projRecTDs;
        // wr.astroHalfWRProjection = player.WRThree.astroHalfWRProjection;
        // wr.astroFullWRProjection = player.WRThree.astroFullWRProjection;
        
      
       
        wr.udReceptionsProp = { prop: player.WRThree.udReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.ppReceptionsProp = { prop: player.WRThree.ppReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.udReceivingYardsProp = { prop: player.WRThree.udRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
        wr.ppReceivingYardsProp = { prop: player.WRThree.ppRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
   
        wr.udFantasyScoreProp = { prop: player.WRThree.udFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };
    wr.ppFantasyScoreProp = { prop: player.WRThree.ppFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };

        // console.log(wr)
    
        //                                        
        //                                       
        //

               //
        //                                        Receptions
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            //  console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            if(wr.udReceptionsProp.prop - wr.prjReceptions  > .2 && wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek  > .2) {      
              wr.udReceptionsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.ppReceptionsProp.prop - wr.prjReceptions > .2 && wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .2) {      
              wr.ppReceptionsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
              //                                            test
    
              if(wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek  > .4) {      
                wr.udReceptionsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.ppReceptionsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
    
               // high confidence
    
               if(wr.udReceptionsProp.prop - wr.prjReceptions  > .4 && wr.udReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.udReceptionsProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.ppReceptionsProp.prop - wr.prjReceptions  > .4 && wr.ppReceptionsProp.prop - wr.appProjectedreceptionsThisWeek > .4) {      
                wr.ppReceptionsProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            if(wr.prjReceptions - wr.udReceptionsProp.prop > .4 && wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .4) {      
              wr.udReceptionsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.prjReceptions - wr.ppReceptionsProp.prop > .4 && wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .4) {      
              wr.ppReceptionsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
            //                                                    Test
    
            if(wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .5) {      
              wr.udReceptionsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
            if(wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .5) {      
              wr.ppReceptionsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
            }
    
               // high confidence
    
               if(wr.prjReceptions - wr.udReceptionsProp.prop > .7 && wr.appProjectedreceptionsThisWeek - wr.udReceptionsProp.prop > .7) {      
                wr.udReceptionsProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }
              if(wr.prjReceptions - wr.ppReceptionsProp.prop > .7 && wr.appProjectedreceptionsThisWeek - wr.ppReceptionsProp.prop > .7) {      
                wr.ppReceptionsProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppReceptionsProp.prop, wr.appProjectedreceptionsThisWeek, wr.prjReceptions )
              }


              //
               //                                       Rec Yards
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            //  console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            if(wr.udReceivingYardsProp.prop - wr.prjReceivingYards  > .5 && wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek  > .5) {      
              wr.udReceivingYardsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.ppReceivingYardsProp.prop - wr.prjReceivingYards > .5 && wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > .5) {      
              wr.ppReceivingYardsProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
              //                                            test
    
              if(wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek  > .7) {      
                wr.udReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > .7) {      
                wr.ppReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
    
               // high confidence
    
               if(wr.udReceivingYardsProp.prop - wr.prjReceivingYards  > 1 && wr.udReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > 1) {      
                wr.udReceivingYardsProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.ppReceivingYardsProp.prop - wr.prjReceivingYards  > 1 && wr.ppReceivingYardsProp.prop - wr.appProjectedrecYardsThisWeek > 1) {      
                wr.ppReceivingYardsProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            if(wr.prjReceivingYards - wr.udReceivingYardsProp.prop > 10 && wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 10) {      
              wr.udReceivingYardsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.prjReceivingYards - wr.ppReceivingYardsProp.prop > 10 && wr.appProjectedrecYardsThisWeek - wr.ppReceivingYardsProp.prop > 10) {      
              wr.ppReceivingYardsProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
            //                                                    Test
    
            if(wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 12) {      
              wr.udReceivingYardsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
            if(wr.appProjectedrecYardsThisWeek - wr.ppReceivingYardsProp.prop > 12) {      
              wr.ppReceivingYardsProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
            }
    
               // high confidence
    
               if(wr.prjReceivingYards - wr.udReceivingYardsProp.prop > 15 && wr.appProjectedrecYardsThisWeek - wr.udReceivingYardsProp.prop > 15) {      
                wr.udReceivingYardsProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }
              if(wr.prjReceivingYards - wr.ppReceivingYardsProp.prop > 15 && wr.appProjectedrecYardsThisWeek - wr.ppReceptionsProp.prop > 15) {      
                wr.ppReceivingYardsProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppReceivingYardsProp.prop, wr.appProjectedrecYardsThisWeek, wr.prjReceivingYards )
              }


              //
              
              //
               //                                       Fantasy Score
        //

           

           //                                             under
           //

           //normal

            //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            //  console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            if(wr.udFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > .5 && wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection  > .5) {      
              wr.udFantasyScoreProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.ppFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints > .5 && wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > .5) {      
              wr.ppFantasyScoreProp.isUnderRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
              //                                            test
    
              if(wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection  > 1) {      
                wr.udFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.ppFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
    
               // high confidence
    
               if(wr.udFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > 1 && wr.udFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.udFantasyScoreProp.highUnderConfidence = true
                //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.ppFantasyScoreProp.prop - wr.fourForFourHalfPPRProjectedPoints  > 1 && wr.ppFantasyScoreProp.prop - wr.astroHalfWRProjection > 1) {      
                wr.ppFantasyScoreProp.highUnderConfidence = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            if(wr.fourForFourHalfPPRProjectedPoints - wr.udFantasyScoreProp.prop > 1.25 && wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 1.25) {      
              wr.udFantasyScoreProp.isOverRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.fourForFourHalfPPRProjectedPoints - wr.ppFantasyScoreProp.prop > 1.25 && wr.astroHalfWRProjection - wr.ppFantasyScoreProp.prop > 1.25) {      
              wr.ppFantasyScoreProp.isOverRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
            //                                                    Test
    
            if(wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 2.5) {      
              wr.udFantasyScoreProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
            if(wr.astroHalfWRProjection - wr.ppFantasyScoreProp.prop > 2.5) {      
              wr.ppFantasyScoreProp.isTESTOverRecomended = true
              // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
            }
    
               // high confidence
    
               if(wr.fourForFourHalfPPRProjectedPoints - wr.udFantasyScoreProp.prop > 2.5 && wr.astroHalfWRProjection - wr.udFantasyScoreProp.prop > 2.5) {      
                wr.udFantasyScoreProp.highOverConfidence = true
                //  console.log(wr.playerName, wr.udFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }
              if(wr.fourForFourHalfPPRProjectedPoints - wr.ppFantasyScoreProp.prop > 2.5&& wr.astroHalfWRProjection - wr.ppReceptionsProp.prop > 2.5) {      
                wr.ppFantasyScoreProp.highOverConfidence = true
                // console.log(wr.playerName, wr.ppFantasyScoreProp.prop, wr.astroHalfWRProjection, wr.fourForFourHalfPPRProjectedPoints )
              }

        // console.log(wr);
        // console.log(wr.playerName, wr.ppFantasyScoreProp);

      } // end of if(wr.playerName === player.WROne.name){
    } // end of if (wr.roleThisWeek === 1) {
  
    let wrProjectionsObject = new ProjectionsObject(
      wr.playerName,
      wr.position,
      wr.teamABV,
  
      +wr.appProjectedCarriesThisWeek,
        +wr.appProjectedrushYardsThisWeek,
        +wr.appProjectedrushTDsThisWeek,
        +wr.appProjectedreceptionsThisWeek,
        +wr.appProjectedrecYardsThisWeek,
        +wr.appProjectedrecTDsThisWeek,
        +wr.appProjectedrushFirstDownsThisWeek,
        +wr.appProjectedrecFirstDownsThisWeek,
        +wr.appProjectedRBTotalFirstDownsThisWeek,
  
        +wr.astroHalfWRProjection,
      +wr.astroFullWRProjection,

      wr.udReceptionsProp,
    wr.ppReceptionsProp,
    wr.udReceivingYardsProp,
    wr.ppReceivingYardsProp,

    wr.udFantasyScoreProp ,
wr.ppFantasyScoreProp,
  
      +wr.appHalfProjectedPoints,
      +wr.appFullProjectedPoints,
      +wr.appFullProjectedPoints,
    );
  
    // console.log(wrProjectionsObject)
  
    allWRProjectionsObjects.push(wrProjectionsObject);
  });
  
  allWRData.allWRProjectionsObjects = allWRProjectionsObjects;

})
  return allWRProjectionsObjects;
}

propsData();

// allWRObjectsArray.forEach(function (player) {
//   // console.log(player.appHalfProjectedPoints);

//   // console.log(player.appFullProjectedPoints)
  

//   // console.log(player.appFullProjectedPoints);

//   let wrProjectionsObject = new ProjectionsObject(
//     player.playerName,
//     player.position,
//     player.teamABV,

//     +player.appProjectedCarriesThisWeek,
//       +player.appProjectedrushYardsThisWeek,
//       +player.appProjectedrushTDsThisWeek,
//       +player.appProjectedreceptionsThisWeek,
//       +player.appProjectedrecYardsThisWeek,
//       +player.appProjectedrecTDsThisWeek,
//       +player.appProjectedrushFirstDownsThisWeek,
//       +player.appProjectedrecFirstDownsThisWeek,
//       +player.appProjectedRBTotalFirstDownsThisWeek,

//       +player.astroHalfWRProjection,
//     +player.astroFullWRProjection,

//     +player.appHalfProjectedPoints,
//     +player.appFullProjectedPoints,
//     +player.appFullProjectedPoints,
//   );

//   // console.log(wrProjectionsObject)

//   allWRProjectionsObjects.push(wrProjectionsObject);
// });

// allWRData.allWRProjectionsObjects = allWRProjectionsObjects;

// console.log(allWRProjectionsObjects);

///

// console.log(arrayOfProjectedPointsForMyDevUse);

// console.log(allTeamWRObjects.giants.WRThree);
// console.log(allTeamWRObjects.rams.WRTwo);

// console.log(
//   allTeamWRObjects.cowboys.WROne,

//   allTeamWRObjects.titans.WROne
// );
// console.log(allTeamWRObjects);

//////////////////////

module.exports.allWRData = allWRData;
module.exports.allWRProjectionsObjects = propsData;

//////////////////////////////
////////////////////////////////////
