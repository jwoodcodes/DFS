const allTEs = require('../teamandpositionvariables/allTEVariables');
const terawdata = require('../teamandpostionsrawdata/terawdata');
const gameInfo = require('../teamandpostionsrawdata/gameinfo');

const allTETotalScores = [];
const allTEVTTs = [];
const allTEHighProjectedTargetsBonus = [];
const allTEPPRPointsPerGameLastThreeGamesPlayed = [];
const allTEProjectedReceptions = [];

const allTEObjectsArray = [];

const propsTEData = require('./tePropsDataFetcher')

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
  calcProjectedPoints(
    carries,
    rushYards,
    rushTDs,
    recs,
    recYards,
    recTDs,
    rush1Ds,
    rec1Ds
  ) {
    let ranNum = (Math.random() * 1.5 - 0.75).toFixed(1);
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
          final = +(+tempTwo / 3).toFixed(1);
          final = +(+final + +ranNum).toFixed(1);
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
          pprFinal = +(+pprTempTwo / 3).toFixed(1);
          pprFinal = +(+pprFinal + +ranNum).toFixed(1);
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
          tepFinal = +(+tepTempTwo / 3).toFixed(1);
          tepFinal = +(+tepFinal + +ranNum).toFixed(1);
        }
        this.appTEPProjectedPoints = +tepFinal;
      }

      //
      //
      // weeks 3 and 4
      //
      //
      if (this.curWeek > 2 && this.curWeek < 5) {
        // half PPR
        //

        let tempOne = +(this.fourForFourHalfPPRProjectedPoints * 2).toFixed(1);
        let final = 0;
        if (this.halfGLSPAvg) {
          let tempGLSP = +this.halfGLSPAvg * 2;
          let tempTwo = +tempOne + +tempGLSP;
          final = +(tempTwo / 4).toFixed(1);
        } else {
          let tempTwo = +tempOne;
          final = +(+tempTwo / 2).toFixed(1);
          final = +(+final + +ranNum).toFixed(1);
        }
        this.appHalfProjectedPoints = +final;

        //
        //Full PPR
        //
        let pprTempOne = +(this.fourForFourFullPPRProjectedPoints * 2).toFixed(
          1
        );
        let pprFinal = 0;
        if (this.fullGLSPAvg) {
          let tempFullGLSP = +this.fullGLSPAvg * 2;
          let pprTempTwo = +pprTempOne + +tempFullGLSP;
          pprFinal = +(pprTempTwo / 4).toFixed(1);
        } else {
          let pprTempTwo = +pprTempOne;
          pprFinal = +(+pprTempTwo / 2).toFixed(1);
          pprFinal = +(+pprFinal + +ranNum).toFixed(1);
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
        let tepFinal = 0;
        if (this.TEPGLSPAvg) {
          let tempTEPGLSP = +this.TEPGLSPAvg * 2;

          let tepTempTwo = +tepTempOne + +tempTEPGLSP;
          tepFinal = +(tepTempTwo / 4).toFixed(1);
        } else {
          let tepTempTwo = +tepTempOne;
          tepFinal = +(+tepTempTwo / 2).toFixed(1);
          tepFinal = +(+tepFinal + +ranNum).toFixed(1);
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
    // console.log(this.name, this.appFullProjectedPoints)

    // console.log(this.name, carries)
    // console.log(this.name, rushYards)
    // console.log(this.name, rushTDs)
    // console.log(this.name, recs)
    // console.log(this.name, recYards)
    // console.log(this.name, recTDs)
    // console.log(this.name, rush1Ds)
    // console.log(this.name, rec1Ds)

    this.appProjectedCarriesThisWeek = +carries;
    this.appProjectedrushYardsThisWeek = +rushYards;
    this.appProjectedrushTDsThisWeek = +rushTDs;
    this.appProjectedreceptionsThisWeek = +recs;
    this.appProjectedrecYardsThisWeek = +recYards;
    this.appProjectedrecTDsThisWeek = +recTDs;
    this.appProjectedrushFirstDownsThisWeek = +rush1Ds;
    this.appProjectedrecFirstDownsThisWeek = +rec1Ds;

    let halfPercentDifference = +(
      +this.appHalfProjectedPoints / +this.fourForFourHalfPPRProjectedPoints
    ).toFixed(2);
    let fullPercentDifference = +(
      +this.appFullProjectedPoints / +this.fourForFourFullPPRProjectedPoints
    ).toFixed(2);
    let differenceToUse = +(
      (+halfPercentDifference + +fullPercentDifference) /
      2
    ).toFixed(2);

    // console.log(this.playerName, differenceToUse);

    let carriesDifferenceToUse = differenceToUse;

    if (differenceToUse < 0.92) {
      differenceToUse = 0.92;
    }

    // console.log(this.playerName, this.appHalfProjectedPoints)
    // console.log(this.playerName, fullPercentDifference)
    // console.log(this.playerName, halfPercentDifference, fullPercentDifference, differenceToUse)

    this.appProjectedCarriesThisWeek = +(
      +this.appProjectedCarriesThisWeek * +differenceToUse
    ).toFixed(1);
    this.appProjectedrushYardsThisWeek = +(
      +this.appProjectedrushYardsThisWeek * +differenceToUse
    ).toFixed(1);
    this.appProjectedrushTDsThisWeek = +(
      +this.appProjectedrushTDsThisWeek * +differenceToUse
    ).toFixed(1);
    this.appProjectedreceptionsThisWeek = +(
      +this.appProjectedreceptionsThisWeek * +differenceToUse
    ).toFixed(1);
    this.appProjectedrecYardsThisWeek = +(
      +this.appProjectedrecYardsThisWeek * +differenceToUse
    ).toFixed(1);
    this.appProjectedrecTDsThisWeek = +(
      +this.appProjectedrecTDsThisWeek * +differenceToUse +
      0.06
    ).toFixed(1);
    this.appProjectedrushFirstDownsThisWeek = +(
      +this.appProjectedrushFirstDownsThisWeek * +differenceToUse
    ).toFixed(1);
    this.appProjectedrecFirstDownsThisWeek = +(
      +this.appProjectedrecFirstDownsThisWeek * +differenceToUse
    ).toFixed(1);
    this.appProjectedRBTotalFirstDownsThisWeek = +(
      this.appProjectedrushFirstDownsThisWeek +
      this.appProjectedrecFirstDownsThisWeek
    ).toFixed(1);

    this.astroHalfWRProjection = +(
      +this.appProjectedrushYardsThisWeek * 0.1 +
      +(+this.appProjectedrushTDsThisWeek * 6) +
      +(+this.appProjectedrecYardsThisWeek * 0.1) +
      +(+this.appProjectedrecTDsThisWeek * 6) +
      +this.appProjectedreceptionsThisWeek * 0.5
    ).toFixed(1);

    this.astroFullWRProjection = +(
      +this.appProjectedrushYardsThisWeek * 0.1 +
      +(+this.appProjectedrushTDsThisWeek * 6) +
      +(+this.appProjectedrecYardsThisWeek * 0.1) +
      +(+this.appProjectedrecTDsThisWeek * 6) +
      +this.appProjectedreceptionsThisWeek * 1
    ).toFixed(1);

    if (this.astroHalfWRProjection && this.astroFullWRProjection) {
      this.appHalfProjectedPoints = +(
        (+this.appHalfProjectedPoints + +this.astroHalfWRProjection) /
        2
      ).toFixed(1);
      this.appFullProjectedPoints = +(
        (+this.appFullProjectedPoints + +this.astroFullWRProjection) /
        2
      ).toFixed(1);
    }

    // console.log(this);

    // console.log(
    //   this.name,
    //   this.appHalfProjectedPoints,
    //   this.fourForFourHalfPPRProjectedPoints
    // );
    // console.log(
    //   this.name,
    //   this.appFullProjectedPoints,
    //   this.fourForFourFullPPRProjectedPoints
    // );
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

  //   projectedRecfirstDownsThisWeek: 0.4

  // console.log(team.TE1.name, team.TE1.projectedRecfirstDownsThisWeek)

  teObject.calcProjectedPoints(
    team.TE1.projectedCarriesThisWeek,
    team.TE1.projectedRushYardsThisWeek,
    team.TE1.projectedRushTDsThisWeek,
    team.TE1.projectedReceptionsThisWeek,
    team.TE1.projectedRecYardsThisWeek,
    team.TE1.projectedRecTDsThisWeek,
    team.TE1.projectedRushfirstDownsThisWeek,
    team.TE1.projectedRecfirstDownsThisWeek
  );

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

  teObject.calcProjectedPoints(
    team.TE2.projectedCarriesThisWeek,
    team.TE2.projectedRushYardsThisWeek,
    team.TE2.projectedRushTDsThisWeek,
    team.TE2.projectedReceptionsThisWeek,
    team.TE2.projectedRecYardsThisWeek,
    team.TE2.projectedRecTDsThisWeek,
    team.TE2.projectedRushfirstDownsThisWeek,
    team.TE2.projectedRecfirstDownsThisWeek
  );

  allTEObjectsArray.push(teObject);
});

// console.log(allTEObjectsArray);

/////////////////////////////////////////////////////////////////

// const allTEProjectionsObjects = [];

async function propsData() {
 const allTEProjectionsObjects = [];
  const propsData = await propsTEData();
  
  propsData.forEach(function (player) {
    // console.log(player)
  

  allTEObjectsArray.forEach(function (te) {
      // console.log(te);
      // console.log(player.TE1)



      //
      //
      //                                            TE One
      //
      //

      if(te.name === player.TE1.name) {
        // console.log(te.name, player.market, player.line);
        // console.log(te)
        // console.log(player.TE1)

        te.prjReceptions = player.TE1.projectedReceptionsThisWeek;
        te.prjReceivingYards = player.TE1.projectedRecYardsThisWeek;
        te.prjReceivingTDs = player.TE1.projectedRecTDsThisWeek;
        // wr.astroHalfWRProjection = player.WROne.astroHalfWRProjection;
        // wr.astroFullWRProjection = player.WROne.astroFullWRProjection;
        
      
       
        te.udReceptionsProp = { prop: player.TE1.udReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        te.ppReceptionsProp = { prop: player.TE1.ppReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        te.udReceivingYardsProp = { prop: player.TE1.udRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
        te.ppReceivingYardsProp = { prop: player.TE1.ppRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
   
        te.udFantasyScoreProp = { prop: player.TE1.udFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };
        te.ppFantasyScoreProp = { prop: player.TE1.ppFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };

        // console.log(te.name, te.ppFantasyScoreProp)
        // console.log(te)

        //                                       
        //

               //
        //                                        Receptions
        //

           

           //                                             under
           //

           //normal

            //  console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            //  console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            if(te.udReceptionsProp.prop - te.prjReceptions  > .2 && te.udReceptionsProp.prop - te.appProjectedreceptionsThisWeek  > .2) {      
              te.udReceptionsProp.isUnderRecomended = true
              // console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
            if(te.ppReceptionsProp.prop - te.prjReceptions > .2 && te.ppReceptionsProp.prop - te.appProjectedreceptionsThisWeek > .2) {      
              te.ppReceptionsProp.isUnderRecomended = true
              // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
    
              //                                            test
    
              if(te.udReceptionsProp.prop - te.appProjectedreceptionsThisWeek  > .4) {      
                te.udReceptionsProp.TESTisUnderRecomended = true
                // console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
              if(te.ppReceptionsProp.prop - te.appProjectedreceptionsThisWeek > .4) {      
                te.ppReceptionsProp.TESTisUnderRecomended = true
                // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
    
               // high confidence
    
               if(te.udReceptionsProp.prop - te.prjReceptions  > .4 && te.udReceptionsProp.prop - te.appProjectedreceptionsThisWeek > .4) {      
                te.udReceptionsProp.highUnderConfidence = true
                //  console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
              if(te.ppReceptionsProp.prop - te.prjReceptions  > .4 && te.ppReceptionsProp.prop - te.appProjectedreceptionsThisWeek > .4) {      
                te.ppReceptionsProp.highUnderConfidence = true
                // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            if(te.prjReceptions - te.udReceptionsProp.prop > .5 && te.appProjectedreceptionsThisWeek - te.udReceptionsProp.prop > .5) {      
              te.udReceptionsProp.isOverRecomended = true
              // console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
            if(te.prjReceptions - te.ppReceptionsProp.prop > .5 && te.appProjectedreceptionsThisWeek - te.ppReceptionsProp.prop > .5) {      
              te.ppReceptionsProp.isOverRecomended = true
              // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
    
            //                                                    Test
    
            if(te.appProjectedreceptionsThisWeek - te.udReceptionsProp.prop > .8) {      
              te.udReceptionsProp.isTESTOverRecomended = true
              // console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
            if(te.appProjectedreceptionsThisWeek - te.ppReceptionsProp.prop > .8) {      
              te.ppReceptionsProp.isTESTOverRecomended = true
              // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
    
               // high confidence
    
               if(te.prjReceptions - te.udReceptionsProp.prop > .8 && te.appProjectedreceptionsThisWeek - te.udReceptionsProp.prop > .8) {      
                te.udReceptionsProp.highOverConfidence = true
                //  console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
              if(te.prjReceptions - te.ppReceptionsProp.prop > .8 && te.appProjectedreceptionsThisWeek - te.ppReceptionsProp.prop > .8) {      
                te.ppReceptionsProp.highOverConfidence = true
                // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }


              //
               //                                       Rec Yards
        //

           

           //                                             under
           //

           //normal

            //  console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            //  console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            if(te.udReceivingYardsProp.prop - te.prjReceivingYards  > .5 && te.udReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek  > .5) {      
              te.udReceivingYardsProp.isUnderRecomended = true
              // console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
            if(te.ppReceivingYardsProp.prop - te.prjReceivingYards > .5 && te.ppReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek > .5) {      
              te.ppReceivingYardsProp.isUnderRecomended = true
              // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
    
              //                                            test
    
              if(te.udReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek  > .8) {      
                te.udReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
              if(te.ppReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek > .8) {      
                te.ppReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
    
               // high confidence
    
               if(te.udReceivingYardsProp.prop - te.prjReceivingYards  > 1 && te.udReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek > 1) {      
                te.udReceivingYardsProp.highUnderConfidence = true
                //  console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
              if(te.ppReceivingYardsProp.prop - te.prjReceivingYards  > 1 && te.ppReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek > 1) {      
                te.ppReceivingYardsProp.highUnderConfidence = true
                // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            if(te.prjReceivingYards - te.udReceivingYardsProp.prop > 10 && te.appProjectedrecYardsThisWeek - te.udReceivingYardsProp.prop > 10) {      
              te.udReceivingYardsProp.isOverRecomended = true
              // console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
            if(te.prjReceivingYards - te.ppReceivingYardsProp.prop > 10 && te.appProjectedrecYardsThisWeek - te.ppReceivingYardsProp.prop > 10) {      
              te.ppReceivingYardsProp.isOverRecomended = true
              // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
    
            //                                                    Test
    
            if(te.appProjectedrecYardsThisWeek - te.udReceivingYardsProp.prop > 12) {      
              te.udReceivingYardsProp.isTEStOverRecomended = true
              // console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
            if(te.appProjectedrecYardsThisWeek - te.ppReceivingYardsProp.prop > 12) {      
              te.ppReceivingYardsProp.isTEStOverRecomended = true
              // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
    
               // high confidence
    
               if(te.prjReceivingYards - te.udReceivingYardsProp.prop > 15 && te.appProjectedrecYardsThisWeek - te.udReceivingYardsProp.prop > 15) {      
                te.udReceivingYardsProp.highOverConfidence = true
                //  console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
              if(te.prjReceivingYards - te.ppReceivingYardsProp.prop > 15 && te.appProjectedrecYardsThisWeek - te.ppReceptionsProp.prop > 15) {      
                te.ppReceivingYardsProp.highOverConfidence = true
                // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }


              //
              
              //
               //                                       Fantasy Score
        //

           

           //                                             under
           //

           //normal

            //  console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            //  console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            if(te.udFantasyScoreProp.prop - te.fourForFourHalfPPRProjectedPoints  > 1.5 && te.udFantasyScoreProp.prop - te.astroHalfWRProjection  > 1.5) {      
              te.udFantasyScoreProp.isUnderRecomended = true
              // console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
            if(te.ppFantasyScoreProp.prop - te.fourForFourHalfPPRProjectedPoints > 1.5 && te.ppFantasyScoreProp.prop - te.astroHalfWRProjection > 1.5) {      
              te.ppFantasyScoreProp.isUnderRecomended = true
              // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
    
              //                                            test
    
              if(te.udFantasyScoreProp.prop - te.astroHalfWRProjection  > 2) {      
                te.udFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
              if(te.ppFantasyScoreProp.prop - te.astroHalfWRProjection > 2) {      
                te.ppFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
    
               // high confidence
    
               if(te.udFantasyScoreProp.prop - te.fourForFourHalfPPRProjectedPoints  > 2.5 && te.udFantasyScoreProp.prop - te.astroHalfWRProjection > 2.5) {      
                te.udFantasyScoreProp.highUnderConfidence = true
                //  console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
              if(te.ppFantasyScoreProp.prop - te.fourForFourHalfPPRProjectedPoints  > 2.5 && te.ppFantasyScoreProp.prop - te.astroHalfWRProjection > 2.5) {      
                te.ppFantasyScoreProp.highUnderConfidence = true
                // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            if(te.fourForFourHalfPPRProjectedPoints - te.udFantasyScoreProp.prop > 1.25 && te.astroHalfWRProjection - te.udFantasyScoreProp.prop > 1.25) {      
              te.udFantasyScoreProp.isOverRecomended = true
              // console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
            if(te.fourForFourHalfPPRProjectedPoints - te.ppFantasyScoreProp.prop > 1.25 && te.astroHalfWRProjection - te.ppFantasyScoreProp.prop > 1.25) {      
              te.ppFantasyScoreProp.isOverRecomended = true
              // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
    
            //                                                    Test
    
            if(te.astroHalfWRProjection - te.udFantasyScoreProp.prop > 2.5) {      
              te.udFantasyScoreProp.isTESTOverRecomended = true
              // console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
            if(te.astroHalfWRProjection - te.ppFantasyScoreProp.prop > 2.5) {      
              te.ppFantasyScoreProp.isTESTOverRecomended = true
              // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
    
               // high confidence
    
               if(te.fourForFourHalfPPRProjectedPoints - te.udFantasyScoreProp.prop > 2.5 && te.astroHalfWRProjection - te.udFantasyScoreProp.prop > 2.5) {      
                te.udFantasyScoreProp.highOverConfidence = true
                //  console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
              if(te.fourForFourHalfPPRProjectedPoints - te.ppFantasyScoreProp.prop > 2.5&& te.astroHalfWRProjection - te.ppReceptionsProp.prop > 2.5) {      
                te.ppFantasyScoreProp.highOverConfidence = true
                // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }

        // console.log(te)
      }


      //
      //
      //
      //                                            TE Two          
      //
      //

      if(te.name === player.TE2.name) {
        // console.log(te.name, player.market, player.line);
        // console.log(te)
        // console.log(player.TE2)

        te.prjReceptions = player.TE2.projectedReceptionsThisWeek;
        te.prjReceivingYards = player.TE2.projectedRecYardsThisWeek;
        te.prjReceivingTDs = player.TE2.projectedRecTDsThisWeek;
        // wr.astroHalfWRProjection = player.WROne.astroHalfWRProjection;
        // wr.astroFullWRProjection = player.WROne.astroFullWRProjection;
        
      
       
        te.udReceptionsProp = { prop: player.TE2.udReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        te.ppReceptionsProp = { prop: player.TE2.ppReceptionsProp, isOverRecomended: false, isUnderRecomended: false };
        te.udReceivingYardsProp = { prop: player.TE2.udRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
        te.ppReceivingYardsProp = { prop: player.TE2.ppRecYardsProp, isOverRecomended: false, isUnderRecomended: false };
   
        te.udFantasyScoreProp = { prop: player.TE2.udFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };
        te.ppFantasyScoreProp = { prop: player.TE2.ppFantasyScoreProp, isOverRecomended: false, isUnderRecomended: false };

        // console.log(te.name, te.ppFantasyScoreProp)
        // console.log(te)

        //                                       
        //

               //
        //                                        Receptions
        //

           

           //                                             under
           //

           //normal

            //  console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            //  console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            if(te.udReceptionsProp.prop - te.prjReceptions  > .2 && te.udReceptionsProp.prop - te.appProjectedreceptionsThisWeek  > .2) {      
              te.udReceptionsProp.isUnderRecomended = true
              // console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
            if(te.ppReceptionsProp.prop - te.prjReceptions > .2 && te.ppReceptionsProp.prop - te.appProjectedreceptionsThisWeek > .2) {      
              te.ppReceptionsProp.isUnderRecomended = true
              // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
    
              //                                            test
    
              if(te.udReceptionsProp.prop - te.appProjectedreceptionsThisWeek  > .4) {      
                te.udReceptionsProp.TESTisUnderRecomended = true
                // console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
              if(te.ppReceptionsProp.prop - te.appProjectedreceptionsThisWeek > .4) {      
                te.ppReceptionsProp.TESTisUnderRecomended = true
                // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
    
               // high confidence
    
               if(te.udReceptionsProp.prop - te.prjReceptions  > .4 && te.udReceptionsProp.prop - te.appProjectedreceptionsThisWeek > .4) {      
                te.udReceptionsProp.highUnderConfidence = true
                //  console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
              if(te.ppReceptionsProp.prop - te.prjReceptions  > .4 && te.ppReceptionsProp.prop - te.appProjectedreceptionsThisWeek > .4) {      
                te.ppReceptionsProp.highUnderConfidence = true
                // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            if(te.prjReceptions - te.udReceptionsProp.prop > .5 && te.appProjectedreceptionsThisWeek - te.udReceptionsProp.prop > .5) {      
              te.udReceptionsProp.isOverRecomended = true
              // console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
            if(te.prjReceptions - te.ppReceptionsProp.prop > .5 && te.appProjectedreceptionsThisWeek - te.ppReceptionsProp.prop > .5) {      
              te.ppReceptionsProp.isOverRecomended = true
              // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
    
            //                                                    Test
    
            if(te.appProjectedreceptionsThisWeek - te.udReceptionsProp.prop > .8) {      
              te.udReceptionsProp.isTESTOverRecomended = true
              // console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
            if(te.appProjectedreceptionsThisWeek - te.ppReceptionsProp.prop > .8) {      
              te.ppReceptionsProp.isTESTOverRecomended = true
              // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
            }
    
               // high confidence
    
               if(te.prjReceptions - te.udReceptionsProp.prop > .8 && te.appProjectedreceptionsThisWeek - te.udReceptionsProp.prop > .8) {      
                te.udReceptionsProp.highOverConfidence = true
                //  console.log(te.name, te.udReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }
              if(te.prjReceptions - te.ppReceptionsProp.prop > .8 && te.appProjectedreceptionsThisWeek - te.ppReceptionsProp.prop > .8) {      
                te.ppReceptionsProp.highOverConfidence = true
                // console.log(te.name, te.ppReceptionsProp.prop, te.appProjectedreceptionsThisWeek, te.prjReceptions )
              }


              //
               //                                       Rec Yards
        //

           

           //                                             under
           //

           //normal

            //  console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            //  console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            if(te.udReceivingYardsProp.prop - te.prjReceivingYards  > .5 && te.udReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek  > .5) {      
              te.udReceivingYardsProp.isUnderRecomended = true
              // console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
            if(te.ppReceivingYardsProp.prop - te.prjReceivingYards > .5 && te.ppReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek > .5) {      
              te.ppReceivingYardsProp.isUnderRecomended = true
              // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
    
              //                                            test
    
              if(te.udReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek  > .8) {      
                te.udReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
              if(te.ppReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek > .8) {      
                te.ppReceivingYardsProp.TESTisUnderRecomended = true
                // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
    
               // high confidence
    
               if(te.udReceivingYardsProp.prop - te.prjReceivingYards  > 1 && te.udReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek > 1) {      
                te.udReceivingYardsProp.highUnderConfidence = true
                //  console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
              if(te.ppReceivingYardsProp.prop - te.prjReceivingYards  > 1 && te.ppReceivingYardsProp.prop - te.appProjectedrecYardsThisWeek > 1) {      
                te.ppReceivingYardsProp.highUnderConfidence = true
                // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            if(te.prjReceivingYards - te.udReceivingYardsProp.prop > 10 && te.appProjectedrecYardsThisWeek - te.udReceivingYardsProp.prop > 10) {      
              te.udReceivingYardsProp.isOverRecomended = true
              // console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
            if(te.prjReceivingYards - te.ppReceivingYardsProp.prop > 10 && te.appProjectedrecYardsThisWeek - te.ppReceivingYardsProp.prop > 10) {      
              te.ppReceivingYardsProp.isOverRecomended = true
              // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
    
            //                                                    Test
    
            if(te.appProjectedrecYardsThisWeek - te.udReceivingYardsProp.prop > 12) {      
              te.udReceivingYardsProp.isTEStOverRecomended = true
              // console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
            if(te.appProjectedrecYardsThisWeek - te.ppReceivingYardsProp.prop > 12) {      
              te.ppReceivingYardsProp.isTEStOverRecomended = true
              // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
            }
    
               // high confidence
    
               if(te.prjReceivingYards - te.udReceivingYardsProp.prop > 15 && te.appProjectedrecYardsThisWeek - te.udReceivingYardsProp.prop > 15) {      
                te.udReceivingYardsProp.highOverConfidence = true
                //  console.log(te.name, te.udReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }
              if(te.prjReceivingYards - te.ppReceivingYardsProp.prop > 15 && te.appProjectedrecYardsThisWeek - te.ppReceptionsProp.prop > 15) {      
                te.ppReceivingYardsProp.highOverConfidence = true
                // console.log(te.name, te.ppReceivingYardsProp.prop, te.appProjectedrecYardsThisWeek, te.prjReceivingYards )
              }


              //
              
              //
               //                                       Fantasy Score
        //

           

           //                                             under
           //

           //normal

            //  console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            //  console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            if(te.udFantasyScoreProp.prop - te.fourForFourHalfPPRProjectedPoints  > 1.5 && te.udFantasyScoreProp.prop - te.astroHalfWRProjection  > 1.5) {      
              te.udFantasyScoreProp.isUnderRecomended = true
              // console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
            if(te.ppFantasyScoreProp.prop - te.fourForFourHalfPPRProjectedPoints > 1.5 && te.ppFantasyScoreProp.prop - te.astroHalfWRProjection > 1.5) {      
              te.ppFantasyScoreProp.isUnderRecomended = true
              // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
    
              //                                            test
    
              if(te.udFantasyScoreProp.prop - te.astroHalfWRProjection  > 2) {      
                te.udFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
              if(te.ppFantasyScoreProp.prop - te.astroHalfWRProjection > 2) {      
                te.ppFantasyScoreProp.TESTisUnderRecomended = true
                // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
    
               // high confidence
    
               if(te.udFantasyScoreProp.prop - te.fourForFourHalfPPRProjectedPoints  > 2.5 && te.udFantasyScoreProp.prop - te.astroHalfWRProjection > 2.5) {      
                te.udFantasyScoreProp.highUnderConfidence = true
                //  console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
              if(te.ppFantasyScoreProp.prop - te.fourForFourHalfPPRProjectedPoints  > 2.5 && te.ppFantasyScoreProp.prop - te.astroHalfWRProjection > 2.5) {      
                te.ppFantasyScoreProp.highUnderConfidence = true
                // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
    
    
    
               //                                              over
               //
    
               //normal
    
              //  console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            if(te.fourForFourHalfPPRProjectedPoints - te.udFantasyScoreProp.prop > 1.25 && te.astroHalfWRProjection - te.udFantasyScoreProp.prop > 1.25) {      
              te.udFantasyScoreProp.isOverRecomended = true
              // console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
            if(te.fourForFourHalfPPRProjectedPoints - te.ppFantasyScoreProp.prop > 1.25 && te.astroHalfWRProjection - te.ppFantasyScoreProp.prop > 1.25) {      
              te.ppFantasyScoreProp.isOverRecomended = true
              // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
    
            //                                                    Test
    
            if(te.astroHalfWRProjection - te.udFantasyScoreProp.prop > 2.5) {      
              te.udFantasyScoreProp.isTESTOverRecomended = true
              // console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
            if(te.astroHalfWRProjection - te.ppFantasyScoreProp.prop > 2.5) {      
              te.ppFantasyScoreProp.isTESTOverRecomended = true
              // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
            }
    
               // high confidence
    
               if(te.fourForFourHalfPPRProjectedPoints - te.udFantasyScoreProp.prop > 2.5 && te.astroHalfWRProjection - te.udFantasyScoreProp.prop > 2.5) {      
                te.udFantasyScoreProp.highOverConfidence = true
                //  console.log(te.name, te.udFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }
              if(te.fourForFourHalfPPRProjectedPoints - te.ppFantasyScoreProp.prop > 2.5&& te.astroHalfWRProjection - te.ppReceptionsProp.prop > 2.5) {      
                te.ppFantasyScoreProp.highOverConfidence = true
                // console.log(te.name, te.ppFantasyScoreProp.prop, te.astroHalfWRProjection, te.fourForFourHalfPPRProjectedPoints )
              }

        // console.log(te)
      }

 

  
  class ProjectionsObject {
    constructor(
      name,
      position,
      team,

      appProjectedCarriesThisWeek,
      appProjectedrushYardsThisWeek,
      appProjectedrushTDsThisWeek,
      appProjectedreceptionsThisWeek,
      appProjectedrecYardsThisWeek,
      appProjectedrecTDsThisWeek,
      appProjectedrushFirstDownsThisWeek,
      appProjectedrecFirstDownsThisWeek,
      appProjectedRBTotalFirstDownsThisWeek,
      astroHalfWRProjection,
      astroFullWRProjection,

      udReceptionsProp,
      ppReceptionsProp,
      udReceivingYardsProp,
      ppReceivingYardsProp,
 
      udFantasyScoreProp,
      ppFantasyScoreProp,

      appHalfProjectedPoints,
      appFullProjectedPoints,
      appTEPProjectedPoints
    ) {
      this.name = name;
      this.position = position;
      this.team = team;

      this.appProjectedCarriesThisWeek = +appProjectedCarriesThisWeek;
      this.appProjectedrushYardsThisWeek = +appProjectedrushYardsThisWeek;
      this.appProjectedrushTDsThisWeek = +appProjectedrushTDsThisWeek;
      this.appProjectedreceptionsThisWeek = +appProjectedreceptionsThisWeek;
      this.appProjectedrecYardsThisWeek = +appProjectedrecYardsThisWeek;
      this.appProjectedrecTDsThisWeek = +appProjectedrecTDsThisWeek;
      this.appProjectedrushFirstDownsThisWeek =
        +appProjectedrushFirstDownsThisWeek;
      this.appProjectedrecFirstDownsThisWeek =
        +appProjectedrecFirstDownsThisWeek;
      this.appProjectedRBTotalFirstDownsThisWeek =
        +appProjectedRBTotalFirstDownsThisWeek;

      this.astroHalfWRProjection = +astroHalfWRProjection;

      this.astroFullWRProjection = +astroFullWRProjection;

      this.udReceptionsProp = udReceptionsProp;
      this.ppReceptionsProp =   ppReceptionsProp;
      this.udReceivingYardsProp = udReceivingYardsProp;
      this.ppReceivingYardsProp = ppReceivingYardsProp;
 
      this.udFantasyScoreProp = udFantasyScoreProp;
      this.ppFantasyScoreProp = ppFantasyScoreProp;

      

      this.appHalfProjectedPoints = appHalfProjectedPoints;
      this.appFullProjectedPoints = appFullProjectedPoints;
      this.appTEPProjectedPoints = appTEPProjectedPoints;
    }
  }

  // console.log(te);

  
    let teProjectionsObject = new ProjectionsObject(
      te.name,
      te.position,
      te.teamABV,

      +te.appProjectedCarriesThisWeek,
      +te.appProjectedrushYardsThisWeek,
      +te.appProjectedrushTDsThisWeek,
      +te.appProjectedreceptionsThisWeek,
      +te.appProjectedrecYardsThisWeek,
      +te.appProjectedrecTDsThisWeek,
      +te.appProjectedrushFirstDownsThisWeek,
      +te.appProjectedrecFirstDownsThisWeek,
      +te.appProjectedRBTotalFirstDownsThisWeek,

      +te.astroHalfWRProjection,
      +te.astroFullWRProjection,

      te.udReceptionsProp,
      te.ppReceptionsProp,
      te.udReceivingYardsProp,
      te.ppReceivingYardsProp,
 
      te.udFantasyScoreProp,
      te.ppFantasyScoreProp,

      te.appHalfProjectedPoints,
      te.appFullProjectedPoints,
      te.appTEPProjectedPoints
    );
    // console.log(teProjectionsObject)
    allTEProjectionsObjects.push(teProjectionsObject);
  
  // console.log(allTEProjectionsObjects)
});

})

return allTEProjectionsObjects;
}

// Don't just call propsData() without handling the Promise
// propsData();

// Export the async function and the data separately
module.exports = {
  allTEData: [], // Initial empty array that will be populated
  allTEProjectionsObjects: propsData // Export the async function
};

// Execute the function and update allTEData when data is ready
propsData().then(data => {
  module.exports.allTEData = data;
});
