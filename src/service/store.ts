import {
  configureStore,
  combineReducers,
  isRejectedWithValue,
  Middleware,
  //  MiddlewareAPI,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { baseApi } from "service/api/index";
import { userReducer } from "service/states/index";

// 组合缓存器
const rootReducer = combineReducers({
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

// 配置持久化储存
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
  blacklist: [],
};

// 生成持久化存储reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 拦截器, 拦截300 ~ 500的请求错误
const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  // (api: MiddlewareAPI) => (next) => (action) => {
  // 全局状态处理 api.dispatch() 或 api.getState()

  if (isRejectedWithValue(action)) {
    console.warn(`error: ${action.error.status} ${action.error.data.message} `);
    // 自定义错误处理
  }

  return next(action);
};

// 注册中间件
const middlewareHandler = (getDefaultMiddleware: any) => {
  return [
    rtkQueryErrorLogger,
    ...getDefaultMiddleware({
      serializableCheck: { ignoredActions: ["persist/PERSIST"] },
    }),
    baseApi.middleware,
  ];
};

// 创建store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});

export const persistor = persistStore(store); // 持久化存储
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 配置监听器
setupListeners(store.dispatch);
