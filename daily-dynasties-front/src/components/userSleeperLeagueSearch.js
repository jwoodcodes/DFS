
import axios from "axios"
import React from "react"
import styles from '@/styles/sleeperLeagueSearch.module.css';



export default function UserSleeperLeagueSearch({ selectedLeagueData, setSelectedLeagueData, selectedUserID, setSelectedUserID, initialSleeperPlayerData }) {

    // console.log(searchedUser)
    // const [data, setData] = React.useState(null)

    const [userSearchValue, setUserSearchValue] = React.useState('');
    const [initialUserLeaguesArray, setInitialUserLeaguesArray] = React.useState([])
    const [userLeaguesNamesArray, setUserLeaguesNamesArray] = React.useState([])
    const [showLeagues, setShowLeagues] = React.useState(false)
    
  
    let selectedUserName;
    let userLeaguesDataArray = []
    let userID = 0
    
    // let userLeaguesNamesArray = []

  function searchOnChange() {
    setUserSearchValue(event.target.value)
  }
  //
   function onSearch(userSearchValue) {
    
    event.preventDefault();
    setShowLeagues(true)
    // console.log(userSearchValue)
    selectedUserName = userSearchValue
    async function axiosFetch() {
      // console.log(selectedUserName)
      const usernameRes =   await axios.get(`https://api.sleeper.app/v1/user/${selectedUserName}`)
      // console.log(usernameRes.data.user_id)
     userID = usernameRes.data.user_id
     setSelectedUserID(userID)
      // console.log(userID)
      
      //

      

  const userLeaguesres = await axios.get(
    `https://api.sleeper.app/v1/user/${userID}/leagues/nfl/2023`
  );
    // console.log(userLeaguesres.data);
    // let initialUserLeaguesArray = userLeaguesres.data
    setInitialUserLeaguesArray(userLeaguesres.data)
    let newLeagueNameArray = []
    initialUserLeaguesArray.forEach(function(league) {
        // console.log(league.name)
        //  newLeagueNameArray = [...userLeaguesNamesArray, league.name]
        newLeagueNameArray.push(league.name)
        // console.log(newLeagueNameArray)
        userLeaguesDataArray.push(league)
        // setUserLeaguesNamesArray(newLeagueNameArray)
    })
    setUserLeaguesNamesArray(newLeagueNameArray)
    let initialSelectedLeague = {}
   

    
        
        
        //  console.log(selectedLeagueRostersRes)
      //  console.log(selectedLeagueData.league_id)
       
       
    
     }
     
     axiosFetch()
     
  }


 
 
  // console.log(userLeaguesNamesArray)
  
  // let selectedUserName = 'tiger333'
    
  function onLeagueSelect(team) {
    // console.log(team)
    // console.log(initialUserLeaguesArray)
    initialUserLeaguesArray.map(function(league) {
      if(team === league.name) {
        // console.log(league)
        setSelectedLeagueData(league)
        setShowLeagues(false)
        setUserLeaguesNamesArray([])
        //
        
        
        let selectedLeagueID = league.league_id
        // console.log(selectedLeagueID)

        async function getRostersOfSelectedLeague() {
        const selectedLeagueRostersRes = await axios.get(
          `https://api.sleeper.app/v1/league/${selectedLeagueID}/rosters`
        );
        // console.log(selectedLeagueRostersRes)
        


        let selectedLeagueRostersData =  selectedLeagueRostersRes.data
    let selectedUsersTeamObject = {}
      let selectedUsersRoster = []

    selectedLeagueRostersData.forEach(function(team) {
      // console.log(team.owner_id)
      if(team.owner_id === selectedUserID) {
        // console.log(team)
        selectedUsersTeamObject = team
        selectedUsersRoster = team.players
      }
    })

    let selectedUsersRosterPlayerObjects = []

    
   
    

    for (const key in initialSleeperPlayerData) {
      console.log(`${key}: ${initialSleeperPlayerData[key].player_id}`)
      selectedUsersRoster.forEach(function(player) {
        
        if(key === player) {
          // console.log(initialSleeperPlayerData[key].full_name)
          selectedUsersRosterPlayerObjects.push(initialSleeperPlayerData[key])
        }
      })
    }
  }

        getRostersOfSelectedLeague()
      }
     
    })
  }

     



 return (
  <div className={styles.wholeWrapper}>
    <div className={styles.label}>Sleeper League Search</div>
  <form onSubmit={() => onSearch(userSearchValue)} className={styles.form}>
        <input type='text' value={userSearchValue} onChange={searchOnChange} placeholder="Sleeper Username" className={styles.textInput}>

        </input>
        <button onClick={() => onSearch(userSearchValue)} className={styles.searchbtn}>Search</button>
   </form> 
      {showLeagues && <button className={styles.showLeaguesbtn} onClick={() => onSearch(userSearchValue)}>Show Leagues</button>}
      {userLeaguesNamesArray &&
      <div className={styles.leaguebtnsWrapper}>
        {userLeaguesNamesArray.map(function(team) {
          return (
          <button key={team} className={styles.leaguesbtns} onClick={() => onLeagueSelect(team)}>{team}</button>
          )
        })}
      </div>
}
      </div>
 )
}



  