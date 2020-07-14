import React from 'react';

const StopItem = ({ item }) => (
  <li>
    <p>{item.code} - {item.name}</p>
  </li>
);

export default StopItem;
