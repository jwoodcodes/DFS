'use strict';

// const allQBData = require('../qbValuesCalcs');
// const allRBData = require('../rbValuesCalcs');
// const allWRData = require('../wrValuesCalcs');
// const allTEData = require('../teValuesCalcs');
// const allQBs = require('../../teamandpositionvariables/allQBVariables');
// const allRBs = require('../../teamandpositionvariables/allRBVariables');
// const allWRs = require('../../teamandpositionvariables/allWRVariables');
// const allTEs = require('../../teamandpositionvariables/allTEVariables');
// const allTeams = require('../../teamandpositionvariables/allTeamLevelVariables');
// const allDefData = require('../defValuesCalcs');
// const gameInfo = require('../../teamandpostionsrawdata/gameinfo');

// const allTeamObjectsArray = [];

// class FullTeamObjectWithAllStacks {
//   constructor(
//     teamName,
//     vtt,
//     qbName,
//     rbOneName,
//     rbTwoName,
//     wrOneName,
//     wrTwoName,
//     wrThreeName,
//     teName,
//     qbProjPoints,
//     rbOneHalfProjPoints,
//     rbTwoHalfProjPoints,
//     wrOneHalfProjPoints,
//     wrTwoHalfProjPoints,
//     wrThreeHalfProjPoints,
//     teHalfProjPoints,
//     rbOneFullProjPoints,
//     rbTwoFullProjPoints,
//     wrOneFullProjPoints,
//     wrTwoFullProjPoints,
//     wrThreeFullProjPoints,
//     teFullProjPoints,
//     teTEPProjPoints,
//     teamDefProjPoints,
//     qbDraftkingsSalary,
//     rbOneDraftkingsSalary,
//     rbTwoDraftkingsSalary,
//     wrOneDraftkingsSalary,
//     wrTwoDraftkingsSalary,
//     wrThreeDraftkingsSalary,
//     teDraftkingsSalary,
//     teamDefDraftkingsSalary,
//     qbFanduelSalary,
//     rbOneFanduelSalary,
//     rbTwoFanduelSalary,
//     wrOneFanduelSalary,
//     wrTwoFanduelSalary,
//     wrThreeFanduelSalary,
//     teFanduelSalary,
//     teamDefFanduelSalary,
//     qbYahooSalary,
//     rbOneYahooSalary,
//     rbTwoYahooSalary,
//     wrOneYahooSalary,
//     wrTwoYahooSalary,
//     wrThreeYahooSalary,
//     teYahooSalary,
//     teamDefYahooSalary,
//     qbOwnershipProjectionDraftkings,
//     rbOneOwnershipProjectionDraftkings,
//     rbTwoOwnershipProjectionDraftkings,
//     wrOneOwnershipProjectionDraftkings,
//     wrTwoOwnershipProjectionDraftkings,
//     wrThreeOwnershipProjectionDraftkings,
//     teOwnershipProjectionDraftkings,
//     teamDefOwnershipProjectionDraftkings,
//     qbOwnershipProjectionFanduel,
//     rbOneOwnershipProjectionFanduel,
//     rbTwoOwnershipProjectionFanduel,
//     wrOneOwnershipProjectionFanduel,
//     wrTwoOwnershipProjectionFanduel,
//     wrThreeOwnershipProjectionFanduel,
//     teOwnershipProjectionFanduel,
//     teamDefOwnershipProjectionFanduel,
//     qbOwnershipProjectionYahoo,
//     rbOneOwnershipProjectionYahoo,
//     rbTwoOwnershipProjectionYahoo,
//     wrOneOwnershipProjectionYahoo,
//     wrTwoOwnershipProjectionYahoo,
//     wrThreeOwnershipProjectionYahoo,
//     teOwnershipProjectionYahoo,
//     teamDefOwnershipProjectionYahoo,
//     //opposing team
//     oppteamName,
//     oppvtt,
//     oppqbName,
//     opprbOneName,
//     opprbTwoName,
//     oppwrOneName,
//     oppwrTwoName,
//     oppwrThreeName,
//     oppteName,
//     oppqbProjPoints,
//     opprbOneHalfProjPoints,
//     opprbTwoHalfProjPoints,
//     oppwrOneHalfProjPoints,
//     oppwrTwoHalfProjPoints,
//     oppwrThreeHalfProjPoints,
//     oppteHalfProjPoints,
//     opprbOneFullProjPoints,
//     opprbTwoFullProjPoints,
//     oppwrOneFullProjPoints,
//     oppwrTwoFullProjPoints,
//     oppwrThreeFullProjPoints,
//     oppteFullProjPoints,
//     oppteTEPProjPoints,
//     oppteamDefProjPoints,
//     oppqbDraftkingsSalary,
//     opprbOneDraftkingsSalary,
//     opprbTwoDraftkingsSalary,
//     oppwrOneDraftkingsSalary,
//     oppwrTwoDraftkingsSalary,
//     oppwrThreeDraftkingsSalary,
//     oppteDraftkingsSalary,
//     oppqbFanduelSalary,
//     opprbOneFanduelSalary,
//     opprbTwoFanduelSalary,
//     oppwrOneFanduelSalary,
//     oppwrTwoFanduelSalary,
//     oppwrThreeFanduelSalary,
//     oppteFanduelSalary,
//     oppqbYahooSalary,
//     opprbOnwYahooSalary,
//     opprbTwoYahooSalary,
//     oppwrOneYahooSalary,
//     oppwrTwoYahooSalary,
//     oppwrThreeYahooSalary,
//     oppteYahooSalary,
//     oppqbOwnershipProjectionDraftkings,
//     opprbOneOwnershipProjectionDraftkings,
//     opprbTwoOwnershipProjectionDraftkings,
//     oppwrOneOwnershipProjectionDraftkings,
//     oppwrTwoOwnershipProjectionDraftkings,
//     oppwrThreeOwnershipProjectionDraftkings,
//     oppteOwnershipProjectionDraftkings,
//     oppqbOwnershipProjectionFanduel,
//     opprbOneOwnershipProjectionFanduel,
//     opprbTwoOwnershipProjectionFanduel,
//     oppwrOneOwnershipProjectionFanduel,
//     oppwrTwoOwnershipProjectionFanduel,
//     oppwrThreeOwnershipProjectionFanduel,
//     oppteOwnershipProjectionFanduel,
//     oppqbOwnershipProjectionYahoo,
//     opprbOneOwnershipProjectionYahoo,
//     opprbTwoOwnershipProjectionYahoo,
//     oppwrOneOwnershipProjectionYahoo,
//     oppwrTwoOwnershipProjectionYahoo,
//     oppwrThreeOwnershipProjectionYahoo,
//     oppteOwnershipProjectionYahoo,
//     halfStackArray,
//     PPRArray,
//     TEPArray,
//     teamUnsortedHalfSingleStacksValues,
//     teamUnsortedFullSingleStacksValues,
//     teamUnsortedTEPSingleStacksValues,
//     teamUnsortedHalfDoubleStacksValues,
//     teamUnsortedFullDoubleStacksValues,
//     teamUnsortedTEPDoubleStacksValues,
//     teamUnsortedHalfTripleStacksValues,
//     teamUnsortedFullTripleStacksValues,
//     teamUnsortedTEPTripleStacksValues,
//     teamSingleStacksNames,
//     teamDoubleStacksNames,
//     teamTripleStacksNames,
//     teamSingleStacksTotalDraftkingsSalaries,
//     teamDoubleStacksTotalDraftkingsSalaries,
//     teamTripleStacksTotalDraftkingsSalaries,
//     teamSingleStacksTotalFanduelSalaries,
//     teamDoubleStacksTotalFanduelSalaries,
//     teamTripleStacksTotalFanduelSalaries,
//     teamSingleStacksTotalYahooSalaries,
//     teamDoubleStacksTotalYahooSalaries,
//     teamTripleStacksTotalYahooSalaries,
//     teamSingleStacksDraftkingsProjectedPointsPerDollar,
//     teamSingleStacksFanduelProjectedPointsPerDollar,
//     teamSingleStacksYahooProjectedPointsPerDollar,
//     teamDoubleStacksDraftkingsProjectedPointsPerDollar,
//     teamDoubleStacksFanduelProjectedPointsPerDollar,
//     teamDoubleStacksYahooProjectedPointsPerDollar,
//     teamTripleStacksDraftkingsProjectedPointsPerDollar,
//     teamTripleStacksFanduelProjectedPointsPerDollar,
//     teamTripleStacksYahooProjectedPointsPerDollar
//   ) {
//     this.teamName = teamName;
//     this.vegasTeamTotal = vtt;
//     this.qbName = qbName;
//     this.rbOneName = rbOneName;
//     this.rbTwoName = rbTwoName;
//     this.wrOneName = wrOneName;
//     this.wrTwoName = wrTwoName;
//     this.wrThreeName = wrThreeName;
//     this.teName = teName;
//     this.qbProjPoints = qbProjPoints;
//     this.rbOneHalfProjPoints = rbOneHalfProjPoints;
//     this.rbTwoHalfProjPoints = rbTwoHalfProjPoints;
//     this.wrOneHalfProjPoints = wrOneHalfProjPoints;
//     this.wrTwoHalfProjPoints = wrTwoHalfProjPoints;
//     this.wrThreeHalfProjPoints = wrThreeHalfProjPoints;
//     this.teHalfProjPoints = teHalfProjPoints;
//     this.rbOneFullProjPoints = rbOneFullProjPoints;
//     this.rbTwoFullProjPoints = rbTwoFullProjPoints;
//     this.wrOneFullProjPoints = wrOneFullProjPoints;
//     this.wrTwoFullProjPoints = wrTwoFullProjPoints;
//     this.wrThreeFullProjPoints = wrThreeFullProjPoints;
//     this.teFullProjPoints = teFullProjPoints;
//     this.teTEPProjPoints = teTEPProjPoints;
//     this.teamDefProjPoints = teamDefProjPoints;
//     this.qbDraftkingsSalary = qbDraftkingsSalary;
//     this.rbOneDraftkingsSalary = rbOneDraftkingsSalary;
//     this.rbTwoDraftkingsSalary = rbTwoDraftkingsSalary;
//     this.wrOneDraftkingsSalary = wrOneDraftkingsSalary;
//     this.wrTwoDraftkingsSalary = wrTwoDraftkingsSalary;
//     this.wrThreeDraftkingsSalary = wrThreeDraftkingsSalary;
//     this.teDraftkingsSalary = teDraftkingsSalary;
//     this.teamDefDraftkingsSalary = teamDefDraftkingsSalary;
//     this.qbFanduelSalary = qbFanduelSalary;
//     this.rbOneFanduelSalary = rbOneFanduelSalary;
//     this.rbTwoFanduelSalary = rbTwoFanduelSalary;
//     this.wrOneFanduelSalary = wrOneFanduelSalary;
//     this.wrTwoFanduelSalary = wrTwoFanduelSalary;
//     this.wrThreeFanduelSalary = wrThreeFanduelSalary;
//     this.teFanduelSalary = teFanduelSalary;
//     this.teamDefFanduelSalary = teamDefFanduelSalary;
//     this.qbYahooSalary = qbYahooSalary;
//     this.rbOneYahooSalary = rbOneYahooSalary;
//     this.rbTwoYahooSalary = rbTwoYahooSalary;
//     this.wrOneYahooSalary = wrOneYahooSalary;
//     this.wrTwoYahooSalary = wrTwoYahooSalary;
//     this.wrThreeYahooSalary = wrThreeYahooSalary;
//     this.teYahooSalary = teYahooSalary;
//     this.teamDefYahooSalary = teamDefYahooSalary;
//     this.qbOwnershipProjectionDraftkings = qbOwnershipProjectionDraftkings;
//     this.rbOneOwnershipProjectionDraftkings =
//       rbOneOwnershipProjectionDraftkings;
//     this.rbTwoOwnershipProjectionDraftkings =
//       rbTwoOwnershipProjectionDraftkings;
//     this.wrOneOwnershipProjectionDraftkings =
//       wrOneOwnershipProjectionDraftkings;
//     this.wrTwoOwnershipProjectionDraftkings =
//       wrTwoOwnershipProjectionDraftkings;
//     this.wrThreeOwnershipProjectionDraftkings =
//       wrThreeOwnershipProjectionDraftkings;
//     this.teOwnershipProjectionDraftkings = teOwnershipProjectionDraftkings;
//     this.teamDefOwnershipProjectionDraftkings =
//       teamDefOwnershipProjectionDraftkings;
//     this.qbOwnershipProjectionFanduel = qbOwnershipProjectionFanduel;
//     this.rbOneOwnershipProjectionFanduel = rbOneOwnershipProjectionFanduel;
//     this.rbTwoOwnershipProjectionFanduel = rbTwoOwnershipProjectionFanduel;
//     this.wrOneOwnershipProjectionFanduel = wrOneOwnershipProjectionFanduel;
//     this.wrTwoOwnershipProjectionFanduel = wrTwoOwnershipProjectionFanduel;
//     this.wrThreeOwnershipProjectionFanduel = wrThreeOwnershipProjectionFanduel;
//     this.teOwnershipProjectionFanduel = teOwnershipProjectionFanduel;
//     this.teamDefOwnershipProjectionFanduel = teamDefOwnershipProjectionFanduel;
//     this.qbOwnershipProjectionYahoo = qbOwnershipProjectionYahoo;
//     this.rbOneOwnershipProjectionYahoo = rbOneOwnershipProjectionYahoo;
//     this.rbTwoOwnershipProjectionYahoo = rbTwoOwnershipProjectionYahoo;
//     this.wrOneOwnershipProjectionYahoo = wrOneOwnershipProjectionYahoo;
//     this.wrTwoOwnershipProjectionYahoo = wrTwoOwnershipProjectionYahoo;
//     this.wrThreeOwnershipProjectionYahoo = wrThreeOwnershipProjectionYahoo;
//     this.teOwnershipProjectionYahoo = teOwnershipProjectionYahoo;
//     this.teamDefOwnershipProjectionYahoo = teamDefOwnershipProjectionYahoo;
//     //opposing team
//     this.oppteamName = oppteamName;
//     this.oppvegasTeamTotal = oppvtt;
//     this.oppqbName = oppqbName;
//     this.opprbOneName = opprbOneName;
//     this.opprbTwoName = opprbTwoName;
//     this.oppwrOneName = oppwrOneName;
//     this.oppwrTwoName = oppwrTwoName;
//     this.oppwrThreeName = oppwrThreeName;
//     this.oppteName = oppteName;
//     this.oppqbProjPoints = oppqbProjPoints;
//     this.opprbOneHalfProjPoints = opprbOneHalfProjPoints;
//     this.opprbTwoHalfProjPoints = opprbTwoHalfProjPoints;
//     this.oppwrOneHalfProjPoints = oppwrOneHalfProjPoints;
//     this.oppwrTwoHalfProjPoints = oppwrTwoHalfProjPoints;
//     this.oppwrThreeHalfProjPoints = oppwrThreeHalfProjPoints;
//     this.oppteHalfProjPoints = oppteHalfProjPoints;
//     this.opprbOneFullProjPoints = opprbOneFullProjPoints;
//     this.opprbTwoFullProjPoints = opprbTwoFullProjPoints;
//     this.oppwrOneFullProjPoints = oppwrOneFullProjPoints;
//     this.oppwrTwoFullProjPoints = oppwrTwoFullProjPoints;
//     this.oppwrThreeFullProjPoints = oppwrThreeFullProjPoints;
//     this.oppteFullProjPoints = oppteFullProjPoints;
//     this.oppteTEPProjPoints = oppteTEPProjPoints;
//     this.oppteamDefProjPoints = oppteamDefProjPoints;
//     this.oppqbDraftkingsSalary = oppqbDraftkingsSalary;
//     this.opprbOneDraftkingsSalary = opprbOneDraftkingsSalary;
//     this.opprbTwoDraftkingsSalary = opprbTwoDraftkingsSalary;
//     this.oppwrOneDraftkingsSalary = oppwrOneDraftkingsSalary;
//     this.oppwrTwoDraftkingsSalary = oppwrTwoDraftkingsSalary;
//     this.oppwrThreeDraftkingsSalary = oppwrThreeDraftkingsSalary;
//     this.oppteDraftkingsSalary = oppteDraftkingsSalary;
//     this.oppqbFanduelSalary = oppqbFanduelSalary;
//     this.opprbOneFanduelSalary = opprbOneFanduelSalary;
//     this.opprbTwoFanduelSalary = opprbTwoFanduelSalary;
//     this.oppwrOneFanduelSalary = oppwrOneFanduelSalary;
//     this.oppwrTwoFanduelSalary = oppwrTwoFanduelSalary;
//     this.oppwrThreeFanduelSalary = oppwrThreeFanduelSalary;
//     this.oppteFanduelSalary = oppteFanduelSalary;
//     this.oppqbYahooSalary = oppqbYahooSalary;
//     this.opprbOnwYahooSalary = opprbOnwYahooSalary;
//     this.opprbTwoYahooSalary = opprbTwoYahooSalary;
//     this.oppwrOneYahooSalary = oppwrOneYahooSalary;
//     this.oppwrTwoYahooSalary = oppwrTwoYahooSalary;
//     this.oppwrThreeYahooSalary = oppwrThreeYahooSalary;
//     this.oppteYahooSalary = oppteYahooSalary;
//     this.oppqbOwnershipProjectionDraftkings =
//       oppqbOwnershipProjectionDraftkings;
//     this.opprbOneOwnershipProjectionDraftkings =
//       opprbOneOwnershipProjectionDraftkings;
//     this.opprbTwoOwnershipProjectionDraftkings =
//       opprbTwoOwnershipProjectionDraftkings;
//     this.oppwrOneOwnershipProjectionDraftkings =
//       oppwrOneOwnershipProjectionDraftkings;
//     this.oppwrTwoOwnershipProjectionDraftkings =
//       oppwrTwoOwnershipProjectionDraftkings;
//     this.oppwrThreeOwnershipProjectionDraftkings =
//       oppwrThreeOwnershipProjectionDraftkings;
//     this.oppteOwnershipProjectionDraftkings =
//       oppteOwnershipProjectionDraftkings;
//     this.oppqbOwnershipProjectionFanduel = oppqbOwnershipProjectionFanduel;
//     this.opprbOneOwnershipProjectionFanduel =
//       opprbOneOwnershipProjectionFanduel;
//     this.opprbTwoOwnershipProjectionFanduel =
//       opprbTwoOwnershipProjectionFanduel;
//     this.oppwrOneOwnershipProjectionFanduel =
//       oppwrOneOwnershipProjectionFanduel;
//     this.oppwrTwoOwnershipProjectionFanduel =
//       oppwrTwoOwnershipProjectionFanduel;
//     this.oppwrThreeOwnershipProjectionFanduel =
//       oppwrThreeOwnershipProjectionFanduel;
//     this.oppteOwnershipProjectionFanduel = oppteOwnershipProjectionFanduel;
//     this.oppqbOwnershipProjectionYahoo = oppqbOwnershipProjectionYahoo;
//     this.opprbOneOwnershipProjectionYahoo = opprbOneOwnershipProjectionYahoo;
//     this.opprbTwoOwnershipProjectionYahoo = opprbTwoOwnershipProjectionYahoo;
//     this.oppwrOneOwnershipProjectionYahoo = oppwrOneOwnershipProjectionYahoo;
//     this.oppwrTwoOwnershipProjectionYahoo = oppwrTwoOwnershipProjectionYahoo;
//     this.oppwrThreeOwnershipProjectionYahoo =
//       oppwrThreeOwnershipProjectionYahoo;
//     this.oppteOwnershipProjectionYahoo = oppteOwnershipProjectionYahoo;
//     this.halfStackArray = halfStackArray;
//     this.PPRArray = PPRArray;
//     this.TEPArray = TEPArray;
//     this.teamSingleStacksDraftkingsProjectedPointsPerDollar = [];
//     this.teamSingleStacksFanduelProjectedPointsPerDollar = [];
//     this.teamSingleStacksYahooProjectedPointsPerDollar = [];
//     this.teamDoubleStacksDraftkingsProjectedPointsPerDollar = [];
//     this.teamDoubleStacksFanduelProjectedPointsPerDollar = [];
//     this.teamDoubleStacksYahooProjectedPointsPerDollar = [];
//     this.teamTripleStacksDraftkingsProjectedPointsPerDollar = [];
//     this.teamTripleStacksFanduelProjectedPointsPerDollar = [];
//     this.teamTripleStacksYahooProjectedPointsPerDollar = [];
//   }

