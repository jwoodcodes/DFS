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
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],
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
      TargetSharePercentage: 0,

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
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'CHI',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'CIN',
    totalTeamPRojectedRBCarries: 27,
    totalTeamProjectedRBTargets: 4.6,

    RBOne: {
      name: 'Mixon',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 9.3,
      halfFiftyithPercentProjectedPoints: 12.8,
      halfSeventyFifthPercentProjectedPoints: 17.3,
      PPRTwentyFifthPercentProjectedPoints: 10.1,
      PPRFiftyithPercentProjectedPoints: 13.8,
      PPRSeventyFifthPercentProjectedPoints: 19,

      prjCarries: 22.4,
      prjTargets: 1.6,

      fourForFourHalfPPRProjectedPoints: 15,
      fourForFourFullPPRProjectedPoints: 18,

      yahooSalary: 28,
      fanduelSalary: 6200,
      draftkingsSalary: 7000,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Evans',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0.7,
      halfFiftyithPercentProjectedPoints: 2.3,
      halfSeventyFifthPercentProjectedPoints: 5,
      PPRTwentyFifthPercentProjectedPoints: 1.2,
      PPRFiftyithPercentProjectedPoints: 3.1,
      PPRSeventyFifthPercentProjectedPoints: 6.3,

      prjCarries: 1,
      prjTargets: 0.4,

      fourForFourHalfPPRProjectedPoints: 4,
      fourForFourFullPPRProjectedPoints: 2,

      yahooSalary: 10,
      fanduelSalary: 3000,
      draftkingsSalary: 4000,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
  },
  bills: {
    teamABV: 'BUF',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'DEN',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'CLE',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'TB',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'ARI',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'LAC',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'KC',
    totalTeamPRojectedRBCarries: 18.2,
    totalTeamProjectedRBTargets: 7.2,
    RBOne: {
      name: 'Edwards-Helaire',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 6.3,
      halfFiftyithPercentProjectedPoints: 9.8,
      halfSeventyFifthPercentProjectedPoints: 13.3,
      PPRTwentyFifthPercentProjectedPoints: 9.1,
      PPRFiftyithPercentProjectedPoints: 13.5,
      PPRSeventyFifthPercentProjectedPoints: 16,

      prjCarries: 11.25,
      prjTargets: 3,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Darrell Williams',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 5,
      halfFiftyithPercentProjectedPoints: 7,
      halfSeventyFifthPercentProjectedPoints: 9,
      PPRTwentyFifthPercentProjectedPoints: 9,
      PPRFiftyithPercentProjectedPoints: 11.5,
      PPRSeventyFifthPercentProjectedPoints: 13,

      prjCarries: 5.6,
      prjTargets: 3.8,

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
    teamABV: 'IND',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'WAS',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'DAL',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'MIA',
    totalTeamPRojectedRBCarries: 26.4,
    totalTeamProjectedRBTargets: 3,
    RBOne: {
      name: 'Myles Gaskin',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 8.3,
      halfFiftyithPercentProjectedPoints: 10.32,
      halfSeventyFifthPercentProjectedPoints: 12.5,
      PPRTwentyFifthPercentProjectedPoints: 10.1,
      PPRFiftyithPercentProjectedPoints: 11.2,
      PPRSeventyFifthPercentProjectedPoints: 13,

      prjCarries: 15.6,
      prjTargets: 2,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Duke Johnson',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 6,
      halfFiftyithPercentProjectedPoints: 8.3,
      halfSeventyFifthPercentProjectedPoints: 10,
      PPRTwentyFifthPercentProjectedPoints: 10,
      PPRFiftyithPercentProjectedPoints: 12,
      PPRSeventyFifthPercentProjectedPoints: 14,

      prjCarries: 13,
      prjTargets: 0.5,

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
    teamABV: 'PHI',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'ATL',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'NYG',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'JAC',
    altTeamABV: 'JAX',
    totalTeamPRojectedRBCarries: 15.6,
    totalTeamProjectedRBTargets: 5.6,
    RBOne: {
      name: 'James Robinson',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 8.3,
      halfFiftyithPercentProjectedPoints: 10.15,
      halfSeventyFifthPercentProjectedPoints: 12.5,
      PPRTwentyFifthPercentProjectedPoints: 10.1,
      PPRFiftyithPercentProjectedPoints: 11.2,
      PPRSeventyFifthPercentProjectedPoints: 13,

      prjCarries: 12.2,
      prjTargets: 3.4,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Carlos Hyde',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 1,
      halfFiftyithPercentProjectedPoints: 2.52,
      halfSeventyFifthPercentProjectedPoints: 4,
      PPRTwentyFifthPercentProjectedPoints: 1.5,
      PPRFiftyithPercentProjectedPoints: 2.8,
      PPRSeventyFifthPercentProjectedPoints: 5,

      prjCarries: 4,
      prjTargets: 1.25,

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
    teamABV: 'NYJ',
    totalTeamPRojectedRBCarries: 19,
    totalTeamProjectedRBTargets: 5.4,
    RBOne: {
      name: 'Michael Carter',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 6,
      halfFiftyithPercentProjectedPoints: 9.78,
      halfSeventyFifthPercentProjectedPoints: 12,
      PPRTwentyFifthPercentProjectedPoints: 7,
      PPRFiftyithPercentProjectedPoints: 10.78,
      PPRSeventyFifthPercentProjectedPoints: 13,

      prjCarries: 11,
      prjTargets: 3,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Tevin Coleman',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 3.5,
      halfFiftyithPercentProjectedPoints: 5.9,
      halfSeventyFifthPercentProjectedPoints: 8,
      PPRTwentyFifthPercentProjectedPoints: 4,
      PPRFiftyithPercentProjectedPoints: 6.65,
      PPRSeventyFifthPercentProjectedPoints: 9,

      prjCarries: 8.8,
      prjTargets: 2.2,

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
    teamABV: 'DET',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'GB',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'CAR',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'NE',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'LV',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'LAR',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'BAL',
    totalTeamPRojectedRBCarries: 19,
    totalTeamProjectedRBTargets: 5.8,
    RBOne: {
      name: 'Devonta Freeman',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 7,
      halfFiftyithPercentProjectedPoints: 10,
      halfSeventyFifthPercentProjectedPoints: 13,
      PPRTwentyFifthPercentProjectedPoints: 8,
      PPRFiftyithPercentProjectedPoints: 11.7,
      PPRSeventyFifthPercentProjectedPoints: 14.7,

      prjCarries: 12.5,
      prjTargets: 4.16,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Latavius Murray',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 2,
      halfFiftyithPercentProjectedPoints: 4,
      halfSeventyFifthPercentProjectedPoints: 6,
      PPRTwentyFifthPercentProjectedPoints: 2.5,
      PPRFiftyithPercentProjectedPoints: 4.6,
      PPRSeventyFifthPercentProjectedPoints: 6.5,

      prjCarries: 5.6,
      prjTargets: 1.4,

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
    teamABV: 'NO',
    totalTeamPRojectedRBCarries: 19.6,
    totalTeamProjectedRBTargets: 5,
    RBOne: {
      name: 'Alvin Kamara',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 11,
      halfFiftyithPercentProjectedPoints: 13.4,
      halfSeventyFifthPercentProjectedPoints: 15,
      PPRTwentyFifthPercentProjectedPoints: 13,
      PPRFiftyithPercentProjectedPoints: 15,
      PPRSeventyFifthPercentProjectedPoints: 18,

      prjCarries: 17.5,
      prjTargets: 5.5,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Mark Ingram',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 6,
      halfFiftyithPercentProjectedPoints: 8,
      halfSeventyFifthPercentProjectedPoints: 10,
      PPRTwentyFifthPercentProjectedPoints: 7.5,
      PPRFiftyithPercentProjectedPoints: 9.5,
      PPRSeventyFifthPercentProjectedPoints: 10.5,

      prjCarries: 10.6,
      prjTargets: 4.3,

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
    teamABV: 'SEA',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'PIT',
    totalTeamPRojectedRBCarries: 17.2,
    totalTeamProjectedRBTargets: 5.4,
    RBOne: {
      name: 'Najee Harris',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 10,
      halfFiftyithPercentProjectedPoints: 12.73,
      halfSeventyFifthPercentProjectedPoints: 15,
      PPRTwentyFifthPercentProjectedPoints: 12.5,
      PPRFiftyithPercentProjectedPoints: 14.66,
      PPRSeventyFifthPercentProjectedPoints: 18,

      prjCarries: 16.5,
      prjTargets: 4.6,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Benny Snell',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0.5,
      halfFiftyithPercentProjectedPoints: 1,
      halfSeventyFifthPercentProjectedPoints: 2,
      PPRTwentyFifthPercentProjectedPoints: 0.5,
      PPRFiftyithPercentProjectedPoints: 1,
      PPRSeventyFifthPercentProjectedPoints: 2,

      prjCarries: 1,
      prjTargets: 1,

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
    teamABV: 'HOU',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'TEN',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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
    teamABV: 'MIN',
    totalTeamPRojectedRBCarries: 0,
    totalTeamProjectedRBTargets: 0,
    RBOne: {
      name: 'Placeholder',
      RBOneOrTwo: 1,
      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,

      draftkingsProjectedOwnership: 0,
      fanduelProjectedOwnership: 0,
      yahooProjectedOwnership: 0,
    },
    RBTwo: {
      name: 'Placeholder',
      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      prjCarries: 0,
      prjTargets: 0,

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

populateTeamObjects(rbrawdata.SF49ers);
populateTeamObjects(rbrawdata.bears);
populateTeamObjects(rbrawdata.bengals);
populateTeamObjects(rbrawdata.bills);
populateTeamObjects(rbrawdata.broncos);
populateTeamObjects(rbrawdata.browns);
populateTeamObjects(rbrawdata.buccaneers);
populateTeamObjects(rbrawdata.cardinals);
populateTeamObjects(rbrawdata.chargers);
populateTeamObjects(rbrawdata.chiefs);
populateTeamObjects(rbrawdata.colts);
populateTeamObjects(rbrawdata.commanders);
populateTeamObjects(rbrawdata.cowboys);
populateTeamObjects(rbrawdata.dolphins);
populateTeamObjects(rbrawdata.eagles);
populateTeamObjects(rbrawdata.falcons);
populateTeamObjects(rbrawdata.giants);
populateTeamObjects(rbrawdata.jaguars);
populateTeamObjects(rbrawdata.jets);
populateTeamObjects(rbrawdata.lions);
populateTeamObjects(rbrawdata.packers);
populateTeamObjects(rbrawdata.panthers);
populateTeamObjects(rbrawdata.patriots);
populateTeamObjects(rbrawdata.raiders);
populateTeamObjects(rbrawdata.rams);
populateTeamObjects(rbrawdata.ravens);
populateTeamObjects(rbrawdata.saints);
populateTeamObjects(rbrawdata.seahawks);
populateTeamObjects(rbrawdata.steelers);
populateTeamObjects(rbrawdata.texans);
populateTeamObjects(rbrawdata.titans);
populateTeamObjects(rbrawdata.vikings);

// console.log(rbrawdata);

module.exports = rbrawdata;
