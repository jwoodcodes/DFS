const allQBData = require('./qbValuesCalcs');
const allRBData = require('./rbValuesCalcs');
const allWRData = require('./wrValuesCalcs');
const allTEData = require('./teValuesCalcs');
const allQBs = require('../teamandpositionvariables/allQBVariables');
const allRBs = require('../teamandpositionvariables/allRBVariables');
const allWRs = require('../teamandpositionvariables/allWRVariables');
const allTEs = require('../teamandpositionvariables/allTEVariables');

const QBWROneSingleStackData = require('./stackingValuesCalcs/bestQBWROneStacks');

const allTeamsBestHalfSingleStackWithQB = [];
const allTeamsBestHalfSingleStackWithQBWithNames = [];

const allTeamsBestPPRSingleStackWithQB = [];
const allTeamsBestPPRSingleStackWithQBWithNames = [];

const allTEPremiumBestSingleStackWithQB = [];
const allTEPremiumBestSingleStackWithQBWithNames = [];

const allTeamsBestHalfDoubleStackWithQBAndWROne = [];
const allTeamsBestHalfDoubleStackWithQBAndWROneWithNames = [];

const allTeamsBestPPRDoubleStackWithQBAndWROne = [];
const allTeamsBestPPRDoubleStackWithQBAndWROneWithNames = [];

const allTEPremiumBestDoubleStackWithQBAndWROne = [];
const allTEPremiumBestDoubleStackWithQBAndWROneWithNames = [];

const allTeamsBestHalfTripleStackWithQBAndWROne = [];
const allTeamsBestHalfTripleStackWithQBAndWROneWithNames = [];

const allTeamsBestPPRTripleStackWithQBAndWROne = [];
const allTeamsBestPPRTripleStackWithQBAndWROneWithNames = [];

const allTEPremiumBestTripleStackWithQBAndWROne = [];
const allTEPremiumBestTripleStackWithQBAndWROneWithNames = [];

const allHalfFlexValues = [];
const allPPRFlexValues = [];
const allTEPFlexValues = [];

const allHalfFlexValuesWithNames = [];
const allPPRFlexValuesWithNames = [];
const allTEPFlexValuesWithNames = [];

