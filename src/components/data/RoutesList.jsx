import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { DataList, DataListItemCard, RouteItem } from 'components';
import { queries } from 'graphs';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
  padding-inline-start: 0px;
  list-style-type: none;
`;

function RoutesList() {
  const { loading, error, data } = useQuery(queries.getAllRoutes);

  return (
    <Root>
      <DataList
        error={error}
        loading={loading}
      >
        {data?.routes.map((item, i) => (
          <DataListItemCard
            // animate
            index={i}
          >
            <RouteItem
              item={item}
              key={`RouteItem${i}`}
            />
          </DataListItemCard>
        ))}
      </DataList>
    </Root>
  );
};

export default RoutesList;
