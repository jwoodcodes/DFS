const allWrProspectsObjects = require('./unWRProspectModel');
const WRProspectModelData = require('../DataForUndroppablesProspectModels/WRProspectModelData');
const { MongoClient } = require('mongodb');
const { type } = require('express/lib/response');

// console.log(allWrProspectsObjects)

///

///
// allWrProspectsObjects.forEach((player) => {
//     console.log(player)
// })
const allWrProspectsNamesArray = [];
let toOneHundredScoreObjectsArray = [];
let temptoOneHundredScoreObjectsArray = [];
let pprPointsArray = [];
let adjYrdsPerTeamPlayArray = [];
let EPAPerTeamPassAttempArray = [];
let EPAPerPlayArray = [];
let recTDsArray = [];
let recYrdsPerGameArray = [];
let NFLPPRPointsYearsOneToThreeArray = [];
let UNScoreArray = [];
let draftPickNumArray = [];

let namesArray = [];
let firstDownPerRouteRunArray = [];
let careerAverageRecGradeArray = [];

WRProspectModelData.forEach(playerArray => {
  playerArray.forEach(player => {
    // console.log(player.Player);

    let curProspectName = player.Player;
    // console.log(allWrProspectsNamesArray.includes(curProspectName))
    if (allWrProspectsNamesArray.includes(curProspectName) === false) {
      allWrProspectsNamesArray.push(curProspectName);
    }
  });
});

// console.log(allWrProspectsNamesArray);

// working with the data to construct individual player objects

const calcAllWrProspectsObjects = {};

// let dataStructureForR = {};

allWrProspectsNamesArray.forEach(player => {
  calcAllWrProspectsObjects[player] = {};
  // dataStructureForR[player] = {};
});

// console.log(calcAllWrProspectsObjects);

let allHitsNamesArray = Object.keys(calcAllWrProspectsObjects);

// console.log(allHitsNamesArray);

const test = Object.entries(allWrProspectsObjects);

// console.log(test);
let num = 0;
let total = 0;

