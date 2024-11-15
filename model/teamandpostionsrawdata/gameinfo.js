const wholeDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholeDownloadableSpreadSheetYahoo');
const qbDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/qbDownloadableSpreadSheetYahoo');

const gppLeverageScoresAndProjOwnershipDraftkings = require('../datafilesmadefrom4for4CSVs/draftkings/gppLeverageScoresAndProjOwnershipDraftkings');
const gppLeverageScoresAndProjOwnershipFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/gppLeverageScoresAndProjOwnershipFanduel');
const allNFLTeamPace = require('../datafilesmadefrom4for4CSVs/allNFLTeamPace');
const allFullPPRProjectedPointsWithoutTeamDef = require('../datafilesmadefrom4for4CSVs/allFullPPRProjectedPointsWithoutTeamDef');
const allQBGLSP = require('../datafilesmadefrom4for4CSVs/allQBGLSP');

const allFlexGLSP = require('../datafilesmadefrom4for4CSVs/allFlexGLSP');
// const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const rotovizNeutralScriptOffensivePaceAndRunPassReportLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/RotovizNeutralOffensivePaceAndRunPassReport');
const rotovizNegativeScriptOffensivePaceAndRunPassReportLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rotovizNegetiveOffensivePaceAndRunPassReport');
const rotovizPositiveScriptOffensivePaceAndRunPassReportLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/rotovizPositiveOffensivePaceAndRunPassReport');
const teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer = require('../datafilesmadefrom4for4CSVs/teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer');

const teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer = require('../datafilesmadefrom4for4CSVs/teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer');

const team4for4TeamStatExplorerTeamPointsScoredPerWeekLastFiveWeeks = require('../datafilesmadefrom4for4CSVs/team4For4TeamStatExplorerTeamPointsScoredPerWeekLastFiveWeeks');

