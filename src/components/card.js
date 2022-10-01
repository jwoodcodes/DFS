import React from 'react';

const Card = props => {
  return (
    <div className={props.class}>
      <a href={props.link}>{props.message}</a>
    </div>
  );
};

// {
//   /* <a href="/Dynasty">Dynasty Tools & Projections</a> */
// }

export default Card;
