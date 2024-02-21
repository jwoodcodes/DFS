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
          if (player.careerAveragedStats['TGTs/G'] > 2.99 &&
          player.careerAveragedStats['TGTs/G'] < 3.5) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
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
          if (player.careerAveragedStats['TGTs/G'] > 3.499 && player.careerAveragedStats['TGTs/G'] < 4.5) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats['TGTs/G'])

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgTargetsPerGame = {
              value: player.careerAveragedStats['TGTs/G'],
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
            player.careerAveragedStats['TGTs/G'] > 4.49 && player.careerAveragedStats['TGTs/G'] < 5.25
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
            player.careerAveragedStats['TGTs/G'] > 5.249 && player.careerAveragedStats['TGTs/G'] < 6.75
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
          if (player.yearTwoPlusYearThreeAveragedStats.RR > 214.99 &&
          player.yearTwoPlusYearThreeAveragedStats.RR < 235) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.RR)
            
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRoutesRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.RR,
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
          if (player.yearTwoPlusYearThreeAveragedStats.RR > 234.99 && player.yearTwoPlusYearThreeAveragedStats.RR < 305) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytRoutesRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.RR,
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
            player.yearTwoPlusYearThreeAveragedStats.RR > 304.99 && player.yearTwoPlusYearThreeAveragedStats.RR < 325
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
            player.yearTwoPlusYearThreeAveragedStats.RR > 324.99 && player.yearTwoPlusYearThreeAveragedStats.RR < 410
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
          if (player.careerAveragedStats.RR > 148.99 &&
          player.careerAveragedStats.RR < 225) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
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
          if (player.careerAveragedStats.RR > 224.99 && player.careerAveragedStats.RR < 270) {
            // num = num + 1
            // console.log(num, player.name, player.careerAveragedStats.RR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].careerAvgRoutesRun = {
              value: player.careerAveragedStats.RR,
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
            player.careerAveragedStats.RR > 269.99 && player.careerAveragedStats.RR < 305
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
            player.careerAveragedStats.RR > 304.99 && player.careerAveragedStats.RR < 350
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
          if (player.yearTwoPlusYearThreeAveragedStats.TPRR < .15) {
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
          if (player.yearTwoPlusYearThreeAveragedStats.TPRR > .149 &&
          player.yearTwoPlusYearThreeAveragedStats.TPRR < .2) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.TPRR)
            
            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.TPRR,
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
          if (player.yearTwoPlusYearThreeAveragedStats.TPRR > .199 && player.yearTwoPlusYearThreeAveragedStats.TPRR < .22) {
            // num = num + 1
            // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats.TPRR)

            //
            // change whats after calcAllWrProspectsObjects[playerName] below!!!!!!
            //
            calcAllWrProspectsObjects[playerName].ytytTargetsPerRouteRun = {
              value: player.yearTwoPlusYearThreeAveragedStats.TPRR,
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
            player.yearTwoPlusYearThreeAveragedStats.TPRR > .2199 && player.yearTwoPlusYearThreeAveragedStats.TPRR < .24
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
            player.yearTwoPlusYearThreeAveragedStats.TPRR > .2399 && player.yearTwoPlusYearThreeAveragedStats.TPRR < .28
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

          if (player.yearTwoPlusYearThreeAveragedStats.TPRR > .2799) {
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


            ////////////////////////////////////////////////////////////////////////////////
           ////////////////////////////////////////////////////////////////////////////////

  

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
    calcAllWrProspectsObjects['TGTs/G-careerAvg'] = { zb: 3, tb: '3-3.5', lmb: '3.5-4.5', mb: `4.5-5.25`, umb: '5.25-6.75', eb: 6.75};
     calcAllWrProspectsObjects['RR-ytyt'] = { zb: 215, tb: '215-235', lmb: '235-305', mb: `305-325`, umb: '325-410', eb: 410};
    calcAllWrProspectsObjects['RR-careerAvg'] = { zb: 149, tb: '150-225', lmb: '225-270', mb: `270-305`, umb: '305-350', eb: 350};
  calcAllWrProspectsObjects['TPRR-ytyt'] = { zb: .15, tb: '.15-.2', lmb: '.2-.22', mb: `.22-.24`, umb: '.24-.28', eb: .28};
    }
  });
});

// .TPRR



// console.log(calcAllWrProspectsObjects);

// let objectsArray = Object.entries(calcAllWrProspectsObjects);

// // // console.log(objectsArray)

// objectsArray.forEach(p => {
//   p.forEach(player => {
//     console.log(player);
//   });
// });
