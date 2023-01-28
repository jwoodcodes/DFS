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
// const mongoose = require('mongoose');
// mongoose
//   .connect('mongodb://localhost:27017/DFS-2021-Week_16')
//   .then(() => {
//     console.log('Mongo connection open!!!');
//   })
//   .catch(err => {
//     console.log('Mongo Connection error');
//     console.log(err);
//   });

////////scraper

// const browserObject = require('./scraper');
// const scraperController = require('./pageController');

// //Start the browser and create a browser instance
// let browserInstance = browserObject.startBrowser();

// // Pass the browser instance to the scraper controller
// scraperController(browserInstance);

const allQBData = require('./dfs_positions_calc_funcs/qbValuesCalcs');
const qbrawdata = require('./teamandpostionsrawdata/qbrawdata');
// import allQBData from './dfs_positions_calc_funcs/qbValuesCalcs';

const allRBData = require('./dfs_positions_calc_funcs/rbValuesCalcs');
const rbrawdata = require('./teamandpostionsrawdata/rbrawdata');

const allWRData = require('./dfs_positions_calc_funcs/wrValuesCalcs');
const wrrawdata = require('./teamandpostionsrawdata/wrrawdata');

const allTEData = require('./dfs_positions_calc_funcs/teValuesCalcs');
const terawdata = require('./teamandpostionsrawdata/terawdata');

const allFlexAndSuperFlexData = require('./dfs_positions_calc_funcs/flexAndSuperflexCalcs');

// const allStackData = require('./dfs_positions_calc_funcs/stackingValuesCalcs/allStackingDataAndTeamObjectCalcs');
const allTeamObjectsArray = require('./dfs_positions_calc_funcs/stackingValuesCalcs/allStackingDataAndTeamObjectCalcs');

const allDefData = require('./dfs_positions_calc_funcs/defValuesCalcs');

const wholeTeamObjects = require('./dfs_positions_calc_funcs/createWholeTeamObjects');

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

// const qbSchema = new mongoose.Schema({
//   position: String,

//   qbrawdata: Object,
//   allQBsMap: Map,
//   qbObectsObject: Object,
//   allQBObjectsArray: Array,
// });

// const QB = mongoose.model('QB', qbSchema);

// QB.deleteMany({ position: 'QB' }, function (err) {
//   if (err) {
//     console.log(`${err} error at QB delete`);
//   }
//   console.log('successful QB delete');
// });

// QB.insertMany({
//   position: 'QB',

//   qbrawdata: allQBData.qbrawdata,
//   allQBsMap: allQBData.allQBsMap,
//   qbObectsObject: allQBData.qbObectsObject,
//   allQBObjectsArray: allQBData.allQBObjectsArray,
// }).then(data => {
//   console.log('QB Data Inserted Successfully');
//   // console.log(data);
// });

// const rbSchema = new mongoose.Schema({
//   position: String,
//   allRBOneHalfPPRProjectedPointsValues: Array,
//   allRBOneFullPPRProjectedPointsValues: Array,
//   allRBTwoHalfPPRProjectedPointsValues: Array,
//   allRBTwoFullPPRProjectedPointsValues: Array,
//   allRBOneHalfPPRProjectedPointsValuesPlusNames: Array,
//   allRBTwoHalfPPRProjectedPointsValuesPlusNames: Array,
//   allRBOneFullPPRProjectedPointsValuesPlusNames: Array,
//   allRBTwoFullPPRProjectedPointsValuesPlusNames: Array,
//   allRBHalfPPRProjectedPointsValues: Array,
//   allRBFullPPRProjectedPointsValues: Array,
//   allRBHalfPPRProjectedPointsValuesPlusNames: Array,
//   allRBFullPPRProjectedPointsValuesPlusNames: Array,
//   halfProjectedPointsPerDollarDraftkings: Array,
//   halfProjectedPointsPerDollarFanduel: Array,
//   halfProjectedPointsPerDollarYahoo: Array,

