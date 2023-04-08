'use strict';

//conference adjustment scale

// SEC or Big Ten- +7.5%
// ACC or pac12 - +5%
// big12- +2.5%
// non power five D1- -2.5%
// below D1- -7.5%

const qbs = {
  RWilson: {
    name: 'Russell Wilson',
    draftCapital: 34,
    height: 71,
    weight: 204,
    careerYPA: 7.9,
    bestSeasonYPA: 10.3,
    careerComplationPercentage: 60.9,
    bestFullSeasonCompletionPercentage: 72.8,
    totalCareerPassAttempts: 1489,
    bestSeasonTotalPassingYards: 3563,
    bestSeasonTotalTDs: 37,
    bestSeasonRushingYards: 435,
    fortyTime: 4.55,
    careerInterceptionRate: 2.0,
    ageWhenDrafted: 23.3,
    collegeQBR: 93.9,
    numberOfGamesWithTenPlusPassAttempts: 49,
    conferenceAdjustment: 0.075,
  },

  goff: {
    name: 'Jared Goff',
    draftCapital: 1,
    height: 76,
    weight: 215,
    careerYPA: 7.76,
    bestSeasonYPA: 8.9,
    careerComplationPercentage: 62.3,
    bestFullSeasonCompletionPercentage: 64.5,
    totalCareerPassAttempts: 1568,
    bestSeasonTotalPassingYards: 4714,
    bestSeasonTotalTDs: 43,
    bestSeasonRushingYards: -8,
    fortyTime: 4.82,
    careerInterceptionRate: 1.9,
    ageWhenDrafted: 21.5,
    collegeQBR: 82.2,
    numberOfGamesWithTenPlusPassAttempts: 36,
    conferenceAdjustment: 0.05,
  },

  wentz: {
    name: 'Carson Wentz',
    draftCapital: 2,
    height: 78,
    weight: 235,
    careerYPA: 8.4,
    bestSeasonYPA: 8.7,
    careerComplationPercentage: 64.1,
    bestFullSeasonCompletionPercentage: 63.7,
    totalCareerPassAttempts: 612,
    bestSeasonTotalPassingYards: 3111,
    bestSeasonTotalTDs: 31,
    bestSeasonRushingYards: 642,
    fortyTime: 4.77,
    careerInterceptionRate: 2.3,
    ageWhenDrafted: 23.2,
    collegeQBR: 80.1,
    numberOfGamesWithTenPlusPassAttempts: 21,
    conferenceAdjustment: -0.025,
  },

  lynch: {
    name: 'Paxton Lynch',
    draftCapital: 26,
    height: 79,
    weight: 245,
    careerYPA: 7.4,
    bestSeasonYPA: 8.5,
    careerComplationPercentage: 62.9,
    bestFullSeasonCompletionPercentage: 66.8,
    totalCareerPassAttempts: 1205,
    bestSeasonTotalPassingYards: 3776,
    bestSeasonTotalTDs: 35,
    bestSeasonRushingYards: 321,
    fortyTime: 4.86,
    careerInterceptionRate: 1.9,
    ageWhenDrafted: 22.1,
    collegeQBR: 77.4,
    numberOfGamesWithTenPlusPassAttempts: 38,
    conferenceAdjustment: 0.05,
  },

  dak: {
    name: 'Dak Prescott',
    draftCapital: 135,
    height: 74,
    weight: 226,
    careerYPA: 8.0,
    bestSeasonYPA: 8.7,
    careerComplationPercentage: 62.8,
    bestFullSeasonCompletionPercentage: 66.2,
    totalCareerPassAttempts: 1169,
    bestSeasonTotalPassingYards: 3793,
    bestSeasonTotalTDs: 41,
    bestSeasonRushingYards: 986,
    fortyTime: 4.79,
    careerInterceptionRate: 1.9,
    ageWhenDrafted: 22.7,
    collegeQBR: 83.8,
    numberOfGamesWithTenPlusPassAttempts: 36,
    conferenceAdjustment: 0.075,
  },

  trubisky: {
    name: 'Mitchell Trubisky',
    draftCapital: 2,
    height: 74,
    weight: 222,
    careerYPA: 8.3,
    bestSeasonYPA: 8.4,
    careerComplationPercentage: 67.5,
    bestFullSeasonCompletionPercentage: 68.0,
    totalCareerPassAttempts: 572,
    bestSeasonTotalPassingYards: 3748,
    bestSeasonTotalTDs: 35,
    bestSeasonRushingYards: 308,
    fortyTime: 4.67,
    careerInterceptionRate: 1.7,
    ageWhenDrafted: 22.6,
    collegeQBR: 83.6,
    numberOfGamesWithTenPlusPassAttempts: 18,
    conferenceAdjustment: 0.05,
  },

  mahomes: {
    name: 'Patrick Mahomes',
    draftCapital: 10,
    height: 75,
    weight: 230,
    careerYPA: 8.3,
    bestSeasonYPA: 8.5,
    careerComplationPercentage: 63.5,
    bestFullSeasonCompletionPercentage: 65.7,
    totalCareerPassAttempts: 1349,
    bestSeasonTotalPassingYards: 5052,
    bestSeasonTotalTDs: 53,
    bestSeasonRushingYards: 456,
    fortyTime: 4.8,
    careerInterceptionRate: 2.1,
    ageWhenDrafted: 21.5,
    collegeQBR: 82.5,
    numberOfGamesWithTenPlusPassAttempts: 30,
    conferenceAdjustment: 0.025,
  },

  watson: {
    name: 'Deshaun Watson',
    draftCapital: 12,
    height: 75,
    weight: 215,
    careerYPA: 8.4,
    bestSeasonYPA: 8.4,
    careerComplationPercentage: 67.4,
    bestFullSeasonCompletionPercentage: 67.8,
    totalCareerPassAttempts: 1207,
    bestSeasonTotalPassingYards: 4593,
    bestSeasonTotalTDs: 50,
    bestSeasonRushingYards: 1105,
    fortyTime: 4.66,
    careerInterceptionRate: 2.6,
    ageWhenDrafted: 21.5,
    collegeQBR: 85.3,
    numberOfGamesWithTenPlusPassAttempts: 34,
    conferenceAdjustment: 0.05,
  },

  mayfield: {
    name: 'Baker Mayfield',
    draftCapital: 1,
    height: 73,
    weight: 220,
    careerYPA: 9.8,
    bestSeasonYPA: 11.5,
    careerComplationPercentage: 68.5,
    bestFullSeasonCompletionPercentage: 70.9,
    totalCareerPassAttempts: 1497,
    bestSeasonTotalPassingYards: 4627,
    bestSeasonTotalTDs: 48,
    bestSeasonRushingYards: 405,
    fortyTime: 4.84,
    careerInterceptionRate: 2.0,
    ageWhenDrafted: 23.0,
    collegeQBR: 92.6,
    numberOfGamesWithTenPlusPassAttempts: 48,
    conferenceAdjustment: 0.025,
  },

  darnold: {
    name: 'Sam Darnold',
    draftCapital: 3,
    height: 76,
    weight: 220,
    careerYPA: 8.5,
    bestSeasonYPA: 8.6,
    careerComplationPercentage: 64.9,
    bestFullSeasonCompletionPercentage: 67.2,
    totalCareerPassAttempts: 846,
    bestSeasonTotalPassingYards: 4143,
    bestSeasonTotalTDs: 33,
    bestSeasonRushingYards: 250,
    fortyTime: 4.85,
    careerInterceptionRate: 2.6,
    ageWhenDrafted: 19.8,
    collegeQBR: 80.4,
    numberOfGamesWithTenPlusPassAttempts: 24,
    conferenceAdjustment: 0.05,
  },

  allen: {
    name: 'Josh Allen',
    draftCapital: 7,
    height: 77,
    weight: 233,
    careerYPA: 7.8,
    bestSeasonYPA: 8.6,
    careerComplationPercentage: 56.2,
    bestFullSeasonCompletionPercentage: 56.3,
    totalCareerPassAttempts: 649,
    bestSeasonTotalPassingYards: 3203,
    bestSeasonTotalTDs: 35,
    bestSeasonRushingYards: 523,
    fortyTime: 4.75,
    careerInterceptionRate: 3.2,
    ageWhenDrafted: 21.8,
    collegeQBR: 63.2,
    numberOfGamesWithTenPlusPassAttempts: 25,
    conferenceAdjustment: -0.025,
  },

  rosen: {
    name: 'Josh Rosen',
    draftCapital: 10,
    height: 76,
    weight: 218,
    careerYPA: 8.0,
    bestSeasonYPA: 8.3,
    careerComplationPercentage: 60.9,
    bestFullSeasonCompletionPercentage: 62.6,
    totalCareerPassAttempts: 1170,
    bestSeasonTotalPassingYards: 3756,
    bestSeasonTotalTDs: 28,
    bestSeasonRushingYards: 15,
    fortyTime: 4.92,
    careerInterceptionRate: 2.2,
    ageWhenDrafted: 21.1,
    collegeQBR: 67.1,
    numberOfGamesWithTenPlusPassAttempts: 30,
    conferenceAdjustment: 0.05,
  },

  jackson: {
    name: 'Lamar Jackson',
    draftCapital: 32,
    height: 75,
    weight: 211,
    careerYPA: 8.3,
    bestSeasonYPA: 8.7,
    careerComplationPercentage: 57.0,
    bestFullSeasonCompletionPercentage: 59.1,
    totalCareerPassAttempts: 1086,
    bestSeasonTotalPassingYards: 3660,
    bestSeasonTotalTDs: 48,
    bestSeasonRushingYards: 1571,
    fortyTime: 4.44,
    careerInterceptionRate: 2.5,
    ageWhenDrafted: 21.2,
    collegeQBR: 85,
    numberOfGamesWithTenPlusPassAttempts: 36,
    conferenceAdjustment: -0.025,
  },

  murray: {
    name: 'Kyler Murray',
    draftCapital: 1,
    height: 70,
    weight: 192,
    careerYPA: 10.4,
    bestSeasonYPA: 11.6,
    careerComplationPercentage: 67.4,
    bestFullSeasonCompletionPercentage: 69.0,
    totalCareerPassAttempts: 519,
    bestSeasonTotalPassingYards: 4361,
    bestSeasonTotalTDs: 54,
    bestSeasonRushingYards: 1001,
    fortyTime: 4.49,
    careerInterceptionRate: 2.7,
    ageWhenDrafted: 21.6,
    collegeQBR: 95.8,
    numberOfGamesWithTenPlusPassAttempts: 18,
    conferenceAdjustment: 0.025,
  },

  djones: {
    name: 'Daniel Jones',
    draftCapital: 6,
    height: 77,
    weight: 215,
    careerYPA: 6.4,
    bestSeasonYPA: 6.8,
    careerComplationPercentage: 59.9,
    bestFullSeasonCompletionPercentage: 62.8,
    totalCareerPassAttempts: 1275,
    bestSeasonTotalPassingYards: 2836,
    bestSeasonTotalTDs: 25,
    bestSeasonRushingYards: 518,
    fortyTime: 4.81,
    careerInterceptionRate: 2.2,
    ageWhenDrafted: 21.8,
    collegeQBR: 72,
    numberOfGamesWithTenPlusPassAttempts: 36,
    conferenceAdjustment: 0.05,
  },

  haskins: {
    name: 'Dwayne Haskins',
    draftCapital: 15,
    height: 75,
    weight: 214,
    careerYPA: 9.1,
    bestSeasonYPA: 9.1,
    careerComplationPercentage: 70,
    bestFullSeasonCompletionPercentage: 70,
    totalCareerPassAttempts: 590,
    bestSeasonTotalPassingYards: 4831,
    bestSeasonTotalTDs: 54,
    bestSeasonRushingYards: 108,
    fortyTime: 5.04,
    careerInterceptionRate: 1.5,
    ageWhenDrafted: 21.9,
    collegeQBR: 86.3,
    numberOfGamesWithTenPlusPassAttempts: 15,
    conferenceAdjustment: 0.075,
  },

  burrow: {
    name: 'Joe Burrow',
    draftCapital: 1,
    height: 76,
    weight: 221,
    careerYPA: 9.4,
    bestSeasonYPA: 10.8,
    careerComplationPercentage: 68.8,
    bestFullSeasonCompletionPercentage: 76.3,
    totalCareerPassAttempts: 945,
    bestSeasonTotalPassingYards: 5671,
    bestSeasonTotalTDs: 65,
    bestSeasonRushingYards: 399,
    fortyTime: 4.82,
    careerInterceptionRate: 1.2,
    ageWhenDrafted: 23.0,
    collegeQBR: 94.9,
    numberOfGamesWithTenPlusPassAttempts: 32,
    conferenceAdjustment: 0.075,
  },

  tagovailoa: {
    name: 'Tua Tagovailoa',
    draftCapital: 5,
    height: 72,
    weight: 217,
    careerYPA: 10.9,
    bestSeasonYPA: 11.2,
    careerComplationPercentage: 69.3,
    bestFullSeasonCompletionPercentage: 71.4,
    totalCareerPassAttempts: 684,
    bestSeasonTotalPassingYards: 3966,
    bestSeasonTotalTDs: 48,
    bestSeasonRushingYards: 190,
    fortyTime: 4.79,
    careerInterceptionRate: 1.6,
    ageWhenDrafted: 22.1,
    collegeQBR: 94.8,
    numberOfGamesWithTenPlusPassAttempts: 27,
    conferenceAdjustment: 0.075,
  },

  herbert: {
    name: 'Justin Herbert',
    draftCapital: 6,
    height: 78,
    weight: 236,
    careerYPA: 8.2,
    bestSeasonYPA: 8.1,
    careerComplationPercentage: 64,
    bestFullSeasonCompletionPercentage: 66.8,
    totalCareerPassAttempts: 1293,
    bestSeasonTotalPassingYards: 3471,
    bestSeasonTotalTDs: 36,
    bestSeasonRushingYards: 183,
    fortyTime: 4.68,
    careerInterceptionRate: 1.7,
    ageWhenDrafted: 22.0,
    collegeQBR: 77.4,
    numberOfGamesWithTenPlusPassAttempts: 41,
    conferenceAdjustment: 0.05,
  },

  love: {
    name: 'Jordan Love',
    draftCapital: 30,
    height: 76,
    weight: 219,
    careerYPA: 7.6,
    bestSeasonYPA: 8.6,
    careerComplationPercentage: 61.2,
    bestFullSeasonCompletionPercentage: 64.0,
    totalCareerPassAttempts: 1125,
    bestSeasonTotalPassingYards: 3567,
    bestSeasonTotalTDs: 39,
    bestSeasonRushingYards: 175,
    fortyTime: 4.74,
    careerInterceptionRate: 2.5,
    ageWhenDrafted: 21.4,
    collegeQBR: 59.8,
    numberOfGamesWithTenPlusPassAttempts: 35,
    conferenceAdjustment: -0.025,
  },

  lawrence: {
    name: 'Trevor Lawrence',
    draftCapital: 1,
    height: 78,
    weight: 220,
    careerYPA: 9,
    bestSeasonYPA: 9.4,
    careerComplationPercentage: 67,
    bestFullSeasonCompletionPercentage: 69.2,
    totalCareerPassAttempts: 1139,
    bestSeasonTotalPassingYards: 3665,
    bestSeasonTotalTDs: 45,
    bestSeasonRushingYards: 563,
    fortyTime: 4.66,
    careerInterceptionRate: 1.4,
    ageWhenDrafted: 21.5,
    collegeQBR: 87.3,
    numberOfGamesWithTenPlusPassAttempts: 37,
    conferenceAdjustment: 0.05,
  },

  zwilson: {
    name: 'Zach Wilson',
    draftCapital: 2,
    height: 75,
    weight: 214,
    careerYPA: 9.1,
    bestSeasonYPA: 11.0,
    careerComplationPercentage: 67.6,
    bestFullSeasonCompletionPercentage: 73.5,
    totalCareerPassAttempts: 837,
    bestSeasonTotalPassingYards: 3692,
    bestSeasonTotalTDs: 43,
    bestSeasonRushingYards: 264,
    fortyTime: 4.71,
    careerInterceptionRate: 1.8,
    ageWhenDrafted: 21.6,
    collegeQBR: 88.6,
    numberOfGamesWithTenPlusPassAttempts: 28,
    conferenceAdjustment: -0.025,
  },

  lance: {
    name: 'Trey Lance',
    draftCapital: 3,
    height: 76,
    weight: 226,
    careerYPA: 9.3,
    bestSeasonYPA: 9.7,
    careerComplationPercentage: 65.4,
    bestFullSeasonCompletionPercentage: 66.9,
    totalCareerPassAttempts: 318,
    bestSeasonTotalPassingYards: 2786,
    bestSeasonTotalTDs: 42,
    bestSeasonRushingYards: 1100,
    fortyTime: 4.69,
    careerInterceptionRate: 0.03,
    ageWhenDrafted: 20.9,
    collegeQBR: 75,
    numberOfGamesWithTenPlusPassAttempts: 16,
    conferenceAdjustment: -0.075,
  },

  fields: {
    name: 'Justin Fields',
    draftCapital: 12,
    height: 75,
    weight: 227,
    careerYPA: 9.2,
    bestSeasonYPA: 9.2,
    careerComplationPercentage: 68.4,
    bestFullSeasonCompletionPercentage: 69.2,
    totalCareerPassAttempts: 618,
    bestSeasonTotalPassingYards: 5701,
    bestSeasonTotalTDs: 51,
    bestSeasonRushingYards: 484,
    fortyTime: 4.51,
    careerInterceptionRate: 1.5,
    ageWhenDrafted: 22.1,
    collegeQBR: 92.1,
    numberOfGamesWithTenPlusPassAttempts: 22,
    conferenceAdjustment: 0.075,
  },

  mjones: {
    name: 'Mac Jones',
    draftCapital: 15,
    height: 75,
    weight: 217,
    careerYPA: 11.0,
    bestSeasonYPA: 11.2,
    careerComplationPercentage: 74.3,
    bestFullSeasonCompletionPercentage: 77.4,
    totalCareerPassAttempts: 556,
    bestSeasonTotalPassingYards: 4500,
    bestSeasonTotalTDs: 41,
    bestSeasonRushingYards: 36,
    fortyTime: 4.88,
    careerInterceptionRate: 1.6,
    ageWhenDrafted: 22.6,
    collegeQBR: 96.1,
    numberOfGamesWithTenPlusPassAttempts: 19,
    conferenceAdjustment: 0.075,
  },

  willis: {
    name: 'Malik Willis',
    draftCapital: 34,
    height: 73,
    weight: 219,
    careerYPA: 8.4,
    bestSeasonYPA: 8.4,
    careerCompletionPercentage: 62.8,
    bestFullSeasonCompletionPercentage: 61.1,
    totalCareerPassAttempts: 618,
    bestSeasonTotalPassingYards: 2857,
    bestSeasonTotalTDs: 40,
    bestSeasonRushingYards: 944,
    fortyTime: 4.59,
    careerInterceptionRate: 3.0,
    ageWhenDrafted: 22.8,
    collegeQBR: 78.7,
    numberOfGamesWithTenPlusPassAttempts: 24,
    conferenceAdjustment: -0.075,
  },

  corall: {
    name: 'Matt Corall',
    draftCapital: 34,
    height: 74,
    weight: 212,
    careerYPA: 9.1,
    bestSeasonYPA: 8.7,
    careerComplationPercentage: 67.3,
    bestFullSeasonCompletionPercentage: 67.9,
    totalCareerPassAttempts: 614,
    bestSeasonTotalPassingYards: 3349,
    bestSeasonTotalTDs: 33,
    bestSeasonRushingYards: 614,
    fortyTime: 4.71,
    careerInterceptionRate: 3.7,
    ageWhenDrafted: 23.2,
    collegeQBR: 89.9,
    numberOfGamesWithTenPlusPassAttempts: 31,
    conferenceAdjustment: 0.075,
  },

  howell: {
    name: 'Sam Howell',
    draftCapital: 34,
    height: 73,
    weight: 218,
    careerYPA: 9.2,
    bestSeasonYPA: 10.3,
    careerComplationPercentage: 63.8,
    bestFullSeasonCompletionPercentage: 68.1,
    totalCareerPassAttempts: 1117,
    bestSeasonTotalPassingYards: 3641,
    bestSeasonTotalTDs: 39,
    bestSeasonRushingYards: 828,
    fortyTime: 4.8,
    careerInterceptionRate: 2.1,
    ageWhenDrafted: 21.5,
    collegeQBR: 79.3,
    numberOfGamesWithTenPlusPassAttempts: 37,
    conferenceAdjustment: 0.05,
  },

  ridder: {
    name: 'Desmond Ridder',
    draftCapital: 34,
    height: 75,
    weight: 207,
    careerYPA: 7.9,
    bestSeasonYPA: 8.6,
    careerComplationPercentage: 62.1,
    bestFullSeasonCompletionPercentage: 64.9,
    totalCareerPassAttempts: 810,
    bestSeasonTotalPassingYards: 3334,
    bestSeasonTotalTDs: 36,
    bestSeasonRushingYards: 650,
    fortyTime: 4.52,
    careerInterceptionRate: 2.1,
    ageWhenDrafted: 22.6,
    collegeQBR: 80.9,
    numberOfGamesWithTenPlusPassAttempts: 49,
    conferenceAdjustment: -0.025,
  },

  pickett: {
    name: 'Kenny Pickett',
    draftCapital: 15,
    height: 75,
    weight: 217,
    careerYPA: 7.3,
    bestSeasonYPA: 8.7,
    careerComplationPercentage: 62.4,
    bestFullSeasonCompletionPercentage: 67.2,
    totalCareerPassAttempts: 1674,
    bestSeasonTotalPassingYards: 4319,
    bestSeasonTotalTDs: 47,
    bestSeasonRushingYards: 233,
    fortyTime: 4.73,
    careerInterceptionRate: 1.9,
    ageWhenDrafted: 23.8,
    collegeQBR: 60.9,
    numberOfGamesWithTenPlusPassAttempts: 51,
    conferenceAdjustment: 0.075,
  },

  Richardson: {
    name: 'Anthony Richardson',
    draftCapital: 10,
    height: 76,
    weight: 244,
    careerYPA: 7.9,
    bestSeasonYPA: 8.3,
    careerComplationPercentage: 54.7,
    bestFullSeasonCompletionPercentage: 59.4,
    totalCareerPassAttempts: 393,
    bestSeasonTotalPassingYards: 2549,
    bestSeasonTotalTDs: 26,
    bestSeasonRushingYards: 654,
    fortyTime: 4.43,
    careerInterceptionRate: 3.8,
    ageWhenDrafted: 20.9,
    collegeQBR: 70.6,
    numberOfGamesWithTenPlusPassAttempts: 14,
    conferenceAdjustment: 0.075,
  },

  Young: {
    name: 'Bryce Young',
    draftCapital: 10,
    height: 70,
    weight: 204,
    careerYPA: 8.8,
    bestSeasonYPA: 8.9,
    careerComplationPercentage: 65.8,
    bestFullSeasonCompletionPercentage: 66.9,
    totalCareerPassAttempts: 949,
    bestSeasonTotalPassingYards: 4872,
    bestSeasonTotalTDs: 50,
    bestSeasonRushingYards: 185,
    fortyTime: 4.7,
    careerInterceptionRate: 1.2,
    ageWhenDrafted: 21.7,
    collegeQBR: 95,
    numberOfGamesWithTenPlusPassAttempts: 27,
    conferenceAdjustment: 0.075,
  },

  Stroud: {
    name: 'CJ Stroud',
    draftCapital: 10,
    height: 75,
    weight: 214,
    careerYPA: 9.8,
    bestSeasonYPA: 10.1,
    careerComplationPercentage: 69.3,
    bestFullSeasonCompletionPercentage: 71.9,
    totalCareerPassAttempts: 575,
    bestSeasonTotalPassingYards: 44,
    bestSeasonTotalTDs: 4435,
    bestSeasonRushingYards: 108,
    fortyTime: 4.7,
    careerInterceptionRate: 1.4,
    ageWhenDrafted: 21.5,
    collegeQBR: 88,
    numberOfGamesWithTenPlusPassAttempts: 25,
    conferenceAdjustment: 0.075,
  },

  Levis: {
    name: 'Will Levis',
    draftCapital: 15,
    height: 76,
    weight: 229,
    careerYPA: 8.0,
    bestSeasonYPA: 8.2,
    careerComplationPercentage: 64.9,
    bestFullSeasonCompletionPercentage: 66.0,
    totalCareerPassAttempts: 738,
    bestSeasonTotalPassingYards: 2826,
    bestSeasonTotalTDs: 33,
    bestSeasonRushingYards: 376,
    fortyTime: 4.7,
    careerInterceptionRate: 3.4,
    ageWhenDrafted: 23.8,
    collegeQBR: 60.9,
    numberOfGamesWithTenPlusPassAttempts: 31,
    conferenceAdjustment: 0.065,
  },

  Hooker: {
    name: 'Hendon Hooker',
    draftCapital: 33,
    height: 75,
    weight: 217,
    careerYPA: 9.5,
    bestSeasonYPA: 9.7,
    careerComplationPercentage: 66.9,
    bestFullSeasonCompletionPercentage: 69.6,
    totalCareerPassAttempts: 944,
    bestSeasonTotalPassingYards: 3135,
    bestSeasonTotalTDs: 36,
    bestSeasonRushingYards: 620,
    fortyTime: 4.7,
    careerInterceptionRate: 1.2,
    ageWhenDrafted: 25.2,
    collegeQBR: 89.5,
    numberOfGamesWithTenPlusPassAttempts: 38,
    conferenceAdjustment: 0.065,
  },

  Hurts: {
    name: 'Jalen Hurts',
    draftCapital: 33,
    height: 73,
    weight: 218,
    careerYPA: 9.1,
    bestSeasonYPA: 11.3,
    careerComplationPercentage: 65.1,
    bestFullSeasonCompletionPercentage: 72.0,
    totalCareerPassAttempts: 1047,
    bestSeasonTotalPassingYards: 3851,
    bestSeasonTotalTDs: 52,
    bestSeasonRushingYards: 1298,
    fortyTime: 4.59,
    careerInterceptionRate: 1.9,
    ageWhenDrafted: 21.6,
    collegeQBR: 89.7,
    numberOfGamesWithTenPlusPassAttempts: 42,
    conferenceAdjustment: 0.065,
  },
};

