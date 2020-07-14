import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { RouteItem } from 'components';
import GridLoader from 'react-spinners/GridLoader';
import { queries } from 'graphs';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
  overflow-y: scroll;
  padding-inline-start: 0px;
  list-style-type: none;

  .spinner-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function RoutesList() {
  const { loading, error, data } = useQuery(queries.getAllRoutes);

  if (error) return <div>Query Error: {error}</div>;
  return (
    <Root>
      <div className="spinner-container" style={{display: loading ? 'flex' : 'none'}}>
        <GridLoader
          size={50}
          color={"gray"}
          loading={loading}
        />
      </div>
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
