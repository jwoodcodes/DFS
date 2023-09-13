import styles from '@/styles/table.module.css';
import React from 'react';
import clsx from 'clsx';

export default function TableBody({ tableData, columns, selectedLeagueRosterNamesArray }) {
  let num = 0;

  let id = React.useId();
  // let isOnSelectedTeam
  return (
    <tbody>
      {tableData.map(data => {
        num = num + 1;
        // data.isOnSelectedTeam = false
        // if(selectedLeagueRosterNamesArray) {
        //   // console.log(data2.name)
        //   selectedLeagueRosterNamesArray.map(function(player) {
        //     if(data.name === player) {
        //       data.isOnSelectedTeam = true
        //       console.log(data)
              
        //     }
        //     console.log(data.isOnSelectedTeam)
        //   })
        // }
        
        let isOnSelectedTeam = data.isOnSelectedTeam

        return (
          <tr className={clsx(isOnSelectedTeam && styles.isOnTeam)} key={`${data.id}-${num}`} >
            <td >{num}</td>
            {columns.map(({ accessor }) => {
              //   console.log(data.myOverallRank);
              let uniqueNum = Math.random();

              const tData = data[accessor] ? data[accessor] : '——';
              return (
                <td key={`${id}-${accessor}-${num}-${uniqueNum}`} >{tData}</td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