const RWilson = qbs.RWilson;
const goff = qbs.goff;
const wentz = qbs.wentz;
const lynch = qbs.lynch;
const dak = qbs.dak;
const trubisky = qbs.trubisky;
const mahomes = qbs.mahomes;
const watson = qbs.watson;
const mayfield = qbs.mayfield;
const darnold = qbs.darnold;
const allen = qbs.allen;
const rosen = qbs.rosen;
const jackson = qbs.jackson;
const murray = qbs.murray;
const djones = qbs.djones;
const haskins = qbs.haskins;
const burrow = qbs.burrow;
const tagovailoa = qbs.tagovailoa;
const herbert = qbs.herbert;
const love = qbs.love;
const lawrence = qbs.lawrence;
const zwilson = qbs.zwilson;
const lance = qbs.lance;
const fields = qbs.fields;
const mjones = qbs.mjones;
const willis = qbs.willis;
const corall = qbs.corall;
const howell = qbs.howell;
const ridder = qbs.ridder;
const pickett = qbs.pickett;
const Richardson = qbs.Richardson;
const Young = qbs.Young;
const Stroud = qbs.Stroud;
const Levis = qbs.Levis;
const Hooker = qbs.Hooker;
const Hurts = qbs.Hurts;

const allQBs = [
  RWilson,
  goff,
  wentz,
  lynch,
  dak,
  trubisky,
  mahomes,
  watson,
  mayfield,
  darnold,
  allen,
  rosen,
  jackson,
  murray,
  djones,
  haskins,
  burrow,
  tagovailoa,
  herbert,
  love,
  lawrence,
  zwilson,
  lance,
  fields,
  mjones,
  willis,
  corall,
  howell,
  ridder,
  pickett,
  Richardson,
  Young,
  Stroud,
  Levis,
  Hooker,
  Hurts,
];
const allQBNames = [];

