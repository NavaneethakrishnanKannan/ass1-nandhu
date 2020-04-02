// containerPath will always be relative to src

/*
  {
    path: string,
    exact: oneOf([true, false]),
    routeComponentParent: oneOf(["containers", "components", "UIComponents", "common"]),
    routeComponentPath: string,
    isAuthenticated: oneOf([true, false])
  }
*/

const routes = {
    LOGIN: {
        path: "/",
        exact: true,
        routeComponentParent: "containers",
        routeComponentPath: "LoginContainer"
    },
    REGISTER: {
        path: "/register",
        routeComponentParent: "containers",
        routeComponentPath: "RegisterContainer"
    },
    HOME: {
        path: "/home",
        isAuthenticated: false,
        routeComponentParent: "containers",
        routeComponentPath: "HomeContainer"
    },
    MOBILE: {
      path: "/mobile",
      isAuthenticated: false,
      routeComponentParent: "common",
      routeComponentPath: "MobileHeader"
  },
};

export default routes;