const allStackingCalcFuncs = {
  CalcTeamBestSingleStackWithQB(array, i) {
    // console.log(array);
    let [qb, rbOne, rbTwo, wrOne, wrTwo, te] = array;

    let qbrbOne = qb + rbOne;
    let qbrbTwo = qb + rbTwo;
    let qbwrOne = qb + wrOne;
    let qbwrTwo = qb + wrTwo;
    let qbte = qb + te;

    let qbrbOneWithNames = `${qbrbOne}: QB-RB1- ${allQBs[i].name}-${allRBs[i].RBOne.name}`;
    let qbrbTwoWithNames = `${qbrbTwo}: QB-RB2- ${allQBs[i].name}-${allRBs[i].RBTwo.name}`;
    let qbwrOneWithNames = `${qbwrOne}: QB-WR1- ${allQBs[i].name}-${allWRs[i].WROne.name}`;
    let qbwrTwoWithNames = `${qbwrTwo}: QB-WR2- ${allQBs[i].name}-${allWRs[i].WRTwo.name}`;
    let qbteWithNames = `${+qbte.toFixed(2)}: QB-TE- ${allQBs[i].name}-${
      allTEs[i].TE.name
    }`;

    let bestSingleStackWithQB = qbrbOne;
    let bestSingleStackWithQBAndNames = qbrbOneWithNames;

    //best single stack
    if (bestSingleStackWithQB < qbrbTwo) {
      bestSingleStackWithQB = qbrbTwo;
      bestSingleStackWithQBAndNames = qbrbTwoWithNames;
    }
    if (bestSingleStackWithQB < qbwrOne) {
      bestSingleStackWithQB = qbwrOne;
      bestSingleStackWithQBAndNames = qbwrOneWithNames;
    }
    if (bestSingleStackWithQB < qbwrTwo) {
      bestSingleStackWithQB = qbwrTwo;
      bestSingleStackWithQBAndNames = qbwrTwoWithNames;
    }
    if (bestSingleStackWithQB < qbte) {
      bestSingleStackWithQB = qbte;
      bestSingleStackWithQBAndNames = qbteWithNames;
    }

    if (rbOne === allRBData.allRBOneHalfPPRProjectedPointsValues[i]) {
      allTeamsBestHalfSingleStackWithQB.push(bestSingleStackWithQB);
      allTeamsBestHalfSingleStackWithQBWithNames.push(
        bestSingleStackWithQBAndNames
      );
    }
    if (
      rbOne === allRBData.allRBOneFullPPRProjectedPointsValues[i] &&
      te === allTEData.allFullTEFinalProjectedPointsValues[i]
    ) {
      allTeamsBestPPRSingleStackWithQB.push(bestSingleStackWithQB);
      allTeamsBestPPRSingleStackWithQBWithNames.push(
        bestSingleStackWithQBAndNames
      );
    }
    if (te === allTEData.allTEPremiuimFinalProjectedPointsValues[i]) {
      allTEPremiumBestSingleStackWithQB.push(bestSingleStackWithQB);
      allTEPremiumBestSingleStackWithQBWithNames.push(
        bestSingleStackWithQBAndNames
      );
    }
  },

  CalcTeamBestDoubleAndTripleStacksWithQBAndQBsWROne(array, i) {
    let [
      qb,
      rbOne,
      rbTwo,
      wrOne,
      wrTwo,
      te,
      opprbOne,
      opprbTwo,
      oppwrOne,
      oppwrTwo,
      oppte,
      oppRBOneName,
      oppRBTwoName,
      oppWROneName,
      oppWRTwoName,
      oppteName,
    ] = array;

    let qbwrone = qb + wrOne;

    let withrbOne = qbwrone + rbOne;
    let withrbTwo = qbwrone + rbTwo;
    let withwrTwo = qbwrone + wrTwo;
    let withte = qbwrone + te;
    let withopprbOne = qbwrone + opprbOne;
    let withopprbTwo = qbwrone + opprbTwo;
    let withoppwrOne = qbwrone + oppwrOne;
    let withoppwrTwo = qbwrone + oppwrTwo;
    let withoppte = qbwrone + oppte;

    /////////double stacks values with names variables

    let withrbOneWithNames = `${+withrbOne.toFixed(2)}: QB-WR1-RB1- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${allRBs[i].RBOne.name}(${rbOne})`;
    let withrbTwoWithNames = `${+withrbTwo.toFixed(2)}: QB-WR1-RB2- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${allRBs[i].RBTwo.name}(${rbTwo})`;
    let withwrTwoWithNames = `${withwrTwo.toFixed(2)}: QB-WR1-WR2- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${allWRs[i].WRTwo.name}(${wrTwo})`;
    let withteWithNames = `${+withte.toFixed(2)}: QB-WR1-TE- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${allTEs[i].TE.name}(${te})`;
    let withopprbOneWithNames = `${+withopprbOne.toFixed(2)}: QB-WR1-OPPRB1- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${oppRBOneName}(${opprbOne})`;
    let withopprbTwoWithNames = `${+withopprbTwo.toFixed(2)}: QB-WR1-OPPRB2- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${oppRBTwoName}(${opprbTwo})`;
    let withoppwrOneWithNames = `${+withoppwrOne.toFixed(2)}: QB-WR1-OPPWR1- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${oppWROneName}(${oppwrOne})`;
    let withoppwrTwoWithNames = `${+withoppwrTwo.toFixed(2)}: QB-WR1-OPPWR2- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${oppWRTwoName}(${oppwrTwo})`;
    let withoppteWithNames = `${+withoppte.toFixed(2)}: QB-WR1-OPPTE- ${
      allQBs[i].name
    }-${allWRs[i].WROne.name}-${oppteName}(${oppte})`;

    //best double stack with QB-WR1

    let bestDoubleStackWithQBWROne = withrbOne;
    let bestDoubleStackWithQBWROneAndNames = withrbOneWithNames;

    if (bestDoubleStackWithQBWROne < withrbTwo) {
      bestDoubleStackWithQBWROne = withrbTwo;
      bestDoubleStackWithQBWROneAndNames = withrbTwoWithNames;
    }
    if (bestDoubleStackWithQBWROne < withwrTwo) {
      bestDoubleStackWithQBWROne = withwrTwo;
      bestDoubleStackWithQBWROneAndNames = withwrTwoWithNames;
    }
    if (bestDoubleStackWithQBWROne < withte) {
      bestDoubleStackWithQBWROne = withte;
      bestDoubleStackWithQBWROneAndNames = withteWithNames;
    }
    if (bestDoubleStackWithQBWROne < withopprbOne) {
      bestDoubleStackWithQBWROne = withopprbOne;
      bestDoubleStackWithQBWROneAndNames = withopprbOneWithNames;
    }
    if (bestDoubleStackWithQBWROne < withopprbTwo) {
      bestDoubleStackWithQBWROne = withopprbTwo;
      bestDoubleStackWithQBWROneAndNames = withopprbTwoWithNames;
    }
    if (bestDoubleStackWithQBWROne < withoppwrOne) {
      bestDoubleStackWithQBWROne = withoppwrOne;
      bestDoubleStackWithQBWROneAndNames = withoppwrOneWithNames;
    }
    if (bestDoubleStackWithQBWROne < withoppwrTwo) {
      bestDoubleStackWithQBWROne = withoppwrTwo;
      bestDoubleStackWithQBWROneAndNames = withoppwrTwoWithNames;
    }
    if (bestDoubleStackWithQBWROne < withoppte) {
      bestDoubleStackWithQBWROne = withoppte;
      bestDoubleStackWithQBWROneAndNames = withoppteWithNames;
    }

    //////////triple stacks

    //all possible combinations in addition to the ones above for triple stacks
    //first column is the non qb non wr1 in the best double stack

    //w/RBOne + rbtwo & + wrtwo & + te & + opprbone & + opprbtwo & + oppwrone & + oppwrtwo & + oppte
    //w/RBTwo + wrtwo + te & + opprbone & + opprbtwo & + oppwrone & + oppwrtwo & + oppte
    //w/wrtwo + te & + opprbone & + opprbtwo & + oppwrone & + oppwrtwo & + oppte
    //w/te & + opprbone & + opprbtwo & + oppwrone & + oppwrtwo & + oppte
    //w/opprbone & + opprbtwo & + oppwrone & + oppwrtwo & + oppte
    //w/opprbtwo & + oppwrone & + oppwrtwo & + oppte
    //w/oppwrone & + oppwrtwo & + oppte
    //w/oppwrtwo & + oppte

    //assigning all possible triple stack combo's variables

    //variable name is the two players postions in the best triple stack that aren't the QB and QB's WR1

    let rbOneAndrbTwo = withrbOne + rbTwo;
    let rbOneAndwrTwo = withrbOne + wrTwo;
    let rbOneAndte = withrbOne + te;
    let rbOneAndopprbone = withrbOne + opprbOne;
    let rbOneAndopprbtwo = withrbOne + opprbTwo;
    let rbOneAndoppwrone = withrbOne + oppwrOne;
    let rbOneAndoppwrtwo = withrbOne + oppwrTwo;
    let rbOneAndoppte = withrbOne + oppte;
    let rbTwoAndwrTwo = withrbTwo + wrTwo;
    let rbTwoAndte = withrbTwo + te;
    let rbTwoAndopprbOne = withrbTwo + opprbOne;
    let rbTwoAndopprbTwo = withrbTwo + opprbTwo;
    let rbTwoAndoppwrOne = withrbTwo + oppwrOne;
    let rbTwoAndoppwrTwo = withrbTwo + oppwrTwo;
    let rbTwoAndoppte = withrbTwo + oppte;
    let wrTwoAndte = withwrTwo + te;
    let wrTwoAndopprbOne = withwrTwo + opprbOne;
    let wrTwoAndopprbTwo = withwrTwo + opprbTwo;
    let wrTwoAndoppwrOne = withwrTwo + oppwrOne;
    let wrTwoAndoppwrTwo = withwrTwo + oppwrTwo;
    let wrTwoAndoppte = withwrTwo + oppte;
    let teAndopprbOne = withte + opprbOne;
    let teAndopprbTwo = withte + opprbTwo;
    let teAndoppwrOne = withte + oppwrOne;
    let teAndoppwrTwo = withte + oppwrTwo;
    let teAndoppte = withte + oppte;
    let opprbOneAndopprbTwo = withopprbOne + opprbTwo;
    let opprbOneAndoppwrOne = withopprbOne + oppwrOne;
    let opprbOneAndoppwrTwo = withopprbOne + oppwrTwo;
    let opprbOneAndoppte = withopprbOne + oppte;
    let opprbTwoAndoppwrOne = withopprbTwo + oppwrOne;
    let opprbTwoAndoppwrTwo = withopprbTwo + oppwrTwo;
    let opprbTwoAndoppte = withopprbTwo + oppte;
    let oppwrOneAndoppwrTwo = withoppwrOne + oppwrTwo;
    let oppwrOneAndoppte = withoppwrOne + oppte;
    let oppwrTwoAndoppte = withoppwrTwo + oppte;

    //////////triple stacks values with names variables

    let rbOneAndrbTwoWithNames = `${+rbOneAndrbTwo.toFixed(
      2
    )}: QB-WR1-RB1-RB2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBOne.name}(${rbOne})-${
      allRBs[i].RBTwo.name
    }(${rbTwo})`;

    let rbOneAndwrTwoWithNames = `${+rbOneAndwrTwo.toFixed(
      2
    )}: QB-WR1-RB1-WR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBOne.name}(${rbOne})-${
      allWRs[i].WRTwo.name
    }(${wrTwo})`;

    let rbOneAndteWithNames = `${+rbOneAndte.toFixed(2)}: QB-WR1-RB1-TE ${
      allQBs[i].name
    }(${qb})-${allWRs[i].WROne.name}(${wrOne})-${
      allRBs[i].RBOne.name
    }(${rbOne})-${allTEs[i].TE.name}(${te})`;

    let rbOneAndOpprbOneWithNames = `${+rbOneAndopprbone.toFixed(
      2
    )}: QB-WR1-RB1-OPPRB1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBOne.name}(${rbOne})-${oppRBOneName}(${opprbOne})`;

    let rbOneAndopprbtwoWithNames = `${+rbOneAndopprbtwo.toFixed(
      2
    )}: QB-WR1-RB1-OPPRB2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBOne.name}(${rbOne})-${oppRBTwoName}(${opprbTwo})`;

    let rbOneAndoppwroneWithNames = `${+rbOneAndoppwrone.toFixed(
      2
    )}: QB-WR1-RB1-OPPWR1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBOne.name}(${rbOne})-${oppWROneName}(${oppwrOne})`;

    let rbOneAndoppwrtwoWithNames = `${+rbOneAndoppwrtwo.toFixed(
      2
    )}: QB-WR1-RB1-OPPWR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBOne.name}(${rbOne})-${oppWRTwoName}(${oppwrTwo})`;

    let rbOneAndoppteWithNames = `${+rbOneAndoppte.toFixed(
      2
    )}: QB-WR1-RB1-OPPTE ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBOne.name}(${rbOne})-${oppteName}(${oppte})`;

    let rbTwoAndwrTwoWithNames = `${+rbTwoAndwrTwo.toFixed(
      2
    )}: QB-WR1-RB2-WR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBTwo.name}(${rbTwo})-${
      allWRs[i].WRTwo.name
    }(${wrTwo})`;

    let rbTwoAndteWithNames = `${+rbTwoAndte.toFixed(2)}: QB-WR1-RB2-TE ${
      allQBs[i].name
    }(${qb})-${allWRs[i].WROne.name}(${wrOne})-${
      allRBs[i].RBTwo.name
    }(${rbTwo})-${allTEs[i].TE.name}(${te})`;

    let rbTwoAndopprbOneWithNames = `${+rbTwoAndopprbOne.toFixed(
      2
    )}: QB-WR1-RB2-OPPRB1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBTwo.name}(${rbTwo})-${oppRBOneName}(${opprbOne})`;

    let rbTwoAndopprbTwoWithNames = `${+rbTwoAndopprbTwo.toFixed(
      2
    )}: QB-WR1-RB2-OPPRB2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBTwo.name}(${rbTwo})-${oppRBTwoName}(${opprbTwo})`;

    let rbTwoAndoppwrOneWithNames = `${+rbTwoAndoppwrOne.toFixed(
      2
    )}: QB-WR1-RB2-OPPWR1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBTwo.name}(${rbTwo})-${oppWROneName}(${oppwrOne})`;

    let rbTwoAndoppwrTwoWithNames = `${+rbTwoAndoppwrTwo.toFixed(
      2
    )}: QB-WR1-RB2-OPPWR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBTwo.name}(${rbTwo})-${oppWRTwoName}(${oppwrTwo})`;

    let rbTwoAndoppteWithNames = `${+rbTwoAndoppte.toFixed(
      2
    )}: QB-WR1-RB2-OPPTE ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allRBs[i].RBTwo.name}(${rbTwo})-${oppteName}(${oppte})`;

    let wrTwoAndteWithNames = `${+wrTwoAndte.toFixed(2)}: QB-WR1-WR2-TE ${
      allQBs[i].name
    }(${qb})-${allWRs[i].WROne.name}(${wrOne})-${
      allWRs[i].WRTwo.name
    }(${wrTwo})-${allTEs[i].TE.name}(${te})`;

    let wrTwoAndopprbOneWithNames = `${+wrTwoAndopprbOne.toFixed(
      2
    )}: QB-WR1-WR2-OPPRB1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allWRs[i].WRTwo.name}(${wrTwo})-${oppRBOneName}(${opprbOne})`;

    let wrTwoAndopprbTwoWithNames = `${+wrTwoAndopprbTwo.toFixed(
      2
    )}: QB-WR1-WR2-OPPRB2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allWRs[i].WRTwo.name}(${wrTwo})-${oppRBTwoName}(${opprbTwo})`;

    let wrTwoAndoppwrOneWithNames = `${+wrTwoAndoppwrOne.toFixed(
      2
    )}: QB-WR1-WR2-OPPWR1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allWRs[i].WRTwo.name}(${wrTwo})-${oppWROneName}(${oppwrOne})`;

    let wrTwoAndoppwrTwoWithNames = `${+wrTwoAndoppwrTwo.toFixed(
      2
    )}: QB-WR1-WR2-OPPWR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allWRs[i].WRTwo.name}(${wrTwo})-${oppWRTwoName}(${oppwrTwo})`;

    let wrTwoAndoppteWithNames = `${+wrTwoAndoppte.toFixed(
      2
    )}: QB-WR1-WR2-OPPTE ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allWRs[i].WRTwo.name}(${wrTwo})-${oppteName}(${oppte})`;

    let teAndopprbOneWithNames = `${+teAndopprbOne.toFixed(
      2
    )}: QB-WR1-TE-OPPRB1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allTEs[i].TE.name}(${te})-${oppRBOneName}(${opprbOne})`;

    let teAndopprbTwoWithNames = `${+teAndopprbTwo.toFixed(
      2
    )}: QB-WR1-TE-OPPRB2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allTEs[i].TE.name}(${te})-${oppRBTwoName}(${opprbTwo})`;

    let teAndoppwrOneWithNames = `${+teAndoppwrOne.toFixed(
      2
    )}: QB-WR1-TE-OPPWR1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allTEs[i].TE.name}(${te})-${oppWROneName}(${oppwrOne})`;

    let teAndoppwrTwoWithNames = `${+teAndoppwrTwo.toFixed(
      2
    )}: QB-WR1-TE-OPPWR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${allTEs[i].TE.name}(${te})-${oppWRTwoName}(${oppwrTwo})`;

    let teAndoppteWithNames = `${+teAndoppte.toFixed(2)}: QB-WR1-TE-OPPTE ${
      allQBs[i].name
    }(${qb})-${allWRs[i].WROne.name}(${wrOne})-${
      allTEs[i].TE.name
    }(${te})-${oppteName}(${oppte})`;

    let opprbOneAndopprbTwoWithNames = `${+opprbOneAndopprbTwo.toFixed(
      2
    )}: QB-WR1-OPPRB1-OPPRB2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppRBOneName}(${opprbOne})-${oppRBTwoName}(${opprbTwo})`;

    let opprbOneAndoppwrOneWithNames = `${+opprbOneAndoppwrOne.toFixed(
      2
    )}: QB-WR1-OPPRB1-OPPWR1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppRBOneName}(${opprbOne})-${oppWROneName}(${oppwrOne})`;

    let opprbOneAndoppwrTwoWithNames = `${+opprbOneAndoppwrTwo.toFixed(
      2
    )}: QB-WR1-OPPRB1-OPPWR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppRBOneName}(${opprbOne})-${oppWRTwoName}(${oppwrTwo})`;

    let opprbOneAndoppteWithNames = `${+opprbOneAndoppte.toFixed(
      2
    )}: QB-WR1-OPPRB1-OPPTE ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppRBOneName}(${opprbOne})-${oppteName}(${oppte})`;

    let opprbTwoAndoppwrOneWithNames = `${+opprbTwoAndoppwrOne.toFixed(
      2
    )}: QB-WR1-OPPRB2-OPPWR1 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppRBTwoName}(${opprbTwo})-${oppWROneName}(${oppwrOne})`;

    let opprbTwoAndoppwrTwoWithNames = `${+opprbTwoAndoppwrTwo.toFixed(
      2
    )}: QB-WR1-OPPRB2-OPPWR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppRBTwoName}(${opprbTwo})-${oppWRTwoName}(${oppwrTwo})`;

    let opprbTwoAndoppteWithNames = `${+opprbTwoAndoppte.toFixed(
      2
    )}: QB-WR1-OPPRB2-OPPTE ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppRBTwoName}(${opprbTwo})-${oppteName}(${oppte})`;

    let oppwrOneAndoppwrTwoWithNames = `${+oppwrOneAndoppwrTwo.toFixed(
      2
    )}: QB-WR1-OPPWR1-OPPWR2 ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppWROneName}(${oppwrOne})-${oppWRTwoName}(${oppwrTwo})`;

    let oppwrOneAndoppteWithNames = `${+oppwrOneAndoppte.toFixed(
      2
    )}: QB-WR1-OPPWR1-OPPTE ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppWROneName}(${oppwrOne})-${oppteName}(${oppte})`;

    let oppwrTwoAndoppteWithNames = `${+oppwrTwoAndoppte.toFixed(
      2
    )}: QB-WR1-OPPWR2-OPPTE ${allQBs[i].name}(${qb})-${
      allWRs[i].WROne.name
    }(${wrOne})-${oppWRTwoName}(${oppwrTwo})-${oppteName}(${oppte})`;

    /////////best triple stack wih QB and QB's WR1

    let bestTripleStackWithQBWROne = rbOneAndrbTwo;
    let bestTripleStackWithQBWROneAndNames = rbOneAndrbTwoWithNames;

    if (bestTripleStackWithQBWROne < rbOneAndwrTwo) {
      bestTripleStackWithQBWROne = rbOneAndwrTwo;
      bestTripleStackWithQBWROneAndNames = rbOneAndwrTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < rbOneAndte) {
      bestTripleStackWithQBWROne = rbOneAndte;
      bestTripleStackWithQBWROneAndNames = rbOneAndteWithNames;
    }
    if (bestTripleStackWithQBWROne < rbOneAndopprbone) {
      bestTripleStackWithQBWROne = rbOneAndopprbone;
      bestTripleStackWithQBWROneAndNames = rbOneAndOpprbOneWithNames;
    }
    if (bestTripleStackWithQBWROne < rbOneAndopprbtwo) {
      bestTripleStackWithQBWROne = rbOneAndopprbtwo;
      bestTripleStackWithQBWROneAndNames = rbOneAndopprbtwoWithNames;
    }
    if (bestTripleStackWithQBWROne < rbOneAndoppwrone) {
      bestTripleStackWithQBWROne = rbOneAndoppwrone;
      bestTripleStackWithQBWROneAndNames = rbOneAndoppwroneWithNames;
    }
    if (bestTripleStackWithQBWROne < rbOneAndoppwrtwo) {
      bestTripleStackWithQBWROne = rbOneAndoppwrtwo;
      bestTripleStackWithQBWROneAndNames = rbOneAndoppwrtwoWithNames;
    }
    if (bestTripleStackWithQBWROne < rbOneAndoppte) {
      bestTripleStackWithQBWROne = rbOneAndoppte;
      bestTripleStackWithQBWROneAndNames = rbOneAndoppteWithNames;
    }
    if (bestTripleStackWithQBWROne < rbTwoAndwrTwo) {
      bestTripleStackWithQBWROne = rbTwoAndwrTwo;
      bestTripleStackWithQBWROneAndNames = rbTwoAndwrTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < rbTwoAndte) {
      bestTripleStackWithQBWROne = rbTwoAndte;
      bestTripleStackWithQBWROneAndNames = rbTwoAndteWithNames;
    }
    if (bestTripleStackWithQBWROne < rbTwoAndopprbOne) {
      bestTripleStackWithQBWROne = rbTwoAndopprbOne;
      bestTripleStackWithQBWROneAndNames = rbTwoAndopprbOneWithNames;
    }
    if (bestTripleStackWithQBWROne < rbTwoAndopprbTwo) {
      bestTripleStackWithQBWROne = rbTwoAndopprbTwo;
      bestTripleStackWithQBWROneAndNames = rbTwoAndopprbTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < rbTwoAndoppwrOne) {
      bestTripleStackWithQBWROne = rbTwoAndoppwrOne;
      bestTripleStackWithQBWROneAndNames = rbTwoAndoppwrOneWithNames;
    }
    if (bestTripleStackWithQBWROne < rbTwoAndoppwrTwo) {
      bestTripleStackWithQBWROne = rbTwoAndoppwrTwo;
      bestTripleStackWithQBWROneAndNames = rbTwoAndoppwrTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < rbTwoAndoppte) {
      bestTripleStackWithQBWROne = rbTwoAndoppte;
      bestTripleStackWithQBWROneAndNames = rbTwoAndoppteWithNames;
    }
    if (bestTripleStackWithQBWROne < wrTwoAndte) {
      bestTripleStackWithQBWROne = wrTwoAndte;
      bestTripleStackWithQBWROneAndNames = wrTwoAndteWithNames;
    }
    if (bestTripleStackWithQBWROne < wrTwoAndopprbOne) {
      bestTripleStackWithQBWROne = wrTwoAndopprbOne;
      bestTripleStackWithQBWROneAndNames = wrTwoAndopprbOneWithNames;
    }
    if (bestTripleStackWithQBWROne < wrTwoAndopprbTwo) {
      bestTripleStackWithQBWROne = wrTwoAndopprbTwo;
      bestTripleStackWithQBWROneAndNames = wrTwoAndopprbTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < wrTwoAndoppwrOne) {
      bestTripleStackWithQBWROne = wrTwoAndoppwrOne;
      bestTripleStackWithQBWROneAndNames = wrTwoAndoppwrOneWithNames;
    }
    if (bestTripleStackWithQBWROne < wrTwoAndoppwrTwo) {
      bestTripleStackWithQBWROne = wrTwoAndoppwrTwo;
      bestTripleStackWithQBWROneAndNames = wrTwoAndoppwrTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < wrTwoAndoppte) {
      bestTripleStackWithQBWROne = wrTwoAndoppte;
      bestTripleStackWithQBWROneAndNames = wrTwoAndoppteWithNames;
    }
    if (bestTripleStackWithQBWROne < teAndopprbOne) {
      bestTripleStackWithQBWROne = teAndopprbOne;
      bestTripleStackWithQBWROneAndNames = teAndopprbOneWithNames;
    }
    if (bestTripleStackWithQBWROne < teAndopprbTwo) {
      bestTripleStackWithQBWROne = teAndopprbTwo;
      bestTripleStackWithQBWROneAndNames = teAndopprbTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < teAndoppwrOne) {
      bestTripleStackWithQBWROne = teAndoppwrOne;
      bestTripleStackWithQBWROneAndNames = teAndoppwrOneWithNames;
    }
    if (bestTripleStackWithQBWROne < teAndoppwrTwo) {
      bestTripleStackWithQBWROne = teAndoppwrTwo;
      bestTripleStackWithQBWROneAndNames = teAndoppwrTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < opprbOneAndopprbTwo) {
      bestTripleStackWithQBWROne = opprbOneAndopprbTwo;
      bestTripleStackWithQBWROneAndNames = opprbOneAndopprbTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < opprbOneAndoppwrOne) {
      bestTripleStackWithQBWROne = opprbOneAndoppwrOne;
      bestTripleStackWithQBWROneAndNames = opprbOneAndoppwrOneWithNames;
    }
    if (bestTripleStackWithQBWROne < opprbOneAndoppwrTwo) {
      bestTripleStackWithQBWROne = opprbOneAndoppwrTwo;
      bestTripleStackWithQBWROneAndNames = opprbOneAndoppwrTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < opprbOneAndoppte) {
      bestTripleStackWithQBWROne = opprbOneAndoppte;
      bestTripleStackWithQBWROneAndNames = opprbOneAndoppteWithNames;
    }
    if (bestTripleStackWithQBWROne < opprbTwoAndoppwrOne) {
      bestTripleStackWithQBWROne = opprbTwoAndoppwrOne;
      bestTripleStackWithQBWROneAndNames = opprbTwoAndoppwrOneWithNames;
    }
    if (bestTripleStackWithQBWROne < opprbTwoAndoppwrTwo) {
      bestTripleStackWithQBWROne = opprbTwoAndoppwrTwo;
      bestTripleStackWithQBWROneAndNames = opprbTwoAndoppwrTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < opprbTwoAndoppte) {
      bestTripleStackWithQBWROne = opprbTwoAndoppte;
      bestTripleStackWithQBWROneAndNames = opprbTwoAndoppteWithNames;
    }
    if (bestTripleStackWithQBWROne < oppwrOneAndoppwrTwo) {
      bestTripleStackWithQBWROne = oppwrOneAndoppwrTwo;
      bestTripleStackWithQBWROneAndNames = oppwrOneAndoppwrTwoWithNames;
    }
    if (bestTripleStackWithQBWROne < oppwrOneAndoppte) {
      bestTripleStackWithQBWROne = oppwrOneAndoppte;
      bestTripleStackWithQBWROneAndNames = oppwrOneAndoppteWithNames;
    }
    if (bestTripleStackWithQBWROne < oppwrTwoAndoppte) {
      bestTripleStackWithQBWROne = oppwrTwoAndoppte;
      bestTripleStackWithQBWROneAndNames = oppwrTwoAndoppteWithNames;
    }

    /////////poppulating best stack arrays

    if (rbOne === allRBData.allRBOneHalfPPRProjectedPointsValues[i]) {
      allTeamsBestHalfDoubleStackWithQBAndWROne.push(
        bestDoubleStackWithQBWROne
      );
      allTeamsBestHalfDoubleStackWithQBAndWROneWithNames.push(
        bestDoubleStackWithQBWROneAndNames
      );
      allTeamsBestHalfTripleStackWithQBAndWROne.push(
        bestTripleStackWithQBWROne
      );
      allTeamsBestHalfTripleStackWithQBAndWROneWithNames.push(
        bestTripleStackWithQBWROneAndNames
      );
    }
    if (
      rbOne === allRBData.allRBOneFullPPRProjectedPointsValues[i] &&
      te === allTEData.allFullTEFinalProjectedPointsValues[i]
    ) {
      allTeamsBestPPRDoubleStackWithQBAndWROne.push(bestDoubleStackWithQBWROne);
      allTeamsBestPPRDoubleStackWithQBAndWROneWithNames.push(
        bestDoubleStackWithQBWROneAndNames
      );
      allTeamsBestPPRTripleStackWithQBAndWROne.push(bestTripleStackWithQBWROne);
      allTeamsBestPPRTripleStackWithQBAndWROneWithNames.push(
        bestTripleStackWithQBWROneAndNames
      );
    }
    if (te === allTEData.allTEPremiuimFinalProjectedPointsValues[i]) {
      allTEPremiumBestDoubleStackWithQBAndWROne.push(
        bestDoubleStackWithQBWROne
      );
      allTEPremiumBestDoubleStackWithQBAndWROneWithNames.push(
        bestDoubleStackWithQBWROneAndNames
      );
      allTEPremiumBestTripleStackWithQBAndWROne.push(
        bestTripleStackWithQBWROne
      );
      allTEPremiumBestTripleStackWithQBAndWROneWithNames.push(
        bestTripleStackWithQBWROneAndNames
      );
    }
  },
};

