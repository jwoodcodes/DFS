const gameInfo = require('../teamandpostionsrawdata/gameinfo');

const rbrawdata = require('../teamandpostionsrawdata/rbrawdata');

/////////////RB Variables and allRBs array//////////////////

//All team level variables

const SF = rbrawdata.SF49ers;
const CHI = rbrawdata.bears;
const CIN = rbrawdata.bengals;
const BUF = rbrawdata.bills;
const DEN = rbrawdata.broncos;
const CLE = rbrawdata.browns;
const TB = rbrawdata.buccaneers;
const ARI = rbrawdata.cardinals;
const LAC = rbrawdata.chargers;
const KC = rbrawdata.chiefs;
const IND = rbrawdata.colts;
const WAS = rbrawdata.commanders;
const DAL = rbrawdata.cowboys;
const MIA = rbrawdata.dolphins;
const PHI = rbrawdata.eagles;
const ATL = rbrawdata.falcons;
const NYG = rbrawdata.giants;
const JAC = rbrawdata.jaguars;
const NYJ = rbrawdata.jets;
const DET = rbrawdata.lions;
const GB = rbrawdata.packers;
const CAR = rbrawdata.panthers;
const NE = rbrawdata.patriots;
const LV = rbrawdata.raiders;
const LAR = rbrawdata.rams;
const BAL = rbrawdata.ravens;
const NO = rbrawdata.saints;
const SEA = rbrawdata.seahawks;
const PIT = rbrawdata.steelers;
const HOU = rbrawdata.texans;
const TEN = rbrawdata.titans;
const MIN = rbrawdata.vikings;

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

const allRBs = allUniqueTeams;
// console.log(allRBs);
module.exports = allRBs;
