import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { TicketTypeItem } from 'components';
import { queries } from 'graphs';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
  overflow-y: scroll;
  padding-inline-start: 0px;
  list-style-type: none;
`;

function TicketTypesList() {
  const { loading, error, data } = useQuery(queries.getAllTicketTypes);

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Query Error: {error}</div>;
  return (
    <Root>
      {data?.ticketTypes.map((item, i) => (
        <TicketTypeItem
          item={item}
          key={`TicketTypeItem${i}`}
        />
      ))}
    </Root>
  );
};

export default TicketTypesList;