allQBData.allQBFinalProjectedPointsValues.map(function (value, i) {
  let qb = value;
  let rbOneHalf = allRBData.allRBOneHalfPPRProjectedPointsValues[i];
  let rbTwoHalf = allRBData.allRBTwoHalfPPRProjectedPointsValues[i];
  let wrOneHalf = allWRData.allHalfWROneFinalProjectedPointsValues[i];
  let wrTwoHalf = allWRData.allHalfWRTwoFinalProjectedPointsValues[i];
  let teHalf = allTEData.allHalfTEFinalProjectedPointsValues[i];

  let rbOnePPR = allRBData.allRBOneFullPPRProjectedPointsValues[i];
  let rbTwoPPR = allRBData.allRBTwoFullPPRProjectedPointsValues[i];
  let wrOnePPR = allWRData.allFullWROneFinalProjectedPointsValues[i];
  let wrTwoPPR = allWRData.allFullWRTwoFinalProjectedPointsValues[i];
  let tePPR = allTEData.allFullTEFinalProjectedPointsValues[i];
  let teTEPremium = allTEData.allTEPremiuimFinalProjectedPointsValues[i];

  let halfArray = [qb, rbOneHalf, rbTwoHalf, wrOneHalf, wrTwoHalf, teHalf];
  let fullArray = [qb, rbOnePPR, rbTwoPPR, wrOnePPR, wrTwoPPR, tePPR];
  let TEPremiumArray = [
    qb,
    rbOnePPR,
    rbTwoPPR,
    wrOnePPR,
    wrTwoPPR,
    teTEPremium,
  ];

  if (i % 2 === 1) {
    opposingRBOneHalf = allRBData.allRBOneHalfPPRProjectedPointsValues[i - 1];
    opposingRBTwoHalf = allRBData.allRBTwoHalfPPRProjectedPointsValues[i - 1];
    opposingWROneHalf = allWRData.allHalfWROneFinalProjectedPointsValues[i - 1];
    opposingWRTwohalf = allWRData.allHalfWRTwoFinalProjectedPointsValues[i - 1];
    opposingTEHalf = allTEData.allHalfTEFinalProjectedPointsValues[i - 1];

    opposingRBOnePPR = allRBData.allRBOneFullPPRProjectedPointsValues[i - 1];
    opposingRBTwoPPR = allRBData.allRBTwoFullPPRProjectedPointsValues[i - 1];
    opposingWROnePPR = allWRData.allFullWROneFinalProjectedPointsValues[i - 1];
    opposingWRTwoPPR = allWRData.allFullWRTwoFinalProjectedPointsValues[i - 1];
    opposingTEPPR = allTEData.allFullTEFinalProjectedPointsValues[i - 1];
    opposingTEPremium =
      allTEData.allTEPremiuimFinalProjectedPointsValues[i - 1];

    oppRBOneName = allRBs[i - 1].RBOne.name;
    oppRBTwoName = allRBs[i - 1].RBTwo.name;
    oppWROneName = allWRs[i - 1].WROne.name;
    oppWRTwoName = allWRs[i - 1].WRTwo.name;
    oppteName = allTEs[i - 1].TE.name;
  } else {
    opposingRBOneHalf = allRBData.allRBOneHalfPPRProjectedPointsValues[i + 1];
    opposingRBTwoHalf = allRBData.allRBTwoHalfPPRProjectedPointsValues[i + 1];
    opposingWROneHalf = allWRData.allHalfWROneFinalProjectedPointsValues[i + 1];
    opposingWRTwohalf = allWRData.allHalfWRTwoFinalProjectedPointsValues[i + 1];
    opposingTEHalf = allTEData.allHalfTEFinalProjectedPointsValues[i + 1];

    opposingRBOnePPR = allRBData.allRBOneFullPPRProjectedPointsValues[i + 1];
    opposingRBTwoPPR = allRBData.allRBTwoFullPPRProjectedPointsValues[i + 1];
    opposingWROnePPR = allWRData.allFullWROneFinalProjectedPointsValues[i + 1];
    opposingWRTwoPPR = allWRData.allFullWRTwoFinalProjectedPointsValues[i + 1];
    opposingTEPPR = allTEData.allFullTEFinalProjectedPointsValues[i + 1];
    opposingTEPremium =
      allTEData.allTEPremiuimFinalProjectedPointsValues[i + 1];

    oppRBOneName = allRBs[i + 1].RBOne.name;
    oppRBTwoName = allRBs[i + 1].RBTwo.name;
    oppWROneName = allWRs[i + 1].WROne.name;
    oppWRTwoName = allWRs[i + 1].WRTwo.name;
    oppteName = allTEs[i + 1].TE.name;
  }

  let halfDoubleStackArray = [
    qb,
    rbOneHalf,
    rbTwoHalf,
    wrOneHalf,
    wrTwoHalf,
    teHalf,
    opposingRBOneHalf,
    opposingRBTwoHalf,
    opposingWROneHalf,
    opposingWRTwohalf,
    opposingTEHalf,
    oppRBOneName,
    oppRBTwoName,
    oppWROneName,
    oppWRTwoName,
    oppteName,
  ];

  let PPRDoubleStackArray = [
    qb,
    rbOnePPR,
    rbTwoPPR,
    wrOnePPR,
    wrTwoPPR,
    tePPR,
    opposingRBOnePPR,
    opposingRBTwoPPR,
    opposingWROnePPR,
    opposingWRTwoPPR,
    opposingTEPPR,
    oppRBOneName,
    oppRBTwoName,
    oppWROneName,
    oppWRTwoName,
    oppteName,
  ];

  let TEPremiumDoubleStackArray = [
    qb,
    rbOnePPR,
    rbTwoPPR,
    wrOnePPR,
    wrTwoPPR,
    teTEPremium,
    opposingRBOnePPR,
    opposingRBTwoPPR,
    opposingWROnePPR,
    opposingWRTwoPPR,
    opposingTEPremium,
    oppRBOneName,
    oppRBTwoName,
    oppWROneName,
    oppWRTwoName,
    oppteName,
  ];

  const bestHalfTeamSingleStackWithQB =
    allStackingCalcFuncs.CalcTeamBestSingleStackWithQB(halfArray, i);

  const bestPPRTeamSingleStackWithQB =
    allStackingCalcFuncs.CalcTeamBestSingleStackWithQB(fullArray, i);

  const bestTEPremiumTeamSingleStackWithQB =
    allStackingCalcFuncs.CalcTeamBestSingleStackWithQB(TEPremiumArray, i);

  const bestHalfDoubleStackWithQBAndQBsWROne =
    allStackingCalcFuncs.CalcTeamBestDoubleAndTripleStacksWithQBAndQBsWROne(
      halfDoubleStackArray,
      i
    );

  const bestPPRDoubleStackWithQBAndQBsWROne =
    allStackingCalcFuncs.CalcTeamBestDoubleAndTripleStacksWithQBAndQBsWROne(
      PPRDoubleStackArray,
      i
    );

  const bestTEPremiumDoubleStackWithQBAndQBsWROne =
    allStackingCalcFuncs.CalcTeamBestDoubleAndTripleStacksWithQBAndQBsWROne(
      TEPremiumDoubleStackArray,
      i
    );
});

