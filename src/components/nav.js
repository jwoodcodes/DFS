import React from 'react';

const Nav = props => {
  return (
    <div className="nav">
      <ul className="nav__container">
        <li className="nav__item">
          <a href="/">Home</a>
        </li>
        <li className="nav__item">
          <a href="/Games">Games</a>
        </li>
        <li className="nav__item">
          <a href="/QB">QB's</a>
        </li>
        <li className="nav__item">
          <a href="/RB">RB's</a>
        </li>
        <li className="nav__item">
          <a href="/WR">WR's</a>
        </li>
        <li className="nav__item">
          <a href="/TE">TE's</a>
        </li>
        <li className="nav__item">
          <a href="/FlexandSuperflex">Flex/Superflex</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