//   //////////////////
//   /////////////////add methods here/////////////////////
//   //////////////////////
//   buildCombinations(
//     arr,
//     num,
//     scoring,
//     namesArray,
//     dkSalaries,
//     fanduelSalaries,
//     yahooSalaries
//   ) {
//     const res = [];
//     const names = [];
//     const totalDraftkingsSalaries = [];
//     const totalFanduelSalaries = [];
//     const totalYahooSalaries = [];

//     let temp,
//       i,
//       j,
//       max = 1 << arr.length;

//     for (i = 0; i < max; i++) {
//       temp = [];
//       for (j = 0; j < arr.length; j++) {
//         if (i & (1 << j)) {
//           temp.push(arr[j]);
//         }
//       }

//       if (temp.length === num) {
//         res.push(
//           temp.reduce(function (a, b) {
//             // return +(a + b).toFixed(4);
//             return a + b;
//           })
//         );
//       }
//     }

//     let tempNames,
//       iNames,
//       jNames,
//       maxNames = 1 << arr.length;

//     for (iNames = 0; iNames < maxNames; iNames++) {
//       tempNames = [];
//       for (jNames = 0; jNames < arr.length; jNames++) {
//         if (iNames & (1 << jNames)) {
//           tempNames.push(namesArray[jNames]);
//         }
//       }

