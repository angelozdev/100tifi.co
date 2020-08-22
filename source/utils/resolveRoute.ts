const resolveRoute = (route: string) => {
   if (route.length <= 3) {
      const validRoute: string = route === '/' ? route : '/:id';
      return validRoute;
   } else {
      return `/${route}`;
   }
};

export default resolveRoute;
