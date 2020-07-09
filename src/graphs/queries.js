import { gql } from 'apollo-boost';

const getAlerts = gql`
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

const getRouteMarkers = gql`
  query {
    routeMarkers @client {
      lat,
      lng,
      icon
    }
  }
`;

const getRoutes = gql`
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

const getTicketTypes = gql`
  query {
    ticketTypes {
      fareId
      price
      currency
      zones
    }
  }
`;

// TODO change these to getAlerts, getRoutes, etc
export {
  getAlerts,
  getRouteMarkers,
  getRoutes,
  getTicketTypes
};