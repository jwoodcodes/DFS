import styles from '@/styles/table.module.css';
import React from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default function Table({ data }) {
  const [tableData, setTableData] = React.useState(data);

  const columns = [
    { label: 'Player Name', accessor: 'name' },
    { label: 'Position', accessor: 'position' },
    { label: 'Team', accessor: 'team' },
    { label: 'Market Rank', accessor: 'marketOverallRank' },
    { label: 'Market Position Rank', accessor: 'marketPositionRank' },
    { label: 'Market Dynasty Value', accessor: 'marketValue' },
    { label: 'My Rank', accessor: 'myOverallRank' },
    { label: 'My Position Rank', accessor: 'myPositionRank' },
    { label: 'My Dynasty Value', accessor: 'myValue' },
    {
      label: 'My Value vs. Market',
      accessor: 'valueDiffBetweenMyValueAndMarketValue',
    },
    {
      label: 'PNODV',
      accessor: 'projectedNextOffseasonDynastyValue',
    },
    {
      label: 'Current Market Vs. PNODV',
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
      <table className={styles.table}>
        <caption className={styles.caption}>
          My Dynasty Rankings & Values vs. Current Market Rankings & Values
        </caption>
        <TableHead columns={columns} handleSorting={handleSorting} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
}
