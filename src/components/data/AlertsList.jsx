import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { AlertItem } from 'components';
import styled from 'styled-components';

const Root = styled.ul`
  padding-inline-start: 0px;
  list-style-type: none;
`;

const ALERTS_QUERY = gql`
  query {
    alerts {
      route {
        shortName
        longName
      }
      alertSeverityLevel
      alertCause
      alertEffect
      effectiveStartDate
      effectiveEndDate
      alertHeaderText
      alertDescriptionText
    }
  }
`;

function AlertsList() {
  const { loading, error, data } = useQuery(ALERTS_QUERY);

  return (
    <Root>
      {data?.alerts.map((item, i) => (
        <AlertItem
          item={item}
          key={i}
        />
      ))}
    </Root>
  );
};

export default AlertsList;