//////////builing flex and superflex arrays, not stacks here
//

const allHalfSuperflexValues = [];
const allHalfSuperflexValuesWithNames = [];
const allPPRSuperflexValues = [];
const allPPRSuperflexValuesWithNames = [];
const allTEPremiumSuperflexValues = [];
const allTEPremiumSuperflexValuesWithNames = [];

allRBData.allRBHalfPPRProjectedPointsValues.forEach(function (player, i) {
  // console.log(allQBData.allQBFinalProjectedPointsValues[i]);
  if (i < allQBData.allQBFinalProjectedPointsValues.length) {
    allHalfSuperflexValues.push(allQBData.allQBFinalProjectedPointsValues[i]);
    allPPRSuperflexValues.push(allQBData.allQBFinalProjectedPointsValues[i]);
    allTEPremiumSuperflexValues.push(
      allQBData.allQBFinalProjectedPointsValues[i]
    );
    allHalfSuperflexValuesWithNames.push(
      allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
    );
    allPPRSuperflexValuesWithNames.push(
      allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
    );
    allTEPremiumSuperflexValuesWithNames.push(
      allQBData.allQBFinalProjectedPointsValuesPlusNames[i]
    );
  }

  allHalfFlexValues.push(player);
  allHalfSuperflexValues.push(player);
  if (i < allWRData.allWRsHalfProjectedPointsValues.length) {
    allHalfFlexValues.push(allWRData.allWRsHalfProjectedPointsValues[i]);
    allHalfSuperflexValues.push(allWRData.allWRsHalfProjectedPointsValues[i]);
    allHalfFlexValuesWithNames.push(
      allWRData.allWRsHalfProjectedPointsValuesPlusNames[i]
    );
    allHalfSuperflexValuesWithNames.push(
      allWRData.allWRsHalfProjectedPointsValuesPlusNames[i]
    );
  }
  if (i < allTEData.allHalfTEFinalProjectedPointsValues.length) {
    allHalfFlexValues.push(allTEData.allHalfTEFinalProjectedPointsValues[i]);
    allHalfSuperflexValues.push(
      allTEData.allHalfTEFinalProjectedPointsValues[i]
    );
  }

  allHalfFlexValuesWithNames.push(
    allRBData.allRBHalfPPRProjectedPointsValuesPlusNames[i]
  );
  allHalfSuperflexValuesWithNames.push(
    allRBData.allRBHalfPPRProjectedPointsValuesPlusNames[i]
  );

  if (i < allTEData.allHalfTEFinalProjectedPointsValues.length) {
    allHalfFlexValuesWithNames.push(
      allTEData.allHalfTEFinalProjectedPointsValuesPlusNames[i]
    );
    allHalfSuperflexValuesWithNames.push(
      allTEData.allHalfTEFinalProjectedPointsValuesPlusNames[i]
    );
  }
});

