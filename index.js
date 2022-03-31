'use strict';
const { EPROTO } = require('constants');
const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/DFS')
  .then(() => {
    console.log('Mongo connection open!!!');
  })
  .catch(err => {
    console.log('Mongo Connection error');
    console.log(err);
  });

const gameInfo = require('./gameinfo');
const QBValuesCalcs = require('./dfs_positions_calc_funcs/qbscalcfuncs');
const RBValuesCalcs = require('./dfs_positions_calc_funcs/rbscalcfuncs');
const WRValuesCalcs = require('./dfs_positions_calc_funcs/wrscalcfuncs');
const TEValuesCalcs = require('./dfs_positions_calc_funcs/tescalcfuncs');
const { clearCache } = require('ejs');
const { getSystemErrorName } = require('util');
const { CommandStartedEvent } = require('mongodb');
const { all } = require('express/lib/application');
const console = require('console');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//AllTeam variables and allTeams array

const sf49ers = gameInfo.SF49ers;
const bears = gameInfo.bears;
const bengals = gameInfo.bengals;
const bills = gameInfo.bills;
const broncos = gameInfo.broncos;
const browns = gameInfo.browns;
const buccaneers = gameInfo.buccaneers;
const cardinals = gameInfo.cardinals;
const chargers = gameInfo.chargers;
const chiefs = gameInfo.chiefs;
const colts = gameInfo.colts;
const commanders = gameInfo.Commanders;
const cowboys = gameInfo.cowboys;
const dolphins = gameInfo.dolphins;
const eagles = gameInfo.eagles;
const falcons = gameInfo.falcons;
const giants = gameInfo.giants;
const jaguars = gameInfo.jaguars;
const jets = gameInfo.jets;
const lions = gameInfo.lions;
const packers = gameInfo.packers;
const panthers = gameInfo.panthers;
const patriots = gameInfo.patriots;
const raiders = gameInfo.raiders;
const rams = gameInfo.rams;
const ravens = gameInfo.ravens;
const saints = gameInfo.saints;
const seahawks = gameInfo.seahawks;
const steelers = gameInfo.steelers;
const texans = gameInfo.texans;
const titans = gameInfo.titans;
const vikings = gameInfo.vikings;

//allTeams array
//list all teams playing that week in allTeams, teams playing each other always
//next to each other and home team always first, road team second!!!!!!
const allTeams = [
  // sf49ers,
  // titans,
  // browns,
  // packers,
  // colts,
  // cardinals,
  // ravens,
  bengals,
  // giants,
  // eagles,
  // rams,
  // vikings,
  // buccaneers,
  // panthers,
  // bills,
  // patriots,
  // jaguars,
  jets,
  // lions,
  // falcons,
  // chargers,
  // texans,
  // bears,
  // seahawks,
  // steelers,
  chiefs,
  // broncos,
  // raiders,
  // commanders,
  // cowboys,
  // dolphins,
  saints,
];

module.exports = allTeams;

// QB

//QB values being calculated and populated into relevant arrays

let allqbppps = [];
let allqbmatchups = [];
let allqbvtts = [];
let allqbypas = [];
let allqbypavalues = [];
let allqbTDrates = [];
let allqbTDratevalues = [];
let allqbSecondWRBonus = [];

let allQbTQBS = [];

for (let i = 0; i < allTeams.length; i++) {
  let qbypa = QBValuesCalcs.calcQBavgypa(...allTeams[i].QB.ypa);
  allqbypas.push(qbypa);

  let qbTDrate = QBValuesCalcs.calcQBavgTDrate(...allTeams[i].QB.TDrate);
  allqbTDrates.push(qbTDrate);
}

