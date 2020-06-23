import React from 'react';

const TicketTypeItem = ({ item }) => (
  <div>
    <p><strong>{item.fareId}</strong></p>
    <p>{item.price} {item.currency}</p>
    <p><em>Zones:</em></p>
    <ul>
      {item.zones.map((zone) => <li>{zone}</li>)}
    </ul>
  </div>
);

export default TicketTypeItem;
