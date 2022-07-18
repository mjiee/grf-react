import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo {
  name?: string;
  avatar?: string;
  phone?: string;
  password?: string;
  role?: number; // super: 3, admin: 2, general: 1
  describe?: string;
}

// jwt认证信息
export interface Auth {
  token: string;
  expires: number;
  type: string;
}

export interface UserState {
  isLogin: boolean; // 是否登陆
  userInfo?: UserInfo;
  auth?: Auth;
}

// 用户状态配置
const userSlice = createSlice({
  name: "config",
  initialState: {
    isLogin: false,
    userInfo: {
      name: "",
      avatar: "",
      phone: process.env.REACT_APP_INIT_PHONE
        ? process.env.REACT_APP_INIT_PHONE
        : "",
      password: process.env.REACT_APP_INIT_PASSWORD
        ? process.env.REACT_APP_INIT_PASSWORD
        : "",
      role: 1,
    },
    auth: { token: "", expires: 0, type: "Bearer" },
  },
  reducers: {
    setLogin: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserInfo: (state: UserState, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    setAuth: (state: UserState, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
    },
  },
});

export const { setLogin, setUserInfo, setAuth } = userSlice.actions;
export const userReducer = userSlice.reducer;