for (let i = 0; i < allTeams.length; i++) {
  let TQBS = 0;
  let qbypavalue = allqbypas[i];
  let qbTDratevalue = allqbTDrates[i];

  let qbppps = QBValuesCalcs.calcQBppps(allTeams[i]);
  allqbppps.push(qbppps);
  TQBS += qbppps;

  let qbmatchups = QBValuesCalcs.calcQBmatchup(allTeams[i]);
  allqbmatchups.push(qbmatchups);
  TQBS += qbmatchups;

  let qbvtts = QBValuesCalcs.calcQBvtt(allTeams[i]);
  allqbvtts.push(qbvtts);
  TQBS += qbvtts;

  if (qbypavalue > 8.9) {
    qbypavalue = 10;
  } else if (qbypavalue > 8.4 && qbypavalue < 9) {
    qbypavalue = 7.5;
  } else if (qbypavalue > 7.9 && qbypavalue < 8.5) {
    qbypavalue = 5;
  } else if (qbypavalue < 7.4 && qbypavalue < 8) {
    qbypavalue = 2.5;
  } else {
    qbypavalue = 0;
  }

  allqbypavalues.push(qbypavalue);
  TQBS += qbypavalue;

  if (qbTDratevalue > 7) {
    qbTDratevalue = 10;
  } else if (qbTDratevalue > 6.4 && qbTDratevalue < 7) {
    qbTDratevalue = 7.5;
  } else if (qbTDratevalue > 5.9 && qbTDratevalue < 6.5) {
    qbTDratevalue = 5;
  } else if (qbTDratevalue < 5.4 && qbTDratevalue < 6) {
    qbTDratevalue = 2.5;
  } else {
    qbTDratevalue = 0;
  }

  allqbTDratevalues.push(qbTDratevalue);
  TQBS += qbTDratevalue;

  let qbsSecondWRBonus = QBValuesCalcs.calcQBSecondHighlyPRojectedWRBonus(
    allTeams[i]
  );
  allqbSecondWRBonus.push(qbsSecondWRBonus);
  TQBS += qbsSecondWRBonus;

  allQbTQBS.push(TQBS);
}

//
/////RB
//

//RB values being calculated and populated into relevant arrays

let allrbppps = [];
let allrbmatchups = [];
let allrbprjcarries = [];
let allrbprjtargets = [];

let allRbTRBSs = [];

for (let i = 0; i < allTeams.length; i++) {
  let TRBS = 0;

  let rbppps = RBValuesCalcs.calcRBppps(allTeams[i]);
  allrbppps.push(rbppps);
  TRBS += rbppps;
  let rbmatchups = RBValuesCalcs.calcRBmatchup(allTeams[i]);
  allrbmatchups.push(rbmatchups);
  TRBS += rbmatchups;
  let rbcarries = RBValuesCalcs.calcRBcarries(allTeams[i]);
  allrbprjcarries.push(rbcarries);
  TRBS += rbcarries;
  let rbtargets = RBValuesCalcs.calcRBtargets(allTeams[i]);
  allrbprjtargets.push(rbtargets);
  TRBS += rbtargets;

  allRbTRBSs.push(TRBS);
}

//
///////WR
//

let allWROnesppps = [];
let allWRTwosppps = [];
let allWROneMatchups = [];
let allWRTwoMatuchups = [];
let allTeamHFRD = [];
let allTeamsVTTs = [];
let allWRTeamQBbonus = [];
let allWROnePrjTargets = [];
let allWRTwoPrjTargets = [];
let allWROneHighReceptions = [];
let allWRTwoHighReceptions = [];

let allWROnesTWRS = [];
let allWRTwosTWRS = [];

//getting WR average target shares
let allWROneTargetShares = [];
let allWRTwoTargetShares = [];

const calcWRPrjTargets = function (team) {
  let WROneTS = team.WROne.targetShare;
  let WRTwoTS = team.WRTwo.targetShare;
  let QBPassAttempts = team.QB.prjpassattempts;

  allWROneTargetShares.push(WROneTS);
  allWRTwoTargetShares.push(WRTwoTS);

  let WROnedectgtshr = WROneTS / 100;
  let WRTwodectgtshr = WRTwoTS / 100;

  let rawWROneProjectedTargets = QBPassAttempts * WROnedectgtshr;
  let rawWRTwoProjectedTargets = QBPassAttempts * WRTwodectgtshr;
  //
  let WROneProjectedTargets = +rawWROneProjectedTargets.toFixed(2);
  let WRTwoProjectedTargets = +rawWRTwoProjectedTargets.toFixed(2);
  //
  allWROnePrjTargets.push(WROneProjectedTargets);
  allWRTwoPrjTargets.push(WRTwoProjectedTargets);
};

