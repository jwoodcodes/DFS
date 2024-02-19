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
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 7.75) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
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
          if (player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 7.74 &&
          player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 10) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
              value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
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
          // bound 4
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
             // bound 5
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
          // bound 6
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

          // bound 1
          //
          // the highest mark that has zero of the hits sample below this number
          // zero players from Hit sample in this group in initial sample
          //
          if (player.careerAveragedStats['MTF/REC %'] < 4.4) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
              value: player.careerAveragedStats['MTF/REC %'],
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
          if (player.careerAveragedStats['MTF/REC %'] > 4.399 &&
          player.careerAveragedStats['MTF/REC %'] < 10.5) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
              value: player.careerAveragedStats['MTF/REC %'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.careerAveragedStats['MTF/REC %'] > 10.499 && player.careerAveragedStats['MTF/REC %'] < 15.1) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
              value: player.careerAveragedStats['MTF/REC %'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.careerAveragedStats['MTF/REC %'] > 15.099 && player.careerAveragedStats['MTF/REC %'] < 17.1
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
              value: player.careerAveragedStats['MTF/REC %'],
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
            player.careerAveragedStats['MTF/REC %'] > 17.099 && player.careerAveragedStats['MTF/REC %'] < 26
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])

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

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound 
          // looking for only 5 in initial sample

          if (player.careerAveragedStats['MTF/REC %'] > 25.99) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
              value: player.careerAveragedStats['MTF/REC %'],
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
          if (player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] < 6.5) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
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
          if (player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] > 6.499 &&
          player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] < 7.75) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] > 7.749 && player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] < 9) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] > 8.99 && player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] < 9.9
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
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
            player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] > 9.899 && player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] < 13.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/Snap'])

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

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound 
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats['1D/Snap'] > 13.499) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerSnap = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/Snap'],
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
          if (player.careerAveragedStats['1D/Snap'] < 5.5) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerSnap = {
              value: player.careerAveragedStats['1D/Snap'],
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
          if (player.careerAveragedStats['1D/Snap'] > 5.499 &&
          player.careerAveragedStats['1D/Snap'] < 7.75) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerSnap = {
              value: player.careerAveragedStats['1D/Snap'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.careerAveragedStats['1D/Snap'] > 7.749 && player.careerAveragedStats['1D/Snap'] < 9) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerSnap = {
              value: player.careerAveragedStats['1D/Snap'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }


          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.careerAveragedStats['1D/Snap'] > 8.999 && player.careerAveragedStats['1D/Snap'] < 9.9
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerSnap = {
              value: player.careerAveragedStats['1D/Snap'],
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
            player.careerAveragedStats['1D/Snap'] > 9.899 && player.careerAveragedStats['1D/Snap'] < 12.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/Snap'])

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

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound 
          // looking for only 5 in initial sample

          if (player.careerAveragedStats['1D/Snap'] > 12.499) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/Snap'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerSnap = {
              value: player.careerAveragedStats['1D/Snap'],
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
          if (player.yearTwoPlusYearThreeAveragedStats['1D/RR'] < 7) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
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
          if (player.yearTwoPlusYearThreeAveragedStats['1D/RR'] > 6.999 &&
          player.yearTwoPlusYearThreeAveragedStats['1D/RR'] < 8) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['1D/RR'] > 7.999 && player.yearTwoPlusYearThreeAveragedStats['1D/RR'] < 9.75) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

          
          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.yearTwoPlusYearThreeAveragedStats['1D/RR'] > 9.7499 && player.yearTwoPlusYearThreeAveragedStats['1D/RR'] < 10.3
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
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
            player.yearTwoPlusYearThreeAveragedStats['1D/RR'] > 10.299 && player.yearTwoPlusYearThreeAveragedStats['1D/RR'] < 13.5
          ) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/RR'])

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

          //
          // bound 6
          //
          // only top 18% of Hits sample above this elite bound 
          // looking for only 5 in initial sample

          if (player.yearTwoPlusYearThreeAveragedStats['1D/RR'] > 13.499) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytFirstDownPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats['1D/RR'],
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
          if (player.careerAveragedStats['1D/RR'] < 5.75) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
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
          if (player.careerAveragedStats['1D/RR'] > 5.7499 &&
          player.careerAveragedStats['1D/RR'] < 8.1) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.careerAveragedStats['1D/RR'] > 8.099 && player.careerAveragedStats['1D/RR'] < 9.75) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

    
          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.careerAveragedStats['1D/RR'] > 9.7499 && player.careerAveragedStats['1D/RR'] < 10.35
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
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
            player.careerAveragedStats['1D/RR'] > 10.3499 && player.careerAveragedStats['1D/RR'] < 13
          ) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
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

          if (player.careerAveragedStats['1D/RR'] > 12.99) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['1D/RR'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgFirstDownPerRouteRun = {
              value: player.careerAveragedStats['1D/RR'],
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
          if (player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 64.99 &&
          player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 71) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 70.99 && player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 74) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRecGrade = {
              value: player.yearTwoPlusYearThreeAveragedStats['REC Grade'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

          

          
          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 73.99 && player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 79
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
            player.yearTwoPlusYearThreeAveragedStats['REC Grade'] > 78.99 && player.yearTwoPlusYearThreeAveragedStats['REC Grade'] < 84.5
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
          if (player.careerAveragedStats['REC Grade'] > 62.499 &&
          player.careerAveragedStats['REC Grade'] < 70) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.careerAveragedStats['REC Grade'] > 69.99 && player.careerAveragedStats['REC Grade'] < 72) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['REC Grade'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRecGrade = {
              value: player.careerAveragedStats['REC Grade'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

          

    
          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.careerAveragedStats['REC Grade'] > 71.99 && player.careerAveragedStats['REC Grade'] < 74
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
            player.careerAveragedStats['REC Grade'] > 73.99 && player.careerAveragedStats['REC Grade'] < 80
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
          if (player.yearTwoPlusYearThreeAveragedStats.Targets > 34.99 &&
          player.yearTwoPlusYearThreeAveragedStats.Targets < 57.5) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.Targets)
            
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats.Targets > 57.49 && player.yearTwoPlusYearThreeAveragedStats.Targets < 75) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargets = {
              value: player.yearTwoPlusYearThreeAveragedStats.Targets,
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

          

          
          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.yearTwoPlusYearThreeAveragedStats.Targets > 74.99 && player.yearTwoPlusYearThreeAveragedStats.Targets < 80
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
            player.yearTwoPlusYearThreeAveragedStats.Targets > 79.99 && player.yearTwoPlusYearThreeAveragedStats.Targets < 109
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
          if (player.careerAveragedStats.Targets > 37.99 &&
          player.careerAveragedStats.Targets < 50) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.careerAveragedStats.Targets > 49.99 && player.careerAveragedStats.Targets < 65) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.Targets)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargets = {
              value: player.careerAveragedStats.Targets,
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

        

    
          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.careerAveragedStats.Targets > 64.99 && player.careerAveragedStats.Targets < 72
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
            player.careerAveragedStats.Targets > 71.99 && player.careerAveragedStats.Targets < 100
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
          if (player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 2.49 &&
          player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 4) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['TGTs/G'])
            
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: -.5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore - .5;
          }

          
          //
          // bound 3
          //
          // 30% of hits sample below this number
          // looking to have only 5 in this group in initial sample
          //
          if (player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 3.99 && player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 5.5) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerGame = {
              value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
              score: .5,
            };
            calcAllWrProspectsObjects[playerName].finalScore =
              calcAllWrProspectsObjects[playerName].finalScore + .5;
          }

          
          
          
          //
          // bound 4
          //
           // 50% of hits are below this mark/ 50% of hits above it
           //   looking to have only 3 in this group in initial sample
           //
           if (
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 5.49 && player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 6.5
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
            player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] > 6.49 && player.yearTwoPlusYearThreeAveragedStats['TGTs/G'] < 8
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
         

          

          // // career avg

          // // only ten percent of hit sample below this number
          // if (player.careerAveragedStats['TGTs/G'] < 3.1) {
            
          //   // num = num + 1;
          //   // console.log(num, player.name, player.careerAveragedStats['TGTs/G']);

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[
          //     playerName
          //   ].careerAvgTargetsPerGame = {
          //     value: player.yearTwoPlusYearThreeAveragedStats['TGTs/G'],
          //     score: 0,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 0;
          // }

          // //
          // // this is the group between the upper and lower bounds
          // if (
          //   player.careerAveragedStats['TGTs/G'] > 3.099 &&
          //   player.careerAveragedStats['TGTs/G'] < 4.349
          // ) {
          //   //
          //   // num = num + 1
          //   // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[
          //     playerName
          //   ].careerAvgTargetsPerGame = {
          //     value: player.careerAveragedStats['TGTs/G'],
          //     score: 0.5,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 0.5;
          // }
          // //
          // // seventy percent of hit sample above this number
          // if (player.careerAveragedStats['TGTs/G'] > 4.35) {
          //   //
          //   // num = num + 1;
          //   // console.log(
          //   //   num,
          //   //   player.name,
          //   //   player.yearTwoPlusYearThreeAveragedStats['TGTs/G']
          //   // );

          //   //
          //   // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
          //   //
          //   calcAllWrProspectsObjects[
          //     playerName
          //   ].careerAvgTargetsPerGame = {
          //     value: player.careerAveragedStats['TGTs/G'],
          //     score: 1.5,
          //   };
          //   calcAllWrProspectsObjects[playerName].finalScore =
          //     calcAllWrProspectsObjects[playerName].finalScore + 1.5;
          // }

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
      calcAllWrProspectsObjects['MTF/REC %-ytyt'] = { zb: 7.75, tb: '7.75-10', lmb: '10-15.6', mb: `15.6-17.6`, umb: '17.6-26', eb: 26};
       calcAllWrProspectsObjects['MTF/REC %-careerAvg'] = { zb: 4.4, tb: '4.4-10.5', lmb: '10.5-15.1', mb: `15.1-17.1`, umb: '17.1-26', eb: 26};
      calcAllWrProspectsObjects['1D/Snap-ytyt'] = { zb: 6.5, tb: '6.5-7.75', lmb: '7.75-9', mb: `9-9.9`, umb: '9.9-13.5', eb: 13.5};
      calcAllWrProspectsObjects['1D/Snap-careerAvg'] = { zb: 5.5, tb: '5.5-7.75', lmb: '7.75-9', mb: `9-9.9`, umb: '9.9-12.5', eb: 12.5};
      calcAllWrProspectsObjects['1D/RR-ytyt'] = { zb: 7, tb: '7-8', lmb: '8-9.75', mb: `9.75-10.3`, umb: '10.3-13.5', eb: 13.5};
      calcAllWrProspectsObjects['1D/RR-careerAvg'] = { zb: 5.75, tb: '5.75-8.1', lmb: '8.1-9.75', mb: `9.75-10.35`, umb: '10.35-13', eb: 13};
      calcAllWrProspectsObjects['REC Grade-ytyt'] = { zb: 65, tb: '65-71', lmb: '71-74', mb: `74-79`, umb: '79-84.5', eb: 84.5};
      calcAllWrProspectsObjects['REC Grade-careerAvg'] = { zb: 62.5, tb: '62.5-70', lmb: '70-72', mb: `72-74`, umb: '74-80', eb: 80};
      calcAllWrProspectsObjects['Targets-ytyt'] = { zb: 35, tb: '35-57.5', lmb: '57.5-75', mb: `75-80`, umb: '80-109', eb: 109};
     calcAllWrProspectsObjects['Targets-careerAvg'] = { zb: 38, tb: '38-50', lmb: '50-65', mb: `65-72`, umb: '72-100', eb: 100};
    calcAllWrProspectsObjects['TGTs/G-ytyt'] = { zb: 2.5, tb: '2.5-4', lmb: '4-5.5', mb: `5.5-6.5`, umb: '6.5-8', eb: 8};
    
      
      
      
      calcAllWrProspectsObjects['TGTs/G-avg'] = { lb: 3.1, ub: 4.35 };
    }
  });
});

// 

// 'TGTs/G'

console.log(calcAllWrProspectsObjects);

// let objectsArray = Object.entries(calcAllWrProspectsObjects);

// // // console.log(objectsArray)

// objectsArray.forEach(p => {
//   p.forEach(player => {
//     console.log(player);
//   });
// });
