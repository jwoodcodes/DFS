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
          // careerAveragedStats['1D/RR'] > 10.2 H- 68%, NH- 31% *
          // careerAveragedStats['REC Grade'] > 75 H- 61%, NH- 25%
          // yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 6 H- 61%, NH- 38%
          // careerAveragedStats.RR > 300 H- 64%, NH- 42%
          // yearTwoPlusYearThreeAveragedStats.TPRR > 0.24 H- 61%, NH- 39%
          // yearTwoPlusYearThreeAveragedStats['YAC/Rec'] > 4.8 H- 71%, NH- 45%
          // careerAveragedStats.YPRR > 2 H- 96%, NH- 56% *
          // careerAveragedStats.YPRR > 2.25 H- 69%, NH- 35% *
          // careerAveragedStats['Man YPRR'] > 1.75 H- 64%, NH - 31%
          // careerAveragedStats['Man YPRR'] > 1.5 H- 69%, 39%
          // careerAveragedStats['Zone YPRR'] > 1.75 H- 75%, NH- 40% *
          // careerAveragedStats['Zone YPRR'] > 1.75 & careerAveragedStats['Man YPRR'] > 1.5 H- 69%, NH- 32% *
          // careerAveragedStats['PPR Points'] > 150 H- 75%, 39% *
          // careerAveragedStats['PPR Points'] > 160 H- 69%, 32% *
          // careerAveragedStats['Reception MS (Games Played)'] > 0.2 H-64%, NH- 35%
          // careerAveragedStats['Rec Yds Per Team Pass Att'] > 1.75 H- 64%, NH- 37%
          // yearTwoPlusYearThreeAveragedStats['Rec Yds Per Team Pass Att'] > 2 H- 71%, NH- 36% *
          // careerAveragedStats['TD Per Team Pass Att'] > 0.014 H- 68%, NH- 37%
          //yearTwoPlusYearThreeAveragedStats['TD Per Team Pass Att'] > 0.016 H- 75%, NH- 40% *
          // yearTwoPlusYearThreeAveragedStats['Weighted Dominator Rating'] > 0.26 H- 69%, 37%
          // careerAveragedStats['Adjusted Yds Per Team Play'] > 1.65 H- 69%, NH - 33% *
          // yearTwoPlusYearThreeAveragedStats['Scrimmage Yds Per Team Pass Attempt'] > 1.9 H- 68%, NH- 37% *
          // yearTwoPlusYearThreeAveragedStats['EPA Per Team Pass Attempt'] > 0.125 H- 86%, NH- 39% **
          // careerAveragedStats['EPA Per Team Pass Attempt'] > 0.125 H- 75%, NH- 30% **
          // careerAveragedStats['EPA Per Play'] > 0.7 H- 71%, NH- 38% *
          // yearTwoPlusYearThreeAveragedStats['EPA Per Play'] > 0.75 H- 71%, NH- 27% **
          // careerAveragedStats['Rec TDs'] > 5.5 H- 75%, NH- 39% *
          // careerAveragedStats['Rec Yds per Game'] > 60 H- 82%, NH- 40% **
          // yearTwoPlusYearThreeAveragedStats['Rec TDs per Game'] > 0.55 H- 82%, NH- 39% **
          // ['Draft Round'] < 3 H- 79%, NH- 29% **
          // Height < 71 H- 14% *
          // Weight < 170 H- 7% or < 180 H- 19% *

          // 28 hits, 150 non hits, 178 total

          //   if (player.yearOne.Hit === 'Y') {
          //     num = num + 1;
          //     console.log(num, player.name);
          //   }

          //   if (player.careerAveragedStats['Rec Yds MS'] > 0.2) {
          //     if (player.yearOne.Hit === 'N') {
          //       num = num + 1;
          //       console.log(num, player.name), player.careerAveragedStats.RR;
          //     }
          //   }

          //   if (player.yearOne['Power 5'] === 'Y') {
          //     if (player.yearOne.Hit === 'Y') {
          //       num = num + 1;
          //       console.log(num, player.name), player.careerAveragedStats.RR;
          //     }
          //   }

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

          // career avg

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
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
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
              score: 0,
            };
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
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
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
          //       score: 3,
          //     };
          //     calcAllWrProspectsObjects[playerName].finalScore =
          //       calcAllWrProspectsObjects[playerName].finalScore + 3;
          //   }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // year Two plus year three

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 65) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 64.99 &&
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 71
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 70.99 &&
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 74
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 73.99 &&
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 79
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 78.99 &&
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 84.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 84.499) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['REC Grade'] < 62.5) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats['REC Grade'] > 62.499 &&
            player.careerAveragedStats['REC Grade'] < 70
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.careerAveragedStats['REC Grade'] > 69.99 &&
            player.careerAveragedStats['REC Grade'] < 72
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats['REC Grade'] > 71.99 &&
            player.careerAveragedStats['REC Grade'] < 74
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

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

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.careerAveragedStats['REC Grade'] > 73.99 &&
            player.careerAveragedStats['REC Grade'] < 80
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.careerAveragedStats['REC Grade'] > 79.99) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // year Two plus year three

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats.Targets < 35) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.Targets > 34.99 &&
            player.yearTwoPlusYearThreeAveragedStats.Targets < 57.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.Targets > 57.49 &&
            player.yearTwoPlusYearThreeAveragedStats.Targets < 75
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.Targets > 74.99 &&
            player.yearTwoPlusYearThreeAveragedStats.Targets < 80
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.yearTwoPlusYearThreeAveragedStats.Targets > 79.99 &&
            player.yearTwoPlusYearThreeAveragedStats.Targets < 109
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats.Targets > 108.99) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats.Targets < 38) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.Targets > 37.99 &&
            player.careerAveragedStats.Targets < 50
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.careerAveragedStats.Targets > 49.99 &&
            player.careerAveragedStats.Targets < 65
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.Targets > 64.99 &&
            player.careerAveragedStats.Targets < 72
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.careerAveragedStats.Targets > 71.99 &&
            player.careerAveragedStats.Targets < 100
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.careerAveragedStats.Targets > 99.99) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // year Two plus year three

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 2.5) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 2.49 &&
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 4
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 3.99 &&
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 5.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 5.49 &&
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 6.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 6.49 &&
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 8
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 7.99) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['TGTs/G'] < 3) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats['TGTs/G'] > 2.99 &&
            player.careerAveragedStats['TGTs/G'] < 3.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.careerAveragedStats['TGTs/G'] > 3.499 &&
            player.careerAveragedStats['TGTs/G'] < 4.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats['TGTs/G'] > 4.49 &&
            player.careerAveragedStats['TGTs/G'] < 5.25
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.careerAveragedStats['TGTs/G'] > 5.249 &&
            player.careerAveragedStats['TGTs/G'] < 6.75
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.careerAveragedStats['TGTs/G'] > 6.749) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // year Two plus year three

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats.RR < 215) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRoutesRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.RR,
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.RR > 214.99 &&
            player.yearTwoPlusYearThreeAveragedStats.RR < 235
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRoutesRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.RR,
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.RR > 234.99 &&
            player.yearTwoPlusYearThreeAveragedStats.RR < 305
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRoutesRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.RR,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.RR > 304.99 &&
            player.yearTwoPlusYearThreeAveragedStats.RR < 325
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRoutesRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.RR,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.yearTwoPlusYearThreeAveragedStats.RR > 324.99 &&
            player.yearTwoPlusYearThreeAveragedStats.RR < 410
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRoutesRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.RR,
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats.RR > 409.99) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRoutesRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.RR,
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats.RR < 149) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.RR > 148.99 &&
            player.careerAveragedStats.RR < 225
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.careerAveragedStats.RR > 224.99 &&
            player.careerAveragedStats.RR < 270
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.RR > 269.99 &&
            player.careerAveragedStats.RR < 305
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.careerAveragedStats.RR > 304.99 &&
            player.careerAveragedStats.RR < 350
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.careerAveragedStats.RR > 349.99) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // year Two plus year three

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats.TPRR < 0.15) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.TPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.TPRR,
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.TPRR > 0.149 &&
            player.yearTwoPlusYearThreeAveragedStats.TPRR < 0.2
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.TPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.TPRR,
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.TPRR > 0.199 &&
            player.yearTwoPlusYearThreeAveragedStats.TPRR < 0.22
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.TPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.TPRR,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.TPRR > 0.2199 &&
            player.yearTwoPlusYearThreeAveragedStats.TPRR < 0.24
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.TPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.TPRR,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.yearTwoPlusYearThreeAveragedStats.TPRR > 0.2399 &&
            player.yearTwoPlusYearThreeAveragedStats.TPRR < 0.28
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.TPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.TPRR,
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats.TPRR > 0.2799) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.TPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.TPRR,
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats.TPRR < 0.15) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.TPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerRouteRun =
              {
                value: player.careerAveragedStats.TPRR,
                score: -1,
              };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.TPRR > 0.149 &&
            player.careerAveragedStats.TPRR < 0.22
          ) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.TPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerRouteRun =
              {
                value: player.careerAveragedStats.TPRR,
                score: -0.5,
              };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.careerAveragedStats.TPRR > 0.2199 &&
            player.careerAveragedStats.TPRR < 0.24
          ) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.TPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerRouteRun =
              {
                value: player.careerAveragedStats.TPRR,
                score: 0.5,
              };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.TPRR > 0.2399 &&
            player.careerAveragedStats.TPRR < 0.25
          ) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.TPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerRouteRun =
              {
                value: player.careerAveragedStats.TPRR,
                score: 1,
              };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.careerAveragedStats.TPRR > 304.99 &&
            player.careerAveragedStats.TPRR < 350
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.TPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerRouteRun =
              {
                value: player.careerAveragedStats.TPRR,
                score: 1.5,
              };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.careerAveragedStats.TPRR > 0.2699) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.TPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerRouteRun =
              {
                value: player.careerAveragedStats.TPRR,
                score: 2,
              };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // career avg

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats.RR < 149) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.RR > 148.99 &&
            player.careerAveragedStats.RR < 225
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.careerAveragedStats.RR > 224.99 &&
            player.careerAveragedStats.RR < 270
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.RR > 269.99 &&
            player.careerAveragedStats.RR < 305
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.careerAveragedStats.RR > 304.99 &&
            player.careerAveragedStats.RR < 350
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.careerAveragedStats.RR > 349.99) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // year Two plus year three

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] < 2) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYACPerRec = {
              value: player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'],
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] > 1.99 &&
            player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] < 2.75
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYACPerRec = {
              value: player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'],
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] > 2.749 &&
            player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] < 5
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYACPerRec = {
              value: player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] > 4.99 &&
            player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] < 6
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYACPerRec = {
              value: player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] > 5.99 &&
            player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] < 8
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYACPerRec = {
              value: player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'] > 7.99) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYACPerRec = {
              value: player.yearTwoPlusYearThreeAveragedStats['YAC/Rec'],
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['YAC/Rec'] < 2.5) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.careerAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYACPerRec = {
              value: player.careerAveragedStats['YAC/Rec'],
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats['YAC/Rec'] > 2.49 &&
            player.careerAveragedStats['YAC/Rec'] < 3.5
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.careerAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYACPerRec = {
              value: player.careerAveragedStats['YAC/Rec'],
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.careerAveragedStats['YAC/Rec'] > 3.49 &&
            player.careerAveragedStats['YAC/Rec'] < 5
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.careerAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYACPerRec = {
              value: player.careerAveragedStats['YAC/Rec'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats['YAC/Rec'] > 4.99 &&
            player.careerAveragedStats['YAC/Rec'] < 5.5
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.careerAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYACPerRec = {
              value: player.careerAveragedStats['YAC/Rec'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.careerAveragedStats['YAC/Rec'] > 5.49 &&
            player.careerAveragedStats['YAC/Rec'] < 7
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['YAC/Rec'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYACPerRec = {
              value: player.careerAveragedStats['YAC/Rec'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.careerAveragedStats['YAC/Rec'] > 6.99) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.careerAveragedStats['YAC/Rec']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYACPerRec = {
              value: player.careerAveragedStats['YAC/Rec'],
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          // year Two plus year three

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats.YPRR < 1.9) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats.YPRR
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYPRR = {
              value: player.yearTwoPlusYearThreeAveragedStats.YPRR,
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.YPRR > 1.89 &&
            player.yearTwoPlusYearThreeAveragedStats.YPRR < 2.1
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats.YPRR
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYPRR = {
              value: player.yearTwoPlusYearThreeAveragedStats.YPRR,
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.YPRR > 2.09 &&
            player.yearTwoPlusYearThreeAveragedStats.YPRR < 2.25
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats.YPRR
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYPRR = {
              value: player.yearTwoPlusYearThreeAveragedStats.YPRR,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.yearTwoPlusYearThreeAveragedStats.YPRR > 2.249 &&
            player.yearTwoPlusYearThreeAveragedStats.YPRR < 2.5
          ) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats.YPRR
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYPRR = {
              value: player.yearTwoPlusYearThreeAveragedStats.YPRR,
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.yearTwoPlusYearThreeAveragedStats.YPRR > 2.49 &&
            player.yearTwoPlusYearThreeAveragedStats.YPRR < 3.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.YPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYPRR = {
              value: player.yearTwoPlusYearThreeAveragedStats.YPRR,
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats.YPRR > 3.49) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats.YPRR
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytYPRR = {
              value: player.yearTwoPlusYearThreeAveragedStats.YPRR,
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats.YPRR < 2) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.YPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
              value: player.careerAveragedStats.YPRR,
              score: -1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 1;
          }

          // bound 2
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.YPRR > 1.99 &&
            player.careerAveragedStats.YPRR < 2.2
          ) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.YPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
              value: player.careerAveragedStats.YPRR,
              score: -0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - 0.5;
          }

          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (
            player.careerAveragedStats.YPRR > 2.199 &&
            player.careerAveragedStats.YPRR < 2.3
          ) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.YPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
              value: player.careerAveragedStats.YPRR,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }

          //
          // bound 4
          //
          // 50% of hits are below this mark/ 50% of hits above it
          //   looking to have only 3 in this group in initial sample
          //
          if (
            player.careerAveragedStats.YPRR > 2.29 &&
            player.careerAveragedStats.YPRR < 2.4
          ) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.YPRR);

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

          //
          // bound 5
          //
          // this group is above the 50% mark but below elite mark
          //

          if (
            player.careerAveragedStats.YPRR > 2.39 &&
            player.careerAveragedStats.YPRR < 3
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.YPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
              value: player.careerAveragedStats.YPRR,
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound
          // looking for only 5 in initial sample

          if (player.careerAveragedStats.YPRR > 2.99) {
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.YPRR);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgYPRR = {
              value: player.careerAveragedStats.YPRR,
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
          }

          ////////////////////////////////////////////
          ///////////////////////////////////////////
          //      start next stat below here
          ///////////////////////////////////////////

          ////////////////////////////////////////////////////////////////////////////////

          //////////////////////////////////////////////////////end
        }
      });
      /// setting upper and lower bounds for each stat to overll calcAllWrProspectsObjects
      //

      calcAllWrProspectsObjects['1D/RR-careerAvg'] = {
        lb: 8,
        threshold: 10.2,
        ub: 'none',
      };

      //   calcAllWrProspectsObjects['REC Grade-ytyt'] = {
      //     zb: 65,
      //     tb: '65-71',
      //     lmb: '71-74',
      //     mb: `74-79`,
      //     umb: '79-84.5',
      //     eb: 84.5,
      //   };
      //   calcAllWrProspectsObjects['REC Grade-careerAvg'] = {
      //     zb: 62.5,
      //     tb: '62.5-70',
      //     lmb: '70-72',
      //     mb: `72-74`,
      //     umb: '74-80',
      //     eb: 80,
      //   };
      //   calcAllWrProspectsObjects['Targets-ytyt'] = {
      //     zb: 35,
      //     tb: '35-57.5',
      //     lmb: '57.5-75',
      //     mb: `75-80`,
      //     umb: '80-109',
      //     eb: 109,
      //   };
      //   calcAllWrProspectsObjects['Targets-careerAvg'] = {
      //     zb: 38,
      //     tb: '38-50',
      //     lmb: '50-65',
      //     mb: `65-72`,
      //     umb: '72-100',
      //     eb: 100,
      //   };
      //   calcAllWrProspectsObjects['TGTs/G-ytyt'] = {
      //     zb: 2.5,
      //     tb: '2.5-4',
      //     lmb: '4-5.5',
      //     mb: `5.5-6.5`,
      //     umb: '6.5-8',
      //     eb: 8,
      //   };
      //   calcAllWrProspectsObjects['TGTs/G-careerAvg'] = {
      //     zb: 3,
      //     tb: '3-3.5',
      //     lmb: '3.5-4.5',
      //     mb: `4.5-5.25`,
      //     umb: '5.25-6.75',
      //     eb: 6.75,
      //   };
      //   calcAllWrProspectsObjects['RR-ytyt'] = {
      //     zb: 215,
      //     tb: '215-235',
      //     lmb: '235-305',
      //     mb: `305-325`,
      //     umb: '325-410',
      //     eb: 410,
      //   };
      //   calcAllWrProspectsObjects['RR-careerAvg'] = {
      //     zb: 149,
      //     tb: '150-225',
      //     lmb: '225-270',
      //     mb: `270-305`,
      //     umb: '305-350',
      //     eb: 350,
      //   };
      //   calcAllWrProspectsObjects['TPRR-ytyt'] = {
      //     zb: 0.15,
      //     tb: '.15-.2',
      //     lmb: '.2-.22',
      //     mb: `.22-.24`,
      //     umb: '.24-.28',
      //     eb: 0.28,
      //   };
      //   calcAllWrProspectsObjects['TPRR-careerAvg'] = {
      //     zb: 0.15,
      //     tb: '.15-.22',
      //     lmb: '.22-.24',
      //     mb: `.24-.25`,
      //     umb: '.25-.27',
      //     eb: 0.27,
      //   };
      //   calcAllWrProspectsObjects['YAC/Rec-ytyt'] = {
      //     zb: 2,
      //     tb: '2-2.75',
      //     lmb: '2.75-5',
      //     mb: `5-6`,
      //     umb: '6-8',
      //     eb: 8,
      //   };
      //   calcAllWrProspectsObjects['YAC/Rec-careerAvg'] = {
      //     zb: 2.5,
      //     tb: '2.5-3.5',
      //     lmb: '3.5-5',
      //     mb: `5-5.5`,
      //     umb: '5.5-7',
      //     eb: 7,
      //   };
      //      calcAllWrProspectsObjects['YPRR-ytyt'] = {
      //           zb: 1.9,
      //           tb: '1.9-2.1',
      //           lmb: '2.1-2.25',
      //           mb: `2.25-2.5`,
      //           umb: '2.5-3.5',
      //           eb: 3.5,
      //         };

      //   calcAllWrProspectsObjects['YPRR-careerAvg'] = {
      //     zb: 2,
      //     tb: '2-2.2',
      //     lmb: '2.2-2.3',
      //     mb: `2.3-2.4`,
      //     umb: '2.4-3',
      //     eb: 3,
      //   };
    }
  });
});

// ['Man YPRR']

console.log(calcAllWrProspectsObjects);

// let objectsArray = Object.entries(calcAllWrProspectsObjects);

// // // console.log(objectsArray)

// objectsArray.forEach(p => {
//   p.forEach(player => {
//     console.log(player);
//   });
// });