//       if (tempNames.length === num) {
//         names.push(
//           tempNames.reduce(function (a, b) {
//             return a + ', ' + b;
//           })
//         );
//       }
//     }

//     let temptotalDraftkingsSalaries,
//       iSalaries,
//       jSalaries,
//       maxSalaries = 1 << arr.length;

//     for (iSalaries = 0; iSalaries < maxSalaries; iSalaries++) {
//       temptotalDraftkingsSalaries = [];
//       for (jSalaries = 0; jSalaries < arr.length; jSalaries++) {
//         if (iSalaries & (1 << jSalaries)) {
//           temptotalDraftkingsSalaries.push(dkSalaries[jSalaries]);
//         }
//       }

//       if (temptotalDraftkingsSalaries.length === num) {
//         totalDraftkingsSalaries.push(
//           temptotalDraftkingsSalaries.reduce(function (a, b) {
//             return +(a + b).toFixed(4);
//           })
//         );
//       }
//     }

//     let temptotalFanduelSalaries,
//       ifanduelSalaries,
//       jfanduelSalaries,
//       maxfanduelSalaries = 1 << arr.length;

//     for (
//       ifanduelSalaries = 0;
//       ifanduelSalaries < maxfanduelSalaries;
//       ifanduelSalaries++
//     ) {
//       temptotalFanduelSalaries = [];
//       for (
//         jfanduelSalaries = 0;
//         jfanduelSalaries < arr.length;
//         jfanduelSalaries++
//       ) {
//         if (ifanduelSalaries & (1 << jfanduelSalaries)) {
//           temptotalFanduelSalaries.push(fanduelSalaries[jfanduelSalaries]);
//         }
//       }

//       if (temptotalFanduelSalaries.length === num) {
//         totalFanduelSalaries.push(
//           temptotalFanduelSalaries.reduce(function (a, b) {
//             return +(a + b).toFixed(4);
//           })
//         );
//       }
//     }

//     let temptotalYahooSalaries,
//       iyahooSalaries,
//       jyahooSalaries,
//       maxyahooSalaries = 1 << arr.length;

//     for (
//       iyahooSalaries = 0;
//       iyahooSalaries < maxyahooSalaries;
//       iyahooSalaries++
//     ) {
//       temptotalYahooSalaries = [];
//       for (jyahooSalaries = 0; jyahooSalaries < arr.length; jyahooSalaries++) {
//         if (iyahooSalaries & (1 << jyahooSalaries)) {
//           temptotalYahooSalaries.push(yahooSalaries[jyahooSalaries]);
//         }
//       }

//       if (temptotalYahooSalaries.length === num) {
//         totalYahooSalaries.push(
//           temptotalYahooSalaries.reduce(function (a, b) {
//             return +(a + b).toFixed(4);
//           })
//         );
//       }
//     }

//     // let sortedRes = res.sort((a, b) => {
//     //   if (a > b) return -1;
//     //   if (a < b) return 1;
//     // });

//     let tempteamSingleStacksDraftkingsProjectedPointsPerDollar = [];
//     let tempteamSingleStacksFanduelProjectedPointsPerDollar = [];
//     let tempteamSingleStacksYahooProjectedPointsPerDollar = [];
//     let tempteamDoubleStacksDraftkingsProjectedPointsPerDollar = [];
//     let tempteamDoubleStacksFanduelProjectedPointsPerDollar = [];
//     let tempteamDoubleStacksYahooProjectedPointsPerDollar = [];
//     let tempteamTripleStacksDraftkingsProjectedPointsPerDollar = [];
//     let tempteamTripleStacksFanduelProjectedPointsPerDollar = [];
//     let tempteamTripleStacksYahooProjectedPointsPerDollar = [];

//     //
//     //single stacks
//     //
//     if (scoring === 'half' && num === 2) {
//       this.teamSingleStacksNames = names;
//       this.teamUnsortedHalfSingleStacksValues = res;
//       this.teamSingleStacksTotalDraftkingsSalaries = totalDraftkingsSalaries;
//       this.teamSingleStacksTotalFanduelSalaries = totalFanduelSalaries;
//       this.teamSingleStacksTotalYahooSalaries = totalYahooSalaries;

//       this.teamUnsortedHalfSingleStacksValues.map(function (projPoints, i) {
//         if (projPoints / totalFanduelSalaries[i]) {
//           tempteamSingleStacksFanduelProjectedPointsPerDollar.push(
//             (projPoints / totalFanduelSalaries[i]).toFixed(4)
//           );
//         }
//         if (projPoints / totalYahooSalaries[i]) {
//           tempteamSingleStacksYahooProjectedPointsPerDollar.push(
//             (projPoints / totalYahooSalaries[i]).toFixed(4)
//           );
//         }
//       });

