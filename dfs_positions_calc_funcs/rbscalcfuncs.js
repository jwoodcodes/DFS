const allTeams = require('../index');

const RBValuesCalcs = {
  calcRBppps(team) {
    let gameRBppps = team.RBOne.fiftyithPercentProjectedPoints;

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

  calcRBcarries(team) {
    let RBprjcarries = team.RBOne.prjCarries;

    if (RBprjcarries > 22) {
      RBprjcarries = 17.5;
    } else if (RBprjcarries > 18.9 && RBprjcarries < 22) {
      RBprjcarries = 15;
    } else if (RBprjcarries > 16.9 && RBprjcarries < 19) {
      RBprjcarries = 12.5;
    } else if (RBprjcarries > 14.9 && RBprjcarries < 17) {
      RBprjcarries = 10;
    } else {
      RBprjcarries = 0;
    }

    return RBprjcarries;
  },

  calcRBtargets(team) {
    let RBPrjTargets = team.RBOne.prjTargets;

    if (RBPrjTargets > 4.4) {
      RBPrjTargets = 15;
    } else if (RBPrjTargets > 3.9 && RBPrjTargets < 4.5) {
      RBPrjTargets = 12.5;
    } else if (RBPrjTargets > 3.4 && RBPrjTargets < 4) {
      RBPrjTargets = 7.5;
    } else if (RBPrjTargets > 1.9 && RBPrjTargets < 3.5) {
      RBPrjTargets = 0;
    } else {
      RBPrjTargets = -5;
    }
    return RBPrjTargets;
  },
}; //closing RBValuesCalcs tag

module.exports = RBValuesCalcs;
