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

const wr4for4PlayerTargetsAppLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/wr4for4PlayerTargetsAppLastFiveWeeks')


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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeekstargetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastThreeGamesPlayed: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      //roleThisWeek determined to projected points of the top three WR's for the team0
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],
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

      targetShareLastFiveWeeks: 0,
      projectedReceptions4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [],
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
  if(qbDataPassedInTeam) {
  passedInTeam.appQBProjectedPoints = qbDataPassedInTeam.appProjectedPoints;
  
  passedInTeam.appTeamProjectedPoints =
    gameInfoPassedInTeam.teamProjectedPointsThisWeek;
  passedInTeam.byeWeek = gameInfoPassedInTeam.byeWeek2022;
  passedInTeam.QBpercentageOffFantasyPointsFromPassingLastFiveWeeks =
    qbDataPassedInTeam.percentageOfFantasyPointsFromPassingLastFiveWeeks;
  
  passedInTeam.QBProjectedPassAttemptsThisWeek =
    qbDataPassedInTeam.projectedPassAttempts;
  }
  if (
    gameInfoPassedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue ===
    true
  ) {
    passedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue = 'true';
  } else {
    passedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue = 'false';
  }
if(gameInfoPassedInTeam.WROneThisWeekName) {
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
  }
  if (tempWRTwoName.includes("'")) {
    tempWRTwoName = tempWRTwoName.replace("'", '');
  }

  passedInTeam.WRTwo.name = tempWRTwoName;
