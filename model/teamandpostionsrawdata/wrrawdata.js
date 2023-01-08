const wholeDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholeDownloadableSpreadSheetYahoo');
const qbDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/qbDownloadableSpreadSheetYahoo');

const gppLeverageScoresAndProjOwnershipDraftkings = require('../datafilesmadefrom4for4CSVs/draftkings/gppLeverageScoresAndProjOwnershipDraftkings');
const gppLeverageScoresAndProjOwnershipFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/gppLeverageScoresAndProjOwnershipFanduel');
const allHalfPPRProjectedPointsWithoutTeamDef = require('../datafilesmadefrom4for4CSVs/allHalfPPRProjectedPointsWithoutTeamDef');
const allFullPPRProjectedPointsWithoutTeamDef = require('../datafilesmadefrom4for4CSVs/allFullPPRProjectedPointsWithoutTeamDef');
const allNFLTeamPace = require('../datafilesmadefrom4for4CSVs/allNFLTeamPace');
const allQBGLSP = require('../datafilesmadefrom4for4CSVs/allQBGLSP');

const allFlexGLSP = require('../datafilesmadefrom4for4CSVs/allFlexGLSP');
const QBWeeklyStatExplorerLastFiveWeeksCategoryPassing = require('../datafilesmadefrom4for4CSVs/QBWeeklyStatExplorerLastFiveWeeksCategoryPassing');
const gameInfo = require('./gameinfo');
const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const wr4for4PlayerStatExplorerRecievingByAverageLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/wr4for4PlayerStatExplorerRecievingByAverageLastFiveWeeks');
const wr4for4PlayerStatExplorerSnapsAndFantasyTabLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/wr4for4PlayerStatExplorerSnapsAndFantasyTabLastFiveWeeks');
const wr4for4FantasyPointsBrowserLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/wr4for4FantasyPointsBrowserLastFiveWeeks');
const wr4for4PlayerStatExplorerExpectedPPRPointsLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/wr4for4PlayerStatExplorerExpectedPPRPointsLastFiveWeeks');
const wr4for4PlayerStatExplorerTargetShareLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/wr4for4PlayerStatExplorerTargetShareLasstFiveWeeks');

//WR target share the last x number of games can be found on the rotoviz monday review and the last 6 weeks should be used for a WR's target share number
//WR projected targets should be QB prjpassattempts * target share(in decimal form!)

