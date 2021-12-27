'use strict';

const gameVegas = document.querySelector('.game__container--game');
const gameVegasOdds = document.querySelector('.vegas__overunder');

//QB
const qbDef = document.querySelector('.qb__item--def');
const qbPPP = document.querySelector('.qb__item--ppp');
const qbTotalScoreItem = document.querySelector('.qb__item--totalQBScore');
const qbTotalScoreItem2X = document.querySelector('.qb__item--totalQBScore2X');
const qbGameScore = document.querySelector('.qb__item--gamescore');
const qbGameScore2X = document.querySelector('.qb__item--gamescore2X');
const qbIPS = document.querySelector('.qb__item--IPS');

//RB
const rbDef = document.querySelector('.rb__item--def');
const rbPPP = document.querySelector('.rb__item--ppp');
const rbTotalScoreItem = document.querySelector('.rb__item--totalRBScore');
const rbTotalScoreItem2X = document.querySelector('.rb__item--totalRBScore2X');
const rbGameScore = document.querySelector('.rb__item--gamescore');
const rbGameScore2X = document.querySelector('.rb__item--gamescore2X');
const rbIPS = document.querySelector('.rb__item--IPS');

//WR
const wrDef = document.querySelector('.wr__item--def');
const wrPPP = document.querySelector('.wr__item--ppp');
const wrTotalScoreItem = document.querySelector('.wr__item--totalWRScore');
const wrTotalScoreItem2X = document.querySelector('.wr__item--totalWRScore2X');
const wrGameScore = document.querySelector('.wr__item--gamescore');
const wrGameScore2X = document.querySelector('.wr__item--gamescore2X');
const wrIPS = document.querySelector('.wr__item--IPS');

const gameInfo = {
  saints: {
    teamName: 'saints',
    projectedPoints: 24.25,
    QB: {
      qbName: 'Hill',
      def: 2.5,
      ppp: 18.4,
    },
    RB: {
      rbName: 'Kamara',
      def: 0,
      ppp: 17.6,
    },
    WR: {
      wrName: 'Callaway',
      def: 2.5,
      ppp: 7.5,
    },
    TE: '7.5, -10',
  },
  jets: {
    teamName: 'jets',
    projectedPoints: 16.75,
    QB: {
      qbName: 'Wilson',
      def: 2.5,
      ppp: 12.9,
    },
    RB: {
      rbName: 'Carter',
      def: 0,
      ppp: 14.2,
    },
    WR: {
      wrName: 'Crowder',
      def: 0,
      ppp: 9.0,
    },
    TE: '-5, -10',
  },
};

const saints = gameInfo.saints;
const jets = gameInfo.jets;