//   fullProjectedPointsPerDollarDraftkings: Array,
//   fullProjectedPointsPerDollarFanduel: Array,
//   fullProjectedPointsPerDollarYahoo: Array,
//   rbrawdata: Object,
// });

// const RB = mongoose.model('RB', rbSchema);

// RB.deleteMany({ position: 'RB' }, function (err) {
//   if (err) {
//     console.log(`${err} error at RB delete`);
//   }
//   console.log('successful RB delete');
// });

// RB.insertMany({
//   position: 'RB',
//   allRBOneHalfPPRProjectedPointsValues:
//     allRBData.allRBOneHalfPPRProjectedPointsValues,

//   allRBOneFullPPRProjectedPointsValues:
//     allRBData.allRBOneFullPPRProjectedPointsValues,

//   allRBTwoHalfPPRProjectedPointsValues:
//     allRBData.allRBTwoHalfPPRProjectedPointsValues,

//   allRBTwoFullPPRProjectedPointsValues:
//     allRBData.allRBTwoFullPPRProjectedPointsValues,

//   allRBOneHalfPPRProjectedPointsValuesPlusNames:
//     allRBData.allRBOneHalfPPRProjectedPointsValuesPlusNames,

//   allRBTwoHalfPPRProjectedPointsValuesPlusNames:
//     allRBData.allRBTwoHalfPPRProjectedPointsValuesPlusNames,

//   allRBOneFullPPRProjectedPointsValuesPlusNames:
//     allRBData.allRBOneFullPPRProjectedPointsValuesPlusNames,

//   allRBTwoFullPPRProjectedPointsValuesPlusNames:
//     allRBData.allRBTwoFullPPRProjectedPointsValuesPlusNames,

//   allRBHalfPPRProjectedPointsValues:
//     allRBData.allRBHalfPPRProjectedPointsValues,

//   allRBFullPPRProjectedPointsValues:
//     allRBData.allRBFullPPRProjectedPointsValues,

//   allRBHalfPPRProjectedPointsValuesPlusNames:
//     allRBData.allRBHalfPPRProjectedPointsValuesPlusNames,

//   allRBFullPPRProjectedPointsValuesPlusNames:
//     allRBData.allRBFullPPRProjectedPointsValuesPlusNames,
//   halfProjectedPointsPerDollarDraftkings:
//     allRBData.halfProjectedPointsPerDollarDraftkings,
//   halfProjectedPointsPerDollarFanduel:
//     allRBData.halfProjectedPointsPerDollarFanduel,
//   halfProjectedPointsPerDollarYahoo:
//     allRBData.halfProjectedPointsPerDollarYahoo,

//   fullProjectedPointsPerDollarDraftkings:
//     allRBData.fullProjectedPointsPerDollarDraftkings,
//   fullProjectedPointsPerDollarFanduel:
//     allRBData.fullProjectedPointsPerDollarFanduel,
//   fullProjectedPointsPerDollarYahoo:
//     allRBData.fullProjectedPointsPerDollarYahoo,
//   rbrawdata: rbrawdata,
// }).then(data => {
//   console.log('RB Data Inserted Successfully');
//   // console.log(data);
// });

// const wrSchema = new mongoose.Schema({
//   position: String,
//   allWROneHomeOrAwayFavoriteOrUnderdogs: Array,
//   allWRTwoHomeOrAwayFavoriteOrUnderdogs: Array,
//   allWROneVTTs: Array,
//   allWRTwoVTTs: Array,
//   allWROneEliteProjectedTargetsBonuss: Array,
//   allWRTwoEliteProjectedTargetsBonuss: Array,
//   allWROneGameEnvironmentInducedHighTargetVolume: Array,
//   allWRTwoGameEnvironmentInducedHighTargetVolume: Array,
//   allWROneIfTopTwelveTargetShareLasThreeWeeks: Array,
//   allWRTwoIfTopTwelveTargetShareLasThreeWeeks: Array,
//   allWROneTotalScores: Array,
//   allWRTwoTotalScores: Array,
//   allHalfWROneFinalProjectedPointsValues: Array,
//   allHalfWROneFinalProjectedPointsValuesPlusNames: Array,
//   allFullWROneFinalProjectedPointsValues: Array,
//   allFullWROneFinalProjectedPointsValuesPlusNames: Array,
//   allHalfWRTwoFinalProjectedPointsValues: Array,
//   allHalfWRTwoFinalProjectedPointsValuesPlusNames: Array,
//   allFullWRTwoFinalProjectedPointsValues: Array,
//   allFullWRTwoFinalProjectedPointsValuesPlusNames: Array,
//   allHalfWRThreeFinalProjectedPointsValues: Array,

