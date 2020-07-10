import typeDefs from './type-defs.graphql'
import { resolvers } from './resolvers';
import {
  getAllAlerts,
  getAllRouteMarkers,
  getAllRoutes,
  getAllTicketTypes
} from './queries';

const queries = {
  getAllAlerts,
  getAllRouteMarkers,
  getAllRoutes,
  getAllTicketTypes
};

export {
  queries,
  resolvers,
  typeDefs
};