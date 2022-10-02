const wholeDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholeDownloadableSpreadSheetYahoo');
const qbDownloadableSpreadSheetYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/qbDownloadableSpreadSheetYahoo');
const wholePlayerPricingWithPercentOfCapDraftkings = require('../datafilesmadefrom4for4CSVs/draftkings/wholePlayerPricingWithPercentOfCapDraftkings');
const wholePlayerPricingWithPercentOfCapFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/wholePlayerPricingWithPercentOfCapFanduel');
const wholePlayerPricingWithPercntOfCapYahoo = require('../datafilesmadefrom4for4CSVs/Yahoo/wholePlayerPricingWithPercentOfCapYahoo');
const gppLeverageScoresAndProjOwnershipDraftkings = require('../datafilesmadefrom4for4CSVs/draftkings/gppLeverageScoresAndProjOwnershipDraftkings');
const gppLeverageScoresAndProjOwnershipFanduel = require('../datafilesmadefrom4for4CSVs/Fanduel/gppLeverageScoresAndProjOwnershipFanduel');

const gameInfo = {
  week: {
    currentWeek: 3,
  },

  SF49ers: {
    teamName: '49ers',
    teamABV: 'SF',
    slate: 'night',
    vtt: 0,
    def4for4projectedpoints: 6.5,
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
    slate: 'night',
    vtt: 21.25,
    def4for4projectedpoints: 6.2,
    teamDefDraftkingsSalary: 3800,
    teamDefFanduelSalary: 4900,
    teamDefYahooSalary: 17,

    draftkingsProjectedOwnership: 1,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  bengals: {
    teamName: 'Bengals',
    teamABV: 'CIN',
    vtt: 25.25,
    def4for4projectedpoints: 7.1,
    teamDefDraftkingsSalary: 3600,
    teamDefFanduelSalary: 3600,
    teamDefYahooSalary: 12,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 12.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  bills: {
    teamName: 'Bills',
    teamABV: 'BUF',
    vtt: 29,
    def4for4projectedpoints: 6.8,
    teamDefDraftkingsSalary: 3500,
    teamDefFanduelSalary: 4600,
    teamDefYahooSalary: 18,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  broncos: {
    teamName: 'Broncos',
    teamABV: 'DEN',
    vtt: 0,
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
    vtt: 21.5,
    def4for4projectedpoints: 6.4,
    teamDefDraftkingsSalary: 3100,
    teamDefFanduelSalary: 4700,
    teamDefYahooSalary: 17,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  cardinals: {
    teamName: 'Cardinals',
    teamABV: 'ARI',
    vtt: 22.5,
    def4for4projectedpoints: 5.5,
    teamDefDraftkingsSalary: 2400,
    teamDefFanduelSalary: 3000,
    teamDefYahooSalary: 12,

    draftkingsProjectedOwnership: 1,
    fanduelProjectedOwnership: 17.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  chargers: {
    teamName: 'Chargers',
    teamABV: 'LAC',
    vtt: 27,
    def4for4projectedpoints: 6.5,
    teamDefDraftkingsSalary: 3900,
    teamDefFanduelSalary: 4500,
    teamDefYahooSalary: 18,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  chiefs: {
    teamName: 'Chiefs',
    teamABV: 'KC',
    vtt: 28,
    def4for4projectedpoints: 6.8,
    teamDefDraftkingsSalary: 3700,
    teamDefFanduelSalary: 4100,
    teamDefYahooSalary: 14,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  colts: {
    teamName: 'Colts',
    teamABV: 'IND',
    vtt: 22.5,
    def4for4projectedpoints: 4.7,
    teamDefDraftkingsSalary: 2200,
    teamDefFanduelSalary: 3600,
    teamDefYahooSalary: 12,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  commanders: {
    teamName: 'Commanders',
    teamABV: 'WAS',
    vtt: 20.25,
    def4for4projectedpoints: 5.1,
    teamDefDraftkingsSalary: 2300,
    teamDefFanduelSalary: 3500,
    teamDefYahooSalary: 10,

    draftkingsProjectedOwnership: 1,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  cowboys: {
    teamName: 'Cowboys',
    teamABV: 'DAL',
    vtt: 0,
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
    def4for4projectedpoints: 5.2,
    teamDefDraftkingsSalary: 2200,
    teamDefFanduelSalary: 3500,
    teamDefYahooSalary: 10,

    draftkingsProjectedOwnership: 1,
    fanduelProjectedOwnership: 1,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  eagles: {
    teamName: 'Eagles',
    teamABV: 'PHI',
    vtt: 26.75,
    def4for4projectedpoints: 7.1,
    teamDefDraftkingsSalary: 2900,
    teamDefFanduelSalary: 4000,
    teamDefYahooSalary: 13,

    draftkingsProjectedOwnership: 7.5,
    fanduelProjectedOwnership: 7.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  falcons: {
    teamName: 'Falcons',
    teamABV: 'ATL',
    vtt: 21,
    def4for4projectedpoints: 5.8,
    teamDefDraftkingsSalary: 2700,
    teamDefFanduelSalary: 3700,
    teamDefYahooSalary: 14,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  giants: {
    teamName: 'Giants',
    teamABV: 'NYG',
    vtt: 0,
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
    vtt: 20,
    def4for4projectedpoints: 6.5,
    teamDefDraftkingsSalary: 2300,
    teamDefFanduelSalary: 3200,
    teamDefYahooSalary: 11,

    draftkingsProjectedOwnership: 1,
    fanduelProjectedOwnership: 1,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  jets: {
    teamName: 'Jets',
    teamABV: 'NYJ',
    vtt: 19.5,
    def4for4projectedpoints: 5.7,
    teamDefDraftkingsSalary: 2400,
    teamDefFanduelSalary: 3700,
    teamDefYahooSalary: 14,

    draftkingsProjectedOwnership: 7.5,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  lions: {
    teamName: 'Lions',
    teamABV: 'DET',
    vtt: 23.25,
    def4for4projectedpoints: 5.0,
    teamDefDraftkingsSalary: 2200,
    teamDefFanduelSalary: 3100,
    teamDefYahooSalary: 10,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  packers: {
    teamName: 'Packers',
    teamABV: 'GB',
    vtt: 20.5,
    def4for4projectedpoints: 6.1,
    teamDefDraftkingsSalary: 2800,
    teamDefFanduelSalary: 4000,
    teamDefYahooSalary: 10,

    draftkingsProjectedOwnership: 7.5,
    fanduelProjectedOwnership: 1,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  panthers: {
    teamName: 'Panthers',
    teamABV: 'CAR',
    vtt: 19.25,
    def4for4projectedpoints: 6.3,
    teamDefDraftkingsSalary: 2600,
    teamDefFanduelSalary: 3900,
    teamDefYahooSalary: 10,

    draftkingsProjectedOwnership: 7.5,
    fanduelProjectedOwnership: 7.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  patriots: {
    teamName: 'Patriots',
    teamABV: 'NE',
    vtt: 20.5,
    def4for4projectedpoints: 6.1,
    teamDefDraftkingsSalary: 2500,
    teamDefFanduelSalary: 3300,
    teamDefYahooSalary: 12,

    draftkingsProjectedOwnership: 7.5,
    fanduelProjectedOwnership: 7.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  raiders: {
    teamName: 'Raiders',
    teamABV: 'LV',
    vtt: 23.75,
    def4for4projectedpoints: 6.0,
    teamDefDraftkingsSalary: 2500,
    teamDefFanduelSalary: 3400,
    teamDefYahooSalary: 10,

    draftkingsProjectedOwnership: 17.5,
    fanduelProjectedOwnership: 12.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  rams: {
    teamName: 'Rams',
    teamABV: 'LAR',
    vtt: 26,
    def4for4projectedpoints: 6.6,
    teamDefDraftkingsSalary: 3400,
    teamDefFanduelSalary: 4200,
    teamDefYahooSalary: 16,

    draftkingsProjectedOwnership: 1,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  ravens: {
    teamName: 'Ravens',
    teamABV: 'BAL',
    vtt: 23.5,
    def4for4projectedpoints: 6.4,
    teamDefDraftkingsSalary: 3000,
    teamDefFanduelSalary: 5000,
    teamDefYahooSalary: 20,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 1,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  saints: {
    teamName: 'Saints',
    teamABV: 'NO',
    vtt: 21.75,
    def4for4projectedpoints: 6.9,
    teamDefDraftkingsSalary: 3500,
    teamDefFanduelSalary: 4300,
    teamDefYahooSalary: 15,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  seahawks: {
    teamName: 'Seahawks',
    teamABV: 'SEA',
    vtt: 0,
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
    def4for4projectedpoints: 0,
    teamDefDraftkingsSalary: 3200,
    teamDefFanduelSalary: 4800,
    teamDefYahooSalary: 18,

    draftkingsProjectedOwnership: 2.5,
    fanduelProjectedOwnership: 1,
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
        passedInTeam.vtt = qbDownloadableSpreadSheetYahoo[i]['Team O/U'];
      }
    }
    if (object.PID === passedInTeam.teamABV) {
      let projpoints = +object['Y! (Proj)'];
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
};

populateTeamObjects(gameInfo.SF49ers);
populateTeamObjects(gameInfo.texans);
populateTeamObjects(gameInfo.seahawks);
console.log(gameInfo.SF49ers);
console.log(gameInfo.texans);
console.log(gameInfo.seahawks);

module.exports = gameInfo;
