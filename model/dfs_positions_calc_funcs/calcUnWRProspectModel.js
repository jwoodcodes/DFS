const allWrProspectsObjects = require('./unWRProspectModel');
const WRProspectModelData = require('../DataForUndroppablesProspectModels/WRProspectModelData'); 

// console.log(allWrProspectsObjects)

// allWrProspectsObjects.forEach((player) => {
//     console.log(player)
// })
const allWrProspectsNamesArray = []

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

  let allHitsNamesArray = Object.keys(calcAllWrProspectsObjects)

//   console.log(allHitsNamesArray)

const test = Object.entries(allWrProspectsObjects)

// console.log(test)
let num = 0
test.forEach((topPlayer) => {
   
    topPlayer.forEach((player) => {
       
        if(player.name) {
            allHitsNamesArray.forEach((playerName) => {
              if(player.name === playerName) { 
                
                calcAllWrProspectsObjects[playerName].finalScore = 0
                
                // year Two plus year three

                // only ten percent of hit sample below this number
                if(player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 10) {
                    // num = num + 1
                // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])
              
                calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
                    value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
                    score: 0
                }
                calcAllWrProspectsObjects[playerName].finalScore = calcAllWrProspectsObjects[playerName].finalScore + 0           
                }

                //
                // this is the group between the upper and lower bounds
                if(player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 10 && player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] < 15.6) {
                    // num = num + 1
                    // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])
                    
                  
                    calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
                        value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
                        score: .5
                    }
                    calcAllWrProspectsObjects[playerName].finalScore = calcAllWrProspectsObjects[playerName].finalScore + .5           
                    }
                //
                // seventy percent of hit sample above this number
                    if(player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'] > 15.6) {
                        // num = num + 1
                        // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])
                      
                        calcAllWrProspectsObjects[playerName].ytytMTFRecPercent = {
                            value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
                            score: 1
                        }
                        calcAllWrProspectsObjects[playerName].finalScore = calcAllWrProspectsObjects[playerName].finalScore + 1           
                        }

                 

               ////////////////////////////////////////////////////////////////////////////////

               // career avg
            
                // only ten percent of hit sample below this number
                if(player.careerAveragedStats['MTF/REC %'] < 10.5) {
                //     num = num + 1
                // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])
              
                calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
                    value: player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'],
                    score: 0
                }
                calcAllWrProspectsObjects[playerName].finalScore = calcAllWrProspectsObjects[playerName].finalScore + 0           
                }

                //
                // this is the group between the upper and lower bounds
                if(player.careerAveragedStats['MTF/REC %'] > 10.5 && player.careerAveragedStats['MTF/REC %'] < 15) {
                    // num = num + 1
                    // console.log(num, player.name, player.careerAveragedStats['MTF/REC %'])
                  
                    calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
                        value: player.careerAveragedStats['MTF/REC %'],
                        score: .5
                    }
                    calcAllWrProspectsObjects[playerName].finalScore = calcAllWrProspectsObjects[playerName].finalScore + .5           
                    }
                //
                // seventy percent of hit sample above this number
                    if(player.careerAveragedStats['MTF/REC %'] > 15) {
                        // num = num + 1
                        // console.log(num, player.name, player.yearTwoPlusYearThreeAveragedStats['MTF/REC %'])
                      
                        calcAllWrProspectsObjects[playerName].careerAvgMTFRecPercent = {
                            value: player.careerAveragedStats['MTF/REC %'],
                            score: 1
                        }
                        calcAllWrProspectsObjects[playerName].finalScore = calcAllWrProspectsObjects[playerName].finalScore + 1           
                        }

                ///////////////////////////////////////////
                // start next stat below here


                
                //////////////////////////////////////////////////////end
              }
              
                
            })
            calcAllWrProspectsObjects['MTF/REC %-ytyt'] = {lb: 10, ub: 15.6}
            calcAllWrProspectsObjects['MTF/REC %-avg'] = {lb: 10.5, ub: 15}
        }
    })
})

console.log(calcAllWrProspectsObjects)

let objectsArray = Object.entries(calcAllWrProspectsObjects)

// console.log(objectsArray)

objectsArray.forEach((p) => {
    
    p.forEach((player) => {
        // console.log(player)
    })

})