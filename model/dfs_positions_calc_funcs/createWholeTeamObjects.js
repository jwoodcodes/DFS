const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const allQBs = require('../teamandpositionvariables/allQBVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');
const rbrawdata = require('../teamandpostionsrawdata/rbrawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const allQBData = require('./qbValuesCalcs');

const allTeamsObjectsArray = [];
const wholeTeamObjects = {};

class WholeTeamObjects {
  constructor(teamLevelObject, qbObject, rbObject) {
    this.teamLevelObject = teamLevelObject;
    this.qbObject = qbObject;
    this.rbObject = rbObject;
  }
}

allTeams.forEach(function (team, i) {
  //   console.log(team);
  let qbTeam = '';
  let rbTeam = '';
  allQBs.forEach(function (qb) {
    // console.log(qb);
    if (qb.teamABV === team.teamABV || team.altTeamABV === qb.teamABV) {
      qbTeam = qb;
      //   console.log(qb.teamABV, team.teamABV);
    }
  });
  allRBs.forEach(function (rb) {
    if (rb.teamABV === team.teamABV || team.altTeamABV === rb.teamABV) {
      rbTeam = rb;
      //   console.log(rb.teamABV, team.teamABV);
    }
  });

  let teamObject = new WholeTeamObjects(team, qbTeam, rbTeam);

  allTeamsObjectsArray.push(teamObject);
});

// console.log(allTeamsObjectsArray);

allTeamsObjectsArray.forEach(function (team) {
  if (team.teamLevelObject.teamABV === 'SF') {
    wholeTeamObjects.SF49ers = team;
  }
  if (team.teamLevelObject.teamABV === 'CHI') {
    wholeTeamObjects.bears = team;
  }
  if (team.teamLevelObject.teamABV === 'CIN') {
    wholeTeamObjects.bengals = team;
  }
  if (team.teamLevelObject.teamABV === 'BUF') {
    wholeTeamObjects.bills = team;
  }
  if (team.teamLevelObject.teamABV === 'DEN') {
    wholeTeamObjects.broncos = team;
  }
  if (team.teamLevelObject.teamABV === 'CLE') {
    wholeTeamObjects.browns = team;
  }
  if (team.teamLevelObject.teamABV === 'TB') {
    wholeTeamObjects.buccaneers = team;
  }
  if (team.teamLevelObject.teamABV === 'ARI') {
    wholeTeamObjects.cardinals = team;
  }
  if (team.teamLevelObject.teamABV === 'LAC') {
    wholeTeamObjects.chargers = team;
  }

  if (team.teamLevelObject.teamABV === 'KC') {
    wholeTeamObjects.chiefs = team;
  }

  if (team.teamLevelObject.teamABV === 'IND') {
    wholeTeamObjects.colts = team;
  }
  if (team.teamLevelObject.teamABV === 'WAS') {
    wholeTeamObjects.redskins = team;
  }

  if (team.teamLevelObject.teamABV === 'DAL') {
    wholeTeamObjects.cowboys = team;
  }

  if (team.teamLevelObject.teamABV === 'MIA') {
    wholeTeamObjects.dolphins = team;
  }
  if (team.teamLevelObject.teamABV === 'PHI') {
    wholeTeamObjects.eagles = team;
  }

  if (team.teamLevelObject.teamABV === 'ATL') {
    wholeTeamObjects.falcons = team;
  }

  if (team.teamLevelObject.teamABV === 'NYG') {
    wholeTeamObjects.giants = team;
  }
  if (
    team.teamLevelObject.teamABV === 'JAC' ||
    team.teamLevelObject.teamABV === 'JAX'
  ) {
    wholeTeamObjects.jaguars = team;
  }

  if (team.teamLevelObject.teamABV === 'NYJ') {
    wholeTeamObjects.jets = team;
  }

  if (team.teamLevelObject.teamABV === 'DET') {
    wholeTeamObjects.lions = team;
  }
  if (team.teamLevelObject.teamABV === 'GB') {
    wholeTeamObjects.packers = team;
  }

  if (team.teamLevelObject.teamABV === 'CAR') {
    wholeTeamObjects.panthers = team;
  }

  if (team.teamLevelObject.teamABV === 'NE') {
    wholeTeamObjects.patriots = team;
  }
  if (team.teamLevelObject.teamABV === 'LV') {
    wholeTeamObjects.raiders = team;
  }

  if (team.teamLevelObject.teamABV === 'LAR') {
    wholeTeamObjects.rams = team;
  }

  if (team.teamLevelObject.teamABV === 'BAL') {
    wholeTeamObjects.ravens = team;
  }
  if (team.teamLevelObject.teamABV === 'NO') {
    wholeTeamObjects.saints = team;
  }

  if (team.teamLevelObject.teamABV === 'SEA') {
    wholeTeamObjects.seahawks = team;
  }

  if (team.teamLevelObject.teamABV === 'PIT') {
    wholeTeamObjects.steelers = team;
  }
  if (team.teamLevelObject.teamABV === 'HOU') {
    wholeTeamObjects.texans = team;
  }

  if (team.teamLevelObject.teamABV === 'TEN') {
    wholeTeamObjects.titans = team;
  }

  if (team.teamLevelObject.teamABV === 'MIN') {
    wholeTeamObjects.vikings = team;
  }
});

// console.log(wholeTeamObjects);

module.exports = wholeTeamObjects;
