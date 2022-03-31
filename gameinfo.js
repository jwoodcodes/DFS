const gameInfo = {
  //QB TDrate is TD's/pass attempts
  //QB YPA for a given stretch can be found on the rotoviz monday review tab
  //QB prjpassattempts is from rotoviz GLSP projections average stat line for that QB for that week
  //WR target share and catch percentage the last x number of games can be found on the rotoviz monday review and the last 6 weeks should be used for a WR's target share number and catch rate
  //WR projected targets should be QB prjpassattempts * target share(in decimal form!) and WR projecteed receptions should be WR projected targets * WR catch rate(in decimal form!)

  SF49ers: {
    teamName: '49ers',
    projectedPoints: 24.5,
    homeOrRoad: 'road',
  },

  bears: {
    teamName: 'Bears',
    projectedPoints: 17,
    homeOrRoad: 'road',
  },

  bengals: {
    teamName: 'Bengals',
    projectedPoints: 25.25,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Burrow',
      matchup: 0,
      prjpoints: 17.5,
      prjpassattempts: 38,
      vtt: 23,
      ypa: [7.2, 7.3, 7.2, 6.5, 7.3],
      TDrate: [7.8, 6.8, 5.4, 7.0, 6.2],
    },
    RB: {
      rbName: 'Mixon',
      matchup: -5,
      prjpoints: 15.7,
      prjCarries: 22.2,
      prjTargets: 3.7,
    },
    WROne: {
      wrName: 'Chase',
      matchup: 0,
      prjpoints: 13.6,
      prjReceptions: 7.3,
      targetShare: 20,
      catchRate: 58.6,
    },

    WRTwo: {
      Name: 'Higgins',
      matchup: 0,
      prjpoints: 13.5,
      prjReceptions: 7.2,
      targetShare: 24.1,
      catchRate: 68.6,
    },

    TE: {
      teName: 'Uzomah',
      matchup: 2.5,
      prjpoints: 6,
      prjReceptions: 4.7,
    },
  },

  bills: {
    teamName: 'Bills',
    projectedPoints: 21.25,
    homeOrRoad: 'road',
  },

  broncos: {
    teamName: 'Broncos',
    projectedPoints: 21.25,
    homeOrRoad: 'road',
  },

  browns: {
    teamName: 'Browns',
    projectedPoints: 19.5,
    homeOrRoad: 'road',
  },

  buccaneers: {
    teamName: 'Buccaneers',
    projectedPoints: 31,
    homeOrRoad: 'road',
  },

  cardinals: {
    teamName: 'Cardinals',
    projectedPoints: 23.25,
    homeOrRoad: 'road',
  },

  chargers: {
    teamName: 'Chargers',
    projectedPoints: 29.25,
    homeOrRoad: 'road',
  },

  chiefs: {
    teamName: 'Chiefs',
    projectedPoints: 27.25,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Mahomes',
      matchup: 5,
      prjpoints: 21.0,
      prjpassattempts: 36,
      vtt: 31,
      ypa: [7.2, 8.2, 7.9, 7.5, 9.3],
      TDrate: [8.3, 7.0, 5.9, 8.0, 6.5],
    },
    RB: {
      rbName: 'Williams',
      matchup: 0,
      prjpoints: 13.1,
      prjCarries: 18.3,
      prjTargets: 4.2,
    },
    WROne: {
      wrName: 'Hill',
      matchup: 2.5,
      prjpoints: 17.8,
      prjReceptions: 8.5,
      targetShare: 24.6,
      catchRate: 79.1,
    },

    WRTwo: {
      Name: 'Pringle',
      matchup: 2.5,
      prjpoints: 6.7,
      prjReceptions: 5,
      targetShare: 9.1,
      catchRate: 62.5,
    },

    TE: {
      teName: 'Kelce',
      matchup: 2.5,
      prjpoints: 13.6,
      prjReceptions: 5.7,
    },
  },

  colts: {
    teamName: 'Colts',
    projectedPoints: 22.5,
    homeOrRoad: 'road',
  },

  comanders: {
    teamName: 'Commanders',
    projectedPoints: 18,
    homeOrRoad: 'road',
  },

  cowboys: {
    teamName: 'Cowboys',
    projectedPoints: 28,
    homeOrRoad: 'home',
  },

  dolphins: {
    teamName: 'Dolphins',
    projectedPoints: 20.25,
    homeOrRoad: 'road',
  },

  eagles: {
    teamName: 'Eagles',
    projectedPoints: 29,
    homeOrRoad: 'home',
  },

  falcons: {
    teamName: 'Falcons',
    projectedPoints: 25.25,
    homeOrRoad: 'home',
  },

  giants: {
    teamName: 'Giants',
    projectedPoints: 15,
    homeOrRoad: 'road',
  },

  jaguars: {
    teamName: 'Jaguars',
    projectedPoints: 20.25,
    homeOrRoad: 'road',
  },

  jets: {
    teamName: 'Jets',
    projectedPoints: 16.75,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Wilson',
      matchup: 0,
      prjpoints: 12.9,
      prjpassattempts: 30,
      vtt: 18,
      ypa: [5.2, 7.2, 7.0, 6.6, 6.0],
      TDrate: [5.5, 6.1, 4.6, 4.9, 5.5],
    },
    RB: {
      rbName: 'Carter',
      matchup: 0,
      prjpoints: 11.8,
      prjCarries: 14,
      prjTargets: 3.2,
    },
    WROne: {
      wrName: 'Berrios',
      matchup: 0,
      prjpoints: 9.3,
      prjReceptions: 6.1,
      targetShare: 9.4,
      catchRate: 68.4,
    },

    WRTwo: {
      Name: 'Cole',
      matchup: 0,
      prjpoints: 6.4,
      prjReceptions: 3.2,
      targetShare: 8.4,
      catchRate: 29.4,
    },

    TE: {
      Name: 'Kroft',
      matchup: 0,
      prjpoints: 5.5,
      prjReceptions: 4.2,
    },
  },

  lions: {
    teamName: 'Lions',
    projectedPoints: 17.75,
    homeOrRoad: 'road',
  },

  packers: {
    teamName: 'Packers',
    projectedPoints: 27,
    homeOrRoad: 'home',
  },

  panthers: {
    teamName: 'Panthers',
    projectedPoints: 16.75,
    homeOrRoad: 'home',
  },

  raiders: {
    teamName: 'Raiders',
    projectedPoints: 20.25,
    homeOrRoad: 'home',
  },

  rams: {
    teamName: 'Rams',
    projectedPoints: 25.75,
    homeOrRoad: 'road',
  },

  ravens: {
    teamName: 'Ravens',
    projectedPoints: 18.25,
    homeOrRoad: 'road',
  },

  saints: {
    teamName: 'Saints',
    projectedPoints: 24.25,
    homeOrRoad: 'home',
    QB: {
      qbName: 'Hill',
      matchup: 0,
      prjpoints: 17.3,
      prjpassattempts: 30,
      vtt: 23,
      ypa: [6.8, 9.5, 7.4, 6.7, 6.5],
      TDrate: [5.7, 6.3, 4.8, 5.1, 5.7],
    },
    RB: {
      rbName: 'Kamara',
      matchup: 5,
      prjpoints: 15.9,
      prjCarries: 20.5,
      prjTargets: 4.7,
    },
    WROne: {
      Name: 'Callaway',
      matchup: 0,
      prjpoints: 7.2,
      prjReceptions: 5.6,
      targetShare: 15.6,
      catchRate: 48.3,
    },

    WRTwo: {
      Name: 'Harris',
      matchup: 0,
      prjpoints: 7.1,
      prjReceptions: 3.2,
      targetShare: 11.8,
      catchRate: 45.5,
    },

    TE: {
      Name: 'Troutman',
      matchup: -2.5,
      prjpoints: 3.6,
      prjReceptions: 3.4,
    },
  },

  seahawks: {
    teamName: 'Seahawks',
    projectedPoints: 24,
    homeOrRoad: 'home',
  },

  steelers: {
    teamName: 'Steelers',
    projectedPoints: 17,
    homeOrRoad: 'road',
  },

  texans: {
    teamName: 'Texans',
    projectedPoints: 16.25,
    homeOrRoad: 'home',
  },

  titans: {
    teamName: 'Titans',
    projectedPoints: 21,
    homeOrRoad: 'home',
  },

  vikings: {
    teamName: 'Vikings',
    projectedPoints: 22.75,
    homeOrRoad: 'home',
  },
}; //closing gameInfo object tag

module.exports = gameInfo;
