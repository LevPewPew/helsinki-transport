import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RouteItem } from 'components';
import { queries } from 'graphs';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
  overflow-y: scroll;
  padding-inline-start: 0px;
  list-style-type: none;
`;

function RoutesList() {
  const { loading, error, data } = useQuery(queries.getAllRoutes);

  return (
    <Root>
      {data?.routes.map((item, i) => (
        <RouteItem
          item={item}
          key={`RouteItem${i}`}
        />
      ))}
    </Root>
  );
};

export default RoutesList;