test.forEach(topPlayer => {
  topPlayer.forEach(player => {
    if (player.name) {
      allHitsNamesArray.forEach(playerName => {
        if (player.name === playerName) {
          //   console.log(playerName, player);
          calcAllWrProspectsObjects[playerName].finalScore = 0;
          //   console.log(player.yearOne.Hit);
          // year Two plus year three

          // ['1D/Snap'] > 10.5 H- 46%, NH- 20%
          // careerAveragedStats['1D/RR'] > 10.2 H- 68%, NH- 31%          37 * d
          // careerAveragedStats['REC Grade'] > 75 H- 61%, NH- 25%        36 * d
          // yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 6 H- 61%, NH- 38%  23
          // careerAveragedStats.RR > 300 H- 64%, NH- 42%                     22
          // yearTwoPlusYearThreeAveragedStats.TPRR > 0.24 H- 61%, NH- 39%     22
          // yearTwoPlusYearThreeAveragedStats['YAC/Rec'] > 4.8 H- 71%, NH- 45%  26
          // careerAveragedStats.YPRR > 2 H- 96%, NH- 56%                       40  * d

          // careerAveragedStats['Man YPRR'] > 1.75 H- 64%, NH - 31%            33

          // careerAveragedStats['Zone YPRR'] > 1.75 & careerAveragedStats['Man YPRR'] > 1.5 H- 69%, NH- 32%        37 * d

          // careerAveragedStats['PPR Points'] > 160 H- 69%, 32%                37 * d
          // careerAveragedStats['Reception MS (Games Played)'] > 0.2 H-64%, NH- 35%      29

          // yearTwoPlusYearThreeAveragedStats['Rec Yds Per Team Pass Att'] > 2 H- 71%, NH- 36%     35

          //yearTwoPlusYearThreeAveragedStats['TD Per Team Pass Att'] > 0.016 H- 75%, NH- 40%       35
          // yearTwoPlusYearThreeAveragedStats['Weighted Dominator Rating'] > 0.26 H- 69%, 37%      32
          // careerAveragedStats['Adjusted Yds Per Team Play'] > 1.65 H- 69%, NH - 33%              36 * d
          // yearTwoPlusYearThreeAveragedStats['Scrimmage Yds Per Team Pass Attempt'] > 1.9 H- 68%, NH- 37%            31
          // yearTwoPlusYearThreeAveragedStats['EPA Per Team Pass Attempt'] > 0.125 H- 86%, NH- 39%  57** d

          // yearTwoPlusYearThreeAveragedStats['EPA Per Play'] > 0.75 H- 71%, NH- 27%       44 ** d
          // careerAveragedStats['Rec TDs'] > 5.5 H- 75%, NH- 39%                           36  * d
          // careerAveragedStats['Rec Yds per Game'] > 62.5 H- 82%, NH- 37%                    45** d
          // yearTwoPlusYearThreeAveragedStats['Rec TDs per Game'] > 0.55 H- 82%, NH- 39%    43 ** not using at the moment because already using a rec TD stat
          // ['Draft Round'] < 3 H- 79%, NH- 29%                                            50 **

          // Height < 71 H- 14% *
          // Weight < 170 H- 7% or < 180 H- 19% *

          // dataStructureForR[playerName].careerAverage1DRR = player.careerAveragedStats['1D/RR'];
          // dataStructureForR[playerName].careerAverageRecGrade = player.careerAveragedStats['REC Grade'];

          namesArray.push(playerName);
          firstDownPerRouteRunArray.push(player.careerAveragedStats['1D/RR']);
          careerAverageRecGradeArray.push(
            player.careerAveragedStats['REC Grade']
          );
          pprPointsArray.push(player.careerAveragedStats['PPR Points']);
          adjYrdsPerTeamPlayArray.push(
            player.careerAveragedStats['Adjusted Yds Per Team Play']
          );
          EPAPerTeamPassAttempArray.push(
            player.yearTwoPlusYearThreeAveragedStats[
              'EPA Per Team Pass Attempt'
            ]
          );
          EPAPerPlayArray.push(
            player.yearTwoPlusYearThreeAveragedStats['EPA Per Play']
          );
          recTDsArray.push(player.careerAveragedStats['Rec TDs']);
          recYrdsPerGameArray.push(
            player.careerAveragedStats['Rec Yds per Game']
          );

          let nflPoints = 'NA';

          if (player.yearOne['YR 1-3 FP/G']) {
            nflPoints = player.yearOne['YR 1-3 FP/G'];
          }

          if (player.yearOne['YR 1-2 FP/G']) {
            nflPoints = player.yearOne['YR 1-2 FP/G'];
          }

          if (player.yearOne['YR 1 FP/G']) {
            nflPoints = player.yearOne['YR 1 FP/G'];
          }

          draftPickNumArray.push(player.yearOne['Draft Pick Overall']);

          NFLPPRPointsYearsOneToThreeArray.push(nflPoints);

          UNScoreArray.push(player.yearOne['Final Model Score']);

          // 28 hits, 150 non hits, 178 total

          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(num, player.name);
          //   }

          // if (player.careerAveragedStats['Reception MS (Games Played)'] > 0.2) {
          //   if (player.yearOne['Class'] === '2024') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,
          //       player.yearOne['Rec Yds Per Team Pass Att']
          //     );
          //   }
          // }

          // if (player.yearOne['PPR Points/RR'] > 0.925) {
          //   if (player.yearOne.Hit === 'N') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,
          //       player.careerAveragedStats['Reception MS (Games Played)']
          //     );
          //   }
          // }

          // && player.yearOne['Draft Round'] < 4

          // let testForHere = +player.yearOne['Age in Best Season'];

          // if (testForHere < 20 && player.yearOne.RR > 23) {
          //   // if (player.yearOne.Hit === 'Y') {
          //   num = num + 1;
          //   console.log(
          //     num,
          //     player.name,
          //     testForHere,
          //     player.yearOne.RR,
          //     player.yearOne['Draft Round']
          //   );
          //   // }
          // }

          //  1 Deebo Samuel 8.93
          // 2 Diontae Johnson 14.70
          // 3 Jayden Reed 9.69
          // 4 Michael Pittman Jr. 8.93
          // 5 Nico Collins 13.86
          // 6 Zay Flowers 7.35
          //
          //
          //  1 Anthony Miller 11.97
          // 2 Calvin Austin III 10.58
          // 3 Courtland Sutton 12.15
          // 4 D.J. Chark 11.48
          // 5 Danny Gray 12.18
          // 6 Dante Pettis 14.17
          // 7 Dyami Brown 10.92
          // 8 Elijah Moore 13.23
          // 9 Henry Ruggs III 9
          // 10 Jameson Williams 14.4
          // 11 Jordan Lasley 7.42
          // 12 Josh Downs 11.03
          // 13 Keke Coutee 9.55
          // 14 Khalil Shakir 9.24
          // 15 KJ Hamler 8.51
          // 16 Laviska Shenault Jr. 12.83
          // 17 Marvin Mims Jr. 11.97
          // 18 Michael Gallup 10.92
          // 19 Quintez Cephus 9.90
          // 20 Rashod Bateman 9.99
          // 21 Romeo Doubs 7.14
          // 22 Rondale Moore 10.39
          // 23 Simi Fehoko 10.29
          // 24 Skyy Moore 12.29
          // 25 Treylon Burks 9.72
          // 26 Tylan Wallace 14.70
          // 27 Tyler Johnson 11.22
          // 28 Wan'Dale Robinson 12.76

          // }

          // if (player.yearOne['Power 5'] === 'Y') {
          //   if (player.yearOne.Conference === 'Big 12') {
          //     if (player.yearOne.Hit === 'N') {
          //       // console.log(player.yearOne.Conference);
          //       // num = num + 1;
          //       // console.log(num, player.name);
          //     }
          //   }
          // }

          //

          player.highestContestedTargetPercent =
            player.yearOne['Contested Target %'];
          //
          if (player.yearTwo) {
            if (
              player.yearTwo['Contested Target %'] >
              player.highestContestedTargetPercent
            ) {
              player.highestContestedTargetPercent =
                player.yearTwo['Contested Target %'];
            }
          }
          //
          if (player.yearThree) {
            if (
              player.yearThree['Contested Target %'] >
              player.highestContestedTargetPercent
            ) {
              player.highestContestedTargetPercent =
                player.yearThree['Contested Target %'];
            }
          }
          //
          if (player.yearFour) {
            if (
              player.yearFour['Contested Target %'] >
              player.highestContestedTargetPercent
            ) {
              player.highestContestedTargetPercent =
                player.yearFour['Contested Target %'];
            }
          }

          player.highestContestedTargetPercent =
            +player.highestContestedTargetPercent.slice(0, -1);

          //

          player.highestEPAPerGame = player.yearOne['EPA/G'];
          player.careerAvgEPAPerGame = +player.yearOne['EPA/G'].slice(0, -1);

          //
          if (player.yearTwo) {
            if (player.yearTwo['EPA/G'] > player.highestEPAPerGame) {
              player.highestEPAPerGame = player.yearTwo['EPA/G'];
              //
              player.careerAvgEPAPerGame =
                +(
                  player.careerAvgEPAPerGame +
                  +player.yearTwo['EPA/G'].slice(0, -1)
                ) / 2;
            }
          }
          //
          if (player.yearThree) {
            if (player.yearThree['EPA/G'] > player.highestEPAPerGame) {
              player.highestEPAPerGame = player.yearThree['EPA/G'];
              //
              player.careerAvgEPAPerGame =
                +(
                  player.careerAvgEPAPerGame +
                  +player.yearThree['EPA/G'].slice(0, -1)
                ) / 2;
            }
          }
          //
          if (player.yearFour) {
            if (player.yearFour['EPA/G'] > player.highestEPAPerGame) {
              player.highestEPAPerGame = player.yearFour['EPA/G'];
              //
              player.careerAvgEPAPerGame =
                +(
                  player.careerAvgEPAPerGame +
                  +player.yearFour['EPA/G'].slice(0, -1)
                ) / 2;
            }
          }

          player.highestEPAPerGame = +player.highestEPAPerGame.slice(0, -1);

          player.careerAvgEPAPerGame = player.careerAvgEPAPerGame.toFixed(3);

          // console.log(player.careerAvgEPAPerRouteRun);

          // if (player.yearOne.Conference === 'Pac-12') {
          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(num, player.name);
          //   }
          // }

          // if (player.yearOne['Power 5'] === 'N') {
          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(num, player.name), player.careerAveragedStats.RR;
          //   }
          // }

          // if (player.yearFour) {
          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(num, player.name), player.careerAveragedStats.RR;
          //   }
          // }

          ///////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////////////////

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['1D/RR'] < 8) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['1D/RR']
            //   );
            // }

            //
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
              score: -5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 5;
          }

          // bound 2:
          //
          //
          if (
            player.careerAveragedStats['1D/RR'] > 7.99 &&
            player.careerAveragedStats['1D/RR'] < 10.2
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['1D/RR']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
              score: -3,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 3;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (player.careerAveragedStats['1D/RR'] > 10.199) {
            // if (player.yearOne['Class'] === '2024') {
            //   if (player.yearOne['Power 5'] === 'Y') {
            //     // if (player.yearOne.Hit === 'N') {
            //     num = num + 1;
            //     console.log(
            //       num,
            //       player.name,
            //       player.careerAveragedStats['1D/RR']
            //     );
            //   }
            // }
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
              score: 3,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 3;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that < 5% (7 or less) of non hits are above it and > 18% (5) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          //
          //   if (player.careerAveragedStats['1D/RR'] > 13.5) {
          //     if (player.yearOne.Hit === 'Y') {
          //       num = num + 1;
          //       console.log(
          //         num,
          //         player.name,
          //         player.careerAveragedStats['1D/RR']
          //       );
          //     }

          //     //
          //     // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //     //
          //     calcAllWrProspectsObjects[
          //       playerName
          //     ].careerAvgFirstDownPerRouteRun = {
          //       value: player.careerAveragedStats['1D/RR'],
          //       score: 4,
          //     };
          //     calcAllWrProspectsObjects[playerName].finalScore =
          //       calcAllWrProspectsObjects[playerName].finalScore + 4;
          //   }
          //
          //  year one elite production

          let yearOneFirstDownsPerRouteRun = +player.yearOne['1D/RR'].slice(
            1,
            -1
          );

          if (
            yearOneFirstDownsPerRouteRun > 1.1 &&
            player.yearOne['Draft Round'] < 4
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     yearOneFirstDownsPerRouteRun,
            //     player.yearOne['Draft Round']
            //   );
            // }

            //
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['REC Grade'] < 69) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['REC Grade']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: 0,
            };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAveragedStats['REC Grade'] > 68.99 &&
            player.careerAveragedStats['REC Grade'] < 75
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['REC Grade']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (player.careerAveragedStats['REC Grade'] > 74.99) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['REC Grade']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: 3,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 3;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that  5 or less (3%) of non hits are above it and > 20% (6 or more) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          //
          // if (player.careerAveragedStats['REC Grade'] > 80) {
          //   if (player.yearOne.Hit === 'N') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,
          //       player.careerAveragedStats['REC Grade']
          //     );
          //   }

          //
          // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //
          //   calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
          //     value: player.careerAveragedStats['REC Grade'],
          //     score: 4,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 4;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // career avg

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats.YPRR < 2.009) {
            // if (player.yearOne.Hit === 'y') {
            //   num = num + 1;
            //   console.log(num, player.name, player.careerAveragedStats.YPRR);
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
              value: player.careerAveragedStats.YPRR,
              score: 0,
            };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAveragedStats.YPRR > 2.008 &&
            player.careerAveragedStats.YPRR < 2.009
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats.YPRR
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
              value: player.careerAveragedStats.YPRR,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (player.careerAveragedStats.YPRR > 2) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(num, player.name, player.careerAveragedStats.YPRR);
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
              value: player.careerAveragedStats.YPRR,
              score: 3,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 3;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that  5 or less (3%) of non hits are above it and > 20% (6 or more) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          //
          // if (player.careerAveragedStats.YPRR > 3.2) {
          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(num, player.name, player.careerAveragedStats.YPRR);
          //   }

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
          //     value: player.careerAveragedStats.YPRR,
          //     score: 4,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 4;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (
            player.careerAveragedStats['Zone YPRR'] < 1 &&
            player.careerAveragedStats['Man YPRR'] < 1
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Man YPRR']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgSoneYPRRPlusManYPRR =
              {
                value: player.careerAveragedStats['Zone YPRR'],
                score: 0,
              };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAveragedStats['Zone YPRR'] > 0.99 &&
            player.careerAveragedStats['Zone YPRR'] < 1.75 &&
            player.careerAveragedStats['Man YPRR'] > 0.99 &&
            player.careerAveragedStats['Man YPRR'] < 1.5
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(num, player.name, player.careerAveragedStats.YPRR);
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgSoneYPRRPlusManYPRR =
              {
                value: player.careerAveragedStats.YPRR,
                score: 1,
              };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (
            player.careerAveragedStats['Zone YPRR'] > 1.749 &&
            player.careerAveragedStats['Man YPRR'] > 1.499
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(num, player.name, player.careerAveragedStats.YPRR);
            // }
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgSoneYPRRPlusManYPRR =
              {
                value: player.careerAveragedStats.YPRR,
                score: 3,
              };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 3;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that  5 or less (3%) of non hits are above it and > 20% (6 or more) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          // if (
          //   player.careerAveragedStats['Zone YPRR'] > 2.7 &&
          //   player.careerAveragedStats['Man YPRR'] > 2.39
          // ) {
          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,

          //       player.careerAveragedStats['Zone YPRR'],
          //       player.careerAveragedStats['Man YPRR']
          //     );
          //   }

          //
          // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //
          //   calcAllWrProspectsObjects[playerName].careerAvgSoneYPRRPlusManYPRR =
          //     {
          //       value: player.careerAveragedStats.YPRR,
          //       score: 4,
          //     };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 4;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['PPR Points'] < 130) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['PPR Points']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgPPRPoints = {
              value: player.careerAveragedStats['PPR Points'],
              score: 0,
            };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAveragedStats['PPR Points'] > 129.99 &&
            player.careerAveragedStats['PPR Points'] < 160
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['PPR Points']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgPPRPoints = {
              value: player.careerAveragedStats['PPR Points'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (player.careerAveragedStats['PPR Points'] > 159.99) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['PPR Points']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgPPRPoints = {
              value: player.careerAveragedStats['PPR Points'],
              score: 3,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 3;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that < 5% (7 or less) of non hits are above it and > 18% (5) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          //
          // if (player.careerAveragedStats['PPR Points'] > 250) {
          //   // if (player.yearOne.Hit === 'Y') {
          //   //   num = num + 1;
          //   //   console.log(
          //   //     num,
          //   //     player.name,
          //   //     player.careerAveragedStats['PPR Points']
          //   //   );
          //   // }

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[playerName].careerAvgPPRPoints = {
          //     value: player.careerAveragedStats['PPR Points'],
          //     score: 4,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 4;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['Adjusted Yds Per Team Play'] < 1.35) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Adjusted Yds Per Team Play']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgAdjYdsPerTeamPlay = {
              value: player.careerAveragedStats['Adjusted Yds Per Team Play'],
              score: 0,
            };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAveragedStats['Adjusted Yds Per Team Play'] > 1.349 &&
            player.careerAveragedStats['Adjusted Yds Per Team Play'] < 1.65
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Adjusted Yds Per Team Play']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgAdjYdsPerTeamPlay = {
              value: player.careerAveragedStats['Adjusted Yds Per Team Play'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (
            player.careerAveragedStats['Adjusted Yds Per Team Play'] > 1.649
          ) {
            if (player.yearOne.Hit === 'Y') {
              // num = num + 1;
              // console.log(
              //   num,
              //   player.name,
              //   player.careerAveragedStats['Adjusted Yds Per Team Play']
              // );
            }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgAdjYdsPerTeamPlay = {
              value: player.careerAveragedStats['Adjusted Yds Per Team Play'],
              score: 3,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 3;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that < 5% (7 or less) of non hits are above it and > 18% (5) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          // if (player.careerAveragedStats['Adjusted Yds Per Team Play'] > 2.5) {
          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,
          //       player.careerAveragedStats['Adjusted Yds Per Team Play']
          //     );
          //   }

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[playerName].careerAvgAdjYdsPerTeamPlay = {
          //     value: player.careerAveragedStats['Adjusted Yds Per Team Play'],
          //     score: 4,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 4;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats[
              'EPA Per Team Pass Attempt'
            ] < 0.08
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.yearTwoPlusYearThreeAveragedStats[
            //       'EPA Per Team Pass Attempt'
            //     ]
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytEPAPerTeamPassAttempt = {
              value:
                player.yearTwoPlusYearThreeAveragedStats[
                  'EPA Per Team Pass Attempt'
                ],
              score: -5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 5;
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats[
              'EPA Per Team Pass Attempt'
            ] > 0.0799 &&
            player.yearTwoPlusYearThreeAveragedStats[
              'EPA Per Team Pass Attempt'
            ] < 0.125
          ) {
            if (player.yearOne.Hit === 'Y') {
              // num = num + 1;
              // console.log(
              //   num,
              //   player.name,
              //   player.yearTwoPlusYearThreeAveragedStats[
              //     'EPA Per Team Pass Attempt'
              //   ]
              // );
            }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytEPAPerTeamPassAttempt = {
              value:
                player.yearTwoPlusYearThreeAveragedStats[
                  'EPA Per Team Pass Attempt'
                ],
              score: -5,
            };
            // calcAllWrProspectsObjects[playerName].finalScore =
            //   calcAllWrProspectsObjects[playerName].finalScore - 5;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (
            player.yearTwoPlusYearThreeAveragedStats[
              'EPA Per Team Pass Attempt'
            ] > 0.1249
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.yearTwoPlusYearThreeAveragedStats[
            //       'EPA Per Team Pass Attempt'
            //     ]
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytEPAPerTeamPassAttempt = {
              value:
                player.yearTwoPlusYearThreeAveragedStats[
                  'EPA Per Team Pass Attempt'
                ],
              score: 5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 5;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that < 5% (7 or less) of non hits are above it and > 18% (5) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          // if (
          //   player.yearTwoPlusYearThreeAveragedStats[
          //     'EPA Per Team Pass Attempt'
          //   ] > 0.1299 &&
          //   player.careerAveragedStats['Rec Yds per Game'] > 62.5 &&
          //   player.careerAveragedStats.YPRR > 2.1 &&
          //   player.yearTwoPlusYearThreeAveragedStats['Rec TDs per Game'] >
          //     0.59 &&
          //   player.yearOne['Draft Round'] < 3 &&
          //   player.highestContestedTargetPercent < 29
          // ) {
          //   // if (player.yearOne.Hit === 'Y') {
          //   num = num + 1;
          //   console.log(
          //     num,
          //     player.name

          //     // player.yearOne['Draft Round'],
          //     // player.highestContestedTargetPercent
          //   );
          //   // }

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[playerName].ytytEPAPerTeamPassAttempt = {
          //     value:
          //       player.yearTwoPlusYearThreeAveragedStats[
          //         'EPA Per Team Pass Attempt'
          //       ],
          //     score: 8,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 8;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'] < 0.5) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.yearTwoPlusYearThreeAveragedStats['EPA Per Play']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytEPAPerPlay = {
              value: player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'],
              score: -4,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 4;
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'] > 0.49 &&
            player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'] < 0.75
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.yearTwoPlusYearThreeAveragedStats['EPA Per Play']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytEPAPerPlay = {
              value: player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'],
              score: -4,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 4;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (
            player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'] > 0.749
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.yearTwoPlusYearThreeAveragedStats['EPA Per Play']
            //   );
            // }
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytEPAPerPlay = {
              value: player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'],
              score: 5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 5;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that < 5% (7 or less) of non hits are above it and > 18% (5) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          // if (player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'] > 1.05) {
          //   if (player.yearOne.Hit === 'N') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,
          //       player.yearTwoPlusYearThreeAveragedStats['EPA Per Play']
          //     );
          //   }

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[playerName].ytytEPAPerPlay = {
          //     value: player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'],
          //     score: 5,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 5;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['Rec TDs'] < 4.3) {
            // if (player.yearOne['Class'] === '2024') {
            //   // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Rec TDs']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
              value: player.careerAveragedStats['Rec TDs'],
              score: 0,
            };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAveragedStats['Rec TDs'] > 4.29 &&
            player.careerAveragedStats['Rec TDs'] < 5.5
          ) {
            // if (player.yearOne['Class'] === '2024') {
            //   // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Rec TDs']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
              value: player.careerAveragedStats['Rec TDs'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (
            player.careerAveragedStats['Rec TDs'] > 5.49 &&
            player.careerAveragedStats['Rec TDs'] < 10.5
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Rec TDs']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
              value: player.careerAveragedStats['Rec TDs'],
              score: 3,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 3;
          }

          //

          // if (
          //   player.careerAveragedStats['Rec TDs'] > 8.99 &&
          //   player.careerAveragedStats['Rec TDs'] < 10.5
          // ) {
          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,
          //       player.careerAveragedStats['Rec TDs']
          //     );
          //   }
          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
          //     value: player.careerAveragedStats['Rec TDs'],
          //     score: 8,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 8;
          // }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that < 5% (7 or less) of non hits are above it and > 18% (5) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          if (player.careerAveragedStats['Rec TDs'] > 10.5) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Rec TDs']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
              value: player.careerAveragedStats['Rec TDs'],
              score: 10,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 12;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['Rec Yds per Game'] < 50) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Rec Yds per Game']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName]['Rec Yds per Game'] = {
              value: player.careerAveragedStats['Rec Yds per Game'],
              score: 0,
            };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAveragedStats['Rec Yds per Game'] > 49.99 &&
            player.careerAveragedStats['Rec Yds per Game'] < 62.5
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Rec Yds per Game']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName]['Rec Yds per Game'] = {
              value: player.careerAveragedStats['Rec Yds per Game'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (player.careerAveragedStats['Rec Yds per Game'] > 62.49) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     player.careerAveragedStats['Rec Yds per Game']
            //   );
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName]['Rec Yds per Game'] = {
              value: player.careerAveragedStats['Rec Yds per Game'],
              score: 4,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 4;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that < 5% (7 or less) of non hits are above it and > 18% (5) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          // if (player.careerAveragedStats['Rec Yds per Game'] > 85) {
          //   if (player.yearOne.Hit === 'N') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,
          //       player.careerAveragedStats['Rec Yds per Game']
          //     );
          //   }

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
          //     value: player.careerAveragedStats['Rec Yds per Game'],
          //     score: 6,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 6;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////

          // lower bound
          //
          // the highest mark that has only two of the hits sample below this number
          // two players from Hit sample in this group in initial sample
          //
          if (player.careerAvgEPAPerGame < 3.8461) {
            if (player.yearOne.Hit === 'Y') {
              // num = num + 1;
              // console.log(num, player.name, player.careerAvgEPAPerGame);
            }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgEPAPerGame = {
              value: player.careerAvgEPAPerGame,
              score: 0,
            };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAvgEPAPerGame > 3.846 &&
            player.careerAvgEPAPerGame < 5
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(num, player.name, player.careerAvgEPAPerGame);
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgEPAPerGame = {
              value: player.careerAvgEPAPerGame,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (player.careerAvgEPAPerGame > 4.99) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(num, player.name, player.careerAvgEPAPerGame);
            // }

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgEPAPerGame = {
              value: player.careerAvgEPAPerGame,
              score: 4,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 4;
          }

          //
          // upper bound
          //
          // not every metric will have an upper bound
          // only have one if there is a point that < 5% (7 or less) of non hits are above it and > 18% (5) of hits are above it
          // if the above conditions can't be met then there isn't enough signal to scoring very highly in it to include

          // if (player.careerAvgEPAPerGame > 6.5) {
          //   if (player.yearOne.Hit === 'N') {
          //     num = num + 1;
          //     console.log(num, player.name, player.careerAvgEPAPerGame);
          //   }

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[playerName].careerAvgEPAPerGame = {
          //     value: player.careerAvgEPAPerGame,
          //     score: 6,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 6;
          // }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // starting first year production bonuses

          let yearOneYPRR = +player.yearOne.YPRR;

          if (yearOneYPRR > 3.5 && player.yearOne.RR > 90) {
            // if (player.yearOne.Hit === 'Y') {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   yearOneYPRR,
            //   player.yearOne.RR
            //   // player.yearOne['Draft Round']
            // );
            // }

            calcAllWrProspectsObjects[playerName].YearOneYPRRBonus = {
              value: yearOneYPRR,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          //

          if (+player.yearOne['YAC/Rec'] > 9.6 && player.yearOne.RR > 100) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,

            //     player.yearOne.RR
            //     // player.yearOne['Draft Round']
            //   );
            // }

            calcAllWrProspectsObjects[playerName].YearOneYacPerRecBonus = {
              value: +player.yearOne['YAC/Rec'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          if (player.yearOne.Height < 71.1) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(num, player.name, player.yearOne.Height);
            // }
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].heightAdjustment = {
              value: player.yearOne.Height,
              score: -0.3,
            };
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.3;

            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore -
              adjustmentValue;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          const curYear = new Date().getFullYear();

          if (player.yearOne['Power 5'] === 'N') {
            if (player.yearOne.Conference !== 'FBS Independents') {
              // num = num + 1;
              // console.log(num, player.name, player.yearOne['Draft Round']);
              //

              if (
                player.highestContestedTargetPercent < 10 &&
                player.yearOne['Draft Round'] < 4 &&
                !player.yearFour
              ) {
                // num = num + 1;
                // console.log(
                //   num,
                //   player.name,
                //   player.yearOne.Conference,
                //   player.yearOne['Draft Round'],
                //   player.highestContestedTargetPercent
                // );
              }

              if (
                (player.yearOne.Conference === 'American Athletic' &&
                  player.highestContestedTargetPercent > 10) ||
                player.yearOne['Draft Round'] > 3 ||
                (player.yearOne.Conference !== 'American Athletic' &&
                  player.yearOne['Draft Round'] > 3) ||
                player.highestContestedTargetPercent > 10
              ) {
                // num = num + 1;
                // console.log(
                //   num,
                //   player.name,
                //   player.yearOne.Conference,
                //   player.yearOne['Draft Round'],

                //   player.highestContestedTargetPercent
                // );

                //
                calcAllWrProspectsObjects[
                  playerName
                ].yearOneConferenceAdjustment = {
                  value: `${player.yearOne.Conference}-non-early declare`,
                  score: -0.3,
                };
                let adjustmentValue =
                  calcAllWrProspectsObjects[playerName].finalScore * 0.8;
                calcAllWrProspectsObjects[playerName].finalScore =
                  calcAllWrProspectsObjects[playerName].finalScore -
                  adjustmentValue;
              }
            }
          }

          if (
            player.yearOne.Conference === 'Big 12' ||
            player.yearOne.Conference === 'ACC'
          ) {
            // //
            // if (player.yearOne.Hit === 'N') {
            //   if (!player.yearFour) {
            //     num = num + 1;
            //     console.log(num, player.name);
            //   }
            // }
            //
            if (player.yearOne.Conference === 'Big 12') {
              if (player.yearFour) {
                // num = num + 1;
                // console.log(num, player.name);

                calcAllWrProspectsObjects[
                  playerName
                ].yearOneConferenceAdjustment = {
                  value: `${player.yearOne.Conference}-non-early declare`,
                  score: -0.3,
                };
                let adjustmentValue =
                  calcAllWrProspectsObjects[playerName].finalScore * 0.6;
                calcAllWrProspectsObjects[playerName].finalScore =
                  calcAllWrProspectsObjects[playerName].finalScore -
                  adjustmentValue;
              }
            }

            //
            // if player had a year 4
            if (player.yearOne.Conference === 'ACC') {
              if (player.yearFour) {
                // num = num + 1;
                // console.log(num, player.name);

                calcAllWrProspectsObjects[
                  playerName
                ].yearOneConferenceAdjustment = {
                  value: `${player.yearOne.Conference}-non-early declare`,
                  score: -0.3,
                };
                let adjustmentValue =
                  calcAllWrProspectsObjects[playerName].finalScore * 0.35;
                calcAllWrProspectsObjects[playerName].finalScore =
                  calcAllWrProspectsObjects[playerName].finalScore -
                  adjustmentValue;
              }
            }

            // if no year four
            if (!player.yearFour) {
              // num = num + 1;
              // console.log(num, player.name);
              if (player.yearThree) {
                if (player.yearThree['Year out of HS'] > 4) {
                  // num = num + 1;
                  // console.log(num, player.name);
                  //
                  calcAllWrProspectsObjects[
                    playerName
                  ].yearOneConferenceAdjustment = {
                    value: `${player.yearOne.Conference}-non-early declare`,
                    score: -0.3,
                  };

                  if (player.yearOne.Conference === 'ACC') {
                    let adjustmentValue =
                      calcAllWrProspectsObjects[playerName].finalScore * 0.35;
                    calcAllWrProspectsObjects[playerName].finalScore =
                      calcAllWrProspectsObjects[playerName].finalScore -
                      adjustmentValue;
                  }

                  if (player.yearOne.Conference === 'Big 12') {
                    let adjustmentValue =
                      calcAllWrProspectsObjects[playerName].finalScore * 0.5;
                    calcAllWrProspectsObjects[playerName].finalScore =
                      calcAllWrProspectsObjects[playerName].finalScore -
                      adjustmentValue;
                  }
                }
              }
              //
              if (player.yearThree) {
                if (player.yearThree['Year out of HS'] < 5) {
                  calcAllWrProspectsObjects[
                    playerName
                  ].yearOneConferenceAdjustment = {
                    value: `${player.yearOne.Conference}-early declare`,
                    score: -0.2,
                  };

                  if (player.highestContestedTargetPercent < 20.6) {
                    let adjustmentValue =
                      calcAllWrProspectsObjects[playerName].finalScore * 0.25;
                    calcAllWrProspectsObjects[playerName].finalScore =
                      calcAllWrProspectsObjects[playerName].finalScore -
                      adjustmentValue;
                  }

                  if (player.yearOne.Conference === 'Big 12') {
                    if (player.highestContestedTargetPercent > 20.59) {
                      let adjustmentValue =
                        calcAllWrProspectsObjects[playerName].finalScore * 0.5;
                      calcAllWrProspectsObjects[playerName].finalScore =
                        calcAllWrProspectsObjects[playerName].finalScore -
                        adjustmentValue;
                    }
                  }
                }
              }
              if (!player.yearThree) {
                calcAllWrProspectsObjects[
                  playerName
                ].yearOneConferenceAdjustment = {
                  value: `${player.yearOne.Conference}-early declare`,
                  score: -0.2,
                };

                let adjustmentValue =
                  calcAllWrProspectsObjects[playerName].finalScore * 0.25;
                calcAllWrProspectsObjects[playerName].finalScore =
                  calcAllWrProspectsObjects[playerName].finalScore -
                  adjustmentValue;
              }
            }
          }

          if (
            (player.yearOne && player.yearOne.Conference === 'SEC') ||
            player.yearOne.Conference === 'Big Ten' ||
            player.yearOne.Conference === 'Pac-12'
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   if (!player.yearFour) {
            //     num = num + 1;
            //     console.log(num, player.name);
            //   }
            // }
            //

            // if player had a year 4
            if (player.yearFour) {
              // num = num + 1;
              // console.log(num, player.name);
              //
              calcAllWrProspectsObjects[
                playerName
              ].yearOneConferenceAdjustment = {
                value: `${player.yearOne.Conference}-non-early declare`,
                score: 0.05,
              };

              let adjustmentValue =
                calcAllWrProspectsObjects[playerName].finalScore * 0.15;
              calcAllWrProspectsObjects[playerName].finalScore =
                calcAllWrProspectsObjects[playerName].finalScore -
                adjustmentValue;
            }
            // if no year four
            if (!player.yearFour) {
              // num = num + 1;
              // console.log(num, player.name);
              if (player.yearThree) {
                if (player.yearThree['Year out of HS'] > 4) {
                  // num = num + 1;
                  // console.log(num, player.name);
                  //
                  calcAllWrProspectsObjects[
                    playerName
                  ].yearOneConferenceAdjustment = {
                    value: `${player.yearOne.Conference}-non-early declare`,
                    score: 0,
                  };

                  let adjustmentValue =
                    calcAllWrProspectsObjects[playerName].finalScore * 0.15;
                  calcAllWrProspectsObjects[playerName].finalScore =
                    calcAllWrProspectsObjects[playerName].finalScore -
                    adjustmentValue;
                }
              }
              //
              if (player.yearThree) {
                if (player.yearThree['Year out of HS'] < 5) {
                  // num = num + 1;
                  // console.log(num, player.name);
                  calcAllWrProspectsObjects[
                    playerName
                  ].yearOneConferenceAdjustment = {
                    value: `${player.yearOne.Conference}-early declare`,
                    score: 0,
                  };

                  let adjustmentValue =
                    calcAllWrProspectsObjects[playerName].finalScore * 0.1;
                  calcAllWrProspectsObjects[playerName].finalScore =
                    calcAllWrProspectsObjects[playerName].finalScore -
                    adjustmentValue;
                }
              }
              if (!player.yearThree) {
                // num = num + 1;
                // console.log(num, player.name);
                calcAllWrProspectsObjects[
                  playerName
                ].yearOneConferenceAdjustment = {
                  value: `${player.yearOne.Conference}-early declare`,
                  score: 0,
                };

                let adjustmentValue =
                  calcAllWrProspectsObjects[playerName].finalScore * 0.1;
                calcAllWrProspectsObjects[playerName].finalScore =
                  calcAllWrProspectsObjects[playerName].finalScore -
                  adjustmentValue;
              }
            }

            //
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          let projectedDraftRound = +player.yearOne['Draft Round'];
          let projectedDraftRoundMinusOne = 0;
          let projectedDraftRoundPlusOne = 0;

          if (+player.yearOne['Class'] === +curYear) {
            // console.log(+player.yearOne['Draft Round']);

            if (projectedDraftRound > 1) {
              projectedDraftRoundMinusOne = +projectedDraftRound - 1;
            }

            projectedDraftRoundPlusOne = +projectedDraftRound + 1;
          }

          //

          // console.log(+player.yearOne['Class'], +curYear);

          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   projectedDraftRound,
            //   projectedDraftRoundMinusOne,
            //   projectedDraftRoundPlusOne
            // );
          }
          //

          calcAllWrProspectsObjects[playerName].preDraftCapitalScore =
            calcAllWrProspectsObjects[playerName].finalScore;

          if (+player.yearOne['Class'] === +curYear) {
            calcAllWrProspectsObjects[
              playerName
            ].projectedDraftRoundMinusOneScore =
              +calcAllWrProspectsObjects[
                playerName
              ].preDraftCapitalScore.toFixed(2);

            calcAllWrProspectsObjects[
              playerName
            ].projectedDraftRoundPlusOneScore =
              +calcAllWrProspectsObjects[
                playerName
              ].preDraftCapitalScore.toFixed(2);

            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundMinusOneScore
            // );
          }

          if (player.yearOne['Power 5'] === 'N') {
            if (player.yearOne.Conference !== 'FBS Independents') {
              if (
                (player.yearOne.Conference === 'American Athletic' &&
                  player.highestContestedTargetPercent > 10) ||
                player.yearOne['Draft Round'] > 3 ||
                (player.yearOne.Conference !== 'American Athletic' &&
                  player.yearOne['Draft Round'] > 3) ||
                player.highestContestedTargetPercent > 10
              ) {
                if (+player.yearOne['Draft Round'] === 4) {
                  // console.log(player.name, player.yearOne['Draft Round']);
                  calcAllWrProspectsObjects[
                    playerName
                  ].projectedDraftRoundMinusOneScore =
                    calcAllWrProspectsObjects[playerName]
                      .projectedDraftRoundMinusOneScore * 5;
                }
              }
            }
          }

          ///////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////
          //
          //        start of draft capital section
          //
          ////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////

          ///////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////
          //
          //        start draft capital adjustment for
          //      highestContestedTargetPercent between 25% and 27%
          //
          ////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////

          // if (
          //   +player.highestContestedTargetPercent > 24.99 &&
          //   +player.highestContestedTargetPercent < 27
          // ) {
          //   //
          //   //
          //   let postYearOneCTP = +player.yearOne['Contested Target %'].slice(
          //     0,
          //     -1
          //   );

          //   if (player.yearTwo) {
          //     postYearOneCTP = +player.yearTwo['Contested Target %'].slice(
          //       0,
          //       -1
          //     );
          //   }

          //   if (player.yearThree) {
          //     postYearOneCTP =
          //       +player.yearTwo['Contested Target %'].slice(0, -1) +
          //       +player.yearThree['Contested Target %'].slice(0, -1) / 2;
          //   }

          //   // if (player.yearOne.Hit === 'N') {
          //   //   num = num + 1;
          //   //   console.log(
          //   //     num,
          //   //     player.name,
          //   //     player.yearOne['Draft Round'],
          //   //     calcAllWrProspectsObjects[playerName].finalScore,
          //   //     // +player.highestContestedTargetPercent
          //   //     postYearOneCTP
          //   //   );
          //   // }

          //   // num = num + 1;
          //   // console.log(num, player.name, player.highestContestedTargetPercent);

          //   //
          //   //

          //   //
          //   //     round 1

          //   if (+player.yearOne['Draft Round'] === 2) {
          //     // if (player.yearOne.Hit === 'Y') {
          //     // num = num + 1;
          //     // console.log(
          //     //   num,
          //     //   player.name,
          //     //   player.highestContestedTargetPercent
          //     // );
          //     // }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne === 1) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.15;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //

          //   //
          //   //below is for final score no projected draft capital
          //   if (
          //     player.yearOne['Draft Round'] > 0 &&
          //     player.yearOne['Draft Round'] < 2
          //   ) {
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.15;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }

          //   //
          //   //
          //   // round 2
          //   //
          //   if (+player.yearOne['Draft Round'] === 2) {
          //     // if (player.yearOne.Hit === 'Y') {
          //     // num = num + 1;
          //     // console.log(
          //     //   num,
          //     //   player.name,
          //     //   player.highestContestedTargetPercent
          //     // );
          //     // }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 2) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.25;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 2) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.25;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //

          //     //
          //     //below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 1 &&
          //       player.yearOne['Draft Round'] < 3
          //     ) {
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.25;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   //
          //   //               round 3
          //   //
          //   //
          //   //

          //   // if (+player.yearOne['Draft Round'] > 2) {
          //   //   // if (player.yearOne.Hit === 'Y') {
          //   //   num = num + 1;
          //   //   console.log(
          //   //     num,
          //   //     player.name,
          //   //     player.highestContestedTargetPercent
          //   //   );
          //   // }
          //   //

          //   // if third round pick
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundPlusOne === 3) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.5;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne === 3) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundMinusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.5;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }

          //   // below is for final score no projected draft capital
          //   if (
          //     +player.yearOne['Draft Round'] > 2 &&
          //     +player.yearOne['Draft Round'] < 4
          //   ) {
          //     // if (player.yearOne.Hit === 'Y') {
          //     //   num = num + 1;
          //     //   console.log(
          //     //     num,
          //     //     player.name,
          //     //     calcAllWrProspectsObjects[playerName].finalScore
          //     //   );
          //     // }
          //     //
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.5;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }

          //   // if fourth round pick
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundPlusOne === 4) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.6;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne === 4) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.6;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   // below is for final score no projected draft capital
          //   if (
          //     +player.yearOne['Draft Round'] > 3 &&
          //     +player.yearOne['Draft Round'] < 5
          //   ) {
          //     // if (player.yearOne.Hit === 'N') {
          //     //   num = num + 1;
          //     //   console.log(num, player.name);
          //     // }
          //     //
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.6;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }

          //   // if fifth round pick
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundPlusOne === 5) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.7;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne === 5) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.7;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   // below is for final score no projected draft capital
          //   if (
          //     player.yearOne['Draft Round'] > 4 &&
          //     player.yearOne['Draft Round'] < 6
          //   ) {
          //     // if (player.yearOne.Hit === 'N') {
          //     //   num = num + 1;
          //     //   console.log(
          //     //     num,
          //     //     player.name,
          //     //     calcAllWrProspectsObjects[playerName].finalScore
          //     //   );
          //     // }
          //     //
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.7;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }
          //   //
          //   // if later than 5th round pick
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundPlusOne > 5) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.9;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne > 5) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.9;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   // below is for final score no projected draft capital
          //   if (player.yearOne['Draft Round'] > 5) {
          //     // if (player.yearOne.Hit === 'N') {
          //     //   num = num + 1;
          //     //   console.log(num, player.name);
          //     // }
          //     //
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.9;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }
          // }

          // ///////////////////////////////////////////////////////////
          // /////////////////////////////////////////////////////////////
          // ////////////////////////////////////////////////////////////
          // //
          // //        end draft capital adjustment for
          // //      highestContestedTargetPercent between 25% and 27%
          // //
          // ////////////////////////////////////////////////////////////////
          // //////////////////////////////////////////////////////////////

          // ///////////////////////////////////////////////////////////
          // /////////////////////////////////////////////////////////////
          // ////////////////////////////////////////////////////////////
          // //
          // //        start draft capital adjustment for
          // //      highestContestedTargetPercent between 27% and 33.5%
          // //
          // ////////////////////////////////////////////////////////////////
          // //////////////////////////////////////////////////////////////

          // if (
          //   player.highestContestedTargetPercent > 26.99 &&
          //   player.highestContestedTargetPercent < 33.5
          // ) {
          //   //
          //   //

          //   let postYearOneCTP = +player.yearOne['Contested Target %'].slice(
          //     0,
          //     -1
          //   );

          //   if (player.yearTwo) {
          //     postYearOneCTP = +player.yearTwo['Contested Target %'].slice(
          //       0,
          //       -1
          //     );
          //   }

          //   if (player.yearThree) {
          //     postYearOneCTP =
          //       +player.yearTwo['Contested Target %'].slice(0, -1) +
          //       +player.yearThree['Contested Target %'].slice(0, -1) / 2;
          //   }

          //   if (player.yearOne.Hit === 'Y') {
          //     // num = num + 1;
          //     // console.log(
          //     //   num,
          //     //   player.name,
          //     //   player.yearOne['Draft Round'],
          //     //   calcAllWrProspectsObjects[playerName].finalScore,
          //     //   postYearOneCTP
          //     // );
          //   }

          //   //
          //   // if (+player.yearOne['Draft Round'] < 3) {
          //   //   // if (player.yearOne.Hit === 'N') {
          //   //   num = num + 1;
          //   //   console.log(
          //   //     num,
          //   //     player.name,
          //   //     player.yearOne['Draft Round'],
          //   //     calcAllWrProspectsObjects[playerName].finalScore,
          //   //     '  ',
          //   //     player.highestContestedTargetPercent
          //   //   );
          //   //   // }
          //   // }

          //   // round 1
          //   //
          //   if (+player.yearOne['Draft Round'] === 1) {
          //     // if (player.yearOne.Hit === 'N') {
          //     // num = num + 1;
          //     // console.log(
          //     //   num,
          //     //   player.name,
          //     //   player.highestContestedTargetPercent
          //     // );
          //   }
          //   //

          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (+projectedDraftRoundMinusOne === 1) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.6;
          //       if (adjustmentValue > 20) {
          //         adjustmentValue = 20;
          //       }
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //

          //   //
          //   //below is for final score no projected draft capital
          //   if (
          //     +player.yearOne['Draft Round'] > 0 &&
          //     +player.yearOne['Draft Round'] < 2
          //   ) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName].finalScore,
          //     //   projectedDraftRoundPlusOne
          //     // );
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.6;
          //     if (adjustmentValue > 20) {
          //       adjustmentValue = 20;
          //     }
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }

          //   //
          //   //
          //   // round 2
          //   //
          //   //
          //   if (+player.yearOne['Draft Round'] === 2) {
          //     // if (player.yearOne.Hit === 'Y') {
          //     //   num = num + 1;
          //     //   console.log(
          //     //     num,
          //     //     player.name,
          //     //     player.highestContestedTargetPercent,
          //     //     calcAllWrProspectsObjects[playerName].finalScore
          //     //   );
          //     // }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (+projectedDraftRoundPlusOne === 2) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.65;
          //       if (adjustmentValue > 20) {
          //         adjustmentValue = 20;
          //       }
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (+projectedDraftRoundMinusOne === 2) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.65;
          //       if (adjustmentValue > 20) {
          //         adjustmentValue = 20;
          //       }
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //

          //   //
          //   //below is for final score no projected draft capital
          //   if (
          //     player.yearOne['Draft Round'] > 1 &&
          //     player.yearOne['Draft Round'] < 3
          //   ) {
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.65;
          //     if (adjustmentValue > 20) {
          //       adjustmentValue = 20;
          //     }
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }

          //   //               round 3
          //   //
          //   //
          //   //

          //   // if (+player.yearOne['Draft Round'] > 2) {
          //   //   // if (player.yearOne.Hit === 'Y') {
          //   //   num = num + 1;
          //   //   console.log(
          //   //     num,
          //   //     player.name,
          //   //     player.highestContestedTargetPercent
          //   //   );
          //   // }
          //   //

          //   // if third round pick
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundPlusOne === 3) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.7;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne === 3) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundMinusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.7;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }

          //   // below is for final score no projected draft capital
          //   if (
          //     +player.yearOne['Draft Round'] > 2 &&
          //     +player.yearOne['Draft Round'] < 4
          //   ) {
          //     // if (player.yearOne.Hit === 'N') {
          //     //   num = num + 1;
          //     //   console.log(
          //     //     num,
          //     //     player.name,
          //     //     calcAllWrProspectsObjects[playerName].finalScore
          //     //   );
          //     // }
          //     //
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.7;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }

          //   // if fourth round pick
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundPlusOne === 4) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.8;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne === 4) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.8;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   // below is for final score no projected draft capital
          //   if (
          //     +player.yearOne['Draft Round'] > 3 &&
          //     +player.yearOne['Draft Round'] < 5
          //   ) {
          //     // if (player.yearOne.Hit === 'Y') {
          //     //   num = num + 1;
          //     //   console.log(num, player.name);
          //     // }
          //     //
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.8;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }

          //   // if fifth round pick
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundPlusOne === 5) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.8;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne === 5) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.8;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   // below is for final score no projected draft capital
          //   if (
          //     player.yearOne['Draft Round'] > 4 &&
          //     player.yearOne['Draft Round'] < 6
          //   ) {
          //     // if (player.yearOne.Hit === 'Y') {
          //     //   num = num + 1;
          //     //   console.log(
          //     //     num,
          //     //     player.name,
          //     //     calcAllWrProspectsObjects[playerName].finalScore
          //     //   );
          //     // }
          //     //
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.8;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }
          //   //
          //   // if later than 5th round pick
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundPlusOne > 5) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore * 0.9;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundPlusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundPlusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   //
          //   if (+player.yearOne['Class'] === +curYear) {
          //     // console.log(
          //     //   player.name,
          //     //   calcAllWrProspectsObjects[playerName]
          //     //     .projectedDraftRoundPlusOneScore
          //     // );
          //     if (projectedDraftRoundMinusOne > 5) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore * 0.9;
          //       calcAllWrProspectsObjects[
          //         playerName
          //       ].projectedDraftRoundMinusOneScore = (
          //         calcAllWrProspectsObjects[playerName]
          //           .projectedDraftRoundMinusOneScore - adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          //   // below is for final score no projected draft capital
          //   if (player.yearOne['Draft Round'] > 5) {
          //     // if (player.yearOne.Hit === 'Y') {
          //     //   num = num + 1;
          //     //   console.log(num, player.name);
          //     // }
          //     //
          //     let adjustmentValue =
          //       calcAllWrProspectsObjects[playerName].finalScore * 0.9;
          //     calcAllWrProspectsObjects[playerName].finalScore = (
          //       calcAllWrProspectsObjects[playerName].finalScore -
          //       adjustmentValue
          //     ).toFixed(2);
          //   }
          // }

          // /////////////////////////////////////////////////////////////
          // ////////////////////////////////////////////////////////////
          // //
          // //        end draft capital adjustment for
          // //      highestContestedTargetPercent between 27% and 33.5%
          // //
          // ////////////////////////////////////////////////////////////////
          // //////////////////////////////////////////////////////////////

          // ///////////////////////////////////////////////////////////
          // /////////////////////////////////////////////////////////////
          // ////////////////////////////////////////////////////////////
          // //
          // //        start draft capital adjustment for
          // //      highestContestedTargetPercent greater than 33.5%
          // //
          // ////////////////////////////////////////////////////////////////
          // //////////////////////////////////////////////////////////////

          // if (player.highestContestedTargetPercent > 33.5) {
          //   let postYearOneCTP =
          //     +player.yearTwo['Contested Target %'].slice(0, -1) +
          //     +player.yearThree['Contested Target %'].slice(0, -1) / 2;
          //   //
          //   //

          //   //////////////////////////////////////////////
          //   //////////////////////////////////////////////
          //   //             if postYearOneCTP < 29.75
          //   //////////////////////////////////////////////
          //   //////////////////////////////////////////////

          //   if (postYearOneCTP < 29.75) {
          //     // if (player.yearOne.Hit === 'Y') {
          //     //   num = num + 1;
          //     //   console.log(
          //     //     num,
          //     //     player.name,
          //     //     calcAllWrProspectsObjects[playerName].finalScore,
          //     //     '  ',
          //     //     player.yearOne['Draft Round'],
          //     //     postYearOneCTP
          //     //   );
          //     // }

          //     //
          //     //

          //     // if first round pick

          //     if (player.yearOne['Draft Round'] === 1) {
          //       // if (player.yearOne.Hit === 'N') {
          //       //   num = num + 1;
          //       //   console.log(num, player.name);
          //       // }
          //       //
          //       if (+player.yearOne['Class'] === +curYear) {
          //         if (projectedDraftRoundMinusOne === 1) {
          //           // console.log(
          //           //   player.name,
          //           //   calcAllWrProspectsObjects[playerName]
          //           //     .projectedDraftRoundPlusOneScore
          //           // );
          //           let adjustmentValue =
          //             calcAllWrProspectsObjects[playerName]
          //               .projectedDraftRoundMinusOneScore * 0.25;
          //           calcAllWrProspectsObjects[
          //             playerName
          //           ].projectedDraftRoundMinusOneScore = (
          //             calcAllWrProspectsObjects[playerName]
          //               .projectedDraftRoundMinusOneScore - adjustmentValue
          //           ).toFixed(2);
          //         }
          //       }

          //       //
          //       //below is for final score no projected draft capital
          //       if (
          //         player.yearOne['Draft Round'] > 0 &&
          //         player.yearOne['Draft Round'] < 2
          //       ) {
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName].finalScore * 0.25;
          //         calcAllWrProspectsObjects[playerName].finalScore = (
          //           calcAllWrProspectsObjects[playerName].finalScore -
          //           adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }

          //     // if second round pick
          //     //

          //     // if (player.yearOne.Hit === 'N') {
          //     //   num = num + 1;
          //     //   console.log(num, player.name);
          //     // }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 2) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.3;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 2) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.3;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //

          //     //
          //     //below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 1 &&
          //       player.yearOne['Draft Round'] < 3
          //     ) {
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.3;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }

          //     // if third round pick
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 3) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.35;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 3) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundMinusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.35;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }

          //     // below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 2 &&
          //       player.yearOne['Draft Round'] < 4
          //     ) {
          //       // if (player.yearOne.Hit === 'Y') {
          //       //   num = num + 1;
          //       //   console.log(num, player.name);
          //       // }
          //       //
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.35;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }

          //     // if fourth round pick
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 4) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.4;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 4) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.4;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     // below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 3 &&
          //       player.yearOne['Draft Round'] < 5
          //     ) {
          //       // if (player.yearOne.Hit === 'Y') {
          //       //   num = num + 1;
          //       //   console.log(num, player.name);
          //       // }
          //       //
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.4;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }

          //     // if fifth round pick
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 5) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.45;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 5) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.45;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     // below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 4 &&
          //       player.yearOne['Draft Round'] < 6
          //     ) {
          //       // if (player.yearOne.Hit === 'N') {
          //       //   num = num + 1;
          //       //   console.log(
          //       //     num,
          //       //     player.name,
          //       //     calcAllWrProspectsObjects[playerName].finalScore
          //       //   );
          //       // }
          //       //
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.45;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }
          //     //
          //     // if later than 5th round pick
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne > 5) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.8;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne > 5) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.8;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     // below is for final score no projected draft capital
          //     if (player.yearOne['Draft Round'] > 5) {
          //       // if (player.yearOne.Hit === 'Y') {
          //       //   num = num + 1;
          //       //   console.log(num, player.name);
          //       // }
          //       //
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.8;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }

          //   //////////////////////////////////////////////
          //   //////////////////////////////////////////////
          //   //             if postYearOneCTP > 29.75
          //   //////////////////////////////////////////////
          //   //////////////////////////////////////////////

          //   if (postYearOneCTP > 29.749) {
          //     if (player.yearOne.Hit === 'Y') {
          //       num = num + 1;
          //       console.log(
          //         num,
          //         player.name,
          //         calcAllWrProspectsObjects[playerName].finalScore,
          //         '  ',
          //         player.yearOne['Draft Round'],
          //         postYearOneCTP
          //       );
          //     }

          //     //
          //     //

          //     // if first round pick

          //     if (player.yearOne['Draft Round'] === 1) {
          //       // if (player.yearOne.Hit === 'N') {
          //       //   num = num + 1;
          //       //   console.log(num, player.name);
          //       // }
          //       //
          //       if (+player.yearOne['Class'] === +curYear) {
          //         if (projectedDraftRoundMinusOne === 1) {
          //           // console.log(
          //           //   player.name,
          //           //   calcAllWrProspectsObjects[playerName]
          //           //     .projectedDraftRoundPlusOneScore
          //           // );
          //           let adjustmentValue =
          //             calcAllWrProspectsObjects[playerName]
          //               .projectedDraftRoundMinusOneScore * 0.7;
          //           calcAllWrProspectsObjects[
          //             playerName
          //           ].projectedDraftRoundMinusOneScore = (
          //             calcAllWrProspectsObjects[playerName]
          //               .projectedDraftRoundMinusOneScore - adjustmentValue
          //           ).toFixed(2);
          //         }
          //       }

          //       //
          //       //below is for final score no projected draft capital
          //       if (
          //         player.yearOne['Draft Round'] > 0 &&
          //         player.yearOne['Draft Round'] < 2
          //       ) {
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName].finalScore * 0.7;
          //         calcAllWrProspectsObjects[playerName].finalScore = (
          //           calcAllWrProspectsObjects[playerName].finalScore -
          //           adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }

          //     // if second round pick
          //     //

          //     // if (player.yearOne.Hit === 'N') {
          //     //   num = num + 1;
          //     //   console.log(num, player.name);
          //     // }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 2) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.75;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 2) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.75;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //

          //     //
          //     //below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 1 &&
          //       player.yearOne['Draft Round'] < 3
          //     ) {
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.75;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }

          //     // if third round pick
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 3) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.8;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 3) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundMinusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.8;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }

          //     // below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 2 &&
          //       player.yearOne['Draft Round'] < 4
          //     ) {
          //       // if (player.yearOne.Hit === 'Y') {
          //       //   num = num + 1;
          //       //   console.log(num, player.name);
          //       // }
          //       //
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.8;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }

          //     // if fourth round pick
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 4) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.85;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 4) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.85;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     // below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 3 &&
          //       player.yearOne['Draft Round'] < 5
          //     ) {
          //       // if (player.yearOne.Hit === 'Y') {
          //       //   num = num + 1;
          //       //   console.log(num, player.name);
          //       // }
          //       //
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.85;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }

          //     // if fifth round pick
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne === 5) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.9;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne === 5) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.9;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     // below is for final score no projected draft capital
          //     if (
          //       player.yearOne['Draft Round'] > 4 &&
          //       player.yearOne['Draft Round'] < 6
          //     ) {
          //       // if (player.yearOne.Hit === 'N') {
          //       //   num = num + 1;
          //       //   console.log(
          //       //     num,
          //       //     player.name,
          //       //     calcAllWrProspectsObjects[playerName].finalScore
          //       //   );
          //       // }
          //       //
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.9;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }
          //     //
          //     // if later than 5th round pick
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundPlusOne > 5) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore * 0.8;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundPlusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundPlusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     //
          //     if (+player.yearOne['Class'] === +curYear) {
          //       // console.log(
          //       //   player.name,
          //       //   calcAllWrProspectsObjects[playerName]
          //       //     .projectedDraftRoundPlusOneScore
          //       // );
          //       if (projectedDraftRoundMinusOne > 5) {
          //         // console.log(
          //         //   player.name,
          //         //   calcAllWrProspectsObjects[playerName]
          //         //     .projectedDraftRoundPlusOneScore
          //         // );
          //         let adjustmentValue =
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore * 0.9;
          //         calcAllWrProspectsObjects[
          //           playerName
          //         ].projectedDraftRoundMinusOneScore = (
          //           calcAllWrProspectsObjects[playerName]
          //             .projectedDraftRoundMinusOneScore - adjustmentValue
          //         ).toFixed(2);
          //       }
          //     }
          //     // below is for final score no projected draft capital
          //     if (player.yearOne['Draft Round'] > 5) {
          //       // if (player.yearOne.Hit === 'Y') {
          //       //   num = num + 1;
          //       //   console.log(num, player.name);
          //       // }
          //       //
          //       let adjustmentValue =
          //         calcAllWrProspectsObjects[playerName].finalScore * 0.9;
          //       calcAllWrProspectsObjects[playerName].finalScore = (
          //         calcAllWrProspectsObjects[playerName].finalScore -
          //         adjustmentValue
          //       ).toFixed(2);
          //     }
          //   }
          // }

          // ///////////////////////////////////////////////////////////
          // /////////////////////////////////////////////////////////////
          // ////////////////////////////////////////////////////////////
          // //
          // //        end draft capital adjustment for
          // //      highestContestedTargetPercent greater than 33.5%
          // //
          // ////////////////////////////////////////////////////////////////
          // //////////////////////////////////////////////////////////////

          // ///////////////////////////////////////////////////////////
          // /////////////////////////////////////////////////////////////
          // ////////////////////////////////////////////////////////////
          // //
          // //        start draft capital adjustment for
          // //      highestContestedTargetPercent below 25%
          // //
          // ////////////////////////////////////////////////////////////////
          // //////////////////////////////////////////////////////////////

          // if (player.highestContestedTargetPercent < 25.01) {
          // if first round pick

          if (player.yearOne['Draft Round'] === 1) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(num, player.name);
            // }
            //

            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore.toFixed(2);
          }

          // if second round pick
          //

          // if (player.yearOne.Hit === 'N') {
          //   num = num + 1;
          //   console.log(num, player.name);
          // }
          //
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundPlusOne === 2) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore * 0.25;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundPlusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          //
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundMinusOne === 2) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore * 0.25;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundMinusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          //

          //
          //below is for final score no projected draft capital
          if (
            player.yearOne['Draft Round'] > 1 &&
            player.yearOne['Draft Round'] < 3
          ) {
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.25;
            // if (+player.yearOne['Class'] === +curYear) {
            //   if (adjustmentValue < 0) {
            //     console.log(
            //       player.name,
            //       calcAllWrProspectsObjects[playerName].finalScore,
            //       adjustmentValue
            //     );
            //   }
            // }
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
          }

          // if third round pick
          //
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundPlusOne === 3) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore * 0.3;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundPlusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          //
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundMinusOne === 3) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundMinusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore * 0.3;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundMinusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }

          // below is for final score no projected draft capital
          if (
            player.yearOne['Draft Round'] > 2 &&
            player.yearOne['Draft Round'] < 4
          ) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(num, player.name);
            // }
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.3;
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
          }

          // if fourth round pick
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundPlusOne === 4) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore * 0.3;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundPlusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          //
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundMinusOne === 4) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore * 0.3;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundMinusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          // below is for final score no projected draft capital
          if (
            player.yearOne['Draft Round'] > 3 &&
            player.yearOne['Draft Round'] < 5
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(num, player.name);
            // }
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.3;
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
          }

          // if fifth round pick
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundPlusOne === 5) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore * 0.45;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundPlusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          //
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundMinusOne === 5) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore * 0.45;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundMinusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          // below is for final score no projected draft capital
          if (
            player.yearOne['Draft Round'] > 4 &&
            player.yearOne['Draft Round'] < 6
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //     calcAllWrProspectsObjects[playerName].finalScore
            //   );
            // }
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.45;
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
          }
          //
          // if later than 5th round pick
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundPlusOne > 5) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore * 0.8;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundPlusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundPlusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          //
          if (+player.yearOne['Class'] === +curYear) {
            // console.log(
            //   player.name,
            //   calcAllWrProspectsObjects[playerName]
            //     .projectedDraftRoundPlusOneScore
            // );
            if (projectedDraftRoundMinusOne > 5) {
              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName]
              //     .projectedDraftRoundPlusOneScore
              // );
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore * 0.8;
              calcAllWrProspectsObjects[
                playerName
              ].projectedDraftRoundMinusOneScore = (
                calcAllWrProspectsObjects[playerName]
                  .projectedDraftRoundMinusOneScore - adjustmentValue
              ).toFixed(2);
            }
          }
          // below is for final score no projected draft capital
          if (player.yearOne['Draft Round'] > 5) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(num, player.name);
            // }
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.8;
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
          }
          //  }

          ///////////////////////////////////////////////////////////
          /////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////
          //
          //        end draft capital adjustment for
          //      highestContestedTargetPercent below 25%
          //
          ////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////

          ///////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////
          //
          //         end draft capital section
          //
          /////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          //////////////////////////////////////////

          //
          ///
          ////
          ///// below section deals with high contested target % before even having projected draft capital
          ////
          ///
          //

          if (
            player.highestContestedTargetPercent > 25 &&
            player.highestContestedTargetPercent < 27 &&
            player.yearOne['Draft Round'] !== 'NA'
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.3;

            //

            calcAllWrProspectsObjects[playerName].preDraftCapitalScore = (
              calcAllWrProspectsObjects[playerName].preDraftCapitalScore -
              adjustmentValue
            ).toFixed(2);
          }

          if (
            player.highestContestedTargetPercent > 26.99 &&
            player.yearOne['Draft Round'] !== 'NA'
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.5;

            //
            calcAllWrProspectsObjects[playerName].preDraftCapitalScore = (
              calcAllWrProspectsObjects[playerName].preDraftCapitalScore -
              adjustmentValue
            ).toFixed(2);
          }

          if (
            player.highestContestedTargetPercent > 25 &&
            player.highestContestedTargetPercent < 27 &&
            player.yearOne['Draft Round'] === 'NA'
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.3;
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
            //

            calcAllWrProspectsObjects[playerName].preDraftCapitalScore = (
              calcAllWrProspectsObjects[playerName].preDraftCapitalScore -
              adjustmentValue
            ).toFixed(2);
          }

          if (
            player.highestContestedTargetPercent > 26.99 &&
            player.yearOne['Draft Round'] === 'NA'
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.5;
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
            //
            calcAllWrProspectsObjects[playerName].preDraftCapitalScore = (
              calcAllWrProspectsObjects[playerName].preDraftCapitalScore -
              adjustmentValue
            ).toFixed(2);
          }

          /////////
          //////////
          ////////////
          //////////
          /////////
          /////////

          if (player.highestContestedTargetPercent > 25) {
            if (player.yearOne.Hit === 'NA') {
              // num = num + 1;
              // console.log(
              //   num,
              //   player.name,
              //   player.highestContestedTargetPercent,
              //   player.yearOne['Draft Round']
              // );
            }
          }

          // below block effects 1st, 2nd, and 3rd rounders
          //

          if (
            player.highestContestedTargetPercent > 25 &&
            player.highestContestedTargetPercent < 27
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            ///
            if (+player.yearOne['Class'] === +curYear) {
              if (
                projectedDraftRoundPlusOne === 2 ||
                projectedDraftRoundPlusOne === 3
              ) {
                let adjustmentValue =
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundPlusOneScore * 0.2;
                calcAllWrProspectsObjects[
                  playerName
                ].projectedDraftRoundPlusOneScore = (
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundPlusOneScore - adjustmentValue
                ).toFixed(2);
              }
            }
            //
            if (+player.yearOne['Class'] === +curYear) {
              if (
                projectedDraftRoundMinusOne === 1 ||
                projectedDraftRoundMinusOne === 2 ||
                projectedDraftRoundMinusOne === 3
              ) {
                //
                // console.log(
                //   player.name,
                //   projectedDraftRound,
                //   projectedDraftRoundMinusOne,
                //   projectedDraftRoundPlusOne
                // );

                //
                let adjustmentValueForHere =
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundMinusOneScore * 0.2;
                calcAllWrProspectsObjects[
                  playerName
                ].projectedDraftRoundMinusOneScore = +(
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundMinusOneScore - adjustmentValueForHere
                ).toFixed(2);
              }
            }
            //

            // below for final post draft capital score
            //
            if (player.yearOne['Draft Round'] < 4) {
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName].finalScore * 0.2;
              calcAllWrProspectsObjects[playerName].finalScore = (
                calcAllWrProspectsObjects[playerName].finalScore -
                adjustmentValue
              ).toFixed(2);
            }
          }

          // below block effect 2nd rounders
          //

          if (
            player.highestContestedTargetPercent > 26.99 &&
            player.highestContestedTargetPercent < 33.5
          ) {
            // console.log(
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            //
            if (+player.yearOne['Class'] === +curYear) {
              if (projectedDraftRoundPlusOne === 2) {
                let adjustmentValue =
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundPlusOneScore * 0.3;
                calcAllWrProspectsObjects[
                  playerName
                ].projectedDraftRoundPlusOneScore = (
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundPlusOneScore - adjustmentValue
                ).toFixed(2);
              }
            }
            //
            if (+player.yearOne['Class'] === +curYear) {
              if (projectedDraftRoundMinusOne === 2) {
                //
                // console.log(
                //   player.name,
                //   projectedDraftRound,
                //   projectedDraftRoundMinusOne,
                //   projectedDraftRoundPlusOne
                // );

                //
                let adjustmentValueForHere =
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundMinusOneScore * 0.3;
                calcAllWrProspectsObjects[
                  playerName
                ].projectedDraftRoundMinusOneScore = +(
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundMinusOneScore - adjustmentValueForHere
                ).toFixed(2);
              }
            }
            //
            //
            // below is for final score no projected draft capital
            if (
              player.yearOne['Draft Round'] > 1 &&
              player.yearOne['Draft Round'] < 3
            ) {
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName].finalScore * 0.3;
              calcAllWrProspectsObjects[playerName].finalScore = (
                calcAllWrProspectsObjects[playerName].finalScore -
                adjustmentValue
              ).toFixed(2);
            }
          }

          // below block effects 1st round
          //
          if (player.highestContestedTargetPercent > 27) {
            // console.log(
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            //
            if (+player.yearOne['Class'] === +curYear) {
              if (projectedDraftRoundMinusOne === 1) {
                //
                // console.log(
                //   player.name,
                //   projectedDraftRound,
                //   projectedDraftRoundMinusOne,
                //   projectedDraftRoundPlusOne
                // );

                //
                let adjustmentValueForHere =
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundMinusOneScore * 0.7;
                calcAllWrProspectsObjects[
                  playerName
                ].projectedDraftRoundMinusOneScore = +(
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundMinusOneScore - adjustmentValueForHere
                ).toFixed(2);
              }
            }

            // below if for final post draft capitol score
            if (
              player.yearOne['Draft Round'] > 0 &&
              player.yearOne['Draft Round'] < 2
            ) {
              //
              // console.log(
              //   player.name,

              //   player.highestContestedTargetPercent,
              //   player.yearOne['Draft Round']
              // );
              //
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName].finalScore * 0.7;
              calcAllWrProspectsObjects[playerName].finalScore = (
                calcAllWrProspectsObjects[playerName].finalScore -
                adjustmentValue
              ).toFixed(2);
            }
          }

          // below block effect 2nd and 3rd rounders
          //

          if (player.highestContestedTargetPercent > 35) {
            // console.log(
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            //
            if (+player.yearOne['Class'] === +curYear) {
              if (
                projectedDraftRoundPlusOne === 2 ||
                projectedDraftRoundPlusOne === 3
              ) {
                let adjustmentValue =
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundPlusOneScore * 0.7;
                calcAllWrProspectsObjects[
                  playerName
                ].projectedDraftRoundPlusOneScore = (
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundPlusOneScore - adjustmentValue
                ).toFixed(2);
              }
            }
            //
            if (+player.yearOne['Class'] === +curYear) {
              if (
                projectedDraftRoundMinusOne === 2 ||
                projectedDraftRoundMinusOne === 3
              ) {
                //
                // console.log(
                //   player.name,
                //   projectedDraftRound,
                //   projectedDraftRoundMinusOne,
                //   projectedDraftRoundPlusOne
                // );

                //
                let adjustmentValueForHere =
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundMinusOneScore * 0.7;
                calcAllWrProspectsObjects[
                  playerName
                ].projectedDraftRoundMinusOneScore = +(
                  calcAllWrProspectsObjects[playerName]
                    .projectedDraftRoundMinusOneScore - adjustmentValueForHere
                ).toFixed(2);
              }
            }

            //
            // below if for final post draft capitol score
            if (
              player.yearOne['Draft Round'] > 1 &&
              player.yearOne['Draft Round'] < 4
            ) {
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName].finalScore * 0.7;
              calcAllWrProspectsObjects[playerName].finalScore = (
                calcAllWrProspectsObjects[playerName].finalScore -
                adjustmentValue
              ).toFixed(2);

              // console.log(
              //   player.name,
              //   calcAllWrProspectsObjects[playerName].finalScore,
              //   player.highestContestedTargetPercent
              // );
            }
          }

          calcAllWrProspectsObjects[playerName].playerName = player.name;

          ////////////////////////////////////////////////////////////////////////////////

          // let objectsArray = Object.entries(calcAllWrProspectsObjects);

          // // // console.log(objectsArray)
          // let sortedArray = [];

          // objectsArray.forEach(p => {
          //   //
          //   sortedArray = p.sort((a, b) => a.finalScore - b.finalScore);

          //   // p.forEach(player => {
          //   //   if (player.finalScore > 16) {
          //   //     // num = num + 1;
          //   //     console.log(num, player.finalScore, player.playerName);
          //   //     console.log(player);
          //   //   }
          //   // });
          // });

          // console.log(sortedArray);

          let tempOne =
            +calcAllWrProspectsObjects[playerName].preDraftCapitalScore;
          let PreDCScore = +tempOne.toFixed(2);
          let tempTwo = +calcAllWrProspectsObjects[playerName].finalScore;
          let PostDCScore = +tempTwo.toFixed(2);

          calcAllWrProspectsObjects[playerName].finalScore = +PostDCScore;

          // if (player.name === 'Troy Franklin') {
          //   console.log(player.name, calcAllWrProspectsObjects[playerName]);
          // }

          let tempToOneHundredScore = +PostDCScore + 56.8;
          let toOneHundredScore = +tempToOneHundredScore.toFixed(2);

          /////////////////////
          ////////////////////
          ////////////////////////
          ///////////////////////////
          if (player.name === 'Jalen McMillan') {
            toOneHundredScore = 63.18;
            // console.log(toOneHundredScore);
          }
          if (player.name === "Ja'Lynn Polk") {
            toOneHundredScore = 60.54;
            // console.log(toOneHundredScore);
          }
          if (player.name === 'Johnny Wilson') {
            toOneHundredScore = 54.94;
            // console.log(toOneHundredScore);
          }
          if (player.name === 'Ricky Pearsall') {
            toOneHundredScore = 54.02;
            // console.log(toOneHundredScore);
          }
          if (player.name === 'Xavier Legette') {
            toOneHundredScore = 50.1;
            // console.log(toOneHundredScore);
          }
          if (player.name === 'Zakhari Franklin') {
            toOneHundredScore = 57.55;
            // console.log(toOneHundredScore);
          }
          if (player.name === 'Anthony Gould') {
            // toOneHundredScore = 56.9;
            // console.log(toOneHundredScore);
          }
          if (player.name === 'Laviska Shenault Jr.') {
            calcAllWrProspectsObjects[playerName].finalScore = 12;
            toOneHundredScore = 69;
            // console.log(toOneHundredScore);
          }

          // if (player.yearOne['YR 1-3 FP/G']) {
          // console.log(player.yearOne['YR 1-3 FP/G']);
          // }

          if (player.yearOne['Class'] === '2024') {
            calcAllWrProspectsObjects[playerName].draftYear = 2024;
          }
          if (player.yearOne['Class'] === '2023') {
            calcAllWrProspectsObjects[playerName].draftYear = 2023;
          }
          if (player.yearOne['Class'] === '2022') {
            calcAllWrProspectsObjects[playerName].draftYear = 2022;
          }
          if (player.yearOne['Class'] === '2021') {
            calcAllWrProspectsObjects[playerName].draftYear = 2021;
          }
          if (player.yearOne['Class'] === '2020') {
            calcAllWrProspectsObjects[playerName].draftYear = 2020;
          }
          if (player.yearOne['Class'] === '2019') {
            calcAllWrProspectsObjects[playerName].draftYear = 2019;
          }
          if (player.yearOne['Class'] === '2018') {
            calcAllWrProspectsObjects[playerName].draftYear = 2018;
          }

          // if (toOneHundredScore > 50) {
          // if (player.yearOne['Draft Round'] === 'NA') {
          // if (player.yearOne['Class'] === '2024') {
          // if (player.yearOne.Hit === 'Y') {
          if (
            player.name === 'Troy Franklin' ||
            player.name === 'Marvin Mims Jr.'
            // player.name === 'Tylan Wallace'
          ) {
            // if (tempToOneHundredScore > 60 && tempToOneHundredScore < 70) {
            num = num + 1;
            // console.log(typeof +player.yearOne['YR 1-3 FP/G']);
            if (+player.yearOne['Draft Pick Overall']) {
              total = total + +player.yearOne['Draft Round'];
            }
            // if (+player.yearOne['Draft Pick Overall']) {
            // total = total + +player.yearOne['Draft Pick Overall'];
            // }

            newTotal = +total.toFixed(2);
            console.log(
              num,
              player.name,
              '  ',
              '  ',
              // PreDCScore,
              // calcAllWrProspectsObjects[playerName]
              //   .projectedDraftRoundMinusOneScore,
              '  ',
              // PostDCScore,
              // '  ',
              toOneHundredScore,
              // +player.yearOne['Draft Round']
              // newTotal
              // calcAllWrProspectsObjects[playerName]
              //   .projectedDraftRoundPlusOneScore
              // '  ',
              player.yearOne.Conference,
              // calcAllWrProspectsObjects[playerName].yearOneConferenceAdjustment
              player.highestContestedTargetPercent,
              //   player.yearOne['Draft Round'],
              calcAllWrProspectsObjects[playerName]
            );
          }
          // }

          //////////////////////////////////////////////////////end
        }
      });

      //                       avarage fantasy points per game first 3 seasons

      // score range     total average  % over 10    % over 12    % over 14    % over 16    % over 18   avg draft round   avg. pick num
      //    90+ (4)          15.35         75          75           75           50             25            1               16
      //   80-90 (9)         13.01         100         78           22           0              0           1.33              24.66
      //   70-80 (15)        11.42         67          53           40           13             0           2.33              55.26
      //   60-70 (44)         6.15         23          19           2           0              0            2.90             87.29
      //   below 60 (108)     3.71          5           2           1           0              0            4.61              149.71

      // console.log(calcAllWrProspectsObjects);
      /// setting upper and lower bounds for each stat to overll calcAllWrProspectsObjects
      //

      // calcAllWrProspectsObjects['1D/RR-careerAvg'] = {
      //   lb: 8,
      //   threshold: 10.2,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects['REC Grade'] = {
      //   lb: 69,
      //   threshold: 75,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects.YPRR = {
      //   lb: 2.1,
      //   threshold: 2.25,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects['Zone YPRR Plus Man YPRR'] = {
      //   lb: 1,
      //   threshold: 1.75,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects['Zone YPRR Plus Man YPRR'] = {
      //   lb: 130,
      //   threshold: 160,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects['Adjusted Yds Per Team Play'] = {
      //   lb: 1.35,
      //   threshold: 1.65,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects['EPA Per Team Pass Attempt- ytyt'] = {
      //   lb: 0.08,
      //   threshold: 0.0125,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects['EPA Per Play- ytyt'] = {
      //   lb: 0.5,
      //   threshold: 0.75,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects['Rec TDs'] = {
      //   lb: 4.3,
      //   threshold: 5.5,
      //   ub: 10.5,
      // };

      // calcAllWrProspectsObjects['Rec Yds per Game'] = {
      //   lb: 50,
      //   threshold: 62.5,
      //   ub: 'none',
      // };

      // calcAllWrProspectsObjects['carrerAvgEPAPerGame'] = {
      //   lb: 3.5,
      //   threshold: 5,
      //   ub: 'none',
      // };
    }
  });
});

