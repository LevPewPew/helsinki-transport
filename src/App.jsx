import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { AlertItem, DataItem, DataList, QueryBtn, RouteItem, TicketTypeItem } from 'components';
import './App.css';

const ALERTS_QUERY = gql`
  query {
    alerts {
      route
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

const ROUTES_QUERY = gql`
  query {
    routes {
      shortName
      longName
      mode
      stops
    }
  }
`;

const TICKET_TYPES_QUERY = gql`
  query {
    ticketTypes {
      fareId
      price
      currency
      zones
    }
  }
`;

function App() {
  const [ gqlRequest, setGqlRequest ] = useState(TICKET_TYPES_QUERY);
  const { loading, error, data } = useQuery(gqlRequest);
  const [ dataItemHtml, setDataItemHtml ] = useState(null);
  
  return (
    <div className="App">
      <QueryBtn
        dataShape={AlertItem}
        gqlRequest={ALERTS_QUERY}
        setDataItemHtml={setDataItemHtml}
        setGqlRequest={setGqlRequest}
        text={"GET alerts"}
        />
      <QueryBtn
        dataShape={RouteItem}
        gqlRequest={ROUTES_QUERY}
        setDataItemHtml={setDataItemHtml}
        setGqlRequest={setGqlRequest}
        text={"GET routes"}
        />
      <QueryBtn
        dataShape={TicketTypeItem}
        gqlRequest={TICKET_TYPES_QUERY}
        setDataItemHtml={setDataItemHtml}
        setGqlRequest={setGqlRequest}
        text={"GET ticketTypes"}
      />
      <DataList>
        {data.map((item) => {
            return (
              <DataItem>
                {dataItemHtml}
              </DataItem>
            )
        })}
      </DataList>
    </div>
  );
}

export default App;
