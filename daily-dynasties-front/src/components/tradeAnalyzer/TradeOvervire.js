import React from 'react';
import styles from '@/styles/tradeAnalyzer.module.css';
import clsx from 'clsx';

export default function TradeOverview({ teamOnePlayers, teamTwoPlayers }) {
  const [isLegendShown, setIsLegendShown] = React.useState(false);

  let teamOneTotalPRP = 0;
  let teamOneTotalPNODVScore = 0;
  let teamOneTotalRVS = 0;
  let teamOneTotalMarketValue = 0;
  let teamOneTotalMyValue = 0;
  let teamOneTotalPNODV = 0;
  //
  let teamTwoTotalPRP = 0;
  let teamTwoTotalPNODVScore = 0;
  let teamTwoTotalRVS = 0;
  let teamTwoTotalMarketValue = 0;
  let teamTwoTotalMyValue = 0;
  let teamTwoTotalPNODV = 0;
  //
  let teamOneTradePRPDifference = 0;
  let teamOneTradePNODVScoreDifference = 0;
  let teamOneTradeRVSDifference = 0;
  let teamOneTradeMarketValueDifference = 0;
  let teamOneTradeMyValueDifference = 0;
  let teamOneTradePNODVDifference = 0;
  //
  let teamTwoTradePRPDifference = 0;
  let teamTwoTradePNODVScoreDifference = 0;
  let teamTwoTradeRVSDifference = 0;
  let teamTwoTradeMarketValueDifference = 0;
  let teamTwoTradeMyValueDifference = 0;
  let teamTwoTradePNODVDifference = 0;

  //
  teamOnePlayers.map(player => {
    teamOneTotalPRP = +teamOneTotalPRP + +player.PRPScore;
    teamOneTotalPNODVScore = +teamOneTotalPNODVScore + +player.PNODVScore;
    teamOneTotalRVS = +teamOneTotalRVS + +player.RVSScore;
    teamOneTotalMarketValue = +teamOneTotalMarketValue + +player.marketValue;
    teamOneTotalMyValue = +teamOneTotalMyValue + +player.myValue;
    teamOneTotalPNODV =
      +teamOneTotalPNODV + +player.projectedNextOffseasonDynastyValue;
  });

  teamTwoPlayers.map(player => {
    teamTwoTotalPRP = +teamTwoTotalPRP + +player.PRPScore;
    teamTwoTotalPNODVScore = +teamTwoTotalPNODVScore + +player.PNODVScore;
    teamTwoTotalRVS = +teamTwoTotalRVS + +player.RVSScore;
    teamTwoTotalMarketValue = +teamTwoTotalMarketValue + +player.marketValue;
    teamTwoTotalMyValue = +teamTwoTotalMyValue + +player.myValue;
    teamTwoTotalPNODV =
      +teamTwoTotalPNODV + +player.projectedNextOffseasonDynastyValue;
  });

  //
  //
  let teamOnePRPBigLoss = false;
  let teamOnePRPSmallLoss = false;
  let teamOnePRPNeutral = false;
  let teamOnePRPSmallWin = false;
  let teamOnePRPBigWin = false;
  let teamTwoPRPBigLoss = false;
  let teamTwoPRPSmallLoss = false;
  let teamTwoPRPNeutral = false;
  let teamTwoPRPSmallWin = false;
  let teamTwoPRPBigWin = false;
  //
  let teamOnePNODVScoreBigLoss = false;
  let teamOnePNODVScoreSmallLoss = false;
  let teamOnePNODVScoreNeutral = false;
  let teamOnePNODVScoreSmallWin = false;
  let teamOnePNODVScoreBigWin = false;
  let teamTwoPNODVScoreBigLoss = false;
  let teamTwoPNODVScoreSmallLoss = false;
  let teamTwoPNODVScoreNeutral = false;
  let teamTwoPNODVScoreSmallWin = false;
  let teamTwoPNODVScoreBigWin = false;
  //
  let teamOneRVSScoreBigLoss = false;
  let teamOneRVSScoreSmallLoss = false;
  let teamOneRVSScoreNeutral = false;
  let teamOneRVSScoreSmallWin = false;
  let teamOneRVSScoreBigWin = false;
  let teamTwoRVSScoreBigLoss = false;
  let teamTwoRVSScoreSmallLoss = false;
  let teamTwoRVSScoreNeutral = false;
  let teamTwoRVSScoreSmallWin = false;
  let teamTwoRVSScoreBigWin = false;
  //
  let teamOneMarketValueBigLoss = false;
  let teamOneMarketValueSmallLoss = false;
  let teamOneMarketValueNeutral = false;
  let teamOneMarketValueSmallWin = false;
  let teamOneMarketValueBigWin = false;
  let teamTwoMarketValueBigLoss = false;
  let teamTwoMarketValueSmallLoss = false;
  let teamTwoMarketValueNeutral = false;
  let teamTwoMarketValueSmallWin = false;
  let teamTwoMarketValueBigWin = false;
  //
  let teamOneMyValueBigLoss = false;
  let teamOneMyValueSmallLoss = false;
  let teamOneMyValueNeutral = false;
  let teamOneMyValueSmallWin = false;
  let teamOneMyValueBigWin = false;
  let teamTwoMyValueBigLoss = false;
  let teamTwoMyValueSmallLoss = false;
  let teamTwoMyValueNeutral = false;
  let teamTwoMyValueSmallWin = false;
  let teamTwoMyValueBigWin = false;
  //
  let teamOnePNODVBigLoss = false;
  let teamOnePNODVSmallLoss = false;
  let teamOnePNODVNeutral = false;
  let teamOnePNODVSmallWin = false;
  let teamOnePNODVBigWin = false;
  let teamTwoPNODVBigLoss = false;
  let teamTwoPNODVSmallLoss = false;
  let teamTwoPNODVNeutral = false;
  let teamTwoPNODVSmallWin = false;
  let teamTwoPNODVBigWin = false;
  //

  function setOverviewTotals() {
    //team 1
    teamOneTradePRPDifference = +(+teamOneTotalPRP - +teamTwoTotalPRP);
    if (teamOneTradePRPDifference < 0 && teamOneTradePRPDifference < -399) {
      teamOnePRPBigLoss = true;
    }
    if (teamOneTradePRPDifference > -399 && teamOneTradePRPDifference < 0) {
      teamOnePRPSmallLoss = true;
    }
    if (teamOneTradePRPDifference === 0) {
      teamOnePRPNeutral = true;
    }
    if (teamOneTradePRPDifference > 0 && teamOneTradePRPDifference < 400) {
      teamOnePRPSmallWin = true;
    }
    if (teamOneTradePRPDifference > 399) {
      teamOnePRPBigWin = true;
    }
    //
    teamOneTradePNODVScoreDifference =
      teamOneTotalPNODVScore - teamTwoTotalPNODVScore;
    if (
      teamOneTradePNODVScoreDifference < 0 &&
      teamOneTradePNODVScoreDifference < -399
    ) {
      teamOnePNODVScoreBigLoss = true;
    }
    if (
      teamOneTradePNODVScoreDifference > -399 &&
      teamOneTradePNODVScoreDifference < 0
    ) {
      teamOnePNODVScoreSmallLoss = true;
    }
    if (teamOneTradePNODVScoreDifference === 0) {
      teamOnePNODVScoreNeutral = true;
    }
    if (
      teamOneTradePNODVScoreDifference > 0 &&
      teamOneTradePNODVScoreDifference < 400
    ) {
      teamOnePNODVScoreSmallWin = true;
    }
    if (teamOneTradePNODVScoreDifference > 399) {
      teamOnePNODVScoreBigWin = true;
    }
    //

    teamOneTradeRVSDifference = teamOneTotalRVS - teamTwoTotalRVS;

    if (teamOneTradeRVSDifference < 0 && teamOneTradeRVSDifference < -399) {
      teamOneRVSScoreBigLoss = true;
    }
    if (teamOneTradeRVSDifference > -399 && teamOneTradeRVSDifference < 0) {
      teamOneRVSScoreSmallLoss = true;
    }
    if (teamOneTradeRVSDifference === 0) {
      teamOneRVSScoreNeutral = true;
    }
    if (teamOneTradeRVSDifference > 0 && teamOneTradeRVSDifference < 400) {
      teamOneRVSScoreSmallWin = true;
    }
    if (teamOneTradeRVSDifference > 399) {
      teamOneRVSScoreBigWin = true;
    }
    //
    teamOneTradeMarketValueDifference =
      teamOneTotalMarketValue - teamTwoTotalMarketValue;
    if (
      teamOneTradeMarketValueDifference < 0 &&
      teamOneTradeMarketValueDifference < -900
    ) {
      teamOneMarketValueBigLoss = true;
    }
    if (
      teamOneTradeMarketValueDifference > -899 &&
      teamOneTradeMarketValueDifference < -400
    ) {
      teamOneMarketValueSmallLoss = true;
    }
    if (
      teamOneTradeMarketValueDifference > -401 &&
      teamOneTradeMarketValueDifference < 401
    ) {
      teamOneMarketValueNeutral = true;
    }
    if (
      teamOneTradeMarketValueDifference > 399 &&
      teamOneTradeMarketValueDifference < 901
    ) {
      teamOneMarketValueSmallWin = true;
    }
    if (teamOneTradeMarketValueDifference > 900) {
      teamOneMarketValueBigWin = true;
    }
    //
    teamOneTradeMyValueDifference = teamOneTotalMyValue - teamTwoTotalMyValue;
    if (
      teamOneTradeMyValueDifference < 0 &&
      teamOneTradeMyValueDifference < -900
    ) {
      teamOneMyValueBigLoss = true;
    }
    if (
      teamOneTradeMyValueDifference > -899 &&
      teamOneTradeMyValueDifference < -400
    ) {
      teamOneMyValueSmallLoss = true;
    }
    if (
      teamOneTradeMyValueDifference > -401 &&
      teamOneTradeMyValueDifference < 401
    ) {
      teamOneMyValueNeutral = true;
    }
    if (
      teamOneTradeMyValueDifference > 399 &&
      teamOneTradeMyValueDifference < 901
    ) {
      teamOneMyValueSmallWin = true;
    }
    if (teamOneTradeMyValueDifference > 900) {
      teamOneMyValueBigWin = true;
    }
    //
    teamOneTradePNODVDifference = +(
      teamOneTotalPNODV - teamTwoTotalPNODV
    ).toFixed(1);
    if (teamOneTradePNODVDifference < 0 && teamOneTradePNODVDifference < -900) {
      teamOnePNODVBigLoss = true;
    }
    if (
      teamOneTradePNODVDifference > -899 &&
      teamOneTradePNODVDifference < -400
    ) {
      teamOnePNODVSmallLoss = true;
    }
    if (
      teamOneTradePNODVDifference > -401 &&
      teamOneTradePNODVDifference < 401
    ) {
      teamOnePNODVNeutral = true;
    }
    if (
      teamOneTradePNODVDifference > 399 &&
      teamOneTradePNODVDifference < 901
    ) {
      teamOnePNODVSmallWin = true;
    }
    if (teamOneTradePNODVDifference > 900) {
      teamOnePNODVBigWin = true;
    }
    //

    //
    //team 2
    //
    teamTwoTradePRPDifference = teamTwoTotalPRP - teamOneTotalPRP;
    if (teamTwoTradePRPDifference < 0 && teamTwoTradePRPDifference < -399) {
      teamTwoPRPBigLoss = true;
    }
    if (teamTwoTradePRPDifference > -399 && teamTwoTradePRPDifference < 0) {
      teamTwoPRPSmallLoss = true;
    }
    if (teamTwoTradePRPDifference === 0) {
      teamTwoPRPNeutral = true;
    }
    if (teamTwoTradePRPDifference > 0 && teamTwoTradePRPDifference < 400) {
      teamTwoPRPSmallWin = true;
    }
    if (teamTwoTradePRPDifference > 399) {
      teamTwoPRPBigWin = true;
    }
    //
    teamTwoTradePNODVScoreDifference =
      teamTwoTotalPNODVScore - teamOneTotalPNODVScore;
    if (
      teamTwoTradePNODVScoreDifference < 0 &&
      teamTwoTradePNODVScoreDifference < -399
    ) {
      teamTwoPNODVScoreBigLoss = true;
    }
    if (
      teamTwoTradePNODVScoreDifference > -399 &&
      teamTwoTradePNODVScoreDifference < 0
    ) {
      teamTwoPNODVScoreSmallLoss = true;
    }
    if (teamTwoTradePNODVScoreDifference === 0) {
      teamTwoPNODVScoreNeutral = true;
    }
    if (
      teamTwoTradePNODVScoreDifference > 0 &&
      teamTwoTradePNODVScoreDifference < 400
    ) {
      teamTwoPNODVScoreSmallWin = true;
    }
    if (teamTwoTradePNODVScoreDifference > 399) {
      teamTwoPNODVScoreBigWin = true;
    }
    //
    teamTwoTradeRVSDifference = teamTwoTotalRVS - teamOneTotalRVS;
    if (teamTwoTradeRVSDifference < 0 && teamTwoTradeRVSDifference < -399) {
      teamTwoRVSScoreBigLoss = true;
    }
    if (teamTwoTradeRVSDifference > -399 && teamTwoTradeRVSDifference < 0) {
      teamTwoRVSScoreSmallLoss = true;
    }
    if (teamTwoTradeRVSDifference === 0) {
      teamTwoRVSScoreNeutral = true;
    }
    if (teamTwoTradeRVSDifference > 0 && teamTwoTradeRVSDifference < 400) {
      teamTwoRVSScoreSmallWin = true;
    }
    if (teamTwoTradeRVSDifference > 399) {
      teamTwoRVSScoreBigWin = true;
    }
    //
    teamTwoTradeMarketValueDifference =
      teamTwoTotalMarketValue - teamOneTotalMarketValue;
    if (
      teamTwoTradeMarketValueDifference < 0 &&
      teamTwoTradeMarketValueDifference < -900
    ) {
      teamTwoMarketValueBigLoss = true;
    }
    if (
      teamTwoTradeMarketValueDifference > -899 &&
      teamTwoTradeMarketValueDifference < -400
    ) {
      teamTwoMarketValueSmallLoss = true;
    }
    if (
      teamTwoTradeMarketValueDifference > -401 &&
      teamTwoTradeMarketValueDifference < 401
    ) {
      teamTwoMarketValueNeutral = true;
    }
    if (
      teamTwoTradeMarketValueDifference > 399 &&
      teamTwoTradeMarketValueDifference < 901
    ) {
      teamTwoMarketValueSmallWin = true;
    }
    if (teamTwoTradeMarketValueDifference > 900) {
      teamTwoMarketValueBigWin = true;
    }
    //

    teamTwoTradeMyValueDifference = teamTwoTotalMyValue - teamOneTotalMyValue;
    if (
      teamTwoTradeMyValueDifference < 0 &&
      teamTwoTradeMyValueDifference < -900
    ) {
      teamTwoMyValueBigLoss = true;
    }
    if (
      teamTwoTradeMyValueDifference > -899 &&
      teamTwoTradeMyValueDifference < -400
    ) {
      teamTwoMyValueSmallLoss = true;
    }
    if (
      teamTwoTradeMyValueDifference > -401 &&
      teamTwoTradeMyValueDifference < 401
    ) {
      teamTwoMyValueNeutral = true;
    }
    if (
      teamTwoTradeMyValueDifference > 399 &&
      teamTwoTradeMyValueDifference < 901
    ) {
      teamTwoMyValueSmallWin = true;
    }
    if (teamTwoTradeMyValueDifference > 900) {
      teamTwoMyValueBigWin = true;
    }
    //
    teamTwoTradePNODVDifference = +(
      teamTwoTotalPNODV - teamOneTotalPNODV
    ).toFixed(1);
    if (teamTwoTradePNODVDifference < 0 && teamTwoTradePNODVDifference < -900) {
      teamTwoPNODVBigLoss = true;
    }
    if (
      teamTwoTradePNODVDifference > -899 &&
      teamTwoTradePNODVDifference < -400
    ) {
      teamTwoPNODVSmallLoss = true;
    }
    if (
      teamTwoTradePNODVDifference > -401 &&
      teamTwoTradePNODVDifference < 401
    ) {
      teamTwoPNODVNeutral = true;
    }
    if (
      teamTwoTradePNODVDifference > 399 &&
      teamTwoTradePNODVDifference < 901
    ) {
      teamTwoPNODVSmallWin = true;
    }
    if (teamTwoTradePNODVDifference > 900) {
      teamTwoPNODVBigWin = true;
    }
    //
  }
  setOverviewTotals();

  //   const smallWin = clsx({

  //   })

  return (
    <div className={styles.tradeOvervireWrapper}>
      <div className={styles.tradeOverviewTitle}>Trade Overview</div>
      <div className={styles.overviewWarning}>
        *Ideally Market Value is{' '}
        <span className={styles.overviewBlueSpan}>BLUE</span>, Never{' '}
        <span className={styles.overviewDarkRedSpan}>DARK RED</span>. Your side
        as <span className={styles.overviewGreenSpan}>GREEN</span> as possible.*
      </div>
      <div className={styles.overviewCardWrapper}>
        <div className={styles.teamOverviewWrapper}>
          <span className={styles.teamTitleSpan}>Team 1</span>
          <span
            className={clsx(
              styles.PRPTotalSpan,
              teamOnePRPBigLoss && styles.bigLoss,
              teamOnePRPSmallLoss && styles.smallLoss,
              teamOnePRPNeutral && styles.neutral,
              teamOnePRPSmallWin && styles.smallWin,
              teamOneTradePRPDifference && styles.bigWin
            )}
          >
            PRP Score:{''} {teamOneTradePRPDifference}
          </span>
          <span
            className={clsx(
              styles.PNODVTotalSpan,
              teamOnePNODVBigLoss && styles.bigLoss,
              teamOnePNODVSmallLoss && styles.smallLoss,
              teamOnePNODVNeutral && styles.neutral,
              teamOnePNODVSmallWin && styles.smallWin,
              teamOnePNODVBigWin && styles.bigWin
            )}
          >
            PNODV: {teamOneTradePNODVDifference}
          </span>
          {/* <span
            className={clsx(
              styles.PNODVTotalSpan,
              teamOnePNODVScoreBigLoss && styles.bigLoss,
              teamOnePNODVScoreSmallLoss && styles.smallLoss,
              teamOnePNODVScoreNeutral && styles.neutral,
              teamOnePNODVScoreSmallWin && styles.smallWin,
              teamOnePNODVScoreBigWin && styles.bigWin
            )}
          >
            PNODV Score: {teamOneTradePNODVScoreDifference}
          </span> */}
          <span
            className={clsx(
              styles.RVSTotalSpan,
              teamOneRVSScoreBigLoss && styles.bigLoss,
              teamOneRVSScoreSmallLoss && styles.smallLoss,
              teamOneRVSScoreNeutral && styles.neutral,
              teamOneRVSScoreSmallWin && styles.smallWin,
              teamOneRVSScoreBigWin && styles.bigWin
            )}
          >
            RVS Score: {teamOneTradeRVSDifference}
          </span>
          <span
            className={clsx(
              styles.marketValueTotalSpan,
              teamOneMarketValueBigLoss && styles.bigLoss,
              teamOneMarketValueSmallLoss && styles.smallLoss,
              teamOneMarketValueNeutral && styles.neutral,
              teamOneMarketValueSmallWin && styles.smallWin,
              teamOneMarketValueBigWin && styles.bigWin
            )}
          >
            Market Value: {teamOneTradeMarketValueDifference}
          </span>
          <span
            className={clsx(
              styles.myValueTotalSpan,
              teamOneMyValueBigLoss && styles.bigLoss,
              teamOneMyValueSmallLoss && styles.smallLoss,
              teamOneMyValueNeutral && styles.neutral,
              teamOneMyValueSmallWin && styles.smallWin,
              teamOneMyValueBigWin && styles.bigWin
            )}
          >
            My Value: {teamOneTradeMyValueDifference}
          </span>
        </div>
        <div className={styles.teamOverviewWrapper}>
          <span className={styles.teamTitleSpan}>Team 2</span>

          <span
            className={clsx(
              styles.PRPTotalSpan,
              teamTwoPRPBigLoss && styles.bigLoss,
              teamTwoPRPSmallLoss && styles.smallLoss,
              teamTwoPRPNeutral && styles.neutral,
              teamTwoPRPSmallWin && styles.smallWin,
              teamTwoTradePRPDifference && styles.bigWin
            )}
          >
            PRP Score:{''} {teamTwoTradePRPDifference}
          </span>
          <span
            className={clsx(
              styles.PNODVTotalSpan,
              teamTwoPNODVBigLoss && styles.bigLoss,
              teamTwoPNODVSmallLoss && styles.smallLoss,
              teamTwoPNODVNeutral && styles.neutral,
              teamTwoPNODVSmallWin && styles.smallWin,
              teamTwoPNODVBigWin && styles.bigWin
            )}
          >
            PNODV: {teamTwoTradePNODVDifference}
          </span>
          {/* <span
            className={clsx(
              styles.PNODVTotalSpan,
              teamTwoPNODVScoreBigLoss && styles.bigLoss,
              teamTwoPNODVScoreSmallLoss && styles.smallLoss,
              teamTwoPNODVScoreNeutral && styles.neutral,
              teamTwoPNODVScoreSmallWin && styles.smallWin,
              teamTwoPNODVScoreBigWin && styles.bigWin
            )}
          >
            PNODV Score: {teamTwoTradePNODVScoreDifference}
          </span> */}

          <span
            className={clsx(
              styles.RVSTotalSpan,
              teamTwoRVSScoreBigLoss && styles.bigLoss,
              teamTwoRVSScoreSmallLoss && styles.smallLoss,
              teamTwoRVSScoreNeutral && styles.neutral,
              teamTwoRVSScoreSmallWin && styles.smallWin,
              teamTwoRVSScoreBigWin && styles.bigWin
            )}
          >
            RVS Score: {teamTwoTradeRVSDifference}
          </span>
          <span
            className={clsx(
              styles.marketValueTotalSpan,
              teamTwoMarketValueBigLoss && styles.bigLoss,
              teamTwoMarketValueSmallLoss && styles.smallLoss,
              teamTwoMarketValueNeutral && styles.neutral,
              teamTwoMarketValueSmallWin && styles.smallWin,
              teamTwoMarketValueBigWin && styles.bigWin
            )}
          >
            Market Value: {teamTwoTradeMarketValueDifference}
          </span>
          <span
            className={clsx(
              styles.myValueTotalSpan,
              teamTwoMyValueBigLoss && styles.bigLoss,
              teamTwoMyValueSmallLoss && styles.smallLoss,
              teamTwoMyValueNeutral && styles.neutral,
              teamTwoMyValueSmallWin && styles.smallWin,
              teamTwoMyValueBigWin && styles.bigWin
            )}
          >
            My Value: {teamTwoTradeMyValueDifference}
          </span>
        </div>
      </div>
      <div className={styles.overviewCardWrapper}>
        <div className={styles.legendWrapper}>
          <div className={styles.legendTitle}>Legend</div>
          <div className={styles.legendShowHideBtnWrapper}>
            <button
              onClick={() => setIsLegendShown(!isLegendShown)}
              className={styles.showAndHideLegendBtn}
            >
              Show/Hide Legend
            </button>
          </div>
          {isLegendShown && (
            <div className={styles.prpLegendWrapper}>
              <div className={styles.legendBlock}>
                <span className={styles.legendSpan}>PRP Score:</span> Projected
                Redraft Production, a score based off the player's redraft tier
                and a measure of how much they will help your team win your
                league this year. The PRP score in the trade overview shows how
                much more or less your team is projected to score this year
                after the trade.
              </div>
              <div className={styles.legendBlock}>
                <span className={styles.legendSpan}>PNODV:</span>Projected Next
                Offseason Dynasty Value caclulated by Daily Dynasties
                proprietary algorithm. PNODV in the trade overview is how much
                more or less dynasty Value your team is projected to have next
                offseason after the trade.
              </div>
              {/* <div className={styles.legendBlock}>
              <span className={styles.legendSpan}>PNODV Score:</span> Projected
              Next Offseason Dynasty Value Score. Daily Dynasties proprietary
              metric, a score computed off how much the player(s) on a side are
              projected to go up or down in dynasty value by next offseason
            </div> */}
              <div className={styles.legendBlock}>
                <span className={styles.legendSpan}>RVS Score:</span> Roster
                Value Score. A composite score from PRP and PNODV, is a metric
                for how valuable a player is to a roster given their projected
                production this year AND their likelihood to hold or gain in
                dynasty value. Players that score highly in RVS are the best
                assets to have in dynasty as they can help you win this year AND
                go up or maintain in value by next offseason. Having rosters
                high in total RVS is key to a permanant championship window.
              </div>
              <div className={styles.legendBlock}>
                <span className={styles.legendSpan}>Market Value:</span> A
                player's current market value based off a recent agrigate of
                FantasyCalc values. This is what should be used like a
                traditional trade calulator to determine if a deal is even. This
                is to be used at a glance. for up to date market values please
                visit fantasyCalc.com
              </div>
              <div className={styles.legendBlock}>
                <span className={styles.legendSpan}>My Value:</span> A player's
                current value in Daily Dynasties dynasty rankings. Always use
                market value to determine if the trade is "fair" but this gives
                an insight in to how much better or worse the trade is viewed
                using my rankings than the market.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
