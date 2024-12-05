const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');
const rbrawdata = require('../teamandpostionsrawdata/rbrawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');
// const allQBData = require('./qbValuesCalcs');
const allQBData = require('./qbValuesCalcs').allQBData;

const fetchTheRBData = require('./propsDataFetcher').rbPropsDataFromFetcher;

const { ThemeProvider } = require('styled-components');

const rbOnenumOfMatchingRoleWeeks = [];
const rbTwonumOfMatchingRoleWeeks = [];

//////////////////
const yahooSalaryGreaterThanThirtyFiveWithFourProjections = [];
const yahooSalaryGreaterThanThirtyFiveWithAppProjections = [];

const yahooSalaryThirtyOneToThirtyFiveWithFourProjections = [];
const yahooSalaryThirtyOneToThirtyFiveWithAppProjections = [];

const yahooSalaryTwentySixToThirtyWithFourProjections = [];
const yahooSalaryTwentySixToThirtyWithAppProjections = [];

const yahooSalaryTwentyOneToTwentyFiveWithFourProjections = [];
const yahooSalaryTwentyOneToTwentyFiveWithAppProjections = [];

const yahooSalarySixteenToTwentyWithFourProjections = [];
const yahooSalarySixteenToTwentyWithAppProjections = [];

const yahooSalaryTwelveToFifteenWithFourProjections = [];
const yahooSalaryTwelveToFifteenWithAppProjections = [];

const yahooSalaryTenToElevenWithFourProjections = [];
const yahooSalaryTenToElevenWithAppProjections = [];

////////////////

const fanduelSalaryGreaterThanNineThousandWithFourProjections = [];
const fanduelSalaryGreaterThanNineThousandWithAppProjections = [];

const fanduelSalaryEightThousandToEightThousandNineHundredNintyNineWithFourProjections =
  [];
const fanduelSalaryEightThousandToEightThousandNineHundredNintyNineWithAppProjections =
  [];

const fanduelSalarySevenThousandToSevenThousandNineHundredNintyNineWithFourProjections =
  [];
const fanduelSalarySevenThousandToSevenThousandNineHundredNintyNineWithAppProjections =
  [];

const fanduelSalarySixThousandToSixThousandNineHundredNintyNineWithFourProjections =
  [];
const fanduelSalarySixThousandToSixThousandNineHundredNintyNineWithAppProjections =
  [];

const fanduelSalaryFiveThousandToFiveThousandNineHundredNintyNineWithFourProjections =
  [];
const fanduelSalaryFiveThousandToFiveThousandNineHundredNintyNineWithAppProjections =
  [];

const fanduelSalaryFortyFiveHundredToFiveThousandWithFourProjections = [];
const fanduelSalaryFortyFiveHundredToFiveThousandWithAppProjections = [];

////////////////

const draftkingsSalaryGreaterThanNineThousandWithFourProjections = [];
const draftkingsSalaryGreaterThanNineThousandWithAppProjections = [];

const draftkingsSalaryEightThousandToEightThousandNineHundredNintyNineWithFourProjections =
  [];
const draftkingsSalaryEightThousandToEightThousandNineHundredNintyNineWithAppProjections =
  [];

const draftkingsSalarySevenThousandToSevenThousandNineHundredNintyNineWithFourProjections =
  [];
const draftkingsSalarySevenThousandToSevenThousandNineHundredNintyNineWithAppProjections =
  [];

const draftkingsSalarySixThousandToSixThousandNineHundredNintyNineWithFourProjections =
  [];
const draftkingsSalarySixThousandToSixThousandNineHundredNintyNineWithAppProjections =
  [];

const draftkingsSalaryFiveThousandToFiveThousandNineHundredNintyNineWithFourProjections =
  [];
const draftkingsSalaryFiveThousandToFiveThousandNineHundredNintyNineWithAppProjections =
  [];

const draftkingsSalaryFortyFiveHundredToFiveThousandWithFourProjections = [];
const draftkingsSalaryFortyFiveHundredToFiveThousandWithAppProjections = [];

const draftkingsSalaryLessThanFortyFiveHundredWithFourProjections = [];
const draftkingsSalaryLessThanFortyFiveHundredAppProjections = [];

///calculation percentage of weeks in the last x num of weeks up to 5 that a player has been in the role they will be in this week

allRBs.forEach(function (rb, i) {
  rbOneRoleThisWeek = rb.RBOne.roleThisWeek;
  rbTwoRoleThisWeek = rb.RBTwo.roleThisWeek;
  rbOneroleLastXNumOfWeeksUpToFiveArray = rb.RBOne.roleLastXNumOfWeeksUpToFive;
  rbTworoleLastXNumOfWeeksUpToFiveArray = rb.RBTwo.roleLastXNumOfWeeksUpToFive;

  let rbOnematchingWeeks = 0;
  let rbTwomatchingWeeks = 0;

  rbOneroleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === rbOneRoleThisWeek) {
      rbOnematchingWeeks = rbOnematchingWeeks + 1;
    }
  });
  rbOnenumOfMatchingRoleWeeks.push(rbOnematchingWeeks);
  rb.RBOne.rbOnenumOfMatchingRoleWeeks = rbOnematchingWeeks;

  rbTworoleLastXNumOfWeeksUpToFiveArray.forEach(function (role) {
    if (role === rbTwoRoleThisWeek) {
      rbTwomatchingWeeks = rbTwomatchingWeeks + 1;
    }
  });
  rbTwonumOfMatchingRoleWeeks.push(rbTwomatchingWeeks);
  rb.RBTwo.rbTwonumOfMatchingRoleWeeks = rbTwomatchingWeeks;
});

const rbOnePercentageOfMatchingRoleWeeks = [];
const rbTwoPercentageOfMatchingRoleWeeks = [];

allRBs.map(function (team, i) {
  let rbOnematchingWeeksPercentage =
    rbOnenumOfMatchingRoleWeeks[i] /
    team.RBOne.roleLastXNumOfWeeksUpToFive.length;
  team.RBOne.rbOnematchingWeeksPercentage = rbOnematchingWeeksPercentage;
  rbOnePercentageOfMatchingRoleWeeks.push(rbOnematchingWeeksPercentage);

  let rbTwomatchingWeeksPercentage =
    rbTwonumOfMatchingRoleWeeks[i] /
    team.RBTwo.roleLastXNumOfWeeksUpToFive.length;
  team.RBTwo.rbTwomatchingWeeksPercentage = rbTwomatchingWeeksPercentage;
  rbTwoPercentageOfMatchingRoleWeeks.push(rbTwomatchingWeeksPercentage);
});

//RB Objects Constructor Function

class RbObject {
  constructor(
    playerName,
    position,
    teamName,
    teamABV,
    vtt,
    byeWeek,
    homeOrAway,
    slate,
    teamProjectedPoints,
    teamPointsPerGameLastFiveWeeks,
    teamProjectedPointsThisWeekPercentage,

    hadByeInLastFiveWeeksIsTrue,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue,

    roleThisWeek,
    percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek,

    targetSharePercentageLastFiveWeeks,
    carriesPlusReceptionsPerGameLastFiveWeeks,
    projectedCarriesPlusReceptionsThisWeek,
    qbPassAttemptsPerGameLastFiveWeeks,
    projectedQBPassAttemptsThisWeek,

    yahooSalary,
    fanduelSalary,
    draftkingsSalary,
    percentOfSalaryCapYahoo,
    percentOfSalaryCapFanduel,
    percentOfSalaryCapDraftkings,

    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    opposingTeamRankInDefEPAAgainstTheRunLastFiveWeeks,

    halfGLSPAVG,
    fullGLSPAVG,
    halfTwentyFifthPercentProjectedPoints,
    halfFiftyithPercentProjectedPoints,
    halfSeventyFifthPercentProjectedPoints,
    PPRTwentyFifthPercentProjectedPoints,
    PPRFiftyithPercentProjectedPoints,
    PPRSeventyFifthPercentProjectedPoints,
    fourForFourHalfPPRProjectedPoints,
    fourForFourFullPPRProjectedPoints,
    halfFantasyPointsPerGameLastFiveWeeks
  ) {
    this.playerName = playerName;
    this.position = position;
    this.teamName = teamName;
    this.teamABV = teamABV;
    this.vtt = vtt;
    this.byeWeek = byeWeek;
    this.homeOrAway = homeOrAway;
    this.slate = slate;
    this.teamProjectedPoints = teamProjectedPoints;
    this.teamPointsPerGameLastFiveWeeks = teamPointsPerGameLastFiveWeeks;
    this.teamProjectedPointsThisWeekPercentage =
      teamProjectedPointsThisWeekPercentage;

    this.hadByeInLastFiveWeeksIsTrue = hadByeInLastFiveWeeksIsTrue;
    this.teamProjectedForAHalfOfNegetiveGameScriptIsTrue =
      teamProjectedForAHalfOfNegetiveGameScriptIsTrue;

    this.roleThisWeek = roleThisWeek;
    this.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek =
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek;

    this.targetSharePercentageLastFiveWeeks =
      targetSharePercentageLastFiveWeeks;
    this.carriesPlusReceptionsPerGameLastFiveWeeks =
      carriesPlusReceptionsPerGameLastFiveWeeks;
    this.projectedCarriesPlusReceptionsThisWeek =
      projectedCarriesPlusReceptionsThisWeek;
    this.qbPassAttemptsPerGameLastFiveWeeks =
      qbPassAttemptsPerGameLastFiveWeeks;
    this.projectedQBPassAttemptsThisWeek = projectedQBPassAttemptsThisWeek;

    this.yahooSalary = yahooSalary;
    this.fanduelSalary = fanduelSalary;
    this.draftkingsSalary = draftkingsSalary;
    this.percentOfSalaryCapYahoo = percentOfSalaryCapYahoo;
    this.percentOfSalaryCapFanduel = percentOfSalaryCapFanduel;
    this.percentOfSalaryCapDraftkings = percentOfSalaryCapDraftkings;

    this.opponentTeamName = opponentTeamName;
    this.opponentABV = opponentABV;
    this.opponentTeamProjectedPoints = opponentTeamProjectedPoints;
    this.opposingTeamRankInDefEPAAgainstTheRunLastFiveWeeks =
      opposingTeamRankInDefEPAAgainstTheRunLastFiveWeeks;

    this.halfGLSPAVG = halfGLSPAVG;
    this.fullGLSPAVG = fullGLSPAVG;
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
    this.halfFantasyPointsPerGameLastFiveWeeks =
      halfFantasyPointsPerGameLastFiveWeeks;
  }

  //add methods here

  //methods to make:
  //
  //                   already done
  //
  //  calculate and assign this.appProjectedPoints -- done
  //  calulate and assign appProjections per dollar on each site -- done
  //  calculate and assign 4for4 projections per percent of cap on each site -- done
  //  calculate and assign appProjections per percent of cap on each site.  -- done
  //  assign every rb a salary bucket for each site and make arrays for each bucket on each site that holds
  //   the full rb object of every rb in that bucket on each site       -- DONE
  //
  //                   still need to do
  //

  //  - assign each RB a number for how many players are in his salary bucket that are also in his 4for4   projections per percent of cap bucket. do the same for how many are in his salary bucket that are also in a higher/better 4for4 projections per percent of cap bucket
  //
  // - calculate projeted ownership: use 4for4 projections per dollar and QB projected ownership to assin a baseline projected ownership and then adjust that using the two numbers from the step above for each player on each site.

