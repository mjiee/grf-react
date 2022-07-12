import { RouteObject } from "react-router-dom";
import { AppRouter } from "routes";

// 路由守卫
export function getRouteObject(
  isLogin: boolean,
  userRole: number,
  routes: AppRouter[],
  prePath?: string,
) {
  const result: RouteObject[] = [];

  routes.forEach((route) => {
    if (!prePath && route.children) {
      const needLoginRoutes = (route.children || []).filter((child) => {
        return child.isLogin ? child.isLogin && isLogin : true;
      });

      const childRoutes = needLoginRoutes.filter((child) => !child.children);
      needLoginRoutes
        .filter((child) => child.children)
        .forEach((child) => {
          for (const elem of child.children as AppRouter[])
            childRoutes.push({ ...elem, path: child.path + "/" + elem.path });
        });

      result.push({
        path: route.path,
        element: route.element,
        children: getRouteObject(isLogin, userRole, childRoutes, route.path),
      });
    }

    const roleAllow = route.userRole
      ? (route.userRole as number) <= userRole
      : true;

    if (!route.children && roleAllow) {
      result.push({
        path: prePath
          ? prePath != "/"
            ? prePath + "/" + route.path
            : prePath + route.path
          : route.path,
        element: route.element,
      });
    }
  });

  return result;
}
