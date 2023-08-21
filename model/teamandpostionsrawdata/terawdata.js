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
const te4for4PlayerStatExplorerExpectedPPRPointsWeeklyLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/te4for4PlayerStatExplorerExpectedPPRPointsWeeklyLastFiveWeeks');
const te4for4FantasyPointsBrowserLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/te4for4FantasyPointsBrowserLastFiveWeeks');
const te4for4PlayerStatExplorerReceivingTab = require('../datafilesmadefrom4for4CSVs/te4for4PlayerStatExplorerReceivingtab');

const terawdata = {
  SF49ers: {
    teamName: 'SF49ers',
    teamABV: 'SF',
    teamVTT: 0,

    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Bears',
    teamABV: 'CHI',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Bengals',
    teamABV: 'CIN',
    teamVTT: 0,

    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
  bills: {
    teamName: 'Bills',
    teamABV: 'BUF',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Broncos',
    teamABV: 'DEN',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Browns',
    teamABV: 'CLE',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Buccaneers',
    teamABV: 'TB',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Cardinals',
    teamABV: 'ARI',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Chargers',
    teamABV: 'LAC',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Chiefs',
    teamABV: 'KC',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
  colts: {
    teamName: 'Colts',
    teamABV: 'IND',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Commanders',
    teamABV: 'WAS',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Cowboys',
    teamABV: 'DAL',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Dolphins',
    teamABV: 'MIA',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Eagles',
    teamABV: 'PHI',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Falcons',
    teamABV: 'ATL',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Giants',
    teamABV: 'NYG',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Jaguars',
    teamABV: 'JAC',
    altTeamABV: 'JAX',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Jets',
    teamABV: 'NYJ',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Lions',
    teamABV: 'DET',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Packers',
    teamABV: 'GB',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Panthers',
    teamABV: 'CAR',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Patriots',
    teamABV: 'NE',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Raiders',
    teamABV: 'LV',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Rams',
    teamABV: 'LAR',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Ravens',
    teamABV: 'BAL',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Saints',
    teamABV: 'NO',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Seahawks',
    teamABV: 'SEA',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Steelers',
    teamABV: 'PIT',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Texans',
    teamABV: 'HOU',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Titans',
    teamABV: 'TEN',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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
    teamName: 'Vikings',
    teamABV: 'MIN',
    teamVTT: 0,
    QBFantasyPointsPerGameLastFiveWeeks: 0,
    QBAppProjectedPointsThisWeek: 0,

    teamPointsPerGameLastFiveWeeks: 0,
    teamAppProjectedPointsThisWeek: 0,

    TE1: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    TE2: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      TEPTwentyFifthPercentProjectedPoints: 0,
      TEPFiftyithPercentProjectedPoints: 0,
      TEPSeventyFifthPercentProjectedPoints: 0,
      halfGLSPAvg: 0,
      fullGLSPAvg: 0,
      TEPGLSPAvg: 0,

      receptionsPerGameLastFiveWeeks: 0,
      projectedReceptions4for4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

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

const populateTeamObjects = function (
  passedInTeam,
  gameInfoPassedInTeam,
  qbInfoPassedInTeam
) {
  //
  passedInTeam.TE1.name = gameInfoPassedInTeam.TEOneThisWeekName;
  passedInTeam.TE2.name = gameInfoPassedInTeam.TETwoThisWeekName;

  passedInTeam.curWeek = gameInfo.week.currentWeek;

  let teOneName = gameInfoPassedInTeam.TEOneThisWeekName;
  let teTwoName = gameInfoPassedInTeam.TETwoThisWeekName;

  if (teOneName.includes("'")) {
    teOneName = teOneName.replace("'", '');
  }

  if (teOneName.includes('III')) {
    teOneName = teOneName.replace('III', 'II');
  }

  if (teOneName.includes('II')) {
    teOneName = teOneName.replace('II', '');
    teOneName = teOneName.slice(0, -1) + '"';
    // console.log(playerObject['"PLAYER NAME"']);
  }

  if (teOneName.includes('Jr.')) {
    // console.log(playerObject['"PLAYER NAME"']);
    teOneName = teOneName.replace('Jr.', '');
    teOneName = teOneName.slice(0, -1) + '"';
    // console.log(playerObject['"PLAYER NAME"']);
  }

  let sanitizedTEOneName = teOneName
    .replace("'", '')
    .replace('.', '')
    .replace('.', '');
  // .slice(1, -1);

  // console.log(sanitizedTEOneName);
  passedInTeam.TE1.sanitizedTEOneName = sanitizedTEOneName;

  if (teTwoName) {
    if (teTwoName.includes("'")) {
      teTwoName = teTwoName.replace("'", '');
    }

    if (teTwoName.includes('III')) {
      teTwoName = teTwoName.replace('III', 'II');
    }

    if (teTwoName.includes('II')) {
      teTwoName = teTwoName.replace('II', '');
      teTwoName = teTwoName.slice(0, -1) + '"';
      // console.log(playerObject['"PLAYER NAME"']);
    }

    if (teTwoName.includes('Jr.')) {
      // console.log(playerObject['"PLAYER NAME"']);
      teTwoName = teTwoName.replace('Jr.', '');
      teTwoName = teTwoName.slice(0, -1) + '"';
      // console.log(playerObject['"PLAYER NAME"']);
    }

    let sanitizedTETwoName = teTwoName
      .replace("'", '')
      .replace('.', '')
      .replace('.', '');
    // .slice(1, -1);

    // console.log(sanitizedTETwoName);
    passedInTeam.TE2.sanitizedTETwoName = sanitizedTETwoName;
  }
  //
  passedInTeam.teamVTT = +gameInfoPassedInTeam.vtt;

  //
  let tempQbPointsPerGameLastFiveWeeks = +(
    +qbInfoPassedInTeam.fantasyPointsFromRushingPerGameLastFiveWeeks +
    +qbInfoPassedInTeam.fantasyPointsFromPassingPerGameLastFiveWeeks
  );

  passedInTeam.QBFantasyPointsPerGameLastFiveWeeks =
    +tempQbPointsPerGameLastFiveWeeks;
  //
  passedInTeam.QBAppProjectedPointsThisWeek =
    qbInfoPassedInTeam.appProjectedPoints;

  passedInTeam.QBFourForFourProjectedPoints =
    qbInfoPassedInTeam.fourForFourFullPPRProjectedPoints;

  passedInTeam.teamPointsPerGameLastFiveWeeks =
    qbInfoPassedInTeam.teamPointsPerGameLastFiveWeeks;

  passedInTeam.teamAppProjectedPointsThisWeek =
    qbInfoPassedInTeam.teamProjectedPoints;

  //////////
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

  allFlexGLSP.forEach(function (player) {
    // console.log(player['"Player"']);
    if (
      player['"Player"'].slice(1, -1) === passedInTeam.TE1.name ||
      player['"Player"'].slice(1, -1) === passedInTeam.TE1.sanitizedTEOneName
    ) {
      // console.log(player);

      passedInTeam.TE1.halfGLSPAvg = +player['"Half - AVG"'];
      passedInTeam.TE1.fullGLSPAvg = +player['"PPR - AVG"'];
      passedInTeam.TE1.halfTwentyFifthPercentProjectedPoints =
        +player['"Half - 25th"'];
      passedInTeam.TE1.halfFiftyithPercentProjectedPoints =
        +player['"Half - 50th"'];
      passedInTeam.TE1.halfSeventyFifthPercentProjectedPoints =
        +player['"Half - 75th"'];
      passedInTeam.TE1.PPRTwentyFifthPercentProjectedPoints =
        +player['"PPR - 25th"'];
      passedInTeam.TE1.PPRFiftyithPercentProjectedPoints =
        +player['"PPR - 50th"'];
      passedInTeam.TE1.PPRSeventyFifthPercentProjectedPoints =
        +player['"PPR - 75th"'];

      let tempGLSPAvgPPRToHalfDifference = +(
        +player['"PPR - AVG"'] +
        (+player['"PPR - AVG"'] - +player['"Half - AVG"'])
      ).toFixed(1);
      passedInTeam.TE1.TEPGLSPAvg = tempGLSPAvgPPRToHalfDifference;

      let tempTwentyFifthPPRToHalfDifference = +(
        +player['"PPR - 25th"'] +
        (+player['"PPR - 25th"'] - +player['"Half - 25th"'])
      ).toFixed(1);
      passedInTeam.TE1.TEPTwentyFifthPercentProjectedPoints =
        tempTwentyFifthPPRToHalfDifference;

      let tempFiftyithPPRToHalfDifference = +(
        +player['"PPR - 50th"'] +
        (+player['"PPR - 50th"'] - +player['"Half - 50th"'])
      ).toFixed(1);
      passedInTeam.TE1.TEPFiftyithPercentProjectedPoints =
        tempFiftyithPPRToHalfDifference;

      let tempSeventyFifthPPRToHalfDifference = +(
        +player['"PPR - 75th"'] +
        (+player['"PPR - 75th"'] - +player['"Half - 75th"'])
      ).toFixed(1);
      passedInTeam.TE1.TEPSeventyFifthPercentProjectedPoints =
        tempSeventyFifthPPRToHalfDifference;
    }

    if (
      player['"Player"'].slice(1, -1) === passedInTeam.TE2.name ||
      player['"Player"'].slice(1, -1) === passedInTeam.TE2.sanitizedTETwoName
    ) {
      // console.log(player);
      passedInTeam.TE2.halfGLSPAvg = +player['"Half - AVG"'];
      passedInTeam.TE2.fullGLSPAvg = +player['"PPR - AVG"'];
      passedInTeam.TE2.halfTwentyFifthPercentProjectedPoints =
        +player['"Half - 25th"'];
      passedInTeam.TE2.halfFiftyithPercentProjectedPoints =
        +player['"Half - 50th"'];
      passedInTeam.TE2.halfSeventyFifthPercentProjectedPoints =
        +player['"Half - 75th"'];
      passedInTeam.TE2.PPRTwentyFifthPercentProjectedPoints =
        +player['"PPR - 25th"'];
      passedInTeam.TE2.PPRFiftyithPercentProjectedPoints =
        +player['"PPR - 50th"'];
      passedInTeam.TE2.PPRSeventyFifthPercentProjectedPoints =
        +player['"PPR - 75th"'];

      let tempGLSPAvgPPRToHalfDifference = +(
        +player['"PPR - AVG"'] +
        (+player['"PPR - AVG"'] - +player['"Half - AVG"'])
      ).toFixed(1);
      passedInTeam.TE2.TEPGLSPAvg = tempGLSPAvgPPRToHalfDifference;

      let tempTwentyFifthPPRToHalfDifference = +(
        +player['"PPR - 25th"'] +
        (+player['"PPR - 25th"'] - +player['"Half - 25th"'])
      ).toFixed(1);
      passedInTeam.TE2.TEPTwentyFifthPercentProjectedPoints =
        tempTwentyFifthPPRToHalfDifference;

      let tempFiftyithPPRToHalfDifference = +(
        +player['"PPR - 50th"'] +
        (+player['"PPR - 50th"'] - +player['"Half - 50th"'])
      ).toFixed(1);
      passedInTeam.TE2.TEPFiftyithPercentProjectedPoints =
        tempFiftyithPPRToHalfDifference;

      let tempSeventyFifthPPRToHalfDifference = +(
        +player['"PPR - 75th"'] +
        (+player['"PPR - 75th"'] - +player['"Half - 75th"'])
      ).toFixed(1);
      passedInTeam.TE2.TEPSeventyFifthPercentProjectedPoints =
        tempSeventyFifthPPRToHalfDifference;
    }
  });

  //
  ///
  //

  te4for4PlayerStatExplorerReceivingTab.forEach(function (player) {
    // team TE1's

    // let teOneName = gameInfoPassedInTeam.TEOneThisWeekName;

    // console.log(
    //   player['"full_name"'].slice(1, -1),
    //   gameInfoPassedInTeam.TEOneThisWeekName,
    //   passedInTeam.TE1.sanitizedTEOneName
    // );
    if (
      player['"full_name"'].slice(1, -1) === passedInTeam.TE1.name ||
      player['"full_name"'].slice(1, -1) === passedInTeam.TE1.sanitizedTEOneName
    ) {
      // console.log(player['"full_name"'].slice(1, -1));
      let one = +player['"rec_pg"'];
      let tempReceptionsPerGame = +one.toFixed(2);
      passedInTeam.TE1.receptionsPerGameLastFiveWeeks = +tempReceptionsPerGame;
      // console.log(player['"full_name"'], player['"rec_pg"']);
    }

    // team TE2's
    //
    if (
      player['"full_name"'].slice(1, -1) === passedInTeam.TE2.name ||
      player['"full_name"'].slice(1, -1) === passedInTeam.TE2.sanitizedTETwoName
    ) {
      // console.log(player['"full_name"'].slice(1, -1));
      let one = +player['"rec_pg"'];
      let tempReceptionsPerGame = +one.toFixed(2);
      passedInTeam.TE2.receptionsPerGameLastFiveWeeks = +tempReceptionsPerGame;
    }
  });

  //

  allHalfPPRProjectedPointsWithoutTeamDef.forEach(function (player) {
    if (player.Pos === 'TE') {
      if (player.Player === passedInTeam.TE1.name) {
        let temp = +player.Rec;
        let tempTwo = +temp.toFixed(2);
        passedInTeam.TE1.projectedReceptions4for4 = +tempTwo;
        //
        let tempProjPoints = +player.FFPts;
        let tempProjPointsTwo = +tempProjPoints.toFixed(2);
        passedInTeam.TE1.fourForFourHalfPPRProjectedPoints = +tempProjPointsTwo;
      }
      if (player.Player === passedInTeam.TE2.name) {
        let temp = +player.Rec;
        let tempTwo = +temp.toFixed(2);
        passedInTeam.TE2.projectedReceptions4for4 = +tempTwo;
        //
        let tempProjPoints = +player.FFPts;
        let tempProjPointsTwo = +tempProjPoints.toFixed(2);
        passedInTeam.TE2.fourForFourHalfPPRProjectedPoints = +tempProjPointsTwo;
      }
    }
  });

  //

  allFullPPRProjectedPointsWithoutTeamDef.forEach(function (player) {
    if (player.Pos === 'TE') {
      if (player.Player === passedInTeam.TE1.name) {
        let temp = +player.Rec;

        let tempTwo = +temp.toFixed(2);

        passedInTeam.TE1.projectedReceptions4for4 = +tempTwo;
        //
        let tempProjPoints = +player.FFPts;
        let tempProjPointsTwo = +tempProjPoints.toFixed(2);
        passedInTeam.TE1.fourForFourFullPPRProjectedPoints = +tempProjPointsTwo;
      }
      if (player.Player === passedInTeam.TE2.name) {
        let temp = +player.Rec;
        let tempTwo = +temp.toFixed(2);
        passedInTeam.TE2.projectedReceptions4for4 = +tempTwo;
        //
        let tempProjPoints = +player.FFPts;
        let tempProjPointsTwo = +tempProjPoints.toFixed(2);
        passedInTeam.TE2.fourForFourFullPPRProjectedPoints = +tempProjPointsTwo;
      }
    }
  });

  //

  //DFS data below
  //

  //yahoo
  wholeDownloadableSpreadSheetYahoo.forEach(function (player) {
    if (player.Pos === 'TE') {
      if (player.Player === passedInTeam.TE1.name) {
        // console.log(player);
        let tempSal = +player['Y! ($)'];
        passedInTeam.TE1.yahooSalary = tempSal;
      }
      if (player.Player === passedInTeam.TE2.name) {
        // console.log(player);
        let tempSal = +player['Y! ($)'];
        passedInTeam.TE2.yahooSalary = tempSal;
      }
    }
  });

  //fanduel

  gppLeverageScoresAndProjOwnershipFanduel.forEach(function (player) {
    if (player['"Pos"'].slice(1, -1) === 'TE') {
      // console.log(player);
      if (player['"Player"'].slice(1, -1) === passedInTeam.TE1.name) {
        let tempSal = player['"FD Sal $"'].slice(1, -1);
        let tempSalTwo = +tempSal;
        passedInTeam.TE1.fanduelSalary = tempSalTwo;
        //
        // console.log(player['"Projected Own%"']);
        let tempProjOwn = player['"Projected Own%"'].slice(1, -2);
        let tempProjOwnTwo = +tempProjOwn;
        passedInTeam.TE1.fanduelProjectedOwnership = tempProjOwnTwo;
      }
      if (player['"Player"'].slice(1, -1) === passedInTeam.TE2.name) {
        // console.log(player);

        let tempSal = player['"FD Sal $"'].slice(1, -1);
        let tempSalTwo = +tempSal;
        passedInTeam.TE2.fanduelSalary = tempSalTwo;
        //
        let tempProjOwn = player['"Projected Own%"'].slice(1, -2);
        let tempProjOwnTwo = +tempProjOwn;
        passedInTeam.TE2.fanduelProjectedOwnership = tempProjOwnTwo;
      }
    }
  });

  //draftkings

  gppLeverageScoresAndProjOwnershipDraftkings.forEach(function (player) {
    if (player['"Pos"'].slice(1, -1) === 'TE') {
      // console.log(player);
      if (player['"Player"'].slice(1, -1) === passedInTeam.TE1.name) {
        // console.log(player);
        let tempSal = player['"DK Sal $"'].slice(1, -1);
        let tempSalTwo = +tempSal;
        passedInTeam.TE1.draftkingsSalary = tempSalTwo;
        //
        let tempProjOwn = player['"Projected Own%"'].slice(1, -2);
        let tempProjOwnTwo = +tempProjOwn;
        passedInTeam.TE1.draftkingsProjectedOwnership = tempProjOwnTwo;
      }
      if (player['"Player"'].slice(1, -1) === passedInTeam.TE2.name) {
        // console.log(player);
        let tempSal = player['"DK Sal $"'].slice(1, -1);
        let tempSalTwo = +tempSal;
        passedInTeam.TE2.draftkingsSalary = tempSalTwo;
        //
        let tempProjOwn = player['"Projected Own%"'].slice(1, -2);
        let tempProjOwnTwo = +tempProjOwn;
        passedInTeam.TE2.draftkingsProjectedOwnership = tempProjOwnTwo;
      }
    }
  });
};

populateTeamObjects(
  terawdata.SF49ers,
  gameInfo.SF49ers,
  allQBData.allTeamQBObjects.SF49ers
);
populateTeamObjects(
  terawdata.bears,
  gameInfo.bears,
  allQBData.allTeamQBObjects.bears
);
populateTeamObjects(
  terawdata.bengals,
  gameInfo.bengals,
  allQBData.allTeamQBObjects.bengals
);
populateTeamObjects(
  terawdata.bills,
  gameInfo.bills,
  allQBData.allTeamQBObjects.bills
);
populateTeamObjects(
  terawdata.broncos,
  gameInfo.broncos,
  allQBData.allTeamQBObjects.broncos
);
populateTeamObjects(
  terawdata.browns,
  gameInfo.browns,
  allQBData.allTeamQBObjects.browns
);
populateTeamObjects(
  terawdata.buccaneers,
  gameInfo.buccaneers,
  allQBData.allTeamQBObjects.buccaneers
);
populateTeamObjects(
  terawdata.cardinals,
  gameInfo.cardinals,
  allQBData.allTeamQBObjects.cardinals
);
populateTeamObjects(
  terawdata.chargers,
  gameInfo.chargers,
  allQBData.allTeamQBObjects.chargers
);
populateTeamObjects(
  terawdata.chiefs,
  gameInfo.chiefs,
  allQBData.allTeamQBObjects.chiefs
);
populateTeamObjects(
  terawdata.colts,
  gameInfo.colts,
  allQBData.allTeamQBObjects.colts
);
populateTeamObjects(
  terawdata.commanders,
  gameInfo.commanders,
  allQBData.allTeamQBObjects.commanders
);
populateTeamObjects(
  terawdata.cowboys,
  gameInfo.cowboys,
  allQBData.allTeamQBObjects.cowboys
);
populateTeamObjects(
  terawdata.dolphins,
  gameInfo.dolphins,
  allQBData.allTeamQBObjects.dolphins
);
populateTeamObjects(
  terawdata.eagles,
  gameInfo.eagles,
  allQBData.allTeamQBObjects.eagles
);
populateTeamObjects(
  terawdata.falcons,
  gameInfo.falcons,
  allQBData.allTeamQBObjects.falcons
);
populateTeamObjects(
  terawdata.giants,
  gameInfo.giants,
  allQBData.allTeamQBObjects.giants
);
populateTeamObjects(
  terawdata.jaguars,
  gameInfo.jaguars,
  allQBData.allTeamQBObjects.jaguars
);
populateTeamObjects(
  terawdata.jets,
  gameInfo.jets,
  allQBData.allTeamQBObjects.jets
);
populateTeamObjects(
  terawdata.lions,
  gameInfo.lions,
  allQBData.allTeamQBObjects.lions
);
populateTeamObjects(
  terawdata.packers,
  gameInfo.packers,
  allQBData.allTeamQBObjects.packers
);
populateTeamObjects(
  terawdata.panthers,
  gameInfo.panthers,
  allQBData.allTeamQBObjects.panthers
);
populateTeamObjects(
  terawdata.patriots,
  gameInfo.patriots,
  allQBData.allTeamQBObjects.patriots
);
populateTeamObjects(
  terawdata.raiders,
  gameInfo.raiders,
  allQBData.allTeamQBObjects.raiders
);
populateTeamObjects(
  terawdata.rams,
  gameInfo.rams,
  allQBData.allTeamQBObjects.rams
);
populateTeamObjects(
  terawdata.ravens,
  gameInfo.ravens,
  allQBData.allTeamQBObjects.ravens
);
populateTeamObjects(
  terawdata.saints,
  gameInfo.saints,
  allQBData.allTeamQBObjects.saints
);
populateTeamObjects(
  terawdata.seahawks,
  gameInfo.seahawks,
  allQBData.allTeamQBObjects.seahawks
);
populateTeamObjects(
  terawdata.steelers,
  gameInfo.steelers,
  allQBData.allTeamQBObjects.steelers
);
populateTeamObjects(
  terawdata.texans,
  gameInfo.texans,
  allQBData.allTeamQBObjects.texans
);
populateTeamObjects(
  terawdata.titans,
  gameInfo.titans,
  allQBData.allTeamQBObjects.titans
);
populateTeamObjects(
  terawdata.vikings,
  gameInfo.vikings,
  allQBData.allTeamQBObjects.vikings
);

// console.log(allQBData.allTeamQBObjects.chiefs);
// console.log(gameInfo.jets);
// console.log(terawdata.chiefs);
// console.log(terawdata.cowboys);

module.exports = terawdata;