allRBData.allRBFullPPRProjectedPointsValues.forEach(function (player, i) {
  allPPRFlexValues.push(player);
  allPPRSuperflexValues.push(player);
  allTEPremiumSuperflexValues.push(player);
  if (i < allWRData.allWRsFullProjectedPointsValues.length) {
    allPPRFlexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
    allTEPFlexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
    allPPRSuperflexValues.push(allWRData.allWRsFullProjectedPointsValues[i]);
    allTEPremiumSuperflexValues.push(
      allWRData.allWRsFullProjectedPointsValues[i]
    );
    allPPRFlexValuesWithNames.push(
      allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
    );
    allTEPFlexValuesWithNames.push(
      allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
    );
    allPPRSuperflexValuesWithNames.push(
      allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
    );
    allTEPremiumSuperflexValuesWithNames.push(
      allWRData.allWRsFullProjectedPointsValuesPlusNames[i]
    );
  }
  if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
    allPPRFlexValues.push(allTEData.allFullTEFinalProjectedPointsValues[i]);
    allPPRSuperflexValues.push(
      allTEData.allFullTEFinalProjectedPointsValues[i]
    );
  }

  allTEPFlexValues.push(player);

  if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
    allTEPFlexValues.push(allTEData.allTEPremiuimFinalProjectedPointsValues[i]);
    allTEPremiumSuperflexValues.push(
      allTEData.allTEPremiuimFinalProjectedPointsValues[i]
    );
  }

  allPPRFlexValuesWithNames.push(
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
  );
  allPPRSuperflexValuesWithNames.push(
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
  );
  allTEPremiumSuperflexValuesWithNames.push(
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
  );

  if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
    allPPRFlexValuesWithNames.push(
      allTEData.allFullTEFinalProjectedPointsValuesPlusNames[i]
    );
    allPPRSuperflexValuesWithNames.push(
      allTEData.allFullTEFinalProjectedPointsValuesPlusNames[i]
    );
  }

  allTEPFlexValuesWithNames.push(
    allRBData.allRBFullPPRProjectedPointsValuesPlusNames[i]
  );

  if (i < allTEData.allFullTEFinalProjectedPointsValues.length) {
    allTEPFlexValuesWithNames.push(
      allTEData.allTEPremiuimFinalProjectedPointsValuesPlusNames[i]
    );
    allTEPremiumSuperflexValuesWithNames.push(
      allTEData.allTEPremiuimFinalProjectedPointsValuesPlusNames[i]
    );
  }
});

