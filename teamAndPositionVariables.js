const gameInfo = require('./gameinfo');
const qbrawdata = require('./teamandpostionsrawdata/qbrawdata');

//All team level variables

const sf49ers = gameInfo.SF49ers;
const bears = gameInfo.bears;
const bengals = gameInfo.bengals;
const bills = gameInfo.bills;
const broncos = gameInfo.broncos;
const browns = gameInfo.browns;
const buccaneers = gameInfo.buccaneers;
const cardinals = gameInfo.cardinals;
const chargers = gameInfo.chargers;
const chiefs = gameInfo.chiefs;
const colts = gameInfo.colts;
const commanders = gameInfo.Commanders;
const cowboys = gameInfo.cowboys;
const dolphins = gameInfo.dolphins;
const eagles = gameInfo.eagles;
const falcons = gameInfo.falcons;
const giants = gameInfo.giants;
const jaguars = gameInfo.jaguars;
const jets = gameInfo.jets;
const lions = gameInfo.lions;
const packers = gameInfo.packers;
const panthers = gameInfo.panthers;
const patriots = gameInfo.patriots;
const raiders = gameInfo.raiders;
const rams = gameInfo.rams;
const ravens = gameInfo.ravens;
const saints = gameInfo.saints;
const seahawks = gameInfo.seahawks;
const steelers = gameInfo.steelers;
const texans = gameInfo.texans;
const titans = gameInfo.titans;
const vikings = gameInfo.vikings;

//////////all team level allTeams array///////

const allTeams = [
  // sf49ers,
  // titans,
  // browns,
  // packers,
  // colts,
  // cardinals,
  bengals,
  ravens,

  // giants,
  // eagles,
  // rams,
  // vikings,
  // buccaneers,
  // panthers,
  // bills,
  // patriots,

  jets,
  jaguars,

  // lions,
  // falcons,
  // chargers,
  // texans,
  // bears,
  // seahawks,

  chiefs,
  steelers,
  // broncos,
  // raiders,
  // commanders,
  // cowboys,
  saints,
  dolphins,
];

/////////////QB variables and allQBs array////////////////

const sf49ersQB = qbrawdata.SF49ers;
const bearsQB = qbrawdata.bears;
const bengalsQB = qbrawdata.bengals;
const billsQB = qbrawdata.bills;
const broncosQB = qbrawdata.broncos;
const brownsQB = qbrawdata.browns;
const buccaneersQB = qbrawdata.buccaneers;
const cardinalsQB = qbrawdata.cardinals;
const chargersQB = gameInfo.chargers;
const chiefsQB = qbrawdata.chiefs;
const coltsQB = qbrawdata.colts;
const commandersQB = qbrawdata.Commanders;
const cowboysQB = qbrawdata.cowboys;
const dolphinsQB = qbrawdata.dolphins;
const eaglesQB = qbrawdata.eagles;
const falconsQB = qbrawdata.falcons;
const giantsQB = qbrawdata.giants;
const jaguarsQB = qbrawdata.jaguars;
const jetsQB = qbrawdata.jets;
const lionsQB = qbrawdata.lions;
const packersQB = qbrawdata.packers;
const panthersQB = qbrawdata.panthers;
const patriotsQB = qbrawdata.patriots;
const raidersQB = qbrawdata.raiders;
const ramsQB = qbrawdata.rams;
const ravensQB = qbrawdata.ravens;
const saintsQB = qbrawdata.saints;
const seahawksQB = qbrawdata.seahawks;
const steelersQB = qbrawdata.steelers;
const texansQB = qbrawdata.texans;
const titansQB = qbrawdata.titans;
const vikingsQB = qbrawdata.vikings;

const allQBs = [
  bengalsQB,
  ravensQB,
  chiefsQB,
  steelersQB,
  jetsQB,
  jaguarsQB,

  saintsQB,
  dolphinsQB,
];

module.exports = allTeams;
module.exports = allQBs;

/////////////RB Variables and allRBs array//////////////////
