const allTeams = require('../teamandpositionvariables/allTeamLevelVariables');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const allQBData = require('./qbValuesCalcs');
const allRBData = require('./rbValuesCalcs');
const allWRData = require('./wrValuesCalcs');
const allTEData = require('./teValuesCalcs');
const { chiefs } = require('../teamandpostionsrawdata/gameinfo');

const allTeamsTotalProjectedPointsScore = [];

const calcTeamsTotalProjectedPointsForCalculatingProjectedTeamDefPoints =
  function (team, i) {
    let total = 0;
    let qbMultipliedByTwo = allQBData.allQBFinalProjectedPointsValues[i] * 2;

    total += qbMultipliedByTwo;

    total += allRBData.allRBOneHalfPPRProjectedPointsValues[i];
    total += allRBData.allRBTwoHalfPPRProjectedPointsValues[i];
    total += allWRData.allHalfWROneFinalProjectedPointsValues[i];
    total += allWRData.allHalfWRTwoFinalProjectedPointsValues[i];
    total += allTEData.allHalfTEFinalProjectedPointsValues[i];

    allTeamsTotalProjectedPointsScore.push(+total.toFixed(2));
  };

allTeams.map(function (team, i) {
  calcTeamsTotalProjectedPointsForCalculatingProjectedTeamDefPoints(team, i);
});

//////// testing things and messing around with OOP

const scoreFromProjectedPointsForDef = [];
const ScoreFromOwnOff = [];
const ScoreFromOppOff = [];
const TeamDefProjPoints = [];
const oppTeamOffenseTotalProjPoints = [];

class TeamDef {
  constructor(
    teamName,
    defprojpoints,
    teamoffprojpoints,
    oppteamoffprojectedpoints
  ) {
    this.teamName = teamName;
    this.defprojpoints = defprojpoints;
    this.teamoffprojpoints = teamoffprojpoints;
    this.oppteamoffprojectedpoints = oppteamoffprojectedpoints;
  }

  ////add methods here
  calcScoreFromProjDefPoints() {
    if (this.defprojpoints >= 12) {
      this.defprojpointsScore = 80;
    } else if (this.defprojpoints >= 11 && this.defprojpoints < 12) {
      this.defprojpointsScore = 70;
    } else if (this.defprojpoints >= 10 && this.defprojpoints < 11) {
      this.defprojpointsScore = 60;
    } else if (this.defprojpoints >= 9 && this.defprojpoints < 10) {
      this.defprojpointsScore = 50;
    } else if (this.defprojpoints >= 8 && this.defprojpoints < 9) {
      this.defprojpointsScore = 40;
    } else if (this.defprojpoints >= 7 && this.defprojpoints < 8) {
      this.defprojpointsScore = 20;
    } else {
      this.defprojpointsScore = 0;
    }

    scoreFromProjectedPointsForDef.push(this.defprojpointsScore);
  }

  calcScoreFromOwnTeamsOffTotalProjectedPointsScore() {
    if (this.teamoffprojpoints >= 95) {
      this.ownTeamOffScore = 30;
    } else if (this.teamoffprojpoints >= 85 && this.teamoffprojpoints < 95) {
      this.ownTeamOffScore = 20;
    } else if (this.teamoffprojpoints >= 75 && this.teamoffprojpoints < 85) {
      this.ownTeamOffScore = 10;
    } else {
      this.ownTeamOffScore = 0;
    }

    ScoreFromOwnOff.push(this.ownTeamOffScore);
  }

  calcScoreFromOppTeamOffTotalProjectedPointsScore() {
    if (this.oppteamoffprojectedpoints <= 55) {
      this.oppTeamOffScore = 40;
    } else if (
      this.oppteamoffprojectedpoints <= 65 &&
      this.oppteamoffprojectedpoints > 55
    ) {
      this.oppTeamOffScore = 30;
    } else if (
      this.oppteamoffprojectedpoints <= 75 &&
      this.oppteamoffprojectedpoints > 65
    ) {
      this.oppTeamOffScore = 20;
    } else if (
      this.oppteamoffprojectedpoints <= 94.9 &&
      this.oppteamoffprojectedpoints > 75
    ) {
      this.oppTeamOffScore = 10;
    } else {
      this.oppTeamOffScore = -10;
    }

    ScoreFromOppOff.push(this.oppTeamOffScore);
  }

  calcTeamDefProjPoints() {
    let total =
      this.defprojpointsScore + this.ownTeamOffScore + this.oppTeamOffScore;

    this.teamDefProjPoints = total / 10;

    TeamDefProjPoints.push(this.teamDefProjPoints);
  }
}

//assingning a value for each team for the opposing teams offensive porjections
allTeams.forEach(function (team, i) {
  let oppTeamOffValue = 0;
  if (i % 2) {
    oppTeamOffValue = allTeamsTotalProjectedPointsScore[i - 1];
  } else {
    oppTeamOffValue = allTeamsTotalProjectedPointsScore[i + 1];
  }

  oppTeamOffenseTotalProjPoints.push(oppTeamOffValue);
});

const allTeamDefensesMap = new Map();

allTeams.forEach(function (team, i) {
  let defprojectedpoints = team.def4for4projectedpoints;

  let teamTotal = allTeamsTotalProjectedPointsScore[i];

  let oppTeamTotal = oppTeamOffenseTotalProjPoints[i];

  let testteam = new TeamDef(
    team.teamName,
    defprojectedpoints,
    teamTotal,
    oppTeamTotal
  );

  testteam.calcScoreFromProjDefPoints();
  testteam.calcScoreFromOwnTeamsOffTotalProjectedPointsScore();
  testteam.calcScoreFromOppTeamOffTotalProjectedPointsScore();

  testteam.calcTeamDefProjPoints();

  allTeamDefensesMap.set(team.teamName, testteam);
});

const allDefData = {
  scoreFromProjectedPointsForDef: scoreFromProjectedPointsForDef,
  ScoreFromOwnOff: ScoreFromOwnOff,
  ScoreFromOppOff: ScoreFromOppOff,
  TeamDefProjPoints: TeamDefProjPoints,

  allTeamDefensesMap: allTeamDefensesMap,
};

// console.log(allDefData);

module.exports = allDefData;

console.log('this is for the def values calcs');
