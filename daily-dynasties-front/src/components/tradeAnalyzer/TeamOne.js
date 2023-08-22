import React from 'react';
import styles from '@/styles/tradeAnalyzer.module.css';

export default function TeamOne({
  dataArray,
  teamOnePlayers,
  setTeamOnePlayers,
}) {
  //   console.log(dataArray);
  const [teamOneSearchValue, setTeamOneSearchValue] = React.useState('');

  function teamOneSearchOnChange(event) {
    setTeamOneSearchValue(event.target.value);
  }
  function onPlayerSelectFromList(searchTerm, player) {
    setTeamOneSearchValue(searchTerm);
    setTeamOnePlayers([player, ...teamOnePlayers]);
    console.log(teamOnePlayers);
  }
  function onSearch(searchTerm, player) {
    // console.log('search', player);

    setTeamOneSearchValue('');

    console.log(teamOnePlayers);
  }

  return (
    <div className={styles.teamOneWrapper}>
      <div className={styles.teamTitle}>Team 1</div>
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
        <div>
          {dataArray
            .filter(player => {
              const searchTerm = teamOneSearchValue.toLowerCase();
              const name = player.name.toLowerCase();

              return (
                searchTerm && name.startsWith(searchTerm) && name !== searchTerm
              );
            })
            .slice(0, 15)
            .map(function (player) {
              return (
                <div
                  onClick={() => onPlayerSelectFromList(player.name, player)}
                  key={player.name}
                >
                  {player.name}
                </div>
              );
            })}
        </div>
        <div className={styles.playersSelectedForTeam}>
          {teamOnePlayers.map(function (player) {
            return (
              <div className={styles.individualPlayerRow} key={player.name}>
                <span>{player.name}:</span>
                <span className={styles.PRPSpan}>
                  PRP-Score:{''} {player.PRPScore}
                </span>
                <span className={styles.PNODVSpan}>
                  PNODV-Score: {''}
                  {player.PNODVScore}{' '}
                </span>
                <span className={styles.RVSSpan}>
                  RVS-Score: {''} {player.RVSScore}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
