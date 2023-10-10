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
const qbrawdata = require('../teamandpostionsrawdata/qbrawdata');
const rb4for4FantasyPointsBrowserLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rb4for4FantasyPointsBrowserLastFiveWeeks');
const rb4for4PlayerStatExplorerPercentOfTeamSnapsLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rb4for4PlayerStatExplorerPercentOfTeamSnapsLastFiveWeeks');
const rbOpportunitesPerWeekLastFiveWeeks4for4PlayerStatExplorer = require('../datafilesmadefrom4for4CSVs/rbOpportunitiesPerWeekLastFiveWeeks4for4PlayerStatExplorer');
const teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer = require('../datafilesmadefrom4for4CSVs/teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer');
const teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer = require('../datafilesmadefrom4for4CSVs/teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer');
const rb4for4StatExplorerForRushingLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rb4for4StatExplorerForRushingLastFiveWeeks');
const rb4for4WeeklyStatExplorerHVTsLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rb4for4WeeklyStatExplorerHVTsLastFiveWeeks');
const rb4for4PlayerStatExplorerSnapsAndFantasyTabThisHasFPOELastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rb4for4PlayerStatExplorerSnapsAndFantasyTabThisHasFPOELastFiveWeeks');
const rb4for4PlayerStatExplorerForReceivingLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rb4for4PlayerStatExplorerForReceivingLastFiveWeeks');

