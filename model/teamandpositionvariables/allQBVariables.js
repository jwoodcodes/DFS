const qbrawdata = require('../teamandpostionsrawdata/qbrawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');

/////////////QB variables and allQBs array////////////////

//All team level variables

const SF = qbrawdata.SF49ers;
const CHI = qbrawdata.bears;
const CIN = qbrawdata.bengals;
const BUF = qbrawdata.bills;
const DEN = qbrawdata.broncos;
const CLE = qbrawdata.browns;
const TB = qbrawdata.buccaneers;
const ARI = qbrawdata.cardinals;
const LAC = qbrawdata.chargers;
const KC = qbrawdata.chiefs;
const IND = qbrawdata.colts;
const WAS = qbrawdata.commanders;
const DAL = qbrawdata.cowboys;
const MIA = qbrawdata.dolphins;
const PHI = qbrawdata.eagles;
const ATL = qbrawdata.falcons;
const NYG = qbrawdata.giants;
const JAC = qbrawdata.jaguars;
const NYJ = qbrawdata.jets;
const DET = qbrawdata.lions;
const GB = qbrawdata.packers;
const CAR = qbrawdata.panthers;
const NE = qbrawdata.patriots;
const LV = qbrawdata.raiders;
const LAR = qbrawdata.rams;
const BAL = qbrawdata.ravens;
const NO = qbrawdata.saints;
const SEA = qbrawdata.seahawks;
const PIT = qbrawdata.steelers;
const HOU = qbrawdata.texans;
const TEN = qbrawdata.titans;
const MIN = qbrawdata.vikings;

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
  // console.log(team);
  // if (team.slate && team.slate !== '') {
  // console.log(team.opponentABV);
  allTeamABV.forEach(function (ABV) {
    // console.log(team.opponentABV);
    // console.log(team.opponentABV);
    // console.log(`${team.name}: ${team.opponentABV}: ${ABV}`);
    // console.log(team.opponentABV, ABV.teamABV);

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
    if (team.opponentABV !== ABV.teamABV) {
      // console.log(team.teamABV);
    }
  });
  if (testAllTeams.includes(team)) {
    // console.log(team);
  } else {
    // console.log(team);
    testAllTeams.push(team);
  }
});

// console.log(testAllTeams.teamABV);

function onlyUnqiues(value, index, self) {
  return self.indexOf(value) === index;
}

let allUniqueTeams = testAllTeams.filter(onlyUnqiues);

// console.log(allUniqueTeams);
allUniqueTeams.forEach(function (team, i) {
  // console.log(team.teamABV);
});

const allQBs = allUniqueTeams;
// console.log(allQBs);
module.exports = allQBs;
