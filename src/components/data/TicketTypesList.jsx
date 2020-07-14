import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { DataList, DataListItemCard, TicketTypeItem } from 'components';
import { queries } from 'graphs';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
  padding-inline-start: 0px;
  list-style-type: none;
`;

function TicketTypesList() {
  const { loading, error, data } = useQuery(queries.getAllTicketTypes);

  return (
    <Root>
      <DataList
        error={error}
        loading={loading}
      >
        {data?.ticketTypes.map((item, i) => (
          <DataListItemCard>
            <TicketTypeItem
              item={item}
              key={`TicketTypeItem${i}`}
            />
          </DataListItemCard>
        ))}
      </DataList>
    </Root>
  );
};

export default TicketTypesList;