if(gameInfoPassedInTeam.WRThreeThisWeekName) {
  tempWRThreeName = gameInfoPassedInTeam.WRThreeThisWeekName.replace(
    '.',
    ''
  ).replace('.', '');

  if (tempWRThreeName.includes("'")) {
    tempWRThreeName = tempWRThreeName.replace("'", '');
  }

  passedInTeam.WRThree.name = tempWRThreeName;
}

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

      if(gameInfoPassedInTeam.opponentThisWeek) {
      passedInTeam.opponentVTT = gameInfoPassedInTeam.opponentThisWeek.vtt;
      }
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
        
        if(team['"POS"']) {
        if (team['"POS"'].slice(1, -1) === 'WR') {
          SanitizedPlayerName = team['"Player"']
            .slice(1, -1)
            .replace('.', '')
            .replace('.', '')
            .replace("'", '');

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            passedInTeam.WROne.halfTwentyFifthPercentProjectedPoints =
              +team['"Half - 25th"'];
            passedInTeam.WROne.halfFiftyithPercentProjectedPoints =
              +team['"Half - 50th"'];
            passedInTeam.WROne.halfSeventyFifthPercentProjectedPoints =
              +team['"Half - 75th"'];
            passedInTeam.WROne.PPRTwentyFifthPercentProjectedPoints =
              +team['"PPR - 25th"'];
            passedInTeam.WROne.PPRFiftyithPercentProjectedPoints =
              +team['"PPR - 50th"'];
            passedInTeam.WROne.PPRSeventyFifthPercentProjectedPoints =
              +team['"PPR - 75th"'];
            passedInTeam.WROne.glspHalfAvg = +team['"Half - AVG"'];
            passedInTeam.WROne.glspPPRAvg = +team['"PPR - AVG"'];
          }

          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            passedInTeam.WRTwo.halfTwentyFifthPercentProjectedPoints =
              +team['"Half - 25th"'];
            passedInTeam.WRTwo.halfFiftyithPercentProjectedPoints =
              +team['"Half - 50th"'];
            passedInTeam.WRTwo.halfSeventyFifthPercentProjectedPoints =
              +team['"Half - 75th"'];
            passedInTeam.WRTwo.PPRTwentyFifthPercentProjectedPoints =
              +team['"PPR - 25th"'];
            passedInTeam.WRTwo.PPRFiftyithPercentProjectedPoints =
              +team['"PPR - 50th"'];
            passedInTeam.WRTwo.PPRSeventyFifthPercentProjectedPoints =
              +team['"PPR - 75th"'];
            passedInTeam.WRTwo.glspHalfAvg = +team['"Half - AVG"'];
            passedInTeam.WRTwo.glspPPRAvg = +team['"PPR - AVG"'];
          }

          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            passedInTeam.WRThree.halfTwentyFifthPercentProjectedPoints =
              +team['"Half - 25th"'];
            passedInTeam.WRThree.halfFiftyithPercentProjectedPoints =
              +team['"Half - 50th"'];
            passedInTeam.WRThree.halfSeventyFifthPercentProjectedPoints =
              +team['"Half - 75th"'];
            passedInTeam.WRThree.PPRTwentyFifthPercentProjectedPoints =
              +team['"PPR - 25th"'];
            passedInTeam.WRThree.PPRFiftyithPercentProjectedPoints =
              +team['"PPR - 50th"'];
            passedInTeam.WRThree.PPRSeventyFifthPercentProjectedPoints =
              +team['"PPR - 75th"'];
            passedInTeam.WRThree.glspHalfAvg = +team['"Half - AVG"'];
            passedInTeam.WRThree.glspPPRAvg = +team['"PPR - AVG"'];
          }
        }
      }
      });

      wr4for4PlayerStatExplorerRecievingByAverageLastFiveWeeks.forEach(
        function (team) {
          SanitizedPlayerName = team['"full_name"']
            .slice(1, -1)
            .replace('.', '')
            .replace('.', '')
            .replace("'", '');

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            // console.log(SanitizedPlayerName);

            temp = +team['"target_share"'];
            passedInTeam.WROne.targetShareLastFiveWeeks = +temp.toFixed(3);

            tempReceptions = +team['"receptions"'];
            passedInTeam.WROne.receptionsLastFiveWeeks =
              +tempReceptions.toFixed(3);
          }

          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            // console.log(SanitizedPlayerName);
            // if (team['"posteam"'] === '"CIN"') {
            //   console.log(team);
            // }
            temp = +team['"target_share"'];
            passedInTeam.WRTwo.targetShareLastFiveWeeks = +temp.toFixed(3);

            tempReceptions = +team['"receptions"'];
            passedInTeam.WRTwo.receptionsLastFiveWeeks =
              +tempReceptions.toFixed(3);
          }

          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            // console.log(SanitizedPlayerName);
            temp = +team['"target_share"'];
            passedInTeam.WRThree.targetShareLastFiveWeeks = +temp.toFixed(3);

            tempReceptions = +team['"receptions"'];
            passedInTeam.WRThree.receptionsLastFiveWeeks =
              +tempReceptions.toFixed(3);
          }
        }
      );

      allHalfPPRProjectedPointsWithoutTeamDef.forEach(function (team) {
        if (team.Pos === 'WR') {
          SanitizedPlayerName = team.Player.replace('.', '')
            .replace('.', '')
            .replace("'", '');

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            passedInTeam.WROne.projectedReceptions4For4 = +team.Rec;
            passedInTeam.WROne.fourForFourHalfPPRProjectedPoints = +team.FFPts;
          }
          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            passedInTeam.WRTwo.projectedReceptions4For4 = +team.Rec;
            passedInTeam.WRTwo.fourForFourHalfPPRProjectedPoints = +team.FFPts;
          }
          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            passedInTeam.WRThree.projectedReceptions4For4 = +team.Rec;
            passedInTeam.WRThree.fourForFourHalfPPRProjectedPoints =
              +team.FFPts;
          }
        }
      });

      allFullPPRProjectedPointsWithoutTeamDef.forEach(function (team) {
        if (team.Pos === 'WR') {
          SanitizedPlayerName = team.Player.replace('.', '')
            .replace('.', '')
            .replace("'", '');

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            passedInTeam.WROne.fourForFourFullPPRProjectedPoints = +team.FFPts;
          }
          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            passedInTeam.WRTwo.fourForFourFullPPRProjectedPoints = +team.FFPts;
          }
          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            passedInTeam.WRThree.fourForFourFullPPRProjectedPoints =
              +team.FFPts;
          }
        }
      });

      wholeDownloadableSpreadSheetYahoo.forEach(function (team) {
        if (team.Pos === 'WR') {
          SanitizedPlayerName = team.Player.replace('.', '')
            .replace('.', '')
            .replace("'", '');

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            passedInTeam.WROne.yahooSalary = +team['Y! ($)'];
            let tempWROnePercentOfSalaryCap = +(team['Y! ($)'] / 200);
            passedInTeam.WROne.percentOfSalaryCapYahoo =
              tempWROnePercentOfSalaryCap * 100;
          }

          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            passedInTeam.WRTwo.yahooSalary = +team['Y! ($)'];
            let tempWRTwoPercentOfSalaryCap = +(team['Y! ($)'] / 200);
            passedInTeam.WRTwo.percentOfSalaryCapYahoo =
              tempWRTwoPercentOfSalaryCap * 100;
          }
          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            passedInTeam.WRThree.yahooSalary = +team['Y! ($)'];
            let tempWRThreePercentOfSalaryCap = +(team['Y! ($)'] / 200);
            passedInTeam.WRThree.percentOfSalaryCapYahoo =
              tempWRThreePercentOfSalaryCap * 100;
          }
        }
      });

      gppLeverageScoresAndProjOwnershipFanduel.forEach(function (team) {
        if (team['"Pos"'] === '"WR"') {
          SanitizedPlayerName = team['"Player"']
            .slice(1, -1)
            .replace('.', '')
            .replace('.', '')
            .replace("'", '');

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            passedInTeam.WROne.fanduelSalary = +team['"FD Sal $"'].slice(1, -1);
            tempPercentOfCap = +team['"FD Sal $"'].slice(1, -1) / 60000;
            passedInTeam.WROne.percentOfSalaryCapFanduel = +(
              tempPercentOfCap * 100
            ).toFixed();
          }

          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            passedInTeam.WRTwo.fanduelSalary = +team['"FD Sal $"'].slice(1, -1);
            tempPercentOfCap = +team['"FD Sal $"'].slice(1, -1) / 60000;
            passedInTeam.WRTwo.percentOfSalaryCapFanduel = +(
              tempPercentOfCap * 100
            ).toFixed();

            if (passedInTeam.WRThree.name === SanitizedPlayerName) {
              passedInTeam.WRThree.fanduelSalary = +team['"FD Sal $"'].slice(
                1,
                -1
              );
              tempPercentOfCap = +team['"FD Sal $"'].slice(1, -1) / 60000;
              passedInTeam.WRThree.percentOfSalaryCapFanduel = +(
                tempPercentOfCap * 100
              ).toFixed();
            }
          }
        }
      });

      gppLeverageScoresAndProjOwnershipDraftkings.forEach(function (team) {
        if (team['"Pos"'] === '"WR"') {
          // console.log(team['"Player"']);
          SanitizedPlayerName = team['"Player"']
            .slice(1, -1)
            .replace('.', '')
            .replace('.', '')
            .replace("'", '');

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            passedInTeam.WROne.draftkingsSalary = +team['"DK Sal $"'].slice(
              1,
              -1
            );
            tempPercentOfCap = +team['"DK Sal $"'].slice(1, -1) / 50000;
            passedInTeam.WROne.percentOfSalaryCapDraftkings = +(
              tempPercentOfCap * 100
            ).toFixed();
          }

          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            passedInTeam.WRTwo.draftkingsSalary = +team['"DK Sal $"'].slice(
              1,
              -1
            );
            tempPercentOfCap = +team['"DK Sal $"'].slice(1, -1) / 50000;
            passedInTeam.WRTwo.percentOfSalaryCapDraftkings = +(
              tempPercentOfCap * 100
            ).toFixed();
          }

          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            passedInTeam.WRThree.draftkingsSalary = +team['"DK Sal $"'].slice(
              1,
              -1
            );
            tempPercentOfCap = +team['"DK Sal $"'].slice(1, -1) / 50000;
            passedInTeam.WRThree.percentOfSalaryCapDraftkings = +(
              tempPercentOfCap * 100
            ).toFixed();
          }
        }

        //assigning receptions per game in games played last five weeks

        passedInTeam.WROne.receptionsPerGameInGamesPlayedLastFiveWeeks = +(
          passedInTeam.WROne.receptionsLastFiveWeeks /
          passedInTeam.WROne.numberOfGamesPlayedLastFiveWeeks
        );

        passedInTeam.WRTwo.receptionsPerGameInGamesPlayedLastFiveWeeks = +(
          passedInTeam.WRTwo.receptionsLastFiveWeeks /
          passedInTeam.WRTwo.numberOfGamesPlayedLastFiveWeeks
        );

        passedInTeam.WRThree.receptionsPerGameInGamesPlayedLastFiveWeeks = +(
          passedInTeam.WRThree.receptionsLastFiveWeeks /
          passedInTeam.WRThree.numberOfGamesPlayedLastFiveWeeks
        );

        //assigning percent higher or lower projected receptions this week is than per game average last five weeks

        passedInTeam.WROne.percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks =
          +(
            passedInTeam.WROne.projectedReceptions4For4 /
            passedInTeam.WROne.receptionsPerGameInGamesPlayedLastFiveWeeks
          ).toFixed(3);

        passedInTeam.WRTwo.percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks =
          +(
            passedInTeam.WRTwo.projectedReceptions4For4 /
            passedInTeam.WRTwo.receptionsPerGameInGamesPlayedLastFiveWeeks
          ).toFixed(3);

        passedInTeam.WRThree.percentProjectedReceptionsThisWeekIsHigherOrLowerThanAverageReceptionsLastFiveWeeks =
          +(
            passedInTeam.WRThree.projectedReceptions4For4 /
            passedInTeam.WRThree.receptionsPerGameInGamesPlayedLastFiveWeeks
          ).toFixed(3);
      });

      ////////////////////////////
      ///wr fantasy points scored per week last five weeks to help to determine what wr's roles were each week last five weeks
      /////////////////////

      wr4for4FantasyPointsBrowserLastFiveWeeks.forEach(function (wr) {
        if (
          passedInTeam.teamABV === wr.Team ||
          passedInTeam.altTeamABV === wr.Team
        ) {
          // console.log(wr.Player);
          // console.log(rb.W4);
          // console.log(rb.G);

          let weekFiveWeeksAgo = 0;
          let weekFourWeeksAgo = 0;
          let weekThreeWeeksAgo = 0;
          let weekTwoWeeksAgo = 0;
          let weekLastWeek = 0;

          if (gameInfo.week.currentWeek === 3) {
            weekTwoWeeksAgo = wr.W1;
            weekLastWeek = wr.W2;
          }

          if (gameInfo.week.currentWeek === 4) {
            weekThreeWeeksAgo = wr.W1;
            weekTwoWeeksAgo = wr.W2;
            weekLastWeek = wr.W3;
          }

          if (gameInfo.week.currentWeek === 5) {
            weekFourWeeksAgo = wr.W1;
            weekThreeWeeksAgo = wr.W2;
            weekTwoWeeksAgo = wr.W3;
            weekLastWeek = wr.W4;
          }

          if (gameInfo.week.currentWeek === 6) {
            weekFiveWeeksAgo = wr.W1;
            weekFourWeeksAgo = wr.W2;
            weekThreeWeeksAgo = wr.W3;
            weekTwoWeeksAgo = wr.W4;
            weekLastWeek = wr.W5;
          }

          if (gameInfo.week.currentWeek === 7) {
            weekFiveWeeksAgo = wr.W2;
            weekFourWeeksAgo = wr.W3;
            weekThreeWeeksAgo = wr.W4;
            weekTwoWeeksAgo = wr.W5;
            weekLastWeek = wr.W6;
          }

          if (gameInfo.week.currentWeek === 8) {
            weekFiveWeeksAgo = wr.W3;
            weekFourWeeksAgo = wr.W4;
            weekThreeWeeksAgo = wr.W5;
            weekTwoWeeksAgo = wr.W6;
            weekLastWeek = wr.W7;
          }

          if (gameInfo.week.currentWeek === 9) {
            weekFiveWeeksAgo = wr.W4;
            weekFourWeeksAgo = wr.W5;
            weekThreeWeeksAgo = wr.W6;
            weekTwoWeeksAgo = wr.W7;
            weekLastWeek = wr.W8;
          }

          if (gameInfo.week.currentWeek === 10) {
            weekFiveWeeksAgo = wr.W5;
            weekFourWeeksAgo = wr.W6;
            weekThreeWeeksAgo = wr.W7;
            weekTwoWeeksAgo = wr.W8;
            weekLastWeek = wr.W9;
          }

          if (gameInfo.week.currentWeek === 11) {
            weekFiveWeeksAgo = wr.W6;
            weekFourWeeksAgo = wr.W7;
            weekThreeWeeksAgo = wr.W8;
            weekTwoWeeksAgo = wr.W9;
            weekLastWeek = wr.W10;
          }

          if (gameInfo.week.currentWeek === 12) {
            weekFiveWeeksAgo = wr.W7;
            weekFourWeeksAgo = wr.W8;
            weekThreeWeeksAgo = wr.W9;
            weekTwoWeeksAgo = wr.W10;
            weekLastWeek = wr.W11;
          }

          if (gameInfo.week.currentWeek === 13) {
            weekFiveWeeksAgo = wr.W8;
            weekFourWeeksAgo = wr.W9;
            weekThreeWeeksAgo = wr.W10;
            weekTwoWeeksAgo = wr.W11;
            weekLastWeek = wr.W12;
          }

          if (gameInfo.week.currentWeek === 14) {
            weekFiveWeeksAgo = wr.W9;
            weekFourWeeksAgo = wr.W10;
            weekThreeWeeksAgo = wr.W11;
            weekTwoWeeksAgo = wr.W12;
            weekLastWeek = wr.W13;
          }

          if (gameInfo.week.currentWeek === 15) {
            weekFiveWeeksAgo = wr.W10;
            weekFourWeeksAgo = wr.W11;
            weekThreeWeeksAgo = wr.W12;
            weekTwoWeeksAgo = wr.W13;
            weekLastWeek = wr.W14;
          }

          if (gameInfo.week.currentWeek === 16) {
            weekFiveWeeksAgo = wr.W11;
            weekFourWeeksAgo = wr.W12;
            weekThreeWeeksAgo = wr.W13;
            weekTwoWeeksAgo = wr.W14;
            weekLastWeek = wr.W15;
          }

          if (gameInfo.week.currentWeek === 17) {
            weekFiveWeeksAgo = wr.W12;
            weekFourWeeksAgo = wr.W13;
            weekThreeWeeksAgo = wr.W14;
            weekTwoWeeksAgo = wr.W15;
            weekLastWeek = wr.W16;
          }

          if (gameInfo.week.currentWeek === 18) {
            weekFiveWeeksAgo = wr.W13;
            weekFourWeeksAgo = wr.W14;
            weekThreeWeeksAgo = wr.W15;
            weekTwoWeeksAgo = wr.W16;
            weekLastWeek = wr.W17;
          }

          // console.log(wr['"Player"']);
          SanitizedPlayerName = wr.Player.slice(1, -1)
            .replace('.', '')
            .replace('.', '')
            .replace("'", '');

          //assign half ppr points per game last five weeks

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            // console.log(wr);
            passedInTeam.WROne.halfPPRPointsPerGameLastFiveWeeks =
              +wr['"0.5 PPR Pts/G"'];
          }

          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            // console.log(wr);
            passedInTeam.WRTwo.halfPPRPointsPerGameLastFiveWeeks =
              +wr['"0.5 PPR Pts/G"'];
          }

          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            // console.log(wr);
            passedInTeam.WRThree.halfPPRPointsPerGameLastFiveWeeks =
              +wr['"0.5 PPR Pts/G"'];
          }

          //

          if (!passedInTeam.firstPassedInWRName) {
            passedInTeam.firstPassedInWRName = SanitizedPlayerName;
            // console.log(rbName, passedInTeam.firstPassedInRBName);
            passedInTeam.firstPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored =
              +weekFiveWeeksAgo;

            if (weekFiveWeeksAgo === '-') {
              passedInTeam.firstPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }

            //
            passedInTeam.firstPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored =
              +weekFourWeeksAgo;
            if (weekFourWeeksAgo === '-') {
              passedInTeam.firstPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //
            passedInTeam.firstPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored =
              +weekThreeWeeksAgo;
            if (weekThreeWeeksAgo === '-') {
              passedInTeam.firstPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //   //
            passedInTeam.firstPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored =
              +weekTwoWeeksAgo;
            if (weekTwoWeeksAgo === '-') {
              passedInTeam.firstPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //   //
            passedInTeam.firstPassedInWRLastWeekInFantasyPointsScoredPointsScored =
              +weekLastWeek;
            if (weekLastWeek === '-') {
              passedInTeam.firstPassedInWRLastWeekInFantasyPointsScoredPointsScored = 0;
            }
          }

          if (
            passedInTeam.firstPassedInWRName &&
            !passedInTeam.secondPassedInWRName &&
            SanitizedPlayerName !== passedInTeam.firstPassedInWRName
          ) {
            passedInTeam.secondPassedInWRName = SanitizedPlayerName;

            passedInTeam.secondPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored =
              +weekFiveWeeksAgo;
            if (weekFiveWeeksAgo === '-') {
              passedInTeam.secondPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //
            passedInTeam.secondPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored =
              +weekFourWeeksAgo;
            if (weekFourWeeksAgo === '-') {
              passedInTeam.secondPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //
            passedInTeam.secondPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored =
              +weekThreeWeeksAgo;
            if (weekThreeWeeksAgo === '-') {
              passedInTeam.secondPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            // //
            passedInTeam.secondPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored =
              +weekTwoWeeksAgo;
            if (weekTwoWeeksAgo === '-') {
              passedInTeam.secondPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            // //
            passedInTeam.secondPassedInWRLastWeekInFantasyPointsScoredPointsScored =
              +weekLastWeek;
            if (weekLastWeek === '-') {
              passedInTeam.secondPassedInWRLastWeekInFantasyPointsScoredPointsScored = 0;
            }
          }

          if (
            passedInTeam.firstPassedInWRName &&
            passedInTeam.secondPassedInWRName &&
            !passedInTeam.thirdPassedInWRName &&
            SanitizedPlayerName !== passedInTeam.firstPassedInWRName &&
            SanitizedPlayerName !== passedInTeam.secondPassedInWRName
          ) {
            passedInTeam.thirdPassedInWRName = SanitizedPlayerName;
            passedInTeam.thirdPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored =
              +weekFiveWeeksAgo;
            if (weekFiveWeeksAgo === '-') {
              passedInTeam.thirdPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //
            passedInTeam.thirdPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored =
              +weekFourWeeksAgo;
            if (weekFourWeeksAgo === '-') {
              passedInTeam.thirdPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //
            passedInTeam.thirdPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored =
              +weekThreeWeeksAgo;
            if (weekThreeWeeksAgo === '-') {
              passedInTeam.thirdPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            // //
            passedInTeam.thirdPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored =
              +weekTwoWeeksAgo;
            if (weekTwoWeeksAgo === '-') {
              passedInTeam.thirdPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            // //
            passedInTeam.thirdPassedInWRLastWeekInFantasyPointsScoredPointsScored =
              +weekLastWeek;
            if (weekLastWeek === '-') {
              passedInTeam.thirdPassedInWRLastWeekInFantasyPointsScoredPointsScored = 0;
            }
          }

          if (
            passedInTeam.firstPassedInWRName &&
            passedInTeam.secondPassedInWRName &&
            passedInTeam.thirdPassedInWRName &&
            !passedInTeam.fourthPassedInWRName &&
            SanitizedPlayerName !== passedInTeam.firstPassedInWRName &&
            SanitizedPlayerName !== passedInTeam.secondPassedInWRName &&
            SanitizedPlayerName !== passedInTeam.thirdPassedInWRName
          ) {
            passedInTeam.fourthPassedInWRName = SanitizedPlayerName;
            passedInTeam.fourthPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored =
              +weekFiveWeeksAgo;
            if (weekFiveWeeksAgo === '-') {
              passedInTeam.fourthPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //
            passedInTeam.fourthPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored =
              +weekFourWeeksAgo;
            if (weekFourWeeksAgo === '-') {
              passedInTeam.fourthPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            //
            passedInTeam.fourthPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored =
              +weekThreeWeeksAgo;
            if (weekThreeWeeksAgo === '-') {
              passedInTeam.fourthPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            // //
            passedInTeam.fourthPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored =
              +weekTwoWeeksAgo;
            if (weekTwoWeeksAgo === '-') {
              passedInTeam.fourthPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored = 0;
            }
            // //
            passedInTeam.fourthPassedInWRLastWeekInFantasyPointsScoredPointsScored =
              +weekLastWeek;
            if (weekLastWeek === '-') {
              passedInTeam.fourthPassedInWRLastWeekInFantasyPointsScoredPointsScored = 0;
            }
          }

          ////assinging percent of highBarBumber for each WR in each of the last five weeks

          const highBarNumber = 40;

          //five weeks ago

          passedInTeam.firstPassedInWRPercentOfHighBarNumberFiveWeeksAgo = +(
            (passedInTeam.firstPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          passedInTeam.secondPassedInWRPercentOfHighBarNumberFiveWeeksAgo = +(
            (passedInTeam.secondPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.thirdPassedInWRPercentOfHighBarNumberFiveWeeksAgo = +(
            (passedInTeam.thirdPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.fourthPassedInWRPercentOfHighBarNumberFiveWeeksAgo = +(
            (passedInTeam.fourthPassedInWRFiveWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          ////////////four weeks ago

          passedInTeam.firstPassedInWRPercentOfHighBarNumberFourWeeksAgo = +(
            (passedInTeam.firstPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          passedInTeam.secondPassedInWRPercentOfHighBarNumberFourWeeksAgo = +(
            (passedInTeam.secondPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.thirdPassedInWRPercentOfHighBarNumberFourWeeksAgo = +(
            (passedInTeam.thirdPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.fourthPassedInWRPercentOfHighBarNumberFourWeeksAgo = +(
            (passedInTeam.fourthPassedInWRFourWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          //three weeks ago

          passedInTeam.firstPassedInWRPercentOfHighBarNumberThreeWeeksAgo = +(
            (passedInTeam.firstPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          passedInTeam.secondPassedInWRPercentOfHighBarNumberThreeWeeksAgo = +(
            (passedInTeam.secondPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.thirdPassedInWRPercentOfHighBarNumberThreeWeeksAgo = +(
            (passedInTeam.thirdPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.fourthPassedInWRPercentOfHighBarNumberThreeWeeksAgo = +(
            (passedInTeam.fourthPassedInWRThreeWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          //two weeks ago

          passedInTeam.firstPassedInWRPercentOfHighBarNumberTwoWeeksAgo = +(
            (passedInTeam.firstPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          passedInTeam.secondPassedInWRPercentOfHighBarNumberTwoWeeksAgo = +(
            (passedInTeam.secondPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.thirdPassedInWRPercentOfHighBarNumberTwoWeeksAgo = +(
            (passedInTeam.thirdPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.fourthPassedInWRPercentOfHighBarNumberTwoWeeksAgo = +(
            (passedInTeam.fourthPassedInWRTwoWeeksAgoInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          //last week

          passedInTeam.firstPassedInWRPercentOfHighBarNumberLastWeek = +(
            (passedInTeam.firstPassedInWRLastWeekInFantasyPointsScoredPointsScored /
              highBarNumber) 
              *
            100
          ).toFixed(2);

          passedInTeam.secondPassedInWRPercentOfHighBarNumberLastWeek = +(
            (passedInTeam.secondPassedInWRLastWeekInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.thirdPassedInWRPercentOfHighBarNumberLastWeek = +(
            (passedInTeam.thirdPassedInWRLastWeekInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);
          passedInTeam.fourthPassedInWRPercentOfHighBarNumberLastWeek = +(
            (passedInTeam.fourthPassedInWRLastWeekInFantasyPointsScoredPointsScored /
              highBarNumber) *
            100
          ).toFixed(2);

          

          ///////////////////////////////////////////////////assinging number of games played in last five weeks

          if (passedInTeam.WROne.name === SanitizedPlayerName) {
            passedInTeam.WROne.numberOfGamesPlayedLastFiveWeeks = wr.G;

            if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === false) {
              if (gameInfo.week.currentWeek > 5) {
                percentageOfRecentWeeksPlayed = wr.G / 5;
                passedInTeam.WROne.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 5) {
                percentageOfRecentWeeksPlayed = wr.G / 4;
                passedInTeam.WROne.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 4) {
                percentageOfRecentWeeksPlayed = wr.G / 3;
                passedInTeam.WROne.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
            }

            if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === true) {
              if (gameInfo.week.currentWeek > 5) {
                percentageOfRecentWeeksPlayed = wr.G / 4;
                passedInTeam.WROne.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 5) {
                percentageOfRecentWeeksPlayed = wr.G / 3;
                passedInTeam.WROne.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 4) {
                percentageOfRecentWeeksPlayed = wr.G / 2;
                passedInTeam.WROne.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
            }
          }

          if (passedInTeam.WRTwo.name === SanitizedPlayerName) {
            passedInTeam.WRTwo.numberOfGamesPlayedLastFiveWeeks = wr.G;

            if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === false) {
              if (gameInfo.week.currentWeek > 5) {
                percentageOfRecentWeeksPlayed = wr.G / 5;
                passedInTeam.WRTwo.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 5) {
                percentageOfRecentWeeksPlayed = wr.G / 4;
                passedInTeam.WRTwo.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 4) {
                percentageOfRecentWeeksPlayed = wr.G / 3;
                passedInTeam.WRTwo.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
            }

            if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === true) {
              if (gameInfo.week.currentWeek > 5) {
                percentageOfRecentWeeksPlayed = wr.G / 4;
                passedInTeam.WRTwo.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 5) {
                percentageOfRecentWeeksPlayed = wr.G / 3;
                passedInTeam.WRTwo.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 4) {
                percentageOfRecentWeeksPlayed = wr.G / 2;
                passedInTeam.WRTwo.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
            }
          }

          if (passedInTeam.WRThree.name === SanitizedPlayerName) {
            passedInTeam.WRThree.numberOfGamesPlayedLastFiveWeeks = wr.G;

            if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === false) {
              if (gameInfo.week.currentWeek > 5) {
                percentageOfRecentWeeksPlayed = wr.G / 5;
                passedInTeam.WRThree.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 5) {
                percentageOfRecentWeeksPlayed = wr.G / 4;
                passedInTeam.WRThree.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 4) {
                percentageOfRecentWeeksPlayed = wr.G / 3;
                passedInTeam.WRThree.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
            }

            if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === true) {
              if (gameInfo.week.currentWeek > 5) {
                percentageOfRecentWeeksPlayed = wr.G / 4;
                passedInTeam.WRThree.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 5) {
                percentageOfRecentWeeksPlayed = wr.G / 3;
                passedInTeam.WRThree.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
              if (gameInfo.week.currentWeek === 4) {
                percentageOfRecentWeeksPlayed = wr.G / 2;
                passedInTeam.WRThree.percentOfGamesPlayedLastFiveWeeks =
                  percentageOfRecentWeeksPlayed;
              }
            }
          }
        }
      });

      /////////////////////
      ////////////////////////////
      ///wr expected PPR fantasy points per week last five weeks to help to determine what wr's roles were each week last five weeks
      /////////////////////


      //
      // replace wr4for4PlayerStatExplorerExpectedPPRPointsLastFiveWeeks
      // below with wr4for4PlayerTargetsAppLastFiveWeeks
      // first thing on 10/15/23
      //
      wr4for4PlayerTargetsAppLastFiveWeeks.forEach(function(wr) {
        // console.log(wr.W1)
      })

      wr4for4PlayerStatExplorerExpectedPPRPointsLastFiveWeeks.forEach(function (
        wr
      ) {
        if (
          passedInTeam.teamABV === wr['"posteam"'].slice(1, -1) ||
          passedInTeam.altTeamABV === wr['"posteam"'].slice(1, -1)
        ) {
          // console.log(wr.Player);
          // console.log(rb.W4);
          // console.log(rb.G);

          let weekFiveWeeksAgo = 0;
          let weekFourWeeksAgo = 0;
          let weekThreeWeeksAgo = 0;
          let weekTwoWeeksAgo = 0;
          let weekLastWeek = 0;

          if (gameInfo.week.currentWeek === 3) {
            weekTwoWeeksAgo = wr['"Wk 1"'];
            weekLastWeek = wr['"Wk 2"'];
          }

          if (gameInfo.week.currentWeek === 4) {
            weekThreeWeeksAgo = wr['"Wk 1"'];
            weekTwoWeeksAgo = wr['"Wk 2"'];
            weekLastWeek = wr['"Wk 3"'];
          }

          if (gameInfo.week.currentWeek === 5) {
            weekFourWeeksAgo = wr['"Wk 1"'];
            weekThreeWeeksAgo = wr['"Wk 2"'];
            weekTwoWeeksAgo = wr['"Wk 3"'];
            weekLastWeek = wr['"Wk 4"'];
          }

          if (gameInfo.week.currentWeek === 6) {
            weekFiveWeeksAgo = wr['"Wk 1"'];
            weekFourWeeksAgo = wr['"Wk 2"'];
            weekThreeWeeksAgo = wr['"Wk 3"'];
            weekTwoWeeksAgo = wr['"Wk 4"'];
            weekLastWeek = wr['"Wk 5"'];
          }

          if (gameInfo.week.currentWeek === 7) {
            weekFiveWeeksAgo = wr['"Wk 2"'];
            weekFourWeeksAgo = wr['"Wk 3"'];
            weekThreeWeeksAgo = wr['"Wk 4"'];
            weekTwoWeeksAgo = wr['"Wk 5"'];
            weekLastWeek = wr['"Wk 6"'];
          }

          if (gameInfo.week.currentWeek === 8) {
            weekFiveWeeksAgo = wr['"Wk 3"'];
            weekFourWeeksAgo = wr['"Wk 4"'];
            weekThreeWeeksAgo = wr['"Wk 5"'];
            weekTwoWeeksAgo = wr['"Wk 6"'];
            weekLastWeek = wr['"Wk 7"'];
          }

          if (gameInfo.week.currentWeek === 9) {
            weekFiveWeeksAgo = wr['"Wk 4"'];
            weekFourWeeksAgo = wr['"Wk 5"'];
            weekThreeWeeksAgo = wr['"Wk 6"'];
            weekTwoWeeksAgo = wr['"Wk 7"'];
            weekLastWeek = wr['"Wk 8"'];
          }

          if (gameInfo.week.currentWeek === 10) {
            weekFiveWeeksAgo = wr['"Wk 5"'];
            weekFourWeeksAgo = wr['"Wk 6"'];
            weekThreeWeeksAgo = wr['"Wk 7"'];
            weekTwoWeeksAgo = wr['"Wk 8"'];
            weekLastWeek = wr['"Wk 9"'];
          }

          if (gameInfo.week.currentWeek === 11) {
            weekFiveWeeksAgo = wr['"Wk 6"'];
            weekFourWeeksAgo = wr['"Wk 7"'];
            weekThreeWeeksAgo = wr['"Wk 8"'];
            weekTwoWeeksAgo = wr['"Wk 9"'];
            weekLastWeek = wr['"Wk 10"'];
          }

          if (gameInfo.week.currentWeek === 12) {
            weekFiveWeeksAgo = wr['"Wk 7"'];
            weekFourWeeksAgo = wr['"Wk 8"'];
            weekThreeWeeksAgo = wr['"Wk 9"'];
            weekTwoWeeksAgo = wr['"Wk 10"'];
            weekLastWeek = wr['"Wk 11"'];
          }

          if (gameInfo.week.currentWeek === 13) {
            weekFiveWeeksAgo = wr['"Wk 8"'];
            weekFourWeeksAgo = wr['"Wk 9"'];
            weekThreeWeeksAgo = wr['"Wk 10"'];
            weekTwoWeeksAgo = wr['"Wk 11"'];
            weekLastWeek = wr['"Wk 12"'];
          }

          if (gameInfo.week.currentWeek === 14) {
            weekFiveWeeksAgo = wr['"Wk 9"'];
            weekFourWeeksAgo = wr['"Wk 10"'];
            weekThreeWeeksAgo = wr['"Wk 11"'];
            weekTwoWeeksAgo = wr['"Wk 12"'];
            weekLastWeek = wr['"Wk 13"'];
          }

          if (gameInfo.week.currentWeek === 15) {
            weekFiveWeeksAgo = wr['"Wk 10"'];
            weekFourWeeksAgo = wr['"Wk 11"'];
            weekThreeWeeksAgo = wr['"Wk 12"'];
            weekTwoWeeksAgo = wr['"Wk 13"'];
            weekLastWeek = wr['"Wk 14"'];
          }

          if (gameInfo.week.currentWeek === 16) {
            weekFiveWeeksAgo = wr['"Wk 11"'];
            weekFourWeeksAgo = wr['"Wk 12"'];
            weekThreeWeeksAgo = wr['"Wk 13"'];
            weekTwoWeeksAgo = wr['"Wk 14"'];
            weekLastWeek = wr['"Wk 15"'];
          }

          if (gameInfo.week.currentWeek === 17) {
            weekFiveWeeksAgo = wr['"Wk 12"'];
            weekFourWeeksAgo = wr['"Wk 13"'];
            weekThreeWeeksAgo = wr['"Wk 14"'];
            weekTwoWeeksAgo = wr['"Wk 15"'];
            weekLastWeek = wr['"Wk 16"'];
          }

          if (gameInfo.week.currentWeek === 18) {
            weekFiveWeeksAgo = wr['"Wk 13"'];
            weekFourWeeksAgo = wr['"Wk 14"'];
            weekThreeWeeksAgo = wr['"Wk 15"'];
            weekTwoWeeksAgo = wr['"Wk 16"'];
            weekLastWeek = wr['"Wk 17"'];
          }

          SanitizedPlayerName = wr['"full_name"']
            .slice(1, -1)
            .replace('.', '')
            .replace('.', '')
            .replace("'", '');

          // console.log(SanitizedPlayerName);

          if (passedInTeam.firstPassedInWRName === SanitizedPlayerName) {
            // console.log(SanitizedPlayerName);
            tempFiveWeeksAgo = +weekFiveWeeksAgo;
            passedInTeam.firstPassedInWRFiveWeeksAgoExpectedPPRPoints =
              tempFiveWeeksAgo.toFixed(2);
            if (weekFiveWeeksAgo === '-') {
              passedInTeam.firstPassedInWRFiveWeeksAgoExpectedPPRPoints = 0;
            }
            tempFourWeeksAgo = +weekFourWeeksAgo;
            passedInTeam.firstPassedInWRFourWeeksAgoExpectedPPRPoints =
              tempFourWeeksAgo.toFixed(2);
            if (weekFourWeeksAgo === '-') {
              passedInTeam.firstPassedInWRFourWeeksAgoExpectedPPRPoints = 0;
            }
            tempThreeWeeksAgo = +weekThreeWeeksAgo;
            passedInTeam.firstPassedInWRThreeWeeksAgoExpectedPPRPoints =
              tempThreeWeeksAgo.toFixed(2);
            if (weekThreeWeeksAgo === '-') {
              passedInTeam.firstPassedInWRThreeWeeksAgoExpectedPPRPoints = 0;
            }
            tempTwoWeeksAgo = +weekTwoWeeksAgo;
            passedInTeam.firstPassedInWRTwoWeeksAgoExpectedPPRPoints =
              tempTwoWeeksAgo.toFixed(2);
            if (weekTwoWeeksAgo === '-') {
              passedInTeam.firstPassedInWRTwoWeeksAgoExpectedPPRPoints = 0;
            }
            tempLastWeek = +weekLastWeek;
            passedInTeam.firstPassedInWRLastWeekExpectedPPRPoints =
              tempLastWeek.toFixed(2);
            if (weekLastWeek === '-') {
              passedInTeam.firstPassedInWRLastWeekExpectedPPRPoints = 0;
            }
          }
          if (passedInTeam.secondPassedInWRName === SanitizedPlayerName) {
            // console.log(SanitizedPlayerName);
            tempFiveWeeksAgo = +weekFiveWeeksAgo;
            passedInTeam.secondPassedInWRFiveWeeksAgoExpectedPPRPoints =
              tempFiveWeeksAgo.toFixed(2);
            if (weekFiveWeeksAgo === '-') {
              passedInTeam.secondPassedInWRFiveWeeksAgoExpectedPPRPoints = 0;
            }
            tempFourWeeksAgo = +weekFourWeeksAgo;
            passedInTeam.secondPassedInWRFourWeeksAgoExpectedPPRPoints =
              tempFourWeeksAgo.toFixed(2);
            if (weekFourWeeksAgo === '-') {
              passedInTeam.secondPassedInWRFourWeeksAgoExpectedPPRPoints = 0;
            }
            tempThreeWeeksAgo = +weekThreeWeeksAgo;
            passedInTeam.secondPassedInWRThreeWeeksAgoExpectedPPRPoints =
              tempThreeWeeksAgo.toFixed(2);
            if (weekThreeWeeksAgo === '-') {
              passedInTeam.secondPassedInWRThreeWeeksAgoExpectedPPRPoints = 0;
            }
            tempTwoWeeksAgo = +weekTwoWeeksAgo;
            passedInTeam.secondPassedInWRTwoWeeksAgoExpectedPPRPoints =
              tempTwoWeeksAgo.toFixed(2);
            if (weekTwoWeeksAgo === '-') {
              passedInTeam.secondPassedInWRTwoWeeksAgoExpectedPPRPoints = 0;
            }
            tempLastWeek = +weekLastWeek;
            passedInTeam.secondPassedInWRLastWeekExpectedPPRPoints =
              tempLastWeek.toFixed(2);
            if (weekLastWeek === '-') {
              passedInTeam.secondPassedInWRLastWeekExpectedPPRPoints = 0;
            }
          }
          if (passedInTeam.thirdPassedInWRName === SanitizedPlayerName) {
            // console.log(SanitizedPlayerName);
            tempFiveWeeksAgo = +weekFiveWeeksAgo;
            passedInTeam.thirdPassedInWRFiveWeeksAgoExpectedPPRPoints =
              tempFiveWeeksAgo.toFixed(2);
            if (weekFiveWeeksAgo === '-') {
              passedInTeam.thirdPassedInWRFiveWeeksAgoExpectedPPRPoints = 0;
            }
            tempFourWeeksAgo = +weekFourWeeksAgo;
            passedInTeam.thirdPassedInWRFourWeeksAgoExpectedPPRPoints =
              tempFourWeeksAgo.toFixed(2);
            if (weekFourWeeksAgo === '-') {
              passedInTeam.thirdPassedInWRFourWeeksAgoExpectedPPRPoints = 0;
            }
            tempThreeWeeksAgo = +weekThreeWeeksAgo;
            passedInTeam.thirdPassedInWRThreeWeeksAgoExpectedPPRPoints =
              tempThreeWeeksAgo.toFixed(2);
            if (weekThreeWeeksAgo === '-') {
              passedInTeam.thirdPassedInWRThreeWeeksAgoExpectedPPRPoints = 0;
            }
            tempTwoWeeksAgo = +weekTwoWeeksAgo;
            passedInTeam.thirdPassedInWRTwoWeeksAgoExpectedPPRPoints =
              tempTwoWeeksAgo.toFixed(2);
            if (weekTwoWeeksAgo === '-') {
              passedInTeam.thirdPassedInWRTwoWeeksAgoExpectedPPRPoints = 0;
            }
            tempLastWeek = +weekLastWeek;
            passedInTeam.thirdPassedInWRLastWeekExpectedPPRPoints =
              tempLastWeek.toFixed(2);
            if (weekLastWeek === '-') {
              passedInTeam.thirdPassedInWRLastWeekExpectedPPRPoints = 0;
            }
          }
          if (passedInTeam.fourthPassedInWRName === SanitizedPlayerName) {
            // console.log(SanitizedPlayerName);
            tempFiveWeeksAgo = +weekFiveWeeksAgo;
            passedInTeam.fourthPassedInWRFiveWeeksAgoExpectedPPRPoints =
              tempFiveWeeksAgo.toFixed(2);
            if (weekFiveWeeksAgo === '-') {
              passedInTeam.fourthPassedInWRFiveWeeksAgoExpectedPPRPoints = 0;
            }
            tempFourWeeksAgo = +weekFourWeeksAgo;
            passedInTeam.fourthPassedInWRFourWeeksAgoExpectedPPRPoints =
              tempFourWeeksAgo.toFixed(2);
            if (weekFourWeeksAgo === '-') {
              passedInTeam.fourthPassedInWRFourWeeksAgoExpectedPPRPoints = 0;
            }
            tempThreeWeeksAgo = +weekThreeWeeksAgo;
            passedInTeam.fourthPassedInWRThreeWeeksAgoExpectedPPRPoints =
              tempThreeWeeksAgo.toFixed(2);
            if (weekThreeWeeksAgo === '-') {
              passedInTeam.fourthPassedInWRThreeWeeksAgoExpectedPPRPoints = 0;
            }
            tempTwoWeeksAgo = +weekTwoWeeksAgo;
            passedInTeam.fourthPassedInWRTwoWeeksAgoExpectedPPRPoints =
              tempTwoWeeksAgo.toFixed(2);
            if (weekTwoWeeksAgo === '-') {
              passedInTeam.fourthPassedInWRTwoWeeksAgoExpectedPPRPoints = 0;
            }
            tempLastWeek = +weekLastWeek;
            passedInTeam.fourthPassedInWRLastWeekExpectedPPRPoints =
              tempLastWeek.toFixed(2);
            if (weekLastWeek === '-') {
              passedInTeam.fourthPassedInWRLastWeekExpectedPPRPoints = 0;
            }
          }

          ////assinging percent of highBarBumber for each WR in each of the last five weeks

          const expectedPPRPointsHighBarNumber = 40;

          //five weeks ago

          passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberFiveWeeksAgo =
            +(
              (passedInTeam.firstPassedInWRFiveWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberFiveWeeksAgo =
            +(
              (passedInTeam.secondPassedInWRFiveWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberFiveWeeksAgo =
            +(
              (passedInTeam.thirdPassedInWRFiveWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberFiveWeeksAgo =
            +(
              (passedInTeam.fourthPassedInWRFiveWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          ////////////four weeks ago

          passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberFourWeeksAgo =
            +(
              (passedInTeam.firstPassedInWRFourWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberFourWeeksAgo =
            +(
              (passedInTeam.secondPassedInWRFourWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberFourWeeksAgo =
            +(
              (passedInTeam.thirdPassedInWRFourWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberFourWeeksAgo =
            +(
              (passedInTeam.fourthPassedInWRFourWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          ////////////three weeks ago

          passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberThreeWeeksAgo =
            +(
              (passedInTeam.firstPassedInWRThreeWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberThreeWeeksAgo =
            +(
              (passedInTeam.secondPassedInWRThreeWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberThreeWeeksAgo =
            +(
              (passedInTeam.thirdPassedInWRThreeWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberThreeWeeksAgo =
            +(
              (passedInTeam.fourthPassedInWRThreeWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          ////////////two weeks ago

          passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberTwoWeeksAgo =
            +(
              (passedInTeam.firstPassedInWRTwoWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberTwoWeeksAgo =
            +(
              (passedInTeam.secondPassedInWRTwoWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberTwoWeeksAgo =
            +(
              (passedInTeam.thirdPassedInWRTwoWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberTwoWeeksAgo =
            +(
              (passedInTeam.fourthPassedInWRTwoWeeksAgoExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          ////////////Last Week

          passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberLastWeek =
            +(
              (passedInTeam.firstPassedInWRLastWeekExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);

          passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberLastWeek =
            +(
              (passedInTeam.secondPassedInWRLastWeekExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberLastWeek =
            +(
              (passedInTeam.thirdPassedInWRLastWeekExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
          passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberLastWeek =
            +(
              (passedInTeam.fourthPassedInWRLastWeekExpectedPPRPoints /
                expectedPPRPointsHighBarNumber) *
              100
            ).toFixed(2);
        }

        //assigning total scores for each WR for each week to determine role that week

        FiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray = [];
        fourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray = [];
        threeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray = [];
        twoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray = [];
        lastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray = [];

        //five weeks ago

        passedInTeam.firstPassedInWRTotalScoreFiveWeeksAgo =
          +passedInTeam.firstPassedInWRPercentOfHighBarNumberFiveWeeksAgo +
          +passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberFiveWeeksAgo;
        FiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.firstPassedInWRTotalScoreFiveWeeksAgo
        );

        passedInTeam.secondPassedInWRTotalScoreFiveWeeksAgo =
          +passedInTeam.secondPassedInWRPercentOfHighBarNumberFiveWeeksAgo +
          +passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberFiveWeeksAgo;
        FiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.secondPassedInWRTotalScoreFiveWeeksAgo
        );

        passedInTeam.thirdPassedInWRTotalScoreFiveWeeksAgo =
          +passedInTeam.thirdPassedInWRPercentOfHighBarNumberFiveWeeksAgo +
          +passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberFiveWeeksAgo;
        FiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.thirdPassedInWRTotalScoreFiveWeeksAgo
        );

        passedInTeam.fourthPassedInWRTotalScoreFiveWeeksAgo =
          +passedInTeam.fourthPassedInWRPercentOfHighBarNumberFiveWeeksAgo +
          +passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberFiveWeeksAgo;
        FiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.fourthPassedInWRTotalScoreFiveWeeksAgo
        );

        passedInTeam.FiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
          FiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray;

        //four weeks ago

        passedInTeam.firstPassedInWRTotalScoreFourWeeksAgo =
          +passedInTeam.firstPassedInWRPercentOfHighBarNumberFourWeeksAgo +
          +passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberFourWeeksAgo;
        fourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.firstPassedInWRTotalScoreFourWeeksAgo
        );

        passedInTeam.secondPassedInWRTotalScoreFourWeeksAgo =
          +passedInTeam.secondPassedInWRPercentOfHighBarNumberFourWeeksAgo +
          +passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberFourWeeksAgo;
        fourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.secondPassedInWRTotalScoreFourWeeksAgo
        );

        passedInTeam.thirdPassedInWRTotalScoreFourWeeksAgo =
          +passedInTeam.thirdPassedInWRPercentOfHighBarNumberFourWeeksAgo +
          +passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberFourWeeksAgo;
        fourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.thirdPassedInWRTotalScoreFourWeeksAgo
        );

        passedInTeam.fourthPassedInWRTotalScoreFourWeeksAgo =
          +passedInTeam.fourthPassedInWRPercentOfHighBarNumberFourWeeksAgo +
          +passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberFourWeeksAgo;
        fourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.fourthPassedInWRTotalScoreFourWeeksAgo
        );

        passedInTeam.FourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
          fourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray;

        //three weeks ago

        passedInTeam.firstPassedInWRTotalScoreThreeWeeksAgo =
          +passedInTeam.firstPassedInWRPercentOfHighBarNumberThreeWeeksAgo +
          +passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberThreeWeeksAgo;
        threeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.firstPassedInWRTotalScoreThreeWeeksAgo
        );

        passedInTeam.secondPassedInWRTotalScoreThreeWeeksAgo =
          +passedInTeam.secondPassedInWRPercentOfHighBarNumberThreeWeeksAgo +
          +passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberThreeWeeksAgo;
        threeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.secondPassedInWRTotalScoreThreeWeeksAgo
        );

        passedInTeam.thirdPassedInWRTotalScoreThreeWeeksAgo =
          +passedInTeam.thirdPassedInWRPercentOfHighBarNumberThreeWeeksAgo +
          +passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberThreeWeeksAgo;
        threeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.thirdPassedInWRTotalScoreThreeWeeksAgo
        );

        passedInTeam.fourthPassedInWRTotalScoreThreeWeeksAgo =
          +passedInTeam.fourthPassedInWRPercentOfHighBarNumberThreeWeeksAgo +
          +passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberThreeWeeksAgo;
        threeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.fourthPassedInWRTotalScoreThreeWeeksAgo
        );

        passedInTeam.ThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
          threeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray;

        //two weeks ago

        passedInTeam.firstPassedInWRTotalScoreTwoWeeksAgo =
          +passedInTeam.firstPassedInWRPercentOfHighBarNumberTwoWeeksAgo +
          +passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberTwoWeeksAgo;
        twoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.firstPassedInWRTotalScoreTwoWeeksAgo
        );

        passedInTeam.secondPassedInWRTotalScoreTwoWeeksAgo =
          +passedInTeam.secondPassedInWRPercentOfHighBarNumberTwoWeeksAgo +
          +passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberTwoWeeksAgo;
        twoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.secondPassedInWRTotalScoreTwoWeeksAgo
        );

        passedInTeam.thirdPassedInWRTotalScoreTwoWeeksAgo =
          +passedInTeam.thirdPassedInWRPercentOfHighBarNumberTwoWeeksAgo +
          +passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberTwoWeeksAgo;
        twoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.thirdPassedInWRTotalScoreTwoWeeksAgo
        );

        passedInTeam.fourthPassedInWRTotalScoreTwoWeeksAgo =
          +passedInTeam.fourthPassedInWRPercentOfHighBarNumberTwoWeeksAgo +
          +passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberTwoWeeksAgo;
        twoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.fourthPassedInWRTotalScoreTwoWeeksAgo
        );

        passedInTeam.TwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
          twoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray;

        //last week

        passedInTeam.firstPassedInWRTotalScoreLastWeek =
          +passedInTeam.firstPassedInWRPercentOfHighBarNumberLastWeek +
          +passedInTeam.firstPassedInWRExpectedPPRPointsPercentOfHighBarNumberLastWeek;
        lastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.firstPassedInWRTotalScoreLastWeek
        );

        passedInTeam.secondPassedInWRTotalScoreLastWeek =
          +passedInTeam.secondPassedInWRPercentOfHighBarNumberLastWeek +
          +passedInTeam.secondPassedInWRExpectedPPRPointsPercentOfHighBarNumberLastWeek;
        lastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.secondPassedInWRTotalScoreLastWeek
        );

        passedInTeam.thirdPassedInWRTotalScoreLastWeek =
          +passedInTeam.thirdPassedInWRPercentOfHighBarNumberLastWeek +
          +passedInTeam.thirdPassedInWRExpectedPPRPointsPercentOfHighBarNumberLastWeek;
        lastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.thirdPassedInWRTotalScoreLastWeek
        );

        passedInTeam.fourthPassedInWRTotalScoreLastWeek =
          +passedInTeam.fourthPassedInWRPercentOfHighBarNumberLastWeek +
          +passedInTeam.fourthPassedInWRExpectedPPRPointsPercentOfHighBarNumberLastWeek;
        lastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.push(
          passedInTeam.fourthPassedInWRTotalScoreLastWeek
        );

        passedInTeam.LastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
          lastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray;
      });
    });

    // // let sortedallHalfFlexValuesWithNames = allHalfFlexValuesWithNames.sort(
    // //   (a, b) => {
    // //     if (a > b) return 1;
    // //     if (a < b) return -1;
    // //   }
    // // );

    passedInTeam.sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
      passedInTeam.FiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );
    passedInTeam.sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
      passedInTeam.FourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );
    passedInTeam.sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
      passedInTeam.ThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );
    passedInTeam.sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
      passedInTeam.TwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );
    passedInTeam.sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray =
      passedInTeam.LastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );

    //assign what the values that will be pushed into players arrays for the week at each role will be

    ///////////////five weeks ago

    if (
      passedInTeam
        .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
        passedInTeam
          .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
      16
    ) {
      passedInTeam.WROneFiveWeeksAgoValue = 1.5;
    } else {
      passedInTeam.WROneFiveWeeksAgoValue = 1;
    }

    if (
      passedInTeam
        .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
        passedInTeam
          .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
      16
    ) {
      passedInTeam.WRTwoFiveWeeksAgoValue = 1.5;
    } else {
      passedInTeam.WRTwoFiveWeeksAgoValue = 2;
    }

    if (
      passedInTeam
        .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] -
        passedInTeam
          .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] <
      16
    ) {
      if (passedInTeam.WRTwoFiveWeeksAgoValue === 2) {
        passedInTeam.WRTwoFiveWeeksAgoValue = 2.5;
        passedInTeam.WRThreeFiveWeeksAgoValue = 2.5;
      } else {
        passedInTeam.WRThreeFiveWeeksAgoValue = 2.5;
      }
    } else {
      passedInTeam.WRThreeFiveWeeksAgoValue = 3;
    }
    if (
      passedInTeam
        .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] -
        passedInTeam
          .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3] <
      16
    ) {
      if (passedInTeam.WRThreeFiveWeeksAgoValue === 3) {
        passedInTeam.WRThreeFiveWeeksAgoValue = 3.5;
        passedInTeam.WRFourFiveWeeksAgoValue = 3.5;
      } else {
        passedInTeam.WRFourFiveWeeksAgoValue = 3.5;
      }
    } else {
      passedInTeam.WRFourFiveWeeksAgoValue = 4;
    }
  });

  ////setting which WR was in what role to their names each of the last five weeks

  //first passed in WR

  if (
    passedInTeam.firstPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneFiveWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoFiveWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeFiveWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourFiveWeeksAgo = passedInTeam.firstPassedInWRName;
  }

  //second passed in WR

  if (
    passedInTeam.secondPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneFiveWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoFiveWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeFiveWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourFiveWeeksAgo = passedInTeam.secondPassedInWRName;
  }

  //third passed in WR

  if (
    passedInTeam.thirdPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneFiveWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoFiveWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeFiveWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourFiveWeeksAgo = passedInTeam.thirdPassedInWRName;
  }

  //fourth passed in WR

  if (
    passedInTeam.fourthPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneFiveWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoFiveWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeFiveWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreFiveWeeksAgo ===
    passedInTeam
      .sortedFiveWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourFiveWeeksAgo = passedInTeam.fourthPassedInWRName;
  }

  //

  //WROne this week

  if (passedInTeam.wrOneFiveWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoFiveWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeFiveWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourFiveWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourFiveWeeksAgoValue
    );
  }

  //WRTwo this week

  if (passedInTeam.wrOneFiveWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoFiveWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeFiveWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourFiveWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourFiveWeeksAgoValue
    );
  }

  //WRThree this week

  if (passedInTeam.wrOneFiveWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoFiveWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeFiveWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeFiveWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourFiveWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourFiveWeeksAgoValue
    );
  }

  ///////////////four weeks ago
  //

  if (
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
      passedInTeam
        .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
    16
  ) {
    passedInTeam.WROneFourWeeksAgoValue = 1.5;
  } else {
    passedInTeam.WROneFourWeeksAgoValue = 1;
  }

  if (
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
      passedInTeam
        .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
    16
  ) {
    passedInTeam.WRTwoFourWeeksAgoValue = 1.5;
  } else {
    passedInTeam.WRTwoFourWeeksAgoValue = 2;
  }

  if (
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] -
      passedInTeam
        .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] <
    16
  ) {
    if (passedInTeam.WRTwoFourWeeksAgoValue === 2) {
      passedInTeam.WRTwoFourWeeksAgoValue = 2.5;
      passedInTeam.WRThreeFourWeeksAgoValue = 2.5;
    } else {
      passedInTeam.WRThreeFourWeeksAgoValue = 2.5;
    }
  } else {
    passedInTeam.WRThreeFourWeeksAgoValue = 3;
  }
  if (
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] -
      passedInTeam
        .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3] <
    16
  ) {
    if (passedInTeam.WRThreeFourWeeksAgoValue === 3) {
      passedInTeam.WRThreeFourWeeksAgoValue = 3.5;
      passedInTeam.WRFourFourWeeksAgoValue = 3.5;
    } else {
      passedInTeam.WRFourFourWeeksAgoValue = 3.5;
    }
  } else {
    passedInTeam.WRFourFourWeeksAgoValue = 4;
  }

  ////setting which WR was in what role to their names each of the last five weeks

  //first passed in WR

  if (
    passedInTeam.firstPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneFourWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoFourWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeFourWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourFourWeeksAgo = passedInTeam.firstPassedInWRName;
  }

  //second passed in WR

  if (
    passedInTeam.secondPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneFourWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoFourWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeFourWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourFourWeeksAgo = passedInTeam.secondPassedInWRName;
  }

  //third passed in WR

  if (
    passedInTeam.thirdPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneFourWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoFourWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeFourWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourFourWeeksAgo = passedInTeam.thirdPassedInWRName;
  }

  //fourth passed in WR

  if (
    passedInTeam.fourthPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneFourWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoFourWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeFourWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreFourWeeksAgo ===
    passedInTeam
      .sortedFourWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourFourWeeksAgo = passedInTeam.fourthPassedInWRName;
  }

  //

  //WROne this week

  if (passedInTeam.wrOneFourWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoFourWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeFourWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourFourWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourFourWeeksAgoValue
    );
  }

  //WRTwo this week

  if (passedInTeam.wrOneFourWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoFourWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeFourWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourFourWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourFourWeeksAgoValue
    );
  }

  //WRThree this week

  if (passedInTeam.wrOneFourWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoFourWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeFourWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeFourWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourFourWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourFourWeeksAgoValue
    );
  }

  //Three Weeks Ago

  if (
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
      passedInTeam
        .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
    16
  ) {
    passedInTeam.WROneThreeWeeksAgoValue = 1.5;
  } else {
    passedInTeam.WROneThreeWeeksAgoValue = 1;
  }

  if (
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
      passedInTeam
        .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
    16
  ) {
    passedInTeam.WRTwoThreeWeeksAgoValue = 1.5;
  } else {
    passedInTeam.WRTwoThreeWeeksAgoValue = 2;
  }

  if (
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] -
      passedInTeam
        .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] <
    16
  ) {
    if (passedInTeam.WRTwoThreeWeeksAgoValue === 2) {
      passedInTeam.WRTwoThreeWeeksAgoValue = 2.5;
      passedInTeam.WRThreeThreeWeeksAgoValue = 2.5;
    } else {
      passedInTeam.WRThreeThreeWeeksAgoValue = 2.5;
    }
  } else {
    passedInTeam.WRThreeThreeWeeksAgoValue = 3;
  }
  if (
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] -
      passedInTeam
        .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3] <
    16
  ) {
    if (passedInTeam.WRThreeThreeWeeksAgoValue === 3) {
      passedInTeam.WRThreeThreeWeeksAgoValue = 3.5;
      passedInTeam.WRFourThreeWeeksAgoValue = 3.5;
    } else {
      passedInTeam.WRFourThreeWeeksAgoValue = 3.5;
    }
  } else {
    passedInTeam.WRFourThreeWeeksAgoValue = 4;
  }

  ////setting which WR was in what role to their names each of the last five weeks

  //first passed in WR

  if (
    passedInTeam.firstPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneThreeWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoThreeWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeThreeWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourThreeWeeksAgo = passedInTeam.firstPassedInWRName;
  }

  //second passed in WR

  if (
    passedInTeam.secondPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneThreeWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoThreeWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeThreeWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourThreeWeeksAgo = passedInTeam.secondPassedInWRName;
  }

  //third passed in WR

  if (
    passedInTeam.thirdPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneThreeWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoThreeWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeThreeWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourThreeWeeksAgo = passedInTeam.thirdPassedInWRName;
  }

  //fourth passed in WR

  if (
    passedInTeam.fourthPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneThreeWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoThreeWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeThreeWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreThreeWeeksAgo ===
    passedInTeam
      .sortedThreeWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourThreeWeeksAgo = passedInTeam.fourthPassedInWRName;
  }

  //

  //WROne this week

  if (passedInTeam.wrOneThreeWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoThreeWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeThreeWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourThreeWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourThreeWeeksAgoValue
    );
  }

  //WRTwo this week

  if (passedInTeam.wrOneThreeWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoThreeWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeThreeWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourThreeWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourThreeWeeksAgoValue
    );
  }

  //WRThree this week

  if (passedInTeam.wrOneThreeWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoThreeWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeThreeWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeThreeWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourThreeWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourThreeWeeksAgoValue
    );
  }

  //Two Weeks Ago

  if (
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
      passedInTeam
        .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
    16
  ) {
    passedInTeam.WROneTwoWeeksAgoValue = 1.5;
  } else {
    passedInTeam.WROneTwoWeeksAgoValue = 1;
  }

  if (
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
      passedInTeam
        .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
    16
  ) {
    passedInTeam.WRTwoTwoWeeksAgoValue = 1.5;
  } else {
    passedInTeam.WRTwoTwoWeeksAgoValue = 2;
  }

  if (
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] -
      passedInTeam
        .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] <
    16
  ) {
    if (passedInTeam.WRTwoTwoWeeksAgoValue === 2) {
      passedInTeam.WRTwoTwoWeeksAgoValue = 2.5;
      passedInTeam.WRThreeTwoWeeksAgoValue = 2.5;
    } else {
      passedInTeam.WRThreeTwoWeeksAgoValue = 2.5;
    }
  } else {
    passedInTeam.WRThreeTwoWeeksAgoValue = 3;
  }
  if (
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] -
      passedInTeam
        .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3] <
    16
  ) {
    if (passedInTeam.WRThreeTwoWeeksAgoValue === 3) {
      passedInTeam.WRThreeTwoWeeksAgoValue = 3.5;
      passedInTeam.WRFourTwoWeeksAgoValue = 3.5;
    } else {
      passedInTeam.WRFourTwoWeeksAgoValue = 3.5;
    }
  } else {
    passedInTeam.WRFourTwoWeeksAgoValue = 4;
  }

  ////setting which WR was in what role to their names each of the last five weeks

  //first passed in WR

  if (
    passedInTeam.firstPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneTwoWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoTwoWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeTwoWeeksAgo = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourTwoWeeksAgo = passedInTeam.firstPassedInWRName;
  }

  //second passed in WR

  if (
    passedInTeam.secondPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneTwoWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoTwoWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeTwoWeeksAgo = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourTwoWeeksAgo = passedInTeam.secondPassedInWRName;
  }

  //third passed in WR

  if (
    passedInTeam.thirdPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneTwoWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoTwoWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeTwoWeeksAgo = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourTwoWeeksAgo = passedInTeam.thirdPassedInWRName;
  }

  //fourth passed in WR

  if (
    passedInTeam.fourthPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneTwoWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoTwoWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeTwoWeeksAgo = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreTwoWeeksAgo ===
    passedInTeam
      .sortedTwoWeeksAgoWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourTwoWeeksAgo = passedInTeam.fourthPassedInWRName;
  }

  //

  //WROne this week

  if (passedInTeam.wrOneTwoWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoTwoWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeTwoWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourTwoWeeksAgo === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourTwoWeeksAgoValue
    );
  }

  //WRTwo this week

  if (passedInTeam.wrOneTwoWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoTwoWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeTwoWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourTwoWeeksAgo === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourTwoWeeksAgoValue
    );
  }

  //WRThree this week

  if (passedInTeam.wrOneTwoWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrTwoTwoWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrThreeTwoWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeTwoWeeksAgoValue
    );
  }
  if (passedInTeam.wrFourTwoWeeksAgo === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourTwoWeeksAgoValue
    );
  }

  //Last Week

  if (
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
      passedInTeam
        .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
    16
  ) {
    passedInTeam.WROneLastWeekValue = 1.5;
  } else {
    passedInTeam.WROneLastWeekValue = 1;
  }

  if (
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0] -
      passedInTeam
        .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] <
    16
  ) {
    passedInTeam.WRTwoLastWeekValue = 1.5;
  } else {
    passedInTeam.WRTwoLastWeekValue = 2;
  }

  if (
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1] -
      passedInTeam
        .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] <
    16
  ) {
    if (passedInTeam.WRTwoLastWeekValue === 2) {
      passedInTeam.WRTwoLastWeekValue = 2.5;
      passedInTeam.WRThreeLastWeekValue = 2.5;
    } else {
      passedInTeam.WRThreeLastWeekValue = 2.5;
    }
  } else {
    passedInTeam.WRThreeLastWeekValue = 3;
  }
  if (
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2] -
      passedInTeam
        .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3] <
    16
  ) {
    if (passedInTeam.WRThreeLastWeekValue === 3) {
      passedInTeam.WRThreeLastWeekValue = 3.5;
      passedInTeam.WRFourLastWeekValue = 3.5;
    } else {
      passedInTeam.WRFourLastWeekValue = 3.5;
    }
  } else {
    passedInTeam.WRFourLastWeekValue = 4;
  }

  ////setting which WR was in what role to their names each of the last five weeks

  //first passed in WR

  if (
    passedInTeam.firstPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneLastWeek = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoLastWeek = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeLastWeek = passedInTeam.firstPassedInWRName;
  }
  if (
    passedInTeam.firstPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourLastWeek = passedInTeam.firstPassedInWRName;
  }

  //second passed in WR

  if (
    passedInTeam.secondPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneLastWeek = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoLastWeek = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeLastWeek = passedInTeam.secondPassedInWRName;
  }
  if (
    passedInTeam.secondPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourLastWeek = passedInTeam.secondPassedInWRName;
  }

  //third passed in WR

  if (
    passedInTeam.thirdPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneLastWeek = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoLastWeek = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeLastWeek = passedInTeam.thirdPassedInWRName;
  }
  if (
    passedInTeam.thirdPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourLastWeek = passedInTeam.thirdPassedInWRName;
  }

  //fourth passed in WR

  if (
    passedInTeam.fourthPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[0]
  ) {
    passedInTeam.wrOneLastWeek = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[1]
  ) {
    passedInTeam.wrTwoLastWeek = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[2]
  ) {
    passedInTeam.wrThreeLastWeek = passedInTeam.fourthPassedInWRName;
  }
  if (
    passedInTeam.fourthPassedInWRTotalScoreLastWeek ===
    passedInTeam
      .sortedLastWeekWrTotalScoresForEachOfTheLastFiveWeeksByWeekArray[3]
  ) {
    passedInTeam.wrFourLastWeek = passedInTeam.fourthPassedInWRName;
  }

  //

  //WROne this week

  if (passedInTeam.wrOneLastWeek === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneLastWeekValue
    );
  }
  if (passedInTeam.wrTwoLastWeek === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoLastWeekValue
    );
  }
  if (passedInTeam.wrThreeLastWeek === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeLastWeekValue
    );
  }
  if (passedInTeam.wrFourLastWeek === passedInTeam.WROne.name) {
    passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourLastWeekValue
    );
  }

  //WRTwo this week

  if (passedInTeam.wrOneLastWeek === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneLastWeekValue
    );
  }
  if (passedInTeam.wrTwoLastWeek === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoLastWeekValue
    );
  }
  if (passedInTeam.wrThreeLastWeek === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeLastWeekValue
    );
  }
  if (passedInTeam.wrFourLastWeek === passedInTeam.WRTwo.name) {
    passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourLastWeekValue
    );
  }

  //WRThree this week

  if (passedInTeam.wrOneLastWeek === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WROneLastWeekValue
    );
  }
  if (passedInTeam.wrTwoLastWeek === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRTwoLastWeekValue
    );
  }
  if (passedInTeam.wrThreeLastWeek === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRThreeLastWeekValue
    );
  }
  if (passedInTeam.wrFourLastWeek === passedInTeam.WRThree.name) {
    passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.push(
      passedInTeam.WRFourLastWeekValue
    );
  }

  // calculating each WR's percentage of matching role weeks last five weeks to this week

  //WROne

  let tempWROneMatchingWeeks = 0;

  passedInTeam.WROne.roleLastXNumOfWeeksUpToFive.map(function (role) {
    if (role < 1.6) {
      tempWROneMatchingWeeks = tempWROneMatchingWeeks + 1;
    }
  });
  passedInTeam.WROne.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek =
    tempWROneMatchingWeeks /
    passedInTeam.WROne.numberOfGamesPlayedLastFiveWeeks;

  //WRTwo

  let tempWRTwoMatchingWeeks = 0;

  passedInTeam.WRTwo.roleLastXNumOfWeeksUpToFive.map(function (role) {
    if (role < 2.6 && role > 1.4) {
      tempWRTwoMatchingWeeks = tempWRTwoMatchingWeeks + 1;
    }
  });
  passedInTeam.WRTwo.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek =
    tempWRTwoMatchingWeeks /
    passedInTeam.WRTwo.numberOfGamesPlayedLastFiveWeeks;

  //WRThree

  let tempWRThreeMatchingWeeks = 0;

  passedInTeam.WRThree.roleLastXNumOfWeeksUpToFive.map(function (role) {
    if (role < 3.6 && role > 2.4) {
      tempWRThreeMatchingWeeks = tempWRThreeMatchingWeeks + 1;
    }
  });
  passedInTeam.WRThree.percentageOfWeeksInLastFiveWeeksPlayerWasInSameRoleAsThisWeek =
    tempWRThreeMatchingWeeks /
    passedInTeam.WRThree.numberOfGamesPlayedLastFiveWeeks;

  ///
if(qbDataPassedInTeam) {
  passedInTeam.WROne.qbFantasyPointsScoredPerGameLastFiveWeeks =
    qbDataPassedInTeam.fantasyPointsFromRushingPerGameLastFiveWeeks +
    qbDataPassedInTeam.fantasyPointsFromPassingPerGameLastFiveWeeks;

  passedInTeam.WRTwo.qbFantasyPointsScoredPerGameLastFiveWeeks =
    qbDataPassedInTeam.fantasyPointsFromRushingPerGameLastFiveWeeks +
    qbDataPassedInTeam.fantasyPointsFromPassingPerGameLastFiveWeeks;

  passedInTeam.WRThree.qbFantasyPointsScoredPerGameLastFiveWeeks =
    qbDataPassedInTeam.fantasyPointsFromRushingPerGameLastFiveWeeks +
    qbDataPassedInTeam.fantasyPointsFromPassingPerGameLastFiveWeeks;

  //
  passedInTeam.WROne.teamRealLifePointsScoredPerGameLastFiveWeeks =
    +gameInfoPassedInTeam.teamPointsPerGameLastFiveWeeks;

  passedInTeam.WRTwo.teamRealLifePointsScoredPerGameLastFiveWeeks =
    +gameInfoPassedInTeam.teamPointsPerGameLastFiveWeeks;

  passedInTeam.WRThree.teamRealLifePointsScoredPerGameLastFiveWeeks =
    +gameInfoPassedInTeam.teamPointsPerGameLastFiveWeeks;
}
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

// console.log(wrrawdata);
// console.log(wrrawdata.seahawks);
// console.log(wrrawdata.vikings);
// console.log(wrrawdata.buccaneers);
// console.log(wrrawdata.bengals);
// console.log(wrrawdata.giants);

module.exports = wrrawdata;
