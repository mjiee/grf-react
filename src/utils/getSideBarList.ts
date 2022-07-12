import { AppRouter } from "routes";

export interface SideBarList {
  name: string;
  path: string;
  children?: SideBarList[];
}

// 获取侧边栏, 并根据权限拦截
export function getSideBarList(
  userRole: number,
  routes: AppRouter[],
  prePath?: string,
) {
  const result: SideBarList[] = [];
  routes.forEach((route) => {
    if (route.children && !route.isMenu) {
      const menuList = (route.children || []).filter((child) => child.isMenu);
      menuList.forEach((value) => {
        if (value.children) {
          result.push({
            name: value.name,
            path: buildPath(route.path, value.path),
            children: getSideBarList(
              userRole,
              value.children,
              buildPath(route.path, value.path),
            ),
          });
        } else {
          result.push(
            ...getSideBarList(userRole, [
              { ...value, path: buildPath(route.path, value.path) },
            ]),
          );
        }
      });
    }

    const roleIsAllow = route.userRole ? route.userRole <= userRole : true;
    if (roleIsAllow && route.isMenu)
      result.push({
        name: route.name,
        path: prePath ? prePath + "/" + route.path : route.path,
      });
  });
  return result;
}

function buildPath(prePath: string, nextPath: string) {
  return prePath != "/" ? prePath + "/" + nextPath : prePath + nextPath;
}
