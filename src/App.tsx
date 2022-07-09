import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "@arco-design/web-react";
import { componentConf } from "theme/arcoConfig";
import { useGlobalConf, getArcoLocale } from "utils/index";
import { Home } from "views/home/index";
import { Auth, SignIn, SignUp } from "views/auth/index";

function App() {
  const lang = useGlobalConf().lang as string;

  return (
    <BrowserRouter>
      <ConfigProvider
        locale={getArcoLocale(lang)}
        componentConfig={componentConf}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
