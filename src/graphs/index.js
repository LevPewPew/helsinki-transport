import typeDefs from './type-defs.graphql'
import { resolvers } from './resolvers';
import {
  getAllAlerts,
  getRouteStops,
  getAllRoutes,
  getAllTicketTypes,
  getModalDisplayed,
  getStops
} from './queries';

const queries = {
  getAllAlerts,
  getRouteStops,
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