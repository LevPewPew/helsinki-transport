import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { TicketTypeItem } from 'components';
import GridLoader from 'react-spinners/GridLoader';
import { queries } from 'graphs';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
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

function TicketTypesList() {
  const { loading, error, data } = useQuery(queries.getAllTicketTypes);

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
