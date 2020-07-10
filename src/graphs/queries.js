import { gql } from 'apollo-boost';

const getAllAlerts = gql`
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

const getAllRouteMarkers = gql`
  query {
    routeMarkers @client {
      lat,
      lng,
      icon
    }
  }
`;

const getAllRoutes = gql`
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

const getAllTicketTypes = gql`
  query {
    ticketTypes {
      fareId
      price
      currency
      zones
    }
  }
`;

export {
  getAllAlerts,
  getAllRouteMarkers,
  getAllRoutes,
  getAllTicketTypes
};