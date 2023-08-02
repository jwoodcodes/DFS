import styles from '@/styles/table.module.css';
import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function Table({ data }) {
  const [tableData, setTableData] = React.useState(data);

  const columns = [
    { label: 'Player Name', accessor: 'name' },
    { label: 'Pos.', accessor: 'position' },
    // { label: 'Team', accessor: 'team' },
    { label: 'MK Rank', accessor: 'marketOverallRank' },
    { label: 'MK Pos. Rank', accessor: 'marketPositionRank' },
    { label: 'MK Value', accessor: 'marketValue' },
    { label: 'My Rank', accessor: 'myOverallRank' },
    { label: 'My Pos. Rank', accessor: 'myPositionRank' },
    { label: 'My Value', accessor: 'myValue' },
    {
      label: 'MK vs My Value',
      accessor: 'valueDiffBetweenMyValueAndMarketValue',
    },
    {
      label: 'PNODV',
      accessor: 'projectedNextOffseasonDynastyValue',
    },
    {
      label: 'CMV Vs PNODV',
      accessor: 'valueDifferenceBetweenCurrentMarketValueAndPNODV',
    },
  ];

  // projectedNextOffseasonDynastyValue
  //valueDifferenceBetweenCurrentMarketValueAndPNODV

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

  return (
    <>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <caption className={styles.caption}>
            My Dynasty Rankings & Values vs. Current Market Rankings & Values
          </caption>
          <TableHead columns={columns} handleSorting={handleSorting} />
          <TableBody columns={columns} tableData={tableData} />
        </table>
      </div>
    </>
  );
}
