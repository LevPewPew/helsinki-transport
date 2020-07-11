import typeDefs from './type-defs.graphql'
import { resolvers } from './resolvers';
import {
  getAllAlerts,
  getAllRouteMarkers,
  getAllRoutes,
  getAllTicketTypes,
  getModalDisplayed,
  getStops
} from './queries';

const queries = {
  getAllAlerts,
  getAllRouteMarkers,
  getAllRoutes,
  getAllTicketTypes,
  getModalDisplayed,
  getStops
};

export {
  queries,
  resolvers,
  typeDefs
};