// let sortedallHalfFlexValuesWithNames = allHalfFlexValuesWithNames.sort(
//   (a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//   }
// );

// let sortedAllHalfQBWROneStacks = allHalfQBWROneStackWithNames.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// let sortedAllFullQBWROneStacks = allPPRQBWROneStacksWithNames.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// let sortedallTeamsBestHalfSingleStackWithQBWithNames =
//   allTeamsBestHalfSingleStackWithQBWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestHalfSingleStackWithQB =
//   allTeamsBestHalfSingleStackWithQB.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestPPRSingleStackWithQBWithNames =
//   allTeamsBestPPRSingleStackWithQBWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestPPRSingleStackWithQB =
//   allTeamsBestPPRSingleStackWithQB.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTEPremiumBestSingleStackWithQBWithNames =
//   allTEPremiumBestSingleStackWithQBWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTEPremiumBestSingleStackWithQB =
//   allTEPremiumBestSingleStackWithQB.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestHalfDoubleStackWithQBAndWROneWithNames =
//   allTeamsBestHalfDoubleStackWithQBAndWROneWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestHalfDoubleStackWithQBAndWROne =
//   allTeamsBestHalfDoubleStackWithQBAndWROne.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestPPRDoubleStackWithQBAndWROneWithNames =
//   allTeamsBestPPRDoubleStackWithQBAndWROneWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestPPRDoubleStackWithQBAndWROne =
//   allTeamsBestPPRDoubleStackWithQBAndWROne.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTEPremiumBestDoubleStackWithQBAndWROneWithNames =
//   allTEPremiumBestDoubleStackWithQBAndWROneWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTEPremiumBestDoubleStackWithQBAndWROne =
//   allTEPremiumBestDoubleStackWithQBAndWROne.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestHalfTripleStackWithQBAndWROneWithNames =
//   allTeamsBestHalfTripleStackWithQBAndWROneWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestHalfTripleStackWithQBAndWROne =
//   allTeamsBestHalfTripleStackWithQBAndWROne.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestPPRTripleStackWithQBAndWROneWithNames =
//   allTeamsBestPPRTripleStackWithQBAndWROneWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTeamsBestPPRTripleStackWithQBAndWROne =
//   allTeamsBestPPRTripleStackWithQBAndWROne.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTEPremiumBestTripleStackWithQBAndWROne =
//   allTEPremiumBestTripleStackWithQBAndWROne.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