  calcAppProjectedPoints(
    carries,
    rushYards,
    rushTDs,
    receptions,
    recYards,
    recTDs,
    rushFirstDowns,
    recFirstDowns
  ) {
    //team projected points 12, 15-18, 20-24, 25-30, 30+
    //percentOfTeamHVTsLastFiveWeeks, below 30, 30-50, 50-60, 60-70, 70+
    //if teamProjectedForAHalfOfNegetiveGameScriptIsTrue = true then targetSharePercentageLastFiveWeeks

    //less than 3, 3-4, 5-6, 7-8, 8+

    /////////////////////////////////

    /////////////////////////////////
    //        new way      /////////
    ////////////////////////////////

    ///////////////////////////////////////////////////////////

    // what i'm going to need access to for new way:
    // - opportunities (carries + receptions) per game last five weeks -- ready
    // - projected opportunities this week -- ready
    // - team points per game last five weeks -- ready
    // - app projected team points this week (remember to use the average of app and vtt here) -- ready
    // - team HVT percentage last five weeks -- ready
    // - target share last five weeks -- ready
    //- QB pass attempts per game last five weeks -- ready
    // -QB projeted pass attempts this week -- ready
    //  -home or away, fav or dog usig my  app projected team points this week (remember to use the average of app and vtt here) -- ready

    let adjusterPercentage = 0;

    let roleAdjustor = +(
      this.projectedCarriesPlusReceptionsThisWeek /
      this.carriesPlusReceptionsPerGameLastFiveWeeks
    ).toFixed(3);

    let teamScoringAdjustor = +this.teamProjectedPointsThisWeekPercentage;

    if (teamScoringAdjustor > 1.2) {
      teamScoringAdjustor = 1.2;
    }

    if (teamScoringAdjustor < 0.8) {
      teamScoringAdjustor = 0.8;
    }

    let homeORAwayFavOrDog = 1;

    if (
      this.homeOrAway === 'Home' &&
      this.teamProjectedPoints > this.opponentTeamProjectedPoints
    ) {
      homeORAwayFavOrDog = 1.3;
    }

    if (
      this.homeOrAway === 'Away' &&
      this.teamProjectedPoints < this.opponentTeamProjectedPoints
    ) {
      homeORAwayFavOrDog = 1.1;
    }

    if (
      this.homeOrAway === 'Away' &&
      this.teamProjectedPoints > this.opponentTeamProjectedPoints
    ) {
      homeORAwayFavOrDog = 0.9;
    }

    if (
      this.homeOrAway === 'Home' &&
      this.teamProjectedPoints < this.opponentTeamProjectedPoints
    ) {
      homeORAwayFavOrDog = 0.75;
    }

    let fanastyPointsProjectedComparedToLastFiveWeeksAdjustor = +(
      this.fourForFourHalfPPRProjectedPoints /
      this.halfFantasyPointsPerGameLastFiveWeeks
    ).toFixed(3);

    ////////////////
    // console.log(this.name)

    let ranNum = (Math.random() * 1.5 - 0.75).toFixed(1);
    // console.log(ranNum);

    //weeks 1 and 2

    if (gameInfo.week.currentWeek < 3) {
      if (this.halfGLSPAVG) {
        this.appProjectedHalfPPRPoints = +(
          (this.fourForFourHalfPPRProjectedPoints +
            this.fourForFourHalfPPRProjectedPoints +
            this.fourForFourHalfPPRProjectedPoints +
            this.halfGLSPAVG) /
          4
        ).toFixed(1);
      } else {
        this.appProjectedHalfPPRPoints = this.fourForFourHalfPPRProjectedPoints;
        this.appProjectedHalfPPRPoints = +(
          +this.appProjectedHalfPPRPoints + +ranNum
        ).toFixed(1);
        // console.log(this.appProjectedHalfPPRPoints);
      }

      if (this.fullGLSPAVG) {
        this.appProjectedFullPPRPoints = +(
          (this.fourForFourFullPPRProjectedPoints +
            this.fourForFourFullPPRProjectedPoints +
            this.fourForFourFullPPRProjectedPoints +
            this.fullGLSPAVG) /
          4
        ).toFixed(1);
      } else {
        this.appProjectedFullPPRPoints = this.fourForFourFullPPRProjectedPoints;

        this.appProjectedFullPPRPoints = +(
          +this.appProjectedFullPPRPoints + +ranNum
        ).toFixed(1);
        // console.log(this.appProjectedFullPPRPoints);
      }
    }

    //weeks 3 and 4

    if (gameInfo.week.currentWeek > 2 && gameInfo.week.currentWeek < 5) {
      if (this.halfGLSPAVG) {
        this.appProjectedHalfPPRPoints = +(
          (this.fourForFourHalfPPRProjectedPoints +
            this.fourForFourHalfPPRProjectedPoints +
            this.halfGLSPAVG) /
          3
        ).toFixed(1);
      } else {
        this.appProjectedHalfPPRPoints = this.fourForFourHalfPPRProjectedPoints;

        this.appProjectedHalfPPRPoints = +(
          +this.appProjectedHalfPPRPoints + +ranNum
        ).toFixed(1);
      }

      if (this.fullGLSPAVG) {
        this.appProjectedFullPPRPoints = +(
          (this.fourForFourFullPPRProjectedPoints +
            this.fourForFourFullPPRProjectedPoints +
            this.fullGLSPAVG) /
          3
        ).toFixed(1);
      } else {
        this.appProjectedFullPPRPoints = this.fourForFourFullPPRProjectedPoints;
        this.appProjectedFullPPRPoints = +(
          +this.appProjectedFullPPRPoints + +ranNum
        ).toFixed(1);
      }
      // console.log(this.playerName, this.appProjectedFullPPRPoints)
    }

    //weeks 5-18

    if (gameInfo.week.currentWeek > 4) {
      // calculating old way proj

      let oldWayHalfProj = 0;
      let oldWayFullProj = 0;

      if (this.halfGLSPAVG) {
        oldWayHalfProj = +(
          (this.fourForFourHalfPPRProjectedPoints +
            this.fourForFourHalfPPRProjectedPoints +
            this.halfGLSPAVG) /
          3
        ).toFixed(1);
      } else {
        oldWayHalfProj = this.fourForFourHalfPPRProjectedPoints;

        oldWayHalfProj = +(+oldWayHalfProj + +ranNum).toFixed(1);
      }

      if (this.fullGLSPAVG) {
        oldWayFullProj = +(
          (this.fourForFourFullPPRProjectedPoints +
            this.fourForFourFullPPRProjectedPoints +
            this.fullGLSPAVG) /
          3
        ).toFixed(1);
      } else {
        oldWayFullProj = this.fourForFourFullPPRProjectedPoints;
        oldWayFullProj = +(+oldWayFullProj + +ranNum).toFixed(1);
      }

      if (
        this.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek >
        0.49
      ) {
        if (this.halfGLSPAVG) {
          if (roleAdjustor) {
            this.baselineAppHalfProjection = +(+this.halfGLSPAVG).toFixed(2);
            this.baselineAppPPRProjection = +(+this.fullGLSPAVG).toFixed(2);

            this.appProjectedHalfPPRPoints = +(
              (this.baselineAppHalfProjection +
                this.baselineAppHalfProjection +
                this.fourForFourHalfPPRProjectedPoints) /
              3
            ).toFixed(1);
            this.appProjectedFullPPRPoints = +(
              (this.baselineAppPPRProjection +
                this.baselineAppPPRProjection +
                this.fourForFourFullPPRProjectedPoints) /
              3
            ).toFixed(1);

            // console.log(
            //   this.playerName,

            //   +this.appProjectedFullPPRPoints,

            // );

            // console.log(
            //   this.playerName,
            //   this.fourForFourFullPPRProjectedPoints

            // +this.appProjectedFullPPRPoints,
            // fanastyPointsProjectedComparedToLastFiveWeeksAdjustor
            // homeORAwayFavOrDog
            // teamScoringAdjustor,
            // this.percentOfTeamHVTsLastFiveWeeks,
            // this.FPOEPerGameLastFiveWeeks
            // );
          } else {
            // console.log(this.playerName)

            this.appProjectedHalfPPRPoints =
              this.fourForFourHalfPPRProjectedPoints;
            this.appProjectedHalfPPRPoints = +(
              +this.appProjectedHalfPPRPoints + +ranNum
            ).toFixed(1);
            this.appProjectedFullPPRPoints =
              this.fourForFourFullPPRProjectedPoints;
            this.appProjectedFullPPRPoints = +(
              +this.appProjectedFullPPRPoints + +ranNum
            ).toFixed(1);
          }
        } else {
          // console.log(this.playerName);
          this.appProjectedHalfPPRPoints =
            this.fourForFourHalfPPRProjectedPoints;
          this.appProjectedHalfPPRPoints = +(
            +this.appProjectedHalfPPRPoints + +ranNum
          ).toFixed(1);
          this.appProjectedFullPPRPoints =
            this.fourForFourFullPPRProjectedPoints;
          this.appProjectedFullPPRPoints = +(
            +this.appProjectedFullPPRPoints + +ranNum
          ).toFixed(1);
        }
      } else {
        if (this.halfGLSPAVG) {
          if (roleAdjustor) {
            this.baselineAppHalfProjection = +(
              +this.halfGLSPAVG * +roleAdjustor
            ).toFixed(1);
            this.baselineAppPPRProjection = +(
              +this.fullGLSPAVG * +roleAdjustor
            ).toFixed(1);

            this.testHalfProjection = +(
              (this.baselineAppHalfProjection +
                this.baselineAppHalfProjection +
                this.fourForFourHalfPPRProjectedPoints) /
              3
            ).toFixed(1);

            this.testPPRProjection = +(
              (this.baselineAppPPRProjection +
                this.baselineAppPPRProjection +
                this.fourForFourFullPPRProjectedPoints) /
              3
            ).toFixed(1);

            this.appProjectedHalfPPRPoints = this.testHalfProjection;
            this.appProjectedFullPPRPoints = this.testPPRProjection;

            // console.log(this.playerName, this.fourForFourFullPPRProjectedPoints);
          } else {
            // console.log(this.playerName);

            this.appProjectedHalfPPRPoints =
              this.fourForFourHalfPPRProjectedPoints;
            this.appProjectedHalfPPRPoints = +(
              +this.appProjectedHalfPPRPoints + +ranNum
            ).toFixed(1);
            this.appProjectedFullPPRPoints =
              this.fourForFourFullPPRProjectedPoints;
            this.appProjectedFullPPRPoints = +(
              +this.appProjectedFullPPRPoints + +ranNum
            ).toFixed(1);
          }
        } else {
          // console.log(this.playerName);

          this.appProjectedHalfPPRPoints =
            this.fourForFourHalfPPRProjectedPoints;
          this.appProjectedHalfPPRPoints = +(
            +this.appProjectedHalfPPRPoints + +ranNum
          ).toFixed(1);
          this.appProjectedFullPPRPoints =
            this.fourForFourFullPPRProjectedPoints;
          this.appProjectedFullPPRPoints = +(
            +this.appProjectedFullPPRPoints + +ranNum
          ).toFixed(1);
        }
      }
      this.appProjectedHalfPPRPoints = +(
        (+this.appProjectedHalfPPRPoints + +oldWayHalfProj) /
        2
      ).toFixed(1);
      this.appProjectedFullPPRPoints = +(
        (+this.appProjectedFullPPRPoints + +oldWayFullProj) /
        2
      ).toFixed(1);

      // console.log(this)
      // console.log(recFirstDowns)

      this.prjCarries = carries;
      this.prjRushYards = rushYards;
      this.prjRushTDs = rushTDs;
      this.prjReceptions = receptions;
      this.prjRecYards = recYards;
      this.prjRecTDs = recTDs;
      this.prjRushFirstDowns = rushFirstDowns;
      this.prjRecFirstDowns = recFirstDowns;

      // setting baselines

      this.appProjectedCarriesThisWeek = carries;
      this.appProjectedrushYardsThisWeek = rushYards;
      this.appProjectedrushTDsThisWeek = rushTDs;
      this.appProjectedreceptionsThisWeek = receptions;
      this.appProjectedrecYardsThisWeek = recYards;
      this.appProjectedrecTDsThisWeek = recTDs;
      this.appProjectedrushFirstDownsThisWeek = rushFirstDowns;
      this.appProjectedrecFirstDownsThisWeek = recFirstDowns;

      // console.log(this.playerName, this.fourForFourHalfPPRProjectedPoints, this.appProjectedHalfPPRPoints)

      let halfPercentDifference = +(
        this.appProjectedHalfPPRPoints / this.fourForFourHalfPPRProjectedPoints
      ).toFixed(2);
      let fullPercentDifference = +(
        this.appProjectedFullPPRPoints / this.fourForFourFullPPRProjectedPoints
      ).toFixed(2);
      let differenceToUse = +(
        (halfPercentDifference + fullPercentDifference) /
        2
      ).toFixed(2);
      let carriesDifferenceToUse = differenceToUse;

      if (differenceToUse < 0.92) {
        differenceToUse = 0.92;
      }

      // console.log(this.playerName, halfPercentDifference)
      // console.log(this.playerName, fullPercentDifference)
      // console.log(this.playerName, halfPercentDifference, fullPercentDifference, differenceToUse)

      this.appProjectedCarriesThisWeek = +(
        +this.appProjectedCarriesThisWeek * +differenceToUse
      ).toFixed(1);
      this.appProjectedrushYardsThisWeek = +(
        +this.appProjectedrushYardsThisWeek * +differenceToUse
      ).toFixed(1);
      this.appProjectedrushTDsThisWeek = +(
        +this.appProjectedrushTDsThisWeek * +differenceToUse +
        0.085
      ).toFixed(1);
      this.appProjectedreceptionsThisWeek = +(
        +this.appProjectedreceptionsThisWeek * +differenceToUse
      ).toFixed(1);
      this.appProjectedrecYardsThisWeek = +(
        +this.appProjectedrecYardsThisWeek * +differenceToUse
      ).toFixed(1);
      this.appProjectedrecTDsThisWeek = +(
        +this.appProjectedrecTDsThisWeek * +differenceToUse +
        0.06
      ).toFixed(1);
      this.appProjectedrushFirstDownsThisWeek = +(
        +this.appProjectedrushFirstDownsThisWeek * +differenceToUse
      ).toFixed(1);
      this.appProjectedrecFirstDownsThisWeek = +(
        +this.appProjectedrecFirstDownsThisWeek * +differenceToUse
      ).toFixed(1);
      this.appProjectedRBTotalFirstDownsThisWeek = +(
        this.appProjectedrushFirstDownsThisWeek +
        this.appProjectedrecFirstDownsThisWeek
      ).toFixed(1);

      this.astroHalfRBProjection = +(
        +this.appProjectedrushYardsThisWeek * 0.1 +
        +(+this.appProjectedrushTDsThisWeek * 6) +
        +(+this.appProjectedrecYardsThisWeek * 0.1) +
        +(+this.appProjectedrecTDsThisWeek * 6) +
        +this.appProjectedreceptionsThisWeek * 0.5
      ).toFixed(1);

      this.astroFullRBProjection = +(
        +this.appProjectedrushYardsThisWeek * 0.1 +
        +(+this.appProjectedrushTDsThisWeek * 6) +
        +(+this.appProjectedrecYardsThisWeek * 0.1) +
        +(+this.appProjectedrecTDsThisWeek * 6) +
        +this.appProjectedreceptionsThisWeek * 1
      ).toFixed(1);

      if (this.astroHalfRBProjection && this.astroFullRBProjection) {
        this.appProjectedHalfPPRPoints = +(
          (+this.appProjectedHalfPPRPoints + +this.astroHalfRBProjection) /
          2
        ).toFixed(1);
        this.appProjectedFullPPRPoints = +(
          (+this.appProjectedFullPPRPoints + +this.astroFullRBProjection) /
          2
        ).toFixed(1);
      }

      // console.log(this.playerName, this.fourForFourHalfPPRProjectedPoints, this.appProjectedHalfPPRPoints, this.astroHalfRBProjection)
    }

    /////////////////////////////////////////////////////////////////////

    ////////////////////////
    //     old way  /////
    /////////////////////////

    /////////////////////////////

    //   let tempValueForProjection = 0;

    //   if (this.teamProjectedPoints > 30) {
    //     tempValueForProjection += 7;
    //   }

    //   if (this.teamProjectedPoints > 24 && this.teamProjectedPoints < 31) {
    //     tempValueForProjection += 5;
    //   }

    //   if (this.teamProjectedPoints > 19 && this.teamProjectedPoints < 25) {
    //     tempValueForProjection += 4;
    //   }

    //   if (this.teamProjectedPoints > 14 && this.teamProjectedPoints < 20) {
    //     tempValueForProjection += 3;
    //   }

    //   if (this.teamProjectedPoints < 15) {
    //     tempValueForProjection += 2;
    //   }
    //   //

    //   if (this.percentOfTeamHVTsLastFiveWeeks > 0.7) {
    //     tempValueForProjection += 6;
    //   }

    //   if (
    //     this.percentOfTeamHVTsLastFiveWeeks > 0.6 &&
    //     this.percentOfTeamHVTsLastFiveWeeks < 0.71
    //   ) {
    //     tempValueForProjection += 4;
    //   }

    //   if (
    //     this.percentOfTeamHVTsLastFiveWeeks > 0.5 &&
    //     this.percentOfTeamHVTsLastFiveWeeks < 0.61
    //   ) {
    //     tempValueForProjection += 3;
    //   }

    //   if (
    //     this.percentOfTeamHVTsLastFiveWeeks > 0.3 &&
    //     this.percentOfTeamHVTsLastFiveWeeks < 0.51
    //   ) {
    //     tempValueForProjection += 2;
    //   }

    //   if (this.percentOfTeamHVTsLastFiveWeeks < 0.31) {
    //     tempValueForProjection += 0;
    //   }

    //   //
    //   //less than 3, 3-4, 5-6, 7-8, 8+
    //   let projecedPercentile = 0;

    //   if (tempValueForProjection > 8) {
    //     projecedPercentile = 75;
    //     if (this.FPOEPerGameLastFiveWeeks < -2) {
    //       projecedPercentile = 62.5;
    //     }
    //   }

    //   if (tempValueForProjection > 0.69 && tempValueForProjection < 9) {
    //     projecedPercentile = 62.5;
    //     if (this.FPOEPerGameLastFiveWeeks > 2) {
    //       projecedPercentile = 75;
    //     }
    //     if (this.FPOEPerGameLastFiveWeeks < -2) {
    //       projecedPercentile = 50;
    //     }
    //   }

    //   if (tempValueForProjection > 0.39 && tempValueForProjection < 7) {
    //     projecedPercentile = 50;
    //     if (this.FPOEPerGameLastFiveWeeks > 2) {
    //       projecedPercentile = 62.5;
    //     }
    //     if (this.FPOEPerGameLastFiveWeeks < -2) {
    //       projecedPercentile = 32.5;
    //     }
    //   }

    //   if (tempValueForProjection > 0.29 && tempValueForProjection < 5) {
    //     projecedPercentile = 32.5;
    //     if (this.FPOEPerGameLastFiveWeeks > 2) {
    //       projecedPercentile = 50;
    //     }
    //     if (this.FPOEPerGameLastFiveWeeks < -2) {
    //       projecedPercentile = 25;
    //     }
    //   }

    //   if (tempValueForProjection < 3) {
    //     projecedPercentile = 25;
    //     if (this.FPOEPerGameLastFiveWeeks > 2) {
    //       projecedPercentile = 32.5;
    //     }
    //   }
    //   this.projecedPercentile = projecedPercentile;

    //   let currentWeek = gameInfo.week.currentWeek;

    //   if (currentWeek > 5) {
    //     if (
    //       this.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek >
    //       0.49
    //     ) {
    //       if (projecedPercentile === 25) {
    //         this.appProjectedHalfPPRPoints =
    //           +this.halfTwentyFifthPercentProjectedPoints.toFixed(2);
    //         this.appProjectedFullPPRPoints =
    //           +this.PPRTwentyFifthPercentProjectedPoints.toFixed(2);
    //       }

    //       if (projecedPercentile === 32.5) {
    //         this.appProjectedHalfPPRPoints = +(
    //           (this.halfTwentyFifthPercentProjectedPoints +
    //             this.halfFiftyithPercentProjectedPoints) /
    //           2
    //         ).toFixed(2);
    //         this.appProjectedFullPPRPoints = +(
    //           (this.PPRTwentyFifthPercentProjectedPoints +
    //             this.PPRFiftyithPercentProjectedPoints) /
    //           2
    //         ).toFixed(2);
    //       }

    //       if (projecedPercentile === 50) {
    //         this.appProjectedHalfPPRPoints =
    //           +this.halfFiftyithPercentProjectedPoints.toFixed(2);
    //         this.appProjectedFullPPRPoints =
    //           +this.PPRFiftyithPercentProjectedPoints.toFixed(2);
    //       }

    //       if (projecedPercentile === 62.5) {
    //         this.appProjectedHalfPPRPoints = +(
    //           (this.halfFiftyithPercentProjectedPoints +
    //             this.halfSeventyFifthPercentProjectedPoints) /
    //           2
    //         ).toFixed(2);
    //         this.appProjectedFullPPRPoints = +(
    //           (this.PPRFiftyithPercentProjectedPoints +
    //             this.PPRSeventyFifthPercentProjectedPoints) /
    //           2
    //         ).toFixed(2);
    //       }

    //       if (projecedPercentile === 75) {
    //         this.appProjectedHalfPPRPoints =
    //           +this.halfSeventyFifthPercentProjectedPoints.toFixed(2);
    //         this.appProjectedFullPPRPoints =
    //           +this.PPRSeventyFifthPercentProjectedPoints.toFixed(2);
    //       }
    //     } else {
    //       //use team projected points and HVT percentage last five weeks to get an adjustment factor on a scale from -20% to +20% and multiply the players 4for4 projection for the week by this adjustment factor to get appProjectedPoints for players whose percentage of matching roles week is less than 50% here
    //       this.notEnoughMatchingWeeksToRoleThisWeek = true;

    //       //less than 3, 3-4, 5-6, 7-8, 8+
    //       let adjustmentPercent = 0;

    //       if (tempValueForProjection > 8) {
    //         adjustmentPercent = 0.2;
    //       }

    //       if (tempValueForProjection > 0.69 && tempValueForProjection < 9) {
    //         adjustmentPercent = 0.1;
    //       }

    //       if (tempValueForProjection > 0.39 && tempValueForProjection < 7) {
    //         adjustmentPercent = 0.05;
    //       }

    //       if (tempValueForProjection > 0.29 && tempValueForProjection < 5) {
    //         adjustmentPercent = -0.1;
    //       }

    //       if (tempValueForProjection < 3) {
    //         adjustmentPercent = -0.2;
    //       }
    //       this.adjustmentPercent = adjustmentPercent;

    //       let halfAdjustmentValue = +(
    //         this.fourForFourHalfPPRProjectedPoints * adjustmentPercent
    //       ).toFixed(2);

    //       this.appProjectedHalfPPRPoints = +(
    //         this.fourForFourHalfPPRProjectedPoints + halfAdjustmentValue
    //       ).toFixed(2);

    //       let fullAdjustmentValue = +(
    //         this.fourForFourFullPPRProjectedPoints * adjustmentPercent
    //       ).toFixed(2);

    //       this.appProjectedFullPPRPoints = +(
    //         this.fourForFourFullPPRProjectedPoints + fullAdjustmentValue
    //       ).toFixed(2);
    //     }
    //   }

    //   if (currentWeek < 5) {
    //     let adjustmentPercent = 0;

    //     if (this.vtt > 25) {
    //       adjustmentPercent = 0.2;
    //     }

    //     if (this.vtt > 19.9 && this.vtt < 25) {
    //       adjustmentPercent = 0.1;
    //     }

    //     if (this.vtt > 17.4 && this.vtt < 20) {
    //       adjustmentPercent = 0.05;
    //     }

    //     if (this.vtt > 14.9 && this.vtt < 17.5) {
    //       adjustmentPercent = -0.1;
    //     }

    //     if (this.vtt < 15) {
    //       adjustmentPercent = -0.2;
    //     }
    //     this.adjustmentPercent = adjustmentPercent;

    //     let halfAdjustmentValue = +(
    //       this.fourForFourHalfPPRProjectedPoints * adjustmentPercent
    //     ).toFixed(2);

    //     this.appProjectedHalfPPRPoints = +(
    //       this.fourForFourHalfPPRProjectedPoints + halfAdjustmentValue
    //     ).toFixed(2);

    //     let fullAdjustmentValue = +(
    //       this.fourForFourFullPPRProjectedPoints * adjustmentPercent
    //     ).toFixed(2);

    //     this.appProjectedFullPPRPoints = +(
    //       this.fourForFourFullPPRProjectedPoints + fullAdjustmentValue
    //     ).toFixed(2);
    //   }
    // }
  }