for (let i = 0; i < allTeams.length; i++) {
  let TWROneS = 0;
  let TWRTwoS = 0;
  let teamHFRD = 0;
  let WRsteamTQBS = allQbTQBS[i];

  let WROnesppps = WRValuesCalcs.calcWRppps(allTeams[i].WROne);
  allWROnesppps.push(WROnesppps);
  TWROneS += WROnesppps;

  let WRTwosppps = WRValuesCalcs.calcWRppps(allTeams[i].WRTwo);
  allWRTwosppps.push(WRTwosppps);
  TWRTwoS += WRTwosppps;

  let WRmatchups = WRValuesCalcs.calcWRmatchup(allTeams[i]);
  allWROneMatchups.push(WRmatchups);
  allWRTwoMatuchups.push(WRmatchups);
  TWROneS += WRmatchups;
  TWRTwoS += WRmatchups;

  //home favorite or road dog
  if (
    (i - 1) % 2 &&
    allTeams[i].projectedPoints > allTeams[i + 1].projectedPoints
  ) {
    teamHFRD = 5;
  }

  if (i % 2 && allTeams[i].projectedPoints < allTeams[i - 1].projectedPoints) {
    teamHFRD = 5;
  }
  allTeamHFRD.push(teamHFRD);
  TWROneS += teamHFRD;
  TWRTwoS += teamHFRD;
  //end home favorite or road dog

  let WRTeamVTT = WRValuesCalcs.calcWRVTT(allTeams[i]);
  allTeamsVTTs.push(WRTeamVTT);
  TWROneS += WRTeamVTT;
  TWRTwoS += WRTeamVTT;

  // high QB score bonus
  if (WRsteamTQBS > 50) {
    WRsteamTQBS = 15;
  } else if (WRsteamTQBS > 39.9 && WRsteamTQBS < 50) {
    WRsteamTQBS = 12.5;
  } else if (WRsteamTQBS > 29.9 && WRsteamTQBS < 40) {
    WRsteamTQBS = 10;
  } else if (WRsteamTQBS > 19.9 && WRsteamTQBS < 30) {
    WRsteamTQBS = 7.5;
  } else if (WRsteamTQBS > 9.9 && WRsteamTQBS < 20) {
    WRsteamTQBS = 5;
  } else if (WRsteamTQBS > 0 && WRsteamTQBS < 10) {
    WRsteamTQBS = 0;
  } else {
    WRsteamTQBS = -5;
  }

  TWROneS += WRsteamTQBS;
  TWRTwoS += WRsteamTQBS;
  allWRTeamQBbonus.push(WRsteamTQBS);

  calcWRPrjTargets(allTeams[i]);

  allWROnesTWRS.push(TWROneS);
  allWRTwosTWRS.push(TWRTwoS);
}

// console.log(allWROnePrjTargets);

let WROneCatchrate = [];
let WRTwoCatchrate = [];
let allWROneProjrecptions = [];
let allWRTwoProjrecptions = [];

allTeams.map(function (team, i) {
  let decWROneCatchRate = team.WROne.catchRate / 100;
  let decWRTwoCatchRate = team.WRTwo.catchRate / 100;
  WROneCatchrate.push(decWROneCatchRate);
  WRTwoCatchrate.push(decWRTwoCatchRate);
});

allWROnePrjTargets.map(function (ptgts, i) {
  let rawWROnePrjReceptions = ptgts * WROneCatchrate[i];

  let WROnePrjReceptions = +rawWROnePrjReceptions.toFixed(2);

  allWROneProjrecptions.push(WROnePrjReceptions);
});

allWRTwoPrjTargets.map(function (ptgts, i) {
  let rawWRTwoPrjReceptions = ptgts * WRTwoCatchrate[i];

  let WRTwoPrjReceptions = +rawWRTwoPrjReceptions.toFixed(2);

  allWRTwoProjrecptions.push(WRTwoPrjReceptions);
});

let WROneHighReceptionsBonus = [];
let WRTwoHighReceptionsBonus = [];