const getData = function (teamOne, teamTwo) {
  const renderGameInfo = function () {
    gameVegas.textContent = `${teamOne.teamName}(${gameInfo.saints.projectedPoints}) at ${teamTwo.teamName}(${gameInfo.jets.projectedPoints})`;

    gameVegasOdds.textContent = `over/under ${
      teamOne.projectedPoints + teamTwo.projectedPoints
    }`;

    qbDef.textContent = `DEF: ${teamOne.teamName}: ${teamOne.QB.def}, ${teamTwo.teamName}: ${teamTwo.QB.def}`;

    rbDef.textContent = `DEF: ${teamOne.teamName}: ${teamOne.RB.def}, ${teamTwo.teamName}: ${teamTwo.RB.def}`;

    wrDef.textContent = `DEF: ${teamOne.teamName}: ${teamOne.WR.def}, ${teamTwo.teamName}: ${teamTwo.WR.def}`;
  };

  renderGameInfo();

  const getQBdata = function () {
    let gameqbPPPs = [teamOne.QB.ppp, teamTwo.QB.ppp];
    for (let i = 0; i < gameqbPPPs.length; i++) {
      if (gameqbPPPs[i] >= 21.7) {
        gameqbPPPs[i] = 20;
      } else if (gameqbPPPs[i] > 19.6 && gameqbPPPs[i] < 21.7) {
        gameqbPPPs[i] = 15;
      } else if (gameqbPPPs[i] > 18.6 && gameqbPPPs[i] < 19.7) {
        gameqbPPPs[i] = 10;
      } else if (gameqbPPPs[i] > 17.6 && gameqbPPPs[i] < 18.7) {
        gameqbPPPs[i] = 5;
      } else if (gameqbPPPs[i] > 16.6 && gameqbPPPs[i] < 17.7) {
        gameqbPPPs[i] = 0;
      } else if (gameqbPPPs[i] > 14.6 && gameqbPPPs[i] < 16.7) {
        gameqbPPPs[i] = -5;
      } else {
        gameqbPPPs[i] = -10;
      }

      let t1qbPPP = gameqbPPPs[0];
      let t2qbPPP = gameqbPPPs[1];
      // console.log(t1qbPPP);
      // console.log(t2qbPPP);

      const t1QBGameScore = t1qbPPP + teamOne.QB.def;
      const t2QBGameScore = t2qbPPP + teamTwo.QB.def;
      const t1QBGameScore2X = t1QBGameScore * 2;
      const t2QBGameScore2X = t2QBGameScore * 2;
      const QBGameScoreValue = t1QBGameScore + t2QBGameScore;
      const QBGameScoreValue2X = QBGameScoreValue * 2;

      const renderqbdata = function () {
        qbPPP.textContent = `PPP: ${teamOne.QB.qbName}: ${t1qbPPP}, ${teamTwo.QB.qbName}: ${t2qbPPP}`;

        qbTotalScoreItem.textContent = `Total QB score(def + PPP): ${teamOne.QB.qbName}: ${t1QBGameScore}, ${teamTwo.QB.qbName}: ${t2QBGameScore}`;

        qbTotalScoreItem2X.textContent = `2X(${teamOne.QB.qbName}: ${t1QBGameScore2X}, ${teamTwo.QB.qbName}: ${t2QBGameScore2X}), just for individual team game score`;

        qbGameScore.textContent = `Game score (both teams scores added): ${QBGameScoreValue} `;

        qbGameScore2X.textContent = `2x(${QBGameScoreValue2X})`;
      };
      renderqbdata();
    }
  };
  getQBdata();
};

const getRBPPP = function (ppp1, ppp2) {
  let t1rbPPP = teamOne.RB.ppp;
  let t2rbPPP = teamTwo.RB.ppp;
  if (t1rbPPP >= 20) {
    t1rbPPP = 20;
  } else if (t1rbPPP > 17.4 && t1rbPPP < 20) {
    t1rbPPP = 15;
  } else if (t1rbPPP > 14.9 && t1rbPPP < 17.5) {
    t1rbPPP = 10;
  } else if (t1rbPPP > 13.9 && t1rbPPP < 15) {
    t1rbPPP = 5;
  } else if (t1rbPPP > 13.4 && t1rbPPP < 14) {
    t1rbPPP = 0;
  } else if (t1rbPPP > 12.9 && t1rbPPP < 13.5) {
    t1rbPPP = -5;
  } else {
    t1rbPPP = -10;
  }

  if (t2rbPPP >= 20) {
    t2rbPPP = 20;
  } else if (t2rbPPP > 17.4 && t2rbPPP < 20) {
    t2rbPPP = 15;
  } else if (t2rbPPP > 14.9 && t2rbPPP < 17.5) {
    t2rbPPP = 10;
  } else if (t2rbPPP > 13.9 && t2rbPPP < 15) {
    t2rbPPP = 5;
  } else if (t2rbPPP > 13.4 && t2rbPPP < 14) {
    t2rbPPP = 0;
  } else if (t2rbPPP > 12.9 && t2rbPPP < 13.5) {
    t2rbPPP = -5;
  } else {
    t2rbPPP = -10;
  }

  // console.log(t1rbPPP);
  // console.log(t2rbPPP);

  const t1RBGameScore = t1rbPPP + teamOne.RB.def;
  const t2RBGameScore = t2rbPPP + teamTwo.RB.def;
  const t1RBGameScore2X = t1RBGameScore * 2;
  const t2RBGameScore2X = t2RBGameScore * 2;
  const RBGameScoreValue = t1RBGameScore + t2RBGameScore;
  const RBGameScoreValue2X = RBGameScoreValue * 2;

  rbPPP.textContent = `PPP: ${teamOne.RB.rbName}: ${t1rbPPP}, ${teamTwo.RB.rbName}: ${t2rbPPP}`;

  rbTotalScoreItem.textContent = `Total RB score(def + PPP): ${teamOne.RB.rbName}: ${t1RBGameScore}, ${teamTwo.RB.rbName}: ${t2RBGameScore}`;

  rbTotalScoreItem2X.textContent = `2X(${teamOne.RB.rbName}: ${t1RBGameScore2X}, ${teamTwo.RB.rbName}: ${t2RBGameScore2X}), just for individual team game score`;

  rbGameScore.textContent = `Game score (both teams scores added): ${RBGameScoreValue} `;

  rbGameScore2X.textContent = `2x(${RBGameScoreValue2X})`;
};