const allDraftCapitolScores = [];
const allHeights = [];
const allWeights = [];
const allcYPAs = [];
const allbsYPAs = [];
const allCCPs = [];
const allBFSCP = [];
const allTCPAs = [];
const BSTPYs = [];
const BSTTDs = [];
const BSRYs = [];
const FTs = [];
const CIRs = [];
const AWDs = [];
const CQBRs = [];
const NGWTPPAs = [];

const allTotalScores = [];

const calcDraftCapitolScore = function (player) {
  let score = player.draftCapital;

  if (score < 13) {
    score = 1;
  } else if (score < 33) {
    score = 0.25;
  } else {
    score = 0;
  }

  return score;
};

const calcHeightScore = function (player) {
  let height = player.height;

  if (height < 74) {
    height = 0.34;
  } else {
    height = 2;
  }
  return height;
};

const calcWeightScore = function (player) {
  let weight = player.weight;

  if (weight < 200) {
    weight = 0;
  } else if (weight > 199 && weight < 211) {
    weight = 0.17;
  } else if (weight > 209 && weight < 220) {
    weight = 0.25;
  } else {
    weight = 1;
  }
  return weight;
};

const calcCareerYPAScore = function (player) {
  let cYPA = player.careerYPA;

  if (cYPA < 8.1) {
    cYPA = 0.17;
  } else if (cYPA > 7.9 && cYPA < 8.6) {
    cYPA = 0.58;
  } else if (cYPA > 8.5 && cYPA < 9.0) {
    cYPA = 0.66;
  } else {
    cYPA = 1;
  }

  return cYPA;
};

