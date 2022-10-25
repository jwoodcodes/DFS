const wholeDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholeDownloadableSpreadSheetYahoo');
const qbDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/qbDownloadableSpreadSheetYahoo');

const gppLeverageScoresAndProjOwnershipDraftkings = require('../datafilesmadefrom4for4CSVs/draftkings/gppLeverageScoresAndProjOwnershipDraftkings');
const gppLeverageScoresAndProjOwnershipFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/gppLeverageScoresAndProjOwnershipFanduel');
const allNFLTeamPace = require('../datafilesmadefrom4for4CSVs/allNFLTeamPace');
const allFullPPRProjectedPointsWithoutTeamDef = require('../datafilesmadefrom4for4CSVs/allFullPPRProjectedPointsWithoutTeamDef');
const allQBGLSP = require('../datafilesmadefrom4for4CSVs/allQBGLSP');

const allFlexGLSP = require('../datafilesmadefrom4for4CSVs/allFlexGLSP');
const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');

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
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 14,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 10,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 7,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 9,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 9,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 13,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 8,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 8,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 9,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 11,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 7,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 14,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 9,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 11,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 10,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 6,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 14,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 13,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 10,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 6,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 7,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 10,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 14,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 11,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 6,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 6,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
    byeWeek2022: 7,
    vtt: 0,
    homeOrAway: '',
    slate: '',

    opponentABV: '',
    teamPlaysPerSixtyMinNeutralSituations: 0,
    teamPlaysPerSixtyMinAllSituations: 0,

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
  ////////////////////////////
  const setteamABVandVTT = function (team) {
    let settingTeamName = '';
    // console.log(passedInteam);
    wholeDownloadableSpreadSheetYahoo.forEach(function (object, i) {
      if (i < qbDownloadableSpreadSheetYahoo.length) {
        settingTeamName = qbDownloadableSpreadSheetYahoo[i].Team;
        // console.log(settingTeamName);
        if (passedInTeam.teamABV === settingTeamName) {
          // console.log(
          //   `${passedInTeam.teamABV}: ${qbDownloadableSpreadSheetYahoo[i]['Team O/U']}`
          // );
          passedInTeam.vtt = qbDownloadableSpreadSheetYahoo[i]['Team O/U'];
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
    gppLeverageScoresAndProjOwnershipDraftkings.forEach(function (teamObj) {
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
          if (!passedInTeam.RBOneThisWeekName) {
            passedInTeam.RBOneThisWeekName = team.Player;
            passedInTeam.RBOneThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
          if (
            passedInTeam.RBOneThisWeekName &&
            passedInTeam.RBOneThisWeekName !== team.Player &&
            !passedInTeam.RBTwoThisWeekName
          ) {
            passedInTeam.RBTwoThisWeekName = team.Player;
            passedInTeam.RBTwoThisWeek4for4HalfProjPoints = +team['Y! (Proj)'];
          }
        }
      }

      //setting WR's
      ///////////////
      if (PITeam.teamABV === team.Team) {
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
            passedInTeam.WRTwoThisWeekName !== team.Player
          ) {
            passedInTeam.WRThreeThisWeekName = team.Player;
            passedInTeam.WRThreeThisWeek4for4HalfProjPoints =
              +team['Y! (Proj)'];
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
        wrThree = +passedInTeam.WRThreeThisWeek4for4HalfProjPoints.toFixed(2);
        te = +passedInTeam.TEOneThisWeek4for4HalfProjPoints.toFixed(2);

        passedInTeam.InitialTeamLikelihoodOfOffensiveSuccess = +(
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
  if (team.opponentABV === 'ARI') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.cardinals.teamName;
    team.opponentThisWeek.teamABV = gameInfo.cardinals.teamABV;
    team.opponentThisWeek.vtt = gameInfo.cardinals.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.cardinals.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.cardinals.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.cardinals.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'ATL') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.falcons.teamName;
    team.opponentThisWeek.teamABV = gameInfo.falcons.teamABV;
    team.opponentThisWeek.vtt = gameInfo.falcons.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.falcons.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.falcons.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.falcons.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'BAL') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.ravens.teamName;
    team.opponentThisWeek.teamABV = gameInfo.ravens.teamABV;
    team.opponentThisWeek.vtt = gameInfo.ravens.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.ravens.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.ravens.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.ravens.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'BUF') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.bills.teamName;
    team.opponentThisWeek.teamABV = gameInfo.bills.teamABV;
    team.opponentThisWeek.vtt = gameInfo.bills.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.bills.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.bills.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.bills.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'CAR') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.panthers.teamName;
    team.opponentThisWeek.teamABV = gameInfo.panthers.teamABV;
    team.opponentThisWeek.vtt = gameInfo.panthers.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.panthers.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.panthers.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.panthers.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'CHI') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.bears.teamName;
    team.opponentThisWeek.teamABV = gameInfo.bears.teamABV;
    team.opponentThisWeek.vtt = gameInfo.bears.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.bears.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.bears.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.bears.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'CIN') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.bengals.teamName;
    team.opponentThisWeek.teamABV = gameInfo.bengals.teamABV;
    team.opponentThisWeek.vtt = gameInfo.bengals.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.bengals.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.bengals.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.bengals.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'CLE') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.browns.teamName;
    team.opponentThisWeek.teamABV = gameInfo.browns.teamABV;
    team.opponentThisWeek.vtt = gameInfo.browns.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.browns.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.browns.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.browns.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'DAL') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.cowboys.teamName;
    team.opponentThisWeek.teamABV = gameInfo.cowboys.teamABV;
    team.opponentThisWeek.vtt = gameInfo.cowboys.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.cowboys.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.cowboys.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.cowboys.InitialTeamLikelihoodOfOffensiveSuccess;
  }

  if (team.opponentABV === 'DEN') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.broncos.teamName;
    team.opponentThisWeek.teamABV = gameInfo.broncos.teamABV;
    team.opponentThisWeek.vtt = gameInfo.broncos.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.broncos.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.broncos.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.broncos.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'DET') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.lions.teamName;
    team.opponentThisWeek.teamABV = gameInfo.lions.teamABV;
    team.opponentThisWeek.vtt = gameInfo.lions.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.lions.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.lions.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.lions.InitialTeamLikelihoodOfOffensiveSuccess;
  }

  if (team.opponentABV === 'GB') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.packers.teamName;
    team.opponentThisWeek.teamABV = gameInfo.packers.teamABV;
    team.opponentThisWeek.vtt = gameInfo.packers.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.packers.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.packers.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.packers.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'HOU') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.texans.teamName;
    team.opponentThisWeek.teamABV = gameInfo.texans.teamABV;
    team.opponentThisWeek.vtt = gameInfo.texans.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.texans.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.texans.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.texans.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'IND') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.colts.teamName;
    team.opponentThisWeek.teamABV = gameInfo.colts.teamABV;
    team.opponentThisWeek.vtt = gameInfo.colts.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.colts.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.colts.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.colts.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'JAC') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.jaguars.teamName;
    team.opponentThisWeek.teamABV = gameInfo.jaguars.teamABV;
    team.opponentThisWeek.vtt = gameInfo.jaguars.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.jaguars.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.jaguars.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.jaguars.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'KC') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.chiefs.teamName;
    team.opponentThisWeek.teamABV = gameInfo.chiefs.teamABV;
    team.opponentThisWeek.vtt = gameInfo.chiefs.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.chiefs.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.colts.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.chiefs.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'LV') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.raiders.teamName;
    team.opponentThisWeek.teamABV = gameInfo.raiders.teamABV;
    team.opponentThisWeek.vtt = gameInfo.raiders.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.raiders.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.raiders.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.raiders.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'LAC') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.chargers.teamName;
    team.opponentThisWeek.teamABV = gameInfo.chargers.teamABV;
    team.opponentThisWeek.vtt = gameInfo.chargers.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.chargers.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.chargers.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.chargers.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'LAR') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.rams.teamName;
    team.opponentThisWeek.teamABV = gameInfo.rams.teamABV;
    team.opponentThisWeek.vtt = gameInfo.rams.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.rams.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.rams.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.rams.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'MIA') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.dolphins.teamName;
    team.opponentThisWeek.teamABV = gameInfo.dolphins.teamABV;
    team.opponentThisWeek.vtt = gameInfo.dolphins.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.dolphins.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.dolphins.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.dolphins.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'MIN') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.vikings.teamName;
    team.opponentThisWeek.teamABV = gameInfo.vikings.teamABV;
    team.opponentThisWeek.vtt = gameInfo.vikings.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.vikings.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.vikings.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.vikings.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'NE') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.patriots.teamName;
    team.opponentThisWeek.teamABV = gameInfo.patriots.teamABV;
    team.opponentThisWeek.vtt = gameInfo.patriots.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.patriots.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.patriots.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.patriots.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'NO') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.saints.teamName;
    team.opponentThisWeek.teamABV = gameInfo.saints.teamABV;
    team.opponentThisWeek.vtt = gameInfo.saints.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.saints.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.saints.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.saints.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'NYG') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.giants.teamName;
    team.opponentThisWeek.teamABV = gameInfo.giants.teamABV;
    team.opponentThisWeek.vtt = gameInfo.giants.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.giants.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.giants.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.giants.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'NYJ') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.jets.teamName;
    team.opponentThisWeek.teamABV = gameInfo.jets.teamABV;
    team.opponentThisWeek.vtt = gameInfo.jets.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.jets.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.jets.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.jets.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'PHI') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.eagles.teamName;
    team.opponentThisWeek.teamABV = gameInfo.eagles.teamABV;
    team.opponentThisWeek.vtt = gameInfo.eagles.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.eagles.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.eagles.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.eagles.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'PIT') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.steelers.teamName;
    team.opponentThisWeek.teamABV = gameInfo.steelers.teamABV;
    team.opponentThisWeek.vtt = gameInfo.steelers.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.steelers.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.steelers.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.steelers.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'SF') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.SF49ers.teamName;
    team.opponentThisWeek.teamABV = gameInfo.SF49ers.teamABV;
    team.opponentThisWeek.vtt = gameInfo.SF49ers.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.SF49ers.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.SF49ers.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.SF49ers.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'SEA') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.seahawks.teamName;
    team.opponentThisWeek.teamABV = gameInfo.seahawks.teamABV;
    team.opponentThisWeek.vtt = gameInfo.seahawks.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.seahawks.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.seahawks.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.seahawks.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'TB') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.buccaneers.teamName;
    team.opponentThisWeek.teamABV = gameInfo.buccaneers.teamABV;
    team.opponentThisWeek.vtt = gameInfo.buccaneers.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.buccaneers.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.buccaneers.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.buccaneers.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'TEN') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.titans.teamName;
    team.opponentThisWeek.teamABV = gameInfo.titans.teamABV;
    team.opponentThisWeek.vtt = gameInfo.titans.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.titans.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.titans.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.titans.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentABV === 'WAS') {
    team.opponentThisWeek = {};
    team.opponentThisWeek.teamName = gameInfo.commanders.teamName;
    team.opponentThisWeek.teamABV = gameInfo.commanders.teamABV;
    team.opponentThisWeek.vtt = gameInfo.commanders.vtt;
    team.opponentThisWeek.teamPlaysPerSixtyMinNeutralSituations =
      gameInfo.commanders.teamPlaysPerSixtyMinNeutralSituations;
    team.opponentThisWeek.teamPlaysPerSixtyMinAllSituations =
      gameInfo.commanders.teamPlaysPerSixtyMinAllSituations;
    team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess =
      gameInfo.commanders.InitialTeamLikelihoodOfOffensiveSuccess;
  }
  if (team.opponentThisWeek) {
    team.vttDifference = team.vtt - team.opponentThisWeek.vtt;
    team.initialGameTotalLikelihoodOfOffensiveSuccess =
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess +
      team.InitialTeamLikelihoodOfOffensiveSuccess;
    team.initialGameLikelihoodOfOffensiveSuccessDifference = +(
      team.InitialTeamLikelihoodOfOffensiveSuccess -
      team.opponentThisWeek.InitialTeamLikelihoodOfOffensiveSuccess
    ).toFixed(2);
    if (team.initialGameLikelihoodOfOffensiveSuccessDifference > 20) {
      team.opponentThisWeek.initialLikeliestGameFlow = 'negative';
      team.initialLikeliestGameFlow = 'positive';
    }
    if (team.initialGameLikelihoodOfOffensiveSuccessDifference < -20) {
      team.opponentThisWeek.initialLikeliestGameFlow = 'positive';
      team.initialLikeliestGameFlow = 'negetive';
    }
    if (
      team.initialGameLikelihoodOfOffensiveSuccessDifference < 20 &&
      team.initialGameLikelihoodOfOffensiveSuccessDifference > -20
    ) {
      team.opponentThisWeek.initialLikeliestGameFlow = 'neutral';
      team.initialLikeliestGameFlow = 'neutral';
    }
    if (team.initialGameTotalLikelihoodOfOffensiveSuccess < 160) {
      team.initialLikelyScoringEnvironment =
        'Low Scoring Total,Close Game, Mostly Neutral Game Script';
    }
    if (
      (team.initialGameTotalLikelihoodOfOffensiveSuccess < 160 &&
        team.initialLikeliestGameFlow === 'positive') ||
      team.initialLikeliestGameFlow === 'negetive'
    ) {
      team.initialLikelyScoringEnvironment =
        'Low Scoring Total, one sided Game, Mostly Non Neutral Game Script';
    }
    if (
      team.initialGameTotalLikelihoodOfOffensiveSuccess > 160 &&
      team.initialGameTotalLikelihoodOfOffensiveSuccess < 170 &&
      team.initialLikeliestGameFlow === 'neutral'
    ) {
      team.initialLikelyScoringEnvironment =
        'Average Scoring Total, Close Game, Mostly Neutral Game Script';
    }
    if (
      (team.initialGameTotalLikelihoodOfOffensiveSuccess > 160 &&
        team.initialGameTotalLikelihoodOfOffensiveSuccess < 170 &&
        team.initialLikeliestGameFlow === 'positive') ||
      team.initialLikeliestGameFlow === 'negetive'
    ) {
      team.initialLikelyScoringEnvironment =
        'Average Scoring Total, one sided Game, Mostly Non Neutral Game Script';
    }
    if (
      team.initialGameTotalLikelihoodOfOffensiveSuccess > 170 &&
      team.initialLikeliestGameFlow === 'neutral'
    ) {
      team.initialLikelyScoringEnvironment =
        'High Scoring Total, Back And Forth, Possible Shootout, Mostly Neutral Game Script';
    }
    if (
      (team.initialGameTotalLikelihoodOfOffensiveSuccess > 170 &&
        team.initialLikeliestGameFlow === 'positive') ||
      team.initialLikeliestGameFlow === 'negetive'
    ) {
      team.initialLikelyScoringEnvironment =
        'High Scoring Total, one sided Game, Mostly Non Neutral Game Script';
    }
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

console.log(gameInfo);

module.exports = gameInfo;
