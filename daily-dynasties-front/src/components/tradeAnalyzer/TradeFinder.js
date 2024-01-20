import React from "react";
import styles from '@/styles/tradeFinder.module.css'
import axios from 'axios';


export default function TradeFinder() {

    const [selectedWeek, setSelectedWeek] = React.useState();
    const [userSearchValue, setUserSearchValue] = React.useState('');
    const [selectedUserID, setSelectedUserID] = React.useState(0);
    const [initialUserLeaguesArray, setInitialUserLeaguesArray] = React.useState(
        []
      );
      const [selectedUserLeaguesIDsArray, setSelectedUserLeaguesIDsArray] = React.useState([])

    const range = (start, end, step = 1) => {
        let output = [];
        if (typeof end === 'undefined') {
          end = start;
          start = 0;
        }
        for (let i = start; i < end; i += step) {
          output.push(i);
        }
        return output;
      };

      function searchOnChange() {
        setUserSearchValue(event.target.value);
      }

      function onSearch(userSearchValue, selectedWeek) {
        event.preventDefault();

        // console.log(selectedWeek)

        const curYear = new Date().getFullYear() 

        // console.log(userSearchValue)
        let userID;

        async function axiosFetch() {
            // console.log(selectedUserName)
    
            const usernameRes = await axios.get(
              `https://api.sleeper.app/v1/user/${userSearchValue}`
            );
    
            // console.log(usernameRes.data.user_id)
            userID = usernameRes.data.user_id;
            setSelectedUserID(userID);
            console.log(userID)
    
            //
            const curYear = new Date().getFullYear();
            let leagueIDsArray = []
    
            // console.log(curYear)
    
            const userLeaguesres = await axios.get(
              `https://api.sleeper.app/v1/user/${userID}/leagues/nfl/${curYear}`
            );
            // console.log(userLeaguesres.data);
            let initialUserLeaguesArray = userLeaguesres.data
            setInitialUserLeaguesArray(userLeaguesres.data);
            
           
            // console.log(selectedUserLeaguesIDsArray)
            // setUserLeaguesNamesArray(newLeagueNameArray);
            // let initialSelectedLeague = {};

            let newLeagueNameArray = [];
            let tempLeagueIDsArray = [];
            initialUserLeaguesArray.forEach(function (league) {
           
              newLeagueNameArray.push(league.name);
              tempLeagueIDsArray.push(league.league_id)

              selectedUserLeaguesIDsArray.push(league.league_id)
              // console.log(newLeagueNameArray)
            //   userLeaguesDataArray.push(league);
              // setUserLeaguesNamesArray(newLeagueNameArray)
            });
            // setSelectedUserLeaguesIDsArray(tempLeagueIDsArray)
            //  console.log(selectedLeagueRostersRes)
            //  console.log(selectedLeagueData.league_id)

            
              

          }
          axiosFetch();




          async function getLeagueData(id) {
            
                const leaguesData = await axios.get(`https://api.sleeper.app/v1/league/${id}/transactions/${selectedWeek}`)

                // console.log(leaguesData.data)
                let leaguesTransactionnData = leaguesData.data

                leaguesTransactionnData.forEach(function(data) {
                    // console.log(data.type)
                    if(data.type === 'trade') {
                        console.log(data)
                    }
                    
                })
            }

            selectedUserLeaguesIDsArray.map(function(id) {
                getLeagueData(id)
            })

        //   console.log(selectedUserLeaguesIDsArray)
          
          
      }


    return (
       <div > 
          <form onSubmit={(event) => {
                event.preventDefault();
             }}>


            <label htmlFor="week-select">
            Week to pull trades from
            </label>
            <select 
            className={styles.weekSelect}
            id="week-select"
            value={selectedWeek}
            onChange={event => {
                console.log(event.target.value)
                setSelectedWeek(event.target.value)
            }}
            >
            
                {range(1, 53).map((num) => (
                <option key={num} value={num}>{num}</option>
                ))}
    
                
            </select>

                <form
                onSubmit={() => onSearch(userSearchValue, selectedWeek)}
                className={styles.form}
                 >
                 <input
                 type="text"
                 value={userSearchValue}
                onChange={searchOnChange}
                placeholder="Sleeper Username"
                 className={styles.textInput}
                ></input>
                {!selectedUserID ?
                <button
                onClick={() => onSearch(userSearchValue, selectedWeek)}
                className={styles.searchbtn}
                    >
                    Search
                 </button>
                 :
                 <button
                onClick={() => onSearch(userSearchValue, selectedWeek)}
                className={styles.searchbtn}
                    >
                    Fetch Leagues
                 </button>
                }
            </form>
        </form>
            {/* <div>{userSearchValue}</div> */}
        </div>
    )
    

}