  calcAppProjectedpointsPerDollarOnAllSites() {
    this.yahooAppProjectedPointsPerDollar = +(
      this.appProjectedHalfPPRPoints / this.yahooSalary
    ).toFixed(2);

    this.fanduelAppProjectedPointsPerThousandDollars = +(
      this.appProjectedHalfPPRPoints /
      (this.fanduelSalary / 1000)
    ).toFixed(2);

    this.draftkingsAppProjectedPointsPerThousandDollars = +(
      this.appProjectedFullPPRPoints /
      (this.draftkingsSalary / 1000)
    ).toFixed(2);
  }

  calcFourForFourProjectedpointsPerDollarOnAllSites() {
    this.yahooFourForFourProjectedPointsPerDollar = +(
      this.fourForFourHalfPPRProjectedPoints / this.yahooSalary
    ).toFixed(2);

    this.fanduelFourForFourProjectedPointsPerThousandDollars = +(
      this.fourForFourHalfPPRProjectedPoints /
      (this.fanduelSalary / 1000)
    ).toFixed(2);

    this.draftkingsFourForFourProjectedPointsPerThousandDollars = +(
      this.fourForFourFullPPRProjectedPoints /
      (this.draftkingsSalary / 1000)
    ).toFixed(2);
  }

  calcFourForFourProjectedPointsPerPercentOfSiteSalaryCap() {
    this.yahooFourForFourProjectedPointsPerPercentOfSiteSalaryCap = +(
      this.fourForFourHalfPPRProjectedPoints / this.percentOfSalaryCapYahoo
    ).toFixed(2);

    this.fanduelFourForFourProjectedPointsPerPercentOfSiteSalaryCap = +(
      this.fourForFourHalfPPRProjectedPoints / this.percentOfSalaryCapFanduel
    ).toFixed(2);

    this.draftkingsFourForFourProjectedPointsPerPercentOfSiteSalaryCap = +(
      this.fourForFourHalfPPRProjectedPoints / this.percentOfSalaryCapDraftkings
    ).toFixed(2);
  }

  calcAppProjectionsPerPercentOfSiteSalaryCap() {
    this.yahooAppProjectedPointsPerPercentOfSiteSalaryCap = +(
      this.appProjectedHalfPPRPoints / this.percentOfSalaryCapYahoo
    ).toFixed(2);

    this.fanduelAppProjectedPointsPerPercentOfSiteSalaryCap = +(
      this.appProjectedHalfPPRPoints / this.percentOfSalaryCapFanduel
    ).toFixed(2);

    this.draftkingsAppProjectedPointsPerPercentOfSiteSalaryCap = +(
      this.appProjectedFullPPRPoints / this.percentOfSalaryCapDraftkings
    ).toFixed(2);
  }

