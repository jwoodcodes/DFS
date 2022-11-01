import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import HomeSiteName from './components/Home/HomeSiteName';
import Card from './components/Home/card';
import CardItemHome from './components/Home/CardItemHome';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HomeSiteName />
      <div className="card_container card_container--homepage">
        <Card
          class="card__item card__item--homepage card__item--dfshomepage"
          message="DFS Tools & Projections"
          item1={<CardItemHome text="Projections By Position" />}
          item2={<CardItemHome text="Stacking Projections" />}
          item3={<CardItemHome text="Team & Game Environment Breakdowns" />}
          item4={<CardItemHome text="Ownership Projections" />}
          item5={<CardItemHome text="Lineup Builder" />}
        />

        <Card
          class="card__item card__item--homepage card__item--dynastyhomepage"
          message="Dynasty Tools & Projections"
          item1={<CardItemHome text="Managed Lineup Projections" />}
          item2={<CardItemHome text="Sleeper Command Center" />}
          item3={<CardItemHome text="PCW Dynasty Trade Calculator" />}
          item4={<CardItemHome text="Player Exposure Tool" />}
          item5={<CardItemHome text="QB Prospect Model" />}
        />
      </div>
    </div>
  );
}

export default App;
