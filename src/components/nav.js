import React from 'react';

const Nav = props => {
  return (
    <div className="nav">
      <ul className="nav__container">
        <li className="nav__item">
          <a href={props.link}>{props.page}</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
