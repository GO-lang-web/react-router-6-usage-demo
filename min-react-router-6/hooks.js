const useRoutes = (routesArr) => {
  let pathname = window.location.pathname;
  return routesArr.map((route) => {
    let isMatch = pathname === route.path || pathname === "/" + route.path;
    return isMatch ? route.element : null;
  });
};
