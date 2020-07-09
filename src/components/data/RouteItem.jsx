import React from 'react';

const RouteItem = ({ item }) => (
  <li>
    <p><strong>{item.shortName}, {item.longName}</strong></p>
    <p>{item.mode}</p>
  </li>
);

export default RouteItem;