const gameInfo = {
  week: {
    currentWeek: 0,
    lastFiveWeeksRange: [],
  },

  SF49ers: {
    teamName: '49ers',
    teamABV: 'SF',
    byeWeek2022: 9,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 26.5,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,
    //below ownership projections here are for team def
    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  bears: {
    teamName: 'Bears',
    teamABV: 'CHI',
    byeWeek2022: 7,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 19.2,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  bengals: {
    teamName: 'Bengals',
    teamABV: 'CIN',
    byeWeek2022: 12,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 26.1,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  bills: {
    teamName: 'Bills',
    teamABV: 'BUF',
    byeWeek2022: 12,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 28.4,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  broncos: {
    teamName: 'Broncos',
    teamABV: 'DEN',
    byeWeek2022: 14,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 16.9,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  browns: {
    teamName: 'Browns',
    teamABV: 'CLE',
    byeWeek2022: 10,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 21.2,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  buccaneers: {
    teamName: 'Buccaneers',
    teamABV: 'TB',
    byeWeek2022: 11,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 18.4,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  cardinals: {
    teamName: 'Cardinals',
    teamABV: 'ARI',
    byeWeek2022: 11,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 20,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  chargers: {
    teamName: 'Chargers',
    teamABV: 'LAC',
    byeWeek2022: 5,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 23,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  chiefs: {
    teamName: 'Chiefs',
    teamABV: 'KC',
    byeWeek2022: 6,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 29.2,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  colts: {
    teamName: 'Colts',
    teamABV: 'IND',
    byeWeek2022: 14,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 17,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  commanders: {
    teamName: 'Commanders',
    teamABV: 'WAS',
    byeWeek2022: 14,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 18.9,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  cowboys: {
    teamName: 'Cowboys',
    teamABV: 'DAL',
    byeWeek2022: 7,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 27.5,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  dolphins: {
    teamName: 'Dolphins',
    teamABV: 'MIA',
    byeWeek2022: 6,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 23.4,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  eagles: {
    teamName: 'Eagles',
    teamABV: 'PHI',
    byeWeek2022: 5,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 28.1,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  falcons: {
    teamName: 'Falcons',
    teamABV: 'ATL',
    byeWeek2022: 12,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 21.5,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  giants: {
    teamName: 'Giants',
    teamABV: 'NYG',
    byeWeek2022: 11,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 21.5,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  jaguars: {
    teamName: 'Jaguars',
    teamABV: 'JAX',
    altTeamABV: 'JAC',
    byeWeek2022: 12,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 23.8,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  jets: {
    teamName: 'Jets',
    teamABV: 'NYJ',
    byeWeek2022: 12,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 17.4,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  lions: {
    teamName: 'Lions',
    teamABV: 'DET',
    byeWeek2022: 5,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 26.6,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  packers: {
    teamName: 'Packers',
    teamABV: 'GB',
    byeWeek2022: 10,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 21.8,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  panthers: {
    teamName: 'Panthers',
    teamABV: 'CAR',
    byeWeek2022: 11,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 20.4,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  patriots: {
    teamName: 'Patriots',
    teamABV: 'NE',
    byeWeek2022: 14,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 21.4,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  raiders: {
    teamName: 'Raiders',
    teamABV: 'LV',
    byeWeek2022: 10,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 23.2,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  rams: {
    teamName: 'Rams',
    teamABV: 'LAR',
    altTeamABV: 'LA',
    byeWeek2022: 6,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 18.1,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  ravens: {
    teamName: 'Ravens',
    teamABV: 'BAL',
    byeWeek2022: 14,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 20.6,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  saints: {
    teamName: 'Saints',
    teamABV: 'NO',
    byeWeek2022: 12,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 19.4,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  seahawks: {
    teamName: 'Seahawks',
    teamABV: 'SEA',
    byeWeek2022: 10,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 23.9,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  steelers: {
    teamName: 'Steelers',
    teamABV: 'PIT',
    byeWeek2022: 9,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 18.1,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  texans: {
    teamName: 'Texans',
    teamABV: 'HOU',
    byeWeek2022: 14,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 17,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  titans: {
    teamName: 'Titans',
    teamABV: 'TEN',
    byeWeek2022: 5,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 17.5,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,

    // opponentThisWeek: {},
  },

  vikings: {
    teamName: 'Vikings',
    teamABV: 'MIN',
    byeWeek2022: 6,
    vtt: 0,
    opponentvtt: 0,
    gameTotalVegasTotal: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

    ///////////////////////////////////////////////////////////////////////
    //////// Need to automate this below before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    teamPointsPerGameLastFiveWeeks: 24.9,
    //////// Need to automate this above before 2023 season!!!!!!!!!!!!!!!!!!!!!///////////////////////
    ////////////////////////////////////////////////////////////////////////////

    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 0,
    teamDefFanduelSalary: 0,
    teamDefYahooSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },
}; //closing gameInfo object tag

allFullPPRProjectedPointsWithoutTeamDef.forEach(function (team, i) {
  if (i < 2) {
    gameInfo.week.currentWeek = +team.Week;
  }
});

gameInfo.week.lastFiveWeeksRange.push(gameInfo.week.currentWeek - 5);
gameInfo.week.lastFiveWeeksRange.push(gameInfo.week.currentWeek - 1);
// console.log(gameInfo.week.lastFiveWeeksRange);

const populateTeamObjects = function (passedInTeam) {
  ///////////////////////////////
  if (
    passedInTeam.byeWeek2022 >= gameInfo.week.lastFiveWeeksRange[0] &&
    passedInTeam.byeWeek2022 <= gameInfo.week.lastFiveWeeksRange[1]
  ) {
    passedInTeam.hadByeInTheLastFiveweeks = true;
  } else {
    passedInTeam.hadByeInTheLastFiveweeks = false;
  }

  // console.log(passedInTeam.teamName);

  team4for4TeamStatExplorerTeamPointsScoredPerWeekLastFiveWeeks.forEach(
    team => {
      // console.log(team['"posteam"'])
      // console.log(passedInTeam.teamABV)

      if (team['"Team"'].slice(1, -1) === passedInTeam.teamABV) {
        // console.log(team)
        let tempOne = +team['"Points/Game"'];
        // console.log(team, tempOne)
        passedInTeam.teamPointsPerGameLastFiveWeeks = tempOne;
      }
    }
  );
  ////////////////////////////
  const setteamABVandVTT = function (team) {
    let settingTeamName = '';
    // console.log(passedInteam);
    wholeDownloadableSpreadSheetYahoo.forEach(function (object, i) {
      if (i < qbDownloadableSpreadSheetYahoo.length) {
        settingTeamName = qbDownloadableSpreadSheetYahoo[i].Team;
        // console.log(settingTeamName, passedInTeam.teamABV);
        if (
          passedInTeam.teamABV === settingTeamName ||
          passedInTeam.altTeamABV === settingTeamName
        ) {
          // console.log(
          //   `${passedInTeam.teamABV}: ${qbDownloadableSpreadSheetYahoo[i]['Team O/U']}`
          // );
          // console.log(object);
          passedInTeam.vtt = qbDownloadableSpreadSheetYahoo[i]['Team O/U'];
          // console.log(
          //   `${passedInTeam.teamABV}: ${passedInTeam.vtt}`
          // );
        }
      }
      if (object.PID === passedInTeam.teamABV) {
        // console.log(+object['Y! ($)']);
        let yahooSalary = +object['Y! ($)'];
        passedInTeam.teamDefYahooSalary = yahooSalary;
        let rawPercentOfCap = yahooSalary / 200;
        let percentOfCap = (rawPercentOfCap * 100).toFixed(1);
        passedInTeam.percentOfSalaryCapYahoo = percentOfCap;
        let projpoints = +object['Y! (Proj)'];

        // console.log(`${passedInTeam.teamABV}: ${projpoints}`);
        passedInTeam.def4for4projectedpoints = projpoints;
      }
    });
  };
  setteamABVandVTT(passedInTeam);
  ////////////////////////////////////////
  const setTeamDefYahooSalaryPercentOfYahooCap4For4ProjectedDefPoints =
    function (team) {
      wholeDownloadableSpreadSheetYahoo.forEach(function (object, i) {
        if (object.PID === passedInTeam.teamABV) {
          // console.log(+object['Y! ($)']);
          let yahooSalary = +object['Y! ($)'];
          passedInTeam.teamDefYahooSalary = yahooSalary;
          let rawPercentOfCap = yahooSalary / 200;
          let percentOfCap = (rawPercentOfCap * 100).toFixed(1);
          passedInTeam.percentOfSalaryCapYahoo = +percentOfCap;
          let projpoints = +object['Y! (Proj)'];

          // console.log(`${passedInTeam.teamABV}: ${projpoints}`);
          passedInTeam.def4for4projectedpoints = projpoints;
        }
      });
    };

  setTeamDefYahooSalaryPercentOfYahooCap4For4ProjectedDefPoints(passedInTeam);

  //////////////////////////
  const setDraftKingsSalaryPercentOfCapAndProjectedOwnership = function (team) {

    wholeDownloadableSpreadSheetYahoo.forEach(function (yahooTeam, i) {
      // console.log(yahooTeam.Team);
      if(passedInTeam.teamABV === yahooTeam.Team){
        // console.log(passedInTeam.teamABV, yahooTeam.Team);
        // console.log(yahooTeam)

        
          
          if (yahooTeam.Opp.includes('@')) {
            // console.log(yahooTeam.Opp.slice(2, -1));
            // console.log(yahooTeam.Opp.slice(1))
            let tempOppABV = yahooTeam.Opp.slice(1);
            passedInTeam.opponentABV = tempOppABV;
          } else {
            // console.log(yahooTeam.Opp);
            let tempOppABV = yahooTeam.Opp;
            passedInTeam.opponentABV = tempOppABV;
          }
        // console.log(yahooTeam.Team, passedInTeam.opponentABV)
      }
    })

    gppLeverageScoresAndProjOwnershipDraftkings.forEach(function (teamObj) {
      let tempTeamName = '';
      // console.log(teamObj['"Tm"'].length);
      if (teamObj['"Tm"'].length === 5) {
        tempTeamName = teamObj['"Tm"'].slice(1, 4);
      } else {
        tempTeamName = teamObj['"Tm"'].slice(1, 3);
      }
      // console.log(teamObj['"Tm"'], passedInTeam.teamABV);
     

      if (
        tempTeamName === passedInTeam.teamABV &&
        teamObj['"Pos"'] === '"DEF"'
      ) {
        draftkingssalary = +teamObj['"DK Sal $"'].slice(1, 5);

        passedInTeam.teamDefDraftkingsSalary = draftkingssalary;

        let rawdkPercentOfCap = draftkingssalary / 50000;
        let dkPercentOfCap = (rawdkPercentOfCap * 100).toFixed(1);
        passedInTeam.percentOfSalaryCapDraftkings = +dkPercentOfCap;
        dkOwnership = +teamObj['"Projected Own%"'].slice(1, 4);
        passedInTeam.draftkingsProjectedOwnership = dkOwnership;
      }
    });
  };
  setDraftKingsSalaryPercentOfCapAndProjectedOwnership(passedInTeam);
  ///////////////////////
  const setFanduelSalaryPercentOfCapAndProjectedOwnership = function (team) {
    gppLeverageScoresAndProjOwnershipFanduel.forEach(function (teamObj) {
      let tempTeamName = '';
      // console.log(teamObj['"Tm"'].length);
      if (teamObj['"Tm"'].length === 5) {
        tempTeamName = teamObj['"Tm"'].slice(1, 4);
      } else {
        tempTeamName = teamObj['"Tm"'].slice(1, 3);
      }

      if (
        tempTeamName === passedInTeam.teamABV &&
        teamObj['"Pos"'] === '"DEF"'
      ) {
        fanduelsalary = +teamObj['"FD Sal $"'].slice(1, 5);

        passedInTeam.teamDefFanduelSalary = fanduelsalary;

        let rawfdPercentOfCap = fanduelsalary / 60000;
        let fdPercentOfCap = (rawfdPercentOfCap * 100).toFixed(1);

        passedInTeam.percentOfSalaryCapFanduel = +fdPercentOfCap;

        fdOwnership = +teamObj['"Projected Own%"'].slice(1, 4);
        passedInTeam.fanduelProjectedOwnership = fdOwnership;
      }
    });
  };
  setFanduelSalaryPercentOfCapAndProjectedOwnership(passedInTeam);
  //////////////////

  //////////////////////////////////////////
  passedInTeam.slate = 'main';
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
      // passedInTeam.opponentABV = tempAwayTeamName;
      passedInTeam.homeOrAway = 'Home';

      let temphomeNeutralPlaysPerGame = teamObj['"Plays_ALL_nt_h"'];
      let temphomeNonNeutralPlaysPerGame = teamObj['"Plays_ALL_h"'];
      let homeNeutralPlaysPerGame = +temphomeNeutralPlaysPerGame.slice(0, 3);
      let homeNonNeutralPlaysPerGame = +temphomeNonNeutralPlaysPerGame.slice(
        0,
        3
      );
      // console.log(homeNeutralPlaysPerGame);
      passedInTeam.teamPlaysPerSixtyMinNeutralSituations =
        homeNeutralPlaysPerGame;
      passedInTeam.teamPlaysPerSixtyMinAllSituations =
        homeNonNeutralPlaysPerGame;

      let gameTime = teamObj['"Time"'].slice(5, 9);
      let gameDay = teamObj['"Time"'].slice(1, 4);
      let gameTimeABV = +gameTime.slice(0, 1);
      // console.log(`${passedInTeam.teamName}: ${teamObj['"Time"']}`);
      // console.log(`${gameTimeABV}: ${passedInTeam.teamName}`);
      // console.log(teamObj);
      passedInTeam.slate = 'main';
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
      // passedInTeam.opponentABV = tempHomeTeamName;
      passedInTeam.homeOrAway = 'Away';

      let tempawayNeutralPlaysPerGame = teamObj['"Plays_ALL_nt_v"'];
      let tempawayNonNeutralPlaysPerGame = teamObj['"Plays_ALL_v"'];
      let awayNeutralPlaysPerGame = +tempawayNonNeutralPlaysPerGame.slice(0, 3);
      let awayNonNeutralPlaysPerGame = +tempawayNonNeutralPlaysPerGame.slice(
        0,
        3
      );
      passedInTeam.teamPlaysPerSixtyMinNeutralSituations =
        awayNeutralPlaysPerGame;
      passedInTeam.teamPlaysPerSixtyMinAllSituations =
        awayNonNeutralPlaysPerGame;

      let gameTime = teamObj['"Time"'].slice(5, 9);
      let gameDay = teamObj['"Time"'].slice(1, 4);
      let gameTimeABV = +gameTime.slice(0, 1);
      // console.log(`${passedInTeam.teamName}: ${teamObj['"Time"']}`);
      // console.log(`${gameTimeABV}: ${passedInTeam.teamName}`);
      passedInTeam.slate = 'main';
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
  passedInTeam.RBTwoThisWeek4for4HalfProjPoints = 0;
  const setPlayerNamesAtPositionsToTheirTeams = function (PITeam) {
    wholeDownloadableSpreadSheetYahoo.forEach(function (team, i) {
      //setting QB's
      ////////////
      if (PITeam.teamABV === team.Team) {
        if (team.Pos === 'QB') {
          if (!passedInTeam.QBOneThisWeekName) {
            passedInTeam.QBOneThisWeekName = team.Player;
            passedInTeam.QBOneThisWeek4for4HalfProjPoints = team['Y! (Proj)'];
          }
          if (
            passedInTeam.QBOneThisWeekName &&
            passedInTeam.QBOneThisWeekName !== team.Player &&
            !passedInTeam.QBTwoThisWeekName
          ) {
            passedInTeam.QBTwoThisWeekName = team.Player;
            passedInTeam.QBTwoThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
        }
      }

      //setting RB's
      ///////////////

      if (PITeam.teamABV === team.Team) {
        if (team.Pos === 'RB') {
          let temprbName = team.Player.replace('.', '');
          let rbName = temprbName.replace('.', '');

          if (rbName.slice(4) === 'Walker') {
            rbName = 'Kenneth Walker';
          }

          if (!passedInTeam.RBOneThisWeekName) {
            passedInTeam.RBOneThisWeekName = rbName;
            passedInTeam.RBOneThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
          if (
            passedInTeam.RBOneThisWeekName &&
            passedInTeam.RBOneThisWeekName !== rbName &&
            team['Y! (Proj)'] > passedInTeam.RBTwoThisWeek4for4HalfProjPoints
          ) {
            // console.log(team.Player);
            passedInTeam.RBTwoThisWeekName = rbName;
            passedInTeam.RBTwoThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
          if (!passedInTeam.RBTwoThisWeekName) {
            passedInTeam.RBTwoThisWeekName = 'no second RB';
            passedInTeam.RBTwoThisWeek4for4HalfProjPoints = 0;
          }

          if (
            passedInTeam.RBOneThisWeekName &&
            passedInTeam.RBOneThisWeekName !== rbName &&
            passedInTeam.RBTwoThisWeekName &&
            passedInTeam.RBTwoThisWeekName !== rbName
          ) {
            passedInTeam.RBThreeThisWeekName = rbName;
            passedInTeam.RBThreeThisWeek4for4HalfProjPoints =
              +team['Y! (Proj)'];
          }

          // console.log(team.Team, passedInTeam.RBOneThisWeekName, passedInTeam.RBTwoThisWeekName, passedInTeam.RBThreeThisWeekName)
        }
      }

      //setting WR's
      ///////////////

      if (PITeam.teamABV === team.Team) {
        // console.log(PITeam.teamABV)
        if (team.Pos === 'WR') {
          if (!passedInTeam.WROneThisWeekName) {
            passedInTeam.WROneThisWeekName = team.Player;
            passedInTeam.WROneThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
          if (
            passedInTeam.WROneThisWeekName &&
            passedInTeam.WROneThisWeekName !== team.Player &&
            !passedInTeam.WRTwoThisWeekName
          ) {
            passedInTeam.WRTwoThisWeekName = team.Player;
            passedInTeam.WRTwoThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
          if (
            passedInTeam.WROneThisWeekName &&
            passedInTeam.WRTwoThisWeekName &&
            passedInTeam.WROneThisWeekName !== team.Player &&
            passedInTeam.WRTwoThisWeekName !== team.Player &&
            !passedInTeam.WRThreeThisWeekName
          ) {
            passedInTeam.WRThreeThisWeekName = team.Player;
            passedInTeam.WRThreeThisWeek4for4HalfProjPoints =
              +team['Y! (Proj)'];
            // console.log(passedInTeam.WRThreeThisWeekName)
          }
          if (
            passedInTeam.WROneThisWeekName &&
            passedInTeam.WRTwoThisWeekName &&
            passedInTeam.WRThreeThisWeekName &&
            passedInTeam.WROneThisWeekName !== team.Player &&
            passedInTeam.WRTwoThisWeekName !== team.Player &&
            passedInTeam.WRThreeThisWeekName !== team.Player &&
            !passedInTeam.WRFourThisWeekName
          ) {
            // console.log(team.Player)
            // passedInTeam.WRFourThisWeekName = team.Player;
            // passedInTeam.WRFourThisWeek4for4HalfProjPoints =
            //   +team['Y! (Proj)'];
          }
        }
      }

      //setting TE's
      if (PITeam.teamABV === team.Team) {
        if (team.Pos === 'TE') {
          if (!passedInTeam.TEOneThisWeekName) {
            passedInTeam.TEOneThisWeekName = team.Player;
            passedInTeam.TEOneThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
          if (
            passedInTeam.TEOneThisWeekName &&
            passedInTeam.TEOneThisWeekName !== team.Player &&
            !passedInTeam.TETwoThisWeekName
          ) {
            passedInTeam.TETwoThisWeekName = team.Player;
            passedInTeam.TETwoThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
        }
      }
    });

    const calcInitialTeamLikelihoodOfOffensiveSuccess = function (PITeam) {
      if (passedInTeam.QBOneThisWeek4for4HalfProjPoints) {
        qb = +(passedInTeam.QBOneThisWeek4for4HalfProjPoints * 2).toFixed(2);
        rbOne = +passedInTeam.RBOneThisWeek4for4HalfProjPoints.toFixed(2);
        rbTwo = +passedInTeam.RBTwoThisWeek4for4HalfProjPoints.toFixed(2);
        wrOne = +passedInTeam.WROneThisWeek4for4HalfProjPoints.toFixed(2);
        wrTwo = +passedInTeam.WRTwoThisWeek4for4HalfProjPoints.toFixed(2);
        if (passedInTeam.WRThreeThisWeek4for4HalfProjPoints) {
          wrThree = +passedInTeam.WRThreeThisWeek4for4HalfProjPoints.toFixed(2);
        } else {
          wrThree = 0;
        }
        te = +passedInTeam.TEOneThisWeek4for4HalfProjPoints.toFixed(2);

        passedInTeam.tempInitialTeamLikelihoodOfOffensiveSuccess = +(
          qb +
          rbOne +
          rbTwo +
          wrOne +
          wrTwo +
          wrThree +
          te
        ).toFixed(3);
        // console.log(
        //   passedInTeam.teamName,
        //   passedInTeam.InitialTeamLikelihoodOfOffensiveSuccess
        // );
      }
    };
    calcInitialTeamLikelihoodOfOffensiveSuccess(passedInTeam);
  };
  setPlayerNamesAtPositionsToTheirTeams(passedInTeam);

  const setTeamPassRunRatioForAllGameScripts = function (PITeam) {
    rotovizNeutralScriptOffensivePaceAndRunPassReportLastFiveWeeks.forEach(
      function (team) {
        if (team['"Team"'].length === 5) {
          tempTeamName = team['"Team"'].slice(1, 4);
        } else {
          tempTeamName = team['"Team"'].slice(1, 3);
        }
        if (
          tempTeamName === passedInTeam.teamABV ||
          tempTeamName === passedInTeam.altTeamABV
        ) {
          passedInTeam.neutralGameScriptSecondsPerSnap = team['"Sec/Snap"'];
          passedInTeam.neutralScriptPassPercentage = +team['"Pass%"'].slice(
            1,
            -2
          );
          passedInTeam.neutralScriptRunPercentage = +team['"Rush%"'].slice(
            1,
            -2
          );
          // console.log(team['"Pass%"']);
        }
      }
    );

    rotovizNegativeScriptOffensivePaceAndRunPassReportLastFiveWeeks.forEach(
      function (team) {
        if (team['"Team"'].length === 5) {
          tempTeamName = team['"Team"'].slice(1, 4);
        } else {
          tempTeamName = team['"Team"'].slice(1, 3);
        }

        if (
          tempTeamName === passedInTeam.teamABV ||
          tempTeamName === passedInTeam.altTeamABV
        ) {
          // console.log(team['"Plays"']);
          // console
          //   .log
          // `${team['"Team"']}: ${team['"Rush%"']} ${team['"Pass%"']}`
          // ();

          if (team['"Plays"'] > 20) {
            passedInTeam.negativeGameScriptSecondsPerSnap = team['"Sec/Snap"'];
            passedInTeam.negativeScriptPassPercentage = +team['"Pass%"'].slice(
              1,
              -2
            );
            passedInTeam.negativeScriptRunPercentage = +team['"Rush%"'].slice(
              1,
              -2
            );
            passedInTeam.negativeScriptPlaysRanLastFiveWeeks = +team['"Plays"'];
          } else {
            passedInTeam.negativeScriptPassPercentage =
              passedInTeam.neutralScriptPassPercentage;
            passedInTeam.negativeScriptRunPercentage =
              passedInTeam.neutralScriptRunPercentage;
            passedInTeam.negativeScriptPlaysRanLastFiveWeeks = +team['"Plays"'];
          }
        }
      }
    );

    if (!passedInTeam.negativeScriptPassPercentage) {
      passedInTeam.negativeScriptPassPercentage =
        passedInTeam.neutralScriptPassPercentage;
      passedInTeam.negativeScriptRunPercentage =
        passedInTeam.neutralScriptRunPercentage;
    }

    rotovizPositiveScriptOffensivePaceAndRunPassReportLastFiveWeeks.forEach(
      function (team) {
        if (team['"Team"'].length === 5) {
          tempTeamName = team['"Team"'].slice(1, 4);
        } else {
          tempTeamName = team['"Team"'].slice(1, 3);
        }

        if (tempTeamName === passedInTeam.teamABV) {
          // console.log(team['"Plays"']);
          // console
          //   .log
          // `${team['"Team"']}: ${team['"Rush%"']} ${team['"Pass%"']}`
          // ();

          if (team['"Plays"'] > 20) {
            // console.log(team['"Sec/Snap"']);
            passedInTeam.positiveGameScriptSecondsPerSnap = team['"Sec/Snap"'];
            passedInTeam.positiveScriptPassPercentage = +team['"Pass%"'].slice(
              1,
              -2
            );
            passedInTeam.positiveScriptRunPercentage = +team['"Rush%"'].slice(
              1,
              -2
            );
            passedInTeam.positiveScriptPlaysRanLastFiveWeeks = +team['"Plays"'];
          } else {
            passedInTeam.positiveScriptPassPercentage =
              passedInTeam.neutralScriptPassPercentage;
            passedInTeam.positiveScriptRunPercentage =
              passedInTeam.neutralScriptRunPercentage;
            passedInTeam.positiveScriptPlaysRanLastFiveWeeks = +team['"Plays"'];
          }
        }
      }
    );

    //
    ////
    /////
    ////
    //

    // teamDefStatsSortedForPointsAllowedRank

    //  console.log(teamDefStatsSortedForPointsAllowedRank)

    let teamDefStatsSortedForPointsAllowedRank =
      teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Points/Game"'] < +b['"Points/Game"']) {
          return -1;
        }
        if (+a['"Points/Game"'] > +b['"Points/Game"']) {
          return 1;
        }
        return 0;
      });

    for (let i = 0; i < teamDefStatsSortedForPointsAllowedRank.length; i++) {
      const team = teamDefStatsSortedForPointsAllowedRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.defPointsPerGameAllowedRank = i + 1;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.defPointsPerGameAllowedRank);

    //
    ////
    /////
    ////
    ///

    //
    // teamDefStatsSortedForEPAPerPlayRank

    // console.log(teamDefStatsSortedForEPAPerPlayRank)

    let teamDefStatsSortedForEPAPerPlayRank =
      teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"EPA/Play"'] < +b['"EPA/Play"']) {
          return -1;
        }
        if (+a['"EPA/Play"'] > +b['"EPA/Play"']) {
          return 1;
        }
        return 0;
      });

    for (let i = 0; i < teamDefStatsSortedForPointsAllowedRank.length; i++) {
      const team = teamDefStatsSortedForPointsAllowedRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.defEPAPerPlayRank = i + 1;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.defEPAPerPlayRank);

    //
    ////
    //////
    ////
    //

    //
    // teamDefStatsSortedForRushEPAPerPlayRank

    // console.log(teamDefStatsSortedForRushEPAPerPlayRank)

    let newTeamDefStatsSortedForRushEPAPerPlayRank =
      teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Rush EPA/Play"'] < +b['"Rush EPA/Play"']) {
          return -1;
        }
        if (+a['"Rush EPA/Play"'] > +b['"Rush EPA/Play"']) {
          return 1;
        }
        return 0;
      });

    for (
      let i = 0;
      i < newTeamDefStatsSortedForRushEPAPerPlayRank.length;
      i++
    ) {
      const team = newTeamDefStatsSortedForRushEPAPerPlayRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.defEPAAgainstTheRun = i + 1;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.defEPAAgainstTheRun);

    //
    // teamDefStatsSortedForPlaySuccessRateRank

    // console.log(teamDefStatsSortedForPlaySuccessRateRank)

    let teamDefStatsSortedForSuccessRateRank =
      teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Play Success %"'] < +b['"Play Success %"']) {
          return -1;
        }
        if (+a['"Play Success %"'] > +b['"Play Success %"']) {
          return 1;
        }
        return 0;
      });

    for (let i = 0; i < teamDefStatsSortedForSuccessRateRank.length; i++) {
      const team = teamDefStatsSortedForSuccessRateRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.defPlaySuccessRatePercentageAgainstRank = i + 1;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.defPlaySuccessRatePercentageAgainstRank);

    //
    ////
    /////
    ////
    //

    //
    // teamDefStatsSortedForExplosivePassRateRank

    let teamDefStatsSortedForExplosivePassRateRank =
      teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Explosive Pass %"'] < +b['"Explosive Pass %"']) {
          return -1;
        }
        if (+a['"Explosive Pass %"'] > +b['"Explosive Pass %"']) {
          return 1;
        }
        return 0;
      });

    for (
      let i = 0;
      i < teamDefStatsSortedForExplosivePassRateRank.length;
      i++
    ) {
      const team = teamDefStatsSortedForExplosivePassRateRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.defExplosivePassPercentageAgainstRank = i + 1;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.defExplosivePassPercentageAgainstRank);

    //
    ////
    //////
    ////
    //

    //
    // teamDefStatsSortedForExplosiveRushRateRank

    let teamDefStatsSortedForExplosiveRushRateRank =
      teamDefStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Explosive Rush %"'] < +b['"Explosive Rush %"']) {
          return -1;
        }
        if (+a['"Explosive Rush %"'] > +b['"Explosive Rush %"']) {
          return 1;
        }
        return 0;
      });

    for (
      let i = 0;
      i < teamDefStatsSortedForExplosiveRushRateRank.length;
      i++
    ) {
      const team = teamDefStatsSortedForExplosiveRushRateRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.defExplosiveRushPercentageAgainstRank = i + 1;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.defExplosiveRushPercentageAgainstRank);

    let teamDefScoreForGameEvironmentAndGameScript = 0;

    const calcteamDefScoreForGameEvironmentAndGameScript = function (statRank) {
      if (statRank < 6) {
        teamDefScoreForGameEvironmentAndGameScript += 20;
      }
      if (statRank > 5 && statRank < 11) {
        teamDefScoreForGameEvironmentAndGameScript += 15;
      }
      if (statRank > 10 && statRank < 16) {
        teamDefScoreForGameEvironmentAndGameScript += 10;
      }
      if (statRank > 15 && statRank < 20) {
        teamDefScoreForGameEvironmentAndGameScript += 5;
      }
    };

    // console.log(passedInTeam.defPointsPerGameAllowedRank)

    calcteamDefScoreForGameEvironmentAndGameScript(
      passedInTeam.defEPAPerPlayRank
    );
    calcteamDefScoreForGameEvironmentAndGameScript(
      passedInTeam.defPointsPerGameAllowedRank
    );
    calcteamDefScoreForGameEvironmentAndGameScript(
      passedInTeam.defPlaySuccessRatePercentageAgainstRank
    );
    calcteamDefScoreForGameEvironmentAndGameScript(
      passedInTeam.defExplosivePassPercentageAgainstRank
    );
    // console.log(
    //   `${passedInTeam.teamABV} ${teamDefScoreForGameEvironmentAndGameScript}`
    // );
    passedInTeam.teamDefScoreForGameEvironmentAndGameScript =
      +teamDefScoreForGameEvironmentAndGameScript;

    let adjustmentFactorForOpposingDef = 0;
    let tempopposingTeamDef = 0;

    if (passedInTeam.teamDefScoreForGameEvironmentAndGameScript > 69) {
      passedInTeam.teamDefScoreToUseForOpposingTeamDef = -50;
    }
    if (
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript > 59 &&
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript < 70
    ) {
      passedInTeam.teamDefScoreToUseForOpposingTeamDef = -25;
    }
    if (
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript > 49 &&
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript < 60
    ) {
      passedInTeam.teamDefScoreToUseForOpposingTeamDef = -10;
    }
    if (
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript > 29 &&
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript < 50
    ) {
      passedInTeam.teamDefScoreToUseForOpposingTeamDef = 0;
    }

    if (
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript > 19 &&
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript < 30
    ) {
      passedInTeam.teamDefScoreToUseForOpposingTeamDef = 10;
    }
    if (
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript > 9 &&
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript < 20
    ) {
      passedInTeam.teamDefScoreToUseForOpposingTeamDef = 25;
    }
    if (
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript >= 0 &&
      passedInTeam.teamDefScoreForGameEvironmentAndGameScript < 10
    ) {
      // console.log(team.teamABV);
      passedInTeam.teamDefScoreToUseForOpposingTeamDef = 50;
    }

    //
    ////
    /////
    ///////
    //////// for offense below
    //////
    ////
    ///
    //

    //
    ////
    /////
    ////
    //

    // teamOffStatsSortedForPointsAllowedRank

    //  console.log(teamOffStatsSortedForPointsAllowedRank)

    let teamOffStatsSortedForPointsAllowedRank =
      teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Points/Game"'] < +b['"Points/Game"']) {
          return -1;
        }
        if (+a['"Points/Game"'] > +b['"Points/Game"']) {
          return 1;
        }
        return 0;
      });

    for (let i = 0; i < teamOffStatsSortedForPointsAllowedRank.length; i++) {
      const team = teamOffStatsSortedForPointsAllowedRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.offPointsPerGame = 32 - i;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.offPointsPerGame);

    //
    ////
    /////
    ////
    ///

    //
    // teamOffStatsSortedForEPAPerPlayRank

    // console.log(teamOffStatsSortedForEPAPerPlayRank)

    let teamOffStatsSortedForEPAPerPlayRank =
      teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"EPA/Play"'] < +b['"EPA/Play"']) {
          return -1;
        }
        if (+a['"EPA/Play"'] > +b['"EPA/Play"']) {
          return 1;
        }
        return 0;
      });

    for (let i = 0; i < teamOffStatsSortedForPointsAllowedRank.length; i++) {
      const team = teamOffStatsSortedForPointsAllowedRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.offTotalEPAPerPlay = 32 - i;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.offTotalEPAPerPlay);

    //
    ////
    //////
    ////
    //

    //
    // teamOffStatsSortedForRushEPAPerPlayRank

    // console.log(teamOffStatsSortedForRushEPAPerPlayRank)

    let newTeamOffStatsSortedForRushEPAPerPlayRank =
      teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Rush EPA/Play"'] < +b['"Rush EPA/Play"']) {
          return -1;
        }
        if (+a['"Rush EPA/Play"'] > +b['"Rush EPA/Play"']) {
          return 1;
        }
        return 0;
      });

    for (
      let i = 0;
      i < newTeamOffStatsSortedForRushEPAPerPlayRank.length;
      i++
    ) {
      const team = newTeamOffStatsSortedForRushEPAPerPlayRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.offRunPlayEPA = 32 - i;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.offRunPlayEPA);

    ////
    //////
    ////
    //

    //
    // teamOffStatsSortedForRushEPAPerPlayRank

    // console.log(teamOffStatsSortedForRushEPAPerPlayRank)

    let newTeamOffStatsSortedForPassEPAPerPlayRank =
      teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Pass EPA/Play"'])
        if (+a['"Pass EPA/Play"'] < +b['"Pass EPA/Play"']) {
          return -1;
        }
        if (+a['"Pass EPA/Play"'] > +b['"Pass EPA/Play"']) {
          return 1;
        }
        return 0;
      });

    for (
      let i = 0;
      i < newTeamOffStatsSortedForPassEPAPerPlayRank.length;
      i++
    ) {
      const team = newTeamOffStatsSortedForPassEPAPerPlayRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.offPassPlayEPA = 32 - i;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.offPassPlayEPA);

    //
    // teamOffStatsSortedForPlaySuccessRateRank

    // console.log(teamOffStatsSortedForPlaySuccessRateRank)

    let teamOffStatsSortedForSuccessRateRank =
      teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Play Success %"'] < +b['"Play Success %"']) {
          return -1;
        }
        if (+a['"Play Success %"'] > +b['"Play Success %"']) {
          return 1;
        }
        return 0;
      });

    for (let i = 0; i < teamOffStatsSortedForSuccessRateRank.length; i++) {
      const team = teamOffStatsSortedForSuccessRateRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.offPlaySuccessPercentageRank = 32 - i;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.offPlaySuccessPercentageRank);

    //
    ////
    /////
    ////
    //

    //
    // teamOffStatsSortedForExplosivePassRateRank

    let teamOffStatsSortedForExplosivePassRateRank =
      teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Explosive Pass %"'] < +b['"Explosive Pass %"']) {
          return -1;
        }
        if (+a['"Explosive Pass %"'] > +b['"Explosive Pass %"']) {
          return 1;
        }
        return 0;
      });

    for (
      let i = 0;
      i < teamOffStatsSortedForExplosivePassRateRank.length;
      i++
    ) {
      const team = teamOffStatsSortedForExplosivePassRateRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.offExplosivePassRateRank = 32 - i;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.offExplosivePassRateRank);

    //
    ////
    //////
    ////
    //

    //
    // teamOffStatsSortedForExplosiveRushRateRank

    let teamOffStatsSortedForExplosiveRushRateRank =
      teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.sort(function (
        a,
        b
      ) {
        // console.log(a['"Rush EPA/Play"'])
        if (+a['"Explosive Rush %"'] < +b['"Explosive Rush %"']) {
          return -1;
        }
        if (+a['"Explosive Rush %"'] > +b['"Explosive Rush %"']) {
          return 1;
        }
        return 0;
      });

    for (
      let i = 0;
      i < teamOffStatsSortedForExplosiveRushRateRank.length;
      i++
    ) {
      const team = teamOffStatsSortedForExplosiveRushRateRank[i];
      // console.log(team)

      const teamAbbreviation = team['"Team"'].slice(1, -1); // Assuming the team name is in the "Team" property

      if (
        passedInTeam.teamABV === teamAbbreviation ||
        passedInTeam.altTeamABV === teamAbbreviation
      ) {
        // console.log(team)

        passedInTeam.offExplosiveRushRateRank = 32 - i;
      }
    }

    // console.log(passedInTeam.teamABV, passedInTeam.offExplosiveRushRateRank);

    //
    //

    let teamOffScoreForGameEvironmentAndGameScript = 0;

    const calcteamOffScoreForGameEvironmentAndGameScript = function (statRank) {
      if (statRank < 6) {
        teamOffScoreForGameEvironmentAndGameScript += 20;
      }
      if (statRank > 5 && statRank < 11) {
        teamOffScoreForGameEvironmentAndGameScript += 15;
      }
      if (statRank > 10 && statRank < 16) {
        teamOffScoreForGameEvironmentAndGameScript += 10;
      }
      if (statRank > 15 && statRank < 20) {
        teamOffScoreForGameEvironmentAndGameScript += 5;
      }
    };

    calcteamOffScoreForGameEvironmentAndGameScript(
      passedInTeam.offTotalEPAPerPlay
    );
    calcteamOffScoreForGameEvironmentAndGameScript(
      passedInTeam.offPointsPerGame
    );
    calcteamOffScoreForGameEvironmentAndGameScript(
      passedInTeam.offPlaySuccessPercentageRank
    );
    calcteamOffScoreForGameEvironmentAndGameScript(
      passedInTeam.offExplosivePassRateRank
    );

    if (passedInTeam.QBOneThisWeek4for4HalfProjPoints > 19.9) {
      teamOffScoreForGameEvironmentAndGameScript += 35;
    }
    if (
      passedInTeam.QBOneThisWeek4for4HalfProjPoints > 17.5 &&
      passedInTeam.QBOneThisWeek4for4HalfProjPoints < 20
    ) {
      teamOffScoreForGameEvironmentAndGameScript += 25;
    }
    if (
      passedInTeam.QBOneThisWeek4for4HalfProjPoints > 15.9 &&
      passedInTeam.QBOneThisWeek4for4HalfProjPoints < 17.5
    ) {
      teamOffScoreForGameEvironmentAndGameScript += 15;
    }
    if (
      passedInTeam.QBOneThisWeek4for4HalfProjPoints > 14.9 &&
      passedInTeam.QBOneThisWeek4for4HalfProjPoints < 16
    ) {
      teamOffScoreForGameEvironmentAndGameScript += 5;
    }

    if (passedInTeam.tempInitialTeamLikelihoodOfOffensiveSuccess) {
      // console.log(passedInTeam.tempInitialTeamLikelihoodOfOffensiveSuccess);
      if (passedInTeam.tempInitialTeamLikelihoodOfOffensiveSuccess > 84.9) {
        teamOffScoreForGameEvironmentAndGameScript += 30;
      }
      passedInTeam.InitialTeamLikelihoodOfOffensiveSuccess =
        teamOffScoreForGameEvironmentAndGameScript;
      // console.log(
      //   `${passedInTeam.teamABV} ${teamOffScoreForGameEvironmentAndGameScript}`
      // );
    }

    // teamOffStatsByRankLastFiveWeeks4for4NFLTeamStatExplorer.forEach(function (
    //   team
    // ) {
    //   if (
    //     passedInTeam.teamABV === team['"posteam"'].slice(1, -1) ||
    //     passedInTeam.altTeamABV === team['"posteam"'].slice(1, -1)
    //   ) {
    //     //

    //     passedInTeam.offTotalEPAPerPlay = +team['"total_epa_pp"'];
    //     passedInTeam.offPassPlayEPA = +team['"pass_epa_pp"'];
    //     passedInTeam.offRunPlayEPA = +team['"rush_epa_pp"'];
    //     passedInTeam.offPointsPerGame = +team['"ppg"'];
    //     passedInTeam.offPlaySuccessPercentageRank = +team['"play_sr"'];
    //     // passedInTeam.offDriveSuccessPercenageRank = +team['"drive_sr"'];
    //     passedInTeam.offExplosivePassRateRank = +team['"exp_pass_rate"'];
    //     passedInTeam.offExplosiveRushRateRank = +team['"exp_run_rate"'];
    //     // console.log(
    //     //   `${passedInTeam.teamABV} ${team['"exp_run_rate"']}`
    //     // );

    //   }
    // });
  };
  setTeamPassRunRatioForAllGameScripts(passedInTeam);
};

populateTeamObjects(gameInfo.SF49ers);
populateTeamObjects(gameInfo.bears);
populateTeamObjects(gameInfo.bengals);
populateTeamObjects(gameInfo.bills);
populateTeamObjects(gameInfo.broncos);
populateTeamObjects(gameInfo.browns);
populateTeamObjects(gameInfo.buccaneers);
populateTeamObjects(gameInfo.cardinals);
populateTeamObjects(gameInfo.chargers);
populateTeamObjects(gameInfo.chiefs);
populateTeamObjects(gameInfo.colts);
populateTeamObjects(gameInfo.commanders);
populateTeamObjects(gameInfo.cowboys);
populateTeamObjects(gameInfo.dolphins);
populateTeamObjects(gameInfo.eagles);
populateTeamObjects(gameInfo.falcons);
populateTeamObjects(gameInfo.giants);
populateTeamObjects(gameInfo.jaguars);
populateTeamObjects(gameInfo.jets);
populateTeamObjects(gameInfo.lions);
populateTeamObjects(gameInfo.packers);
populateTeamObjects(gameInfo.panthers);
populateTeamObjects(gameInfo.patriots);
populateTeamObjects(gameInfo.raiders);
populateTeamObjects(gameInfo.rams);
populateTeamObjects(gameInfo.ravens);
populateTeamObjects(gameInfo.saints);
populateTeamObjects(gameInfo.seahawks);
populateTeamObjects(gameInfo.steelers);
populateTeamObjects(gameInfo.texans);
populateTeamObjects(gameInfo.titans);
populateTeamObjects(gameInfo.vikings);

const assignOpponentObjectToPassedInTeam = function (team) {
  // console.log(team.opponentABV);
  // team.opposingTeamDef = 0;
  const calcOffExplosiveVsDefAgainstExplosive = function (
    team,
    teamAgainsTeamThisWeek
  ) {
    if (team.opponentThisWeek) {
      // console.log(teamAgainsTeamThisWeek);
      // console.log(
      //   `${team.teamABV}: ${team.InitialTeamLikelihoodOfOffensiveSuccess}, ${team.offExplosivePassRateRank} - ${teamAgainsTeamThisWeek.teamABV}: ${teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess}, ${teamAgainsTeamThisWeek.offExplosivePassRateRank}`
      // );

      team.bonusForHighExplosivePassVsBadExplosivePassDef = 0;
      teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 0;
      teamAgainsTeamThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 0;
      team.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 0;

      if (
        team.offExplosivePassRateRank < 11 &&
        team.offExplosivePassRateRank > 5 &&
        team.opponentThisWeek.defExplosivePassPercentageAgainstRank > 22 &&
        team.opponentThisWeek.defExplosivePassPercentageAgainstRank < 28
      ) {
        team.InitialTeamLikelihoodOfOffensiveSuccess += 10;
        team.bonusForHighExplosivePassVsBadExplosivePassDef = 10;
        teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 10;
      }

      if (
        teamAgainsTeamThisWeek.offExplosivePassRateRank < 11 &&
        teamAgainsTeamThisWeek.offExplosivePassRateRank > 5 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosivePassPercentageAgainstRank > 22 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosivePassPercentageAgainstRank < 28
      ) {
        teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess += 10;
        teamAgainsTeamThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 10;
        team.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 10;
      }

      if (
        team.offExplosiveRushRateRank < 11 &&
        team.offExplosiveRushRateRank > 5 &&
        team.opponentThisWeek.defExplosiveRushPercentageAgainstRank > 22 &&
        team.opponentThisWeek.defExplosiveRushPercentageAgainstRank < 28
      ) {
        team.InitialTeamLikelihoodOfOffensiveSuccess += 10;
        team.bonusForHighExplosiveRushVsBadExplosivePassDef = 10;
        teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 10;
      }

      if (
        teamAgainsTeamThisWeek.offExplosiveRushRateRank < 11 &&
        teamAgainsTeamThisWeek.offExplosiveRushRateRank > 5 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosiveRushPercentageAgainstRank > 22 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosiveRushPercentageAgainstRank < 28
      ) {
        teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess += 10;
        teamAgainsTeamThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 10;
        team.opponentThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 10;
      }

      if (
        team.offExplosivePassRateRank < 6 &&
        team.opponentThisWeek.defExplosivePassPercentageAgainstRank > 22 &&
        team.opponentThisWeek.defExplosivePassPercentageAgainstRank < 28
      ) {
        team.InitialTeamLikelihoodOfOffensiveSuccess += 15;
        team.bonusForHighExplosivePassVsBadExplosivePassDef = 15;
        teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 15;
      }

      if (
        teamAgainsTeamThisWeek.offExplosivePassRateRank < 6 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosivePassPercentageAgainstRank > 22 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosivePassPercentageAgainstRank < 28
      ) {
        teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess += 15;
        teamAgainsTeamThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 15;
        team.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 15;
      }

      if (
        team.offExplosivePassRateRank < 11 &&
        team.offExplosivePassRateRank > 5 &&
        team.opponentThisWeek.defExplosivePassPercentageAgainstRank > 27
      ) {
        team.InitialTeamLikelihoodOfOffensiveSuccess += 15;
        team.bonusForHighExplosivePassVsBadExplosivePassDef = 15;
        teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 15;
      }

      if (
        teamAgainsTeamThisWeek.offExplosivePassRateRank < 11 &&
        teamAgainsTeamThisWeek.offExplosivePassRateRank > 5 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosivePassPercentageAgainstRank > 28
      ) {
        teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess += 15;
        teamAgainsTeamThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 15;
        team.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 15;
      }

      if (
        team.offExplosiveRushRateRank < 6 &&
        team.opponentThisWeek.defExplosiveRushPercentageAgainstRank > 22 &&
        team.opponentThisWeek.defExplosiveRushPercentageAgainstRank < 28
      ) {
        team.InitialTeamLikelihoodOfOffensiveSuccess += 15;
        team.bonusForHighExplosiveRushVsBadExplosivePassDef = 15;
        teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 15;
      }

      if (
        teamAgainsTeamThisWeek.offExplosiveRushRateRank < 6 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosiveRushPercentageAgainstRank > 22 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosiveRushPercentageAgainstRank < 28
      ) {
        teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess += 15;
        teamAgainsTeamThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 15;
        team.opponentThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 15;
      }

      if (
        team.offExplosiveRushRateRank < 11 &&
        team.offExplosiveRushRateRank > 5 &&
        team.opponentThisWeek.defExplosiveRushPercentageAgainstRank > 27
      ) {
        team.InitialTeamLikelihoodOfOffensiveSuccess += 15;
        team.bonusForHighExplosiveRushVsBadExplosivePassDef = 15;
        teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 15;
      }

      if (
        teamAgainsTeamThisWeek.offExplosiveRushRateRank < 11 &&
        teamAgainsTeamThisWeek.offExplosiveRushRateRank > 5 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosiveRushPercentageAgainstRank > 27
      ) {
        teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess += 15;
        teamAgainsTeamThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 15;
        team.opponentThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 15;
      }

      if (
        team.offExplosivePassRateRank < 6 &&
        team.opponentThisWeek.defExplosivePassPercentageAgainstRank > 27
      ) {
        team.InitialTeamLikelihoodOfOffensiveSuccess += 40;
        team.bonusForHighExplosivePassVsBadExplosivePassDef = 40;
        teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 40;
      }

      if (
        teamAgainsTeamThisWeek.offExplosivePassRateRank < 6 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosivePassPercentageAgainstRank > 27
      ) {
        teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess += 40;
        teamAgainsTeamThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 40;
        team.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 40;
      }

      if (
        team.offExplosiveRushRateRank < 6 &&
        team.opponentThisWeek.defExplosiveRushPercentageAgainstRank > 27
      ) {
        team.InitialTeamLikelihoodOfOffensiveSuccess += 35;
        team.bonusForHighExplosiveRushVsBadExplosivePassDef = 35;
        teamAgainsTeamThisWeek.opponentThisWeek.bonusForHighExplosiveRushVsBadExplosivePassDef = 35;
      }

      if (
        teamAgainsTeamThisWeek.offExplosiveRushRateRank < 6 &&
        teamAgainsTeamThisWeek.opponentThisWeek
          .defExplosiveRushPercentageAgainstRank > 27
      ) {
        teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess += 35;
        teamAgainsTeamThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 35;
        team.opponentThisWeek.bonusForHighExplosivePassVsBadExplosivePassDef = 35;
      }
    }

    team.InitialTeamLikelihoodOfOffensiveSuccess +=
      +team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef;

    teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess +=
      +teamAgainsTeamThisWeek.opponentThisWeek
        .teamDefScoreToUseForOpposingTeamDef;

    teamAgainsTeamThisWeek.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      +team.InitialTeamLikelihoodOfOffensiveSuccess;

    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      +teamAgainsTeamThisWeek.InitialTeamLikelihoodOfOffensiveSuccess;
  };

  const calcProjectedTeamPoints = function (team, teamAgainsTeamThisWeek) {
    // console.log(
    //   `team is:${team.teamFirstPassedInForMatchupThisWeekIs} ${team.teamABV} team.InitialTeamLikelihoodOfOffensiveSuccess-${team.InitialTeamLikelihoodOfOffensiveSuccess} team.teamDefScoreToUseForOpposingTeamDef- ${team.teamDefScoreToUseForOpposingTeamDef} team.opposingTeamDef-${team.opposingTeamDef}, team.opponent is ${team.opponentThisWeek.teamABV} team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess-${team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess} team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef- ${team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef} team.opponentThisWeek.OpposingTeamDef- ${team.opponentThisWeek.opposingTeamDef}`
    // );

    // console.log(team.teamName, team.InitialTeamLikelihoodOfOffensiveSuccess);

    //all cases where one or both teams are over 200
    //
    //where both are over 200

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 199
    ) {
      team.teamProjectedPointsThisWeek = 38;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 38;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 38;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 38;
    }
    //where just team is over 200
    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 200
    ) {
      team.teamProjectedPointsThisWeek = 35;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 35;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 150
    ) {
      team.teamProjectedPointsThisWeek = 35;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 35;
      team.quarterOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.quarterOfPositiveGameScriptPossible = true;
      team.opponentThisWeek.quarterOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.quarterOfNegetiveGameScriptPossible = true;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 100
    ) {
      team.teamProjectedPointsThisWeek = 31;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 25;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 25;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 31;
      team.halfOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.halfOfPositiveGameScriptPossible = true;
      team.opponentThisWeek.halfOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.halfOfNegetiveGameScriptPossible = true;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 50
    ) {
      team.teamProjectedPointsThisWeek = 30;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 18;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 18;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 30;
      team.threeQuartersOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.threeQuartersOfPositiveGameScriptPossible = true;
      team.opponentThisWeek.threeQuartersOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.threeQuartersOfNegetiveGameScriptPossible = true;
    }

    //where just team.opponenthisWeek is over 200

    if (
      team.opponentThisWeekInitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 200
    ) {
      team.teamProjectedPointsThisWeek = 35;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 35;
    }

    if (
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 150
    ) {
      team.teamProjectedPointsThisWeek = 31;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 31;
      team.opponentThisWeek.quarterOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.quarterOfPositiveGameScriptPossible = true;

      team.quarterOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.quarterOfNegetiveGameScriptPossible = true;
    }

    if (
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 100
    ) {
      team.teamProjectedPointsThisWeek = 25;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 25;
      team.opponentThisWeek.halfOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.halfOfPositiveGameScriptPossible = true;

      team.halfOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.halfOfNegetiveGameScriptPossible = true;
    }

    if (
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 199 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 50
    ) {
      team.teamProjectedPointsThisWeek = 18;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 30;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 30;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 18;
      team.opponentThisWeek.threeQuartersOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.threeQuartersOfPositiveGameScriptPossible = true;

      team.threeQuartersOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.threeQuartersOfNegetiveGameScriptPossible = true;
    }

    ///////////////////////////////////////////////////////////////////////////

    //where one or both teams are over 150

    //where both are over 150 but under 200

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 200 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 200
    ) {
      team.teamProjectedPointsThisWeek = 35;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 35;
    }
    //where just team is over 150 but under 200

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 200 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 149
    ) {
      team.teamProjectedPointsThisWeek = 35;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 35;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 200 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 99
    ) {
      team.teamProjectedPointsThisWeek = 31;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 24;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 24;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 31;
      team.quarterOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.quarterOfPositiveGameScriptPossible = true;

      team.opponentThisWeek.quarterOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.quarterOfNegetiveGameScriptPossible = true;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 200 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 49
    ) {
      team.teamProjectedPointsThisWeek = 28;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 18;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 18;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 28;
      team.halfOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.halfOfPositiveGameScriptPossible = true;

      team.opponentThisWeek.halfOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.halfOfNegetiveGameScriptPossible = true;
    }

    //////if just team.opponentThisWeek is over 150 but under 200

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 149 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 200
    ) {
      team.teamProjectedPointsThisWeek = 31;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 35;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 31;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 99 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 200
    ) {
      team.teamProjectedPointsThisWeek = 24;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 24;
      team.opponentThisWeek.quarterOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.quarterOfPositiveGameScriptPossible = true;

      team.quarterOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.quarterOfNegetiveGameScriptPossible = true;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess < 50 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 149 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 200
    ) {
      team.teamProjectedPointsThisWeek = 18;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 28;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 28;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 18;
      team.opponentThisWeek.halfOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.halfOfPositiveGameScriptPossible = true;

      team.halfOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.halfOfNegetiveGameScriptPossible = true;
    }

    ////////////////////////////////////////////////////////////////////////////

    //where one or both teams are over 100 but under 150

    //where both are over 100 but under 150

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 150 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 150
    ) {
      team.teamProjectedPointsThisWeek = 31;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 31;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 31;
    }

    //where just team is over 100 but under 150

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 150 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 99
    ) {
      team.teamProjectedPointsThisWeek = 28;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 21;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 21;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 28;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 150 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 49
    ) {
      team.teamProjectedPointsThisWeek = 25;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 15;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 15;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 25;
      team.quarterOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.quarterOfPositiveGameScriptPossible = true;

      team.opponentThisWeek.quarterOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.quarterOfNegetiveGameScriptPossible = true;
    }

    // where just team.opponentThisWeek is over 100 but under 150

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 99 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 150
    ) {
      team.teamProjectedPointsThisWeek = 21;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 28;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 28;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 21;
    }

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess < 50 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 99 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 150
    ) {
      team.teamProjectedPointsThisWeek = 15;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 25;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 25;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 15;
      team.opponentThisWeek.quarterOfPositiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.quarterOfPositiveGameScriptPossible = true;

      team.quarterOfNegetiveGameScriptPossible = true;
      teamAgainsTeamThisWeek.opponentThisWeek.quarterOfNegetiveGameScriptPossible = true;
    }

    //////////////////////////////////////////////////

    //where one or both are over 50 but under 100

    //where both teams are over 50 but under 100

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 100 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 100
    ) {
      team.teamProjectedPointsThisWeek = 21;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 21;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 21;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 21;
    }

    //where just team is over 50 but under 100

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.InitialTeamLikelihoodOfOffensiveSuccess < 99 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 49
    ) {
      team.teamProjectedPointsThisWeek = 18;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 15;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 15;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 18;
    }

    //where just team.opponentThisweek is over 50 but under 100

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess < 50 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess > 49 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 99
    ) {
      team.teamProjectedPointsThisWeek = 15;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 18;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 18;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 15;
    }
    ////////////////////////////////////////////////////////

    //both under 50

    if (
      team.InitialTeamLikelihoodOfOffensiveSuccess < 49 &&
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess < 49
    ) {
      team.teamProjectedPointsThisWeek = 12;
      team.opponentThisWeek.teamProjectedPointsThisWeek = 12;
      teamAgainsTeamThisWeek.teamProjectedPointsThisWeek = 12;
      teamAgainsTeamThisWeek.opponentThisWeek.teamProjectedPointsThisWeek = 12;
    }

    // console.log(
    //   `${team.teamABV} ${team.InitialTeamLikelihoodOfOffensiveSuccess} ${team.teamProjectedPointsThisWeek}, ${team.opponentThisWeek.teamABV} ${team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess} ${team.opponentThisWeek.teamProjectedPointsThisWeek}`
    // );

    // console.log(team.teamName, team.vtt, team.teamProjectedPointsThisWeek)
    /////////////////////////////////////////////////////////////////////////////
  };

  if (team.opponentABV === 'ARI') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the cardinals this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.cardinals.teamName;
      team.opponentThisWeek.teamABV = gameInfo.cardinals.teamABV;
      team.opponentThisWeek.vtt = gameInfo.cardinals.vtt;
      team.opponentvtt = gameInfo.cardinals.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.cardinals.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.cardinals.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.cardinals.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.cardinals.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.cardinals.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.cardinals.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.cardinals.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.cardinals.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.cardinals.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.cardinals.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.cardinals.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.cardinals.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.cardinals.InitialTeamLikelihoodOfOffensiveSuccess;

      // gameInfo.cardinals.opponentThisWeek.qbName = team.QBOneThisWeekName;
      team.opponentThisWeek.qbName = gameInfo.cardinals.QBOneThisWeekName;
    }

    if (!gameInfo.cardinals.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the cardinals team object
      gameInfo.cardinals.opponentThisWeek = {};
      gameInfo.cardinals.opponentThisWeek.teamName = team.teamName;
      gameInfo.cardinals.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.cardinals.opponentvtt = +team.vtt;
      gameInfo.cardinals.opponentThisWeek.vtt = +team.vtt;
      gameInfo.cardinals.gameTotalVegasTotal =
        +team.vtt + +gameInfo.cardinals.vtt;
      gameInfo.cardinals.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.cardinals.vtt;
      gameInfo.cardinals.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.cardinals.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.cardinals.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.cardinals.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.cardinals.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.cardinals.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.cardinals.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.cardinals.opposingTeamDef =
        +gameInfo.cardinals.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.cardinals.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.cardinals.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.cardinals.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.cardinals.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.cardinals.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    // if (!team.teamProjectedPointsThisWeek) {
    calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.cardinals);
    calcProjectedTeamPoints(team, gameInfo.cardinals);
    // }
  }
  // console.log(gameInfo.cardinals);
  // calcOffExplosiveVsDefAgainstExplosive();
  // calcProjectedTeamPoints();

  if (team.opponentABV === 'ATL') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the falcons this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.falcons.teamName;
      team.opponentThisWeek.teamABV = gameInfo.falcons.teamABV;
      team.opponentThisWeek.vtt = gameInfo.falcons.vtt;
      team.opponentvtt = gameInfo.falcons.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.falcons.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.falcons.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.falcons.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.falcons.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.falcons.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.falcons.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.falcons.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.falcons.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.falcons.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.falcons.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.falcons.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.falcons.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.falcons.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.falcons.QBOneThisWeekName;
    }

    if (!gameInfo.falcons.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the falcons team object
      gameInfo.falcons.opponentThisWeek = {};
      gameInfo.falcons.opponentThisWeek.teamName = team.teamName;
      gameInfo.falcons.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.falcons.opponentvtt = +team.vtt;
      gameInfo.falcons.opponentThisWeek.vtt = +team.vtt;
      gameInfo.falcons.gameTotalVegasTotal = +team.vtt + +gameInfo.falcons.vtt;
      gameInfo.falcons.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.falcons.vtt;
      gameInfo.falcons.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.falcons.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.falcons.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.falcons.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.falcons.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.falcons.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.falcons.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.falcons.opposingTeamDef =
        +gameInfo.falcons.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.falcons.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.falcons.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.falcons.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.falcons.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.falcons.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.falcons);
      calcProjectedTeamPoints(team, gameInfo.falcons);
    }
  }
  //   calcOffExplosiveVsDefAgainstExplosive();
  //   // calcProjectedTeamPoints();
  // }
  if (team.opponentABV === 'BAL') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the ravens this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.ravens.teamName;
      team.opponentThisWeek.teamABV = gameInfo.ravens.teamABV;
      team.opponentThisWeek.vtt = gameInfo.ravens.vtt;
      team.opponentvtt = gameInfo.ravens.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.ravens.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.ravens.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.ravens.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.ravens.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.ravens.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.ravens.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.ravens.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.ravens.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.ravens.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.ravens.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.ravens.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.ravens.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.ravens.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.ravens.QBOneThisWeekName;
    }

    if (!gameInfo.ravens.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the ravens team object
      gameInfo.ravens.opponentThisWeek = {};
      gameInfo.ravens.opponentThisWeek.teamName = team.teamName;
      gameInfo.ravens.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.ravens.opponentvtt = +team.vtt;
      gameInfo.ravens.opponentThisWeek.vtt = +team.vtt;
      gameInfo.ravens.gameTotalVegasTotal = +team.vtt + +gameInfo.ravens.vtt;
      gameInfo.ravens.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.ravens.vtt;
      gameInfo.ravens.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.ravens.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.ravens.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.ravens.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.ravens.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.ravens.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.ravens.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.ravens.opposingTeamDef =
        +gameInfo.ravens.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.ravens.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.ravens.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.ravens.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.ravens.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.ravens.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.ravens);
      calcProjectedTeamPoints(team, gameInfo.ravens);
    }
  }
  if (team.opponentABV === 'BUF') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the bills this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.bills.teamName;
      team.opponentThisWeek.teamABV = gameInfo.bills.teamABV;
      team.opponentThisWeek.vtt = gameInfo.bills.vtt;
      team.opponentvtt = gameInfo.bills.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.bills.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.bills.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.bills.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.bills.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.bills.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.bills.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.bills.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.bills.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.bills.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.bills.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.bills.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.bills.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.bills.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.bills.QBOneThisWeekName;
    }

    if (!gameInfo.bills.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the bills team object
      gameInfo.bills.opponentThisWeek = {};
      gameInfo.bills.opponentThisWeek.teamName = team.teamName;
      gameInfo.bills.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.bills.opponentvtt = +team.vtt;
      gameInfo.bills.opponentThisWeek.vtt = +team.vtt;
      gameInfo.bills.gameTotalVegasTotal = +team.vtt + +gameInfo.bills.vtt;
      gameInfo.bills.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.bills.vtt;
      gameInfo.bills.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.bills.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.bills.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.bills.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.bills.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.bills.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.bills.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bills.opposingTeamDef =
        +gameInfo.bills.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bills.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.bills.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bills.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bills.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.bills.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.bills);
      calcProjectedTeamPoints(team, gameInfo.bills);
    }
  }
  if (team.opponentABV === 'CAR') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the panthers this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.panthers.teamName;
      team.opponentThisWeek.teamABV = gameInfo.panthers.teamABV;
      team.opponentThisWeek.vtt = gameInfo.panthers.vtt;
      team.opponentvtt = gameInfo.panthers.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.panthers.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.panthers.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.panthers.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.panthers.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.panthers.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.panthers.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.panthers.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.panthers.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.panthers.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.panthers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.panthers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.panthers.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.panthers.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.panthers.QBOneThisWeekName;
    }

    if (!gameInfo.panthers.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the panthers team object
      gameInfo.panthers.opponentThisWeek = {};
      gameInfo.panthers.opponentThisWeek.teamName = team.teamName;
      gameInfo.panthers.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.panthers.opponentvtt = +team.vtt;
      gameInfo.panthers.opponentThisWeek.vtt = +team.vtt;
      gameInfo.panthers.gameTotalVegasTotal =
        +team.vtt + +gameInfo.panthers.vtt;
      gameInfo.panthers.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.panthers.vtt;
      gameInfo.panthers.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.panthers.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.panthers.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.panthers.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.panthers.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.panthers.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.panthers.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.panthers.opposingTeamDef =
        +gameInfo.panthers.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.panthers.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.panthers.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.panthers.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.panthers.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.panthers.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.panthers);
      calcProjectedTeamPoints(team, gameInfo.panthers);
    }
  }
  if (team.opponentABV === 'CHI') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the bears this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.bears.teamName;
      team.opponentThisWeek.teamABV = gameInfo.bears.teamABV;
      team.opponentThisWeek.vtt = gameInfo.bears.vtt;
      team.opponentvtt = gameInfo.bears.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.bears.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.bears.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.bears.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.bears.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.bears.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.bears.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.bears.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.bears.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.bears.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.bears.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.bears.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.bears.teamDefScoreToUseForOpposingTeamDef;
      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.bears.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.bears.QBOneThisWeekName;
    }

    if (!gameInfo.bears.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the bears team object
      gameInfo.bears.opponentThisWeek = {};
      gameInfo.bears.opponentThisWeek.teamName = team.teamName;
      gameInfo.bears.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.bears.opponentvtt = +team.vtt;
      gameInfo.bears.opponentThisWeek.vtt = +team.vtt;
      gameInfo.bears.gameTotalVegasTotal = +team.vtt + +gameInfo.bears.vtt;
      gameInfo.bears.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.bears.vtt;
      gameInfo.bears.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.bears.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.bears.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.bears.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.bears.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.bears.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;

      gameInfo.bears.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;
      gameInfo.bears.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bears.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bears.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bears.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.bears.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.bears);
      calcProjectedTeamPoints(team, gameInfo.bears);
    }
  }
  if (team.opponentABV === 'CIN') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the bengals this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.bengals.teamName;
      team.opponentThisWeek.teamABV = gameInfo.bengals.teamABV;
      team.opponentThisWeek.vtt = gameInfo.bengals.vtt;
      team.opponentvtt = gameInfo.bengals.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.bengals.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.bengals.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.bengals.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.bengals.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.bengals.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.bengals.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.bengals.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.bengals.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.bengals.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.bengals.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.bengals.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.bengals.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.bengals.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.bengals.QBOneThisWeekName;
    }

    if (!gameInfo.bengals.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the bengals team object
      gameInfo.bengals.opponentThisWeek = {};
      gameInfo.bengals.opponentThisWeek.teamName = team.teamName;
      gameInfo.bengals.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.bengals.opponentvtt = +team.vtt;
      gameInfo.bengals.opponentThisWeek.vtt = +team.vtt;
      gameInfo.bengals.gameTotalVegasTotal = +team.vtt + +gameInfo.bengals.vtt;
      gameInfo.bengals.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.bengals.vtt;
      gameInfo.bengals.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.bengals.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.bengals.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.bengals.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.bengals.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.bengals.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.bengals.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bengals.opposingTeamDef =
        +gameInfo.bengals.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bengals.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.bengals.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bengals.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.bengals.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.bengals.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.bengals);
      calcProjectedTeamPoints(team, gameInfo.bengals);
    }
  }
  if (team.opponentABV === 'CLE') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the browns this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.browns.teamName;
      team.opponentThisWeek.teamABV = gameInfo.browns.teamABV;
      team.opponentThisWeek.vtt = gameInfo.browns.vtt;
      team.opponentvtt = gameInfo.browns.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.browns.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.browns.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.browns.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.browns.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.browns.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.browns.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.browns.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.browns.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.browns.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.browns.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.browns.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.browns.teamDefScoreToUseForOpposingTeamDef;
      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.browns.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.browns.QBOneThisWeekName;
    }

    if (!gameInfo.browns.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the browns team object
      gameInfo.browns.opponentThisWeek = {};
      gameInfo.browns.opponentThisWeek.teamName = team.teamName;
      gameInfo.browns.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.browns.opponentvtt = +team.vtt;
      gameInfo.browns.opponentThisWeek.vtt = +team.vtt;
      gameInfo.browns.gameTotalVegasTotal = +team.vtt + +gameInfo.browns.vtt;
      gameInfo.browns.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.browns.vtt;
      gameInfo.browns.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.browns.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.browns.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.browns.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.browns.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.browns.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.browns.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.browns.opposingTeamDef =
        +gameInfo.browns.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.browns.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.browns.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.browns.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.browns.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.browns.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.browns);
      calcProjectedTeamPoints(team, gameInfo.browns);
    }
  }
  if (team.opponentABV === 'DAL') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the cowboys this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.cowboys.teamName;
      team.opponentThisWeek.teamABV = gameInfo.cowboys.teamABV;
      team.opponentThisWeek.vtt = gameInfo.cowboys.vtt;
      team.opponentvtt = gameInfo.cowboys.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.cowboys.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.cowboys.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.cowboys.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.cowboys.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.cowboys.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.cowboys.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.cowboys.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.cowboys.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.cowboys.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.cowboys.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.cowboys.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.cowboys.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.cowboys.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.cowboys.QBOneThisWeekName;
    }

    if (!gameInfo.cowboys.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the cowboys team object
      gameInfo.cowboys.opponentThisWeek = {};
      gameInfo.cowboys.opponentThisWeek.teamName = team.teamName;
      gameInfo.cowboys.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.cowboys.opponentvtt = +team.vtt;
      gameInfo.cowboys.opponentThisWeek.vtt = +team.vtt;
      gameInfo.cowboys.gameTotalVegasTotal = +team.vtt + +gameInfo.cowboys.vtt;
      gameInfo.cowboys.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.cowboys.vtt;
      gameInfo.cowboys.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.cowboys.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.cowboys.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.cowboys.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.cowboys.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.cowboys.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.cowboys.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.cowboys.opposingTeamDef =
        +gameInfo.cowboys.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.cowboys.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.cowboys.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.cowboys.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.cowboys.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.cowboys.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.cowboys);
      calcProjectedTeamPoints(team, gameInfo.cowboys);
    }
  }

  if (team.opponentABV === 'DEN') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the broncos this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.broncos.teamName;
      team.opponentThisWeek.teamABV = gameInfo.broncos.teamABV;
      team.opponentThisWeek.vtt = gameInfo.broncos.vtt;
      team.opponentvtt = gameInfo.broncos.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.broncos.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.broncos.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.broncos.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.broncos.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.broncos.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.broncos.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.broncos.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.broncos.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.broncos.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.broncos.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.broncos.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.broncos.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.broncos.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.broncos.QBOneThisWeekName;
    }

    if (!gameInfo.broncos.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the broncos team object
      gameInfo.broncos.opponentThisWeek = {};
      gameInfo.broncos.opponentThisWeek.teamName = team.teamName;
      gameInfo.broncos.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.broncos.opponentvtt = +team.vtt;
      gameInfo.broncos.opponentThisWeek.vtt = +team.vtt;
      gameInfo.broncos.gameTotalVegasTotal = +team.vtt + +gameInfo.broncos.vtt;
      gameInfo.broncos.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.broncos.vtt;
      gameInfo.broncos.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.broncos.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.broncos.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.broncos.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.broncos.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.broncos.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.broncos.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.broncos.opposingTeamDef =
        +gameInfo.broncos.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.broncos.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.broncos.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.broncos.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.broncos.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.broncos.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.broncos);
      calcProjectedTeamPoints(team, gameInfo.broncos);
    }
  }
  if (team.opponentABV === 'DET') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the lions this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.lions.teamName;
      team.opponentThisWeek.teamABV = gameInfo.lions.teamABV;
      team.opponentThisWeek.vtt = gameInfo.lions.vtt;
      team.opponentvtt = gameInfo.lions.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.lions.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.lions.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.lions.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.lions.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.lions.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.lions.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.lions.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.lions.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.lions.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.lions.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.lions.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.lions.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.lions.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.lions.QBOneThisWeekName;
    }

    if (!gameInfo.lions.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the lions team object
      gameInfo.lions.opponentThisWeek = {};
      gameInfo.lions.opponentThisWeek.teamName = team.teamName;
      gameInfo.lions.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.lions.opponentvtt = +team.vtt;
      gameInfo.lions.opponentThisWeek.vtt = +team.vtt;
      gameInfo.lions.gameTotalVegasTotal = +team.vtt + +gameInfo.lions.vtt;
      gameInfo.lions.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.lions.vtt;
      gameInfo.lions.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.lions.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.lions.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.lions.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.lions.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.lions.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.lions.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.lions.opposingTeamDef =
        +gameInfo.lions.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.lions.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.lions.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.lions.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.lions.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.lions.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.lions);
      calcProjectedTeamPoints(team, gameInfo.lions);
    }
  }

  if (team.opponentABV === 'GB') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the falcons this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.packers.teamName;
      team.opponentThisWeek.teamABV = gameInfo.packers.teamABV;
      team.opponentThisWeek.vtt = gameInfo.packers.vtt;
      team.opponentvtt = gameInfo.packers.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.packers.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.packers.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.packers.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.packers.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.packers.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.packers.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.packers.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.packers.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.packers.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.packers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.packers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.packers.teamDefScoreToUseForOpposingTeamDef;
      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.packers.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.packers.QBOneThisWeekName;
    }

    if (!gameInfo.packers.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the packers team object
      gameInfo.packers.opponentThisWeek = {};
      gameInfo.packers.opponentThisWeek.teamName = team.teamName;
      gameInfo.packers.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.packers.opponentvtt = +team.vtt;
      gameInfo.packers.opponentThisWeek.vtt = +team.vtt;
      gameInfo.packers.gameTotalVegasTotal = +team.vtt + +gameInfo.packers.vtt;
      gameInfo.packers.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.packers.vtt;
      gameInfo.packers.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.packers.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.packers.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.packers.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.packers.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.packers.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.packers.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.packers.opposingTeamDef =
        +gameInfo.packers.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.packers.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.packers.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.packers.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.packers.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.packers.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.packers);
      calcProjectedTeamPoints(team, gameInfo.packers);
    }
  }
  if (team.opponentABV === 'HOU') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the texans this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.texans.teamName;
      team.opponentThisWeek.teamABV = gameInfo.texans.teamABV;
      team.opponentThisWeek.vtt = gameInfo.texans.vtt;
      team.opponentvtt = gameInfo.texans.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.texans.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.texans.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.texans.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.texans.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.texans.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.texans.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.texans.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.texans.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.texans.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.texans.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.texans.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.texans.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.texans.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.texans.QBOneThisWeekName;
    }

    if (!gameInfo.texans.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the texans team object
      gameInfo.texans.opponentThisWeek = {};
      gameInfo.texans.opponentThisWeek.teamName = team.teamName;
      gameInfo.texans.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.texans.opponentvtt = +team.vtt;
      gameInfo.texans.opponentThisWeek.vtt = +team.vtt;
      gameInfo.texans.gameTotalVegasTotal = +team.vtt + +gameInfo.texans.vtt;
      gameInfo.texans.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.texans.vtt;
      gameInfo.texans.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.texans.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.texans.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.texans.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.texans.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.texans.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.texans.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.texans.opposingTeamDef =
        +gameInfo.texans.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.texans.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.texans.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.texans.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.texans.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.texans.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.texans);
      calcProjectedTeamPoints(team, gameInfo.texans);
    }
  }
  if (team.opponentABV === 'IND') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the colts this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.colts.teamName;
      team.opponentThisWeek.teamABV = gameInfo.colts.teamABV;
      team.opponentThisWeek.vtt = gameInfo.colts.vtt;
      team.opponentvtt = gameInfo.colts.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.colts.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.colts.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.colts.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.colts.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.colts.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.colts.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.colts.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.colts.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.colts.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.colts.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.colts.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.colts.teamDefScoreToUseForOpposingTeamDef;
      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.colts.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.colts.QBOneThisWeekName;
    }

    if (!gameInfo.colts.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the colts team object
      gameInfo.colts.opponentThisWeek = {};
      gameInfo.colts.opponentThisWeek.teamName = team.teamName;
      gameInfo.colts.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.colts.opponentvtt = +team.vtt;
      gameInfo.colts.opponentThisWeek.vtt = +team.vtt;
      gameInfo.colts.gameTotalVegasTotal = +team.vtt + +gameInfo.colts.vtt;
      gameInfo.colts.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.colts.vtt;
      gameInfo.colts.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.colts.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.colts.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.colts.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.colts.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.colts.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.colts.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.colts.opposingTeamDef =
        +gameInfo.colts.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.colts.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.colts.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.colts.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.colts.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.colts.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.colts);
      calcProjectedTeamPoints(team, gameInfo.colts);
    }
  }
  if (team.opponentABV === 'JAC' || team.opponentABV === 'JAX') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the jaguars this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.jaguars.teamName;
      team.opponentThisWeek.teamABV = gameInfo.jaguars.teamABV;
      team.opponentThisWeek.vtt = gameInfo.jaguars.vtt;
      team.opponentvtt = gameInfo.jaguars.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.jaguars.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.jaguars.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.jaguars.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.jaguars.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.jaguars.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.jaguars.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.jaguars.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.jaguars.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.jaguars.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.jaguars.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.jaguars.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.jaguars.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.jaguars.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.jaguars.QBOneThisWeekName;
    }

    if (!gameInfo.jaguars.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the jaguars team object
      gameInfo.jaguars.opponentThisWeek = {};
      gameInfo.jaguars.opponentThisWeek.teamName = team.teamName;
      gameInfo.jaguars.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.jaguars.opponentvtt = +team.vtt;
      gameInfo.jaguars.opponentThisWeek.vtt = +team.vtt;
      gameInfo.jaguars.gameTotalVegasTotal = +team.vtt + +gameInfo.jaguars.vtt;
      gameInfo.jaguars.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.jaguars.vtt;
      gameInfo.jaguars.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.jaguars.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.jaguars.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.jaguars.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.jaguars.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.jaguars.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.jaguars.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.jaguars.opposingTeamDef =
        +gameInfo.jaguars.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.jaguars.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.jaguars.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.jaguars.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.jaguars.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.jaguars.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.jaguars);
      calcProjectedTeamPoints(team, gameInfo.jaguars);
    }
  }
  if (team.opponentABV === 'KC') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the chiefs this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.chiefs.teamName;
      team.opponentThisWeek.teamABV = gameInfo.chiefs.teamABV;
      team.opponentThisWeek.vtt = gameInfo.chiefs.vtt;
      team.opponentvtt = gameInfo.chiefs.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.chiefs.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.chiefs.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.chiefs.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.chiefs.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.chiefs.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.chiefs.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.chiefs.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.chiefs.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.chiefs.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.chiefs.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.chiefs.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.chiefs.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.chiefs.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.chiefs.QBOneThisWeekName;
    }

    if (!gameInfo.chiefs.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the chiefs team object
      gameInfo.chiefs.opponentThisWeek = {};
      gameInfo.chiefs.opponentThisWeek.teamName = team.teamName;
      gameInfo.chiefs.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.chiefs.opponentvtt = +team.vtt;
      gameInfo.chiefs.opponentThisWeek.vtt = +team.vtt;
      gameInfo.chiefs.gameTotalVegasTotal = +team.vtt + +gameInfo.chiefs.vtt;
      gameInfo.chiefs.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.chiefs.vtt;
      gameInfo.chiefs.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.chiefs.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.chiefs.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.chiefs.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.chiefs.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.chiefs.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.chiefs.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.chiefs.opposingTeamDef =
        +gameInfo.chiefs.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.chiefs.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.chiefs.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.chiefs.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.chiefs.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.chiefs.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.chiefs);
      calcProjectedTeamPoints(team, gameInfo.chiefs);
    }
  }
  if (team.opponentABV === 'LV') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the raiders this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.raiders.teamName;
      team.opponentThisWeek.teamABV = gameInfo.raiders.teamABV;
      team.opponentThisWeek.vtt = gameInfo.raiders.vtt;
      team.opponentvtt = gameInfo.raiders.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.raiders.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.raiders.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.raiders.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.raiders.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.raiders.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.raiders.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.raiders.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.raiders.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.raiders.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.raiders.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.raiders.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.raiders.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.raiders.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.raiders.QBOneThisWeekName;
    }

    if (!gameInfo.raiders.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the raiders team object
      gameInfo.raiders.opponentThisWeek = {};
      gameInfo.raiders.opponentThisWeek.teamName = team.teamName;
      gameInfo.raiders.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.raiders.opponentvtt = +team.vtt;
      gameInfo.raiders.opponentThisWeek.vtt = +team.vtt;
      gameInfo.raiders.gameTotalVegasTotal = +team.vtt + +gameInfo.raiders.vtt;
      gameInfo.raiders.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.raiders.vtt;
      gameInfo.raiders.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.raiders.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.raiders.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.raiders.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.raiders.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.raiders.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.raiders.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.raiders.opposingTeamDef =
        +gameInfo.raiders.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.raiders.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.raiders.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.raiders.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.raiders.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.raiders.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.raiders);
      calcProjectedTeamPoints(team, gameInfo.raiders);
    }
  }
  if (team.opponentABV === 'LAC') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the chargers this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.chargers.teamName;
      team.opponentThisWeek.teamABV = gameInfo.chargers.teamABV;
      team.opponentThisWeek.vtt = gameInfo.chargers.vtt;
      team.opponentvtt = gameInfo.chargers.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.chargers.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.chargers.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.chargers.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.chargers.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.chargers.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.chargers.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.chargers.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.chargers.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.chargers.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.chargers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.chargers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.chargers.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.chargers.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.chargers.QBOneThisWeekName;
    }

    if (!gameInfo.chargers.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the chargers team object
      gameInfo.chargers.opponentThisWeek = {};
      gameInfo.chargers.opponentThisWeek.teamName = team.teamName;
      gameInfo.chargers.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.chargers.opponentvtt = +team.vtt;
      gameInfo.chargers.opponentThisWeek.vtt = +team.vtt;
      gameInfo.chargers.gameTotalVegasTotal =
        +team.vtt + +gameInfo.chargers.vtt;
      gameInfo.chargers.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.chargers.vtt;
      gameInfo.chargers.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.chargers.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.chargers.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.chargers.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.chargers.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.chargers.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.chargers.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.chargers.opposingTeamDef =
        +gameInfo.chargers.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.chargers.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.chargers.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.chargers.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.chargers.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.chargers.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.chargers);
      calcProjectedTeamPoints(team, gameInfo.chargers);
    }
  }
  if (team.opponentABV === 'LAR') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the rams this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.rams.teamName;
      team.opponentThisWeek.teamABV = gameInfo.rams.teamABV;
      team.opponentThisWeek.vtt = gameInfo.rams.vtt;
      team.opponentvtt = gameInfo.rams.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.rams.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.rams.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.rams.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.rams.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.rams.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.rams.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.rams.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.rams.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.rams.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.rams.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.rams.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.rams.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.rams.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.rams.QBOneThisWeekName;
    }

    if (!gameInfo.rams.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the rams team object
      gameInfo.rams.opponentThisWeek = {};
      gameInfo.rams.opponentThisWeek.teamName = team.teamName;
      gameInfo.rams.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.rams.opponentvtt = +team.vtt;
      gameInfo.rams.opponentThisWeek.vtt = +team.vtt;
      gameInfo.rams.gameTotalVegasTotal = +team.vtt + +gameInfo.rams.vtt;
      gameInfo.rams.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.rams.vtt;
      gameInfo.rams.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.rams.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.rams.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.rams.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.rams.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.rams.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.rams.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.rams.opposingTeamDef =
        +gameInfo.rams.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.rams.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.rams.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.rams.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.rams.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.rams.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.rams);
      calcProjectedTeamPoints(team, gameInfo.rams);
    }
  }
  if (team.opponentABV === 'MIA') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the dolphins this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.dolphins.teamName;
      team.opponentThisWeek.teamABV = gameInfo.dolphins.teamABV;
      team.opponentThisWeek.vtt = gameInfo.dolphins.vtt;
      team.opponentvtt = gameInfo.dolphins.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.dolphins.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.dolphins.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.dolphins.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.dolphins.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.dolphins.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.dolphins.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.dolphins.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.dolphins.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.dolphins.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.dolphins.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.dolphins.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.dolphins.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.dolphins.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.dolphins.QBOneThisWeekName;
    }

    if (!gameInfo.dolphins.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the dolphins team object
      gameInfo.dolphins.opponentThisWeek = {};
      gameInfo.dolphins.opponentThisWeek.teamName = team.teamName;
      gameInfo.dolphins.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.dolphins.opponentvtt = +team.vtt;
      gameInfo.dolphins.opponentThisWeek.vtt = +team.vtt;
      gameInfo.dolphins.gameTotalVegasTotal =
        +team.vtt + +gameInfo.dolphins.vtt;
      gameInfo.dolphins.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.dolphins.vtt;
      gameInfo.dolphins.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.dolphins.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.dolphins.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.dolphins.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.dolphins.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.dolphins.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.dolphins.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.dolphins.opposingTeamDef =
        +gameInfo.dolphins.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.dolphins.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.dolphins.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.dolphins.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.dolphins.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.dolphins.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.dolphins);
      calcProjectedTeamPoints(team, gameInfo.dolphins);
    }
  }
  if (team.opponentABV === 'MIN') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the vikings this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.vikings.teamName;
      team.opponentThisWeek.teamABV = gameInfo.vikings.teamABV;
      team.opponentThisWeek.vtt = gameInfo.vikings.vtt;
      team.opponentvtt = gameInfo.vikings.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.vikings.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.vikings.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.vikings.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.vikings.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.vikings.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.vikings.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.vikings.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.vikings.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.vikings.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.vikings.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.vikings.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.vikings.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.vikings.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.vikings.QBOneThisWeekName;
    }

    if (!gameInfo.vikings.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the vikings team object
      gameInfo.vikings.opponentThisWeek = {};
      gameInfo.vikings.opponentThisWeek.teamName = team.teamName;
      gameInfo.vikings.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.vikings.opponentvtt = +team.vtt;
      gameInfo.vikings.opponentThisWeek.vtt = +team.vtt;
      gameInfo.vikings.gameTotalVegasTotal = +team.vtt + +gameInfo.vikings.vtt;
      gameInfo.vikings.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.vikings.vtt;
      gameInfo.vikings.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.vikings.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.vikings.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.vikings.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.vikings.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.vikings.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.vikings.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.vikings.opposingTeamDef =
        +gameInfo.vikings.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.vikings.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.vikings.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.vikings.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.vikings.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.vikings.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.vikings);
      calcProjectedTeamPoints(team, gameInfo.vikings);
    }
  }
  if (team.opponentABV === 'NE') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the patriots this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.patriots.teamName;
      team.opponentThisWeek.teamABV = gameInfo.patriots.teamABV;
      team.opponentThisWeek.vtt = gameInfo.patriots.vtt;
      team.opponentvtt = gameInfo.patriots.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.patriots.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.patriots.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.patriots.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.patriots.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.patriots.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.patriots.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.patriots.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.patriots.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.patriots.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.patriots.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.patriots.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.patriots.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.patriots.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.patriots.QBOneThisWeekName;
    }

    if (!gameInfo.patriots.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the patriots team object
      gameInfo.patriots.opponentThisWeek = {};
      gameInfo.patriots.opponentThisWeek.teamName = team.teamName;
      gameInfo.patriots.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.patriots.opponentvtt = +team.vtt;
      gameInfo.patriots.opponentThisWeek.vtt = +team.vtt;
      gameInfo.patriots.gameTotalVegasTotal =
        +team.vtt + +gameInfo.patriots.vtt;
      gameInfo.patriots.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.patriots.vtt;
      gameInfo.patriots.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.patriots.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.patriots.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.patriots.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.patriots.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.patriots.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.patriots.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.patriots.opposingTeamDef =
        +gameInfo.patriots.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.patriots.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.patriots.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.patriots.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.patriots.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.patriots.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.patriots);
      calcProjectedTeamPoints(team, gameInfo.patriots);
    }
  }
  if (team.opponentABV === 'NO') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the saints this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.saints.teamName;
      team.opponentThisWeek.teamABV = gameInfo.saints.teamABV;
      team.opponentThisWeek.vtt = gameInfo.saints.vtt;
      team.opponentvtt = gameInfo.saints.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.saints.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.saints.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.saints.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.saints.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.saints.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.saints.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.saints.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.saints.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.saints.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.saints.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.saints.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.saints.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.saints.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.saints.QBOneThisWeekName;
    }

    if (!gameInfo.saints.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the rams team object
      gameInfo.saints.opponentThisWeek = {};
      gameInfo.saints.opponentThisWeek.teamName = team.teamName;
      gameInfo.saints.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.saints.opponentvtt = +team.vtt;
      gameInfo.saints.opponentThisWeek.vtt = +team.vtt;
      gameInfo.saints.gameTotalVegasTotal = +team.vtt + +gameInfo.saints.vtt;
      gameInfo.saints.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.saints.vtt;
      gameInfo.saints.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.saints.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.saints.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.saints.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.saints.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.saints.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.saints.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.saints.opposingTeamDef =
        +gameInfo.saints.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.saints.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.saints.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.saints.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.saints.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.saints.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.saints);
      calcProjectedTeamPoints(team, gameInfo.saints);
    }
  }
  if (team.opponentABV === 'NYG') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the giantsgiants this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.giants.teamName;
      team.opponentThisWeek.teamABV = gameInfo.giants.teamABV;
      team.opponentThisWeek.vtt = gameInfo.giants.vtt;
      team.opponentvtt = gameInfo.giants.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.giants.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.giants.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.giants.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.giants.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.giants.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.giants.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.giants.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.giants.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.giants.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.giants.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.giants.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.giants.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.giants.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.giants.QBOneThisWeekName;
    }

    if (!gameInfo.giants.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the giants team object
      gameInfo.giants.opponentThisWeek = {};
      gameInfo.giants.opponentThisWeek.teamName = team.teamName;
      gameInfo.giants.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.giants.opponentvtt = +team.vtt;
      gameInfo.giants.opponentThisWeek.vtt = +team.vtt;
      gameInfo.giants.gameTotalVegasTotal = +team.vtt + +gameInfo.giants.vtt;
      gameInfo.giants.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.giants.vtt;
      gameInfo.giants.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.giants.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.giants.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.giants.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.giants.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.giants.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.giants.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.giants.opposingTeamDef =
        +gameInfo.giants.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.giants.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.giants.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.giants.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.giants.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.giants.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.giants);
      calcProjectedTeamPoints(team, gameInfo.giants);
    }
  }
  if (team.opponentABV === 'NYJ') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the jets this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.jets.teamName;
      team.opponentThisWeek.teamABV = gameInfo.jets.teamABV;
      team.opponentThisWeek.vtt = gameInfo.jets.vtt;
      team.opponentvtt = gameInfo.jets.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.jets.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.jets.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.jets.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.jets.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.jets.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.jets.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.jets.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.jets.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.jets.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.jets.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.jets.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.jets.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.jets.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.jets.QBOneThisWeekName;
    }

    if (!gameInfo.jets.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the jets team object
      gameInfo.jets.opponentThisWeek = {};
      gameInfo.jets.opponentThisWeek.teamName = team.teamName;
      gameInfo.jets.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.jets.opponentvtt = +team.vtt;
      gameInfo.jets.opponentThisWeek.vtt = +team.vtt;
      gameInfo.jets.gameTotalVegasTotal = +team.vtt + +gameInfo.jets.vtt;
      gameInfo.jets.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.jets.vtt;
      gameInfo.jets.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.jets.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.jets.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.jets.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.jets.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.jets.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.jets.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.jets.opposingTeamDef =
        +gameInfo.jets.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.jets.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.jets.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.jets.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.jets.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.jets.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.jets);
      calcProjectedTeamPoints(team, gameInfo.jets);
    }
  }
  if (team.opponentABV === 'PHI') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the eagles this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.eagles.teamName;
      team.opponentThisWeek.teamABV = gameInfo.eagles.teamABV;
      team.opponentThisWeek.vtt = gameInfo.eagles.vtt;
      team.opponentvtt = gameInfo.eagles.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.eagles.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.eagles.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.eagles.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.eagles.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.eagles.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.eagles.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.eagles.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.eagles.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.eagles.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.eagles.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.eagles.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.eagles.teamDefScoreToUseForOpposingTeamDef;
      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.eagles.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.eagles.QBOneThisWeekName;
    }

    if (!gameInfo.eagles.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the eagles team object
      gameInfo.eagles.opponentThisWeek = {};
      gameInfo.eagles.opponentThisWeek.teamName = team.teamName;
      gameInfo.eagles.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.eagles.opponentvtt = +team.vtt;
      gameInfo.eagles.opponentThisWeek.vtt = +team.vtt;
      gameInfo.eagles.gameTotalVegasTotal = +team.vtt + +gameInfo.eagles.vtt;
      gameInfo.eagles.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.eagles.vtt;
      gameInfo.eagles.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.eagles.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.eagles.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.eagles.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.eagles.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.eagles.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.eagles.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.eagles.opposingTeamDef =
        +gameInfo.eagles.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.eagles.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.eagles.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.eagles.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;

      gameInfo.eagles.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.eagles.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.eagles);
      calcProjectedTeamPoints(team, gameInfo.eagles);
    }
  }
  if (team.opponentABV === 'PIT') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the steelers this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.steelers.teamName;
      team.opponentThisWeek.teamABV = gameInfo.steelers.teamABV;
      team.opponentThisWeek.vtt = gameInfo.steelers.vtt;
      team.opponentvtt = gameInfo.steelers.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.steelers.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.steelers.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.steelers.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.steelers.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.steelers.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.steelers.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.steelers.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.steelers.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.steelers.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.steelers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.steelers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.steelers.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.steelers.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.steelers.QBOneThisWeekName;
    }

    if (!gameInfo.steelers.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the steelers team object
      gameInfo.steelers.opponentThisWeek = {};
      gameInfo.steelers.opponentThisWeek.teamName = team.teamName;
      gameInfo.steelers.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.steelers.opponentvtt = +team.vtt;
      gameInfo.steelers.opponentThisWeek.vtt = +team.vtt;
      gameInfo.steelers.gameTotalVegasTotal =
        +team.vtt + +gameInfo.steelers.vtt;
      gameInfo.steelers.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.steelers.vtt;
      gameInfo.steelers.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.steelers.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.steelers.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.steelers.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.steelers.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.steelers.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.steelers.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.steelers.opposingTeamDef =
        +gameInfo.steelers.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.steelers.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.steelers.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.steelers.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.steelers.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.steelers.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.steelers);
      calcProjectedTeamPoints(team, gameInfo.steelers);
    }
  }
  if (team.opponentABV === 'SF') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the SF49ers this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.SF49ers.teamName;
      team.opponentThisWeek.teamABV = gameInfo.SF49ers.teamABV;
      team.opponentThisWeek.vtt = gameInfo.SF49ers.vtt;
      team.opponentvtt = gameInfo.SF49ers.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.SF49ers.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.SF49ers.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.SF49ers.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.SF49ers.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.SF49ers.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.SF49ers.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.SF49ers.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.SF49ers.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.SF49ers.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.SF49ers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.SF49ers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.SF49ers.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.SF49ers.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.SF49ers.QBOneThisWeekName;
    }

    if (!gameInfo.SF49ers.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the SF49ers team object
      gameInfo.SF49ers.opponentThisWeek = {};
      gameInfo.SF49ers.opponentThisWeek.teamName = team.teamName;
      gameInfo.SF49ers.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.SF49ers.opponentvtt = +team.vtt;
      gameInfo.SF49ers.opponentThisWeek.vtt = +team.vtt;
      gameInfo.SF49ers.gameTotalVegasTotal = +team.vtt + +gameInfo.SF49ers.vtt;
      gameInfo.SF49ers.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.SF49ers.vtt;
      gameInfo.SF49ers.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.SF49ers.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.SF49ers.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.SF49ers.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.SF49ers.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.SF49ers.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.SF49ers.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.SF49ers.opposingTeamDef =
        +gameInfo.SF49ers.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.SF49ers.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.SF49ers.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.SF49ers.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.SF49ers.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.SF49ers.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.SF49ers);
      calcProjectedTeamPoints(team, gameInfo.SF49ers);
    }
  }
  if (team.opponentABV === 'SEA') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the seahawks this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.seahawks.teamName;
      team.opponentThisWeek.teamABV = gameInfo.seahawks.teamABV;
      team.opponentThisWeek.vtt = gameInfo.seahawks.vtt;
      team.opponentvtt = gameInfo.seahawks.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.seahawks.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.seahawks.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.seahawks.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.seahawks.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.seahawks.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.seahawks.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.seahawks.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.seahawks.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.seahawks.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.seahawks.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.seahawks.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.seahawks.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.seahawks.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.seahawks.QBOneThisWeekName;
    }

    if (!gameInfo.seahawks.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the SF49ers team object
      gameInfo.seahawks.opponentThisWeek = {};
      gameInfo.seahawks.opponentThisWeek.teamName = team.teamName;
      gameInfo.seahawks.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.seahawks.opponentvtt = +team.vtt;
      gameInfo.seahawks.opponentThisWeek.vtt = +team.vtt;
      gameInfo.seahawks.gameTotalVegasTotal =
        +team.vtt + +gameInfo.seahawks.vtt;
      gameInfo.seahawks.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.seahawks.vtt;
      gameInfo.seahawks.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.seahawks.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.seahawks.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.seahawks.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.seahawks.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.seahawks.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.seahawks.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.seahawks.opposingTeamDef =
        +gameInfo.seahawks.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.seahawks.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.seahawks.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.seahawks.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.seahawks.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.seahawks.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.seahawks);
      calcProjectedTeamPoints(team, gameInfo.seahawks);
    }
  }
  if (team.opponentABV === 'TB') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the buccaneers this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.buccaneers.teamName;
      team.opponentThisWeek.teamABV = gameInfo.buccaneers.teamABV;
      team.opponentThisWeek.vtt = gameInfo.buccaneers.vtt;
      team.opponentvtt = gameInfo.buccaneers.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.buccaneers.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.buccaneers.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.buccaneers.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.buccaneers.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.buccaneers.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.buccaneers.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.buccaneers.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.buccaneers.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.buccaneers.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.buccaneers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.buccaneers.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.buccaneers.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.buccaneers.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.buccaneers.QBOneThisWeekName;
    }

    if (!gameInfo.buccaneers.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the buccaneers team object
      gameInfo.buccaneers.opponentThisWeek = {};
      gameInfo.buccaneers.opponentThisWeek.teamName = team.teamName;
      gameInfo.buccaneers.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.buccaneers.opponentvtt = +team.vtt;
      gameInfo.buccaneers.opponentThisWeek.vtt = +team.vtt;
      gameInfo.buccaneers.gameTotalVegasTotal =
        +team.vtt + +gameInfo.buccaneers.vtt;
      gameInfo.buccaneers.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.buccaneers.vtt;
      gameInfo.buccaneers.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.buccaneers.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.buccaneers.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.buccaneers.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.buccaneers.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.buccaneers.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.buccaneers.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.buccaneers.opposingTeamDef =
        +gameInfo.buccaneers.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.buccaneers.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.buccaneers.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.buccaneers.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.buccaneers.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.buccaneers.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.buccaneers);
      calcProjectedTeamPoints(team, gameInfo.buccaneers);
    }
  }
  if (team.opponentABV === 'TEN') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the titans this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.titans.teamName;
      team.opponentThisWeek.teamABV = gameInfo.titans.teamABV;
      team.opponentThisWeek.vtt = gameInfo.titans.vtt;
      team.opponentvtt = gameInfo.titans.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.titans.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.titans.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.titans.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.titans.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.titans.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.titans.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.titans.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.titans.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.titans.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.titans.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.titans.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.titans.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.titans.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.titans.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.titans.QBOneThisWeekName;
    }

    if (!gameInfo.titans.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the titans team object
      gameInfo.titans.opponentThisWeek = {};
      gameInfo.titans.opponentThisWeek.teamName = team.teamName;
      gameInfo.titans.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.titans.opponentvtt = +team.vtt;
      gameInfo.titans.opponentThisWeek.vtt = +team.vtt;
      gameInfo.titans.gameTotalVegasTotal = +team.vtt + +gameInfo.titans.vtt;
      gameInfo.titans.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.titans.vtt;
      gameInfo.titans.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.titans.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.titans.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.titans.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.titans.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.titans.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.titans.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.titans.opposingTeamDef =
        +gameInfo.titans.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.titans.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.titans.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.titans.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.titans.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.titans.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.titans);
      calcProjectedTeamPoints(team, gameInfo.titans);
    }
  }
  if (team.opponentABV === 'WAS') {
    if (!team.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the team that is playing the commanders this week's team object
      team.teamFirstPassedInForMatchupThisWeekIs = team.teamABV;
      team.opponentThisWeek = {};
      team.opponentThisWeek.teamName = gameInfo.commanders.teamName;
      team.opponentThisWeek.teamABV = gameInfo.commanders.teamABV;
      team.opponentThisWeek.vtt = gameInfo.commanders.vtt;
      team.opponentvtt = gameInfo.commanders.vtt;
      team.gameTotalVegasTotal = +team.vtt + +gameInfo.commanders.vtt;
      team.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.commanders.vtt;
      team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        gameInfo.commanders.teamPlaysPerSixtyMinNeutralSituations;
      team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        gameInfo.commanders.teamPlaysPerSixtyMinAllSituations;

      team.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        gameInfo.commanders.teamDefScoreForGameEvironmentAndGameScript;
      team.opponentThisWeek.offExplosivePassRateRank =
        gameInfo.commanders.offExplosivePassRateRank;
      team.opponentThisWeek.offExplosiveRushRateRank =
        gameInfo.commanders.offExplosiveRushRateRank;
      team.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        gameInfo.commanders.defExplosivePassPercentageAgainstRank;
      team.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        gameInfo.commanders.defExplosiveRushPercentageAgainstRank;
      team.opponentThisWeek.adjustmentFactorForOpposingDef =
        +gameInfo.commanders.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.opposingTeamDef =
        gameInfo.commanders.teamDefScoreToUseForOpposingTeamDef;
      team.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +gameInfo.commanders.teamDefScoreToUseForOpposingTeamDef;

      team.opposingTeamDef = +team.teamDefScoreToUseForOpposingTeamDef;

      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        gameInfo.commanders.InitialTeamLikelihoodOfOffensiveSuccess;

      team.opponentThisWeek.qbName = gameInfo.commanders.QBOneThisWeekName;
    }

    if (!gameInfo.commanders.opponentThisWeek) {
      //setting properties on the opponentThisWeek object inside of the texans team object
      gameInfo.commanders.opponentThisWeek = {};
      gameInfo.commanders.opponentThisWeek.teamName = team.teamName;
      gameInfo.commanders.opponentThisWeek.teamABV = team.teamABV;
      gameInfo.commanders.opponentvtt = +team.vtt;
      gameInfo.commanders.opponentThisWeek.vtt = +team.vtt;
      gameInfo.commanders.gameTotalVegasTotal =
        +team.vtt + +gameInfo.commanders.vtt;
      gameInfo.commanders.opponentThisWeek.gameTotalVegasTotal =
        +team.vtt + +gameInfo.commanders.vtt;
      gameInfo.commanders.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
        team.teamPlaysPerSixtyMinNeutralSituations;
      gameInfo.commanders.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
        team.teamPlaysPerSixtyMinAllSituations;

      gameInfo.commanders.opponentThisWeek.offExplosivePassRateRank =
        team.offExplosivePassRateRank;
      gameInfo.commanders.opponentThisWeek.offExplosiveRushRateRank =
        team.offExplosiveRushRateRank;
      gameInfo.commanders.opponentThisWeek.defExplosivePassPercentageAgainstRank =
        team.defExplosivePassPercentageAgainstRank;
      gameInfo.commanders.opponentThisWeek.defExplosiveRushPercentageAgainstRank =
        team.defExplosiveRushPercentageAgainstRank;
      gameInfo.commanders.opponentThisWeek.adjustmentFactorForOpposingDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.commanders.opposingTeamDef =
        +gameInfo.commanders.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.commanders.opponentThisWeek.teamDefScoreForGameEvironmentAndGameScript =
        team.teamDefScoreForGameEvironmentAndGameScript;

      gameInfo.commanders.opponentThisWeek.opposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.commanders.opponentThisWeek.teamDefScoreToUseForOpposingTeamDef =
        +team.teamDefScoreToUseForOpposingTeamDef;
      gameInfo.commanders.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
        team.InitialTeamLikelihoodOfOffensiveSuccess;

      gameInfo.commanders.opponentThisWeek.qbName = team.QBOneThisWeekName;
    }

    if (!team.teamProjectedPointsThisWeek) {
      calcOffExplosiveVsDefAgainstExplosive(team, gameInfo.commanders);
      calcProjectedTeamPoints(team, gameInfo.commanders);
    }
  }
  // calcOffExplosiveVsDefAgainstExplosive();
  // calcProjectedTeamPoints();

  if (team.opponentThisWeek) {
    team.vttDifference = team.vtt - team.opponentThisWeek.vtt;
    team.initialGameTotalLikelihoodOfOffensiveSuccess =
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess +
      team.InitialTeamLikelihoodOfOffensiveSuccess;
    team.initialGameLikelihoodOfOffensiveSuccessDifference = +(
      team.InitialTeamLikelihoodOfOffensiveSuccess -
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess
    ).toFixed(2);
    if (team.initialGameLikelihoodOfOffensiveSuccessDifference > 17.5) {
      team.opponentThisWeek.initialLikeliestGameFlow = 'negative';
      team.initialLikeliestGameFlow = 'positive';
    }
    if (team.initialGameLikelihoodOfOffensiveSuccessDifference < -17.5) {
      team.opponentThisWeek.initialLikeliestGameFlow = 'positive';
      team.initialLikeliestGameFlow = 'negetive';
    }
    if (
      team.initialGameLikelihoodOfOffensiveSuccessDifference < 17.5 &&
      team.initialGameLikelihoodOfOffensiveSuccessDifference > -17.5
    ) {
      team.opponentThisWeek.initialLikeliestGameFlow = 'neutral';
      team.initialLikeliestGameFlow = 'neutral';
    }
    if (team.initialGameTotalLikelihoodOfOffensiveSuccess < 155) {
      team.initialLikelyScoringEnvironment =
        'Low Scoring Total, Close Game, Mostly Neutral Game Script';
    }
    if (
      (team.initialGameTotalLikelihoodOfOffensiveSuccess < 155 &&
        team.initialLikeliestGameFlow === 'positive') ||
      team.initialLikeliestGameFlow === 'negetive'
    ) {
      team.initialLikelyScoringEnvironment =
        'Low Scoring Total, one sided Game, Mostly Non Neutral Game Script';
    }
    if (
      team.initialGameTotalLikelihoodOfOffensiveSuccess > 155 &&
      team.initialGameTotalLikelihoodOfOffensiveSuccess < 167.5 &&
      team.initialLikeliestGameFlow === 'neutral'
    ) {
      team.initialLikelyScoringEnvironment =
        'Average Scoring Total, Close Game, Mostly Neutral Game Script';
    }
    if (
      team.initialGameTotalLikelihoodOfOffensiveSuccess > 155 &&
      team.initialGameTotalLikelihoodOfOffensiveSuccess < 167.5 &&
      team.initialLikeliestGameFlow === 'positive'
    ) {
      team.initialLikelyScoringEnvironment = `Average Scoring Total, one sided Game, Mostly Non Neutral Game Script with ${team.teamName} likely to be a positive game script in the second half. ${team.opponentThisWeek.teamName} likely to have negetive game scripts in the second half`;
    }
    if (
      team.initialGameTotalLikelihoodOfOffensiveSuccess > 155 &&
      team.initialGameTotalLikelihoodOfOffensiveSuccess < 167.5 &&
      team.initialLikeliestGameFlow === 'negetive'
    ) {
      team.initialLikelyScoringEnvironment = `Average Scoring Total, one sided Game, Mostly Non Neutral Game Script with ${team.opponentThisWeek.teamName} likely to be a positive game script in the second half. ${team.teamName} likely to have negetive game scripts in the second half`;
    }
    if (
      team.initialGameTotalLikelihoodOfOffensiveSuccess > 167.5 &&
      team.initialLikeliestGameFlow === 'neutral'
    ) {
      team.initialLikelyScoringEnvironment =
        'High Scoring Total, Back And Forth, Possible Shootout, Mostly Neutral Game Script';
    }
    if (
      team.initialGameTotalLikelihoodOfOffensiveSuccess > 167.5 &&
      team.initialLikeliestGameFlow === 'positive'
    ) {
      team.initialLikelyScoringEnvironment = `High Scoring Total, one sided Game, Mostly Non Neutral Game Script with ${team.teamName} controlling the game and possibly quite early. ${team.opponentThisWeek.teamName} likely playing in negetive game script for a good amount of the game`;
    }
  }
  if (
    team.initialGameTotalLikelihoodOfOffensiveSuccess > 167.5 &&
    team.initialLikeliestGameFlow === 'negetive'
  ) {
    team.initialLikelyScoringEnvironment = `High Scoring Total, one sided Game, Mostly Non Neutral Game Script with ${team.opponentThisWeek.teamName} controlling the game and possibly quite early. ${team.teamName} likely playing in negetive game script for a good amount of the game`;
  }
  if (
    team.initialGameTotalLikelihoodOfOffensiveSuccess > 167.5 &&
    team.InitialTeamLikelihoodOfOffensiveSuccess < 80 &&
    team.initialLikeliestGameFlow === 'negetive'
  ) {
    team.initialLikelyScoringEnvironment = `High Scoring Total, one sided Game, Mostly Non Neutral Game Script with ${team.opponentThisWeek.teamName} controlling the game and possibly quite early. ${team.teamName} likely playing in negetive game script for a good amount of the game`;
  }
};

