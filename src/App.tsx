import React from "react";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./service/store";
import { ConfigProvider } from "@arco-design/web-react";
import { componentConf } from "./theme/arcoConfig";
import { getArcoLocale } from "./utils/index";
import useGlobalConf from "./utils/globalContext";
import { appRoutes } from "./routes";
import { getRouteObject } from "./utils/getRouteObject";

export default function App() {
  const lang = useGlobalConf().lang as string;

  const isLogin = useSelector<RootState, boolean>(
    (state) => state.user.isLogin,
  );
  const userRole = useSelector<RootState, number>(
    (state) => state.user.userInfo.role,
  );

  return (
    <ConfigProvider
      locale={getArcoLocale(lang)}
      componentConfig={componentConf}
    >
      <AppRoute isLogin={isLogin} userRole={userRole} />
    </ConfigProvider>
  );
}

// AppRoute 可以在屏幕尺寸变化时防止重复渲染
const AppRoute = React.memo(function BuildRoute(props: {
  isLogin: boolean;
  userRole: number;
}) {
  const routeObjec = getRouteObject(props.isLogin, props.userRole, appRoutes);
  const routeElement = useRoutes(routeObjec);
  return <>{routeElement}</>;
});