//   allHalfWRThreeFinalProjectedPointsValuesPlusNames: Array,

//   allFullWRThreeFinalProjectedPointsValues: Array,
//   allFullWRThreeFinalProjectedPointsValuesPlusNames: Array,
//   allWRsHalfProjectedPointsValues: Array,
//   allWRsFullProjectedPointsValues: Array,
//   allWRsHalfProjectedPointsValuesPlusNames: Array,
//   allWRsFullProjectedPointsValuesPlusNames: Array,
//   halfProjectedPointsPerDollarDraftkings: Array,
//   halfProjectedPointsPerDollarFanduel: Array,
//   halfProjectedPointsPerDollarYahoo: Array,

//   fullProjectedPointsPerDollarDraftkings: Array,
//   fullProjectedPointsPerDollarFanduel: Array,
//   fullProjectedPointsPerDollarYahoo: Array,
//   wrrawdata: Object,
// });

// const WR = mongoose.model('WR', wrSchema);

// WR.deleteMany({ position: 'WR' }, function (err) {
//   if (err) {
//     console.log(`${err} error at WR delete`);
//   }
//   console.log('successful WR delete');
// });

// WR.insertMany({
//   position: 'WR',
//   allWROneHomeOrAwayFavoriteOrUnderdogs:
//     allWRData.allWROneHomeOrAwayFavoriteOrUnderdogs,
//   allWRTwoHomeOrAwayFavoriteOrUnderdogs:
//     allWRData.allWRTwoHomeOrAwayFavoriteOrUnderdogs,
//   allWROneVTTs: allWRData.allWROneVTTs,
//   allWRTwoVTTs: allWRData.allWRTwoVTTs,
//   allWROneEliteProjectedTargetsBonuss:
//     allWRData.allWROneEliteProjectedTargetsBonuss,
//   allWRTwoEliteProjectedTargetsBonuss:
//     allWRData.allWRTwoEliteProjectedTargetsBonuss,
//   allWROneGameEnvironmentInducedHighTargetVolume:
//     allWRData.allWROneGameEnvironmentInducedHighTargetVolume,
//   allWRTwoGameEnvironmentInducedHighTargetVolume:
//     allWRData.allWRTwoGameEnvironmentInducedHighTargetVolume,
//   allWROneIfTopTwelveTargetShareLasThreeWeeks:
//     allWRData.allWROneIfTopTwelveTargetShareLasThreeWeeks,
//   allWRTwoIfTopTwelveTargetShareLasThreeWeeks:
//     allWRData.allWRTwoIfTopTwelveTargetShareLasThreeWeeks,
//   allWROneTotalScores: allWRData.allWROneTotalScores,
//   allWRTwoTotalScores: allWRData.allWRTwoTotalScores,
//   allHalfWROneFinalProjectedPointsValues:
//     allWRData.allHalfWROneFinalProjectedPointsValues,
//   allHalfWROneFinalProjectedPointsValuesPlusNames:
//     allWRData.allHalfWROneFinalProjectedPointsValuesPlusNames,
//   allFullWROneFinalProjectedPointsValues:
//     allWRData.allFullWROneFinalProjectedPointsValues,
//   allFullWROneFinalProjectedPointsValuesPlusNames:
//     allWRData.allFullWROneFinalProjectedPointsValuesPlusNames,
//   allHalfWRTwoFinalProjectedPointsValues:
//     allWRData.allHalfWRTwoFinalProjectedPointsValues,
//   allHalfWRTwoFinalProjectedPointsValuesPlusNames:
//     allWRData.allHalfWRTwoFinalProjectedPointsValuesPlusNames,
//   allFullWRTwoFinalProjectedPointsValues:
//     allWRData.allFullWRTwoFinalProjectedPointsValues,
//   allFullWRTwoFinalProjectedPointsValuesPlusNames:
//     allWRData.allFullWRTwoFinalProjectedPointsValuesPlusNames,
//   allHalfWRThreeFinalProjectedPointsValues:
//     allWRData.allHalfWRThreeFinalProjectedPointsValues,
//   allHalfWRThreeFinalProjectedPointsValuesPlusNames:
//     allWRData.allHalfWRThreeFinalProjectedPointsValuesPlusNames,

