import React from 'react';
import styles from '@/styles/table.module.css';

export default function TableHead({ columns, handleSorting, isSortBySelectedTeamChecked, setIsSortBySelectedTeamChecked, pointsPerPassingTD }) {
  //   console.log(columns);
  const [sortField, setSortField] = React.useState('appFullProjectedPoints');
  const [order, setOrder] = React.useState('desc');

  React.useEffect(() => {
    handleSorting('appFullProjectedPoints', 'desc');
  }, []);

  

//  console.log(isSortBySelectedTeamChecked)

  // React.useEffect((accessor) => {
  //   if(isSortBySelectedTeamChecked) {
  //     // handleSorting('appTEPProjectedPoints', 'desc')
      
  //    handleSorting('isOnSelectedTeam', 'desc');
  //   }
  //   if(!isSortBySelectedTeamChecked) {
  //     handleSorting('appFullProjectedPoints', 'desc')
      
  //     handleSortingChange(accessor)
  //   }
  // }, [isSortBySelectedTeamChecked]);

  

  const handleSortingChange = accessor => {
    // console.log(accessor);
    const sortOrder =
      accessor === sortField && order === 'desc' ? 'asc' : 'desc';
      setIsSortBySelectedTeamChecked(false)
      
    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
    
  };

  return (
    <thead>
      <tr>
        <th className={styles.tableHead}>Rank</th>
        {columns.map(({ label, accessor }) => {
          return (
            <th
              className={styles.tableHead}
              key={accessor}
              onClick={() => handleSortingChange(accessor)}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
