import styles from '@/styles/tradeAnalyzer.module.css';
import React from 'react';


export default function SleeperLeagueStuff({dataArray, selectedLeagueData, selectedUserID, selectedLeagueRosterNamesArray, selectedUserName, selectedLeaguesTeamObjectsArray, onLeagueSelect, selectedUsersPicksArray}) {

    // console.log(dataArray)
    // console.log(selectedLeagueRosterNamesArray)
    // console.log(selectedLeagueData.name)
    // console.log(selectedUserName)
    // console.log(selectedLeaguesTeamObjectsArray)
    

    // console.log(onLeagueSelect)
   
   
  // console.log(selectedUsersPicksArray, selectedLeaguesTeamObjectsArray)
    // console.log(selectedUserName)

    // console.log(selectedUsersPicksArray)

  // console.log(selectedLeaguesTeamObjectsArray)
    

    let qbArray = []
    let rbArray = []
    let wrArray = []
    let teArray = []

    
    
    dataArray.map((player) => {
      selectedUsersPicksArray.map((pick) => {

        
        

        if(pick.name === player.name || pick === player.name) {

          // console.log(pick)

          // console.log(player)


          pick.PRPScore = player.PRPScore
          pick.projectedNextOffseasonDynastyValue = player.projectedNextOffseasonDynastyValue
          pick.RVSScore = player.PNODVScore
          pick.marketValue = player.marketValue
          pick.myValue = player.myValue
        }
    })
  })

  // console.log(selectedUsersPicksArray)






  
  

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
        <div className={styles.wholeSleeperPlayersSectionWrapper}>
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

                 {/* {dataArray.map((player) => {                    */}
                    {/* // console.log(player.name)
                     // console.log(selectedUserName)
                        // console.log(selectedLeaguesTeamObjectsArray)
                        
                  return(
                    // */}
                  <>
                    {selectedUsersPicksArray.map((pick) => {
                        let num = Math.random()
                       
                        // console.log(selectedUserName, pick, player.name)
                        // console.log(selectedUserName, pick)
                        

                        // if(pick.name === player.name || pick === player.name) {
                          // console.log(pick)
                          // console.log(pick.name, player.name, pick, player.name)
                          return (
                           
                            <div key={`${pick.name}-${pick.projectedNextOffseasonDynastyValue}-${num}`}>
                              <div key={`${pick.name}-${pick.myValue}-${num}`} className={styles.wrsFromSelectedLeagueWrapper}>
                                <span className={styles.pickYear}><strong><u>{pick.name}</u></strong> {" "}</span>
                                <span>PRP Score: {pick.PRPScore} {" "}</span>
                                <span>PNODV: {pick.projectedNextOffseasonDynastyValue} {" "}</span>
                                <span>RVS Score: {pick.RVSScore} {" "}</span>
                                <span>Market Value: {pick.marketValue} {" "}</span>
                                <span>My Value: {pick.myValue}</span>
                              </div>
                            </div>  
                          )    
                        // }  
                    })}        
                  </>          
                  {/* )           */}
                  {/* }         */}
                {/* )}        */}
            </div>    

          
              <>
              <div className={styles.sleeperOtherTeamSectionWrapper}>
                Choose trade partner
                
            {selectedLeaguesTeamObjectsArray.map((team) => {
              // console.log(team)
              
              return (
                
              <button key={team.userName} className={styles.leaguesbtns}>{team.userName}</button>
              
              )
            })} 
           
           </div>
           </>
            
                    
        </div>                  
      )                      
                        
}                        
                        
                        
                        
                        
                        
                    
                    

                    
                    
                    
                    
                
                




                


            

        
    

