import {
  configureStore,
  combineReducers,
  isRejectedWithValue,
  Middleware,
  //  MiddlewareAPI,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";

import { baseApi } from "service/api/index";
import { authReducer, userReducer } from "service/states/index";

// 组合缓存器
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

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
  return [rtkQueryErrorLogger, ...getDefaultMiddleware(), baseApi.middleware];
};

// 创建store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 配置监听器
setupListeners(store.dispatch);