const rbrawdata = {
  SF49ers: {
    teamABV: 'SF',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      RBOneOrTwo: 2,
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  bears: {
    teamABV: 'CHI',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  bengals: {
    teamABV: 'CIN',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  bills: {
    teamABV: 'BUF',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  broncos: {
    teamABV: 'DEN',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  browns: {
    teamABV: 'CLE',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  buccaneers: {
    teamABV: 'TB',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  cardinals: {
    teamABV: 'ARI',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  chargers: {
    teamABV: 'LAC',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  chiefs: {
    teamABV: 'KC',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  colts: {
    teamABV: 'IND',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  commanders: {
    teamABV: 'WAS',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  cowboys: {
    teamABV: 'DAL',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  dolphins: {
    teamABV: 'MIA',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  eagles: {
    teamABV: 'PHI',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  falcons: {
    teamABV: 'ATL',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  giants: {
    teamABV: 'NYG',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  jaguars: {
    teamABV: 'JAC',
    altTeamABV: 'JAX',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  jets: {
    teamABV: 'NYJ',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  lions: {
    teamABV: 'DET',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  packers: {
    teamABV: 'GB',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  panthers: {
    teamABV: 'CAR',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  patriots: {
    teamABV: 'NE',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  raiders: {
    teamABV: 'LV',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  rams: {
    teamABV: 'LAR',
    altTeamABV: 'LA',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  ravens: {
    teamABV: 'BAL',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  saints: {
    teamABV: 'NO',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  seahawks: {
    teamABV: 'SEA',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  steelers: {
    teamABV: 'PIT',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  texans: {
    teamABV: 'HOU',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
  titans: {
    teamABV: 'TEN',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },

  vikings: {
    teamABV: 'MIN',
    opponentABV: '',
    teamVTT: 0,
    opponentVTT: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,

    teamTotalHVTsLastFiveWeeks: 0,

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspHalfavg: 0,
      glspPPRavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      FPOEPerGameLastFiveWeeks: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      percentOfSalaryCapDraftkings: 0,
      percentOfSalaryCapFanduel: 0,
      percentOfSalaryCapYahoo: 0,
    },
  },
};

const tempteamRBTotalsFiveWeeksAgo = [];
const tempteamRBTotalsFourWeeksAgo = [];
const tempteamRBTotalsthreeWeeksAgo = [];
const tempteamRBTotalstwoWeeksAgo = [];
const tempteamRBTotalslasWeek = [];

const populateTeamObjects = function (
  passedInTeam,
  gameInfoPassedInTeam,
  qbInfoPassedInTeam
) {
  passedInTeam.RBOne.name = gameInfoPassedInTeam.RBOneThisWeekName;
  passedInTeam.RBTwo.name = gameInfoPassedInTeam.RBTwoThisWeekName;
  if(gameInfoPassedInTeam.RBThreeThisWeekName) {
  passedInTeam.RBThreeName = gameInfoPassedInTeam.RBThreeThisWeekName;
  }

  // console.log(passedInTeam.RBOne.name);
  ////////////////////////////
  ///rb fantasy points scored per week last five weeks to help to determine what rb's roles were each week last five weeks
  /////////////////////

  rb4for4FantasyPointsBrowserLastFiveWeeks.forEach(function (rb) {
    if (
      passedInTeam.teamABV === rb.Team ||
      passedInTeam.altTeamABV === rb.Team
    ) {
      // console.log(rb.W4);
      // console.log(rb.G);

      let weekFiveWeeksAgo = 0;
      let weekFourWeeksAgo = 0;
      let weekThreeWeeksAgo = 0;
      let weekTwoWeeksAgo = 0;
      let weekLastWeek = 0;

      if (gameInfo.week.currentWeek === 3) {
        weekTwoWeeksAgo = rb.W1;
        weekLastWeek = rb.W2;
      }

      if (gameInfo.week.currentWeek === 4) {
        weekThreeWeeksAgo = rb.W1;
        weekTwoWeeksAgo = rb.W2;
        weekLastWeek = rb.W3;
      }

      if (gameInfo.week.currentWeek === 5) {
        weekFourWeeksAgo = rb.W1;
        weekThreeWeeksAgo = rb.W2;
        weekTwoWeeksAgo = rb.W3;
        weekLastWeek = rb.W4;
      }

      if (gameInfo.week.currentWeek === 6) {
        weekFiveWeeksAgo = rb.W1;
        weekFourWeeksAgo = rb.W2;
        weekThreeWeeksAgo = rb.W3;
        weekTwoWeeksAgo = rb.W4;
        weekLastWeek = rb.W5;
      }

      if (gameInfo.week.currentWeek === 7) {
        weekFiveWeeksAgo = rb.W2;
        weekFourWeeksAgo = rb.W3;
        weekThreeWeeksAgo = rb.W4;
        weekTwoWeeksAgo = rb.W5;
        weekLastWeek = rb.W6;
      }

      if (gameInfo.week.currentWeek === 8) {
        weekFiveWeeksAgo = rb.W3;
        weekFourWeeksAgo = rb.W4;
        weekThreeWeeksAgo = rb.W5;
        weekTwoWeeksAgo = rb.W6;
        weekLastWeek = rb.W7;
      }

      if (gameInfo.week.currentWeek === 9) {
        weekFiveWeeksAgo = rb.W4;
        weekFourWeeksAgo = rb.W5;
        weekThreeWeeksAgo = rb.W6;
        weekTwoWeeksAgo = rb.W7;
        weekLastWeek = rb.W8;
      }

      if (gameInfo.week.currentWeek === 10) {
        weekFiveWeeksAgo = rb.W5;
        weekFourWeeksAgo = rb.W6;
        weekThreeWeeksAgo = rb.W7;
        weekTwoWeeksAgo = rb.W8;
        weekLastWeek = rb.W9;
      }

      if (gameInfo.week.currentWeek === 11) {
        weekFiveWeeksAgo = rb.W6;
        weekFourWeeksAgo = rb.W7;
        weekThreeWeeksAgo = rb.W8;
        weekTwoWeeksAgo = rb.W9;
        weekLastWeek = rb.W10;
      }

      if (gameInfo.week.currentWeek === 12) {
        weekFiveWeeksAgo = rb.W7;
        weekFourWeeksAgo = rb.W8;
        weekThreeWeeksAgo = rb.W9;
        weekTwoWeeksAgo = rb.W10;
        weekLastWeek = rb.W11;
      }

      if (gameInfo.week.currentWeek === 13) {
        weekFiveWeeksAgo = rb.W8;
        weekFourWeeksAgo = rb.W9;
        weekThreeWeeksAgo = rb.W10;
        weekTwoWeeksAgo = rb.W11;
        weekLastWeek = rb.W12;
      }

      if (gameInfo.week.currentWeek === 14) {
        weekFiveWeeksAgo = rb.W9;
        weekFourWeeksAgo = rb.W10;
        weekThreeWeeksAgo = rb.W11;
        weekTwoWeeksAgo = rb.W12;
        weekLastWeek = rb.W13;
      }

      if (gameInfo.week.currentWeek === 15) {
        weekFiveWeeksAgo = rb.W10;
        weekFourWeeksAgo = rb.W11;
        weekThreeWeeksAgo = rb.W12;
        weekTwoWeeksAgo = rb.W13;
        weekLastWeek = rb.W14;
      }

      if (gameInfo.week.currentWeek === 16) {
        weekFiveWeeksAgo = rb.W11;
        weekFourWeeksAgo = rb.W12;
        weekThreeWeeksAgo = rb.W13;
        weekTwoWeeksAgo = rb.W14;
        weekLastWeek = rb.W15;
      }

      if (gameInfo.week.currentWeek === 17) {
        weekFiveWeeksAgo = rb.W12;
        weekFourWeeksAgo = rb.W13;
        weekThreeWeeksAgo = rb.W14;
        weekTwoWeeksAgo = rb.W15;
        weekLastWeek = rb.W16;
      }

      if (gameInfo.week.currentWeek === 18) {
        weekFiveWeeksAgo = rb.W13;
        weekFourWeeksAgo = rb.W14;
        weekThreeWeeksAgo = rb.W15;
        weekTwoWeeksAgo = rb.W16;
        weekLastWeek = rb.W17;
      }

      // console.log(weekFourWeeksAgo);
      // let weekFourWeeksAgo = 0;
      // let weekThreeWeeksAgo = 0;
      // let weekTwoWeeksAgo = 0;
      // let weekLastWeek = 0;
      // console.log(rb);

      let temprbName = rb.Player.slice(1, -1).replace('.', '');
      // console.log(temprbName, passedInTeam.RBOne.name);
      // let alsotemprbName = temprbName.replace("'", '');
      let rbName = temprbName.replace('.', '');

      if (rbName.slice(4) === 'Walker') {
        rbName = 'Kenneth Walker';
      }
      // console.log(rbName, passedInTeam.RBOne.name);

      if (!passedInTeam.firstPassedInRBName) {
        passedInTeam.firstPassedInRBName = rbName;
        // console.log(rbName, passedInTeam.firstPassedInRBName);
        passedInTeam.firstPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored =
          +weekFiveWeeksAgo;

        if (weekFiveWeeksAgo === '-') {
          passedInTeam.firstPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }

        //
        passedInTeam.firstPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored =
          +weekFourWeeksAgo;
        if (weekFourWeeksAgo === '-') {
          passedInTeam.firstPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //
        passedInTeam.firstPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored =
          +weekThreeWeeksAgo;
        if (weekThreeWeeksAgo === '-') {
          passedInTeam.firstPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //   //
        passedInTeam.firstPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored =
          +weekTwoWeeksAgo;
        if (weekTwoWeeksAgo === '-') {
          passedInTeam.firstPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //   //
        passedInTeam.firstPassedInRBLastWeekInFantasyPointsScoredPointsScored =
          +weekLastWeek;
        if (weekLastWeek === '-') {
          passedInTeam.firstPassedInRBLastWeekInFantasyPointsScoredPointsScored = 0;
        }
      }

      if (
        passedInTeam.firstPassedInRBName &&
        !passedInTeam.secondPassedInRBName &&
        rbName !== passedInTeam.firstPassedInRBName
      ) {
        passedInTeam.secondPassedInRBName = rbName;

        passedInTeam.secondPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored =
          +weekFiveWeeksAgo;
        if (weekFiveWeeksAgo === '-') {
          passedInTeam.secondPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //
        passedInTeam.secondPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored =
          +weekFourWeeksAgo;
        if (weekFourWeeksAgo === '-') {
          passedInTeam.secondPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //
        passedInTeam.secondPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored =
          +weekThreeWeeksAgo;
        if (weekThreeWeeksAgo === '-') {
          passedInTeam.secondPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        // //
        passedInTeam.secondPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored =
          +weekTwoWeeksAgo;
        if (weekTwoWeeksAgo === '-') {
          passedInTeam.secondPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        // //
        passedInTeam.secondPassedInRBLastWeekInFantasyPointsScoredPointsScored =
          +weekLastWeek;
        if (weekLastWeek === '-') {
          passedInTeam.secondPassedInRBLastWeekInFantasyPointsScoredPointsScored = 0;
        }
      }

      if (
        passedInTeam.firstPassedInRBName &&
        passedInTeam.secondPassedInRBName &&
        !passedInTeam.thirdPassedInRBName &&
        rbName !== passedInTeam.firstPassedInRBName &&
        rbName !== passedInTeam.secondPassedInRBName
      ) {
        passedInTeam.thirdPassedInRBName = rbName;
        passedInTeam.thirdPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored =
          +weekFiveWeeksAgo;
        if (weekFiveWeeksAgo === '-') {
          passedInTeam.thirdPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //
        passedInTeam.thirdPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored =
          +weekFourWeeksAgo;
        if (weekFourWeeksAgo === '-') {
          passedInTeam.thirdPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //
        passedInTeam.thirdPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored =
          +weekThreeWeeksAgo;
        if (weekThreeWeeksAgo === '-') {
          passedInTeam.thirdPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        // //
        passedInTeam.thirdPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored =
          +weekTwoWeeksAgo;
        if (weekTwoWeeksAgo === '-') {
          passedInTeam.thirdPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        // //
        passedInTeam.thirdPassedInRBLastWeekInFantasyPointsScoredPointsScored =
          +weekLastWeek;
        if (weekLastWeek === '-') {
          passedInTeam.thirdPassedInRBLastWeekInFantasyPointsScoredPointsScored = 0;
        }
      }

      if (
        passedInTeam.firstPassedInRBName &&
        passedInTeam.secondPassedInRBName &&
        passedInTeam.thirdPassedInRBName &&
        !passedInTeam.fourthPassedInRBName &&
        rbName !== passedInTeam.firstPassedInRBName &&
        rbName !== passedInTeam.secondPassedInRBName &&
        rbName !== passedInTeam.thirdPassedInRBName
      ) {
        passedInTeam.fourthPassedInRBName = rbName;
        passedInTeam.fourthPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored =
          +weekFiveWeeksAgo;
        if (weekFiveWeeksAgo === '-') {
          passedInTeam.fourthPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //
        passedInTeam.fourthPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored =
          +weekFourWeeksAgo;
        if (weekFourWeeksAgo === '-') {
          passedInTeam.fourthPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        //
        passedInTeam.fourthPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored =
          +weekThreeWeeksAgo;
        if (weekThreeWeeksAgo === '-') {
          passedInTeam.fourthPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        // //
        passedInTeam.fourthPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored =
          +weekTwoWeeksAgo;
        if (weekTwoWeeksAgo === '-') {
          passedInTeam.fourthPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored = 0;
        }
        // //
        passedInTeam.fourthPassedInRBLastWeekInFantasyPointsScoredPointsScored =
          +weekLastWeek;
        if (weekLastWeek === '-') {
          passedInTeam.fourthPassedInRBLastWeekInFantasyPointsScoredPointsScored = 0;
        }
      }

      if (passedInTeam.RBOne.name === 'Kenneth Walker') {
        passedInTeam.RBOne.altName = 'Ken Walker';
      }

      if (passedInTeam.RBTwo.name === 'Kenneth Walker') {
        passedInTeam.RBTwo.altName = 'Ken Walker';
      }

      if (passedInTeam.RBOne.name === rb.Player.slice(1, -1)) {
        passedInTeam.RBOne.numberOfGamesPlayedLastFiveWeeks = rb.G;

        if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === false) {
          if (gameInfo.week.currentWeek > 5) {
            percentageOfRecentWeeksPlayed = rb.G / 5;
            passedInTeam.RBOne.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
          if (gameInfo.week.currentWeek === 5) {
            percentageOfRecentWeeksPlayed = rb.G / 4;
            passedInTeam.RBOne.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
          if (gameInfo.week.currentWeek === 4) {
            percentageOfRecentWeeksPlayed = rb.G / 3;
            passedInTeam.RBOne.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
        }

        if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === true) {
          if (gameInfo.week.currentWeek > 5) {
            percentageOfRecentWeeksPlayed = rb.G / 4;
            passedInTeam.RBOne.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
          if (gameInfo.week.currentWeek === 5) {
            percentageOfRecentWeeksPlayed = rb.G / 3;
            passedInTeam.RBOne.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
          if (gameInfo.week.currentWeek === 4) {
            percentageOfRecentWeeksPlayed = rb.G / 2;
            passedInTeam.RBOne.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
        }
      }

      if (passedInTeam.RBTwo.name === rb.Player.slice(1, -1)) {
        passedInTeam.RBTwo.numberOfGamesPlayedLastFiveWeeks = rb.G;

        if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === false) {
          if (gameInfo.week.currentWeek > 5) {
            percentageOfRecentWeeksPlayed = rb.G / 5;
            passedInTeam.RBTwo.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
          if (gameInfo.week.currentWeek === 5) {
            percentageOfRecentWeeksPlayed = rb.G / 4;
            passedInTeam.RBTwo.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
          if (gameInfo.week.currentWeek === 4) {
            percentageOfRecentWeeksPlayed = rb.G / 3;
            passedInTeam.RBTwo.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
        }

        if (gameInfoPassedInTeam.hadByeInTheLastFiveweeks === true) {
          if (gameInfo.week.currentWeek > 5) {
            percentageOfRecentWeeksPlayed = rb.G / 4;
            passedInTeam.RBTwo.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
          if (gameInfo.week.currentWeek === 5) {
            percentageOfRecentWeeksPlayed = rb.G / 3;
            passedInTeam.RBTwo.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
          if (gameInfo.week.currentWeek === 4) {
            percentageOfRecentWeeksPlayed = rb.G / 2;
            passedInTeam.RBTwo.percentOfGamesPlayedLastFiveWeeks =
              percentageOfRecentWeeksPlayed;
          }
        }
      }
      ///////////////////////////////////////////////////////////////////

      // assinging total fantasy points scored last five weeks

      if (rbName === passedInTeam.RBOne.name) {
        if (weekFiveWeeksAgo === '-') {
          weekFiveWeeksAgo = 0;
        }
        if (weekFourWeeksAgo === '-') {
          weekFourWeeksAgo = 0;
        }
        if (weekThreeWeeksAgo === '-') {
          weekThreeWeeksAgo = 0;
        }
        if (weekTwoWeeksAgo === '-') {
          weekTwoWeeksAgo = 0;
        }
        if (weekLastWeek === '-') {
          weekLastWeek = 0;
        }
        let tempTotalNumberOfFantasypointsScoredLastFiveWeeks = +(
          +weekFiveWeeksAgo +
          +weekFourWeeksAgo +
          +weekThreeWeeksAgo +
          +weekTwoWeeksAgo +
          +weekLastWeek
        ).toFixed(2);
        // console.log(
        //   passedInTeam.RBOne.name,
        //   tempTotalNumberOfFantasypointsScoredLastFiveWeeks
        // );
        passedInTeam.RBOne.totalNumberOfFantasyPointsScoredLastFiveWeeks =
          +tempTotalNumberOfFantasypointsScoredLastFiveWeeks;
      }

      if (rbName === passedInTeam.RBTwo.name) {
        // console.log(passedInTeam.RBTwo.name);
        if (weekFiveWeeksAgo === '-') {
          weekFiveWeeksAgo = 0;
        }
        if (weekFourWeeksAgo === '-') {
          weekFourWeeksAgo = 0;
        }
        if (weekThreeWeeksAgo === '-') {
          weekThreeWeeksAgo = 0;
        }
        if (weekTwoWeeksAgo === '-') {
          weekTwoWeeksAgo = 0;
        }
        if (weekLastWeek === '-') {
          weekLastWeek = 0;
        }
        let tempTotalNumberOfFantasypointsScoredLastFiveWeeks = +(
          +weekFiveWeeksAgo +
          +weekFourWeeksAgo +
          +weekThreeWeeksAgo +
          +weekTwoWeeksAgo +
          +weekLastWeek
        ).toFixed(2);
        // console.log(
        //   passedInTeam.RBTwo.name,
        //   tempTotalNumberOfFantasypointsScoredLastFiveWeeks
        // );

        passedInTeam.RBTwo.totalNumberOfFantasyPointsScoredLastFiveWeeks =
          +tempTotalNumberOfFantasypointsScoredLastFiveWeeks;
      }

      //////////////////////////////////////////////////////////////////////////////
    }
  });

  ////////////////////////////
  ///rb snap percentage per week last five weeks to help to determine what rb's roles were each week last five weeks
  /////////////////////

  rb4for4PlayerStatExplorerPercentOfTeamSnapsLastFiveWeeks.forEach(function (
    rb
  ) {
    // console.log(rb['"posteam"']);
    // console.log(gameInfo.week.currentWeek);
    if (
      passedInTeam.teamABV === rb['"posteam"'].slice(1, -1) ||
      passedInTeam.altTeamABV === rb['"posteam"'].slice(1, -1)
    ) {
      let weekFiveWeeksAgo = 0;
      let weekFourWeeksAgo = 0;
      let weekThreeWeeksAgo = 0;
      let weekTwoWeeksAgo = 0;
      let weekLastWeek = 0;

      if (gameInfo.week.currentWeek === 3) {
        weekTwoWeeksAgo = rb['"Wk 1"'];
        weekLastWeek = rb['"Wk 2"'];
      }

      if (gameInfo.week.currentWeek === 4) {
        weekThreeWeeksAgo = rb['"Wk 1"'];
        weekTwoWeeksAgo = rb['"Wk 2"'];
        weekLastWeek = rb['"Wk 3"'];
      }

      if (gameInfo.week.currentWeek === 5) {
        weekFourWeeksAgo = rb['"Wk 1"'];
        weekThreeWeeksAgo = rb['"Wk 2"'];
        weekTwoWeeksAgo = rb['"Wk 3"'];
        weekLastWeek = rb['"Wk 4"'];
      }

      if (gameInfo.week.currentWeek === 6) {
        weekFiveWeeksAgo = rb['"Wk 1"'];
        weekFourWeeksAgo = rb['"Wk 2"'];
        weekThreeWeeksAgo = rb['"Wk 3"'];
        weekTwoWeeksAgo = rb['"Wk 4"'];
        weekLastWeek = rb['"Wk 5"'];
      }

      if (gameInfo.week.currentWeek === 7) {
        weekFiveWeeksAgo = rb['"Wk 2"'];
        weekFourWeeksAgo = rb['"Wk 3"'];
        weekThreeWeeksAgo = rb['"Wk 4"'];
        weekTwoWeeksAgo = rb['"Wk 5"'];
        weekLastWeek = rb['"Wk 6"'];
      }

      if (gameInfo.week.currentWeek === 8) {
        weekFiveWeeksAgo = rb['"Wk 3"'];
        weekFourWeeksAgo = rb['"Wk 4"'];
        weekThreeWeeksAgo = rb['"Wk 5"'];
        weekTwoWeeksAgo = rb['"Wk 6"'];
        weekLastWeek = rb['"Wk 7"'];
      }

      if (gameInfo.week.currentWeek === 9) {
        weekFiveWeeksAgo = rb['"Wk 4"'];
        weekFourWeeksAgo = rb['"Wk 5"'];
        weekThreeWeeksAgo = rb['"Wk 6"'];
        weekTwoWeeksAgo = rb['"Wk 7"'];
        weekLastWeek = rb['"Wk 8"'];
      }

      if (gameInfo.week.currentWeek === 10) {
        weekFiveWeeksAgo = rb['"Wk 5"'];
        weekFourWeeksAgo = rb['"Wk 6"'];
        weekThreeWeeksAgo = rb['"Wk 7"'];
        weekTwoWeeksAgo = rb['"Wk 8"'];
        weekLastWeek = rb['"Wk 9"'];
      }

      if (gameInfo.week.currentWeek === 11) {
        weekFiveWeeksAgo = rb['"Wk 6"'];
        weekFourWeeksAgo = rb['"Wk 7"'];
        weekThreeWeeksAgo = rb['"Wk 8"'];
        weekTwoWeeksAgo = rb['"Wk 9"'];
        weekLastWeek = rb['"Wk 10"'];
      }

      if (gameInfo.week.currentWeek === 12) {
        weekFiveWeeksAgo = rb['"Wk 7"'];
        weekFourWeeksAgo = rb['"Wk 8"'];
        weekThreeWeeksAgo = rb['"Wk 9"'];
        weekTwoWeeksAgo = rb['"Wk 10"'];
        weekLastWeek = rb['"Wk 11"'];
      }

      if (gameInfo.week.currentWeek === 13) {
        weekFiveWeeksAgo = rb['"Wk 8"'];
        weekFourWeeksAgo = rb['"Wk 9"'];
        weekThreeWeeksAgo = rb['"Wk 10"'];
        weekTwoWeeksAgo = rb['"Wk 11"'];
        weekLastWeek = rb['"Wk 12"'];
      }

      if (gameInfo.week.currentWeek === 14) {
        weekFiveWeeksAgo = rb['"Wk 9"'];
        weekFourWeeksAgo = rb['"Wk 10"'];
        weekThreeWeeksAgo = rb['"Wk 11"'];
        weekTwoWeeksAgo = rb['"Wk 12"'];
        weekLastWeek = rb['"Wk 13"'];
      }

      if (gameInfo.week.currentWeek === 15) {
        weekFiveWeeksAgo = rb['"Wk 10"'];
        weekFourWeeksAgo = rb['"Wk 11"'];
        weekThreeWeeksAgo = rb['"Wk 12"'];
        weekTwoWeeksAgo = rb['"Wk 13"'];
        weekLastWeek = rb['"Wk 14"'];
      }

      if (gameInfo.week.currentWeek === 16) {
        weekFiveWeeksAgo = rb['"Wk 11"'];
        weekFourWeeksAgo = rb['"Wk 12"'];
        weekThreeWeeksAgo = rb['"Wk 13"'];
        weekTwoWeeksAgo = rb['"Wk 14"'];
        weekLastWeek = rb['"Wk 15"'];
      }

      if (gameInfo.week.currentWeek === 17) {
        weekFiveWeeksAgo = rb['"Wk 12"'];
        weekFourWeeksAgo = rb['"Wk 13"'];
        weekThreeWeeksAgo = rb['"Wk 14"'];
        weekTwoWeeksAgo = rb['"Wk 15"'];
        weekLastWeek = rb['"Wk 16"'];
      }

      if (gameInfo.week.currentWeek === 18) {
        weekFiveWeeksAgo = rb['"Wk 13"'];
        weekFourWeeksAgo = rb['"Wk 14"'];
        weekThreeWeeksAgo = rb['"Wk 15"'];
        weekTwoWeeksAgo = rb['"Wk 16"'];
        weekLastWeek = rb['"Wk 17"'];
      }

      let temprbName = rb['"full_name"'].slice(1, -1).replace('.', '');
      // let alsotemprbName = temprbName.replace("'", '');
      let rbName = temprbName.replace('.', '');
      // console.log(rbName, passedInTeam.firstPassedInRBName);
      if (passedInTeam.firstPassedInRBName.includes("'")) {
        passedInTeam.firstPassedInRBAltName =
          passedInTeam.firstPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      if (passedInTeam.secondPassedInRBName.includes("'")) {
        passedInTeam.secondPassedInRBAltName =
          passedInTeam.secondPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      if (
        passedInTeam.thirdPassedInRBName &&
        passedInTeam.thirdPassedInRBName.includes("'")
      ) {
        passedInTeam.thirdPassedInRBAltName =
          passedInTeam.thirdPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      if (
        passedInTeam.fourthPassedInRBName &&
        passedInTeam.fourthPassedInRBName.includes("'")
      ) {
        passedInTeam.fourthPassedInRBAltName =
          passedInTeam.fourthPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }

      if (
        rbName === passedInTeam.firstPassedInRBName ||
        passedInTeam.firstPassedInRBAltName === rbName
      ) {
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo * 100).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo * 100).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo * 100).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo * 100).toFixed(2);
        tempweekLastWeek = (+weekLastWeek * 100).toFixed(2);
        // console.log(passedInTeam.firstPassedInRBName, tempweekFiveWeeksAgo);
        passedInTeam.firstPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.firstPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFiveWeeksAgo
          ).toFixed(2);
        //
        passedInTeam.firstPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.firstPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFourWeeksAgo
          ).toFixed(2);
        //
        passedInTeam.firstPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.firstPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekThreeWeeksAgo
          ).toFixed(2);
        // //
        passedInTeam.firstPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.firstPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekTwoWeeksAgo
          ).toFixed(2);
        // //
        passedInTeam.firstPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.firstPassedInRBLastWeekInFantasyPointsScoredPointsScored +
            +tempweekLastWeek
          ).toFixed(2);
      }

      if (
        rbName === passedInTeam.secondPassedInRBName ||
        passedInTeam.secondPassedInRBAltName === rbName
      ) {
        // console.log(passedInTeam.secondPassedInRBFiveWeeksAgoName);
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo * 100).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo * 100).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo * 100).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo * 100).toFixed(2);
        tempweekLastWeek = (+weekLastWeek * 100).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
        passedInTeam.secondPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.secondPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFiveWeeksAgo
          ).toFixed(2);
        //
        passedInTeam.secondPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.secondPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFourWeeksAgo
          ).toFixed(2);
        //
        passedInTeam.secondPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.secondPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekThreeWeeksAgo
          ).toFixed(2);
        // //
        passedInTeam.secondPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.secondPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekTwoWeeksAgo
          ).toFixed(2);
        // //
        passedInTeam.secondPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.secondPassedInRBLastWeekInFantasyPointsScoredPointsScored +
            +tempweekLastWeek
          ).toFixed(2);
      }

      if (
        rbName === passedInTeam.thirdPassedInRBName ||
        passedInTeam.thirdPassedInRBAltName === rbName
      ) {
        // console.log(rb['"full_name"']);
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo * 100).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo * 100).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo * 100).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo * 100).toFixed(2);
        tempweekLastWeek = (+weekLastWeek * 100).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
        passedInTeam.thirdPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.thirdPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFiveWeeksAgo
          ).toFixed(2);
        //
        passedInTeam.thirdPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.thirdPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFourWeeksAgo
          ).toFixed(2);
        //
        passedInTeam.thirdPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.thirdPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekThreeWeeksAgo
          ).toFixed(2);
        // //
        passedInTeam.thirdPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.thirdPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekTwoWeeksAgo
          ).toFixed(2);
        // //
        passedInTeam.thirdPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.thirdPassedInRBLastWeekInFantasyPointsScoredPointsScored +
            +tempweekLastWeek
          ).toFixed(2);
      }

      if (
        rbName === passedInTeam.fourthPassedInRBName ||
        passedInTeam.fourthPassedInRBAltName === rbName
      ) {
        // console.log(rb['"full_name"']);
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo * 100).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo * 100).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo * 100).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo * 100).toFixed(2);
        tempweekLastWeek = (+weekLastWeek * 100).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
        passedInTeam.fourthPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.fourthPassedInRBFiveWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFiveWeeksAgo
          ).toFixed(2);
        //
        passedInTeam.fourthPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.fourthPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFourWeeksAgo
          ).toFixed(2);
        //
        passedInTeam.fourthPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.fourthPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekThreeWeeksAgo
          ).toFixed(2);
        // //
        passedInTeam.fourthPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.fourthPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekTwoWeeksAgo
          ).toFixed(2);
        // //
        passedInTeam.fourthPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage =
          (
            +passedInTeam.fourthPassedInRBLastWeekInFantasyPointsScoredPointsScored +
            +tempweekLastWeek
          ).toFixed(2);
      }
    }
  });

  ////////////////////////////
  ///rb opportunites per week last five weeks to help to determine what rb's roles were each week last five weeks
  /////////////////////

  let tempteamRBTotalsFiveWeeksAgo = [];
  let tempteamRBTotalsFourWeeksAgo = [];
  let tempteamRBTotalsthreeWeeksAgo = [];
  let tempteamRBTotalstwoWeeksAgo = [];
  let tempteamRBTotalslasWeek = [];

  rbOpportunitesPerWeekLastFiveWeeks4for4PlayerStatExplorer.forEach(function (
    rb
  ) {
    if (
      passedInTeam.teamABV === rb['"posteam"'].slice(1, -1) ||
      passedInTeam.altTeamABV === rb['"posteam"'].slice(1, -1)
    ) {
      // console.log(rb);

      let weekFiveWeeksAgo = 0;
      let weekFourWeeksAgo = 0;
      let weekThreeWeeksAgo = 0;
      let weekTwoWeeksAgo = 0;
      let weekLastWeek = 0;

      if (gameInfo.week.currentWeek === 3) {
        weekTwoWeeksAgo = rb['"Wk 1"'];
        weekLastWeek = rb['"Wk 2"'];
      }

      if (gameInfo.week.currentWeek === 4) {
        weekThreeWeeksAgo = rb['"Wk 1"'];
        weekTwoWeeksAgo = rb['"Wk 2"'];
        weekLastWeek = rb['"Wk 3"'];
      }

      if (gameInfo.week.currentWeek === 5) {
        weekFourWeeksAgo = rb['"Wk 1"'];
        weekThreeWeeksAgo = rb['"Wk 2"'];
        weekTwoWeeksAgo = rb['"Wk 3"'];
        weekLastWeek = rb['"Wk 4"'];
      }

      if (gameInfo.week.currentWeek === 6) {
        weekFiveWeeksAgo = rb['"Wk 1"'];
        weekFourWeeksAgo = rb['"Wk 2"'];
        weekThreeWeeksAgo = rb['"Wk 3"'];
        weekTwoWeeksAgo = rb['"Wk 4"'];
        weekLastWeek = rb['"Wk 5"'];
      }

      if (gameInfo.week.currentWeek === 7) {
        weekFiveWeeksAgo = rb['"Wk 2"'];
        weekFourWeeksAgo = rb['"Wk 3"'];
        weekThreeWeeksAgo = rb['"Wk 4"'];
        weekTwoWeeksAgo = rb['"Wk 5"'];
        weekLastWeek = rb['"Wk 6"'];
      }

      if (gameInfo.week.currentWeek === 8) {
        weekFiveWeeksAgo = rb['"Wk 3"'];
        weekFourWeeksAgo = rb['"Wk 4"'];
        weekThreeWeeksAgo = rb['"Wk 5"'];
        weekTwoWeeksAgo = rb['"Wk 6"'];
        weekLastWeek = rb['"Wk 7"'];
      }

      if (gameInfo.week.currentWeek === 9) {
        weekFiveWeeksAgo = rb['"Wk 4"'];
        weekFourWeeksAgo = rb['"Wk 5"'];
        weekThreeWeeksAgo = rb['"Wk 6"'];
        weekTwoWeeksAgo = rb['"Wk 7"'];
        weekLastWeek = rb['"Wk 8"'];
      }

      if (gameInfo.week.currentWeek === 10) {
        weekFiveWeeksAgo = rb['"Wk 5"'];
        weekFourWeeksAgo = rb['"Wk 6"'];
        weekThreeWeeksAgo = rb['"Wk 7"'];
        weekTwoWeeksAgo = rb['"Wk 8"'];
        weekLastWeek = rb['"Wk 9"'];
      }

      if (gameInfo.week.currentWeek === 11) {
        weekFiveWeeksAgo = rb['"Wk 6"'];
        weekFourWeeksAgo = rb['"Wk 7"'];
        weekThreeWeeksAgo = rb['"Wk 8"'];
        weekTwoWeeksAgo = rb['"Wk 9"'];
        weekLastWeek = rb['"Wk 10"'];
      }

      if (gameInfo.week.currentWeek === 12) {
        weekFiveWeeksAgo = rb['"Wk 7"'];
        weekFourWeeksAgo = rb['"Wk 8"'];
        weekThreeWeeksAgo = rb['"Wk 9"'];
        weekTwoWeeksAgo = rb['"Wk 10"'];
        weekLastWeek = rb['"Wk 11"'];
      }

      if (gameInfo.week.currentWeek === 13) {
        weekFiveWeeksAgo = rb['"Wk 8"'];
        weekFourWeeksAgo = rb['"Wk 9"'];
        weekThreeWeeksAgo = rb['"Wk 10"'];
        weekTwoWeeksAgo = rb['"Wk 11"'];
        weekLastWeek = rb['"Wk 12"'];
      }

      if (gameInfo.week.currentWeek === 14) {
        weekFiveWeeksAgo = rb['"Wk 9"'];
        weekFourWeeksAgo = rb['"Wk 10"'];
        weekThreeWeeksAgo = rb['"Wk 11"'];
        weekTwoWeeksAgo = rb['"Wk 12"'];
        weekLastWeek = rb['"Wk 13"'];
      }

      if (gameInfo.week.currentWeek === 15) {
        weekFiveWeeksAgo = rb['"Wk 10"'];
        weekFourWeeksAgo = rb['"Wk 11"'];
        weekThreeWeeksAgo = rb['"Wk 12"'];
        weekTwoWeeksAgo = rb['"Wk 13"'];
        weekLastWeek = rb['"Wk 14"'];
      }

      if (gameInfo.week.currentWeek === 16) {
        weekFiveWeeksAgo = rb['"Wk 11"'];
        weekFourWeeksAgo = rb['"Wk 12"'];
        weekThreeWeeksAgo = rb['"Wk 13"'];
        weekTwoWeeksAgo = rb['"Wk 14"'];
        weekLastWeek = rb['"Wk 15"'];
      }

      if (gameInfo.week.currentWeek === 17) {
        weekFiveWeeksAgo = rb['"Wk 12"'];
        weekFourWeeksAgo = rb['"Wk 13"'];
        weekThreeWeeksAgo = rb['"Wk 14"'];
        weekTwoWeeksAgo = rb['"Wk 15"'];
        weekLastWeek = rb['"Wk 16"'];
      }

      if (gameInfo.week.currentWeek === 18) {
        weekFiveWeeksAgo = rb['"Wk 13"'];
        weekFourWeeksAgo = rb['"Wk 14"'];
        weekThreeWeeksAgo = rb['"Wk 15"'];
        weekTwoWeeksAgo = rb['"Wk 16"'];
        weekLastWeek = rb['"Wk 17"'];
      }

      // weekFiveWeeksAgo: [],
      // weekFourWeeksAgo: [],
      // weekThreeWeeksAgo: [],
      // weekTwoWeeksAgo: [],
      // weekLastWeek: [],

      // console.log(weekFiveWeeksAgo);
      let temprbName = rb['"full_name"'].slice(1, -1).replace('.', '');
      // let alsotemprbName = temprbName.replace("'", '');
      let rbName = temprbName.replace('.', '');

      if (passedInTeam.firstPassedInRBName.includes("'")) {
        passedInTeam.firstPassedInRBAltName =
          passedInTeam.firstPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      if (passedInTeam.secondPassedInRBName.includes("'")) {
        passedInTeam.secondPassedInRBAltName =
          passedInTeam.secondPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      if (
        passedInTeam.thirdPassedInRBName &&
        passedInTeam.thirdPassedInRBName.includes("'")
      ) {
        passedInTeam.thirdPassedInRBAltName =
          passedInTeam.thirdPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      if (
        passedInTeam.fourthPassedInRBName &&
        passedInTeam.fourthPassedInRBName.includes("'")
      ) {
        passedInTeam.fourthPassedInRBAltName =
          passedInTeam.fourthPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      // console.log(rbName, passedInTeam.firstPassedInRBName);
      // console.log(rbName, passedInTeam.firstPassedInRBAltName);

      if (
        rbName === passedInTeam.firstPassedInRBName ||
        rbName === passedInTeam.firstPassedInRBAltName
      ) {
        if(weekFiveWeeksAgo) {
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo).toFixed(2);
        }
        if(tempweekFourWeeksAgo ) {
        tempweekFourWeeksAgo = (+weekFourWeeksAgo).toFixed(2);
        }
        if(tempweekThreeWeeksAgo) {
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo).toFixed(2);
        }
        if(tempweekTwoWeeksAgo) {
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo).toFixed(2);
        }
        if(tempweekLastWeek) {
        tempweekLastWeek = (+weekLastWeek).toFixed(2);
        }
        // console.log(tempweekFiveWeeksAgo);
        passedInTeam.firstPassedInRBFiveWeeksagoTotal = (
          +passedInTeam.firstPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFiveWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFiveWeeksAgo.push(
          +passedInTeam.firstPassedInRBFiveWeeksagoTotal
        );
        // console.log(
        //   passedInTeam.firstPassedInRBName,
        //   passedInTeam.firstPassedInRBFiveWeeksagoTotal
        // );
        //
        passedInTeam.firstPassedInRBFourWeeksagoTotal = (
          +passedInTeam.firstPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFourWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFourWeeksAgo.push(
          +passedInTeam.firstPassedInRBFourWeeksagoTotal
        );
        //
        passedInTeam.firstPassedInRBThreeWeeksagoTotal = (
          +passedInTeam.firstPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekThreeWeeksAgo
        ).toFixed(2);

        passedInTeam.weekThreeWeeksAgo.push(
          +passedInTeam.firstPassedInRBThreeWeeksagoTotal
        );
        // //
        passedInTeam.firstPassedInRBTwoWeeksagoTotal = (
          +passedInTeam.firstPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekTwoWeeksAgo
        ).toFixed(2);

        passedInTeam.weekTwoWeeksAgo.push(
          +passedInTeam.firstPassedInRBTwoWeeksagoTotal
        );
        // //
        passedInTeam.firstPassedInRBLastWeekTotal = (
          +passedInTeam.firstPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage +
          +tempweekLastWeek
        ).toFixed(2);

        passedInTeam.weekLastWeek.push(
          +passedInTeam.firstPassedInRBLastWeekTotal
        );
      }

      if (
        rbName === passedInTeam.secondPassedInRBName ||
        rbName === passedInTeam.secondPassedInRBAltName
      ) {
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo).toFixed(2);
        tempweekLastWeek = (+weekLastWeek).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
        passedInTeam.secondPassedInRBFiveWeeksagoTotal = (
          +passedInTeam.secondPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFiveWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFiveWeeksAgo.push(
          +passedInTeam.secondPassedInRBFiveWeeksagoTotal
        );
        //
        passedInTeam.secondPassedInRBFourWeeksagoTotal = (
          +passedInTeam.secondPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFourWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFourWeeksAgo.push(
          +passedInTeam.secondPassedInRBFourWeeksagoTotal
        );
        //
        passedInTeam.secondPassedInRBThreeWeeksagoTotal = (
          +passedInTeam.secondPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekThreeWeeksAgo
        ).toFixed(2);

        passedInTeam.weekThreeWeeksAgo.push(
          +passedInTeam.secondPassedInRBThreeWeeksagoTotal
        );
        // //
        passedInTeam.secondPassedInRBTwoWeeksagoTotal = (
          +passedInTeam.secondPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekTwoWeeksAgo
        ).toFixed(2);

        passedInTeam.weekTwoWeeksAgo.push(
          +passedInTeam.secondPassedInRBTwoWeeksagoTotal
        );
        // //
        passedInTeam.secondPassedInRBLastWeekTotal = (
          +passedInTeam.secondPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage +
          +tempweekLastWeek
        ).toFixed(2);

        passedInTeam.weekLastWeek.push(
          +passedInTeam.secondPassedInRBLastWeekTotal
        );
      }

      if (
        rbName === passedInTeam.thirdPassedInRBName ||
        rbName === passedInTeam.thirdPassedInRBAltName
      ) {
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo).toFixed(2);
        tempweekLastWeek = (+weekLastWeek).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
        passedInTeam.thirdPassedInRBFiveWeeksagoTotal = (
          +passedInTeam.thirdPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFiveWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFiveWeeksAgo.push(
          +passedInTeam.thirdPassedInRBFiveWeeksagoTotal
        );
        //
        passedInTeam.thirdPassedInRBFourWeeksagoTotal = (
          +passedInTeam.thirdPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFourWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFourWeeksAgo.push(
          +passedInTeam.thirdPassedInRBFourWeeksagoTotal
        );
        //
        passedInTeam.thirdPassedInRBThreeWeeksagoTotal = (
          +passedInTeam.thirdPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekThreeWeeksAgo
        ).toFixed(2);

        passedInTeam.weekThreeWeeksAgo.push(
          +passedInTeam.thirdPassedInRBThreeWeeksagoTotal
        );
        // //
        passedInTeam.thirdPassedInRBTwoWeeksagoTotal = (
          +passedInTeam.thirdPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekTwoWeeksAgo
        ).toFixed(2);

        passedInTeam.weekTwoWeeksAgo.push(
          +passedInTeam.thirdPassedInRBTwoWeeksagoTotal
        );
        // //
        passedInTeam.thirdPassedInRBLastWeekTotal = (
          +passedInTeam.thirdPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage +
          +tempweekLastWeek
        ).toFixed(2);

        passedInTeam.weekLastWeek.push(
          +passedInTeam.thirdPassedInRBLastWeekTotal
        );
      }

      if (
        rbName === passedInTeam.fourthPassedInRBName ||
        rbName === passedInTeam.fourthPassedInRBAltName
      ) {
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo).toFixed(2);
        tempweekLastWeek = (+weekLastWeek).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
        passedInTeam.fourthPassedInRBFiveWeeksagoTotal = (
          +passedInTeam.fourthPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFiveWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFiveWeeksAgo.push(
          +passedInTeam.fourthPassedInRBFiveWeeksagoTotal
        );
        //
        passedInTeam.fourthPassedInRBFourWeeksagoTotal = (
          +passedInTeam.fourthPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFourWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFourWeeksAgo.push(
          +passedInTeam.fourthPassedInRBFourWeeksagoTotal
        );
        //
        passedInTeam.fourthPassedInRBThreeWeeksagoTotal = (
          +passedInTeam.fourthPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekThreeWeeksAgo
        ).toFixed(2);

        passedInTeam.weekThreeWeeksAgo.push(
          +passedInTeam.fourthPassedInRBThreeWeeksagoTotal
        );
        // //
        passedInTeam.fourthPassedInRBTwoWeeksagoTotal = (
          +passedInTeam.fourthPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekTwoWeeksAgo
        ).toFixed(2);

        passedInTeam.weekTwoWeeksAgo.push(
          +passedInTeam.fourthPassedInRBTwoWeeksagoTotal
        );
        // //
        passedInTeam.fourthPassedInRBLastWeekTotal = (
          +passedInTeam.fourthPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage +
          +tempweekLastWeek
        ).toFixed(2);

        passedInTeam.weekLastWeek.push(
          +passedInTeam.fourthPassedInRBLastWeekTotal
        );
      }

      let teamRBTotalsFiveWeeksAgo = passedInTeam.weekFiveWeeksAgo.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );

      let teamRBTotalsFourWeeksAgo = passedInTeam.weekFourWeeksAgo.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );

      let teamRBTotalsThreeWeeksAgo = passedInTeam.weekThreeWeeksAgo.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );

      let teamRBTotalsTwoWeeksAgo = passedInTeam.weekTwoWeeksAgo.sort(
        (a, b) => {
          if (a > b) return -1;
          if (a < b) return 1;
        }
      );

      let teamRBTotalsLastWeek = passedInTeam.weekLastWeek.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
      });

      passedInTeam.teamRBTotalsFiveWeeksAgo = teamRBTotalsFiveWeeksAgo;

      passedInTeam.teamRBTotalsFourWeeksAgo = teamRBTotalsFourWeeksAgo;
      passedInTeam.teamRBTotalsThreeWeeksAgo = teamRBTotalsThreeWeeksAgo;
      passedInTeam.teamRBTotalsTwoWeeksAgo = teamRBTotalsTwoWeeksAgo;
      passedInTeam.teamRBTotalsLastWeek = teamRBTotalsLastWeek;

      // console.log(passedInTeam.teamABV, passedInTeam.teamRBTotalsFiveWeeksAgo);
    }
  });

  ////////
  /////pushing to arrays teams RBOne and RBTwo this week's roles the last five weeks
  ///////

  rbOpportunitesPerWeekLastFiveWeeks4for4PlayerStatExplorer.forEach(function (
    rb
  ) {
    if (
      passedInTeam.teamABV === rb['"posteam"'].slice(1, -1) ||
      passedInTeam.altTeamABV === rb['"posteam"'].slice(1, -1)
    ) {
      let temprbName = rb['"full_name"'].slice(1, -1).replace('.', '');
      // let alsotemprbName = temprbName.replace("'", '');
      let rbName = temprbName.replace('.', '');

      if (passedInTeam.RBOne.name) {
        if (passedInTeam.RBOne.name.includes("'")) {
          passedInTeam.RBOne.altname = passedInTeam.RBOne.name.replace("'", '');
        }
      }

      if (passedInTeam.RBTwo.name) {
        if (passedInTeam.RBTwo.name.includes("'")) {
          passedInTeam.RBTwo.altname = passedInTeam.RBTwo.name.replace("'", '');
        }
      }

      // console.log(passedInTeam.firstPassedInRBAltName);
      if (
        rbName === passedInTeam.firstPassedInRBName ||
        rbName === passedInTeam.firstPassedInRBAltName
      ) {
        //first passed in RB
        //
        //five weeks ago

        if (+passedInTeam.teamRBTotalsFiveWeeksAgo[0] > 0) {
          // console.log(
          //   rbName,
          //   passedInTeam.firstPassedInRBName,
          //   +passedInTeam.firstPassedInRBFiveWeeksagoTotal,
          //   +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          // );
          if (
            +passedInTeam.firstPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFiveWeeksAgo = rbName;
            // console.log(rbName, passedInTeam.RBOne.name);
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFiveWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[0] &&
            +passedInTeam.firstPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
        // console.log(
        //   passedInTeam.RBOne.name,
        //   passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive
        // );
        //four weeks ago
        if (+passedInTeam.teamRBTotalsFourWeeksAgo[0] > 0) {
          if (
            +passedInTeam.firstPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFourWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFourWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[0] &&
            +passedInTeam.firstPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        //three weeks ago

        if (+passedInTeam.teamRBTotalsThreeWeeksAgo[0] > 0) {
          if (
            +passedInTeam.firstPassedInRBThreeWeeksagoTotal ===
            +passedInTeam.teamRBTotalsThreeWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneThreeWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBThreeWeeksagoTotal ===
            +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoThreeWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBThreeWeeksagoTotal !==
              +passedInTeam.teamRBTotalsThreeWeeksAgo[0] &&
            +passedInTeam.firstPassedInRBThreeWeeksagoTotal !==
              +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        //Two weeks ago
        if (+passedInTeam.teamRBTotalsTwoWeeksAgo[0] > 0) {
          if (
            +passedInTeam.firstPassedInRBTwoWeeksagoTotal ===
            +passedInTeam.teamRBTotalsTwoWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneTwoWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBTwoWeeksagoTotal ===
            +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoTwoWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBTwoWeeksagoTotal !==
              +passedInTeam.teamRBTotalsTwoWeeksAgo[0] &&
            +passedInTeam.firstPassedInRBTwoWeeksagoTotal !==
              +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        // //last week

        if (+passedInTeam.teamRBTotalsLastWeek[0] > 0) {
          if (
            +passedInTeam.firstPassedInRBLastWeekTotal ===
            +passedInTeam.teamRBTotalsLastWeek[0]
          ) {
            passedInTeam.teamRBOneLastWeek = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBLastWeekTotal ===
            +passedInTeam.teamRBTotalsLastWeek[1]
          ) {
            passedInTeam.teamRBTwoLastWeek = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBLastWeekTotal !==
              +passedInTeam.teamRBTotalsLastWeek[0] &&
            +passedInTeam.firstPassedInRBLastWeekTotal !==
              +passedInTeam.teamRBTotalsLastWeek[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
      }

      //second passed in RB

      if (
        rbName === passedInTeam.secondPassedInRBName ||
        rbName === passedInTeam.secondPassedInRBAltName
      ) {
        // console.log(
        //   `${passedInTeam.teamABV} ${+passedInTeam.teamRBTotalsFourWeeksAgo[0]}`
        // );
        if (+passedInTeam.teamRBTotalsFiveWeeksAgo[0] > 0) {
          if (
            +passedInTeam.secondPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFiveWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.secondPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFiveWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.secondPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[0] &&
            +passedInTeam.secondPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
      }

      //four weeks ago
      if (+passedInTeam.teamRBTotalsFourWeeksAgo[0] > 0) {
        if (
          rbName === passedInTeam.secondPassedInRBName ||
          rbName === passedInTeam.secondPassedInRBAltName
        ) {
          if (
            +passedInTeam.secondPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFourWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.secondPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFourWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.secondPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[0] &&
            +passedInTeam.secondPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        // three weeks ago

        if (+passedInTeam.teamRBTotalsThreeWeeksAgo[0] > 0) {
          if (
            rbName === passedInTeam.secondPassedInRBName ||
            rbName === passedInTeam.secondPassedInRBAltName
          ) {
            if (
              +passedInTeam.secondPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneThreeWeeksAgo = rbName;
              // console.log(
              //   `${passedInTeam.teamABV} ${passedInTeam.teamRBOneThreeWeeksAgo}`
              // );
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.secondPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoThreeWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.secondPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[0] &&
              +passedInTeam.secondPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //
        // //two weeks ago

        if (+passedInTeam.teamRBTotalsTwoWeeksAgo[0] > 0) {
          if (
            rbName === passedInTeam.secondPassedInRBName ||
            rbName === passedInTeam.secondPassedInRBAltName
          ) {
            if (
              +passedInTeam.secondPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneTwoWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.secondPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoTwoWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.secondPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[0] &&
              +passedInTeam.secondPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //last week

        if (+passedInTeam.teamRBTotalsLastWeek[0] > 0) {
          if (
            rbName === passedInTeam.secondPassedInRBName ||
            rbName === passedInTeam.secondPassedInRBAltName
          ) {
            if (
              +passedInTeam.secondPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[0]
            ) {
              passedInTeam.teamRBOneLastWeek = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.secondPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              passedInTeam.teamRBTwoLastWeek = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.secondPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[0] &&
              +passedInTeam.secondPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }
      }

      //third passed in RB

      //five weeks ago

      if (+passedInTeam.teamRBTotalsFiveWeeksAgo[0] > 0) {
        if (
          rbName === passedInTeam.thirdPassedInRBName ||
          rbName === passedInTeam.thirdPassedInRBAltName
        ) {
          if (
            +passedInTeam.thirdPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFiveWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.thirdPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFiveWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.thirdPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[0] &&
            +passedInTeam.thirdPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
      }

      //four weeks ago

      if (+passedInTeam.teamRBTotalsFourWeeksAgo[0] > 0) {
        if (
          rbName === passedInTeam.thirdPassedInRBName ||
          rbName === passedInTeam.thirdPassedInRBAltName
        ) {
          if (
            +passedInTeam.thirdPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFourWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.thirdPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFourWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.thirdPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[0] &&
            +passedInTeam.thirdPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        //three weeks ago

        if (+passedInTeam.teamRBTotalsThreeWeeksAgo[0] > 0) {
          if (
            rbName === passedInTeam.thirdPassedInRBName ||
            rbName === passedInTeam.thirdPassedInRBAltName
          ) {
            if (
              +passedInTeam.thirdPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneThreeWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoThreeWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[0] &&
              +passedInTeam.thirdPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //two weeks ago

        if (+passedInTeam.teamRBTotalsTwoWeeksAgo[0] > 0) {
          if (
            rbName === passedInTeam.thirdPassedInRBName ||
            rbName === passedInTeam.thirdPassedInRBAltName
          ) {
            if (
              +passedInTeam.thirdPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneTwoWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoTwoWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[0] &&
              +passedInTeam.thirdPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //last week

        if (+passedInTeam.teamRBTotalsLastWeek[0] > 0) {
          if (
            rbName === passedInTeam.thirdPassedInRBName ||
            rbName === passedInTeam.thirdPassedInRBAltName
          ) {
            if (
              +passedInTeam.thirdPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[0]
            ) {
              passedInTeam.teamRBOneLastWeek = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              passedInTeam.teamRBTwoLastWeek = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[0] &&
              +passedInTeam.thirdPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }
      }

      //fourth passed in RB

      //five weeks ago

      if (+passedInTeam.teamRBTotalsFiveWeeksAgo[0] > 0) {
        if (
          rbName === passedInTeam.fourthPassedInRBName ||
          rbName === passedInTeam.fourthPassedInRBAltName
        ) {
          if (
            +passedInTeam.fourthPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFiveWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.fourthPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFiveWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.fourthPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[0] &&
            +passedInTeam.fourthPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
      }

      //four weeks ago

      if (+passedInTeam.teamRBTotalsFourWeeksAgo[0] > 0) {
        if (
          rbName === passedInTeam.fourthPassedInRBName ||
          rbName === passedInTeam.fourthPassedInRBAltName
        ) {
          if (
            +passedInTeam.fourthPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFourWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }

          if (
            +passedInTeam.fourthPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFourWeeksAgo = rbName;
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.fourthPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[0] &&
            +passedInTeam.fourthPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            if (
              passedInTeam.RBOne.name === rbName ||
              rbName === passedInTeam.RBOne.altname
            ) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (
              passedInTeam.RBTwo.name === rbName ||
              rbName === passedInTeam.RBTwo.altname
            ) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        //three weeks ago

        if (+passedInTeam.teamRBTotalsThreeWeeksAgo[0] > 0) {
          if (
            rbName === passedInTeam.fourthPassedInRBName ||
            rbName === passedInTeam.fourthPassedInRBAltName
          ) {
            if (
              +passedInTeam.fourthPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneThreeWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }

            if (
              +passedInTeam.fourthPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoThreeWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.fourthPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[0] &&
              +passedInTeam.fourthPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //two weeks ago

        if (+passedInTeam.teamRBTotalsTwoWeeksAgo[0] > 0) {
          if (
            rbName === passedInTeam.fourthPassedInRBName ||
            rbName === passedInTeam.fourthPassedInRBAltName
          ) {
            if (
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneTwoWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }

            if (
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoTwoWeeksAgo = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[0] &&
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //last week

        if (+passedInTeam.teamRBTotalsLastWeek[0] > 0) {
          if (
            rbName === passedInTeam.fourthPassedInRBName ||
            rbName === passedInTeam.fourthPassedInRBAltName
          ) {
            if (
              +passedInTeam.fourthPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[0]
            ) {
              passedInTeam.teamRBOneLastWeek = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }

            if (
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              passedInTeam.teamRBTwoLastWeek = rbName;
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.fourthPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[0] &&
              +passedInTeam.fourthPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              if (
                passedInTeam.RBOne.name === rbName ||
                rbName === passedInTeam.RBOne.altname
              ) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (
                passedInTeam.RBTwo.name === rbName ||
                rbName === passedInTeam.RBTwo.altname
              ) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }
      }
    }
  });

  //end of settting RB Roles Last five week

  let teamHVTweekFiveWeeksAgo = 0;
  let teamHVTweekFourWeeksAgo = 0;
  let teamHVTweekThreeWeeksAgo = 0;
  let teamHVTweekTwoWeeksAgo = 0;
  let teamHVTweekLastWeek = 0;
  passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek = [];
  passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek = [];

  rb4for4WeeklyStatExplorerHVTsLastFiveWeeks.forEach(function (rb) {
    if (
      passedInTeam.teamABV === rb['"posteam"'].slice(1, -1) ||
      passedInTeam.altTeamABV === rb['"posteam"'].slice(1, -1)
    ) {
      let weekFiveWeeksAgo = 0;
      let weekFourWeeksAgo = 0;
      let weekThreeWeeksAgo = 0;
      let weekTwoWeeksAgo = 0;
      let weekLastWeek = 0;

      if (gameInfo.week.currentWeek === 3) {
        weekTwoWeeksAgo = rb['"Wk 1"'];
        weekLastWeek = rb['"Wk 2"'];
      }

      if (gameInfo.week.currentWeek === 4) {
        weekThreeWeeksAgo = rb['"Wk 1"'];
        weekTwoWeeksAgo = rb['"Wk 2"'];
        weekLastWeek = rb['"Wk 3"'];
      }

      if (gameInfo.week.currentWeek === 5) {
        weekFourWeeksAgo = rb['"Wk 1"'];
        weekThreeWeeksAgo = rb['"Wk 2"'];
        weekTwoWeeksAgo = rb['"Wk 3"'];
        weekLastWeek = rb['"Wk 4"'];
      }

      if (gameInfo.week.currentWeek === 6) {
        weekFiveWeeksAgo = rb['"Wk 1"'];
        weekFourWeeksAgo = rb['"Wk 2"'];
        weekThreeWeeksAgo = rb['"Wk 3"'];
        weekTwoWeeksAgo = rb['"Wk 4"'];
        weekLastWeek = rb['"Wk 5"'];
      }

      if (gameInfo.week.currentWeek === 7) {
        weekFiveWeeksAgo = rb['"Wk 2"'];
        weekFourWeeksAgo = rb['"Wk 3"'];
        weekThreeWeeksAgo = rb['"Wk 4"'];
        weekTwoWeeksAgo = rb['"Wk 5"'];
        weekLastWeek = rb['"Wk 6"'];
      }

      if (gameInfo.week.currentWeek === 8) {
        weekFiveWeeksAgo = rb['"Wk 3"'];
        weekFourWeeksAgo = rb['"Wk 4"'];
        weekThreeWeeksAgo = rb['"Wk 5"'];
        weekTwoWeeksAgo = rb['"Wk 6"'];
        weekLastWeek = rb['"Wk 7"'];
      }

      if (gameInfo.week.currentWeek === 9) {
        weekFiveWeeksAgo = rb['"Wk 4"'];
        weekFourWeeksAgo = rb['"Wk 5"'];
        weekThreeWeeksAgo = rb['"Wk 6"'];
        weekTwoWeeksAgo = rb['"Wk 7"'];
        weekLastWeek = rb['"Wk 8"'];
      }

      if (gameInfo.week.currentWeek === 10) {
        weekFiveWeeksAgo = rb['"Wk 5"'];
        weekFourWeeksAgo = rb['"Wk 6"'];
        weekThreeWeeksAgo = rb['"Wk 7"'];
        weekTwoWeeksAgo = rb['"Wk 8"'];
        weekLastWeek = rb['"Wk 9"'];
      }

      if (gameInfo.week.currentWeek === 11) {
        weekFiveWeeksAgo = rb['"Wk 6"'];
        weekFourWeeksAgo = rb['"Wk 7"'];
        weekThreeWeeksAgo = rb['"Wk 8"'];
        weekTwoWeeksAgo = rb['"Wk 9"'];
        weekLastWeek = rb['"Wk 10"'];
      }

      if (gameInfo.week.currentWeek === 12) {
        weekFiveWeeksAgo = rb['"Wk 7"'];
        weekFourWeeksAgo = rb['"Wk 8"'];
        weekThreeWeeksAgo = rb['"Wk 9"'];
        weekTwoWeeksAgo = rb['"Wk 10"'];
        weekLastWeek = rb['"Wk 11"'];
      }

      if (gameInfo.week.currentWeek === 13) {
        weekFiveWeeksAgo = rb['"Wk 8"'];
        weekFourWeeksAgo = rb['"Wk 9"'];
        weekThreeWeeksAgo = rb['"Wk 10"'];
        weekTwoWeeksAgo = rb['"Wk 11"'];
        weekLastWeek = rb['"Wk 12"'];
      }

      if (gameInfo.week.currentWeek === 14) {
        weekFiveWeeksAgo = rb['"Wk 9"'];
        weekFourWeeksAgo = rb['"Wk 10"'];
        weekThreeWeeksAgo = rb['"Wk 11"'];
        weekTwoWeeksAgo = rb['"Wk 12"'];
        weekLastWeek = rb['"Wk 13"'];
      }

      if (gameInfo.week.currentWeek === 15) {
        weekFiveWeeksAgo = rb['"Wk 10"'];
        weekFourWeeksAgo = rb['"Wk 11"'];
        weekThreeWeeksAgo = rb['"Wk 12"'];
        weekTwoWeeksAgo = rb['"Wk 13"'];
        weekLastWeek = rb['"Wk 14"'];
      }

      if (gameInfo.week.currentWeek === 16) {
        weekFiveWeeksAgo = rb['"Wk 11"'];
        weekFourWeeksAgo = rb['"Wk 12"'];
        weekThreeWeeksAgo = rb['"Wk 13"'];
        weekTwoWeeksAgo = rb['"Wk 14"'];
        weekLastWeek = rb['"Wk 15"'];
      }

      if (gameInfo.week.currentWeek === 17) {
        weekFiveWeeksAgo = rb['"Wk 12"'];
        weekFourWeeksAgo = rb['"Wk 13"'];
        weekThreeWeeksAgo = rb['"Wk 14"'];
        weekTwoWeeksAgo = rb['"Wk 15"'];
        weekLastWeek = rb['"Wk 16"'];
      }

      if (gameInfo.week.currentWeek === 18) {
        weekFiveWeeksAgo = rb['"Wk 13"'];
        weekFourWeeksAgo = rb['"Wk 14"'];
        weekThreeWeeksAgo = rb['"Wk 15"'];
        weekTwoWeeksAgo = rb['"Wk 16"'];
        weekLastWeek = rb['"Wk 17"'];
      }

      let temprbName = rb['"full_name"'].slice(1, -1).replace('.', '');
      // let alsotemprbName = temprbName.replace("'", '');
      let rbName = temprbName.replace('.', '');

      // console.log(altrbName);
      teamHVTweekFiveWeeksAgo += +weekFiveWeeksAgo;
      teamHVTweekFourWeeksAgo += +weekFourWeeksAgo;
      teamHVTweekThreeWeeksAgo += +weekThreeWeeksAgo;
      teamHVTweekTwoWeeksAgo += +weekTwoWeeksAgo;
      teamHVTweekLastWeek += +weekLastWeek;

      passedInTeam.teamHVTweekFiveWeeksAgo = +teamHVTweekFiveWeeksAgo;
      passedInTeam.teamHVTweekFourWeeksAgo = +teamHVTweekFourWeeksAgo;
      passedInTeam.teamHVTweekThreeWeeksAgo = +teamHVTweekThreeWeeksAgo;
      passedInTeam.teamHVTweekTwoWeeksAgo = +teamHVTweekTwoWeeksAgo;
      passedInTeam.teamHVTweekLastWeek = +teamHVTweekLastWeek;

      let totalTeamHVTsLastFiveWeeks = 0;
      totalTeamHVTsLastFiveWeeks += +teamHVTweekFiveWeeksAgo;
      totalTeamHVTsLastFiveWeeks += +teamHVTweekFourWeeksAgo;
      totalTeamHVTsLastFiveWeeks += +teamHVTweekThreeWeeksAgo;
      totalTeamHVTsLastFiveWeeks += +teamHVTweekTwoWeeksAgo;
      totalTeamHVTsLastFiveWeeks += +teamHVTweekLastWeek;

      passedInTeam.totalTeamHVTsLastFiveWeeks = totalTeamHVTsLastFiveWeeks;
      passedInTeam.teamTotalHVTsLastFiveWeeks = totalTeamHVTsLastFiveWeeks;
      // totalTeamHVTsLastFiveWeeks += teamHVTweekFourWeeksAgo;
      // totalTeamHVTsLastFiveWeeks += teamHVTweekThreeWeeksAgo;
      // totalTeamHVTsLastFiveWeeks += teamHVTweekTwoWeeksAgo;
      // totalTeamHVTsLastFiveWeeks += teamHVTweekLastWeek;
      // console.log(
      //   passedInTeam.RBOne.name,
      //   rbName,
      //   altrbName,
      //   rb['"full_name"'].slice(1, -1)
      // );
      if (rbName === rb['"full_name"'].slice(1, -1)) {
        // console.log(passedInTeam.RBOne.name, rbName);
        if (
          passedInTeam.RBOne.name === rbName ||
          rbName === passedInTeam.RBOne.altname
        ) {
          // console.log(passedInTeam.RBOne.name, altrbName);
          // console.log(rbName, passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive);
          totalHVTCounter = 0;
          totalHVTCounter += +weekFiveWeeksAgo;
          totalHVTCounter += +weekFourWeeksAgo;
          totalHVTCounter += +weekThreeWeeksAgo;
          totalHVTCounter += +weekTwoWeeksAgo;
          totalHVTCounter += +weekLastWeek;
          passedInTeam.RBOne.totalHVTsLastFiveWeeks = +totalHVTCounter;

          passedInTeam.RBOne.HVTsFiveweeksAgo = +weekFiveWeeksAgo;
          passedInTeam.RBOne.HVTsFourweeksAgo = +weekFourWeeksAgo;
          passedInTeam.RBOne.HVTsThreeweeksAgo = +weekThreeWeeksAgo;
          passedInTeam.RBOne.HVTsTwoweeksAgo = +weekTwoWeeksAgo;
          passedInTeam.RBOne.HVTsLastWeek = +weekLastWeek;
        }
        // console.log(
        //   passedInTeam.RBOne.name,
        //   passedInTeam.RBOne.HVTsFiveweeksAgo
        // );
        if (
          rbName === passedInTeam.RBTwo.name ||
          rbName === passedInTeam.RBTwo.altname
        ) {
          totalHVTCounter = 0;
          totalHVTCounter += +weekFiveWeeksAgo;
          totalHVTCounter += +weekFourWeeksAgo;
          totalHVTCounter += +weekThreeWeeksAgo;
          totalHVTCounter += +weekTwoWeeksAgo;
          totalHVTCounter += +weekLastWeek;
          passedInTeam.RBTwo.totalHVTsLastFiveWeeks = +totalHVTCounter;

          passedInTeam.RBTwo.HVTsFiveweeksAgo = +weekFiveWeeksAgo;
          passedInTeam.RBTwo.HVTsFourweeksAgo = +weekFourWeeksAgo;
          passedInTeam.RBTwo.HVTsThreeweeksAgo = +weekThreeWeeksAgo;
          passedInTeam.RBTwo.HVTsTwoweeksAgo = +weekTwoWeeksAgo;
          passedInTeam.RBTwo.HVTsLastWeek = +weekLastWeek;
        }
      }

      // console.log(passedInTeam.teamABV, weekLastWeek, teamHVTweekLastWeek);
    }
  });

  rb4for4WeeklyStatExplorerHVTsLastFiveWeeks.forEach(function (rb) {
    // console.log(
    //   passedInTeam.RBOne.name,
    //   passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive[0]
    // );
    if (passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive[0] < 3) {
      if (passedInTeam.teamHVTweekFiveWeeksAgo > 0) {
        // console.log(
        //   passedInTeam.RBOne.name,
        //   passedInTeam.RBOne.HVTsFiveweeksAgo,
        //   passedInTeam.teamHVTweekFiveWeeksAgo
        // );
        percentHVTsFiveWeeksAgo = +(
          passedInTeam.RBOne.HVTsFiveweeksAgo /
          passedInTeam.teamHVTweekFiveWeeksAgo
        ).toFixed(2);

        if (
          !passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[0] &&
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[0] !== 0
        ) {
          // console.log(passedInTeam.RBOne.name, percentHVTsFiveWeeksAgo);
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek.push(
            +percentHVTsFiveWeeksAgo
          );
        }
      }
    }

    if (passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive[1] < 3) {
      // console.log(rbName, 'played 5 weeks ago');
      if (passedInTeam.teamHVTweekFourWeeksAgo > 0) {
        percentHVTsFourWeeksAgo = +(
          passedInTeam.RBOne.HVTsFourweeksAgo /
          passedInTeam.teamHVTweekFourWeeksAgo
        ).toFixed(2);
        // console.log(rbName, percentHVTsFiveWeeksAgo);
        if (
          !passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[1] &&
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[1] !== 0
        ) {
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek.push(
            +percentHVTsFourWeeksAgo
          );
        }
      }
    }

    if (passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive[2] < 3) {
      // console.log(rbName, 'played 5 weeks ago');
      if (passedInTeam.teamHVTweekThreeWeeksAgo > 0) {
        percentHVTsThreeWeeksAgo = +(
          passedInTeam.RBOne.HVTsThreeweeksAgo /
          passedInTeam.teamHVTweekThreeWeeksAgo
        ).toFixed(2);
        // console.log(rbName, percentHVTsFiveWeeksAgo);
        if (
          !passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[2] &&
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[2] !== 0
        ) {
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek.push(
            +percentHVTsThreeWeeksAgo
          );
        }
      }
    }

    if (passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive[3] < 3) {
      // console.log(rbName, 'played 5 weeks ago');
      if (passedInTeam.teamHVTweekTwoWeeksAgo > 0) {
        percentHVTsTwoWeeksAgo = +(
          passedInTeam.RBOne.HVTsTwoweeksAgo /
          passedInTeam.teamHVTweekTwoWeeksAgo
        ).toFixed(2);
        // console.log(rbName, percentHVTsFiveWeeksAgo);
        if (
          !passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[3] &&
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[3] !== 0
        ) {
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek.push(
            +percentHVTsTwoWeeksAgo
          );
        }
      }
    }

    if (passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive[4] < 3) {
      // console.log(rbName, 'played 5 weeks ago');
      if (passedInTeam.teamHVTweekLastWeek > 0) {
        // console.log(passedInTeam.RBOne.name, passedInTeam.RBOne.HVTsLastWeek);
        percentHVTsweekLastWeek = +(
          passedInTeam.RBOne.HVTsLastWeek / passedInTeam.teamHVTweekLastWeek
        ).toFixed(2);
        // console.log(rbName, percentHVTsFiveWeeksAgo);
        if (
          !passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[4] &&
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek[4] !== 0
        ) {
          passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek.push(
            +percentHVTsweekLastWeek
          );
        }
      }
    }
  });

  let temprbOneHVTs = 0;

  passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek.forEach(function (
    hvtWeek
  ) {
    temprbOneHVTs += +hvtWeek;
  });

  passedInTeam.RBOne.totalPercentOfTeamHighValueTouchesLastFiveweeks = (
    +temprbOneHVTs /
    +passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek.length
  ).toFixed(2);

  // console.log(
  //   passedInTeam.RBOne.name,
  //   +temprbOneHVTs,
  //   +passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek.length,
  //   passedInTeam.RBOne.totalPercentOfTeamHighValueTouchesLastFiveweeks
  // );
  // console.log(
  //   passedInTeam.RBOne.name,
  //   passedInTeam.RBOne.totalPercentOfTeamHighValueTouchesLastFiveweeks
  // );

  // console.log(
  //   passedInTeam.RBOne.name,
  //   passedInTeam.RBOne.percentOfTeamHVTsLastFiveWeeksByWeek
  // );

  rb4for4WeeklyStatExplorerHVTsLastFiveWeeks.forEach(function (rb) {
    // console.log(
    //   passedInTeam.RBTwo.name,
    //   passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive[0]
    // );
    if (passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive[0] < 3) {
      if (passedInTeam.teamHVTweekFiveWeeksAgo > 0) {
        // console.log(
        //   passedInTeam.RBTwo.name,
        //   passedInTeam.RBTwo.HVTsFiveweeksAgo,
        //   passedInTeam.teamHVTweekFiveWeeksAgo
        // );
        percentHVTsFiveWeeksAgo = +(
          passedInTeam.RBTwo.HVTsFiveweeksAgo /
          passedInTeam.teamHVTweekFiveWeeksAgo
        ).toFixed(2);

        if (
          !passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[0] &&
          passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[0] !== 0
        ) {
          // console.log(passedInTeam.RBTwo.name, percentHVTsFiveWeeksAgo);
          passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek.push(
            +percentHVTsFiveWeeksAgo
          );
        }
      }

      if (passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive[1] < 3) {
        // console.log(rbName, 'played 5 weeks ago');
        if (passedInTeam.teamHVTweekFourWeeksAgo > 0) {
          percentHVTsFourWeeksAgo = +(
            passedInTeam.RBTwo.HVTsFourweeksAgo /
            passedInTeam.teamHVTweekFourWeeksAgo
          ).toFixed(2);
          // console.log(rbName, percentHVTsFiveWeeksAgo);
          if (
            !passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[1] &&
            passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[1] !== 0
          ) {
            passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek.push(
              +percentHVTsFourWeeksAgo
            );
          }
        }
      }

      if (passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive[2] < 3) {
        // console.log(rbName, 'played 5 weeks ago');
        if (passedInTeam.teamHVTweekThreeWeeksAgo > 0) {
          percentHVTsThreeWeeksAgo = +(
            passedInTeam.RBTwo.HVTsThreeweeksAgo /
            passedInTeam.teamHVTweekThreeWeeksAgo
          ).toFixed(2);
          // console.log(rbName, percentHVTsFiveWeeksAgo);
          if (
            !passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[2] &&
            passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[2] !== 0
          ) {
            passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek.push(
              +percentHVTsThreeWeeksAgo
            );
          }
        }
      }

      if (passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive[3] < 3) {
        // console.log(rbName, 'played 5 weeks ago');
        if (passedInTeam.teamHVTweekTwoWeeksAgo > 0) {
          percentHVTsTwoWeeksAgo = +(
            passedInTeam.RBTwo.HVTsTwoweeksAgo /
            passedInTeam.teamHVTweekTwoWeeksAgo
          ).toFixed(2);
          // console.log(rbName, percentHVTsFiveWeeksAgo);
          if (
            !passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[3] &&
            passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[3] !== 0
          ) {
            passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek.push(
              +percentHVTsTwoWeeksAgo
            );
          }
        }
      }

      if (passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive[4] < 3) {
        // console.log(rbName, 'played 5 weeks ago');
        if (passedInTeam.teamHVTweekLastWeek > 0) {
          percentHVTsweekLastWeek = +(
            passedInTeam.RBTwo.HVTsLastWeek / passedInTeam.teamHVTweekLastWeek
          ).toFixed(2);
          // console.log(rbName, percentHVTsFiveWeeksAgo);
          if (
            !passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[4] &&
            passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek[4] !== 0
          ) {
            passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek.push(
              +percentHVTsweekLastWeek
            );
          }
        }
      }
    }
  });

  let temprbTwoHVTs = 0;

  passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek.forEach(function (
    hvtWeek
  ) {
    temprbTwoHVTs += +hvtWeek;
  });

  passedInTeam.RBTwo.totalPercentOfTeamHighValueTouchesLastFiveweeks = (
    +temprbTwoHVTs /
    +passedInTeam.RBTwo.percentOfTeamHVTsLastFiveWeeksByWeek.length
  ).toFixed(2);

  passedInTeam.teamVTT = gameInfoPassedInTeam.vtt;
  passedInTeam.opponentVTT = gameInfoPassedInTeam.opponentvtt;
  passedInTeam.byeWeek = gameInfoPassedInTeam.byeWeek2022;

  qbDownloadableSpreadSheetYahoo.forEach(function (playerobj, i) {
    // console.log(gameInfoPassedInTeam);
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

    allFlexGLSP.forEach(function (team) {
      if(team['"POS"']) {
      if(passedInTeam.RBTwo) {
      if (team['"POS"'].slice(1, -1) === 'RB') {
        // console.log(team['"Player"']);
        if (
          team['"Player"'].slice(1, -1) === 'Brian Robinson Jr' &&
          passedInTeam.teamABV === 'WAS'
        ) {
          passedInTeam.brob = team['"Player"'].slice(1, -4);
        }
        if (
          team['"Player"'].slice(1, -1) === 'Kenneth Walker III' &&
          passedInTeam.teamABV === 'SEA'
        ) {
          passedInTeam.walker = team['"Player"'].slice(1, -5);
        }
        if (
          passedInTeam.RBOne.name === team['"Player"'].slice(1, -1) ||
          passedInTeam.RBOne.altName === team['"Player"'].slice(1, -1) ||
          passedInTeam.walker === team['"Player"'].slice(1, -5) ||
          passedInTeam.brob === team['"Player"'].slice(1, -4)
        ) {
          // console.log(team['"Player"'].slice(1, -1));
          // console.log(team['"Player"']);
          passedInTeam.RBOne.glspHalfavg = +team['"Half - AVG"'];
          passedInTeam.RBOne.glspPPRavg = +team['"PPR - AVG"'];

          passedInTeam.RBOne.halfTwentyFifthPercentProjectedPoints =
            +team['"Half - 25th"'];
          passedInTeam.RBOne.halfFiftyithPercentProjectedPoints =
            +team['"Half - 50th"'];
          passedInTeam.RBOne.halfSeventyFifthPercentProjectedPoints =
            +team['"Half - 75th"'];
          passedInTeam.RBOne.PPRTwentyFifthPercentProjectedPoints =
            +team['"PPR - 25th"'];
          passedInTeam.RBOne.PPRFiftyithPercentProjectedPoints =
            +team['"PPR - 50th"'];
          passedInTeam.RBOne.PPRSeventyFifthPercentProjectedPoints =
            +team['"PPR - 75th"'];
          passedInTeam.RBOne.glspLessThanFive = +team['"<5"'];
          passedInTeam.RBOne.glspFiveToTen = +team['"5 to 10"'];
          passedInTeam.RBOne.glspTenToFifteen = +team['"10 to 15"'];
          passedInTeam.RBOne.glspFifteenToTwenty = +team['"15 to 20"'];
          passedInTeam.RBOne.glspTwentyToTwentyFive = +team['"20 to 25"'];
          passedInTeam.RBOne.glspGreaterThanTwentyFive = +team['">25"'];
        }
        if (
          passedInTeam.RBTwo.name ===
          team['"Player"'].slice(
            1,
            -1 ||
              passedInTeam.RBTwo.altName === team['"Player"'].slice(1, -1) ||
              passedInTeam.walker === team['"Player"'].slice(1, -5)
          )
        ) {
          // console.log(team['"Player"'].slice(1, -1));
          passedInTeam.RBTwo.glspHalfavg = +team['"Half - AVG"'];
          passedInTeam.RBTwo.glspPPRavg = +team['"PPR - AVG"'];
          passedInTeam.RBTwo.halfTwentyFifthPercentProjectedPoints =
            +team['"Half - 25th"'];
          passedInTeam.RBTwo.halfFiftyithPercentProjectedPoints =
            +team['"Half - 50th"'];
          passedInTeam.RBTwo.halfSeventyFifthPercentProjectedPoints =
            +team['"Half - 75th"'];
          passedInTeam.RBTwo.PPRTwentyFifthPercentProjectedPoints =
            +team['"PPR - 25th"'];
          passedInTeam.RBTwo.PPRFiftyithPercentProjectedPoints =
            +team['"PPR - 50th"'];
          passedInTeam.RBTwo.PPRSeventyFifthPercentProjectedPoints =
            +team['"PPR - 75th"'];
          passedInTeam.RBTwo.glspLessThanFive = +team['"<5"'];
          passedInTeam.RBTwo.glspFiveToTen = +team['"5 to 10"'];
          passedInTeam.RBTwo.glspTenToFifteen = +team['"10 to 15"'];
          passedInTeam.RBTwo.glspFifteenToTwenty = +team['"15 to 20"'];
          passedInTeam.RBTwo.glspTwentyToTwentyFive = +team['"20 to 25"'];
          passedInTeam.RBTwo.glspGreaterThanTwentyFive = +team['">25"'];
        }
      }
    }
    }
    });

    rb4for4StatExplorerForRushingLastFiveWeeks.forEach(function (team) {
      // if (passedInTeam.RBOne.name === team['"full_name"'].slice(1, -1)) {

      if (
        passedInTeam.teamABV === team['"posteam"'].slice(1, -1) ||
        passedInTeam.altTeamABV === team['"posteam"'].slice(1, -1)
      ) {
        // console.log(team);
        if (!passedInTeam.teamTotalGreenZoneTouchesLastFiveWeeks) {
          passedInTeam.teamTotalGreenZoneTouchesLastFiveWeeks = +(
            +team['"i10_carries"'] / +team['"pct_team_i10_carries"']
          ).toFixed(2);
        }
      }

      if (
        passedInTeam.RBOne.name === team['"full_name"'].slice(1, -1) ||
        passedInTeam.RBOne.altname === team['"full_name"'].slice(1, -1)
      ) {
        passedInTeam.RBOne.I10CarriesLastFiveWeeks = +team['"i10_carries"'];
        passedInTeam.RBOne.totalCarriesLastFiveWeeks = +team['"carries"'];
        passedInTeam.RBOne.carriesPerGameLastFiveWeeks = +team['"carries_pg"'];
      }

      if (
        passedInTeam.RBTwo.name === team['"full_name"'].slice(1, -1) ||
        passedInTeam.RBTwo.altname === team['"full_name"'].slice(1, -1)
      ) {
        passedInTeam.RBTwo.I10CarriesLastFiveWeeks = +team['"i10_carries"'];
        passedInTeam.RBTwo.totalCarriesLastFiveWeeks = +team['"carries"'];
        passedInTeam.RBTwo.carriesPerGameLastFiveWeeks = +team['"carries_pg"'];
      }
    });
    // console.log(
    //   (passedInTeam.teamABV, passedInTeam.teamI10CarriesLastFiveWeeks)
    // );
    // let rbOneFPOEPerGameLastFiveWeeks = 0;

    rb4for4PlayerStatExplorerSnapsAndFantasyTabThisHasFPOELastFiveWeeks.forEach(
      function (rb) {
        if (
          passedInTeam.RBOne.name === rb['"full_name"'].slice(1, -1) ||
          passedInTeam.RBOne.altname === rb['"full_name"'].slice(1, -1)
        )
          passedInTeam.RBOne.FPOEPerGameLastFiveWeeks = +rb['"fpoe_pg"'];

        // console.log(
        //   passedInTeam.RBOne.name,
        //   passedInTeam.RBOne.FPOEPerGameLastFiveWeeks
        // );

        if (
          passedInTeam.RBTwo.name === rb['"full_name"'].slice(1, -1) ||
          passedInTeam.RBTwo.altname === rb['"full_name"'].slice(1, -1)
        ) {
          passedInTeam.RBTwo.FPOEPerGameLastFiveWeeks = +rb['"fpoe_pg"'];

          // console.log(
          //   passedInTeam.RBOne.name,
          //   passedInTeam.RBOne.FPOEPerGameLastFiveWeeks
          // );
        }
      }
    );

    allHalfPPRProjectedPointsWithoutTeamDef.forEach(function (team) {
      if (team.Pos === 'RB') {
        // if (passedInTeam.teamABV === 'SEA' && team.Player === 'Ken Walker') {
        //   console.log(team.Player, passedInTeam.RBOne.altName);
        // }
        if (
          passedInTeam.RBOne.name === team.Player ||
          passedInTeam.RBOne.name ===
            team.Player.replace('.', '').replace('.', '') ||
          passedInTeam.RBOne.altName === team.Player
        ) {
          // console.log(team);
          // console.log(team.Player);
          passedInTeam.RBOne.fourForFourHalfPPRProjectedPoints = +team.FFPts;
        }
        if (
          passedInTeam.RBTwo.name === team.Player ||
          passedInTeam.RBTwo.name ===
            team.Player.replace('.', '').replace('.', '') ||
          passedInTeam.RBTwo.altName === team.Player
        ) {
          // console.log(team);
          passedInTeam.RBTwo.fourForFourHalfPPRProjectedPoints = +team.FFPts;
        }

        if(gameInfoPassedInTeam.RBThreeThisWeekName) {
          
         if( gameInfoPassedInTeam.RBThreeThisWeekName === team.Player ||
          gameInfoPassedInTeam.RBThreeThisWeekName ===
            team.Player.replace('.', '').replace('.', '') ) {

          passedInTeam.teamRbThreeThisWeekName = gameInfoPassedInTeam.RBThreeThisWeekName;
          passedInTeam.teamRbThreeThisWeekFourForFourHalfPPRProjectedPoints = +team.FFPts
            }
        }
      }
    });

    allFullPPRProjectedPointsWithoutTeamDef.forEach(function (team) {
      if (team.Pos === 'RB') {
        if (
          passedInTeam.RBOne.name === team.Player ||
          passedInTeam.RBOne.name ===
            team.Player.replace('.', '').replace('.', '') ||
          passedInTeam.RBOne.altName === team.Player
        ) {
          // console.log(team);
          passedInTeam.RBOne.fourForFourFullPPRProjectedPoints = +team.FFPts;
          passedInTeam.RBOne.projectedCarriesThisWeek = +team['Rush Att'];
          passedInTeam.RBOne.projectedReceptionsThisWeek = +team.Rec;
        }
        // if (passedInTeam.RBTwo.name === 'AJ Dillon') {
        //   console.log(
        //     passedInTeam.RBTwo.name,
        //     team.Player.replace('.', '').replace('.', '')
        //   );
        // }
        if (
          passedInTeam.RBTwo.name === team.Player ||
          passedInTeam.RBTwo.name ===
            team.Player.replace('.', '').replace('.', '') ||
          passedInTeam.RBTwo.altName === team.Player
        ) {
          // console.log(team);
          passedInTeam.RBTwo.fourForFourFullPPRProjectedPoints = +team.FFPts;
          passedInTeam.RBTwo.projectedCarriesThisWeek = +team['Rush Att'];
          passedInTeam.RBTwo.projectedReceptionsThisWeek = +team.Rec;
        }

        if(gameInfoPassedInTeam.RBThreeThisWeekName) {
          
          if( gameInfoPassedInTeam.RBThreeThisWeekName === team.Player ||
           gameInfoPassedInTeam.RBThreeThisWeekName ===
             team.Player.replace('.', '').replace('.', '') ) {
 
           passedInTeam.teamRbThreeThisWeekName = gameInfoPassedInTeam.RBThreeThisWeekName;
           passedInTeam.teamRbThreeThisWeekFourForFourFullPPRProjectedPoints = +team.FFPts
             }
         }
      }
    });

    rb4for4PlayerStatExplorerForReceivingLastFiveWeeks.forEach(function (team) {
      if (
        passedInTeam.RBOne.name === team['"full_name"'].slice(1, -1) ||
        passedInTeam.RBOne.name ===
          team['"full_name"'].slice(1, -1).replace('.', '').replace('.', '') ||
        passedInTeam.RBOne.altName === team['"full_name"'].slice(1, -1)
      ) {
        // console.log((team['"target_share"'] * 100).toFixed(2));
        passedInTeam.RBOne.targetSharePercentageLastFiveWeeks = +(
          team['"target_share"'] * 100
        ).toFixed(2);

        passedInTeam.RBOne.receptionsPerGameLastFiveWeeks = +team['"rec_pg"'];
      }

      if (
        passedInTeam.RBTwo.name === team['"full_name"'].slice(1, -1) ||
        passedInTeam.RBTwo.name ===
          team['"full_name"'].slice(1, -1).replace('.', '').replace('.', '')
      ) {
        // console.log((team['"target_share"'] * 100).toFixed(2));

        passedInTeam.RBTwo.targetSharePercentageLastFiveWeeks = +(
          team['"target_share"'] * 100
        ).toFixed(2);

        passedInTeam.RBTwo.receptionsPerGameLastFiveWeeks = +team['"rec_pg"'];
      }
    });

    wholeDownloadableSpreadSheetYahoo.forEach(function (team) {
      if (team.Pos === 'RB') {
        if (
          passedInTeam.RBOne.name === team.Player ||
          passedInTeam.RBOne.name ===
            team.Player.replace('.', '').replace('.', '') ||
          passedInTeam.RBOne.altName === team.Player
        ) {
          passedInTeam.RBOne.yahooSalary = +team['Y! ($)'];
          let tempRBOnePercentOfSalaryCap = +(team['Y! ($)'] / 200);
          passedInTeam.RBOne.percentOfSalaryCapYahoo =
            tempRBOnePercentOfSalaryCap * 100;
        }

        if (
          passedInTeam.RBTwo.name === team.Player ||
          passedInTeam.RBTwo.name ===
            team.Player.replace('.', '').replace('.', '') ||
          passedInTeam.RBTwo.altName === team.Player
        ) {
          passedInTeam.RBTwo.yahooSalary = +team['Y! ($)'];
          let tempRBTwoPercentOfSalaryCap = +(team['Y! ($)'] / 200);
          passedInTeam.RBTwo.percentOfSalaryCapYahoo =
            tempRBTwoPercentOfSalaryCap * 100;
        }
      }
    });

    gppLeverageScoresAndProjOwnershipFanduel.forEach(function (team) {
      if (team['"Pos"'] === '"RB"') {
        if (
          passedInTeam.RBOne.name === team['"Player"'].slice(1, -1) ||
          passedInTeam.RBOne.name ===
            team['"Player"'].slice(1, -1).replace('.', '').replace('.', '') ||
          passedInTeam.RBOne.altName === team['"Player"'].slice(1, -1)
        ) {
          passedInTeam.RBOne.fanduelSalary = +team['"FD Sal $"'].slice(1, -1);
          tempPercentOfCap = +team['"FD Sal $"'].slice(1, -1) / 60000;
          passedInTeam.RBOne.percentOfSalaryCapFanduel = +(
            tempPercentOfCap * 100
          ).toFixed();
        }

        if (
          passedInTeam.RBTwo.name === team['"Player"'].slice(1, -1) ||
          passedInTeam.RBTwo.name ===
            team['"Player"'].slice(1, -1).replace('.', '').replace('.', '') ||
          passedInTeam.RBTwo.altName === team['"Player"'].slice(1, -1)
        ) {
          passedInTeam.RBTwo.fanduelSalary = +team['"FD Sal $"'].slice(1, -1);
          tempPercentOfCap = +team['"FD Sal $"'].slice(1, -1) / 60000;
          passedInTeam.RBTwo.percentOfSalaryCapFanduel = +(
            tempPercentOfCap * 100
          ).toFixed();
        }
      }
    });

    gppLeverageScoresAndProjOwnershipDraftkings.forEach(function (team) {
      if (team['"Pos"'] === '"RB"') {
        // console.log(team['"Player"']);
        if (
          passedInTeam.RBOne.name === team['"Player"'].slice(1, -1) ||
          passedInTeam.RBOne.name ===
            team['"Player"'].slice(1, -1).replace('.', '').replace('.', '') ||
          passedInTeam.RBOne.altName === team['"Player"'].slice(1, -1)
        ) {
          passedInTeam.RBOne.draftkingsSalary = +team['"DK Sal $"'].slice(
            1,
            -1
          );
          tempPercentOfCap = +team['"DK Sal $"'].slice(1, -1) / 50000;
          passedInTeam.RBOne.percentOfSalaryCapDraftkings = +(
            tempPercentOfCap * 100
          ).toFixed();
        }

        if (
          passedInTeam.RBTwo.name === team['"Player"'].slice(1, -1) ||
          passedInTeam.RBTwo.name ===
            team['"Player"'].slice(1, -1).replace('.', '').replace('.', '') ||
          passedInTeam.RBOne.altName === team['"Player"'].slice(1, -1)
        ) {
          passedInTeam.RBTwo.draftkingsSalary = +team['"DK Sal $"'].slice(
            1,
            -1
          );
          tempPercentOfCap = +team['"DK Sal $"'].slice(1, -1) / 50000;
          passedInTeam.RBTwo.percentOfSalaryCapDraftkings = +(
            tempPercentOfCap * 100
          ).toFixed();
        }
      }
    });

    passedInTeam.hadByeInTheLastFiveweeks =
      gameInfoPassedInTeam.hadByeInTheLastFiveweeks;

    if (!gameInfoPassedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue) {
      passedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue = false;
    }
    if (gameInfoPassedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue) {
      passedInTeam.teamProjectedForAHalfOfNegetiveGameScriptIsTrue = true;
    }

    ////

    passedInTeam.RBOne.totalReceptionsLastFiveWeeks = +(
      passedInTeam.RBOne.totalHVTsLastFiveWeeks -
      passedInTeam.RBOne.I10CarriesLastFiveWeeks
    );
    passedInTeam.RBTwo.totalReceptionsLastFiveWeeks = +(
      passedInTeam.RBTwo.totalHVTsLastFiveWeeks -
      passedInTeam.RBTwo.I10CarriesLastFiveWeeks
    );

    ///////

    passedInTeam.RBOne.receptionsPerGameLastFiveWeeksWayTwo = +(
      passedInTeam.RBOne.totalReceptionsLastFiveWeeks /
      passedInTeam.RBOne.numberOfGamesPlayedLastFiveWeeks
    ).toFixed(2);

    passedInTeam.RBTwo.receptionsPerGameLastFiveWeeksWayTwo = +(
      passedInTeam.RBTwo.totalReceptionsLastFiveWeeks /
      passedInTeam.RBTwo.numberOfGamesPlayedLastFiveWeeks
    ).toFixed(2);

    ///////

    if (passedInTeam.RBOne.receptionsPerGameLastFiveWeeks) {
      passedInTeam.RBOne.carriesPlusReceptionsPerGameLastFiveWeeks = +(
        passedInTeam.RBOne.carriesPerGameLastFiveWeeks +
        passedInTeam.RBOne.receptionsPerGameLastFiveWeeks
      ).toFixed(2);
    } else {
      passedInTeam.RBOne.carriesPlusReceptionsPerGameLastFiveWeeks = +(
        passedInTeam.RBOne.carriesPerGameLastFiveWeeks +
        passedInTeam.RBOne.receptionsPerGameLastFiveWeeksWayTwo
      ).toFixed(2);
    }

    if (passedInTeam.RBTwo.receptionsPerGameLastFiveWeeks) {
      passedInTeam.RBTwo.carriesPlusReceptionsPerGameLastFiveWeeks = +(
        passedInTeam.RBTwo.carriesPerGameLastFiveWeeks +
        passedInTeam.RBTwo.receptionsPerGameLastFiveWeeks
      ).toFixed(2);
    } else {
      passedInTeam.RBTwo.carriesPlusReceptionsPerGameLastFiveWeeks = +(
        passedInTeam.RBTwo.carriesPerGameLastFiveWeeks +
        passedInTeam.RBTwo.receptionsPerGameLastFiveWeeksWayTwo
      ).toFixed(2);
    }

    /////

    passedInTeam.RBOne.projectedCarriesPlusReceptionsThisWeek = +(
      passedInTeam.RBOne.projectedCarriesThisWeek +
      passedInTeam.RBOne.projectedReceptionsThisWeek
    ).toFixed(2);

    passedInTeam.RBTwo.projectedCarriesPlusReceptionsThisWeek = +(
      passedInTeam.RBTwo.projectedCarriesThisWeek +
      passedInTeam.RBTwo.projectedReceptionsThisWeek
    ).toFixed(2);

    ////////////

    passedInTeam.RBOne.teamRealLifePointsScoredPerGameLastFiveWeeks =
      +gameInfoPassedInTeam.teamPointsPerGameLastFiveWeeks;

    passedInTeam.RBTwo.teamRealLifePointsScoredPerGameLastFiveWeeks =
      +gameInfoPassedInTeam.teamPointsPerGameLastFiveWeeks;

    ////////

    // console.log(gameInfoPassedInTeam);
    passedInTeam.RBOne.appTeamProjectedPoints =
      gameInfoPassedInTeam.teamProjectedPointsThisWeek;
    passedInTeam.RBTwo.appTeamProjectedPoints =
      gameInfoPassedInTeam.teamProjectedPointsThisWeek;
if(gameInfoPassedInTeam.opponentThisWeek) {
    passedInTeam.RBOne.oppAppTeamProjectedPoints =
      gameInfoPassedInTeam.opponentThisWeek.teamProjectedPointsThisWeek;
    passedInTeam.RBTwo.oppAppTeamProjectedPoints =
      gameInfoPassedInTeam.opponentThisWeek.teamProjectedPointsThisWeek;
}
    //////

    passedInTeam.qbPassAttemptsPerGameLastFiveWeeks =
      qbInfoPassedInTeam.passAttemptsPerGameLastFiveWeeks;
    passedInTeam.projectedQBPassAttemptsThisWeek =
      qbInfoPassedInTeam.prjpassattempts;
  });

  //

  passedInTeam.RBOne.fantasyPointsPerGameLastFiveWeeks = +(
    passedInTeam.RBOne.totalNumberOfFantasyPointsScoredLastFiveWeeks /
    passedInTeam.RBOne.numberOfGamesPlayedLastFiveWeeks
  ).toFixed(2);

  passedInTeam.RBTwo.fantasyPointsPerGameLastFiveWeeks = +(
    passedInTeam.RBTwo.totalNumberOfFantasyPointsScoredLastFiveWeeks /
    passedInTeam.RBTwo.numberOfGamesPlayedLastFiveWeeks
  ).toFixed(2);

  //

  passedInTeam.RBOne.opposingTeamRankInDefEPAAgainstTheRunLastFiveWeeks =
    gameInfoPassedInTeam.defEPAAgainstTheRun;
  passedInTeam.RBTwo.opposingTeamRankInDefEPAAgainstTheRunLastFiveWeeks =
    gameInfoPassedInTeam.defEPAAgainstTheRun;
};

populateTeamObjects(rbrawdata.SF49ers, gameInfo.SF49ers, qbrawdata.SF49ers);
populateTeamObjects(rbrawdata.bears, gameInfo.bears, qbrawdata.bears);
populateTeamObjects(rbrawdata.bengals, gameInfo.bengals, qbrawdata.bengals);
populateTeamObjects(rbrawdata.bills, gameInfo.bills, qbrawdata.bills);
populateTeamObjects(rbrawdata.broncos, gameInfo.broncos, qbrawdata.broncos);
populateTeamObjects(rbrawdata.browns, gameInfo.browns, qbrawdata.browns);
populateTeamObjects(
  rbrawdata.buccaneers,
  gameInfo.buccaneers,
  qbrawdata.buccaneers
);
populateTeamObjects(
  rbrawdata.cardinals,
  gameInfo.cardinals,
  qbrawdata.cardinals
);
populateTeamObjects(rbrawdata.chargers, gameInfo.chargers, qbrawdata.chargers);
populateTeamObjects(rbrawdata.chiefs, gameInfo.chiefs, qbrawdata.chiefs);
populateTeamObjects(rbrawdata.colts, gameInfo.colts, qbrawdata.colts);
populateTeamObjects(
  rbrawdata.commanders,
  gameInfo.commanders,
  qbrawdata.commanders
);
populateTeamObjects(rbrawdata.cowboys, gameInfo.cowboys, qbrawdata.cowboys);
populateTeamObjects(rbrawdata.dolphins, gameInfo.dolphins, qbrawdata.dolphins);
populateTeamObjects(rbrawdata.eagles, gameInfo.eagles, qbrawdata.eagles);
populateTeamObjects(rbrawdata.falcons, gameInfo.falcons, qbrawdata.falcons);
populateTeamObjects(rbrawdata.giants, gameInfo.giants, qbrawdata.giants);
populateTeamObjects(rbrawdata.jaguars, gameInfo.jaguars, qbrawdata.jaguars);
populateTeamObjects(rbrawdata.jets, gameInfo.jets, qbrawdata.jets);
populateTeamObjects(rbrawdata.lions, gameInfo.lions, qbrawdata.lions);
populateTeamObjects(rbrawdata.packers, gameInfo.packers, qbrawdata.packers);
populateTeamObjects(rbrawdata.panthers, gameInfo.panthers, qbrawdata.panthers);
populateTeamObjects(rbrawdata.patriots, gameInfo.patriots, qbrawdata.patriots);
populateTeamObjects(rbrawdata.raiders, gameInfo.raiders, qbrawdata.raiders);
populateTeamObjects(rbrawdata.rams, gameInfo.rams, qbrawdata.rams);
populateTeamObjects(rbrawdata.ravens, gameInfo.ravens, qbrawdata.ravens);
populateTeamObjects(rbrawdata.saints, gameInfo.saints, qbrawdata.saints);
populateTeamObjects(rbrawdata.seahawks, gameInfo.seahawks, qbrawdata.seahawks);
populateTeamObjects(rbrawdata.steelers, gameInfo.steelers, qbrawdata.steelers);
populateTeamObjects(rbrawdata.texans, gameInfo.texans, qbrawdata.texans);
populateTeamObjects(rbrawdata.titans, gameInfo.titans, qbrawdata.titans);
populateTeamObjects(rbrawdata.vikings, gameInfo.vikings, qbrawdata.vikings);

// console.log(rbrawdata.bengals);
// console.log(rbrawdata.bills);
// console.log(rbrawdata.buccaneers);
// console.log(rbrawdata.chiefs);
// console.log(rbrawdata.lions);
// console.log(rbrawdata.panthers);
// console.log(rbrawdata.SF49ers);
// console.log(rbrawdata.saints);
// console.log(rbrawdata.seahawks);
// console.log(rbrawdata.commanders);
// console.log(rbrawdata.rams);
// console.log(rbrawdata.titans);

// console.log(rbrawdata.packers);
// console.log(rbrawdata.ravens);
// console.log(rbrawdata.saints);
// console.log(rbrawdata.vikings);
//

// console.log(rbrawdata);

module.exports = rbrawdata;
