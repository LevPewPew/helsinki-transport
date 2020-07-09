import typeDefs from './type-defs.graphql'
import { resolvers } from './resolvers';
import {
  getAlerts,
  getRouteMarkers,
  getRoutes,
  getTicketTypes
} from './queries';

const queries = {
  getAlerts,
  getRouteMarkers,
  getRoutes,
  getTicketTypes
};

export {
  queries,
  resolvers,
  typeDefs
};