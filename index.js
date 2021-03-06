'use strict';
// const { EPROTO } = require('constants');

const express = require('express');
const app = express();
const path = require('path');

// const console = require('console');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

// import mongoose from 'mongoose';
const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/DFS-2021-Week_16')
  .then(() => {
    console.log('Mongo connection open!!!');
  })
  .catch(err => {
    console.log('Mongo Connection error');
    console.log(err);
  });

////////scraper

// const browserObject = require('./scraper');
// const scraperController = require('./pageController');

// //Start the browser and create a browser instance
// let browserInstance = browserObject.startBrowser();

// // Pass the browser instance to the scraper controller
// scraperController(browserInstance);

const allQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs');
// import allQBData from './dfs_positions_calc_funcs/qbValuesCalcs';
const allRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs');

const allWRData = require('./dfs_positions_calc_funcs/wrValuesCalcs');

const allTEData = require('./dfs_positions_calc_funcs/teValuesCalcs');

const allStackData = require('./dfs_positions_calc_funcs/stackingValuesCalcs');
const allDefData = require('./dfs_positions_calc_funcs/defValuesCalcs');

const { clearCache } = require('ejs');
const { getSystemErrorName } = require('util');
const { CommandStartedEvent, ConnectionClosedEvent } = require('mongodb');
const { all } = require('express/lib/application');
const { data } = require('autoprefixer');

// console.log(allQBData);
// console.log(allRBData);
// console.log(allWRData);
// console.log(allTEData);
// console.log(allStackData);
// console.log(allDefData);

const qbSchema = new mongoose.Schema({
  position: String,
  allQBVttArrays: Array,
  allQBYPALastFiveGamesPlayedArrays: Array,
  allQBTDRateLastFiveGamesPlayedArrays: Array,
  allQBHomeOrAwayFavoriteOrUnderdogArrays: Array,
  allQBSecondHighlyProjectedPassCatcherArrays: Array,
  allQBTotalScoreArrays: Array,
  allQBFinalProjectedPointsValueArrays: Array,
  allQBFinalProjectedPointsValuesPlusNamesArray: Array,
});

const QB = mongoose.model('QB', qbSchema);

QB.deleteMany({ position: 'QB' }, function (err) {
  if (err) {
    console.log(`${err} error at QB delete`);
  }
  console.log('successful QB delete');
});

QB.insertMany({
  position: 'QB',

  allQBVttArrays: allQBData.allQBVtts,
  allQBYPALastFiveGamesPlayedArrays: allQBData.allQBYPALastFiveGamesPlayeds,
  allQBTDRateLastFiveGamesPlayedArrays:
    allQBData.allQBTDRateLastFiveGamesPlayeds,

  allQBHomeOrAwayFavoriteOrUnderdogArrays:
    allQBData.allQBHomeOrAwayFavoriteOrUnderdogs,

  allQBSecondHighlyProjectedPassCatcherArrays:
    allQBData.allQBSecondHighlyProjectedPassCatchers,

  allQBTotalScoreArrays: allQBData.allQBTotalScores,
  allQBFinalProjectedPointsValueArrays:
    allQBData.allQBFinalProjectedPointsValues,

  allQBFinalProjectedPointsValuesPlusNamesArray:
    allQBData.allQBFinalProjectedPointsValuesPlusNames,
}).then(data => {
  console.log('QB Data Inserted Successfully');
  // console.log(data);
});

const rbSchema = new mongoose.Schema({
  position: String,
  allRBOneHalfPPRProjectedPointsValues: Array,
  allRBOneFullPPRProjectedPointsValues: Array,
  allRBTwoHalfPPRProjectedPointsValues: Array,
  allRBTwoFullPPRProjectedPointsValues: Array,
  allRBOneHalfPPRProjectedPointsValuesPlusNames: Array,
  allRBTwoHalfPPRProjectedPointsValuesPlusNames: Array,
  allRBOneFullPPRProjectedPointsValuesPlusNames: Array,
  allRBTwoFullPPRProjectedPointsValuesPlusNames: Array,
  allRBHalfPPRProjectedPointsValues: Array,
  allRBFullPPRProjectedPointsValues: Array,
  allRBHalfPPRProjectedPointsValuesPlusNames: Array,
  allRBFullPPRProjectedPointsValuesPlusNames: Array,
});

