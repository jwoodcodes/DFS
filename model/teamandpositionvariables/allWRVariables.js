const gameInfo = require('../teamandpostionsrawdata/gameinfo');
const allTeams = require('./allTeamLevelVariables');
const wrrawdata = require('../teamandpostionsrawdata/wrrawdata');

/////////////RB Variables and allRBs array//////////////////

//All team level variables

const SF = wrrawdata.SF49ers;
const CHI = wrrawdata.bears;
const CIN = wrrawdata.bengals;
const BUF = wrrawdata.bills;
const DEN = wrrawdata.broncos;
const CLE = wrrawdata.browns;
const TB = wrrawdata.buccaneers;
const ARI = wrrawdata.cardinals;
const LAC = wrrawdata.chargers;
const KC = wrrawdata.chiefs;
const IND = wrrawdata.colts;
const WAS = wrrawdata.commanders;
const DAL = wrrawdata.cowboys;
const MIA = wrrawdata.dolphins;
const PHI = wrrawdata.eagles;
const ATL = wrrawdata.falcons;
const NYG = wrrawdata.giants;
const JAC = wrrawdata.jaguars;
const NYJ = wrrawdata.jets;
const DET = wrrawdata.lions;
const GB = wrrawdata.packers;
const CAR = wrrawdata.panthers;
const NE = wrrawdata.patriots;
const LV = wrrawdata.raiders;
const LAR = wrrawdata.rams;
const BAL = wrrawdata.ravens;
const NO = wrrawdata.saints;
const SEA = wrrawdata.seahawks;
const PIT = wrrawdata.steelers;
const HOU = wrrawdata.texans;
const TEN = wrrawdata.titans;
const MIN = wrrawdata.vikings;

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

const allWRs = allUniqueTeams;
// console.log(allWRs);
module.exports = allWRs;