assignOpponentObjectToPassedInTeam(gameInfo.SF49ers);
assignOpponentObjectToPassedInTeam(gameInfo.bears);
assignOpponentObjectToPassedInTeam(gameInfo.bengals);
assignOpponentObjectToPassedInTeam(gameInfo.bills);
assignOpponentObjectToPassedInTeam(gameInfo.broncos);
assignOpponentObjectToPassedInTeam(gameInfo.browns);
assignOpponentObjectToPassedInTeam(gameInfo.buccaneers);
assignOpponentObjectToPassedInTeam(gameInfo.cardinals);
assignOpponentObjectToPassedInTeam(gameInfo.chargers);
assignOpponentObjectToPassedInTeam(gameInfo.chiefs);
assignOpponentObjectToPassedInTeam(gameInfo.colts);
assignOpponentObjectToPassedInTeam(gameInfo.commanders);
assignOpponentObjectToPassedInTeam(gameInfo.cowboys);
assignOpponentObjectToPassedInTeam(gameInfo.dolphins);
assignOpponentObjectToPassedInTeam(gameInfo.eagles);
assignOpponentObjectToPassedInTeam(gameInfo.falcons);
assignOpponentObjectToPassedInTeam(gameInfo.giants);
assignOpponentObjectToPassedInTeam(gameInfo.jaguars);
assignOpponentObjectToPassedInTeam(gameInfo.jets);
assignOpponentObjectToPassedInTeam(gameInfo.lions);
assignOpponentObjectToPassedInTeam(gameInfo.packers);
assignOpponentObjectToPassedInTeam(gameInfo.panthers);
assignOpponentObjectToPassedInTeam(gameInfo.patriots);
assignOpponentObjectToPassedInTeam(gameInfo.raiders);
assignOpponentObjectToPassedInTeam(gameInfo.rams);
assignOpponentObjectToPassedInTeam(gameInfo.ravens);
assignOpponentObjectToPassedInTeam(gameInfo.saints);
assignOpponentObjectToPassedInTeam(gameInfo.seahawks);
assignOpponentObjectToPassedInTeam(gameInfo.steelers);
assignOpponentObjectToPassedInTeam(gameInfo.texans);
assignOpponentObjectToPassedInTeam(gameInfo.titans);
assignOpponentObjectToPassedInTeam(gameInfo.vikings);

