import React from "react";
import { Home, Auth } from "./views/layout/index";
import { SignIn, SignUp } from "./views/auth/index";
import { Workspace, Monitor } from "./views/dashboard/index";
import { User, Mananger } from "./views/user/index";
import { ProductList } from "./views/product/index";
import { ErrorPage } from "./views/error/index";

export interface AppRouter {
  name: string; // siderbar标题
  path: string; // 路由路径
  element?: React.ReactNode; // 组件
  isLogin?: boolean; // 是否需要登陆
  userRole?: number; // 访问该组件需要的用户角色
  isMenu?: boolean; // 是否为siderbar菜单栏
  children?: AppRouter[];
}

export const appRoutes: AppRouter[] = [
  {
    name: "home",
    path: "/",
    element: <Home />,
    children: [
      {
        name: "Dashboard",
        path: "dashboard",
        isLogin: true,
        isMenu: true,
        children: [
          {
            name: "工作台",
            path: "workspace",
            element: <Workspace />,
            isMenu: true,
          },
          {
            name: "数据监控",
            path: "monitor",
            element: <Monitor />,
            userRole: 2,
            isMenu: true,
          },
        ],
      },
      {
        name: "User",
        path: "user",
        isLogin: true,
        isMenu: true,
        children: [
          {
            name: "用户",
            path: "user",
            element: <User />,
            userRole: 2,
            isMenu: true,
          },
          {
            name: "管理员",
            path: "mananger",
            element: <Mananger />,
            userRole: 3,
            isMenu: true,
          },
        ],
      },
      {
        name: "Product",
        path: "product",
        isLogin: true,
        isMenu: true,
        children: [
          {
            name: "产品",
            path: "product",
            element: <ProductList />,
            userRole: 3,
            isMenu: true,
          },
        ],
      },
    ],
  },
  {
    name: "auth",
    path: "/auth",
    element: <Auth />,
    children: [
      {
        name: "signin",
        path: "signin",
        element: <SignIn />,
      },
      {
        name: "signup",
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    name: "error",
    path: "*",
    element: <ErrorPage />,
  },
];
