

export default function SleeperLeagueStuff({dataArray, selectedLeagueData, selectedUserID, selectedLeagueRosterNamesArray}) {

    // console.log(dataArray)
    // console.log(selectedLeagueRosterNamesArray)

    return (
        <div>
            <div>
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
                            
                        <div key={player.name}>
                            
                            {player.name} {" "}
                            PRP Score: {player.PRPScore}, {" "}
                            PNODV: {player.projectedNextOffseasonDynastyValue}, {" "}
                            RVS Score: {player.RVSScore}, {" "}
                            Market Value: {player.marketValue}, {" "}
                            My Value: {player.myValue}
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