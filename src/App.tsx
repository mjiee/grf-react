import React, { useMemo } from "react";
// import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./service/store";
import { ConfigProvider } from "@arco-design/web-react";
import { componentConf } from "./theme/arcoConfig";
import { useGlobalConf, getArcoLocale } from "./utils/index";
import { appRoutes } from "./routes";
import { getRouteObject } from "./utils/getRouteObject";
// import { Home, Auth } from "views/layout/index";
// import { Dashboard, Monitor } from "views/dashboard/index";
// import { User, Mananger } from "views/user/index";
// import { Product } from "views/product/index";
// import { SignIn, SignUp } from "views/auth/index";
// import { ErrorPage } from "views/error/index";

function App() {
  const lang = useGlobalConf().lang as string;

  const isLogin = useSelector<RootState, boolean>(
    (state) => state.user.isLogin,
  );
  const userRole = useSelector<RootState, number>(
    (state) => state.user.userInfo.role,
  );

  const routeElement = useRoutes(getRouteObject(isLogin, userRole, appRoutes));

  return (
    <ConfigProvider
      locale={getArcoLocale(lang)}
      componentConfig={componentConf}
    >
      {routeElement}
    </ConfigProvider>
  );

  //   return (
  //     <BrowserRouter>
  //       <ConfigProvider
  //         locale={getArcoLocale(lang)}
  //         componentConfig={componentConf}
  //       >
  //         <Routes>
  //           <Route path="/" element={<Home />}>
  //             <Route path="dashboard" element={<Dashboard />} />
  //             <Route path="monitor" element={<Monitor />} />
  //             <Route path="user" element={<User />} />
  //             <Route path="mananger" element={<Mananger />} />
  //             <Route path="product" element={<Product />} />
  //           </Route>
  //           <Route path="auth" element={<Auth />}>
  //             <Route path="signin" element={<SignIn />} />
  //             <Route path="signup" element={<SignUp />} />
  //           </Route>
  //           <Route path="*" element={<ErrorPage />} />
  //         </Routes>
  //       </ConfigProvider>
  //     </BrowserRouter>
  //   );
}

export default App;
