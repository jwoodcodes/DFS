const qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch = function (
  curMonth,
  name,
  fantasyCalcValue,
  valueDiffBetweenMyValueAndMarketValue,
  myRedraftScoreFromPlayersRedraftTier,
  myRedraftDifferenceScore,
  fcQBPercentOfMax
) {
  //   console.log(
  //     curMonth,
  //     name,
  //     fantasyCalcValue,
  //     valueDiffBetweenMyValueAndMarketValue,
  //     myRedraftScoreFromPlayersRedraftTier,
  //     myRedraftDifferenceScore,
  //     fcQBPercentOfMax
  //   );
  if (myRedraftScoreFromPlayersRedraftTier === undefined) {
    myRedraftScoreFromPlayersRedraftTier = 0;
  }
  if (myRedraftDifferenceScore === undefined) {
    myRedraftDifferenceScore = 0;
  }
};

module.exports = qbTwoOrMoreYearsPreAgeApexAndWillBeSameNextMarch;
