'use strict';
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const gameInfo = {
  saints: {
    teamName: 'saints',
    projectedPoints: 24.25,
    homeOrRoad: 'home',
    QB: {
      qbName: 'Hill',
      matchup: 0,
      prjpoints: 17.3,
      vtt: 23,
      ypa: [6.8, 9.5, 7.4, 6.7, 6.5],
    },
    RB: {
      rbName: 'Kamara',
      matchup: 0,
      prjpoints: 15.9,
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
    teamName: 'jets',
    projectedPoints: 16.75,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Wilson',
      matchup: 0,
      prjpoints: 12.9,
      vtt: 18,
      ypa: [5.2, 7.2, 7.0, 6.6, 6.0],
    },
    RB: {
      rbName: 'Carter',
      matchup: 0,
      prjpoints: 11.8,
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
    teamName: 'chiefs',
    projectedPoints: 27.25,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Mahomes',
      matchup: 5,
      prjpoints: 21.0,
      vtt: 31,
      ypa: [7.2, 8.2, 7.9, 7.5, 9.3],
    },
    RB: {
      rbName: 'Williams',
      matchup: 0,
      prjpoints: 13.1,
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
    teamName: 'bengals',
    projectedPoints: 23.75,
    homeOrRoad: 'home',

    QB: {
      qbName: 'Burrow',
      matchup: 0,
      prjpoints: 17.5,
      vtt: 23,
      ypa: [7.2, 7.3, 7.2, 6.5, 7.3],
    },
    RB: {
      rbName: 'Mixon',
      matchup: 0,
      prjpoints: 15.7,
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

//calculating relevant QB values and saving to arrays of all for the week
let allqbppps = [];
let allqbmatchups = [];
let allqbvtts = [];
let allqbypas = [];
let allqbypavalues = [];

for (let i = 0; i < allTeams.length; i++) {
  let qbppps = gameInfo.calcQBppps(allTeams[i]);
  allqbppps.push(qbppps);

  let qbmatchups = gameInfo.calcQBmatchup(allTeams[i]);
  allqbmatchups.push(qbmatchups);

  let qbvtts = gameInfo.calcQBvtt(allTeams[i]);
  allqbvtts.push(qbvtts);

  let qbypa = gameInfo.calcQBavgypa(...allTeams[i].QB.ypa);
  allqbypas.push(qbypa);
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

const allValues = {
  qb: {
    qbppps: allqbppps,
    qbmatchups: allqbmatchups,
    qbvtts: allqbvtts,
    qbypas: allqbypavalues,
  },
};

console.log(allValues);

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

//   const rendervegasou1 = document.createElement('div');
//   const vegasou1 = document.createTextNode(
//     `over/under ${allTeams[0].projectedPoints + allTeams[1].projectedPoints}`
//   );
//   rendervegasou1.appendChild(vegasou1);
//   const vegasou1div = document.getElementById('vegasou1');
//   document.body.insertBefore(rendervegasou1, vegasou1div);
//   rendervegasou1.classList.add('vegasou-1');

//   //vegas favored
//   //game1
//   for (const [key, game] of allGames.entries()) {
//     if (key < 1) {
//       const rendervegasfavor1 = document.createElement('div');
//       let game1favoriteordog =
//         game[0].projectedPoints - game[1].projectedPoints;
//       const vegasfavor1 = document.createTextNode(
//         `${game[0].teamName} home (${game1favoriteordog})`
//       );

//       rendervegasfavor1.appendChild(vegasfavor1);
//       const vegasfavor1div = document.getElementById('vegasfavor1');
//       document.body.insertBefore(rendervegasfavor1, vegasfavor1div);
//       rendervegasfavor1.classList.add('vegasfavor-1');
//     }

//     //game2
//     else if (key < 2) {
//       const rendervegasfavor2 = document.createElement('div');
//       let game2favoriteordog =
//         game[0].projectedPoints - game[1].projectedPoints;
//       const vegasfavor2 = document.createTextNode(
//         `${game[0].teamName} home (${game2favoriteordog})`
//       );
//       rendervegasfavor2.appendChild(vegasfavor2);
//       const vegasfavor2div = document.getElementById('vegasfavor2');
//       document.body.insertBefore(rendervegasfavor2, vegasfavor2div);
//       rendervegasfavor2.classList.add('vegasfavor-2');
//     }
//   }

// for (const [key, teams] of allTeams.entries()) {
//   if (key % 2 == 0 && key < 2) {
//     let game1 = [allTeams[key], allTeams[key + 1]];

// if (teamOne.projectedPoints > teamTwo.projectedPoints) {
//   let favoriteMargin = teamTwo.projectedPoints - teamOne.projectedPoints;
//   gameFavoredBy.textContent = `${teamOne.teamName} (${favoriteMargin})`;
// } else {
//   let favoriteMargin = teamOne.projectedPoints - teamTwo.projectedPoints;
//   gameFavoredBy.textContent = `${teamTwo.teamName} (${favoriteMargin})`;
// }
// }; // closing renderVegasGameInfo tag

// renderVegasGameInfo();

//   const calcQBdata = function () {}; //closing calcQBdata tag

//   calcQBdata();

//   const renderQBdata = function () {
//     //QB label
//     const renderqb1label = document.createElement('div');
//     const qb1label = document.createTextNode('QB');
//     renderqb1label.appendChild(qb1label);
//     const qb1labeldiv = document.getElementById('qb1label');
//     document.body.insertBefore(renderqb1label, qb1labeldiv);
//     renderqb1label.classList.add('qb1labelclass');

//     //ppp
//     const renderqb1ppp = document.createElement('div');
//     const qb1ppp = document.createTextNode(
//       `PPP: ${teamOne.QB.qbName}: ${allqbppps[0]}, ${teamTwo.QB.qbName}: ${allqbppps[1]}`
//     );
//     renderqb1ppp.appendChild(qb1ppp);
//     const qb1pppdiv = document.getElementById('qb1');
//     document.body.insertBefore(renderqb1ppp, qb1pppdiv);
//     renderqb1ppp.classList.add('qb1pppclass');

//     //matchup
//     const renderqb1matchup = document.createElement('div');
//     const qb1matchup = document.createTextNode(
//       `matchup: ${teamOne.QB.qbName}: ${teamOne.QB.matchup}, ${teamTwo.QB.qbName}: ${teamTwo.QB.matchup}`
//     );
//     renderqb1matchup.appendChild(qb1matchup);
//     const qb1matchupdiv = document.getElementById('qb1');
//     document.body.insertBefore(renderqb1matchup, qb1matchupdiv);
//     renderqb1matchup.classList.add('qb1matchupclass');

//     // qbPPP.textContent = `PPP: ${teamOne.QB.qbName}: ${allqbppps[0]}, ${teamTwo.QB.qbName}: ${allqbppps[1]}`;
//     // qbDef.textContent = `matchup against: ${teamOne.teamName}: ${teamOne.QB.matchup}, ${teamTwo.teamName}: ${teamTwo.QB.matchup}`;
//   }; //closing renderQBdata tag

//   renderQBdata();
// }; //closing calcAndRenderAll tag

// calcAndRenderAll(saints, jets);
