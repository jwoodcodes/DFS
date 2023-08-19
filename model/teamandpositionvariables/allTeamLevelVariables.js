const gameInfo = require('../teamandpostionsrawdata/gameinfo');

//All team level variables

const SF = gameInfo.SF49ers;
const CHI = gameInfo.bears;
const CIN = gameInfo.bengals;
const BUF = gameInfo.bills;
const DEN = gameInfo.broncos;
const CLE = gameInfo.browns;
const TB = gameInfo.buccaneers;
const ARI = gameInfo.cardinals;
const LAC = gameInfo.chargers;
const KC = gameInfo.chiefs;
const IND = gameInfo.colts;
const WAS = gameInfo.commanders;
const DAL = gameInfo.cowboys;
const MIA = gameInfo.dolphins;
const PHI = gameInfo.eagles;
const ATL = gameInfo.falcons;
const NYG = gameInfo.giants;
const JAC = gameInfo.jaguars;
const NYJ = gameInfo.jets;
const DET = gameInfo.lions;
const GB = gameInfo.packers;
const CAR = gameInfo.panthers;
const NE = gameInfo.patriots;
const LV = gameInfo.raiders;
const LAR = gameInfo.rams;
const BAL = gameInfo.ravens;
const NO = gameInfo.saints;
const SEA = gameInfo.seahawks;
const PIT = gameInfo.steelers;
const HOU = gameInfo.texans;
const TEN = gameInfo.titans;
const MIN = gameInfo.vikings;

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
  if (team.slate !== undefined && team.slate && team.slate !== '') {
    // console.log(team.opponentABV);
    allTeamABV.forEach(function (ABV) {
      // console.log(`${team.teamName}: ${ABV.teamName}`);
      if (team.opponentABV === ABV.teamABV) {
        // console.log(ABV);
        if (team.homeOrAway === 'Home') {
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

const allTeams = allUniqueTeams;

module.exports = allTeams;
