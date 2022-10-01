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

    vtt: 21,
    def4for4projectedpoints: 5.9,
    teamDefDraftkingsSalary: 2700,
    teamDefFanduelSalary: 3400,
    teamDefYahooSalary: 16,

    draftkingsProjectedOwnership: 12.5,
    fanduelProjectedOwnership: 7.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  steelers: {
    teamName: 'Steelers',

    vtt: 17,
    def4for4projectedpoints: 9,
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

    vtt: 18.75,
    def4for4projectedpoints: 6.0,
    teamDefDraftkingsSalary: 2600,
    teamDefFanduelSalary: 3800,
    teamDefYahooSalary: 16,

    draftkingsProjectedOwnership: 7.5,
    fanduelProjectedOwnership: 2.5,
    percentOfSalaryCapDraftkings: 0,
    percentOfSalaryCapFanduel: 0,
    percentOfSalaryCapYahoo: 0,
  },

  titans: {
    teamName: 'Titans',

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

wholeDownloadableSpreadSheetYahoo.forEach(function (playerobj, i) {
  // console.log(playerobj);
  let teamName = '';
  // console.log(playerobj.PID);

  if (i < qbDownloadableSpreadSheetYahoo.length) {
    teamName = qbDownloadableSpreadSheetYahoo[i].Team;
    // console.log(teamName);
  }

  if (teamName === 'TEN' || playerobj.PID === 'TEN') {
    if (qbDownloadableSpreadSheetYahoo[i]) {
      let teamVTT = +qbDownloadableSpreadSheetYahoo[i]['Team O/U'];
      gameInfo.titans.vtt = teamVTT;
    }

    if (playerobj.PID === 'TEN') {
      // console.log(playerobj['Y! (Proj)']);
      let projpoints = +playerobj['Y! (Proj)'];
      gameInfo.titans.def4for4projectedpoints = projpoints;
      // console.log(playerobj);
    }

    wholePlayerPricingWithPercentOfCapDraftkings.forEach(function (teamObj) {
      let tempTeamName = '';
      // console.log(teamObj['"Tm"'].length);
      if (teamObj['"Team"'].length === 5) {
        tempTeamName = teamObj['"Team"'].slice(1, 4);
      } else {
        tempTeamName = teamObj['"Team"'].slice(1, 3);
      }

      if (tempTeamName === 'TEN') {
        if (teamObj['"Position"'] === '"DEF"') {
          draftkingssalary = +teamObj['"Current $"'].slice(1, 5);
          gameInfo.titans.teamDefDraftkingsSalary = draftkingssalary;
          let dkPercentOfCap = +teamObj['"% of Cap"'].slice(1, 5);
          gameInfo.titans.percentOfSalaryCapDraftkings = dkPercentOfCap;
        }
      }
    });

    wholePlayerPricingWithPercentOfCapFanduel.forEach(function (teamObj) {
      let tempTeamName = '';
      // console.log(teamObj['"Tm"'].length);
      if (teamObj['"Team"'].length === 5) {
        tempTeamName = teamObj['"Team"'].slice(1, 4);
      } else {
        tempTeamName = teamObj['"Team"'].slice(1, 3);
      }

      if (tempTeamName === 'TEN') {
        if (teamObj['"Position"'] === '"DEF"');

        Fanduelsalary = +teamObj['"Current $"'].slice(1, 5);
        gameInfo.titans.teamDefFanduelSalary = Fanduelsalary;
        let fdPercentOfCap = +teamObj['"% of Cap"'].slice(1, 5);
        gameInfo.titans.percentOfSalaryCapFanduel = fdPercentOfCap;
      }
    });

    wholePlayerPricingWithPercntOfCapYahoo.forEach(function (teamObj) {
      let tempTeamName = '';
      // console.log(teamObj['"Tm"'].length);
      if (teamObj['"Team"'].length === 5) {
        tempTeamName = teamObj['"Team"'].slice(1, 4);
      } else {
        tempTeamName = teamObj['"Team"'].slice(1, 3);
      }

      if (tempTeamName === 'TEN') {
        if (teamObj['"Position"'] === '"DEF"');

        yahoosalary = +teamObj['"Current $"'].slice(1, 3);
        gameInfo.titans.teamDefYahooSalary = yahoosalary;
        let yahooPercentOfCap = +teamObj['"% of Cap"'].slice(1, 5);
        gameInfo.titans.percentOfSalaryCapYahoo = yahooPercentOfCap;
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

      if (tempTeamName === 'TEN' && teamObj['"Pos"'] === '"DEF"') {
        dkOwnership = +teamObj['"Projected Own%"'].slice(1, 4);
        gameInfo.titans.draftkingsProjectedOwnership = dkOwnership;
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

      if (tempTeamName === 'TEN' && teamObj['"Pos"'] === '"DEF"') {
        fdOwnership = +teamObj['"Projected Own%"'].slice(1, 4);
        gameInfo.titans.fanduelProjectedOwnership = fdOwnership;
      }
    });
  }
});

console.log(gameInfo.titans);
// console.log(gameInfo.SF49ers);

module.exports = gameInfo;
