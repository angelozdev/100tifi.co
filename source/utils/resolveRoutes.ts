export const resolveRoutes = (route: string) => {
   if (route.length <= 3) {
      const validRoute = route === '/' ? route : '/:id';
      return validRoute;
   } else {
      return `/${route}`
   }
}