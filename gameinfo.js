const gameInfo = {
  saints: {
    teamName: 'Saints',
    projectedPoints: 24.25,
    homeOrRoad: 'home',
    QB: {
      qbName: 'Hill',
      matchup: 0,
      prjpoints: 17.3,
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
      targetShare: [19, 25, 7, 28],
    },

    WRTwo: {
      Name: 'Harris',
      matchup: 0,
      prjpoints: 7.1,
      prjReceptions: 3.2,
      targetShare: [10, 9, 15, 30, 3],
    },

    TE: {
      Name: 'Troutman',
      matchup: -2.5,
      prjpoints: 3.6,
      prjReceptions: 3.4,
    },
  },
  jets: {
    teamName: 'Jets',
    projectedPoints: 16.75,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Wilson',
      matchup: 0,
      prjpoints: 12.9,
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
      targetShare: [19, 33, 9, 2, 3],
    },

    WRTwo: {
      Name: 'Cole',
      matchup: 0,
      prjpoints: 6.4,
      prjReceptions: 3.2,
      targetShare: [6, 11, 9],
    },

    TE: {
      Name: 'Kroft',
      matchup: 0,
      prjpoints: 5.5,
      prjReceptions: 4.2,
    },
  },

  chiefs: {
    teamName: 'Chiefs',
    projectedPoints: 27.25,
    homeOrRoad: 'road',

    QB: {
      qbName: 'Mahomes',
      matchup: 5,
      prjpoints: 21.0,
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
      targetShare: [44, 13, 17, 40, 26],
    },

    WRTwo: {
      Name: 'Pringle',
      matchup: 2.5,
      prjpoints: 6.7,
      prjReceptions: 5,
      targetShare: [5, 6, 15, 6, 4],
    },

    TE: {
      teName: 'Kelce',
      matchup: 2.5,
      prjpoints: 13.6,
      prjReceptions: 5.7,
    },
  },

  bengals: {
    teamName: 'Bengals',
    projectedPoints: 23.75,
    homeOrRoad: 'home',

    QB: {
      qbName: 'Burrow',
      matchup: 0,
      prjpoints: 17.5,
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
      targetShare: [26, 13, 27, 28, 27],
    },

    WRTwo: {
      Name: 'Higgins',
      matchup: 0,
      prjpoints: 13.5,
      prjReceptions: 7.2,
      targetShare: [19, 34, 18],
    },

    TE: {
      teName: 'Uzomah',
      matchup: 2.5,
      prjpoints: 6,
      prjReceptions: 4.7,
    },
  },
}; //closing gameInfo object tag

module.exports = gameInfo;
