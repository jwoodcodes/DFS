const wholeDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholeDownloadableSpreadSheetYahoo');
const qbDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/qbDownloadableSpreadSheetYahoo');
const qbDownloadableSpreadSheetThursdayThroughMondayFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/qbDownloadableSpreadSheetThursdayThroughMondayFanduel');
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


const teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer = require('../datafilesmadefrom4for4CSVs/teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer');
const teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer = require('../datafilesmadefrom4for4CSVs/teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer');



const rbRvWeeklyStatExplorerRecievingTabLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rbRvWeeklystatExplorerRecievingTabLastFiveWeeks')
const rb4for4SnapsAppLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rb4for4SnapsAppLastFiveWeeks')
const rb4for4PlayerStatsApp = require('../datafilesmadefrom4for4CSVs/rb4for4PlayerStatsApp')

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
        weekTwoWeeksAgo = +rb.W1;
        weekLastWeek = +rb.W2;
      }

      if (gameInfo.week.currentWeek === 4) {
        weekThreeWeeksAgo = +rb.W1;
        weekTwoWeeksAgo = +rb.W2;
        weekLastWeek = +rb.W3;
      }

      if (gameInfo.week.currentWeek === 5) {
       
        weekFourWeeksAgo = +rb.W1;
        weekThreeWeeksAgo = +rb.W2;
        weekTwoWeeksAgo = +rb.W3;
        weekLastWeek = +rb.W4;
        
      }

      if (gameInfo.week.currentWeek === 6) {
        weekFiveWeeksAgo = +rb.W1;
        weekFourWeeksAgo = +rb.W2;
        weekThreeWeeksAgo = +rb.W3;
        weekTwoWeeksAgo = +rb.W4;
        weekLastWeek = +rb.W5;
      }

      if (gameInfo.week.currentWeek === 7) {
        weekFiveWeeksAgo = +rb.W2;
        weekFourWeeksAgo = +rb.W3;
        weekThreeWeeksAgo = +rb.W4;
        weekTwoWeeksAgo = +rb.W5;
        weekLastWeek = +rb.W6;
      }

      if (gameInfo.week.currentWeek === 8) {
        weekFiveWeeksAgo = +rb.W3;
        weekFourWeeksAgo = +rb.W4;
        weekThreeWeeksAgo = +rb.W5;
        weekTwoWeeksAgo = +rb.W6;
        weekLastWeek = +rb.W7;
      }

      if (gameInfo.week.currentWeek === 9) {
        weekFiveWeeksAgo = +rb.W4;
        weekFourWeeksAgo = +rb.W5;
        weekThreeWeeksAgo = +rb.W6;
        weekTwoWeeksAgo = +rb.W7;
        weekLastWeek = +rb.W8;
      }

      if (gameInfo.week.currentWeek === 10) {
        weekFiveWeeksAgo = +rb.W5;
        weekFourWeeksAgo = +rb.W6;
        weekThreeWeeksAgo = +rb.W7;
        weekTwoWeeksAgo = +rb.W8;
        weekLastWeek = +rb.W9;
      }

      if (gameInfo.week.currentWeek === 11) {
        weekFiveWeeksAgo = +rb.W6;
        weekFourWeeksAgo = +rb.W7;
        weekThreeWeeksAgo = +rb.W8;
        weekTwoWeeksAgo = +rb.W9;
        weekLastWeek = +rb.W10;
      }

      if (gameInfo.week.currentWeek === 12) {
        weekFiveWeeksAgo = +rb.W7;
        weekFourWeeksAgo = +rb.W8;
        weekThreeWeeksAgo = +rb.W9;
        weekTwoWeeksAgo = +rb.W10;
        weekLastWeek = +rb.W11;
      }

      if (gameInfo.week.currentWeek === 13) {
        weekFiveWeeksAgo = +rb.W8;
        weekFourWeeksAgo = +rb.W9;
        weekThreeWeeksAgo = +rb.W10;
        weekTwoWeeksAgo = +rb.W11;
        weekLastWeek = +rb.W12;
      }

      if (gameInfo.week.currentWeek === 14) {
        weekFiveWeeksAgo = +rb.W9;
        weekFourWeeksAgo = +rb.W10;
        weekThreeWeeksAgo = +rb.W11;
        weekTwoWeeksAgo = +rb.W12;
        weekLastWeek = +rb.W13;
      }

      if (gameInfo.week.currentWeek === 15) {
        weekFiveWeeksAgo = +rb.W10;
        weekFourWeeksAgo = +rb.W11;
        weekThreeWeeksAgo = +rb.W12;
        weekTwoWeeksAgo = +rb.W13;
        weekLastWeek = +rb.W14;
      }

      if (gameInfo.week.currentWeek === 16) {
        weekFiveWeeksAgo = +rb.W11;
        weekFourWeeksAgo = +rb.W12;
        weekThreeWeeksAgo = +rb.W13;
        weekTwoWeeksAgo = +rb.W14;
        weekLastWeek = +rb.W15;
      }

      if (gameInfo.week.currentWeek === 17) {
        weekFiveWeeksAgo = +rb.W12;
        weekFourWeeksAgo = +rb.W13;
        weekThreeWeeksAgo = +rb.W14;
        weekTwoWeeksAgo = +rb.W15;
        weekLastWeek = +rb.W16;
      }

      if (gameInfo.week.currentWeek === 18) {
        weekFiveWeeksAgo = +rb.W13;
        weekFourWeeksAgo = +rb.W14;
        weekThreeWeeksAgo = +rb.W15;
        weekTwoWeeksAgo = +rb.W16;
        weekLastWeek = +rb.W17;
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

  let tempteamRBTotalsFiveWeeksAgo = [];
  let tempteamRBTotalsFourWeeksAgo = [];
  let tempteamRBTotalsthreeWeeksAgo = [];
  let tempteamRBTotalstwoWeeksAgo = [];
  let tempteamRBTotalslasWeek = [];

  rb4for4SnapsAppLastFiveWeeks.forEach(function (
    rb
  ) {
    // console.log(rb['"posteam"']);
    // console.log(gameInfo.week.currentWeek);
    // console.log(rb['"full_name"'])
    
    if (
      passedInTeam.teamABV === rb['"Team"'].slice(1, -1) ||
      passedInTeam.altTeamABV === rb['"Team"'].slice(1, -1)
    ) {

      let weekOne = 0
      let weekTwo = 0
      let weekThree = 0
      let weekFour = 0
      let weekFive = 0
      let weekSix = 0
      let weekSeven = 0
      let weekEight = 0
      let weekNine = 0
      let weekTen = 0
      let weekEleven = 0
      let weekTwelve = 0
      let weekThirteen = 0
      let weekFourteen = 0
      let weekFifteen = 0
      let weekSixteen = 0
      let weekSeventeen = 0
      
      // console.log(testrb['"Player"'])
      if(rb['"W1"']) {
        let tempWeek = rb['"W1"'].slice(1, -2)
      weekOne = +tempWeek
      
      }
      if(rb['"W2"']) {
        let tempWeek = rb['"W2"'].slice(1, -2)
      weekTwo = +tempWeek
        
      }
      if(rb['"W3"']) {
        let tempWeek = rb['"W3"'].slice(1, -2)
      weekThree = +tempWeek
      }
      if(rb['"W4"']) {
        let tempWeek = rb['"W4"'].slice(1, -2)
      weekFour = +tempWeek
      }
      if(rb['"W5"']) {
        let tempWeek = rb['"W5"'].slice(1, -2)
      weekFive = +tempWeek
      }
      if(rb['"W6"']) {
        let tempWeek = rb['"W6"'].slice(1, -2)
      weekSix = +tempWeek
      }
      if(rb['"W7"']) {
        let tempWeek = rb['"W7"'].slice(1, -2)
      weekSeven = +tempWeek
      }
      if(rb['"W8"']) {
        let tempWeek = rb['"W8"'].slice(1, -2)
      weekEight = +tempWeek
      }
      if(rb['"W9"']) {
        let tempWeek = rb['"W9"'].slice(1, -2)
      weekNine = +tempWeek
      }
      if(rb['"W10"']) {
        let tempWeek = rb['"W10"'].slice(1, -2)
      weekTen = +tempWeek
      }
      if(rb['"W11"']) {
        let tempWeek = rb['"W11"'].slice(1, -2)
      weekEleven = +tempWeek
      }
      if(rb['"W12"']) {
        let tempWeek = rb['"W12"'].slice(1, -2)
      weekTwelve = +tempWeek
      }
      if(rb['"W13"']) {
        let tempWeek = rb['"W13"'].slice(1, -2)
      weekThirteen = +tempWeek
      }
      if(rb['"W14"']) {
        let tempWeek = rb['"W14"'].slice(1, -2)
      weekFourteen = +tempWeek
      }
      if(rb['"W15"']) {
        let tempWeek = rb['"W15"'].slice(1, -2)
      weekFifteen = +tempWeek
      }
      if(rb['"W16"']) {
        let tempWeek = rb['"W16"'].slice(1, -2)
      weekSixteen = +tempWeek
      }
      if(rb['"W17"']) {
        let tempWeek = rb['"W17"'].slice(1, -2)
      weekSeventeen = +tempWeek
      }

      let weekFiveWeeksAgo = 0;
      let weekFourWeeksAgo = 0;
      let weekThreeWeeksAgo = 0;
      let weekTwoWeeksAgo = 0;
      let weekLastWeek = 0;

      // console.log(rb)
      

      if (gameInfo.week.currentWeek === 3) {
        weekTwoWeeksAgo = weekOne;
        weekLastWeek = weekTwo;
      }

      if (gameInfo.week.currentWeek === 4) {
        weekThreeWeeksAgo = weekOne;
        weekTwoWeeksAgo = weekTwo;
        weekLastWeek = weekThree;
      }

      if (gameInfo.week.currentWeek === 5) {
        weekFourWeeksAgo = weekOne;
        weekThreeWeeksAgo = weekTwo;
        weekTwoWeeksAgo = weekThree;
        weekLastWeek = weekFour;
        
      }

      if (gameInfo.week.currentWeek === 6) {
        
        weekFourWeeksAgo = weekTwo;
        weekThreeWeeksAgo = weekThree;
        weekTwoWeeksAgo = weekFour;
        weekLastWeek = weekFive;
      }

      if (gameInfo.week.currentWeek === 7) {
        
        weekFourWeeksAgo = weekThree;
        weekThreeWeeksAgo = weekFour;
        weekTwoWeeksAgo = weekFive;
        weekLastWeek = weekSix;
      }

      if (gameInfo.week.currentWeek === 8) {
       
        weekFourWeeksAgo = weekFour;
        weekThreeWeeksAgo = weekFive;
        weekTwoWeeksAgo = weekSix;
        weekLastWeek = weekSeven;
      }

      if (gameInfo.week.currentWeek === 9) {
        
        weekFourWeeksAgo = weekFive;
        weekThreeWeeksAgo = weekSix;
        weekTwoWeeksAgo = weekSeven;
        weekLastWeek = weekEight;
      }

      if (gameInfo.week.currentWeek === 10) {
        
        weekFourWeeksAgo = weekSix;
        weekThreeWeeksAgo = weekSeven;
        weekTwoWeeksAgo = weekEight;
        weekLastWeek = weekNine;
      }

      if (gameInfo.week.currentWeek === 11) {
        
        weekFourWeeksAgo = weekSeven;
        weekThreeWeeksAgo = weekEight;
        weekTwoWeeksAgo = weekNine;
        weekLastWeek = weekTen;
      }

      if (gameInfo.week.currentWeek === 12) {
       
        weekFourWeeksAgo = weekEight;
        weekThreeWeeksAgo = weekNine;
        weekTwoWeeksAgo = weekTen;
        weekLastWeek = weekEleven;
      }

      if (gameInfo.week.currentWeek === 13) {
        
        weekFourWeeksAgo = weekNine;
        weekThreeWeeksAgo = weekTen;
        weekTwoWeeksAgo = weekEleven;
        weekLastWeek = weekTwelve;
      }

      if (gameInfo.week.currentWeek === 14) {
        
        weekFourWeeksAgo = weekTen;
        weekThreeWeeksAgo = weekEleven;
        weekTwoWeeksAgo = weekTwelve;
        weekLastWeek = weekThirteen;
      }

      if (gameInfo.week.currentWeek === 15) {
        
        weekFourWeeksAgo = weekEleven;
        weekThreeWeeksAgo = weekTwelve;
        weekTwoWeeksAgo = weekThirteen;
        weekLastWeek = weekFourteen;
      }

      if (gameInfo.week.currentWeek === 16) {
        
        weekFourWeeksAgo = weekTwelve;
        weekThreeWeeksAgo = weekThirteen;
        weekTwoWeeksAgo = weekFourteen;
        weekLastWeek = weekFifteen;
      }

      if (gameInfo.week.currentWeek === 17) {
        
        weekFourWeeksAgo = weekThirteen;
        weekThreeWeeksAgo = weekFourteen;
        weekTwoWeeksAgo = weekFifteen;
        weekLastWeek = weekSixteen;
      }

      if (gameInfo.week.currentWeek === 18) {
        
        weekFourWeeksAgo = weekFourteen;
        weekThreeWeeksAgo = weekFifteen;
        weekTwoWeeksAgo = weekSixteen;
        weekLastWeek = weekSeventeen;
      }

      
      let temprbName = rb['"Player"'].slice(1, -1).replace('.', '');
      // let alsotemprbName = temprbName.replace("'", '');
      let rbName = temprbName.replace('.', '');
      // console.log(rbName, passedInTeam.firstPassedInRBName);
      if (passedInTeam.firstPassedInRBName.includes("'")) {
        passedInTeam.firstPassedInRBAltName =
          passedInTeam.firstPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      if(passedInTeam.secondPassedInRBName) {
      if (passedInTeam.secondPassedInRBName.includes("'")) {
        passedInTeam.secondPassedInRBAltName =
          passedInTeam.secondPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
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
        // tempweekFiveWeeksAgo = (+weekFiveWeeksAgo * 100).toFixed(2);
        

        tempweekFourWeeksAgo = +weekFourWeeksAgo
        tempweekThreeWeeksAgo = +weekThreeWeeksAgo
        tempweekTwoWeeksAgo = +weekTwoWeeksAgo
        tempweekLastWeek = +weekLastWeek
        // console.log(passedInTeam.firstPassedInRBName, tempweekFiveWeeksAgo);

        //
        
        passedInTeam.firstPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.firstPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFourWeeksAgo
          ).toFixed(2);

          passedInTeam.firstPassedInRBFourWeeksagoTotal = +passedInTeam.firstPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage
        //
        passedInTeam.firstPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.firstPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekThreeWeeksAgo
          ).toFixed(2);

          passedInTeam.firstPassedInRBThreeWeeksagoTotal = +passedInTeam.firstPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage
        // //
        
        passedInTeam.firstPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.firstPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekTwoWeeksAgo
          ).toFixed(2);

          passedInTeam.firstPassedInRBTwoWeeksagoTotal = +passedInTeam.firstPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage
        // //
        passedInTeam.firstPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.firstPassedInRBLastWeekInFantasyPointsScoredPointsScored +
            +tempweekLastWeek
          ).toFixed(2);

          passedInTeam.firstPassedInRBLastWeekTotal = +passedInTeam.firstPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage
      }

      if (
        rbName === passedInTeam.secondPassedInRBName ||
        passedInTeam.secondPassedInRBAltName === rbName
      ) {
        // console.log(passedInTeam.secondPassedInRBFiveWeeksAgoName);
        
        tempweekFourWeeksAgo = +weekFourWeeksAgo
        tempweekThreeWeeksAgo = +weekThreeWeeksAgo
        tempweekTwoWeeksAgo = +weekTwoWeeksAgo
        tempweekLastWeek = +weekLastWeek
        // console.log(tempweekFiveWeeksAgo);
        

          
        //
        passedInTeam.secondPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.secondPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFourWeeksAgo
          ).toFixed(2);

          passedInTeam.secondPassedInRBFourWeeksagoTotal = +passedInTeam.secondPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage
        //
        passedInTeam.secondPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.secondPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekThreeWeeksAgo
          ).toFixed(2);

          passedInTeam.secondPassedInRBThreeWeeksagoTotal = +passedInTeam.secondPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage
        // //
        passedInTeam.secondPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.secondPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekTwoWeeksAgo
          ).toFixed(2);

          passedInTeam.secondPassedInRBTwoWeeksagoTotal = +passedInTeam.secondPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage
        // //
        passedInTeam.secondPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.secondPassedInRBLastWeekInFantasyPointsScoredPointsScored +
            +tempweekLastWeek
          ).toFixed(2);

          passedInTeam.secondPassedInRBLastWeekTotal = +passedInTeam.secondPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage
      }

      if (
        rbName === passedInTeam.thirdPassedInRBName ||
        passedInTeam.thirdPassedInRBAltName === rbName
      ) {
        // console.log(rb['"full_name"']);
        
        tempweekFourWeeksAgo = +weekFourWeeksAgo
        tempweekThreeWeeksAgo = +weekThreeWeeksAgo
        tempweekTwoWeeksAgo = +weekTwoWeeksAgo
        tempweekLastWeek = +weekLastWeek
        // console.log(tempweekFiveWeeksAgo);
      
        passedInTeam.thirdPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.thirdPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFourWeeksAgo
          ).toFixed(2);

          passedInTeam.ThirdPassedInRBFourWeeksagoTotal = +passedInTeam.thirdPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage
        //
        passedInTeam.thirdPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.thirdPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekThreeWeeksAgo
          ).toFixed(2);

          passedInTeam.ThirdPassedInRBThreeWeeksagoTotal = +passedInTeam.thirdPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage
        // //
        passedInTeam.thirdPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.thirdPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekTwoWeeksAgo
          ).toFixed(2);

          passedInTeam.ThirdPassedInRBTwoWeeksagoTotal = +passedInTeam.thirdPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage
        // //
        passedInTeam.thirdPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.thirdPassedInRBLastWeekInFantasyPointsScoredPointsScored +
            +tempweekLastWeek
          ).toFixed(2);

          passedInTeam.ThirdPassedInRBLastWeekTotal = +passedInTeam.thirdPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage
      }

      if (
        rbName === passedInTeam.fourthPassedInRBName ||
        passedInTeam.fourthPassedInRBAltName === rbName
      ) {
        // console.log(rb['"full_name"']);
        
        tempweekFourWeeksAgo = +weekFourWeeksAgo
        tempweekThreeWeeksAgo = +weekThreeWeeksAgo
        tempweekTwoWeeksAgo = +weekTwoWeeksAgo
        tempweekLastWeek = +weekLastWeek
        // console.log(tempweekFiveWeeksAgo);
       
        passedInTeam.fourthPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.fourthPassedInRBFourWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekFourWeeksAgo
          ).toFixed(2);

          passedInTeam.FourthPassedInRBFourWeeksagoTotal = +passedInTeam.fourthPassedInRBFourWeeksagoFantasyPointsScoredPlusSnapPercentage
        //
        passedInTeam.fourthPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.fourthPassedInRBThreeWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekThreeWeeksAgo
          ).toFixed(2);

          passedInTeam.FourthPassedInRBThreeWeeksagoTotal = +passedInTeam.fourthPassedInRBThreeWeeksagoFantasyPointsScoredPlusSnapPercentage
        // //
        passedInTeam.fourthPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.fourthPassedInRBTwoWeeksAgoInFantasyPointsScoredPointsScored +
            +tempweekTwoWeeksAgo
          ).toFixed(2);

          passedInTeam.FourthPassedInRBTwoWeeksagoTotal = +passedInTeam.fourthPassedInRBTwoWeeksagoFantasyPointsScoredPlusSnapPercentage
        // //
        passedInTeam.fourthPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage =
          +(
            +passedInTeam.fourthPassedInRBLastWeekInFantasyPointsScoredPointsScored +
            +tempweekLastWeek
          ).toFixed(2);

          passedInTeam.FourthPassedInRBLastWeekTotal = +passedInTeam.fourthPassedInRBLastWeekFantasyPointsScoredPlusSnapPercentage
      }

      if (
        rbName === passedInTeam.firstPassedInRBName ||
        rbName === passedInTeam.firstPassedInRBAltName
      ) {
       
      
        

        passedInTeam.weekFourWeeksAgo.push(
          +passedInTeam.firstPassedInRBFourWeeksagoTotal
        );
        //
        
        passedInTeam.weekThreeWeeksAgo.push(
          +passedInTeam.firstPassedInRBThreeWeeksagoTotal
        );
        // //
        

        passedInTeam.weekTwoWeeksAgo.push(
          +passedInTeam.firstPassedInRBTwoWeeksagoTotal
        );
        // //
       

        passedInTeam.weekLastWeek.push(
          +passedInTeam.firstPassedInRBLastWeekTotal
        );
      }

      if (
        rbName === passedInTeam.secondPassedInRBName ||
        rbName === passedInTeam.secondPassedInRBAltName
      ) {
        
        tempweekFourWeeksAgo = (+weekFourWeeksAgo).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo).toFixed(2);
        tempweekLastWeek = (+weekLastWeek).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
        

        passedInTeam.weekFiveWeeksAgo.push(
          +passedInTeam.secondPassedInRBFiveWeeksagoTotal
        );
        //
        

        passedInTeam.weekFourWeeksAgo.push(
          +passedInTeam.secondPassedInRBFourWeeksagoTotal
        );
        //
       

        passedInTeam.weekThreeWeeksAgo.push(
          +passedInTeam.secondPassedInRBThreeWeeksagoTotal
        );
        // //
        

        passedInTeam.weekTwoWeeksAgo.push(
          +passedInTeam.secondPassedInRBTwoWeeksagoTotal
        );
        // //
        

        passedInTeam.weekLastWeek.push(
          +passedInTeam.secondPassedInRBLastWeekTotal
        );
      }

      if (
        rbName === passedInTeam.thirdPassedInRBName ||
        rbName === passedInTeam.thirdPassedInRBAltName
      ) {
       
       
        

        passedInTeam.weekFiveWeeksAgo.push(
          +passedInTeam.thirdPassedInRBFiveWeeksagoTotal
        );
        //
       

        passedInTeam.weekFourWeeksAgo.push(
          +passedInTeam.thirdPassedInRBFourWeeksagoTotal
        );
        //
        

        passedInTeam.weekThreeWeeksAgo.push(
          +passedInTeam.thirdPassedInRBThreeWeeksagoTotal
        );
        // //
        

        passedInTeam.weekTwoWeeksAgo.push(
          +passedInTeam.thirdPassedInRBTwoWeeksagoTotal
        );
        // //
        

        passedInTeam.weekLastWeek.push(
          +passedInTeam.thirdPassedInRBLastWeekTotal
        );
      }

      if (
        rbName === passedInTeam.fourthPassedInRBName ||
        rbName === passedInTeam.fourthPassedInRBAltName
      ) {
        
        // console.log(tempweekFiveWeeksAgo);
        

        passedInTeam.weekFiveWeeksAgo.push(
          +passedInTeam.fourthPassedInRBFiveWeeksagoTotal
        );
        //
        

        passedInTeam.weekFourWeeksAgo.push(
          +passedInTeam.fourthPassedInRBFourWeeksagoTotal
        );
        //
       

        passedInTeam.weekThreeWeeksAgo.push(
          +passedInTeam.fourthPassedInRBThreeWeeksagoTotal
        );
        // //
       
        passedInTeam.weekTwoWeeksAgo.push(
          +passedInTeam.fourthPassedInRBTwoWeeksagoTotal
        );
        // //
     

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

    }
  });






  ////////
  /////pushing to arrays teams RBOne and RBTwo this week's roles the last five weeks
  ///////

  rb4for4SnapsAppLastFiveWeeks.forEach(function (
    rb
  ) {
    if (
      passedInTeam.teamABV === rb['"Team"'].slice(1, -1) ||
      passedInTeam.altTeamABV === rb['"Team"'].slice(1, -1)
    ) {
      let temprbName = rb['"Player"'].slice(1, -1).replace('.', '');
      // let alsotemprbName = temprbName.replace("'", '');
      let rbName = temprbName.replace('.', '');
      // console.log(rbName, passedInTeam.firstPassedInRBName);
      if (passedInTeam.firstPassedInRBName.includes("'")) {
        passedInTeam.firstPassedInRBAltName =
          passedInTeam.firstPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
      if(passedInTeam.secondPassedInRBName) {
      if (passedInTeam.secondPassedInRBName.includes("'")) {
        passedInTeam.secondPassedInRBAltName =
          passedInTeam.secondPassedInRBName.replace("'", '');
        // console.log(altrbName);
      }
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

  

  passedInTeam.teamVTT = gameInfoPassedInTeam.vtt;
  passedInTeam.opponentVTT = gameInfoPassedInTeam.opponentvtt;
  passedInTeam.byeWeek = gameInfoPassedInTeam.byeWeek2022;

  qbDownloadableSpreadSheetThursdayThroughMondayFanduel.forEach(function (playerobj, i) {
    // console.log(gameInfoPassedInTeam);
    passedInTeam.slate = '';
    allNFLTeamPace.forEach(function (teamObj) {
      let tempHomeTeamName = '';
      let tempAwayTeamName = '';
      if(teamObj['"Home"']) {
      if (teamObj['"Home"'].length === 5) {
        tempHomeTeamName = teamObj['"Home"'].slice(1, 4);
      } else {
        tempHomeTeamName = teamObj['"Home"'].slice(1, 3);
      }
    }

    if(teamObj['"Away"']) {
      if (teamObj['"Away"'].length === 5) {
        tempAwayTeamName = teamObj['"Away"'].slice(1, 4);
      } else {
        tempAwayTeamName = teamObj['"Away"'].slice(1, 3);
      }
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

    rb4for4PlayerStatsApp.forEach(function (team) {
      // if (passedInTeam.RBOne.name === team['"full_name"'].slice(1, -1)) {

      if (
        passedInTeam.teamABV === team.Team.slice(1, -1) ||
        passedInTeam.altTeamABV === team.Team.slice(1, -1)
      ) {
        // console.log(team);
       
      }

      if (
        passedInTeam.RBOne.name === team['"Player Name"'].slice(1, -1) ||
        passedInTeam.RBOne.altname === team['"Player Name"'].slice(1, -1)
      ) {
        
        passedInTeam.RBOne.totalCarriesLastFiveWeeks = +team.RuAtt;
        
        let gamesPlayed = +team.G
        // console.log(typeof tempGamesPlayed)
        let carriesPerGame = team.RuAtt / gamesPlayed
        
        passedInTeam.RBOne.carriesPerGameLastFiveWeeks = carriesPerGame;
      }
      if (
        passedInTeam.RBTwo.name === team['"Player Name"'].slice(1, -1) ||
        passedInTeam.RBTwo.altname === team['"Player Name"'].slice(1, -1)
      ) {
        
        passedInTeam.RBTwo.totalCarriesLastFiveWeeks = +team.RuAtt;
        // console.log(team.G)
        let gamesPlayed = +team.G
        // console.log(typeof tempGamesPlayed)
        let carriesPerGame = team.RuAtt / gamesPlayed
        
        passedInTeam.RBTwo.carriesPerGameLastFiveWeeks = carriesPerGame;
      }
    });
    // console.log(
    //   (passedInTeam.teamABV, passedInTeam.teamI10CarriesLastFiveWeeks)
    // );
    // let rbOneFPOEPerGameLastFiveWeeks = 0;



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
          passedInTeam.RBOne.projectedRushYardsThisWeek = +team['Rush Yds'];
          passedInTeam.RBOne.projectedRushTDsThisWeek = +team['Rush TD'];
          passedInTeam.RBOne.projectedReceptionsThisWeek = +team.Rec;
          passedInTeam.RBOne.projectedRecYardsThisWeek = +team['Rec Yds'];
          passedInTeam.RBOne.projectedRecTDsThisWeek = +team['Rec TD'];
          passedInTeam.RBOne.projectedRushfirstDownsThisWeek = +team.Ru1D;
          passedInTeam.RBOne.projectedRecfirstDownsThisWeek = +team.Rec1D;



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
          passedInTeam.RBTwo.projectedRushYardsThisWeek = +team['Rush Yds'];
          passedInTeam.RBTwo.projectedRushTDsThisWeek = +team['Rush TD'];
          passedInTeam.RBTwo.projectedReceptionsThisWeek = +team.Rec;
          passedInTeam.RBTwo.projectedRecYardsThisWeek = +team['Rec Yds'];
          passedInTeam.RBTwo.projectedRecTDsThisWeek = +team['Rec TD'];
          passedInTeam.RBTwo.projectedRushfirstDownsThisWeek = +team.Ru1D;
          passedInTeam.RBTwo.projectedRecfirstDownsThisWeek = +team.Rec1D;
        }

        if(gameInfoPassedInTeam.RBThreeThisWeekName) {
          
          if( gameInfoPassedInTeam.RBThreeThisWeekName === team.Player ||
           gameInfoPassedInTeam.RBThreeThisWeekName ===
             team.Player.replace('.', '').replace('.', '') ) {
 
           passedInTeam.teamRbThreeThisWeekName = gameInfoPassedInTeam.RBThreeThisWeekName;
           passedInTeam.teamRbThreeThisWeekFourForFourFullPPRProjectedPoints = +team.FFPts
           if(passedInTeam.RBThree) {
           passedInTeam.RBThree.projectedCarriesThisWeek = +team['Rush Att'];
           passedInTeam.RBThree.projectedRushYardsThisWeek = +team['Rush Yds'];
           passedInTeam.RBThree.projectedRushTDsThisWeek = +team['Rush TD'];
           passedInTeam.RBThree.projectedReceptionsThisWeek = +team.Rec;
           passedInTeam.RBThree.projectedRecYardsThisWeek = +team['Rec Yds'];
           passedInTeam.RBThree.projectedRecTDsThisWeek = +team['Rec TD'];
           passedInTeam.RBThree.projectedRushfirstDownsThisWeek = +team.Ru1D;
           passedInTeam.RBThree.projectedRecfirstDownsThisWeek = +team.Rec1D;
             }
            }
         }
      }
    });

    rbRvWeeklyStatExplorerRecievingTabLastFiveWeeks.forEach((player) => {
      // console.log(player)
      let t = player
      // console.log(typeof player)
      
      if(t) {
        // test.forEach((t) => {
        // console.log(t['"Player"'])
        if (
          passedInTeam.RBOne.name === t['"Player"'].slice(1, -1) ||
          passedInTeam.RBOne.name ===
          t['"Player"'].slice(1, -1).replace('.', '').replace('.', '') ||
          passedInTeam.RBOne.altName === t['"Player"'].slice(1, -1)
        ) {
          let tempTargetShare = t['"Tgt Shr"'].slice(1, -2)
          let tempTargetShareTwo = +tempTargetShare
          // console.log(tempTargetShareTwo)
          passedInTeam.RBOne.targetSharePercentageLastFiveWeeks = tempTargetShareTwo;

          
          let gamesPlayed = t['"GMs"']
          let tempRecsOne = t['"Rec"']
          let tempRecsTwo = +tempRecsOne
          let tempRecsPerGame = +(tempRecsTwo / +gamesPlayed)

          passedInTeam.RBOne.receptionsPerGameLastFiveWeeks = tempRecsPerGame
          
        }

        if (
          passedInTeam.RBTwo.name === t['"Player"'].slice(1, -1) ||
          passedInTeam.RBTwo.name ===
          t['"Player"'].slice(1, -1).replace('.', '').replace('.', '') ||
          passedInTeam.RBTwo.altName === t['"Player"'].slice(1, -1)
        ) {
          let tempTargetShare = t['"Tgt Shr"'].slice(1, -2)
          let tempTargetShareTwo = +tempTargetShare
          // console.log(tempTargetShareTwo)
          passedInTeam.RBTwo.targetSharePercentageLastFiveWeeks = tempTargetShareTwo

          let gamesPlayed = t['"GMs"']
          let tempRecsOne = t['"Rec"']
          let tempRecsTwo = +tempRecsOne
          let tempRecsPerGame = +(tempRecsTwo / +gamesPlayed)

          passedInTeam.RBTwo.receptionsPerGameLastFiveWeeks = tempRecsPerGame
        }
      // })
    }
    })

    

    

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
      // if (team['"Pos"'] === '"RB"') {
      //   if (
      //     passedInTeam.RBOne.name === team['"Player"'].slice(1, -1) ||
      //     passedInTeam.RBOne.name ===
      //       team['"Player"'].slice(1, -1).replace('.', '').replace('.', '') ||
      //     passedInTeam.RBOne.altName === team['"Player"'].slice(1, -1)
      //   ) {
      //     passedInTeam.RBOne.fanduelSalary = +team['"FD Sal $"'].slice(1, -1);
      //     tempPercentOfCap = +team['"FD Sal $"'].slice(1, -1) / 60000;
      //     passedInTeam.RBOne.percentOfSalaryCapFanduel = +(
      //       tempPercentOfCap * 100
      //     ).toFixed();
      //   }

      //   if (
      //     passedInTeam.RBTwo.name === team['"Player"'].slice(1, -1) ||
      //     passedInTeam.RBTwo.name ===
      //       team['"Player"'].slice(1, -1).replace('.', '').replace('.', '') ||
      //     passedInTeam.RBTwo.altName === team['"Player"'].slice(1, -1)
      //   ) {
      //     passedInTeam.RBTwo.fanduelSalary = +team['"FD Sal $"'].slice(1, -1);
      //     tempPercentOfCap = +team['"FD Sal $"'].slice(1, -1) / 60000;
      //     passedInTeam.RBTwo.percentOfSalaryCapFanduel = +(
      //       tempPercentOfCap * 100
      //     ).toFixed();
      //   }
      // }
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
