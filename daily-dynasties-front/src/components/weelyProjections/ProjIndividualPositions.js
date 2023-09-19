import Table from '@/components/weelyProjections/sortableTable/Table';
import React from 'react';

export default function ProjIndividualPositions({ data, positionToShow, isSortBySelectedTeamChecked }) {
  //   console.log(data);
  const [dataToUse, setDataToUse] = React.useState(data);
  //   console.log(positionToShow);

  React.useEffect(
    data => {
      setDataToUse(data);
    },
    [data]
  );

  return <Table data={dataToUse} isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}/>;
}
