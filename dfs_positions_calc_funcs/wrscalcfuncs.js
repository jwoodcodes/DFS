const allTeams = require('../index');

const WRValuesCalcs = {
  calcWRppps(team) {
    let WRppps = team.prjpoints;

    if (WRppps > 18) {
      WRppps = 15;
    } else if (WRppps > 16.9 && WRppps < 18) {
      WRppps = 12.5;
    } else if (WRppps > 15.9 && WRppps < 17) {
      WRppps = 10;
    } else if (WRppps > 14.9 && WRppps < 16) {
      WRppps = 7.5;
    } else if (WRppps > 13.9 && WRppps < 15) {
      WRppps = 5;
    } else if (WRppps > 12.9 && WRppps < 14) {
      WRppps = 2.5;
    } else if (WRppps > 10.9 && WRppps < 13) {
      WRppps = 0;
    } else if (WRppps > 9.9 && WRppps < 11) {
      WRppps = -2.5;
    } else if (WRppps > 8.9 && WRppps < 10) {
      WRppps = -5;
    } else if (WRppps > 7.9 && WRppps < 9) {
      WRppps = -7.5;
    } else if (WRppps > 6.9 && WRppps < 8) {
      WRppps = -10;
    } else {
      WRppps = -15;
    }

    return WRppps;
  },

  calcWRmatchup(team) {
    let wrmatchup = team.WROne.matchup;
    return wrmatchup;
  },

  calcWRVTT(team) {
    let teamVTT = team.projectedPoints;

    if (teamVTT > 28) {
      teamVTT = 5;
    } else if (teamVTT > 24.9 && teamVTT < 28) {
      teamVTT = 2.5;
    } else if (teamVTT > 19.9 && teamVTT < 25) {
      teamVTT = 0;
    } else if (teamVTT > 17.4 && teamVTT < 20) {
      teamVTT = -2.5;
    } else {
      teamVTT = -5;
    }

    return teamVTT;
  },

  calcWRprjReceptions(team) {
    let WRPrjTargets = team.prjReceptions;

    if (WRPrjTargets > 8) {
      WRPrjTargets = 17.5;
    } else if (WRPrjTargets > 6.9 && WRPrjTargets < 8) {
      WRPrjTargets = 15;
    } else if (WRPrjTargets > 5.9 && WRPrjTargets < 7) {
      WRPrjTargets = 12.5;
    } else if (WRPrjTargets > 5.4 && WRPrjTargets < 6) {
      WRPrjTargets = 7.5;
    } else {
      WRPrjTargets = 0;
    }

    return WRPrjTargets;
  },
}; //closing WRValuesCalcs tag

module.exports = WRValuesCalcs;
