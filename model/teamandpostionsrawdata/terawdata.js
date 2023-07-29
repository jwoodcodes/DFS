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

    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  bears: {
    teamName: 'Bears',
    teamABV: 'CHI',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  bengals: {
    teamName: 'Bengals',
    teamABV: 'CIN',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 8,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  bills: {
    teamName: 'Bills',
    teamABV: 'BUF',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: ' ',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  broncos: {
    teamName: 'Broncos',
    teamABV: 'DEN',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  browns: {
    teamName: 'Browns',
    teamABV: 'CLE',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  buccaneers: {
    teamName: 'Buccaneers',
    teamABV: 'TB',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  cardinals: {
    teamName: 'Cardinals',
    teamABV: 'ARI',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  chargers: {
    teamName: 'Chargers',
    teamABV: 'LAC',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  chiefs: {
    teamName: 'Chiefs',
    teamABV: 'KC',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  colts: {
    teamName: 'Colts',
    teamABV: 'IND',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  commanders: {
    teamName: 'Commanders',
    teamABV: 'WAS',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  cowboys: {
    teamName: 'Cowboys',
    teamABV: 'DAL',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  dolphins: {
    teamName: 'Dolphins',
    teamABV: 'MIA',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 5,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  eagles: {
    teamName: 'Eagles',
    teamABV: 'PHI',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  falcons: {
    teamName: 'Falcons',
    teamABV: 'ATL',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  giants: {
    teamName: 'Giants',
    teamABV: 'NYG',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  jaguars: {
    teamName: 'Jaguars',
    teamABV: 'JAC',
    altTeamABV: 'JAX',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  jets: {
    teamName: 'Jets',
    teamABV: 'NYJ',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  lions: {
    teamName: 'Lions',
    teamABV: 'DET',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  packers: {
    teamName: 'Packers',
    teamABV: 'GB',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  panthers: {
    teamName: 'Panthers',
    teamABV: 'CAR',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  patriots: {
    teamName: 'Patriots',
    teamABV: 'NE',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  raiders: {
    teamName: 'Raiders',
    teamABV: 'LV',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  rams: {
    teamName: 'Rams',
    teamABV: 'LAR',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  ravens: {
    teamName: 'Ravens',
    teamABV: 'BAL',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

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
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  seahawks: {
    teamName: 'Seahawks',
    teamABV: 'SEA',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  steelers: {
    teamName: 'Steelers',
    teamABV: 'PIT',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 6,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  texans: {
    teamName: 'Texans',
    teamABV: 'HOU',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  titans: {
    teamName: 'Titans',
    teamABV: 'TEN',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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
  },
  vikings: {
    teamName: 'Vikings',
    teamABV: 'MIN',
    teamVTT: 0,
    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: '',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 0,

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      catchRateLastFiveGames: 0,

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

populateTeamObjects(terawdata.SF49ers);
populateTeamObjects(terawdata.bears);
populateTeamObjects(terawdata.bengals);
populateTeamObjects(terawdata.bills);
populateTeamObjects(terawdata.broncos);
populateTeamObjects(terawdata.browns);
populateTeamObjects(terawdata.buccaneers);
populateTeamObjects(terawdata.cardinals);
populateTeamObjects(terawdata.chargers);
populateTeamObjects(terawdata.chiefs);
populateTeamObjects(terawdata.colts);
populateTeamObjects(terawdata.commanders);
populateTeamObjects(terawdata.cowboys);
populateTeamObjects(terawdata.dolphins);
populateTeamObjects(terawdata.eagles);
populateTeamObjects(terawdata.falcons);
populateTeamObjects(terawdata.giants);
populateTeamObjects(terawdata.jaguars);
populateTeamObjects(terawdata.jets);
populateTeamObjects(terawdata.lions);
populateTeamObjects(terawdata.packers);
populateTeamObjects(terawdata.panthers);
populateTeamObjects(terawdata.patriots);
populateTeamObjects(terawdata.raiders);
populateTeamObjects(terawdata.rams);
populateTeamObjects(terawdata.ravens);
populateTeamObjects(terawdata.saints);
populateTeamObjects(terawdata.seahawks);
populateTeamObjects(terawdata.steelers);
populateTeamObjects(terawdata.texans);
populateTeamObjects(terawdata.titans);
populateTeamObjects(terawdata.vikings);

console.log(terawdata.chiefs);

module.exports = terawdata;
