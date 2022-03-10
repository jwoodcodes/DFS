const allTeams = require('../index');
const gameInfo = require('../gameinfo');

const QBValuesCalcs = {
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

  calcQBSecondHighlyPRojectedWRBonus(team) {
    let SecondWRPrjPoints = team.WRTwo.prjpoints;
    let QBSecondWRBonus = 0;

    if (SecondWRPrjPoints > 12.9) {
      QBSecondWRBonus = 20;
    } else if (SecondWRPrjPoints > 11.9 && SecondWRPrjPoints < 13) {
      QBSecondWRBonus = 15;
    } else if (SecondWRPrjPoints > 10.9 && SecondWRPrjPoints < 13) {
      QBSecondWRBonus = 10;
    } else {
      QBSecondWRBonus = 0;
    }

    return QBSecondWRBonus;
  },
}; //closing QBValuesCalcs tag

module.exports = QBValuesCalcs;
