import { useState } from 'react';

import './App.css';

import HomeSiteName from './components/Home/HomeSiteName';
import Card from './components/Home/card';
import CardItemHome from './components/Home/CardItemHome';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HomeSiteName
        dfsClass="daily homepage__daily active_homepage__daily "
        dynastyClass="dynasty homepage__dynasties"
      />
      <div className="card_container card_container--homepage">
        <Card
          whichCard="dfs"
          class="card__item card__item--homepage card__item--dfshomepage"
          message="DFS Tools & Projections"
          items={[
            <CardItemHome text="Projections By Position" />,
            <CardItemHome text="Stacking Projections" />,
            <CardItemHome text="Team & Game Environment Breakdowns" />,
            <CardItemHome text="Ownership Projections" />,
            <CardItemHome text="Lineup Builder" />,
          ]}
        />

        <Card
          whichCard="dynasty"
          class="card__item card__item--homepage card__item--dynastyhomepage"
          message="Dynasty Tools & Projections"
          items={[
            <CardItemHome text="Managed Lineup Projections" />,
            <CardItemHome text="Sleeper Command Center" />,
            <CardItemHome text="PCW Dynasty Trade Calculator" />,
            <CardItemHome text="Player Exposure Tool" />,
            <CardItemHome text="QB Prospect Model" />,
          ]}
        />
      </div>
    </div>
  );
}

export default App;
