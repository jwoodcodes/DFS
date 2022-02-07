'use strict';
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const gameInfo = {
  saints: {
    teamName: 'Saints',
    projectedPoints: 24.25,
    homeOrRoad: 'home',
    QB: {
      qbName: 'Hill',
      matchup: 0,
      prjpoints: 17.3,
      vtt: 23,
      ypa: [6.8, 9.5, 7.4, 6.7, 6.5],
      TDrate: [5.7, 6.3, 4.8, 5.1, 5.7],
    },
    RB: {
      rbName: 'Kamara',
      matchup: 5,
      prjpoints: 15.9,
      prjCarries: 20.5,
      prjTargets: 4.7,
    },
    WROne: {
      Name: 'Callaway',
      matchup: 0,
      prjpoints: 7.2,
    },

    WRTwo: {
      Name: 'Harris',
      matchup: 0,
      prjpoints: 7.1,
    },

    TE: {
      Name: 'Troutman',
      matchup: 0,
      prjpoints: 3.6,
    },
  },
  jets: {
    teamName: 'Jets',
    projectedPoints: 16.75,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Wilson',
      matchup: 0,
      prjpoints: 12.9,
      vtt: 18,
      ypa: [5.2, 7.2, 7.0, 6.6, 6.0],
      TDrate: [5.5, 6.1, 4.6, 4.9, 5.5],
    },
    RB: {
      rbName: 'Carter',
      matchup: 0,
      prjpoints: 11.8,
      prjCarries: 14,
      prjTargets: 3.2,
    },
    WROne: {
      wrName: 'Berrios',
      matchup: 0,
      prjpoints: 9.3,
    },

    WRTwo: {
      Name: 'Cole',
      matchup: 0,
      prjpoints: 6.4,
    },

    TE: {
      Name: 'Kroft',
      matchup: 0,
      prjpoints: 5.5,
    },
  },

  chiefs: {
    teamName: 'Chiefs',
    projectedPoints: 27.25,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Mahomes',
      matchup: 5,
      prjpoints: 21.0,
      vtt: 31,
      ypa: [7.2, 8.2, 7.9, 7.5, 9.3],
      TDrate: [8.3, 7.0, 5.9, 8.0, 6.5],
    },
    RB: {
      rbName: 'Williams',
      matchup: 0,
      prjpoints: 13.1,
      prjCarries: 18.3,
      prjTargets: 4.2,
    },
    WROne: {
      wrName: 'Hill',
      matchup: 2.5,
      prjpoints: 15.8,
    },

    WRTwo: {
      Name: 'Pringle',
      matchup: 2.5,
      prjpoints: 6.7,
    },

    TE: {
      teName: 'Kelce',
      matchup: 2.5,
      prjpoints: 13.6,
    },
  },

  bengals: {
    teamName: 'Bengals',
    projectedPoints: 23.75,
    homeOrRoad: 'home',

    QB: {
      qbName: 'Burrow',
      matchup: 0,
      prjpoints: 17.5,
      vtt: 23,
      ypa: [7.2, 7.3, 7.2, 6.5, 7.3],
      TDrate: [7.8, 6.8, 5.4, 7.0, 6.2],
    },
    RB: {
      rbName: 'Mixon',
      matchup: -5,
      prjpoints: 15.7,
      prjCarries: 22.2,
      prjTargets: 3.7,
    },
    WROne: {
      wrName: 'Chase',
      matchup: 0,
      prjpoints: 13.5,
    },

    WRTwo: {
      Name: 'Higgins',
      matchup: 0,
      prjpoints: 13.6,
    },

    TE: {
      teName: 'Uzomah',
      matchup: 0,
      prjpoints: 6,
    },
  },

  //QB

  calcQBppps(team) {
    let gameqbPPPs = team.QB.prjpoints;

    if (gameqbPPPs >= 22) {
      gameqbPPPs = 25;
    } else if (gameqbPPPs > 20.9 && gameqbPPPs < 22) {
      gameqbPPPs = 22.5;
    } else if (gameqbPPPs > 19.9 && gameqbPPPs < 21) {
      gameqbPPPs = 20;
    } else if (gameqbPPPs > 18.9 && gameqbPPPs < 20) {
      gameqbPPPs = 17.5;
    } else if (gameqbPPPs > 17.9 && gameqbPPPs < 19) {
      gameqbPPPs = 15;
    } else if (gameqbPPPs > 17.4 && gameqbPPPs < 18) {
      gameqbPPPs = 12.5;
    } else if (gameqbPPPs > 16.9 && gameqbPPPs < 17.5) {
      gameqbPPPs = 10;
    } else if (gameqbPPPs > 15.9 && gameqbPPPs < 17) {
      gameqbPPPs = 0;
    } else if (gameqbPPPs > 14.6 && gameqbPPPs < 16) {
      gameqbPPPs = -5;
    } else if (gameqbPPPs > 12.9 && gameqbPPPs < 14.7) {
      gameqbPPPs = -10;
    } else {
      gameqbPPPs = -15;
    }

    let qbPPP = gameqbPPPs;
    return qbPPP;
  }, //closing calcQBppps tag

  calcQBmatchup(team) {
    let qbmatchup = team.QB.matchup;
    return qbmatchup;
  },

  calcQBvtt(team) {
    let qbvtt = team.QB.vtt;

    if (qbvtt >= 30) {
      qbvtt = 15;
    } else if (qbvtt >= 27.5 && qbvtt < 30) {
      qbvtt = 10;
    } else if (qbvtt >= 25 && qbvtt < 27.5) {
      qbvtt = 5;
    } else if (qbvtt >= 20 && qbvtt < 25) {
      qbvtt = 0;
    } else if (qbvtt >= 17.5 && qbvtt < 20) {
      qbvtt = -5;
    } else if (qbvtt >= 15 && qbvtt < 17.5) {
      qbvtt = -10;
    } else {
      qbvtt = -15;
    }

    return qbvtt;
  }, //closing calcQBvtt tag

  calcQBavgypa(...team) {
    let ypa = 0;
    let ypaavg = 0;

    for (const num of team) {
      ypa += num;
      ypaavg = ypa / team.length;
    }
    return ypaavg;
  }, //closing calcQBavgypa tag

  calcQBavgTDrate(...team) {
    let TDrate = 0;
    let TDrateavg = 0;

    for (const num of team) {
      TDrate += num;
      TDrateavg = TDrate / team.length;
    }
    return TDrateavg;
  }, //closing calcQBavgypa tag

  //RB

  calcRBppps(team) {
    let gameRBppps = team.RB.prjpoints;

    if (gameRBppps > 20) {
      gameRBppps = 20;
    } else if (gameRBppps > 17.9 && gameRBppps < 20) {
      gameRBppps = 17.5;
    } else if (gameRBppps > 16.9 && gameRBppps < 18) {
      gameRBppps = 15;
    } else if (gameRBppps > 15.9 && gameRBppps < 17) {
      gameRBppps = 12.5;
    } else if (gameRBppps > 14.9 && gameRBppps < 16) {
      gameRBppps = 10;
    } else if (gameRBppps > 13.9 && gameRBppps < 16) {
      gameRBppps = 5;
    } else if (gameRBppps > 12.9 && gameRBppps < 15) {
      gameRBppps = 0;
    } else if (gameRBppps > 11.9 && gameRBppps < 14) {
      gameRBppps = -5;
    } else if (gameRBppps > 10.9 && gameRBppps < 13) {
      gameRBppps = -10;
    } else {
      gameRBppps = -15;
    }

    let rbPPP = gameRBppps;
    return rbPPP;
  }, //closing calcRBppps tag

  calcRBmatchup(team) {
    let rbmatchup = team.RB.matchup;
    return rbmatchup;
  },

  calcRBcarries(team) {
    let RBprjcarries = team.RB.prjCarries;

    if (RBprjcarries > 22) {
      RBprjcarries = 15;
    } else if (RBprjcarries > 18.9 && RBprjcarries < 22) {
      RBprjcarries = 12.5;
    } else if (RBprjcarries > 16.9 && RBprjcarries < 19) {
      RBprjcarries = 10;
    } else if (RBprjcarries > 14.9 && RBprjcarries < 17) {
      RBprjcarries = 7.5;
    } else {
      RBprjcarries = 0;
    }

    return RBprjcarries;
  },

  calcRBtargets(team) {
    let RBPrjTargets = team.RB.prjTargets;

    if (team.RB.prjCarries > 9.9) {
      if (RBPrjTargets > 4.4) {
        RBPrjTargets = 12.5;
      } else if (RBPrjTargets > 3.9 && RBPrjTargets < 4.5) {
        RBPrjTargets = 10;
      } else if (RBPrjTargets > 3.4 && RBPrjTargets < 4) {
        RBPrjTargets = 5;
      } else if (RBPrjTargets > 1.9 && RBPrjTargets < 3.5) {
        RBPrjTargets = 0;
      } else {
        RBPrjTargets = -5;
      }
    } else {
      RBPrjTargets = 0;
    }
    return RBPrjTargets;
  },
}; //closing gameInfo object tag

