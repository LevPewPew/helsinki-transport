import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AlertItem, DataList, DataListItemCard } from 'components';
import { queries } from 'graphs';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
  padding-inline-start: 0px;
  list-style-type: none;
`;

function AlertsList() {
  const { loading, error, data } = useQuery(queries.getAllAlerts);

  return (
    <Root>
      <DataList
        error={error}
        loading={loading}
      >
        {data?.alerts.map((item, i) => (
          <DataListItemCard>
            <AlertItem
              item={item}
              key={`AlertItem${i}`}
            />
          </DataListItemCard>
        ))}
      </DataList>
    </Root>
  );
};

export default AlertsList;
