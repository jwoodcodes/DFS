const allTeams = require('../index');

const TEValuesCalcs = {
  calcTEppps(team) {
    let gameTEPPP = team.TE.prjpoints;

    if (gameTEPPP > 15) {
      gameTEPPP = 17.5;
    } else if (gameTEPPP > 13.9 && gameTEPPP < 15) {
      gameTEPPP = 15;
    } else if (gameTEPPP > 12.9 && gameTEPPP < 14) {
      gameTEPPP = 12.5;
    } else if (gameTEPPP > 11.9 && gameTEPPP < 13) {
      gameTEPPP = 10;
    } else if (gameTEPPP > 10.9 && gameTEPPP < 12) {
      gameTEPPP = 7.5;
    } else if (gameTEPPP > 9.9 && gameTEPPP < 11) {
      gameTEPPP = 5;
    } else if (gameTEPPP > 8.9 && gameTEPPP < 10) {
      gameTEPPP = 2.5;
    } else if (gameTEPPP > 6.9 && gameTEPPP < 9) {
      gameTEPPP = 0;
    } else {
      gameTEPPP = -5;
    }
    return gameTEPPP;
  },

  calcTEmatchup(team) {
    let tematchup = team.TE.matchup;
    return tematchup;
  },

  calcTEPrjReceptions(team) {
    let TEPrjRec = team.TE.prjReceptions;

    if (TEPrjRec > 5.4) {
      TEPrjRec = 15;
    } else if (TEPrjRec > 4.9 && TEPrjRec < 5.5) {
      TEPrjRec = 12.5;
    } else if (TEPrjRec > 4.4 && TEPrjRec < 5) {
      TEPrjRec = 10;
    } else if (TEPrjRec > 4 && TEPrjRec < 4.5) {
      TEPrjRec = 7.5;
    } else {
      TEPrjRec = 0;
    }

    return TEPrjRec;
  },
}; //closing TEValuesCalcs tag

module.exports = TEValuesCalcs;
