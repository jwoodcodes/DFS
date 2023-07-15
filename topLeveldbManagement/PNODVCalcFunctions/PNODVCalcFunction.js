const qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch = require('./QB/qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch/qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch');

const qbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch = require('./QB/qbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch/qbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch');
const qbWithinTwoYearsOfAgeApexButNotPastAndWillBeSameNextMarch = require('./QB/withinTwoYearsOfAgeApexButNotPast/qbWithinTwoYearsOfAgeApexButNotPastAndWillBeSameNextMarch');
const qbWithinTwoYearsOfAgeApexButNotPastButWillBeInWorseBucketNextMarch = require('./QB/withinTwoYearsOfAgeApexButNotPastAndWillBeInWorseBucketNextMarch/qbWithinTwoYearsOfAgeApexButNotPastButWillBeInWorseBucketNextMarch');
const qbPastAgeApexButWithinTwoYearsAndWillBeSameNextMarch = require('./QB/PastAgeApexButStillWithinTwoYearsAndWillBeInSameNextMarch/qbPastAgeApexButStillWithinTwoYearsAndWillBeSameNextMarch');
const qbPastAgeApexButWithinTwoYearsButWillBeInWorseBucketNextMarch = require('./QB/pastAgeApexButStillWithinTwoYearsButWillBeInWorseBucketNextMarch/qbPastAgeApexButStillWithinTwoYearsButWillBeInWorseBucketNextMarch');
const qbMoreThanTwoYearsPostAgeApex = require('./QB/moreThanTwoYearsPostAgeApex/qbMoreThanTwoYearsPostAgeApex');

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
  percentValueDiffBetweenMyValueAndMarket
) {
  ageNextMarch =
    age + amountToBeAddedToPlayersAgeToKnowWhatAgeTheyWillBeNextMarch;

  const qbAgeApex = 28;
  const rbAgeApex = 25;
  const wrAgeApex = 27;
  const teAgeApex = 28;

  if (sanitizedFCPlayerName === sanitizedRVPlayerName) {
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

    ///////////////////////////////
    //QB
    ///////////////////////////////
    ///////////////////////////////

    if (position === 'QB') {
      // console.log(position);
      // console.log(name);
      // console.log(name, age, ageNextMarch);
      // console.log(name, myRedraftDifferenceScore);

      //
      // 2 or more years pre age apex
      //
      if (qbAgeApex - age >= 2) {
        // console.log(name);
        // console.log(name, age, ageNextMarch);

        //
        //
        //wont age into the next age bucket by next march
        //
        if (qbAgeApex - ageNextMarch >= 2) {
          //   console.log(name, age, ageNextMarch);
          qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch(
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
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
          qbTwoOrMoreYearsPreAgeApexButWillBeWorseAgeBucketNextMarch(
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
      }

      //within 2 years of age apex but not past age apex

      if (qbAgeApex - age >= 0 && qbAgeApex - age < 2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (qbAgeApex - ageNextMarch >= 0 && qbAgeApex - ageNextMarch < 2) {
          // console.log(name, age, ageNextMarch);
          qbWithinTwoYearsOfAgeApexButNotPastAndWillBeSameNextMarch(
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
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
          qbWithinTwoYearsOfAgeApexButNotPastButWillBeInWorseBucketNextMarch(
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
      }

      //past age apex but 2 years or less past it

      if (qbAgeApex - age <= 0 && qbAgeApex - age > -2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (qbAgeApex - ageNextMarch <= 0 && qbAgeApex - ageNextMarch > -2) {
          // console.log(name, age, ageNextMarch);
          qbPastAgeApexButWithinTwoYearsAndWillBeSameNextMarch(
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
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
          qbPastAgeApexButWithinTwoYearsButWillBeInWorseBucketNextMarch(
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
      }

      //more than 2 years post age apex

      if (qbAgeApex - age <= -2) {
        // console.log(name);
        qbMoreThanTwoYearsPostAgeApex(
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
    }

    ///////////////////////////////
    //RB
    ///////////////////////////////
    ///////////////////////////////

    if (position === 'RB') {
      // console.log(position);

      // 2 or more years pre age apex
      if (rbAgeApex - age >= 2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (rbAgeApex - ageNextMarch >= 2) {
          // console.log(name, age, ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //within 2 years of age apex but not past age apex

      if (rbAgeApex - age >= 0 && rbAgeApex - age < 2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (rbAgeApex - ageNextMarch >= 0 && rbAgeApex - ageNextMarch < 2) {
          // console.log(name, age, ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //past age apex but 2 years or less past it

      if (rbAgeApex - age <= 0 && rbAgeApex - age > -2) {
        // console.log(this.name);
        //
        //wont age into the next age bucket by next march
        if (rbAgeApex - ageNextMarch <= 0 && rbAgeApex - ageNextMarch > -2) {
          // console.log(this.name, age, this.ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //more than 2 years post age apex

      if (rbAgeApex - age <= -2) {
        // console.log(this.name);
      }
    }

    ///////////////////////////////
    //WR
    ///////////////////////////////
    ///////////////////////////////

    if (position === 'WR') {
      // console.log(this.position);

      // 2 or more years pre age apex
      if (wrAgeApex - age >= 2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (wrAgeApex - ageNextMarch >= 2) {
          // console.log(name, age, ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //within 2 years of age apex but not past age apex

      if (wrAgeApex - age >= 0 && wrAgeApex - age < 2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (
          wrAgeApex - this.ageNextMarch >= 0 &&
          wrAgeApex - this.ageNextMarch < 2
        ) {
          // console.log(name, age, ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //past age apex but 2 years or less past it

      if (wrAgeApex - age <= 0 && wrAgeApex - age > -2) {
        // console.log(this.name);
        //
        //wont age into the next age bucket by next march
        if (wrAgeApex - ageNextMarch <= 0 && wrAgeApex - ageNextMarch > -2) {
          // console.log(name, age, ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //more than 2 years post age apex

      if (wrAgeApex - age <= -2) {
        // console.log(name);
      }
    }

    ///////////////////////////////
    //TE
    ///////////////////////////////
    ///////////////////////////////

    if (position === 'TE') {
      // console.log(this.position);

      // 2 or more years pre age apex
      if (teAgeApex - age >= 2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (teAgeApex - ageNextMarch >= 2) {
          // console.log(name, age, ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //within 2 years of age apex but not past age apex

      if (teAgeApex - age >= 0 && teAgeApex - age < 2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (teAgeApex - ageNextMarch >= 0 && teAgeApex - ageNextMarch < 2) {
          // console.log(name, age, ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //past age apex but 2 years or less past it

      if (teAgeApex - age <= 0 && teAgeApex - age > -2) {
        // console.log(name);
        //
        //wont age into the next age bucket by next march
        if (teAgeApex - ageNextMarch <= 0 && teAgeApex - ageNextMarch > -2) {
          // console.log(name, age, ageNextMarch);
        }
        //
        //will age into next age bucket by next march
        else {
          // console.log(name, age, ageNextMarch);
        }
      }

      //more than 2 years post age apex

      if (teAgeApex - age <= -2) {
        // console.log(name);
      }
    }
  }
};

module.exports = PNODVCalcFunction;
