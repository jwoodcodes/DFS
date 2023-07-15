const greaterThanPointEightNine = require('./allFcPercentOfMaxFunctions/grThanEightNine');
const greaterThanSevenNineLessThanNine = require('./allFcPercentOfMaxFunctions/grThanSevenNineLessThanNine');
const greaterThanFiveNineLessThanEight = require('./allFcPercentOfMaxFunctions/grThanFiveNineLessThanEight');
const greaterThanThreeNineLessThanSix = require('./allFcPercentOfMaxFunctions/grThanThreeNineLessThanSix');
const greaterThanTwoNineLessThanFour = require('./allFcPercentOfMaxFunctions/grThanTwoNineLessThanFour');
const greaterThanOneNineLessThanThree = require('./allFcPercentOfMaxFunctions/grThanOneNineLessThanThree');
const greaterThanZeroNineLessThanTwo = require('./allFcPercentOfMaxFunctions/grThanZeroNineLessThanTwo');
const greaterThanPointZeroThreeLessThanOne = require('./allFcPercentOfMaxFunctions/grThanZeroThreeLessThanOne');
const greaterThanZeroThree = require('./allFcPercentOfMaxFunctions/lessThanZeroThree');

const qbMoreThanTwoYearsPostAgeApex = function (
  curMonth,
  name,
  fantasyCalcValue,
  valueDiffBetweenMyValueAndMarketValue,
  myRedraftScoreFromPlayersRedraftTier,
  myRedraftDifferenceScore,
  fcQBPercentOfMax,
  rvTier,
  percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
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
      percentValueDiffBetweenMyValueAndMarket
    );
  }
};

module.exports = qbMoreThanTwoYearsPostAgeApex;
