import React from "react";
import { Space, Trigger } from "@arco-design/web-react";
import { SettingTheme } from "./themeSetting";
import { SettingLanguage } from "./languageSetting";
import { SettingUser } from "./userSetting";
import styles from "./styles/index.module.less";

// 响应式顶部导航栏, React.memo防止屏幕改变时频繁渲染
export const SettingNav = React.memo(function SettingNav(props: {
  isFold: boolean;
}) {
  return props.isFold ? <TopSettingClose /> : <TopSettingOpen />;
});

// 顶部导航栏则叠
function TopSettingClose() {
  return (
    <div className={styles.icon}>
      <Trigger
        className={styles.icon}
        position="bottom"
        trigger={["click"]}
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
