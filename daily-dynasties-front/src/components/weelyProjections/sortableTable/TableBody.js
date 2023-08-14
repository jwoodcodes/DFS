import styles from '@/styles/table.module.css';
import React from 'react';

export default function TableBody({ tableData, columns }) {
  let num = 0;

  let id = React.useId();

  return (
    <tbody>
      {tableData.map(data => {
        num = num + 1;

        return (
          <tr key={data.id}>
            <td>{num}</td>
            {columns.map(({ accessor }) => {
              //   console.log(data.myOverallRank);
              let uniqueNum = Math.random();

              const tData = data[accessor] ? data[accessor] : '——';
              return (
                <td key={`${id}-${accessor}-${num}-${uniqueNum}`}>{tData}</td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
