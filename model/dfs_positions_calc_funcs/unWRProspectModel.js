const { type } = require('express/lib/response');
const WRProspectModelData = require('../DataForUndroppablesProspectModels/WRProspectModelData');

const allWrProspectsNamesArray = [];

// pushing to allWrProspectsNamesArray all player names in data set

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

const allWrProspectsObjects = {};

allWrProspectsNamesArray.forEach(player => {
  allWrProspectsObjects[player] = {};
});

// console.log(allWrProspectsObjects)

WRProspectModelData.forEach(playerArray => {
  playerArray.forEach(player => {
    // console.log(player.Player)
    allWrProspectsNamesArray.forEach(playerName => {
      if (playerName === player.Player) {
        // console.log(player)
        for (const [key, value] of Object.entries(allWrProspectsObjects)) {
          // console.log(`${key}: ${value}`);
          // console.log(key)

          if (playerName === key) {
            // let tempName =
            // setting yearOne
            allWrProspectsObjects[playerName].name = playerName;
            if (!allWrProspectsObjects[playerName].yearOne) {
              allWrProspectsObjects[playerName].yearOne = player;
            }
            //setting yearTwo
            if (
              allWrProspectsObjects[playerName].yearOne &&
              !allWrProspectsObjects[playerName].yearTwo &&
              player !== allWrProspectsObjects[playerName].yearOne
            ) {
              allWrProspectsObjects[playerName].yearTwo = player;
            }
            //settng yearThree

            if (
              allWrProspectsObjects[playerName].yearOne &&
              allWrProspectsObjects[playerName].yearTwo &&
              !allWrProspectsObjects[playerName].yearThree &&
              player !== allWrProspectsObjects[playerName].yearOne &&
              player !== allWrProspectsObjects[playerName].yearTwo
            ) {
              allWrProspectsObjects[playerName].yearThree = player;
            }
            //setting yearFour
            if (
              allWrProspectsObjects[playerName].yearOne &&
              allWrProspectsObjects[playerName].yearTwo &&
              allWrProspectsObjects[playerName].yearThree &&
              !allWrProspectsObjects[playerName].yearFour &&
              player !== allWrProspectsObjects[playerName].yearOne &&
              player !== allWrProspectsObjects[playerName].yearTwo &&
              player !== allWrProspectsObjects[playerName].yearThree
            ) {
              allWrProspectsObjects[playerName].yearFour = player;
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
    });
  });
});

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

    allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats = {};
    allWrProspectsObjects[key1].careerAveragedStats = {};
    allWrProspectsObjects[key1].careerTotalStats = {};

    ////////////////////////////////////////////
    //////////////////////////////////////////////
    ///////////////////////////////////////////////
    ///////////////////////////////////////////////
    /////////////////////////////////////////////
    ////////////////////////////////////////////

    // assignig temp variables and converting all things from strings to number yearOne and yearTwo

    let contestTargetPercentageOne = +value1.yearOne[
      'Contested Target %'
    ].slice(0, -1);

    let contestTargetPercentageTwo = +value1.yearTwo[
      'Contested Target %'
    ].slice(0, -1);

    // console.log(contestTargetPercentageOne);
    //
    let tempYearOneMTFREC = +value1.yearOne['MTF/REC %'].slice(0, -1);
    let tempYearTwoMTFREC = +value1.yearTwo['MTF/REC %'].slice(0, -1);
    //
    let tempYearOneMTFirstDownPerSnap = +value1.yearOne['1D/Snap'].slice(0, -1);
    let tempYearTwoMTFirstDownPerSnap = +value1.yearTwo['1D/Snap'].slice(0, -1);
    //
    let tempYearOneMTFirstDownPerRouteRunOne = +value1.yearOne['1D/RR'].slice(
      0,
      -1
    );
    let tempYearTwoMTFirstDownPerRouteRunTwo = +value1.yearTwo['1D/RR'].slice(
      0,
      -1
    );
    //
    let tempRecGradeOne = +value1.yearOne['REC Grade'].slice(0, -1);
    let tempRecGradeTwo = +value1.yearTwo['REC Grade'].slice(0, -1);

    if (tempRecGradeOne < 10) {
      tempRecGradeOne = tempRecGradeOne * 10;
    }
    if (tempRecGradeTwo < 10) {
      tempRecGradeTwo = tempRecGradeTwo * 10;
    }
    //
    let tempTargetsOne = +value1.yearOne.Targets;
    let tempTargetsTwo = +value1.yearTwo.Targets;
    //
    let tempTargetsPerGameOne = +value1.yearOne['TGTs/G'].slice(0, -1);
    let tempTargetsPerGameTwo = +value1.yearTwo['TGTs/G'].slice(0, -1);
    //
    let tempRROne = +value1.yearOne.RR;
    let tempRRTwo = +value1.yearTwo.RR;
    //
    let tempTPRROne = +value1.yearOne.TPRR;
    let tempTPRRTwo = +value1.yearTwo.TPRR;
    //
    let tempYACPerRecOne = +value1.yearOne['YAC/Rec'].slice(0, -1);
    let tempYACPerRecTwo = +value1.yearTwo['YAC/Rec'].slice(0, -1);
    //
    let tempYPRROne = +value1.yearOne.YPRR;
    let tempYPRRTwo = +value1.yearTwo.YPRR;
    //
    let tempManYPRROne = +value1.yearOne['Man YPRR'];
    let tempManYPRRTwo = +value1.yearTwo['Man YPRR'];
    //
    let tempZoneYPRROne = +value1.yearOne['Zone YPRR'];
    let tempZoneYPRRTwo = +value1.yearTwo['Zone YPRR'];
    //
    let tempPPRPointsOne = +value1.yearOne['PPR Points'];
    let tempPPRPointsTwo = +value1.yearTwo['PPR Points'];
    //
    let tempRecMSOne = +value1.yearOne['Reception MS (Games Played)'];
    let tempRecMSTwo = +value1.yearTwo['Reception MS (Games Played)'];
    //
    let tempRecYardMSOne = +value1.yearOne['Rec Yds MS'];
    let tempRecYardMSTwo = +value1.yearTwo['Rec Yds MS'];
    //
    let tempRecTDMSOne = +value1.yearOne['Rec TD MS'];
    let tempRecTDMSTwo = +value1.yearTwo['Rec TD MS'];
    //
    let tempRecYrsPerTeamPassAttOne =
      +value1.yearOne['Rec Yds Per Team Pass Att'];
    let tempRecYrsPerTeamPassAttTwo =
      +value1.yearTwo['Rec Yds Per Team Pass Att'];
    //
    let tdPerTeamPassAttOne = +value1.yearOne['TD Per Team Pass Att'];
    let tdPerTeamPassAttTwo = +value1.yearTwo['TD Per Team Pass Att'];
    //
    let weightedDomRatingOne = +value1.yearOne['Weighted Dominator Rating'];
    let weightedDomRatingTwo = +value1.yearTwo['Weighted Dominator Rating'];
    //
    let dominatorRatingOne = +value1.yearOne['Dominator Rating'];
    let dominatorRatingTwo = +value1.yearTwo['Dominator Rating'];

    let adjYrdsPerTeamPassAttOne =
      +value1.yearOne['Adjusted Yds Per Team Play'];
    let adjYrdsPerTeamPassAttTwo =
      +value1.yearTwo['Adjusted Yds Per Team Play'];
    //
    let scrimmageYrdsPerTeamPlayOne =
      +value1.yearOne['Scrimmage Yds Per Team Play'];
    let scrimmageYrdsPerTeamPlayTwo =
      +value1.yearTwo['Scrimmage Yds Per Team Play'];
    //
    let scrimmageYrdsPerTeamPassAttOne =
      +value1.yearOne['Scrimmage Yds Per Team Pass Attempt'];
    let scrimmageYrdsPerTeamPassAttTwo =
      +value1.yearTwo['Scrimmage Yds Per Team Pass Attempt'];
    //
    let epaPerTeamPassAttOne = +value1.yearOne['EPA Per Team Pass Attempt'];
    let epaPerTeamPassAttTwo = +value1.yearTwo['EPA Per Team Pass Attempt'];
    //
    let epaPerPlayOne = +value1.yearOne['EPA Per Play'];
    let epaPerPlayTwo = +value1.yearTwo['EPA Per Play'];
    //
    let totalEPAOne = +value1.yearOne['Total EPA'];
    let totalEPATwo = +value1.yearTwo['Total EPA'];
    //
    let yardsPerRecOne = +value1.yearOne['Yards Per Rec'];
    let yardsPerRecTwo = +value1.yearTwo['Yards Per Rec'];
    //
    let receptionsOne = +value1.yearOne.Rec;
    let receptionsTwo = +value1.yearTwo.Rec;
    //
    let recYardsOne = +value1.yearOne['Rec Yds'];
    let recYardsTwo = +value1.yearTwo['Rec Yds'];
    //
    let recTDsOne = +value1.yearOne['Rec TDs'];
    let recTDsTwo = +value1.yearTwo['Rec TDs'];
    //
    let rushAttPerGameOne = +value1.yearOne['Rush Att per Game'];
    let rushAttPerGameTwo = +value1.yearTwo['Rush Att per Game'];
    //
    let recPerGameOne = +value1.yearOne['Rec per Game'];
    let recPerGameTwo = +value1.yearTwo['Rec per Game'];
    //
    let recYardsPerGameOne = +value1.yearOne['Rec Yds per Game'];
    let recYardsPerGameTwo = +value1.yearTwo['Rec Yds per Game'];
    //
    let recTDsPerGameOne = +value1.yearOne['Rec TDs per Game'];
    let recTDsPerGameTwo = +value1.yearTwo['Rec TDs per Game'];
    //

    //

    //
    /////////

    //

    /////////

    // console.log(receptionsOne);

    ////////////////////////////////

    if (value1.yearThree) {
      // assignig temp variables and converting all things from strings to number yearThree

      let contestTargetPercentageThree = +value1.yearThree[
        'Contested Target %'
      ].slice(0, -1);
      let tempYearThreeMTFREC = +value1.yearThree['MTF/REC %'].slice(0, -1);
      let tempYearThreeMTFirstDownPerSnap = +value1.yearThree['1D/Snap'].slice(
        0,
        -1
      );
      let tempYearThreeMTFirstDownPerRouteRunThree = +value1.yearThree[
        '1D/RR'
      ].slice(0, -1);
      let tempRecGradeThree = +value1.yearThree['REC Grade'].slice(0, -1);
      if (tempRecGradeThree < 10) {
        tempRecGradeThree = tempRecGradeThree * 10;
      }
      let tempTargetsThree = +value1.yearThree.Targets;
      let tempTargetsPerGameThree = +value1.yearThree['TGTs/G'].slice(0, -1);
      let tempRRThree = +value1.yearThree.RR;
      let tempTPRRThree = +value1.yearThree.TPRR;
      let tempYACPerRecThree = +value1.yearThree['YAC/Rec'].slice(0, -1);
      let tempYPRRThree = +value1.yearThree.YPRR;
      let tempManYPRRThree = +value1.yearThree['Man YPRR'];
      let tempZoneYPRRThree = +value1.yearThree['Zone YPRR'];
      let tempPPRPointsThree = +value1.yearThree['PPR Points'];
      let tempRecMSThree = +value1.yearThree['Reception MS (Games Played)'];
      let tempRecYardMSThree = +value1.yearThree['Rec Yds MS'];
      let tempRecTDMSThree = +value1.yearThree['Rec TD MS'];
      let tempRecYrsPerTeamPassAttThree =
        +value1.yearThree['Rec Yds Per Team Pass Att'];
      let tdPerTeamPassAttThree = +value1.yearThree['TD Per Team Pass Att'];
      let weightedDomRatingThree =
        +value1.yearThree['Weighted Dominator Rating'];
      let dominatorRatingThree = +value1.yearThree['Dominator Rating'];
      //
      //
      let adjYrdsPerTeamPassAttThree =
        +value1.yearThree['Adjusted Yds Per Team Play'];
      let scrimmageYrdsPerTeamPlayThree =
        +value1.yearThree['Scrimmage Yds Per Team Play'];
      let scrimmageYrdsPerTeamPassAttThree =
        +value1.yearThree['Scrimmage Yds Per Team Pass Attempt'];
      let epaPerTeamPassAttThree =
        +value1.yearThree['EPA Per Team Pass Attempt'];
      let epaPerPlayThree = +value1.yearThree['EPA Per Play'];
      let totalEPAThree = +value1.yearThree['Total EPA'];
      let yardsPerRecThree = +value1.yearThree['Yards Per Rec'];
      let receptionsThree = +value1.yearThree.Rec;
      let recYardsThree = +value1.yearThree['Rec Yds'];
      let recTDsThree = +value1.yearThree['Rec TDs'];
      let rushAttPerGameThree = +value1.yearThree['Rush Att per Game'];
      let recPerGameThree = +value1.yearThree['Rec per Game'];
      let recYardsPerGameThree = +value1.yearThree['Rec Yds per Game'];
      let recTDsPerGameThree = +value1.yearThree['Rec TDs per Game'];
      let nflHeightThree = +value1.yearThree['NFL Height'];
      let nflWeightThree = +value1.yearThree['NFL Weight'];

      //

      //player played at least 6 games in both year two and three

      if (
        value1.yearTwo['Games Played'] >= 6 &&
        value1.yearThree['Games Played'] >= 6
      ) {
        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'MTF/REC %'
        ] = +((tempYearTwoMTFREC + tempYearThreeMTFREC) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          '1D/Snap'
        ] = +(
          (tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/RR'] =
          +(
            (tempYearTwoMTFirstDownPerRouteRunTwo +
              tempYearThreeMTFirstDownPerRouteRunThree) /
            2
          ).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'REC Grade'
        ] = +((tempRecGradeTwo + tempRecGradeThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Targets =
          +((tempTargetsTwo + tempTargetsThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'TGTs/G'
        ] = +((tempTargetsPerGameTwo + tempTargetsPerGameThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.RR = +(
          (tempRRTwo + tempRRThree) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.TPRR = +(
          (tempTPRRTwo + tempTPRRThree) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'YAC/Rec'
        ] = +((tempYACPerRecTwo + tempYACPerRecThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.YPRR = +(
          (tempYPRRTwo + tempYPRRThree) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Man YPRR'
        ] = +((tempManYPRRTwo + tempManYPRRThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Zone YPRR'
        ] = +((tempZoneYPRRTwo + tempZoneYPRRThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'PPR Points'
        ] = +((tempPPRPointsTwo + tempPPRPointsThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Reception MS (Games Played)'
        ] = +((tempRecMSTwo + tempRecMSThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rec Yds MS'
        ] = +((tempRecYardMSTwo + tempRecYardMSThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rec TD MS'
        ] = +((tempRecTDMSTwo + tempRecTDMSThree) / 2).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rec Yds Per Team Pass Att'
        ] = +(
          (tempRecYrsPerTeamPassAttTwo + tempRecYrsPerTeamPassAttThree) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'TD Per Team Pass Att'
        ] = +((tdPerTeamPassAttTwo + tdPerTeamPassAttThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Weighted Dominator Rating'
        ] = +((weightedDomRatingTwo + weightedDomRatingThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Dominator Rating'
        ] = +((dominatorRatingTwo + dominatorRatingThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +(
          (adjYrdsPerTeamPassAttTwo + adjYrdsPerTeamPassAttThree) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Scrimmage Yds Per Team Play'
        ] = +(
          (scrimmageYrdsPerTeamPlayTwo + scrimmageYrdsPerTeamPlayThree) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Scrimmage Yds Per Team Pass Attempt'
        ] = +(
          (scrimmageYrdsPerTeamPassAttTwo + scrimmageYrdsPerTeamPassAttThree) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'EPA Per Team Pass Attempt'
        ] = +((epaPerTeamPassAttTwo + epaPerTeamPassAttThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'EPA Per Play'
        ] = +((epaPerPlayTwo + epaPerPlayThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Total EPA'
        ] = +((totalEPATwo + totalEPAThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Yards Per Rec'
        ] = +((yardsPerRecTwo + yardsPerRecThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Rec = +(
          (receptionsTwo + receptionsThree) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rec Yds'
        ] = +((recYardsTwo + recYardsThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rec TDs'
        ] = +((recTDsTwo + recTDsThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rush Att per Game'
        ] = +((rushAttPerGameTwo + rushAttPerGameThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rec per Game'
        ] = +((recPerGameTwo + recPerGameThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rec Yds per Game'
        ] = +((recYardsPerGameTwo + recYardsPerGameThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Rec TDs per Game'
        ] = +((recTDsPerGameTwo + recTDsPerGameThree) / 2).toFixed(4);

        allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
          'Contested Target %'
        ] = +(
          (contestTargetPercentageTwo + contestTargetPercentageThree) /
          2
        ).toFixed(4);
      }

      /////////////////////////////////////////////
      /////////////////////////////////////////

      // player played less than 6 games in either year two or three

      if (
        value1.yearTwo['Games Played'] < 6 ||
        value1.yearThree['Games Played'] < 6
      ) {
        // console.log(key1)

        //if player played less than 6 games in year two

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'MTF/REC %'
          ] = +tempYearThreeMTFREC;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            '1D/Snap'
          ] = +tempYearThreeMTFirstDownPerSnap;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            '1D/RR'
          ] = +tempYearThreeMTFirstDownPerRouteRunThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'REC Grade'
          ] = +tempRecGradeThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[
            key1
          ].yearTwoPlusYearThreeAveragedStats.Targets = +tempTargetsThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'TGTs/G'
          ] = +tempTargetsPerGameThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.RR =
            +tempRRThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.TPRR =
            +tempTPRRThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'YAC/Rec'
          ] = +tempYACPerRecThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.YPRR =
            +tempYPRRThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Man YPRR'
          ] = +tempManYPRRThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Zone YPRR'
          ] = +tempZoneYPRRThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'PPR Points'
          ] = +tempPPRPointsThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Reception MS (Games Played)'
          ] = +tempRecMSThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec Yds MS'
          ] = +tempRecYardMSThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec TD MS'
          ] = +tempRecTDMSThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec Yds Per Team Pass Att'
          ] = +tempRecYrsPerTeamPassAttThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'TD Per Team Pass Att'
          ] = +tdPerTeamPassAttThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Weighted Dominator Rating'
          ] = +weightedDomRatingThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Dominator Rating'
          ] = +dominatorRatingThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Adjusted Yds Per Team Play'
          ] = +adjYrdsPerTeamPassAttThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Adjusted Yds Per Team Play'
          ] = +scrimmageYrdsPerTeamPlayThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Scrimmage Yds Per Team Pass Attempt'
          ] = +scrimmageYrdsPerTeamPassAttThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'EPA Per Team Pass Attempt'
          ] = +epaPerTeamPassAttThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'EPA Per Play'
          ] = +epaPerPlayThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Total EPA'
          ] = +totalEPAThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Yards Per Rec'
          ] = +yardsPerRecThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Rec =
            +receptionsThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec Yds'
          ] = +recYardsThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec TDs'
          ] = +recTDsThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rush Att per Game'
          ] = +rushAttPerGameThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec per Game'
          ] = +recPerGameThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec Yds per Game'
          ] = +recYardsPerGameThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec TDs per Game'
          ] = +recTDsPerGameThree;
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Contested Target %'
          ] = +contestTargetPercentageThree;
        }

        /////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////

        // if player played less than 6 games in year three

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'MTF/REC %'
          ] = +tempYearTwoMTFREC;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            '1D/Snap'
          ] = +tempYearTwoMTFirstDownPerSnap;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            '1D/RR'
          ] = +tempYearTwoMTFirstDownPerRouteRunTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'REC Grade'
          ] = +tempRecGradeTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[
            key1
          ].yearTwoPlusYearThreeAveragedStats.Targets = +tempTargetsTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'TGTs/G'
          ] = +tempTargetsPerGameTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.RR =
            +tempRRTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.TPRR =
            +tempTPRRTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'YAC/Rec'
          ] = +tempYACPerRecTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.YPRR =
            +tempYPRRTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Man YPRR'
          ] = +tempManYPRRTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Zone YPRR'
          ] = +tempZoneYPRRTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'PPR Points'
          ] = +tempPPRPointsTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Reception MS (Games Played)'
          ] = +tempRecMSTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec Yds MS'
          ] = +tempRecYardMSTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec TD MS'
          ] = +tempRecTDMSTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec Yds Per Team Pass Att'
          ] = +tempRecYrsPerTeamPassAttTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'TD Per Team Pass Att'
          ] = +tdPerTeamPassAttTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Weighted Dominator Rating'
          ] = +weightedDomRatingTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Dominator Rating'
          ] = +dominatorRatingTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Adjusted Yds Per Team Play'
          ] = +adjYrdsPerTeamPassAttTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Scrimmage Yds Per Team Play'
          ] = +scrimmageYrdsPerTeamPlayTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Scrimmage Yds Per Team Pass Attempt'
          ] = +scrimmageYrdsPerTeamPassAttTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'EPA Per Team Pass Attempt'
          ] = +epaPerTeamPassAttTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'EPA Per Play'
          ] = +epaPerPlayTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Total EPA'
          ] = +totalEPATwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Yards Per Rec'
          ] = +yardsPerRecTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Rec =
            +receptionsTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec Yds'
          ] = +recYardsTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec TDs'
          ] = +recTDsTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rush Att per Game'
          ] = +rushAttPerGameTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec per Game'
          ] = +recPerGameTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec Yds per Game'
          ] = +recYardsPerGameTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Rec TDs per Game'
          ] = +recTDsPerGameTwo;
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
            'Contested Target %'
          ] = +contestTargetPercentageTwo;
        }
      }

      /////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////

      // setting career average stats

      if (
        value1.yearOne['Games Played'] >= 6 &&
        value1.yearTwo['Games Played'] >= 6 &&
        value1.yearThree['Games Played'] >= 6
      ) {
        allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
          (tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
          (tempYearOneMTFirstDownPerSnap +
            tempYearTwoMTFirstDownPerSnap +
            tempYearThreeMTFirstDownPerSnap) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
          (tempYearOneMTFirstDownPerRouteRunOne +
            tempYearTwoMTFirstDownPerRouteRunTwo +
            tempYearThreeMTFirstDownPerRouteRunThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +(
          (tempRecGradeOne + tempRecGradeTwo + tempRecGradeThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
          (tempTargetsOne + tempTargetsTwo + tempTargetsThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
          (tempTargetsPerGameOne +
            tempTargetsPerGameTwo +
            tempTargetsPerGameThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats.RR = +(
          (tempRROne + tempRRTwo + tempRRThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
          (tempTPRROne + tempTPRRTwo + tempTPRRThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
          (tempYACPerRecOne + tempYACPerRecTwo + tempYACPerRecThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
          (tempYPRROne + tempYPRRTwo + tempYPRRThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
          (tempManYPRROne + tempManYPRRTwo + tempManYPRRThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
          (tempZoneYPRROne + tempZoneYPRRTwo + tempZoneYPRRThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
          (tempPPRPointsOne + tempPPRPointsTwo + tempPPRPointsThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Reception MS (Games Played)'
        ] = +((tempRecMSOne + tempRecMSTwo + tempRecMSThree) / 3).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
          (tempRecYardMSOne + tempRecYardMSTwo + tempRecYardMSThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
          (tempRecTDMSOne + tempRecTDMSTwo + tempRecTDMSThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Rec Yds Per Team Pass Att'
        ] = +(
          (tempRecYrsPerTeamPassAttOne +
            tempRecYrsPerTeamPassAttTwo +
            tempRecYrsPerTeamPassAttThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats[
          'TD Per Team Pass Att'
        ] = +(
          (tdPerTeamPassAttOne + tdPerTeamPassAttTwo + tdPerTeamPassAttThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Weighted Dominator Rating'
        ] = +(
          (weightedDomRatingOne +
            weightedDomRatingTwo +
            weightedDomRatingThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] = +(
          (dominatorRatingOne + dominatorRatingTwo + dominatorRatingThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +(
          (adjYrdsPerTeamPassAttOne +
            adjYrdsPerTeamPassAttTwo +
            adjYrdsPerTeamPassAttThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Play'
        ] = +(
          (scrimmageYrdsPerTeamPlayOne +
            scrimmageYrdsPerTeamPlayTwo +
            scrimmageYrdsPerTeamPlayThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Pass Attempt'
        ] = +(
          (scrimmageYrdsPerTeamPassAttOne +
            scrimmageYrdsPerTeamPassAttTwo +
            scrimmageYrdsPerTeamPassAttThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'EPA Per Team Pass Attempt'
        ] = +(
          (epaPerTeamPassAttOne +
            epaPerTeamPassAttTwo +
            epaPerTeamPassAttThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
          (epaPerPlayOne + epaPerPlayTwo + epaPerPlayThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
          (totalEPAOne + totalEPATwo + totalEPAThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
          (yardsPerRecOne + yardsPerRecTwo + yardsPerRecThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
          (receptionsOne + receptionsTwo + receptionsThree) /
          3
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
          (yardsPerRecOne + recYardsTwo + recYardsThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
          (recTDsOne + recTDsTwo + recTDsThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
          +(
            (rushAttPerGameOne + rushAttPerGameTwo + rushAttPerGameThree) /
            3
          ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
          (recPerGameOne + recPerGameTwo + recPerGameThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] = +(
          (recYardsPerGameOne + recYardsPerGameTwo + recYardsPerGameThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] = +(
          (recTDsPerGameOne + recTDsPerGameTwo + recTDsPerGameThree) /
          3
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Contested Target %'] =
          +(
            (contestTargetPercentageOne +
              contestTargetPercentageTwo +
              contestTargetPercentageThree) /
            3
          ).toFixed(4);
      }

      /////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
          (tempYearTwoMTFREC + tempYearThreeMTFREC) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
          (tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
          (tempYearTwoMTFirstDownPerRouteRunTwo +
            tempYearThreeMTFirstDownPerRouteRunThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +(
          (tempRecGradeTwo + tempRecGradeThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
          (tempTargetsTwo + tempTargetsThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
          (tempTargetsPerGameTwo + tempTargetsPerGameThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.RR = +(
          (tempRRTwo + tempRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
          (tempTPRRTwo + tempTPRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
          (tempYPRRTwo + tempYPRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
          (tempManYPRRTwo + tempManYPRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
          (tempZoneYPRRTwo + tempZoneYPRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
          (tempPPRPointsTwo + tempPPRPointsThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Reception MS (Games Played)'
        ] = +((tempRecMSTwo + tempRecMSThree) / 2).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
          (tempRecYardMSTwo + tempRecYardMSThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
          (tempRecTDMSTwo + tempRecTDMSThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Rec Yds Per Team Pass Att'
        ] = +(
          (tempRecYrsPerTeamPassAttTwo + tempRecYrsPerTeamPassAttThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'TD Per Team Pass Att'
        ] = +((tdPerTeamPassAttTwo + tdPerTeamPassAttThree) / 2).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Weighted Dominator Rating'
        ] = +((weightedDomRatingTwo + weightedDomRatingThree) / 2).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] = +(
          (dominatorRatingTwo + dominatorRatingThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +(
          (adjYrdsPerTeamPassAttTwo + adjYrdsPerTeamPassAttThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +(
          (scrimmageYrdsPerTeamPlayTwo + scrimmageYrdsPerTeamPlayThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +(
          (scrimmageYrdsPerTeamPassAttTwo + scrimmageYrdsPerTeamPassAttThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'EPA Per Team Pass Attempt'
        ] = +((epaPerTeamPassAttTwo + epaPerTeamPassAttThree) / 2).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
          (epaPerPlayTwo + epaPerPlayThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
          (totalEPATwo + totalEPAThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
          (yardsPerRecTwo + yardsPerRecThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
          (receptionsTwo + receptionsThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
          (recYardsTwo + recYardsThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
          (recTDsTwo + recTDsThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
          +((rushAttPerGameTwo + rushAttPerGameThree) / 2).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
          (recPerGameTwo + recPerGameThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] = +(
          (recYardsPerGameTwo + recYardsPerGameThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] = +(
          (recTDsPerGameTwo + recTDsPerGameThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Contested Target %'] =
          +(
            (contestTargetPercentageTwo + contestTargetPercentageThree) /
            2
          ).toFixed(4);
      }

      //////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
          (tempYearOneMTFREC + tempYearThreeMTFREC) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
          (tempYearOneMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
          (tempYearOneMTFirstDownPerRouteRunOne +
            tempYearThreeMTFirstDownPerRouteRunThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +(
          (tempRecGradeOne + tempRecGradeThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
          (tempTargetsOne + tempTargetsThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
          (tempTargetsPerGameOne + tempTargetsPerGameThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.RR = +(
          (tempRROne + tempRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
          (tempTPRROne + tempTPRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
          (tempYACPerRecOne + tempYACPerRecThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
          (tempYPRROne + tempYPRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
          (tempManYPRROne + tempManYPRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
          (tempZoneYPRROne + tempZoneYPRRThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
          (tempPPRPointsOne + tempPPRPointsThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Reception MS (Games Played)'
        ] = +((tempRecMSOne + tempRecMSThree) / 2).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
          (tempRecYardMSOne + tempRecYardMSThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
          (tempRecTDMSOne + tempRecTDMSThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Rec Yds Per Team Pass Att'
        ] = +(
          (tempRecYrsPerTeamPassAttOne + tempRecYrsPerTeamPassAttThree) /
          2
        ).toFixed(2);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'TD Per Team Pass Att'
        ] = +((tdPerTeamPassAttOne + tdPerTeamPassAttThree) / 2).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Weighted Dominator Rating'
        ] = +((weightedDomRatingOne + weightedDomRatingThree) / 2).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] = +(
          (dominatorRatingOne + dominatorRatingThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +(
          (adjYrdsPerTeamPassAttOne + adjYrdsPerTeamPassAttThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Play'
        ] = +(
          (scrimmageYrdsPerTeamPlayOne + scrimmageYrdsPerTeamPlayThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Pass Attempt'
        ] = +(
          (scrimmageYrdsPerTeamPassAttOne + scrimmageYrdsPerTeamPassAttThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
          (epaPerPlayOne + epaPerPlayThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
          (totalEPAOne + totalEPAThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
          (yardsPerRecOne + yardsPerRecThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
          (receptionsOne + receptionsThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
          (recYardsOne + recYardsThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
          (recTDsOne + recTDsThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
          +((rushAttPerGameOne + rushAttPerGameThree) / 2).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
          (recPerGameOne + recPerGameThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] = +(
          (recYardsPerGameOne + recYardsPerGameThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] = +(
          (recTDsPerGameOne + recTDsPerGameThree) /
          2
        ).toFixed(4);
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Contested Target %'] =
          +(
            (contestTargetPercentageOne + contestTargetPercentageThree) /
            2
          ).toFixed(4);
      }

      ///////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
          (tempYearOneMTFREC + tempYearTwoMTFREC) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
          (tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
          (tempYearOneMTFirstDownPerRouteRunOne +
            tempYearTwoMTFirstDownPerRouteRunTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +(
          (tempRecGradeOne + tempRecGradeTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
          (tempTargetsOne + tempTargetsTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
          (tempTargetsPerGameOne + tempTargetsPerGameTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.RR = +(
          (tempRROne + tempRRTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
          (tempTPRROne + tempTPRRTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
          (tempYACPerRecOne + tempYACPerRecTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
          (tempYPRROne + tempYPRRTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
          (tempManYPRROne + tempManYPRRTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
          (tempZoneYPRROne + tempZoneYPRRTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
          (tempPPRPointsOne + tempPPRPointsTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Reception MS (Games Played)'
        ] = +((tempRecMSOne + tempRecMSTwo) / 2).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
          (tempRecYardMSOne + tempRecYardMSTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
          (tempRecTDMSOne + tempRecTDMSTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Rec Yds Per Team Pass Att'
        ] = +(
          (tempRecYrsPerTeamPassAttOne + tempRecYrsPerTeamPassAttTwo) /
          2
        ).toFixed(2);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'TD Per Team Pass Att'
        ] = +((tdPerTeamPassAttOne + tdPerTeamPassAttTwo) / 2).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Weighted Dominator Rating'
        ] = +((weightedDomRatingOne + weightedDomRatingTwo) / 2).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] = +(
          (dominatorRatingOne + dominatorRatingTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +(
          (adjYrdsPerTeamPassAttOne + adjYrdsPerTeamPassAttTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Play'
        ] = +(
          (scrimmageYrdsPerTeamPlayOne + scrimmageYrdsPerTeamPlayTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Pass Attempt'
        ] = +(
          (scrimmageYrdsPerTeamPassAttOne + scrimmageYrdsPerTeamPassAttTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'EPA Per Team Pass Attempt'
        ] = +((epaPerTeamPassAttOne + epaPerTeamPassAttTwo) / 2).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
          (epaPerPlayOne + epaPerPlayTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
          (totalEPAOne + totalEPATwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
          (yardsPerRecOne + yardsPerRecTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
          (receptionsOne + receptionsTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
          (recYardsOne + recYardsTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
          (recTDsOne + recTDsTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
          +((rushAttPerGameOne + rushAttPerGameTwo) / 2).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
          (recPerGameOne + recPerGameTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] = +(
          (recYardsPerGameOne + recYardsPerGameTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] = +(
          (recTDsPerGameOne + recTDsPerGameTwo) /
          2
        ).toFixed(4);
      }

      if (value1.yearThree['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Contested Target %'] =
          +(
            (contestTargetPercentageOne + contestTargetPercentageTwo) /
            2
          ).toFixed(4);
      }

      // setting career total stats

      // allWrProspectsObjects[key1].careerTotalStats['MTF/REC %'] = +(tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC).toFixed(2)

      // allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap + tempYearThreeMTFirstDownPerSnap).toFixed(2)

      // allWrProspectsObjects[key1].careerTotalStats['1D/RR'] = +(tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo + tempYearThreeMTFirstDownPerRouteRunThree).toFixed(2)

      // allWrProspectsObjects[key1].careerTotalStats['REC Grade'] = +(tempRecGradeOne + tempRecGradeTwo + tempRecGradeThree).toFixed(2)

      allWrProspectsObjects[key1].careerTotalStats.Targets = +(
        tempTargetsOne +
        tempTargetsTwo +
        tempTargetsThree
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats.RR = +(
        tempRROne +
        tempRRTwo +
        tempRRThree
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats['PPR Points'] = +(
        tempPPRPointsOne +
        tempPPRPointsTwo +
        tempPPRPointsThree
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats.Rec = +(
        receptionsOne +
        receptionsTwo +
        receptionsThree
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats['Rec Yds'] = +(
        recYardsOne +
        recYardsTwo +
        recYardsThree
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats['Rec TDs'] = +(
        recTDsOne +
        recTDsTwo +
        recTDsThree
      ).toFixed(2);

      /////////////////////////////////////////////////////////////
      // if player had a fourth year
      ////////////////////////////////
      /////////////////////////////////////////////////
      ///////////////////////////////////////////////////
      ///////////////////////////////////////////

      if (value1.yearFour) {
        // console.log(key1)
        let contestTargetPercentageFour = +value1.yearFour[
          'Contested Target %'
        ].slice(0, -1);
        let tempYearFourMTFREC = +value1.yearFour['MTF/REC %'].slice(0, -1);
        let tempYearFourMTFirstDownPerSnap = +value1.yearFour['1D/Snap'].slice(
          0,
          -1
        );
        let tempYearFourMTFirstDownPerRouteRunFour = +value1.yearFour[
          '1D/RR'
        ].slice(0, -1);
        let tempRecGradeFour = +value1.yearFour['REC Grade'].slice(0, -1);
        if (tempRecGradeFour < 10) {
          tempRecGradeFour = tempRecGradeFour * 10;
        }
        let tempTargetsFour = +value1.yearFour.Targets;
        let tempTargetsPerGameFour = +value1.yearFour['TGTs/G'].slice(0, -1);
        let tempRRFour = +value1.yearFour.RR;
        let tempTPRRFour = +value1.yearFour.TPRR;
        let tempYACPerRecFour = +value1.yearFour['YAC/Rec'].slice(0, -1);
        let tempYPRRFour = +value1.yearFour.YPRR;
        let tempManYPRRFour = +value1.yearFour['Man YPRR'];
        let tempZoneYPRRFour = +value1.yearFour['Zone YPRR'];
        let tempPPRPointsFour = +value1.yearFour['PPR Points'];
        let tempRecMSFour = +value1.yearFour['Reception MS (Games Played)'];
        let tempRecYardMSFour = +value1.yearFour['Rec Yds MS'];
        let tempRecTDMSFour = +value1.yearFour['Rec TD MS'];
        let tempRecYrsPerTeamPassAttFour =
          +value1.yearFour['Rec Yds Per Team Pass Att'];
        let tdPerTeamPassAttFour = +value1.yearFour['TD Per Team Pass Att'];
        let weightedDomRatingFour =
          +value1.yearFour['Weighted Dominator Rating'];
        let dominatorRatingFour = +value1.yearFour['Dominator Rating'];
        //
        let adjYrdsPerTeamPassAttFour =
          +value1.yearFour['Adjusted Yds Per Team Play'];
        let scrimmageYrdsPerTeamPlayFour =
          +value1.yearFour['Scrimmage Yds Per Team Play'];
        let scrimmageYrdsPerTeamPassAttFour =
          +value1.yearFour['Scrimmage Yds Per Team Pass Attempt'];
        let epaPerTeamPassAttFour =
          +value1.yearFour['EPA Per Team Pass Attempt'];
        let epaPerPlayFour = +value1.yearFour['EPA Per Play'];
        let totalEPAFour = +value1.yearFour['Total EPA'];
        let yardsPerRecFour = +value1.yearFour['Yards Per Rec'];
        let receptionsFour = +value1.yearFour.Rec;
        let recYardsFour = +value1.yearFour['Rec Yds'];
        let recTDsFour = +value1.yearFour['Rec TDs'];
        let rushAttPerGameFour = +value1.yearFour['Rush Att per Game'];
        let recPerGameFour = +value1.yearFour['Rec per Game'];
        let recYardsPerGameFour = +value1.yearFour['Rec Yds per Game'];
        let recTDsPerGameFour = +value1.yearFour['Rec TDs per Game'];
        let nflHeightFour = +value1.yearFour['NFL Height'];
        let nflWeightFour = +value1.yearFour['NFL Weight'];

        // console.log(tempRecGradeFour)

        //
        //
        // setting career average stats

        if (
          value1.yearOne['Games Played'] >= 6 &&
          value1.yearTwo['Games Played'] >= 6 &&
          value1.yearThree['Games Played'] >= 6 &&
          value1.yearThree['Games Played'] >= 6
        ) {
          allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
            (tempYearOneMTFREC +
              tempYearTwoMTFREC +
              tempYearThreeMTFREC +
              tempYearFourMTFREC) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
            (tempYearOneMTFirstDownPerSnap +
              tempYearTwoMTFirstDownPerSnap +
              tempYearThreeMTFirstDownPerSnap +
              tempYearFourMTFirstDownPerSnap) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
            (tempYearOneMTFirstDownPerRouteRunOne +
              tempYearTwoMTFirstDownPerRouteRunTwo +
              tempYearThreeMTFirstDownPerRouteRunThree +
              tempYearFourMTFirstDownPerRouteRunFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +(
            (tempRecGradeOne +
              tempRecGradeTwo +
              tempRecGradeThree +
              tempRecGradeFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
            (tempTargetsOne +
              tempTargetsTwo +
              tempTargetsThree +
              tempTargetsFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
            (tempTargetsPerGameOne +
              tempTargetsPerGameTwo +
              tempTargetsPerGameThree +
              tempTargetsPerGameFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats.RR = +(
            (tempRROne + tempRRTwo + tempRRThree + tempRRFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
            (tempTPRROne + tempTPRRTwo + tempTPRRThree + tempTPRRFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
            (tempYACPerRecOne +
              tempYACPerRecTwo +
              tempYACPerRecThree +
              tempYACPerRecFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
            (tempYPRROne + tempYPRRTwo + tempYPRRThree + tempYPRRFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
            (tempManYPRROne +
              tempManYPRRTwo +
              tempManYPRRThree +
              tempManYPRRFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
            (tempZoneYPRROne +
              tempZoneYPRRTwo +
              tempZoneYPRRThree +
              tempZoneYPRRFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
            (tempPPRPointsOne +
              tempPPRPointsTwo +
              tempPPRPointsThree +
              tempPPRPointsFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats[
            'Reception MS (Games Played)'
          ] = +(
            (tempRecMSOne + tempRecMSTwo + tempRecMSThree + tempRecMSFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
            (tempRecYardMSOne +
              tempRecYardMSTwo +
              tempRecYardMSThree +
              tempRecYardMSFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
            (tempRecTDMSOne +
              tempRecTDMSTwo +
              tempRecTDMSThree +
              tempRecTDMSFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats[
            'Rec Yds Per Team Pass Att'
          ] = +(
            (tempRecYrsPerTeamPassAttOne +
              tempRecYrsPerTeamPassAttTwo +
              tempRecYrsPerTeamPassAttThree +
              tempRecYrsPerTeamPassAttFour) /
            4
          ).toFixed(2);

          allWrProspectsObjects[key1].careerAveragedStats[
            'TD Per Team Pass Att'
          ] = +(
            (tdPerTeamPassAttOne +
              tdPerTeamPassAttTwo +
              tdPerTeamPassAttThree +
              tdPerTeamPassAttFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats[
            'Weighted Dominator Rating'
          ] = +(
            (weightedDomRatingOne +
              weightedDomRatingTwo +
              weightedDomRatingThree +
              weightedDomRatingFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] =
            +(
              (dominatorRatingOne +
                dominatorRatingTwo +
                dominatorRatingThree +
                dominatorRatingFour) /
              4
            ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats[
            'Adjusted Yds Per Team Play'
          ] = +(
            (adjYrdsPerTeamPassAttOne +
              adjYrdsPerTeamPassAttTwo +
              adjYrdsPerTeamPassAttThree +
              adjYrdsPerTeamPassAttFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Play'
          ] = +(
            (scrimmageYrdsPerTeamPlayOne +
              scrimmageYrdsPerTeamPlayTwo +
              scrimmageYrdsPerTeamPlayThree +
              scrimmageYrdsPerTeamPlayFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Pass Attempt'
          ] = +(
            (scrimmageYrdsPerTeamPassAttOne +
              scrimmageYrdsPerTeamPassAttTwo +
              scrimmageYrdsPerTeamPassAttThree +
              scrimmageYrdsPerTeamPassAttFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats[
            'EPA Per Team Pass Attempt'
          ] = +(
            (epaPerTeamPassAttOne +
              epaPerTeamPassAttTwo +
              epaPerTeamPassAttThree +
              epaPerTeamPassAttFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
            (epaPerPlayOne + epaPerPlayTwo + epaPerPlayThree + epaPerPlayFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
            (totalEPAOne + totalEPATwo + totalEPAThree + totalEPAFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
            (yardsPerRecOne +
              yardsPerRecTwo +
              yardsPerRecThree +
              yardsPerRecFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
            (receptionsOne + receptionsTwo + receptionsThree + receptionsFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
            (recYardsOne + recYardsTwo + recYardsThree + recYardsFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
            (recTDsOne + recTDsTwo + recTDsThree + recTDsFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
            +(
              (rushAttPerGameOne +
                rushAttPerGameTwo +
                rushAttPerGameThree +
                rushAttPerGameFour) /
              4
            ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
            (recPerGameOne + recPerGameTwo + recPerGameThree + recPerGameFour) /
            4
          ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] =
            +(
              (recYardsPerGameOne +
                recYardsPerGameTwo +
                recYardsPerGameThree +
                recYardsPerGameFour) /
              4
            ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] =
            +(
              (recTDsPerGameOne +
                recTDsPerGameTwo +
                recTDsPerGameThree +
                recTDsPerGameFour) /
              4
            ).toFixed(4);

          allWrProspectsObjects[key1].careerAveragedStats[
            'Contested Target %'
          ] = +(
            (contestTargetPercentageOne +
              contestTargetPercentageTwo +
              contestTargetPercentageThree +
              contestTargetPercentageFour) /
            4
          ).toFixed(4);
        }

        ////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
            (tempYearTwoMTFREC + tempYearThreeMTFREC + tempYearFourMTFREC) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
            (tempYearTwoMTFirstDownPerSnap +
              tempYearThreeMTFirstDownPerSnap +
              tempYearFourMTFirstDownPerSnap) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
            (tempYearTwoMTFirstDownPerRouteRunTwo +
              tempYearThreeMTFirstDownPerRouteRunThree +
              tempYearFourMTFirstDownPerRouteRunFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +(
            (tempRecGradeTwo + tempRecGradeThree + tempRecGradeFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
            (tempTargetsTwo + tempTargetsThree + tempTargetsFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
            (tempTargetsPerGameTwo +
              tempTargetsPerGameThree +
              tempTargetsPerGameFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.RR = +(
            (tempRRTwo + tempRRThree + tempRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
            (tempTPRRTwo + tempTPRRThree + tempTPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
            (tempYACPerRecTwo + tempYACPerRecThree + tempYACPerRecFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
            (tempYPRRTwo + tempYPRRThree + tempYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
            (tempManYPRRTwo + tempManYPRRThree + tempManYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
            (tempZoneYPRRTwo + tempZoneYPRRThree + tempZoneYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
            (tempPPRPointsTwo + tempPPRPointsThree + tempPPRPointsFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Reception MS (Games Played)'
          ] = +((tempRecMSTwo + tempRecMSThree + tempRecMSFour) / 3).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
            (tempRecYardMSTwo + tempRecYardMSThree + tempRecYardMSFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
            (tempRecTDMSTwo + tempRecTDMSThree + tempRecTDMSFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Rec Yds Per Team Pass Att'
          ] = +(
            (tempRecYrsPerTeamPassAttTwo +
              tempRecYrsPerTeamPassAttThree +
              tempRecYrsPerTeamPassAttFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'TD Per Team Pass Att'
          ] = +(
            (tdPerTeamPassAttTwo +
              tdPerTeamPassAttThree +
              tdPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Weighted Dominator Rating'
          ] = +(
            (weightedDomRatingTwo +
              weightedDomRatingThree +
              weightedDomRatingFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] =
            +(
              (dominatorRatingTwo +
                dominatorRatingThree +
                dominatorRatingFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Adjusted Yds Per Team Play'
          ] = +(
            (adjYrdsPerTeamPassAttTwo +
              adjYrdsPerTeamPassAttThree +
              adjYrdsPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Play'
          ] = +(
            (scrimmageYrdsPerTeamPlayTwo +
              scrimmageYrdsPerTeamPlayThree +
              scrimmageYrdsPerTeamPlayFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Pass Attempt'
          ] = +(
            (scrimmageYrdsPerTeamPassAttTwo +
              scrimmageYrdsPerTeamPassAttThree +
              scrimmageYrdsPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'EPA Per Team Pass Attempt'
          ] = +(
            (epaPerTeamPassAttTwo +
              epaPerTeamPassAttThree +
              epaPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
            (epaPerPlayTwo + epaPerPlayThree + epaPerPlayFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
            (totalEPATwo + totalEPAThree + totalEPAFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
            (yardsPerRecTwo + yardsPerRecThree + yardsPerRecFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
            (receptionsTwo + receptionsThree + receptionsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
            (recYardsTwo + recYardsThree + recYardsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
            (recTDsTwo + recTDsThree + recTDsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
            +(
              (rushAttPerGameTwo + rushAttPerGameThree + rushAttPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
            (recPerGameTwo + recPerGameThree + recPerGameFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] =
            +(
              (recYardsPerGameTwo +
                recYardsPerGameThree +
                recYardsPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] =
            +(
              (recTDsPerGameTwo + recTDsPerGameThree + recTDsPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearOne['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Contested Target %'
          ] = +(
            (contestTargetPercentageTwo +
              contestTargetPercentageThree +
              contestTargetPercentageFour) /
            3
          ).toFixed(4);
        }

        ///////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
            (tempYearOneMTFREC + tempYearThreeMTFREC + tempYearFourMTFREC) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
            (tempYearOneMTFirstDownPerSnap +
              tempYearThreeMTFirstDownPerSnap +
              tempYearFourMTFirstDownPerSnap) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
            (tempYearOneMTFirstDownPerRouteRunOne +
              tempYearThreeMTFirstDownPerRouteRunThree +
              tempYearFourMTFirstDownPerRouteRunFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
            (tempTargetsOne + tempTargetsThree + tempTargetsFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
            (tempTargetsPerGameOne +
              tempTargetsPerGameThree +
              tempTargetsPerGameFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.RR = +(
            (tempRROne + tempRRThree + tempRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
            (tempTPRROne + tempTPRRThree + tempTPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
            (tempYACPerRecOne + tempYACPerRecThree + tempYACPerRecFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
            (tempYPRROne + tempYPRRThree + tempYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
            (tempManYPRROne + tempManYPRRThree + tempManYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
            (tempZoneYPRROne + tempZoneYPRRThree + tempZoneYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
            (tempPPRPointsOne + tempPPRPointsThree + tempPPRPointsFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Reception MS (Games Played)'
          ] = +((tempRecMSOne + tempRecMSThree + tempRecMSFour) / 3).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
            (tempRecYardMSOne + tempRecYardMSThree + tempRecYardMSFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
            (tempRecTDMSOne + tempRecTDMSThree + tempRecTDMSFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Rec Yds Per Team Pass Att'
          ] = +(
            (tempRecYrsPerTeamPassAttOne +
              tempRecYrsPerTeamPassAttThree +
              tempRecYrsPerTeamPassAttFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'TD Per Team Pass Att'
          ] = +(
            (tdPerTeamPassAttOne +
              tdPerTeamPassAttThree +
              tdPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Weighted Dominator Rating'
          ] = +(
            (weightedDomRatingOne +
              weightedDomRatingThree +
              weightedDomRatingFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] =
            +(
              (dominatorRatingOne +
                dominatorRatingThree +
                dominatorRatingFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Adjusted Yds Per Team Play'
          ] = +(
            (adjYrdsPerTeamPassAttOne +
              adjYrdsPerTeamPassAttThree +
              adjYrdsPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Play'
          ] = +(
            (scrimmageYrdsPerTeamPlayOne +
              scrimmageYrdsPerTeamPlayThree +
              scrimmageYrdsPerTeamPlayFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Pass Attempt'
          ] = +(
            (scrimmageYrdsPerTeamPassAttOne +
              scrimmageYrdsPerTeamPassAttThree +
              scrimmageYrdsPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'EPA Per Team Pass Attempt'
          ] = +(
            (epaPerTeamPassAttOne +
              epaPerTeamPassAttThree +
              epaPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
            (epaPerPlayOne + epaPerPlayThree + epaPerPlayFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
            (totalEPAOne + totalEPAThree + totalEPAFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
            (yardsPerRecOne + yardsPerRecThree + yardsPerRecFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
            (receptionsOne + receptionsThree + receptionsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
            (recYardsOne + recYardsThree + recYardsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
            (recTDsOne + recTDsThree + recTDsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
            +(
              (rushAttPerGameOne + rushAttPerGameThree + rushAttPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
            (recPerGameOne + recPerGameThree + recPerGameFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] =
            +(
              (recYardsPerGameOne +
                recYardsPerGameThree +
                recYardsPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] =
            +(
              (recTDsPerGameOne + recTDsPerGameThree + recTDsPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearTwo['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Contested Target %'
          ] = +(
            (contestTargetPercentageOne +
              contestTargetPercentageThree +
              contestTargetPercentageFour) /
            3
          ).toFixed(4);
        }

        ////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
            (tempYearOneMTFREC + tempYearTwoMTFREC + tempYearFourMTFREC) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
            (tempYearOneMTFirstDownPerSnap +
              tempYearTwoMTFirstDownPerSnap +
              tempYearFourMTFirstDownPerSnap) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
            (tempYearOneMTFirstDownPerRouteRunOne +
              tempYearTwoMTFirstDownPerRouteRunTwo +
              tempYearFourMTFirstDownPerRouteRunFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
            (tempTargetsOne + tempTargetsTwo + tempTargetsFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
            (tempTargetsPerGameOne +
              tempTargetsPerGameTwo +
              tempTargetsPerGameFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.RR = +(
            (tempRROne + tempRRTwo + tempRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
            (tempTPRROne + tempTPRRTwo + tempTPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
            (tempYACPerRecOne + tempYACPerRecTwo + tempYACPerRecFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
            (tempYPRROne + tempYPRRTwo + tempYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
            (tempManYPRROne + tempManYPRRTwo + tempManYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
            (tempZoneYPRROne + tempZoneYPRRTwo + tempZoneYPRRFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
            (tempPPRPointsOne + tempPPRPointsTwo + tempPPRPointsFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Reception MS (Games Played)'
          ] = +((tempRecMSOne + tempRecMSTwo + tempRecMSFour) / 3).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
            (tempRecYardMSOne + tempRecYardMSTwo + tempRecYardMSFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
            (tempRecTDMSOne + tempRecTDMSTwo + tempRecTDMSFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Rec Yds Per Team Pass Att'
          ] = +(
            (tempRecYrsPerTeamPassAttOne +
              tempRecYrsPerTeamPassAttTwo +
              tempRecYrsPerTeamPassAttFour) /
            3
          ).toFixed(2);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'TD Per Team Pass Att'
          ] = +(
            (tdPerTeamPassAttOne + tdPerTeamPassAttTwo + tdPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Weighted Dominator Rating'
          ] = +(
            (weightedDomRatingOne +
              weightedDomRatingTwo +
              weightedDomRatingFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] =
            +(
              (dominatorRatingOne + dominatorRatingTwo + dominatorRatingFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Adjusted Yds Per Team Play'
          ] = +(
            (adjYrdsPerTeamPassAttOne +
              adjYrdsPerTeamPassAttTwo +
              adjYrdsPerTeamPassAttFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Play'
          ] = +(
            (scrimmageYrdsPerTeamPlayOne +
              scrimmageYrdsPerTeamPlayTwo +
              scrimmageYrdsPerTeamPlayFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Pass Attempt'
          ] = +(
            (scrimmageYrdsPerTeamPassAttOne +
              scrimmageYrdsPerTeamPassAttTwo +
              scrimmageYrdsPerTeamPlayFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
            (epaPerPlayOne + epaPerPlayTwo + epaPerPlayFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
            (totalEPAOne + totalEPATwo + totalEPAFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
            (yardsPerRecOne + yardsPerRecTwo + yardsPerRecFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
            (receptionsOne + receptionsTwo + receptionsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
            (recYardsOne + recYardsTwo + recYardsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
            (recTDsOne + recTDsTwo + recTDsFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
            +(
              (rushAttPerGameOne + rushAttPerGameTwo + rushAttPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
            (recPerGameOne + recPerGameTwo + recPerGameFour) /
            3
          ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] =
            +(
              (recYardsPerGameOne + recYardsPerGameTwo + recYardsPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] =
            +(
              (recTDsPerGameOne + recTDsPerGameTwo + recTDsPerGameFour) /
              3
            ).toFixed(4);
        }

        if (value1.yearThree['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Contested Target %'
          ] = +(
            (contestTargetPercentageOne +
              contestTargetPercentageTwo +
              contestTargetPercentageFour) /
            3
          ).toFixed(4);
        }

        ////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
            (tempYearOneMTFREC + tempYearTwoMTFREC + tempYearThreeMTFREC) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
            (tempYearOneMTFirstDownPerSnap +
              tempYearTwoMTFirstDownPerSnap +
              tempYearThreeMTFirstDownPerSnap) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
            (tempYearOneMTFirstDownPerRouteRunOne +
              tempYearTwoMTFirstDownPerRouteRunTwo +
              tempYearThreeMTFirstDownPerRouteRunThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +(
            (tempRecGradeOne + tempRecGradeTwo + tempRecGradeThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
            (tempTargetsOne + tempTargetsTwo + tempTargetsThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
            (tempTargetsPerGameOne +
              tempTargetsPerGameTwo +
              tempTargetsPerGameThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.RR = +(
            (tempRROne + tempRRTwo + tempRRThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
            (tempTPRROne + tempTPRRTwo + tempTPRRThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
            (tempYACPerRecOne + tempYACPerRecTwo + tempYACPerRecThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
            (tempYPRROne + tempYPRRTwo + tempYPRRThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
            (tempManYPRROne + tempManYPRRTwo + tempManYPRRThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
            (tempZoneYPRROne + tempZoneYPRRTwo + tempZoneYPRRThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
            (tempPPRPointsOne + tempPPRPointsTwo + tempPPRPointsThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Reception MS (Games Played)'
          ] = +((tempRecMSOne + tempRecMSTwo + tempRecMSThree) / 3).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
            (tempRecYardMSOne + tempRecYardMSTwo + tempRecYardMSThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
            (tempRecTDMSOne + tempRecTDMSTwo + tempRecTDMSThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Rec Yds Per Team Pass Att'
          ] = +(
            (tempRecYrsPerTeamPassAttOne +
              tempRecYrsPerTeamPassAttTwo +
              tempRecYrsPerTeamPassAttThree) /
            3
          ).toFixed(2);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'TD Per Team Pass Att'
          ] = +(
            (tdPerTeamPassAttOne +
              tdPerTeamPassAttTwo +
              tdPerTeamPassAttThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Weighted Dominator Rating'
          ] = +(
            (weightedDomRatingOne +
              weightedDomRatingTwo +
              weightedDomRatingThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] =
            +(
              (dominatorRatingOne + dominatorRatingTwo + dominatorRatingThree) /
              3
            ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Adjusted Yds Per Team Play'
          ] = +(
            (adjYrdsPerTeamPassAttOne +
              adjYrdsPerTeamPassAttTwo +
              adjYrdsPerTeamPassAttThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Play'
          ] = +(
            (scrimmageYrdsPerTeamPlayOne +
              scrimmageYrdsPerTeamPlayTwo +
              scrimmageYrdsPerTeamPlayThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Scrimmage Yds Per Team Pass Attempt'
          ] = +(
            (scrimmageYrdsPerTeamPassAttOne +
              scrimmageYrdsPerTeamPassAttTwo +
              scrimmageYrdsPerTeamPassAttThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'EPA Per Team Pass Attempt'
          ] = +(
            (epaPerTeamPassAttOne +
              epaPerTeamPassAttTwo +
              epaPerTeamPassAttThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
            (epaPerPlayOne + epaPerPlayTwo + epaPerPlayThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
            (totalEPAOne + totalEPATwo + totalEPAThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
            (yardsPerRecOne + yardsPerRecTwo + yardsPerRecThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
            (receptionsOne + receptionsTwo + receptionsThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
            (recYardsOne + recYardsTwo + recYardsThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
            (recTDsOne + recTDsTwo + recTDsThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
            +(
              (rushAttPerGameOne + rushAttPerGameTwo + rushAttPerGameThree) /
              3
            ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
            (recPerGameOne + recPerGameTwo + recPerGameThree) /
            3
          ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] =
            +(
              (recYardsPerGameOne + recYardsPerGameTwo + recYardsPerGameThree) /
              3
            ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] =
            +(
              (recTDsPerGameOne + recTDsPerGameTwo + recTDsPerGameThree) /
              3
            ).toFixed(4);
        }

        if (value1.yearFour['Games Played'] < 6) {
          allWrProspectsObjects[key1].careerAveragedStats[
            'Contested Target %'
          ] = +(
            (contestTargetPercentageOne +
              contestTargetPercentageTwo +
              contestTargetPercentageThree) /
            3
          ).toFixed(4);
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

        allWrProspectsObjects[key1].careerTotalStats.Targets = +(
          tempTargetsOne +
          tempTargetsTwo +
          tempTargetsThree +
          tempTargetsFour
        ).toFixed(2);

        allWrProspectsObjects[key1].careerTotalStats.RR = +(
          tempRROne +
          tempRRTwo +
          tempRRThree +
          tempRRFour
        ).toFixed(2);

        allWrProspectsObjects[key1].careerTotalStats['PPR Points'] = +(
          tempPPRPointsOne +
          tempPPRPointsTwo +
          tempPPRPointsThree +
          tempPPRPointsFour
        ).toFixed(2);

        allWrProspectsObjects[key1].careerTotalStats.Rec = +(
          receptionsOne +
          receptionsTwo +
          receptionsThree +
          receptionsFour
        ).toFixed(2);

        allWrProspectsObjects[key1].careerTotalStats['Rec Yds'] = +(
          recYardsOne +
          recYardsTwo +
          recYardsThree +
          recYardsFour
        ).toFixed(2);

        allWrProspectsObjects[key1].careerTotalStats['Rec TDs'] = +(
          recTDsOne +
          recTDsTwo +
          recTDsThree +
          recTDsFour
        ).toFixed(2);
      }
    }

    //
    //    players in this else only played two college seasons total
    //
    else {
      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'MTF/REC %'
      ] = +tempYearTwoMTFREC;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/Snap'] =
        +tempYearTwoMTFirstDownPerSnap;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['1D/RR'] =
        +tempYearTwoMTFirstDownPerRouteRunTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'REC Grade'
      ] = +tempRecGradeTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Targets =
        +tempTargetsTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['TGTs/G'] =
        +tempTargetsPerGameTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.RR =
        +tempRRTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.TPRR =
        +tempTPRRTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['YAC/Rec'] =
        +tempYACPerRecTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.YPRR =
        +tempYPRRTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Man YPRR'
      ] = +tempManYPRRTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Zone YPRR'
      ] = +tempZoneYPRRTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'PPR Points'
      ] = +tempPPRPointsTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Reception MS (Games Played)'
      ] = +tempRecMSTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Rec Yds MS'
      ] = +tempRecYardMSTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Rec TD MS'
      ] = +tempRecTDMSTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Rec Yds Per Team Pass Att'
      ] = +tempRecYrsPerTeamPassAttTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'TD Per Team Pass Att'
      ] = +tdPerTeamPassAttTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Weighted Dominator Rating'
      ] = +weightedDomRatingTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Dominator Rating'
      ] = +dominatorRatingTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Adjusted Yds Per Team Play'
      ] = +adjYrdsPerTeamPassAttTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Scrimmage Yds Per Team Play'
      ] = +scrimmageYrdsPerTeamPlayTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Scrimmage Yds Per Team Play'
      ] = +scrimmageYrdsPerTeamPassAttTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'EPA Per Team Pass Attempt'
      ] = +epaPerTeamPassAttTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'EPA Per Play'
      ] = +epaPerPlayTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Total EPA'
      ] = +totalEPATwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Yards Per Rec'
      ] = +yardsPerRecTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats.Rec =
        +receptionsTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['Rec Yds'] =
        +recYardsTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats['Rec TDs'] =
        +recTDsTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Rush Att per Game'
      ] = +rushAttPerGameTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Rec per Game'
      ] = +recPerGameTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Rec Yds per Game'
      ] = +recYardsPerGameTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Rec TDs per Game'
      ] = +recTDsPerGameTwo;

      allWrProspectsObjects[key1].yearTwoPlusYearThreeAveragedStats[
        'Contested Target %'
      ] = +contestTargetPercentageTwo;

      /////////////////////////////////////////////////////
      /////////////////////////////////////////////
      ////////////////////////////////////////////
      // setting career average stats

      if (
        value1.yearOne['Games Played'] >= 6 &&
        value1.yearTwo['Games Played'] >= 6
      ) {
        //
        allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] = +(
          (tempYearOneMTFREC + tempYearTwoMTFREC) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] = +(
          (tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] = +(
          (tempYearOneMTFirstDownPerRouteRunOne +
            tempYearTwoMTFirstDownPerRouteRunTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] = +(
          (tempRecGradeOne + tempRecGradeTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats.Targets = +(
          (tempTargetsOne + tempTargetsTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] = +(
          (tempTargetsPerGameOne + tempTargetsPerGameTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats.RR = +(
          (tempRROne + tempRRTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats.TPRR = +(
          (tempTPRROne + tempTPRRTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] = +(
          (tempYACPerRecOne + tempYACPerRecTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats.YPRR = +(
          (tempYPRROne + tempYPRRTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] = +(
          (tempManYPRROne + tempManYPRRTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] = +(
          (tempZoneYPRROne + tempZoneYPRRTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] = +(
          (tempPPRPointsOne + tempPPRPointsTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Reception MS (Games Played)'
        ] = +((tempRecMSOne + tempRecMSTwo) / 2).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] = +(
          (tempRecYardMSOne + tempRecYardMSTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] = +(
          (tempRecTDMSOne + tempRecTDMSTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Rec Yds Per Team Pass Att'
        ] = +(
          (tempRecYrsPerTeamPassAttOne + tempRecYrsPerTeamPassAttTwo) /
          2
        ).toFixed(2);

        allWrProspectsObjects[key1].careerAveragedStats[
          'TD Per Team Pass Att'
        ] = +((tdPerTeamPassAttOne + tdPerTeamPassAttTwo) / 2).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Weighted Dominator Rating'
        ] = +((weightedDomRatingOne + weightedDomRatingTwo) / 2).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] = +(
          (dominatorRatingOne + dominatorRatingTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +(
          (adjYrdsPerTeamPassAttOne + adjYrdsPerTeamPassAttTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Play'
        ] = +(
          (scrimmageYrdsPerTeamPlayOne + scrimmageYrdsPerTeamPlayTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Pass Attempt'
        ] = +(
          (scrimmageYrdsPerTeamPassAttOne + scrimmageYrdsPerTeamPassAttTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats[
          'EPA Per Team Pass Attempt'
        ] = +((epaPerTeamPassAttOne + epaPerTeamPassAttTwo) / 2).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] = +(
          (epaPerPlayOne + epaPerPlayTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] = +(
          (totalEPAOne + totalEPATwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] = +(
          (yardsPerRecOne + yardsPerRecTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats.Rec = +(
          (receptionsOne + receptionsTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] = +(
          (recYardsOne + recYardsTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +(
          (recTDsOne + recTDsTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
          +((rushAttPerGameOne + rushAttPerGameTwo) / 2).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] = +(
          (recPerGameOne + recPerGameTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] = +(
          (recYardsPerGameOne + recYardsPerGameTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] = +(
          (recTDsPerGameOne + recTDsPerGameTwo) /
          2
        ).toFixed(4);

        allWrProspectsObjects[key1].careerAveragedStats['Contested Target %'] =
          +(
            (contestTargetPercentageOne + contestTargetPercentageTwo) /
            2
          ).toFixed(4);

        ///don't copy the } below this line!!
      }

      ////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] =
          +tempYearTwoMTFREC;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] =
          +tempYearTwoMTFirstDownPerSnap;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] =
          +tempYearTwoMTFirstDownPerRouteRunTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] =
          +tempRecGradeTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Targets =
          +tempTargetsTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] =
          +tempTargetsPerGameTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.RR = +tempRRTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.TPRR = +tempTPRRTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] =
          +tempYACPerRecTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.YPRR = +tempYPRRTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] =
          +tempManYPRRTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] =
          +tempZoneYPRRTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] =
          +tempPPRPointsTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Reception MS (Games Played)'
        ] = +tempRecMSTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] =
          +tempRecYardMSTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] =
          +tempRecTDMSTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Rec Yds Per Team Pass Att'
        ] = +tempRecYrsPerTeamPassAttTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'TD Per Team Pass Att'
        ] = +tdPerTeamPassAttTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Weighted Dominator Rating'
        ] = +weightedDomRatingTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] =
          +dominatorRatingTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +adjYrdsPerTeamPassAttTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Play'
        ] = +scrimmageYrdsPerTeamPlayTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Pass Attempt'
        ] = +scrimmageYrdsPerTeamPassAttTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'EPA Per Team Pass Attempt'
        ] = +epaPerTeamPassAttTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] =
          +epaPerPlayTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] =
          +totalEPATwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] =
          +yardsPerRecTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Rec = +receptionsTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] =
          +recYardsTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +recTDsTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
          +rushAttPerGameTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] =
          +recPerGameTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] =
          +recYardsPerGameTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] =
          +recTDsPerGameTwo;
      }

      if (value1.yearOne['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Contested Target %'] =
          +contestTargetPercentageTwo;
      }

      ///////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['MTF/REC %'] =
          +tempYearOneMTFREC;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/Snap'] =
          +tempYearOneMTFirstDownPerSnap;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['1D/RR'] =
          +tempYearOneMTFirstDownPerRouteRunOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['REC Grade'] =
          +tempRecGradeOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Targets =
          +tempTargetsOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['TGTs/G'] =
          +tempTargetsPerGameOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.RR = +tempRROne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.TPRR = +tempTPRROne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['YAC/Rec'] =
          +tempYACPerRecOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.YPRR = +tempYPRROne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Man YPRR'] =
          +tempManYPRROne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Zone YPRR'] =
          +tempZoneYPRROne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['PPR Points'] =
          +tempPPRPointsOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Reception MS (Games Played)'
        ] = +tempRecMSOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds MS'] =
          +tempRecYardMSOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TD MS'] =
          +tempRecTDMSOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Rec Yds Per Team Pass Att'
        ] = +tempRecYrsPerTeamPassAttOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'TD Per Team Pass Att'
        ] = +tdPerTeamPassAttOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Weighted Dominator Rating'
        ] = +weightedDomRatingOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Dominator Rating'] =
          +dominatorRatingOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Adjusted Yds Per Team Play'
        ] = +adjYrdsPerTeamPassAttOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Play'
        ] = +scrimmageYrdsPerTeamPlayOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'Scrimmage Yds Per Team Pass Attempt'
        ] = +scrimmageYrdsPerTeamPassAttOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats[
          'EPA Per Team Pass Attempt'
        ] = +epaPerTeamPassAttOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['EPA Per Play'] =
          +epaPerPlayOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Total EPA'] =
          +totalEPAOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Yards Per Rec'] =
          +yardsPerRecOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats.Rec = +receptionsOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds'] =
          +recYardsOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs'] = +recTDsOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rush Att per Game'] =
          +rushAttPerGameOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec per Game'] =
          +recPerGameOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec Yds per Game'] =
          +recYardsPerGameOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Rec TDs per Game'] =
          +recTDsPerGameOne;
      }

      if (value1.yearTwo['Games Played'] < 6) {
        allWrProspectsObjects[key1].careerAveragedStats['Contested Target %'] =
          +contestTargetPercentageOne;
      }

      //////////////////////////////////////////
      // setting career total stats

      //    allWrProspectsObjects[key1].careerTotalStats['MTF/REC %'] = +(tempYearOneMTFREC + tempYearTwoMTFREC).toFixed(2)

      //    allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerSnap + tempYearTwoMTFirstDownPerSnap).toFixed(2)

      //    allWrProspectsObjects[key1].careerTotalStats['1D/Snap'] = +(tempYearOneMTFirstDownPerRouteRunOne + tempYearTwoMTFirstDownPerRouteRunTwo).toFixed(2)

      //    allWrProspectsObjects[key1].careerTotalStats['REC Grade'] = +(tempRecGradeOne + tempRecGradeTwo).toFixed(2)

      allWrProspectsObjects[key1].careerTotalStats.Targets = +(
        tempTargetsOne + tempTargetsTwo
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats.RR = +(
        tempRROne + tempRRTwo
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats['PPR Points'] = +(
        tempPPRPointsOne + tempPPRPointsTwo
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats.Rec = +(
        receptionsOne + receptionsTwo
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats['PPR Points'] = +(
        recYardsOne + recYardsTwo
      ).toFixed(2);

      allWrProspectsObjects[key1].careerTotalStats['Rec TDs'] = +(
        recTDsOne + recTDsTwo
      ).toFixed(2);
    }

    ///////////////////////
    //////////////////////////////
  } // end of for (const [key2, value2] of Object.entries(value1)) {
} // for (const [key1, value1] of Object.entries(allWrProspectsObjects)) {

// console.log(allWrProspectsObjects);

module.exports = allWrProspectsObjects;