//       this.teamSingleStacksFanduelProjectedPointsPerDollar =
//         tempteamSingleStacksFanduelProjectedPointsPerDollar;
//       this.teamSingleStacksYahooProjectedPointsPerDollar =
//         tempteamSingleStacksYahooProjectedPointsPerDollar;
//     }
//     if (scoring === 'full' && num === 2) {
//       this.teamUnsortedFullSingleStacksValues = res;

//       this.teamUnsortedFullSingleStacksValues.map(function (projPoints, i) {
//         if (projPoints / totalDraftkingsSalaries[i]) {
//           tempteamSingleStacksDraftkingsProjectedPointsPerDollar.push(
//             (projPoints / totalDraftkingsSalaries[i]).toFixed(4)
//           );
//         }
//       });
//       this.teamSingleStacksDraftkingsProjectedPointsPerDollar =
//         tempteamSingleStacksDraftkingsProjectedPointsPerDollar;
//     }
//     //
//     //double stacks
//     //
//     if (scoring === 'half' && num === 3) {
//       this.teamDoubleStacksNames = names;
//       this.teamUnsortedHalfDoubleStacksValues = res;
//       this.teamDoubleStacksTotalDraftkingsSalaries = totalDraftkingsSalaries;
//       this.teamDoubleStacksTotalFanduelSalaries = totalFanduelSalaries;
//       this.teamDoubleStacksTotalYahooSalaries = totalYahooSalaries;

//       this.teamUnsortedHalfDoubleStacksValues.map(function (projPoints, i) {
//         if (projPoints / totalFanduelSalaries[i]) {
//           tempteamDoubleStacksFanduelProjectedPointsPerDollar.push(
//             (projPoints / totalFanduelSalaries[i]).toFixed(4)
//           );
//         }
//         if (projPoints / totalYahooSalaries[i]) {
//           tempteamDoubleStacksYahooProjectedPointsPerDollar.push(
//             (projPoints / totalYahooSalaries[i]).toFixed(4)
//           );
//         }
//       });

//       this.teamDoubleStacksFanduelProjectedPointsPerDollar =
//         tempteamDoubleStacksFanduelProjectedPointsPerDollar;
//       this.teamDoubleStacksYahooProjectedPointsPerDollar =
//         tempteamDoubleStacksYahooProjectedPointsPerDollar;
//     }
//     if (scoring === 'full' && num === 3) {
//       this.teamUnsortedFullDoubleStacksValues = res;

//       this.teamUnsortedFullDoubleStacksValues.map(function (projPoints, i) {
//         if (projPoints / totalDraftkingsSalaries[i]) {
//           tempteamDoubleStacksDraftkingsProjectedPointsPerDollar.push(
//             (projPoints / totalDraftkingsSalaries[i]).toFixed(4)
//           );
//         }
//       });
//       this.teamDoubleStacksDraftkingsProjectedPointsPerDollar =
//         tempteamDoubleStacksDraftkingsProjectedPointsPerDollar;
//     }

//     //
//     //triple stacks
//     //
//     if (scoring === 'half' && num === 4) {
//       this.teamTripleStacksNames = names;
//       this.teamUnsortedHalfTripleStacksValues = res;
//       this.teamTripleStacksTotalDraftkingsSalaries = totalDraftkingsSalaries;
//       this.teamTripleStacksTotalFanduelSalaries = totalFanduelSalaries;
//       this.teamTripleStacksTotalYahooSalaries = totalYahooSalaries;

//       this.teamUnsortedHalfTripleStacksValues.map(function (projPoints, i) {
//         if (projPoints / totalFanduelSalaries[i]) {
//           tempteamTripleStacksFanduelProjectedPointsPerDollar.push(
//             (projPoints / totalFanduelSalaries[i]).toFixed(4)
//           );
//         }
//         if (projPoints / totalYahooSalaries[i]) {
//           tempteamTripleStacksYahooProjectedPointsPerDollar.push(
//             (projPoints / totalYahooSalaries[i]).toFixed(4)
//           );
//         }
//       });

//       this.teamTripleStacksFanduelProjectedPointsPerDollar =
//         tempteamTripleStacksFanduelProjectedPointsPerDollar;
//       this.teamTripleStacksYahooProjectedPointsPerDollar =
//         tempteamTripleStacksYahooProjectedPointsPerDollar;
//     }
//     if (scoring === 'full' && num === 4) {
//       this.teamUnsortedFullTripleStacksValues = res;

//       this.teamUnsortedFullTripleStacksValues.map(function (projPoints, i) {
//         if (projPoints / totalDraftkingsSalaries[i]) {
//           tempteamTripleStacksDraftkingsProjectedPointsPerDollar.push(
//             (projPoints / totalDraftkingsSalaries[i]).toFixed(4)
//           );
//         }
//       });
//       this.teamTripleStacksDraftkingsProjectedPointsPerDollar =
//         tempteamTripleStacksDraftkingsProjectedPointsPerDollar;
//     }
//     return res;
//   }
// }

// //////
// //looping over the constructor function and building all team objects and all stakcs arrays
// //////

// allTeams.forEach(function (team, i) {
//   let qbName = allQBs[i].name;
//   let rbOneName = allRBs[i].RBOne.name;
//   let rbTwoName = allRBs[i].RBTwo.name;
//   let wrOneName = allWRs[i].WROne.name;
//   let wrTwoName = allWRs[i].WRTwo.name;
//   let wrThreeName = allWRs[i].WRThree.name;
//   let teName = allTEs[i].TE.name;
//   let qbProjPoints = allQBData.allQBFinalProjectedPointsValues[i];
//   let rbOneHalfProjPoints = allRBData.allRBOneHalfPPRProjectedPointsValues[i];
//   let rbTwoHalfProjPoints = allRBData.allRBTwoHalfPPRProjectedPointsValues[i];
//   let wrOneHalfProjPoints = allWRData.allHalfWROneFinalProjectedPointsValues[i];
//   let wrTwoHalfProjPoints = allWRData.allHalfWRTwoFinalProjectedPointsValues[i];
//   let wrThreeHalfProjPoints =
//     allWRData.allHalfWRThreeFinalProjectedPointsValues[i];
//   let teHalfProjPoints = allTEData.allHalfTEFinalProjectedPointsValues[i];
//   let rbOneFullProjPoints = allRBData.allRBOneFullPPRProjectedPointsValues[i];
//   let rbTwoFullProjPoints = allRBData.allRBTwoFullPPRProjectedPointsValues[i];
//   let wrOneFullProjPoints = allWRData.allFullWROneFinalProjectedPointsValues[i];
//   let wrTwoFullProjPoints = allWRData.allFullWRTwoFinalProjectedPointsValues[i];
//   let wrThreeFullProjPoints =
//     allWRData.allFullWRThreeFinalProjectedPointsValues[i];
//   let teFullProjPoints = allTEData.allFullTEFinalProjectedPointsValues[i];
//   let teTEPProjPoints = allTEData.allTEPremiuimFinalProjectedPointsValues[i];
//   let teamDefProjPoints = allDefData.TeamDefProjPoints[i];
//   let qbDraftkingsSalary = allQBs[i].draftkingsSalary;
//   let rbOneDraftkingsSalary = allRBs[i].RBOne.draftkingsSalary;
//   let rbTwoDraftkingsSalary = allRBs[i].RBTwo.draftkingsSalary;
//   let wrOneDraftkingsSalary = allWRs[i].WROne.draftkingsSalary;
//   let wrTwoDraftkingsSalary = allWRs[i].WRTwo.draftkingsSalary;
//   let wrThreeDraftkingsSalary = allWRs[i].WRThree.draftkingsSalary;
//   let teDraftkingsSalary = allTEs[i].TE.draftkingsSalary;
//   let teamDefDraftkingsSalary = team.teamDefDraftkingsSalary;
//   let qbFanduelSalary = allQBs[i].fanduelSalary;
//   let rbOneFanduelSalary = allRBs[i].RBOne.fanduelSalary;
//   let rbTwoFanduelSalary = allRBs[i].RBTwo.fanduelSalary;
//   let wrOneFanduelSalary = allWRs[i].WROne.fanduelSalary;
//   let wrTwoFanduelSalary = allWRs[i].WRTwo.fanduelSalary;
//   let wrThreeFanduelSalary = allWRs[i].WRThree.fanduelSalary;
//   let teFanduelSalary = allTEs[i].TE.fanduelSalary;
//   let teamDefFanduelSalary = team.teamDefFanduelSalary;
//   let qbYahooSalary = allQBs[i].yahooSalary;
//   let rbOneYahooSalary = allRBs[i].RBOne.yahooSalary;
//   let rbTwoYahooSalary = allRBs[i].RBTwo.yahooSalary;
//   let wrOneYahooSalary = allWRs[i].WROne.yahooSalary;
//   let wrTwoYahooSalary = allWRs[i].WRTwo.yahooSalary;
//   let wrThreeYahooSalary = allWRs[i].WRThree.yahooSalary;
//   let teYahooSalary = allTEs[i].TE.yahooSalary;
//   let teamDefYahooSalary = team.teamDefYahooSalary;
//   let qbOwnershipProjectionDraftkings = allQBs[i].draftkingsProjectedOwnership;
//   let rbOneOwnershipProjectionDraftkings =
//     allRBs[i].RBOne.draftkingsProjectedOwnership;
//   let rbTwoOwnershipProjectionDraftkings =
//     allRBs[i].RBTwo.draftkingsProjectedOwnership;
//   let wrOneOwnershipProjectionDraftkings =
//     allWRs[i].WROne.draftkingsProjectedOwnership;
//   let wrTwoOwnershipProjectionDraftkings =
//     allWRs[i].WRTwo.draftkingsProjectedOwnership;
//   let wrThreeOwnershipProjectionDraftkings =
//     allWRs[i].WRThree.draftkingsProjectedOwnership;
//   let teOwnershipProjectionDraftkings =
//     allTEs[i].TE.draftkingsProjectedOwnership;
//   let teamDefOwnershipProjectionDraftkings = team.draftkingsProjectedOwnership;
//   let qbOwnershipProjectionFanduel = allQBs[i].fanduelProjectedOwnership;
//   let rbOneOwnershipProjectionFanduel =
//     allRBs[i].RBOne.fanduelProjectedOwnership;
//   let rbTwoOwnershipProjectionFanduel =
//     allRBs[i].RBTwo.fanduelProjectedOwnership;
//   let wrOneOwnershipProjectionFanduel =
//     allWRs[i].WROne.fanduelProjectedOwnership;
//   let wrTwoOwnershipProjectionFanduel =
//     allWRs[i].WRTwo.fanduelProjectedOwnership;
//   let wrThreeOwnershipProjectionFanduel =
//     allWRs[i].WRThree.fanduelProjectedOwnership;
//   let teOwnershipProjectionFanduel = allTEs[i].TE.fanduelProjectedOwnership;
//   let teamDefOwnershipProjectionFanduel = team.fanduelProjectedOwnership;
//   let qbOwnershipProjectionYahoo = allQBs[i].yahooProjectedOwnership;
//   let rbOneOwnershipProjectionYahoo = allRBs[i].RBOne.yahooProjectedOwnership;
//   let rbTwoOwnershipProjectionYahoo = allRBs[i].RBTwo.yahooProjectedOwnership;
//   let wrOneOwnershipProjectionYahoo = allWRs[i].WROne.yahooProjectedOwnership;
//   let wrTwoOwnershipProjectionYahoo = allWRs[i].WRTwo.yahooProjectedOwnership;
//   let wrThreeOwnershipProjectionYahoo =
//     allWRs[i].WRThree.yahooProjectedOwnership;
//   let teOwnershipProjectionYahoo = allTEs[i].TE.yahooProjectedOwnership;
//   let teamDefOwnershipProjectionYahoo = team.yahooProjectedOwnership;

