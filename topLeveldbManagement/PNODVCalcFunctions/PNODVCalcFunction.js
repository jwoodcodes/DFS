//
const twoOrMoreYearsPreAgeApexAndWillBeSameNextMarch = require('./twoOrMoreYearsPreAgeApexAndWillBeSameNextMarch');
const twoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch = require('./twoOrMoreYearsPreAgeApexButWillBeDifferentBucketNextMarch');
const withinTwoYearsOfAgeApexButNotPastAndWillBeSameNextMarch = require('./withinTwoYearsOfAgeApexButNotPastAndWillBeSameNextMarch');
const withinTwoYearsOfAgeApexButNotPastButWillBeInWorseBucketNextMarch = require('./withinTwoYearsOfAgeApexButNotPastButWillBeInDifferentBucketNextMarch');
const pastAgeApexByLessThanTwoYearsAndWillBeSameNextMarch = require('./pastAgeApexByLessThanTwoYearsAndWillBeSameNextMarch');
const pastAgeApexByLessThanTwoYearsButWillBeDifferentNextMarch = require('./pastAgeApexByLessThanTwoYearsButWillBeDifferentNextMarch');
const moreThanTwoYearsPostAgeApex = require('./moreThanTwoYearsPastAgeApex');

const PNODVCalcFunction = function (
  sanitizedFCPlayerName,
  sanitizedRVPlayerName,
  position,
  age,
  amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch,
  curMonth,
  name,
  fantasyCalcValue,
  valueDiffBetweenMyValueAndMarketValue,

  myRedraftScoreFromPlayersRedraftTier,
  myRedraftDifferenceScore,
  fcQBPercentOfMax,
  fcNonQBPercentOfMax,
  rvTier,
  percentValueDiffBetweenMyValueAndMarket,
  fcQBMaxValue,
  fcNonQBMaxValue
) {
  ageNextMarch =
    age + amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch;

  if (
    sanitizedFCPlayerName &&
    sanitizedFCPlayerName === sanitizedRVPlayerName
  ) {
    // console.log(age);
    // console.log(position);
    // console.log(fantasyCalcValue);
    // console.log(valueDiffBetweenMyValueAndMarketValue);
    // console.log(myRedraftScoreFromPlayersRedraftTier);
    // console.log(myRedraftDifferenceScore);
    // console.log(fcQBPercentOfMax);
    // console.log(rvTier);
    // console.log(percentValueDiffBetweenMyValueAndMarket);

    //
    //
    let ageApex = 0;
    if (position === 'QB') {
      ageApex = 28;
    }
    if (position === 'RB') {
      ageApex = 25;
    }
    if (position === 'WR') {
      ageApex = 27;
    }
    if (position === 'TE') {
      ageApex = 28;
    }

    // //
    // // 2 or more years pre age apex
    // //

    if (ageApex - age >= 2) {
      // console.log(name, age, ageNextMarch);
      //won't age into next age bucket by next March
      if (ageApex - ageNextMarch >= 2) {
        let value = twoOrMoreYearsPreAgeApexAndWillBeSameNextMarch(
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
        );
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      //
      //will age into next age bucket by next march
      else {
        // console.log(name, age, ageNextMarch);
        let value = twoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch(
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
        );
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
    }

    //less than two years pre age apex but not to age apex

    if (ageApex - age >= 0 && ageApex - age < 2) {
      // console.log(name);
      //
      //wont age into the next age bucket by next march
      if (ageApex - ageNextMarch >= 0 && ageApex - ageNextMarch < 2) {
        // console.log(name, age, ageNextMarch);
        let value = withinTwoYearsOfAgeApexButNotPastAndWillBeSameNextMarch(
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
        );
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      //
      //will age into next age bucket by next march
      else {
        // console.log(name, age, ageApex);
        let value =
          withinTwoYearsOfAgeApexButNotPastButWillBeInWorseBucketNextMarch(
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
          );
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
    }

    //past age apex but 2 years or less past it

    if (ageApex - age <= 0 && ageApex - age > -2) {
      // console.log(name);
      //
      //wont age into the next age bucket by next march
      if (ageApex - ageNextMarch <= 0 && ageApex - ageNextMarch > -2) {
        // console.log(name, age, ageNextMarch);
        let value = pastAgeApexByLessThanTwoYearsAndWillBeSameNextMarch(
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
        );
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
      //
      //will age into next age bucket by next march
      else {
        // console.log(name, age, ageNextMarch);
        let value = pastAgeApexByLessThanTwoYearsButWillBeDifferentNextMarch(
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
        );
        if (value) {
          // console.log(name, value);
          return value;
        }
      }
    }

    if (ageApex - age <= -2) {
      // console.log(name);
      let value = moreThanTwoYearsPostAgeApex(
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
      );
      if (value) {
        // console.log(name, value);

        return value;
      }
    }
  }
};

module.exports = PNODVCalcFunction;
