import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import type { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { setAuth } from "service/states/authSlice";
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
    const token = (api.getState() as RootState).auth;
    headers.set("Authorization", `${token.token_type} ${token.access_token}`);
    return headers;
  },
});

// 自动更新认证token
const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const token = (api.getState() as RootState).auth;

  if (token.expires_at != 0 && token.expires_at - Date.now() < 1800) {
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

  return await baseQuery(args, api, extraOptions);
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