//   allFullWRThreeFinalProjectedPointsValues:
//     allWRData.allFullWRThreeFinalProjectedPointsValues,
//   allFullWRThreeFinalProjectedPointsValuesPlusNames:
//     allWRData.allFullWRThreeFinalProjectedPointsValuesPlusNames,
//   allWRsHalfProjectedPointsValues: allWRData.allWRsHalfProjectedPointsValues,
//   allWRsFullProjectedPointsValues: allWRData.allWRsFullProjectedPointsValues,
//   allWRsHalfProjectedPointsValuesPlusNames:
//     allWRData.allWRsHalfProjectedPointsValuesPlusNames,
//   allWRsFullProjectedPointsValuesPlusNames:
//     allWRData.allWRsFullProjectedPointsValuesPlusNames,
//   halfProjectedPointsPerDollarDraftkings:
//     allWRData.halfProjectedPointsPerDollarDraftkings,
//   halfProjectedPointsPerDollarFanduel:
//     allWRData.halfProjectedPointsPerDollarFanduel,
//   halfProjectedPointsPerDollarYahoo:
//     allWRData.halfProjectedPointsPerDollarYahoo,

//   fullProjectedPointsPerDollarDraftkings:
//     allWRData.fullProjectedPointsPerDollarDraftkings,
//   fullProjectedPointsPerDollarFanduel:
//     allWRData.fullProjectedPointsPerDollarFanduel,
//   fullProjectedPointsPerDollarYahoo:
//     allWRData.fullProjectedPointsPerDollarYahoo,
//   wrrawdata: wrrawdata,
// }).then(data => {
//   console.log('WR Data Inserted Successfully');
//   // console.log(data);
// });

// const teSchema = new mongoose.Schema({
//   position: String,
//   allTEVTTs: Array,
//   allTEHighProjectedTargetsBonus: Array,
//   allTEPPRPointsPerGameLastThreeGamesPlayed: Array,
//   allTEProjectedReceptions: Array,
//   allTETotalScores: Array,
//   allHalfTEFinalProjectedPointsValues: Array,
//   allHalfTEFinalProjectedPointsValuesPlusNames: Array,
//   allFullTEFinalProjectedPointsValues: Array,
//   allFullTEFinalProjectedPointsValuesPlusNames: Array,
//   allTEPremiuimFinalProjectedPointsValues: Array,
//   allTEPremiuimFinalProjectedPointsValuesPlusNames: Array,
//   halfProjectedPointsPerDollarDraftkings: Array,
//   halfProjectedPointsPerDollarFanduel: Array,
//   halfProjectedPointsPerDollarYahoo: Array,
//   fullProjectedPointsPerDollarDraftkings: Array,
//   fullProjectedPointsPerDollarFanduel: Array,
//   fullProjectedPointsPerDollarYahoo: Array,
//   tePremiumProjectedPointsPerDollarDraftkings: Array,
//   tePremiumProjectedPointsPerDollarFanduel: Array,
//   tePremiumProjectedPointsPerDollarYahoo: Array,
//   terawdata: Object,
// });

// const TE = mongoose.model('TE', teSchema);

