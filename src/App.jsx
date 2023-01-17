import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

import HomeSiteName from './components/Home/HomeSiteName';
import DFSCard from './components/Home/DFSCard';
import DynastyCard from './components/Home/DynastyCard';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HomeSiteName />
      <div className="card_container card_container--homepage">
        <DFSCard />
        <DynastyCard />
      </div>
    </div>
  );
}

export default App;