const saints = gameInfo.saints;
const jets = gameInfo.jets;
const chiefs = gameInfo.chiefs;
const bengals = gameInfo.bengals;

//list all teams playing that week in allTeams, teams playing each other always
//next to each other and home team always first, road team second!!!!!!
const allTeams = [saints, jets, bengals, chiefs];
const allGames = [
  [saints, jets],
  [bengals, chiefs],
];

//QB

//calculating relevant QB values and saving to arrays of all for the week
let allqbppps = [];
let allqbmatchups = [];
let allqbvtts = [];
let allqbypas = [];
let allqbypavalues = [];
let allqbTDrates = [];
let allqbTDratevalues = [];

for (let i = 0; i < allTeams.length; i++) {
  let qbppps = gameInfo.calcQBppps(allTeams[i]);
  allqbppps.push(qbppps);

  let qbmatchups = gameInfo.calcQBmatchup(allTeams[i]);
  allqbmatchups.push(qbmatchups);

  let qbvtts = gameInfo.calcQBvtt(allTeams[i]);
  allqbvtts.push(qbvtts);

  let qbypa = gameInfo.calcQBavgypa(...allTeams[i].QB.ypa);
  allqbypas.push(qbypa);

  let qbTDrate = gameInfo.calcQBavgTDrate(...allTeams[i].QB.TDrate);
  allqbTDrates.push(qbTDrate);
}

