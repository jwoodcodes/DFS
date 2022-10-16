const wholeDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholeDownloadableSpreadSheetYahoo');
const qbDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/qbDownloadableSpreadSheetYahoo');
const wholePlayerPricingWithPercentOfCapDraftkings = require('../datafilesmadefrom4for4CSVs/draftkings/wholePlayerPricingWithPercentOfCapDraftkings');
const wholePlayerPricingWithPercentOfCapFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/wholePlayerPricingWithPercentOfCapFanduel');
const wholePlayerPricingWithPercentOfCapYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholePlayerPricingWithPercentOfCapYahoo');
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

//QB TDrate is TD's/pass attempts

const qbrawdata = {
  SF49ers: {
    teamVTT: 0,
    teamABV: 'SF',
    name: 'Jimmy Garoppolo',
    // roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [2, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  bears: {
    teamVTT: 0,
    teamABV: 'CHI',
    name: 'Justin Fields',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  bengals: {
    teamVTT: 0,
    teamABV: 'CIN',
    name: 'Joe Burrow',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  bills: {
    teamVTT: 0,
    teamABV: 'BUF',
    name: 'Josh Allen',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  broncos: {
    teamVTT: 0,
    teamABV: 'DEN',
    name: 'Russell Wilson',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  browns: {
    teamVTT: 0,
    teamABV: 'CLE',
    name: 'Jacoby Brissett',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  buccaneers: {
    teamVTT: 0,
    teamABV: 'TB',
    name: 'Tom Brady',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  cardinals: {
    teamVTT: 0,
    teamABV: 'ARI',
    name: 'Kyler Murray',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  chargers: {
    teamVTT: 0,
    teamABV: 'LAC',
    name: 'Justin Herbert',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  chiefs: {
    teamVTT: 0,
    teamABV: 'KC',
    name: 'Patrick Mahomes',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  colts: {
    teamVTT: 0,
    teamABV: 'IND',
    name: 'Matt Ryan',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  commanders: {
    teamVTT: 0,
    teamABV: 'WAS',
    name: 'Carson Wentz',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  cowboys: {
    teamVTT: 0,
    teamABV: 'DAL',
    name: 'Cooper Rush',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [2, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  dolphins: {
    teamVTT: 0,
    teamABV: 'MIA',
    name: 'Teddy Bridgewater',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [2, 2, 2, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  eagles: {
    teamVTT: 0,
    teamABV: 'PHI',
    name: 'Jalen Hurts',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  falcons: {
    teamVTT: 0,
    teamABV: 'ATL',
    name: 'Marcus Mariota',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  giants: {
    teamVTT: 0,
    teamABV: 'NYG',
    name: 'Daniel Jones',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  jaguars: {
    teamVTT: 0,
    teamABV: 'JAC',
    altTeamABV: 'JAX',
    name: 'Trevor Lawrence',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  jets: {
    teamVTT: 0,
    teamABV: 'NYJ',
    name: 'Zach Wilson',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [2, 2, 2, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 9,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 9,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  lions: {
    teamVTT: 0,
    teamABV: 'DET',
    name: 'Jared Goff',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  packers: {
    teamVTT: 0,
    teamABV: 'GB',
    name: 'Aaron Rodgers',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  panthers: {
    teamVTT: 0,
    teamABV: 'CAR',
    name: 'Baker Mayfield',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  patriots: {
    teamVTT: 0,
    teamABV: 'NE',
    name: 'Baily Zappe',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  raiders: {
    teamVTT: 0,
    teamABV: 'LV',
    name: 'Derick Carr',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  rams: {
    teamVTT: 0,
    teamABV: 'LAR',
    name: 'Matthew Stafford',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  ravens: {
    teamVTT: 0,
    teamABV: 'BAL',
    name: 'Lamar Jackson',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  saints: {
    teamVTT: 0,
    teamABV: 'NO',
    name: 'Andy Dalton',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  seahawks: {
    teamVTT: 0,
    teamABV: 'SEA',
    name: 'Geno Smith',
    // roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  steelers: {
    teamVTT: 0,
    teamABV: 'PIT',
    name: 'Kenny Pickett',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  texans: {
    teamVTT: 0,
    teamABV: 'HOU',
    name: 'Davis Mills',
    // oleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],r
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  titans: {
    teamVTT: 0,
    teamABV: 'TEN',
    name: 'Ryan Tannehill',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
  vikings: {
    teamVTT: 0,
    teamABV: 'MIN',
    name: '',
    // roleThisWeek: 1,
    // ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    // roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1],
    numberOfGamesPlayedLastFiveWeeks: 0,
    percentOfGamesPlayedLastFiveWeeks: 0,

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
};

const populateTeamObjects = function (passedInTeam) {
  qbDownloadableSpreadSheetYahoo.forEach(function (playerobj, i) {
    // console.log(playerobj);

    let teamName = playerobj.Team;
    let teamvtt = playerobj['Team O/U'];
    let playerName = playerobj.Player;
    let projpts = playerobj.FFPts;

    let playerObject = playerobj;

    if (
      teamName === passedInTeam.teamABV ||
      teamName === passedInTeam.altTeamABV
    ) {
      // console.log(playerObject);
      // console.log(passedInTeam.name);
      // console.log(playerObject);
      // passedInTeam.teamName = teamName;

      passedInTeam.teamVTT = playerObject['Team O/U'];
      passedInTeam.name = playerObject.Player;
      passedInTeam.fourForFourFullPPRProjectedPoints = projpts;
      passedInTeam.fourForFourHalfPPRProjectedPoints = projpts;
      passedInTeam.prjpassattempts = playerObject['Pass Att'];
      // console.log(projpts);
    }

    // console.log(teamName);
  });

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
      passedInTeam.opponentABV = tempAwayTeamName;
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
      // passedInTeam.homeOrAway = 'Away';

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

  let percentageOfRecentWeeksPlayed = 0;

  QBWeeklyStatExplorerLastFiveWeeksCategoryPassing.forEach(function (qb, i) {
    let qbName = qb['"Player"'].slice(1, -1);

    if (qbName === passedInTeam.name) {
      // console.log(qb['"GMs"']);
      passedInTeam.numberOfGamesPlayedLastFiveWeeks = qb['"GMs"'];
      if (gameInfo.week.currentWeek > 5) {
        percentageOfRecentWeeksPlayed = qb['"GMs"'] / 5;
        passedInTeam.percentOfGamesPlayedLastFiveWeeks =
          percentageOfRecentWeeksPlayed;
      }
      if (gameInfo.week.currentWeek === 5) {
        percentageOfRecentWeeksPlayed = qb['"GMs"'] / 4;
        passedInTeam.percentOfGamesPlayedLastFiveWeeks =
          percentageOfRecentWeeksPlayed;
      }
      if (gameInfo.week.currentWeek === 4) {
        percentageOfRecentWeeksPlayed = qb['"GMs"'] / 3;
        passedInTeam.percentOfGamesPlayedLastFiveWeeks =
          percentageOfRecentWeeksPlayed;
      }
      passedInTeam.ypaLastFiveGames = qb['"Yd/Att"'];

      //QB TDrate is TD's/pass attempts
      // console.log(`${qbName}: ${qb['"TD"']}: ${qb['"Att"']}`);
      let tempTDrate = +(qb['"TD"'] / qb['"Att"']);
      let ttdrate = tempTDrate.toFixed(3);
      let touchdownRate = (ttdrate * 100).toFixed(1);
      passedInTeam.TDrateLastFiveGames = touchdownRate;
    }
  });

  allQBGLSP.forEach(function (qb, i) {
    let qbName = qb['"Player"'].slice(1, -1);
    if (qbName === passedInTeam.name) {
      // console.log(`${passedInTeam.name}: ${qb['"25th"']}`);
      passedInTeam.twentyFifthPercentProjectedPoints = qb['"25th"'];
      passedInTeam.fiftyithPercentProjectedPoints = qb['"50th"'];
      passedInTeam.seventyFifthPercentProjectedPoints = qb['"75th"'];
    }
  });
  let tempPassCatchersProjPoints = [];
  allHalfPPRProjectedPointsWithoutTeamDef.forEach(function (player, i) {
    if (
      player.Team === passedInTeam.teamABV ||
      player.Team === passedInTeam.altTeamABV
    ) {
      if (player.Pos === 'WR' || player.Pos === 'TE') {
        tempPassCatchersProjPoints.push(+player.FFPts);
      }
    }
  });

  wholePlayerPricingWithPercentOfCapDraftkings.forEach(function (teamObj) {
    let tempTeamName = '';

    if (teamObj['"Team"'].length === 5) {
      tempTeamName = teamObj['"Team"'].slice(1, 4);
    } else {
      tempTeamName = teamObj['"Team"'].slice(1, 3);
    }
    // console.log(tempTeamName);
    let tempPlayerName = teamObj['"Player"'].slice(1, -1);
    // console.log(tempPlayerName);
    // console.log();
    if (
      passedInTeam.teamABV === tempTeamName ||
      (passedInTeam.altTeamABV === tempTeamName &&
        teamObj['"Position"'] === '"QB"' &&
        passedInTeam.name === tempPlayerName)
    ) {
      draftkingssalary = +teamObj['"Current $"'].slice(1, 5);
      passedInTeam.draftkingsSalary = draftkingssalary;

      let dkPercentOfCap = +teamObj['"% of Cap"'].slice(1, 5);
      passedInTeam.percentOfSalaryCapDraftkings = dkPercentOfCap;
    }
  });

  wholePlayerPricingWithPercentOfCapFanduel.forEach(function (teamObj) {
    let tempTeamName = '';

    if (teamObj['"Team"'].length === 5) {
      tempTeamName = teamObj['"Team"'].slice(1, 4);
    } else {
      tempTeamName = teamObj['"Team"'].slice(1, 3);
    }
    // console.log(tempTeamName);
    let tempPlayerName = teamObj['"Player"'].slice(1, -1);
    // console.log(tempPlayerName);
    // console.log();
    if (
      passedInTeam.teamABV === tempTeamName ||
      (passedInTeam.altTeamABV === tempTeamName &&
        teamObj['"Position"'] === '"QB"' &&
        passedInTeam.name === tempPlayerName)
    ) {
      Fanduelsalary = +teamObj['"Current $"'].slice(1, 5);
      passedInTeam.fanduelSalary = Fanduelsalary;

      let fdPercentOfCap = +teamObj['"% of Cap"'].slice(1, 5);
      passedInTeam.percentOfSalaryCapFanduel = fdPercentOfCap;
    }
  });

  wholePlayerPricingWithPercentOfCapYahoo.forEach(function (teamObj) {
    let tempTeamName = '';

    if (teamObj['"Team"'].length === 5) {
      tempTeamName = teamObj['"Team"'].slice(1, 4);
    } else {
      tempTeamName = teamObj['"Team"'].slice(1, 3);
    }
    // console.log(tempTeamName);
    let tempPlayerName = teamObj['"Player"'].slice(1, -1);
    // console.log(tempPlayerName);
    // console.log();
    if (
      passedInTeam.teamABV === tempTeamName ||
      (passedInTeam.altTeamABV === tempTeamName &&
        teamObj['"Position"'] === '"QB"' &&
        passedInTeam.name === tempPlayerName)
    ) {
      Yahoosalary = +teamObj['"Current $"'].slice(1, 3);
      passedInTeam.yahooSalary = Yahoosalary;

      let yahooPercentOfCap = +teamObj['"% of Cap"'].slice(1, 5);
      passedInTeam.percentOfSalaryCapYahoo = yahooPercentOfCap;
    }
  });

  allTeams.forEach(function (team) {
    if (
      passedInTeam.teamABV === team.teamABV ||
      passedInTeam.altTeamABV === team.teamABV
    ) {
      passedInTeam.opponentABV = team.opponentABV;
      passedInTeam.homeOrAway = team.homeOrAway;
    }
  });

  gppLeverageScoresAndProjOwnershipDraftkings.forEach(function (teamObj) {
    let tempTeamName = '';
    // console.log(teamObj['"Tm"'].length);
    if (teamObj['"Tm"'].length === 5) {
      tempTeamName = teamObj['"Tm"'].slice(1, 4);
    } else {
      tempTeamName = teamObj['"Tm"'].slice(1, 3);
    }
    let tempPlayerName = teamObj['"Player"'].slice(1, -1);
    let temppos = teamObj['"Pos"'].slice(1, -1);

    if (
      (passedInTeam.teamABV === tempTeamName &&
        temppos === 'QB' &&
        passedInTeam.name === tempPlayerName) ||
      (passedInTeam.altTeamABV === tempTeamName &&
        temppos === 'QB' &&
        passedInTeam.name === tempPlayerName)
    ) {
      // console.log(teamObj);
      // console.log(teamObj['"Pos"']);
      dkOwnership = +teamObj['"Projected Own%"'].slice(1, 4);
      passedInTeam.draftkingsProjectedOwnership = dkOwnership;
    }
  });

  gppLeverageScoresAndProjOwnershipFanduel.forEach(function (teamObj) {
    let tempTeamName = '';
    // console.log(teamObj['"Tm"'].length);
    if (teamObj['"Tm"'].length === 5) {
      tempTeamName = teamObj['"Tm"'].slice(1, 4);
    } else {
      tempTeamName = teamObj['"Tm"'].slice(1, 3);
    }
    let tempPlayerName = teamObj['"Player"'].slice(1, -1);
    let temppos = teamObj['"Pos"'].slice(1, -1);

    if (
      (passedInTeam.teamABV === tempTeamName &&
        temppos === 'QB' &&
        passedInTeam.name === tempPlayerName) ||
      (passedInTeam.altTeamABV === tempTeamName &&
        temppos === 'QB' &&
        passedInTeam.name === tempPlayerName)
    ) {
      // console.log(teamObj);
      // console.log(teamObj['"Pos"']);
      fdOwnership = +teamObj['"Projected Own%"'].slice(1, 4);
      passedInTeam.fanduelProjectedOwnership = fdOwnership;
    }
  });
  // draftkingsProjectedOwnership: 0,
  //   fanduelProjectedOwnership: 0,

  let sortedtempPassCatchersProjPoints = tempPassCatchersProjPoints.sort(
    (a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
    }
  );

  // console.log(sortedtempPassCatchersProjPoints);
  // console.log(`${passedInTeam.teamABV}: ${sortedtempPassCatchersProjPoints}`);
  passedInTeam.secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints =
    sortedtempPassCatchersProjPoints[1];
};

populateTeamObjects(qbrawdata.SF49ers);
populateTeamObjects(qbrawdata.bears);
populateTeamObjects(qbrawdata.bengals);
populateTeamObjects(qbrawdata.bills);
populateTeamObjects(qbrawdata.broncos);
populateTeamObjects(qbrawdata.browns);
populateTeamObjects(qbrawdata.buccaneers);
populateTeamObjects(qbrawdata.cardinals);
populateTeamObjects(qbrawdata.chargers);
populateTeamObjects(qbrawdata.chiefs);
populateTeamObjects(qbrawdata.colts);
populateTeamObjects(qbrawdata.commanders);
populateTeamObjects(qbrawdata.cowboys);
populateTeamObjects(qbrawdata.dolphins);
populateTeamObjects(qbrawdata.eagles);
populateTeamObjects(qbrawdata.falcons);
populateTeamObjects(qbrawdata.giants);
populateTeamObjects(qbrawdata.jaguars);
populateTeamObjects(qbrawdata.jets);
populateTeamObjects(qbrawdata.lions);
populateTeamObjects(qbrawdata.packers);
populateTeamObjects(qbrawdata.panthers);
populateTeamObjects(qbrawdata.patriots);
populateTeamObjects(qbrawdata.raiders);
populateTeamObjects(qbrawdata.rams);
populateTeamObjects(qbrawdata.ravens);
populateTeamObjects(qbrawdata.saints);
populateTeamObjects(qbrawdata.seahawks);
populateTeamObjects(qbrawdata.steelers);
populateTeamObjects(qbrawdata.texans);
populateTeamObjects(qbrawdata.titans);
populateTeamObjects(qbrawdata.vikings);

// console.log(qbrawdata);

module.exports = qbrawdata;
