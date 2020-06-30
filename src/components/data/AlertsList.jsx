import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { AlertItem } from 'components';

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
    <ul>
      {data?.alerts.map((item, i) => (
        <AlertItem
          item={item}
          key={i}
        />
      ))}
    </ul>
  );
};

export default AlertsList;
