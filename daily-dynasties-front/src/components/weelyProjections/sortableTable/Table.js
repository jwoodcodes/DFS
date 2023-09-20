// import styles from '@/styles/table.module.css';
import styles from '@/styles/tableWeeklyProjections.module.css';
import React, { useEffect } from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { Libre_Caslon_Display } from 'next/font/google';

export default function Table({ data, selectedLeagueRosterNamesArray,
  isSortBySelectedTeamChecked, setIsSortBySelectedTeamChecked, pointsPerPassingTD  }) {
  const [tableData, setTableData] = React.useState(data);

  // console.log(isSortBySelectedTeamChecked)

  const columns = [
    { label: 'Player Name', accessor: 'name' },
    { label: 'Pos.', accessor: 'position' },
    // { label: 'Team', accessor: 'team' },
    { label: 'Team', accessor: 'team' },
    { label: 'Half PPR', accessor: 'appHalfProjectedPoints' },
    { label: 'Full PPR', accessor: 'appFullProjectedPoints' },
    { label: 'TEP PPR', accessor: 'appTEPProjectedPoints' },
    { label: 'isOnSelectedTeam', accessor: 'isOnSelectedTeam'}
  ];

  const handleSorting = (sortField, sortOrder) => {
    // console.log(sortField, sortOrder);

    if (sortField) {
      const sorted = [...tableData].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
            numeric: true,
          }) * (sortOrder === 'asc' ? 1 : -1)
        );
      });

      setTableData(sorted);
    }
  };


 React,useEffect(() => {
  
  handleSorting('appFullProjectedPoints', 'desc');
 }, [pointsPerPassingTD])
  

  return (
    <>
      <div className={styles.table_container}>
        
        <table className={styles.table}>
          {/* <caption className={styles.caption}>Weekly Projections</caption> */}
          <TableHead columns={columns} handleSorting={handleSorting} isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}
          setIsSortBySelectedTeamChecked={setIsSortBySelectedTeamChecked} 
          pointsPerPassingTD={pointsPerPassingTD}
          
          />
          <TableBody columns={columns} tableData={tableData} selectedLeagueRosterNamesArray={selectedLeagueRosterNamesArray}
          pointsPerPassingTD={pointsPerPassingTD}
          
          />
        </table>


      </div>
    </>
  );
}
