const greaterThanZeroNineLessThanTwo = function (
  curMonth,
  name,
  fantasyCalcValue,
  valueDiffBetweenMyValueAndMarketValue,
  myRedraftScoreFromPlayersRedraftTier,
  myRedraftDifferenceScore,
  fcQBPercentOfMax,
  rvTier,
  percentValueDiffBetweenMyValueAndMarket,
  fcQBMaxValue,
  fcNonQBMaxValue
) {
  //   console.log(name);
  //   console.log(
  //     name,
  //     fantasyCalcValue,
  //     valueDiffBetweenMyValueAndMarketValue,
  //     percentValueDiffBetweenMyValueAndMarket,
  //     myRedraftDifferenceScore
  //   );
  //
  ///
  ///////
  ///////// if percentValueDiffBetweenMyValueAndMarket is positive or 0 ////////////////
  ///////
  ///
  //

  if (percentValueDiffBetweenMyValueAndMarket >= 0) {
    ///
    /////
    ///////
    ///////// if meRedraftDifferenceScore is positive or 0 //////////////////
    ///////
    /////
    ///

    if (myRedraftDifferenceScore >= 0) {
      if (percentValueDiffBetweenMyValueAndMarket >= 30) {
        // console.log(
        //   name,
        //   fantasyCalcValue,
        //   valueDiffBetweenMyValueAndMarketValue,
        //   percentValueDiffBetweenMyValueAndMarket
        // );

        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //
      if (
        percentValueDiffBetweenMyValueAndMarket >= 25 &&
        percentValueDiffBetweenMyValueAndMarket < 30
      ) {
        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
        }
      }
      //

      if (
        percentValueDiffBetweenMyValueAndMarket >= 20 &&
        percentValueDiffBetweenMyValueAndMarket < 25
      ) {
        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
        }
      }
      //
      if (
        percentValueDiffBetweenMyValueAndMarket >= 15 &&
        percentValueDiffBetweenMyValueAndMarket < 20
      ) {
        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
        }
      }
      //
      if (percentValueDiffBetweenMyValueAndMarket <= 14.99) {
        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
        }
      }
    }

    ///
    /////
    ///////
    ///////// if meRedraftDifferenceScore is negetive //////////////////
    ///////
    /////
    ///

    if (myRedraftDifferenceScore < 0) {
      //   console.log(
      //     name,
      //     fantasyCalcValue,
      //     valueDiffBetweenMyValueAndMarketValue,
      //     percentValueDiffBetweenMyValueAndMarket,
      //     myRedraftDifferenceScore
      //   );
      if (percentValueDiffBetweenMyValueAndMarket >= 30) {
        // console.log(
        //   name,
        //   fantasyCalcValue,
        //   valueDiffBetweenMyValueAndMarketValue,
        //   percentValueDiffBetweenMyValueAndMarket
        // );

        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //
      if (
        percentValueDiffBetweenMyValueAndMarket >= 25 &&
        percentValueDiffBetweenMyValueAndMarket < 30
      ) {
        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //

      if (
        percentValueDiffBetweenMyValueAndMarket >= 20 &&
        percentValueDiffBetweenMyValueAndMarket < 25
      ) {
        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //
      if (
        percentValueDiffBetweenMyValueAndMarket >= 15 &&
        percentValueDiffBetweenMyValueAndMarket < 20
      ) {
        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //
      if (percentValueDiffBetweenMyValueAndMarket <= 14.99) {
        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
    }
  }

  //

  //
  ///
  ///////
  ///////// if percentValueDiffBetweenMyValueAndMarket is negetive ////////////////
  ///////
  ///
  //

  if (percentValueDiffBetweenMyValueAndMarket < 0) {
    // console.log(
    //   name,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket,
    //   myRedraftDifferenceScore
    // );
    ///
    /////
    ///////
    ///////// if meRedraftDifferenceScore is positive or 0 //////////////////
    ///////
    /////
    ///

    if (myRedraftDifferenceScore >= 0) {
      if (percentValueDiffBetweenMyValueAndMarket <= -30) {
        // console.log(
        //   name,
        //   fantasyCalcValue,
        //   valueDiffBetweenMyValueAndMarketValue,
        //   percentValueDiffBetweenMyValueAndMarket
        // );

        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //
      if (
        percentValueDiffBetweenMyValueAndMarket <= -25 &&
        percentValueDiffBetweenMyValueAndMarket > -30
      ) {
        // console.log(
        //   name,
        //   fantasyCalcValue,
        //   valueDiffBetweenMyValueAndMarketValue,
        //   percentValueDiffBetweenMyValueAndMarket
        // );
        if (myRedraftDifferenceScore > 500) {
          //   console.log(
          //     name,
          //     fantasyCalcValue,
          //     valueDiffBetweenMyValueAndMarketValue,
          //     percentValueDiffBetweenMyValueAndMarket
          //   );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
        }
      }
      //

      if (
        percentValueDiffBetweenMyValueAndMarket <= -20 &&
        percentValueDiffBetweenMyValueAndMarket > -25
      ) {
        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
        }
      }
      //
      if (
        percentValueDiffBetweenMyValueAndMarket <= -15 &&
        percentValueDiffBetweenMyValueAndMarket > -20
      ) {
        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
        }
      }
      //
      if (percentValueDiffBetweenMyValueAndMarket >= -14.99) {
        if (myRedraftDifferenceScore > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (myRedraftDifferenceScore > 300 && myRedraftDifferenceScore < 600) {
        }
        if (myRedraftDifferenceScore > 100 && myRedraftDifferenceScore < 400) {
        }
        if (myRedraftDifferenceScore <= 100) {
        }
      }
    }

    ///
    /////
    ///////
    ///////// if meRedraftDifferenceScore is negetive //////////////////
    ///////
    /////
    ///

    if (myRedraftDifferenceScore < 0) {
      if (percentValueDiffBetweenMyValueAndMarket <= -30) {
        // console.log(
        //   name,
        //   fantasyCalcValue,
        //   valueDiffBetweenMyValueAndMarketValue,
        //   percentValueDiffBetweenMyValueAndMarket
        // );

        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //
      if (
        percentValueDiffBetweenMyValueAndMarket <= -25 &&
        percentValueDiffBetweenMyValueAndMarket > -30
      ) {
        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //

      if (
        percentValueDiffBetweenMyValueAndMarket <= -20 &&
        percentValueDiffBetweenMyValueAndMarket > -25
      ) {
        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //
      if (
        percentValueDiffBetweenMyValueAndMarket <= -15 &&
        percentValueDiffBetweenMyValueAndMarket > -20
      ) {
        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
      //
      if (percentValueDiffBetweenMyValueAndMarket >= -14.99) {
        if (Math.abs(myRedraftDifferenceScore) > 500) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 300 &&
          Math.abs(myRedraftDifferenceScore) > 600
        ) {
        }
        if (
          Math.abs(myRedraftDifferenceScore) > 100 &&
          Math.abs(myRedraftDifferenceScore) > 400
        ) {
        }
        if (Math.abs(myRedraftDifferenceScore) > 100) {
          // console.log(
          //   name,
          //   fantasyCalcValue,
          //   valueDiffBetweenMyValueAndMarketValue,
          //   percentValueDiffBetweenMyValueAndMarket,
          //   myRedraftDifferenceScore
          // );
        }
      }
    }
  }
};

module.exports = greaterThanZeroNineLessThanTwo;
