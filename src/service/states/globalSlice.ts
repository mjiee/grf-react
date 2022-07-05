import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Locale } from "@arco-design/web-react/es/locale/interface";
import zhCN from "@arco-design/web-react/es/locale/zh-CN";
import enUS from "@arco-design/web-react/es/locale/en-US";

export interface GlobalState {
  lang: Locale; // zh-CN, en-US
  theme: boolean; // true为dark模式, false为light模式
  isLogin: boolean; // 是否登陆
  userInfo?: {
    name?: string;
    avatar?: string;
    role?: number; // super: 0, admin: 1, general: 2
  };
}

// 网站主题和语言配置
const globalSlice = createSlice({
  name: "config",
  initialState: { lang: zhCN, theme: false, isLogin: false },
  reducers: {
    setLang: (state: GlobalState) => {
      state.lang = state.lang == zhCN ? enUS : zhCN;
    },
    setTheme: (state: GlobalState) => {
      state.theme = state.theme ? false : true;
      if (state.theme) document.body.setAttribute("arco-theme", "dark");
      else document.body.removeAttribute("arco-theme");
    },
    setLogin: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserInfo: (state: GlobalState, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLang, setTheme, setLogin, setUserInfo } = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
