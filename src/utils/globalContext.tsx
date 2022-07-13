import React, { createContext, useState, useEffect, useContext } from "react";
import { changeTheme } from "./changeTheme";

interface GlobalConfig {
  lang: string; // 语言
  setLang: (value: string) => void;
  theme: boolean; // 主题, dark模式: true, light模式: false
  setTheme: (value: boolean) => void;
  width: number; // 实时获取屏幕宽度
}

export const GlobalContext = createContext<GlobalConfig>({
  lang: "zh-CN",
  setLang: () => {
    1;
  },
  theme: false,
  setTheme: () => {
    1;
  },
  width: 0,
});

// ConfigProvider 全局属性Provider
export function ConfigProvider(props: { children: React.ReactNode }) {
  const [lang, setLang] = useState("zh-CN");
  const [theme, setTheme] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <GlobalContext.Provider
      value={{
        lang,
        setLang,
        theme,
        setTheme,
        width,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

// 获取全局属性的hook
const useGlobalConf = () => {
  return useContext<GlobalConfig>(GlobalContext);
};

export default useGlobalConf;
