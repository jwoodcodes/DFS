const { type } = require('express/lib/response')
const WRProspectModelData = require('../DataForUndroppablesProspectModels/WRProspectModelData')



const allWrProspectsNamesArray = []

// pushing to allWrProspectsNamesArray all player names in data set

WRProspectModelData.forEach((playerArray) => {
    playerArray.forEach((player) => {
        // console.log(player.Player)

        let curProspectName = player.Player
        // console.log(allWrProspectsNamesArray.includes(curProspectName))
        if(allWrProspectsNamesArray.includes(curProspectName) === false) {
            allWrProspectsNamesArray.push(curProspectName)
        }
    })
  })

//   console.log(allWrProspectsNamesArray)

// working with the data to construct individual player objects



const allWrProspectsObjects = {};

allWrProspectsNamesArray.forEach((player) => {
    allWrProspectsObjects[player] = {}
})

// console.log(allWrProspectsObjects)




  WRProspectModelData.forEach((playerArray) => {
    playerArray.forEach((player) => {
        // console.log(player.Player)
        allWrProspectsNamesArray.forEach((playerName) => {
            if(playerName === player.Player) {
                // console.log(player)
                for (const [key, value] of Object.entries(allWrProspectsObjects)) {
                    // console.log(`${key}: ${value}`);
                    // console.log(key)
                  
                if(playerName === key) {
                    // let tempName = 
                    // setting yearOne
                    allWrProspectsObjects[playerName].name = playerName
                    if(!allWrProspectsObjects[playerName].yearOne) {
                        allWrProspectsObjects[playerName].yearOne = player
                    }
                    //setting yearTwo
                    if(allWrProspectsObjects[playerName].yearOne && !allWrProspectsObjects[playerName].yearTwo && player !== allWrProspectsObjects[playerName].yearOne) {
                        allWrProspectsObjects[playerName].yearTwo = player
                    }
                    //settng yearThree
                    
                    if(allWrProspectsObjects[playerName].yearOne && allWrProspectsObjects[playerName].yearTwo && !allWrProspectsObjects[playerName].yearThree && player !== allWrProspectsObjects[playerName].yearOne && player !== allWrProspectsObjects[playerName].yearTwo) {
                        allWrProspectsObjects[playerName].yearThree = player
                    }
                    //setting yearFour
                    if(allWrProspectsObjects[playerName].yearOne && allWrProspectsObjects[playerName].yearTwo && allWrProspectsObjects[playerName].yearThree && !allWrProspectsObjects[playerName].yearFour && player !== allWrProspectsObjects[playerName].yearOne && player !== allWrProspectsObjects[playerName].yearTwo && player !== allWrProspectsObjects[playerName].yearThree) {
                        allWrProspectsObjects[playerName].yearFour = player
                    }
                    
                    // if(player['Year Played'] === '1') {
                    //     allWrProspectsObjects[playerName].yearOne = player
                    // }
                    // if(player['Year Played'] === '2') {
                    //     allWrProspectsObjects[playerName].yearTwo = player
                    // }
                    // if(player['Year Played'] === '3') {
                    //     allWrProspectsObjects[playerName].yearThree = player
                    // }
                    // if(player['Year Played'] === '4') {
                    //     allWrProspectsObjects[playerName].yearFour = player
                    // }
                    
                }
            }
            }
            
        })
        
    })
  })


// console.log(allWrProspectsObjects)

