import styles from '@/styles/tradeAnalyzer.module.css';

export default function SleeperLeagueStuff({dataArray, selectedLeagueData, selectedUserID, selectedLeagueRosterNamesArray, selectedUserName, selectedLeaguesTeamObjectsArray}) {

    // console.log(dataArray)
    // console.log(selectedLeagueRosterNamesArray)
    // console.log(selectedLeagueData)
    // console.log(selectedUserName)
    // console.log(selectedLeaguesTeamObjectsArray)

    let qbArray = []
    let rbArray = []
    let wrArray = []
    let teArray = []
    let picksArray = []

    dataArray.map((player) => {
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
          }
        if(playerOnTeam === player.name) {
          // console.log(player.position)
          if(player.position === 'QB') {
            // console.log(player.name)
            qbArray.push(player.name)
          }
          if(player.position === 'RB') {
            // console.log(player.name)
            rbArray.push(player.name)
          }
          if(player.position === 'WR') {
            // console.log(player.name)
            wrArray.push(player.name)
          }
          if(player.position === 'TE') {
            // console.log(player.name)
            teArray.push(player.name)
          }
        }
      })

    })

    return (
        <div>
            <div className={styles.playersOnSelectedLeagueWrapper}>
            <div className={styles.selectedLeagueName}>{selectedLeagueData.name}</div>
            <div className={styles.selectedUserName}>{selectedUserName}</div>
                {dataArray.map((player) => {                   
                    // console.log(player.name)
                  return(
                    //
                  <>
                    {qbArray.map((qb) => {
                        let num = Math.random()
                        qb = qb.replace("'", '')
                        .replace('.', '')
                        .replace('.', '');
                        if (qb.includes('Jr')) {
                          // console.log(playerObject['"PLAYER NAME"']);
                          qb = qb.replace(
                            'Jr',
                            ''
                          );
                         
                        }
                        if(qb === player.name) {
                          
                          return (
                           
                            <div key={`${player.name}-${player.projectedNextOffseasonDynastyValue}-${num}`}>
                              <div key={`${player.name}-${player.myValue}-${num}`} className={styles.qbsFromSelectedLeagueWrapper}>
                                <span><strong><u>{player.name}</u></strong> {" "}</span>
                                <span>PRP Score: {player.PRPScore} {" "}</span>
                                <span>PNODV: {player.projectedNextOffseasonDynastyValue} {" "}</span>
                                <span>RVS Score: {player.RVSScore} {" "}</span>
                                <span>Market Value: {player.marketValue} {" "}</span>
                                <span>My Value: {player.myValue}</span>
                              </div>
                            </div>  
                          )    
                        }  
                    })}        
                  </>          
                  )          
                  }        
                )}              

                  

{dataArray.map((player) => {                   
                    // console.log(player.name)
                  return(
                    //
                  <>
                    {rbArray.map((rb) => {
                        let num = Math.random()
                        rb = rb.replace("'", '')
                        .replace('.', '')
                        .replace('.', '');
                        if (rb.includes('Jr')) {
                          // console.log(playerObject['"PLAYER NAME"']);
                          rb = rb.replace(
                            'Jr',
                            ''
                          );
                         
                        }
                        if(rb === player.name) {
                          
                          return (
                           
                            <div key={`${player.name}-${player.projectedNextOffseasonDynastyValue}-${num}`}>
                              <div key={`${player.name}-${player.myValue}-${num}`} className={styles.rbsFromSelectedLeagueWrapper}>
                                <span><strong><u>{player.name}</u></strong> {" "}</span>
                                <span>PRP Score: {player.PRPScore} {" "}</span>
                                <span>PNODV: {player.projectedNextOffseasonDynastyValue} {" "}</span>
                                <span>RVS Score: {player.RVSScore} {" "}</span>
                                <span>Market Value: {player.marketValue} {" "}</span>
                                <span>My Value: {player.myValue}</span>
                              </div>
                            </div>  
                          )    
                        }  
                    })}        
                  </>          
                  )          
                  }        
                )}    


                {dataArray.map((player) => {                   
                    // console.log(player.name)
                  return(
                    //
                  <>
                    {wrArray.map((wr) => {
                        let num = Math.random()
                        wr = wr.replace("'", '')
                        .replace('.', '')
                        .replace('.', '');
                        if (wr.includes('Jr')) {
                          // console.log(playerObject['"PLAYER NAME"']);
                          wr = wr.replace(
                            'Jr',
                            ''
                          );
                         
                        }
                        if(wr === player.name) {
                          
                          return (
                           
                            <div key={`${player.name}-${player.projectedNextOffseasonDynastyValue}-${num}`}>
                              <div key={`${player.name}-${player.myValue}-${num}`} className={styles.wrsFromSelectedLeagueWrapper}>
                                <span><strong><u>{player.name}</u></strong> {" "}</span>
                                <span>PRP Score: {player.PRPScore} {" "}</span>
                                <span>PNODV: {player.projectedNextOffseasonDynastyValue} {" "}</span>
                                <span>RVS Score: {player.RVSScore} {" "}</span>
                                <span>Market Value: {player.marketValue} {" "}</span>
                                <span>My Value: {player.myValue}</span>
                              </div>
                            </div>  
                          )    
                        }  
                    })}        
                  </>          
                  )          
                  }        
                )}   


                {dataArray.map((player) => {                   
                    // console.log(player.name)
                  return(
                    //
                  <>
                    {teArray.map((te) => {
                        let num = Math.random()
                        te = te.replace("'", '')
                        .replace('.', '')
                        .replace('.', '');
                        if (te.includes('Jr')) {
                          // console.log(playerObject['"PLAYER NAME"']);
                          te = te.replace(
                            'Jr',
                            ''
                          );
                         
                        }
                        if(te === player.name) {
                          
                          return (
                           
                            <div key={`${player.name}-${player.projectedNextOffseasonDynastyValue}-${num}`}>
                              <div key={`${player.name}-${player.myValue}-${num}`} className={styles.tesFromSelectedLeagueWrapper}>
                                <span><strong><u>{player.name}</u></strong> {" "}</span>
                                <span>PRP Score: {player.PRPScore} {" "}</span>
                                <span>PNODV: {player.projectedNextOffseasonDynastyValue} {" "}</span>
                                <span>RVS Score: {player.RVSScore} {" "}</span>
                                <span>Market Value: {player.marketValue} {" "}</span>
                                <span>My Value: {player.myValue}</span>
                              </div>
                            </div>  
                          )    
                        }  
                    })}        
                  </>          
                  )          
                  }        
                )}           
            </div>              
        </div>                  
      )                      
                        
}                        
                        
                        
                        
                        
                        
                    
                    

                    
                    
                    
                    
                
                




                


            

        
    

