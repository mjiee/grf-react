import React from "react";
import { Trigger } from "@arco-design/web-react";
import { IconMoon, IconSun } from "@arco-design/web-react/icon";
import { useGlobalConf } from "utils/index";
import styles from "./styles/index.module.less";

export function SettingTheme(props: { position: any }) {
  const { theme, setTheme } = useGlobalConf();

  const handleClick = () => {
    if (theme) setTheme(false);
    else setTheme(true);
  };

  return (
    <div className={styles["icon-wrapper"]} onClick={handleClick}>
      <Trigger
        position={props.position}
        trigger="hover"
        popup={() => <p>改变主题</p>}
      >
        {theme ? <IconSun /> : <IconMoon />}
      </Trigger>
    </div>
  );
}