// TE.deleteMany({ position: 'TE' }, function (err) {
//   if (err) {
//     console.log(`${err} error at TE delete`);
//   }
//   console.log('successful TE delete');
// });

// TE.insertMany({
//   position: 'TE',
//   allTEVTTs: allTEData.allTEVTTs,
//   allTEHighProjectedTargetsBonus: allTEData.allTEHighProjectedTargetsBonus,
//   allTEPPRPointsPerGameLastThreeGamesPlayed:
//     allTEData.allTEPPRPointsPerGameLastThreeGamesPlayed,
//   allTEProjectedReceptions: allTEData.allTEProjectedReceptions,
//   allTETotalScores: allTEData.allTETotalScores,
//   allHalfTEFinalProjectedPointsValues:
//     allTEData.allHalfTEFinalProjectedPointsValues,
//   allHalfTEFinalProjectedPointsValuesPlusNames:
//     allTEData.allHalfTEFinalProjectedPointsValuesPlusNames,
//   allFullTEFinalProjectedPointsValues:
//     allTEData.allFullTEFinalProjectedPointsValues,
//   allFullTEFinalProjectedPointsValuesPlusNames:
//     allTEData.allFullTEFinalProjectedPointsValuesPlusNames,
//   allTEPremiuimFinalProjectedPointsValues:
//     allTEData.allTEPremiuimFinalProjectedPointsValues,
//   allTEPremiuimFinalProjectedPointsValuesPlusNames:
//     allTEData.allTEPremiuimFinalProjectedPointsValuesPlusNames,
//   halfProjectedPointsPerDollarDraftkings:
//     allTEData.halfProjectedPointsPerDollarDraftkings,
//   halfProjectedPointsPerDollarFanduel:
//     allTEData.halfProjectedPointsPerDollarFanduel,
//   halfProjectedPointsPerDollarYahoo:
//     allTEData.halfProjectedPointsPerDollarYahoo,
//   fullProjectedPointsPerDollarDraftkings:
//     allTEData.fullProjectedPointsPerDollarDraftkings,
//   fullProjectedPointsPerDollarFanduel:
//     allTEData.fullProjectedPointsPerDollarFanduel,
//   fullProjectedPointsPerDollarYahoo:
//     allTEData.fullProjectedPointsPerDollarYahoo,
//   tePremiumProjectedPointsPerDollarDraftkings:
//     allTEData.tePremiumProjectedPointsPerDollarDraftkings,
//   tePremiumProjectedPointsPerDollarFanduel:
//     allTEData.tePremiumProjectedPointsPerDollarFanduel,
//   tePremiumProjectedPointsPerDollarYahoo:
//     allTEData.tePremiumProjectedPointsPerDollarYahoo,
//   terawdata: terawdata,
// }).then(data => {
//   console.log('TE Data Inserted Successfully');
// console.log(data);
// });

// const flexSchema = new mongoose.Schema({
//   position: String,
//   allHalfFlexValues: Array,
//   allHalfFlexValuesWithNames: Array,
//   allPPRFlexValues: Array,
//   allPPRFlexValuesWithNames: Array,
//   allTEPFlexValues: Array,
//   allTEPFlexValuesWithNames: Array,
//   allHalfSuperflexValues: Array,
//   allHalfSuperflexValuesWithNames: Array,
//   allPPRSuperflexValues: Array,
//   allPPRSuperflexValuesWithNames: Array,
//   allTEPremiumSuperflexValues: Array,
//   allTEPremiumSuperflexValuesWithNames: Array,
// });

// const flex = mongoose.model('flex', flexSchema);

// flex.deleteMany({ position: 'flex' }, function (err) {
//   if (err) {
//     console.log(`${err} error at flex delete`);
//   }
//   console.log('successful flex delete');
// });

