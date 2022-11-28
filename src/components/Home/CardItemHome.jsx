import React, { useState } from 'react';

const CardItemHome = props => {
  return (
    <li className="navitem__home">
      <a href="/" className="homelink">
        {' '}
        {props.text}
      </a>
    </li>
  );
};

export default CardItemHome;
