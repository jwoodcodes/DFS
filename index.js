'use strict';
const { EPROTO } = require('constants');
const express = require('express');
const app = express();
const path = require('path');

const gameInfo = require('./gameinfo');
const QBValuesCalcs = require('./dfs_positions_calc_funcs/qbscalcfuncs');
const RBValuesCalcs = require('./dfs_positions_calc_funcs/rbscalcfuncs');
const WRValuesCalcs = require('./dfs_positions_calc_funcs/wrscalcfuncs');
const TEValuesCalcs = require('./dfs_positions_calc_funcs/tescalcfuncs');
const { clearCache } = require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//AllTeam variables and allTeams array

const saints = gameInfo.saints;
const jets = gameInfo.jets;
const chiefs = gameInfo.chiefs;
const bengals = gameInfo.bengals;

//allTeams array
//list all teams playing that week in allTeams, teams playing each other always
//next to each other and home team always first, road team second!!!!!!
const allTeams = [saints, jets, bengals, chiefs];

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

//RB

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

//WR

let allWROnesppps = [];
let allWRTwosppps = [];
let allWROneMatchups = [];
let allWRTwoMatuchups = [];
let allTeamHFRD = [];
let allTeamsVTTs = [];
let allWRTeamQBbonus = [];
let allWROneHighReceptions = [];
let allWRTwoHighReceptions = [];

let allWROnesTWRS = [];
let allWRTwosTWRS = [];

//getting WR average target shares
let allWROneTargetShares = [];
let allWRTwoTargetShares = [];

let calcWROneTargetShare = function (team) {
  let WROneTS = team.WROne.targetShare;
  let WRTwoTS = team.WRTwo.targetShare;

  let WROneTargetShareSum = WROneTS.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  let WRTwoTargetShareSum = WRTwoTS.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  let WROneTargetShareAVG = Math.round(
    WROneTargetShareSum / team.WROne.targetShare.length
  );
  let WRTwoTargetShareAVG = Math.round(
    WRTwoTargetShareSum / team.WRTwo.targetShare.length
  );
  allWROneTargetShares.push(WROneTargetShareAVG);
  allWRTwoTargetShares.push(WRTwoTargetShareAVG);
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

  let WROnePrjReceptions = WRValuesCalcs.calcWRprjReceptions(allTeams[i].WROne);
  allWROneHighReceptions.push(WROnePrjReceptions);

  let WRTwoPrjReceptions = WRValuesCalcs.calcWRprjReceptions(allTeams[i].WRTwo);
  allWRTwoHighReceptions.push(WRTwoPrjReceptions);
  TWROneS += WROnePrjReceptions;
  TWRTwoS += WRTwoPrjReceptions;

  calcWROneTargetShare(allTeams[i]);

  allWROnesTWRS.push(TWROneS);
  allWRTwosTWRS.push(TWRTwoS);
}

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

  WR: {
    WROnePpps: allWROnesppps,
    WROneMatchups: allWROneMatchups,
    WROneHomeFavOrRoadDog: allTeamHFRD,
    WROneTeamVTTs: allTeamsVTTs,
    WROneQBBonus: allWRTeamQBbonus,
    WROneHighReceptionsBonus: allWROneHighReceptions,
    WROneTargetShares: allWROneTargetShares,
    WROneGameInducedHighTargetsBonus: allWROneGameInducedHighTargetsBonus,

    WRTwoPpps: allWRTwosppps,
    WRTwoMatchups: allWRTwoMatuchups,
    WRTwoHomeFavOrRoadDog: allTeamHFRD,
    WRTwoTeamVTTs: allTeamsVTTs,
    WRTwoQBBonus: allWRTeamQBbonus,
    WRTwoHighReceptionsBonus: allWRTwoHighReceptions,
    WRTwoTargetShares: allWRTwoTargetShares,
    WRTwoGameInducedHighTargetsBonus: allWRTwoGameInducedHighTargetsBonus,

    TotalWROneScores: allWROnesTWRS,
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

console.log(allValues);

//routing, servers, and serving

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
