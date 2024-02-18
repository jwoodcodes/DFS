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

          // bound 1
          //
          // only ten percent of hit sample below this number
          // looking to have only 3 in this group in initial sample
          //
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
          // bound 2
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 9.99 && player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 15.6) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

          //
          // bound 3
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 15.59 && player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 17.6
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
              score: 1,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 1;
          }

             //
             // bound 4
             //
           // this group is above the 50% mark but below elite mark
           //   
           
           if (
            player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 17.59 && player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 26
          ) {
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

          //
          // bound 5
          //
          // only top 18% of Hits sample above this elite bound 
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 25.99) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
              score: 2,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 2;
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

          // year Two plus year three

          // only ten percent of hit sample below this number
          if (player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 44) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['REC Grade']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 39.9 &&
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 71
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
          // seventy percent of hit sample above this number
          if (player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 71) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['REC Grade']
            // );

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

          ////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////

         

          // career avg

          // only ten percent of hit sample below this number
          if (player.careerAveragedStats['REC Grade'] < 56) {
            
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats['REC Grade']);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.careerAveragedStats['REC Grade'] > 55.99 &&
            player.careerAveragedStats['REC Grade'] < 68
          ) {
            //
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.careerAveragedStats['REC Grade'] > 67.99) {
            //
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['REC Grade']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
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
          if (player.yearTwoPlusYearThreeAveragedStats.Targets < 57) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats.Targets
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.yearTwoPlusYearThreeAveragedStats.Targets > 56.99 &&
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
          // seventy percent of hit sample above this number
          //
          if (player.yearTwoPlusYearThreeAveragedStats.Targets > 74.99) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats.Targets
            // );

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

          ////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////

            // career avg

          // only ten percent of hit sample below this number
          if (player.careerAveragedStats.Targets < 37) {
            
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats.Targets);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.careerAveragedStats.Targets > 36.99 &&
            player.careerAveragedStats.Targets < 71.5
          ) {
            //
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.careerAveragedStats.Targets > 71.49) {
            //
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats.Targets
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
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

        
          // start next stat below here

          // year Two plus year three

          // only ten percent of hit sample below this number
          if (player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 3.099) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['TGTs/G']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 3.099 &&
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 5
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
          // seventy percent of hit sample above this number
          if (player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 4.99) {
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['TGTs/G']
            // );

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

          ////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////

          // career avg

          // only ten percent of hit sample below this number
          if (player.careerAveragedStats['TGTs/G'] < 3.1) {
            
            // num = num + 1;
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G']);

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: 0,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0;
          }

          //
          // this is the group between the upper and lower bounds
          if (
            player.careerAveragedStats['TGTs/G'] > 3.099 &&
            player.careerAveragedStats['TGTs/G'] < 4.349
          ) {
            //
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
              score: 0.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          }
          //
          // seventy percent of hit sample above this number
          if (player.careerAveragedStats['TGTs/G'] > 4.35) {
            //
            // num = num + 1;
            // console.log(
            //   num,
            //   player.name,
            //   player.yearTwoPlusYearThreeAveragedStats['TGTs/G']
            // );

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[
              playerName
            ].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
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
      calcAllWrProspectsObjects['MTF/REC %-ytyt'] = { lb: 10, lmb: '10-15.6', mb: `15.6-17.6`, umb: '17.6-26', eb: 26};
      calcAllWrProspectsObjects['MTF/REC %-avg'] = { lb: 10.5, ub: 15 };
      calcAllWrProspectsObjects['1D/Snap-ytyt'] = { lb: 7.5, ub: 9 };
      calcAllWrProspectsObjects['1D/Snap-avg'] = { lb: 7.75, ub: 9 };
      calcAllWrProspectsObjects['1D/RR-ytyt'] = { lb: 8, ub: 9.5 };
      calcAllWrProspectsObjects['1D/RR-avg'] = { lb: 8.25, ub: 9.5 };
      calcAllWrProspectsObjects['REC Grade-ytyt'] = { lb: 44, ub: 71 };
      calcAllWrProspectsObjects['REC Grade-avg'] = { lb: 56, ub: 68 };
      calcAllWrProspectsObjects['Targets-ytyt'] = { lb: 57, ub: 75 };
      calcAllWrProspectsObjects['TGTs/G-ytyt'] = { lb: 3.1, ub: 5 };
      calcAllWrProspectsObjects['TGTs/G-avg'] = { lb: 3.1, ub: 4.35 };
    }
  });
});

// 'TGTs/G'

console.log(calcAllWrProspectsObjects);

// let objectsArray = Object.entries(calcAllWrProspectsObjects);

// // // console.log(objectsArray)

// objectsArray.forEach(p => {
//   p.forEach(player => {
//     console.log(player);
//   });
// });
