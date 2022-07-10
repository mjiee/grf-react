import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo {
  name: string;
  avatar: string;
  role: number; // super: 3, admin: 2, general: 1
}

export interface UserState {
  isLogin: boolean; // 是否登陆
  userInfo: UserInfo;
}

// 网站主题和语言配置
const userSlice = createSlice({
  name: "config",
  initialState: { isLogin: true, userInfo: { name: "", avatar: "", role: 3 } },
  reducers: {
    setLogin: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserInfo: (state: UserState, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin, setUserInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;