const RB = mongoose.model('RB', rbSchema);

RB.deleteMany({ position: 'RB' }, function (err) {
  if (err) {
    console.log(`${err} error at RB delete`);
  }
  console.log('successful RB delete');
});

RB.insertMany({
  position: 'RB',
  allRBOneHalfPPRProjectedPointsValues:
    allRBData.allRBOneHalfPPRProjectedPointsValues,

  allRBOneFullPPRProjectedPointsValues:
    allRBData.allRBOneFullPPRProjectedPointsValues,

  allRBTwoHalfPPRProjectedPointsValues:
    allRBData.allRBTwoHalfPPRProjectedPointsValues,

  allRBTwoFullPPRProjectedPointsValues:
    allRBData.allRBTwoFullPPRProjectedPointsValues,

  allRBOneHalfPPRProjectedPointsValuesPlusNames:
    allRBData.allRBOneHalfPPRProjectedPointsValuesPlusNames,

  allRBTwoHalfPPRProjectedPointsValuesPlusNames:
    allRBData.allRBTwoHalfPPRProjectedPointsValuesPlusNames,

  allRBOneFullPPRProjectedPointsValuesPlusNames:
    allRBData.allRBOneFullPPRProjectedPointsValuesPlusNames,

  allRBTwoFullPPRProjectedPointsValuesPlusNames:
    allRBData.allRBTwoFullPPRProjectedPointsValuesPlusNames,

  allRBHalfPPRProjectedPointsValues:
    allRBData.allRBHalfPPRProjectedPointsValues,

  allRBFullPPRProjectedPointsValues:
    allRBData.allRBFullPPRProjectedPointsValues,

  allRBHalfPPRProjectedPointsValuesPlusNames:
    allRBData.allRBHalfPPRProjectedPointsValuesPlusNames,

  allRBFullPPRProjectedPointsValuesPlusNames:
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames,
}).then(data => {
  console.log('RB Data Inserted Successfully');
  // console.log(data);
});

const wrSchema = new mongoose.Schema({
  position: String,
  allWROneHomeOrAwayFavoriteOrUnderdogs: Array,
  allWRTwoHomeOrAwayFavoriteOrUnderdogs: Array,
  allWROneVTTs: Array,
  allWRTwoVTTs: Array,
  allWROneEliteProjectedTargetsBonuss: Array,
  allWRTwoEliteProjectedTargetsBonuss: Array,
  allWROneGameEnvironmentInducedHighTargetVolume: Array,
  allWRTwoGameEnvironmentInducedHighTargetVolume: Array,
  allWROneIfTopTwelveTargetShareLasThreeWeeks: Array,
  allWRTwoIfTopTwelveTargetShareLasThreeWeeks: Array,
  allWROneTotalScores: Array,
  allWRTwoTotalScores: Array,
  allHalfWROneFinalProjectedPointsValues: Array,
  allHalfWROneFinalProjectedPointsValuesPlusNames: Array,
  allFullWROneFinalProjectedPointsValues: Array,
  allFullWROneFinalProjectedPointsValuesPlusNames: Array,
  allHalfWRTwoFinalProjectedPointsValues: Array,
  allHalfWRTwoFinalProjectedPointsValuesPlusNames: Array,
  allFullWRTwoFinalProjectedPointsValues: Array,
  allFullWRTwoFinalProjectedPointsValuesPlusNames: Array,
  allWRsHalfProjectedPointsValues: Array,
  allWRsFullProjectedPointsValues: Array,
  allWRsHalfProjectedPointsValuesPlusNames: Array,
  allWRsFullProjectedPointsValuesPlusNames: Array,
});

const WR = mongoose.model('WR', wrSchema);

WR.deleteMany({ position: 'WR' }, function (err) {
  if (err) {
    console.log(`${err} error at WR delete`);
  }
  console.log('successful WR delete');
});

