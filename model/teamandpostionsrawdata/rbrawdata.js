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

const rbrawdata = {
  SF49ers: {
    teamABV: 'SF',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,

    teamTotalGreenZoneTouchesLastFiveWeeks: 0,
    teamTotalReceptionsByRBsPerGameLastFiveWeeks: 0,
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

      greenZoneTouchesLastFiveWeeks: 0,
      percentOfTeamGreenZoneTouchesLastFiveGamesPlayerPlayed: 0,
      receptionsLastFiveWeeks: 0,
      percentageOfTeamBackfieldRecpetionsLastFiveWeeks: 0,
      totalHighValueTouchesLastFiveWeeks: 0,
      percentOfTotalTeamHVTsLastFiveWeeks: 0,
      lowValueTouchesLastFiveWeeks: 0,
      PercentageOfTouchesThatWereTRAPCarriesLastFiveWeeks: 0,
      FPOEPerGameLastFiveWeeks: 0,

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
    altTeamABV: 'LA',
    opponentABV: 0,
    teamVTT: 0,
    opponentVTT: 0,
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,

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

    weekFiveWeeksAgo: [],
    weekFourWeeksAgo: [],
    weekThreeWeeksAgo: [],
    weekTwoWeeksAgo: [],
    weekLastWeek: [],

    teamRBTotalsFiveWeeksAgo: [],
    teamRBTotalsFourWeeksAgo: [],

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

const tempteamRBTotalsFiveWeeksAgo = [];
const tempteamRBTotalsFourWeeksAgo = [];
const tempteamRBTotalsthreeWeeksAgo = [];
const tempteamRBTotalstwoWeeksAgo = [];
const tempteamRBTotalslasWeek = [];

const populateTeamObjects = function (passedInTeam, gameInfoPassedInTeam) {
  passedInTeam.RBOne.name = gameInfoPassedInTeam.RBOneThisWeekName;
  passedInTeam.RBTwo.name = gameInfoPassedInTeam.RBTwoThisWeekName;

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
      let rbName = temprbName.replace('.', '');

      if (rbName.slice(4) === 'Walker') {
        rbName = 'Kenneth Walker';
      }

      if (!passedInTeam.firstPassedInRBName) {
        passedInTeam.firstPassedInRBName = rbName;
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
      let rbName = temprbName.replace('.', '');

      if (rbName === passedInTeam.firstPassedInRBName) {
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo * 100).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo * 100).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo * 100).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo * 100).toFixed(2);
        tempweekLastWeek = (+weekLastWeek * 100).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
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

      if (rbName === passedInTeam.secondPassedInRBName) {
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

      if (rbName === passedInTeam.thirdPassedInRBName) {
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

      if (rbName === passedInTeam.fourthPassedInRBName) {
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

      // let weekFiveWeeksAgo = 0;
      // let weekFourWeeksAgo = 0;
      // let weekThreeWeeksAgo = 0;
      // let weekTwoWeeksAgo = 0;
      // let weekLastWeek = 0;

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
      let rbName = temprbName.replace('.', '');

      if (rbName === passedInTeam.firstPassedInRBName) {
        tempweekFiveWeeksAgo = (+weekFiveWeeksAgo).toFixed(2);
        tempweekFourWeeksAgo = (+weekFourWeeksAgo).toFixed(2);
        tempweekThreeWeeksAgo = (+weekThreeWeeksAgo).toFixed(2);
        tempweekTwoWeeksAgo = (+weekTwoWeeksAgo).toFixed(2);
        tempweekLastWeek = (+weekLastWeek).toFixed(2);
        // console.log(tempweekFiveWeeksAgo);
        passedInTeam.firstPassedInRBFiveWeeksagoTotal = (
          +passedInTeam.firstPassedInRBFiveWeeksagoFantasyPointsScoredPlusSnapPercentage +
          +tempweekFiveWeeksAgo
        ).toFixed(2);

        passedInTeam.weekFiveWeeksAgo.push(
          +passedInTeam.firstPassedInRBFiveWeeksagoTotal
        );
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

      if (rbName === passedInTeam.secondPassedInRBName) {
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

      if (rbName === passedInTeam.thirdPassedInRBName) {
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

      if (rbName === passedInTeam.fourthPassedInRBName) {
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

      // console.log(passedInTeam.firstPassedInRBThreeWeeksagoTotal);
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
      let rbName = temprbName.replace('.', '');

      if (rbName === passedInTeam.firstPassedInRBName) {
        //first passed in RB
        //
        //five weeks ago
        if (+passedInTeam.teamRBTotalsFiveWeeksAgo[0] > 0) {
          if (
            +passedInTeam.firstPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFiveWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFiveWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[0] &&
            +passedInTeam.firstPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        //four weeks ago
        if (+passedInTeam.teamRBTotalsFourWeeksAgo[0] > 0) {
          if (
            +passedInTeam.firstPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFourWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFourWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[0] &&
            +passedInTeam.firstPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
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
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBThreeWeeksagoTotal ===
            +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoThreeWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBThreeWeeksagoTotal !==
              +passedInTeam.teamRBTotalsThreeWeeksAgo[0] &&
            +passedInTeam.firstPassedInRBThreeWeeksagoTotal !==
              +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
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
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBTwoWeeksagoTotal ===
            +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoTwoWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBTwoWeeksagoTotal !==
              +passedInTeam.teamRBTotalsTwoWeeksAgo[0] &&
            +passedInTeam.firstPassedInRBTwoWeeksagoTotal !==
              +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
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
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.firstPassedInRBLastWeekTotal ===
            +passedInTeam.teamRBTotalsLastWeek[1]
          ) {
            passedInTeam.teamRBTwoLastWeek = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }

          if (
            +passedInTeam.firstPassedInRBLastWeekTotal !==
              +passedInTeam.teamRBTotalsLastWeek[0] &&
            +passedInTeam.firstPassedInRBLastWeekTotal !==
              +passedInTeam.teamRBTotalsLastWeek[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
      }

      //second passed in RB

      if (rbName === passedInTeam.secondPassedInRBName) {
        // console.log(
        //   `${passedInTeam.teamABV} ${+passedInTeam.teamRBTotalsFourWeeksAgo[0]}`
        // );
        if (+passedInTeam.teamRBTotalsFiveWeeksAgo[0] > 0) {
          if (
            +passedInTeam.secondPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFiveWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.secondPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFiveWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.secondPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[0] &&
            +passedInTeam.secondPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
      }

      //four weeks ago
      if (+passedInTeam.teamRBTotalsFourWeeksAgo[0] > 0) {
        if (rbName === passedInTeam.secondPassedInRBName) {
          if (
            +passedInTeam.secondPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFourWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.secondPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFourWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.secondPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[0] &&
            +passedInTeam.secondPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        // three weeks ago

        if (+passedInTeam.teamRBTotalsThreeWeeksAgo[0] > 0) {
          if (rbName === passedInTeam.secondPassedInRBName) {
            if (
              +passedInTeam.secondPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneThreeWeeksAgo = rbName;
              // console.log(
              //   `${passedInTeam.teamABV} ${passedInTeam.teamRBOneThreeWeeksAgo}`
              // );
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.secondPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoThreeWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.secondPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[0] &&
              +passedInTeam.secondPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //
        // //two weeks ago

        if (+passedInTeam.teamRBTotalsTwoWeeksAgo[0] > 0) {
          if (rbName === passedInTeam.secondPassedInRBName) {
            if (
              +passedInTeam.secondPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneTwoWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.secondPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoTwoWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.secondPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[0] &&
              +passedInTeam.secondPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //last week

        if (+passedInTeam.teamRBTotalsLastWeek[0] > 0) {
          if (rbName === passedInTeam.secondPassedInRBName) {
            if (
              +passedInTeam.secondPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[0]
            ) {
              passedInTeam.teamRBOneLastWeek = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.secondPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              passedInTeam.teamRBTwoLastWeek = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.secondPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[0] &&
              +passedInTeam.secondPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }
      }

      //third passed in RB

      //five weeks ago

      if (+passedInTeam.teamRBTotalsFiveWeeksAgo[0] > 0) {
        if (rbName === passedInTeam.thirdPassedInRBName) {
          if (
            +passedInTeam.thirdPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFiveWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.thirdPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFiveWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.thirdPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[0] &&
            +passedInTeam.thirdPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
      }

      //four weeks ago

      if (+passedInTeam.teamRBTotalsFourWeeksAgo[0] > 0) {
        if (rbName === passedInTeam.thirdPassedInRBName) {
          if (
            +passedInTeam.thirdPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFourWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.thirdPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFourWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.thirdPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[0] &&
            +passedInTeam.thirdPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        //three weeks ago

        if (+passedInTeam.teamRBTotalsThreeWeeksAgo[0] > 0) {
          if (rbName === passedInTeam.thirdPassedInRBName) {
            if (
              +passedInTeam.thirdPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneThreeWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoThreeWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[0] &&
              +passedInTeam.thirdPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //two weeks ago

        if (+passedInTeam.teamRBTotalsTwoWeeksAgo[0] > 0) {
          if (rbName === passedInTeam.thirdPassedInRBName) {
            if (
              +passedInTeam.thirdPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneTwoWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoTwoWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[0] &&
              +passedInTeam.thirdPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //last week

        if (+passedInTeam.teamRBTotalsLastWeek[0] > 0) {
          if (rbName === passedInTeam.thirdPassedInRBName) {
            if (
              +passedInTeam.thirdPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[0]
            ) {
              passedInTeam.teamRBOneLastWeek = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              passedInTeam.teamRBTwoLastWeek = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.thirdPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[0] &&
              +passedInTeam.thirdPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }
      }

      //fourth passed in RB

      //five weeks ago

      if (+passedInTeam.teamRBTotalsFiveWeeksAgo[0] > 0) {
        if (rbName === passedInTeam.fourthPassedInRBName) {
          if (
            +passedInTeam.fourthPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFiveWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }
          if (
            +passedInTeam.fourthPassedInRBFiveWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFiveWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.fourthPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[0] &&
            +passedInTeam.fourthPassedInRBFiveWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFiveWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }
      }

      //four weeks ago

      if (+passedInTeam.teamRBTotalsFourWeeksAgo[0] > 0) {
        if (rbName === passedInTeam.fourthPassedInRBName) {
          if (
            +passedInTeam.fourthPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[0]
          ) {
            passedInTeam.teamRBOneFourWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
            }
          }

          if (
            +passedInTeam.fourthPassedInRBFourWeeksagoTotal ===
            +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            passedInTeam.teamRBTwoFourWeeksAgo = rbName;
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
            }
          }
          if (
            +passedInTeam.fourthPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[0] &&
            +passedInTeam.fourthPassedInRBFourWeeksagoTotal !==
              +passedInTeam.teamRBTotalsFourWeeksAgo[1]
          ) {
            if (passedInTeam.RBOne.name === rbName) {
              passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
            }
            if (passedInTeam.RBTwo.name === rbName) {
              passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
            }
          }
        }

        //three weeks ago

        if (+passedInTeam.teamRBTotalsThreeWeeksAgo[0] > 0) {
          if (rbName === passedInTeam.fourthPassedInRBName) {
            if (
              +passedInTeam.fourthPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneThreeWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }

            if (
              +passedInTeam.fourthPassedInRBThreeWeeksagoTotal ===
              +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoThreeWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.fourthPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[0] &&
              +passedInTeam.fourthPassedInRBThreeWeeksagoTotal !==
                +passedInTeam.teamRBTotalsThreeWeeksAgo[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //two weeks ago

        if (+passedInTeam.teamRBTotalsTwoWeeksAgo[0] > 0) {
          if (rbName === passedInTeam.fourthPassedInRBName) {
            if (
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[0]
            ) {
              passedInTeam.teamRBOneTwoWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }

            if (
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              passedInTeam.teamRBTwoTwoWeeksAgo = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[0] &&
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal !==
                +passedInTeam.teamRBTotalsTwoWeeksAgo[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(3);
              }
            }
          }
        }

        // //last week

        if (+passedInTeam.teamRBTotalsLastWeek[0] > 0) {
          if (rbName === passedInTeam.fourthPassedInRBName) {
            if (
              +passedInTeam.fourthPassedInRBLastWeekTotal ===
              +passedInTeam.teamRBTotalsLastWeek[0]
            ) {
              passedInTeam.teamRBOneLastWeek = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(1);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(1);
              }
            }

            if (
              +passedInTeam.fourthPassedInRBTwoWeeksagoTotal ===
              +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              passedInTeam.teamRBTwoLastWeek = rbName;
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(2);
              }
              if (passedInTeam.RBTwo.name === rbName) {
                passedInTeam.RBTwo.roleLastXNumOfWeeksUpToFive.push(2);
              }
            }
            if (
              +passedInTeam.fourthPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[0] &&
              +passedInTeam.fourthPassedInRBLastWeekTotal !==
                +passedInTeam.teamRBTotalsLastWeek[1]
            ) {
              if (passedInTeam.RBOne.name === rbName) {
                passedInTeam.RBOne.roleLastXNumOfWeeksUpToFive.push(3);
              }
              if (passedInTeam.RBTwo.name === rbName) {
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

// console.log(rbrawdata.bengals);
// console.log(rbrawdata.bills);
// console.log(rbrawdata.buccaneers);
// console.log(rbrawdata.chiefs);

// console.log(rbrawdata.packers);
// console.log(rbrawdata.ravens);
// console.log(rbrawdata.saints);
// console.log(rbrawdata.vikings);

// console.log(rbrawdata);

module.exports = rbrawdata;
