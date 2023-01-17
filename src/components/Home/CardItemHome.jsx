import React, { useState } from 'react';
import styled from 'styled-components';

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
