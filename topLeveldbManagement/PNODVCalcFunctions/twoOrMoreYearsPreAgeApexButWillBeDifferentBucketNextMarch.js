const twoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch = function (
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.65;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.4625;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.275;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.91875;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.9;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.65;
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.4;
        let value = (fantasyCalcValue + tempValue) / maxValue;
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.15;
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
        let tempOne = +fantasyCalcValue * 0.225;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let tempOne = +fantasyCalcValue * 0.175;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let tempOne = +fantasyCalcValue * 0.13;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let tempOne = +fantasyCalcValue * 0.085;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let tempOne = +fantasyCalcValue * 0.065;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let tempOne = +fantasyCalcValue * 0.035;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let tempOne = +fantasyCalcValue * 0.025;
        let tempTwo = +fantasyCalcValue - tempOne;

        // console.log(fantasyCalcValue, test);
        let value = tempTwo / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 0) {
        let tempOne = +fantasyCalcValue * 0.015;
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
        let tempValue = fantasyCalcValue * 0.175;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = fantasyCalcValue * 0.125;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = fantasyCalcValue * 0.1;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = fantasyCalcValue * 0.085;
        let newValue = +fantasyCalcValue + +tempValue;

        let value = newValue / maxValue;
        if (value) {
          return value;
        }
      }

      if (myRedraftDifferenceScore === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.35);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.65);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.85);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.95);
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
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.85);
        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.65);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.35);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.15);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.85);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.65);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.35);

        let value = (fantasyCalcValue - tempValue) / maxValue;
        if (value) {
          return value;
        }
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
};

module.exports = twoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch;
