import React from 'react';

function HomeSiteName(props) {
  return (
    <div className="sitename__container">
      <h1 className="siteName">
        <div className={props.dfsClass}>Daily</div>
        <div className="homepage__spacer"></div>
        <div className={props.dynastyClass}>Dynasties</div>
      </h1>
    </div>
  );
}

export default HomeSiteName;