//   ////////// for opposing team

//   let oppteamName = '';
//   let oppvtt = 0;
//   let oppqbName = '';
//   let opprbOneName = '';
//   let opprbTwoName = '';
//   let oppwrOneName = '';
//   let oppwrTwoName = '';
//   let oppwrThreeName = '';
//   let oppteName = '';
//   let oppqbProjPoints = 0;
//   let opprbOneHalfProjPoints = 0;
//   let opprbTwoHalfProjPoints = 0;
//   let oppwrOneHalfProjPoints = 0;
//   let oppwrTwoHalfProjPoints = 0;
//   let oppwrThreeHalfProjPoints = 0;
//   let oppteHalfProjPoints = 0;
//   let opprbOneFullProjPoints = 0;
//   let opprbTwoFullProjPoints = 0;
//   let oppwrOneFullProjPoints = 0;
//   let oppwrTwoFullProjPoints = 0;
//   let oppwrThreeFullProjPoints = 0;
//   let oppteFullProjPoints = 0;
//   let oppteTEPProjPoints = 0;
//   let oppteamDefProjPoints = 0;
//   let oppqbDraftkingsSalary = 0;
//   let opprbOneDraftkingsSalary = 0;
//   let opprbTwoDraftkingsSalary = 0;
//   let oppwrOneDraftkingsSalary = 0;
//   let oppwrTwoDraftkingsSalary = 0;
//   let oppwrThreeDraftkingsSalary = 0;
//   let oppteDraftkingsSalary = 0;

//   let oppqbFanduelSalary = 0;
//   let opprbOneFanduelSalary = 0;
//   let opprbTwoFanduelSalary = 0;
//   let oppwrOneFanduelSalary = 0;
//   let oppwrTwoFanduelSalary = 0;
//   let oppwrThreeFanduelSalary = 0;
//   let oppteFanduelSalary = 0;

//   let oppqbYahooSalary = 0;
//   let opprbOneYahooSalary = 0;
//   let opprbTwoYahooSalary = 0;
//   let oppwrOneYahooSalary = 0;
//   let oppwrTwoYahooSalary = 0;
//   let oppwrThreeYahooSalary = 0;
//   let oppteYahooSalary = 0;

//   let oppqbOwnershipProjectionDraftkings = 0;
//   let opprbOneOwnershipProjectionDraftkings = 0;
//   let opprbTwoOwnershipProjectionDraftkings = 0;
//   let oppwrOneOwnershipProjectionDraftkings = 0;
//   let oppwrTwoOwnershipProjectionDraftkings = 0;
//   let oppwrThreeOwnershipProjectionDraftkings = 0;
//   let oppteOwnershipProjectionDraftkings = 0;
//   let oppqbOwnershipProjectionFanduel = 0;
//   let opprbOneOwnershipProjectionFanduel = 0;
//   let opprbTwoOwnershipProjectionFanduel = 0;
//   let oppwrOneOwnershipProjectionFanduel = 0;
//   let oppwrTwoOwnershipProjectionFanduel = 0;
//   let oppwrThreeOwnershipProjectionFanduel = 0;
//   let oppteOwnershipProjectionFanduel = 0;
//   let oppqbOwnershipProjectionYahoo = 0;
//   let opprbOneOwnershipProjectionYahoo = 0;
//   let opprbTwoOwnershipProjectionYahoo = 0;
//   let oppwrOneOwnershipProjectionYahoo = 0;
//   let oppwrTwoOwnershipProjectionYahoo = 0;
//   let oppwrThreeOwnershipProjectionYahoo = 0;
//   let oppteOwnershipProjectionYahoo = 0;

//   if (i % 2 === 1) {
//     oppteamName = allTeams[i - 1].teamName;
//     oppvtt = allTeams[i - 1].vtt;
//     oppqbName = allQBs[i - 1].name;
//     opprbOneName = allRBs[i - 1].RBOne.name;
//     opprbTwoName = allRBs[i - 1].RBTwo.name;
//     oppwrOneName = allWRs[i - 1].WROne.name;
//     oppwrTwoName = allWRs[i - 1].WRTwo.name;
//     oppwrThreeName = allWRs[i - 1].WRThree.name;
//     oppteName = allTEs[i - 1].TE.name;
//     oppqbProjPoints = allQBData.allQBFinalProjectedPointsValues[i - 1];
//     opprbOneHalfProjPoints =
//       allRBData.allRBOneHalfPPRProjectedPointsValues[i - 1];
//     opprbTwoHalfProjPoints =
//       allRBData.allRBTwoHalfPPRProjectedPointsValues[i - 1];
//     oppwrOneHalfProjPoints =
//       allWRData.allHalfWROneFinalProjectedPointsValues[i - 1];
//     oppwrTwoHalfProjPoints =
//       allWRData.allHalfWRTwoFinalProjectedPointsValues[i - 1];
//     oppwrThreeHalfProjPoints =
//       allWRData.allHalfWRThreeFinalProjectedPointsValues[i - 1];
//     oppteHalfProjPoints = allTEData.allHalfTEFinalProjectedPointsValues[i - 1];

//     opprbOneFullProjPoints =
//       allRBData.allRBOneFullPPRProjectedPointsValues[i - 1];
//     opprbTwoFullProjPoints =
//       allRBData.allRBTwoFullPPRProjectedPointsValues[i - 1];
//     oppwrOneFullProjPoints =
//       allWRData.allFullWROneFinalProjectedPointsValues[i - 1];
//     oppwrTwoFullProjPoints =
//       allWRData.allFullWRTwoFinalProjectedPointsValues[i - 1];
//     oppwrThreeFullProjPoints =
//       allWRData.allFullWRThreeFinalProjectedPointsValues[i - 1];
//     oppteFullProjPoints = allTEData.allFullTEFinalProjectedPointsValues[i - 1];
//     oppteTEPProjPoints =
//       allTEData.allTEPremiuimFinalProjectedPointsValues[i - 1];
//     oppteamDefProjPoints = allDefData.TeamDefProjPoints[i - 1];

