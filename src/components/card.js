import React from 'react';

const Card = props => {
  return (
    <div className={props.class}>
      <div className={props.link}>{props.message}</div>

      <div>
        {props.item1}
        {props.item2}
        {props.item3}
        {props.item4}
        {props.item5}
        {props.item6}
        {props.item7}
        {props.item8}
        {props.item9}
        {props.item10}
        {props.item11}
        {props.item12}
      </div>
    </div>
  );
};

// {
//   /* <a href="/Dynasty">Dynasty Tools & Projections</a> */
// }

export default Card;
