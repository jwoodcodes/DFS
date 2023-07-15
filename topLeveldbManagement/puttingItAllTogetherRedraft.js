const puttingItAllTogetherRedraft = function (
  sanitizedFCPlayerName,
  sanitizedRVRedraftPlayerName,
  fcPosition,
  rvRedraftTier,
  myRedraftScoreFromPlayersRedraftTier,
  rvRedraftPositionRank,
  myRedraftDifferenceScore,
  fpRedraftPositionRank
) {
  if (fcPosition === 'QB') {
    // console.log(fcPosition);
    if (rvRedraftTier === 3) {
      myRedraftScoreFromPlayersRedraftTier = 600;
    }
    if (rvRedraftTier === 4) {
      myRedraftScoreFromPlayersRedraftTier = 400;
    }
    if (rvRedraftTier === 5) {
      myRedraftScoreFromPlayersRedraftTier = 300;
    }
    if (rvRedraftTier === 6) {
      myRedraftScoreFromPlayersRedraftTier = 200;
    }
    if (rvRedraftTier === 7) {
      myRedraftScoreFromPlayersRedraftTier = 100;
    }
    if (rvRedraftTier > 7) {
      myRedraftScoreFromPlayersRedraftTier = 0;
    }
  }

  if (fcPosition !== 'QB') {
    // console.log(fcPosition);
    if (rvRedraftTier === 1) {
      myRedraftScoreFromPlayersRedraftTier = 600;
    }
    if (rvRedraftTier === 2) {
      myRedraftScoreFromPlayersRedraftTier = 400;
    }
    if (rvRedraftTier === 3) {
      myRedraftScoreFromPlayersRedraftTier = 300;
    }
    if (rvRedraftTier === 4) {
      myRedraftScoreFromPlayersRedraftTier = 200;
    }
    if (rvRedraftTier === 5) {
      myRedraftScoreFromPlayersRedraftTier = 100;
    }
    if (rvRedraftTier > 5) {
      myRedraftScoreFromPlayersRedraftTier = 0;
    }
  }

  ///////////////
  ////////////////////////////
  // comparing my redraft rank to marker redraft rank
  //////////////////////////////

  // console.log(
  //   sanitizedFCPlayerName,
  //   fpRedraftPositionRank,
  //   rvRedraftPositionRank
  // );

  myRedraftDifferenceScore = 0;

  //1-10 average

  if ((rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 11) {
    // console.log(
    //   sanitizedFCPlayerName,
    //   this.fpRedraftPositionRank,
    //   this.rvRedraftPositionRank
    // );

    if (fpRedraftPositionRank - rvRedraftPositionRank === 3) {
      myRedraftDifferenceScore = 100;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -3) {
      myRedraftDifferenceScore = -100;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank === 4) {
      myRedraftDifferenceScore = 300;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -4) {
      myRedraftDifferenceScore = -300;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank === 5) {
      myRedraftDifferenceScore = 500;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -5) {
      myRedraftDifferenceScore = -500;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank > 5) {
      myRedraftDifferenceScore = 600;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank < -5) {
      myRedraftDifferenceScore = -600;
      if (fpRedraftPositionRank - rvRedraftPositionRank > 7) {
        myRedraftDifferenceScore = 700;
      }
      if (fpRedraftPositionRank - rvRedraftPositionRank < -7) {
        myRedraftDifferenceScore = -700;
      }
    }
  }

  //11-20 average

  if (
    (rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 10 &&
    (rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 21
  ) {
    if (fpRedraftPositionRank - rvRedraftPositionRank === 4) {
      myRedraftDifferenceScore = 100;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -4) {
      myRedraftDifferenceScore = -100;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank === 5) {
      myRedraftDifferenceScore = 300;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -5) {
      myRedraftDifferenceScore = -300;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank === 6 ||
      fpRedraftPositionRank - rvRedraftPositionRank === 7
    ) {
      myRedraftDifferenceScore = 500;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank === -6 ||
      fpRedraftPositionRank - rvRedraftPositionRank === -7
    ) {
      myRedraftDifferenceScore = -500;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank > 7) {
      myRedraftDifferenceScore = 600;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank < -7) {
      myRedraftDifferenceScore = -600;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank > 9) {
      myRedraftDifferenceScore = 700;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank < -9) {
      myRedraftDifferenceScore = -700;
    }
  }

  //21-30 average

  if (
    (rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 20 &&
    (rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 31
  ) {
    if (fpRedraftPositionRank - rvRedraftPositionRank === 4) {
      myRedraftDifferenceScore = 100;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -4) {
      myRedraftDifferenceScore = -100;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 5) {
      myRedraftDifferenceScore = 200;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -5) {
      myRedraftDifferenceScore = -200;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 6) {
      myRedraftDifferenceScore = 300;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -6) {
      myRedraftDifferenceScore = -300;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 7) {
      myRedraftDifferenceScore = 400;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -7) {
      myRedraftDifferenceScore = -400;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank === 8 ||
      fpRedraftPositionRank - rvRedraftPositionRank === 9
    ) {
      myRedraftDifferenceScore = 500;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank === -8 ||
      fpRedraftPositionRank - rvRedraftPositionRank === -9
    ) {
      myRedraftDifferenceScore = -500;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank > 9) {
      myRedraftDifferenceScore = 600;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank < -9) {
      myRedraftDifferenceScore = -600;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank > 13) {
      myRedraftDifferenceScore = 700;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank < -13) {
      myRedraftDifferenceScore = -700;
    }
  }

  //31-50 avarage

  if (
    (rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 30 &&
    (rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 51
  ) {
    if (fpRedraftPositionRank - rvRedraftPositionRank === 5) {
      myRedraftDifferenceScore = 100;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -5) {
      myRedraftDifferenceScore = -100;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 6) {
      myRedraftDifferenceScore = 200;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -6) {
      myRedraftDifferenceScore = -200;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 7) {
      myRedraftDifferenceScore = 300;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -7) {
      myRedraftDifferenceScore = -300;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 8) {
      myRedraftDifferenceScore = 400;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -8) {
      myRedraftDifferenceScore = -400;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank === 9 ||
      fpRedraftPositionRank - rvRedraftPositionRank === 10
    ) {
      myRedraftDifferenceScore = 500;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank === -9 ||
      fpRedraftPositionRank - rvRedraftPositionRank === -10
    ) {
      myRedraftDifferenceScore = -500;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank > 10 &&
      fpRedraftPositionRank - rvRedraftPositionRank < 14
    ) {
      myRedraftDifferenceScore = 600;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank < -10 &&
      fpRedraftPositionRank - rvRedraftPositionRank > -14
    ) {
      myRedraftDifferenceScore = -600;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank > 13) {
      myRedraftDifferenceScore = 700;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank < -13) {
      myRedraftDifferenceScore = -700;
    }
  }

  //average 51-90

  if (
    (rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 40 &&
    (rvRedraftPositionRank + fpRedraftPositionRank) / 2 < 91
  ) {
    if (fpRedraftPositionRank - rvRedraftPositionRank === 19) {
      myRedraftDifferenceScore = 100;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -19) {
      myRedraftDifferenceScore = -100;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 20) {
      myRedraftDifferenceScore = 200;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -20) {
      myRedraftDifferenceScore = -200;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 21) {
      myRedraftDifferenceScore = 300;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -21) {
      myRedraftDifferenceScore = -300;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === 22) {
      myRedraftDifferenceScore = 400;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank === -22) {
      myRedraftDifferenceScore = -400;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank === 23 ||
      fpRedraftPositionRank - rvRedraftPositionRank === 24
    ) {
      myRedraftDifferenceScore = 500;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank === -23 ||
      fpRedraftPositionRank - rvRedraftPositionRank === -24
    ) {
      myRedraftDifferenceScore = -500;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank > 24 &&
      fpRedraftPositionRank - rvRedraftPositionRank < 30
    ) {
      myRedraftDifferenceScore = 600;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank < -24 &&
      fpRedraftPositionRank - rvRedraftPositionRank > -30
    ) {
      myRedraftDifferenceScore = -600;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank > 30) {
      myRedraftDifferenceScore = 700;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank < -30) {
      myRedraftDifferenceScore = -700;
    }
  }

  //average greater than 90

  if ((rvRedraftPositionRank + fpRedraftPositionRank) / 2 > 90) {
    if (
      fpRedraftPositionRank - rvRedraftPositionRank > 40 &&
      fpRedraftPositionRank - rvRedraftPositionRank < 46
    ) {
      myRedraftDifferenceScore = 200;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank > -40 &&
      fpRedraftPositionRank - rvRedraftPositionRank < -46
    ) {
      myRedraftDifferenceScore = -200;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank > 45 &&
      fpRedraftPositionRank - rvRedraftPositionRank < 51
    ) {
      myRedraftDifferenceScore = 400;
    }
    if (
      fpRedraftPositionRank - rvRedraftPositionRank > -45 &&
      fpRedraftPositionRank - rvRedraftPositionRank < -51
    ) {
      myRedraftDifferenceScore = -400;
    }

    if (fpRedraftPositionRank - rvRedraftPositionRank > 50) {
      myRedraftDifferenceScore = 600;
    }
    if (fpRedraftPositionRank - rvRedraftPositionRank < -50) {
      myRedraftDifferenceScore = -600;
    }
  }
};
module.exports = puttingItAllTogetherRedraft;