WR.insertMany({
  position: 'WR',
  allWROneHomeOrAwayFavoriteOrUnderdogs:
    allWRData.allWROneHomeOrAwayFavoriteOrUnderdogs,
  allWRTwoHomeOrAwayFavoriteOrUnderdogs:
    allWRData.allWRTwoHomeOrAwayFavoriteOrUnderdogs,
  allWROneVTTs: allWRData.allWROneVTTs,
  allWRTwoVTTs: allWRData.allWRTwoVTTs,
  allWROneEliteProjectedTargetsBonuss:
    allWRData.allWROneEliteProjectedTargetsBonuss,
  allWRTwoEliteProjectedTargetsBonuss:
    allWRData.allWRTwoEliteProjectedTargetsBonuss,
  allWROneGameEnvironmentInducedHighTargetVolume:
    allWRData.allWROneGameEnvironmentInducedHighTargetVolume,
  allWRTwoGameEnvironmentInducedHighTargetVolume:
    allWRData.allWRTwoGameEnvironmentInducedHighTargetVolume,
  allWROneIfTopTwelveTargetShareLasThreeWeeks:
    allWRData.allWROneIfTopTwelveTargetShareLasThreeWeeks,
  allWRTwoIfTopTwelveTargetShareLasThreeWeeks:
    allWRData.allWRTwoIfTopTwelveTargetShareLasThreeWeeks,
  allWROneTotalScores: allWRData.allWROneTotalScores,
  allWRTwoTotalScores: allWRData.allWRTwoTotalScores,
  allHalfWROneFinalProjectedPointsValues:
    allWRData.allHalfWROneFinalProjectedPointsValues,
  allHalfWROneFinalProjectedPointsValuesPlusNames:
    allWRData.allHalfWROneFinalProjectedPointsValuesPlusNames,
  allFullWROneFinalProjectedPointsValues:
    allWRData.allFullWROneFinalProjectedPointsValues,
  allFullWROneFinalProjectedPointsValuesPlusNames:
    allWRData.allFullWROneFinalProjectedPointsValuesPlusNames,
  allHalfWRTwoFinalProjectedPointsValues:
    allWRData.allHalfWRTwoFinalProjectedPointsValues,
  allHalfWRTwoFinalProjectedPointsValuesPlusNames:
    allWRData.allHalfWRTwoFinalProjectedPointsValuesPlusNames,
  allFullWRTwoFinalProjectedPointsValues:
    allWRData.allFullWRTwoFinalProjectedPointsValues,
  allFullWRTwoFinalProjectedPointsValuesPlusNames:
    allWRData.allFullWRTwoFinalProjectedPointsValuesPlusNames,
  allWRsHalfProjectedPointsValues: allWRData.allWRsHalfProjectedPointsValues,
  allWRsFullProjectedPointsValues: allWRData.allWRsFullProjectedPointsValues,
  allWRsHalfProjectedPointsValuesPlusNames:
    allWRData.allWRsHalfProjectedPointsValuesPlusNames,
  allWRsFullProjectedPointsValuesPlusNames:
    allWRData.allWRsFullProjectedPointsValuesPlusNames,
}).then(data => {
  console.log('WR Data Inserted Successfully');
  console.log(data);
});

const teSchema = new mongoose.Schema({
  position: String,
  allTEVTTs: Array,
  allTEHighProjectedTargetsBonus: Array,
  allTEPPRPointsPerGameLastThreeGamesPlayed: Array,
  allTEProjectedReceptions: Array,
  allTETotalScores: Array,
  allHalfTEFinalProjectedPointsValues: Array,
  allHalfTEFinalProjectedPointsValuesPlusNames: Array,
  allFullTEFinalProjectedPointsValues: Array,
  allFullTEFinalProjectedPointsValuesPlusNames: Array,
  allTEPremiuimFinalProjectedPointsValues: Array,
  allTEPremiuimFinalProjectedPointsValuesPlusNames: Array,
});

const TE = mongoose.model('TE', teSchema);

TE.deleteMany({ position: 'TE' }, function (err) {
  if (err) {
    console.log(`${err} error at TE delete`);
  }
  console.log('successful TE delete');
});

