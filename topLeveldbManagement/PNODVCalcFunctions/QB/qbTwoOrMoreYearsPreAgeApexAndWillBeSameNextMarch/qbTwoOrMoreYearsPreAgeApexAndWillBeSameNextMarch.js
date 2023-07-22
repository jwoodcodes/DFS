const qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch = function (
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.75;
        let value = ((fantasyCalcValue + tempValue) / fcQBMaxValue).toFixed(2);
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.5625;
        let value = ((fantasyCalcValue + tempValue) / fcQBMaxValue).toFixed(2);
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.375;
        let value = ((fantasyCalcValue + tempValue) / fcQBMaxValue).toFixed(2);
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.1875;
        let value = ((fantasyCalcValue + tempValue) / fcQBMaxValue).toFixed(2);
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1;
        let value = ((fantasyCalcValue + tempValue) / fcQBMaxValue).toFixed(2);
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.75;
        let value = ((fantasyCalcValue + tempValue) / fcQBMaxValue).toFixed(2);
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 100) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.5;
        let value = ((fantasyCalcValue + tempValue) / fcQBMaxValue).toFixed(2);
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        // console.log(
        //   name,
        //   fantasyCalcValue,
        //   valueDiffBetweenMyValueAndMarketValue,
        //   percentValueDiffBetweenMyValueAndMarket,
        //   myRedraftDifferenceScore
        // );
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.25;
        // console.log(name, tempValue);
        let newValue = fantasyCalcValue + tempValue;
        // console.log(name, newValue, fcQBMaxValue);
        let value = newValue / fcQBMaxValue;
        // console.log(name, value);
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
        let value = fantasyCalcValue - (fantasyCalcValue * 0.2) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.15) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.1) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.075) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.05) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.025) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let value = fantasyCalcValue / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 0) {
        let value = fantasyCalcValue / fcQBMaxValue;
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

        let value = newValue / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = fantasyCalcValue * 0.085;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = fantasyCalcValue * 0.07;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = fantasyCalcValue * 0.055;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.25);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.5);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.75);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.85);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
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
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.75);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.5);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.25);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.75);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.5);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.25);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
};

module.exports = qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch;