//     oppqbDraftkingsSalary = allQBs[i - 1].draftkingsSalary;
//     opprbOneDraftkingsSalary = allRBs[i - 1].RBOne.draftkingsSalary;
//     opprbTwoDraftkingsSalary = allRBs[i - 1].RBTwo.draftkingsSalary;
//     oppwrOneDraftkingsSalary = allWRs[i - 1].WROne.draftkingsSalary;
//     oppwrTwoDraftkingsSalary = allWRs[i - 1].WRTwo.draftkingsSalary;
//     oppwrThreeDraftkingsSalary = allWRs[i - 1].WRThree.draftkingsSalary;
//     oppteDraftkingsSalary = allTEs[i - 1].TE.draftkingsSalary;

//     oppqbFanduelSalary = allQBs[i - 1].fanduelSalary;
//     opprbOneFanduelSalary = allRBs[i - 1].RBOne.fanduelSalary;
//     opprbTwoFanduelSalary = allRBs[i - 1].RBTwo.fanduelSalary;
//     oppwrOneFanduelSalary = allWRs[i - 1].WROne.fanduelSalary;
//     oppwrTwoFanduelSalary = allWRs[i - 1].WRTwo.fanduelSalary;
//     oppwrThreeFanduelSalary = allWRs[i - 1].WRThree.fanduelSalary;
//     oppteFanduelSalary = allTEs[i - 1].TE.fanduelSalary;

//     oppqbYahooSalary = allQBs[i - 1].yahooSalary;
//     opprbOneYahooSalary = allRBs[i - 1].RBOne.yahooSalary;
//     opprbTwoYahooSalary = allRBs[i - 1].RBTwo.yahooSalary;
//     oppwrOneYahooSalary = allWRs[i - 1].WROne.yahooSalary;
//     oppwrTwoYahooSalary = allWRs[i - 1].WRTwo.yahooSalary;
//     oppwrThreeYahooSalary = allWRs[i - 1].WRThree.yahooSalary;
//     oppteYahooSalary = allTEs[i - 1].TE.yahooSalary;

//     oppqbOwnershipProjectionDraftkings =
//       allQBs[i - 1].draftkingsProjectedOwnership;
//     opprbOneOwnershipProjectionDraftkings =
//       allRBs[i - 1].RBOne.draftkingsProjectedOwnership;
//     opprbTwoOwnershipProjectionDraftkings =
//       allRBs[i - 1].RBTwo.draftkingsProjectedOwnership;
//     oppwrOneOwnershipProjectionDraftkings =
//       allWRs[i - 1].WROne.draftkingsProjectedOwnership;
//     oppwrTwoOwnershipProjectionDraftkings =
//       allWRs[i - 1].WRTwo.draftkingsProjectedOwnership;
//     oppwrThreeOwnershipProjectionDraftkings =
//       allWRs[i - 1].WRThree.draftkingsProjectedOwnership;
//     oppteOwnershipProjectionDraftkings =
//       allTEs[i - 1].TE.draftkingsProjectedOwnership;
//     oppqbOwnershipProjectionFanduel = allQBs[i - 1].fanduelProjectedOwnership;
//     opprbOneOwnershipProjectionFanduel =
//       allRBs[i - 1].RBOne.fanduelProjectedOwnership;
//     opprbTwoOwnershipProjectionFanduel =
//       allRBs[i - 1].RBTwo.fanduelProjectedOwnership;
//     oppwrOneOwnershipProjectionFanduel =
//       allWRs[i - 1].WROne.fanduelProjectedOwnership;
//     oppwrTwoOwnershipProjectionFanduel =
//       allWRs[i - 1].WRTwo.fanduelProjectedOwnership;
//     oppwrThreeOwnershipProjectionFanduel =
//       allWRs[i - 1].WRThree.fanduelProjectedOwnership;
//     oppteOwnershipProjectionFanduel =
//       allTEs[i - 1].TE.fanduelProjectedOwnership;
//     oppqbOwnershipProjectionYahoo = allQBs[i - 1].yahooProjectedOwnership;
//     opprbOneOwnershipProjectionYahoo =
//       allRBs[i - 1].RBOne.yahooProjectedOwnership;
//     opprbTwoOwnershipProjectionYahoo =
//       allRBs[i - 1].RBTwo.yahooProjectedOwnership;
//     oppwrOneOwnershipProjectionYahoo =
//       allWRs[i - 1].WROne.yahooProjectedOwnership;
//     oppwrTwoOwnershipProjectionYahoo =
//       allWRs[i - 1].WRTwo.yahooProjectedOwnership;
//     oppwrThreeOwnershipProjectionYahoo =
//       allWRs[i - 1].WRThree.yahooProjectedOwnership;
//     oppteOwnershipProjectionYahoo = allTEs[i - 1].TE.yahooProjectedOwnership;
//   } else {
//     oppteamName = allTeams[i + 1].teamName;
//     oppvtt = allTeams[i + 1].vtt;
//     oppqbName = allQBs[i + 1].name;
//     opprbOneName = allRBs[i + 1].RBOne.name;
//     opprbTwoName = allRBs[i + 1].RBTwo.name;
//     oppwrOneName = allWRs[i + 1].WROne.name;
//     oppwrTwoName = allWRs[i + 1].WRTwo.name;
//     oppwrThreeName = allWRs[i + 1].WRThree.name;
//     oppteName = allTEs[i + 1].TE.name;

//     oppqbProjPoints = allQBData.allQBFinalProjectedPointsValues[i + 1];
//     opprbOneHalfProjPoints =
//       allRBData.allRBOneHalfPPRProjectedPointsValues[i + 1];
//     opprbTwoHalfProjPoints =
//       allRBData.allRBTwoHalfPPRProjectedPointsValues[i + 1];
//     oppwrOneHalfProjPoints =
//       allWRData.allHalfWROneFinalProjectedPointsValues[i + 1];
//     oppwrTwoHalfProjPoints =
//       allWRData.allHalfWRTwoFinalProjectedPointsValues[i + 1];
//     oppwrThreeHalfProjPoints =
//       allWRData.allHalfWRThreeFinalProjectedPointsValues[i + 1];
//     oppteHalfProjPoints = allTEData.allHalfTEFinalProjectedPointsValues[i + 1];

//     opprbOneFullProjPoints =
//       allRBData.allRBOneFullPPRProjectedPointsValues[i + 1];
//     opprbTwoFullProjPoints =
//       allRBData.allRBTwoFullPPRProjectedPointsValues[i + 1];
//     oppwrOneFullProjPoints =
//       allWRData.allFullWROneFinalProjectedPointsValues[i + 1];
//     oppwrTwoFullProjPoints =
//       allWRData.allFullWRTwoFinalProjectedPointsValues[i + 1];
//     oppwrThreeFullProjPoints =
//       allWRData.allFullWRThreeFinalProjectedPointsValues[i + 1];
//     oppteFullProjPoints = allTEData.allFullTEFinalProjectedPointsValues[i + 1];
//     oppteTEPProjPoints =
//       allTEData.allTEPremiuimFinalProjectedPointsValues[i + 1];
//     oppteamDefProjPoints = allDefData.TeamDefProjPoints[i + 1];

//     oppqbDraftkingsSalary = allQBs[i + 1].draftkingsSalary;
//     opprbOneDraftkingsSalary = allRBs[i + 1].RBOne.draftkingsSalary;
//     opprbTwoDraftkingsSalary = allRBs[i + 1].RBTwo.draftkingsSalary;
//     oppwrOneDraftkingsSalary = allWRs[i + 1].WROne.draftkingsSalary;
//     oppwrTwoDraftkingsSalary = allWRs[i + 1].WRTwo.draftkingsSalary;
//     oppwrThreeDraftkingsSalary = allWRs[i + 1].WRThree.draftkingsSalary;
//     oppteDraftkingsSalary = allTEs[i + 1].TE.draftkingsSalary;

//     oppqbFanduelSalary = allQBs[i + 1].fanduelSalary;
//     opprbOneFanduelSalary = allRBs[i + 1].RBOne.fanduelSalary;
//     opprbTwoFanduelSalary = allRBs[i + 1].RBTwo.fanduelSalary;
//     oppwrOneFanduelSalary = allWRs[i + 1].WROne.fanduelSalary;
//     oppwrTwoFanduelSalary = allWRs[i + 1].WRTwo.fanduelSalary;
//     oppwrThreeFanduelSalary = allWRs[i + 1].WRThree.fanduelSalary;
//     oppteFanduelSalary = allTEs[i + 1].TE.fanduelSalary;

