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

const terawdata = {
  SF49ers: {
    teamName: 'SF49ers',
    teamABV: 'SF',
    teamVTT: 0,

    QBGLSPProjectedPassAttempts: 0,
    TE: {
      name: 'placeholder',
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
      name: 'placeholder',
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
    teamVTT: 25.25,
    QBGLSPProjectedPassAttempts: 29.8,
    TE: {
      name: 'CJ Uzomah',
      halfTwentyFifthPercentProjectedPoints: 3.5,
      halfFiftyithPercentProjectedPoints: 5.67,
      halfSeventyFifthPercentProjectedPoints: 8,
      PPRTwentyFifthPercentProjectedPoints: 5.5,
      PPRFiftyithPercentProjectedPoints: 7.67,
      PPRSeventyFifthPercentProjectedPoints: 10.5,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 7.67,

      targetShareLastThreeGamesPlayed: 17.2,
      projectedTargets4For4: 5.2,

      catchRateLastFiveGames: 0.682,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 9,
      fourForFourFullPPRProjectedPoints: 11,

      yahooSalary: 14,
      fanduelSalary: 4500,
      draftkingsSalary: 5000,

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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
    teamVTT: 27.5,
    QBGLSPProjectedPassAttempts: 37.4,
    TE: {
      name: 'Travis Kelce',
      halfTwentyFifthPercentProjectedPoints: 12.5,
      halfFiftyithPercentProjectedPoints: 14.83,
      halfSeventyFifthPercentProjectedPoints: 17.5,
      PPRTwentyFifthPercentProjectedPoints: 14,
      PPRFiftyithPercentProjectedPoints: 17.5,
      PPRSeventyFifthPercentProjectedPoints: 20,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 17.5,

      targetShareLastThreeGamesPlayed: 26.6,
      projectedTargets4For4: 8.2,

      catchRateLastFiveGames: 0.636,

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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
    teamVTT: 20.25,
    QBGLSPProjectedPassAttempts: 33,
    TE: {
      name: 'Mike Gesecki',
      halfTwentyFifthPercentProjectedPoints: 5,
      halfFiftyithPercentProjectedPoints: 6.2,
      halfSeventyFifthPercentProjectedPoints: 8.5,
      PPRTwentyFifthPercentProjectedPoints: 7,
      PPRFiftyithPercentProjectedPoints: 8.7,
      PPRSeventyFifthPercentProjectedPoints: 11.25,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 8.7,

      targetShareLastThreeGamesPlayed: 22.4,
      projectedTargets4For4: 7.3,

      catchRateLastFiveGames: 0.714,

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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
    teamVTT: 20.25,
    QBGLSPProjectedPassAttempts: 34.6,
    TE: {
      name: 'James OShaunassey',
      halfTwentyFifthPercentProjectedPoints: 4.5,
      halfFiftyithPercentProjectedPoints: 6.33,
      halfSeventyFifthPercentProjectedPoints: 8.75,
      PPRTwentyFifthPercentProjectedPoints: 6.5,
      PPRFiftyithPercentProjectedPoints: 8.33,
      PPRSeventyFifthPercentProjectedPoints: 11,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 8.33,

      targetShareLastThreeGamesPlayed: 15.8,
      projectedTargets4For4: 5.33,

      catchRateLastFiveGames: 0.619,

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
    teamVTT: 22.75,
    QBGLSPProjectedPassAttempts: 27.4,
    TE: {
      name: 'Ryan Griffin',
      halfTwentyFifthPercentProjectedPoints: 3,
      halfFiftyithPercentProjectedPoints: 5.73,
      halfSeventyFifthPercentProjectedPoints: 7,
      PPRTwentyFifthPercentProjectedPoints: 4,
      PPRFiftyithPercentProjectedPoints: 6.73,
      PPRSeventyFifthPercentProjectedPoints: 8,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 6.73,

      targetShareLastThreeGamesPlayed: 7.1,
      projectedTargets4For4: 2.3,

      catchRateLastFiveGames: 0.8,

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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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
    teamVTT: 18.25,
    QBGLSPProjectedPassAttempts: 38,
    TE: {
      name: 'Mark Andrews',
      halfTwentyFifthPercentProjectedPoints: 21,
      halfFiftyithPercentProjectedPoints: 25.37,
      halfSeventyFifthPercentProjectedPoints: 29,
      PPRTwentyFifthPercentProjectedPoints: 25,
      PPRFiftyithPercentProjectedPoints: 30.2,
      PPRSeventyFifthPercentProjectedPoints: 35,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 30.2,

      targetShareLastThreeGamesPlayed: 28.4,
      projectedTargets4For4: 11,

      catchRateLastFiveGames: 0.698,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      fourForFourHalfPPRProjectedPoints: 21,
      fourForFourFullPPRProjectedPoints: 25,

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
    teamVTT: 17.25,
    QBGLSPProjectedPassAttempts: 22.75,
    TE: {
      name: 'Nick Vannett',
      halfTwentyFifthPercentProjectedPoints: 1,
      halfFiftyithPercentProjectedPoints: 2,
      halfSeventyFifthPercentProjectedPoints: 3,
      PPRTwentyFifthPercentProjectedPoints: 1.5,
      PPRFiftyithPercentProjectedPoints: 2.5,
      PPRSeventyFifthPercentProjectedPoints: 4,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 2.5,

      targetShareLastThreeGamesPlayed: 12.6,
      projectedTargets4For4: 3.7,

      catchRateLastFiveGames: 0.615,

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
      name: 'placeholder',
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
    teamVTT: 17,
    QBGLSPProjectedPassAttempts: 36.2,
    TE: {
      name: 'Pat Freiermuth',
      halfTwentyFifthPercentProjectedPoints: 6,
      halfFiftyithPercentProjectedPoints: 7.95,
      halfSeventyFifthPercentProjectedPoints: 11,
      PPRTwentyFifthPercentProjectedPoints: 7.5,
      PPRFiftyithPercentProjectedPoints: 9.45,
      PPRSeventyFifthPercentProjectedPoints: 12,

      pprFantasyPointsPerGameLastThreeGamesPlayed: 9.45,

      targetShareLastThreeGamesPlayed: 11.7,
      projectedTargets4For4: 3.7,

      catchRateLastFiveGames: 0.773,

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
      name: 'placeholder',
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
      name: 'placeholder',
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
      name: 'placeholder',
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

module.exports = terawdata;
