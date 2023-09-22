const allTEs = require('../teamandpositionvariables/allTEVariables');
const terawdata = require('../teamandpostionsrawdata/terawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');

const allTETotalScores = [];
const allTEVTTs = [];
const allTEHighProjectedTargetsBonus = [];
const allTEPPRPointsPerGameLastThreeGamesPlayed = [];
const allTEProjectedReceptions = [];

const allTEObjectsArray = [];

class TeObject {
  constructor(
    name,
    teamABV,
    curWeek,
    position,
    QBFantasyPointsPerGameLastFiveWeeks,
    QBAppProjectedPointsThisWeek,
    QBFourForFourProjectedPoints,
    teamPointsPerGameLastFiveWeeks,
    teamAppProjectedPointsThisWeek,
    halfGLSPAvg,
    fullGLSPAvg,
    TEPGLSPAvg,
    receptionsPerGameLastFiveWeeks,
    projectedReceptions4for4,

    fourForFourHalfPPRProjectedPoints,
    fourForFourFullPPRProjectedPoints
  ) {
    this.name = name;
    this.teamABV = teamABV;
    this.curWeek = curWeek;
    this.position = position;
    this.QBFantasyPointsPerGameLastFiveWeeks =
      QBFantasyPointsPerGameLastFiveWeeks;
    this.QBAppProjectedPointsThisWeek = QBAppProjectedPointsThisWeek;
    this.QBFourForFourProjectedPoints = QBFourForFourProjectedPoints;
    this.teamPointsPerGameLastFiveWeeks = teamPointsPerGameLastFiveWeeks;
    this.teamAppProjectedPointsThisWeek = teamAppProjectedPointsThisWeek;
    this.halfGLSPAvg = halfGLSPAvg;
    this.fullGLSPAvg = fullGLSPAvg;
    this.TEPGLSPAvg = TEPGLSPAvg;
    this.receptionsPerGameLastFiveWeeks = receptionsPerGameLastFiveWeeks;
    this.projectedReceptions4for4 = projectedReceptions4for4;
    this.fourForFourHalfPPRProjectedPoints = fourForFourHalfPPRProjectedPoints;
    this.fourForFourFullPPRProjectedPoints = fourForFourFullPPRProjectedPoints;
  }

