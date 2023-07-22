const teWithinTwoYearsOfAgeApexButNotPastButWillBeInWorseBucketNextMarch =
  function (
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
          let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.55;
          let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 600) {
          let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.35;
          let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 500) {
          let tempValue = valueDiffBetweenMyValueAndMarketValue * 1.15;
          let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 400) {
          let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.75;
          let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 300) {
          let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.7;
          let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 200) {
          let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.5;
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
          let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.3;
          let value = (fantasyCalcValue + tempValue) / fcNonQBMaxValue;
          if (value) {
            // console.log(name, value);
            return value;
          }
        }
        if (myRedraftDifferenceScore === 0) {
          let tempValue = valueDiffBetweenMyValueAndMarketValue * 0.075;
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
            fantasyCalcValue - (fantasyCalcValue * 0.275) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (Math.abs(myRedraftDifferenceScore) === 600) {
          let value =
            fantasyCalcValue - (fantasyCalcValue * 0.225) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }

        if (Math.abs(myRedraftDifferenceScore) === 500) {
          let value =
            fantasyCalcValue - (fantasyCalcValue * 0.16) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }

        if (Math.abs(myRedraftDifferenceScore) === 400) {
          let value =
            fantasyCalcValue - (fantasyCalcValue * 0.12) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (Math.abs(myRedraftDifferenceScore) === 300) {
          let value =
            fantasyCalcValue - (fantasyCalcValue * 0.075) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (Math.abs(myRedraftDifferenceScore) === 200) {
          let value =
            fantasyCalcValue - (fantasyCalcValue * 0.05) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (Math.abs(myRedraftDifferenceScore) === 100) {
          let value =
            fantasyCalcValue - (fantasyCalcValue * 0.04) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (Math.abs(myRedraftDifferenceScore) === 0) {
          let value =
            fantasyCalcValue - (fantasyCalcValue * 0.03) / fcNonQBMaxValue;
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
          let tempValue = fantasyCalcValue * 0.15;
          let newValue = +fantasyCalcValue + +tempValue;

          let value = newValue / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 600) {
          let tempValue = fantasyCalcValue * 0.1;
          let newValue = +fantasyCalcValue + +tempValue;

          let value = newValue / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 500) {
          let tempValue = fantasyCalcValue * 0.08;
          let newValue = +fantasyCalcValue + +tempValue;

          let value = newValue / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 400) {
          let tempValue = fantasyCalcValue * 0.07;
          let newValue = +fantasyCalcValue + +tempValue;

          let value = newValue / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }

        if (myRedraftDifferenceScore === 300) {
          let tempValue = Math.abs(
            valueDiffBetweenMyValueAndMarketValue * 0.45
          );
          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 200) {
          let tempValue = Math.abs(
            valueDiffBetweenMyValueAndMarketValue * 0.75
          );
          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 100) {
          let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.8);
          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (myRedraftDifferenceScore === 0) {
          let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.9);
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
          let tempValue = Math.abs(
            valueDiffBetweenMyValueAndMarketValue * 1.95
          );
          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }

        if (Math.abs(myRedraftDifferenceScore) === 600) {
          let tempValue = Math.abs(
            valueDiffBetweenMyValueAndMarketValue * 1.75
          );

          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }

        if (Math.abs(myRedraftDifferenceScore) === 500) {
          let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.5);

          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }

        if (Math.abs(myRedraftDifferenceScore) === 400) {
          let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1.3);

          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (Math.abs(myRedraftDifferenceScore) === 300) {
          let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 1);

          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (Math.abs(myRedraftDifferenceScore) === 200) {
          let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.8);

          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
        if (Math.abs(myRedraftDifferenceScore) === 100) {
          let tempValue = Math.abs(valueDiffBetweenMyValueAndMarketValue * 0.5);

          let value = (fantasyCalcValue - tempValue) / fcNonQBMaxValue;
          if (value) {
            return value;
          }
        }
      }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
  };

module.exports =
  teWithinTwoYearsOfAgeApexButNotPastButWillBeInWorseBucketNextMarch;