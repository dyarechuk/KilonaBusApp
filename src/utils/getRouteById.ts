import routes from '../data/routes.json';

export const getRouteById = (routeId: string) => {
  return routes.busRoutes.find(route => route.id === routeId);
};
