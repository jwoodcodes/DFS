//QB TDrate is TD's/pass attempts
//QB YPA for a given stretch can be found on the rotoviz monday review tab
//QB prjpassattempts is from rotoviz GLSP projections average stat line for that QB for that week

const qbrawdata = {
  SF49ers: {
    teamVTT: 0,
    name: 'Jimmy Garoppolo',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 24,
    fanduelSalary: 7100,
    draftkingsSalary: 5700,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  bears: {
    teamVTT: 17,
    name: 'Justin Fields',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 23,
    fanduelSalary: 6300,
    draftkingsSalary: 4800,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  bengals: {
    teamVTT: 25,
    name: 'Joe Burrow',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 12,
    fiftyithPercentProjectedPoints: 16,
    seventyFifthPercentProjectedPoints: 23,
    prjpassattempts: 29.8,
    ypaLastFiveGames: 7.7,
    TDrateLastFiveGames: 4.0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 15,

    fourForFourHalfPPRProjectedPoints: 16,
    fourForFourFullPPRProjectedPoints: 16,

    yahooSalary: 30,
    fanduelSalary: 7700,
    draftkingsSalary: 6900,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  bills: {
    teamVTT: 0,
    name: 'Josh Allen',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 37,
    fanduelSalary: 8800,
    draftkingsSalary: 8000,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  broncos: {
    teamVTT: 0,
    name: 'Teddy Bridgewater',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 23,
    fanduelSalary: 6500,
    draftkingsSalary: 5100,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  browns: {
    teamVTT: 0,
    name: 'Baker Mayfield',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 20,
    fanduelSalary: 6700,
    draftkingsSalary: 5300,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  buccaneers: {
    teamVTT: 27.25,
    name: 'Tom Brady',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 34,
    fanduelSalary: 8300,
    draftkingsSalary: 7600,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  cardinals: {
    teamVTT: 25.5,
    name: 'Kyler Murray',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 35,
    fanduelSalary: 8200,
    draftkingsSalary: 7300,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  chargers: {
    teamVTT: 29,
    name: 'Justin Herbert',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  chiefs: {
    teamVTT: 27.5,
    name: 'Mahomes',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 13,
    fiftyithPercentProjectedPoints: 17,
    seventyFifthPercentProjectedPoints: 24,
    prjpassattempts: 37.4,
    ypaLastFiveGames: 8.1,
    TDrateLastFiveGames: 5.3,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 13,

    fourForFourHalfPPRProjectedPoints: 18,
    fourForFourFullPPRProjectedPoints: 18,

    yahooSalary: 37,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  colts: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  comanders: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  cowboys: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  dolphins: {
    teamVTT: 20.25,
    name: 'Tagovailoa',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 11,
    fiftyithPercentProjectedPoints: 15,
    seventyFifthPercentProjectedPoints: 17.5,
    prjpassattempts: 33,
    ypaLastFiveGames: 7.1,
    TDrateLastFiveGames: 5.3,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 8,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 28,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  eagles: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  falcons: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  giants: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  jaguars: {
    teamVTT: 20.25,
    name: 'Lawrence',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 10,
    fiftyithPercentProjectedPoints: 14,
    seventyFifthPercentProjectedPoints: 18,
    prjpassattempts: 34.6,
    ypaLastFiveGames: 5.6,
    TDrateLastFiveGames: 1,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 7,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 23,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  jets: {
    teamVTT: 15,
    name: 'Wilson',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 9,
    fiftyithPercentProjectedPoints: 14,
    seventyFifthPercentProjectedPoints: 19,
    prjpassattempts: 27.4,
    ypaLastFiveGames: 5.8,
    TDrateLastFiveGames: 1.5,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 9,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 20,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  lions: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  packers: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  panthers: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  patriots: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  raiders: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  rams: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  ravens: {
    teamVTT: 18.25,
    name: 'Huntley',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 10,
    fiftyithPercentProjectedPoints: 13,
    seventyFifthPercentProjectedPoints: 16,
    prjpassattempts: 38,
    ypaLastFiveGames: 6.2,
    TDrateLastFiveGames: 2.6,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 7,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 20,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  saints: {
    teamVTT: 17.25,
    name: 'Hill',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 10,
    fiftyithPercentProjectedPoints: 14,
    seventyFifthPercentProjectedPoints: 18,
    prjpassattempts: 22.75,
    ypaLastFiveGames: 6.6,
    TDrateLastFiveGames: 2.2,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 7,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 25,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  seahawks: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  steelers: {
    teamVTT: 17,
    name: 'Roethlisberger',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 9,
    fiftyithPercentProjectedPoints: 12,
    seventyFifthPercentProjectedPoints: 15,
    prjpassattempts: 36.2,
    ypaLastFiveGames: 6.8,
    TDrateLastFiveGames: 5,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 9,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 26,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  texans: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  titans: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
  vikings: {
    teamVTT: 0,
    name: 'Placeholder',
    roleThisWeek: 1,
    ///roleLastXNumOfWeeksUpToFive below DOES NOT CONTAIN THIS COMING WEEK!!!!!!!!!!!!!!
    roleLastXNumOfWeeksUpToFive: [1, 1, 1, 1, 1],

    twentyFifthPercentProjectedPoints: 0,
    fiftyithPercentProjectedPoints: 0,
    seventyFifthPercentProjectedPoints: 0,
    prjpassattempts: 0,
    ypaLastFiveGames: 0,
    TDrateLastFiveGames: 0,
    secondHighestProjectedPassCatcherFiftyithPercentProjectedPoints: 0,

    fourForFourHalfPPRProjectedPoints: 0,
    fourForFourFullPPRProjectedPoints: 0,

    yahooSalary: 0,
    fanduelSalary: 0,
    draftkingsSalary: 0,

    draftkingsProjectedOwnership: 0,
    fanduelProjectedOwnership: 0,
    yahooProjectedOwnership: 0,
  },
};

module.exports = qbrawdata;
