const tePastAgeApexButWithinTwoYearsButWillBeInWorseBucketNextMarch = function (
  curMonth,
  name,
  fantasyCalcValue,
  valueDiffBetweenMyValueAndMarketValue,
  myRedraftScoreFromPlayersRedraftTier,
  myRedraftDifferenceScore,
  fcNonQBPercentOfMax,
  rvTier,
  percentValueDiffBetweenMyValueAndMarket,
  fcQBMaxValue,
  fcNonQBMaxValue
) {
  if (myRedraftScoreFromPlayersRedraftTier === undefined) {
    myRedraftScoreFromPlayersRedraftTier = 0;
  }
  if (myRedraftDifferenceScore === undefined) {
    myRedraftDifferenceScore = 0;
  }

  // console.log(
  //   // curMonth,
  //   name,
  //   fantasyCalcValue,
  //   valueDiffBetweenMyValueAndMarketValue,
  //   myRedraftScoreFromPlayersRedraftTier,
  //   myRedraftDifferenceScore,
  //   fcNonQBPercentOfMax,
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.45;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.25;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.05;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.65;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.6;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.4;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.2;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.025;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
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
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.29) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.25) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.2) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.15) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.1) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.09) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.07) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 0) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.05) / fcNonQBMaxValue;
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
        let tempValue = fantasyCalcValue * 0.12;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = fantasyCalcValue * 0.085;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = fantasyCalcValue * 0.07;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = fantasyCalcValue * 0.055;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (myRedraftDifferenceScore === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.55);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.85);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.15);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
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
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 2.15);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 2);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.85);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.5);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.3);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        1;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.8);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
};

module.exports = tePastAgeApexButWithinTwoYearsButWillBeInWorseBucketNextMarch;