const CalcWRHighReceptionsBonus = allWROneProjrecptions.map(function (ppr, i) {
  let WRPrjTargets = 0;

  if (ppr > 8) {
    WRPrjTargets = 17.5;
  } else if (ppr > 6.9 && ppr < 8) {
    WRPrjTargets = 15;
  } else if (ppr > 5.9 && ppr < 7) {
    WRPrjTargets = 12.5;
  } else if (ppr > 5.4 && ppr < 6) {
    WRPrjTargets = 7.5;
  } else {
    WRPrjTargets = 0;
  }

  WROneHighReceptionsBonus.push(WRPrjTargets);
});

const CalcWRHtwohighReceptionsBonus = allWRTwoProjrecptions.map(function (
  ppr,
  i
) {
  let WRPrjTargets = 0;

  if (ppr > 8) {
    WRPrjTargets = 17.5;
  } else if (ppr > 6.9 && ppr < 8) {
    WRPrjTargets = 15;
  } else if (ppr > 5.9 && ppr < 7) {
    WRPrjTargets = 12.5;
  } else if (ppr > 5.4 && ppr < 6) {
    WRPrjTargets = 7.5;
  } else {
    WRPrjTargets = 0;
  }

  WRTwoHighReceptionsBonus.push(WRPrjTargets);
});

const adjTWRTwoS = allWRTwosTWRS.map(function (val, i) {
  if (val >= 0) {
    return val;
  } else {
    return 0;
  }
});

//TE

let allTEPPPs = [];
let allTEmatchups = [];
let allTeamTEHFRD = [];
let allTEPrjreceptions = [];

let allTETTES = [];

for (let i = 0; i < allTeams.length; i++) {
  let TETS = 0;
  let teamTEHFRD = 0;

  let TEppp = TEValuesCalcs.calcTEppps(allTeams[i]);
  allTEPPPs.push(TEppp);
  TETS += TEppp;

  let TEmatchups = TEValuesCalcs.calcTEmatchup(allTeams[i]);
  allTEmatchups.push(TEmatchups);
  TETS += TEmatchups;

  if (
    (i - 1) % 2 &&
    allTeams[i].projectedPoints > allTeams[i + 1].projectedPoints
  ) {
    teamTEHFRD = 5;
  }

  if (i % 2 && allTeams[i].projectedPoints < allTeams[i - 1].projectedPoints) {
    teamTEHFRD = 5;
  }

  allTeamTEHFRD.push(teamTEHFRD);
  TETS += teamTEHFRD;

  let TEPrjreceptions = TEValuesCalcs.calcTEPrjReceptions(allTeams[i]);
  allTEPrjreceptions.push(TEPrjreceptions);
  TETS += TEPrjreceptions;

  allTETTES.push(TETS);
}

//calculating TGS

let allQBScoresForTGSAfterMultiplyByOnePointFive = [];

const allQBMultipliedByOnePointFiveForTGS = function (array) {
  array.map(function (ts, i) {
    let QBForTGSScore = ts * 1.5;
    allQBScoresForTGSAfterMultiplyByOnePointFive.push(QBForTGSScore);
  });
};

allQBMultipliedByOnePointFiveForTGS(allQbTQBS);

const allTotalScores = [
  allQBScoresForTGSAfterMultiplyByOnePointFive,
  allRbTRBSs,
  allWROnesTWRS,
  adjTWRTwoS,
  allTETTES,
];

const allTGS = allTotalScores[0].map((x, i) =>
  allTotalScores.reduce((sum, curr) => sum + curr[i], 0)
);

//calculating TGS bonus by team

const IPSArray = allTGS.map(function (team, i) {
  if (team > 199) {
    return 20;
  } else if (team > 179 && team < 200) {
    return 17.5;
  } else if (team > 159 && team < 180) {
    return 15;
  } else if (team > 139 && team < 160) {
    return 10;
  } else if (team > 119 && team < 140) {
    return 5;
  } else if (team > 99 && team < 120) {
    return 2.5;
  } else if (team > 79 && team < 100) {
    return 0;
  } else if (team > 59 && team < 80) {
    return -5;
  } else if (team > 39 && team < 60) {
    return -10;
  } else if (team > 19 && team < 40) {
    return -15;
  } else {
    return -20;
  }
});