let dataStructureForR = [];

allWrProspectsNamesArray.forEach(player => {
  // calcAllWrProspectsObjects[player] = {};
  // dataStructureForR[player] = [];
});

// console.log(EPAPerTeamPassAttempArray);

namesArray.forEach((name, i) => {
  if (
    namesArray[i] &&
    firstDownPerRouteRunArray[i] &&
    careerAverageRecGradeArray[i] &&
    pprPointsArray[i] &&
    adjYrdsPerTeamPlayArray[i] &&
    EPAPerTeamPassAttempArray[i] &&
    EPAPerPlayArray[i] &&
    recTDsArray[i] &&
    recYrdsPerGameArray[i] &&
    draftPickNumArray[i] &&
    UNScoreArray[i] &&
    NFLPPRPointsYearsOneToThreeArray[i] !== 'NA'
  ) {
    let playerObject = {};

    // dataStructureForR[name].name = name

    // firstDownPerRouteRunArray
    if (namesArray[i]) {
      playerObject.name = namesArray[i];
    }

    if (firstDownPerRouteRunArray[i]) {
      playerObject.fd1rr = firstDownPerRouteRunArray[i];
    }
    if (careerAverageRecGradeArray[i]) {
      playerObject.recGrade = careerAverageRecGradeArray[i];
    }
    if (pprPointsArray[i]) {
      playerObject.pprPoints = pprPointsArray[i];
    }
    if (adjYrdsPerTeamPlayArray[i]) {
      playerObject.adjYrdsPerTeamPlay = adjYrdsPerTeamPlayArray[i];
    }
    if (EPAPerTeamPassAttempArray[i]) {
      playerObject.EPAPerTeamPassAttemp = EPAPerTeamPassAttempArray[i];
    }
    if (EPAPerPlayArray[i]) {
      playerObject.EPAPerPlay = EPAPerPlayArray[i];
    }
    if (recTDsArray[i]) {
      playerObject.recTDs = recTDsArray[i];
    }
    if (recYrdsPerGameArray[i]) {
      playerObject.recYrdsPerGame = recYrdsPerGameArray[i];
    }

    if (draftPickNumArray[i]) {
      playerObject.draftPickNum = draftPickNumArray[i];
    }

    if (UNScoreArray[i]) {
      playerObject.UNScore = UNScoreArray[i];
    }

    if (NFLPPRPointsYearsOneToThreeArray[i]) {
      playerObject.NFLPPRPointsYearsOneToThree =
        NFLPPRPointsYearsOneToThreeArray[i];
    }

    dataStructureForR.push(playerObject);
  }
});

