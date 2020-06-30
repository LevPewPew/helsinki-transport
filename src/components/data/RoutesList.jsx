import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { RouteItem } from 'components';

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
    <ul>
      {data?.routes.map((item, i) => (
        <RouteItem
          item={item}
          key={i}
        />
      ))}
    </ul>
  );
};

export default RoutesList;