//     oppqbYahooSalary = allQBs[i + 1].yahooSalary;
//     opprbOneYahooSalary = allRBs[i + 1].RBOne.yahooSalary;
//     opprbTwoYahooSalary = allRBs[i + 1].RBTwo.yahooSalary;
//     oppwrOneYahooSalary = allWRs[i + 1].WROne.yahooSalary;
//     oppwrTwoYahooSalary = allWRs[i + 1].WRTwo.yahooSalary;
//     oppwrThreeYahooSalary = allWRs[i + 1].WRThree.yahooSalary;
//     oppteYahooSalary = allTEs[i + 1].TE.yahooSalary;

//     oppqbOwnershipProjectionDraftkings =
//       allQBs[i + 1].draftkingsProjectedOwnership;
//     opprbOneOwnershipProjectionDraftkings =
//       allRBs[i + 1].RBOne.draftkingsProjectedOwnership;
//     opprbTwoOwnershipProjectionDraftkings =
//       allRBs[i + 1].RBTwo.draftkingsProjectedOwnership;
//     oppwrOneOwnershipProjectionDraftkings =
//       allWRs[i + 1].WROne.draftkingsProjectedOwnership;
//     oppwrTwoOwnershipProjectionDraftkings =
//       allWRs[i + 1].WRTwo.draftkingsProjectedOwnership;
//     oppwrThreeOwnershipProjectionDraftkings =
//       allWRs[i + 1].WRThree.draftkingsProjectedOwnership;
//     oppteOwnershipProjectionDraftkings =
//       allTEs[i + 1].TE.draftkingsProjectedOwnership;
//     oppqbOwnershipProjectionFanduel = allQBs[i + 1].fanduelProjectedOwnership;
//     opprbOneOwnershipProjectionFanduel =
//       allRBs[i + 1].RBOne.fanduelProjectedOwnership;
//     opprbTwoOwnershipProjectionFanduel =
//       allRBs[i + 1].RBTwo.fanduelProjectedOwnership;
//     oppwrOneOwnershipProjectionFanduel =
//       allWRs[i + 1].WROne.fanduelProjectedOwnership;
//     oppwrTwoOwnershipProjectionFanduel =
//       allWRs[i + 1].WRTwo.fanduelProjectedOwnership;
//     oppwrThreeOwnershipProjectionFanduel =
//       allWRs[i + 1].WRThree.fanduelProjectedOwnership;
//     oppteOwnershipProjectionFanduel =
//       allTEs[i + 1].TE.fanduelProjectedOwnership;
//     oppqbOwnershipProjectionYahoo = allQBs[i + 1].yahooProjectedOwnership;
//     opprbOneOwnershipProjectionYahoo =
//       allRBs[i + 1].RBOne.yahooProjectedOwnership;
//     opprbTwoOwnershipProjectionYahoo =
//       allRBs[i + 1].RBTwo.yahooProjectedOwnership;
//     oppwrOneOwnershipProjectionYahoo =
//       allWRs[i + 1].WROne.yahooProjectedOwnership;
//     oppwrTwoOwnershipProjectionYahoo =
//       allWRs[i + 1].WRTwo.yahooProjectedOwnership;
//     oppwrThreeOwnershipProjectionYahoo =
//       allWRs[i + 1].WRThree.yahooProjectedOwnership;
//     oppteOwnershipProjectionYahoo = allTEs[i + 1].TE.yahooProjectedOwnership;
//   }

//   let halfStackArray = [
//     qbProjPoints,
//     rbOneHalfProjPoints,
//     rbTwoHalfProjPoints,
//     wrOneHalfProjPoints,
//     wrTwoHalfProjPoints,
//     wrThreeHalfProjPoints,
//     teHalfProjPoints,
//     opprbOneHalfProjPoints,
//     opprbTwoHalfProjPoints,
//     oppwrOneHalfProjPoints,
//     oppwrTwoHalfProjPoints,
//     oppwrThreeHalfProjPoints,
//     oppteHalfProjPoints,
//   ];

//   let PPRArray = [
//     qbProjPoints,
//     rbOneFullProjPoints,
//     rbTwoFullProjPoints,
//     wrOneFullProjPoints,
//     wrTwoFullProjPoints,
//     wrThreeFullProjPoints,
//     teFullProjPoints,
//     opprbOneFullProjPoints,
//     opprbTwoFullProjPoints,
//     oppwrOneFullProjPoints,
//     oppwrTwoFullProjPoints,
//     oppwrThreeFullProjPoints,
//     oppteFullProjPoints,
//   ];

//   let TEPArray = [
//     qbProjPoints,
//     rbOneFullProjPoints,
//     rbTwoFullProjPoints,
//     wrOneFullProjPoints,
//     wrTwoFullProjPoints,
//     wrThreeFullProjPoints,
//     teTEPProjPoints,
//     opprbOneFullProjPoints,
//     opprbTwoFullProjPoints,
//     oppwrOneFullProjPoints,
//     oppwrTwoFullProjPoints,
//     oppwrThreeFullProjPoints,
//     oppteTEPProjPoints,
//   ];

//   let namesArray = [
//     qbName,
//     rbOneName,
//     rbTwoName,
//     wrOneName,
//     wrTwoName,
//     wrThreeName,
//     teName,
//     opprbOneName,
//     opprbTwoName,
//     oppwrOneName,
//     oppwrTwoName,
//     oppwrThreeName,
//     oppteName,
//   ];

//   let draftkingssalariesArray = [
//     qbDraftkingsSalary,
//     rbOneDraftkingsSalary,
//     rbTwoDraftkingsSalary,
//     wrOneDraftkingsSalary,
//     wrTwoDraftkingsSalary,
//     wrThreeDraftkingsSalary,
//     teDraftkingsSalary,
//     opprbOneDraftkingsSalary,
//     opprbTwoDraftkingsSalary,
//     oppwrOneDraftkingsSalary,
//     oppwrTwoDraftkingsSalary,
//     oppwrThreeDraftkingsSalary,
//     oppteDraftkingsSalary,
//   ];

//   let fanduelSalariesArray = [
//     qbFanduelSalary,
//     rbOneFanduelSalary,
//     rbTwoFanduelSalary,
//     wrOneFanduelSalary,
//     wrTwoFanduelSalary,
//     wrThreeFanduelSalary,
//     teFanduelSalary,
//     opprbOneFanduelSalary,
//     opprbTwoFanduelSalary,
//     oppwrOneFanduelSalary,
//     oppwrTwoFanduelSalary,
//     oppwrThreeFanduelSalary,
//     oppteFanduelSalary,
//   ];

//   let yahooSalariesArray = [
//     qbYahooSalary,
//     rbOneYahooSalary,
//     rbTwoYahooSalary,
//     wrOneYahooSalary,
//     wrTwoYahooSalary,
//     wrThreeYahooSalary,
//     teYahooSalary,
//     opprbOneYahooSalary,
//     opprbTwoYahooSalary,
//     oppwrOneYahooSalary,
//     oppwrTwoYahooSalary,
//     oppwrThreeYahooSalary,
//     oppteYahooSalary,
//   ];

//   let teamUnsortedHalfSingleStacksValues = [];
//   let teamUnsortedFullSingleStacksValues = [];
//   let teamUnsortedTEPSingleStacksValues = [];
//   let teamUnsortedHalfDoubleStacksValues = [];
//   let teamUnsortedFullDoubleStacksValues = [];
//   let teamUnsortedTEPDoubleStacksValues = [];
//   let teamUnsortedHalfTripleStacksValues = [];
//   let teamUnsortedFullTripleStacksValues = [];
//   let teamUnsortedTEPTripleStacksValues = [];
//   let teamSingleStacksNames = [];
//   let teamDoubleStacksNames = [];
//   let teamTripleStacksNames = [];
//   let teamSingleStacksTotalDraftkingsSalaries = [];
//   let teamDoubleStacksTotalDraftkingsSalaries = [];
//   let teamTripleStacksTotalDraftkingsSalaries = [];
//   let teamSingleStacksTotalFanduelSalaries = [];
//   let teamDoubleStacksTotalFanduelSalaries = [];
//   let teamTripleStacksTotalFanduelSalaries = [];
//   let teamSingleStacksTotalYahooSalaries = [];
//   let teamDoubleStacksTotalYahooSalaries = [];
//   let teamTripleStacksTotalYahooSalaries = [];

//   let teamSingleStacksDraftkingsProjectedPointsPerDollar = [];
//   let teamSingleStacksFanduelProjectedPointsPerDollar = [];
//   let teamSingleStacksYahooProjectedPointsPerDollar = [];
//   let teamDoubleStacksDraftkingsProjectedPointsPerDollar = [];
//   let teamDoubleStacksFanduelProjectedPointsPerDollar = [];
//   let teamDoubleStacksYahooProjectedPointsPerDollar = [];
//   let teamTripleStacksDraftkingsProjectedPointsPerDollar = [];
//   let teamTripleStacksFanduelProjectedPointsPerDollar = [];
//   let teamTripleStacksYahooProjectedPointsPerDollar = [];

