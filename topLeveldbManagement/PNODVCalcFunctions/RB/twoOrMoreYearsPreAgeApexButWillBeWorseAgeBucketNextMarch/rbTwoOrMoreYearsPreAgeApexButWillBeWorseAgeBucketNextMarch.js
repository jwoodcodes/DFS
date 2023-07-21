const greaterThanPointEightNine = require('./allFcPercentOfMaxFunctions/grThanEightNine');
const greaterThanSevenNineLessThanNine = require('./allFcPercentOfMaxFunctions/grThanSevenNineLessThanNine');
const greaterThanFiveNineLessThanEight = require('./allFcPercentOfMaxFunctions/grThanFiveNineLessThanEight');
const greaterThanThreeNineLessThanSix = require('./allFcPercentOfMaxFunctions/grThanThreeNineLessThanSix');
const greaterThanTwoNineLessThanFour = require('./allFcPercentOfMaxFunctions/grThanTwoNineLessThanFour');
const greaterThanOneNineLessThanThree = require('./allFcPercentOfMaxFunctions/grThanOneNineLessThanThree');
const greaterThanZeroNineLessThanTwo = require('./allFcPercentOfMaxFunctions/grThanZeroNineLessThanTwo');
const greaterThanPointZeroThreeLessThanOne = require('./allFcPercentOfMaxFunctions/grThanZeroThreeLessThanOne');
const greaterThanZeroThree = require('./allFcPercentOfMaxFunctions/lessThanZeroThree');

const rbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch = function (
  curMonth,
  name,
  fantasyCalcValue,
  valueDiffBetweenMyValueAndMarketValue,
  myRedraftScoreFromPlayersRedraftTier,
  myRedraftDifferenceScore,
  fcNonQBPercentOfMax,
  rvTier,
  percentValueDiffBetweenMyValueAndMarket,
  fcNonQBMaxValue,
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.65;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.4625;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.275;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.91875;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.9;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.65;
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
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.4;
        let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.15;
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
          fantasyCalcValue - (fantasyCalcValue * 0.225) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.175) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.13) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.085) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.065) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.035) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.025) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 0) {
        let value =
          fantasyCalcValue - (fantasyCalcValue * 0.015) / fcNonQBMaxValue;
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
        let value =
          fantasyCalcValue + (fantasyCalcValue * 0.175) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 600) {
        // console.log(name, value);
        let value =
          fantasyCalcValue + (fantasyCalcValue * 0.125) / fcNonQBMaxValue;
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      if (myRedraftDifferenceScore === 500) {
        let value =
          fantasyCalcValue + (fantasyCalcValue * 0.1) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 400) {
        let value =
          fantasyCalcValue + (fantasyCalcValue * 0.085) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.35);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.65);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.85);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (myRedraftDifferenceScore === 0) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.95);
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
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.85);
        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 600) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.65);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 500) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.35);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }

      if (Math.abs(myRedraftDifferenceScore) === 400) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.15);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 300) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.85);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 200) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.65);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
        if (value) {
          return value;
        }
      }
      if (Math.abs(myRedraftDifferenceScore) === 100) {
        let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.35);

        let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
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

  if (fcNonQBPercentOfMax > 0.899) {
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
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
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
  if (fcNonQBPercentOfMax > 0.799 && fcNonQBPercentOfMax < 0.9) {
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
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
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
  if (fcNonQBPercentOfMax > 0.599 && fcNonQBPercentOfMax < 0.8) {
    // console.log(name);

    greaterThanFiveNineLessThanEight(
      curMonth,
      name,
      fantasyCalcValue,
      valueDiffBetweenMyValueAndMarketValue,
      myRedraftScoreFromPlayersRedraftTier,
      myRedraftDifferenceScore,
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
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
  if (fcNonQBPercentOfMax > 0.399 && fcNonQBPercentOfMax < 0.6) {
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
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
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
  if (fcNonQBPercentOfMax > 0.299 && fcNonQBPercentOfMax < 0.4) {
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
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
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
  if (fcNonQBPercentOfMax > 0.199 && fcNonQBPercentOfMax < 0.3) {
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
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
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
  if (fcNonQBPercentOfMax > 0.09 && fcNonQBPercentOfMax < 0.2) {
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
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
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

  if (fcNonQBPercentOfMax > 0.03 && fcNonQBPercentOfMax < 0.1) {
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
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
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
  if (fcNonQBPercentOfMax <= 0.03) {
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
      fcNonQBPercentOfMax,
      rvTier,
      percentValueDiffBetweenMyValueAndMarket,
      fcNonQBMaxValue,
      fcNonQBMaxValue
    );
  }
};

module.exports = rbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch;
