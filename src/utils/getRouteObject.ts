import { RouteObject } from "react-router-dom";
import { AppRouter } from "routes";

// 路由加载
export function getRouteObject(
  isLogin: boolean,
  userRole: number,
  routes: AppRouter[],
) {
  const result: RouteObject[] = [];

  routes.forEach((route) => {
    const childIsLogin = (route.children || []).filter((child) => {
      return child.isLogin ? child.isLogin && isLogin : true;
    });

    if (route.children?.length && childIsLogin?.length) {
      if (route.children?.length)
        result.push({
          path: route.path,
          element: route.element,
          children: getRouteObject(isLogin, userRole, childIsLogin),
        });
    }

    const routeRoleAllow = route.userRole
      ? (route.userRole as number) <= userRole
      : true;

    if (!route.children?.length && routeRoleAllow) {
      result.push({
        path: route.path,
        element: route.element,
      });
    }
  });

  return result;
}
