import React from 'react';
import styles from '@/styles/table.module.css';

export default function TableHead({ columns, handleSorting }) {
  //   console.log(columns);
  const [sortField, setSortField] = React.useState('appFullProjectedPoints');
  const [order, setOrder] = React.useState('asc');

  React.useEffect(() => {
    handleSorting('appFullProjectedPoints', 'desc');
  }, [handleSorting]);

  const handleSortingChange = accessor => {
    console.log(accessor);
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
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