  assignPlayersToSalaryBucketsOnEachSite() {
    //  assign every rb a price bucket for each site and make arrays for each bucket on each site that holds
    //the full rb object of every rb in that bucket on each site

    //do the calculating and assinging of projected ownership below where the constructor functions are called in the interation over the allRBObjectsArray object and creating the allRBObjects array. not in the actual constructor function itself!!!!!!!!

    //do the calculating and assinging of projected ownership below where the constructor functions are called in the interation over the allRBObjectsArray object and creating the allRBObjects array. not in the actual constructor function itself!!!!!!!!

    //do the calculating and assinging of projected ownership below where the constructor functions are called in the interation over the allRBObjectsArray object and creating the allRBObjects array. not in the actual constructor function itself!!!!!!!!

    //do the calculating and assinging of projected ownership below where the constructor functions are called in the interation over the allRBObjectsArray object and creating the allRBObjects array. not in the actual constructor function itself!!!!!!!!

    //do the calculating and assinging of projected ownership below where the constructor functions are called in the interation over the allRBObjectsArray object and creating the allRBObjects array. not in the actual constructor function itself!!!!!!!!

    //do the calculating and assinging of projected ownership below where the constructor functions are called in the interation over the allRBObjectsArray object and creating the allRBObjects array. not in the actual constructor function itself!!!!!!!!

    let yahooSalary = this.yahooSalary;
    let fanduelSalary = this.fanduelSalary;
    let draftkingsSalary = this.draftkingsSalary;

    // assigning yahoo salary buckets

    if (yahooSalary > 35) {
      this.yahooSalaryBucket = 'greater than 35';
      yahooSalaryGreaterThanThirtyFiveWithFourProjections.push(
        this.yahooFourForFourProjectedPointsPerDollar
      );
      yahooSalaryGreaterThanThirtyFiveWithAppProjections.push(
        this.yahooAppProjectedPointsPerDollar
      );
    }
    if (yahooSalary > 30 && yahooSalary < 36) {
      this.yahooSalaryBucket = '31 to 35';
      yahooSalaryThirtyOneToThirtyFiveWithFourProjections.push(
        this.yahooFourForFourProjectedPointsPerDollar
      );
      yahooSalaryThirtyOneToThirtyFiveWithAppProjections.push(
        this.yahooAppProjectedPointsPerDollar
      );
    }
    if (yahooSalary > 25 && yahooSalary < 31) {
      this.yahooSalaryBucket = '26 to 30';
      yahooSalaryTwentySixToThirtyWithFourProjections.push(
        this.yahooFourForFourProjectedPointsPerDollar
      );
      yahooSalaryTwentySixToThirtyWithAppProjections.push(
        this.yahooAppProjectedPointsPerDollar
      );
    }
    if (yahooSalary > 20 && yahooSalary < 26) {
      this.yahooSalaryBucket = '21 to 25';
      yahooSalaryTwentyOneToTwentyFiveWithFourProjections.push(
        this.yahooFourForFourProjectedPointsPerDollar
      );
      yahooSalaryTwentyOneToTwentyFiveWithAppProjections.push(
        this.yahooAppProjectedPointsPerDollar
      );
    }
    if (yahooSalary > 15 && yahooSalary < 21) {
      this.yahooSalaryBucket = '16 to 20';
      yahooSalarySixteenToTwentyWithFourProjections.push(
        this.yahooFourForFourProjectedPointsPerDollar
      );
      yahooSalarySixteenToTwentyWithAppProjections.push(
        this.yahooAppProjectedPointsPerDollar
      );
    }
    if (yahooSalary > 11 && yahooSalary < 16) {
      this.yahooSalaryBucket = '12 to 15';
      yahooSalaryTwelveToFifteenWithFourProjections.push(
        this.yahooFourForFourProjectedPointsPerDollar
      );
      yahooSalaryTwelveToFifteenWithAppProjections.push(
        this.yahooAppProjectedPointsPerDollar
      );
    }
    if (yahooSalary > 9 && yahooSalary < 12) {
      this.yahooSalaryBucket = '10 to 11';
      yahooSalaryTenToElevenWithFourProjections.push(
        this.yahooFourForFourProjectedPointsPerDollar
      );
      yahooSalaryTenToElevenWithAppProjections.push(
        this.yahooAppProjectedPointsPerDollar
      );
    }

    // assigning fanduel salary buckets

    if (fanduelSalary > 8999) {
      this.fanduelSalaryBucket = 'greater than 9000';
      fanduelSalaryGreaterThanNineThousandWithFourProjections.push(
        this.fanduelFourForFourProjectedPointsPerDollar
      );
      fanduelSalaryGreaterThanNineThousandWithAppProjections.push(
        this.fanduelAppProjectedPointsPerDollar
      );
    }

    if (fanduelSalary > 7999 && fanduelSalary < 9000) {
      this.fanduelSalaryBucket = '8000 to 8999';
      fanduelSalaryEightThousandToEightThousandNineHundredNintyNineWithFourProjections.push(
        this.fanduelFourForFourProjectedPointsPerDollar
      );
      fanduelSalaryEightThousandToEightThousandNineHundredNintyNineWithAppProjections.push(
        this.fanduelAppProjectedPointsPerDollar
      );
    }

    if (fanduelSalary > 6999 && fanduelSalary < 8000) {
      this.fanduelSalaryBucket = '7000 to 7999';
      fanduelSalarySevenThousandToSevenThousandNineHundredNintyNineWithFourProjections.push(
        this.fanduelFourForFourProjectedPointsPerDollar
      );
      fanduelSalarySevenThousandToSevenThousandNineHundredNintyNineWithAppProjections.push(
        this.fanduelAppProjectedPointsPerDollar
      );
    }

    if (fanduelSalary > 5999 && fanduelSalary < 7000) {
      this.fanduelSalaryBucket = '6000 to 6999';
      fanduelSalarySixThousandToSixThousandNineHundredNintyNineWithFourProjections.push(
        this.fanduelFourForFourProjectedPointsPerDollar
      );
      fanduelSalarySixThousandToSixThousandNineHundredNintyNineWithAppProjections.push(
        this.fanduelAppProjectedPointsPerDollar
      );
    }

    if (fanduelSalary > 5000 && fanduelSalary < 6000) {
      this.fanduelSalaryBucket = '5001 to 5999';
      fanduelSalaryFiveThousandToFiveThousandNineHundredNintyNineWithFourProjections.push(
        this.fanduelFourForFourProjectedPointsPerDollar
      );
      fanduelSalaryFiveThousandToFiveThousandNineHundredNintyNineWithAppProjections.push(
        this.fanduelAppProjectedPointsPerDollar
      );
    }
    if (fanduelSalary > 4499 && fanduelSalary < 5001) {
      this.fanduelSalaryBucket = '4500 to 5000';
      fanduelSalaryFortyFiveHundredToFiveThousandWithFourProjections.push(
        this.fanduelFourForFourProjectedPointsPerDollar
      );
      fanduelSalaryFortyFiveHundredToFiveThousandWithAppProjections.push(
        this.fanduelAppProjectedPointsPerDollar
      );
    }

    ///// assinging draftkings salary buckets

    if (draftkingsSalary > 8999) {
      this.draftkingsSalaryBucket = 'greater than 9000';
      draftkingsSalaryGreaterThanNineThousandWithFourProjections.push(
        this.draftkingsFourForFourProjectedPointsPerDollar
      );
      draftkingsSalaryGreaterThanNineThousandWithAppProjections.push(
        this.draftkingsAppProjectedPointsPerDollar
      );
    }

    if (draftkingsSalary > 7999 && draftkingsSalary < 9000) {
      this.draftkingsSalaryBucket = '8000 to 8999';
      draftkingsSalaryEightThousandToEightThousandNineHundredNintyNineWithFourProjections.push(
        this.draftkingsFourForFourProjectedPointsPerDollar
      );
      draftkingsSalaryEightThousandToEightThousandNineHundredNintyNineWithAppProjections.push(
        this.draftkingsAppProjectedPointsPerDollar
      );
    }

    if (draftkingsSalary > 6999 && draftkingsSalary < 8000) {
      this.draftkingsSalaryBucket = '7000 to 7999';
      draftkingsSalarySevenThousandToSevenThousandNineHundredNintyNineWithFourProjections.push(
        this.draftkingsFourForFourProjectedPointsPerDollar
      );
      draftkingsSalarySevenThousandToSevenThousandNineHundredNintyNineWithAppProjections.push(
        this.draftkingsAppProjectedPointsPerDollar
      );
    }

    if (draftkingsSalary > 5999 && draftkingsSalary < 7000) {
      this.draftkingsSalaryBucket = '6000 to 6999';
      draftkingsSalarySixThousandToSixThousandNineHundredNintyNineWithFourProjections.push(
        this.draftkingsFourForFourProjectedPointsPerDollar
      );
      draftkingsSalarySixThousandToSixThousandNineHundredNintyNineWithAppProjections.push(
        this.draftkingsAppProjectedPointsPerDollar
      );
    }

    if (draftkingsSalary > 5000 && draftkingsSalary < 6000) {
      this.draftkingsSalaryBucket = '5001 to 5999';
      draftkingsSalaryFiveThousandToFiveThousandNineHundredNintyNineWithFourProjections.push(
        this.draftkingsFourForFourProjectedPointsPerDollar
      );
      draftkingsSalaryFiveThousandToFiveThousandNineHundredNintyNineWithAppProjections.push(
        this.draftkingsAppProjectedPointsPerDollar
      );
    }
    if (draftkingsSalary > 4499 && draftkingsSalary < 5001) {
      this.draftkingsSalaryBucket = '4500 to 5000';
      draftkingsSalaryFortyFiveHundredToFiveThousandWithFourProjections.push(
        this.draftkingsFourForFourProjectedPointsPerDollar
      );
      draftkingsSalaryFortyFiveHundredToFiveThousandWithAppProjections.push(
        this.draftkingsAppProjectedPointsPerDollar
      );
    }
    if (draftkingsSalary < 4500) {
      this.draftkingsSalaryBucket = 'Less Than 4500';
      draftkingsSalaryLessThanFortyFiveHundredWithFourProjections.push(
        this.draftkingsFourForFourProjectedPointsPerDollar
      );
      draftkingsSalaryLessThanFortyFiveHundredAppProjections.push(
        this.draftkingsAppProjectedPointsPerDollar
      );
    }
  }

  setTeamRBThreeProjections(halfProj, fullProj) {
    // console.log(halfProj, fullProj)
    this.appProjectedHalfPPRPoints = halfProj;
    this.appProjectedFullPPRPoints = fullProj;
  }
}

//constructing all RB objects

