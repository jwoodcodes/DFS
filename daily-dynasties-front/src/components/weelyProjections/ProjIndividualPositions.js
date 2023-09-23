import Table from '@/components/weelyProjections/sortableTable/Table';
import React from 'react';

export default function ProjIndividualPositions({
  data,
  positionToShow,
  selectedLeagueRosterNamesArray,
  isSortBySelectedTeamChecked,
  setIsSortBySelectedTeamChecked,
  pointsPerPassingTD,
}) {
  //   console.log(data);
  const [dataToUse, setDataToUse] = React.useState(data);
  //   console.log(positionToShow);

  React.useEffect(
    data => {
      setDataToUse(data);
    },
    [data]
  );

  return (
    <Table
      data={dataToUse}
      selectedLeagueRosterNamesArray={selectedLeagueRosterNamesArray}
      isSortBySelectedTeamChecked={isSortBySelectedTeamChecked}
      setIsSortBySelectedTeamChecked={setIsSortBySelectedTeamChecked}
      pointsPerPassingTD={pointsPerPassingTD}
    />
  );
}
