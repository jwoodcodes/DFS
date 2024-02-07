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

        // assignig temp variables and converting all things from strings to number yearTwo
        let tempYearOneMTFREC = +(value1.yearOne['MTF/REC %'].slice(0, -1))
        let tempYearTwoMTFREC = +(value1.yearTwo['MTF/REC %'].slice(0, -1))
        //
        let tempYearOneMTFirstDownPerSnap = +(value1.yearOne['1D/Snap'].slice(0, -1))
        let tempYearTwoMTFirstDownPerSnap = +(value1.yearTwo['1D/Snap'].slice(0, -1))
        //
        let tempYearOneMTFirstDownPerRouteRunOne = +(value1.yearOne['1D/RR'].slice(0, -1))
        let tempYearTwoMTFirstDownPerRouteRunTwo = +(value1.yearTwo['1D/RR'].slice(0, -1))
            
        

        if(value1.yearThree) {

            // assignig temp variables and converting all things from strings to number yearThree

            let tempYearThreeMTFREC = +(value1.yearThree['MTF/REC %'].slice(0, -1))
            let tempYearThreeMTFirstDownPerSnap = +(value1.yearThree['1D/Snap'].slice(0, -1))
            let tempYearThreeMTFirstDownPerRouteRunThree = +(value1.yearThree['1D/RR'].slice(0, -1))
            

            //player played at least 6 games in both year two and three


            if(value1.yearTwo['Games Played'] >= 6 && value1.yearThree['Games Played'] >= 6) {
                
     
                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['MTF/REC %'] = +((tempYearTwoMTFREC + tempYearThreeMTFREC) / 2).toFixed(2)
                
                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/Snap'] = +((tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) / 2).toFixed(2)

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/RR'] = +((tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree) / 2).toFixed(2)
            }

         
           
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
                
            }

                  // setting career average stats

            if(value1.yearOne['Games Played'] >= 6 && value1.yearTwo['Games Played'] >= 6 && value1.yearThree['Games Played'] >= 6) {

                allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) / 3).toFixed(2)

                allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree) / 3).toFixed(2)
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


            // setting career total stats

            allWrProspectsObjects[key1].careerTotalStats['MTF/REC %'] = +(tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC).toFixed(2)

            allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap).toFixed(2)

            allWrProspectsObjects[key1].careerTotalStats['1D/RR'] = +(tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree).toFixed(2)



            

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
            


        // setting career average stats

        if(value1.yearOne['Games Played'] >= 6 && value1.yearTwo['Games Played'] >= 6 && value1.yearThree['Games Played'] >= 6 && value1.yearThree['Games Played'] >= 6) {

            allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC + tempYearFourMTFREC) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap + tempYearFourMTFirstDownPerSnap) / 4).toFixed(2)

            allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree + tempYearFourMTFirstDownPerRouteRunFour) / 4).toFixed(2)
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


        // setting career total stats

        allWrProspectsObjects[key1].careerTotalStats['MTF/REC %'] = 
        +(tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC + tempYearFourMTFREC).toFixed(2)

        allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = 
        +(tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap + tempYearFourMTFirstDownPerSnap).toFixed(2)

        allWrProspectsObjects[key1].careerTotalStats['1D/RR'] = 
        +(tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree + tempYearFourMTFirstDownPerRouteRunFour).toFixed(2)
    }
                 
        } 

       

            //
            //    players in this else only played two college seasons total
            //
            else {

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['MTF/REC %'] = +tempYearTwoMTFREC

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/Snap'] = +tempYearTwoMTFirstDownPerSnap

                allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/RR'] = +tempYearTwoMTFirstDownPerRouteRunTwo

                ////////////////////////////////////////////
                  // setting career average stats

                 if(value1.yearOne['Games Played'] >= 6 && value1.yearTwo['Games Played'] >= 6) {
                    //
                 allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +((tempYearOneMTFREC + tempYearTwoMTFREC) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +((tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap) / 2).toFixed(2)

                 allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +((tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo) / 2).toFixed(2)


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

             

                 //////////////////////////////////////////
                   // setting career total stats

                   allWrProspectsObjects[key1].careerTotalStats['MTF/REC %'] = +(tempYearOneMTFREC + tempYearTwoMTFREC).toFixed(2)

                   allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap).toFixed(2)

                   allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo).toFixed(2)
                
            }

            


        ///////////////////////
        //////////////////////////////
    } // end of for (const [key2, value2] of Object.entries(value1)) {
} // for (const [key1, value1] of Object.entries(allWrProspectsObjects)) {

  console.log(allWrProspectsObjects)