const SF = gameInfo.SF49ers;
const CHI = gameInfo.bears;
const CIN = gameInfo.bengals;
const BUF = gameInfo.bills;
const DEN = gameInfo.broncos;
const CLE = gameInfo.browns;
const TB = gameInfo.buccaneers;
const ARI = gameInfo.cardinals;
const LAC = gameInfo.chargers;
const KC = gameInfo.chiefs;
const IND = gameInfo.colts;
const WAS = gameInfo.commanders;
const DAL = gameInfo.cowboys;
const MIA = gameInfo.dolphins;
const PHI = gameInfo.eagles;
const ATL = gameInfo.falcons;
const NYG = gameInfo.giants;
const JAC = gameInfo.jaguars;
const NYJ = gameInfo.jets;
const DET = gameInfo.lions;
const GB = gameInfo.packers;
const CAR = gameInfo.panthers;
const NE = gameInfo.patriots;
const LV = gameInfo.raiders;
const LAR = gameInfo.rams;
const BAL = gameInfo.ravens;
const NO = gameInfo.saints;
const SEA = gameInfo.seahawks;
const PIT = gameInfo.steelers;
const HOU = gameInfo.texans;
const TEN = gameInfo.titans;
const MIN = gameInfo.vikings;

const allGameInfo = [
  SF,
  CHI,
  CIN,
  BUF,
  DEN,
  CLE,
  TB,
  ARI,
  LAC,
  KC,
  IND,
  WAS,
  DAL,
  MIA,
  PHI,
  ATL,
  NYG,
  NYJ,
  JAC,
  DET,
  GB,
  CAR,
  NE,
  LV,
  LAR,
  BAL,
  NO,
  SEA,
  PIT,
  HOU,
  TEN,
  MIN,
];