// let sortedallTEPremiumBestTripleStackWithQBAndWROneWithNames =
//   allTEPremiumBestTripleStackWithQBAndWROneWithNames.sort((a, b) => {
//     if (a > b) return -1;
//     if (a < b) return 1;
//   });

///////////////calculting total projected points per total projected dollars for stacks

const allStackData = {
  //flex data
  allHalfFlexValues: allHalfFlexValues,
  allHalfFlexValuesWithNames: allHalfFlexValuesWithNames,
  allPPRFlexValues: allPPRFlexValues,
  allPPRFlexValuesWithNames: allPPRFlexValuesWithNames,
  allTEPFlexValues: allTEPFlexValues,
  allTEPFlexValuesWithNames: allTEPFlexValuesWithNames,
  //superflex data
  allHalfSuperflexValues: allHalfSuperflexValues,
  allHalfSuperflexValuesWithNames: allHalfSuperflexValuesWithNames,
  allPPRSuperflexValues: allPPRSuperflexValues,
  allPPRSuperflexValuesWithNames: allPPRSuperflexValuesWithNames,
  allTEPremiumSuperflexValues: allTEPremiumSuperflexValues,
  allTEPremiumSuperflexValuesWithNames: allTEPremiumSuperflexValuesWithNames,
  //single stack data
  allHalfQBWROneStacks: QBWROneSingleStackData.allHalfQBWROneStacks,
  allPPRQBWROneStacks: QBWROneSingleStackData.allPPRQBWROneStacks,
  allHalfQBWROneStackWithNames:
    QBWROneSingleStackData.allHalfQBWROneStackWithNames,
  allPPRQBWROneStacksWithNames:
    QBWROneSingleStackData.allPPRQBWROneStacksWithNames,
  allTeamsBestHalfSingleStackWithQB: allTeamsBestHalfSingleStackWithQB,
  allTeamsBestHalfSingleStackWithQBWithNames:
    allTeamsBestHalfSingleStackWithQBWithNames,
  // sortedAllHalfQBWROneStacks: sortedAllHalfQBWROneStacks,
  allTeamsBestPPRSingleStackWithQB: allTeamsBestPPRSingleStackWithQB,
  allTeamsBestPPRSingleStackWithQBWithNames:
    allTeamsBestPPRSingleStackWithQBWithNames,
  allTEPremiumBestSingleStackWithQB: allTEPremiumBestSingleStackWithQB,
  allTEPremiumBestSingleStackWithQBWithNames:
    allTEPremiumBestSingleStackWithQBWithNames,

  halfDKBestQBWROneStackspointsperdollar:
    QBWROneSingleStackData.halfDKBestQBWROneStackspointsperdollar,
  halfFDBestQBWROneStackspointsperdollar:
    QBWROneSingleStackData.halfFDBestQBWROneStackspointsperdollar,
  halfYahooBestQBWROneStackspointsperdollar:
    QBWROneSingleStackData.halfYahooBestQBWROneStackspointsperdollar,
  fullDKBestQBWROneStackspointsperdollar:
    QBWROneSingleStackData.fullDKBestQBWROneStackspointsperdollar,
  fullFDBestQBWROneStackspointsperdollar:
    QBWROneSingleStackData.fullFDBestQBWROneStackspointsperdollar,
  fullYahooBestQBWROneStackspointsperdollar:
    QBWROneSingleStackData.fullYahooBestQBWROneStackspointsperdollar,
  //double stack data
  allTeamsBestHalfDoubleStackWithQBAndWROne:
    allTeamsBestHalfDoubleStackWithQBAndWROne,
  allTeamsBestHalfDoubleStackWithQBAndWROneWithNames:
    allTeamsBestHalfDoubleStackWithQBAndWROneWithNames,
  allTeamsBestPPRDoubleStackWithQBAndWROne:
    allTeamsBestPPRDoubleStackWithQBAndWROne,
  allTeamsBestPPRDoubleStackWithQBAndWROneWithNames:
    allTeamsBestPPRDoubleStackWithQBAndWROneWithNames,
  allTEPremiumBestDoubleStackWithQBAndWROne:
    allTEPremiumBestDoubleStackWithQBAndWROne,
  allTEPremiumBestDoubleStackWithQBAndWROneWithNames:
    allTEPremiumBestDoubleStackWithQBAndWROneWithNames,
  //triple stack data
  allTeamsBestHalfTripleStackWithQBAndWROne:
    allTeamsBestHalfTripleStackWithQBAndWROne,
  allTeamsBestPPRTripleStackWithQBAndWROne:
    allTeamsBestPPRTripleStackWithQBAndWROne,
  allTEPremiumBestTripleStackWithQBAndWROne:
    allTEPremiumBestTripleStackWithQBAndWROne,
  allTeamsBestHalfTripleStackWithQBAndWROneWithNames:
    allTeamsBestHalfTripleStackWithQBAndWROneWithNames,
  allTeamsBestPPRTripleStackWithQBAndWROneWithNames:
    allTeamsBestPPRTripleStackWithQBAndWROneWithNames,
  allTEPremiumBestTripleStackWithQBAndWROneWithNames:
    allTEPremiumBestTripleStackWithQBAndWROneWithNames,
};

// console.log(allStackData);

module.exports = allStackingCalcFuncs;
module.exports = allStackData;
