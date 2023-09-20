import styles from '@/styles/table.module.css';
import React from 'react';
import clsx from 'clsx';

export default function TableBody({ tableData, columns, pointsPerPassingTD}) {
  let num = 0;

  let id = React.useId();
  
  // let isOnSelectedTeam

  
  return (
    <tbody>
      {tableData.map(data => {
        num = num + 1;
       
       
        
         
        
        let isOnSelectedTeam = data.isOnSelectedTeam
        

        return (
          <tr className={clsx(isOnSelectedTeam && styles.isOnTeam)} key={`${data.id}-${num}`} >
            <td >{num}</td>
            {columns.map(({ accessor }) => {
              //   console.log(data.myOverallRank);
              let uniqueNum = Math.random();
              if(data.position === "QB") {
                if(pointsPerPassingTD === "4") {
                if(accessor === 'appHalfProjectedPoints') {
                data[accessor] = data.staticFourPointPerProjection
                }
                if(accessor === 'appFullProjectedPoints') {
                  data[accessor] = data.staticFourPointPerProjection
                  }
                  if(accessor === 'appTEPProjectedPoints') {
                    data[accessor] = data.staticFourPointPerProjection
                    }
                  }
                    if(pointsPerPassingTD === "6") {
                      if(accessor === 'appHalfProjectedPoints') {
                      data[accessor] = data.
                      appQBSixPointForPassingTDProjectedPoints
                      }
                      if(accessor === 'appFullProjectedPoints') {
                        data[accessor] = data.
                        appQBSixPointForPassingTDProjectedPoints
                        }
                        if(accessor === 'appTEPProjectedPoints') {
                          data[accessor] = data.
                          appQBSixPointForPassingTDProjectedPoints
                          }
                     }
                    }
              // console.log(data[accessor])
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