// console.log(IPSArray);

//calculating IPS

//QB IPS
const QBTotalScoresAndTGSBonus = [allQbTQBS, IPSArray];

const QBIPS = QBTotalScoresAndTGSBonus[0].map((x, i) =>
  QBTotalScoresAndTGSBonus.reduce((sum, curr) => sum + curr[i], 0)
);

//RB IPS

const RBHFRD = allTGS.map(function (mov, i, array) {
  if (!(i % 2) && array[i + 1] - array[i] >= 40) {
    return 10;
  } else if (i % 2 && array[i] - array[i - 1] >= 40) {
    return 2.5;
  } else if (i % 2 && mov >= 50 && array[i - 1] - array[i] >= 40) {
    return 7.5;
  } else {
    return 0;
  }
});

const RBValuesForIPS = [RBHFRD, IPSArray, allRbTRBSs];

const RBIPS = RBValuesForIPS[0].map((x, i) =>
  RBValuesForIPS.reduce((sum, curr) => sum + curr[i], 0)
);

//WR IPS

let allWROneGameInducedHighTargetsBonus = [];
let allWRTwoGameInducedHighTargetsBonus = [];

const calcWRGameInducedHighTargets = function (TargetShareArray, TSA2) {
  TargetShareArray.map(function (ts, i, array) {
    // console.log(array[i]);
    // console.log(allTGS[i]);
    let TargetShareBonus = 0;
    allWROneGameInducedHighTargetsBonus.push(TargetShareBonus);
    if (i % 2) {
      if (allTGS[i - 1] - allTGS[i] >= 75) {
        let TargetShareBonus = 0;
        // console.log(ts);
        if (ts >= 28) {
          TargetShareBonus = 15;
        } else if (ts >= 26 && ts < 28) {
          TargetShareBonus = 10;
        } else if (ts >= 24 && ts < 26) {
          TargetShareBonus = 7.5;
        } else if (ts >= 22 && ts < 24) {
          TargetShareBonus = 2.5;
        }

        // console.log(TargetShareBonus);
        allWROneGameInducedHighTargetsBonus.splice(i, 1, TargetShareBonus);
      }
    }
  });

  TSA2.map(function (ts2, i2) {
    let targetShareBonus2 = 0;
    allWRTwoGameInducedHighTargetsBonus.push(targetShareBonus2);
    if (i2 % 2) {
      if (allTGS[i2 - 1] - allTGS[i2] >= 75) {
        let targetShareBonus2 = 0;
        if (ts2 >= 28) {
          targetShareBonus2 = 15;
        } else if (ts2 >= 26 && ts2 < 28) {
          targetShareBonus2 = 10;
        } else if (ts2 >= 24 && ts2 < 26) {
          targetShareBonus2 = 7.5;
        } else if (ts2 >= 22 && ts2 < 24) {
          targetShareBonus2 = 2.5;
        }

        allWRTwoGameInducedHighTargetsBonus.splice(i2, 1, targetShareBonus2);
      }
    }
  });
};

calcWRGameInducedHighTargets(allWROneTargetShares, allWRTwoTargetShares);

const WROneValuesForIPS = [
  IPSArray,
  allWROnesTWRS,
  allWROneGameInducedHighTargetsBonus,
];

const WRTwoValuesForIPS = [
  IPSArray,
  allWRTwosTWRS,
  allWRTwoGameInducedHighTargetsBonus,
];

const WROneIPS = WROneValuesForIPS[0].map((x, i) =>
  WROneValuesForIPS.reduce((sum, curr) => sum + curr[i], 0)
);

const WRTwoIPS = WRTwoValuesForIPS[0].map((x, i) =>
  WRTwoValuesForIPS.reduce((sum, curr) => sum + curr[i], 0)
);

//TE IPS

const TEValuesForIPS = [IPSArray, allTETTES];

const TEIPS = TEValuesForIPS[0].map((x, i) =>
  TEValuesForIPS.reduce((sum, curr) => sum + curr[i], 0)
);

//all calculated values for all positions