const calcBestSeasonYPAScore = function (player) {
  let bsYPA = player.bestSeasonYPA;

  if (bsYPA < 8) {
    bsYPA = 0;
  } else if (bsYPA > 8 && bsYPA < 8.6) {
    bsYPA = 0.17;
  } else if (bsYPA > 8.5 && bsYPA < 9) {
    bsYPA = 0.5;
  } else {
    bsYPA = 1;
  }
  return bsYPA;
};

const calcCareerCompletionPercentageScore = function (player) {
  let CCP = player.careerCompletionPercentage;

  if (CCP < 60) {
    CCP = 0.17;
  } else if (CCP > 59 && CCP < 65) {
    CCP = 0.5;
  } else {
    CCP = 1;
  }

  return CCP;
};

const calcbestFullSeasonCompletionPercentage = function (player) {
  let BFSCP = player.bestFullSeasonCompletionPercentage;

  if (BFSCP < 65) {
    BFSCP = 0.34;
  } else {
    BFSCP = 2;
  }

  return BFSCP;
};

const calctotalCareerPassAttempts = function (player) {
  let TCPA = player.totalCareerPassAttempts;

  if (TCPA < 501) {
    TCPA = 0.08;
  } else if (TCPA > 500 && TCPA < 1000) {
    TCPA = 0.42;
  } else {
    TCPA = 1;
  }

  return TCPA;
};

