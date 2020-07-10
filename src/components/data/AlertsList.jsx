import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AlertItem } from 'components';
import { queries } from 'graphs';
import styled from 'styled-components';

const Root = styled.ul`
  height: 100%;
  overflow-y: scroll;
  padding-inline-start: 0px;
  list-style-type: none;
`;

function AlertsList() {
  const { loading, error, data } = useQuery(queries.getAllAlerts);

  return (
    <Root>
      {data?.alerts.map((item, i) => (
        <AlertItem
          item={item}
          key={`AlertItem${i}`}
        />
      ))}
    </Root>
  );
};

export default AlertsList;
