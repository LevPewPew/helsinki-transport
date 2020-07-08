import React from 'react';

const RouteItem = (props) => {
  const { item } = props;
  
  return (
    <li>
      <p><strong>{item.shortName}, {item.longName}</strong></p>
      <p>{item.mode}</p>
    </li>
  )
};

export default RouteItem;
