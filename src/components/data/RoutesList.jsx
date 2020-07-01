import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { RouteItem } from 'components';
import styled from 'styled-components';

const Root = styled.ul`
  padding-inline-start: 0px;
  list-style-type: none;
`;

const ROUTES_QUERY = gql`
  query {
    routes {
      shortName
      longName
      mode
      stops {
        name
      }
    }
  }
`;

function RoutesList() {
  const { loading, error, data } = useQuery(ROUTES_QUERY);

  return (
    <Root>
      {data?.routes.map((item, i) => (
        <RouteItem
          item={item}
          key={i}
        />
      ))}
    </Root>
  );
};

export default RoutesList;
