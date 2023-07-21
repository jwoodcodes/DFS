const greaterThanPointEightNine = require('./allFcPercentOfMaxFunctions/grThanEightNine');
const greaterThanSevenNineLessThanNine = require('./allFcPercentOfMaxFunctions/grThanSevenNineLessThanNine');
const greaterThanFiveNineLessThanEight = require('./allFcPercentOfMaxFunctions/grThanFiveNineLessThanEight');
const greaterThanThreeNineLessThanSix = require('./allFcPercentOfMaxFunctions/grThanThreeNineLessThanSix');
const greaterThanTwoNineLessThanFour = require('./allFcPercentOfMaxFunctions/grThanTwoNineLessThanFour');
const greaterThanOneNineLessThanThree = require('./allFcPercentOfMaxFunctions/grThanOneNineLessThanThree');
const greaterThanZeroNineLessThanTwo = require('./allFcPercentOfMaxFunctions/grThanZeroNineLessThanTwo');
const greaterThanPointZeroThreeLessThanOne = require('./allFcPercentOfMaxFunctions/grThanZeroThreeLessThanOne');
const greaterThanZeroThree = require('./allFcPercentOfMaxFunctions/lessThanZeroThree');

const withinTwoYearsOfAgeApexButNotPastAndWillBeSameNextMarch = function (
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.6;
        let value = (fantasyCalcValue + tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.4;
        let value = (fantasyCalcValue + tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.225;
        let value = (fantasyCalcValue + tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.85;
        let value = (fantasyCalcValue + tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.8;
        let value = (fantasyCalcValue + tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.6;
        let value = (fantasyCalcValue + tempValue) / fcQBMaxValue;
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.35;
        let value = (fantasyCalcValue + tempValue) / fcQBMaxValue;
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.1;
        let value = (fantasyCalcValue + tempValue) / fcQBMaxValue;
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
        let value = fantasyCalcValue - (fantasyCalcValue * 0.25) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.2) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.14) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.09) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.065) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.04) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.03) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 0) {
        let value = fantasyCalcValue - (fantasyCalcValue * 0.02) / fcQBMaxValue;
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
        let value = fantasyCalcValue + (fantasyCalcValue * 0.17) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        // console.log(name, value);
        let value = fantasyCalcValue + (fantasyCalcValue * 0.12) / fcQBMaxValue;
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let value = fantasyCalcValue + (fantasyCalcValue * 0.9) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let value = fantasyCalcValue + (fantasyCalcValue * 0.08) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.4);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.7);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.9);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1);
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
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.9);
        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.7);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.45);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.25);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.95);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.75);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.45);

        let value = (fantasyCalcValue - tempValue) / fcQBMaxValue;
        if (value) {
          return value;
        }
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////

  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //

  if (fcQBPercentOfMax > 0.899) {
    // / console.log(
    //   name,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket
    // );

    greaterThanPointEightNine(
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
    );
  }
  //
  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //
  if (fcQBPercentOfMax > 0.799 && fcQBPercentOfMax < 0.9) {
    // console.log(
    //   name,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket
    // );

    greaterThanSevenNineLessThanNine(
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
    );
  }
  //
  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //
  if (fcQBPercentOfMax > 0.599 && fcQBPercentOfMax < 0.8) {
    // console.log(name);

    greaterThanFiveNineLessThanEight(
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
    );
  }
  //
  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //
  if (fcQBPercentOfMax > 0.399 && fcQBPercentOfMax < 0.6) {
    // console.log(
    //   name,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket
    // );

    greaterThanThreeNineLessThanSix(
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
    );
  }
  //
  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //
  if (fcQBPercentOfMax > 0.299 && fcQBPercentOfMax < 0.4) {
    // console.log(
    //   name,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket
    // );

    greaterThanTwoNineLessThanFour(
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
    );
  }
  //
  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //
  if (fcQBPercentOfMax > 0.199 && fcQBPercentOfMax < 0.3) {
    // console.log(
    //   name,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket
    // );

    greaterThanOneNineLessThanThree(
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
    );
  }
  //
  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //
  if (fcQBPercentOfMax > 0.09 && fcQBPercentOfMax < 0.2) {
    // console.log(
    //   name,
    //   fcQBPercentOfMax,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket
    // );

    greaterThanZeroNineLessThanTwo(
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
    );
  }

  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //

  if (fcQBPercentOfMax > 0.03 && fcQBPercentOfMax < 0.1) {
    // console.log(
    //   name,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket
    // );

    greaterThanPointZeroThreeLessThanOne(
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
    );
  }
  //
  //
  ///
  ////
  /////
  ////// new main category
  /////
  ////
  ///
  //
  if (fcQBPercentOfMax <= 0.03) {
    // console.log(
    //   name,
    //   fantasyCalcValue,
    //   valueDiffBetweenMyValueAndMarketValue,
    //   percentValueDiffBetweenMyValueAndMarket
    // );

    greaterThanZeroThree(
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
    );
  }
};

module.exports = withinTwoYearsOfAgeApexButNotPastAndWillBeSameNextMarch;
