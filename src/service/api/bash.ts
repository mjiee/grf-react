import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import type { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { setAuth } from "service/states/userSlice";
import { RootState } from "service/store";

// 数据响应类型
export interface ResponseType {
  status: number;
  data: any;
  message: string;
}

// 请求头配置
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers: Headers, api: { getState: () => unknown }) => {
    const token = (api.getState() as RootState).user.auth;
    headers.set("Authorization", `${token.type} ${token.token}`);
    return headers;
  },
});

// 自定义请求拦截
const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // 自动更新jwt token
  const token = (api.getState() as RootState).user.auth;
  if (token.expires != 0 && token.expires - Date.now() < 1800) {
    const result: QueryReturnValue<
      unknown,
      FetchBaseQueryError,
      FetchBaseQueryMeta
    > = await baseQuery("/auth/renewToken", api, extraOptions);

    const { data } = result.data as ResponseType;
    if (data && data.status != 0) {
      console.log(`renewToken: ${data.message}`); // 错误处理
    } else if (data && data.data) {
      api.dispatch(setAuth(data.data)); // 更新token
    }
  }

  // 自定义拦截器
  const result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta> =
    await baseQuery(args, api, extraOptions);

  const { data, error } = result;

  if (error) {
    console.log(`stauts: ${error.status}; msg: ${error.data}`);
    if (error.status == 403) window.location.replace("/error/403");
    if (error.status == 500) window.location.replace("/error/500");
    window.location.replace("/other");
  } else if (data?.status == 20001) {
    console.log("登陆已失效, 请重新登陆");
    window.location.replace("/auth/signin");
  }
  return result;
};

// api基础配置
export const baseApi = createApi({
  reducerPath: "api",
  tagTypes: ["userList"],
  baseQuery: baseQueryWithAuth,
  endpoints: () => ({}),
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
});
