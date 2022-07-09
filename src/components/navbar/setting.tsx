import React from "react";
import { Space, Trigger } from "@arco-design/web-react";
import { useGlobalConf } from "utils/index";
import { SettingTheme } from "./themeSetting";
import { SettingLanguage } from "./languageSetting";
import { SettingUser } from "./userSetting";
import styles from "./styles/index.module.less";

// 响应式顶部导航栏
export function SettingNav() {
  const width = useGlobalConf().width as number;
  const breakpoint = 960;
  return width < breakpoint ? <TopSettingFold /> : <TopSettingOpen />;
}

// 顶部导航栏则叠
function TopSettingFold() {
  return (
    <div className={styles.icon}>
      <Trigger
        className={styles.icon}
        position="bottom"
        trigger={["click", "hover"]}
        popup={() => (
          <Space className={styles.icon} direction={"vertical"} size="small">
            <SettingLanguage position="lt" />
            <SettingTheme position="lt" />
          </Space>
        )}
      >
        <div>
          <SettingUser />
        </div>
      </Trigger>
    </div>
  );
}

// 顶部导航栏展开
function TopSettingOpen() {
  return (
    <Space className={styles.icon} size="medium">
      <SettingLanguage position="bottom" />
      <SettingTheme position="bottom" />
      <SettingUser />
    </Space>
  );
}
