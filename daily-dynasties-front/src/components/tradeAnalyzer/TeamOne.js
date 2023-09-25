import React from 'react';
import styles from '@/styles/tradeAnalyzer.module.css';

export default function TeamOne({
  dataArray,
  teamOnePlayers,
  setTeamOnePlayers,
}) {
  //   console.log(dataArray);
  const [teamOneSearchValue, setTeamOneSearchValue] = React.useState('');
  let teamTotalPRP = 0;
  let teamTotalPNODVScore = 0;
  let teamTotalRVS = 0;
  let teamTotalMarketValue = 0;
  let teamTotalMyValue = 0;
  let teamTotalPNODV = 0;

  function teamOneSearchOnChange(event) {
    setTeamOneSearchValue(event.target.value);
  }
  function onPlayerSelectFromList(searchTerm, player) {
    setTeamOneSearchValue(searchTerm);
    setTeamOnePlayers([player, ...teamOnePlayers]);
    // console.log(teamOnePlayers);
    setTeamOneSearchValue('');
  }
  function onSearch(searchTerm, player) {
    // console.log('search', player);
    dataArray.map(player => {
      //   console.log(player.name);
      //   console.log(teamOneSearchValue);
      if (player.name.toLowerCase() === teamOneSearchValue) {
        setTeamOneSearchValue(searchTerm);
        setTeamOnePlayers([player, ...teamOnePlayers]);
        setTeamOneSearchValue('');
      }
    });

    // console.log(teamOnePlayers);
  }

  function removePlayer(name) {
    const newPlayerArray = teamOnePlayers.filter(player => {
      return player.name !== name;
    });

    setTeamOnePlayers(newPlayerArray);
  }

  return (
    <div className={styles.teamOneWrapper}>
      <div className={styles.teamTitle}>Team 1 Gives</div>
      <div className={styles.insideTeamWrapper}>
        <div className={styles.searchInputAndButtonWrapper}>
          <input
            type="text"
            value={teamOneSearchValue}
            onChange={teamOneSearchOnChange}
            className={styles.teamOneSearchInput}
          />
          <button
            onClick={() => onSearch(teamOneSearchValue)}
            className={styles.addPlayerButton}
          >
            Add Player
          </button>
        </div>
        <form>
          {dataArray
            .filter(player => {
              const searchTerm = teamOneSearchValue.toLowerCase();

              const name = player.name.toLowerCase();

              let tempLast = name.split(/\s/);
              let lastName = tempLast[1];
              const searchLength = searchTerm.length > 0 ? true : false;

              if (searchLength === true && name !== searchTerm) {
                return (
                  name.startsWith(searchTerm) || lastName.startsWith(searchTerm)
                );
              }
            })
            .slice(0, 15)
            .map(function (player) {
              return (
                <div
                  onClick={() => onPlayerSelectFromList(player.name, player)}
                  key={player.name}
                  className={styles.selectMenuItem}
                >
                  {player.name}
                </div>
              );
            })}
        </form>
        <div className={styles.playersSelectedForTeam}>
          {teamOnePlayers.map(function (player) {
            if (!player.PRPScore) {
              player.PRPScore = 0;
            }
            teamTotalPRP = teamTotalPRP + player.PRPScore;
            tempPNODVScore = +player.PNODVScore
            teamTotalPNODVScore = +teamTotalPNODVScore + player.PNODVScore;
            if (!player.RVSScore) {
              player.RVSScore = +player.PRPScore + +player.PNODVScore;
            }
            teamTotalRVS = teamTotalRVS + player.RVSScore;

            teamTotalMarketValue = teamTotalMarketValue + player.marketValue;
            teamTotalMyValue = teamTotalMyValue + player.myValue;
            teamTotalPNODV =
              teamTotalPNODV + player.projectedNextOffseasonDynastyValue;
            return (
              <div className={styles.individualPlayerRow} key={player.name}>
                <div className={styles.namecolumn}>
                  <span>{player.name}:</span>
                </div>
                <div className={styles.infoColumn}>
                  <span className={styles.PRPSpan}>
                    PRP Score:{''} {player.PRPScore}
                  </span>
                  <span className={styles.PNODVSpan}>
                    PNODV: {player.projectedNextOffseasonDynastyValue}
                  </span>

                  {/* <span className={styles.PNODVSpan}>
                    PNODV Score: {''}
                    {player.PNODVScore}{' '}
                  </span> */}
                  <span className={styles.RVSSpan}>
                    RVS Score: {''} {player.RVSScore}
                  </span>
                  <span className={styles.marketValueSpan}>
                    Market Value: {player.marketValue}
                  </span>
                  <span className={styles.myValueSpan}>
                    My Value: {player.myValue}
                  </span>
                </div>
                <button
                  className={styles.removePlayer}
                  onClick={() => removePlayer(player.name)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          {teamOnePlayers.length > 0 ? (
            <div className={styles.individualPlayerRow}>
              <div className={styles.namecolumn}>
                <span>Team Totals:</span>
              </div>
              <div className={styles.infoColumn}>
                <span className={styles.PRPSpan}>
                  PRP Score:{''} {teamTotalPRP}
                </span>
                <span className={styles.PNODVSpan}>
                  PNODV Score: {''}
                  {teamTotalPNODVScore}{' '}
                </span>
                <span className={styles.RVSSpan}>
                  RVS Score: {''} {teamTotalRVS}
                </span>
                <span className={styles.marketValueSpan}>
                  Market Value: {teamTotalMarketValue}
                </span>
                <span className={styles.myValueSpan}>
                  My Value: {teamTotalMyValue}
                </span>
                <span className={styles.PNODVSpan}>
                  PNODV: {teamTotalPNODV}
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
