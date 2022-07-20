import { baseApi, ResponseType } from "./bash";

interface Signup {
  name: string;
  phone: string;
  password: string;
  admin: boolean;
}

// 用户登陆和认证
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.query<ResponseType, { phone: string; password: string }>({
      query: (data: { phone: string; password: string }) =>
        `/auth/signin?phone=${data.phone}&password=${data.password}&admin=true`,
      transformResponse: (response: ResponseType) => response,
    }),
    signup: builder.query<ResponseType, Signup>({
      query: (data: Signup) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: ResponseType) => response,
    }),
  }),
});

export const {
  useSigninQuery,
  useSignupQuery,
  useLazySigninQuery,
  useLazySignupQuery,
} = authApi;