const allValues = {
  qb: {
    qbppps: allqbppps,
    qbmatchups: allqbmatchups,
    qbvtts: allqbvtts,
    qbypas: allqbypavalues,
    qbTDrates: allqbTDratevalues,
    qbSecondWRBonuses: allqbSecondWRBonus,
    TotalQBScores: allQbTQBS,
  },

  rb: {
    rbPpps: allrbppps,
    rbMatchups: allrbmatchups,
    rbPrjCarryVolume: allrbprjcarries,
    rbPrjTargetVolume: allrbprjtargets,
    TotalRBScores: allRbTRBSs,
  },

  WROnes: {
    WROnePpps: allWROnesppps,
    WROneMatchups: allWROneMatchups,
    WROneHomeFavOrRoadDog: allTeamHFRD,
    WROneTeamVTTs: allTeamsVTTs,
    WROneQBBonus: allWRTeamQBbonus,
    WROneTargetShares: allWROneTargetShares,
    WROneProjectedTargets: allWROnePrjTargets,
    WROneProjectedReceptions: allWROneProjrecptions,
    WROneHighReceptionsBonus: WROneHighReceptionsBonus,
    WROneGameInducedHighTargetsBonus: allWROneGameInducedHighTargetsBonus,

    TotalWROneScores: allWROnesTWRS,
  },

  WRTwos: {
    WRTwoPpps: allWRTwosppps,
    WRTwoMatchups: allWRTwoMatuchups,
    WRTwoHomeFavOrRoadDog: allTeamHFRD,
    WRTwoTeamVTTs: allTeamsVTTs,
    WRTwoQBBonus: allWRTeamQBbonus,
    WRTwoTargetShares: allWRTwoTargetShares,
    WRTwoProjectedTargets: allWRTwoPrjTargets,
    WRTwoProjectedReceptions: allWRTwoProjrecptions,
    WRTwoHighReceptionsBonus: WRTwoHighReceptionsBonus,
    WRTwoGameInducedHighTargetsBonus: allWRTwoGameInducedHighTargetsBonus,

    TotalWRTwoSCores: adjTWRTwoS,
  },

  TE: {
    tePPPs: allTEPPPs,
    tematchups: allTEmatchups,
    TEHFRD: allTeamTEHFRD,
    TEHighReceptionsBonus: allTEPrjreceptions,

    TotalTEScore: allTETTES,
  },

  TGSAndIPS: {
    allTeamsTGS: allTGS,
    allQBIPS: QBIPS,
    allRBIPS: RBIPS,
    allWROneIPS: WROneIPS,
    allWRTwoIPS: WRTwoIPS,
    allTEIPS: TEIPS,
  },
};

// console.log(allTGS);

console.log(allValues);
console.log('still working');

//routing, servers, and serving

const justTestSchema = new mongoose.Schema({
  item1: Number,
  item2: String,
  item3: Boolean,
  item4: Array,
});

const JustTest = mongoose.model('JustTest', justTestSchema);

JustTest.insertMany([
  { item1: 23, item2: 'it works', item3: true, item4: [24, 45] },
  { item1: 45, item2: 'still works', item3: false, item4: [allTGS] },
]);

const allValuesSchema = new mongoose.Schema({
  qbppps: Array,
  qbmatchups: Array,
  qbvtts: Array,
  qbypas: Array,
  qbTDrates: Array,
  qbSecondWRBonuses: Array,
  TotalQBScores: Array,
  allQBIPS: Array,

  // rb: {
  //   rbPpps: Array,
  //   rbMatchups: Array,
  //   rbPrjCarryVolume: Array,
  //   rbPrjTargetVolume: Array,
  //   TotalRBScores: Array,
  // },
});

const ValueTest = mongoose.model('ValueTest', allValuesSchema);

ValueTest.insertMany([
  {
    qbppps: [allqbppps],
    qbmatchups: [allqbmatchups],
    qbvtts: [allqbvtts],
    qbypas: [allqbypavalues],
    qbTDrates: [allqbTDratevalues],
    qbSecondWRBonuses: [allqbSecondWRBonus],
    TotalQBScores: [allQbTQBS],
    allQBIPS: [QBIPS],
  },
]);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/games', (req, res) => {
  res.render('games', { allTeams, gameInfo, allValues });
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
