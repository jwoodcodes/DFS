const allWrProspectsObjects = require('./unWRProspectModel');
const WRProspectModelData = require('../DataForUndroppablesProspectModels/WRProspectModelData');

// console.log(allWrProspectsObjects)

// allWrProspectsObjects.forEach((player) => {
//     console.log(player)
// })
const allWrProspectsNamesArray = [];

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

allWrProspectsNamesArray.forEach(player => {
  calcAllWrProspectsObjects[player] = {};
});

// console.log(calcAllWrProspectsObjects);

let allHitsNamesArray = Object.keys(calcAllWrProspectsObjects);

// console.log(allHitsNamesArray);

const test = Object.entries(allWrProspectsObjects);

// console.log(test);
let num = 0;
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

          // 28 hits, 150 non hits, 178 total

          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(num, player.name);
          //   }

          // if (
          //   player.yearTwoPlusYearThreeAveragedStats['Rec TDs per Game'] > 0.55
          // ) {

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
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
              score: 0,
            };
          }

          // bound 2:
          //
          // this is the catch bound to give everyone below threshold but above lower bound a 0
          //
          if (
            player.careerAveragedStats['1D/RR'] > 7.99 &&
            player.careerAveragedStats['1D/RR'] < 10.2
          ) {
            // if (player.yearOne.Hit === 'N') {
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
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (player.careerAveragedStats['1D/RR'] > 10.199) {
            // if (player.yearOne.Hit === 'N') {
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
            //     player.careerAveragedStats['Zone YPRR']
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
              score: -10,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 10;
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
          //   ] > 0.229
          // ) {
          //   if (player.yearOne.Hit === 'N') {
          //     num = num + 1;
          //     console.log(
          //       num,
          //       player.name,
          //       player.yearTwoPlusYearThreeAveragedStats[
          //         'EPA Per Team Pass Attempt'
          //       ]
          //     );
          //   }

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
              score: 0,
            };
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
              score: -3,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 4;
          }

          // bound 3: the best threshold the metric has
          // should go from the threshold up to upper bound if there is an upper bound for this metric

          if (
            player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'] > 0.749
          ) {
            // if (player.yearOne.Hit === 'N') {
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
            // if (player.yearOne.Hit === 'N') {
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
            // if (player.yearOne.Hit === 'N') {
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
            calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
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
            calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
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
            calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
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
          if (player.careerAvgEPAPerGame < 3.5) {
            if (player.yearOne.Hit === 'N') {
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
            player.careerAvgEPAPerGame > 3.49 &&
            player.careerAvgEPAPerGame < 5
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(
            //     num,
            //     player.name,
            //    player.careerAvgEPAPerGame
            //   );
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

          if (player.yearOne.Height < 71.1) {
            // if (player.yearOne.Hit === 'Y') {
            //   num = num + 1;
            //   console.log(num, player.name, player.yearOne.Height);
            // }
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecTDs = {
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

          if (player.yearOne['Power 5'] === 'N') {
            if (player.yearOne.Hit === 'N') {
              // num = num + 1;
              // console.log(num, player.name);
              //
              calcAllWrProspectsObjects[
                playerName
              ].yearOneConferenceAdjustment = {
                value: `${player.yearOne.Conference}-non-early declare`,
                score: -0.3,
              };
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName].finalScore * 0.4;
              calcAllWrProspectsObjects[playerName].finalScore =
                calcAllWrProspectsObjects[playerName].finalScore -
                adjustmentValue;
            }
          }

          if (
            player.yearOne.Conference === 'Big 12' ||
            player.yearOne.Conference === 'ACC'
          ) {
            //
            // if (player.yearOne.Hit === 'Y') {
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
                score: -0.3,
              };
              let adjustmentValue =
                calcAllWrProspectsObjects[playerName].finalScore * 0.3;
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
                    score: -0.3,
                  };

                  let adjustmentValue =
                    calcAllWrProspectsObjects[playerName].finalScore * 0.35;
                  calcAllWrProspectsObjects[playerName].finalScore =
                    calcAllWrProspectsObjects[playerName].finalScore -
                    adjustmentValue;
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

                  let adjustmentValue =
                    calcAllWrProspectsObjects[playerName].finalScore * 0.25;
                  calcAllWrProspectsObjects[playerName].finalScore =
                    calcAllWrProspectsObjects[playerName].finalScore -
                    adjustmentValue;
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
          if (
            player.yearOne['Draft Round'] > 1 &&
            player.yearOne['Draft Round'] < 3
          ) {
            // if (player.yearOne.Hit === 'N') {
            //   num = num + 1;
            //   console.log(num, player.name);
            // }
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.1;
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
          }

          // if third round pick
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

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          if (
            player.highestContestedTargetPercent > 25 &&
            player.highestContestedTargetPercent < 27.5 &&
            player.yearOne['Draft Round'] < 4
          ) {
            // console.log(
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
          }

          if (
            player.highestContestedTargetPercent > 27.49 &&
            player.yearOne['Draft Round'] > 1 &&
            player.yearOne['Draft Round'] < 3
          ) {
            // console.log(
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
          }

          if (
            player.highestContestedTargetPercent > 27.49 &&
            player.yearOne['Draft Round'] > 0 &&
            player.yearOne['Draft Round'] < 2
          ) {
            // console.log(
            //   player.name,

            //   player.highestContestedTargetPercent,
            //   player.yearOne['Draft Round']
            // );
            //
            let adjustmentValue =
              calcAllWrProspectsObjects[playerName].finalScore * 0.7;
            calcAllWrProspectsObjects[playerName].finalScore = (
              calcAllWrProspectsObjects[playerName].finalScore - adjustmentValue
            ).toFixed(2);
          }

          calcAllWrProspectsObjects[playerName].playerName = player.name;

          ////////////////////////////////////////////////////////////////////////////////

          if (player.yearTwoPlusYearThreeAveragedStats['EPA Per Play'] > 0.75) {
            if (player.yearOne.Hit === 'Y') {
              // num = num + 1;
              // console.log(
              //   num,
              //   player.name,
              //   player.yearOne['Draft Pick Overall'],
              //   calcAllWrProspectsObjects[playerName].finalScore
              // );
            }
          }

          if (calcAllWrProspectsObjects[playerName].finalScore > 16) {
            if (player.yearOne.Hit === 'Y') {
              num = num + 1;
              console.log(
                num,
                calcAllWrProspectsObjects[playerName].finalScore,
                player.name,
                player.yearOne.Conference
                // calcAllWrProspectsObjects[playerName]
                //   .yearOneConferenceAdjustment
                // player.highestContestedTargetPercent,
                // player.yearOne['Draft Round']
                // calcAllWrProspectsObjects[playerName]
              );
              // console.log(calcAllWrProspectsObjects[playerName]);
            }
          }

          //////////////////////////////////////////////////////end
        }
      });
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

// ['Man YPRR']

// console.log(calcAllWrProspectsObjects);

let objectsArray = Object.entries(calcAllWrProspectsObjects);

// // console.log(objectsArray)

objectsArray.forEach(p => {
  p.forEach(player => {
    if (player.finalScore > 16) {
      // num = num + 1;
      // console.log(num, player.finalScore, player.playerName);
      // console.log(player);
    }
  });
});