TE.insertMany({
  position: 'TE',
  allTEVTTs: allTEData.allTEVTTs,
  allTEHighProjectedTargetsBonus: allTEData.allTEHighProjectedTargetsBonus,
  allTEPPRPointsPerGameLastThreeGamesPlayed:
    allTEData.allTEPPRPointsPerGameLastThreeGamesPlayed,
  allTEProjectedReceptions: allTEData.allTEProjectedReceptions,
  allTETotalScores: allTEData.allTETotalScores,
  allHalfTEFinalProjectedPointsValues:
    allTEData.allHalfTEFinalProjectedPointsValues,
  allHalfTEFinalProjectedPointsValuesPlusNames:
    allTEData.allHalfTEFinalProjectedPointsValuesPlusNames,
  allFullTEFinalProjectedPointsValues:
    allTEData.allFullTEFinalProjectedPointsValues,
  allFullTEFinalProjectedPointsValuesPlusNames:
    allTEData.allFullTEFinalProjectedPointsValuesPlusNames,
  allTEPremiuimFinalProjectedPointsValues:
    allTEData.allTEPremiuimFinalProjectedPointsValues,
  allTEPremiuimFinalProjectedPointsValuesPlusNames:
    allTEData.allTEPremiuimFinalProjectedPointsValuesPlusNames,
}).then(data => {
  console.log('TE Data Inserted Successfully');
  // console.log(data);
});

const flexSchema = new mongoose.Schema({
  position: String,
  allHalfFlexValues: Array,
  allHalfFlexValuesWithNames: Array,
  allPPRFlexValues: Array,
  allPPRFlexValuesWithNames: Array,
  allTEPFlexValues: Array,
  allTEPFlexValuesWithNames: Array,
});

const flex = mongoose.model('flex', flexSchema);

flex.deleteMany({ position: 'flex' }, function (err) {
  if (err) {
    console.log(`${err} error at flex delete`);
  }
  console.log('successful flex delete');
});

flex
  .insertMany({
    position: 'flex',
    allHalfFlexValues: allStackData.allHalfFlexValues,
    allHalfFlexValuesWithNames: allStackData.allHalfFlexValuesWithNames,
    allPPRFlexValues: allStackData.allPPRFlexValues,
    allPPRFlexValuesWithNames: allStackData.allPPRFlexValuesWithNames,
    allTEPFlexValues: allStackData.allTEPFlexValues,
    allTEPFlexValuesWithNames: allStackData.allTEPFlexValuesWithNames,
  })
  .then(data => {
    console.log('flex Data Iserted Successfully');
    // console.log(data);
  });

const stackingSchema = new mongoose.Schema({
  position: String,
  allHalfQBWROneStacks: Array,
  allPPRQBWROneStacks: Array,
  allHalfQBWROneStackWithNames: Array,
  allPPRQBWROneStacksWithNames: Array,
  allTeamsBestHalfSingleStackWithQBWithNames: Array,
  sortedAllHalfQBWROneStacks: Array,
  allTeamsBestPPRSingleStackWithQB: Array,
  allTeamsBestPPRSingleStackWithQBWithNames: Array,
  allTEPremiumBestSingleStackWithQB: Array,
  allTEPremiumBestSingleStackWithQBWithNames: Array,
  allTeamsBestHalfDoubleStackWithQBAndWROne: Array,
  allTeamsBestHalfDoubleStackWithQBAndWROneWithNames: Array,
  allTeamsBestPPRDoubleStackWithQBAndWROne: Array,
  allTeamsBestPPRDoubleStackWithQBAndWROneWithNames: Array,
  allTEPremiumBestDoubleStackWithQBAndWROne: Array,
  allTEPremiumBestDoubleStackWithQBAndWROneWithNames: Array,
  allTeamsBestHalfTripleStackWithQBAndWROne: Array,
  allTeamsBestPPRTripleStackWithQBAndWROne: Array,
  allTEPremiumBestTripleStackWithQBAndWROne: Array,
  allTeamsBestHalfTripleStackWithQBAndWROneWithNames: Array,
  allTeamsBestPPRTripleStackWithQBAndWROneWithNames: Array,
  allTEPremiumBestTripleStackWithQBAndWROneWithNames: Array,
});

const bestStacks = mongoose.model('bestStacks', stackingSchema);

bestStacks.deleteMany({ position: 'stacks' }, function (err) {
  if (err) {
    console.log(`${err} error at stacking delete`);
  }
  console.log('successful stacks delete');
});

