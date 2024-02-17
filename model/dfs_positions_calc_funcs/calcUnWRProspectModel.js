const allWrProspectsObjects = require('./unWRProspectModel');
const WRProspectModelData = require('../DataForUndroppablesProspectModels/WRProspectModelData');

// console.log(allWrProspectsObjects)

// allWrProspectsObjects.forEach((player) => {
//     console.log(player)
// })
const allWrProspectsNamesArray = [];

WRProspectModelData.forEach(playerArray => {
  playerArray.forEach(player => {
    // console.log(player.Player)

    let curProspectName = player.Player;
    // console.log(allWrProspectsNamesArray.includes(curProspectName))
    if (allWrProspectsNamesArray.includes(curProspectName) === false) {
      allWrProspectsNamesArray.push(curProspectName);
    }
  });
});

//   console.log(allWrProspectsNamesArray)

// working with the data to construct individual player objects

const calcAllWrProspectsObjects = {};

allWrProspectsNamesArray.forEach(player => {
  calcAllWrProspectsObjects[player] = {};
});

//   console.log(calcAllWrProspectsObjects)

let allHitsNamesArray = Object.keys(calcAllWrProspectsObjects);

//   console.log(allHitsNamesArray)

const test = Object.entries(allWrProspectsObjects);

// console.log(test)
let num = 0;
test.forEach(topPlayer => {
  topPlayer.forEach(player => {
    if (player.name) {
      allHitsNamesArray.forEach(playerName => {
        if (player.name === playerName) {
          calcAllWrProspectsObjects[playerName].finalScore = 0;

          // year Two plus year three

          // only ten percent of hit sample below this number
          if (player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 10) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 10 &&
            player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 15.6
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 15.6) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          ////////////////////////////////////////////////////////////////////////////////

          // career avg

          // only ten percent of hit sample below this number
          if (player.careerAveragedStats['MTF/REC %'] < 10.5) {
            //     num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.careerAveragedStats['MTF/REC %'] > 10.5 &&
            player.careerAveragedStats['MTF/REC %'] < 15
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
              value: player.careerAveragedStats['MTF/REC %'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.careerAveragedStats['MTF/REC %'] > 15) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
              value: player.careerAveragedStats['MTF/REC %'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          ///////////////////////////////////////////
          // start next stat below here

          // year Two plus year three

          // only ten percent of hit sample below this number
          if (player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] < 7.5) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['1D/Snap']
            // );
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] > 7.5 &&
            player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] < 9
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] > 9) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['1D/Snap']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////

          // career avg

          // only ten percent of hit sample below this number
          if (player.careerAveragedStats['1D/Snap'] < 7.75) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.careerAveragedStats['1D/Snap']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.careerAveragedStats['1D/Snap'] > 7.75 &&
            player.careerAveragedStats['1D/Snap'] < 9
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerSnap = {
              value: player.careerAveragedStats['1D/Snap'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.careerAveragedStats['1D/Snap'] > 9) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['1D/Snap']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerSnap = {
              value: player.careerAveragedStats['1D/Snap'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          ///////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////
          // start next stat below here

          // year Two plus year three

          // only ten percent of hit sample below this number
          if (player.yearTwoPlusYearThreeAveragedStats['1D/RR'] < 8) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['1D/RR']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.yearTwoPlusYearThreeAveragedStats['1D/RR'] > 8 &&
            player.yearTwoPlusYearThreeAveragedStats['1D/RR'] < 9.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.yearTwoPlusYearThreeAveragedStats['1D/RR'] > 9.5) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['1D/RR']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          ////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////

          // career avg

          // only ten percent of hit sample below this number
          if (player.careerAveragedStats['1D/RR'] < 8.25) {
            //
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats['1D/RR']);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.careerAveragedStats['1D/RR'] > 8.25 &&
            player.careerAveragedStats['1D/RR'] < 9.5
          ) {
            //
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.careerAveragedStats['1D/RR'] > 9.5) {
            //
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['1D/RR']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
              score: 1.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          }

          ///////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////
          //////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////
          // start next stat below here

          ////////////////////////////////////////////////////////////////////////////////

          //////////////////////////////////////////////////////end
        }
      });
      /// setting upper and lower bounds for each stat to overll calcAllWrProspectsObjects
      calcAllWrProspectsObjects['MTF/REC %-ytyt'] = { lb: 10, ub: 15.6 };
      calcAllWrProspectsObjects['MTF/REC %-avg'] = { lb: 10.5, ub: 15 };
      calcAllWrProspectsObjects['1D/Snap-ytyt'] = { lb: 7.5, ub: 9 };
      calcAllWrProspectsObjects['1D/Snap-avg'] = { lb: 7.75, ub: 9 };
      calcAllWrProspectsObjects['1D/RR-ytyt'] = { lb: 8, ub: 9.5 };
      calcAllWrProspectsObjects['1D/RR-avg'] = { lb: 8.25, ub: 9.5 };
    }
  });
});

// '1D/RR'

console.log(calcAllWrProspectsObjects);

// let objectsArray = Object.entries(calcAllWrProspectsObjects);

// // // console.log(objectsArray)

// objectsArray.forEach(p => {
//   p.forEach(player => {
//     console.log(player);
//   });
// });