//   //////////////////////////////
//   //looping over constructor function
//   ///////////////////

//   let teamObject = new FullTeamObjectWithAllStacks(
//     team.teamName,
//     team.vtt,
//     qbName,
//     rbOneName,
//     rbTwoName,
//     wrOneName,
//     wrTwoName,
//     wrThreeName,
//     teName,
//     qbProjPoints,
//     rbOneHalfProjPoints,
//     rbTwoHalfProjPoints,
//     wrOneHalfProjPoints,
//     wrTwoHalfProjPoints,
//     wrThreeHalfProjPoints,
//     teHalfProjPoints,
//     rbOneFullProjPoints,
//     rbTwoFullProjPoints,
//     wrOneFullProjPoints,
//     wrTwoFullProjPoints,
//     wrThreeFullProjPoints,
//     teFullProjPoints,
//     teTEPProjPoints,
//     teamDefProjPoints,
//     qbDraftkingsSalary,
//     rbOneDraftkingsSalary,
//     rbTwoDraftkingsSalary,
//     wrOneDraftkingsSalary,
//     wrTwoDraftkingsSalary,
//     wrThreeDraftkingsSalary,
//     teDraftkingsSalary,
//     teamDefDraftkingsSalary,
//     qbFanduelSalary,
//     rbOneFanduelSalary,
//     rbTwoFanduelSalary,
//     wrOneFanduelSalary,
//     wrTwoFanduelSalary,
//     wrThreeFanduelSalary,
//     teFanduelSalary,
//     teamDefFanduelSalary,
//     qbYahooSalary,
//     rbOneYahooSalary,
//     rbTwoYahooSalary,
//     wrOneYahooSalary,
//     wrTwoYahooSalary,
//     wrThreeYahooSalary,
//     teYahooSalary,
//     teamDefYahooSalary,
//     qbOwnershipProjectionDraftkings,
//     rbOneOwnershipProjectionDraftkings,
//     rbTwoOwnershipProjectionDraftkings,
//     wrOneOwnershipProjectionDraftkings,
//     wrTwoOwnershipProjectionDraftkings,
//     wrThreeOwnershipProjectionDraftkings,
//     teOwnershipProjectionDraftkings,
//     teamDefOwnershipProjectionDraftkings,
//     qbOwnershipProjectionFanduel,
//     rbOneOwnershipProjectionFanduel,
//     rbTwoOwnershipProjectionFanduel,
//     wrOneOwnershipProjectionFanduel,
//     wrTwoOwnershipProjectionFanduel,
//     wrThreeOwnershipProjectionFanduel,
//     teOwnershipProjectionFanduel,
//     teamDefOwnershipProjectionFanduel,
//     qbOwnershipProjectionYahoo,
//     rbOneOwnershipProjectionYahoo,
//     rbTwoOwnershipProjectionYahoo,
//     wrOneOwnershipProjectionYahoo,
//     wrTwoOwnershipProjectionYahoo,
//     wrThreeOwnershipProjectionYahoo,
//     teOwnershipProjectionYahoo,
//     teamDefOwnershipProjectionYahoo,
//     oppteamName,
//     oppvtt,
//     oppqbName,
//     opprbOneName,
//     opprbTwoName,
//     oppwrOneName,
//     oppwrTwoName,
//     oppwrThreeName,
//     oppteName,
//     oppqbProjPoints,
//     opprbOneHalfProjPoints,
//     opprbTwoHalfProjPoints,
//     oppwrOneHalfProjPoints,
//     oppwrTwoHalfProjPoints,
//     oppwrThreeHalfProjPoints,
//     oppteHalfProjPoints,
//     opprbOneFullProjPoints,
//     opprbTwoFullProjPoints,
//     oppwrOneFullProjPoints,
//     oppwrTwoFullProjPoints,
//     oppwrThreeFullProjPoints,
//     oppteFullProjPoints,
//     oppteTEPProjPoints,
//     oppteamDefProjPoints,
//     oppqbDraftkingsSalary,
//     opprbOneDraftkingsSalary,
//     opprbTwoDraftkingsSalary,
//     oppwrOneDraftkingsSalary,
//     oppwrTwoDraftkingsSalary,
//     oppwrThreeDraftkingsSalary,
//     oppteDraftkingsSalary,
//     oppqbFanduelSalary,
//     opprbOneFanduelSalary,
//     opprbTwoFanduelSalary,
//     oppwrOneFanduelSalary,
//     oppwrTwoFanduelSalary,
//     oppwrThreeFanduelSalary,
//     oppteFanduelSalary,
//     oppqbYahooSalary,
//     opprbOneYahooSalary,
//     opprbTwoYahooSalary,
//     oppwrOneYahooSalary,
//     oppwrTwoYahooSalary,
//     oppwrThreeYahooSalary,
//     oppteYahooSalary,
//     oppqbOwnershipProjectionDraftkings,
//     opprbOneOwnershipProjectionDraftkings,
//     opprbTwoOwnershipProjectionDraftkings,
//     oppwrOneOwnershipProjectionDraftkings,
//     oppwrTwoOwnershipProjectionDraftkings,
//     oppwrThreeOwnershipProjectionDraftkings,
//     oppteOwnershipProjectionDraftkings,
//     oppqbOwnershipProjectionFanduel,
//     opprbOneOwnershipProjectionFanduel,
//     opprbTwoOwnershipProjectionFanduel,
//     oppwrOneOwnershipProjectionFanduel,
//     oppwrTwoOwnershipProjectionFanduel,
//     oppwrThreeOwnershipProjectionFanduel,
//     oppteOwnershipProjectionFanduel,
//     oppqbOwnershipProjectionYahoo,
//     opprbOneOwnershipProjectionYahoo,
//     opprbTwoOwnershipProjectionYahoo,
//     oppwrOneOwnershipProjectionYahoo,
//     oppwrTwoOwnershipProjectionYahoo,
//     oppwrThreeOwnershipProjectionYahoo,
//     oppteOwnershipProjectionYahoo,
//     halfStackArray,
//     PPRArray,
//     TEPArray,
//     teamUnsortedHalfSingleStacksValues,
//     teamUnsortedFullSingleStacksValues,
//     teamUnsortedTEPSingleStacksValues,
//     teamUnsortedHalfDoubleStacksValues,
//     teamUnsortedFullDoubleStacksValues,
//     teamUnsortedTEPDoubleStacksValues,
//     teamUnsortedHalfTripleStacksValues,
//     teamUnsortedFullTripleStacksValues,
//     teamUnsortedTEPTripleStacksValues,
//     teamSingleStacksNames,
//     teamDoubleStacksNames,
//     teamTripleStacksNames,
//     teamSingleStacksTotalDraftkingsSalaries,
//     teamDoubleStacksTotalDraftkingsSalaries,
//     teamTripleStacksTotalDraftkingsSalaries,
//     teamSingleStacksTotalFanduelSalaries,
//     teamDoubleStacksTotalFanduelSalaries,
//     teamTripleStacksTotalFanduelSalaries,
//     teamSingleStacksTotalYahooSalaries,
//     teamDoubleStacksTotalYahooSalaries,
//     teamTripleStacksTotalYahooSalaries,
//     teamSingleStacksDraftkingsProjectedPointsPerDollar,
//     teamSingleStacksFanduelProjectedPointsPerDollar,
//     teamSingleStacksYahooProjectedPointsPerDollar,
//     teamDoubleStacksDraftkingsProjectedPointsPerDollar,
//     teamDoubleStacksFanduelProjectedPointsPerDollar,
//     teamDoubleStacksYahooProjectedPointsPerDollar,
//     teamTripleStacksDraftkingsProjectedPointsPerDollar,
//     teamTripleStacksFanduelProjectedPointsPerDollar,
//     teamTripleStacksYahooProjectedPointsPerDollar
//   );

//   //call methods here

//   teamObject.buildCombinations(
//     halfStackArray,
//     2,
//     'half',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   teamObject.buildCombinations(
//     PPRArray,
//     2,
//     'full',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   teamObject.buildCombinations(
//     TEPArray,
//     2,
//     'TEP',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   teamObject.buildCombinations(
//     halfStackArray,
//     3,
//     'half',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   teamObject.buildCombinations(
//     PPRArray,
//     3,
//     'full',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   teamObject.buildCombinations(
//     TEPArray,
//     3,
//     'TEP',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   teamObject.buildCombinations(
//     halfStackArray,
//     4,
//     'half',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   teamObject.buildCombinations(
//     PPRArray,
//     4,
//     'full',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   teamObject.buildCombinations(
//     TEPArray,
//     4,
//     'TEP',
//     namesArray,
//     draftkingssalariesArray,
//     fanduelSalariesArray,
//     yahooSalariesArray
//   );

//   allTeamObjectsArray.push(teamObject);
// });

// // console.log(allTeamObjectsArray);
// // console.log(allTeamObjectsArray[0]);

// module.exports = allTeamObjectsArray;