bestStacks
  .insertMany({
    position: 'stacks',
    allHalfQBWROneStacks: allStackData.allHalfQBWROneStacks,
    allPPRQBWROneStacks: allStackData.allPPRQBWROneStacks,
    allHalfQBWROneStackWithNames: allStackData.allHalfQBWROneStackWithNames,
    allPPRQBWROneStacksWithNames: allStackData.allPPRQBWROneStacksWithNames,
    allTeamsBestHalfSingleStackWithQBWithNames:
      allStackData.allTeamsBestHalfSingleStackWithQBWithNames,
    sortedAllHalfQBWROneStacks: allStackData.sortedAllHalfQBWROneStacks,
    allTeamsBestPPRSingleStackWithQB:
      allStackData.allTeamsBestPPRSingleStackWithQB,
    allTeamsBestPPRSingleStackWithQBWithNames:
      allStackData.allTeamsBestPPRSingleStackWithQBWithNames,
    allTEPremiumBestSingleStackWithQB:
      allStackData.allTEPremiumBestSingleStackWithQB,
    allTEPremiumBestSingleStackWithQBWithNames:
      allStackData.allTEPremiumBestSingleStackWithQBWithNames,
    allTeamsBestHalfDoubleStackWithQBAndWROne:
      allStackData.allTeamsBestHalfDoubleStackWithQBAndWROne,
    allTeamsBestHalfDoubleStackWithQBAndWROneWithNames:
      allStackData.allTeamsBestHalfDoubleStackWithQBAndWROneWithNames,
    allTeamsBestPPRDoubleStackWithQBAndWROne:
      allStackData.allTeamsBestPPRDoubleStackWithQBAndWROne,
    allTeamsBestPPRDoubleStackWithQBAndWROneWithNames:
      allStackData.allTeamsBestPPRDoubleStackWithQBAndWROneWithNames,
    allTEPremiumBestDoubleStackWithQBAndWROne:
      allStackData.allTEPremiumBestDoubleStackWithQBAndWROne,
    allTEPremiumBestDoubleStackWithQBAndWROneWithNames:
      allStackData.allTEPremiumBestDoubleStackWithQBAndWROneWithNames,
    allTeamsBestHalfTripleStackWithQBAndWROne:
      allStackData.allTeamsBestHalfTripleStackWithQBAndWROne,
    allTeamsBestPPRTripleStackWithQBAndWROne:
      allStackData.allTeamsBestPPRTripleStackWithQBAndWROne,
    allTEPremiumBestTripleStackWithQBAndWROne:
      allStackData.allTEPremiumBestTripleStackWithQBAndWROne,
    allTeamsBestHalfTripleStackWithQBAndWROneWithNames:
      allStackData.allTeamsBestHalfTripleStackWithQBAndWROneWithNames,
    allTeamsBestPPRTripleStackWithQBAndWROneWithNames:
      allStackData.allTeamsBestPPRTripleStackWithQBAndWROneWithNames,
    allTEPremiumBestTripleStackWithQBAndWROneWithNames:
      allStackData.allTEPremiumBestTripleStackWithQBAndWROneWithNames,
  })
  .then(data => {
    console.log('Stacks Data Inserted Successfully');
    // console.log(data);
  });

const defSchema = new mongoose.Schema({
  position: String,
  scoreFromProjectedPointsForDef: Array,
  ScoreFromOwnOff: Array,
  ScoreFromOppOff: Array,
  TeamDefProjPoints: Array,
  allTeamDefensesMap: Map,
});

const teamDef = mongoose.model('teamDef', defSchema);

teamDef.deleteMany({ position: 'def' }, function (err) {
  if (err) {
    console.log(`${err} error at defense delete`);
  }
  console.log('successful defense delete');
});

teamDef
  .insertMany({
    position: 'def',
    scoreFromProjectedPointsForDef: allDefData.scoreFromProjectedPointsForDef,
    ScoreFromOwnOff: allDefData.ScoreFromOwnOff,
    ScoreFromOppOff: allDefData.ScoreFromOppOff,
    TeamDefProjPoints: allDefData.TeamDefProjPoints,
    allTeamDefensesMap: allDefData.allTeamDefensesMap,
  })
  .then(data => {
    console.log('def Data Inserted Successfully');
    // console.log(data);
  });

app.get('/', (req, res) => {
  const group = 'home';
  console.log('we got a new request');
  res.render('home', { group });
});

app.get('/pos/:position', (req, res) => {
  const group = req.params.position;
  // console.log(group);
  res.render('positions', {
    group,
    allQBData,
    allRBData,
    allWRData,
    allTEData,
    allStackData,
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
