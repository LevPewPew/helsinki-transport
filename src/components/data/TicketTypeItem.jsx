import React from 'react';
import styled from 'styled-components';

const Root = styled.li`
  p {
    margin: 0.5rem 0;
  }
`;

function TicketTypeItem({ item }) {
  let currencySymbol;
  switch(item.currency) {
    case 'EUR':
      currencySymbol = '&euro;';
      break;
    default:
      currencySymbol = '$';
  }

  return (
    <Root>
      <p>
        <span><strong>{item.fareId}</strong></span>
        <span>&nbsp;-&nbsp;</span>
        <span dangerouslySetInnerHTML={{__html: currencySymbol}}></span>
        <span> {item.price}</span>
      </p>
      <p>
        <em>Valid Zones: </em>
        {item.zones.map((zone, i) => (
          i !== item.zones.length - 1 ?
          <span>{zone}, </span> :
          <span>{zone}</span>
        ))}
      </p>
    </Root>
  );
}

export default TicketTypeItem;
