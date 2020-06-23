import React from 'react';

const RouteItem = ({ item }) => (
  <div>
    <p><strong>{item.shortName}, {item.longName}</strong></p>
    <p>{item.mode}</p>
  </div>
);

export default RouteItem;
