import React from 'react';
import styles from '@/styles/tradeAnalyzer.module.css';

export default function TeamTwo({
  dataArray,
  teamTwoPlayers,
  setTeamTwoPlayers,
}) {
  const [teamTwoSearchValue, setTeamTwoSearchValue] = React.useState('');
  let teamTotalPRP = 0;
  let teamTotalPNODVScore = 0;
  let teamTotalRVS = 0;
  let teamTotalMarketValue = 0;
  let teamTotalMyValue = 0;
  let teamTotalPNODV = 0;

  function teamTwoSearchOnChange(event) {
    setTeamTwoSearchValue(event.target.value);
  }
  function onPlayerSelectFromListTeamTwo(searchTerm, player) {
    setTeamTwoSearchValue(searchTerm);
    setTeamTwoPlayers([player, ...teamTwoPlayers]);
    // console.log(teamTwoPlayers);
    setTeamTwoSearchValue('');
  }
  function onSearch(searchTerm, player) {
    // console.log('search', player);
    dataArray.map(player => {
      //   console.log(player.name);
      //   console.log(teamTwoSearchValue);
      if (player.name.toLowerCase() === teamTwoSearchValue) {
        setTeamTwoSearchValue(searchTerm);
        setTeamTwoPlayers([player, ...teamTwoPlayers]);
        setTeamTwoSearchValue('');
      }
    });

    // console.log(teamOnePlayers);
  }

  function removePlayer(name) {
    const newPlayerArray = teamTwoPlayers.filter(player => {
      return player.name !== name;
    });

    setTeamTwoPlayers(newPlayerArray);
  }

  return (
    <div className={styles.teamTwoWrapper}>
      <div className={styles.teamTitle}>Team 2 Gives</div>
      <div className={styles.insideTeamWrapper}>
        <div className={styles.searchInputAndButtonWrapper}>
          <input
            type="text"
            value={teamTwoSearchValue}
            onChange={teamTwoSearchOnChange}
            className={styles.teamTwoSearchInput}
          />
          <button
            onClick={() => onSearch(teamTwoSearchValue)}
            className={styles.addPlayerButton}
          >
            Add Player
          </button>
        </div>
        <div>
          {dataArray
            .filter(player => {
              const searchTerm = teamTwoSearchValue.toLowerCase();

              const name = player.name.toLowerCase();

              let tempLast = name.split(/\s/);
              let lastName = tempLast[1];
              const searchLength = searchTerm.length > 0 ? true : false;

              if (searchLength === true) {
                return (
                  (searchLength && name.startsWith(searchTerm)) ||
                  (lastName.startsWith(searchTerm) && name !== searchTerm)
                );
              }
            })
            .slice(0, 15)
            .map(function (player) {
              return (
                <div
                  onClick={() =>
                    onPlayerSelectFromListTeamTwo(player.name, player)
                  }
                  key={player.name}
                  className={styles.selectMenuItem}
                >
                  {player.name}
                </div>
              );
            })}
        </div>
        <div className={styles.playersSelectedForTeam}>
          {teamTwoPlayers.map(function (player) {
            teamTotalPRP = teamTotalPRP + player.PRPScore;
            teamTotalPNODVScore = teamTotalPNODVScore + player.PNODVScore;
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
                    PNODV Score: {''}
                    {player.PNODVScore}{' '}
                  </span>
                  <span className={styles.RVSSpan}>
                    RVS Score: {''} {player.RVSScore}
                  </span>
                  <span className={styles.marketValueSpan}>
                    Market Value: {player.marketValue}
                  </span>
                  <span className={styles.myValueSpan}>
                    My Value: {player.myValue}
                  </span>
                  <span className={styles.PNODVSpan}>
                    PNODV: {player.projectedNextOffseasonDynastyValue}
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
          {teamTwoPlayers.length > 0 ? (
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
