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
      lng
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
        gtfsId
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

const getModalDisplayed = gql`
  query {
    modalDisplayed @client
  }
`;

const getStops = gql`
  query Stop($ids: [String]) {
    stops(ids: $ids) {
      gtfsId
      name
      lat
      lon
    }
  }
`;

export {
  getAllAlerts,
  getAllRouteMarkers,
  getAllRoutes,
  getAllTicketTypes,
  getModalDisplayed,
  getStops
};