const wrrawdata = {
  SF49ers: {
    teamName: 'SF49ers',
    teamABV: 'SF',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: +0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  bears: {
    teamName: 'bears',
    teamABV: 'CHI',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  bengals: {
    teamName: 'bengals',
    teamABV: 'CIN',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'Tee Higgins',
      halfTwentyFifthPercentProjectedPoints: 12.5,
      halfFiftyithPercentProjectedPoints: 14.88,
      halfSeventyFifthPercentProjectedPoints: 17,
      PPRTwentyFifthPercentProjectedPoints: 15.2,
      PPRFiftyithPercentProjectedPoints: 17.28,
      PPRSeventyFifthPercentProjectedPoints: 20,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 25.8,
      projectedTargets4For4: 8,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 16,
      fourForFourFullPPRProjectedPoints: 19,

      yahooSalary: 22,
      fanduelSalary: 6500,
      draftkingsSalary: 7000,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'Jamaar Chase',
      halfTwentyFifthPercentProjectedPoints: 9.5,
      halfFiftyithPercentProjectedPoints: 11.64,
      halfSeventyFifthPercentProjectedPoints: 13.5,
      PPRTwentyFifthPercentProjectedPoints: 11,
      PPRFiftyithPercentProjectedPoints: 13.34,
      PPRSeventyFifthPercentProjectedPoints: 15.5,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 21.5,
      projectedTargets4For4: 6.67,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 12,
      fourForFourFullPPRProjectedPoints: 14,

      yahooSalary: 28,
      fanduelSalary: 7000,
      draftkingsSalary: 7500,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'Tyler Boyd',
      halfTwentyFifthPercentProjectedPoints: 5,
      halfFiftyithPercentProjectedPoints: 7,
      halfSeventyFifthPercentProjectedPoints: 9,
      PPRTwentyFifthPercentProjectedPoints: 8,
      PPRFiftyithPercentProjectedPoints: 10,
      PPRSeventyFifthPercentProjectedPoints: 12,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 15,
      projectedTargets4For4: 4.5,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 7.65,
      fourForFourFullPPRProjectedPoints: 9.35,

      yahooSalary: 15,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  bills: {
    teamName: 'bills',
    teamABV: 'BUF',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  broncos: {
    teamName: 'broncos',
    teamABV: 'DEN',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  browns: {
    teamName: 'browns',
    teamABV: 'CLE',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },

  buccaneers: {
    teamName: 'buccaneers',
    teamABV: 'TB',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  cardinals: {
    teamName: 'cardinals',
    teamABV: 'ARI',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  chargers: {
    teamName: 'chargers',
    teamABV: 'LAC',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  chiefs: {
    teamName: 'chiefs',
    teamABV: 'KC',
    homeOrAway: '',
    teamVTT: 27.5,
    QBProjectedPoints: 24,
    QBGLSPProjectedPassAttempts: 37.4,
    WROne: {
      name: 'Tyreek Hill',
      halfTwentyFifthPercentProjectedPoints: 13.8,
      halfFiftyithPercentProjectedPoints: 15.8,
      halfSeventyFifthPercentProjectedPoints: 17.8,
      PPRTwentyFifthPercentProjectedPoints: 17.2,
      PPRFiftyithPercentProjectedPoints: 19.2,
      PPRSeventyFifthPercentProjectedPoints: 21.2,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 23.4,
      projectedTargets4For4: 7.3,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 16,
      fourForFourFullPPRProjectedPoints: 19,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'Byron Pringle',
      halfTwentyFifthPercentProjectedPoints: 3,
      halfFiftyithPercentProjectedPoints: 5.1,
      halfSeventyFifthPercentProjectedPoints: 7,
      PPRTwentyFifthPercentProjectedPoints: 4,
      PPRFiftyithPercentProjectedPoints: 6.1,
      PPRSeventyFifthPercentProjectedPoints: 8,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 9.6,
      projectedTargets4For4: 3,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 3,
      halfFiftyithPercentProjectedPoints: 4,
      halfSeventyFifthPercentProjectedPoints: 6,
      PPRTwentyFifthPercentProjectedPoints: 4,
      PPRFiftyithPercentProjectedPoints: 6,
      PPRSeventyFifthPercentProjectedPoints: 7,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 12,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  colts: {
    teamName: 'colts',
    teamABV: 'IND',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  commanders: {
    teamName: 'commanders',
    teamABV: 'WAS',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  cowboys: {
    teamName: 'cowboys',
    teamABV: 'DAL',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  dolphins: {
    teamName: 'dolphins',
    teamABV: 'MIA',
    homeOrAway: '',
    teamVTT: 20.25,
    QBProjectedPoints: 15,
    QBGLSPProjectedPassAttempts: 33,
    WROne: {
      name: 'Jaylen Waddle',
      halfTwentyFifthPercentProjectedPoints: 13.6,
      halfFiftyithPercentProjectedPoints: 15.6,
      halfSeventyFifthPercentProjectedPoints: 17.6,
      PPRTwentyFifthPercentProjectedPoints: 17.35,
      PPRFiftyithPercentProjectedPoints: 19.35,
      PPRSeventyFifthPercentProjectedPoints: 21.35,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 22.75,
      projectedTargets4For4: 10,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'Devante Parker',
      halfTwentyFifthPercentProjectedPoints: 9.75,
      halfFiftyithPercentProjectedPoints: 11.75,
      halfSeventyFifthPercentProjectedPoints: 13.75,
      PPRTwentyFifthPercentProjectedPoints: 12,
      PPRFiftyithPercentProjectedPoints: 14,
      PPRSeventyFifthPercentProjectedPoints: 16,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 9.8,
      projectedTargets4For4: 6.5,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  eagles: {
    teamName: 'eagles',
    teamABV: 'PHI',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  falcons: {
    teamName: 'falcons',
    teamABV: 'ATL',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  giants: {
    teamName: 'giants',
    teamABV: 'NYG',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  jaguars: {
    teamName: 'jaguars',
    teamABV: 'JAC',
    altTeamABV: 'JAX',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'Laquan Treadwell',
      halfTwentyFifthPercentProjectedPoints: 4.9,
      halfFiftyithPercentProjectedPoints: 6.9,
      halfSeventyFifthPercentProjectedPoints: 8.9,
      PPRTwentyFifthPercentProjectedPoints: 6.8,
      PPRFiftyithPercentProjectedPoints: 8.8,
      PPRSeventyFifthPercentProjectedPoints: 10.8,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 19.8,
      projectedTargets4For4: 6.67,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'Lavishka Shenault',
      halfTwentyFifthPercentProjectedPoints: 4,
      halfFiftyithPercentProjectedPoints: 6,
      halfSeventyFifthPercentProjectedPoints: 8,
      PPRTwentyFifthPercentProjectedPoints: 6.1,
      PPRFiftyithPercentProjectedPoints: 8.1,
      PPRSeventyFifthPercentProjectedPoints: 10.1,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 18.8,
      projectedTargets4For4: 6.34,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  jets: {
    teamName: 'jets',
    teamABV: 'NYJ',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'Elijah Moore',
      halfTwentyFifthPercentProjectedPoints: 14.8,
      halfFiftyithPercentProjectedPoints: 16.83,
      halfSeventyFifthPercentProjectedPoints: 18.8,
      PPRTwentyFifthPercentProjectedPoints: 17.8,
      PPRFiftyithPercentProjectedPoints: 19.8,
      PPRSeventyFifthPercentProjectedPoints: 21.8,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 19.9,
      projectedTargets4For4: 10.3,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'Jamison Crowder',
      halfTwentyFifthPercentProjectedPoints: 5,
      halfFiftyithPercentProjectedPoints: 7,
      halfSeventyFifthPercentProjectedPoints: 9,
      PPRTwentyFifthPercentProjectedPoints: 6.8,
      PPRFiftyithPercentProjectedPoints: 8.8,
      PPRSeventyFifthPercentProjectedPoints: 10.8,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 17.9,
      projectedTargets4For4: 5.6,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  lions: {
    teamName: 'lions',
    teamABV: 'DET',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  packers: {
    teamName: 'packers',
    teamABV: 'GB',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  panthers: {
    teamName: 'panthers',
    teamABV: 'CAR',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'DJ Moore',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  patriots: {
    teamName: 'patriots',
    teamABV: 'NE',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },

  raiders: {
    teamName: 'raiders',
    teamABV: 'LV',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  rams: {
    teamName: 'rams',
    teamABV: 'LAR',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  ravens: {
    teamName: 'ravens',
    teamABV: 'BAL',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'Marquise Brown',
      halfTwentyFifthPercentProjectedPoints: 6.25,
      halfFiftyithPercentProjectedPoints: 8.25,
      halfSeventyFifthPercentProjectedPoints: 10.25,
      PPRTwentyFifthPercentProjectedPoints: 9.75,
      PPRFiftyithPercentProjectedPoints: 11.75,
      PPRSeventyFifthPercentProjectedPoints: 13.75,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 25,
      projectedTargets4For4: 9.66,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'Rashod Bateman',
      halfTwentyFifthPercentProjectedPoints: 2.86,
      halfFiftyithPercentProjectedPoints: 4.86,
      halfSeventyFifthPercentProjectedPoints: 6.86,
      PPRTwentyFifthPercentProjectedPoints: 4.3,
      PPRFiftyithPercentProjectedPoints: 6.3,
      PPRSeventyFifthPercentProjectedPoints: 8.3,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 9.5,
      projectedTargets4For4: 3.66,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  saints: {
    teamName: 'saints',
    teamABV: 'NO',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'Marquez Colston',
      halfTwentyFifthPercentProjectedPoints: 4.5,
      halfFiftyithPercentProjectedPoints: 6.5,
      halfSeventyFifthPercentProjectedPoints: 8.5,
      PPRTwentyFifthPercentProjectedPoints: 5.7,
      PPRFiftyithPercentProjectedPoints: 7.7,
      PPRSeventyFifthPercentProjectedPoints: 9.7,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 16.6,
      projectedTargets4For4: 5,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'liljordan Humphrey',
      halfTwentyFifthPercentProjectedPoints: 4.2,
      halfFiftyithPercentProjectedPoints: 6.2,
      halfSeventyFifthPercentProjectedPoints: 8.2,
      PPRTwentyFifthPercentProjectedPoints: 5,
      PPRFiftyithPercentProjectedPoints: 7,
      PPRSeventyFifthPercentProjectedPoints: 9,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 5.3,
      projectedTargets4For4: 2.67,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  seahawks: {
    teamName: 'seahawks',
    teamABV: 'SEA',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  steelers: {
    teamName: 'steelers',
    teamABV: 'PIT',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'Dionte Johnson',
      halfTwentyFifthPercentProjectedPoints: 14,
      halfFiftyithPercentProjectedPoints: 16,
      halfSeventyFifthPercentProjectedPoints: 18,
      PPRTwentyFifthPercentProjectedPoints: 17.4,
      PPRFiftyithPercentProjectedPoints: 19.4,
      PPRSeventyFifthPercentProjectedPoints: 21.4,

      top12NFLTargetShareLastThreeWeeks: 1,

      targetShareLastThreeGamesPlayed: 27.7,
      projectedTargets4For4: 8.67,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'Chase Claypool',
      halfTwentyFifthPercentProjectedPoints: 6.4,
      halfFiftyithPercentProjectedPoints: 8.4,
      halfSeventyFifthPercentProjectedPoints: 10.4,
      PPRTwentyFifthPercentProjectedPoints: 8.2,
      PPRFiftyithPercentProjectedPoints: 10.2,
      PPRSeventyFifthPercentProjectedPoints: 12.2,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 14.9,
      projectedTargets4For4: 4.67,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  texans: {
    teamName: 'texans',
    teamABV: 'HOU',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  titans: {
    teamName: 'titans',
    teamABV: 'TEN',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  vikings: {
    teamName: 'vikings',
    teamABV: 'MIN',
    homeOrAway: '',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
};

const populateTeamObjects = function (passedInTeam) {
  qbDownloadableSpreadSheetYahoo.forEach(function (playerobj, i) {
    passedInTeam.slate = '';
    allNFLTeamPace.forEach(function (teamObj) {
      let tempHomeTeamName = '';
      let tempAwayTeamName = '';
      if (teamObj['"Home"'].length === 5) {
        tempHomeTeamName = teamObj['"Home"'].slice(1, 4);
      } else {
        tempHomeTeamName = teamObj['"Home"'].slice(1, 3);
      }

      if (teamObj['"Away"'].length === 5) {
        tempAwayTeamName = teamObj['"Away"'].slice(1, 4);
      } else {
        tempAwayTeamName = teamObj['"Away"'].slice(1, 3);
      }

      if (
        tempHomeTeamName === passedInTeam.teamABV ||
        tempHomeTeamName === passedInTeam.altTeamABV
      ) {
        // console.log(tempHomeTeamName);
        passedInTeam.opponentABV = tempAwayTeamName;
        passedInTeam.homeOrAway = 'Home';
        let gameTime = teamObj['"Time"'].slice(5, 9);
        let gameDay = teamObj['"Time"'].slice(1, 4);
        let gameTimeABV = +gameTime.slice(0, 1);
        // console.log(`${passedInTeam.teamName}: ${teamObj['"Time"']}`);
        // console.log(`${gameTimeABV}: ${passedInTeam.teamName}`);
        // console.log(teamObj);
        if (gameTimeABV > 5) {
          // console.log('match');
          // console.log(passedInTeam.teamName);
          passedInTeam.slate = 'night';
        }
        if (gameTimeABV < 5) {
          passedInTeam.slate = 'main';
        }
      }

      if (
        tempAwayTeamName === passedInTeam.teamABV ||
        tempAwayTeamName === passedInTeam.altTeamABV
      ) {
        passedInTeam.opponentABV = tempHomeTeamName;
        passedInTeam.homeOrAway = 'Away';

        let gameTime = teamObj['"Time"'].slice(5, 9);
        let gameDay = teamObj['"Time"'].slice(1, 4);
        let gameTimeABV = +gameTime.slice(0, 1);
        // console.log(`${passedInTeam.teamName}: ${teamObj['"Time"']}`);
        // console.log(`${gameTimeABV}: ${passedInTeam.teamName}`);

        if (gameTimeABV > 5) {
          // console.log('match');
          // console.log(passedInTeam.teamName);
          passedInTeam.slate = 'night';
        }
        if (gameTimeABV < 5) {
          passedInTeam.slate = 'main';
        }
      }
    });
  });
};

populateTeamObjects(wrrawdata.SF49ers);
populateTeamObjects(wrrawdata.bears);
populateTeamObjects(wrrawdata.bengals);
populateTeamObjects(wrrawdata.bills);
populateTeamObjects(wrrawdata.broncos);
populateTeamObjects(wrrawdata.browns);
populateTeamObjects(wrrawdata.buccaneers);
populateTeamObjects(wrrawdata.cardinals);
populateTeamObjects(wrrawdata.chargers);
populateTeamObjects(wrrawdata.chiefs);
populateTeamObjects(wrrawdata.colts);
populateTeamObjects(wrrawdata.commanders);
populateTeamObjects(wrrawdata.cowboys);
populateTeamObjects(wrrawdata.dolphins);
populateTeamObjects(wrrawdata.eagles);
populateTeamObjects(wrrawdata.falcons);
populateTeamObjects(wrrawdata.giants);
populateTeamObjects(wrrawdata.jaguars);
populateTeamObjects(wrrawdata.jets);
populateTeamObjects(wrrawdata.lions);
populateTeamObjects(wrrawdata.packers);
populateTeamObjects(wrrawdata.panthers);
populateTeamObjects(wrrawdata.patriots);
populateTeamObjects(wrrawdata.raiders);
populateTeamObjects(wrrawdata.rams);
populateTeamObjects(wrrawdata.ravens);
populateTeamObjects(wrrawdata.saints);
populateTeamObjects(wrrawdata.seahawks);
populateTeamObjects(wrrawdata.steelers);
populateTeamObjects(wrrawdata.texans);
populateTeamObjects(wrrawdata.titans);
populateTeamObjects(wrrawdata.vikings);

// console.log(wrrawdata);

module.exports = wrrawdata;
