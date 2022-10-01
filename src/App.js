import './App.css';
import Nav from './components/nav';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Nav />
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
        />
        <Card
          class="card__item card__item--homepage card__item--dynastyhomepage"
          message="Dynasty Tools & Projections"
        />
      </div>

      {/* <div className="footer">
        <footer message="theFFcoder" class="footer footer__homepage" />
      </div> */}
    </div>
  );
}

export default App;