allGameInfo.forEach(function (team) {
  if (
    team.teamProjectedPointsThisWeek - team.vtt > 3 ||
    team.vtt - team.teamProjectedPointsThisWeek > 3
  ) {
    // console.log(team.teamName, team.vtt, team.teamProjectedPointsThisWeek)
    team.teamProjectedPointsThisWeek = +(
      (+team.teamProjectedPointsThisWeek + +team.vtt) /
      2
    ).toFixed(2);
  }

  if (team.opponentThisWeek) {
    // console.log(team.opponentThisWeek)

    // console.log(team.opponentThisWeek.teamProjectedPointsThisWeek)

    if (
      team.opponentThisWeek.teamProjectedPointsThisWeek -
        team.opponentThisWeek.vtt >
        3 ||
      team.opponentThisWeek.vtt -
        team.opponentThisWeek.teamProjectedPointsThisWeek >
        3
    ) {
      // console.log(team.teamName, team.vtt, team.teamProjectedPointsThisWeek)
      team.opponentThisWeek.teamProjectedPointsThisWeek = +(
        (+team.opponentThisWeek.teamProjectedPointsThisWeek +
          +team.opponentThisWeek.vtt) /
        2
      ).toFixed(2);
    }

    team.myProjectedGameTotal = +(
      +team.teamProjectedPointsThisWeek +
      +team.opponentThisWeek.teamProjectedPointsThisWeek
    ).toFixed(2);

    team.diffBetweenMyGameTotalAndVtt = +(
      +team.myProjectedGameTotal - +team.gameTotalVegasTotal
    ).toFixed(1);
  }
});

allGameInfo.forEach(function (team) {
  // console.log(team.slate)
  if (team.teamProjectedPointsThisWeek) {
    // console.log(
    //   team.teamName,
    //   team.teamProjectedPointsThisWeek,
    //   team.opponentABV,
    //   team.opponentThisWeek.teamProjectedPointsThisWeek,
    //   team.diffBetweenMyGameTotalAndVtt
    // );
  } else {
    // console.log(team)
  }
});

// console.log(
//   gameInfo.browns.teamProjectedPointsThisWeek,
//   gameInfo.browns.opponentABV,
//   gameInfo.browns.opponentThisWeek.teamProjectedPointsThisWeek
// );
// console.log(gameInfo.browns);

// console.log(gameInfo.saints);
// console.log(gameInfo.texans);
// console.log(gameInfo.bears);
// console.log(gameInfo.steelers);
// console.log(gameInfo.seahawks);
// console.log(gameInfo.vikings);
// console.log(gameInfo.SF49ers);
// console.log(gameInfo.bengals);
// console.log(gameInfo.rams)
// console.log(gameInfo.dolphins)
// console.log(gameInfo.panthers)
// console.log(gameInfo.cowboys)
// console.log(gameInfo);

module.exports = gameInfo;
