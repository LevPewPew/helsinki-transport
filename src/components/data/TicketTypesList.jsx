import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { TicketTypeItem } from 'components';
import styled from 'styled-components';

const Root = styled.ul`
  padding-inline-start: 0px;
  list-style-type: none;
`;

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
    <Root>
      {data?.ticketTypes.map((item, i) => (
        <TicketTypeItem
          item={item}
          key={i}
        />
      ))}
    </Root>
  );
};

export default TicketTypesList;
