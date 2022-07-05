import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { ConfigProvider } from "@arco-design/web-react";
import { Locale } from "@arco-design/web-react/es/locale/interface";
import { store, RootState } from "service/store";
import { componentConf } from "theme/index";
import Home from "views/home/index";
import Auth from "views/auth/index";

function App() {
  const lang = useSelector<RootState, Locale>((state) => state.global.lang);
  const isLogin = useSelector<RootState, boolean>(
    (state) => state.global.isLogin,
  );

  useEffect(() => {
    if (!isLogin) {
      window.location.pathname = "/auth/login";
    }
  });

  return (
    <BrowserRouter>
      <ConfigProvider locale={lang} componentConfig={componentConf}>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth" element={<Auth />} />
          </Routes>
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
