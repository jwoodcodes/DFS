import React from 'react';

const Card = props => {
  return (
    <div className={props.class}>
      <div className={props.link}>{props.message}</div>

      <ul>
        {props.item1}
        {props.item2}
        {props.item3}
        {props.item4}
        {props.item5}
      </ul>
    </div>
  );
};

export default Card;
