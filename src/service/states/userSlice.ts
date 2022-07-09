import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLogin: boolean; // 是否登陆
  userInfo?: {
    name?: string;
    avatar?: string;
    role?: number; // super: 2, admin: 1, general: 0
  };
}

// 网站主题和语言配置
const userSlice = createSlice({
  name: "config",
  initialState: { isLogin: false },
  reducers: {
    setLogin: (state: UserState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserInfo: (state: UserState, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin, setUserInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;