const calcbestSeasonTotalPassingYards = function (player) {
  let BSTPY = player.bestSeasonTotalPassingYards;

  if (BSTPY < 3001) {
    BSTPY = 0.08;
  } else if (BSTPY > 3000 && BSTPY < 3750) {
    BSTPY = 0.58;
  } else if (BSTPY > 3749 && BSTPY < 4500) {
    BSTPY = 0.75;
  } else {
    BSTPY = 1;
  }
  return BSTPY;
};

const calcbestSeasonTotalTDs = function (player) {
  let BSTTD = player.bestSeasonTotalTDs;

  if (BSTTD < 41) {
    BSTTD = 0.17;
  } else if (BSTTD > 40 && BSTTD < 50) {
    BSTTD = 0.5;
  } else {
    BSTTD = 1;
  }
  return BSTTD;
};

const calcbestSeasonRushingYards = function (player) {
  let BSRY = player.bestSeasonRushingYards;

  if (BSRY < 301) {
    BSRY = 0.17;
  } else if (BSRY > 300 && BSRY < 900) {
    BSRY = 1.16;
  } else {
    BSRY = 2;
  }
  return BSRY;
};

const calcfortyTime = function (player) {
  let FT = player.fortyTime;

  if (FT > 4.9) {
    FT = 0;
  } else if (FT > 4.79 && FT < 5.0) {
    FT = 0.34;
  } else if (FT > 4.7 && FT < 4.8) {
    FT = 0.5;
  } else {
    FT = 2;
  }
  return FT;
};

