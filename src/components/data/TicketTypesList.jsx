import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { TicketTypeItem } from 'components';

const TICKET_TYPES_QUERY = gql`
  query {
    ticketTypes {
      fareId
      price
      currency
      zones
    }
  }
`;

function TicketTypesList() {
  const { loading, error, data } = useQuery(TICKET_TYPES_QUERY);

  return (
    <ul>
      {data?.ticketTypes.map((item, i) => (
        <TicketTypeItem
          item={item}
          key={i}
        />
      ))}
    </ul>
  );
};

export default TicketTypesList;
