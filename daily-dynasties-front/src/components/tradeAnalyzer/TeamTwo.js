import React from 'react';
import styles from '@/styles/tradeAnalyzer.module.css';

export default function TeamTwo({
  dataArray,
  teamTwoPlayers,
  setTeamTwoPlayers,
}) {
  const [teamTwoSearchValue, setTeamTwoSearchValue] = React.useState('');

  function teamTwoSearchOnChange(event) {
    setTeamTwoSearchValue(event.target.value);
  }
  function onPlayerSelectFromListTeamTwo(searchTerm, player) {
    setTeamTwoSearchValue(searchTerm);
    setTeamTwoPlayers([player, ...teamTwoPlayers]);
    console.log(teamTwoPlayers);
  }
  function onSearch(searchTerm, player) {
    // console.log('search', player);

    setTeamTwoSearchValue('');
    console.log(teamTwoPlayers);
  }
  return (
    <div className={styles.teamTwoWrapper}>
      <div className={styles.teamTitle}>Team 2</div>
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

              return (
                searchTerm && name.startsWith(searchTerm) && name !== searchTerm
              );
            })
            .slice(0, 15)
            .map(function (player) {
              return (
                <div
                  onClick={() =>
                    onPlayerSelectFromListTeamTwo(player.name, player)
                  }
                  key={player.name}
                >
                  {player.name}
                </div>
              );
            })}
        </div>
        <div className={styles.playersSelectedForTeam}>
          {teamTwoPlayers.map(function (player) {
            return (
              <div className={styles.individualPlayerRow} key={player.name}>
                <span>{player.name}:</span>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