const allTeamRBObjects = {
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
const allRBObjectsArray = [];
const allRBsMap = new Map();

async function propsData() {
  const propsData = await fetchTheRBData();
  // console.log(propsData)
  // console.log(allRBObjectsArray)
  propsData.forEach(function (player) {
    allRBObjectsArray.forEach(function (rb) {
      // console.log(rb)
      // console.log(rb.playerName)

      //
      //              RBOne
      //

      // console.log(player.RBOne)

      if (rb.roleThisWeek === 1) {
        // console.log(rb)
        if (player.RBOne.name === rb.playerName) {
          // console.log(player.RBOne)
          // console.log(rb)

          rb.udCarriesProp = {
            prop: player.RBOne.udCarriesProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppCarriesProp = {
            prop: player.RBOne.ppCarriesProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udRushYardsProp = {
            prop: player.RBOne.udRushYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppRushYardsProp = {
            prop: player.RBOne.ppRushYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udRushTDsProp = {
            prop: player.RBOne.udRushTDsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppRushTDsProp = {
            prop: player.RBOne.ppRushTDsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udReceptionsProp = {
            prop: player.RBOne.udReceptionsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppReceptionsProp = {
            prop: player.RBOne.ppReceptionsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udReceivingYardsProp = {
            prop: player.RBOne.udRecYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppReceivingYardsProp = {
            prop: player.RBOne.ppRecYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udRushPlusRecYardsProp = {
            prop: player.RBOne.udRushPlusRecYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppRushPlusRecYardsProp = {
            prop: player.RBOne.ppRushPlusRecYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udFantasyScoreProp = {
            prop: player.RBOne.udFantasyScoreProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppFantasyScoreProp = {
            prop: player.RBOne.ppFantasyScoreProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };

          // console.log(rb.ppRushPlusRecYardsProp)

          //
          //
          //                                            Carries
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          if (
            rb.udCarriesProp.prop - rb.prjCarries > 1.75 &&
            rb.udCarriesProp.prop - rb.appProjectedCarriesThisWeek > 1.75
          ) {
            rb.udCarriesProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (
            rb.ppCarriesProp.prop - rb.prjCarries > 1.75 &&
            rb.ppCarriesProp.prop - rb.appProjectedCarriesThisWeek > 1.75
          ) {
            rb.ppCarriesProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          //                                            test

          if (rb.udCarriesProp.prop - rb.appProjectedCarriesThisWeek > 2.5) {
            rb.udCarriesProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (rb.ppCarriesProp.prop - rb.appProjectedCarriesThisWeek > 2.5) {
            rb.ppCarriesProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          // high confidence

          if (
            rb.udCarriesProp.prop - rb.prjCarries > 3 &&
            rb.udCarriesProp.prop - rb.appProjectedCarriesThisWeek > 3
          ) {
            rb.udCarriesProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (
            rb.ppCarriesProp.prop - rb.prjCarries > 3 &&
            rb.ppCarriesProp.prop - rb.appProjectedCarriesThisWeek > 3
          ) {
            rb.ppCarriesProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          if (
            rb.prjCarries - rb.udCarriesProp.prop > 2.5 &&
            rb.appProjectedCarriesThisWeek - rb.udCarriesProp.prop > 2.5
          ) {
            rb.udCarriesProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (
            rb.prjCarries - rb.ppCarriesProp.prop > 2.5 &&
            rb.appProjectedCarriesThisWeek - rb.ppCarriesProp.prop > 2.5
          ) {
            rb.ppCarriesProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          //                                                    Test

          if (rb.appProjectedCarriesThisWeek - rb.udCarriesProp.prop > 3) {
            rb.udCarriesProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (rb.appProjectedCarriesThisWeek - rb.ppCarriesProp.prop > 3) {
            rb.ppCarriesProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          // high confidence

          if (
            rb.prjCarries - rb.udCarriesProp.prop > 3.5 &&
            rb.appProjectedCarriesThisWeek - rb.udCarriesProp.prop > 3.5
          ) {
            rb.udCarriesProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (
            rb.prjCarries - rb.ppCarriesProp.prop > 3.5 &&
            rb.appProjectedCarriesThisWeek - rb.ppCarriesProp.prop > 3.5
          ) {
            rb.ppCarriesProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          //
          //                                            Rush Yards
          //

          //                                             under
          //

          //normal

          //     //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          // if(rb.udRushYardsProp.prop - rb.prjRushYards  > 1 && rb.udRushYardsProp.prop - rb.appProjectedrushYardsThisWeek  > 3) {
          //   rb.udRushYardsProp.isUnderRecomended = true
          //   console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          // }
          // if(rb.ppRushYardsProp.prop - rb.prjRushYards > 1 && rb.ppRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 3) {
          //   rb.ppRushYardsProp.isUnderRecomended = true
          //   // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          // }
          //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          if (
            rb.udRushYardsProp.prop - rb.prjRushYards > 2 &&
            rb.udRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 2
          ) {
            rb.udRushYardsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (
            rb.ppRushYardsProp.prop - rb.prjRushYards > 2 &&
            rb.ppRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 2
          ) {
            rb.ppRushYardsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          //                                            test

          if (rb.udRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 4) {
            rb.udRushYardsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (rb.ppRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 4) {
            rb.ppRushYardsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          // high confidence

          if (
            rb.udRushYardsProp.prop - rb.prjRushYards > 3.5 &&
            rb.udRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 3.5
          ) {
            rb.udRushYardsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (
            rb.ppRushYardsProp.prop - rb.prjRushYards > 3.5 &&
            rb.ppRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 3.5
          ) {
            rb.ppRushYardsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          if (
            rb.prjRushYards - rb.udRushYardsProp.prop > 10 &&
            rb.appProjectedrushYardsThisWeek - rb.udRushYardsProp.prop > 10
          ) {
            rb.udRushYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (
            rb.prjRushYards - rb.ppRushYardsProp.prop > 10 &&
            rb.appProjectedrushYardsThisWeek - rb.ppRushYardsProp.prop > 10
          ) {
            rb.ppRushYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          //                                                    Test

          if (rb.appProjectedrushYardsThisWeek - rb.udRushYardsProp.prop > 10) {
            rb.udRushYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (rb.appProjectedrushYardsThisWeek - rb.ppRushYardsProp.prop > 10) {
            rb.ppRushYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          // high confidence

          if (
            rb.prjRushYards - rb.udRushYardsProp.prop > 12 &&
            rb.appProjectedrushYardsThisWeek - rb.udRushYardsProp.prop > 12
          ) {
            rb.udRushYardsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (
            rb.prjRushYards - rb.ppRushYardsProp.prop > 12 &&
            rb.appProjectedrushYardsThisWeek - rb.ppRushYardsProp.prop > 12
          ) {
            rb.ppRushYardsProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          //
          //                                            Rush TDs
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          if (
            rb.udRushTDsProp.prop - rb.prjRushTDs > 0.1 &&
            rb.udRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.1
          ) {
            rb.udRushTDsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (
            rb.ppRushTDsProp.prop - rb.prjRushTDs > 0.1 &&
            rb.ppRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.1
          ) {
            rb.ppRushTDsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          //                                            test

          if (rb.udRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.1) {
            rb.udRushTDsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (rb.ppRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.1) {
            rb.ppRushTDsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          // high confidence

          if (
            rb.udRushTDsProp.prop - rb.prjRushTDs > 0.3 &&
            rb.udRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.3
          ) {
            rb.udRushTDsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (
            rb.ppRushTDsProp.prop - rb.prjRushTDs > 0.3 &&
            rb.ppRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.3
          ) {
            rb.ppRushTDsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          if (
            rb.prjRushTDs - rb.udRushTDsProp.prop > 0.3 &&
            rb.appProjectedrushTDsThisWeek - rb.udRushTDsProp.prop > 0.3
          ) {
            rb.udRushTDsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (
            rb.prjRushTDs - rb.ppRushTDsProp.prop > 0.3 &&
            rb.appProjectedrushTDsThisWeek - rb.ppRushTDsProp.prop > 0.3
          ) {
            rb.ppRushTDsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          //                                                    Test

          if (rb.appProjectedrushTDsThisWeek - rb.udRushTDsProp.prop > 0.4) {
            rb.udRushTDsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (rb.appProjectedrushTDsThisWeek - rb.ppRushTDsProp.prop > 0.4) {
            rb.ppRushTDsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          // high confidence

          if (
            rb.prjRushTDs - rb.udRushTDsProp.prop > 0.4 &&
            rb.appProjectedrushTDsThisWeek - rb.udRushTDsProp.prop > 0.4
          ) {
            rb.udRushTDsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (
            rb.prjRushTDs - rb.ppRushTDsProp.prop > 0.4 &&
            rb.appProjectedrushTDsThisWeek - rb.ppRushTDsProp.prop > 0.4
          ) {
            rb.ppRushTDsProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          //
          //                                            Receptions
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          //  console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          if (
            rb.udReceptionsProp.prop - rb.prjReceptions > 0.5 &&
            rb.udReceptionsProp.prop - rb.appProjectedreceptionsThisWeek > 0.5
          ) {
            rb.udReceptionsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.ppReceptionsProp.prop - rb.prjReceptions > 0.5 &&
            rb.ppReceptionsProp.prop - rb.appProjectedreceptionsThisWeek > 0.5
          ) {
            rb.ppReceptionsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          //                                            test

          if (
            rb.udReceptionsProp.prop - rb.appProjectedreceptionsThisWeek >
            0.6
          ) {
            rb.udReceptionsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.ppReceptionsProp.prop - rb.appProjectedreceptionsThisWeek >
            0.6
          ) {
            rb.ppReceptionsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          // high confidence

          if (
            rb.udReceptionsProp.prop - rb.prjReceptions > 0.7 &&
            rb.udReceptionsProp.prop - rb.appProjectedreceptionsThisWeek > 0.7
          ) {
            rb.udReceptionsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.ppReceptionsProp.prop - rb.prjReceptions > 0.7 &&
            rb.ppReceptionsProp.prop - rb.appProjectedreceptionsThisWeek > 0.7
          ) {
            rb.ppReceptionsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          if (
            rb.prjReceptions - rb.udReceptionsProp.prop > 1 &&
            rb.appProjectedreceptionsThisWeek - rb.udReceptionsProp.prop > 1
          ) {
            rb.udReceptionsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.prjReceptions - rb.ppReceptionsProp.prop > 1 &&
            rb.appProjectedreceptionsThisWeek - rb.ppReceptionsProp.prop > 1
          ) {
            rb.ppReceptionsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          //                                                    Test

          if (
            rb.appProjectedreceptionsThisWeek - rb.udReceptionsProp.prop >
            1.5
          ) {
            rb.udReceptionsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.appProjectedreceptionsThisWeek - rb.ppReceptionsProp.prop >
            1.5
          ) {
            rb.ppReceptionsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          // high confidence

          if (
            rb.prjReceptions - rb.udReceptionsProp.prop > 1.5 &&
            rb.appProjectedreceptionsThisWeek - rb.udReceptionsProp.prop > 1.5
          ) {
            rb.udReceptionsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.prjReceptions - rb.ppReceptionsProp.prop > 1.5 &&
            rb.appProjectedreceptionsThisWeek - rb.ppReceptionsProp.prop > 1.5
          ) {
            rb.ppReceptionsProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          //
          //                                            Receiving Yards
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          //  console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          if (
            rb.udReceivingYardsProp.prop - rb.prjRecYards > 2.5 &&
            rb.udReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek > 2.5
          ) {
            rb.udReceivingYardsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.ppReceivingYardsProp.prop - rb.prjRecYards > 2.5 &&
            rb.ppReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek > 2.5
          ) {
            rb.ppReceivingYardsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          //                                            test

          if (
            rb.udReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek >
            2
          ) {
            rb.udReceivingYardsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.ppReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek >
            2
          ) {
            rb.ppReceivingYardsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          // high confidence

          if (
            rb.udReceivingYardsProp.prop - rb.prjRecYards > 4 &&
            rb.udReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek > 4
          ) {
            rb.udReceivingYardsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.ppReceivingYardsProp.prop - rb.prjRecYards > 4 &&
            rb.ppReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek > 4
          ) {
            rb.ppReceivingYardsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          if (
            rb.prjRecYards - rb.udReceivingYardsProp.prop > 7 &&
            rb.appProjectedrecYardsThisWeek - rb.udReceivingYardsProp.prop > 7
          ) {
            rb.udReceivingYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.prjRecYards - rb.ppReceivingYardsProp.prop > 7 &&
            rb.appProjectedrecYardsThisWeek - rb.ppReceivingYardsProp.prop > 7
          ) {
            rb.ppReceivingYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          //                                                    Test

          if (
            rb.appProjectedrecYardsThisWeek - rb.udReceivingYardsProp.prop >
            8
          ) {
            rb.udReceivingYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.appProjectedrecYardsThisWeek - rb.ppReceivingYardsProp.prop >
            8
          ) {
            rb.ppReceivingYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          // high confidence

          if (
            rb.prjRecYards - rb.udReceivingYardsProp.prop > 10 &&
            rb.appProjectedrecYardsThisWeek - rb.udReceivingYardsProp.prop > 10
          ) {
            rb.udReceivingYardsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.prjRecYards - rb.ppReceivingYardsProp.prop > 10 &&
            rb.appProjectedrecYardsThisWeek - rb.ppReceivingYardsProp.prop > 10
          ) {
            rb.ppReceivingYardsProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          //
          //                                      Rushing plus Receiving Yards
          //

          //                                               under
          //

          //normal

          //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          if (
            rb.udRushPlusRecYardsProp.prop -
              (+rb.prjRushYards + +rb.prjRecYards) >
              3 &&
            rb.udRushPlusRecYardsProp.prop -
              (rb.appProjectedrushYardsThisWeek +
                rb.appProjectedrecYardsThisWeek) >
              3
          ) {
            rb.udRushPlusRecYardsProp.isUnderRecomended = true;
            //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }
          if (
            rb.ppRushPlusRecYardsProp.prop -
              (+rb.prjRushYards + +rb.prjRecYards) >
              3 &&
            rb.ppRushPlusRecYardsProp.prop -
              (rb.appProjectedrushYardsThisWeek +
                rb.appProjectedrecYardsThisWeek) >
              3
          ) {
            rb.ppRushPlusRecYardsProp.isUnderRecomended = true;
            // console.log(qrbb.playerName, rb.ppRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }

          // high confidence

          if (
            rb.udRushPlusRecYardsProp.prop -
              (+rb.prjRushYards + +rb.prjRecYards) >
              4 &&
            rb.udRushPlusRecYardsProp.prop -
              (rb.appProjectedrushYardsThisWeek +
                rb.appProjectedrecYardsThisWeek) >
              4
          ) {
            rb.udRushPlusRecYardsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }
          if (
            rb.ppRushPlusRecYardsProp.prop -
              (+rb.prjRushYards + +rb.prjRecYards) >
              4 &&
            rb.ppRushPlusRecYardsProp.prop -
              (rb.appProjectedrushYardsThisWeek +
                rb.appProjectedrecYardsThisWeek) >
              4
          ) {
            rb.ppRushPlusRecYardsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }

          //                                              over
          //

          // normal

          //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (+rb.prjRushYards + +rb.prjRecYards), (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek) )
          if (
            +rb.prjRushYards +
              +rb.prjRecYards -
              rb.udRushPlusRecYardsProp.prop >
              11 &&
            rb.appProjectedrushYardsThisWeek +
              rb.appProjectedrecYardsThisWeek -
              rb.udRushPlusRecYardsProp.prop >
              11
          ) {
            rb.udRushPlusRecYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }
          // console.log(rb.playerName, rb.ppRushPlusRecYardsProp.prop, rb.prjRushYards, rb.appProjectedrushYardsThisWeek )
          if (
            +rb.prjRushYards +
              +rb.prjRecYards -
              rb.ppRushPlusRecYardsProp.prop >
              11 &&
            rb.appProjectedrushYardsThisWeek +
              rb.appProjectedrecYardsThisWeek -
              rb.ppRushPlusRecYardsProp.prop >
              11
          ) {
            rb.ppRushPlusRecYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }

          // high confidence

          if (
            +rb.prjRushYards +
              +rb.prjRecYards -
              rb.udRushPlusRecYardsProp.prop >
              13 &&
            rb.appProjectedrushYardsThisWeek +
              rb.appProjectedrecYardsThisWeek -
              rb.udRushPlusRecYardsProp.prop >
              13
          ) {
            rb.udRushPlusRecYardsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }
          if (
            +rb.prjRushYards +
              +rb.prjRecYards -
              rb.ppRushPlusRecYardsProp.prop >
              13 &&
            rb.appProjectedrushYardsThisWeek +
              rb.appProjectedrecYardsThisWeek -
              rb.ppRushPlusRecYardsProp.prop >
              13
          ) {
            rb.ppRushPlusRecYardsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.ppRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }

          //
          //                                            Fantasy Score
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          //  console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          if (
            rb.udFantasyScoreProp.prop - rb.fourForFourHalfPPRProjectedPoints >
              1.5 &&
            rb.udFantasyScoreProp.prop - rb.astroHalfRBProjection > 1.5 &&
            rb.udFantasyScoreProp.prop - rb.halfGLSPAVG > 1.5
          ) {
            rb.udFantasyScoreProp.isUnderRecomended = true;
            // console.log(
            //   rb.playerName,
            //   rb.udFantasyScoreProp.prop,
            //   rb.astroHalfRBProjection,
            //   rb.fourForFourHalfPPRProjectedPoints
            // );
          }
          if (
            rb.ppFantasyScoreProp.prop - rb.fourForFourHalfPPRProjectedPoints >
              1.5 &&
            rb.ppFantasyScoreProp.prop - rb.astroHalfRBProjection > 1.5 &&
            rb.ppFantasyScoreProp.prop - rb.halfGLSPAVG > 1.5
          ) {
            rb.ppFantasyScoreProp.isUnderRecomended = true;
            // console.log(
            //   rb.playerName,
            //   rb.ppFantasyScoreProp.prop,
            //   rb.astroHalfRBProjection,
            //   rb.fourForFourHalfPPRProjectedPoints
            // );
          }

          //                                            test

          if (rb.udFantasyScoreProp.prop - rb.astroHalfRBProjection > 1) {
            rb.udFantasyScoreProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (rb.ppFantasyScoreProp.prop - rb.astroHalfRBProjection > 1) {
            rb.ppFantasyScoreProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          // high confidence

          if (
            rb.udFantasyScoreProp.prop - rb.fourForFourHalfPPRProjectedPoints >
              1.5 &&
            rb.udFantasyScoreProp.prop - rb.astroHalfRBProjection > 1.5 &&
            rb.udFantasyScoreProp.prop - rb.halfGLSPAVG > 1.5
          ) {
            rb.udFantasyScoreProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (
            rb.ppFantasyScoreProp.prop - rb.fourForFourHalfPPRProjectedPoints >
              1.5 &&
            rb.ppFantasyScoreProp.prop - rb.astroHalfRBProjection > 1.5 &&
            rb.ppFantasyScoreProp.prop - rb.halfGLSPAVG > 1.5
          ) {
            rb.ppFantasyScoreProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.halfGLSPAVG ,rb.fourForFourHalfPPRProjectedPoints )
          if (
            rb.fourForFourHalfPPRProjectedPoints - rb.udFantasyScoreProp.prop >
              1.5 &&
            rb.astroHalfRBProjection - rb.udFantasyScoreProp.prop > 1.5 &&
            rb.halfGLSPAVG - rb.udFantasyScoreProp.prop > 1.5
          ) {
            rb.udFantasyScoreProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (
            rb.fourForFourHalfPPRProjectedPoints - rb.ppFantasyScoreProp.prop >
              1.5 &&
            rb.astroHalfRBProjection - rb.ppFantasyScoreProp.prop > 1.5 &&
            rb.halfGLSPAVG - rb.ppFantasyScoreProp.prop > 1.5
          ) {
            rb.ppFantasyScoreProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          //                                                    Test

          if (rb.astroHalfRBProjection - rb.udFantasyScoreProp.prop > 3) {
            rb.udFantasyScoreProp.isTESTOverRecomended = true;
            // console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (rb.astroHalfRBProjection - rb.ppFantasyScoreProp.prop > 3) {
            rb.ppFantasyScoreProp.isTESTOverRecomended = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          // high confidence

          if (
            rb.fourForFourHalfPPRProjectedPoints - rb.udFantasyScoreProp.prop >
              2.5 &&
            rb.astroHalfRBProjection - rb.udFantasyScoreProp.prop > 2.5 &&
            rb.halfGLSPAVG - rb.udFantasyScoreProp.prop > 2.5
          ) {
            rb.udFantasyScoreProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (
            rb.fourForFourHalfPPRProjectedPoints - rb.ppFantasyScoreProp.prop >
              2.5 &&
            rb.astroHalfRBProjection - rb.ppFantasyScoreProp.prop > 2.5 &&
            rb.halfGLSPAVG - rb.ppFantasyScoreProp.prop > 2.5
          ) {
            rb.ppFantasyScoreProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          // console.log(rb)

          // player.RBOne.udCarriesProp  = rb.udCarriesProp
          // player.RBOne.ppCarriesProp  = rb.ppCarriesProp
          // player.RBOne.udRushYardsProp  = rb.udRushYardsProp
          // player.RBOne.ppRushYardsProp  = rb.ppRushYardsProp
          // player.RBOne.udRushTDsProp  = rb.udRushTDsProp
          // player.RBOne.ppRushTDsProp  = rb.ppRushTDsProp
          // player.RBOne.udReceptionsProp  = rb.udReceptionsProp
          // player.RBOne.ppReceptionsProp  = rb.ppReceptionsProp
          // player.RBOne.udReceivingYardsProp  = rb.udReceivingYardsProp
          // player.RBOne.ppReceivingYardsProp  = rb.ppReceivingYardsProp
          // player.RBOne.udRushPlusRecYardsProp  = rb.udRushPlusRecYardsProp
          // player.RBOne.ppRushPlusRecYardsProp  = rb.ppRushPlusRecYardsProp
          // player.RBOne.udFantasyScoreProp  = rb.udFantasyScoreProp
          // player.RBOne.ppFantasyScoreProp  = rb.ppFantasyScoreProp
        } // end if(player.RBOne.name === rb.playerName) {
      } // end if (rb.roleThisWeek === 1) {

      //
      //                       RBTwo
      //

      if (rb.roleThisWeek === 2) {
        // console.log(rb)
        if (player.RBTwo.name === rb.playerName) {
          // console.log(player.RBTwo)
          // console.log(rb)

          rb.udCarriesProp = {
            prop: player.RBTwo.udCarriesProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppCarriesProp = {
            prop: player.RBTwo.ppCarriesProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udRushYardsProp = {
            prop: player.RBTwo.udRushYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppRushYardsProp = {
            prop: player.RBTwo.ppRushYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udRushTDsProp = {
            prop: player.RBTwo.udRushTDsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppRushTDsProp = {
            prop: player.RBTwo.ppRushTDsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udReceptionsProp = {
            prop: player.RBTwo.udReceptionsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppReceptionsProp = {
            prop: player.RBTwo.ppReceptionsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udReceivingYardsProp = {
            prop: player.RBTwo.udRecYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppReceivingYardsProp = {
            prop: player.RBTwo.ppRecYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udRushPlusRecYardsProp = {
            prop: player.RBTwo.udRushPlusRecYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppRushPlusRecYardsProp = {
            prop: player.RBTwo.ppRushPlusRecYardsProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.udFantasyScoreProp = {
            prop: player.RBTwo.udFantasyScoreProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };
          rb.ppFantasyScoreProp = {
            prop: player.RBTwo.ppFantasyScoreProp,
            isOverRecomended: false,
            isUnderRecomended: false,
          };

          // console.log(rb.ppRushPlusRecYardsProp)

          //
          //
          //                                            Carries
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          if (
            rb.udCarriesProp.prop - rb.prjCarries > 1.75 &&
            rb.udCarriesProp.prop - rb.appProjectedCarriesThisWeek > 1.75
          ) {
            rb.udCarriesProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (
            rb.ppCarriesProp.prop - rb.prjCarries > 1.75 &&
            rb.ppCarriesProp.prop - rb.appProjectedCarriesThisWeek > 1.75
          ) {
            rb.ppCarriesProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          //                                            test

          if (rb.udCarriesProp.prop - rb.appProjectedCarriesThisWeek > 2) {
            rb.udCarriesProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (rb.ppCarriesProp.prop - rb.appProjectedCarriesThisWeek > 2) {
            rb.ppCarriesProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          // high confidence

          if (
            rb.udCarriesProp.prop - rb.prjCarries > 2.5 &&
            rb.udCarriesProp.prop - rb.appProjectedCarriesThisWeek > 2.5
          ) {
            rb.udCarriesProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (
            rb.ppCarriesProp.prop - rb.prjCarries > 2.5 &&
            rb.ppCarriesProp.prop - rb.appProjectedCarriesThisWeek > 2.5
          ) {
            rb.ppCarriesProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          if (
            rb.prjCarries - rb.udCarriesProp.prop > 2.75 &&
            rb.appProjectedCarriesThisWeek - rb.udCarriesProp.prop > 2.75
          ) {
            rb.udCarriesProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (
            rb.prjCarries - rb.ppCarriesProp.prop > 2.75 &&
            rb.appProjectedCarriesThisWeek - rb.ppCarriesProp.prop > 2.75
          ) {
            rb.ppCarriesProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          //                                                    Test

          if (rb.appProjectedCarriesThisWeek - rb.udCarriesProp.prop > 3) {
            rb.udCarriesProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (rb.appProjectedCarriesThisWeek - rb.ppCarriesProp.prop > 3) {
            rb.ppCarriesProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          // high confidence

          if (
            rb.prjCarries - rb.udCarriesProp.prop > 4 &&
            rb.appProjectedCarriesThisWeek - rb.udCarriesProp.prop > 4
          ) {
            rb.udCarriesProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }
          if (
            rb.prjCarries - rb.ppCarriesProp.prop > 4 &&
            rb.appProjectedCarriesThisWeek - rb.ppCarriesProp.prop > 4
          ) {
            rb.ppCarriesProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppCarriesProp.prop, rb.appProjectedCarriesThisWeek, rb.prjCarries )
          }

          //
          //                                            Rush Yards
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          if (
            rb.udRushYardsProp.prop - rb.prjRushYards > 2.5 &&
            rb.udRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 2.5
          ) {
            rb.udRushYardsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (
            rb.ppRushYardsProp.prop - rb.prjRushYards > 2.5 &&
            rb.ppRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 2.5
          ) {
            rb.ppRushYardsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          //                                            test

          if (rb.udRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 3) {
            rb.udRushYardsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (rb.ppRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 3) {
            rb.ppRushYardsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          // high confidence

          if (
            rb.udRushYardsProp.prop - rb.prjRushYards > 4 &&
            rb.udRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 4
          ) {
            rb.udRushYardsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (
            rb.ppRushYardsProp.prop - rb.prjRushYards > 4 &&
            rb.ppRushYardsProp.prop - rb.appProjectedrushYardsThisWeek > 4
          ) {
            rb.ppRushYardsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          if (
            rb.prjRushYards - rb.udRushYardsProp.prop > 15 &&
            rb.appProjectedrushYardsThisWeek - rb.udRushYardsProp.prop > 15
          ) {
            rb.udRushYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (
            rb.prjRushYards - rb.ppRushYardsProp.prop > 15 &&
            rb.appProjectedrushYardsThisWeek - rb.ppRushYardsProp.prop > 15
          ) {
            rb.ppRushYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          //                                                    Test

          if (rb.appProjectedrushYardsThisWeek - rb.udRushYardsProp.prop > 15) {
            rb.udRushYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (rb.appProjectedrushYardsThisWeek - rb.ppRushYardsProp.prop > 15) {
            rb.ppRushYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          // high confidence

          if (
            rb.prjRushYards - rb.udRushYardsProp.prop > 20 &&
            rb.appProjectedrushYardsThisWeek - rb.udRushYardsProp.prop > 20
          ) {
            rb.udRushYardsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }
          if (
            rb.prjRushYards - rb.ppRushYardsProp.prop > 20 &&
            rb.appProjectedrushYardsThisWeek - rb.ppRushYardsProp.prop > 20
          ) {
            rb.ppRushYardsProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppRushYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          }

          //
          //                                            Rush TDs
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          if (
            rb.udRushTDsProp.prop - rb.prjRushTDs > 0.1 &&
            rb.udRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.1
          ) {
            rb.udRushTDsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (
            rb.ppRushTDsProp.prop - rb.prjRushTDs > 0.1 &&
            rb.ppRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.1
          ) {
            rb.ppRushTDsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          //                                            test

          if (rb.udRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.1) {
            rb.udRushTDsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (rb.ppRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.1) {
            rb.ppRushTDsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          // high confidence

          if (
            rb.udRushTDsProp.prop - rb.prjRushTDs > 0.3 &&
            rb.udRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.3
          ) {
            rb.udRushTDsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (
            rb.ppRushTDsProp.prop - rb.prjRushTDs > 0.3 &&
            rb.ppRushTDsProp.prop - rb.appProjectedrushTDsThisWeek > 0.3
          ) {
            rb.ppRushTDsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          if (
            rb.prjRushTDs - rb.udRushTDsProp.prop > 0.3 &&
            rb.appProjectedrushTDsThisWeek - rb.udRushTDsProp.prop > 0.3
          ) {
            rb.udRushTDsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (
            rb.prjRushTDs - rb.ppRushTDsProp.prop > 0.3 &&
            rb.appProjectedrushTDsThisWeek - rb.ppRushTDsProp.prop > 0.3
          ) {
            rb.ppRushTDsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          //                                                    Test

          if (rb.appProjectedrushTDsThisWeek - rb.udRushTDsProp.prop > 0.4) {
            rb.udRushTDsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (rb.appProjectedrushTDsThisWeek - rb.ppRushTDsProp.prop > 0.4) {
            rb.ppRushTDsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          // high confidence

          if (
            rb.prjRushTDs - rb.udRushTDsProp.prop > 0.4 &&
            rb.appProjectedrushTDsThisWeek - rb.udRushTDsProp.prop > 0.4
          ) {
            rb.udRushTDsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }
          if (
            rb.prjRushTDs - rb.ppRushTDsProp.prop > 0.4 &&
            rb.appProjectedrushTDsThisWeek - rb.ppRushTDsProp.prop > 0.4
          ) {
            rb.ppRushTDsProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppRushTDsProp.prop, rb.appProjectedrushTDsThisWeek, rb.prjRushTDs )
          }

          //
          //                                            Receptions
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          //  console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          if (
            rb.udReceptionsProp.prop - rb.prjReceptions > 1 &&
            rb.udReceptionsProp.prop - rb.appProjectedreceptionsThisWeek > 1
          ) {
            rb.udReceptionsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.ppReceptionsProp.prop - rb.prjReceptions > 1 &&
            rb.ppReceptionsProp.prop - rb.appProjectedreceptionsThisWeek > 1
          ) {
            rb.ppReceptionsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          //                                            test

          if (
            rb.udReceptionsProp.prop - rb.appProjectedreceptionsThisWeek >
            0.4
          ) {
            rb.udReceptionsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.ppReceptionsProp.prop - rb.appProjectedreceptionsThisWeek >
            0.4
          ) {
            rb.ppReceptionsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          // high confidence

          if (
            rb.udReceptionsProp.prop - rb.prjReceptions > 0.4 &&
            rb.udReceptionsProp.prop - rb.appProjectedreceptionsThisWeek > 0.4
          ) {
            rb.udReceptionsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.ppReceptionsProp.prop - rb.prjReceptions > 0.4 &&
            rb.ppReceptionsProp.prop - rb.appProjectedreceptionsThisWeek > 0.4
          ) {
            rb.ppReceptionsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          if (
            rb.prjReceptions - rb.udReceptionsProp.prop > 1 &&
            rb.appProjectedreceptionsThisWeek - rb.udReceptionsProp.prop > 1
          ) {
            rb.udReceptionsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.prjReceptions - rb.ppReceptionsProp.prop > 1 &&
            rb.appProjectedreceptionsThisWeek - rb.ppReceptionsProp.prop > 1
          ) {
            rb.ppReceptionsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          //                                                    Test

          if (
            rb.appProjectedreceptionsThisWeek - rb.udReceptionsProp.prop >
            1.5
          ) {
            rb.udReceptionsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.appProjectedreceptionsThisWeek - rb.ppReceptionsProp.prop >
            1.5
          ) {
            rb.ppReceptionsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          // high confidence

          if (
            rb.prjReceptions - rb.udReceptionsProp.prop > 1.25 &&
            rb.appProjectedreceptionsThisWeek - rb.udReceptionsProp.prop > 1.25
          ) {
            rb.udReceptionsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }
          if (
            rb.prjReceptions - rb.ppReceptionsProp.prop > 1.25 &&
            rb.appProjectedreceptionsThisWeek - rb.ppReceptionsProp.prop > 1.25
          ) {
            rb.ppReceptionsProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedreceptionsThisWeek, rb.prjReceptions )
          }

          //
          //                                            Receiving Yards
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          //  console.log(rb.playerName, rb.ppReceptionsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          if (
            rb.udReceivingYardsProp.prop - rb.prjRecYards > 0.75 &&
            rb.udReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek >
              0.75
          ) {
            rb.udReceivingYardsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.ppReceivingYardsProp.prop - rb.prjRecYards > 0.75 &&
            rb.ppReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek >
              0.75
          ) {
            rb.ppReceivingYardsProp.isUnderRecomended = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          //                                            test

          if (
            rb.udReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek >
            1
          ) {
            rb.udReceivingYardsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.ppReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek >
            1
          ) {
            rb.ppReceivingYardsProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          // high confidence

          if (
            rb.udReceivingYardsProp.prop - rb.prjRecYards > 1.5 &&
            rb.udReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek > 1.5
          ) {
            rb.udReceivingYardsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.ppReceivingYardsProp.prop - rb.prjRecYards > 1.5 &&
            rb.ppReceivingYardsProp.prop - rb.appProjectedrecYardsThisWeek > 1.5
          ) {
            rb.ppReceivingYardsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          if (
            rb.prjRecYards - rb.udReceivingYardsProp.prop > 7.5 &&
            rb.appProjectedrecYardsThisWeek - rb.udReceivingYardsProp.prop > 7.5
          ) {
            rb.udReceivingYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.prjRecYards - rb.ppReceivingYardsProp.prop > 7.5 &&
            rb.appProjectedrecYardsThisWeek - rb.ppReceivingYardsProp.prop > 7.5
          ) {
            rb.ppReceivingYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          //                                                    Test

          if (
            rb.appProjectedrecYardsThisWeek - rb.udReceivingYardsProp.prop >
            10
          ) {
            rb.udReceivingYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.appProjectedrecYardsThisWeek - rb.ppReceivingYardsProp.prop >
            10
          ) {
            rb.ppReceivingYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          // high confidence

          if (
            rb.prjRecYards - rb.udReceivingYardsProp.prop > 10 &&
            rb.appProjectedrecYardsThisWeek - rb.udReceivingYardsProp.prop > 10
          ) {
            rb.udReceivingYardsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }
          if (
            rb.prjRecYards - rb.ppReceivingYardsProp.prop > 10 &&
            rb.appProjectedrecYardsThisWeek - rb.ppReceivingYardsProp.prop > 10
          ) {
            rb.ppReceivingYardsProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppReceivingYardsProp.prop, rb.appProjectedrecYardsThisWeek, rb.prjRecYards )
          }

          //
          //                                      Rushing plus Receiving Yards
          //

          //                                               under
          //

          //normal

          //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, rb.appProjectedrushYardsThisWeek, rb.prjRushYards )
          if (
            rb.udRushPlusRecYardsProp.prop -
              (+rb.prjRushYards + +rb.prjRecYards) >
              2 &&
            rb.udRushPlusRecYardsProp.prop -
              (rb.appProjectedrushYardsThisWeek +
                rb.appProjectedrecYardsThisWeek) >
              2
          ) {
            rb.udRushPlusRecYardsProp.isUnderRecomended = true;
            //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }
          if (
            rb.ppRushPlusRecYardsProp.prop -
              (+rb.prjRushYards + +rb.prjRecYards) >
              2 &&
            rb.ppRushPlusRecYardsProp.prop -
              (rb.appProjectedrushYardsThisWeek +
                rb.appProjectedrecYardsThisWeek) >
              2
          ) {
            rb.ppRushPlusRecYardsProp.isUnderRecomended = true;
            // console.log(qrbb.playerName, rb.ppRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }

          // high confidence

          if (
            rb.udRushPlusRecYardsProp.prop -
              (+rb.prjRushYards + +rb.prjRecYards) >
              4 &&
            rb.udRushPlusRecYardsProp.prop -
              (rb.appProjectedrushYardsThisWeek +
                rb.appProjectedrecYardsThisWeek) >
              4
          ) {
            rb.udRushPlusRecYardsProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }
          if (
            rb.ppRushPlusRecYardsProp.prop -
              (+rb.prjRushYards + +rb.prjRecYards) >
              4 &&
            rb.ppRushPlusRecYardsProp.prop -
              (rb.appProjectedrushYardsThisWeek +
                rb.appProjectedrecYardsThisWeek) >
              4
          ) {
            rb.ppRushPlusRecYardsProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }

          //                                              over
          //

          // normal

          //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (+rb.prjRushYards + +rb.prjRecYards), (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek) )
          if (
            +rb.prjRushYards +
              +rb.prjRecYards -
              rb.udRushPlusRecYardsProp.prop >
              10 &&
            rb.appProjectedrushYardsThisWeek +
              rb.appProjectedrecYardsThisWeek -
              rb.udRushPlusRecYardsProp.prop >
              10
          ) {
            rb.udRushPlusRecYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }
          // console.log(rb.playerName, rb.ppRushPlusRecYardsProp.prop, rb.prjRushYards, rb.appProjectedrushYardsThisWeek )
          if (
            +rb.prjRushYards +
              +rb.prjRecYards -
              rb.ppRushPlusRecYardsProp.prop >
              10 &&
            rb.appProjectedrushYardsThisWeek +
              rb.appProjectedrecYardsThisWeek -
              rb.ppRushPlusRecYardsProp.prop >
              10
          ) {
            rb.ppRushPlusRecYardsProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }

          // high confidence

          if (
            +rb.prjRushYards +
              +rb.prjRecYards -
              rb.udRushPlusRecYardsProp.prop >
              13 &&
            rb.appProjectedrushYardsThisWeek +
              rb.appProjectedrecYardsThisWeek -
              rb.udRushPlusRecYardsProp.prop >
              13
          ) {
            rb.udRushPlusRecYardsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }
          if (
            +rb.prjRushYards +
              +rb.prjRecYards -
              rb.ppRushPlusRecYardsProp.prop >
              13 &&
            rb.appProjectedrushYardsThisWeek +
              rb.appProjectedrecYardsThisWeek -
              rb.ppRushPlusRecYardsProp.prop >
              13
          ) {
            rb.ppRushPlusRecYardsProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.ppRushPlusRecYardsProp.prop, (rb.appProjectedrushYardsThisWeek + rb.appProjectedrecYardsThisWeek), (+rb.prjRushYards + +rb.prjRecYards) )
          }

          //
          //                                            Fantasy Score
          //

          //                                             under
          //

          //normal

          //  console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          //  console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          if (
            rb.udFantasyScoreProp.prop - rb.fourForFourHalfPPRProjectedPoints >
              1 &&
            rb.udFantasyScoreProp.prop - rb.astroHalfRBProjection > 1 &&
            rb.udFantasyScoreProp.prop - rb.halfGLSPAVG > 1
          ) {
            rb.udFantasyScoreProp.isUnderRecomended = true;
            // console.log(
            //   rb.playerName,
            //   rb.udFantasyScoreProp.prop,
            //   rb.astroHalfRBProjection,
            //   rb.fourForFourHalfPPRProjectedPoints
            // );
          }
          if (
            rb.ppFantasyScoreProp.prop - rb.fourForFourHalfPPRProjectedPoints >
              1 &&
            rb.ppFantasyScoreProp.prop - rb.astroHalfRBProjection > 1 &&
            rb.ppFantasyScoreProp.prop - rb.halfGLSPAVG > 1
          ) {
            rb.ppFantasyScoreProp.isUnderRecomended = true;
            // console.log(
            //   rb.playerName,
            //   rb.ppFantasyScoreProp.prop,
            //   rb.astroHalfRBProjection,
            //   rb.fourForFourHalfPPRProjectedPoints
            // );
          }

          //                                            test

          if (rb.udFantasyScoreProp.prop - rb.astroHalfRBProjection > 1) {
            rb.udFantasyScoreProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (rb.ppFantasyScoreProp.prop - rb.astroHalfRBProjection > 1) {
            rb.ppFantasyScoreProp.TESTisUnderRecomended = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          // high confidence

          if (
            rb.udFantasyScoreProp.prop - rb.fourForFourHalfPPRProjectedPoints >
              1 &&
            rb.udFantasyScoreProp.prop - rb.astroHalfRBProjection > 1 &&
            rb.udFantasyScoreProp.prop - rb.halfGLSPAVG > 1
          ) {
            rb.udFantasyScoreProp.highUnderConfidence = true;
            //  console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (
            rb.ppFantasyScoreProp.prop - rb.fourForFourHalfPPRProjectedPoints >
              1 &&
            rb.ppFantasyScoreProp.prop - rb.astroHalfRBProjection > 1 &&
            rb.ppFantasyScoreProp.prop - rb.halfGLSPAVG > 1
          ) {
            rb.ppFantasyScoreProp.highUnderConfidence = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          //                                              over
          //

          //normal

          //  console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.halfGLSPAVG ,rb.fourForFourHalfPPRProjectedPoints )
          if (
            rb.fourForFourHalfPPRProjectedPoints - rb.udFantasyScoreProp.prop >
              1.5 &&
            rb.astroHalfRBProjection - rb.udFantasyScoreProp.prop > 1.5 &&
            rb.halfGLSPAVG - rb.udFantasyScoreProp.prop > 1.5
          ) {
            rb.udFantasyScoreProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (
            rb.fourForFourHalfPPRProjectedPoints - rb.ppFantasyScoreProp.prop >
              1.5 &&
            rb.astroHalfRBProjection - rb.ppFantasyScoreProp.prop > 1.5 &&
            rb.halfGLSPAVG - rb.ppFantasyScoreProp.prop > 1.5
          ) {
            rb.ppFantasyScoreProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          //                                                    Test

          if (rb.astroHalfRBProjection - rb.udFantasyScoreProp.prop > 3) {
            rb.udFantasyScoreProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (rb.astroHalfRBProjection - rb.ppFantasyScoreProp.prop > 3) {
            rb.ppFantasyScoreProp.isOverRecomended = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          // high confidence

          if (
            rb.fourForFourHalfPPRProjectedPoints - rb.udFantasyScoreProp.prop >
              2.5 &&
            rb.astroHalfRBProjection - rb.udFantasyScoreProp.prop > 2.5 &&
            rb.halfGLSPAVG - rb.udFantasyScoreProp.prop > 2.5
          ) {
            rb.udFantasyScoreProp.highOverConfidence = true;
            //  console.log(rb.playerName, rb.udFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }
          if (
            rb.fourForFourHalfPPRProjectedPoints - rb.ppFantasyScoreProp.prop >
              2.5 &&
            rb.astroHalfRBProjection - rb.ppFantasyScoreProp.prop > 2.5 &&
            rb.halfGLSPAVG - rb.ppFantasyScoreProp.prop > 2.5
          ) {
            rb.ppFantasyScoreProp.highOverConfidence = true;
            // console.log(rb.playerName, rb.ppFantasyScoreProp.prop, rb.astroHalfRBProjection, rb.fourForFourHalfPPRProjectedPoints )
          }

          // console.log(rb)

          // player.RBTwo.udCarriesProp  = rb.udCarriesProp
          // player.RBTwo.ppCarriesProp  = rb.ppCarriesProp
          // player.RBTwo.udRushYardsProp  = rb.udRushYardsProp
          // player.RBTwo.ppRushYardsProp  = rb.ppRushYardsProp
          // player.RBTwo.udRushTDsProp  = rb.udRushTDsProp
          // player.RBTwo.ppRushTDsProp  = rb.ppRushTDsProp
          // player.RBTwo.udReceptionsProp  = rb.udReceptionsProp
          // player.RBTwo.ppReceptionsProp  = rb.ppReceptionsProp
          // player.RBTwo.udReceivingYardsProp  = rb.udReceivingYardsProp
          // player.RBTwo.ppReceivingYardsProp  = rb.ppReceivingYardsProp
          // player.RBTwo.udRushPlusRecYardsProp  = rb.udRushPlusRecYardsProp
          // player.RBTwo.ppRushPlusRecYardsProp  = rb.ppRushPlusRecYardsProp
          // player.RBTwo.udFantasyScoreProp  = rb.udFantasyScoreProp
          // player.RBTwo.ppFantasyScoreProp  = rb.ppFantasyScoreProp
        } // end if(player.RBTwo.name === rb.playerName) {
      } // end if (rb.roleThisWeek === 2) {

      if (player.roleThisWeek === 1) {
        rb.astroHalfRBProjection = player.RBOne.astroHalfRBProjection;
        rb.astroFullRBProjection = player.RBOne.astroFullRBProjection;
      }

      if (player.roleThisWeek === 2) {
        rb.astroHalfRBProjection = player.RBTwo.astroHalfRBProjection;
        rb.astroFullRBProjection = player.RBTwo.astroFullRBProjection;
      }

      //
      //
      //

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
          astroHalfRBProjection,
          astroFullRBProjection,

          udCarriesProp,
          ppCarriesProp,
          udRushYardsProp,
          ppRushYardsProp,
          udRushTDsProp,
          ppRushTDsProp,
          udReceptionsProp,
          ppReceptionsProp,
          udReceivingYardsProp,
          ppReceivingYardsProp,
          udRushPlusRecYardsProp,
          ppRushPlusRecYardsProp,
          udFantasyScoreProp,
          ppFantasyScoreProp,

          appHalfProjectedPoints,
          appFullProjectedPoints,
          appTEPProjectedPoints
        ) {
          this.name = name;
          this.position = position;
          this.team = team;

          this.appProjectedCarriesThisWeek = appProjectedCarriesThisWeek;
          this.appProjectedrushYardsThisWeek = appProjectedrushYardsThisWeek;
          this.appProjectedrushTDsThisWeek = appProjectedrushTDsThisWeek;
          this.appProjectedreceptionsThisWeek = appProjectedreceptionsThisWeek;
          this.appProjectedrecYardsThisWeek = appProjectedrecYardsThisWeek;
          this.appProjectedrecTDsThisWeek = appProjectedrecTDsThisWeek;
          this.appProjectedrushFirstDownsThisWeek =
            appProjectedrushFirstDownsThisWeek;
          this.appProjectedrecFirstDownsThisWeek =
            appProjectedrecFirstDownsThisWeek;
          this.appProjectedRBTotalFirstDownsThisWeek =
            appProjectedRBTotalFirstDownsThisWeek;
          this.astroHalfRBProjection = astroHalfRBProjection;
          this.astroFullRBProjection = astroFullRBProjection;

          this.udCarriesProp = udCarriesProp;
          this.ppCarriesProp = ppCarriesProp;
          this.udRushYardsProp = udRushYardsProp;
          this.ppRushYardsProp = ppRushYardsProp;
          this.udRushTDsProp = udRushTDsProp;
          this.ppRushTDsProp = ppRushTDsProp;
          this.udReceptionsProp = udReceptionsProp;
          this.ppReceptionsProp = ppReceptionsProp;
          this.udReceivingYardsProp = udReceivingYardsProp;
          this.ppReceivingYardsProp = ppReceivingYardsProp;
          this.udRushPlusRecYardsProp = udRushPlusRecYardsProp;
          this.ppRushPlusRecYardsProp = ppRushPlusRecYardsProp;
          this.udFantasyScoreProp = udFantasyScoreProp;
          this.ppFantasyScoreProp = ppFantasyScoreProp;

          this.appHalfProjectedPoints = appHalfProjectedPoints;
          this.appFullProjectedPoints = appFullProjectedPoints;
          this.appTEPProjectedPoints = appTEPProjectedPoints;
        }
      }

      // console.log(rb)

      let rbProjectionsObject = new ProjectionsObject(
        rb.playerName,
        rb.position,
        rb.teamABV,

        rb.appProjectedCarriesThisWeek,
        rb.appProjectedrushYardsThisWeek,
        rb.appProjectedrushTDsThisWeek,
        rb.appProjectedreceptionsThisWeek,
        rb.appProjectedrecYardsThisWeek,
        rb.appProjectedrecTDsThisWeek,
        rb.appProjectedrushFirstDownsThisWeek,
        rb.appProjectedrecFirstDownsThisWeek,
        rb.appProjectedRBTotalFirstDownsThisWeek,
        rb.astroHalfRBProjection,
        rb.astroFullRBProjection,

        rb.udCarriesProp,
        rb.ppCarriesProp,
        rb.udRushYardsProp,
        rb.ppRushYardsProp,
        rb.udRushTDsProp,
        rb.ppRushTDsProp,
        rb.udReceptionsProp,
        rb.ppReceptionsProp,
        rb.udReceivingYardsProp,
        rb.ppReceivingYardsProp,
        rb.udRushPlusRecYardsProp,
        rb.ppRushPlusRecYardsProp,
        rb.udFantasyScoreProp,
        rb.ppFantasyScoreProp,

        rb.appProjectedHalfPPRPoints,
        rb.appProjectedFullPPRPoints,
        rb.appProjectedFullPPRPoints
      );

      // let rbTwoProjectionsObject = new ProjectionsObject(

      //   player.RBTwo.name,
      //   player.RBTwo.position,
      //   player.RBTwo.teamABV,

      //   player.RBTwo.appProjectedCarriesThisWeek,
      //   player.RBTwo.appProjectedrushYardsThisWeek,
      //   player.RBTwo.appProjectedrushTDsThisWeek,
      //   player.RBTwo.appProjectedreceptionsThisWeek,
      //   player.RBTwo.appProjectedrecYardsThisWeek,
      //   player.RBTwo.appProjectedrecTDsThisWeek,
      //   player.RBTwo.appProjectedrushFirstDownsThisWeek,
      //   player.RBTwo.appProjectedrecFirstDownsThisWeek,
      //   player.RBTwo.appProjectedRBTotalFirstDownsThisWeek,
      //   player.RBTwo.astroHalfRBProjection,
      //   player.RBTwo.astroFullRBProjection,

      //   player.RBTwo.udCarriesProp,

      //   player.RBTwo.appProjectedHalfPPRPoints,
      //   player.RBTwo.appProjectedFullPPRPoints,
      //   player.RBTwo.appProjectedFullPPRPoints
      // );

      // console.log(rbProjectionsObject)
      allRBProjectionsObjects.push(rbProjectionsObject);
      // allRBProjectionsObjects.push(rbTwoProjectionsObject);
    }); //  end allRBObjectsArray.forEach(function (rb) {
  }); // end propsData.forEach(function (player) {

  return allRBProjectionsObjects;
} // end async function propsData() {

propsData();

allRBs.forEach(function (team, i) {
  // console.log(team.RBOne);

  let teamName = '';
  if (team) {
    allTeams.forEach(function (giTeam) {
      //  console.log(giTeam)
      //  console.log(giTeam.teamProjectedPointsThisWeek)
      // if(giTeam.teamName === "DEN") {
      //   console.log(team.teamABV, giTeam.teamABV)
      // }

      if (
        team.teamABV === giTeam.teamABV ||
        team.teamABV === giTeam.altTeamABV
      ) {
        // console.log(giTeam.teamABV)
        // console.log(giTeam.teamName)
        // console.log(giTeam);
        teamName = giTeam.teamName;
        vtt = +giTeam.vtt;
        teamProjectedPoints = giTeam.teamProjectedPointsThisWeek;
        hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveWeeks;
        opponentTeamName = giTeam.opponentThisWeek.teamName;
        opponentABV = giTeam.opponentThisWeek.teamABV;
        opponentTeamProjectedPoints =
          giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
        if (teamProjectedPoints === undefined) {
          teamProjectedPoints = vtt;
        }
      }
    });

    // console.log(team.teamABV, teamProjectedPoints, vtt)

    // if(team.teamABV === "DEN") {
    //   console.log(team)
    // }

    tempTeamScoring = +((teamProjectedPoints + vtt) / 2).toFixed(2);

    teamProjectedPointsThisWeekPercentage = +(
      tempTeamScoring / team.RBOne.teamRealLifePointsScoredPerGameLastFiveWeeks
    ).toFixed(2);

    let rbObject = new RbObject(
      team.RBOne.name,
      'RB',
      teamName,
      team.teamABV,
      vtt,
      team.byeWeek,
      team.homeOrAway,
      team.slate,
      teamProjectedPoints,
      team.RBOne.teamRealLifePointsScoredPerGameLastFiveWeeks,
      teamProjectedPointsThisWeekPercentage,

      team.hadByeInTheLastFiveweeks,
      team.teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
      team.RBOne.roleThisWeek,
      team.RBOne.rbOnematchingWeeksPercentage,

      team.RBOne.targetSharePercentageLastFiveWeeks,
      team.RBOne.carriesPlusReceptionsPerGameLastFiveWeeks,
      team.RBOne.projectedCarriesPlusReceptionsThisWeek,
      team.qbPassAttemptsPerGameLastFiveWeeks,
      team.projectedQBPassAttemptsThisWeek,
      team.RBOne.yahooSalary,
      team.RBOne.fanduelSalary,
      team.RBOne.draftkingsSalary,
      team.RBOne.percentOfSalaryCapYahoo,
      team.RBOne.percentOfSalaryCapFanduel,
      team.RBOne.percentOfSalaryCapDraftkings,
      opponentTeamName,
      opponentABV,
      opponentTeamProjectedPoints,
      team.RBOne.opposingTeamRankInDefEPAAgainstTheRunLastFiveWeeks,
      team.RBOne.glspHalfavg,
      team.RBOne.glspPPRavg,
      team.RBOne.halfTwentyFifthPercentProjectedPoints,
      team.RBOne.halfFiftyithPercentProjectedPoints,
      team.RBOne.halfSeventyFifthPercentProjectedPoints,
      team.RBOne.PPRTwentyFifthPercentProjectedPoints,
      team.RBOne.PPRFiftyithPercentProjectedPoints,
      team.RBOne.PPRSeventyFifthPercentProjectedPoints,
      team.RBOne.fourForFourHalfPPRProjectedPoints,
      team.RBOne.fourForFourFullPPRProjectedPoints,
      team.RBOne.fantasyPointsPerGameLastFiveWeeks
    );

    // console.log(team.RBOne.projectedRecfirstDownsThisWeek)

    rbObject.calcAppProjectedPoints(
      team.RBOne.projectedCarriesThisWeek,
      team.RBOne.projectedRushYardsThisWeek,
      team.RBOne.projectedRushTDsThisWeek,
      team.RBOne.projectedReceptionsThisWeek,
      team.RBOne.projectedRecYardsThisWeek,
      team.RBOne.projectedRecTDsThisWeek,
      team.RBOne.projectedRushfirstDownsThisWeek,
      team.RBOne.projectedRecfirstDownsThisWeek
    );
    rbObject.calcAppProjectedpointsPerDollarOnAllSites();
    rbObject.calcFourForFourProjectedpointsPerDollarOnAllSites();
    rbObject.calcFourForFourProjectedPointsPerPercentOfSiteSalaryCap();
    rbObject.calcAppProjectionsPerPercentOfSiteSalaryCap();
    rbObject.assignPlayersToSalaryBucketsOnEachSite();

    allRBsMap.set(`${teamName}RBOneThisWeek`, rbObject);

    allRBObjectsArray.push(rbObject);
    // console.log(rbObject);
  }
});

allRBs.forEach(function (team, i) {
  let teamName = '';

  // console.log(team.RBOne)

  allTeams.forEach(function (giTeam) {
    if (team.teamABV === giTeam.teamABV || team.teamABV === giTeam.altTeamABV) {
      // console.log(giTeam);
      teamName = giTeam.teamName;
      vtt = +giTeam.vtt;
      teamProjectedPoints = giTeam.teamProjectedPointsThisWeek;
      hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveWeeks;
      opponentTeamName = giTeam.opponentThisWeek.teamName;
      opponentABV = giTeam.opponentThisWeek.teamABV;
      opponentTeamProjectedPoints =
        giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
    }
  });

  tempTeamScoring = +((teamProjectedPoints + vtt) / 2).toFixed(2);

  teamProjectedPointsThisWeekPercentage = +(
    tempTeamScoring / team.RBTwo.teamRealLifePointsScoredPerGameLastFiveWeeks
  ).toFixed(2);

  let rbObject = new RbObject(
    team.RBTwo.name,
    'RB',
    teamName,
    team.teamABV,
    vtt,
    team.byeWeek,
    team.homeOrAway,
    team.slate,
    teamProjectedPoints,
    team.RBTwo.teamRealLifePointsScoredPerGameLastFiveWeeks,
    teamProjectedPointsThisWeekPercentage,

    team.hadByeInTheLastFiveweeks,
    team.teamProjectedForAHalfOfNegetiveGameScriptIsTrue,
    team.RBTwo.roleThisWeek,
    team.RBTwo.rbTwomatchingWeeksPercentage,

    team.RBTwo.targetSharePercentageLastFiveWeeks,
    team.RBTwo.carriesPlusReceptionsPerGameLastFiveWeeks,
    team.RBTwo.projectedCarriesPlusReceptionsThisWeek,
    team.qbPassAttemptsPerGameLastFiveWeeks,
    team.projectedQBPassAttemptsThisWeek,
    team.RBTwo.yahooSalary,
    team.RBTwo.fanduelSalary,
    team.RBTwo.draftkingsSalary,
    team.RBTwo.percentOfSalaryCapYahoo,
    team.RBTwo.percentOfSalaryCapFanduel,
    team.RBTwo.percentOfSalaryCapDraftkings,
    opponentTeamName,
    opponentABV,
    opponentTeamProjectedPoints,
    team.RBTwo.opposingTeamRankInDefEPAAgainstTheRunLastFiveWeeks,
    team.RBTwo.glspHalfavg,
    team.RBTwo.glspPPRavg,
    team.RBTwo.halfTwentyFifthPercentProjectedPoints,
    team.RBTwo.halfFiftyithPercentProjectedPoints,
    team.RBTwo.halfSeventyFifthPercentProjectedPoints,
    team.RBTwo.PPRTwentyFifthPercentProjectedPoints,
    team.RBTwo.PPRFiftyithPercentProjectedPoints,
    team.RBTwo.PPRSeventyFifthPercentProjectedPoints,
    team.RBTwo.fourForFourHalfPPRProjectedPoints,
    team.RBTwo.fourForFourFullPPRProjectedPoints,
    team.RBTwo.fantasyPointsPerGameLastFiveWeeks
  );

  rbObject.calcAppProjectedPoints(
    team.RBTwo.projectedCarriesThisWeek,
    team.RBTwo.projectedRushYardsThisWeek,
    team.RBTwo.projectedRushTDsThisWeek,
    team.RBTwo.projectedReceptionsThisWeek,
    team.RBTwo.projectedRecYardsThisWeek,
    team.RBTwo.projectedRecTDsThisWeek,
    team.RBTwo.projectedRushfirstDownsThisWeek,
    team.RBTwo.projectedRecfirstDownsThisWeek
  );
  rbObject.calcAppProjectedpointsPerDollarOnAllSites();
  rbObject.calcFourForFourProjectedpointsPerDollarOnAllSites();
  rbObject.calcFourForFourProjectedPointsPerPercentOfSiteSalaryCap();
  rbObject.calcAppProjectionsPerPercentOfSiteSalaryCap();
  rbObject.assignPlayersToSalaryBucketsOnEachSite();

  allRBsMap.set(`${teamName}RBTwoThisWeek`, rbObject);
  // allRBObjects.playerName = rbObject;
  allRBObjectsArray.push(rbObject);
});

allRBs.forEach(function (team) {
  if (team.teamRbThreeThisWeekName) {
    allTeams.forEach(function (giTeam) {
      if (
        team.teamABV === giTeam.teamABV ||
        team.teamABV === giTeam.altTeamABV
      ) {
        // console.log(giTeam);
        teamName = giTeam.teamName;
        vtt = +giTeam.vtt;
        teamProjectedPoints = giTeam.teamProjectedPointsThisWeek;
        hadByeInLastFiveWeeksIsTrue = giTeam.hadByeInTheLastFiveWeeks;
        opponentTeamName = giTeam.opponentThisWeek.teamName;
        opponentABV = giTeam.opponentThisWeek.teamABV;
        opponentTeamProjectedPoints =
          giTeam.opponentThisWeek.teamProjectedPointsThisWeek;
      }
    });
    // console.log(teamName)
    let rbObject = new RbObject(
      team.teamRbThreeThisWeekName,
      'RB',
      // teamName,
      team.teamABV
    );

    rbObject.setTeamRBThreeProjections(
      team.teamRbThreeThisWeekFourForFourHalfPPRProjectedPoints,
      team.teamRbThreeThisWeekFourForFourFullPPRProjectedPoints
    );

    allRBObjectsArray.push(rbObject);
  }
});

// console.log(allRBsMap);
allRBObjectsArray.forEach(function (rb) {
  // console.log(rb);

  // console.log(rb.playerName);
  if (rb.teamABV === 'SF') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.SF49ers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.SF49ers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'CHI') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.bears.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.bears.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'CIN') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.bengals.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.bengals.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'BUF') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.bills.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.bills.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'DEN') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.broncos.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.broncos.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'CLE') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.browns.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.browns.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'TB') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.buccaneers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.buccaneers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'ARI') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.cardinals.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.cardinals.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'LAC') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.chargers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.chargers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'KC') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.chiefs.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.chiefs.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'IND') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.colts.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.colts.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'WAS') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.commanders.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.commanders.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'DAL') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.cowboys.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.cowboys.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'MIA') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.dolphins.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.dolphins.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'PHI') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.eagles.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.eagles.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'ATL') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.falcons.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.falcons.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NYG') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.giants.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.giants.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'JAC' || rb.teamABV === 'JAX') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.jaguars.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.jaguars.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NYJ') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.jets.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.jets.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'DET') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.lions.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.lions.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'GB') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.packers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.packers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'CAR') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.panthers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.panthers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NE') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.patriots.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.patriots.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'LV') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.raiders.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.raiders.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'LAR') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.rams.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.rams.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'BAL') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.ravens.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.ravens.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'NO') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.saints.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.saints.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'SEA') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.seahawks.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.seahawks.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'PIT') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.steelers.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.steelers.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'HOU') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.texans.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.texans.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'TEN') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.titans.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.titans.RBTwo = rb;
    }
  }

  if (rb.teamABV === 'MIN') {
    // console.log(rb);
    if (rb.roleThisWeek === 1) {
      allTeamRBObjects.vikings.RBOne = rb;
    }
    if (rb.roleThisWeek === 2) {
      allTeamRBObjects.vikings.RBTwo = rb;
    }
  }
});

// console.log(allTeamRBObjects);

allRBs.forEach(function (rb) {
  // console.log(rb);
  // console.log(
  //   rb.RBOne.name,
  //   rb.RBOne.totalPercentOfTeamHighValueTouchesLastFiveweeks,
  //   rb.RBTwo.name,
  //   rb.RBTwo.totalPercentOfTeamHighValueTouchesLastFiveweeks
  // );
  // console.log(rb.RBOne.name, rb.RBOne.HVTsFiveweeksAgo);
  // console.log(
  //   rb.RBOne.name,
  //   rb.RBOne.appProjectedFullPPRPoints,
  //   rb.RBOne.fourForFourFullPPRProjectedPoints
  // );
  // console.log(
  //   rb.RBTwo.name,
  //   rb.RBTwo.appProjectedFullPPRPoints,
  //   rb.RBTwo.fourForFourFullPPRProjectedPoints
  // );
});

const allRBData = {
  allRBsMap: allRBsMap,
  allTeamRBObjects: allTeamRBObjects,
  allRBObjectsArray: allRBObjectsArray,
};

// console.log(allTeamRBObjects);

const allRBProjectionsObjects = [];

// allRBObjectsArray.forEach(function (player) {
// console.log(player);

//   class ProjectionsObject {
//     constructor(
//       name,
//       position,
//       team,

//       appProjectedCarriesThisWeek,
//       appProjectedrushYardsThisWeek,
//       appProjectedrushTDsThisWeek,
//       appProjectedreceptionsThisWeek,
//       appProjectedrecYardsThisWeek,
//       appProjectedrecTDsThisWeek,
//       appProjectedrushFirstDownsThisWeek,
//       appProjectedrecFirstDownsThisWeek,
//       appProjectedRBTotalFirstDownsThisWeek,
//       astroHalfRBProjection,
//       astroFullRBProjection,

//       appHalfProjectedPoints,
//       appFullProjectedPoints,
//       appTEPProjectedPoints
//     ) {
//       this.name = name;
//       this.position = position;
//       this.team = team;

//       this.appProjectedCarriesThisWeek = appProjectedCarriesThisWeek;
//       this.appProjectedrushYardsThisWeek = appProjectedrushYardsThisWeek;
//       this.appProjectedrushTDsThisWeek = appProjectedrushTDsThisWeek;
//       this.appProjectedreceptionsThisWeek = appProjectedreceptionsThisWeek;
//       this.appProjectedrecYardsThisWeek = appProjectedrecYardsThisWeek;
//       this.appProjectedrecTDsThisWeek = appProjectedrecTDsThisWeek;
//       this.appProjectedrushFirstDownsThisWeek = appProjectedrushFirstDownsThisWeek;
//       this.appProjectedrecFirstDownsThisWeek = appProjectedrecFirstDownsThisWeek;
//       this.appProjectedRBTotalFirstDownsThisWeek = appProjectedRBTotalFirstDownsThisWeek;
//       this.astroHalfRBProjection = astroHalfRBProjection;
//       this.astroFullRBProjection = astroFullRBProjection;

//       this.appHalfProjectedPoints = appHalfProjectedPoints;
//       this.appFullProjectedPoints = appFullProjectedPoints;
//       this.appTEPProjectedPoints = appTEPProjectedPoints;
//     }
//   }

//   let rbProjectionsObject = new ProjectionsObject(
//     player.playerName,
//     player.position,
//     player.teamABV,

//     player.appProjectedCarriesThisWeek,
//     player.appProjectedrushYardsThisWeek,
//     player.appProjectedrushTDsThisWeek,
//     player.appProjectedreceptionsThisWeek,
//     player.appProjectedrecYardsThisWeek,
//     player.appProjectedrecTDsThisWeek,
//     player.appProjectedrushFirstDownsThisWeek,
//     player.appProjectedrecFirstDownsThisWeek,
//     player.appProjectedRBTotalFirstDownsThisWeek,
//     player.astroHalfRBProjection,
//     player.astroFullRBProjection,

//     player.appProjectedHalfPPRPoints,
//     player.appProjectedFullPPRPoints,
//     player.appProjectedFullPPRPoints
//   );

//   allRBProjectionsObjects.push(rbProjectionsObject);
// });

allRBData.allRBProjectionsObjects = allRBProjectionsObjects;
// console.log(allRBProjectionsObjects);

module.exports.allRBProjectionsObjects = propsData;
module.exports.allRBData = allRBData;
