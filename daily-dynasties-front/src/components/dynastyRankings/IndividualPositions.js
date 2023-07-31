import Table from '../sortableTable/Table';
import React from 'react';

export default function IndividualPositions({ data, positionToShow }) {
  //   console.log(data);
  const [dataToUse, setDataToUse] = React.useState(data);
  //   console.log(positionToShow);

  React.useEffect(
    data => {
      setDataToUse(data);
    },
    [data]
  );

  return <Table data={dataToUse} />;
}
