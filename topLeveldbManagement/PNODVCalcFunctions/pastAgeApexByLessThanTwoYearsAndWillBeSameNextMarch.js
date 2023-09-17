const pastAgeApexByLessThanTwoYearsAndWillBeSameNextMarch = function (
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
  fcNonQBMaxValue,
  position
) {
  if (myRedraftScoreFromPlayersRedraftTier === undefined) {
    myRedraftScoreFromPlayersRedraftTier = 0;
  }
  if (myRedraftDifferenceScore === undefined) {
    myRedraftDifferenceScore = 0;
  }

  let maxValue = 0;
  if (position === 'QB') {
    maxValue = fcQBMaxValue;
  }
  if (position !== 'QB') {
    maxValue = fcNonQBMaxValue;
  }

  // console.log(
  //   // curMonth,
  //   name,
  //   fantasyCalcValue,
  //   valueDiffBetweenMyValueAndMarketValue,
  //   myRedraftScoreFromPlayersRedraftTier,
  //   myRedraftDifferenceScore,
  //   fcQBPercentOfMax,
  //   rvTier,
  //   percentValueDiffBetweenMyValueAndMarket
  // );

  //////////////////////////////////////////////////////////////////////////////////////////////////

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
    ///////// if myRedraftDifferenceScore is positive or 0 //////////////////
    ///////
    /////
    ///
    if (myRedraftDifferenceScore >= 0) {
      //
      // console.log(
      //   name,
      //   fantasyCalcValue,
      //   valueDiffBetweenMyValueAndMarketValue,
      //   percentValueDiffBetweenMyValueAndMarket,
      //   myRedraftDifferenceScore
      // );
      if (myRedraftDifferenceScore === 700) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.5;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.3;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.1;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.7;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.65;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.45;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 100) {
        // console.log(
        //   name,
        //   fantasyCalcValue,
        //   valueDiffBetweenMyValueAndMarketValue,
        //   percentValueDiffBetweenMyValueAndMarket,
        //   myRedraftDifferenceScore
        // );
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.25;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.05;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
    }

    ///
    /////
    ///////
    ///////// if myRedraftDifferenceScore is negetive //////////////////
    ///////
    /////
    ///

    if (myRedraftDifferenceScore < 0) {
      //
      // console.log(
      //   name,
      //   fantasyCalcValue,
      //   valueDiffBetweenMyValueAndMarketValue,
      //   percentValueDiffBetweenMyValueAndMarket,
      //   myRedraftDifferenceScore
      // );
      if (Math.abs(myRedraftDifferenceScore) === 700) {
        let tempOne = +fantasyCalcValue * 0.285;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let tempOne = +fantasyCalcValue * 0.235;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let tempOne = +fantasyCalcValue * 0.175;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let tempOne = +fantasyCalcValue * 0.125;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let tempOne = +fantasyCalcValue * 0.085;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let tempOne = +fantasyCalcValue * 0.06;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let tempOne = +fantasyCalcValue * 0.05;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 0) {
        let tempOne = +fantasyCalcValue * 0.04;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
    }
  }

  //
  ///
  ///////
  ///////// if percentValueDiffBetweenMyValueAndMarket is negetive ////////////////
  ///////
  ///
  //

  if (percentValueDiffBetweenMyValueAndMarket < 0) {
    ///
    /////
    ///////
    ///////// if myRedraftDifferenceScore is positive or 0 //////////////////
    ///////
    /////
    ///
    if (myRedraftDifferenceScore >= 0) {
      //
      // console.log(
      //   name,
      //   fantasyCalcValue,
      //   valueDiffBetweenMyValueAndMarketValue,
      //   percentValueDiffBetweenMyValueAndMarket,
      //   myRedraftDifferenceScore
      // );
      if (myRedraftDifferenceScore === 700) {
        let tempValue = fantasyCalcValue * 0.125;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = fantasyCalcValue * 0.09;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = fantasyCalcValue * 0.075;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = fantasyCalcValue * 0.06;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / maxValue;
        if (value) {
          return value;
        }
      }

      if (myRedraftDifferenceScore === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.5);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.8);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.95);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.1);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
    }

    ///
    /////
    ///////
    ///////// if myRedraftDifferenceScore is negetive //////////////////
    ///////
    /////
    ///

    if (myRedraftDifferenceScore < 0) {
      //
      // console.log(
      //   name,
      //   fantasyCalcValue,
      //   valueDiffBetweenMyValueAndMarketValue,
      //   percentValueDiffBetweenMyValueAndMarket,
      //   myRedraftDifferenceScore
      // );
      if (Math.abs(myRedraftDifferenceScore) === 700) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 2.1);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.95);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.75);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.4);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.2);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.6);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
};

module.exports = pastAgeApexByLessThanTwoYearsAndWillBeSameNextMarch;