for (const [key1, value1] of Object.entries(allWrProspectsObjects)) {
    // console.log(`${key1}: ${value1}`);
    
    
    for (const [key2, value2] of Object.entries(value1)) {
        // console.log(`${key2}: ${value2}`);
        // console.log(value2)
        // for (const [key3, value3] of Object.entries(value2)) {
        //     // console.log(`${key2}: ${value3}`);
        //     // console.log(value3)
            
        //   }
        // console.log(key1)

        ///////////////

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats = {}
        allWrProspectsObjects[key1].careerAveragedStats = {}
        allWrProspectsObjects[key1].careerTotalStats = {}


        ////////////////////////////////////////////
        //////////////////////////////////////////////
        ///////////////////////////////////////////////
        ///////////////////////////////////////////////
        /////////////////////////////////////////////
        ////////////////////////////////////////////

        // assignig temp variables and converting all things from strings to number yearOne and yearTwo
        let tempYearOneMTFREC = +(value1.yearOne['MTF/REC %'].slice(0, -1))
        let tempYearTwoMTFREC = +(value1.yearTwo['MTF/REC %'].slice(0, -1))
        //
        let tempYearOneMTFirstDownPerSnap = +(value1.yearOne['1D/Snap'].slice(0, -1))
        let tempYearTwoMTFirstDownPerSnap = +(value1.yearTwo['1D/Snap'].slice(0, -1))
        //
        let tempYearOneMTFirstDownPerRouteRunOne = +(value1.yearOne['1D/RR'].slice(0, -1))
        let tempYearTwoMTFirstDownPerRouteRunTwo = +(value1.yearTwo['1D/RR'].slice(0, -1))
        //
        let tempRecGradeOne = +(value1.yearOne['REC Grade'].slice(0, -1))
        let tempRecGradeTwo = +(value1.yearTwo['REC Grade'].slice(0, -1))
        //
        let tempTargetsOne = +(value1.yearOne.Targets)
        let tempTargetsTwo = +(value1.yearTwo.Targets)
        //
        let tempTargetsPerGameOne = +(value1.yearOne['TGTs/G'].slice(0, -1))
        let tempTargetsPerGameTwo = +(value1.yearTwo['TGTs/G'].slice(0, -1))
        // 
        let tempRROne = +(value1.yearOne.RR)
        let tempRRTwo = +(value1.yearTwo.RR)
        //
        let tempTPRROne = +(value1.yearOne.TPRR)
        let tempTPRRTwo = +(value1.yearTwo.TPRR)
        //
        let tempYACPerRecOne = +(value1.yearOne['YAC/Rec'].slice(0, -1))
        let tempYACPerRecTwo = +(value1.yearTwo['YAC/Rec'].slice(0, -1))

        

        

        // console.log(tempYACPerRecTwo)
        
        

        

        if(value1.yearThree) {

            // assignig temp variables and converting all things from strings to number yearThree

            let tempYearThreeMTFREC = +(value1.yearThree['MTF/REC %'].slice(0, -1))
            let tempYearThreeMTFirstDownPerSnap = +(value1.yearThree['1D/Snap'].slice(0, -1))
            let tempYearThreeMTFirstDownPerRouteRunThree = +(value1.yearThree['1D/RR'].slice(0, -1))
            let tempRecGradeThree = +(value1.yearThree['REC Grade'].slice(0, -1))
            let tempTargetsThree = +(value1.yearThree.Targets)
            let tempTargetsPerGameThree = +(value1.yearThree['TGTs/G'].slice(0, -1))
            let tempRRThree = +(value1.yearThree.RR)
            let tempTPRRThree = +(value1.yearThree.TPRR)
            let tempYACPerRecThree = +(value1.yearThree['YAC/Rec'].slice(0, -1))
            

            //player played at least 6 games in both year two and three


            if(value1.yearTwo['Games Played'] >= 6 && value1.yearThree['Games Played'] >= 6) {
                
     
                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['MTF/REC %'] = +((tempYearTwoMTFREC + tempYearThreeMTFREC) / 2).toFixed(2)
                
                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/Snap'] = +((tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) / 2).toFixed(2)

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/RR'] = +((tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree) / 2).toFixed(2)

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['REC Grade'] = +((tempRecGradeTwo + tempRecGradeThree) / 2).toFixed(2)

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Targets = +((tempTargetsTwo + tempTargetsThree) / 2).toFixed(2)

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['TGTs/G'] = +((tempTargetsPerGameTwo + tempTargetsPerGameThree) / 2).toFixed(2)

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.RR = +((tempRRTwo + tempRRThree) / 2).toFixed(2)

                
                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.TPRR = +((tempTPRRTwo + tempTPRRThree) / 2).toFixed(2)

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['YAC/Rec'] = +((tempYACPerRecTwo + tempYACPerRecThree) / 2).toFixed(2)
            }

            
            // tempYACPerRecOne
        // tempYACPerRecTwo
        // tempYACPerRecThree
        // tempYACPerRecFour
        // 'YAC/Rec'
           
           
            /////////////////////////////////////////

            // player played less than 6 games in either year two or three

            if(value1.yearTwo['Games Played'] < 6 || value1.yearThree['Games Played'] < 6) {
                // console.log(key1)

                //if player played less than 6 games in year two

                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['MTF/REC %'] = +tempYearThreeMTFREC
                }
                
                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/Snap'] = +tempYearThreeMTFirstDownPerSnap
                }

                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/RR'] = +tempYearThreeMTFirstDownPerRouteRunThree
                }

                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['REC Grade'] = +tempRecGradeThree
                }

                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Targets = +tempTargetsThree
                }

                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['TGTs/G'] = +tempTargetsPerGameThree
                }

                
                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.RR = +tempRRThree
                }

                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.TPRR = +tempTPRRThree
                }

                if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['YAC/Rec'] = +tempYACPerRecThree
                }
              
               


                // if player played less than 6 games in year three

                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['MTF/REC %'] = +tempYearTwoMTFREC
                }

                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/Snap'] = +tempYearTwoMTFirstDownPerSnap
                }

                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/RR'] = +tempYearTwoMTFirstDownPerRouteRunTwo
                }

                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['REC Grade'] = +tempRecGradeTwo
                }
                
                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Targets = +tempTargetsTwo
                }

                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['TGTs/G'] = +tempTargetsPerGameTwo
                }

                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.RR = +tempRRTwo
                }

                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.TPRR = +tempTPRRTwo
                }

                if(value1.yearThree['Games Played'] < 6) {
                    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['YAC/Rec'] = +tempYACPerRecTwo
                }
            }

            
          // tempYACPerRecOne
        // tempYACPerRecTwo
        // tempYACPerRecThree
        // tempYACPerRecFour
        // 'YAC/Rec'

                  // setting career average stats

            if(value1.yearOne['Games Played'] >= 6 && value1.yearTwo['Games Played'] >= 6 && value1.yearThree['Games Played'] >= 6) {

                allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +((tempRecGradeOne + tempRecGradeTwo + tempRecGradeThree) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsOne + tempTargetsTwo + tempTargetsThree) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameOne + tempTargetsPerGameTwo + tempTargetsPerGameThree) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRROne + tempRRTwo + tempRRThree) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRROne + tempTPRRTwo + tempTPRRThree) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecOne + tempYACPerRecTwo + tempYACPerRecThree) / 3).toFixed(2)
            }

       


            ////////////////////////////////////////////////////////////

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearTwoMTFREC + tempYearThreeMTFREC) / 2).toFixed(2)
            }

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) / 2).toFixed(2)
            }

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree) / 2).toFixed(2)
            }

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +((tempRecGradeTwo + tempRecGradeThree) / 2).toFixed(2)
            }

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsTwo + tempTargetsThree) / 2).toFixed(2)
            }

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameTwo + tempTargetsPerGameThree) / 2).toFixed(2)
            }

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRRTwo + tempRRThree) / 2).toFixed(2)
            }

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRRTwo + tempTPRRThree) / 2).toFixed(2)
            }

            if(value1.yearOne['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecTwo + tempYACPerRecThree) / 2).toFixed(2)
            }
           

               
            

            ////////////////////////////////////////////////////////////////

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearThreeMTFREC) / 2).toFixed(2)
            }

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) / 2).toFixed(2)
            }

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearThreeMTFirstDownPerRouteRunThree) / 2).toFixed(2)
            }

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +((tempRecGradeOne + tempRecGradeThree) / 2).toFixed(2)
            }

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsOne + tempTargetsThree) / 2).toFixed(2)
            }

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameOne + tempTargetsPerGameThree) / 2).toFixed(2)
            }

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRROne + tempRRThree) / 2).toFixed(2)
            }

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRROne + tempTPRRThree) / 2).toFixed(2)
            }

            if(value1.yearTwo['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecOne + tempYACPerRecThree) / 2).toFixed(2)
            }


            

            /////////////////////////////////////////////////////////////////////////

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC) / 2).toFixed(2)
            }

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap) / 2).toFixed(2)
            }

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo) / 2).toFixed(2)
            }

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +((tempRecGradeOne + tempRecGradeTwo) / 2).toFixed(2)
            }

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsOne + tempTargetsTwo) / 2).toFixed(2)
            }

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameOne + tempTargetsPerGameTwo) / 2).toFixed(2)
            }

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRROne + tempRRTwo) / 2).toFixed(2)
            }

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRROne + tempTPRRTwo) / 2).toFixed(2)
            }

            if( value1.yearThree['Games Played'] < 6) {
                allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecOne + tempYACPerRecTwo) / 2).toFixed(2)
            }

            
         

            // setting career total stats

            // allWrProspectsObjects[key1].careerTotalStats['MTF/REC %'] = +(tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC).toFixed(2)

            // allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap).toFixed(2)

            // allWrProspectsObjects[key1].careerTotalStats['1D/RR'] = +(tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree).toFixed(2)

            // allWrProspectsObjects[key1].careerTotalStats['REC Grade'] = +(tempRecGradeOne + tempRecGradeTwo + tempRecGradeThree).toFixed(2)

            allWrProspectsObjects[key1].careerTotalStats.Targets = +(tempTargetsOne + tempTargetsTwo + tempTargetsThree).toFixed(2)

            allWrProspectsObjects[key1].careerTotalStats.RR = +(tempRROne + tempRRTwo + tempRRThree).toFixed(2)


            

            /////////////////////////////////////////////////////////////
            // if player had a fourth year
            ////////////////////////////////
            /////////////////////////////////////////////////
            ///////////////////////////////////////////////////
            ///////////////////////////////////////////

        if(value1.yearFour) {
            // console.log(key1)
            let tempYearFourMTFREC = +(value1.yearFour['MTF/REC %'].slice(0, -1))
            let tempYearFourMTFirstDownPerSnap = +(value1.yearFour['1D/Snap'].slice(0, -1))
            let tempYearFourMTFirstDownPerRouteRunFour = +(value1.yearFour['1D/RR'].slice(0, -1))
            let tempRecGradeFour = +(value1.yearFour['REC Grade'].slice(0, -1))
            let tempTargetsFour = +(value1.yearFour.Targets)
            let tempTargetsPerGameFour = +(value1.yearFour['TGTs/G'].slice(0, -1))
            let tempRRFour = +(value1.yearFour.RR)
            let tempTPRRFour = +(value1.yearFour.TPRR)
            let tempYACPerRecFour = +(value1.yearFour['YAC/Rec'].slice(0, -1))

            // console.log(tempRecGradeFour)
        // setting career average stats

        if(value1.yearOne['Games Played'] >= 6 && value1.yearTwo['Games Played'] >= 6 && value1.yearThree['Games Played'] >= 6 && value1.yearThree['Games Played'] >= 6) {

            allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC + tempYearFourMTFREC) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap + tempYearFourMTFirstDownPerSnap) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree + tempYearFourMTFirstDownPerRouteRunFour) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +((tempRecGradeOne + tempRecGradeTwo + tempRecGradeThree + tempRecGradeFour) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsOne + tempTargetsTwo + tempTargetsThree + tempTargetsFour) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameOne + tempTargetsPerGameTwo + tempTargetsPerGameThree + tempTargetsPerGameFour) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRROne + tempRRTwo + tempRRThree + tempRRFour) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRROne + tempTPRRTwo + tempTPRRThree + tempTPRRFour) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecOne + tempYACPerRecTwo + tempYACPerRecThree + tempYACPerRecFour) / 4).toFixed(2)
        }

       
             

        //////////////////////////////////////////////////////////////////

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearTwoMTFREC + tempYearThreeMTFREC + tempYearFourMTFREC) / 3).toFixed(2)
        }

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap + tempYearFourMTFirstDownPerSnap) / 3).toFixed(2)
        }

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree + tempYearFourMTFirstDownPerRouteRunFour) / 3).toFixed(2)
        }

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +((tempRecGradeTwo + tempRecGradeThree + tempRecGradeFour) / 3).toFixed(2)
        }

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsTwo + tempTargetsThree + tempTargetsFour) / 3).toFixed(2)
        }

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameTwo + tempTargetsPerGameThree + tempTargetsPerGameFour) / 3).toFixed(2)
        }

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRRTwo + tempRRThree + tempRRFour) / 3).toFixed(2)
        }

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRRTwo + tempTPRRThree + tempTPRRFour) / 3).toFixed(2)
        }

        if(value1.yearOne['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecTwo + tempYACPerRecThree + tempYACPerRecFour) / 3).toFixed(2)
        }
        
        

        /////////////////////////////////////////////////////////////

        if(value1.yearTwo['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearThreeMTFREC + tempYearFourMTFREC) / 3).toFixed(2)
        }

        if(value1.yearTwo['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap + tempYearFourMTFirstDownPerSnap) / 3).toFixed(2)
        }

        if(value1.yearTwo['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearThreeMTFirstDownPerRouteRunThree + tempYearFourMTFirstDownPerRouteRunFour) / 3).toFixed(2)
        }

        if(value1.yearTwo['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsOne + tempTargetsThree + tempTargetsFour) / 3).toFixed(2)
        }

        if(value1.yearTwo['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameOne + tempTargetsPerGameThree + tempTargetsPerGameFour) / 3).toFixed(2)
        }

        if(value1.yearTwo['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRROne + tempRRThree + tempRRFour) / 3).toFixed(2)
        }

        if(value1.yearTwo['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRROne + tempTPRRThree + tempTPRRFour) / 3).toFixed(2)
        }

        if(value1.yearTwo['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecOne + tempYACPerRecThree + tempYACPerRecFour) / 3).toFixed(2)
        }

        
         

        //////////////////////////////////////////////////////////////////////

        if(value1.yearThree['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC + tempYearFourMTFREC) / 3).toFixed(2)
        }

        if(value1.yearThree['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearFourMTFirstDownPerSnap) / 3).toFixed(2)
        }

        if(value1.yearThree['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearFourMTFirstDownPerRouteRunFour) / 3).toFixed(2)
        }

        if(value1.yearThree['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsOne + tempTargetsTwo + tempTargetsFour) / 3).toFixed(2)
        }

        if(value1.yearThree['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameOne + tempTargetsPerGameTwo + tempTargetsPerGameFour) / 3).toFixed(2)
        }

        if(value1.yearThree['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRROne + tempRRTwo + tempRRFour) / 3).toFixed(2)
        }

        if(value1.yearThree['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRROne + tempTPRRTwo + tempTPRRFour) / 3).toFixed(2)
        }

        if(value1.yearThree['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecOne + tempYACPerRecTwo + tempYACPerRecFour) / 3).toFixed(2)
        }

       

        ///////////////////////////////////////////////////////////////

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC) / 3).toFixed(2)
        }

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) / 3).toFixed(2)
        }

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree) / 3).toFixed(2)
        }

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +((tempRecGradeOne + tempRecGradeTwo + tempRecGradeThree) / 3).toFixed(2)
        }

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsOne + tempTargetsTwo + tempTargetsThree) / 3).toFixed(2)
        }

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameOne + tempTargetsPerGameTwo + tempTargetsPerGameThree) / 3).toFixed(2)
        }

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRROne + tempRRTwo + tempRRThree) / 3).toFixed(2)
        }

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRROne + tempTPRRTwo + tempTPRRThree) / 3).toFixed(2)
        }

        if(value1.yearFour['Games Played'] < 6) {
            allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecOne + tempYACPerRecTwo + tempYACPerRecThree) / 3).toFixed(2)
        }

        

        // setting career total stats

        // allWrProspectsObjects[key1].careerTotalStats['MTF/REC %'] = 
        // +(tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC + tempYearFourMTFREC).toFixed(2)

        // allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = 
        // +(tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap + tempYearFourMTFirstDownPerSnap).toFixed(2)

        // allWrProspectsObjects[key1].careerTotalStats['1D/RR'] = 
        // +(tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree + tempYearFourMTFirstDownPerRouteRunFour).toFixed(2)

        // allWrProspectsObjects[key1].careerTotalStats['REC Grade'] = 
        // +(tempRecGradeOne + tempRecGradeTwo + tempRecGradeThree + tempRecGradeFour).toFixed(2)

        allWrProspectsObjects[key1].careerTotalStats.Targets = 
        +(tempTargetsOne + tempTargetsTwo + tempTargetsThree + tempTargetsFour).toFixed(2)

        allWrProspectsObjects[key1].careerTotalStats.RR = 
        +(tempRROne + tempRRTwo + tempRRThree + tempRRFour).toFixed(2)
    }
                 
        } 

       
       

            //
            //    players in this else only played two college seasons total
            //
            else {

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['MTF/REC %'] = +tempYearTwoMTFREC

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/Snap'] = +tempYearTwoMTFirstDownPerSnap

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/RR'] = +tempYearTwoMTFirstDownPerRouteRunTwo

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['REC Grade'] = +tempRecGradeTwo

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Targets = +tempTargetsTwo

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['TGTs/G'] = +tempTargetsPerGameTwo

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.RR = +tempRRTwo

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.TPRR = +tempTPRRTwo

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['YAC/Rec'] = +tempYACPerRecTwo
                
                

                ////////////////////////////////////////////
                  // setting career average stats

                 if(value1.yearOne['Games Played'] >= 6 && value1.yearTwo['Games Played'] >= 6) {
                    //
                 allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +((tempRecGradeOne + tempRecGradeTwo) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats.Targets = +((tempTargetsOne + tempTargetsTwo) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +((tempTargetsPerGameOne + tempTargetsPerGameTwo) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats.RR = +((tempRROne + tempRRTwo) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats.TPRR = +((tempTPRROne + tempTPRRTwo) / 2).toFixed(2)

                 
                 allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +((tempYACPerRecOne + tempYACPerRecTwo) / 2).toFixed(2)


                 ///don't copy the } below this line!!
                 }    
                 
                 
        
       

                 //////////////////////////////////////////////////////////

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +tempYearTwoMTFREC
                 }

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +tempYearTwoMTFirstDownPerSnap
                 }

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +tempYearTwoMTFirstDownPerRouteRunTwo
                 }

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +tempRecGradeTwo
                 }

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats.Targets = +tempTargetsTwo
                 }

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +tempTargetsPerGameTwo
                 }

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats.RR = +tempRRTwo
                 }

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats.TPRR = +tempTPRRTwo
                 }

                 if(value1.yearOne['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +tempYACPerRecTwo
                 }

              

                 /////////////////////////////////////////////////////////////

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +tempYearOneMTFREC
                 }

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +tempYearOneMTFirstDownPerSnap
                 }

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +tempYearOneMTFirstDownPerRouteRunOne
                 }

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +tempRecGradeOne
                 }

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats.Targets = +tempTargetsOne
                 }

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +tempTargetsPerGameOne
                 }

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats.RR = +tempRROne
                 }

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats.TPRR = +tempTPRROne
                 }

                 if(value1.yearTwo['Games Played'] < 6) {
                    allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +tempYACPerRecOne
                 }

               
        
                 //////////////////////////////////////////
                   // setting career total stats

                //    allWrProspectsObjects[key1].careerTotalStats['MTF/REC %'] = +(tempYearOneMTFREC + tempYearTwoMTFREC).toFixed(2)

                //    allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap).toFixed(2)

                //    allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo).toFixed(2)
                
                //    allWrProspectsObjects[key1].careerTotalStats['REC Grade'] = +(tempRecGradeOne + tempRecGradeTwo).toFixed(2)

                   allWrProspectsObjects[key1].careerTotalStats.Targets = +(tempTargetsOne + tempTargetsTwo).toFixed(2)

                   allWrProspectsObjects[key1].careerTotalStats.RR = +(tempRROne + tempRRTwo).toFixed(2)
            }

            


        ///////////////////////
        //////////////////////////////
    } // end of for (const [key2, value2] of Object.entries(value1)) {
} // for (const [key1, value1] of Object.entries(allWrProspectsObjects)) {

//   console.log(allWrProspectsObjects)