const calccareerInterceptionRate = function (player) {
  let CIR = player.careerInterceptionRate;

  if (CIR > 2.74) {
    CIR = 0.08;
  } else if (CIR > 2 && CIR < 2.75) {
    CIR = 0.58;
  } else {
    CIR = 1;
  }
  return CIR;
};

const calcageWhenDrafted = function (player) {
  let AWD = player.ageWhenDrafted;

  if (AWD > 24.9) {
    AWD = 0;
  } else if (AWD > 22.5) {
    AWD = 0.32;
  } else if (AWD > 22.0 && AWD < 22.6) {
    AWD = 0.5;
  } else {
    AWD = 2;
  }
  return AWD;
};

const calccollegeQBR = function (player) {
  let CQBR = player.collegeQBR;

  if (CQBR < 80.1) {
    CQBR = 0.25;
  } else if (CQBR > 80 && CQBR < 85) {
    CQBR = 0.41;
  } else if (CQBR > 84.9 && CQBR < 90) {
    CQBR = 0.66;
  } else {
    CQBR = 1;
  }
  return CQBR;
};

const calcnumberOfGamesWithTenPlusPassAttempts = function (player) {
  let NOGWTPPA = player.numberOfGamesWithTenPlusPassAttempts;

  if (NOGWTPPA < 22) {
    NOGWTPPA = 0.16;
  } else if (NOGWTPPA > 21.9 && NOGWTPPA < 30) {
    NOGWTPPA = 0.33;
  } else if (NOGWTPPA > 29.9 && NOGWTPPA < 34) {
    NOGWTPPA = 0.5;
  } else {
    NOGWTPPA = 1;
  }
  return NOGWTPPA;
};

