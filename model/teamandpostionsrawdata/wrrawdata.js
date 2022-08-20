//WR target share the last x number of games can be found on the rotoviz monday review and the last 6 weeks should be used for a WR's target share number
//WR projected targets should be QB prjpassattempts * target share(in decimal form!)

const wrrawdata = {
  SF49ers: {
    teamName: 'SF49ers',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  bears: {
    teamName: 'bears',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  bengals: {
    teamName: 'bengals',
    teamVTT: 25.25,
    QBProjectedPoints: 23,
    QBGLSPProjectedPassAttempts: 29.8,
    WROne: {
      name: 'Tee Higgins',
      halfTwentyFifthPercentProjectedPoints: 12.5,
      halfFiftyithPercentProjectedPoints: 14.88,
      halfSeventyFifthPercentProjectedPoints: 17,
      PPRTwentyFifthPercentProjectedPoints: 15.2,
      PPRFiftyithPercentProjectedPoints: 17.28,
      PPRSeventyFifthPercentProjectedPoints: 20,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 25.8,
      projectedTargets4For4: 8,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 16,
      fourForFourFullPPRProjectedPoints: 19,

      yahooSalary: 22,
      fanduelSalary: 6500,
      draftkingsSalary: 7000,
    },

    WRTwo: {
      name: 'Jamaar Chase',
      halfTwentyFifthPercentProjectedPoints: 9.5,
      halfFiftyithPercentProjectedPoints: 11.64,
      halfSeventyFifthPercentProjectedPoints: 13.5,
      PPRTwentyFifthPercentProjectedPoints: 11,
      PPRFiftyithPercentProjectedPoints: 13.34,
      PPRSeventyFifthPercentProjectedPoints: 15.5,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 21.5,
      projectedTargets4For4: 6.67,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 12,
      fourForFourFullPPRProjectedPoints: 14,

      yahooSalary: 28,
      fanduelSalary: 7000,
      draftkingsSalary: 7500,
    },
    WRThree: {
      name: 'Tyler Boyd',
      halfTwentyFifthPercentProjectedPoints: 5,
      halfFiftyithPercentProjectedPoints: 7,
      halfSeventyFifthPercentProjectedPoints: 9,
      PPRTwentyFifthPercentProjectedPoints: 8,
      PPRFiftyithPercentProjectedPoints: 10,
      PPRSeventyFifthPercentProjectedPoints: 12,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 15,
      projectedTargets4For4: 4.5,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 8,
      fourForFourFullPPRProjectedPoints: 10,

      yahooSalary: 15,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  bills: {
    teamName: 'bills',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  broncos: {
    teamName: 'broncos',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  browns: {
    teamName: 'browns',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },

  buccaneers: {
    teamName: 'buccaneers',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  cardinals: {
    teamName: 'cardinals',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  chargers: {
    teamName: 'chargers',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  chiefs: {
    teamName: 'chiefs',
    teamVTT: 27.5,
    QBProjectedPoints: 24,
    QBGLSPProjectedPassAttempts: 37.4,
    WROne: {
      name: 'Tyreek Hill',
      halfTwentyFifthPercentProjectedPoints: 13.8,
      halfFiftyithPercentProjectedPoints: 15.8,
      halfSeventyFifthPercentProjectedPoints: 17.8,
      PPRTwentyFifthPercentProjectedPoints: 17.2,
      PPRFiftyithPercentProjectedPoints: 19.2,
      PPRSeventyFifthPercentProjectedPoints: 21.2,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 23.4,
      projectedTargets4For4: 7.3,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'Byron Pringle',
      halfTwentyFifthPercentProjectedPoints: 3,
      halfFiftyithPercentProjectedPoints: 5.1,
      halfSeventyFifthPercentProjectedPoints: 7,
      PPRTwentyFifthPercentProjectedPoints: 4,
      PPRFiftyithPercentProjectedPoints: 6.1,
      PPRSeventyFifthPercentProjectedPoints: 8,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 9.6,
      projectedTargets4For4: 3,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 3,
      halfFiftyithPercentProjectedPoints: 4,
      halfSeventyFifthPercentProjectedPoints: 6,
      PPRTwentyFifthPercentProjectedPoints: 4,
      PPRFiftyithPercentProjectedPoints: 6,
      PPRSeventyFifthPercentProjectedPoints: 7,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 12,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  colts: {
    teamName: 'colts',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  comanders: {
    teamName: 'commanders',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  cowboys: {
    teamName: 'cowboys',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  dolphins: {
    teamName: 'dolphins',
    teamVTT: 20.25,
    QBProjectedPoints: 15,
    QBGLSPProjectedPassAttempts: 33,
    WROne: {
      name: 'Jaylen Waddle',
      halfTwentyFifthPercentProjectedPoints: 13.6,
      halfFiftyithPercentProjectedPoints: 15.6,
      halfSeventyFifthPercentProjectedPoints: 17.6,
      PPRTwentyFifthPercentProjectedPoints: 17.35,
      PPRFiftyithPercentProjectedPoints: 19.35,
      PPRSeventyFifthPercentProjectedPoints: 21.35,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 22.75,
      projectedTargets4For4: 10,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'Devante Parker',
      halfTwentyFifthPercentProjectedPoints: 9.75,
      halfFiftyithPercentProjectedPoints: 11.75,
      halfSeventyFifthPercentProjectedPoints: 13.75,
      PPRTwentyFifthPercentProjectedPoints: 12,
      PPRFiftyithPercentProjectedPoints: 14,
      PPRSeventyFifthPercentProjectedPoints: 16,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 9.8,
      projectedTargets4For4: 6.5,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  eagles: {
    teamName: 'eagles',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  falcons: {
    teamName: 'falcons',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  giants: {
    teamName: 'giants',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  jaguars: {
    teamName: 'jaguars',
    teamVTT: 20.25,
    QBProjectedPoints: 10,
    QBGLSPProjectedPassAttempts: 34.6,
    WROne: {
      name: 'Laquan Treadwell',
      halfTwentyFifthPercentProjectedPoints: 4.9,
      halfFiftyithPercentProjectedPoints: 6.9,
      halfSeventyFifthPercentProjectedPoints: 8.9,
      PPRTwentyFifthPercentProjectedPoints: 6.8,
      PPRFiftyithPercentProjectedPoints: 8.8,
      PPRSeventyFifthPercentProjectedPoints: 10.8,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 19.8,
      projectedTargets4For4: 6.67,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'Lavishka Shenault',
      halfTwentyFifthPercentProjectedPoints: 4,
      halfFiftyithPercentProjectedPoints: 6,
      halfSeventyFifthPercentProjectedPoints: 8,
      PPRTwentyFifthPercentProjectedPoints: 6.1,
      PPRFiftyithPercentProjectedPoints: 8.1,
      PPRSeventyFifthPercentProjectedPoints: 10.1,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 18.8,
      projectedTargets4For4: 6.34,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  jets: {
    teamName: 'jets',
    teamVTT: 15,
    QBProjectedPoints: 9,
    QBGLSPProjectedPassAttempts: 27.4,
    WROne: {
      name: 'Elijah Moore',
      halfTwentyFifthPercentProjectedPoints: 14.8,
      halfFiftyithPercentProjectedPoints: 16.83,
      halfSeventyFifthPercentProjectedPoints: 18.8,
      PPRTwentyFifthPercentProjectedPoints: 17.8,
      PPRFiftyithPercentProjectedPoints: 19.8,
      PPRSeventyFifthPercentProjectedPoints: 21.8,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 19.9,
      projectedTargets4For4: 10.3,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'Jamison Crowder',
      halfTwentyFifthPercentProjectedPoints: 5,
      halfFiftyithPercentProjectedPoints: 7,
      halfSeventyFifthPercentProjectedPoints: 9,
      PPRTwentyFifthPercentProjectedPoints: 6.8,
      PPRFiftyithPercentProjectedPoints: 8.8,
      PPRSeventyFifthPercentProjectedPoints: 10.8,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 17.9,
      projectedTargets4For4: 5.6,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  lions: {
    teamName: 'lions',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  packers: {
    teamName: 'packers',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  panthers: {
    teamName: 'panthers',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  patriots: {
    teamName: 'patriots',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },

  raiders: {
    teamName: 'raiders',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  rams: {
    teamName: 'rams',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  ravens: {
    teamName: 'ravens',
    teamVTT: 18.25,
    QBProjectedPoints: 13,
    QBGLSPProjectedPassAttempts: 38,
    WROne: {
      name: 'Marquise Brown',
      halfTwentyFifthPercentProjectedPoints: 6.25,
      halfFiftyithPercentProjectedPoints: 8.25,
      halfSeventyFifthPercentProjectedPoints: 10.25,
      PPRTwentyFifthPercentProjectedPoints: 9.75,
      PPRFiftyithPercentProjectedPoints: 11.75,
      PPRSeventyFifthPercentProjectedPoints: 13.75,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 25,
      projectedTargets4For4: 9.66,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'Rashod Bateman',
      halfTwentyFifthPercentProjectedPoints: 2.86,
      halfFiftyithPercentProjectedPoints: 4.86,
      halfSeventyFifthPercentProjectedPoints: 6.86,
      PPRTwentyFifthPercentProjectedPoints: 4.3,
      PPRFiftyithPercentProjectedPoints: 6.3,
      PPRSeventyFifthPercentProjectedPoints: 8.3,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 9.5,
      projectedTargets4For4: 3.66,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  saints: {
    teamName: 'saints',
    teamVTT: 17.25,
    QBProjectedPoints: 10,
    QBGLSPProjectedPassAttempts: 22.75,
    WROne: {
      name: 'Marquez Colston',
      halfTwentyFifthPercentProjectedPoints: 4.5,
      halfFiftyithPercentProjectedPoints: 6.5,
      halfSeventyFifthPercentProjectedPoints: 8.5,
      PPRTwentyFifthPercentProjectedPoints: 5.7,
      PPRFiftyithPercentProjectedPoints: 7.7,
      PPRSeventyFifthPercentProjectedPoints: 9.7,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 16.6,
      projectedTargets4For4: 5,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'liljordan Humphrey',
      halfTwentyFifthPercentProjectedPoints: 4.2,
      halfFiftyithPercentProjectedPoints: 6.2,
      halfSeventyFifthPercentProjectedPoints: 8.2,
      PPRTwentyFifthPercentProjectedPoints: 5,
      PPRFiftyithPercentProjectedPoints: 7,
      PPRSeventyFifthPercentProjectedPoints: 9,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 5.3,
      projectedTargets4For4: 2.67,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  seahawks: {
    teamName: 'seahawks',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  steelers: {
    teamName: 'steelers',
    teamVTT: 17,
    QBProjectedPoints: 12,
    QBGLSPProjectedPassAttempts: 36.2,
    WROne: {
      name: 'Dionte Johnson',
      halfTwentyFifthPercentProjectedPoints: 14,
      halfFiftyithPercentProjectedPoints: 16,
      halfSeventyFifthPercentProjectedPoints: 18,
      PPRTwentyFifthPercentProjectedPoints: 17.4,
      PPRFiftyithPercentProjectedPoints: 19.4,
      PPRSeventyFifthPercentProjectedPoints: 21.4,

      top12NFLTargetShareLastThreeWeeks: 1,

      targetShareLastThreeGamesPlayed: 27.7,
      projectedTargets4For4: 8.67,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'Chase Claypool',
      halfTwentyFifthPercentProjectedPoints: 6.4,
      halfFiftyithPercentProjectedPoints: 8.4,
      halfSeventyFifthPercentProjectedPoints: 10.4,
      PPRTwentyFifthPercentProjectedPoints: 8.2,
      PPRFiftyithPercentProjectedPoints: 10.2,
      PPRSeventyFifthPercentProjectedPoints: 12.2,

      top12NFLTargetShareLastThreeWeeks: 0,

      targetShareLastThreeGamesPlayed: 14.9,
      projectedTargets4For4: 4.67,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  texans: {
    teamName: 'texans',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  titans: {
    teamName: 'titans',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
  vikings: {
    teamName: 'vikings',
    teamVTT: 0,
    QBProjectedPoints: 0,
    QBGLSPProjectedPassAttempts: 0,
    WROne: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 1,
      roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },

    WRTwo: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 2,
      roleLastXNumOfWeeksUpToFive: [2, 2, 2, 2, 2],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
    WRThree: {
      name: 'placeholder',
      halfTwentyFifthPercentProjectedPoints: 0,
      halfFiftyithPercentProjectedPoints: 0,
      halfSeventyFifthPercentProjectedPoints: 0,
      PPRTwentyFifthPercentProjectedPoints: 0,
      PPRFiftyithPercentProjectedPoints: 0,
      PPRSeventyFifthPercentProjectedPoints: 0,

      top12NFLTargetShareLastThreeWeeks: 'put 1 for yes and 0 for no here',

      targetShareLastThreeGamesPlayed: 0,
      projectedTargets4For4: 0,

      roleThisWeek: 3,
      roleLastXNumOfWeeksUpToFive: [3, 3, 3, 3, 3],

      fourForFourHalfPPRProjectedPoints: 0,
      fourForFourFullPPRProjectedPoints: 0,

      yahooSalary: 0,
      fanduelSalary: 0,
      draftkingsSalary: 0,
    },
  },
};

module.exports = wrrawdata;
