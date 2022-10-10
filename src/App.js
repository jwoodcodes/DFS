import './App.css';
import Card from './components/card';
import NavItem from './components/navItem';

function App() {
  return (
    <div className="App">
      <div className="sitename__container">
        <h1 className="siteName">
          <div className="homepage__daily">Daily</div>
          <div className="homepage__spacer"></div>
          <div className="homepage__dynasties">Dynasties</div>
        </h1>
      </div>
      <div className="card_container card_container--homepage">
        {/* make the two cards below start with just a gradient background to the whole card and the
        message then when hovered over transition with a cool tranistion effect the
        opening message going away and being replaced with the links to the
        pages within either DFS or Dynasty */}
        <Card
          class="card__item card__item--homepage card__item--dfshomepage"
          message="DFS Tools & Projections"
          item1={
            <NavItem class="navitem__home" text="Projections By Position" />
          }
          item2={<NavItem class="navitem__home" text="Stacking Projections" />}
          item3={
            <NavItem
              class="navitem__home"
              text="Team & Game Environment Breakdowns"
            />
          }
          item4={<NavItem class="navitem__home" text="Ownership Projections" />}
          item5={<NavItem class="navitem__home" text="Lineup Builder" />}
        />

        <Card
          class="card__item card__item--homepage card__item--dynastyhomepage"
          message="Dynasty Tools & Projections"
          item1={
            <NavItem class="navitem__home" text="Managed Lineup Projections" />
          }
          item2={
            <NavItem class="navitem__home" text="Sleeper Command Center" />
          }
          item3={
            <NavItem
              class="navitem__home"
              text="PCW Dynasty Trade Calculator"
            />
          }
          item4={<NavItem class="navitem__home" text="Player Exposure Tool" />}
          item5={<NavItem class="navitem__home" text="QB Prospect Model" />}
        />
      </div>
    </div>
  );
}

export default App;
