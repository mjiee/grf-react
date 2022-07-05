import { baseApi } from "./bash";

// 用户登陆和认证
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.query<any, any>({
      query: (data: any) => `/auth/login?phone=${data.phone}&password=${data.password}`,
      transformResponse: (response: any) => response,
    }),
    register: builder.query<any, any>({
      query: (data: any) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: any) => response,
    }),
  }),
});

export const { useLoginQuery, useRegisterQuery } = authApi;
