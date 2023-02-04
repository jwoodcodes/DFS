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
const allQBData = require('../dfs_positions_calc_funcs/qbValuesCalcs');

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
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  bears: {
    teamName: 'bears',
    teamABV: 'CHI',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  bengals: {
    teamName: 'bengals',
    teamABV: 'CIN',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  bills: {
    teamName: 'bills',
    teamABV: 'BUF',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  broncos: {
    teamName: 'broncos',
    teamABV: 'DEN',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  browns: {
    teamName: 'browns',
    teamABV: 'CLE',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },

  buccaneers: {
    teamName: 'buccaneers',
    teamABV: 'TB',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  cardinals: {
    teamName: 'cardinals',
    teamABV: 'ARI',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  chargers: {
    teamName: 'chargers',
    teamABV: 'LAC',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  chiefs: {
    teamName: 'chiefs',
    teamABV: 'KC',
    homeOrAway: '',
    teamVTT: 27.5,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  colts: {
    teamName: 'colts',
    teamABV: 'IND',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  commanders: {
    teamName: 'commanders',
    teamABV: 'WAS',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  cowboys: {
    teamName: 'cowboys',
    teamABV: 'DAL',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  dolphins: {
    teamName: 'dolphins',
    teamABV: 'MIA',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  eagles: {
    teamName: 'eagles',
    teamABV: 'PHI',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  falcons: {
    teamName: 'falcons',
    teamABV: 'ATL',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  giants: {
    teamName: 'giants',
    teamABV: 'NYG',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  jaguars: {
    teamName: 'jaguars',
    teamABV: 'JAC',
    altTeamABV: 'JAX',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  jets: {
    teamName: 'jets',
    teamABV: 'NYJ',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  lions: {
    teamName: 'lions',
    teamABV: 'DET',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  packers: {
    teamName: 'packers',
    teamABV: 'GB',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  panthers: {
    teamName: 'panthers',
    teamABV: 'CAR',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  patriots: {
    teamName: 'patriots',
    teamABV: 'NE',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },

  raiders: {
    teamName: 'raiders',
    teamABV: 'LV',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  rams: {
    teamName: 'rams',
    teamABV: 'LAR',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  ravens: {
    teamName: 'ravens',
    teamABV: 'BAL',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  saints: {
    teamName: 'saints',
    teamABV: 'NO',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  seahawks: {
    teamName: 'seahawks',
    teamABV: 'SEA',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  steelers: {
    teamName: 'steelers',
    teamABV: 'PIT',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  texans: {
    teamName: 'texans',
    teamABV: 'HOU',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  titans: {
    teamName: 'titans',
    teamABV: 'TEN',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  vikings: {
    teamName: 'vikings',
    teamABV: 'MIN',
    homeOrAway: '',
    teamVTT: 0,
    appQBProjectedPoints: 0,
    appTeamProjectedPoints: 0,
    teamProjectedForAHalfOfNegetiveGameScriptIsTrue: '',

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
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
      percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
};

const populateTeamObjects = function (
  passedInTeam,
  gameInfoPassedInTeam,
  qbDataPassedInTeam
) {
  // console.log(qbDataPassedInTeam);
  passedInTeam.teamVTT = +gameInfoPassedInTeam.vtt;
  passedInTeam.appQBProjectedPoints = qbDataPassedInTeam.appProjectedPoints;
  passedInTeam.appTeamProjectedPoints =
    gameInfoPassedInTeam.teamProjectedPointsThisWeek;

  if (
    gameInfoPassedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue ===
    true
  ) {
    passedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue = 'true';
  } else {
    passedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue = 'false';
  }

  tempWROneName = gameInfoPassedInTeam.WROneThisWeekName.replace(
    '.',
    ''
  ).replace('.', '');

  if (tempWROneName.includes("'")) {
    tempWROneName = tempWROneName.replace("'", '');
  }

  passedInTeam.WROne.name = tempWROneName;

  tempWRTwoName = gameInfoPassedInTeam.WRTwoThisWeekName.replace(
    '.',
    ''
  ).replace('.', '');

  if (tempWRTwoName.includes("'")) {
    tempWRTwoName = tempWRTwoName.replace("'", '');
  }

  passedInTeam.WRTwo.name = tempWRTwoName;

  tempWRThreeName = gameInfoPassedInTeam.WRThreeThisWeekName.replace(
    '.',
    ''
  ).replace('.', '');

  if (tempWRThreeName.includes("'")) {
    tempWRThreeName = tempWRThreeName.replace("'", '');
  }

  passedInTeam.WRThree.name = tempWRThreeName;

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

      passedInTeam.opponentVTT = gameInfoPassedInTeam.opponentThisWeek.vtt;

      allFlexGLSP.forEach(function (team, i) {
        // tempWROneName = gameInfoPassedInTeam.WROneThisWeekName.replace(
        //   '.',
        //   ''
        // ).replace('.', '');
        // if (tempWROneName.includes("'")) {
        //   tempWROneName = tempWROneName.replace("'", '');
        // }
        // passedInTeam.WROne.name = tempWROneName;
        // tempWRTwoName = gameInfoPassedInTeam.WRTwoThisWeekName.replace(
        //   '.',
        //   ''
        // ).replace('.', '');
        // if (tempWRTwoName.includes("'")) {
        //   tempWRTwoName = tempWRTwoName.replace("'", '');
        // }
        // passedInTeam.WRTwo.name = tempWRTwoName;
        // tempWRThreeName = gameInfoPassedInTeam.WRThreeThisWeekName.replace(
        //   '.',
        //   ''
        // ).replace('.', '');
        // if (tempWRThreeName.includes("'")) {
        //   tempWRThreeName = tempWRThreeName.replace("'", '');
        // }
        // passedInTeam.WRThree.name = tempWRThreeName;

        if (team['"POS"'].slice(1, -1) === 'WR') {
          SanitizedPlayerName = team['"Player"']
            .slice(1, -1)
            .replace('.', '')
            .replace('.', '')
            .replace("'", '');

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            passedInTeam.WROne.halfTwentyFifthPercentProjectedPoints =
              team['"Half - 25th"'];
            passedInTeam.WROne.halfFiftyithPercentProjectedPoints =
              team['"Half - 50th"'];
            passedInTeam.WROne.halfSeventyFifthPercentProjectedPoints =
              team['"Half - 75th"'];
            passedInTeam.WROne.PPRTwentyFifthPercentProjectedPoints =
              team['"PPR - 25th"'];
            passedInTeam.WROne.PPRFiftyithPercentProjectedPoints =
              team['"PPR - 50th"'];
            passedInTeam.WROne.PPRSeventyFifthPercentProjectedPoints =
              team['"PPR - 75th"'];
          }

          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            passedInTeam.WRTwo.halfTwentyFifthPercentProjectedPoints =
              team['"Half - 25th"'];
            passedInTeam.WRTwo.halfFiftyithPercentProjectedPoints =
              team['"Half - 50th"'];
            passedInTeam.WRTwo.halfSeventyFifthPercentProjectedPoints =
              team['"Half - 75th"'];
            passedInTeam.WRTwo.PPRTwentyFifthPercentProjectedPoints =
              team['"PPR - 25th"'];
            passedInTeam.WRTwo.PPRFiftyithPercentProjectedPoints =
              team['"PPR - 50th"'];
            passedInTeam.WRTwo.PPRSeventyFifthPercentProjectedPoints =
              team['"PPR - 75th"'];
          }

          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            passedInTeam.WRThree.halfTwentyFifthPercentProjectedPoints =
              team['"Half - 25th"'];
            passedInTeam.WRThree.halfFiftyithPercentProjectedPoints =
              team['"Half - 50th"'];
            passedInTeam.WRThree.halfSeventyFifthPercentProjectedPoints =
              team['"Half - 75th"'];
            passedInTeam.WRThree.PPRTwentyFifthPercentProjectedPoints =
              team['"PPR - 25th"'];
            passedInTeam.WRThree.PPRFiftyithPercentProjectedPoints =
              team['"PPR - 50th"'];
            passedInTeam.WRThree.PPRSeventyFifthPercentProjectedPoints =
              team['"PPR - 75th"'];
          }
        }
      });
    });
  });
};

populateTeamObjects(
  wrrawdata.SF49ers,
  gameInfo.SF49ers,
  allQBData.allTeamQBObjects.SF49ers
);
populateTeamObjects(
  wrrawdata.bears,
  gameInfo.bears,
  allQBData.allTeamQBObjects.bears
);
populateTeamObjects(
  wrrawdata.bengals,
  gameInfo.bengals,
  allQBData.allTeamQBObjects.bengals
);
populateTeamObjects(
  wrrawdata.bills,
  gameInfo.bills,
  allQBData.allTeamQBObjects.bills
);
populateTeamObjects(
  wrrawdata.broncos,
  gameInfo.broncos,
  allQBData.allTeamQBObjects.broncos
);
populateTeamObjects(
  wrrawdata.browns,
  gameInfo.browns,
  allQBData.allTeamQBObjects.browns
);
populateTeamObjects(
  wrrawdata.buccaneers,
  gameInfo.buccaneers,
  allQBData.allTeamQBObjects.buccaneers
);
populateTeamObjects(
  wrrawdata.cardinals,
  gameInfo.cardinals,
  allQBData.allTeamQBObjects.cardinals
);
populateTeamObjects(
  wrrawdata.chargers,
  gameInfo.chargers,
  allQBData.allTeamQBObjects.chargers
);
populateTeamObjects(
  wrrawdata.chiefs,
  gameInfo.chiefs,
  allQBData.allTeamQBObjects.chiefs
);
populateTeamObjects(
  wrrawdata.colts,
  gameInfo.colts,
  allQBData.allTeamQBObjects.colts
);
populateTeamObjects(
  wrrawdata.commanders,
  gameInfo.commanders,
  allQBData.allTeamQBObjects.commanders
);
populateTeamObjects(
  wrrawdata.cowboys,
  gameInfo.cowboys,
  allQBData.allTeamQBObjects.cowboys
);
populateTeamObjects(
  wrrawdata.dolphins,
  gameInfo.dolphins,
  allQBData.allTeamQBObjects.dolphins
);
populateTeamObjects(
  wrrawdata.eagles,
  gameInfo.eagles,
  allQBData.allTeamQBObjects.eagles
);
populateTeamObjects(
  wrrawdata.falcons,
  gameInfo.falcons,
  allQBData.allTeamQBObjects.falcons
);
populateTeamObjects(
  wrrawdata.giants,
  gameInfo.giants,
  allQBData.allTeamQBObjects.giants
);
populateTeamObjects(
  wrrawdata.jaguars,
  gameInfo.jaguars,
  allQBData.allTeamQBObjects.jaguars
);
populateTeamObjects(
  wrrawdata.jets,
  gameInfo.jets,
  allQBData.allTeamQBObjects.jets
);
populateTeamObjects(
  wrrawdata.lions,
  gameInfo.lions,
  allQBData.allTeamQBObjects.lions
);
populateTeamObjects(
  wrrawdata.packers,
  gameInfo.packers,
  allQBData.allTeamQBObjects.packers
);
populateTeamObjects(
  wrrawdata.panthers,
  gameInfo.panthers,
  allQBData.allTeamQBObjects.panthers
);
populateTeamObjects(
  wrrawdata.patriots,
  gameInfo.patriots,
  allQBData.allTeamQBObjects.patriots
);
populateTeamObjects(
  wrrawdata.raiders,
  gameInfo.raiders,
  allQBData.allTeamQBObjects.raiders
);
populateTeamObjects(
  wrrawdata.rams,
  gameInfo.rams,
  allQBData.allTeamQBObjects.rams
);
populateTeamObjects(
  wrrawdata.ravens,
  gameInfo.ravens,
  allQBData.allTeamQBObjects.ravens
);
populateTeamObjects(
  wrrawdata.saints,
  gameInfo.saints,
  allQBData.allTeamQBObjects.saints
);
populateTeamObjects(
  wrrawdata.seahawks,
  gameInfo.seahawks,
  allQBData.allTeamQBObjects.seahawks
);
populateTeamObjects(
  wrrawdata.steelers,
  gameInfo.steelers,
  allQBData.allTeamQBObjects.steelers
);
populateTeamObjects(
  wrrawdata.texans,
  gameInfo.texans,
  allQBData.allTeamQBObjects.texans
);
populateTeamObjects(
  wrrawdata.titans,
  gameInfo.titans,
  allQBData.allTeamQBObjects.titans
);
populateTeamObjects(
  wrrawdata.vikings,
  gameInfo.vikings,
  allQBData.allTeamQBObjects.vikings
);

// console.log(wrrawdata.vikings);
console.log(wrrawdata.bengals);

module.exports = wrrawdata;
