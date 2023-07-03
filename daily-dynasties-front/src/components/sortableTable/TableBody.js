import styles from '@/styles/table.module.css';

export default function TableBody({ tableData, columns }) {
  return (
    <tbody>
      {tableData.map(data => {
        return (
          <tr key={data.id}>
            {columns.map(({ accessor }) => {
              //   console.log(data.myOverallRank);

              const tData = data[accessor] ? data[accessor] : '——';
              return <td key={accessor}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
}
