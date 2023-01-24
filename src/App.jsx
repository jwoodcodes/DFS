import { useState } from 'react';
import styled from 'styled-components';

import HomeSiteName from './components/Home/HomeSiteName';
import DFSCard from './components/Home/DFSCard';
import DynastyCard from './components/Home/DynastyCard';
import TestDataFetch from './components/Home/FetchDataTest';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HomeSiteName />
      <CardWrapper>
        <DFSCard />
        <DynastyCard />
      </CardWrapper>
      <TestDataFetch />
    </div>
  );
}

const CardWrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  grid-gap: 5rem;
  height: 50vh;
`;

export default App;
