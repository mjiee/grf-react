import React from "react";
import { Home, Auth } from "./views/layout/index";
import { SignIn, SignUp } from "./views/auth/index";
import { Workspace, Monitor } from "./views/dashboard/index";
import { UserList, ManangerList } from "./views/user/index";
import { ProductList } from "./views/product/index";
import { ErrorPage } from "./views/error/index";

export interface AppRouter {
  name: string; // siderbar一级标题
  title?: string; // siderbar二级标题
  path: string; // 路由路径
  element?: React.ReactNode; // 组件
  isLogin?: boolean; // 是否需要登陆
  userRole?: number; // 访问该组件需要的用户角色
  isNotMunu?: boolean; // 是否不是siderbar菜单栏
  children?: AppRouter[];
}

export const appRoutes: AppRouter[] = [
  {
    name: "home",
    path: "/",
    element: <Home />,
    children: [
      {
        name: "Dashbord",
        title: "工作台",
        path: "dashboard/workspace",
        element: <Workspace />,
        isLogin: true,
      },
      {
        name: "Dashbord",
        title: "数据监控",
        path: "dashboard/monitor",
        element: <Monitor />,
        isLogin: true,
        userRole: 2,
      },
      {
        name: "UserList",
        title: "用户列表",
        path: "user/user",
        element: <UserList />,
        isLogin: true,
        userRole: 2,
      },
      {
        name: "UserList",
        title: "管理员列表",
        path: "user/mananger",
        element: <ManangerList />,
        isLogin: true,
        userRole: 3,
      },
      {
        name: "ProductList",
        title: "产品管理",
        path: "product",
        element: <ProductList />,
        isLogin: true,
        userRole: 2,
      },
    ],
  },
  {
    name: "auth",
    path: "auth",
    element: <Auth />,
    children: [
      {
        name: "signin",
        path: "signin",
        element: <SignIn />,
        isNotMunu: true,
      },
      {
        name: "signup",
        path: "signup",
        element: <SignUp />,
        isNotMunu: true,
      },
    ],
  },
  {
    name: "error",
    path: "*",
    element: <ErrorPage />,
    isNotMunu: true,
  },
];
