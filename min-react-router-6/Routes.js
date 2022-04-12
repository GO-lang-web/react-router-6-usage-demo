import React from "react";
import { useRoutes } from "./hooks";

const Routes = ({ children }) => {
  let routes = [];

  React.Children.forEach(children, (child) => {
    let { element, path } = child;

    let route = {
      element,
      path,
    };

    routes.push(route);
  });

  return useRoutes(routes);
};
export default Routes;
