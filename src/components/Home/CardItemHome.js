import React, { useState } from 'react';

const CardItemHome = props => {
  // const [value, setValue] = useState('');
  return <li className="navitem__home">{props.text}</li>;
};

export default CardItemHome;
