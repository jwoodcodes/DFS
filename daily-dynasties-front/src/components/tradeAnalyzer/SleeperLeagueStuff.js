import styles from '@/styles/tradeAnalyzer.module.css';

export default function SleeperLeagueStuff({dataArray, selectedLeagueData, selectedUserID, selectedLeagueRosterNamesArray, selectedUserName}) {

    // console.log(dataArray)
    // console.log(selectedLeagueRosterNamesArray)
    // console.log(selectedLeagueData)

    

    return (
        <div>
            <div className={styles.playersOnSelectedLeagueWrapper}>
            <div className={styles.selectedLeagueName}>{selectedLeagueData.name}</div>
            <div className={styles.selectedUserName}>{selectedUserName}</div>
                {dataArray.map((player) => {
                    
                    // console.log(player.name)
                    player.name = player.name.replace("'", '')
                    .replace('.', '')
                    .replace('.', '');
                    if (player.name.includes('Jr')) {
                      // console.log(playerObject['"PLAYER NAME"']);
                      player.name = player.name.replace(
                        'Jr',
                        ''
                      );
                     
                    }
                    
                    selectedLeagueRosterNamesArray.map((playerOnTeam) => {
                      if(playerOnTeam === player.name) {
                        console.log(player.position)
                      }
                    })
                    
                    return(
                        
                    
                    // console.log(player.name)
                    //
                    
                    selectedLeagueRosterNamesArray.map((playerOnTeam) => {
                        
                        playerOnTeam = playerOnTeam.replace("'", '')
                        .replace('.', '')
                        .replace('.', '');
                        if (playerOnTeam.includes('Jr')) {
                          // console.log(playerObject['"PLAYER NAME"']);
                          playerOnTeam = playerOnTeam.replace(
                            'Jr',
                            ''
                          );
                         
                        }
                        if(playerOnTeam === player.name) {
                        // console.log(playerOnTeam)
                        if (!player.PRPScore) {
                            player.PRPScore = 0
                        }
                        return (
                            
                        <div key={player.name} className={styles.playerFromSelectedLeague}>
                            
                            <span>{player.name} {" "}</span>
                            <span>PRP Score: {player.PRPScore} {" "}</span>
                            <span>PNODV: {player.projectedNextOffseasonDynastyValue} {" "}</span>
                            <span>RVS Score: {player.RVSScore} {" "}</span>
                            <span>Market Value: {player.marketValue} {" "}</span>
                            <span>My Value: {player.myValue}</span>
                            
                        </div>
                        )
                        
                        }
                    })
                    
                    )
                    }
                
                )}
            </div>

        </div>
    )
}