allQBs.map(function (player, i) {
  let totalScore = 0;

  allQBNames.push(player.name);

  let DCS = calcDraftCapitolScore(player);
  allDraftCapitolScores.push(DCS);
  totalScore += DCS;

  let HS = calcHeightScore(player);
  allHeights.push(HS);
  totalScore += HS;

  let WS = calcWeightScore(player);
  allWeights.push(WS);
  totalScore += WS;

  let YPAS = calcCareerYPAScore(player);
  allcYPAs.push(YPAS);
  totalScore += YPAS;

  let bsYPAS = calcBestSeasonYPAScore(player);
  allbsYPAs.push(bsYPAS);
  totalScore += bsYPAS;

  let CCPS = calcCareerCompletionPercentageScore(player);
  allCCPs.push(CCPS);
  totalScore += CCPS;

  let BFSCPS = calcbestFullSeasonCompletionPercentage(player);
  allBFSCP.push(BFSCPS);
  totalScore += BFSCPS;

  let TCPAS = calctotalCareerPassAttempts(player);
  allTCPAs.push(TCPAS);
  totalScore += TCPAS;

  let BSTPYS = calcbestSeasonTotalPassingYards(player);
  BSTPYs.push(BSTPYS);
  totalScore += BSTPYS;

  let BSTTDS = calcbestSeasonTotalTDs(player);
  BSTTDs.push(BSTTDS);
  totalScore += BSTTDS;

  let BSRYS = calcbestSeasonRushingYards(player);
  BSRYs.push(BSRYS);
  totalScore += BSRYS;

  let FTS = calcfortyTime(player);
  FTs.push(FTS);
  totalScore += FTS;

  let CIRS = calccareerInterceptionRate(player);
  CIRs.push(CIRS);
  totalScore += CIRS;

  let AWDS = calcageWhenDrafted(player);
  AWDs.push(AWDS);
  totalScore += AWDS;

  let CQBRS = calccollegeQBR(player);
  CQBRs.push(CQBRS);
  totalScore += CQBRS;

  let NOGWTPPAS = calcnumberOfGamesWithTenPlusPassAttempts(player);
  NGWTPPAs.push(NOGWTPPAS);
  totalScore += NOGWTPPAS;

  totalScore += totalScore * player.conferenceAdjustment;

  allTotalScores.push(totalScore);
});

