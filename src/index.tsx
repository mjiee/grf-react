import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "service/store";
import { ConfigProvider } from "utils/globalContext";
import App from "./App";
import "@arco-design/web-react/dist/css/arco.css";
import "./theme/global.module.less";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConfigProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </PersistGate>
  </Provider>,
);
