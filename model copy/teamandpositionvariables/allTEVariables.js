const terawdata = require('../teamandpostionsrawdata/terawdata');

const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const allTeams = require('./allTeamLevelVariables');

/////////////RB Variables and allRBs array//////////////////

//All team level variables

const SF = terawdata.SF49ers;
const CHI = terawdata.bears;
const CIN = terawdata.bengals;
const BUF = terawdata.bills;
const DEN = terawdata.broncos;
const CLE = terawdata.browns;
const TB = terawdata.buccaneers;
const ARI = terawdata.cardinals;
const LAC = terawdata.chargers;
const KC = terawdata.chiefs;
const IND = terawdata.colts;
const WAS = terawdata.commanders;
const DAL = terawdata.cowboys;
const MIA = terawdata.dolphins;
const PHI = terawdata.eagles;
const ATL = terawdata.falcons;
const NYG = terawdata.giants;
const JAC = terawdata.jaguars;
const NYJ = terawdata.jets;
const DET = terawdata.lions;
const GB = terawdata.packers;
const CAR = terawdata.panthers;
const NE = terawdata.patriots;
const LV = terawdata.raiders;
const LAR = terawdata.rams;
const BAL = terawdata.ravens;
const NO = terawdata.saints;
const SEA = terawdata.seahawks;
const PIT = terawdata.steelers;
const HOU = terawdata.texans;
const TEN = terawdata.titans;
const MIN = terawdata.vikings;

//////////all team level allTeams array///////

const allEveryTeamEvenOnesOnByeThisWeek = [
  CAR,
  NO,
  CHI,
  HOU,
  IND,
  KC,
  MIA,
  BUF,
  MIN,
  DET,
  NE,
  BAL,
  NYG,
  CIN,
  TEN,
  LV,
  WAS,
  PHI,
  LAC,
  JAC,
  ARI,
  LAR,
  SEA,
  ATL,
  TB,
  GB,
  PIT,
  NYJ,
  DAL,
  CLE,
  DEN,
  SF,
];

const allTeamABV = [
  CAR,
  NO,
  CHI,
  HOU,
  IND,
  KC,
  MIA,
  BUF,
  MIN,
  DET,
  NE,
  BAL,
  NYG,
  CIN,
  TEN,
  LV,
  WAS,
  PHI,
  LAC,
  JAC,
  ARI,
  LAR,
  SEA,
  ATL,
  TB,
  GB,
  PIT,
  NYJ,
  DAL,
  CLE,
  DEN,
  SF,
];

const testAllTeams = [];

allEveryTeamEvenOnesOnByeThisWeek.forEach(function (team, i) {
  if (team.slate !== '') {
    // console.log(team.opponentABV);
    allTeamABV.forEach(function (ABV) {
      // console.log(team.opponentABV);
      // console.log(team.opponentABV);
      // console.log(`${team.name}: ${team.opponentABV}: ${ABV}`);
      if (team.opponentABV === ABV.teamABV) {
        if (team.homeOrAway === 'Home') {
          // console.log(team);
          testAllTeams.push(team);
        }
        if (ABV.homeOrAway === 'Home') {
          testAllTeams.push(ABV);
        }
        if (team.homeOrAway === 'Away') {
          testAllTeams.push(team);
        }
        if (ABV.homeOrAway === 'Away') {
          testAllTeams.push(ABV);
        }
      }
    });
  }
});

// console.log(testAllTeams);

function onlyUnqiues(value, index, self) {
  return self.indexOf(value) === index;
}

let allUniqueTeams = testAllTeams.filter(onlyUnqiues);

// console.log(allUniqueTeams);

const allTEs = allUniqueTeams;
// console.log(allTEs);

module.exports = allTEs;
