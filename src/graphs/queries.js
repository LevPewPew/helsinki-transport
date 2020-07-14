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

const getRouteStops = gql`
  query {
    routeStops @client {
      lat
      lng
      code
      name
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
        code
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
      lat
      lon
      code
      name
    }
  }
`;

export {
  getAllAlerts,
  getRouteStops,
  getAllRoutes,
  getAllTicketTypes,
  getModalDisplayed,
  getStops
};