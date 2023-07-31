import styles from '@/styles/table.module.css';

export default function TableBody({ tableData, columns }) {
  let num = 0;
  return (
    <tbody>
      {tableData.map(data => {
        num = num + 1;
        return (
          <tr key={data.id}>
            <td>{num}</td>
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