for (const [key, value] of allqbypas.entries()) {
  let qbypavalue = value;

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
}

for (const [key, value] of allqbTDrates.entries()) {
  let qbTDratevalue = value;

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
}

//RB

let allrbppps = [];
let allrbmatchups = [];
let allrbprjcarries = [];
let allrbprjtargets = [];

let allRbTRBSs = [];

for (let i = 0; i < allTeams.length; i++) {
  let TRBS = 0;

  let rbppps = gameInfo.calcRBppps(allTeams[i]);
  allrbppps.push(rbppps);
  TRBS += rbppps;
  let rbmatchups = gameInfo.calcRBmatchup(allTeams[i]);
  allrbmatchups.push(rbmatchups);
  TRBS += rbmatchups;
  let rbcarries = gameInfo.calcRBcarries(allTeams[i]);
  allrbprjcarries.push(rbcarries);
  TRBS += rbcarries;
  let rbtargets = gameInfo.calcRBtargets(allTeams[i]);
  allrbprjtargets.push(rbtargets);
  TRBS += rbtargets;

  allRbTRBSs.push(TRBS);
}

const allValues = {
  qb: {
    qbppps: allqbppps,
    qbmatchups: allqbmatchups,
    qbvtts: allqbvtts,
    qbypas: allqbypavalues,
    qbTDrates: allqbTDratevalues,
  },

  rb: {
    rbPpps: allrbppps,
    rbMatchups: allrbmatchups,
    rbPrjCarryVolume: allrbprjcarries,
    rbPrjTargetVolume: allrbprjtargets,
    TotalRBScores: allRbTRBSs,
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
