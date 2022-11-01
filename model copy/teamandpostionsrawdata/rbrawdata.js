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

const rbrawdata = {
  SF49ers: {
    teamABV: 'SF',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  bears: {
    teamABV: 'CHI',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  bengals: {
    teamABV: 'CIN',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  bills: {
    teamABV: 'BUF',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  broncos: {
    teamABV: 'DEN',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  browns: {
    teamABV: 'CLE',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  buccaneers: {
    teamABV: 'TB',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  cardinals: {
    teamABV: 'ARI',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  chargers: {
    teamABV: 'LAC',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  chiefs: {
    teamABV: 'KC',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  colts: {
    teamABV: 'IND',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  commanders: {
    teamABV: 'WAS',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  cowboys: {
    teamABV: 'DAL',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  dolphins: {
    teamABV: 'MIA',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  eagles: {
    teamABV: 'PHI',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  falcons: {
    teamABV: 'ATL',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  giants: {
    teamABV: 'NYG',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  jaguars: {
    teamABV: 'JAC',
    altTeamABV: 'JAX',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  jets: {
    teamABV: 'NYJ',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  lions: {
    teamABV: 'DET',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  packers: {
    teamABV: 'GB',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  panthers: {
    teamABV: 'CAR',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  patriots: {
    teamABV: 'NE',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  raiders: {
    teamABV: 'LV',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  rams: {
    teamABV: 'LAR',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  ravens: {
    teamABV: 'BAL',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  saints: {
    teamABV: 'NO',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  seahawks: {
    teamABV: 'SEA',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  steelers: {
    teamABV: 'PIT',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  texans: {
    teamABV: 'HOU',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
  titans: {
    teamABV: 'TEN',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },

  vikings: {
    teamABV: 'MIN',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: '',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [],
      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
    RBTwo: {
      name: '',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [],

      numberOfGamesPlayedLastFiveWeeks: 0,
      percentOfGamesPlayedLastFiveWeeks: 0,

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,
      glspavg: 0,
      glspLessThanFive: 0,
      glspFiveToTen: 0,
      glspTenToFifteen: 0,
      glspFifteenToTwenty: 0,
      glspTwentyToTwentyFive: 0,
      glspGreaterThanTwentyFive: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      percentOfTeamGreenZoneCarriesLastFiveGamesPlayerPlayed: 0,
      TargetSharePercentageLastFiveWeeks: 0,

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
  },
};

const populateTeamObjects = function (passedInTeam, gameInfoPassedInTeam) {
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
  });
};

//passs in each teams gameInfo as second arg

populateTeamObjects(rbrawdata.SF49ers, gameInfo.SF49ers);
populateTeamObjects(rbrawdata.bears, gameInfo.bears);
populateTeamObjects(rbrawdata.bengals, gameInfo.bengals);
populateTeamObjects(rbrawdata.bills, gameInfo.bills);
populateTeamObjects(rbrawdata.broncos, gameInfo.broncos);
populateTeamObjects(rbrawdata.browns, gameInfo.browns);
populateTeamObjects(rbrawdata.buccaneers, gameInfo.buccaneers);
populateTeamObjects(rbrawdata.cardinals, gameInfo.cardinals);
populateTeamObjects(rbrawdata.chargers, gameInfo.chargers);
populateTeamObjects(rbrawdata.chiefs, gameInfo.chiefs);
populateTeamObjects(rbrawdata.colts, gameInfo.colts);
populateTeamObjects(rbrawdata.commanders, gameInfo.commanders);
populateTeamObjects(rbrawdata.cowboys, gameInfo.cowboys);
populateTeamObjects(rbrawdata.dolphins, gameInfo.dolphins);
populateTeamObjects(rbrawdata.eagles, gameInfo.eagles);
populateTeamObjects(rbrawdata.falcons, gameInfo.falcons);
populateTeamObjects(rbrawdata.giants, gameInfo.giants);
populateTeamObjects(rbrawdata.jaguars, gameInfo.jaguars);
populateTeamObjects(rbrawdata.jets, gameInfo.jets);
populateTeamObjects(rbrawdata.lions, gameInfo.lions);
populateTeamObjects(rbrawdata.packers, gameInfo.packers);
populateTeamObjects(rbrawdata.panthers, gameInfo.panthers);
populateTeamObjects(rbrawdata.patriots, gameInfo.patriots);
populateTeamObjects(rbrawdata.raiders, gameInfo.raiders);
populateTeamObjects(rbrawdata.rams, gameInfo.rams);
populateTeamObjects(rbrawdata.ravens, gameInfo.ravens);
populateTeamObjects(rbrawdata.saints, gameInfo.saints);
populateTeamObjects(rbrawdata.seahawks, gameInfo.seahawks);
populateTeamObjects(rbrawdata.steelers, gameInfo.steelers);
populateTeamObjects(rbrawdata.texans, gameInfo.texans);
populateTeamObjects(rbrawdata.titans, gameInfo.titans);
populateTeamObjects(rbrawdata.vikings, gameInfo.vikings);

console.log(rbrawdata);

module.exports = rbrawdata;