// flex
//   .insertMany({
//     position: 'flex',
//     allHalfFlexValues: allStackData.allHalfFlexValues,
//     allHalfFlexValuesWithNames: allStackData.allHalfFlexValuesWithNames,
//     allPPRFlexValues: allStackData.allPPRFlexValues,
//     allPPRFlexValuesWithNames: allStackData.allPPRFlexValuesWithNames,
//     allTEPFlexValues: allStackData.allTEPFlexValues,
//     allTEPFlexValuesWithNames: allStackData.allTEPFlexValuesWithNames,
//     allHalfSuperflexValues: allStackData.allHalfSuperflexValues,
//     allHalfSuperflexValuesWithNames:
//       allStackData.allHalfSuperflexValuesWithNames,
//     allPPRSuperflexValues: allStackData.allPPRSuperflexValues,
//     allPPRSuperflexValuesWithNames: allStackData.allPPRSuperflexValuesWithNames,
//     allTEPremiumSuperflexValues: allStackData.allTEPremiumSuperflexValues,
//     allTEPremiumSuperflexValuesWithNames:
//       allStackData.allTEPremiumSuperflexValuesWithNames,
//   })
//   .then(data => {
//     console.log('flex Data Iserted Successfully');
//     // console.log(data);
//   });

// const stackingSchema = new mongoose.Schema({
//   position: String,
//   allHalfQBWROneStacks: Array,
//   allPPRQBWROneStacks: Array,
//   allHalfQBWROneStackWithNames: Array,
//   allPPRQBWROneStacksWithNames: Array,
//   allTeamsBestHalfSingleStackWithQBWithNames: Array,
//   // sortedAllHalfQBWROneStacks: Array,
//   allTeamsBestPPRSingleStackWithQB: Array,
//   allTeamsBestPPRSingleStackWithQBWithNames: Array,
//   allTEPremiumBestSingleStackWithQB: Array,
//   allTEPremiumBestSingleStackWithQBWithNames: Array,
//   allTeamsBestHalfDoubleStackWithQBAndWROne: Array,
//   allTeamsBestHalfDoubleStackWithQBAndWROneWithNames: Array,
//   allTeamsBestPPRDoubleStackWithQBAndWROne: Array,
//   allTeamsBestPPRDoubleStackWithQBAndWROneWithNames: Array,
//   allTEPremiumBestDoubleStackWithQBAndWROne: Array,
//   allTEPremiumBestDoubleStackWithQBAndWROneWithNames: Array,
//   allTeamsBestHalfTripleStackWithQBAndWROne: Array,
//   allTeamsBestPPRTripleStackWithQBAndWROne: Array,
//   allTEPremiumBestTripleStackWithQBAndWROne: Array,
//   allTeamsBestHalfTripleStackWithQBAndWROneWithNames: Array,
//   allTeamsBestPPRTripleStackWithQBAndWROneWithNames: Array,
//   allTEPremiumBestTripleStackWithQBAndWROneWithNames: Array,
// });

// const bestStacks = mongoose.model('bestStacks', stackingSchema);

// bestStacks.deleteMany({ position: 'stacks' }, function (err) {
//   if (err) {
//     console.log(`${err} error at stacking delete`);
//   }
//   console.log('successful stacks delete');
// });