// console.log(dataStructureForR);

// dataStructureForR.name = namesArray
// dataStructureForR.firstDownPerRouteRun = firstDownPerRouteRunArray
// dataStructureForR.careerAverageRecGrade = careerAverageRecGradeArray

// const url =
//   'mongodb+srv://devJay:Hesstrucksarethebest@dailydynasties.syom4sb.mongodb.net/test';
// const client = new MongoClient(url);

// // The database to use
// const dbName = 'dailydynasties';

// async function runWRModelData() {
//   try {
//     await client.connect();
//     console.log('Connected correctly to server');
//     const db = client.db(dbName);

//     const col = db.collection('wrProspectModelData');

//     // Construct a document
//     let wrProspectModelData = { dataStructureForR };

//     // Insert a single document, wait for promise so we can read it back
//     const p = await col.insertOne(wrProspectModelData);
//     // Find one document
//     const myDoc = await col.findOne();
//     // Print to the console
//     // console.log(myDoc);
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }

// runWRModelData().catch(console.dir);

let topLevelArray = Object.entries(calcAllWrProspectsObjects);

topLevelArray.forEach(topPlayer => {
  topPlayer.forEach(secondPlayer => {
    if (typeof secondPlayer === 'object') {
      // console.log(secondPlayer.playerName);
      // num = num + 1;
      // console.log(num, secondPlayer);
      // console.log(
      //   calcAllWrProspectsObjects[secondPlayer.playerName].playerName
      // );

      let matchArray = [];

      topLevelArray.forEach(top2 => {
        top2.forEach(matchPlayer => {
          // console.log(secondPlayer.playerName, matchPlayer.playerName);
          if (typeof matchPlayer === 'object') {
            // num = num + 1;
            // console.log(num, matchPlayer);
            // console.log(secondPlayer.playerName, matchPlayer.playerName);
            if (secondPlayer.playerName !== matchPlayer.playerName) {
              let matchedPlayerObject = {
                matchedPlayerName: matchPlayer.playerName,
                matchScore: 0,
              };

              if (secondPlayer.careerAvgFirstDownPerRouteRun) {
                //
                //
                // console.log(secondPlayer.careerAvgFirstDownPerRouteRun.score);
                if (matchPlayer.careerAvgFirstDownPerRouteRun) {
                  // console.log(
                  //   secondPlayer.careerAvgFirstDownPerRouteRun.score,
                  //   matchPlayer.careerAvgFirstDownPerRouteRun.score
                  // );
                  if (
                    secondPlayer.careerAvgFirstDownPerRouteRun.score ===
                    matchPlayer.careerAvgFirstDownPerRouteRun.score
                  ) {
                    // num = num + 1;
                    // console.log(
                    //   num,
                    //   secondPlayer.playerName,
                    //   matchPlayer.playerName
                    // );

                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;

                    // let diff = Math.abs(
                    //   +secondPlayer.careerAvgFirstDownPerRouteRun.value -
                    //     +matchPlayer.careerAvgFirstDownPerRouteRun.value
                    // );

                    // if (diff < 1) {
                    //   matchedPlayerObject.matchScore =
                    //     matchedPlayerObject.matchScore + 1;
                    // }
                  }
                }
              }
              //
              //
              if (secondPlayer.careerAvgRecGrade) {
                // console.log(secondPlayer. careerAvgRecGrade.score);
                if (matchPlayer.careerAvgRecGrade) {
                  // console.log(
                  //   secondPlayer. careerAvgRecGrade.score,
                  //   matchPlayer. careerAvgRecGrade.score
                  // );

                  if (
                    (secondPlayer.playerName === 'Troy Franklin' &&
                      matchPlayer.playerName === 'Amon-Ra St. Brown') ||
                    (secondPlayer.playerName === 'Amon-Ra St. Brown' &&
                      matchPlayer.playerName === 'Troy Franklin')
                  ) {
                    // console.log(
                    //   secondPlayer.playerName,
                    //   matchPlayer.playerName
                    // );
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 10;
                  }

                  if (
                    secondPlayer.careerAvgRecGrade.score ===
                    matchPlayer.careerAvgRecGrade.score
                  ) {
                    // num = num + 1;
                    // console.log(
                    //   num,
                    //   secondPlayer.playerName,
                    //   matchPlayer.playerName
                    // );
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.careerAvgYPRR) {
                // console.log(secondPlayer. careerAvgYPRR.score);
                if (matchPlayer.careerAvgYPRR) {
                  if (
                    secondPlayer.careerAvgYPRR.score ===
                    matchPlayer.careerAvgYPRR.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.careerAvgSoneYPRRPlusManYPRR) {
                // console.log(secondPlayer.  careerAvgSoneYPRRPlusManYPRR.score);
                if (matchPlayer.careerAvgSoneYPRRPlusManYPRR) {
                  if (
                    secondPlayer.careerAvgSoneYPRRPlusManYPRR.score ===
                    matchPlayer.careerAvgSoneYPRRPlusManYPRR.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.careerAvgPPRPoints) {
                // console.log(secondPlayer.  careerAvgPPRPoints.score);
                if (matchPlayer.careerAvgPPRPoints) {
                  if (
                    secondPlayer.careerAvgPPRPoints.score ===
                    matchPlayer.careerAvgPPRPoints.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.careerAvgAdjYdsPerTeamPlay) {
                // console.log(secondPlayer.  careerAvgAdjYdsPerTeamPlay.score);
                if (matchPlayer.careerAvgAdjYdsPerTeamPlay) {
                  if (
                    secondPlayer.careerAvgAdjYdsPerTeamPlay.score ===
                    matchPlayer.careerAvgAdjYdsPerTeamPlay.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.ytytEPAPerTeamPassAttempt) {
                // console.log(secondPlayer.  ytytEPAPerTeamPassAttempt.score);
                if (matchPlayer.ytytEPAPerTeamPassAttempt) {
                  if (
                    secondPlayer.ytytEPAPerTeamPassAttempt.score ===
                    matchPlayer.ytytEPAPerTeamPassAttempt.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.ytytEPAPerPlay) {
                // console.log(secondPlayer.  ytytEPAPerPlay.score);
                if (matchPlayer.ytytEPAPerPlay) {
                  if (
                    secondPlayer.ytytEPAPerPlay.score ===
                    matchPlayer.ytytEPAPerPlay.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.careerAvgRecTDs) {
                // console.log(secondPlayer.  careerAvgRecTDs.score);
                if (matchPlayer.careerAvgRecTDs) {
                  if (
                    secondPlayer.careerAvgRecTDs.score ===
                    matchPlayer.careerAvgRecTDs.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.careerAvgEPAPerGame) {
                // console.log(secondPlayer.   careerAvgEPAPerGame.score);
                if (matchPlayer.careerAvgEPAPerGame) {
                  if (
                    secondPlayer.careerAvgEPAPerGame.score ===
                    matchPlayer.careerAvgEPAPerGame.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 2;
                  }
                }
              }
              //
              //
              if (secondPlayer.yearOneConferenceAdjustment) {
                // console.log(secondPlayer.   yearOneConferenceAdjustment.score);
                if (matchPlayer.yearOneConferenceAdjustment) {
                  if (
                    secondPlayer.yearOneConferenceAdjustment.score ===
                    matchPlayer.yearOneConferenceAdjustment.score
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 4;
                  }
                }
              }
              //
              //
              if (secondPlayer.finalScore) {
                // console.log(secondPlayer.   finalScore.score);
                if (matchPlayer.finalScore) {
                  let temp = secondPlayer.finalScore * 0.1;
                  let tempOne = +temp.toFixed(2);
                  let tempHighBar = +secondPlayer.finalScore + +tempOne;
                  let highBar = +tempHighBar.toFixed(2);
                  let tempLowBar = +secondPlayer.finalScore - +tempOne;
                  let lowBar = +tempLowBar.toFixed(2);

                  // console.log(
                  //   secondPlayer.playerName,
                  //   secondPlayer.finalScore,
                  //   highBar,
                  //   lowBar
                  // );

                  let tempT = secondPlayer.finalScore * 0.3;
                  let tempTwo = +tempT.toFixed(2);
                  let tempLargeHighBar = +secondPlayer.finalScore + +tempTwo;
                  let largeHighBar = +tempLargeHighBar.toFixed(2);
                  let tempLargeLowBar = +secondPlayer.finalScore - +tempTwo;
                  let largeLowBar = +tempLargeLowBar.toFixed(2);

                  // if (
                  //   secondPlayer.playerName === 'Troy Franklin' &&
                  //   matchPlayer.playerName == 'Amon-Ra St. Brown'
                  // ) {
                  //   console.log(
                  //     matchPlayer.finalScore,
                  //     secondPlayer.finalScore,
                  //     matchPlayer.postDCScore,
                  //     secondPlayer.postDCScore,
                  //     highBar,
                  //     lowBar
                  //   );
                  // }

                  if (
                    matchPlayer.finalScore < highBar &&
                    matchPlayer.finalScore > lowBar
                  ) {
                    // console.log(
                    //   secondPlayer.playerName,
                    //   secondPlayer.finalScore,
                    //   matchPlayer.playerName,
                    //   highBar,
                    //   lowBar
                    // );

                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore + 8;
                  }

                  if (
                    matchPlayer.finalScore > largeHighBar ||
                    matchPlayer.finalScore < largeLowBar
                  ) {
                    matchedPlayerObject.matchScore =
                      matchedPlayerObject.matchScore - 8;
                  }
                }
              }
              //
              //

              matchArray.push(matchedPlayerObject);
            }
          }
        });
      });
      let sortedMatchArray = matchArray.sort(
        (a, b) => b.matchScore - a.matchScore
      );
      // console.log(secondPlayer.playerName, sortedMatchArray);

      let finalTopMatchesArray = [];

      sortedMatchArray.forEach((match, i) => {
        if (i < 9) {
          finalTopMatchesArray.push(match);
        }
      });

      // console.log(secondPlayer.playerName, finalTopMatchesArray);
      calcAllWrProspectsObjects[secondPlayer.playerName].topComps =
        finalTopMatchesArray;
    }
  });
});

let testArray = Object.entries(calcAllWrProspectsObjects);

testArray.forEach(topPlayer => {
  // console.log(topPlayer);
  topPlayer.forEach(player => {
    if (typeof player === 'object') {
      // if (player.draftYear && player.draftYear === 2019) {
      if (player.playerName === 'Dylan Cantrell') {
        // console.log(player.draftYear);
        // console.log(player.playerName, player.topComps);
      }
    }
  });
});

// ['Man YPRR']

// console.log(calcAllWrProspectsObjects);

// let objectsArray = Object.entries(calcAllWrProspectsObjects);

// console.log(objectsArray);

// objectsArray.forEach(p => {
//   // console.log(p);
//   p.forEach(player => {
//     // if (player.finalScore > 16) {
//     // num = num + 1;
//     // console.log(num, player.finalScore, player.playerName);
//     // console.log(player);
//     // }
//   });
// });
