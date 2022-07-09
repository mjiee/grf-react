import { Locale } from "@arco-design/web-react/es/locale/interface";
import zhCN from "@arco-design/web-react/es/locale/zh-CN";
import enUS from "@arco-design/web-react/es/locale/en-US";

export function getArcoLocale(lang: string): Locale {
  switch (lang) {
    case "zh-CN":
      return zhCN;
    case "en-US":
      return enUS;
    default:
      return zhCN;
  }
}