const getWRPPP = function (ppp1, ppp2) {
  let t1wrPPP = teamOne.WR.ppp;
  let t2wrPPP = teamTwo.WR.ppp;
  if (t1wrPPP >= 17.9) {
    t1wrPPP = 20;
  } else if (t1wrPPP > 19.6 && t1wrPPP < 21.7) {
    t1qbPPP = 15;
  } else if (t1wrPPP > 18.6 && t1wrPPP < 19.7) {
    t1qbPPP = 10;
  } else if (t1wrPPP > 17.6 && t1wrPPP < 18.7) {
    t1qbPPP = 5;
  } else if (t1wrPPP > 16.6 && t1wrPPP < 17.7) {
    t1qbPPP = 0;
  } else if (t1wrPPP > 14.6 && t1wrPPP < 16.7) {
    t1wrPPP = -5;
  } else {
    t1wrPPP = -10;
  }

  if (t2wrPPP >= 17.9) {
    t2wrPPP = 20;
  } else if (t2wrPPP > 15.9 && t2wrPPP < 18) {
    t2wrPPP = 15;
  } else if (t2wrPPP > 13.9 && t2wrPPP < 16) {
    t2wrPPP = 10;
  } else if (t2wrPPP > 12.9 && t2wrPPP < 14) {
    t2wrPPP = 7.5;
  } else if (t2wrPPP > 11.9 && t2wrPPP < 13) {
    t2wrPPP = 5;
  } else if (t2wrPPP > 10.9 && t2wrPPP < 12) {
    t2wrPPP = 0;
  } else if (t2wrPPP > 9.9 && t2wrPPP < 11) {
    t2wrPPP = -2.5;
  } else if (t2wrPPP > 8.9 && t2wrPPP < 10) {
    t2wrPPP = -5;
  } else if (t2wrPPP > 7.9 && t2wrPPP < 8) {
    t2wrPPP = -7.5;
  } else {
    t2wrPPP = -10;
  }

  // console.log(t1wrPPP);
  // console.log(t2wrPPP);

  const t1WRGameScore = t1wrPPP + teamOne.WR.def;
  const t2WRGameScore = t2wrPPP + teamTwo.WR.def;
  const t1WRGameScore2X = t1WRGameScore * 2;
  const t2WRGameScore2X = t2WRGameScore * 2;
  const WRGameScoreValue = t1WRGameScore + t2WRGameScore;
  const WRGameScoreValue2X = WRGameScoreValue * 2;

  wrPPP.textContent = `PPP: ${teamOne.WR.wrName}: ${t1wrPPP}, ${teamTwo.WR.wrName}: ${t2wrPPP}`;

  wrTotalScoreItem.textContent = `Total WR score(def + PPP): ${teamOne.WR.wrName}: ${t1WRGameScore}, ${teamTwo.WR.wrName}: ${t2WRGameScore}`;

  wrTotalScoreItem2X.textContent = `2X(${teamOne.WR.wrName}: ${t1WRGameScore2X}, ${teamTwo.WR.wrName}: ${t2WRGameScore2X}), just for individual team game score`;

  wrGameScore.textContent = `Game score (both teams scores added): ${WRGameScoreValue} `;

  wrGameScore2X.textContent = `2x(${WRGameScoreValue2X})`;

  //WR should look like

  // Def:
  // #1 PPP:
  // #2 bonus?
  // Team Total score(def + #1 + #2):
  // Game score(both total team scores added together):
  //  IPS(individual player score, is PPP + def + all relevant WR bonuses):

  getRBPPP();
  getWRPPP();
};

getData(saints, jets);