  //* add methods here
  calcProjectedPoints() {
    // console.log(this.name, this.teamABV, this.fullGLSPAvg);
    if (this.name) {
      let amountToAdd =
        +this.fourForFourFullPPRProjectedPoints -
        +this.fourForFourHalfPPRProjectedPoints;
      this.fourForFourTEPProjectedPoints =
        +this.fourForFourFullPPRProjectedPoints + +amountToAdd;
      //
      //
      // weeks 1 and 2/////////////////////////////////////////////////
      //
      // half PPR
      //
      if (this.curWeek < 3) {
        let final = 0;
        let tempOne = +(this.fourForFourHalfPPRProjectedPoints * 3).toFixed(1);
        if (this.halfGLSPAvg) {
          let tempTwo = +tempOne + +this.halfGLSPAvg;
          final = +(tempTwo / 4).toFixed(1);
        } else {
          let tempTwo = +tempOne;
          final = +(tempTwo / 3).toFixed(1);
        }
        this.appHalfProjectedPoints = +final;

        //
        //Full PPR
        //
        let pprTempOne = +(this.fourForFourFullPPRProjectedPoints * 3).toFixed(
          1
        );
        let pprFinal = 0;
        if (this.fullGLSPAvg) {
          let pprTempTwo = +pprTempOne + +this.fullGLSPAvg;
          pprFinal = +(pprTempTwo / 4).toFixed(1);
        } else {
          let pprTempTwo = +pprTempOne;
          pprFinal = +(pprTempTwo / 3).toFixed(1);
        }
        this.appFullProjectedPoints = +pprFinal;
        //
        // TEP
        //
        let tepFinal = 0;
        let tepTempOne = +(this.fourForFourTEPProjectedPoints * 3).toFixed(1);
        if (this.TEPGLSPAvg) {
          let tepTempTwo = +tepTempOne + +this.TEPGLSPAvg;
          tepFinal = +(tepTempTwo / 4).toFixed(1);
        } else {
          let tepTempTwo = +tepTempOne;
          tepFinal = +(tepTempTwo / 3).toFixed(1);
        }
        this.appTEPProjectedPoints = +tepFinal;
      }

      //
      //
      // weeks 3 and 4
      //
      //
      if (this.curWeek === 3 || this.curWeek === 4) {
        // half PPR
        //

        let tempOne = +(this.fourForFourHalfPPRProjectedPoints * 2).toFixed(1);
        let final = 0
        if (this.halfGLSPAvg) {
          let tempGLSP = +this.halfGLSPAvg * 2;
          let tempTwo = +tempOne + +tempGLSP;
        final = +(tempTwo / 4).toFixed(1);
        } else {
          let tempTwo = +tempOne;
        final = +(tempTwo / 2).toFixed(1);
        }
        this.appHalfProjectedPoints = +final;

        //
        //Full PPR
        //
        let pprTempOne = +(this.fourForFourFullPPRProjectedPoints * 2).toFixed(
          1
        );
        let pprFinal = 0
        if (this.fullGLSPAvg) {
          let tempFullGLSP = +this.fullGLSPAvg * 2;
          let pprTempTwo = +pprTempOne + +tempFullGLSP;
          pprFinal = +(pprTempTwo / 4).toFixed(1);
        } else {
          let pprTempTwo = +pprTempOne;
          pprFinal = +(pprTempTwo / 2).toFixed(1);
        }
        this.appFullProjectedPoints = +pprFinal;
        //
        // TEP
        //
        let amountToAdd =
          +this.fourForFourFullPPRProjectedPoints -
          +this.fourForFourHalfPPRProjectedPoints;
        let fourForFourTEPPPRProjectedPoints =
          +this.fourForFourFullPPRProjectedPoints + +amountToAdd;

        let tepTempOne = +(this.fourForFourTEPProjectedPoints * 2).toFixed(1);
        let tepFinal = 0
        if (this.TEPGLSPAvg) {
          let tempTEPGLSP = +this.TEPGLSPAvg * 2;

          let tepTempTwo = +tepTempOne + +tempTEPGLSP;
          tepFinal = +(tepTempTwo / 4).toFixed(1);
        } else {
          let tepTempTwo = +tepTempOne;
          tepFinal = +(tepTempTwo / 2).toFixed(1);
        }
        this.appTEPProjectedPoints = +tepFinal;
      }

      //
      //
      //weeks 5-18
      //
      //
      if (this.curWeek > 4) {
        //
        //
        // setting percentDifferenceProjectedTargetsComparedToLastFiveWeeks
        if (
          this.projectedReceptions4for4 &&
          this.receptionsPerGameLastFiveWeeks
        ) {
          this.percentDifferenceProjectedTargetsComparedToLastFiveWeeks = +(
            this.projectedReceptions4for4 / this.receptionsPerGameLastFiveWeeks
          ).toFixed(2);
          // console.log(
          //   this.name,
          //   this.projectedReceptions4for4,
          //   this.receptionsPerGameLastFiveWeeks
          // );
        } else {
          // console.log(
          //   this.name,
          //   this.projectedReceptions4for4,
          //   this.receptionsPerGameLastFiveWeeks
          // );
          this.percentDifferenceProjectedTargetsComparedToLastFiveWeeks = 1;
        }
        if (
          this.percentDifferenceProjectedTargetsComparedToLastFiveWeeks < 0.25
        ) {
          this.percentDifferenceProjectedTargetsComparedToLastFiveWeeks = 0.25;
        }
        if (
          this.percentDifferenceProjectedTargetsComparedToLastFiveWeeks > 1.5
        ) {
          this.percentDifferenceProjectedTargetsComparedToLastFiveWeeks = 1.5;
        }

        // console.log(
        //   this.name,
        //   this.receptionsPerGameLastFiveWeeks,
        //   this.projectedReceptions4for4,
        //   this.percentDifferenceProjectedTargetsComparedToLastFiveWeeks
        // );

        //
        // setting percentDifferenceQBProjectedPointsComparedToLastFiveWeeks
        if (
          this.QBAppProjectedPointsThisWeek &&
          this.QBFantasyPointsPerGameLastFiveWeeks
        ) {
          this.percentDifferenceQBProjectedPointsComparedToLastFiveWeeks = +(
            this.QBAppProjectedPointsThisWeek /
            this.QBFantasyPointsPerGameLastFiveWeeks
          ).toFixed(2);
        } else {
          this.percentDifferenceQBProjectedPointsComparedToLastFiveWeeks = +(
            this.QBAppProjectedPointsThisWeek /
            this.QBFourForFourProjectedPoints
          ).toFixed(2);
        }
        if (
          this.percentDifferenceQBProjectedPointsComparedToLastFiveWeeks < 0.26
        ) {
          this.percentDifferenceQBProjectedPointsComparedToLastFiveWeeks = 0.75;
        }
        if (
          this.percentDifferenceQBProjectedPointsComparedToLastFiveWeeks > 1.5
        ) {
          this.percentDifferenceQBProjectedPointsComparedToLastFiveWeeks = 1.5;
        }
        //
        //
        // setting percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks
        if (
          this.teamAppProjectedPointsThisWeek &&
          this.teamPointsPerGameLastFiveWeeks
        ) {
          this.percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks = +(
            this.teamAppProjectedPointsThisWeek /
            this.teamPointsPerGameLastFiveWeeks
          ).toFixed(2);
        } else {
          // console.log(this.name);
          this.percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks = 1;
        }
        if (
          this.percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks <
          0.26
        ) {
          this.percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks = 0.75;
        }
        if (
          this.percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks > 1.5
        ) {
          this.percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks = 1.5;
        }

        // console.log(
        //   this.name,
        //   this.teamAppProjectedPointsThisWeek,
        //   this.teamPointsPerGameLastFiveWeeks,
        //   this.percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks
        // );

        //
        this.thisWeeksGLSPAdjustmentPercentage = +(
          (this.percentDifferenceProjectedTargetsComparedToLastFiveWeeks +
            this.percentDifferenceQBProjectedPointsComparedToLastFiveWeeks +
            this.percentDifferenceTeamProjectedPointsComparedToLastFiveWeeks) /
          3
        ).toFixed(2);

        //
        //

        //assinging projection from GLSP
        //
        this.halfProjectionFromGLSP = +(
          +this.halfGLSPAvg * this.thisWeeksGLSPAdjustmentPercentage
        ).toFixed(1);
        this.fullProjectionFromGLSP = +(
          +this.fullGLSPAvg * this.thisWeeksGLSPAdjustmentPercentage
        ).toFixed(1);
        this.TEPProjectionFromGLSP = +(
          +this.TEPGLSPAvg * this.thisWeeksGLSPAdjustmentPercentage
        ).toFixed(1);

        //
        //

        this.appHalfProjectedPoints = +(
          (this.halfProjectionFromGLSP +
            this.fourForFourHalfPPRProjectedPoints) /
          2
        ).toFixed(1);
        //
        this.appFullProjectedPoints = +(
          (this.fullProjectionFromGLSP +
            this.fourForFourFullPPRProjectedPoints) /
          2
        ).toFixed(1);
        //
        this.appTEPProjectedPoints = +(
          (this.TEPProjectionFromGLSP + this.fourForFourTEPProjectedPoints) /
          2
        ).toFixed(1);

        // console.log(
        //   this.name,

        //   this.appHalfProjectedPoints,
        //   this.appFullProjectedPoints,
        //   this.appTEPProjectedPoints
        // );
      }
    }
  }
}

