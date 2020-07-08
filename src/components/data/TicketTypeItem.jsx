import React from 'react';

const TicketTypeItem = (props) => {
  const { item } = props;
  
  return (
    <li>
      <p><strong>{item.fareId}</strong></p>
      <p>{item.price} {item.currency}</p>
      <p><em>Zones:</em></p>
      <ul>
        {item.zones.map((zone) => <li>{zone}</li>)}
      </ul>
    </li>
  )
};

export default TicketTypeItem;