let initialFinalScore = allTotalScores.map(function (score) {
  let rawfinalScore = (score / 21) * 100;
  let finalScore = +rawfinalScore.toFixed(2);
  return finalScore;
});

let finalScore = allQBNames.map(function (player, i) {
  let newFinalScore = `${initialFinalScore[i]} - ${player}`;
  return newFinalScore;
});

let sortFinalScore = finalScore.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

// console.log(sortFinalScore);

const allQBModelDataData = {
  draftCapitalScore: allDraftCapitolScores,
  heightScores: allHeights,
  weightScores: allWeights,
  careerYPAScores: allcYPAs,
  bestSeasonYPAScores: allbsYPAs,
  careerComplationPercentage: allCCPs,
  bestFullSeasonCompletionPercentage: allBFSCP,
  totalCareerPassAttempts: allTCPAs,
  bestSeasonTotalPAssingYards: BSTPYs,
  bestSeasonTotalTouchdowns: BSTTDs,
  bestSeasonRushngYards: BSRYs,
  fortyTimes: FTs,
  careerInterceptionRate: CIRs,
  AgeWhenDrafted: AWDs,
  collegeQBR: CQBRs,
  numberOfGamesWithTenPlusPassAttempts: NGWTPPAs,

  FinalScore: {
    sortFinalScore: sortFinalScore,
  },
};

module.exports = allQBModelDataData;