//TE1's

allTEs.forEach(function (team) {
  // console.log(team.halfGLSPAvg);
  let teObject = new TeObject(
    team.TE1.name,
    team.teamABV,
    team.curWeek,
    'TE',
    team.QBFantasyPointsPerGameLastFiveWeeks,
    team.QBAppProjectedPointsThisWeek,
    team.QBFourForFourProjectedPoints,
    team.teamPointsPerGameLastFiveWeeks,
    team.teamAppProjectedPointsThisWeek,
    team.TE1.halfGLSPAvg,
    team.TE1.fullGLSPAvg,
    team.TE1.TEPGLSPAvg,
    team.TE1.receptionsPerGameLastFiveWeeks,
    team.TE1.projectedReceptions4for4,
    team.TE1.fourForFourHalfPPRProjectedPoints,
    team.TE1.fourForFourFullPPRProjectedPoints
  );

  teObject.calcProjectedPoints();

  allTEObjectsArray.push(teObject);
});

//TE2's

allTEs.forEach(function (team) {
  let teObject = new TeObject(
    team.TE2.name,
    team.teamABV,
    team.curWeek,
    'TE',
    team.QBFantasyPointsPerGameLastFiveWeeks,
    team.QBAppProjectedPointsThisWeek,
    team.QBFourForFourProjectedPoints,
    team.teamPointsPerGameLastFiveWeeks,
    team.teamAppProjectedPointsThisWeek,
    team.TE2.halfGLSPAvg,
    team.TE2.fullGLSPAvg,
    team.TE2.TEPGLSPAvg,
    team.TE2.receptionsPerGameLastFiveWeeks,
    team.TE2.projectedReceptions4for4,
    team.TE2.fourForFourHalfPPRProjectedPoints,
    team.TE2.fourForFourFullPPRProjectedPoints
  );

  teObject.calcProjectedPoints();

  allTEObjectsArray.push(teObject);
});

// console.log(allTEObjectsArray);

/////////////////////////////////////////////////////////////////

const allTEProjectionsObjects = [];

allTEObjectsArray.forEach(function (player) {
  // console.log(player.appHalfProjectedPoints);
  class ProjectionsObject {
    constructor(
      name,
      position,
      team,
      appHalfProjectedPoints,
      appFullProjectedPoints,
      appTEPProjectedPoints
    ) {
      this.name = name;
      this.position = position;
      this.team = team;
      this.appHalfProjectedPoints = appHalfProjectedPoints;
      this.appFullProjectedPoints = appFullProjectedPoints;
      this.appTEPProjectedPoints = appTEPProjectedPoints;
    }
  }

  // console.log(player);

  if (player.name) {
    let teProjectionsObject = new ProjectionsObject(
      player.name,
      player.position,
      player.teamABV,
      player.appHalfProjectedPoints,
      player.appFullProjectedPoints,
      player.appTEPProjectedPoints
    );

    allTEProjectionsObjects.push(teProjectionsObject);
  }
});

// console.log(allTEProjectionsObjects);

module.exports = allTEProjectionsObjects;
