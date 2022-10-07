const wholeDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholeDownloadableSpreadSheetYahoo');
const qbDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/qbDownloadableSpreadSheetYahoo');
const wholePlayerPricingWithPercentOfCapDraftkings = require('../datafilesmadefrom4for4CSVs/draftkings/wholePlayerPricingWithPercentOfCapDraftkings');
const wholePlayerPricingWithPercentOfCapFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/wholePlayerPricingWithPercentOfCapFanduel');
const wholePlayerPricingWithPercntOfCapYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholePlayerPricingWithPercentOfCapYahoo');
const gppLeverageScoresAndProjOwnershipDraftkings = require('../datafilesmadefrom4for4CSVs/draftkings/gppLeverageScoresAndProjOwnershipDraftkings');
const gppLeverageScoresAndProjOwnershipFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/gppLeverageScoresAndProjOwnershipFanduel');
const allNFLTeamPace = require('../datafilesmadefrom4for4CSVs/allNFLTeamPace');

const gameInfo = {
  week: {
    currentWeek: 3,
  },

  SF49ers: {
    teamName: '49ers',
    teamABV: 'SF',
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

  vikings: {
    teamName: 'Vikings',
    teamABV: 'MIN',
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

const populateTeamObjects = function (passedInTeam) {
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
      let projpoints = +object['Y! (Proj)'];
      // console.log(`${passedInTeam.teamABV}: ${projpoints}`);
      passedInTeam.def4for4projectedpoints = projpoints;
    }
  });

  wholePlayerPricingWithPercentOfCapDraftkings.forEach(function (teamObj) {
    let tempTeamName = '';

    if (teamObj['"Team"'].length === 5) {
      tempTeamName = teamObj['"Team"'].slice(1, 4);
    } else {
      tempTeamName = teamObj['"Team"'].slice(1, 3);
    }

    if (
      passedInTeam.teamABV === tempTeamName &&
      teamObj['"Position"'] === '"DEF"'
    ) {
      draftkingssalary = +teamObj['"Current $"'].slice(1, 5);
      passedInTeam.teamDefDraftkingsSalary = draftkingssalary;
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

    if (
      passedInTeam.teamABV === tempTeamName &&
      teamObj['"Position"'] === '"DEF"'
    ) {
      fanduelsalary = +teamObj['"Current $"'].slice(1, 5);
      passedInTeam.teamDefFanduelSalary = fanduelsalary;
      let fdPercentOfCap = +teamObj['"% of Cap"'].slice(1, 5);
      passedInTeam.percentOfSalaryCapFanduel = fdPercentOfCap;
    }
  });

  wholePlayerPricingWithPercntOfCapYahoo.forEach(function (teamObj) {
    let tempTeamName = '';

    if (teamObj['"Team"'].length === 5) {
      tempTeamName = teamObj['"Team"'].slice(1, 4);
    } else {
      tempTeamName = teamObj['"Team"'].slice(1, 3);
    }

    if (
      passedInTeam.teamABV === tempTeamName &&
      teamObj['"Position"'] === '"DEF"'
    ) {
      Yahoosalary = +teamObj['"Current $"'].slice(1, 3);
      passedInTeam.teamDefYahooSalary = Yahoosalary;
      let yahooPercentOfCap = +teamObj['"% of Cap"'].slice(1, 5);
      passedInTeam.percentOfSalaryCapYahoo = yahooPercentOfCap;
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

    if (tempTeamName === passedInTeam.teamABV && teamObj['"Pos"'] === '"DEF"') {
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

    if (tempTeamName === passedInTeam.teamABV && teamObj['"Pos"'] === '"DEF"') {
      fdOwnership = +teamObj['"Projected Own%"'].slice(1, 4);
      passedInTeam.fanduelProjectedOwnership = fdOwnership;
    }
  });

  //assinging opponentABV
  allNFLTeamPace.forEach(function (teamObj) {
    let tempHomeTeamName = '';
    let tempAwayTeamName = '';
    // console.log(teamObj['"Tm"'].length);
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

console.log(gameInfo);

module.exports = gameInfo;