// bestStacks
//   .insertMany({
//     position: 'stacks',
//     allHalfQBWROneStacks: allStackData.allHalfQBWROneStacks,
//     allPPRQBWROneStacks: allStackData.allPPRQBWROneStacks,
//     allHalfQBWROneStackWithNames: allStackData.allHalfQBWROneStackWithNames,
//     allPPRQBWROneStacksWithNames: allStackData.allPPRQBWROneStacksWithNames,
//     allTeamsBestHalfSingleStackWithQBWithNames:
//       allStackData.allTeamsBestHalfSingleStackWithQBWithNames,
//     // sortedAllHalfQBWROneStacks: allStackData.sortedAllHalfQBWROneStacks,
//     allTeamsBestPPRSingleStackWithQB:
//       allStackData.allTeamsBestPPRSingleStackWithQB,
//     allTeamsBestPPRSingleStackWithQBWithNames:
//       allStackData.allTeamsBestPPRSingleStackWithQBWithNames,
//     allTEPremiumBestSingleStackWithQB:
//       allStackData.allTEPremiumBestSingleStackWithQB,
//     allTEPremiumBestSingleStackWithQBWithNames:
//       allStackData.allTEPremiumBestSingleStackWithQBWithNames,
//     allTeamsBestHalfDoubleStackWithQBAndWROne:
//       allStackData.allTeamsBestHalfDoubleStackWithQBAndWROne,
//     allTeamsBestHalfDoubleStackWithQBAndWROneWithNames:
//       allStackData.allTeamsBestHalfDoubleStackWithQBAndWROneWithNames,
//     allTeamsBestPPRDoubleStackWithQBAndWROne:
//       allStackData.allTeamsBestPPRDoubleStackWithQBAndWROne,
//     allTeamsBestPPRDoubleStackWithQBAndWROneWithNames:
//       allStackData.allTeamsBestPPRDoubleStackWithQBAndWROneWithNames,
//     allTEPremiumBestDoubleStackWithQBAndWROne:
//       allStackData.allTEPremiumBestDoubleStackWithQBAndWROne,
//     allTEPremiumBestDoubleStackWithQBAndWROneWithNames:
//       allStackData.allTEPremiumBestDoubleStackWithQBAndWROneWithNames,
//     allTeamsBestHalfTripleStackWithQBAndWROne:
//       allStackData.allTeamsBestHalfTripleStackWithQBAndWROne,
//     allTeamsBestPPRTripleStackWithQBAndWROne:
//       allStackData.allTeamsBestPPRTripleStackWithQBAndWROne,
//     allTEPremiumBestTripleStackWithQBAndWROne:
//       allStackData.allTEPremiumBestTripleStackWithQBAndWROne,
//     allTeamsBestHalfTripleStackWithQBAndWROneWithNames:
//       allStackData.allTeamsBestHalfTripleStackWithQBAndWROneWithNames,
//     allTeamsBestPPRTripleStackWithQBAndWROneWithNames:
//       allStackData.allTeamsBestPPRTripleStackWithQBAndWROneWithNames,
//     allTEPremiumBestTripleStackWithQBAndWROneWithNames:
//       allStackData.allTEPremiumBestTripleStackWithQBAndWROneWithNames,
//   })
//   .then(data => {
//     console.log('Stacks Data Inserted Successfully');
//     // console.log(data);
//   });

// const defSchema = new mongoose.Schema({
//   position: String,
//   scoreFromProjectedPointsForDef: Array,
//   ScoreFromOwnOff: Array,
//   ScoreFromOppOff: Array,
//   TeamDefProjPoints: Array,
//   allTeamDefensesMap: Map,
// });

// const teamDef = mongoose.model('teamDef', defSchema);

// teamDef.deleteMany({ position: 'def' }, function (err) {
//   if (err) {
//     console.log(`${err} error at defense delete`);
//   }
//   console.log('successful defense delete');
// });

// teamDef
//   .insertMany({
//     position: 'def',
//     scoreFromProjectedPointsForDef: allDefData.scoreFromProjectedPointsForDef,
//     ScoreFromOwnOff: allDefData.ScoreFromOwnOff,
//     ScoreFromOppOff: allDefData.ScoreFromOppOff,
//     TeamDefProjPoints: allDefData.TeamDefProjPoints,
//     allTeamDefensesMap: allDefData.allTeamDefensesMap,
//   })
//   .then(data => {
//     console.log('def Data Inserted Successfully');
//     // console.log(data);
//   });

// app.get('/', (req, res) => {
//   const group = 'home';
//   console.log('we got a new request');
//   res.render('home', { group });
// });

// app.get('/pos/:position', (req, res) => {
//   const group = req.params.position;
//   // console.log(group);
//   res.render('positions', {
//     group,
//     allQBData,
//     allRBData,
//     allWRData,
//     allTEData,
//     // allStackData,
//   });
// });

// app.listen(2022, () => {
//   console.log('listening on port 2022');
// });
